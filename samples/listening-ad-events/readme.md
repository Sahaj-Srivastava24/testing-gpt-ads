# Google Publisher Tag (GPT) Event Monitoring

The Google Publisher Tag (GPT) library allows you to register and call JavaScript functions when specific GPT-related ad events occur. This sample provides a demonstration of using the GPT event framework to monitor and report on the following events:

## Events

| Event                      | Fired When...                                       |
|----------------------------|-----------------------------------------------------|
| ImpressionViewableEvent    | An impression becomes viewable.                     |
| SlotOnLoadEvent            | A creative iframe fires its onload event.           |
| SlotRenderEndedEvent       | Creative code has been injected into an ad slot.    |
| SlotRequestedEvent         | An ad has been requested for the ad slot.           |
| SlotResponseReceivedEvent  | An ad response has been received for the ad slot.   |
| SlotVisibilityChangedEvent | The on-screen percentage of the ad slot changes.    |
