# Reserve Space for Ads

Reserving adequate space on your page for ads is key to minimizing layout shift. This example demonstrates various approaches to reserving space and their effects on layout stability.

## No Space Reserved

No dimensions are specified for the ad slot container. The container starts out collapsed and expands when an ad fills, causing a user-visible layout shift.

## Space Reserved

Dimensions are specified for the ad slot container. The container always occupies a constant amount of space on the page, so the layout does not shift. Blank space is visible prior to an ad being loaded.

## Space Reserved with Placeholder

Dimensions are specified for the ad slot container. The container occupies a constant amount of space on the page, so the layout does not shift. CSS is used to style the empty container to avoid blank space being visible prior to an ad being loaded.
