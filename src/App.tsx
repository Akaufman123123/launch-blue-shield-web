import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";
import Cybersecurity from "@/pages/services/Cybersecurity";
import ServerManagement from "@/pages/services/ServerManagement";
import NetworkSetup from "@/pages/services/NetworkSetup";
import DataRecovery from "@/pages/services/DataRecovery";
import ITPlanning from "@/pages/services/ITPlanning";
import WorkstationManagement from "@/pages/services/WorkstationManagement";
import PhoneSystems from "@/pages/services/PhoneSystems";
import AIMonitoring from "@/pages/services/AIMonitoring";
import DeviceManagement from "@/pages/services/DeviceManagement";
import Blog from "./pages/Blog";
import FirewallsImportance from "./pages/blog/FirewallsImportance";
import ITPlanningImportance from "./pages/blog/ITPlanningImportance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/firewalls-importance" element={<FirewallsImportance />} />
            <Route path="/blog/it-planning-importance" element={<ITPlanningImportance />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/server-management" element={<ServerManagement />} />
            <Route path="/services/network-setup" element={<NetworkSetup />} />
            <Route path="/services/data-recovery" element={<DataRecovery />} />
            <Route path="/services/it-planning" element={<ITPlanning />} />
            <Route path="/services/workstation-management" element={<WorkstationManagement />} />
            <Route path="/services/phone-systems" element={<PhoneSystems />} />
            <Route path="/services/ai-monitoring" element={<AIMonitoring />} />
            <Route path="/services/device-management" element={<DeviceManagement />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
