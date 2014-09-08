(function() {

    function Sequence(squence) {
        this.tasks = sequence || [];
    }

    function addMouseWheelEvent(elem, handler) {
        elem.addEventListener('mousewheel', handler);
        elem.addEventListener('DOMMouseScroll', handler);
    }
    var wait = 2000;
    var isRunning = false;

    function startMove(event, container) {
        var deltaY = shiny.Event.getWheelDelta(event);
        console.log(deltaY);
        var top = parseInt(container.style.top, 10);
        if (deltaY < 0) {
            if (top > -300) {
                container.style.top = top - 100 + "%";
            } else {
                container.style.top = "-300%";
            }
        } else {
            if (top < 0) {
                container.style.top = parseInt(container.style.top, 10) + 100 + "%";
            } else {
                container.style.top = "0";
            }
        }
        var timer = setTimeout(function() {
            isRunning = false;
        }, wait);
    }

    window.addEventListener("load", function() {

        var winH = document.body.clientHeight;
        var scrollTop = document.body.scrollTop;
        var container = document.getElementById("main-sections");

        container.style.top = "0";
        shiny.Event.addMouseWheelEvent(container, function(event) {
            event.stopPropagation();
            if (!isRunning) {
                startMove(event, container);
                isRunning = true;
            }
        });

    }, false);

})();


// scroll controler
(function() {

})();
;(function() {

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

    _s_.Event.addEvent = function(type, elem, handler) {
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

    _s_.Event.removeEvent = function(type, elem, handler) {
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

    _s_.Event.getWheelDelta = function(event) {
        if (event.wheelDelta) {
            return event.wheelDelta;
        } else {
            return -event.detail * 40;
        }
    };

    _s_.Event.addMouseWheelEvent = function(elem, handler) {
        var self = this;
        self.addEvent('mousewheel', elem, handler);
        self.addEvent('DOMMouseScroll', elem, handler);
    };

    _s_.Dom.getCssStyle = function(elem, prop) {
        var strValue = "";
        //非IE
        if (document.defaultView && document.defaultView.getComputedStyle) {
            strValue = document.defaultView.getComputedStyle(elem, "").getPropertyValue(prop);
        } else if (elem.currentStyle) {
            // IE
            prop = prop.replace(/\-(\w)/g, function(strMatch, p1) {
                return p1.toUpperCase();
            });
            strValue = elem.currentStyle[prop];
        }
        return strValue;
    };

    shiny.Constant.backgroundColor = [
        "rgb(168, 203, 213)",
        "rgb(238, 126, 114)",
        "rgb(228, 190, 108)",
        "rgb(156, 145, 191)"
    ];



    window.shiny = shiny;
})();