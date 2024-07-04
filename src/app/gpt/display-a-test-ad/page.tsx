"use client"

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

    function displayAd() {
      googletag.display("banner-ad");
    }

    googletag.cmd.push(defineAdSlot);
    googletag.cmd.push(displayAd);
  }, [])

  return (
    <section className="flex items-center justify-center flex-col gap-8 mt-10">
      <h1>Sample 1 - Display a test ad</h1>
      <div id="banner-ad" style={adStyles}></div>
    </section>
  )
}