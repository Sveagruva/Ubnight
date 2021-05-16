chrome.runtime.onInstalled.addListener(details => {
    if (details.reason !== chrome.runtime.OnInstalledReason.INSTALL) return;

    chrome.storage.sync.set({
        isEnabled: true,
        disabledList: ['github.com'],
        enabledList: ['www.google.com'],
        localColorSettings: {
            'www.google.com': {
                howBright: {
                    red: 1,
                }
            }
        },
        globalColorSettings: {
            makeWhiteBrighter: 0.1,
            filter: {
                red: 0,
                green: 0,
                blue: 0
            },
            howBright: {
                red: 0.7,
                green: 0.5,
                blue: 0.5
            }
        },
    }, null);
});

const messagesHandlers = {
    download_file: async (params, sender, sendResponse) => {
        const request = await fetch(params.url);
        if(request.ok)
            sendResponse({text: await request.text()});
        else
            sendResponse(null);
    }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
     messagesHandlers[request.action](request, sender, sendResponse);
     return true;
});