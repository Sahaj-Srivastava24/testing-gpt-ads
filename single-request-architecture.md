## Single Request Architecture (SRA)

When you use SRA, all defined ad slots are requested from Ad Manager when the first call for an ad to display executes. Using SRA can improve your page’s loading speed and makes it possible to guarantee roadblocks. All Ad Manager creative types and line item types are supported by SRA, except Studio Dynamic ads. This is the recommended request mode.

- **Note:** Trafficking nonexistent networks using SRA causes the entire ad request to fail.
- **Enable SRA:** Include `enableSingleRequest()` in your GPT code before `enableServices()` or `display()`. This line calls all ad slots on the page at once and allows for guaranteed roadblocks.
- **Best Practice:** Create one SRA request with all ad slots to best serve guaranteed roadblocks or competitive exclusions, instead of sending SRA requests with one ad slot at a time.

## Multi-Request Mode

With a multi-request tag, each ad slot defined is sent to Ad Manager separately from the body of your content. Unlike with SRA, multi-request tags don't guarantee roadblocks or exclusions (including competitive, same advertiser, and same creative). This is the default request mode.

## Rendering Mode

GPT only supports asynchronous rendering. This allows your content and ads to load independently. Each ad renders within a space that’s reserved on the page until the ad is ready to display. This ensures that requesting and rendering ads does not block loading content.

**Read the full article here:** [Google Ad Manager Support](https://support.google.com/admanager/answer/183282?hl=en)
