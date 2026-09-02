# BreakOut Website v34

This build refines the mobile capabilities layout, desktop hover depth, showcase carousel looping, and introduces a multisport panorama after the real application screenshots.

Key changes:
- capabilities cards use near-full mobile width with equal visual padding;
- desktop capability cards use a faster restrained pop-forward hover interaction;
- capabilities-section hockey-rink background is removed;
- showcase carousel loops continuously without a visible jump back to the first slide;
- carousel response/fade timings are faster;
- multisport section uses one panoramic, diagonally layered field graphic for hockey, football, basketball, and tennis;
- Supabase/account configuration remains unchanged.


## Download button

The website no longer hard-codes a release build in its primary download flow. `script-v35.js` reads the current enclosure URL from the stable Sparkle feed configured in `config-v26.js` (`updateFeedURL`). Publish the new versioned ZIP first, then replace `macos/stable/appcast.xml`; all website download buttons will resolve the new ZIP automatically. The `downloadURL` value is only a fallback if the feed cannot be read.

## v44 mobile readability
- Square hotkey controls with larger labels on phones.
- Larger Composer/Playlist row numbers, event names, and durations.
- Larger Flexible Export checkmarks and labels.
- Keeps the v43 two-column mobile capabilities layout and dynamic appcast download flow.

## v77
- analytics admin UI now translates tracked element/event identifiers into Russian labels;
- testimonial star ratings removed and text space reflowed;
- all working-screen carousel images now render at full opacity without edge dimming on desktop and mobile.
