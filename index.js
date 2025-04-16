const fs = require('fs');

module.exports = {
    blocks: {
        embed: {
            shortcuts: {
                parsers: ["markdown"],
                start: "{% embed",
                end: "%}"
            },
            process: function(blk) {
                const block = {
                    body: blk.body,
                    args: blk.args,
                    kwargs: blk.kwargs
                };

                let url = '';
                
                // 尝试从不同位置获取 URL
                if (block.kwargs && block.kwargs.url) {
                    if (typeof block.kwargs.url === 'string') {
                        url = block.kwargs.url;
                    } else if (block.kwargs.url && typeof block.kwargs.url === 'object') {
                        url = block.kwargs.url.toString();
                    }
                } else if (block.body) {
                    url = block.body.trim();
                } else if (block.args && block.args.length > 0) {
                    url = block.args[0];
                }

                if (!url) {
                    return '<p><strong>Missing URL in embed block.</strong></p>';
                }

                const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&?]+)/);
                if (!match) {
                    return `<p><a href="${url}" target="_blank">${url}</a></p>`;
                }

                const videoId = match[1];
                const embedUrl = `https://www.youtube.com/embed/${videoId}`;

                return `
                    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
                        <iframe 
                            src="${embedUrl}" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
                        </iframe>
                    </div>
                `;
            }
        }
    }
};

console.log("✅ video-embed plugin loaded!");
