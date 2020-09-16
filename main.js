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
        // console.log(result);
        // console.log(result.workinghere[window.location.hostname]);
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

        console.log(time);
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
    
    console.log(result);

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


// var port = chrome.runtime.connect({name: "ubnight"});
// browser.runtime.connect({name: "ubnight"}).onDisconnect.addListener(function(){
//     port = chrome.runtime.connect({name: "ubnight"});
// })

// function rgbToHsl(r, g, b){
    //     r /= 255, g /= 255, b /= 255;
    //     var max = Math.max(r, g, b), min = Math.min(r, g, b);
    //     var h, s, l = (max + min) / 2;
    
    //     if(max == min){
    //         h = s = 0;
    //     }else{
    //         var d = max - min;
    //         s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    //         switch(max){
    //             case r: h = (g - b) / d + (g < b ? 6 : 0); break;
    //             case g: h = (b - r) / d + 2; break;
    //             case b: h = (r - g) / d + 4; break;
    //         }
    //         h /= 6;
    //     }
    
    //     return [h, s, l];
    // }


// var browser = (function (agent) {
//     switch (true) {
//         case agent.indexOf("edg") > -1: return "edge";
//         case agent.indexOf("opr") > -1 && !!window.opr: return "opera";
//         case agent.indexOf("chrome") > -1 && !!window.chrome: return "chrome";
//         case agent.indexOf("firefox") > -1: return "firefox";
//         case agent.indexOf("safari") > -1: return "safari";
//         default: return "other";
//     }
// })(window.navigator.userAgent.toLowerCase());

// console.log(browser);


// hsl is cool but I found my way
// let HSL = rgbToHsl(red, green, blue);
// let invertedLigness = 1 - HSL[2] + HSL[2]*whiteupper;

// if(power != 1){invertedLigness = HSL[2] + power*(invertedLigness - HSL[2]);}


// RGB = hslToRgb(HSL[0], watchIt(HSL[1] * saturationMiltiplity), invertedLigness);
// return "rgba(" + Math.round(RGB[0])  + "," + Math.round(RGB[1])  +  "," + Math.round(RGB[2]) + "," + alpha + ")";



// String.prototype.replaceRange = function (from, to, on) {
// 	return this.substring(0, from) + on + this.substring(to, this.length);
// };

// function checkIfOkToAdd(text){
//     document.querySelectorAll('style.ubnightRevers').forEach(function(elm){
//         if(elm.textContent == text) return false;
//     });
//     return true;
// }

// const addToTop = text => {
//     // if(!checkIfOkToAdd(text)) return;
//     let style = document.createElement('style');
//     style.type = 'text/css';
//     style.media = 'screen';
//     style.textContent = text;
//     style.setAttribute("class", "ubnightRevers");
//     document.head.insertBefore(style, document.querySelector("title"));
// }


// a:-webkit-any-link:active {
//     color: rgb(255, 0, 0);
// }

// input[type="button" i]:disabled, input[type="submit" i]:disabled, input[type="reset" i]:disabled,
// input[type="file" i]:disabled::-webkit-file-upload-button, button:disabled,
// select:disabled, keygen:disabled, optgroup:disabled, option:disabled,
// select[disabled]>option {
//     color: rgb(109, 109, 109);
// }

// ::-webkit-input-placeholder {
//     color: rgb(169, 169, 169);
// }

// input[type="button" i], input[type="submit" i], input[type="reset" i], input[type="file" i]::-webkit-file-upload-button, button {
//     color: rgb(0, 0, 0);
//     border: 2px outset rgb(240, 240, 240);
//     background-color: rgb(240, 240, 240);
// }

// input[type="color" i] {
//     background-color: rgb(240, 240, 240);
// }

// html{
//     background-color: #ffffff;
//     color: #000000;
// }

// body:-webkit-full-page-media {
//     background-color: rgb(0, 0, 0);
// }

// input {
//     background-color: #ffffff;
//     color: #000000;
// }

// textarea {
//     background-color: #ffffff;
//     color: #000000;
// }

// input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
//     background-color: #FAFFBD !important;
//     color: #000000 !important;
// }

// input[type="range" i] {
//     color: #909090;
// }

// input[type="color" i]::-webkit-color-swatch {
//     background-color: #000000;
//     border: 1px solid #777777;
// }

// input[type="color" i][list]::-webkit-color-swatch {
//     border-color: #000000;
// }

