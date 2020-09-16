// chrome.runtime.onConnect.addListener(function(port) {
//     if(port.name == "ubnight"){
//         port.onMessage.addListener(function(obj) {
//             if (obj.type == "css"){
//                 chrome.tabs.insertCSS(port.sender.tab.id, {
//                     code: obj.css
//                 });
//             }
//         });
//     }
// });

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.contentScriptQuery == 'fetchUrl') {
        // WARNING: SECURITY PROBLEM - a malicious web page may abuse
        // the message handler to get access to arbitrary cross-origin
        // resources.
        fetch(request.url)
            .then(response => response.text())
            .then(text => sendResponse(text))
            .catch(error => console.error("ну всё пizdec" + error));
        return true;
      }
});



chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason == "install") {
        let workinghere;
        workinghere = {};
        chrome.storage.sync.set({"workinghere": workinghere}, function(){});
        chrome.storage.sync.set({"working": true}, function(){});

        let settings;
        settings = {
            "mwb": 0.1,
            "power": 1,
            "filter": {
                "red": 0,
                "green": 0,
                "blue": 0
            },
            "hb": {
                "red": 1,
                "green": 1,
                "blue": 1
            }
        };
        chrome.storage.sync.set({"settings": settings}, function(){});

        let timetable;
        timetable = {
            "active": false,
            "points": [{
                    "power": 1,
                    "time": 120
                },{
                    "power": 0,
                    "time": 420
                },{
                    "power": 0,
                    "time": 900
                },{
                    "power": 1,
                    "time": 1260
                }
            ]
        };
        chrome.storage.sync.set({"timetable": timetable}, function(){});
    }
});