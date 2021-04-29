/// <reference path="chrome.intellisense.js" />
"use strict";
//originally created by sveagruva

(function(){
    document.querySelector("html").setAttribute("loaded_ubnight", "false");
    let div = document.createElement('div');
    div.setAttribute('id', 'darkScreen_ubnight');    
    document.querySelector('html').appendChild(div);
}());

chrome.storage.sync.get(['working', 'workinghere', 'settings', 'timetable'], function(result) {
    if((result.workinghere[window.location.hostname] != undefined && !result.workinghere[window.location.hostname]) || (result.workinghere[window.location.hostname] == undefined && !result.working)){
        document.getElementById("darkScreen_ubnight").remove();
        document.querySelector("html").removeAttribute("loaded_ubnight");
    }else{
        init(result);
    }
});

var fast = false;

window.addEventListener("load", function(){
    fast = true;
});

const init = result =>{
    const regexColorsCss = /#(?:[a-f\d]{3}){1,2}\b|(rgb\((((25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*?,\s*?){2}(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*?)?\))|(rgba\(((25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*?,\s*?){2}(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*?,\s*(0?\.\d*|0(\.\d*)?|1)?\))|hsl\(\s*0*(?:360|3[0-5]\d|[12]?\d?\d)\s*(?:,\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%\s*){2}\)|(rgba?)(\d+(\.\d+)?%?)(\.\d+)|hsla\(\s*0*(?:360|3[0-5]\d|[12]?\d?\d)\s*(?:,\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%\s*){2}\s*0*(?:1|0(?:\.\d+)?)\s*\)/ig;
    const regexColorsNames = /(?<!(-|#|\.))\bblack(?!(-|\.))\b|(?<!(-|#|\.))\bsilver(?!(-|\.))\b|(?<!(-|#|\.))\bgray(?!(-|\.))\b|(?<!(-|#|\.))\bwhite(?!(-|\.))\b|(?<!(-|#|\.))\bmaroon(?!(-|\.))\b|(?<!(-|#|\.))\bred(?!(-|\.))\b|(?<!(-|#|\.))\bpurple(?!(-|\.))\b|(?<!(-|#|\.))\bfuchsia(?!(-|\.))\b|(?<!(-|#|\.))\bgreen(?!(-|\.))\b|(?<!(-|#|\.))\blime(?!(-|\.))\b|(?<!(-|#|\.))\bolive(?!(-|\.))\b|(?<!(-|#|\.))\byellow(?!(-|\.))\b|(?<!(-|#|\.))\bnavy(?!(-|\.))\b|(?<!(-|#|\.))\bblue(?!(-|\.))\b|(?<!(-|#|\.))\bteal(?!(-|\.))\b|(?<!(-|#|\.))\baqua(?!(-|\.))\b|(?<!(-|#|\.))\borange(?!(-|\.))\b|(?<!(-|#|\.))\baliceblue(?!(-|\.))\b|(?<!(-|#|\.))\bantiquewhite(?!(-|\.))\b|(?<!(-|#|\.))\baquamarine(?!(-|\.))\b|(?<!(-|#|\.))\bazure(?!(-|\.))\b|(?<!(-|#|\.))\bbeige(?!(-|\.))\b|(?<!(-|#|\.))\bbisque(?!(-|\.))\b|(?<!(-|#|\.))\bblanchedalmond(?!(-|\.))\b|(?<!(-|#|\.))\bblueviolet(?!(-|\.))\b|(?<!(-|#|\.))\bbrown(?!(-|\.))\b|(?<!(-|#|\.))\bburlywood(?!(-|\.))\b|(?<!(-|#|\.))\bcadetblue(?!(-|\.))\b|(?<!(-|#|\.))\bchartreuse(?!(-|\.))\b|(?<!(-|#|\.))\bchocolate(?!(-|\.))\b|(?<!(-|#|\.))\bcoral(?!(-|\.))\b|(?<!(-|#|\.))\bcornflowerblue(?!(-|\.))\b|(?<!(-|#|\.))\bcornsilk(?!(-|\.))\b|(?<!(-|#|\.))\bcrimson(?!(-|\.))\b|(?<!(-|#|\.))\bcyan(?!(-|\.))\b|(?<!(-|#|\.))\bdarkblue(?!(-|\.))\b|(?<!(-|#|\.))\bdarkcyan(?!(-|\.))\b|(?<!(-|#|\.))\bdarkgoldenrod(?!(-|\.))\b|(?<!(-|#|\.))\bdarkgray(?!(-|\.))\b|(?<!(-|#|\.))\bdarkgrey(?!(-|\.))\b|(?<!(-|#|\.))\bdarkgreen(?!(-|\.))\b|(?<!(-|#|\.))\bdarkkhaki(?!(-|\.))\b|(?<!(-|#|\.))\bdarkmagenta(?!(-|\.))\b|(?<!(-|#|\.))\bdarkolivegreen(?!(-|\.))\b|(?<!(-|#|\.))\bdarkorange(?!(-|\.))\b|(?<!(-|#|\.))\bdarkorchid(?!(-|\.))\b|(?<!(-|#|\.))\bdarkred(?!(-|\.))\b|(?<!(-|#|\.))\bdarksalmon(?!(-|\.))\b|(?<!(-|#|\.))\bdarkseagreen(?!(-|\.))\b|(?<!(-|#|\.))\bdarkslateblue(?!(-|\.))\b|(?<!(-|#|\.))\bdarkslategray(?!(-|\.))\b|(?<!(-|#|\.))\bdarkslategrey(?!(-|\.))\b|(?<!(-|#|\.))\bdarkturquoise(?!(-|\.))\b|(?<!(-|#|\.))\bdarkviolet(?!(-|\.))\b|(?<!(-|#|\.))\bdeeppink(?!(-|\.))\b|(?<!(-|#|\.))\bdeepskyblue(?!(-|\.))\b|(?<!(-|#|\.))\bdimgray(?!(-|\.))\b|(?<!(-|#|\.))\bdimgrey(?!(-|\.))\b|(?<!(-|#|\.))\bdodgerblue(?!(-|\.))\b|(?<!(-|#|\.))\bfirebrick(?!(-|\.))\b|(?<!(-|#|\.))\bfloralwhite(?!(-|\.))\b|(?<!(-|#|\.))\bforestgreen(?!(-|\.))\b|(?<!(-|#|\.))\bgainsboro(?!(-|\.))\b|(?<!(-|#|\.))\bghostwhite(?!(-|\.))\b|(?<!(-|#|\.))\bgold(?!(-|\.))\b|(?<!(-|#|\.))\bgoldenrod(?!(-|\.))\b|(?<!(-|#|\.))\bgreenyellow(?!(-|\.))\b|(?<!(-|#|\.))\bgrey(?!(-|\.))\b|(?<!(-|#|\.))\bhoneydew(?!(-|\.))\b|(?<!(-|#|\.))\bhotpink(?!(-|\.))\b|(?<!(-|#|\.))\bindianred(?!(-|\.))\b|(?<!(-|#|\.))\bindigo(?!(-|\.))\b|(?<!(-|#|\.))\bivory(?!(-|\.))\b|(?<!(-|#|\.))\bkhaki(?!(-|\.))\b|(?<!(-|#|\.))\blavender(?!(-|\.))\b|(?<!(-|#|\.))\blavenderblush(?!(-|\.))\b|(?<!(-|#|\.))\blawngreen(?!(-|\.))\b|(?<!(-|#|\.))\blemonchiffon(?!(-|\.))\b|(?<!(-|#|\.))\blightblue(?!(-|\.))\b|(?<!(-|#|\.))\blightcoral(?!(-|\.))\b|(?<!(-|#|\.))\blightcyan(?!(-|\.))\b|(?<!(-|#|\.))\blightgoldenrodyellow(?!(-|\.))\b|(?<!(-|#|\.))\blightgray(?!(-|\.))\b|(?<!(-|#|\.))\blightgreen(?!(-|\.))\b|(?<!(-|#|\.))\blightgrey(?!(-|\.))\b|(?<!(-|#|\.))\blightpink(?!(-|\.))\b|(?<!(-|#|\.))\blightsalmon(?!(-|\.))\b|(?<!(-|#|\.))\blightseagreen(?!(-|\.))\b|(?<!(-|#|\.))\blightskyblue(?!(-|\.))\b|(?<!(-|#|\.))\blightslategray(?!(-|\.))\b|(?<!(-|#|\.))\blightslategrey(?!(-|\.))\b|(?<!(-|#|\.))\blightsteelblue(?!(-|\.))\b|(?<!(-|#|\.))\blightyellow(?!(-|\.))\b|(?<!(-|#|\.))\blimegreen(?!(-|\.))\b|(?<!(-|#|\.))\blinen(?!(-|\.))\b|(?<!(-|#|\.))\bmagenta(?!(-|\.))\b|(?<!(-|#|\.))\bmediumaquamarine(?!(-|\.))\b|(?<!(-|#|\.))\bmediumblue(?!(-|\.))\b|(?<!(-|#|\.))\bmediumorchid(?!(-|\.))\b|(?<!(-|#|\.))\bmediumpurple(?!(-|\.))\b|(?<!(-|#|\.))\bmediumseagreen(?!(-|\.))\b|(?<!(-|#|\.))\bmediumslateblue(?!(-|\.))\b|(?<!(-|#|\.))\bmediumspringgreen(?!(-|\.))\b|(?<!(-|#|\.))\bmediumturquoise(?!(-|\.))\b|(?<!(-|#|\.))\bmediumvioletred(?!(-|\.))\b|(?<!(-|#|\.))\bmidnightblue(?!(-|\.))\b|(?<!(-|#|\.))\bmintcream(?!(-|\.))\b|(?<!(-|#|\.))\bmistyrose(?!(-|\.))\b|(?<!(-|#|\.))\bmoccasin(?!(-|\.))\b|(?<!(-|#|\.))\bnavajowhite(?!(-|\.))\b|(?<!(-|#|\.))\boldlace(?!(-|\.))\b|(?<!(-|#|\.))\bolivedrab(?!(-|\.))\b|(?<!(-|#|\.))\borangered(?!(-|\.))\b|(?<!(-|#|\.))\borchid(?!(-|\.))\b|(?<!(-|#|\.))\bpalegoldenrod(?!(-|\.))\b|(?<!(-|#|\.))\bpalegreen(?!(-|\.))\b|(?<!(-|#|\.))\bpaleturquoise(?!(-|\.))\b|(?<!(-|#|\.))\bpalevioletred(?!(-|\.))\b|(?<!(-|#|\.))\bpapayawhip(?!(-|\.))\b|(?<!(-|#|\.))\bpeachpuff(?!(-|\.))\b|(?<!(-|#|\.))\bperu(?!(-|\.))\b|(?<!(-|#|\.))\bpink(?!(-|\.))\b|(?<!(-|#|\.))\bplum(?!(-|\.))\b|(?<!(-|#|\.))\bpowderblue(?!(-|\.))\b|(?<!(-|#|\.))\brosybrown(?!(-|\.))\b|(?<!(-|#|\.))\broyalblue(?!(-|\.))\b|(?<!(-|#|\.))\bsaddlebrown(?!(-|\.))\b|(?<!(-|#|\.))\bsalmon(?!(-|\.))\b|(?<!(-|#|\.))\bsandybrown(?!(-|\.))\b|(?<!(-|#|\.))\bseagreen(?!(-|\.))\b|(?<!(-|#|\.))\bseashell(?!(-|\.))\b|(?<!(-|#|\.))\bsienna(?!(-|\.))\b|(?<!(-|#|\.))\bskyblue(?!(-|\.))\b|(?<!(-|#|\.))\bslateblue(?!(-|\.))\b|(?<!(-|#|\.))\bslategray(?!(-|\.))\b|(?<!(-|#|\.))\bslategrey(?!(-|\.))\b|(?<!(-|#|\.))\bsnow(?!(-|\.))\b|(?<!(-|#|\.))\bspringgreen(?!(-|\.))\b|(?<!(-|#|\.))\bsteelblue(?!(-|\.))\b|(?<!(-|#|\.))\btan(?!(-|\.))\b|(?<!(-|#|\.))\bthistle(?!(-|\.))\b|(?<!(-|#|\.))\btomato(?!(-|\.))\b|(?<!(-|#|\.))\bturquoise(?!(-|\.))\b|(?<!(-|#|\.))\bviolet(?!(-|\.))\b|(?<!(-|#|\.))\bwheat(?!(-|\.))\b|(?<!(-|#|\.))\bwhitesmoke(?!(-|\.))\b|(?<!(-|#|\.))\byellowgreen(?!(-|\.))\b|(?<!(-|#|\.))\brebeccapurple(?!(-|\.))\b/gi;
    const regexRelativesUrls = /(url\(|url\(")(\/|\.\.).+?(\)|"\))/gi;
    const regexCssRules = /(?<={).[^{]+?(?=})/gs;
    const regexTestRGBA = /rgba|initial|inherit|var/;
    
    var whiteupper = result.settings.mwb;
    var power;
    if(result.timetable.active){
        let today = new Date();
        var time = today.getHours() * 60 + today.getMinutes();
        let index = 0;
        result.timetable.points.forEach((e, indexf) => {
            if(e.time > time){
                index = indexf;
            }
        });
        let timeDifference;
        let powerIncrement;
        let passed;
        let powerStartPoint = result.timetable.points[index].power;
        if(index == 0){
            timeDifference = result.timetable.points[index].time + (1440 - result.timetable.points[result.timetable.points.length - 1].time);
            powerIncrement = result.timetable.points[index].power - result.timetable.points[result.timetable.points.length - 1].power;
            if(time > result.timetable.points[result.timetable.points.length - 1].time){
                passed = time - result.timetable.points[result.timetable.points.length - 1].time;
            }else{
                passed = (1440 - result.timetable.points[result.timetable.points.length - 1]) + time;
            }
        }else{
            timeDifference = result.timetable.points[index].time - result.timetable.points[index - 1].time;
            powerIncrement = result.timetable.points[index].power - result.timetable.points[index - 1].power;
            passed = time - result.timetable.points[index].time;
        }

        power = powerStartPoint + powerIncrement*(passed/timeDifference);
    }else{
        power = result.settings.power;
    }

    if(power == 0){
        document.getElementById("darkScreen_ubnight").remove();
        document.querySelector("html").removeAttribute("loaded_ubnight");
        return;
    }

    var rm = result.settings.hb.red;
    var gm = result.settings.hb.green;
    var bm = result.settings.hb.blue;

    var filR = result.settings.filter.red;
    var filG = result.settings.filter.green;
    var filB = result.settings.filter.blue;
    
    const calcBrightness = (r,g,b) => {
        return r * rm + g * gm + b * bm;
    }

    document.addEventListener("DOMContentLoaded", function(){
        document.querySelector("html").setAttribute("loaded_ubnight", "false");
        if(document.getElementById("darkScreen_ubnight") != null) return;
        let div = document.createElement('div');
        div.setAttribute('id', 'darkScreen_ubnight');
        document.querySelector('body').appendChild(div);
    });

    const maxBrightness = calcBrightness(255,255,255);

    const linkElmHandler = (url, elm) => {
        if(!(elm.getAttribute("rel") == "stylesheet" || elm.getAttribute("as") == "style")) return;
        
        let request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onerror = function(e) {
            chrome.runtime.sendMessage({contentScriptQuery: 'fetchUrl', url: url},
                response => {
                    if(elm.getAttribute("as") != "script"){
                        addToSelfAndDelete(makeURLsAbsolute(StyleReincarnation(response), elm), elm);
                        elm.remove();
                    }
                }
            );
        };

        request.onreadystatechange = function () {
            if(!(request.readyState === XMLHttpRequest.DONE && request.status === 200)) return;
            if(elm.getAttribute("as") == "script"){
                let style = document.createElement('script');
                style.type = 'application/javascript';
                style.textContent = makeURLsAbsolute(StyleReincarnation(request.responseText), elm);
                style.setAttribute("class", "ubnightRevers");
                insertAfter(elm, style);
                elm.remove();
            }else if (request.getResponseHeader('Content-Type').indexOf("text/css") != -1){
                addToSelfAndDelete(makeURLsAbsolute(StyleReincarnation(request.responseText), elm), elm);
                // port.postMessage({type: "css", css: makeURLsAbsolute(StyleReincarnation(request.responseText), elm)});
                elm.remove();
            }
        }
        request.send();
    }
    
    function onload(){
        ChangeAllStyles();
    
        // default styles
        let style = document.createElement('style');style.type = 'text/css';style.media = 'screen';
        style.textContent = StyleReincarnation(`a:-webkit-any-link:active{color:red}button:disabled,input[type=button i]:disabled,input[type=file i]:disabled::-webkit-file-upload-button,input[type=reset i]:disabled,input[type=submit i]:disabled,keygen:disabled,optgroup:disabled,option:disabled,select:disabled,select[disabled]>option{color:#6d6d6d}::-webkit-input-placeholder{color:#a9a9a9}button,input[type=button i],input[type=file i]::-webkit-file-upload-button,input[type=reset i],input[type=submit i]{color:#000;border:2px outset #f0f0f0;background-color:#f0f0f0}input[type=color i]{background-color:#f0f0f0}html{background-color:#fff;color:#000}body{color: inherit;}body:-webkit-full-page-media{background-color:#000}input{background-color:#fff;color:#000}textarea{background-color:#fff;color:#000}input:-webkit-autofill,select:-webkit-autofill,textarea:-webkit-autofill{background-color:#faffbd!important;color:#000!important}input[type=range i]{color:#909090}input[type=color i]::-webkit-color-swatch{background-color:#000;border:1px solid #777}input[type=color i][list]::-webkit-color-swatch{border-color:#000}input::-webkit-calendar-picker-indicator:hover{background-color:#eee}select{color:#000;background-color:#fff}select:-internal-list-box{border:1px inset grey}select:-internal-list-box option:checked:disabled,select:-internal-list-box:disabled option:checked{color:grey!important}meter::-webkit-meter-bar{background:linear-gradient(to bottom,#ddd,#eee 20%,#ccc 45%,#ccc 55%,#ddd)}meter::-webkit-meter-optimum-value{background:linear-gradient(to bottom,#ad7,#cea 20%,#7a3 45%,#7a3 55%,#ad7)}meter::-webkit-meter-suboptimum-value{background:linear-gradient(to bottom,#fe7,#ffc 20%,#db3 45%,#db3 55%,#fe7)}meter::-webkit-meter-even-less-good-value{background:linear-gradient(to bottom,#f77,#fcc 20%,#d44 45%,#d44 55%,#f77)}progress::-webkit-progress-bar{background-color:grey}progress::-webkit-progress-value{background-color:green}mark{background-color:#ff0}dialog{background:#fff;color:#000}dialog::backdrop{background:rgba(0,0,0,.1)}`);
        style.setAttribute("class", "ubnightRevers");
        document.head.insertBefore(style, document.querySelector("head>*:first-child"));
        // default 
    
        document.addEventListener("DOMNodeInserted", function(e){
            checkInlinesChildrens(e.target);
    
            if(e.target.tagName === "STYLE" && e.target.className.indexOf("ubnightRevers")){
                setTimeout(function(){
                    // addToSelfAndDelete(StyleReincarnation(e.target.textContent), e.target);
                    e.target.textContent = StyleReincarnation(e.target.textContent);
                    e.target.setAttribute("class", "ubnightRevers");
                }, 100);
            }
    
            if(e.target.tagName === "LINK"){
                linkElmHandler(e.target.getAttribute("href"), e.target);
            }
        }, false);
    
        setTimeout(function(){
            darkScreen(false);
            document.querySelector("html").removeAttribute("loaded_ubnight");
        }, 200);
    }

    const checkInlinesChildrens = elm => {
        if(!(elm && (elm.nodeType === 1 || elm.nodeType == 11))) return;
        checkAndChangeInlines(elm);
    
        if (elm.hasChildNodes()) {
            elm.childNodes.forEach(child => {
                checkInlinesChildrens(child);
            });
        }
    }
    
    
    
    const checkAndChangeInlines = elm => {
        try{
            elm.setAttribute("fill", StyleReincarnation(elm.getAttribute("fill")));
        }catch(ex){};
        
        if(elm == null || elm.style.cssText == null) return;
        elm.setAttribute("style", StyleReincarnation(elm.style.cssText));
    }
    
    
    const ChangeAllStyles = () => {
        //checking all inline styles
        checkAndChangeInlines(document.querySelector("body"));
        document.querySelectorAll("body *").forEach(function(elm){
            checkAndChangeInlines(elm);
        });
        //checking inline styles
    
        document.querySelectorAll('link').forEach(function(elm){
            linkElmHandler(elm.getAttribute("href"), elm);
        });
    
        document.querySelectorAll('style').forEach(function(elm){
            if(elm.textContent == ""){
                if(elm.sheet == null) return;
                let style = "";
                Array.from(elm.sheet.rules).forEach(element => {
                    style += StyleReincarnation(element.cssText);
                });
                addToSelfAndDelete(style, elm);
                elm.remove();
            }else{
                elm.textContent = StyleReincarnation(elm.textContent);
                elm.setAttribute("class", "ubnightRevers");
            }
            // addToSelfAndDelete();
        });
    }
    
    const makeURLsAbsolute = (text, linkStyle) => {
        const urlRoot = linkStyle.getAttribute("href").slice(0, linkStyle.getAttribute("href").lastIndexOf("/") + 1);
        let urlStart, url, myArray;
        let styles = "";
        let fakeEnd = 0;
    
    
        while((myArray = regexRelativesUrls.exec(text)) !== null){
            styles += text.substring(fakeEnd, regexRelativesUrls.lastIndex - myArray[0].length);
            url = myArray[0].slice(4).slice(0,-1);
            if(url.indexOf('"') === 0){
                url = url.slice(1);
                if(url.indexOf('"') === (url.length - 1)){
                    url = url.slice(0, -1);
                }
            }
    
            if(url.slice(0,3) == "../"){
                urlStart = urlRoot;
                while(url.slice(0,3) == "../"){
                    urlStart = urlStart.slice(0, -1);
                    urlStart = urlStart.slice(0, urlStart.lastIndexOf("/") + 1)
                    url = url.slice(3);
                }
                styles += "url(" + urlStart + url + ")";
            }else{
                styles += myArray[0];
            }
    
    
            fakeEnd = regexRelativesUrls.lastIndex;
        }
    
        styles += text.substring(fakeEnd, text.length);
    
        return clearUnsedRules(styles);
    }
    
    const StyleReincarnation = text => {
        let styles = "";
        var myArray;
        let fakeEnd = 0;
        while ((myArray = regexColorsCss.exec(text)) !== null) {
            styles += text.substring(fakeEnd, regexColorsCss.lastIndex - myArray[0].length);
            styles += colorTransform(myArray[0]);
            fakeEnd = regexColorsCss.lastIndex;
        }
        styles += text.substring(fakeEnd);
    
    
        text = styles;
        styles = "";
        fakeEnd = 0;
    
        while ((myArray = regexColorsNames.exec(text)) !== null) {
            styles += text.substring(fakeEnd, regexColorsNames.lastIndex - myArray[0].length);
            styles += colorTransform("#" + NameToHexArray[myArray[0].toLowerCase()]);
            fakeEnd = regexColorsNames.lastIndex;




        }
        styles += text.substring(fakeEnd);
    
        return styles;
    }
    
    const clearUnsedRules = styles => {
        return styles;
        let retur = "";
        var myArray;
        let styls;
        let fakeEnd = 0;
        while ((myArray = regexCssRules.exec(styles)) !== null) {
            retur += styles.substring(fakeEnd, regexCssRules.lastIndex - myArray[0].length);
            styls = myArray[0].split(';');
            styls.forEach(element => {
                if(regexTestRGBA.test(element)){
                    retur += element + ";";
                }
                regexTestRGBA.lastIndex = 0;
            });
        }
        retur += styles.substring(fakeEnd);
        regexCssRules.lastIndex = 0;
    
         // clean up unsed rules. I mean delete them it kill another rules even if it empty
        return retur;
    }
    
    function hsla2rgb(hsla){
        let colors = hsla.split(",");
        let RGB = hslToRgb(parseInt(colors[0].slice(5).indexOf("%") == -1 ? colors[0].slice(5).slice(0,-1) : colors[0].slice(5))/100, parseInt(colors[1].indexOf("%") == -1 ? colors[1].slice(0, -1) : colors[1])/100, parseInt(colors[2].indexOf("%") == -1 ? colors[2].slice(0, -1) : colors[2])/100);
        return "rgba(" + RGB[0]  + "," + RGB[1]  +  "," + RGB[2] + "," + colors[3].slice(0,-1) + ")";
    }
    
    function hsl2rgbNotStructured(hsl){
        let colors = hsl.split(",");
        let RGB = hslToRgb(parseInt(colors[0].slice(5).indexOf("%") == -1 ? colors[0].slice(5).slice(0,-1) : colors[0].slice(5))/100, parseInt(colors[1].indexOf("%") == -1 ? colors[1].slice(0, -1) : colors[1])/100, parseInt(colors[2].indexOf("%") == -1 ? colors[2].slice(0, -1) : colors[2])/100);
        return "rgb(" + RGB[0]  + "," + RGB[1]  +  "," + RGB[2] + ")";
    }
    
    
    function hex2rgb (hex) {
        if (hex.charAt(0) === '#') {
            hex = hex.substr(1);
        }
        if ((hex.length < 2) || (hex.length > 6)) {
            throw "can't convert hex to rgb: " + hex;
        }
        var values = hex.split(''),
            r,
            g,
            b;
    
        if (hex.length === 2) {
            r = parseInt(values[0].toString() + values[1].toString(), 16);
            g = r;
            b = r;
        } else if (hex.length === 3) {
            r = parseInt(values[0].toString() + values[0].toString(), 16);
            g = parseInt(values[1].toString() + values[1].toString(), 16);
            b = parseInt(values[2].toString() + values[2].toString(), 16);
        } else if (hex.length === 6) {
            r = parseInt(values[0].toString() + values[1].toString(), 16);
            g = parseInt(values[2].toString() + values[3].toString(), 16);
            b = parseInt(values[4].toString() + values[5].toString(), 16);
        } else {
            throw "can't convert hex to rgb: " + hex;
        }
    
        return "rgb(" + r + "," + g + "," + b+ ")";
    }
    
    const addToSelfAndDelete = (text, self) => {
        let style = document.createElement('style');
        style.type = 'text/css';
        style.media = 'screen';
        style.textContent = text;
        style.setAttribute("class", "ubnightRevers");
        insertAfter(self, style);
        // self.remove();
    }
    
    function verifyColor(color){
        if(typeof(color) != "string") throw 'not string';
        if(color.slice(0,4) == "rgba" && color.split(",")[3] == 0) throw "not visible" + color;
        if(color.slice(0,1) == "#") return hex2rgb(color);
        if(color.slice(0,4) == "hsl(") return hsl2rgbNotStructured(color);
        if(color.slice(0,5) == "hsla(") return hsla2rgb(color);
        if((color.slice(0,4) != "rgb(" && color.slice(0,4) != "rgba") || color.slice(-1) != ")") throw 'not rgb or rgba' + color;
        return color;
    }
    
    function colorTransform(color){
        try{
            color = verifyColor(color);
        }catch(ex){
            console.error(ex);
            return;
        }
    
        color = color.replace(/\s+/g, '');
        let colors = color.split(",");
        let red = parseInt(colors[0].slice(4));
        let green = parseInt(colors[1]);
        let blue = parseInt(colors[2]);
        let alpha = 1;
        if(color.slice(0,4) == "rgba"){
            alpha = colors[3].slice(0, -1);
            red = parseInt(colors[0].slice(5));
        }
    
    
        let brightness = calcBrightness(red, green, blue);
        let invertedLigness = 1 - (brightness/maxBrightness) + (brightness/maxBrightness)*whiteupper;
        if(power != 1){
            invertedLigness = maxBrightness * (((brightness/maxBrightness) + (brightness/maxBrightness)*whiteupper) + power*(invertedLigness - ((brightness/maxBrightness) + (brightness/maxBrightness)*whiteupper)));
        }else{
            invertedLigness = maxBrightness*invertedLigness;
        }
    
        if(red != 0 || green != 0 || blue != 0){
            // Math.min(red, green, blue);
            red = (red/brightness) * invertedLigness;
            green = (green/brightness) * invertedLigness;
            blue = (blue/brightness) * invertedLigness;
        }else{
            red = green = blue = invertedLigness/3;
        }

        red -= filR * red;
        green -= filG * green;
        blue -= filB * blue;
    
        return "rgba(" + Math.round(red)  + "," + Math.round(green)  +  "," + Math.round(blue) + "," + alpha + ")";
    }
    
    function hslToRgb(h, s, l){
        let r, g, b;
    
        if(s == 0){
            r = g = b = l;
        }else{
            function hue2rgb(p, q, t){
                if(t < 0) t += 1;
                if(t > 1) t -= 1;
                if(t < 1/6) return p + (q - p) * 6 * t;
                if(t < 1/2) return q;
                if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            }
    
            let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            let p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }
    
        return [r * 255, g * 255, b * 255];
    }
    
    const darkScreen = onORoff => {
        if(onORoff){
            document.getElementById("darkScreen_ubnight").style.display = "block";
        }else{
            document.getElementById("darkScreen_ubnight").style.display = "none";
        }
    }
    
    function insertAfter(el, newEl) {
        el.parentNode.insertBefore(newEl, el.nextSibling);
    }
    
    var NameToHexArray = {"black": "000000","silver": "c0c0c0","gray": "808080","white": "ffffff","maroon": "800000","red": "ff0000","purple": "800080","fuchsia": "ff00ff","green": "008000","lime": "00ff00","olive": "808000","yellow": "ffff00","navy": "000080","blue": "0000ff","teal": "008080","aqua": "00ffff","orange": "ffa500","aliceblue": "f0f8ff","antiquewhite": "faebd7","aquamarine": "7fffd4","azure": "f0ffff","beige": "f5f5dc","bisque": "ffe4c4","blanchedalmond": "ffebcd","blueviolet": "8a2be2","brown": "a52a2a","burlywood": "deb887","cadetblue": "5f9ea0","chartreuse": "7fff00","chocolate": "d2691e","coral": "ff7f50","cornflowerblue": "6495ed","cornsilk": "fff8dc","crimson": "dc143c","cyan": "00ffff","darkblue": "00008b","darkcyan": "008b8b","darkgoldenrod": "b8860b","darkgray": "a9a9a9","darkgrey": "a9a9a9","darkgreen": "006400","darkkhaki": "bdb76b","darkmagenta": "8b008b","darkolivegreen": "556b2f","darkorange": "ff8c00","darkorchid": "9932cc","darkred": "8b0000","darksalmon": "e9967a","darkseagreen": "8fbc8f","darkslateblue": "483d8b","darkslategray": "2f4f4f","darkslategrey": "2f4f4f","darkturquoise": "00ced1","darkviolet": "9400d3","deeppink": "ff1493","deepskyblue": "00bfff","dimgray": "696969","dimgrey": "696969","dodgerblue": "1e90ff","firebrick": "b22222","floralwhite": "fffaf0","forestgreen": "228b22","gainsboro": "dcdcdc","ghostwhite": "f8f8ff","gold": "ffd700","goldenrod": "daa520","greenyellow": "adff2f","grey": "808080","honeydew": "f0fff0","hotpink": "ff69b4","indianred": "cd5c5c","indigo": "4b0082","ivory": "fffff0","khaki": "f0e68c","lavender": "e6e6fa","lavenderblush": "fff0f5","lawngreen": "7cfc00","lemonchiffon": "fffacd","lightblue": "add8e6","lightcoral": "f08080","lightcyan": "e0ffff","lightgoldenrodyellow": "fafad2","lightgray": "d3d3d3","lightgreen": "90ee90","lightgrey": "d3d3d3","lightpink": "ffb6c1","lightsalmon": "ffa07a","lightseagreen": "20b2aa","lightskyblue": "87cefa","lightslategray": "778899","lightslategrey": "778899","lightsteelblue": "b0c4de","lightyellow": "ffffe0","limegreen": "32cd32","linen": "faf0e6","magenta": "ff00ff","mediumaquamarine": "66cdaa","mediumblue": "0000cd","mediumorchid": "ba55d3","mediumpurple": "9370db","mediumseagreen": "3cb371","mediumslateblue": "7b68ee","mediumspringgreen": "00fa9a", "mediumturquoise": "48d1cc","mediumvioletred": "c71585", "midnightblue": "191970","mintcream": "f5fffa","mistyrose": "ffe4e1","moccasin": "ffe4b5","navajowhite": "ffdead","oldlace": "fdf5e6","olivedrab": "6b8e23","orangered": "ff4500","orchid": "da70d6","palegoldenrod": "eee8aa","palegreen": "98fb98","paleturquoise": "afeeee","palevioletred": "db7093","papayawhip": "ffefd5","peachpuff": "ffdab9","peru": "cd853f","pink": "ffc0cb","plum": "dda0dd","powderblue": "b0e0e6","rosybrown": "bc8f8f","royalblue": "4169e1","saddlebrown": "8b4513","salmon": "fa8072","sandybrown": "f4a460","seagreen": "2e8b57","seashell": "fff5ee","sienna": "a0522d","skyblue": "87ceeb","slateblue": "6a5acd","slategray": "708090","slategrey": "708090","snow": "fffafa","springgreen": "00ff7f","steelblue": "4682b4","tan": "d2b48c","thistle": "d8bfd8","tomato": "ff6347","turquoise": "40e0d0","violet": "ee82ee","wheat": "f5deb3","whitesmoke": "f5f5f5","yellowgreen": "9acd32","rebeccapurple": "663399"};

    if(fast){
        onload();
    }else{
        window.addEventListener("load", function(){
            onload();
        });
    }
}
