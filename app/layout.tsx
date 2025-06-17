import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const geistSans = Geist({
   variable: '--font-geist-sans',
   subsets: ['latin'],
});

const geistMono = Geist_Mono({
   variable: '--font-geist-mono',
   subsets: ['latin'],
});

export const metadata: Metadata = {
   title: {
      template: '%s | Blackwood - Project Management',
      default: 'Blackwood - Project Management',
   },
   description:
      'Project management interface built with Next.js and shadcn/ui, this application allows tracking of issues, projects and teams with a modern, responsive UI.',
};

import { ThemeProvider } from '@/components/layout/theme-provider';

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
         </head>
         <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
               {children}
               <Toaster />
            </ThemeProvider>
         </body>
      </html>
   );
}
