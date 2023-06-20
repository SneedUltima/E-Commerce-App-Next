import "./globals.css";
import { Providers } from "./providers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Rush Supplements",
  description: "Supplement Store",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Toaster />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
