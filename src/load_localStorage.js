const { DEFAULT_STREAMING_SERVER_URL } = require('./common/CONSTANTS');

async function initialize() {
    const streamingServerUrls = localStorage.getItem("streaming_server_urls");
    if (!streamingServerUrls || !JSON.parse(streamingServerUrls).items[DEFAULT_STREAMING_SERVER_URL]) {
        localStorage.setItem("streaming_server_urls", JSON.stringify({
            "uid": null,
            "items": {
                [DEFAULT_STREAMING_SERVER_URL]: "2099-12-31T23:59:59.999Z"
            }
        }));
        window.location.reload();
    }
}

initialize();
