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
    _s_.DOM.windowScroll = function(){
        
    };

})();

window.onload = function() {
    window.onscroll = function() {
        var winH=document.body.clientHeight;
        var scrollTop = document.body.scrollTop;
        console.log(scrollTop);
        var container=document.getElementById("main-sections");
        if (scrollTop < winH) {
            container.style.backgroundColor = "rgb(168, 203, 213)";
        }else if (scrollTop >= winH && scrollTop < winH * 2) {
            container.style.backgroundColor = "rgb(238, 126, 114)";
        }else if (scrollTop >= winH *2 && scrollTop < winH * 3) {
            container.style.backgroundColor = "rgb(228, 190, 108)";
        }
        else if (scrollTop >= winH *3 && scrollTop < winH * 4) {
            container.style.backgroundColor = "rgb(156, 145, 191)";
        }
    };
};
