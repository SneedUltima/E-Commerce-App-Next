import "./globals.css";
import { Providers } from "./providers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Rush Supplements",
  description: "Supplement Store",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