// input::-webkit-calendar-picker-indicator:hover {
//     background-color: #eee;
// }

// select {
//     color: #000000;
//     background-color: #ffffff;
// }

// select:-internal-list-box {
//     border: 1px inset #808080;
// }

// select:-internal-list-box:disabled option:checked,
// select:-internal-list-box option:checked:disabled {
//     color: #808080 !important;
// }

// meter::-webkit-meter-bar {
//     background: linear-gradient(to bottom, #ddd, #eee 20%, #ccc 45%, #ccc 55%, #ddd);
// }

// meter::-webkit-meter-optimum-value {
//     background: linear-gradient(to bottom, #ad7, #cea 20%, #7a3 45%, #7a3 55%, #ad7);
// }

// meter::-webkit-meter-suboptimum-value {
//     background: linear-gradient(to bottom, #fe7, #ffc 20%, #db3 45%, #db3 55%, #fe7);
// }

// meter::-webkit-meter-even-less-good-value {
//     background: linear-gradient(to bottom, #f77, #fcc 20%, #d44 45%, #d44 55%, #f77);
// }

// progress::-webkit-progress-bar {
//     background-color: #808080;
// }
// progress::-webkit-progress-value {
//     background-color: #008000;
// }

// mark {
//     background-color: #ffff00;
// }

// dialog {
//     background: #ffffff;
//     color: #000000;
// }

// dialog::backdrop {
//     background: rgba(0,0,0,0.1);
// }





        // let styles = "";

        // var styleSheets = document.styleSheets;
        // var styleSheetsLength = styleSheets.length;
        // for (var i = 0; i < styleSheetsLength; i++) {
        //     var classes = styleSheets[i].rules || styleSheets[i].cssRules;
        //     var classesLength = classes.length;
        //     for (var x = 0; x < classesLength; x++) {
        //         if (classes[x].selectorText === undefined) {
        //             continue;
        //         }

        //         styles += classes[x].cssText;
        //         // if (classes[x].selectorText == className || classes[x].selectorText.indexOf(className) >= 0) {
        //         //     if (classes[x].cssText) {
        //         //         return classes[x].cssText;
        //         //     } else {
        //         //         return classes[x].style.cssText;
        //         //     }
        //         // }
        //     }
        //     addToBottom(StyleReincarnation(styles));
        //     styles = "";
        // }




        // document.querySelectorAll('style').forEach(function(elm) {
        //     // if(elm.getAttribute("rel") != "stylesheet") return;
        //     // if(url.slice(0,1) == "/"){
        //     //     url = window.location.protocol + window.location.hostname + url;
        //     // }
        //     let request = new XMLHttpRequest();
        //     request.open('GET', elm.getAttribute("href"), true);
        //     request.send(null);
        //     request.onreadystatechange = function () {
        //         if (request.readyState === 4 && request.status === 200 && request.getResponseHeader('Content-Type') == "text/css") {
        //             addToBottom(StyleReincarnation(request.responseText));
        //         }
        //     }
        //     elm.remove();
        // });



// console.log(colorTransform("#000"), "hi");

// console.log(StyleReincarnation(`
// :root {
//     /*----------------------------------------*/
//     /* Global values
//     /*----------------------------------------*/
//     --global-max-width: 1280px;
//     --global-radius: 5px;
//     --global-radius-rounded: 50%;
  
//     /*--------------------------------------*/
//     /* Colors
//     /*--------------------------------------*/
//     /* brand colors */
//     --color-primary: #3a8cc8;
//     --color-primary-light: #4e98ce;
//     --color-primary-dark: #337eb6;
//     --color-ad-bg: #eff8fe;
//     --color-ad-bg-dark: #2d353b;
  
//     /* neutral colors */
//     --color-black: #000;
//     --color-dark: #2b2b2b;
//     --color-dark-accent: #363636;
//     --color-dark-accent-2: #484e57;
//     --color-gray-darker: #4c4c4c;
//     --color-gray-dark: #6b6b6b;
//     --color-gray: #c0c0c0;
//     --color-gray-light: #d2d2d2;
//     --color-gray-lighter: #e5e5e5;
//     --color-light-accent: #f2f2f2;
//     --color-light: #fafafa;
//     --color-white: #fff;
  
//     /* semantic colors */
//     --color-error: #fc3860;
//     --color-success: #48c774;
//     --color-warning: #fddd57;
//     --color-info: #249cee;
  
