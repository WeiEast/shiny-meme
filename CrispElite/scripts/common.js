/**
 *
 * @authors CrispElite (zhanglun1410@gmail.com)
 * @date    2014-03-21 19:45:35
 * @version 1.0
 */
//niceScroll
$(document).ready(function() {
    $("html").niceScroll({
        touchbehavior: false, // 是否在触摸屏下使用
        // cursorcolor: "#866550", // 滚动条颜色
        cursoropacitymax: 1, // 滚动条是否透明
        cursorwidth: 0, // 滚动条宽度
        horizrailenabled: false, // 是否水平滚动
        cursorborderradius: 1, // 滚动条是否圆角大小
        // autohidemode: false, // 是否隐藏滚动条
        cursorborder: 0 // 滚动条边框大小
    });
});
$(document).ready(function() {
    $WinW = window.innerWidth,
    $WinH = window.innerHeight;

    var Crisp = {};

    Crisp.getScrollTop = function() {
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        return top;
    }
    //设置背景图片等的大小适合屏幕
    Crisp.fixSize = function() {
        $(".header_nav").css({
            width: $WinW + "px"
        });
    };
    Crisp.fixSize();
    //背景滚动
    $(window).scroll(function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        $(".greet").css({
            marginTop: parseInt(scrollTop * 0.7) + 10 + "px"
        });
        $("#area1").css({
            backgroundPosition: "center " + parseInt(-(scrollTop + 200) * 0.2 + 50) + "px"
        });
        $("#area2").css({
            backgroundPosition: "center " + parseInt(-(scrollTop - 458 * 2) * 0.2 + 50) + "px"
        });
        $("#area3").css({
            backgroundPosition: "center " + parseInt(-(scrollTop - 458 * 3) * 0.2 + 100) + "px"
        });
        $("#area4").css({
            backgroundPosition: "center " + parseInt(-(scrollTop - 458 * 5) * 0.2 + 150) + "px"
        });
        $("#area5").css({
            backgroundPosition: "center " + parseInt(-(scrollTop - 458 * 5) * 0.2) + "px"
        });
    });

});

//loading
$(document).ready(function() {

    // var Sys = {};
    // var ua = navigator.userAgent.toLowerCase();
    // if (window.ActiveXObject)
    //     Sys.ie = ua.match(/msie ([\d.]+)/)[1]
    // else if (document.getBoxObjectFor)
    //     Sys.firefox = ua.match(/firefox\/([\d.]+)/)[1]
    // else if (window.MessageEvent && !document.getBoxObjectFor)
    //     Sys.chrome = ua.match(/chrome\/([\d.]+)/)[1]
    // else if (window.opera)
    //     Sys.opera = ua.match(/opera.([\d.]+)/)[1]
    // else if (window.openDatabase)
    //     Sys.safari = ua.match(/version\/([\d.]+)/)[1];


    $("#welcome .greet a").bind("click", function(e) {
        document.body.scrollTop = $WinH;
        e.preventDefault();
    });

    var getRandomStr = function() {
        var str = "",
            max = 10,
            min = 0;
        for (var i = 0; i < max; i++) {
            var n = Math.floor(Math.random() * 100 + 1);
            str += n;
        }
        return str;
    }
    var rollImg = $(".area");


    (function() {
        // if (!Sys.chrome) {
        //     $("#loadDisk").hide();
        //     var wannering = $("<h1 class=\"wannering\">请使Webkit浏览器(*^__^*)</h1>");
        //     wannering.appendTo($("#loading"));
        //     wannering.css({
        //         lineHeight: wannering.css("height")
        //     });
        //     return false;
        // }

        var mark = new Image();
        mark.src = "images/back6.jpg?";
        document.body.scrollTop = 0;
        mark.onload = function() {
            document.body.scrollTop = 0;
            $("#loadDisk img").animate({
                width: "100px",
                height: "100px",
            }, 1000);
            $("#loadDisk").animate({
                marginLeft: "-55px",
                marginTop: "0",
                top: "10px"
            }, 1000);
            $("#loading").fadeOut(1000, function() {
                $(".greet").animate({
                    marginTop: "20px"
                }, 2000);
            });
        };
    })();
});

