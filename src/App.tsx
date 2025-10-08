
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import ConsultoriaIABarcelonaPage from "./pages/ConsultoriaIABarcelonaPage";
import ConsultoriaIACatalunyaPage from "./pages/ConsultoriaIACatalunyaPage";
import ServicesPage from "./pages/ServicesPage";
import TopNav from "@/components/TopNav";
import FormacioPage from "./pages/FormacioPage";
import ContactPage from "./pages/ContactPage";
import ManifestPage from "./pages/ManifestPage";
import ResultatsPage from "./pages/ResultatsPage";
import CasAdintonPage from "./pages/CasAdintonPage";
import CasMPServicesPage from "./pages/CasMPServicesPage";
import CasVoloteaPage from "./pages/CasVoloteaPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import CookiesPage from "./pages/CookiesPage";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HelmetProvider>
        <BrowserRouter>
          <TopNav />
          <Routes>
            <Route path="/" element={<Index />} />
            
            <Route path="/consultoria-ia-barcelona" element={<ConsultoriaIABarcelonaPage />} />
            <Route path="/consultoria-ia-catalunya" element={<ConsultoriaIACatalunyaPage />} />
            <Route path="/serveis" element={<ServicesPage />} />
            <Route path="/formacio" element={<FormacioPage />} />
            <Route path="/contacte" element={<ContactPage />} />
            <Route path="/manifest" element={<ManifestPage />} />
            <Route path="/resultats" element={<ResultatsPage />} />
            <Route path="/resultats/adinton" element={<CasAdintonPage />} />
            <Route path="/resultats/mpservices" element={<CasMPServicesPage />} />
            <Route path="/resultats/volotea" element={<CasVoloteaPage />} />
            <Route path="/politica-privacitat" element={<PrivacyPage />} />
            <Route path="/termes-servei" element={<TermsPage />} />
            <Route path="/politica-cookies" element={<CookiesPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
