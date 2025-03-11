"use client";
import localFont from "next/font/local";
import { Toaster, ToastBar } from "react-hot-toast";
import Sidebar from "./sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen">
          {/* Sidebar (Fixed Width) */}
          <Sidebar />

          {/* Main Content (Pushes Right) */}
          <div className="flex-1 lg:ml-60 p-6">
            {children}
          </div>
        </div>

        <Toaster>
          {(t) => (
            <ToastBar
              toast={t}
              style={{
                ...t.style,
                animation: t.visible
                  ? "custom-enter 1s ease"
                  : "custom-exit 1s ease",
              }}
            />
          )}
        </Toaster>
      </body>
    </html>
  );
}
