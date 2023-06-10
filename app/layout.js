import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YoungLabs",
  description: "Generated by create next app by Ajaharuddin",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-[1200px] mx-auto bg-[#e5e5e5] `} >
        <Header />
        {children}
      </body>
    </html>
  );
}
