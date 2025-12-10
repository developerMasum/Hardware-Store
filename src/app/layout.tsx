import Providers from "@/Providers/Provider";
import "./globals.css";

export const metadata = {
  title: "Your App",
  description: "Description here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className="min-h-screen bg-zinc-900 font-sans">
          {children}
          {/* <Toaster /> */}
        </body>
      </html>
    </Providers>
  );
}
