(function() {
    var Constant = {
        backgroundColor: [
            "rgb(168, 203, 213)",
            "rgb(238, 126, 114)",
            "rgb(228, 190, 108)",
            "rgb(156, 145, 191)"
        ]
    };


    function startMove(instance) {

        var deltaY = shiny.Event.getWheelDelta(event);
        console.log(deltaY);
        if (deltaY < 0) {
            instance.next(instance);
        } else {
            instance.prev(instance);
        }

        // launch(instance);
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
                startMove(actions);
                isRunning = true;
            }
        });

        var welcome = new Action();
        welcome.enterAction = function() {
            // 暂时就是这么简单的过程
            container.style.backgroundColor = Constant.backgroundColor[0];
            container.style.top = "0%";
        };
        var profile = new Action();
        profile.enterAction = function() {
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

    }, false);

})();

