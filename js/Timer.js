/**
 * A simple Timer class
 * @author Daniel Mason <daniel@danielmason.com>
 */

var Timer = function(config) {

    /**
     * @param int
     */
    var seconds = config.hasOwnProperty('seconds') ? config.seconds : 0;

    /**
     * @param int
     */
    var timeStarted = config.hasOwnProperty('timeStarted') ? config.timeStarted : 0;

    var timeSinceStarted = function() {
        if(timeStarted > 0) {
            return new Date().getTime() - timeStarted;
        }
        return 0;
    }

    return {

        start : function() {
            timeStarted = new Date().getTime();
            return this;
        },

        stop : function() {
            seconds += timeSinceStarted();
            timeStarted = 0;
            return this;
        },

        reset : function() {
            seconds = 0;
            timeStarted = 0;
            return this;
        },

        getTime : function() {
            return seconds + timeSinceStarted();
        }

    };

};
