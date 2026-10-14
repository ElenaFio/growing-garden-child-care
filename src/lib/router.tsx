import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type AppRoute = "/" | "/about" | "/programs" | "/tour" | "/contact";

interface RouterContextType {
  path: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  path: "/",
  navigate: () => {},
});

function getInitialPath(): string {
  if (typeof window === "undefined") return "/";
  // Support both hash routing and HTML5 path
  const hash = window.location.hash.replace(/^#/, "");
  if (hash.startsWith("/")) return hash;
  const p = window.location.pathname;
  const validPrefixes = ["/", "/about", "/about-us", "/programs", "/programs-rates", "/our-programs", "/nuestros-programas", "/tour", "/tour-admissions", "/our-daycare", "/contact", "/schedule-tour"];
  if (validPrefixes.includes(p)) {
    return p + (window.location.search || "") + (window.location.hash || "");
  }
  return "/" + (window.location.search || "") + (window.location.hash || "");
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState<string>(getInitialPath);

  useEffect(() => {
    const handlePopState = () => {
      setPath(getInitialPath());
    };
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
    };
  }, []);

  const navigate = (to: string) => {
    const hashMatch = to.match(/#([^?&]+)/);
    const targetHash = hashMatch ? hashMatch[1] : null;

    if (to === path) {
      if (targetHash) {
        const el = document.getElementById(targetHash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      return;
    }

    try {
      window.history.pushState({}, "", to);
    } catch {
      // In restricted iframe environments, fallback to hash
      window.location.hash = to;
    }
    setPath(to);

    if (targetHash) {
      // Allow the DOM/component to render or settle before smooth scrolling
      setTimeout(() => {
        const el = document.getElementById(targetHash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  activeOptions?: { exact?: boolean };
  activeProps?: { className?: string };
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, children, className = "", activeProps, activeOptions, onClick, ...rest }, ref) => {
    const { path, navigate } = useRouter();
    const isExact = activeOptions?.exact ?? false;
    const currentBase = path.split("?")[0].split("#")[0];
    const targetBase = to.split("?")[0].split("#")[0];
    const isTourMatch = (targetBase === "/tour" || targetBase === "/our-daycare") && (currentBase === "/tour" || currentBase === "/our-daycare");
    const isProgramMatch = (targetBase === "/programs" || targetBase === "/our-programs" || targetBase === "/programs-rates" || targetBase === "/nuestros-programas") &&
      (currentBase === "/programs" || currentBase === "/our-programs" || currentBase === "/programs-rates" || currentBase === "/nuestros-programas");
    const isActive = isExact
      ? path === to
      : isTourMatch || isProgramMatch || currentBase === targetBase || (targetBase !== "/" && currentBase.startsWith(targetBase));

    let finalClass = className;
    if (isActive && activeProps?.className) {
      finalClass = `${finalClass} ${activeProps.className}`.trim();
    }

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) onClick(e);
      // Let standard modifier keys open new tabs if requested (Cmd/Ctrl)
      if (!e.defaultPrevented && !e.metaKey && !e.ctrlKey && !e.shiftKey && e.button === 0) {
        e.preventDefault();
        navigate(to);
      }
    };

    return (
      <a
        ref={ref}
        href={to}
        onClick={handleClick}
        className={finalClass}
        aria-current={isActive ? "page" : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }
);
Link.displayName = "Link";
