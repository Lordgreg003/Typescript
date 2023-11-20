"use strict";
function KgToLgs(weight) {
    if (typeof weight === 'number')
        return weight * 22;
    else
        return parseInt(weight) * 22;
}
;
const Car = { Type: 'lexzus', time: 10 };
Car.Type;
KgToLgs(10);
KgToLgs('10kg');
//# sourceMappingURL=index3.js.map