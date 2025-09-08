import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import AppSidebar from '@/components/layout/app-sidebar';
import AppHeader from '@/components/layout/header';
import MobileBottomNav from '@/components/layout/mobile-bottom-nav';

export const metadata: Metadata = {
  title: 'LocaliQ',
  description: 'A cross-platform marketplace where vendors create stores and list products by category.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <SidebarInset className="flex flex-col flex-1">
              <AppHeader />
              <main className="flex-1 p-4 sm:p-6 lg:p-8 !pt-0">{children}</main>
            </SidebarInset>
          </div>
          <MobileBottomNav />
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
