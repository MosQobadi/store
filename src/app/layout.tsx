import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import ReactQueryProvider from "@/components/ReactQueryProvider";

export const metadata = {
  title: {
    default: "Store | Minimal E-Commerce",
    template: "%s | Store",
  },
  description:
    "A modern, minimal e-commerce experience built with Next.js 16, Tailwind CSS 4, and HeroUI.",
  metadataBase: new URL("https://yourstore.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="bg-background text-foreground antialiased min-h-screen flex flex-col"
      >
        <ReactQueryProvider>
          <Navbar />

          <main className="flex-1 mx-auto w-full max-w-[2500px] py-8">
            {children}
          </main>

          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
