
"use strict";

var TimeMe = function(config) {


    return {
        timers : {},

        addTimer : function(name) {
            if(!this.timers.hasOwnProperty(name)) {
                this.timers.name = new Timer();
            }
            this.timers.name.start();
        },

        getTimerNames : function() {
            var names = Array();
            for(var name in this.timers) {
                names.push(name);
            }
            return names;
        }

    }

}

