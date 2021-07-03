//originally created by Sveagruva
"use strict";

const Html = {
    root: document.documentElement,
    head: null,
    darkScreen: document.createElement('div'),
    host: window.location.hostname,
    contentLoadingEvent: new Promise(resolve => document.addEventListener("DOMContentLoaded", resolve)),
    loadingEvent: new Promise(resolve => window.addEventListener('load', resolve)),
    correctionSheets: new Map(),
    getCorrectionSheet: (styleElm) => {
        if(!Html.correctionSheets.has(styleElm)){
            const correctionSheet = document.createElement('style');
            correctionSheet.className = "ubnightSheet";

            styleElm.after(correctionSheet);

            Html.correctionSheets.set(styleElm, correctionSheet.sheet);
        }

        return Html.correctionSheets.get(styleElm);
    },
    getResource: async elm => {
        try{
            return elm.sheet.cssRules;
        } catch (e) {
            return await new Promise(resolve => {
                const style = document.createElement('style');
                style.onload = () => {
                    const rules = style.sheet.cssRules;
                    style.remove();
                    resolve(rules);
                }


                requestFile(elm.href).then(response => {
                    style.textContent = response.text;

                    Html.head.appendChild(style);
                });
            })
        }
    },
}

//#region  Html init

Html.darkScreen.style.position = "fixed";
Html.darkScreen.style.top = "0";
Html.darkScreen.style.bottom = "0";
Html.darkScreen.style.left = "0";
Html.darkScreen.style.right = "0";
Html.darkScreen.style.zIndex = "2147483647";
Html.darkScreen.style.backgroundColor = '#000';
Html.root.appendChild(Html.darkScreen);

if(document.readyState !== 'loading')
    Html.contentLoadingEvent = true;

if(document.readyState === 'complete')
    Html.loadingEvent = true;

//#endregion

chrome.storage.sync.get(['isEnabled', 'disabledList', 'enabledList'], async settings => {
    if((settings.isEnabled || settings.enabledList.includes(Html.host)) && !settings.disabledList.includes(Html.host))
        await init();
    
    Html.darkScreen.remove();
});

