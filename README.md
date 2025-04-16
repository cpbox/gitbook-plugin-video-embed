# GitBook Video Embed Plugin

A GitBook plugin that allows you to embed videos using Liquid template syntax. Currently supports YouTube videos.

## Installation

Add the plugin to your `book.json`:

```json
{
    "plugins": ["video-embed"]
}
```

Then install the plugin:

```bash
gitbook install
```

## Usage

You can embed videos using the following syntax in your markdown files:

```liquid
{% embed url="https://www.youtube.com/watch?v=VIDEO_ID" %}
```

or simply:

```liquid
{% embed https://www.youtube.com/watch?v=VIDEO_ID %}
```

The plugin will automatically:
1. Extract the video ID from the URL
2. Create a responsive iframe embed
3. Support both youtube.com and youtu.be URLs

## Example

```liquid
{% embed url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" %}
```

This will create a responsive video embed that:
- Automatically adjusts to the container width
- Maintains a 16:9 aspect ratio
- Supports fullscreen mode
- Includes all necessary YouTube player features

## Features

- Simple and intuitive syntax
- Responsive design
- Automatic URL parsing
- Support for both long and short YouTube URLs
- Debug logging capability

## License

MIT © CPBOX 
