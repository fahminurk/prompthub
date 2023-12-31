import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Provider from "@/components/provider";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prompthub",
  description: "Discover & share AI-Powered Prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
}
