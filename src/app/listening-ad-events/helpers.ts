import { Dispatch, SetStateAction } from "react";

type TDetails = Record<string, any>;
type TEventListeners = Record<string, (event: any) => void>;
type THandleEvent = (message: string, event: any, details?: TDetails) => void;
type TAdSize = [width: number, height: number];
export type EventDetails = {
  slotId: string;
  details?: TDetails;
  eventMessage: string;
  timeFromRequest: number;
};

export function returnEventListeners(
  handleEvent: THandleEvent,
  setRequestedTimestamp: Dispatch<SetStateAction<TDetails>>
) {
  const eventListeners: TEventListeners = {
    /**
     * Listener for when an impression is viewable
     */
    impressionViewable: (event: any) => handleEvent('Impression has become viewable.', event),
    /**
     * Listener for when the creative iframe load event fires
     */
    slotOnload: (event: any) => handleEvent('Creative iframe load event has fired.', event),
    /**
     * Listener for when a slot has finished rendering
     */
    slotRenderEnded: (event: any) => {
      const details = {
        'Advertiser ID': event.advertiserId,
        'Campaign ID': event.campaignId,
        'Company IDs': event.companyIds,
        'Creative ID': event.creativeId,
        'Creative Template ID': event.creativeId,
        'Is backfill?': event.isBackfill,
        'Is empty?': event.isEmpty,
        'Label IDs': event.labelIds,
        'Line Item ID': event.lineItemId,
        Size: typeof event.size === 'string' ? event.size : event.size?.join('x') ?? null,
        'Slot content changed?': event.slotContentChanged,
        'Source Agnostic Creative ID': event.sourceAgnosticCreativeId,
        'Source Agnostic Line Item ID': event.sourceAgnosticLineItemId,
        'Yield Group IDs': event.yieldGroupIds,
      };
      handleEvent('Slot has finished rendering.', event, details);
    },
    /**
     * Listener for when an ad response is received
     */
    slotResponseReceived: (event: any) => handleEvent('Ad response has been received.', event),
    /**
     * Listener for when the visibility of a slot changes
     */
    slotVisibilityChanged: (event: any) => {
      const details = { 'Visible area': `${event.inViewPercentage}%` };
      handleEvent('Visibility has changed.', event, details);
    },
    /**
     * Listener for when a slot is requested
     */
    slotRequested: (event: any) => {
      const slotId = event.slot.getSlotElementId();
      setRequestedTimestamp((prev) => ({ ...prev, [slotId]: Date.now() }));
      handleEvent('Slot has been requested.', event);
    },
  }

  return eventListeners
}

export function defineStaticAdSlot(
  adUnitPath: string,
  size: TAdSize,
  divId: string
) {
  window.googletag
    .defineSlot(adUnitPath, size, divId)
    .addService(window.googletag.pubads());
}