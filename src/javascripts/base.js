(function() {

    function getCssStyle(elem, prop) {
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
    }
    var wait = 2000;
        var fakeEvent = {
            deltaY: 0
        };
    var isRunning = false;

    function onMouseWheel(event) {

    }

    function getWheelDelta(event) {
        if (event.wheelDelta) {
            return event.wheelDelta;
        } else {
            return -event.detail * 40;
        }
    }

    function addMouseWheelEvent(elem, handler) {
        elem.addEventListener('mousewheel', handler, false);
        elem.addEventListener('DOMMouseScroll', handler, false);
    }

    function startMove(event, container) {
        var deltaY = getWheelDelta(event);
        console.log(deltaY);
        var top = parseInt(container.style.top, 10);
        if (deltaY < 0) {
            if(top > -300){
                container.style.top = top - 100 + "%";
            }else{
                container.style.top = "-300%";
            }
        }else{
            if(top < 0){
                container.style.top = parseInt(container.style.top, 10) + 100 + "%";
            }else{
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
        addMouseWheelEvent(container, function(event) {
            event.stopPropagation();
            if (!isRunning) {
                startMove(event, container);
                isRunning = true;
            }
        });

    }, false);

})();
