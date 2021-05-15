var url;

chrome.storage.sync.get(['working', 'workinghere', 'settings', 'timetable'], function(result) {
    document.getElementById("Working").checked = result.working;
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
        tabs => {
            try{
                url = tabs[0].url;
                url = url.slice(url.indexOf("//") + 2);
                url = url.slice(0,url.indexOf("/"));
            }catch{
                url = "net";
            }
            console.log(url);
            setup(result);
        }
    );
});









document.getElementById("change_daring_day").textContent = chrome.i18n.getMessage("change_daring_day");
document.getElementById("forthissitetext").textContent = chrome.i18n.getMessage("for_this_site");
document.getElementById("make_white_brighter_text").textContent = chrome.i18n.getMessage("make_white_brighter");
document.getElementById("power_text").textContent = chrome.i18n.getMessage("power");
document.getElementById("filter_text").textContent = chrome.i18n.getMessage("filter");
document.getElementById("how_bright_text").textContent = chrome.i18n.getMessage("how_bright");
document.querySelectorAll("option[value=red]").forEach(e => {
    e.textContent = chrome.i18n.getMessage("red");
});
document.querySelectorAll("option[value=green]").forEach(e => {
    e.textContent = chrome.i18n.getMessage("green");
});
document.querySelectorAll("option[value=blue]").forEach(e => {
    e.textContent = chrome.i18n.getMessage("blue");
});

if(document.getElementById("forthissitetext").textContent == "Для этого сайта"){
    document.getElementById("forthissitetext").style.fontSize = "17px";
}


console.log(chrome.i18n.getMessage("hello"));