const ColorManipulator = {
    calcBrightness: (r,g,b) => r * ColorManipulator.howBright.red + g * ColorManipulator.howBright.green + b * ColorManipulator.howBright.blue,
    manipulate: color => {
        if(typeof(color) === 'string')
            color = color.slice(color.startsWith('rgba') ? 5 : 4, -1).split(',');

        let red = parseFloat(color[0]),
            green = parseFloat(color[1]),
            blue = parseFloat(color[2]),
            alpha = color[3] === undefined ? 1 : parseFloat(color[3]);

        // TODO change algorithm & add filter
        let brightness = ColorManipulator.calcBrightness(red, green, blue);
        let invertedLightness = 1 - (brightness/ColorManipulator.maxBrightness) + (brightness/ColorManipulator.maxBrightness)*ColorManipulator.makeWhiteBrighter;
        invertedLightness *= ColorManipulator.maxBrightness;

        if(red !== 0 || green !== 0 || blue !== 0){
            red = (red/brightness) * invertedLightness;
            green = (green/brightness) * invertedLightness;
            blue = (blue/brightness) * invertedLightness;
        }else{
            red = green = blue = invertedLightness/3;
        }

        if(isNaN(red) || isNaN(blue) || isNaN(green)) {
            console.warn('NaN color');
            return 'rgb(255,255,255)';
        }

        return `rgba(${red},${green},${blue},${alpha})`;

        // red -= filR * red;
        // green -= filG * green;
        // blue -= filB * blue;




        // let {red, blue, green} = ColorManipulator.parseToRGB(color);
        // const brightness = ColorManipulator.calcBrightness(red, green, blue);

        // let invertedLightness = brightness/ColorManipulator.maxBrightness;
        // invertedLightness *= ColorManipulator.makeWhiteBrighter;

        // const calcPart = (all, part) => {
        //     if(all === 0) return 1;
        //     return part / all;
        // }
    
        // red =  (1 - (calcPart(brightness, red * ColorManipulator.howBright.red) * invertedLightness)) * 255;
        // green = (1 - (calcPart(brightness, green * ColorManipulator.howBright.green) * invertedLightness)) * 255;
        // blue = (1 - (calcPart(brightness, blue * ColorManipulator.howBright.blue) * invertedLightness)) * 255;




        // red -= ColorManipulator.filter.red * red;
        // green -= ColorManipulator.filter.green * green;
        // blue -= ColorManipulator.filter.blue * blue;
    },
    maxBrightness: 765,
    howBright: null,
    filter: null,
    makeWhiteBrighter: null,
    CSS: {
        regexColors: /rgba?\(((25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*?){2}(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,?\s*([01]\.?\d*?)?\)/ig,
        namesRGB: {"black":[0,0,0],"silver":[192,192,192],"gray":[128,128,128],"white":[255,255,255],"maroon":[128,0,0],"red":[255,0,0],"purple":[128,0,128],"fuchsia":[255,0,255],"green":[0,128,0],"lime":[0,255,0],"olive":[128,128,0],"yellow":[255,255,0],"navy":[0,0,128],"blue":[0,0,255],"teal":[0,128,128],"aqua":[0,255,255],"orange":[255,165,0],"aliceblue":[240,248,255],"antiquewhite":[250,235,215],"aquamarine":[127,255,212],"azure":[240,255,255],"beige":[245,245,220],"bisque":[255,228,196],"blanchedalmond":[255,235,205],"blueviolet":[138,43,226],"brown":[165,42,42],"burlywood":[222,184,135],"cadetblue":[95,158,160],"chartreuse":[127,255,0],"chocolate":[210,105,30],"coral":[255,127,80],"cornflowerblue":[100,149,237],"cornsilk":[255,248,220],"crimson":[220,20,60],"cyan":[0,255,255],"darkblue":[0,0,139],"darkcyan":[0,139,139],"darkgoldenrod":[184,134,11],"darkgray":[169,169,169],"darkgrey":[169,169,169],"darkgreen":[0,100,0],"darkkhaki":[189,183,107],"darkmagenta":[139,0,139],"darkolivegreen":[85,107,47],"darkorange":[255,140,0],"darkorchid":[153,50,204],"darkred":[139,0,0],"darksalmon":[233,150,122],"darkseagreen":[143,188,143],"darkslateblue":[72,61,139],"darkslategray":[47,79,79],"darkslategrey":[47,79,79],"darkturquoise":[0,206,209],"darkviolet":[148,0,211],"deeppink":[255,20,147],"deepskyblue":[0,191,255],"dimgray":[105,105,105],"dimgrey":[105,105,105],"dodgerblue":[30,144,255],"firebrick":[178,34,34],"floralwhite":[255,250,240],"forestgreen":[34,139,34],"gainsboro":[220,220,220],"ghostwhite":[248,248,255],"gold":[255,215,0],"goldenrod":[218,165,32],"greenyellow":[173,255,47],"grey":[128,128,128],"honeydew":[240,255,240],"hotpink":[255,105,180],"indianred":[205,92,92],"indigo":[75,0,130],"ivory":[255,255,240],"khaki":[240,230,140],"lavender":[230,230,250],"lavenderblush":[255,240,245],"lawngreen":[124,252,0],"lemonchiffon":[255,250,205],"lightblue":[173,216,230],"lightcoral":[240,128,128],"lightcyan":[224,255,255],"lightgoldenrodyellow":[250,250,210],"lightgray":[211,211,211],"lightgreen":[144,238,144],"lightgrey":[211,211,211],"lightpink":[255,182,193],"lightsalmon":[255,160,122],"lightseagreen":[32,178,170],"lightskyblue":[135,206,250],"lightslategray":[119,136,153],"lightslategrey":[119,136,153],"lightsteelblue":[176,196,222],"lightyellow":[255,255,224],"limegreen":[50,205,50],"linen":[250,240,230],"magenta":[255,0,255],"mediumaquamarine":[102,205,170],"mediumblue":[0,0,205],"mediumorchid":[186,85,211],"mediumpurple":[147,112,219],"mediumseagreen":[60,179,113],"mediumslateblue":[123,104,238],"mediumspringgreen":[0,250,154],"mediumturquoise":[72,209,204],"mediumvioletred":[199,21,133],"midnightblue":[25,25,112],"mintcream":[245,255,250],"mistyrose":[255,228,225],"moccasin":[255,228,181],"navajowhite":[255,222,173],"oldlace":[253,245,230],"olivedrab":[107,142,35],"orangered":[255,69,0],"orchid":[218,112,214],"palegoldenrod":[238,232,170],"palegreen":[152,251,152],"paleturquoise":[175,238,238],"palevioletred":[219,112,147],"papayawhip":[255,239,213],"peachpuff":[255,218,185],"peru":[205,133,63],"pink":[255,192,203],"plum":[221,160,221],"powderblue":[176,224,230],"rosybrown":[188,143,143],"royalblue":[65,105,225],"saddlebrown":[139,69,19],"salmon":[250,128,114],"sandybrown":[244,164,96],"seagreen":[46,139,87],"seashell":[255,245,238],"sienna":[160,82,45],"skyblue":[135,206,235],"slateblue":[106,90,205],"slategray":[112,128,144],"slategrey":[112,128,144],"snow":[255,250,250],"springgreen":[0,255,127],"steelblue":[70,130,180],"tan":[210,180,140],"thistle":[216,191,216],"tomato":[255,99,71],"turquoise":[64,224,208],"violet":[238,130,238],"wheat":[245,222,179],"whitesmoke":[245,245,245],"yellowgreen":[154,205,50],"rebeccapurple":[102,51,153]},
        names: null,
        namesComputedColors: {},
        colorProperties: [
            "background-image",
            "background-color",
            "border-color",
            "border-block-color",
            "border-block-end-color",
            "border-clock-start-color",
            "border-bottom-color",
            "border-image",
            "border-inline-color",
            "border-inline-end-color",
            "border-inline-start-color",
            "border-left-color",
            "border-right-color",
            "border-top-color",
            "box-shadow",
            "color",
            "column-rule-color",
            "filter",
            "list-style-image",
            "outline-color",
            "stop-color",
            "text-shadow",
            "text-decoration-color"
        ],
        transformStyleElement: async elm => {
            const styles = await Html.getResource(elm);
            const sheet = Html.getCorrectionSheet(elm);
            let counter = 0;

            for (let i = 0; i < styles.length; i++){
                const newRules = ColorManipulator.CSS.transformRule(styles[i]);
                if(newRules !== '') sheet.insertRule(newRules, counter++);
            }
        },
        transformElementStyle: async elm => {
            let style = elm.style;
            // TODO store original and converted data in dataset. find new rules and convert them if necessary

            const transformedStyles = ColorManipulator.CSS.transformStyleDeclarationColors(style, false);
            if(elm.attributes.style.textContent !== transformedStyles)
                elm.setAttribute('style', transformedStyles);
        },
        transformRule: rule => {
            let newRules = '';

            // TODO other rules
            switch(rule.constructor.name){
                case 'CSSStyleRule':
                    newRules = ColorManipulator.CSS.transformStyleDeclarationColors(rule.style);

                    if(newRules === '')
                        return newRules;
                    return rule.selectorText + '{' + newRules + '}';
                case 'CSSMediaRule':
                    for (let i = 0; i < rule.cssRules.length; i++)
                        newRules += ColorManipulator.CSS.transformRule(rule.cssRules[i]);

                    if(newRules === '')
                        return newRules;
                    return '@media ' + rule.media.mediaText + '{' + newRules + '}';
                case 'CSSSupportsRule':
                    for (let i = 0; i < rule.cssRules.length; i++)
                        newRules += ColorManipulator.CSS.transformRule(rule.cssRules[i]);

                    if(newRules === '')
                        return newRules;
                    return '@supports ' + rule.conditionText + '{' + newRules + '}';
                case 'CSSKeyframesRule':
                    for (let i = 0; i < rule.cssRules.length; i++)
                        newRules += ColorManipulator.CSS.transformStyleDeclarationColors(rule.cssRules[i].style, false);

                    if(newRules === '')
                        return newRules;
                    return '@keyframes ' + rule.name + '{' + newRules + '}';
                case 'CSSFontFaceRule':
                    return newRules;
                default:
                    // console.warn('unknown rule type: ' + rule.constructor.name, rule);
                    return newRules;
            }
        },
        transformStyleDeclarationColors: (style, doReduce = true) => {
            let transformed = '';

            const styleSet = new Set(style);
            const colorProperties = ColorManipulator.CSS.colorProperties.filter(Set.prototype.has, styleSet);
            const variables = [];

            styleSet.forEach(st => {
                if(st.startsWith('--')) variables.push(st);
            });

            // TODO invert variables

            if(!doReduce){
                const nonColorProperties = Array.from(styleSet).filter(st => !colorProperties.includes(st) && !variables.includes(st));
                nonColorProperties.forEach(property => {
                    transformed += `${property}:${style[property]};`
                });
            }

            colorProperties.forEach(colorProperty => {
                // TODO check if var(), replace fallback with rgb value
                const rule = style.getPropertyValue(colorProperty);
                let newRule = rule;
                new Set(rule.match(ColorManipulator.CSS.regexColors)).forEach(matchedColor => {
                    newRule = rule.replaceAll(matchedColor, ColorManipulator.manipulate(matchedColor));
                });
                
                // sort to ensure that combined color names come before simple (e.g. skyblue before blue)
                ColorManipulator.CSS.names.filter(name => newRule.includes(name)).sort((a, b) => a.length > b.length).forEach(
                    colorName => newRule = newRule.replaceAll(colorName, ColorManipulator.CSS.namesComputedColors[colorName]));

                if(!doReduce || rule !== newRule || ['inherit', 'initial', 'transparent', 'unset'].some(w => rule.includes(w)))
                    transformed += `${colorProperty}:${newRule};`;
            });

            return transformed;
        },
    },
};

ColorManipulator.CSS.names = Object.keys(ColorManipulator.CSS.namesRGB);

const init = async () => {
    const settings = await new Promise(resolve => chrome.storage.sync.get(['localColorSettings', 'globalColorSettings'], resolve));
    const operations = [];

    //#region  init ColorManipulator

    // TODO localSettings
    ColorManipulator.makeWhiteBrighter = settings.globalColorSettings.makeWhiteBrighter;
    ColorManipulator.howBright = settings.globalColorSettings.howBright;
    ColorManipulator.filter = settings.globalColorSettings.filter;
    ColorManipulator.maxBrightness = ColorManipulator.calcBrightness(255,255,255);

    ColorManipulator.CSS.names.forEach(name => 
        ColorManipulator.CSS.namesComputedColors[name] = ColorManipulator.manipulate(ColorManipulator.CSS.namesRGB[name]));

    //#endregion


    await Html.contentLoadingEvent;

    Html.head = document.getElementsByTagName('head')[0];

    //#region set default styles cz some sites can rely on them
    await new Promise(resolve => {
        const style = document.createElement('style');
        style.onload = resolve;

        style.textContent = 'a:-webkit-any-link:active{color:red}button:disabled,input[type=button i]:disabled,input[type=file i]:disabled::-webkit-file-upload-button,input[type=reset i]:disabled,input[type=submit i]:disabled,keygen:disabled,optgroup:disabled,option:disabled,select:disabled,select[disabled]>option{color:#6d6d6d}::-webkit-input-placeholder{color:#a9a9a9}button,input[type=button i],input[type=file i]::-webkit-file-upload-button,input[type=reset i],input[type=submit i]{color:#000;border:2px outset #f0f0f0;background-color:#f0f0f0}input[type=color i]{background-color:#f0f0f0}html{background-color:#fff;color:#000}body{color: inherit;}body:-webkit-full-page-media{background-color:#000}input{background-color:#fff;color:#000}textarea{background-color:#fff;color:#000}input:-webkit-autofill,select:-webkit-autofill,textarea:-webkit-autofill{background-color:#faffbd!important;color:#000!important}input[type=range i]{color:#909090}input[type=color i]::-webkit-color-swatch{background-color:#000;border:1px solid #777}input[type=color i][list]::-webkit-color-swatch{border-color:#000}input::-webkit-calendar-picker-indicator:hover{background-color:#eee}select{color:#000;background-color:#fff}select:-internal-list-box{border:1px inset grey}select:-internal-list-box option:checked:disabled,select:-internal-list-box:disabled option:checked{color:grey!important}meter::-webkit-meter-bar{background:linear-gradient(to bottom,#ddd,#eee 20%,#ccc 45%,#ccc 55%,#ddd)}meter::-webkit-meter-optimum-value{background:linear-gradient(to bottom,#ad7,#cea 20%,#7a3 45%,#7a3 55%,#ad7)}meter::-webkit-meter-suboptimum-value{background:linear-gradient(to bottom,#fe7,#ffc 20%,#db3 45%,#db3 55%,#fe7)}meter::-webkit-meter-even-less-good-value{background:linear-gradient(to bottom,#f77,#fcc 20%,#d44 45%,#d44 55%,#f77)}progress::-webkit-progress-bar{background-color:grey}progress::-webkit-progress-value{background-color:green}mark{background-color:#ff0}dialog{background:#fff;color:#000}dialog::backdrop{background:rgba(0,0,0,0.1)}';

        try{
            Html.head.childNodes[0].before(style);
        } catch (e) {
            Html.head.append(style);
        }
    });
    //#endregion


    // <elm style="">
    operations.push(Promise.all(Array.prototype.map.call(
        document.querySelectorAll('body [style]'), ColorManipulator.CSS.transformElementStyle)));

    // <style>
    operations.push(Promise.all(Array.prototype.map.call(
        document.querySelectorAll('style'), ColorManipulator.CSS.transformStyleElement)));

    // TODO listen for changes

    await Html.loadingEvent;

    // <link>
    operations.push(Promise.all(Array.prototype.map.call(
        document.querySelectorAll('head link[rel=stylesheet]'), ColorManipulator.CSS.transformStyleElement)));

    await Promise.all(operations);
}

const requestFile = url => new Promise(resolve =>
        chrome.runtime.sendMessage({url, action: 'download_file'}, response => response === undefined ? resolve('') : resolve(response)));