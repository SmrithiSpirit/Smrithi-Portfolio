import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import Index from "./pages/Index";
import ProjectDetails from "./pages/ProjectDetails";
import CaseStudyFocusMate from "./pages/CaseStudyFocusMate";
import CaseStudyCampusConnect from "./pages/CaseStudyCampusConnect";
import CaseStudySaveEasy from "./pages/CaseStudySaveEasy";



import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="/case-studies/focusmate" element={<CaseStudyFocusMate />} />
          <Route path="/case-studies/campusconnect" element={<CaseStudyCampusConnect />} />
          <Route path="/case-studies/saveeasy" element={<CaseStudySaveEasy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
