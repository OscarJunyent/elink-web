
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import ServicesPage from "./pages/ServicesPage";
import TopNav from "@/components/TopNav";
import FormacioPage from "./pages/FormacioPage";
import ContactPage from "./pages/ContactPage";
import ManifestPage from "./pages/ManifestPage";
import ResultatsPage from "./pages/ResultatsPage";
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
            
            <Route path="/serveis" element={<ServicesPage />} />
            <Route path="/formacio" element={<FormacioPage />} />
            <Route path="/contacte" element={<ContactPage />} />
            <Route path="/manifest" element={<ManifestPage />} />
            <Route path="/resultats" element={<ResultatsPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
