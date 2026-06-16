import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { AppShell } from "@/components/layout/AppShell";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NurseHub® | Sistema Operacional da Nova Enfermagem Digital",
    template: "%s | NurseHub®",
  },
  description:
    "Plataforma completa para enfermagem digital. Academy, comunidade, ferramentas clínicas e muito mais.",
  keywords: [
    "enfermagem",
    "educação enfermagem",
    "saúde digital",
    "comunidade enfermagem",
    "NurseHub",
  ],
  authors: [{ name: "NurseHub" }],
  creator: "NurseHub",
  publisher: "NurseHub",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans min-h-screen bg-[#080808] text-white antialiased`}
      >
        <AppShell>{children}</AppShell>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#111111",
              border: "1px solid #1E1E1E",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
