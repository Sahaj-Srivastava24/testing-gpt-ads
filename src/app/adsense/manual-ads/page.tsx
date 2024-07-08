"use client";

import { useEffect } from "react";

export default function TestAd() {


  useEffect(() => {

    function addLogs(log: string) {
      console.log(log);
      const logEntry = document.createElement("p");
      logEntry.textContent = log;
      document.getElementById("log-container")?.appendChild(logEntry);
    }

    const insElement = document.querySelector("ins.adsbygoogle");
    const logContainer = document.createElement("div");
    logContainer.id = "log-container";
    document.body.appendChild(logContainer);

    const mutationCallback = (mutationsList: MutationRecord[]) => {
      mutationsList.forEach((mutation) => {
        if (mutation.type === "attributes") {
          const attributeName = mutation.attributeName;
          const oldValue = mutation.oldValue;
          const newValue = insElement?.getAttribute(attributeName);
          addLogs(`Attribute ${attributeName} changed from ${oldValue} to ${newValue}`);
        }
      });
    };

    const observer = new MutationObserver(mutationCallback);
    if (insElement) {
      observer.observe(insElement, {
        attributes: true,
        attributeFilter: ["data-ad-format", "data-ad-status"],
        attributeOldValue: true,
      });
    }

    addLogs("Mutation Observer is now watching for changes to data-ad-format and data-ad-status attributes.");

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
      document.body.removeChild(logContainer);
    };
  }, []);

  const adStyles = {
    width: "728px",
    height: "90px",
    display: "inline-block",
  };

  return (
    <section className="flex items-center justify-center flex-col gap-8 mt-10">
      <h1>Adsense manual ad</h1>
      <p>
        {`You'll need to use a registered host here to see the ads. (local.quizzop.com)
        Otherwise you'll get a 403 - Forbidden on the network call.
        We'll have a manual 728x90 ad here:`}
      </p>
      <ins
        className="adsbygoogle"
        style={adStyles}
        data-ad-client="ca-pub-3452022011371122"
        data-ad-slot="7744382820"
        data-ad-format="auto"
      />
    </section>
  );
}
