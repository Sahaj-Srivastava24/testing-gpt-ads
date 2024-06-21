# Roadblocking in Google Ad Manager

Roadblocking serves several creatives from a line item together on the same webpage.

Roadblocks are set up within line items. They can be set up to work with all of the creatives in the line item, or to work with master/companion creative sets, where a master creative is always delivered first.

Roadblocks don't prevent multiple line items from being served to a webpage.

For example, let's say you set up a roadblock for a line item with three creatives and the line item is then served on a webpage that has five ad slots. All three creatives from the roadblocked line item are delivered, as well as two more creatives from other line items.

## Guaranteed Roadblocks

Guaranteed roadblocks are roadblocks where Ad Manager guarantees that multiple creatives will be served together on a page.

Guaranteed roadblocks only work with Google Publisher Tags in single-request mode. With these tags, all of the creatives for a webpage are requested at once, so Ad Manager can select groups of creatives and serve them together.

### Activate Guaranteed Roadblocks

Guaranteed roadblocks need to be activated for each network by an administrator.

## Why Can't Ad Manager Guarantee All Roadblocks?

When Ad Manager receives an ad request from Google Publisher Tag in any mode other than single-request mode, there's no way to guarantee that there will be subsequent requests from the same webpage. In these cases, Ad Manager serves the first creative in the roadblock. If additional requests come in, Ad Manager gives priority to other creatives from within the roadblock.

Line items with the "Display creatives" settings set to "All" are treated as if they were set to deliver "As many as possible" when Google Publisher Tag is not in single-request mode or if creative-level targeting is applied.

## Important

If you've set a frequency cap for a line item, Ad Manager considers each delivery of the line item as a single view toward the frequency cap, even if multiple creatives are delivered together. This is true for all roadblock types, even if multiple impressions are counted for reporting purposes.
