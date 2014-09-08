(function() {
    var Constant = {
        backgroundColor: [
            "rgb(168, 203, 213)",
            "rgb(238, 126, 114)",
            "rgb(228, 190, 108)",
            "rgb(156, 145, 191)"
        ]
    };

    function Sequence(sequence) {
        this.tasks = sequence || [];
    }
    Sequence.prototype.tasks = [];
    Sequence.prototype.current = 0;
    Sequence.prototype.repeating = false;
    Sequence.prototype.running = false;
    Sequence.prototype.timeout = null;
    Sequence.prototype.wait = 3000;


    Sequence.prototype.run = function() {
        return launch(this);
    };
    Sequence.prototype.stop = function() {
        clearTimeout(this.timeout);

        this.timeout = null;
        this.running = false;

        return this;
    };
    Sequence.prototype.reset = function(customReset) {
        this.stop();
        this.current = 0;

        if (typeof customReset == 'function') {
            customReset(this);
        }

        return this;
    };

    function launch(instance) {
        // 如果正在y运动，结束
        if (instance.runing) {
            return instance;
        }
        // 任务列表为空时，结束
        if (!instance.tasks) {
            return instance;
        }
        // 如果不存在当前的任务，结束
        if (!instance.tasks[instance.current]) {
            return instance;
        }
        // 将运动状态修改为 true
        instance.running = true;

        var task = instance.tasks[instance.current].task;
        var wait = instance.tasks[instance.current].wait;

        if (typeof task == 'function') {
            instance.timeout = setTimeout(function() {
                instance.running = false;
                task(instance.current);
                next(instance);
            }, wait);
        } else {
            instance.timeout = setTimeout(function() {
                instance.running = false;
                next(instance);
            }, wait);
        }

        return instance;

    }

    // 加载下一个运动
    function next(instance) {
        if (instance.tasks[instance.current + 1]) {
            instance.current++;
            return instance.run();
        }

        if (!instance.tasks[instance.current + 1] && instance.repeating) {
            instance.reset();
            return instance.run();
        }

        return instance.stop();
    }
    var Action = function() {};
    Action.prototype = {
        enterAction: null,
        exitAction: null,
        afterAction: null,
        length: 0
    };

    function addMouseWheelEvent(elem, handler) {
        elem.addEventListener('mousewheel', handler);
        elem.addEventListener('DOMMouseScroll', handler);
    }
    var wait = 2000;
    var isRunning = false;

    function startMove(event, container) {
        // var deltaY = shiny.Event.getWheelDelta(event);
        // var top = parseInt(container.style.top, 10);
        // if (deltaY < 0) {
        //     if (top > -300) {
        //         container.style.top = top - 100 + "%";
        //     } else {
        //         container.style.top = "-300%";
        //     }
        // } else {
        //     if (top < 0) {
        //         container.style.top = parseInt(container.style.top, 10) + 100 + "%";
        //     } else {
        //         container.style.top = "0";
        //     }
        // }

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

        var welcome = new Action();
        welcome.enterAction = function() {
            // 暂时就是这么简单的过程
            container.style.backgroundColor = Constant.backgroundColor[0];
            container.style.top = "0%";
        };
        var prpfile = new Action();
        prpfile.enterAction = function() {
            // 暂时就是这么简单的过程
            container.style.backgroundColor = Constant.backgroundColor[1];
            container.style.top = "-100%";
        };
        var skill = new Action();
        skill.enterAction = function() {
            // 暂时就是这么简单的过程
            container.style.backgroundColor = Constant.backgroundColor[2];
            container.style.top = "-200%";
        };
        var experience = new Action();
        experience.enterAction = function() {
            // 暂时就是这么简单的过程
            container.style.backgroundColor = Constant.backgroundColor[3];
            container.style.top = "-300%";
        };

        var squence = new Sequence();
        squence.tasks = [welcome, prpfile, skill, experience];

        console.log(squence);


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