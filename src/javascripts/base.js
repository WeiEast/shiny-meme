(function() {


    var shiny = {};
    var _s_ = shiny;

    shiny.namespace = function(ns) {
        var object = this,
            parts = ns.split(".");
        if (parts[0] == "shiny") {
            parts.shift();
        }
        for (var i = 0, len = parts.length; i < len; i++) {

            if (!object[parts[i]]) {
                object[parts[i]] = {};
            }
            object = object[parts[i]];
        }
        return object;
    };

    shiny.namespace("Dom");
    shiny.namespace("Event");
    shiny.namespace("Constant");



    shiny.namespace("Event.addLoadEvent");

    _s_.Event.addLoadEvent = function(type, elem, handler) {
        var self = this;
        if (elem.addEventListener) {
            self = (function() {
                elem.addEventListener(type, handler, false);
            })();
        } else if (elem.attachEvent) {
            self = (function() {
                elem.attachEvent(type, handler, false);
            })();
        } else {
            self = (function() {
                elem["on" + type] = handler;
            })();
        }
    };

    _s_.Event.removeLoadEvent = function(type, elem, handler) {
        var self = this;
        if (elem.removeEventListener) {
            self = (function() {
                elem.removeEventListener(type, handler, false);
            })();
        } else if (elem.deleteEvent) {
            self = (function() {
                elem.deleteEvent(type, handler, false);
            })();
        } else {
            self = (function() {
                elem["on" + type] = null;
            })();
        }
    };

    shiny.Constant.backgroundColor = [
        "rgb(168, 203, 213)",
        "rgb(238, 126, 114)",
        "rgb(228, 190, 108)",
        "rgb(156, 145, 191)"
    ];

})();

window.onload = function() {
    var winH = document.body.clientHeight;
    var scrollTop = document.body.scrollTop;
    var container = document.getElementById("main-sections");
    container.style.top = "0";
    var timer = null;
    var isRunning = false;
    $(container).on('mousewheel', function(event) {
        console.log(event.deltaY);
        var position = "";
        var top = "";
        var deltaY = event.deltaY;
        if (deltaY == 1) {

        }else if (deltaY == -1){
            top = parseInt(container.style.top, 10) - 100;
            if(top <= -400){
                top= -400;
            }
            container.style.top = top + "%";
            posotion = container.style.top;
            if (posotion == "0%") {
                container.style.backgroundColor = "rgb(168, 203, 213)";
                return false;
            } else if (posotion == "-100%") {
                container.style.top = "-100%";
                container.style.backgroundColor = "rgb(238, 126, 114)";
            } else if (posotion == "-200%") {
                container.style.top = "-200%";
                container.style.backgroundColor = "rgb(228, 190, 108)";
            } else if (posotion == "-300%") {
                container.style.top = "-300%";
                container.style.backgroundColor = "rgb(156, 145, 191)";
            }
        }

    });
};
