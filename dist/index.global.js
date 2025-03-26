"use strict";
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
(function() {
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __commonJS = function(cb, mod) {
        return function __require() {
            return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
                exports: {}
            }).exports, mod), mod.exports;
        };
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
    // node_modules/react/cjs/react.production.js
    var require_react_production = __commonJS({
        "node_modules/react/cjs/react.production.js": function(exports) {
            "use strict";
            var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
            var REACT_PORTAL_TYPE = Symbol.for("react.portal");
            var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
            var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
            var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
            var REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
            var REACT_CONTEXT_TYPE = Symbol.for("react.context");
            var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
            var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
            var REACT_MEMO_TYPE = Symbol.for("react.memo");
            var REACT_LAZY_TYPE = Symbol.for("react.lazy");
            var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
            function getIteratorFn(maybeIterable) {
                if (null === maybeIterable || "object" !== (typeof maybeIterable === "undefined" ? "undefined" : _type_of(maybeIterable))) return null;
                maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
                return "function" === typeof maybeIterable ? maybeIterable : null;
            }
            var ReactNoopUpdateQueue = {
                isMounted: function isMounted() {
                    return false;
                },
                enqueueForceUpdate: function enqueueForceUpdate() {},
                enqueueReplaceState: function enqueueReplaceState() {},
                enqueueSetState: function enqueueSetState() {}
            };
            var assign = Object.assign;
            var emptyObject = {};
            function Component(props, context, updater) {
                this.props = props;
                this.context = context;
                this.refs = emptyObject;
                this.updater = updater || ReactNoopUpdateQueue;
            }
            Component.prototype.isReactComponent = {};
            Component.prototype.setState = function(partialState, callback) {
                if ("object" !== (typeof partialState === "undefined" ? "undefined" : _type_of(partialState)) && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, partialState, callback, "setState");
            };
            Component.prototype.forceUpdate = function(callback) {
                this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
            };
            function ComponentDummy() {}
            ComponentDummy.prototype = Component.prototype;
            function PureComponent(props, context, updater) {
                this.props = props;
                this.context = context;
                this.refs = emptyObject;
                this.updater = updater || ReactNoopUpdateQueue;
            }
            var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
            pureComponentPrototype.constructor = PureComponent;
            assign(pureComponentPrototype, Component.prototype);
            pureComponentPrototype.isPureReactComponent = true;
            var isArrayImpl = Array.isArray;
            var ReactSharedInternals = {
                H: null,
                A: null,
                T: null,
                S: null
            };
            var hasOwnProperty = Object.prototype.hasOwnProperty;
            function ReactElement(type, key, self, source, owner, props) {
                self = props.ref;
                return {
                    $$typeof: REACT_ELEMENT_TYPE,
                    type: type,
                    key: key,
                    ref: void 0 !== self ? self : null,
                    props: props
                };
            }
            function cloneAndReplaceKey(oldElement, newKey) {
                return ReactElement(oldElement.type, newKey, void 0, void 0, void 0, oldElement.props);
            }
            function isValidElement(object) {
                return "object" === (typeof object === "undefined" ? "undefined" : _type_of(object)) && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
            }
            function escape(key) {
                var escaperLookup = {
                    "=": "=0",
                    ":": "=2"
                };
                return "$" + key.replace(/[=:]/g, function(match) {
                    return escaperLookup[match];
                });
            }
            var userProvidedKeyEscapeRegex = /\/+/g;
            function getElementKey(element, index) {
                return "object" === (typeof element === "undefined" ? "undefined" : _type_of(element)) && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
            }
            function noop$1() {}
            function resolveThenable(thenable) {
                switch(thenable.status){
                    case "fulfilled":
                        return thenable.value;
                    case "rejected":
                        throw thenable.reason;
                    default:
                        switch("string" === typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
                            "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
                        }, function(error) {
                            "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                        })), thenable.status){
                            case "fulfilled":
                                return thenable.value;
                            case "rejected":
                                throw thenable.reason;
                        }
                }
                throw thenable;
            }
            function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
                var type = typeof children === "undefined" ? "undefined" : _type_of(children);
                if ("undefined" === type || "boolean" === type) children = null;
                var invokeCallback = false;
                if (null === children) invokeCallback = true;
                else switch(type){
                    case "bigint":
                    case "string":
                    case "number":
                        invokeCallback = true;
                        break;
                    case "object":
                        switch(children.$$typeof){
                            case REACT_ELEMENT_TYPE:
                            case REACT_PORTAL_TYPE:
                                invokeCallback = true;
                                break;
                            case REACT_LAZY_TYPE:
                                return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
                        }
                }
                if (invokeCallback) return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
                    return c;
                })) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + invokeCallback)), array.push(callback)), 1;
                invokeCallback = 0;
                var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
                if (isArrayImpl(children)) for(var i = 0; i < children.length; i++)nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
                else if (i = getIteratorFn(children), "function" === typeof i) for(children = i.call(children), i = 0; !(nameSoFar = children.next()).done;)nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
                else if ("object" === type) {
                    if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
                    array = String(children);
                    throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
                }
                return invokeCallback;
            }
            function mapChildren(children, func, context) {
                if (null == children) return children;
                var result = [], count = 0;
                mapIntoArray(children, result, "", "", function(child) {
                    return func.call(context, child, count++);
                });
                return result;
            }
            function lazyInitializer(payload) {
                if (-1 === payload._status) {
                    var ctor = payload._result;
                    ctor = ctor();
                    ctor.then(function(moduleObject) {
                        if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
                    }, function(error) {
                        if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
                    });
                    -1 === payload._status && (payload._status = 0, payload._result = ctor);
                }
                if (1 === payload._status) return payload._result.default;
                throw payload._result;
            }
            var reportGlobalError = "function" === typeof reportError ? reportError : function reportGlobalError(error) {
                if ("object" === (typeof window === "undefined" ? "undefined" : _type_of(window)) && "function" === typeof window.ErrorEvent) {
                    var event = new window.ErrorEvent("error", {
                        bubbles: true,
                        cancelable: true,
                        message: "object" === (typeof error === "undefined" ? "undefined" : _type_of(error)) && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
                        error: error
                    });
                    if (!window.dispatchEvent(event)) return;
                } else if ("object" === (typeof process === "undefined" ? "undefined" : _type_of(process)) && "function" === typeof process.emit) {
                    process.emit("uncaughtException", error);
                    return;
                }
                console.error(error);
            };
            function noop() {}
            exports.Children = {
                map: mapChildren,
                forEach: function forEach(children, forEachFunc, forEachContext) {
                    mapChildren(children, function() {
                        forEachFunc.apply(this, arguments);
                    }, forEachContext);
                },
                count: function count(children) {
                    var n = 0;
                    mapChildren(children, function() {
                        n++;
                    });
                    return n;
                },
                toArray: function toArray(children) {
                    return mapChildren(children, function(child) {
                        return child;
                    }) || [];
                },
                only: function only(children) {
                    if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
                    return children;
                }
            };
            exports.Component = Component;
            exports.Fragment = REACT_FRAGMENT_TYPE;
            exports.Profiler = REACT_PROFILER_TYPE;
            exports.PureComponent = PureComponent;
            exports.StrictMode = REACT_STRICT_MODE_TYPE;
            exports.Suspense = REACT_SUSPENSE_TYPE;
            exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
            exports.act = function() {
                throw Error("act(...) is not supported in production builds of React.");
            };
            exports.cache = function(fn) {
                return function() {
                    return fn.apply(null, arguments);
                };
            };
            exports.cloneElement = function(element, config, children) {
                if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
                var props = assign({}, element.props), key = element.key, owner = void 0;
                if (null != config) for(propName in void 0 !== config.ref && (owner = void 0), void 0 !== config.key && (key = "" + config.key), config)!hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
                var propName = arguments.length - 2;
                if (1 === propName) props.children = children;
                else if (1 < propName) {
                    for(var childArray = Array(propName), i = 0; i < propName; i++)childArray[i] = arguments[i + 2];
                    props.children = childArray;
                }
                return ReactElement(element.type, key, void 0, void 0, owner, props);
            };
            exports.createContext = function(defaultValue) {
                defaultValue = {
                    $$typeof: REACT_CONTEXT_TYPE,
                    _currentValue: defaultValue,
                    _currentValue2: defaultValue,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                };
                defaultValue.Provider = defaultValue;
                defaultValue.Consumer = {
                    $$typeof: REACT_CONSUMER_TYPE,
                    _context: defaultValue
                };
                return defaultValue;
            };
            exports.createElement = function(type, config, children) {
                var propName, props = {}, key = null;
                if (null != config) for(propName in void 0 !== config.key && (key = "" + config.key), config)hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
                var childrenLength = arguments.length - 2;
                if (1 === childrenLength) props.children = children;
                else if (1 < childrenLength) {
                    for(var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 2];
                    props.children = childArray;
                }
                if (type && type.defaultProps) for(propName in childrenLength = type.defaultProps, childrenLength)void 0 === props[propName] && (props[propName] = childrenLength[propName]);
                return ReactElement(type, key, void 0, void 0, null, props);
            };
            exports.createRef = function() {
                return {
                    current: null
                };
            };
            exports.forwardRef = function(render) {
                return {
                    $$typeof: REACT_FORWARD_REF_TYPE,
                    render: render
                };
            };
            exports.isValidElement = isValidElement;
            exports.lazy = function(ctor) {
                return {
                    $$typeof: REACT_LAZY_TYPE,
                    _payload: {
                        _status: -1,
                        _result: ctor
                    },
                    _init: lazyInitializer
                };
            };
            exports.memo = function(type, compare) {
                return {
                    $$typeof: REACT_MEMO_TYPE,
                    type: type,
                    compare: void 0 === compare ? null : compare
                };
            };
            exports.startTransition = function(scope) {
                var prevTransition = ReactSharedInternals.T, currentTransition = {};
                ReactSharedInternals.T = currentTransition;
                try {
                    var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
                    null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
                    "object" === (typeof returnValue === "undefined" ? "undefined" : _type_of(returnValue)) && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
                } catch (error) {
                    reportGlobalError(error);
                } finally{
                    ReactSharedInternals.T = prevTransition;
                }
            };
            exports.unstable_useCacheRefresh = function() {
                return ReactSharedInternals.H.useCacheRefresh();
            };
            exports.use = function(usable) {
                return ReactSharedInternals.H.use(usable);
            };
            exports.useActionState = function(action, initialState, permalink) {
                return ReactSharedInternals.H.useActionState(action, initialState, permalink);
            };
            exports.useCallback = function(callback, deps) {
                return ReactSharedInternals.H.useCallback(callback, deps);
            };
            exports.useContext = function(Context) {
                return ReactSharedInternals.H.useContext(Context);
            };
            exports.useDebugValue = function() {};
            exports.useDeferredValue = function(value, initialValue) {
                return ReactSharedInternals.H.useDeferredValue(value, initialValue);
            };
            exports.useEffect = function(create, deps) {
                return ReactSharedInternals.H.useEffect(create, deps);
            };
            exports.useId = function() {
                return ReactSharedInternals.H.useId();
            };
            exports.useImperativeHandle = function(ref, create, deps) {
                return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
            };
            exports.useInsertionEffect = function(create, deps) {
                return ReactSharedInternals.H.useInsertionEffect(create, deps);
            };
            exports.useLayoutEffect = function(create, deps) {
                return ReactSharedInternals.H.useLayoutEffect(create, deps);
            };
            exports.useMemo = function(create, deps) {
                return ReactSharedInternals.H.useMemo(create, deps);
            };
            exports.useOptimistic = function(passthrough, reducer) {
                return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
            };
            exports.useReducer = function(reducer, initialArg, init) {
                return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
            };
            exports.useRef = function(initialValue) {
                return ReactSharedInternals.H.useRef(initialValue);
            };
            exports.useState = function(initialState) {
                return ReactSharedInternals.H.useState(initialState);
            };
            exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
                return ReactSharedInternals.H.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
            };
            exports.useTransition = function() {
                return ReactSharedInternals.H.useTransition();
            };
            exports.version = "19.0.0";
        }
    });
    // node_modules/react/cjs/react.development.js
    var require_react_development = __commonJS({
        "node_modules/react/cjs/react.development.js": function(exports, module) {
            "use strict";
            "production" !== process.env.NODE_ENV && function() {
                function defineDeprecationWarning(methodName, info) {
                    Object.defineProperty(Component.prototype, methodName, {
                        get: function get() {
                            console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                        }
                    });
                }
                function getIteratorFn(maybeIterable) {
                    if (null === maybeIterable || "object" !== (typeof maybeIterable === "undefined" ? "undefined" : _type_of(maybeIterable))) return null;
                    maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
                    return "function" === typeof maybeIterable ? maybeIterable : null;
                }
                function warnNoop(publicInstance, callerName) {
                    publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
                    var warningKey = publicInstance + "." + callerName;
                    didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, publicInstance), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
                }
                function Component(props, context, updater) {
                    this.props = props;
                    this.context = context;
                    this.refs = emptyObject;
                    this.updater = updater || ReactNoopUpdateQueue;
                }
                function ComponentDummy() {}
                function PureComponent(props, context, updater) {
                    this.props = props;
                    this.context = context;
                    this.refs = emptyObject;
                    this.updater = updater || ReactNoopUpdateQueue;
                }
                function testStringCoercion(value) {
                    return "" + value;
                }
                function checkKeyStringCoercion(value) {
                    try {
                        testStringCoercion(value);
                        var JSCompiler_inline_result = false;
                    } catch (e) {
                        JSCompiler_inline_result = true;
                    }
                    if (JSCompiler_inline_result) {
                        JSCompiler_inline_result = console;
                        var JSCompiler_temp_const = JSCompiler_inline_result.error;
                        var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
                        JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
                        return testStringCoercion(value);
                    }
                }
                function getComponentNameFromType(type) {
                    if (null == type) return null;
                    if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
                    if ("string" === typeof type) return type;
                    switch(type){
                        case REACT_FRAGMENT_TYPE:
                            return "Fragment";
                        case REACT_PORTAL_TYPE:
                            return "Portal";
                        case REACT_PROFILER_TYPE:
                            return "Profiler";
                        case REACT_STRICT_MODE_TYPE:
                            return "StrictMode";
                        case REACT_SUSPENSE_TYPE:
                            return "Suspense";
                        case REACT_SUSPENSE_LIST_TYPE:
                            return "SuspenseList";
                    }
                    if ("object" === (typeof type === "undefined" ? "undefined" : _type_of(type))) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
                        case REACT_CONTEXT_TYPE:
                            return (type.displayName || "Context") + ".Provider";
                        case REACT_CONSUMER_TYPE:
                            return (type._context.displayName || "Context") + ".Consumer";
                        case REACT_FORWARD_REF_TYPE:
                            var innerType = type.render;
                            type = type.displayName;
                            type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                            return type;
                        case REACT_MEMO_TYPE:
                            return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
                        case REACT_LAZY_TYPE:
                            innerType = type._payload;
                            type = type._init;
                            try {
                                return getComponentNameFromType(type(innerType));
                            } catch (x) {}
                    }
                    return null;
                }
                function isValidElementType(type) {
                    return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === (typeof type === "undefined" ? "undefined" : _type_of(type)) && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || void 0 !== type.getModuleId) ? true : false;
                }
                function disabledLog() {}
                function disableLogs() {
                    if (0 === disabledDepth) {
                        prevLog = console.log;
                        prevInfo = console.info;
                        prevWarn = console.warn;
                        prevError = console.error;
                        prevGroup = console.group;
                        prevGroupCollapsed = console.groupCollapsed;
                        prevGroupEnd = console.groupEnd;
                        var props = {
                            configurable: true,
                            enumerable: true,
                            value: disabledLog,
                            writable: true
                        };
                        Object.defineProperties(console, {
                            info: props,
                            log: props,
                            warn: props,
                            error: props,
                            group: props,
                            groupCollapsed: props,
                            groupEnd: props
                        });
                    }
                    disabledDepth++;
                }
                function reenableLogs() {
                    disabledDepth--;
                    if (0 === disabledDepth) {
                        var props = {
                            configurable: true,
                            enumerable: true,
                            writable: true
                        };
                        Object.defineProperties(console, {
                            log: assign({}, props, {
                                value: prevLog
                            }),
                            info: assign({}, props, {
                                value: prevInfo
                            }),
                            warn: assign({}, props, {
                                value: prevWarn
                            }),
                            error: assign({}, props, {
                                value: prevError
                            }),
                            group: assign({}, props, {
                                value: prevGroup
                            }),
                            groupCollapsed: assign({}, props, {
                                value: prevGroupCollapsed
                            }),
                            groupEnd: assign({}, props, {
                                value: prevGroupEnd
                            })
                        });
                    }
                    0 > disabledDepth && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
                }
                function describeBuiltInComponentFrame(name) {
                    if (void 0 === prefix) try {
                        throw Error();
                    } catch (x) {
                        var match = x.stack.trim().match(/\n( *(at )?)/);
                        prefix = match && match[1] || "";
                        suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
                    }
                    return "\n" + prefix + name + suffix;
                }
                function describeNativeComponentFrame(fn, construct) {
                    if (!fn || reentry) return "";
                    var frame = componentFrameCache.get(fn);
                    if (void 0 !== frame) return frame;
                    reentry = true;
                    frame = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    var previousDispatcher = null;
                    previousDispatcher = ReactSharedInternals.H;
                    ReactSharedInternals.H = null;
                    disableLogs();
                    try {
                        var RunInRootFrame = {
                            DetermineComponentFrameRoot: function DetermineComponentFrameRoot() {
                                try {
                                    if (construct) {
                                        var Fake = function Fake() {
                                            throw Error();
                                        };
                                        Object.defineProperty(Fake.prototype, "props", {
                                            set: function set() {
                                                throw Error();
                                            }
                                        });
                                        if ("object" === (typeof Reflect === "undefined" ? "undefined" : _type_of(Reflect)) && Reflect.construct) {
                                            try {
                                                Reflect.construct(Fake, []);
                                            } catch (x) {
                                                var control = x;
                                            }
                                            Reflect.construct(fn, [], Fake);
                                        } else {
                                            try {
                                                Fake.call();
                                            } catch (x$0) {
                                                control = x$0;
                                            }
                                            fn.call(Fake.prototype);
                                        }
                                    } else {
                                        try {
                                            throw Error();
                                        } catch (x$1) {
                                            control = x$1;
                                        }
                                        (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {});
                                    }
                                } catch (sample) {
                                    if (sample && control && "string" === typeof sample.stack) return [
                                        sample.stack,
                                        control.stack
                                    ];
                                }
                                return [
                                    null,
                                    null
                                ];
                            }
                        };
                        RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                        var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
                        namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", {
                            value: "DetermineComponentFrameRoot"
                        });
                        var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
                        if (sampleStack && controlStack) {
                            var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
                            for(_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot");)namePropDescriptor++;
                            for(; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot");)_RunInRootFrame$Deter++;
                            if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length) for(namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter];)_RunInRootFrame$Deter--;
                            for(; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                                if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                                    do if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                                        var _frame = "\n" + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                                        fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                                        "function" === typeof fn && componentFrameCache.set(fn, _frame);
                                        return _frame;
                                    }
                                    while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
                                }
                                break;
                            }
                        }
                    } finally{
                        reentry = false, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
                    }
                    sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
                    "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
                    return sampleLines;
                }
                function describeUnknownElementTypeFrameInDEV(type) {
                    if (null == type) return "";
                    if ("function" === typeof type) {
                        var prototype = type.prototype;
                        return describeNativeComponentFrame(type, !(!prototype || !prototype.isReactComponent));
                    }
                    if ("string" === typeof type) return describeBuiltInComponentFrame(type);
                    switch(type){
                        case REACT_SUSPENSE_TYPE:
                            return describeBuiltInComponentFrame("Suspense");
                        case REACT_SUSPENSE_LIST_TYPE:
                            return describeBuiltInComponentFrame("SuspenseList");
                    }
                    if ("object" === (typeof type === "undefined" ? "undefined" : _type_of(type))) switch(type.$$typeof){
                        case REACT_FORWARD_REF_TYPE:
                            return type = describeNativeComponentFrame(type.render, false), type;
                        case REACT_MEMO_TYPE:
                            return describeUnknownElementTypeFrameInDEV(type.type);
                        case REACT_LAZY_TYPE:
                            prototype = type._payload;
                            type = type._init;
                            try {
                                return describeUnknownElementTypeFrameInDEV(type(prototype));
                            } catch (x) {}
                    }
                    return "";
                }
                function getOwner() {
                    var dispatcher = ReactSharedInternals.A;
                    return null === dispatcher ? null : dispatcher.getOwner();
                }
                function hasValidKey(config) {
                    if (hasOwnProperty.call(config, "key")) {
                        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                        if (getter && getter.isReactWarning) return false;
                    }
                    return void 0 !== config.key;
                }
                function defineKeyPropWarningGetter(props, displayName) {
                    function warnAboutAccessingKey() {
                        specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
                    }
                    warnAboutAccessingKey.isReactWarning = true;
                    Object.defineProperty(props, "key", {
                        get: warnAboutAccessingKey,
                        configurable: true
                    });
                }
                function elementRefGetterWithDeprecationWarning() {
                    var componentName = getComponentNameFromType(this.type);
                    didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
                    componentName = this.props.ref;
                    return void 0 !== componentName ? componentName : null;
                }
                function ReactElement(type, key, self, source, owner, props) {
                    self = props.ref;
                    type = {
                        $$typeof: REACT_ELEMENT_TYPE,
                        type: type,
                        key: key,
                        props: props,
                        _owner: owner
                    };
                    null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
                        enumerable: false,
                        get: elementRefGetterWithDeprecationWarning
                    }) : Object.defineProperty(type, "ref", {
                        enumerable: false,
                        value: null
                    });
                    type._store = {};
                    Object.defineProperty(type._store, "validated", {
                        configurable: false,
                        enumerable: false,
                        writable: true,
                        value: 0
                    });
                    Object.defineProperty(type, "_debugInfo", {
                        configurable: false,
                        enumerable: false,
                        writable: true,
                        value: null
                    });
                    Object.freeze && (Object.freeze(type.props), Object.freeze(type));
                    return type;
                }
                function cloneAndReplaceKey(oldElement, newKey) {
                    newKey = ReactElement(oldElement.type, newKey, void 0, void 0, oldElement._owner, oldElement.props);
                    newKey._store.validated = oldElement._store.validated;
                    return newKey;
                }
                function validateChildKeys(node, parentType) {
                    if ("object" === (typeof node === "undefined" ? "undefined" : _type_of(node)) && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
                        if (isArrayImpl(node)) for(var i = 0; i < node.length; i++){
                            var child = node[i];
                            isValidElement(child) && validateExplicitKey(child, parentType);
                        }
                        else if (isValidElement(node)) node._store && (node._store.validated = 1);
                        else if (i = getIteratorFn(node), "function" === typeof i && i !== node.entries && (i = i.call(node), i !== node)) for(; !(node = i.next()).done;)isValidElement(node.value) && validateExplicitKey(node.value, parentType);
                    }
                }
                function isValidElement(object) {
                    return "object" === (typeof object === "undefined" ? "undefined" : _type_of(object)) && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
                }
                function validateExplicitKey(element, parentType) {
                    if (element._store && !element._store.validated && null == element.key && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
                        ownerHasKeyUseWarning[parentType] = true;
                        var childOwner = "";
                        element && null != element._owner && element._owner !== getOwner() && (childOwner = null, "number" === typeof element._owner.tag ? childOwner = getComponentNameFromType(element._owner.type) : "string" === typeof element._owner.name && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
                        var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
                        ReactSharedInternals.getCurrentStack = function() {
                            var stack = describeUnknownElementTypeFrameInDEV(element.type);
                            prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
                            return stack;
                        };
                        console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', parentType, childOwner);
                        ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
                    }
                }
                function getCurrentComponentErrorInfo(parentType) {
                    var info = "", owner = getOwner();
                    owner && (owner = getComponentNameFromType(owner.type)) && (info = "\n\nCheck the render method of `" + owner + "`.");
                    info || (parentType = getComponentNameFromType(parentType)) && (info = "\n\nCheck the top-level render call using <" + parentType + ">.");
                    return info;
                }
                function escape(key) {
                    var escaperLookup = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + key.replace(/[=:]/g, function(match) {
                        return escaperLookup[match];
                    });
                }
                function getElementKey(element, index) {
                    return "object" === (typeof element === "undefined" ? "undefined" : _type_of(element)) && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
                }
                function noop$1() {}
                function resolveThenable(thenable) {
                    switch(thenable.status){
                        case "fulfilled":
                            return thenable.value;
                        case "rejected":
                            throw thenable.reason;
                        default:
                            switch("string" === typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
                                "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
                            }, function(error) {
                                "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                            })), thenable.status){
                                case "fulfilled":
                                    return thenable.value;
                                case "rejected":
                                    throw thenable.reason;
                            }
                    }
                    throw thenable;
                }
                function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
                    var type = typeof children === "undefined" ? "undefined" : _type_of(children);
                    if ("undefined" === type || "boolean" === type) children = null;
                    var invokeCallback = false;
                    if (null === children) invokeCallback = true;
                    else switch(type){
                        case "bigint":
                        case "string":
                        case "number":
                            invokeCallback = true;
                            break;
                        case "object":
                            switch(children.$$typeof){
                                case REACT_ELEMENT_TYPE:
                                case REACT_PORTAL_TYPE:
                                    invokeCallback = true;
                                    break;
                                case REACT_LAZY_TYPE:
                                    return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
                            }
                    }
                    if (invokeCallback) {
                        invokeCallback = children;
                        callback = callback(invokeCallback);
                        var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
                        isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
                            return c;
                        })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + childKey), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
                        return 1;
                    }
                    invokeCallback = 0;
                    childKey = "" === nameSoFar ? "." : nameSoFar + ":";
                    if (isArrayImpl(children)) for(var i = 0; i < children.length; i++)nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
                    else if (i = getIteratorFn(children), "function" === typeof i) for(i === children.entries && (didWarnAboutMaps || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = true), children = i.call(children), i = 0; !(nameSoFar = children.next()).done;)nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
                    else if ("object" === type) {
                        if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
                        array = String(children);
                        throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
                    }
                    return invokeCallback;
                }
                function mapChildren(children, func, context) {
                    if (null == children) return children;
                    var result = [], count = 0;
                    mapIntoArray(children, result, "", "", function(child) {
                        return func.call(context, child, count++);
                    });
                    return result;
                }
                function lazyInitializer(payload) {
                    if (-1 === payload._status) {
                        var ctor = payload._result;
                        ctor = ctor();
                        ctor.then(function(moduleObject) {
                            if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
                        }, function(error) {
                            if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
                        });
                        -1 === payload._status && (payload._status = 0, payload._result = ctor);
                    }
                    if (1 === payload._status) return ctor = payload._result, void 0 === ctor && console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", ctor), "default" in ctor || console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", ctor), ctor.default;
                    throw payload._result;
                }
                function resolveDispatcher() {
                    var dispatcher = ReactSharedInternals.H;
                    null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
                    return dispatcher;
                }
                function noop() {}
                function enqueueTask(task) {
                    if (null === enqueueTaskImpl) try {
                        var requireString = ("require" + Math.random()).slice(0, 7);
                        enqueueTaskImpl = (module && module[requireString]).call(module, "timers").setImmediate;
                    } catch (_err) {
                        enqueueTaskImpl = function enqueueTaskImpl(callback) {
                            false === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = true, "undefined" === typeof MessageChannel && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
                            var channel = new MessageChannel();
                            channel.port1.onmessage = callback;
                            channel.port2.postMessage(void 0);
                        };
                    }
                    return enqueueTaskImpl(task);
                }
                function aggregateErrors(errors) {
                    return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
                }
                function popActScope(prevActQueue, prevActScopeDepth) {
                    prevActScopeDepth !== actScopeDepth - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
                    actScopeDepth = prevActScopeDepth;
                }
                function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
                    var queue = ReactSharedInternals.actQueue;
                    if (null !== queue) if (0 !== queue.length) try {
                        flushActQueue(queue);
                        enqueueTask(function() {
                            return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                        });
                        return;
                    } catch (error) {
                        ReactSharedInternals.thrownErrors.push(error);
                    }
                    else ReactSharedInternals.actQueue = null;
                    0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
                }
                function flushActQueue(queue) {
                    if (!isFlushing) {
                        isFlushing = true;
                        var i = 0;
                        try {
                            for(; i < queue.length; i++){
                                var callback = queue[i];
                                do {
                                    ReactSharedInternals.didUsePromise = false;
                                    var continuation = callback(false);
                                    if (null !== continuation) {
                                        if (ReactSharedInternals.didUsePromise) {
                                            queue[i] = callback;
                                            queue.splice(0, i);
                                            return;
                                        }
                                        callback = continuation;
                                    } else break;
                                }while (1);
                            }
                            queue.length = 0;
                        } catch (error) {
                            queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
                        } finally{
                            isFlushing = false;
                        }
                    }
                }
                "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
                var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
                Symbol.for("react.provider");
                var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
                    isMounted: function isMounted() {
                        return false;
                    },
                    enqueueForceUpdate: function enqueueForceUpdate(publicInstance) {
                        warnNoop(publicInstance, "forceUpdate");
                    },
                    enqueueReplaceState: function enqueueReplaceState(publicInstance) {
                        warnNoop(publicInstance, "replaceState");
                    },
                    enqueueSetState: function enqueueSetState(publicInstance) {
                        warnNoop(publicInstance, "setState");
                    }
                }, assign = Object.assign, emptyObject = {};
                Object.freeze(emptyObject);
                Component.prototype.isReactComponent = {};
                Component.prototype.setState = function(partialState, callback) {
                    if ("object" !== (typeof partialState === "undefined" ? "undefined" : _type_of(partialState)) && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, partialState, callback, "setState");
                };
                Component.prototype.forceUpdate = function(callback) {
                    this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
                };
                var deprecatedAPIs = {
                    isMounted: [
                        "isMounted",
                        "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
                    ],
                    replaceState: [
                        "replaceState",
                        "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
                    ]
                }, fnName;
                for(fnName in deprecatedAPIs)deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
                ComponentDummy.prototype = Component.prototype;
                deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
                deprecatedAPIs.constructor = PureComponent;
                assign(deprecatedAPIs, Component.prototype);
                deprecatedAPIs.isPureReactComponent = true;
                var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals = {
                    H: null,
                    A: null,
                    T: null,
                    S: null,
                    actQueue: null,
                    isBatchingLegacy: false,
                    didScheduleLegacyUpdate: false,
                    didUsePromise: false,
                    thrownErrors: [],
                    getCurrentStack: null
                }, hasOwnProperty = Object.prototype.hasOwnProperty, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
                disabledLog.__reactDisabledLog = true;
                var prefix, suffix, reentry = false;
                var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
                var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
                var didWarnAboutElementRef = {};
                var ownerHasKeyUseWarning = {}, didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function reportGlobalError(error) {
                    if ("object" === (typeof window === "undefined" ? "undefined" : _type_of(window)) && "function" === typeof window.ErrorEvent) {
                        var event = new window.ErrorEvent("error", {
                            bubbles: true,
                            cancelable: true,
                            message: "object" === (typeof error === "undefined" ? "undefined" : _type_of(error)) && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
                            error: error
                        });
                        if (!window.dispatchEvent(event)) return;
                    } else if ("object" === (typeof process === "undefined" ? "undefined" : _type_of(process)) && "function" === typeof process.emit) {
                        process.emit("uncaughtException", error);
                        return;
                    }
                    console.error(error);
                }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function queueSeveralMicrotasks(callback) {
                    queueMicrotask(function() {
                        return queueMicrotask(callback);
                    });
                } : enqueueTask;
                exports.Children = {
                    map: mapChildren,
                    forEach: function forEach(children, forEachFunc, forEachContext) {
                        mapChildren(children, function() {
                            forEachFunc.apply(this, arguments);
                        }, forEachContext);
                    },
                    count: function count(children) {
                        var n = 0;
                        mapChildren(children, function() {
                            n++;
                        });
                        return n;
                    },
                    toArray: function toArray(children) {
                        return mapChildren(children, function(child) {
                            return child;
                        }) || [];
                    },
                    only: function only(children) {
                        if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
                        return children;
                    }
                };
                exports.Component = Component;
                exports.Fragment = REACT_FRAGMENT_TYPE;
                exports.Profiler = REACT_PROFILER_TYPE;
                exports.PureComponent = PureComponent;
                exports.StrictMode = REACT_STRICT_MODE_TYPE;
                exports.Suspense = REACT_SUSPENSE_TYPE;
                exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
                exports.act = function(callback) {
                    var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
                    actScopeDepth++;
                    var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = false;
                    try {
                        var result = callback();
                    } catch (error) {
                        ReactSharedInternals.thrownErrors.push(error);
                    }
                    if (0 < ReactSharedInternals.thrownErrors.length) throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
                    if (null !== result && "object" === (typeof result === "undefined" ? "undefined" : _type_of(result)) && "function" === typeof result.then) {
                        var thenable = result;
                        queueSeveralMicrotasks(function() {
                            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
                        });
                        return {
                            then: function then(resolve, reject) {
                                didAwaitActCall = true;
                                thenable.then(function(returnValue) {
                                    popActScope(prevActQueue, prevActScopeDepth);
                                    if (0 === prevActScopeDepth) {
                                        try {
                                            flushActQueue(queue), enqueueTask(function() {
                                                return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                            });
                                        } catch (error$2) {
                                            ReactSharedInternals.thrownErrors.push(error$2);
                                        }
                                        if (0 < ReactSharedInternals.thrownErrors.length) {
                                            var _thrownError = aggregateErrors(ReactSharedInternals.thrownErrors);
                                            ReactSharedInternals.thrownErrors.length = 0;
                                            reject(_thrownError);
                                        }
                                    } else resolve(returnValue);
                                }, function(error) {
                                    popActScope(prevActQueue, prevActScopeDepth);
                                    0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                                });
                            }
                        };
                    }
                    var returnValue$jscomp$0 = result;
                    popActScope(prevActQueue, prevActScopeDepth);
                    0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
                        didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
                    }), ReactSharedInternals.actQueue = null);
                    if (0 < ReactSharedInternals.thrownErrors.length) throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
                    return {
                        then: function then(resolve, reject) {
                            didAwaitActCall = true;
                            0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
                                return recursivelyFlushAsyncActWork(returnValue$jscomp$0, resolve, reject);
                            })) : resolve(returnValue$jscomp$0);
                        }
                    };
                };
                exports.cache = function(fn) {
                    return function() {
                        return fn.apply(null, arguments);
                    };
                };
                exports.cloneElement = function(element, config, children) {
                    if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
                    var props = assign({}, element.props), key = element.key, owner = element._owner;
                    if (null != config) {
                        var JSCompiler_inline_result;
                        a: {
                            if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(config, "ref").get) && JSCompiler_inline_result.isReactWarning) {
                                JSCompiler_inline_result = false;
                                break a;
                            }
                            JSCompiler_inline_result = void 0 !== config.ref;
                        }
                        JSCompiler_inline_result && (owner = getOwner());
                        hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
                        for(propName in config)!hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
                    }
                    var propName = arguments.length - 2;
                    if (1 === propName) props.children = children;
                    else if (1 < propName) {
                        JSCompiler_inline_result = Array(propName);
                        for(var i = 0; i < propName; i++)JSCompiler_inline_result[i] = arguments[i + 2];
                        props.children = JSCompiler_inline_result;
                    }
                    props = ReactElement(element.type, key, void 0, void 0, owner, props);
                    for(key = 2; key < arguments.length; key++)validateChildKeys(arguments[key], props.type);
                    return props;
                };
                exports.createContext = function(defaultValue) {
                    defaultValue = {
                        $$typeof: REACT_CONTEXT_TYPE,
                        _currentValue: defaultValue,
                        _currentValue2: defaultValue,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null
                    };
                    defaultValue.Provider = defaultValue;
                    defaultValue.Consumer = {
                        $$typeof: REACT_CONSUMER_TYPE,
                        _context: defaultValue
                    };
                    defaultValue._currentRenderer = null;
                    defaultValue._currentRenderer2 = null;
                    return defaultValue;
                };
                exports.createElement = function(type, config, children) {
                    if (isValidElementType(type)) for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i], type);
                    else {
                        i = "";
                        if (void 0 === type || "object" === (typeof type === "undefined" ? "undefined" : _type_of(type)) && null !== type && 0 === Object.keys(type).length) i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                        if (null === type) var typeString = "null";
                        else isArrayImpl(type) ? typeString = "array" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : typeString = typeof type === "undefined" ? "undefined" : _type_of(type);
                        console.error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, i);
                    }
                    var propName;
                    i = {};
                    typeString = null;
                    if (null != config) for(propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), hasValidKey(config) && (checkKeyStringCoercion(config.key), typeString = "" + config.key), config)hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
                    var childrenLength = arguments.length - 2;
                    if (1 === childrenLength) i.children = children;
                    else if (1 < childrenLength) {
                        for(var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)childArray[_i] = arguments[_i + 2];
                        Object.freeze && Object.freeze(childArray);
                        i.children = childArray;
                    }
                    if (type && type.defaultProps) for(propName in childrenLength = type.defaultProps, childrenLength)void 0 === i[propName] && (i[propName] = childrenLength[propName]);
                    typeString && defineKeyPropWarningGetter(i, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
                    return ReactElement(type, typeString, void 0, void 0, getOwner(), i);
                };
                exports.createRef = function() {
                    var refObject = {
                        current: null
                    };
                    Object.seal(refObject);
                    return refObject;
                };
                exports.forwardRef = function(render) {
                    null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : "function" !== typeof render ? console.error("forwardRef requires a render function but was given %s.", null === render ? "null" : typeof render === "undefined" ? "undefined" : _type_of(render)) : 0 !== render.length && 2 !== render.length && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", 1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                    null != render && null != render.defaultProps && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
                    var elementType = {
                        $$typeof: REACT_FORWARD_REF_TYPE,
                        render: render
                    }, ownName;
                    Object.defineProperty(elementType, "displayName", {
                        enumerable: false,
                        configurable: true,
                        get: function get() {
                            return ownName;
                        },
                        set: function set(name) {
                            ownName = name;
                            render.name || render.displayName || (Object.defineProperty(render, "name", {
                                value: name
                            }), render.displayName = name);
                        }
                    });
                    return elementType;
                };
                exports.isValidElement = isValidElement;
                exports.lazy = function(ctor) {
                    return {
                        $$typeof: REACT_LAZY_TYPE,
                        _payload: {
                            _status: -1,
                            _result: ctor
                        },
                        _init: lazyInitializer
                    };
                };
                exports.memo = function(type, compare) {
                    isValidElementType(type) || console.error("memo: The first argument must be a component. Instead received: %s", null === type ? "null" : typeof type === "undefined" ? "undefined" : _type_of(type));
                    compare = {
                        $$typeof: REACT_MEMO_TYPE,
                        type: type,
                        compare: void 0 === compare ? null : compare
                    };
                    var ownName;
                    Object.defineProperty(compare, "displayName", {
                        enumerable: false,
                        configurable: true,
                        get: function get() {
                            return ownName;
                        },
                        set: function set(name) {
                            ownName = name;
                            type.name || type.displayName || (Object.defineProperty(type, "name", {
                                value: name
                            }), type.displayName = name);
                        }
                    });
                    return compare;
                };
                exports.startTransition = function(scope) {
                    var prevTransition = ReactSharedInternals.T, currentTransition = {};
                    ReactSharedInternals.T = currentTransition;
                    currentTransition._updatedFibers = /* @__PURE__ */ new Set();
                    try {
                        var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
                        null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
                        "object" === (typeof returnValue === "undefined" ? "undefined" : _type_of(returnValue)) && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
                    } catch (error) {
                        reportGlobalError(error);
                    } finally{
                        null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), ReactSharedInternals.T = prevTransition;
                    }
                };
                exports.unstable_useCacheRefresh = function() {
                    return resolveDispatcher().useCacheRefresh();
                };
                exports.use = function(usable) {
                    return resolveDispatcher().use(usable);
                };
                exports.useActionState = function(action, initialState, permalink) {
                    return resolveDispatcher().useActionState(action, initialState, permalink);
                };
                exports.useCallback = function(callback, deps) {
                    return resolveDispatcher().useCallback(callback, deps);
                };
                exports.useContext = function(Context) {
                    var dispatcher = resolveDispatcher();
                    Context.$$typeof === REACT_CONSUMER_TYPE && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?");
                    return dispatcher.useContext(Context);
                };
                exports.useDebugValue = function(value, formatterFn) {
                    return resolveDispatcher().useDebugValue(value, formatterFn);
                };
                exports.useDeferredValue = function(value, initialValue) {
                    return resolveDispatcher().useDeferredValue(value, initialValue);
                };
                exports.useEffect = function(create, deps) {
                    return resolveDispatcher().useEffect(create, deps);
                };
                exports.useId = function() {
                    return resolveDispatcher().useId();
                };
                exports.useImperativeHandle = function(ref, create, deps) {
                    return resolveDispatcher().useImperativeHandle(ref, create, deps);
                };
                exports.useInsertionEffect = function(create, deps) {
                    return resolveDispatcher().useInsertionEffect(create, deps);
                };
                exports.useLayoutEffect = function(create, deps) {
                    return resolveDispatcher().useLayoutEffect(create, deps);
                };
                exports.useMemo = function(create, deps) {
                    return resolveDispatcher().useMemo(create, deps);
                };
                exports.useOptimistic = function(passthrough, reducer) {
                    return resolveDispatcher().useOptimistic(passthrough, reducer);
                };
                exports.useReducer = function(reducer, initialArg, init) {
                    return resolveDispatcher().useReducer(reducer, initialArg, init);
                };
                exports.useRef = function(initialValue) {
                    return resolveDispatcher().useRef(initialValue);
                };
                exports.useState = function(initialState) {
                    return resolveDispatcher().useState(initialState);
                };
                exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
                    return resolveDispatcher().useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
                };
                exports.useTransition = function() {
                    return resolveDispatcher().useTransition();
                };
                exports.version = "19.0.0";
                "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
            }();
        }
    });
    // node_modules/react/index.js
    var require_react = __commonJS({
        "node_modules/react/index.js": function(exports, module) {
            "use strict";
            if (process.env.NODE_ENV === "production") {
                module.exports = require_react_production();
            } else {
                module.exports = require_react_development();
            }
        }
    });
    // remix_icons_react/RemixIcon.tsx
    var import_react2 = __toESM(require_react(), 1);
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
    var import_react = __toESM(require_react(), 1);
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
    var index_default = RemixIcon;
})(); /*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/ 
