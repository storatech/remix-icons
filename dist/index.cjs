"use strict";
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// remix_icons_react/index.ts
var remix_icons_react_exports = {};
__export(remix_icons_react_exports, {
    codePoints: function() {
        return codePoints;
    },
    default: function() {
        return remix_icons_react_default;
    }
});
module.exports = __toCommonJS(remix_icons_react_exports);
// remix_icons_react/RemixIcon.tsx
var import_react2 = __toESM(require("react"), 1);
// remix_icons_react/codepoints.ts
var codePoints = {
    "filled": {
        "youtube": 61697,
        "weight": 61698,
        "warehouse": 61699,
        "wallet": 61700,
        "verified": 61701,
        "users": 61702,
        "user": 61703,
        "trash": 61704,
        "timer": 61705,
        "time": 61706,
        "support": 61707,
        "store-for-good": 61708,
        "stora": 61709,
        "star": 61710,
        "shopping-cart": 61711,
        "shopping-bag": 61712,
        "shop": 61713,
        "shield-keyhole": 61714,
        "share": 61715,
        "search": 61716,
        "ruler": 61717,
        "road-map": 61718,
        "radio-button": 61719,
        "question-circle": 61720,
        "question-answer": 61721,
        "qr": 61722,
        "profile": 61723,
        "phone": 61724,
        "pen": 61725,
        "notifications": 61726,
        "navigation": 61727,
        "more": 61728,
        "message": 61729,
        "map": 61730,
        "map-pin": 61731,
        "luggage-cart": 61732,
        "loyalty": 61733,
        "logout": 61734,
        "lock": 61735,
        "linkedin": 61736,
        "lifebuoy": 61737,
        "layout-grid": 61738,
        "instagram": 61739,
        "information-circle": 61740,
        "image": 61741,
        "heart": 61742,
        "handbox": 61743,
        "global": 61744,
        "gift": 61745,
        "focus": 61746,
        "filter": 61747,
        "file": 61748,
        "file-shield": 61749,
        "file-list": 61750,
        "file-info": 61751,
        "file-edit": 61752,
        "file-copy": 61753,
        "file-1": 61754,
        "facebook": 61755,
        "eye": 61756,
        "eye-off": 61757,
        "error-triangle": 61758,
        "error-circle": 61759,
        "envelope": 61760,
        "discount": 61761,
        "close-circle": 61762,
        "checkbox-circle": 61763,
        "check": 61764,
        "check-circle": 61765,
        "chat": 61766,
        "category": 61767,
        "card": 61768,
        "camera": 61769,
        "calendar": 61770,
        "building": 61771,
        "box": 61772,
        "bar-chart": 61773,
        "ban-circle": 61774
    },
    "regular": {
        "youtube": 61697,
        "weight": 61698,
        "warehouse": 61699,
        "wallet": 61700,
        "verified": 61701,
        "users": 61702,
        "user": 61703,
        "unlink": 61704,
        "twitter": 61705,
        "trash": 61706,
        "timer": 61707,
        "time": 61708,
        "support": 61709,
        "store-for-good": 61710,
        "stora": 61711,
        "star": 61712,
        "shopping-cart": 61713,
        "shopping-bag": 61714,
        "shopping-bag-add": 61715,
        "shop": 61716,
        "shield-keyhole": 61717,
        "share": 61718,
        "search": 61719,
        "ruler": 61720,
        "road-map": 61721,
        "question-circle": 61722,
        "question-answer": 61723,
        "qr": 61724,
        "profile": 61725,
        "plus": 61726,
        "phone": 61727,
        "pen": 61728,
        "notifications": 61729,
        "navigation": 61730,
        "more": 61731,
        "minus": 61732,
        "message": 61733,
        "menu": 61734,
        "menu-right": 61735,
        "map": 61736,
        "map-pin": 61737,
        "luggage-cart": 61738,
        "loyalty": 61739,
        "loop": 61740,
        "logout": 61741,
        "lock": 61742,
        "linkedin": 61743,
        "link": 61744,
        "lifebuoy": 61745,
        "layout-grid": 61746,
        "instagram": 61747,
        "information-circle": 61748,
        "image": 61749,
        "history": 61750,
        "heart": 61751,
        "handbox": 61752,
        "global": 61753,
        "gift": 61754,
        "fullscreen": 61755,
        "focus": 61756,
        "filter": 61757,
        "file": 61758,
        "file-shield": 61759,
        "file-list": 61760,
        "file-info": 61761,
        "file-edit": 61762,
        "file-copy": 61763,
        "file-1": 61764,
        "facebook": 61765,
        "eye": 61766,
        "eye-off": 61767,
        "error-triangle": 61768,
        "error-circle": 61769,
        "envelope": 61770,
        "discount": 61771,
        "code": 61772,
        "close": 61773,
        "close-circle": 61774,
        "chevron-up": 61775,
        "chevron-up-small": 61776,
        "chevron-right": 61777,
        "chevron-right-small": 61778,
        "chevron-left": 61779,
        "chevron-left-small": 61780,
        "chevron-down": 61781,
        "chevron-down-small": 61782,
        "checkbox-circle": 61783,
        "check": 61784,
        "check-circle": 61785,
        "chat": 61786,
        "category": 61787,
        "card": 61788,
        "camera": 61789,
        "calendar": 61790,
        "building": 61791,
        "box": 61792,
        "bar-chart": 61793,
        "ban-circle": 61794,
        "arrow-right": 61795,
        "arrow-left": 61796,
        "arrow-left-right": 61797
    }
};
var codepoints_default = codePoints;
// remix_icons_react/get-string.ts
var getValue = function(variant, icon) {
    var tryOtherVariant = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    var codePoint = codepoints_default[variant][icon];
    if (codePoint === void 0 || codePoint === null || isNaN(codePoint)) {
        if (!tryOtherVariant) return "";
        return getValue(variant === "filled" ? "regular" : "filled", icon, false);
    }
    return String.fromCodePoint(codePoint);
};
// remix_icons_react/context.ts
var import_react = require("react");
var RemixIconContext = (0, import_react.createContext)({});
// remix_icons_react/RemixIcon.tsx
var RemixIconComponent = function(param) {
    var css = param.css, propVariant = param.variant, propFilled = param.filled, icon = param.icon, className = param.className;
    var contextProps = (0, import_react2.useContext)(RemixIconContext);
    var _ref, _ref1;
    var variant = (_ref1 = propVariant !== null && propVariant !== void 0 ? propVariant : contextProps.variant) !== null && _ref1 !== void 0 ? _ref1 : ((_ref = propFilled !== null && propFilled !== void 0 ? propFilled : contextProps.filled) !== null && _ref !== void 0 ? _ref : false) ? "filled" : "regular";
    var value = getValue(variant, icon);
    return /* @__PURE__ */ import_react2.default.createElement("span", {
        style: css,
        "data-stora-icon": true,
        "data-remix-icons": true,
        "aria-hidden": "true",
        "data-remix-icons-variant": variant,
        className: [
            className,
            contextProps.className
        ].filter(function(x) {
            return Boolean(x) && x.trim().length > 0;
        }).join(" ")
    }, value);
};
var RemixIcon = Object.assign(RemixIconComponent, {
    Context: RemixIconContext,
    displayName: "RemixIcon"
});
// remix_icons_react/index.ts
var remix_icons_react_default = RemixIcon;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    codePoints: codePoints
});
