"use strict";
class ActivateGuard {
    canActivate(route, state) {
        return confirm("Are you sure?");
    }
}
exports.ActivateGuard = ActivateGuard;
//# sourceMappingURL=canActivateGuard.js.map