import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata = {
  title: "To Do List",
  description: "Created By Adinda Putri",
  icons: [{ rel: "icon", url: "https://tse4.mm.bing.net/th?id=OIP.lIg5xGyDEOXN62A_-aU7XQHaHH&pid=Api&P=0&h=180"}],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