//     /* theme colors */
//     --color-text: var(--color-dark);
//     --color-text-accent-1: var(--color-dark-accent);
//     --color-text-accent-2: var(--color-gray-darker);
//     --color-text-accent-3: var(--color-gray-dark);
//     --color-text-reverse: var(--color-light);
  
//     --color-bg: var(--color-white);
//     --color-bg-accent-1: var(--color-light);
//     --color-bg-accent-2: var(--color-light-accent);
//     --color-bg-accent-3: var(--color-gray-lighter);
//     --color-bg-reverse: var(--color-dark);
  
//     --color-border: #eff1f3;
//     --color-border-dark: #484e57;
//     --color-border-ad: #c7e8f2;
//     --color-border-ad-dark: #2e3e49;
  
//     /*--------------------------------------*/
//     /* Typography
//     /*--------------------------------------*/
//     --font-family-sans-serif: Inter, sans-serif;
//     --font-family-monospace: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
//     --font-size-base: 1rem;
//     --font-variant-base: no-common-ligatures;
//     --font-weight-normal: 400;
//     --font-weight-medium: 500;
//     --font-weight-semibold: 600;
//     --font-weight-bold: 700;
//     --font-weight-extrabold: 800;
//     --font-weight-black: 900;
//     --line-height-base: 1.6;
  
//     /*--------------------------------------*/
//     /* Transitions
//     /*--------------------------------------*/
//     --transition-timing: ease-in-out;
//     --transition-duration: 300ms;
//     --transition-duration-lg: 500ms;
//     --transition-duration-xl: 700ms;
  
//     /*--------------------------------------*/
//     /* Spacing
//     /*--------------------------------------*/
//     --gap: 1em;
//     --gap-rem: 1rem;
//     --gap-xs: calc(var(--gap) * 0.25);
//     --gap-sm: calc(var(--gap) * 0.5);
//     --gap-lg: calc(var(--gap) * 2);
//     --gap-xl: calc(var(--gap) * 4);
  
//     /*--------------------------------------*/
//     /* Breakpoints
//     /*--------------------------------------*/
//     --breakpoint-sm: 36em;
//     --breakpoint-md: 48em;
//     --breakpoint-lg: 62em;
//     --breakpoint-xl: 75em;
  
//     /*--------------------------------------*/
//     /* Grid-system
//     /*--------------------------------------*/
//     --gutter-width: 1rem;
//     --outer-margin: 1rem;
//     --gutter-compensation: calc(var(--gutter-width) * -1);
//     --half-gutter-width: calc(var(--gutter-width) * 0.5);
//     --container-sm: calc(var(--breakpoint-sm) + var(--gutter-width));
//     --container-md: calc(var(--breakpoint-md) + var(--gutter-width));
//     --container-lg: calc(var(--breakpoint-lg) + var(--gutter-width));
//     --container-xl: calc(var(--breakpoint-xl) + var(--gutter-width));
//   }
  
//   /*----------------------------------------*/
//   /* Media Queries
//   /*----------------------------------------*/
//   @custom-media --viewport-sm only screen and (min-width: 36em);
//   @custom-media --viewport-md only screen and (min-width: 48em);
//   @custom-media --viewport-lg only screen and (min-width: 62em);
//   @custom-media --viewport-xl only screen and (min-width: 75em);
  

// `));
// const allChange = () => {
        // var color = window.getComputedStyle(document.getElementById("hi"), null).getPropertyValue("background-color")
    
    // const bricons = 990000;
    
    
    // alert(typeof(color));
    
    // color = "242,174,63";
    
//     document.querySelectorAll('*').forEach(function(elm) {
//         console.log(elm);
//         console.log(window.getComputedStyle(elm, null).getPropertyValue("background-color"));
//         elm.style.backgroundColor = colorTransform(window.getComputedStyle(elm, null).getPropertyValue("background-color"), bias);
//         elm.style.color = colorTransform(window.getComputedStyle(elm, null).getPropertyValue("color"), bias);
//     }); 


    // document.getElementById("hi1").style.backgroundColor = colorTransform("rgb(0,0,255)", bias);
    // document.getElementById("hi2").style.backgroundColor = colorTransform("rgb(0,0,0)", bias);
    // document.getElementById("hi3").style.backgroundColor = colorTransform("rgb(0, 139, 139)", bias);
    // document.getElementById("hi4").style.backgroundColor = colorTransform("rgb(222, 184, 135)", bias);
    // document.getElementById("hi5").style.backgroundColor = colorTransform("rgb(0, 255, 255)", bias);
    // document.getElementById("hi6").style.backgroundColor = colorTransform("rgb(255, 255, 255)", bias);
    

