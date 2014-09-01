(function() {

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
        if (deltaY < 0) {
            console.log(container.style.top);
            container.style.top = parseInt(container.style.top, 10) - 100 + "%";
        }
        var timer = setTimeout(function(){
            isRunning = false;
        }, 3000);
    }
    window.addEventListener("load", function() {

        var winH = document.body.clientHeight;
        var scrollTop = document.body.scrollTop;
        var container = document.getElementById("main-sections");
        container.style.top = "0";
        addMouseWheelEvent(container, function(event) {
            event.stopPropagation();
            if(!isRunning){
                startMove(event, container);
                isRunning = true;
            }
        });

    }, false);

})();
