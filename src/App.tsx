import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CMPBanner from "./components/CMPBanner";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Refunds from "./pages/Refunds";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/uslugi" element={<Services />} />
          <Route path="/uslugi/:slug" element={<ServiceDetail />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/dziekujemy" element={<ThankYou />} />
          <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
          <Route path="/regulamin" element={<Terms />} />
          <Route path="/polityka-zwrotow" element={<Refunds />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <CMPBanner />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