// }

// (function(){
//     allChange();
// })();

// document.addEventListener("DOMContentLoaded", allChange);


// function MultiRegExp(par) {
//     var regex;
//     if (par.source !== undefined){
//         regex = par;
//     } else {
//         var exp = par;
//         var opts = "";
//         if (par.substring(0, 1) == "/") {
//             var l = par.lastIndexOf("/");
//             opts = par.substring(l + 1, par.length);
//             exp = par.substring(1, l);
//         }
//         regex = new RegExp(exp, opts);
//     }
//     var expandSource = function (braces, indexer) {
//         let ret = '';
//         for (var i = 0; i < braces.length; i++) {
//             if (braces[i].type == 'raw') {
//                 ret += '(' + braces[i].text + ')';
//                 indexer.next();
//             } else if (braces[i].type == 'brace' && braces[i].containsCapture) {
//                 ret += braces[i].pre + expandSource(braces[i].children, indexer) + braces[i].post;
//             } else if (braces[i].type == 'brace' && !braces[i].isCapture) {
//                 ret += '(' + braces[i].text.substring(braces[i].pre.length, braces[i].text.length - braces[i].post.length) + ')';
//                 indexer.next();
//             } else if (braces[i].type == 'brace') {
//                 ret += braces[i].text;
//                 indexer.next(true);
//             } else {
//                 ret += braces[i].text;
//             }
//         }
//         return ret;
//     }

//     var captureScan = function(braces, parent) {
//         var containsCapture = false;
//         for (var i = 0; i < braces.length; i++) {
//             captureScan(braces[i].children, braces[i]);
//             braces[i].isCapture = braces[i].text.indexOf('(?:') != 0;
//             if (braces[i].isCapture) {
//                 containsCapture = true;
//             }
//             if (braces[i].isCapture && braces[i].containsCapture) {
//                 throw "nested captures not permitted, use (?:...) where capture is not intended";
//             }
//         }
//         if (parent) {
//             parent.containsCapture = containsCapture;
//         }
//     }

//     var fillGaps = function(braces, text) {
//         var pre = /^\((\?.)?/.exec(text);
//         pre = pre == null ? '' : pre[0];
//         var post = /\)$/.exec(text);
//         post = post == null ? '' : post[0];
//         var i = 0;
//         if (braces.length > 0) {
//             fillGaps(braces[0].children, braces[0].text);
//         }
//         if (braces.length > 0 && braces[0].pos > pre.length) {
//             braces.splice(0, 0, {type: 'raw', pos: pre.length, length: braces[0].pos, text: text.substring(pre.length, braces[0].pos)});
//             i++;
//         }
//         for(i++ ;i < braces.length; i++) {
//             fillGaps(braces[i].children, braces[i].text);
//             if (braces[i].pos > braces[i-1].pos + braces[i-1].length) {
//                 braces.splice(i, 0, {type:'raw', pos: braces[i-1].pos + braces[i-1].length,
//                                      length: braces[i].pos - (braces[i-1].pos + braces[i-1].length),
//                                      text: text.substring(braces[i-1].pos + braces[i-1].length,
//                                                           braces[i].pos)});
//                 i++;
//             }
//         }
//         if (braces.length == 0)
//         {
//             braces.push({type:'raw', pos: pre.length, length: text.length - post.length - pre.length, text: text.substring(pre.length, text.length - post.length)});
//         } else if (braces[braces.length - 1].pos + braces[braces.length - 1].length < text.length - post.length) { 
//             var pos = braces[braces.length - 1].pos + braces[braces.length - 1].length;
//             var txt = text.substring(pos, text.length - post.length);
//             braces.push({type:'raw', pos: pos, length: txt.length, text: txt});
//         }
//     }

//     var GetBraces = function(text) {
//         var ret = [];
//         var shift = 0;
//         do {
//             var brace = GetBrace(text);
//             if (brace == null) {
//                 break;
//             } else {
//                 text = text.substring(brace.pos + brace.length);
//                 var del = brace.pos + brace.length;
//                 brace.pos += shift;
//                 shift += del;
//                 ret.push(brace);
//             }
//         } while (brace != null);
//         return ret;
//     }

