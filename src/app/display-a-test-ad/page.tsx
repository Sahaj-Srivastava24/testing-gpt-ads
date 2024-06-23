import { useEffect } from "react"

export default function TestAd() {
  const adStyles = {
    width: "300px",
    height: "250px",
  }

  useEffect(() => {
    function defineAdSlot() {
      googletag.defineSlot(
        "/6355419/Travel/Europe/France/Paris",
        [300, 250],
        "banner-ad"
      )
      .addService(googletag.pubads());
      googletag.enableServices();
    }

    googletag.cmd.push(defineAdSlot);
  })

  return (
    <div>
      <h1>This is a test ad</h1>
      <div id="banner-ad" style={adStyles}></div>
    </div>
  )
}