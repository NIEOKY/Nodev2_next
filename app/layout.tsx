import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nodev | Consultoría de Inteligencia Artificial",
  description:
    "Integramos inteligencia artificial en tu negocio. Consultoría especializada en IA, automatización y desarrollo a medida.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
        <Script
          id="apointica-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,o){
                w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
                var s=d.createElement('script');s.async=1;
                s.src='https://spotted-bobcat-51.convex.site/api/widget/loader.js';
                d.head.appendChild(s);
              })(window,document,'apointica');
              apointica('init',{token:'wt_222ae02005735d7c87f8ecc9d7185e66149e766b50b87428'});
            `,
          }}
        />
      </body>
    </html>
  );
}