//     var GetBrace = function(text) {
//         var ret = {pos: -1, length: 0, text: '', children: [], type: 'brace'};
//         var openExp = /^(?:\\.|[^\)\\\(])*\(\?./;
//         var pre = 3;
//         var post = 1;
//         var m = openExp.exec(text);
//         if (m == null) {
//             m = /^(?:\\.|[^\)\\\(])*\(/.exec(text);
//             pre = 1;
//         }
//         if (m != null) {
//             ret.pos = m[0].length - pre;
//             ret.children = GetBraces(text.substring(m[0].length));
//             for (var i = 0; i < ret.children.length; i++) {
//                 ret.children[i].pos += pre;
//             }
//             var closeExp = /^(?:\\.|[^\\\(\)])*\)/;
//             var closeExpAlt = /^(?:\\.|[^\\\(\)])*\)\?/;
//             var from = ret.children.length <= 0 ? ret.pos + pre : 
//                 ret.children[ret.children.length-1].pos + 
//                     ret.children[ret.children.length-1].length + 
//                     m[0].length - pre;
//             var m2 = closeExp.exec(text.substring(from));
//             var m3 = closeExpAlt.exec(text.substring(from));
//             if (m3 !== null && m3.length - 1 <= m2.length) {
//                 m2 = m3;
//                 post = 2;
//             }
//             if (m2 == null) {
//                 return null;
//             } else {
//                 ret.length = m2[0].length + from - ret.pos;
//                 ret.text = text.substring(ret.pos, ret.pos + ret.length);
//             }
//         }
//         if (ret.text == '()' || /^\(\?.\)$/.test(ret.text)) {
//             throw 'empty braces not permitted';
//         }
//         if (ret.pos != -1) {
//             ret.pre = ret.text.substring(0, pre);
//             ret.post = ret.text.substring(ret.text.length - post, ret.text.length);
//         }
//         return ret.pos == -1 ? null : ret;
//     }

//     var fixOrs = function (braces_W_raw) {
//         var orFind = /^(\\.|[^\\|])*\|/;
//         for (var i = 0; i < braces_W_raw.length; i++) {
//             if (braces_W_raw[i].type == 'raw') {
//                 var fullText = braces_W_raw[i].text;
//                 var m = orFind.exec(fullText);
//                 if (m != null) {
//                     var or = { type: 'or', pos: m[0].length - 1 + braces_W_raw[i].pos, length: 1, text: '|' };
//                     var raw = { type: 'raw', pos: m[0].length + braces_W_raw[i].pos,
//                         length: fullText.length - m[0].length,
//                         text: fullText.substring(m[0].length, fullText.length)
//                     };
//                     braces_W_raw[i].text = fullText.substring(0, m[0].length - 1);
//                     braces_W_raw[i].length = braces_W_raw[i].text.length;
//                     braces_W_raw.splice(i + 1, 0, or, raw);
//                     i += 1;
//                 }
//             } else if (braces_W_raw[i].type == 'brace') {
//                 fixOrs(braces_W_raw[i].children, braces_W_raw[i].text);
//             }
//         }
//     }

//     var source = regex.source;
//     var braces = GetBraces(source);
//     captureScan(braces);
//     fillGaps(braces, source);
//     fixOrs(braces);
//     var indexer = {i: 1, next: 
//                        function (realPoint) { 
//                            if (realPoint) {
//                                this.points.push(this.i);
//                            }
//                            return this.i++;          
//                        }, points: []};
//     source = expandSource(braces, indexer);
//     this.dataPoints = indexer.points;
//     var options = (regex.ignoreCase ? "i" : "") + (regex.global ? "g" : "") + (regex.multiline ? "m" : "");
//     this.regex = new RegExp(source, options);
//     this.exec = function (text) {
//         var m = this.regex.exec(text);
//         if (m == null) {
//             return {};
//         }
//         var ret = {};
//         var ch = 0;
//         for (var i = 1; i < m.length; i++) {
//             if (m[i] !== null && m[i] !== undefined) {
//                 var pos = this.dataPoints.indexOf(i);
//                 if (pos != -1) {
//                     ret[pos] = {index: ch, text: m[i]};
//                 }
//                 ch += m[i].length;
//             }
//         }
//         for (var i = 0; i < this.dataPoints.length; i++) {
//             if (ret[i] === undefined) {
//                 ret[i] = null;
//             }
//         }
//         return ret;
//     }
// }