const setup = result => {
    console.log(result.workinghere[url]);
    if(result.workinghere[url] == undefined){
        document.getElementById("WorkingHere").checked = result.working;
        document.getElementById("forthissitetext").classList.add("disabled");
    }else{
        document.getElementById("WorkingHere").checked = result.workinghere[url];
        document.getElementById("forthissitetext").classList.remove("disabled");
    }


    document.getElementById("forthissitetext").onclick = function(){
        let workinghere = result.workinghere;
        delete workinghere[url];
        chrome.storage.sync.set({"workinghere": workinghere}, function(){});
        document.getElementById("forthissitetext").classList.add("disabled");
        document.getElementById("WorkingHere").checked = document.getElementById("Working").checked;
    }

    document.getElementById("Working").onclick = function(){
        chrome.storage.sync.set({"working": document.getElementById("Working").checked}, function(){});
        if(result.workinghere[url] == undefined){
            document.getElementById("WorkingHere").checked = document.getElementById("Working").checked;
        }
    };
    
    document.getElementById("WorkingHere").onclick = function(){
        chrome.storage.sync.get(['workinghere'], function(result){
            result.workinghere[url] = document.getElementById("WorkingHere").checked;
            chrome.storage.sync.set({"workinghere": result.workinghere}, function(){});
            document.getElementById("forthissitetext").classList.remove("disabled");
        });
    };

    document.getElementById("slider_make_white_brigher").value = result.settings["mwb"] * 10000;
    document.getElementById("slider_power").value = result.settings["power"] * 10000;
    document.getElementById("slider_filter").value = result.settings["filter"]["red"] * 10000;
    document.getElementById("slider_how_bright").value = result.settings["hb"]["red"] * 10000;
    document.getElementById("timetableActive").checked = result.timetable["active"];

    document.getElementById("slider_make_white_brigher").addEventListener("mouseup", e => {
        result.settings["mwb"] = document.getElementById("slider_make_white_brigher").value / 10000;
        chrome.storage.sync.set({"settings": result.settings}, function(){});
    });

    document.getElementById("slider_power").addEventListener("mouseup", e => {
        result.settings["power"] = document.getElementById("slider_power").value / 10000;
        chrome.storage.sync.set({"settings": result.settings}, function(){});
    });



    document.getElementById("slider_filter_colors").addEventListener("mouseup", e => {
        document.getElementById("slider_filter").value = result.settings["filter"][document.getElementById("slider_filter_colors").options[document.getElementById("slider_filter_colors").selectedIndex].value] * 10000;
    });  

    document.getElementById("slider_filter").addEventListener('mouseup', e => {
        result.settings["filter"][document.getElementById("slider_filter_colors").options[document.getElementById("slider_filter_colors").selectedIndex].value] = document.getElementById("slider_filter").value / 10000;
        chrome.storage.sync.set({"settings": result.settings}, function(){});
    });



    document.getElementById("slider_how_bright_colors").addEventListener("mouseup", e => {
        document.getElementById("slider_how_bright").value = result.settings["hb"][document.getElementById("slider_how_bright_colors").options[document.getElementById("slider_how_bright_colors").selectedIndex].value] * 10000;
    });  

    document.getElementById("slider_how_bright").addEventListener('mouseup', e => {
        result.settings["hb"][document.getElementById("slider_how_bright_colors").options[document.getElementById("slider_how_bright_colors").selectedIndex].value] = document.getElementById("slider_how_bright").value / 10000;
        chrome.storage.sync.set({"settings": result.settings}, function(){});
    });





    document.getElementById("reset_mwb").onclick = function(){
        result.settings["mwb"] = 0.1;
        document.getElementById("slider_make_white_brigher").value = 0.1 * 10000;
        chrome.storage.sync.set({"settings": result.settings}, function(){});
    }

    document.getElementById("reset_power").onclick = function(){
        result.settings["power"] = 1;
        document.getElementById("slider_power").value = 1 * 10000;
        chrome.storage.sync.set({"settings": result.settings}, function(){});
    }

    document.getElementById("reset_filter").onclick = function(){
        result.settings["filter"] = {
            "red": 0,
            "green": 0,
            "blue": 0
        };
        document.getElementById("slider_filter").value = 0;
        chrome.storage.sync.set({"settings": result.settings}, function(){});
    }

    document.getElementById("reset_hb").onclick = function(){
        result.settings["hb"] = {
            "red": 1,
            "green": 1,
            "blue": 1
        };
        document.getElementById("slider_how_bright").value = 10000;
        chrome.storage.sync.set({"settings": result.settings}, function(){});
    }

    document.getElementById("timetableActive").onclick = function(){
        result.timetable["active"] = document.getElementById("timetableActive").checked;
        chrome.storage.sync.set({"timetable": result.timetable}, function(){});
    };

    var canvas = document.getElementById("canvas");
    var height = 60;
    var width = 394;
    canvas.width = width;
    canvas.height = height;

    var c = canvas.getContext('2d');

    function Point(x, y, hover){
        this.x = x;
        this.y = y;
        this.hover = hover;
    }

    function Line(a, b, c, d){
        this.points = [a,b,c,d];
    };

    const powerToY = power => {
        return (height - 4) - power * (height - 8);
    }

    const yToPower = y => {
        return 1 + ((-1)/(height - 8))*(y - 4);
    }

    const timeToX = time => {
        return width*(time/1440);
    }

    const xToTime = x => {
        return 1440*(x/width);
    }

    var line = new Line(new Point(timeToX(result.timetable.points[0]["time"]), powerToY(result.timetable.points[0]["power"]), false), new Point(timeToX(result.timetable.points[1]["time"]), powerToY(result.timetable.points[1]["power"]), false), new Point(timeToX(result.timetable.points[2]["time"]), powerToY(result.timetable.points[2]["power"]), false), new Point(timeToX(result.timetable.points[3]["time"]), powerToY(result.timetable.points[3]["power"]), false));

    var interval;
    var movingPoint;
    var mX;
    var mY;
    var isDraging = false;

    function handledown(){
        // console.log("start");
        isDraging = true;
        interval = setInterval(function(){
            let edge1 = line.points.length - 1 == movingPoint ? width : line.points[movingPoint + 1].x;
            let edge2 = movingPoint == 0 ? 0 : line.points[movingPoint - 1].x;
            if(edge2 < mX && edge1 > mX){
                line.points[movingPoint].x = mX;
            }

            if(height - 4 > mY && mY > 4){
                line.points[movingPoint].y = mY;
            }

            draw(line.points);
        }, 30);
        canvas.addEventListener("mouseup", handleup);
    }

    function handleup(){
        // console.log("end");
        isDraging = false;
        clearInterval(interval);

        line.points.forEach((e, index) => {
            result.timetable.points[index]["time"] = xToTime(e.x);
            result.timetable.points[index]["power"] = yToPower(e.y);
        });

        chrome.storage.sync.set({"timetable": result.timetable}, function(){});
        canvas.removeEventListener("mouseup", handleup);
    }

    document.getElementById("reset_timetable").onclick = function(){
        result.timetable = {
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
        line = new Line(new Point(timeToX(result.timetable.points[0]["time"]), powerToY(result.timetable.points[0]["power"]), false), new Point(timeToX(result.timetable.points[1]["time"]), powerToY(result.timetable.points[1]["power"]), false), new Point(timeToX(result.timetable.points[2]["time"]), powerToY(result.timetable.points[2]["power"]), false), new Point(timeToX(result.timetable.points[3]["time"]), powerToY(result.timetable.points[3]["power"]), false));
        draw(line.points);
        chrome.storage.sync.set({"timetable": result.timetable}, function(){});
    }

    canvas.addEventListener("mousemove", e =>{
        mX = e.layerX;
        mY = e.layerY;
        
        for(let index = 0; index < 4; index++){
            if(!isDraging && line.points[index].x + 4 > mX && line.points[index].x - 4 < mX && line.points[index].y + 4 > mY && line.points[index].y - 4 < mY){
                line.points[index].hover= true;
                canvas.style.cursor = "pointer";
                movingPoint = index;
                canvas.addEventListener("mousedown", handledown);
                break;
            }else{
                line.points[index].hover = false;
                canvas.style.cursor = "default";
                canvas.removeEventListener("mousedown", handledown);
            }
        }

        draw(line.points);
    });

    function draw(obj){
        c.clearRect(0,0, innerWidth, innerHeight);
        c.textAlign = "center";
        c.beginPath();
        c.font = "12px Inter"
        c.fillStyle = "white";
        c.fillText("0", 3, height - 2);
        c.beginPath();
        c.fillText("0.5", 10, height/2);
        for(let i = 1; i < 25; i++){
            c.beginPath();
            c.fillText(i.toString(), ((width - 8)/24) * i, height - 2);
        }

        c.beginPath()
        c.lineWidth = 2;
        c.moveTo(obj[obj.length - 1].x - width, obj[obj.length - 1].y);

        obj.forEach(e => {
            c.lineTo(e.x,e.y);
        });
        c.lineTo(width + obj[0].x, obj[0].y);
        c.stroke();


        obj.forEach(e => {
            if(e.hover){
                c.fillStyle = "gray";
            }else{                    
                c.fillStyle = "dodgerblue";
            }
            c.beginPath();
            c.arc(e.x, e.y, 4, 0, 2 * Math.PI, false);
            c.fill();
        });
    }

    draw(line.points);
}





//               on install
// let workinghere;
// workinghere = {};
// chrome.storage.sync.set({"workinghere": workinghere}, function(){});
// chrome.storage.sync.set({"working": true}, function(){});
// settings    mwb power   filter{red, blue, green}     hb{red: }


// let settings;
// settings = {
//     "mwb": 0.1,
//     "power": 1,
//     "filter": {
//         "red": 0,
//         "green": 0,
//         "blue": 0
//     },
//     "hb": {
//         "red": 1,
//         "green": 1,
//         "blue": 1
//     }
// };
// chrome.storage.sync.set({"settings": settings}, function(){});

// let timetable;
// timetable = {
//     "active": false,
//     "points": [{
//             "power": 1,
//             "time": 120
//         },{
//             "power": 0,
//             "time": 420
//         },{
//             "power": 0,
//             "time": 900
//         },{
//             "power": 1,
//             "time": 1260
//         }
//     ]
// };
// chrome.storage.sync.set({"timetable": timetable}, function(){});