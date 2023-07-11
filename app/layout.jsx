import "../styles/globals.css";
import { Outfit } from "next/font/google";
import TopNavigation from "@/components/layout/top-navigation";
import PageFooter from "@/components/layout/page-footer";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Agus BW",
  description: "Nyoman Agus Budhiarta Waisnawa / Bewe's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-base text-lowContrast"}>
        <TopNavigation />
        <main>{children}</main>
        <PageFooter />
      </body>
    </html>
  );
}
