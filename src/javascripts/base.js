(function() {
    var shiny =_s_= {};

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

    _s_.Event.addLoadEvent=function(type,elem,handler){
        var self=this;
        if(elem.addEventListener){
            self=(function(){
                elem.addEventListener(type,handler,false);
            })();
        }else if(elem.attachEvent){
            self=(function(){
                elem.attachEvent(type,handler,false);
            })();
        }else{
            self=(function(){
                elem["on"+type]=handler;
            })();
        }
    };

    _s_.Event.removeLoadEvent=function(type,elem,handler){
        var self=this;
        if(elem.removeEventListener){
            self=(function(){
                elem.removeEventListener(type,handler,false);
            })();
        }else if(elem.deleteEvent){
            self=(function(){
                elem.deleteEvent(type,handler,false);
            })();
        }else{
            self=(function(){
                elem["on"+type]=null;
            })();
        }
    };



})();
