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
(function() {
    var fakeEvent = {
        deltaY: 0
    };
    function onMouseWheel(event, instance) {
        if (event.deltaY < 0) {
            instance.next(instance);
        } else {
            instance.prev(instance);
        }
    }

    window.addEventListener("load", function() {


        var winH = document.body.clientHeight;
        var scrollTop = document.body.scrollTop;
        var container = document.getElementById("main-sections");
        container.style.top = "0";
        var timer = null;
        var isRunning = true;
        $(container).on('mousewheel', function(event) {

        });

    }, false);
})();
