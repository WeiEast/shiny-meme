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
