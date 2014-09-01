(function() {

    var fakeEvent = {
        deltaY: 0
    };

    /*function onMouseWheel(event, instance) {
        if (event.deltaY < 0) {
            instance.next(instance);
        } else {
            instance.prev(instance);
        }
    }*/
    function onMouseWheel(event){

    }
    function getWheelDelta(event){
        if (event.wheelDelta){
            return event.wheelDelta;
        }else{
            return -event.detail * 40;
        }
    }
    function addMouseWheelEvent(elem, handler){
        elem.addEventListener('mousewheel', handler, false);
        elem.addEventListener('DOMMouseScroll', handler, false);
    }

    window.addEventListener("load", function() {

        var winH = document.body.clientHeight;
        var scrollTop = document.body.scrollTop;
        var container = document.getElementById("main-sections");
        container.style.top = "0";
        var timer = null;
        var isRunning = true;
        addMouseWheelEvent(container, function(event){
            event.stopPropagation();
            console.log(getWheelDelta(event));
        });

    }, false);

})();
