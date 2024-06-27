"use client"

import { useEffect, useState } from "react"

export default function InterstitialPage() {
  const [statusText, setStatusText] = useState("Web interstitial is not supported on this page.")
  const adStyles = {
    width: "100px",
    height: "100px",
    background: "white"
  }

  useEffect(() => {
    function checkInterstitial() {
      let interstitialSlot;
        interstitialSlot = googletag.defineOutOfPageSlot(
          "/6355419/Travel/Europe/France/Paris",
          googletag.enums.OutOfPageFormat.INTERSTITIAL
        );
      return interstitialSlot;
    }

    function attachEventHandlers(interstitialSlot: any) {
      googletag.pubads().addEventListener("slotOnload", (event: any) => {
        if (interstitialSlot === event.slot) {
          document.getElementById("link")!.style.display = "block";
          setStatusText("Interstitial is loaded.")
        }
      });
    }

    function setLanguage(lang: string) {
      googletag.pubads().set("language", lang);
    }

    function registerInterstitial() {
      const interstitialSlot = checkInterstitial();
      if(interstitialSlot) {
        // We can add trigger logic here
        interstitialSlot.addService(googletag.pubads()).setConfig({
          interstitial: {
            triggers: {
              navBar: true,
              unhideWindow: true,
            },
          },
        });

        setStatusText("Interstitial is loading...")
        attachEventHandlers(interstitialSlot)
        setLanguage("en")
      }
      googletag.enableServices();
      googletag.display(interstitialSlot);
    }

    function registerStaticAd() {
      const staticAdId = "static-ad-1";
      googletag
        .defineSlot("/6355419/Travel/Europe", [100, 100], staticAdId)
        .addService(googletag.pubads());
      googletag.enableServices();
      googletag.display(staticAdId);
    }
    
    googletag.cmd.push(registerInterstitial)
    googletag.cmd.push(registerStaticAd)
  }, [])

  return (
    <section className="flex items-center justify-center flex-col gap-8 mt-10">
      <h1>Sample 2 - Display both static and interstitial ads</h1>
      <div id="static-ad-1" style={adStyles} />
      <div className="content">
        <span id="status">{statusText}</span>
        <p>
          <a id="link" href="https://www.example.com/">TRIGGER INTERSTITIAL</a>
        </p>
        <p>
            {/* You can prevent specific links from triggering GPT-managed web
            interstials by adding a data-google-interstitial="false" attribute to
            the anchor element or any ancestor of the anchor element. */}
          <a data-google-interstitial="false" href="https://www.example.com/">
            This link will never trigger an interstitial
          </a>
        </p>
      </div>
    </section>
  )
}