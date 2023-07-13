import "../styles/globals.css";
import { Outfit } from "next/font/google";
import TopNavigation from "@/components/layout/top-navigation";
import PageFooter from "@/components/layout/page-footer";
import appConfig from "@/config/appConfig";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: appConfig.title,
  description: appConfig.description,
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
