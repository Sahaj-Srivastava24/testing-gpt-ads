# Master/Companion Creative Sets in Roadblocks

If the order in which creatives appear for a roadblock line item is important, you can define master/companion creative sets to control which creative appears first in your content.

- **Master Creative:** Always appears first.
- **Companion Creatives:** Follow the master creative and never serve without it.
- **Reporting:** A single impression is counted for the roadblock line item when a master/companion creative set serves, rather than an impression for each creative.

In a creative set, there can be one master creative and up to eight companion creatives.

## How to Display Companions

1. **Optional:** Master creatives can be served on pages even where slots are not available for all companion creatives. For all available slots that match the roadblock, Ad Manager gives priority to companion creatives over creatives from other creative sets or line items.
2. **At Least One:** A master creative will only be served if at least one companion creative can be served alongside it.
3. **All:** Only a complete master/companion creative set will be served.

## Understand Sequential Ad Request Processing

- **Sequential Processing:** The ad server processes ad requests from a webpage or mobile app sequentially, in the order in which the requests are received. Even with SRA, the sequence for ad request processing is defined by the order of the `googletag.defineSlot()` functions in your tagging code.
- **Non-SRA:** The master creative must fill the first ad slot that matches the line item targeting. If a previously defined ad slot matches the line item targeting but doesn't match the master creative size, or if another higher-priority line item serves, the entire roadblock will not be delivered.

## Rendering Options

- **Asynchronous and Synchronous Rendering:** These styles affect how creatives are displayed but do not affect which line items are selected by the ad server.
- **Single Request Architecture (SRA):** Required for guaranteed roadblocks. SRA informs the ad server of all ad slots at the initial request, ensuring the "Display companions" setting is honored. Without SRA, the "Display companions" setting is ignored.

## Multiple Ad Slots of the Same Size

Each creative in a line item can only serve once on a page, so a separate creative needs to be uploaded in Ad Manager for each roadblock ad slot.

- **Example:** If you have two 300x250 ad slots on your page, you need to upload two 300x250 creatives because a single 300x250 creative cannot serve to both ad slots.

## Priority of Companions

Once a roadblock line item delivers to an ad slot, the remaining roadblock creatives are given priority over other line items, even those with a higher priority value than the roadblock line item, for all subsequent matching ad slots on the page.


**Read the full article here:** [Google Ad Manager Support](https://support.google.com/admanager/answer/2666929?hl=en)
