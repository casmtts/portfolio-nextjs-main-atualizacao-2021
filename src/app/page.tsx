import { AppProps } from 'next/app';
import { redirect } from 'next/navigation';

export default function RootPage() {


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
  redirect('/ptbr');
}