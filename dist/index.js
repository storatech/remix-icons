// remix_icons_react/RemixIcon.tsx
import React, { useContext } from "react";
// remix_icons_react/codepoints.ts
var codePoints = {
    "filled": {
        "youtube": 61697,
        "warehouse": 61698,
        "wallet": 61699,
        "verified": 61700,
        "users": 61701,
        "user": 61702,
        "trash": 61703,
        "timer": 61704,
        "support": 61705,
        "store-for-good": 61706,
        "stora": 61707,
        "star": 61708,
        "shopping-cart": 61709,
        "shopping-bag": 61710,
        "shop": 61711,
        "shield-keyhole": 61712,
        "share": 61713,
        "search": 61714,
        "ruler": 61715,
        "road-map": 61716,
        "radio-button": 61717,
        "question-circle": 61718,
        "question-answer": 61719,
        "qr": 61720,
        "profile": 61721,
        "phone": 61722,
        "pen": 61723,
        "notifications": 61724,
        "navigation": 61725,
        "more": 61726,
        "message": 61727,
        "map": 61728,
        "map-pin": 61729,
        "luggage-cart": 61730,
        "loyalty": 61731,
        "logout": 61732,
        "lock": 61733,
        "linkedin": 61734,
        "lifebuoy": 61735,
        "layout-grid": 61736,
        "instagram": 61737,
        "information-circle": 61738,
        "image": 61739,
        "heart": 61740,
        "handbox": 61741,
        "global": 61742,
        "gift": 61743,
        "focus": 61744,
        "filter": 61745,
        "file": 61746,
        "file-shield": 61747,
        "file-list": 61748,
        "file-info": 61749,
        "file-edit": 61750,
        "file-copy": 61751,
        "file-1": 61752,
        "facebook": 61753,
        "eye": 61754,
        "eye-off": 61755,
        "error-triangle": 61756,
        "error-circle": 61757,
        "envelope": 61758,
        "discount": 61759,
        "close-circle": 61760,
        "checkbox-circle": 61761,
        "check": 61762,
        "check-circle": 61763,
        "chat": 61764,
        "category": 61765,
        "card": 61766,
        "camera": 61767,
        "calendar": 61768,
        "building": 61769,
        "box": 61770,
        "bar-chart": 61771,
        "ban-circle": 61772
    },
    "regular": {
        "youtube": 61697,
        "warehouse": 61698,
        "wallet": 61699,
        "verified": 61700,
        "users": 61701,
        "user": 61702,
        "unlink": 61703,
        "twitter": 61704,
        "trash": 61705,
        "timer": 61706,
        "support": 61707,
        "store-for-good": 61708,
        "stora": 61709,
        "star": 61710,
        "shopping-cart": 61711,
        "shopping-bag": 61712,
        "shopping-bag-add": 61713,
        "shop": 61714,
        "shield-keyhole": 61715,
        "share": 61716,
        "search": 61717,
        "ruler": 61718,
        "road-map": 61719,
        "question-circle": 61720,
        "question-answer": 61721,
        "qr": 61722,
        "profile": 61723,
        "plus": 61724,
        "phone": 61725,
        "pen": 61726,
        "notifications": 61727,
        "navigation": 61728,
        "more": 61729,
        "minus": 61730,
        "message": 61731,
        "menu": 61732,
        "menu-right": 61733,
        "map": 61734,
        "map-pin": 61735,
        "luggage-cart": 61736,
        "loyalty": 61737,
        "loop": 61738,
        "logout": 61739,
        "lock": 61740,
        "linkedin": 61741,
        "link": 61742,
        "lifebuoy": 61743,
        "layout-grid": 61744,
        "instagram": 61745,
        "information-circle": 61746,
        "image": 61747,
        "history": 61748,
        "heart": 61749,
        "handbox": 61750,
        "global": 61751,
        "gift": 61752,
        "fullscreen": 61753,
        "focus": 61754,
        "filter": 61755,
        "file": 61756,
        "file-shield": 61757,
        "file-list": 61758,
        "file-info": 61759,
        "file-edit": 61760,
        "file-copy": 61761,
        "file-1": 61762,
        "facebook": 61763,
        "eye": 61764,
        "eye-off": 61765,
        "error-triangle": 61766,
        "error-circle": 61767,
        "envelope": 61768,
        "discount": 61769,
        "code": 61770,
        "close": 61771,
        "close-circle": 61772,
        "chevron-up": 61773,
        "chevron-up-small": 61774,
        "chevron-right": 61775,
        "chevron-right-small": 61776,
        "chevron-left": 61777,
        "chevron-left-small": 61778,
        "chevron-down": 61779,
        "chevron-down-small": 61780,
        "checkbox-circle": 61781,
        "check": 61782,
        "check-circle": 61783,
        "chat": 61784,
        "category": 61785,
        "card": 61786,
        "camera": 61787,
        "calendar": 61788,
        "building": 61789,
        "box": 61790,
        "bar-chart": 61791,
        "ban-circle": 61792,
        "arrow-right": 61793,
        "arrow-left": 61794,
        "arrow-left-right": 61795
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
import { createContext } from "react";
var RemixIconContext = createContext({});
// remix_icons_react/RemixIcon.tsx
var RemixIconComponent = function(param) {
    var css = param.css, propVariant = param.variant, propFilled = param.filled, icon = param.icon, className = param.className;
    var contextProps = useContext(RemixIconContext);
    var _ref, _ref1;
    var variant = (_ref1 = propVariant !== null && propVariant !== void 0 ? propVariant : contextProps.variant) !== null && _ref1 !== void 0 ? _ref1 : ((_ref = propFilled !== null && propFilled !== void 0 ? propFilled : contextProps.filled) !== null && _ref !== void 0 ? _ref : false) ? "filled" : "regular";
    var value = getValue(variant, icon);
    return /* @__PURE__ */ React.createElement("span", {
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
export { codePoints, remix_icons_react_default as default };
