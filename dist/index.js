// remix_icons_react/RemixIcon.tsx
import React, { useContext } from "react";
// remix_icons_react/context.ts
import { createContext } from "react";
var RemixIconContext = createContext({});
// remix_icons_react/codepoints.ts
var codePoints = {
    "regular": {
        "youtube": 61697,
        "youtube-filled": 61698,
        "weight": 61699,
        "weight-filled": 61700,
        "warehouse": 61701,
        "warehouse-filled": 61702,
        "wallet": 61703,
        "wallet-filled": 61704,
        "verified": 61705,
        "verified-filled": 61706,
        "users": 61707,
        "users-filled": 61708,
        "user": 61709,
        "user-filled": 61710,
        "unlink": 61711,
        "twitter": 61712,
        "trash": 61713,
        "trash-filled": 61714,
        "timer": 61715,
        "timer-filled": 61716,
        "time": 61717,
        "time-filled": 61718,
        "support": 61719,
        "support-filled": 61720,
        "store-for-good": 61721,
        "store-for-good-filled": 61722,
        "stora": 61723,
        "stora-filled": 61724,
        "star": 61725,
        "star-filled": 61726,
        "shopping-cart": 61727,
        "shopping-cart-filled": 61728,
        "shopping-bag": 61729,
        "shopping-bag-filled": 61730,
        "shopping-bag-add": 61731,
        "shop": 61732,
        "shop-filled": 61733,
        "shield-keyhole": 61734,
        "shield-keyhole-filled": 61735,
        "share": 61736,
        "share-filled": 61737,
        "search": 61738,
        "search-filled": 61739,
        "ruler": 61740,
        "ruler-filled": 61741,
        "road-map": 61742,
        "road-map-filled": 61743,
        "radio-button-filled": 61744,
        "question-circle": 61745,
        "question-circle-filled": 61746,
        "question-answer": 61747,
        "question-answer-filled": 61748,
        "qr": 61749,
        "qr-filled": 61750,
        "profile": 61751,
        "profile-filled": 61752,
        "plus": 61753,
        "phone": 61754,
        "phone-filled": 61755,
        "pen": 61756,
        "pen-filled": 61757,
        "notifications": 61758,
        "notifications-filled": 61759,
        "navigation": 61760,
        "navigation-filled": 61761,
        "more": 61762,
        "more-filled": 61763,
        "minus": 61764,
        "message": 61765,
        "message-filled": 61766,
        "menu": 61767,
        "menu-right": 61768,
        "map": 61769,
        "map-pin": 61770,
        "map-pin-filled": 61771,
        "map-filled": 61772,
        "luggage-cart": 61773,
        "luggage-cart-filled": 61774,
        "loyalty": 61775,
        "loyalty-filled": 61776,
        "loop": 61777,
        "logout": 61778,
        "logout-filled": 61779,
        "lock": 61780,
        "lock-filled": 61781,
        "linkedin": 61782,
        "linkedin-filled": 61783,
        "link": 61784,
        "lifebuoy": 61785,
        "lifebuoy-filled": 61786,
        "layout-grid": 61787,
        "layout-grid-filled": 61788,
        "instagram": 61789,
        "instagram-filled": 61790,
        "information-circle": 61791,
        "information-circle-filled": 61792,
        "image": 61793,
        "image-filled": 61794,
        "history": 61795,
        "heart": 61796,
        "heart-filled": 61797,
        "handbox": 61798,
        "handbox-filled": 61799,
        "global": 61800,
        "global-filled": 61801,
        "gift": 61802,
        "gift-filled": 61803,
        "fullscreen": 61804,
        "focus": 61805,
        "focus-filled": 61806,
        "filter": 61807,
        "filter-filled": 61808,
        "file": 61809,
        "file-shield": 61810,
        "file-shield-filled": 61811,
        "file-list": 61812,
        "file-list-filled": 61813,
        "file-info": 61814,
        "file-info-filled": 61815,
        "file-filled": 61816,
        "file-edit": 61817,
        "file-edit-filled": 61818,
        "file-copy": 61819,
        "file-copy-filled": 61820,
        "file-1": 61821,
        "file-1-filled": 61822,
        "facebook": 61823,
        "facebook-filled": 61824,
        "eye": 61825,
        "eye-off": 61826,
        "eye-off-filled": 61827,
        "eye-filled": 61828,
        "error-triangle": 61829,
        "error-triangle-filled": 61830,
        "error-circle": 61831,
        "error-circle-filled": 61832,
        "envelope": 61833,
        "envelope-filled": 61834,
        "discount": 61835,
        "discount-filled": 61836,
        "coupon": 61837,
        "copy": 61838,
        "code": 61839,
        "close": 61840,
        "close-circle": 61841,
        "close-circle-filled": 61842,
        "chevron-up": 61843,
        "chevron-up-small": 61844,
        "chevron-right": 61845,
        "chevron-right-small": 61846,
        "chevron-left": 61847,
        "chevron-left-small": 61848,
        "chevron-down": 61849,
        "chevron-down-small": 61850,
        "checkbox-circle": 61851,
        "checkbox-circle-filled": 61852,
        "check": 61853,
        "check-filled": 61854,
        "check-circle": 61855,
        "check-circle-filled": 61856,
        "chat": 61857,
        "chat-filled": 61858,
        "category": 61859,
        "category-filled": 61860,
        "card": 61861,
        "card-filled": 61862,
        "camera": 61863,
        "camera-filled": 61864,
        "calendar": 61865,
        "calendar-filled": 61866,
        "building": 61867,
        "building-filled": 61868,
        "box": 61869,
        "box-filled": 61870,
        "bar-chart": 61871,
        "bar-chart-filled": 61872,
        "ban-circle": 61873,
        "ban-circle-filled": 61874,
        "arrow-right": 61875,
        "arrow-left": 61876,
        "arrow-left-right": 61877
    }
};
var codepoints_default = codePoints;
// remix_icons_react/get-string.ts
var getValue = function(variant, icon) {
    var codePoint = variant === "filled" && !icon.endsWith("-filled") ? codepoints_default.regular[icon + "-filled"] : codepoints_default.regular[icon];
    if (codePoint === void 0 || codePoint === null || isNaN(codePoint)) {
        if (variant === "filled") {
            if (!icon.endsWith("-filled")) {
                return getValue("regular", icon + "-filled");
            }
        } else {
            return getValue("filled", icon + (icon.endsWith("-filled") ? "" : "-filled"));
        }
        return "";
    }
    return String.fromCodePoint(codePoint);
};
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
