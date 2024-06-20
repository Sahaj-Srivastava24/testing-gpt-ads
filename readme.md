# Web Interstitials

### [Web Interstitials](https://support.google.com/admanager/answer/9840201?authuser=9)
### [Less Intrusive Web Interstitials](https://developers.google.com/search/blog/2016/08/helping-users-easily-access-content-on)

## Triggers

Web interstitials can be triggered when a user:
- Navigates to a page.
- Unhides a tab/window (for example, when they revisit a tab/window after going to another tab/window, revisit a tab/window after unlocking the device screen, or maximize a window after minimizing it).
- Clicks the browser's navigation bar (desktop only).

Web interstitials respect the frequency cap set by the publisher, even if a user triggers multiple actions that can display an interstitial.

## GPT Web Interstitials

| Action                                               | Trigger          | Status  | Respect Frequency Cap |
|------------------------------------------------------|------------------|---------|-----------------------|
| Navigating away from the page in response to a click | N/A              | Enabled | No                    |
| Clicking on the browser navigation bar (Desktop only)| navBar           | Disabled| Yes                   |
| Hiding and then returning to the page                | unhideWindow     | Disabled| Yes                   |

### [Minimize Layout Shift](https://developers.google.com/publisher-tag/guides/minimize-layout-shift?authuser=9)
