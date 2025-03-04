import type { Metadata } from 'next';
import './[locale]/globals.css';

export const metadata: Metadata = {
  title: 'CALIL SOUSA MATTOS Website Portfolio',
  description: 'CALIL SOUSA MATTOS Website Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}