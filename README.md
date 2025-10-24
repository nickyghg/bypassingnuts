# BypassingNuts Video Archive

A sleek video archive website for the BypassingNuts YouTube channel, featuring the same beautiful animated background and styling as the original config website.

## Features

- **Horizontal video layout** with thumbnail, title, and duration
- **Embedded video player** on detail pages
- **Animated ether-like background** with moving gradients
- **Responsive design** for all devices
- **Search functionality** by creator, name, and tags
- **Smooth animations** and hover effects

## Files Structure

- `videos.html` - Main video listing page
- `video.html` - Individual video detail page with embedded player
- `resources/js/videos.js` - Video data and functionality
- `resources/styles/videos.css` - Styling for video listing
- `resources/styles/video-detail.css` - Styling for video details

## Usage

1. Open `videos.html` to browse the video archive
2. Click "Watch Video" to view individual videos
3. Videos are embedded directly on the detail page
4. All styling matches the original config website aesthetic

## Customization

To add new videos, edit the `videos` array in `resources/js/videos.js`:

```javascript
{
    id: 7,
    name: "Your Video Title",
    creator: "BypassingNuts",
    uploaded: "2/20/2025",
    duration: "5:30",
    thumbnail: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    description: "Video description",
    tags: ["Tag1", "Tag2"],
    views: "1M",
    likes: "50K",
    colors: {
        text: "#ffffff",
        accent: "#ff0000",
        header: "#0e8a00"
    }
}
```

## Channel

Visit the BypassingNuts YouTube channel: https://youtube.com/@bypassingnuts