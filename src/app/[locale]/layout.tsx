import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import notFound from '../not-found';

export const metadata: Metadata = {
  title: {
    default: 'Calil Sousa Mattos — Software Developer',
    template: '%s | Calil Sousa Mattos',
  },
  description: 'Portfólio de Calil Sousa Mattos: desenvolvimento full stack, aplicações web, mobile e práticas DevSecOps.',
  authors: [{ name: 'Calil Sousa Mattos' }],
  creator: 'Calil Sousa Mattos',
  openGraph: {
    type: 'website',
    title: 'Calil Sousa Mattos — Software Developer',
    description: 'Desenvolvimento full stack, mobile e DevSecOps.',
    siteName: 'Calil Sousa Mattos',
  },
  robots: { index: true, follow: true },
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
