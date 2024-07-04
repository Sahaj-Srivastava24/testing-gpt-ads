"use client"

export default function TestAd() {
  const adStyles = {
    width: "728px",
    height: "90px",
    display: "inline-block",
  }

  return (
    <section className="flex items-center justify-center flex-col gap-8 mt-10">
      <h1>Adsense manual ad</h1>
      {`You'll need to use a registered host here to see the ads. (local.quizzop.com)
      Other wise you'll get a 403 - Forbidden on the network call.
      We'll have a manual 728x90 ad here:`}
      <ins
        className="adsbygoogle"
        style={adStyles}
        data-ad-client="ca-pub-3452022011371122"
        data-ad-slot="7744382820"
      />
    </section>
  )
}