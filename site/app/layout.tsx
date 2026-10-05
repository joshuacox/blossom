import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Blossom Solver & CLI Guide | Merriam-Webster Blossom Word Game Utility',
  description: 'Interactive solver, scoring breakdown, and complete documentation for the Blossom Word Game CLI utility and Merriam-Webster daily puzzle solver.',
  keywords: ['blossom word game', 'merriam webster blossom', 'word game solver', 'pangram finder', 'blossom cli'],
  authors: [{ name: 'Joshua Cox' }],
  openGraph: {
    title: 'Blossom Solver & Documentation',
    description: 'Master the Merriam-Webster Blossom Word Game with CLI tools, optimal bonus petal scoring, and pangram detection.',
    type: 'website',
  },
  other: {
    'google-adsense-account': 'ca-pub-8973108060277483',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="google-adsense-account" content="ca-pub-8973108060277483" />
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L1H2CLH4R3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-L1H2CLH4R3');
          `}
        </Script>
        {/* Google AdSense script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8973108060277483"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-rose-500/30 selection:text-rose-200">
        {children}
      </body>
    </html>
  );
}
