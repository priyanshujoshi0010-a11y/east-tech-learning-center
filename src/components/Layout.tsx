import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyButtons from "./StickyButtons";
import PopupEnquiry from "./PopupEnquiry";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <StickyButtons />
      <PopupEnquiry />
    </div>
  );
};

export default Layout;
