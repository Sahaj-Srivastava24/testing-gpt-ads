import Script from 'next/script'

export default function AdsenseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script 
        crossOrigin="anonymous"
        strategy="beforeInteractive" 
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3452022011371122"
      />
      {children}
    </>
  );
}
