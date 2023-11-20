"use strict";
function calculateTask(income, taxyear) {
    if (taxyear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTask(10000, 2022);
//# sourceMappingURL=index1.js.map