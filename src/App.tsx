import { LanguageProvider } from "@/lib/i18n";
import { RouterProvider, useRouter } from "@/lib/router";
import { SiteShell } from "@/components/site-shell";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ProgramsPage } from "@/pages/ProgramsPage";
import { TourPage } from "@/pages/TourPage";
import { ContactPage } from "@/pages/ContactPage";

function AppContent() {
  const { path } = useRouter();
  const basePath = path.split("?")[0].split("#")[0];

  let PageComponent = HomePage;
  if (basePath === "/about" || basePath === "/about-us") {
    PageComponent = AboutPage;
  } else if (basePath === "/programs" || basePath === "/programs-rates" || basePath === "/our-programs" || basePath === "/nuestros-programas") {
    PageComponent = ProgramsPage;
  } else if (basePath === "/tour" || basePath === "/our-daycare") {
    PageComponent = TourPage;
  } else if (basePath === "/contact" || basePath === "/tour-admissions" || basePath === "/schedule-tour") {
    PageComponent = ContactPage;
  }

  return (
    <SiteShell>
      <PageComponent />
    </SiteShell>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </LanguageProvider>
  );
}
