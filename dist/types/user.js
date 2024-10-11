"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStatus = exports.PreferredLanguage = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["ADMINISTRADOR"] = "ADMINISTRADOR";
    UserRole["USUARIO"] = "USUARIO";
})(UserRole || (exports.UserRole = UserRole = {}));
var PreferredLanguage;
(function (PreferredLanguage) {
    PreferredLanguage["ES"] = "ES";
    PreferredLanguage["EN"] = "EN";
})(PreferredLanguage || (exports.PreferredLanguage = PreferredLanguage = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVO"] = "ACTIVO";
    UserStatus["INACTIVO"] = "INACTIVO";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
