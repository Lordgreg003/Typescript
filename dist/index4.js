"use strict";
function DayTime(Time) {
    if (Time < 11) {
        console.log('good morning');
    }
    else if (Time > 11 && Time < 16) {
        console.log('good afternoon');
    }
    else if (Time > 16 && Time < 24) {
        console.log('good evening');
    }
    else {
        console.log('time does not exist');
    }
}
DayTime(12);
//# sourceMappingURL=index4.js.map