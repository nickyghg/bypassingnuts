# BypassingNuts Video Archive

This is a website for watching BypassingNuts videos (the ones i could save). It looks the same as my config website with the moving background and stuff.

## What it does

- Shows the videos with thumbnail and names
- Has a cool moving background that changes colors
- Works on your phone and computer
- Things move when you hover over them

## Files

- `videos.html` - Main page with all videos
- `video.html` - Page where you watch videos
- `resources/js/videos.js` - Has all the video info
- `resources/styles/videos.css` - Makes the main page look good
- `resources/styles/video-detail.css` - Makes the video pages look good

## Adding videos

Feel free to add new videos you have saved just edit the list in `resources/js/videos.js` and make a pull request:

```javascript
{
    id: 7,
    name: "Video Title",
    creator: "BypassingNuts",
    duration: "5:30",
    thumbnail: "put in thumbnail folder",
    videoUrl: "upload it to jumpshare and put the embed url here",
    description: "What the video is about",
    colors: {
        text: "#ffffff",
        accent: "#ff0000",
        header: "#0e8a00"
    }
}
```

## the dead channel :(

BypassingNuts YouTube: https://youtube.com/@bypassingnuts
