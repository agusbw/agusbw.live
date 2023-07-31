import "@/styles/globals.css";
import { Outfit } from "next/font/google";
import TopNavigation from "@/components/layout/top-navigation";
import PageFooter from "@/components/layout/page-footer";
import appConfig from "@/config/appConfig";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: `%s | ${appConfig.title}`,
    default: appConfig.title,
  },
  description: appConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
        />
        <script
          async
          src={process.env.NEXT_PUBLIC_UMAMI_URL}
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        ></script>
      </head>
      <body className={inter.className + " bg-base text-lowContrast"}>
        <TopNavigation />
        <main>{children}</main>
        <PageFooter />
      </body>
    </html>
  );
}
