# Control Ad Loading and Refresh

The Google Publisher Tag (GPT) library's `display()` method is used to register and display an ad slot. However, there are times when it may be preferable or even necessary to separate these actions to more precisely control when ad content is loaded. For example, when working with a consent management platform or requesting ad content as the result of a user action.

## Control Ad Loading

By default, the behavior of the `display()` method is to register, request, and render ad content into an ad slot. The automatic requesting and rendering of ad content can be disabled via the `PubAdsService.disableInitialLoad()` method.

With initial load disabled, calls to `display()` will only register the ad slot. No ad content will be loaded until a second action is taken. This allows you to precisely control when ad requests are made.

## Refresh

The `PubAdsService.refresh()` method is used to populate a slot or slots with new ad content. This method can be used on slots that have yet to load any content (due to `disableInitialLoad()`), or to replace the contents of an already populated slot. However, only slots which have been registered by calling `display()` are eligible to be refreshed.

## Best Practices

When working with `refresh()`, there are some best practices that should be adhered to:

- **Don't Refresh Too Quickly:** Refreshing ad slots too quickly may cause your ad requests to be throttled. To prevent this, avoid refreshing slots more frequently than once every 30 seconds.
- **Don't Call `clear()` Unnecessarily:** When refreshing an ad slot, do not call `PubAdsService.clear()` first. This is unnecessary, since `refresh()` replaces the contents of the specified slot, regardless of whether any ad content was previously loaded. Calling `clear()` immediately before calling `refresh()` will only increase the amount of time a blank slot is visible to the user.
- **Only Refresh Viewable Ad Slots:** Using `refresh()` to replace the contents of ad slots that are never viewable can significantly lower your ActiveView rate. The `ImpressionViewableEvent` can be used to determine when an ad slot has become viewable.
