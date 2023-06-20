import "./globals.css";
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
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
