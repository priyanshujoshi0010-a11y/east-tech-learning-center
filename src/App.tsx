import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Admissions from "./pages/Admissions";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
   {/* 🔝 Top Black Flex Bar (Responsive) */}
<div className="bg-black text-white text-sm py-2 px-4 flex flex-col md:flex-row md:justify-between md:items-center text-center gap-1 md:gap-0">
  
  {/* Left: Email */}
  <div className="flex justify-center items-center gap-1">
    🌐{" "}
    <a
      href="mailto:easytechlearningcenter@gmail.com"
      className="hover:underline break-all"
    >
     E-Mail : easytechlearningcenter@gmail.com
    </a>
  </div>

  {/* Center: Welcome Text */}
  <div className="text-yellow-400 font-semibold text-base tracking-wide animate-pulse order-first md:order-none">
    ✨ Welcome to Easy Tech Learning Center ✨
  </div>

  {/* Right: Phone */}
  <div className="flex justify-center items-center gap-1">
    ☎️{" "}
    <a href="tel:+918894066639" className="hover:underline">
      +91 8894066639
    </a>
  </div>
</div>


        {/* 🌐 Main Layout with Routes */}
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
