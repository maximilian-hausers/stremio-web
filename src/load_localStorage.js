const { DEFAULT_STREAMING_SERVER_URL } = require('./common/CONSTANTS');

async function initialize() {
    localStorage.setItem("streaming_server_urls", JSON.stringify({
        "uid": null,
        "items": {
            [DEFAULT_STREAMING_SERVER_URL]: "2099-12-31T23:59:59.999Z"
        }
    }));
}

initialize();