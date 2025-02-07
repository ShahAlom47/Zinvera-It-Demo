import type { Metadata } from "next";
import "../style/globals.css";



export const metadata: Metadata = {
  title: "Zinvera IT",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`mx-auto`}
      >
        <nav className=" text-5xl text-white border-b-4 py-5   "> Zinvera IT </nav>

        {children}

      </body>
    </html>
  );
}
