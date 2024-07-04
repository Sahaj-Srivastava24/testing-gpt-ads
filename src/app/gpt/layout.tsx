import Script from 'next/script'
import Head from 'next/head'

export default function GPTLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script strategy="beforeInteractive" src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" />
      {children}
    </>
  );
}
