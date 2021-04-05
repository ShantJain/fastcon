(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-categories-categories-module~pages-product-product-module"],{

/***/ "+6XX":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "y1pI");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "+K+b":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "JHRd");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "+Qka":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseMerge.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "fmRc"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "t2Dn"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "cq/+"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "T1AV"),
    isObject = __webpack_require__(/*! ./isObject */ "GoyQ"),
    keysIn = __webpack_require__(/*! ./keysIn */ "mTTR"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "itsj");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ "+c4W":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "711d"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "4/ic"),
    isKey = __webpack_require__(/*! ./_isKey */ "9ggG"),
    toKey = __webpack_require__(/*! ./_toKey */ "9Nap");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "+iFO":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "dTAl"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "LcsW"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "6sVZ");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "/9aa":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "NykK"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "ExA7");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "03A+":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "JTzB"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "ExA7");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "0Cz8":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "Xi7e"),
    Map = __webpack_require__(/*! ./_Map */ "ebwN"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "e4Nc");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "0ycA":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "1+5i":
/*!**************************************!*\
  !*** ./node_modules/lodash/isSet.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "w/wX"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "sEf8"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "mdPL");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "1AwP":
/*!***********************************************************!*\
  !*** ./src/app/components/skeleton-item/skeleton-item.ts ***!
  \***********************************************************/
/*! exports provided: SkeletonItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonItemComponent", function() { return SkeletonItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_skeleton_item_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./skeleton-item.html */ "ZnHu");
/* harmony import */ var _skeleton_item_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skeleton-item.scss */ "8L9B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SkeletonItemComponent = class SkeletonItemComponent {
    constructor() {
        this.styles = {};
    }
    ngOnInit() {
        this.styles = {
            width: this.width ? this.width : '100%',
            height: this.height ? this.height : '16px'
        };
        if (typeof this.radius !== 'undefined' && this.radius !== '') {
            this.styles.borderRadius = this.radius;
        }
    }
};
SkeletonItemComponent.propDecorators = {
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    radius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
SkeletonItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'skeleton-item',
        template: _raw_loader_skeleton_item_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_skeleton_item_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SkeletonItemComponent);



/***/ }),

/***/ "1hJj":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "e4Nc"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "ftKO"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "3A9y");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "2FH8":
/*!************************************************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/components/tree-node-collection.component.js ***!
  \************************************************************************************************************/
/*! exports provided: TreeNodeCollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeCollectionComponent", function() { return TreeNodeCollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ "2vnA");
/* harmony import */ var _mobx_angular_mobx_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mobx-angular/mobx-proxy */ "mhhj");
/* harmony import */ var _models_tree_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/tree.model */ "PLWw");


function TreeNodeCollectionComponent_ng_container_0_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tree-node", 2);
} if (rf & 2) {
    var node_r2 = ctx.$implicit;
    var i_r3 = ctx.index;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", node_r2)("index", i_r3)("templates", ctx_r1.templates);
} }
function TreeNodeCollectionComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeNodeCollectionComponent_ng_container_0_tree_node_2_Template, 1, 3, "tree-node", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", ctx_r0.marginTop);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.viewportNodes)("ngForTrackBy", ctx_r0.trackNode);
} }
var _c0 = function () { return { dontDetach: true }; };
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TreeNodeCollectionComponent = /** @class */ (function () {
    function TreeNodeCollectionComponent() {
        this._dispose = [];
    }
    Object.defineProperty(TreeNodeCollectionComponent.prototype, "nodes", {
        get: function () {
            return this._nodes;
        },
        set: function (nodes) {
            this.setNodes(nodes);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNodeCollectionComponent.prototype, "marginTop", {
        get: function () {
            var firstNode = this.viewportNodes && this.viewportNodes.length && this.viewportNodes[0];
            var relativePosition = firstNode && firstNode.parent
                ? firstNode.position -
                    firstNode.parent.position -
                    firstNode.parent.getSelfHeight()
                : 0;
            return relativePosition + "px";
        },
        enumerable: true,
        configurable: true
    });
    TreeNodeCollectionComponent.prototype.setNodes = function (nodes) {
        this._nodes = nodes;
    };
    TreeNodeCollectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.virtualScroll = this.treeModel.virtualScroll;
        this._dispose = [
            // return node indexes so we can compare structurally,
            Object(mobx__WEBPACK_IMPORTED_MODULE_1__["reaction"])(function () {
                return _this.virtualScroll
                    .getViewportNodes(_this.nodes)
                    .map(function (n) { return n.index; });
            }, function (nodeIndexes) {
                _this.viewportNodes = nodeIndexes.map(function (i) { return _this.nodes[i]; });
            }, { compareStructural: true, fireImmediately: true }),
            Object(mobx__WEBPACK_IMPORTED_MODULE_1__["reaction"])(function () { return _this.nodes; }, function (nodes) {
                _this.viewportNodes = _this.virtualScroll.getViewportNodes(nodes);
            })
        ];
    };
    TreeNodeCollectionComponent.prototype.ngOnDestroy = function () {
        this._dispose.forEach(function (d) { return d(); });
    };
    TreeNodeCollectionComponent.prototype.trackNode = function (index, node) {
        return node.id;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TreeNodeCollectionComponent.prototype, "nodes", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_tree_model__WEBPACK_IMPORTED_MODULE_3__["TreeModel"])
    ], TreeNodeCollectionComponent.prototype, "treeModel", void 0);
    __decorate([
        _mobx_angular_mobx_proxy__WEBPACK_IMPORTED_MODULE_2__["observable"],
        __metadata("design:type", Object)
    ], TreeNodeCollectionComponent.prototype, "_nodes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TreeNodeCollectionComponent.prototype, "templates", void 0);
    __decorate([
        _mobx_angular_mobx_proxy__WEBPACK_IMPORTED_MODULE_2__["observable"],
        __metadata("design:type", Array)
    ], TreeNodeCollectionComponent.prototype, "viewportNodes", void 0);
    __decorate([
        _mobx_angular_mobx_proxy__WEBPACK_IMPORTED_MODULE_2__["computed"],
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], TreeNodeCollectionComponent.prototype, "marginTop", null);
    __decorate([
        _mobx_angular_mobx_proxy__WEBPACK_IMPORTED_MODULE_2__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeNodeCollectionComponent.prototype, "setNodes", null);
TreeNodeCollectionComponent.ɵfac = function TreeNodeCollectionComponent_Factory(t) { return new (t || TreeNodeCollectionComponent)(); };
TreeNodeCollectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeNodeCollectionComponent, selectors: [["tree-node-collection"]], inputs: { nodes: "nodes", treeModel: "treeModel", templates: "templates" }, decls: 1, vars: 2, consts: [[4, "treeMobxAutorun"], [3, "node", "index", "templates", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "node", "index", "templates"]], template: function TreeNodeCollectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeNodeCollectionComponent_ng_container_0_Template, 3, 4, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("treeMobxAutorun", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeNodeCollectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tree-node-collection',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: "\n    <ng-container *treeMobxAutorun=\"{ dontDetach: true }\">\n      <div [style.margin-top]=\"marginTop\">\n        <tree-node\n          *ngFor=\"let node of viewportNodes; let i = index; trackBy: trackNode\"\n          [node]=\"node\"\n          [index]=\"i\"\n          [templates]=\"templates\"\n        >\n        </tree-node>\n      </div>\n    </ng-container>\n  "
            }]
    }], function () { return []; }, { nodes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], treeModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return TreeNodeCollectionComponent;
}());


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWNvbGxlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50cy90cmVlLW5vZGUtY29sbGVjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsaUJBQWlCLEVBR2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHMUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBbUJqRDtBQUErRCxJQWpCL0Q7QUFDNEIsUUE4QzFCLGFBQVEsR0FBRyxFQUFFLENBQUM7QUFDaEIsSUFvQ0EsQ0FBQztBQUNELElBbEVFLHNCQUFJLDhDQUFLO0FBQUksYUFBYjtBQUNGLFlBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3ZCLFFBQUUsQ0FBQztBQUNGLGFBQUMsVUFBVSxLQUFLO0FBQ2pCLFlBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QixRQUFFLENBQUM7QUFFSDtBQUEwQjtBQUVQLE9BUGhCO0FBQ0gsSUFZWSxzQkFBSSxrREFBUztBQUFJLGFBQWpCO0FBQWMsWUFDdEIsSUFBTSxTQUFTLEdBQ2IsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9FLFlBQUksSUFBTSxnQkFBZ0IsR0FDcEIsU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFNO0FBQ25DLGdCQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUTtBQUM1QixvQkFBVSxTQUFT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dGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByZWFjdGlvbiB9IGZyb20gJ21vYngnO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIGFjdGlvbiB9IGZyb20gJy4uL21vYngtYW5ndWxhci9tb2J4LXByb3h5JztcbmltcG9ydCB7IFRyZWVWaXJ0dWFsU2Nyb2xsIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtdmlydHVhbC1zY3JvbGwubW9kZWwnO1xuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1ub2RlLm1vZGVsJztcbmltcG9ydCB7IFRyZWVNb2RlbCB9IGZyb20gJy4uL21vZGVscy90cmVlLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJlZS1ub2RlLWNvbGxlY3Rpb24nLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKnRyZWVNb2J4QXV0b3J1bj1cInsgZG9udERldGFjaDogdHJ1ZSB9XCI+XG4gICAgICA8ZGl2IFtzdHlsZS5tYXJnaW4tdG9wXT1cIm1hcmdpblRvcFwiPlxuICAgICAgICA8dHJlZS1ub2RlXG4gICAgICAgICAgKm5nRm9yPVwibGV0IG5vZGUgb2Ygdmlld3BvcnROb2RlczsgbGV0IGkgPSBpbmRleDsgdHJhY2tCeTogdHJhY2tOb2RlXCJcbiAgICAgICAgICBbbm9kZV09XCJub2RlXCJcbiAgICAgICAgICBbaW5kZXhdPVwiaVwiXG4gICAgICAgICAgW3RlbXBsYXRlc109XCJ0ZW1wbGF0ZXNcIlxuICAgICAgICA+XG4gICAgICAgIDwvdHJlZS1ub2RlPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgVHJlZU5vZGVDb2xsZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBnZXQgbm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vZGVzO1xuICB9XG4gIHNldCBub2Rlcyhub2Rlcykge1xuICAgIHRoaXMuc2V0Tm9kZXMobm9kZXMpO1xuICB9XG5cbiAgQElucHV0KCkgdHJlZU1vZGVsOiBUcmVlTW9kZWw7XG5cbiAgQG9ic2VydmFibGUgX25vZGVzO1xuICBwcml2YXRlIHZpcnR1YWxTY3JvbGw6IFRyZWVWaXJ0dWFsU2Nyb2xsOyAvLyBDYW5ub3QgaW5qZWN0IHRoaXMsIGJlY2F1c2Ugd2UgbWlnaHQgYmUgaW5zaWRlIHRyZWVOb2RlVGVtcGxhdGVGdWxsXG4gIEBJbnB1dCgpIHRlbXBsYXRlcztcblxuICBAb2JzZXJ2YWJsZSB2aWV3cG9ydE5vZGVzOiBUcmVlTm9kZVtdO1xuXG4gIEBjb21wdXRlZCBnZXQgbWFyZ2luVG9wKCk6IHN0cmluZyB7XG4gICAgY29uc3QgZmlyc3ROb2RlID1cbiAgICAgIHRoaXMudmlld3BvcnROb2RlcyAmJiB0aGlzLnZpZXdwb3J0Tm9kZXMubGVuZ3RoICYmIHRoaXMudmlld3BvcnROb2Rlc1swXTtcbiAgICBjb25zdCByZWxhdGl2ZVBvc2l0aW9uID1cbiAgICAgIGZpcnN0Tm9kZSAmJiBmaXJzdE5vZGUucGFyZW50XG4gICAgICAgID8gZmlyc3ROb2RlLnBvc2l0aW9uIC1cbiAgICAgICAgICBmaXJzdE5vZGUucGFyZW50LnBvc2l0aW9uIC1cbiAgICAgICAgICBmaXJzdE5vZGUucGFyZW50LmdldFNlbGZIZWlnaHQoKVxuICAgICAgICA6IDA7XG5cbiAgICByZXR1cm4gYCR7cmVsYXRpdmVQb3NpdGlvbn1weGA7XG4gIH1cblxuICBfZGlzcG9zZSA9IFtdO1xuXG4gIEBhY3Rpb24gc2V0Tm9kZXMobm9kZXMpIHtcbiAgICB0aGlzLl9ub2RlcyA9IG5vZGVzO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy52aXJ0dWFsU2Nyb2xsID0gdGhpcy50cmVlTW9kZWwudmlydHVhbFNjcm9sbDtcbiAgICB0aGlzLl9kaXNwb3NlID0gW1xuICAgICAgLy8gcmV0dXJuIG5vZGUgaW5kZXhlcyBzbyB3ZSBjYW4gY29tcGFyZSBzdHJ1Y3R1cmFsbHksXG4gICAgICByZWFjdGlvbihcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnZpcnR1YWxTY3JvbGxcbiAgICAgICAgICAgIC5nZXRWaWV3cG9ydE5vZGVzKHRoaXMubm9kZXMpXG4gICAgICAgICAgICAubWFwKG4gPT4gbi5pbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIG5vZGVJbmRleGVzID0+IHtcbiAgICAgICAgICB0aGlzLnZpZXdwb3J0Tm9kZXMgPSBub2RlSW5kZXhlcy5tYXAoaSA9PiB0aGlzLm5vZGVzW2ldKTtcbiAgICAgICAgfSxcbiAgICAgICAgeyBjb21wYXJlU3RydWN0dXJhbDogdHJ1ZSwgZmlyZUltbWVkaWF0ZWx5OiB0cnVlIH0gYXMgYW55XG4gICAgICApLFxuICAgICAgcmVhY3Rpb24oXG4gICAgICAgICgpID0+IHRoaXMubm9kZXMsXG4gICAgICAgIG5vZGVzID0+IHtcbiAgICAgICAgICB0aGlzLnZpZXdwb3J0Tm9kZXMgPSB0aGlzLnZpcnR1YWxTY3JvbGwuZ2V0Vmlld3BvcnROb2Rlcyhub2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICBdO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGlzcG9zZS5mb3JFYWNoKGQgPT4gZCgpKTtcbiAgfVxuXG4gIHRyYWNrTm9kZShpbmRleCwgbm9kZSkge1xuICAgIHJldHVybiBub2RlLmlkO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "2ajD":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsNaN.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "2gN3":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "Kz5y");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "2vnA":
/*!**********************************************!*\
  !*** ./node_modules/mobx/lib/mobx.module.js ***!
  \**********************************************/
/*! exports provided: $mobx, FlowCancellationError, IDerivationState, ObservableMap, ObservableSet, Reaction, _allowStateChanges, _allowStateChangesInsideComputed, _allowStateReadsEnd, _allowStateReadsStart, _endAction, _getAdministration, _getGlobalState, _interceptReads, _isComputingDerivation, _resetGlobalState, _startAction, action, autorun, comparer, computed, configure, createAtom, decorate, entries, extendObservable, extendShallowObservable, flow, get, getAtom, getDebugName, getDependencyTree, getObserverTree, has, intercept, isAction, isArrayLike, isBoxedObservable, isComputed, isComputedProp, isFlowCancellationError, isObservable, isObservableArray, isObservableMap, isObservableObject, isObservableProp, isObservableSet, keys, observable, observe, onBecomeObserved, onBecomeUnobserved, onReactionError, reaction, remove, runInAction, set, spy, toJS, trace, transaction, untracked, values, when */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$mobx", function() { return $mobx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowCancellationError", function() { return FlowCancellationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDerivationState", function() { return IDerivationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableMap", function() { return ObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableSet", function() { return ObservableSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reaction", function() { return Reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChanges", function() { return allowStateChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChangesInsideComputed", function() { return allowStateChangesInsideComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateReadsEnd", function() { return allowStateReadsEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateReadsStart", function() { return allowStateReadsStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_endAction", function() { return _endAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getAdministration", function() { return getAdministration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getGlobalState", function() { return getGlobalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_interceptReads", function() { return interceptReads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isComputingDerivation", function() { return isComputingDerivation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_resetGlobalState", function() { return resetGlobalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_startAction", function() { return _startAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autorun", function() { return autorun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comparer", function() { return comparer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAtom", function() { return createAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decorate", function() { return decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return entries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendObservable", function() { return extendObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendShallowObservable", function() { return extendShallowObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return flow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAtom", function() { return getAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDebugName", function() { return getDebugName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependencyTree", function() { return getDependencyTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObserverTree", function() { return getObserverTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intercept", function() { return intercept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAction", function() { return isAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoxedObservable", function() { return isObservableValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputed", function() { return isComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputedProp", function() { return isComputedProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFlowCancellationError", function() { return isFlowCancellationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableArray", function() { return isObservableArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableMap", function() { return isObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableObject", function() { return isObservableObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableProp", function() { return isObservableProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableSet", function() { return isObservableSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeObserved", function() { return onBecomeObserved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeUnobserved", function() { return onBecomeUnobserved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onReactionError", function() { return onReactionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reaction", function() { return reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runInAction", function() { return runInAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spy", function() { return spy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJS", function() { return toJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return trace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transaction", function() { return transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untracked", function() { return untracked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "when", function() { return when; });
/** MobX - (c) Michel Weststrate 2015 - 2020 - MIT Licensed */
var OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is an production build.";
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var mockGlobal = {};
function getGlobal() {
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    return mockGlobal;
}
function getNextId() {
    return ++globalState.mobxGuid;
}
function fail(message) {
    invariant(false, message);
    throw "X"; // unreachable
}
function invariant(check, message) {
    if (!check)
        throw new Error("[mobx] " + (message || OBFUSCATED_ERROR));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated(msg, thing) {
    if (false)
        {}
    if (thing) {
        return deprecated("'" + msg + "', use '" + thing + "' instead.");
    }
    if (deprecatedMessages.indexOf(msg) !== -1)
        return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once(func) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop = function () { };
function unique(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function isObject(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function convertToMap(dataStructure) {
    if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
        return dataStructure;
    }
    else if (Array.isArray(dataStructure)) {
        return new Map(dataStructure);
    }
    else if (isPlainObject(dataStructure)) {
        var map = new Map();
        for (var key in dataStructure) {
            map.set(key, dataStructure[key]);
        }
        return map;
    }
    else {
        return fail("Cannot convert to map from '" + dataStructure + "'");
    }
}
function makeNonEnumerable(object, propNames) {
    for (var i = 0; i < propNames.length; i++) {
        addHiddenProp(object, propNames[i], object[propNames[i]]);
    }
}
function addHiddenProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable(object, prop) {
    if ( true && !isPropertyConfigurable(object, prop))
        fail("Cannot make property '" + prop + "' observable, it is not configurable and writable in the target object");
}
function createInstanceofPredicate(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject(x) && x[propName] === true;
    };
}
function areBothNaN(a, b) {
    return typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */
function isArrayLike(x) {
    return Array.isArray(x) || isObservableArray(x);
}
function isES6Map(thing) {
    if (getGlobal().Map !== undefined && thing instanceof getGlobal().Map)
        return true;
    return false;
}
function isES6Set(thing) {
    return thing instanceof Set;
}
// use Array.from in Mobx 5
function iteratorToArray(it) {
    var res = [];
    while (true) {
        var r = it.next();
        if (r.done)
            break;
        res.push(r.value);
    }
    return res;
}
function primitiveSymbol() {
    // es-disable-next-line
    return (typeof Symbol === "function" && Symbol.toPrimitive) || "@@toPrimitive";
}
function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
}
// Use "for of" in V5
function forOf(iter, callback) {
    var next = iter.next();
    while (!next.done) {
        callback(next.value);
        next = iter.next();
    }
}

function iteratorSymbol() {
    return (typeof Symbol === "function" && Symbol.iterator) || "@@iterator";
}
function declareIterator(prototType, iteratorFactory) {
    addHiddenFinalProp(prototType, iteratorSymbol(), iteratorFactory);
}
function makeIterable(iterator) {
    iterator[iteratorSymbol()] = getSelf;
    return iterator;
}
function toStringTagSymbol() {
    return (typeof Symbol === "function" && Symbol.toStringTag) || "@@toStringTag";
}
function getSelf() {
    return this;
}

/**
 * Anything that can be used to _store_ state is an Atom in mobx. Atoms have two important jobs
 *
 * 1) detect when they are being _used_ and report this (using reportObserved). This allows mobx to make the connection between running functions and the data they used
 * 2) they should notify mobx whenever they have _changed_. This way mobx can re-run any functions (derivations) that are using this atom.
 */
var Atom = /** @class */ (function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom(name) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        this.name = name;
        this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
        this.isBeingObserved = false;
        this.observers = [];
        this.observersIndexes = {};
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.NOT_TRACKING;
    }
    Atom.prototype.onBecomeUnobserved = function () {
        // noop
    };
    Atom.prototype.onBecomeObserved = function () {
        /* noop */
    };
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     * Returns true if there is currently a reactive context.
     */
    Atom.prototype.reportObserved = function () {
        return reportObserved(this);
    };
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    Atom.prototype.reportChanged = function () {
        startBatch();
        propagateChanged(this);
        endBatch();
    };
    Atom.prototype.toString = function () {
        return this.name;
    };
    return Atom;
}());
var isAtom = createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
    if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
    var atom = new Atom(name);
    onBecomeObserved(atom, onBecomeObservedHandler);
    onBecomeUnobserved(atom, onBecomeUnobservedHandler);
    return atom;
}

function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    return deepEqual(a, b);
}
function shallowComparer(a, b) {
    return deepEqual(a, b, 1);
}
function defaultComparer(a, b) {
    return areBothNaN(a, b) || identityComparer(a, b);
}
var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    default: defaultComparer,
    shallow: shallowComparer
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};
function createPropertyInitializerDescriptor(prop, enumerable) {
    var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
    return (cache[prop] ||
        (cache[prop] = {
            configurable: true,
            enumerable: enumerable,
            get: function () {
                initializeInstance(this);
                return this[prop];
            },
            set: function (value) {
                initializeInstance(this);
                this[prop] = value;
            }
        }));
}
function initializeInstance(target) {
    if (target.__mobxDidRunLazyInitializers === true)
        return;
    var decorators = target.__mobxDecorators;
    if (decorators) {
        addHiddenProp(target, "__mobxDidRunLazyInitializers", true);
        for (var key in decorators) {
            var d = decorators[key];
            d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
        }
    }
}
function createPropDecorator(propertyInitiallyEnumerable, propertyCreator) {
    return function decoratorFactory() {
        var decoratorArguments;
        var decorator = function decorate(target, prop, descriptor, applyImmediately
        // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
        // as the instance to apply the decorator to equals the target
        ) {
            if (applyImmediately === true) {
                propertyCreator(target, prop, descriptor, target, decoratorArguments);
                return null;
            }
            if ( true && !quacksLikeADecorator(arguments))
                fail("This function is a decorator, but it wasn't invoked like a decorator");
            if (!Object.prototype.hasOwnProperty.call(target, "__mobxDecorators")) {
                var inheritedDecorators = target.__mobxDecorators;
                addHiddenProp(target, "__mobxDecorators", __assign({}, inheritedDecorators));
            }
            target.__mobxDecorators[prop] = {
                prop: prop,
                propertyCreator: propertyCreator,
                descriptor: descriptor,
                decoratorTarget: target,
                decoratorArguments: decoratorArguments
            };
            return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
        };
        if (quacksLikeADecorator(arguments)) {
            // @decorator
            decoratorArguments = EMPTY_ARRAY;
            return decorator.apply(null, arguments);
        }
        else {
            // @decorator(args)
            decoratorArguments = Array.prototype.slice.call(arguments);
            return decorator;
        }
    };
}
function quacksLikeADecorator(args) {
    return (((args.length === 2 || args.length === 3) && typeof args[1] === "string") ||
        (args.length === 4 && args[3] === true));
}

function deepEnhancer(v, _, name) {
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return observable.array(v, { name: name });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name });
    if (isES6Map(v))
        return observable.map(v, { name: name });
    if (isES6Set(v))
        return observable.set(v, { name: name });
    return v;
}
function shallowEnhancer(v, _, name) {
    if (v === undefined || v === null)
        return v;
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v))
        return v;
    if (Array.isArray(v))
        return observable.array(v, { name: name, deep: false });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name, deep: false });
    if (isES6Map(v))
        return observable.map(v, { name: name, deep: false });
    if (isES6Set(v))
        return observable.set(v, { name: name, deep: false });
    return fail( true &&
        "The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
}
function refStructEnhancer(v, oldValue, name) {
    if ( true && isObservable(v))
        throw "observable.struct should not be used with observable values";
    if (deepEqual(v, oldValue))
        return oldValue;
    return v;
}

function createDecoratorForEnhancer(enhancer) {
    invariant(enhancer);
    var decorator = createPropDecorator(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
        if (true) {
            invariant(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + propertyName + "\"), use @computed instead.");
        }
        var initialValue = descriptor
            ? descriptor.initializer
                ? descriptor.initializer.call(target)
                : descriptor.value
            : undefined;
        defineObservableProperty(target, propertyName, initialValue, enhancer);
    });
    var res = 
    // Extra process checks, as this happens during module initialization
    typeof process !== "undefined" && process.env && "development" !== "production"
        ? function observableDecorator() {
            // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
            // and simply return the created prop decorator
            if (arguments.length < 2)
                return fail("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
            return decorator.apply(null, arguments);
        }
        : decorator;
    res.enhancer = enhancer;
    return res;
}

// Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases
var defaultCreateObservableOptions = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined
};
var shallowCreateObservableOptions = {
    deep: false,
    name: undefined,
    defaultDecorator: undefined
};
Object.freeze(defaultCreateObservableOptions);
Object.freeze(shallowCreateObservableOptions);
function assertValidOption(key) {
    if (!/^(deep|name|equals|defaultDecorator)$/.test(key))
        fail("invalid option for (extend)observable: " + key);
}
function asCreateObservableOptions(thing) {
    if (thing === null || thing === undefined)
        return defaultCreateObservableOptions;
    if (typeof thing === "string")
        return { name: thing, deep: true };
    if (true) {
        if (typeof thing !== "object")
            return fail("expected options object");
        Object.keys(thing).forEach(assertValidOption);
    }
    return thing;
}
function getEnhancerFromOptions(options) {
    return options.defaultDecorator
        ? options.defaultDecorator.enhancer
        : options.deep === false
            ? referenceEnhancer
            : deepEnhancer;
}
var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v, arg2, arg3) {
    // @observable someProp;
    if (typeof arguments[1] === "string") {
        return deepDecorator.apply(null, arguments);
    }
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    var res = isPlainObject(v)
        ? observable.object(v, arg2, arg3)
        : Array.isArray(v)
            ? observable.array(v, arg2)
            : isES6Map(v)
                ? observable.map(v, arg2)
                : isES6Set(v)
                    ? observable.set(v, arg2)
                    : v;
    // this value could be converted to a new observable data structure, return it
    if (res !== v)
        return res;
    // otherwise, just box it
    fail( true &&
        "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
}
var observableFactories = {
    box: function (value, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("box");
        var o = asCreateObservableOptions(options);
        return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
    },
    shallowBox: function (value, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowBox");
        deprecated("observable.shallowBox", "observable.box(value, { deep: false })");
        return observable.box(value, { name: name, deep: false });
    },
    array: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("array");
        var o = asCreateObservableOptions(options);
        return new ObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
    },
    shallowArray: function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowArray");
        deprecated("observable.shallowArray", "observable.array(values, { deep: false })");
        return observable.array(initialValues, { name: name, deep: false });
    },
    map: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("map");
        var o = asCreateObservableOptions(options);
        return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
    },
    shallowMap: function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowMap");
        deprecated("observable.shallowMap", "observable.map(values, { deep: false })");
        return observable.map(initialValues, { name: name, deep: false });
    },
    set: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("set");
        var o = asCreateObservableOptions(options);
        return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
    },
    object: function (props, decorators, options) {
        if (typeof arguments[1] === "string")
            incorrectlyUsedAsDecorator("object");
        var o = asCreateObservableOptions(options);
        return extendObservable({}, props, decorators, o);
    },
    shallowObject: function (props, name) {
        if (typeof arguments[1] === "string")
            incorrectlyUsedAsDecorator("shallowObject");
        deprecated("observable.shallowObject", "observable.object(values, {}, { deep: false })");
        return observable.object(props, {}, { name: name, deep: false });
    },
    ref: refDecorator,
    shallow: shallowDecorator,
    deep: deepDecorator,
    struct: refStructDecorator
};
var observable = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(observableFactories).forEach(function (name) { return (observable[name] = observableFactories[name]); });
function incorrectlyUsedAsDecorator(methodName) {
    fail(
    // process.env.NODE_ENV !== "production" &&
    "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

var computedDecorator = createPropDecorator(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
    if (true) {
        invariant(descriptor && descriptor.get, "Trying to declare a computed value for unspecified getter '" + propertyName + "'");
    }
    var get = descriptor.get, set = descriptor.set; // initialValue is the descriptor for get / set props
    // Optimization: faster on decorator target or instance? Assuming target
    // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
    // Forcing instance now, fixes hot reloadig issues on React Native:
    var options = decoratorArgs[0] || {};
    defineComputedProperty(instance, propertyName, __assign({ get: get, set: set }, options));
});
var computedStructDecorator = computedDecorator({ equals: comparer.structural });
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed = function computed(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
        // @computed
        return computedDecorator.apply(null, arguments);
    }
    if (arg1 !== null && typeof arg1 === "object" && arguments.length === 1) {
        // @computed({ options })
        return computedDecorator.apply(null, arguments);
    }
    // computed(expr, options?)
    if (true) {
        invariant(typeof arg1 === "function", "First argument to `computed` should be an expression.");
        invariant(arguments.length < 3, "Computed takes one or two arguments if used as function");
    }
    var opts = typeof arg2 === "object" ? arg2 : {};
    opts.get = arg1;
    opts.set = typeof arg2 === "function" ? arg2 : opts.set;
    opts.name = opts.name || arg1.name || ""; /* for generated name */
    return new ComputedValue(opts);
};
computed.struct = computedStructDecorator;

var IDerivationState;
(function (IDerivationState) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));
var TraceMode;
(function (TraceMode) {
    TraceMode[TraceMode["NONE"] = 0] = "NONE";
    TraceMode[TraceMode["LOG"] = 1] = "LOG";
    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));
var CaughtException = /** @class */ (function () {
    function CaughtException(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException;
}());
function isCaughtException(e) {
    return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute(derivation) {
    switch (derivation.dependenciesState) {
        case IDerivationState.UP_TO_DATE:
            return false;
        case IDerivationState.NOT_TRACKING:
        case IDerivationState.STALE:
            return true;
        case IDerivationState.POSSIBLY_STALE: {
            // state propagation can occur outside of action/reactive context #2195
            var prevAllowStateReads = allowStateReadsStart(true);
            var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing, l = obs.length;
            for (var i = 0; i < l; i++) {
                var obj = obs[i];
                if (isComputedValue(obj)) {
                    if (globalState.disableErrorBoundaries) {
                        obj.get();
                    }
                    else {
                        try {
                            obj.get();
                        }
                        catch (e) {
                            // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                            untrackedEnd(prevUntracked);
                            allowStateReadsEnd(prevAllowStateReads);
                            return true;
                        }
                    }
                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    // invariantShouldCompute(derivation)
                    if (derivation.dependenciesState === IDerivationState.STALE) {
                        untrackedEnd(prevUntracked);
                        allowStateReadsEnd(prevAllowStateReads);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0(derivation);
            untrackedEnd(prevUntracked);
            allowStateReadsEnd(prevAllowStateReads);
            return false;
        }
    }
}
// function invariantShouldCompute(derivation: IDerivation) {
//     const newDepState = (derivation as any).dependenciesState
//     if (
//         process.env.NODE_ENV === "production" &&
//         (newDepState === IDerivationState.POSSIBLY_STALE ||
//             newDepState === IDerivationState.NOT_TRACKING)
//     )
//         fail("Illegal dependency state")
// }
function isComputingDerivation() {
    return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
    var hasObservers = atom.observers.length > 0;
    // Should never be possible to change an observed observable from inside computed, see #798
    if (globalState.computationDepth > 0 && hasObservers)
        fail( true &&
            "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name);
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "strict"))
        fail( true &&
            (globalState.enforceActions
                ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: "
                : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") +
                atom.name);
}
function checkIfStateReadsAreAllowed(observable) {
    if ( true &&
        !globalState.allowStateReads &&
        globalState.observableRequiresReaction) {
        console.warn("[mobx] Observable " + observable.name + " being read outside a reactive context");
    }
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction(derivation, f, context) {
    var prevAllowStateReads = allowStateReadsStart(true);
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    var result;
    if (globalState.disableErrorBoundaries === true) {
        result = f.call(context);
    }
    else {
        try {
            result = f.call(context);
        }
        catch (e) {
            result = new CaughtException(e);
        }
    }
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    if (derivation.observing.length === 0) {
        warnAboutDerivationWithoutDependencies(derivation);
    }
    allowStateReadsEnd(prevAllowStateReads);
    return result;
}
function warnAboutDerivationWithoutDependencies(derivation) {
    if (false)
        {}
    if (globalState.reactionRequiresObservable || derivation.requiresObservable) {
        console.warn("[mobx] Derivation " + derivation.name + " is created/updated without reading any observable value");
    }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing;
    var observing = (derivation.observing = derivation.newObserving);
    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i)
                observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver(dep, derivation);
        }
        dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver(dep, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--)
        removeObserver(obs[i], derivation);
    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}
function untracked(action) {
    var prev = untrackedStart();
    var res = action();
    untrackedEnd(prev);
    return res;
}
function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
}
function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
    var prev = globalState.allowStateReads;
    globalState.allowStateReads = allowStateReads;
    return prev;
}
function allowStateReadsEnd(prev) {
    globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
        return;
    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--)
        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
}

// we don't use globalState for these in order to avoid possible issues with multiple
// mobx versions
var currentActionId = 0;
var nextActionId = 1;
var functionNameDescriptor = Object.getOwnPropertyDescriptor(function () { }, "name");
var isFunctionNameConfigurable = functionNameDescriptor && functionNameDescriptor.configurable;
function createAction(actionName, fn) {
    if (true) {
        invariant(typeof fn === "function", "`action` can only be invoked on functions");
        if (typeof actionName !== "string" || !actionName)
            fail("actions should have valid names, got: '" + actionName + "'");
    }
    var res = function () {
        return executeAction(actionName, fn, this, arguments);
    };
    if (true) {
        if (isFunctionNameConfigurable) {
            Object.defineProperty(res, "name", { value: actionName });
        }
    }
    res.isMobxAction = true;
    return res;
}
function executeAction(actionName, fn, scope, args) {
    var runInfo = _startAction(actionName, scope, args);
    try {
        return fn.apply(scope, args);
    }
    catch (err) {
        runInfo.error = err;
        throw err;
    }
    finally {
        _endAction(runInfo);
    }
}
function _startAction(actionName, scope, args) {
    var notifySpy = isSpyEnabled() && !!actionName;
    var startTime = 0;
    if (notifySpy) {
        startTime = Date.now();
        var l = (args && args.length) || 0;
        var flattendArgs = new Array(l);
        if (l > 0)
            for (var i = 0; i < l; i++)
                flattendArgs[i] = args[i];
        spyReportStart({
            type: "action",
            name: actionName,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart();
    startBatch();
    var prevAllowStateChanges = allowStateChangesStart(true);
    var prevAllowStateReads = allowStateReadsStart(true);
    var runInfo = {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        prevAllowStateReads: prevAllowStateReads,
        notifySpy: notifySpy,
        startTime: startTime,
        actionId: nextActionId++,
        parentActionId: currentActionId
    };
    currentActionId = runInfo.actionId;
    return runInfo;
}
function _endAction(runInfo) {
    if (currentActionId !== runInfo.actionId) {
        fail("invalid action stack. did you forget to finish an action?");
    }
    currentActionId = runInfo.parentActionId;
    if (runInfo.error !== undefined) {
        globalState.suppressReactionErrors = true;
    }
    allowStateChangesEnd(runInfo.prevAllowStateChanges);
    allowStateReadsEnd(runInfo.prevAllowStateReads);
    endBatch();
    untrackedEnd(runInfo.prevDerivation);
    if (runInfo.notifySpy) {
        spyReportEnd({ time: Date.now() - runInfo.startTime });
    }
    globalState.suppressReactionErrors = false;
}
function allowStateChanges(allowStateChanges, func) {
    var prev = allowStateChangesStart(allowStateChanges);
    var res;
    try {
        res = func();
    }
    finally {
        allowStateChangesEnd(prev);
    }
    return res;
}
function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
}
function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
}
function allowStateChangesInsideComputed(func) {
    var prev = globalState.computationDepth;
    globalState.computationDepth = 0;
    var res;
    try {
        res = func();
    }
    finally {
        globalState.computationDepth = prev;
    }
    return res;
}

var ObservableValue = /** @class */ (function (_super) {
    __extends(ObservableValue, _super);
    function ObservableValue(value, enhancer, name, notifySpy, equals) {
        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
        if (notifySpy === void 0) { notifySpy = true; }
        if (equals === void 0) { equals = comparer.default; }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.name = name;
        _this.equals = equals;
        _this.hasUnreportedChange = false;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled()) {
            // only notify spy if this is a stand-alone observable
            spyReport({ type: "create", name: _this.name, newValue: "" + _this.value });
        }
        return _this;
    }
    ObservableValue.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableValue.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            if (notifySpy) {
                spyReportStart({
                    type: "update",
                    name: this.name,
                    newValue: newValue,
                    oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableValue.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed(this);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this,
                type: "update",
                newValue: newValue
            });
            if (!change)
                return globalState.UNCHANGED;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.equals(this.value, newValue) ? globalState.UNCHANGED : newValue;
    };
    ObservableValue.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners(this)) {
            notifyListeners(this, {
                type: "update",
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    ObservableValue.prototype.get = function () {
        this.reportObserved();
        return this.dehanceValue(this.value);
    };
    ObservableValue.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableValue.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
            });
        return registerListener(this, listener);
    };
    ObservableValue.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    return ObservableValue;
}(Atom));
ObservableValue.prototype[primitiveSymbol()] = ObservableValue.prototype.valueOf;
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue = /** @class */ (function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce a new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue(options) {
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = null; // during tracking it's an array with new observed observers
        this.isBeingObserved = false;
        this.isPendingUnobservation = false;
        this.observers = [];
        this.observersIndexes = {};
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.value = new CaughtException(null);
        this.isComputing = false; // to check for cycles
        this.isRunningSetter = false;
        this.isTracing = TraceMode.NONE;
        invariant(options.get, "missing option for computed: get");
        this.derivation = options.get;
        this.name = options.name || "ComputedValue@" + getNextId();
        if (options.set)
            this.setter = createAction(this.name + "-setter", options.set);
        this.equals =
            options.equals ||
                (options.compareStructural || options.struct
                    ? comparer.structural
                    : comparer.default);
        this.scope = options.context;
        this.requiresReaction = !!options.requiresReaction;
        this.keepAlive = !!options.keepAlive;
    }
    ComputedValue.prototype.onBecomeStale = function () {
        propagateMaybeChanged(this);
    };
    ComputedValue.prototype.onBecomeUnobserved = function () { };
    ComputedValue.prototype.onBecomeObserved = function () { };
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ComputedValue.prototype.get = function () {
        if (this.isComputing)
            fail("Cycle detected in computation " + this.name + ": " + this.derivation);
        if (globalState.inBatch === 0 && this.observers.length === 0 && !this.keepAlive) {
            if (shouldCompute(this)) {
                this.warnAboutUntrackedRead();
                startBatch(); // See perf test 'computed memoization'
                this.value = this.computeValue(false);
                endBatch();
            }
        }
        else {
            reportObserved(this);
            if (shouldCompute(this))
                if (this.trackAndCompute())
                    propagateChangeConfirmed(this);
        }
        var result = this.value;
        if (isCaughtException(result))
            throw result.cause;
        return result;
    };
    ComputedValue.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException(res))
            throw res.cause;
        return res;
    };
    ComputedValue.prototype.set = function (value) {
        if (this.setter) {
            invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                this.isRunningSetter = false;
            }
        }
        else
            invariant(false,  true &&
                "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
    };
    ComputedValue.prototype.trackAndCompute = function () {
        if (isSpyEnabled()) {
            spyReport({
                object: this.scope,
                type: "compute",
                name: this.name
            });
        }
        var oldValue = this.value;
        var wasSuspended = 
        /* see #1208 */ this.dependenciesState === IDerivationState.NOT_TRACKING;
        var newValue = this.computeValue(true);
        var changed = wasSuspended ||
            isCaughtException(oldValue) ||
            isCaughtException(newValue) ||
            !this.equals(oldValue, newValue);
        if (changed) {
            this.value = newValue;
        }
        return changed;
    };
    ComputedValue.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction(this, this.derivation, this.scope);
        }
        else {
            if (globalState.disableErrorBoundaries === true) {
                res = this.derivation.call(this.scope);
            }
            else {
                try {
                    res = this.derivation.call(this.scope);
                }
                catch (e) {
                    res = new CaughtException(e);
                }
            }
        }
        globalState.computationDepth--;
        this.isComputing = false;
        return res;
    };
    ComputedValue.prototype.suspend = function () {
        if (!this.keepAlive) {
            clearObserving(this);
            this.value = undefined; // don't hold on to computed value!
        }
    };
    ComputedValue.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue.prototype.warnAboutUntrackedRead = function () {
        if (false)
            {}
        if (this.requiresReaction === true) {
            fail("[mobx] Computed value " + this.name + " is read outside a reactive context");
        }
        if (this.isTracing !== TraceMode.NONE) {
            console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
        }
        if (globalState.computedRequiresReaction) {
            console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
        }
    };
    ComputedValue.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    return ComputedValue;
}());
ComputedValue.prototype[primitiveSymbol()] = ComputedValue.prototype.valueOf;
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);

/**
 * These values will persist if global state is reset
 */
var persistentKeys = [
    "mobxGuid",
    "spyListeners",
    "enforceActions",
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "allowStateReads",
    "disableErrorBoundaries",
    "runId",
    "UNCHANGED"
];
var MobXGlobals = /** @class */ (function () {
    function MobXGlobals() {
        /**
         * MobXGlobals version.
         * MobX compatiblity with other versions loaded in memory as long as this version matches.
         * It indicates that the global state still stores similar information
         *
         * N.B: this version is unrelated to the package version of MobX, and is only the version of the
         * internal state storage of MobX, and can be the same across many different package versions
         */
        this.version = 5;
        /**
         * globally unique token to signal unchanged
         */
        this.UNCHANGED = {};
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.mobxGuid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore, and are about to be
         * suspended, unless somebody else accesses it in the same batch
         *
         * @type {IObservable[]}
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * Is it allowed to change observables at this point?
         * In general, MobX doesn't allow that when running computations and React.render.
         * To ensure that those functions stay pure.
         */
        this.allowStateChanges = true;
        /**
         * Is it allowed to read observables at this point?
         * Used to hold the state needed for `observableRequiresReaction`
         */
        this.allowStateReads = true;
        /**
         * If strict mode is enabled, state changes are by default not allowed
         */
        this.enforceActions = false;
        /**
         * Spy callbacks
         */
        this.spyListeners = [];
        /**
         * Globally attached error handlers that react specifically to errors in reactions
         */
        this.globalReactionErrorHandlers = [];
        /**
         * Warn if computed values are accessed outside a reactive context
         */
        this.computedRequiresReaction = false;
        /**
         * (Experimental)
         * Warn if you try to create to derivation / reactive context without accessing any observable.
         */
        this.reactionRequiresObservable = false;
        /**
         * (Experimental)
         * Warn if observables are accessed outside a reactive context
         */
        this.observableRequiresReaction = false;
        /**
         * Allows overwriting of computed properties, useful in tests but not prod as it can cause
         * memory leaks. See https://github.com/mobxjs/mobx/issues/1867
         */
        this.computedConfigurable = false;
        /*
         * Don't catch and rethrow exceptions. This is useful for inspecting the state of
         * the stack when an exception occurs while debugging.
         */
        this.disableErrorBoundaries = false;
        /*
         * If true, we are already handling an exception in an action. Any errors in reactions should be supressed, as
         * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
         */
        this.suppressReactionErrors = false;
    }
    return MobXGlobals;
}());
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = (function () {
    var global = getGlobal();
    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals)
        canMergeGlobalState = false;
    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version)
        canMergeGlobalState = false;
    if (!canMergeGlobalState) {
        setTimeout(function () {
            if (!isolateCalled) {
                fail("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
            }
        }, 1);
        return new MobXGlobals();
    }
    else if (global.__mobxGlobals) {
        global.__mobxInstanceCount += 1;
        if (!global.__mobxGlobals.UNCHANGED)
            global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible
        return global.__mobxGlobals;
    }
    else {
        global.__mobxInstanceCount = 1;
        return (global.__mobxGlobals = new MobXGlobals());
    }
})();
function isolateGlobalState() {
    if (globalState.pendingReactions.length ||
        globalState.inBatch ||
        globalState.isRunningReactions)
        fail("isolateGlobalState should be called before MobX is running any reactions");
    isolateCalled = true;
    if (canMergeGlobalState) {
        if (--getGlobal().__mobxInstanceCount === 0)
            getGlobal().__mobxGlobals = undefined;
        globalState = new MobXGlobals();
    }
}
function getGlobalState() {
    return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState() {
    var defaultGlobals = new MobXGlobals();
    for (var key in defaultGlobals)
        if (persistentKeys.indexOf(key) === -1)
            globalState[key] = defaultGlobals[key];
    globalState.allowStateChanges = !globalState.enforceActions;
}

function hasObservers(observable) {
    return observable.observers && observable.observers.length > 0;
}
function getObservers(observable) {
    return observable.observers;
}
// function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }
function addObserver(observable, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    var l = observable.observers.length;
    if (l) {
        // because object assignment is relatively expensive, let's not store data about index 0.
        observable.observersIndexes[node.__mapid] = l;
    }
    observable.observers[l] = node;
    if (observable.lowestObserverState > node.dependenciesState)
        observable.lowestObserverState = node.dependenciesState;
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    if (observable.observers.length === 1) {
        // deleting last observer
        observable.observers.length = 0;
        queueForUnobservation(observable);
    }
    else {
        // deleting from _observersIndexes is straight forward, to delete from _observers, let's swap `node` with last element
        var list = observable.observers;
        var map = observable.observersIndexes;
        var filler = list.pop(); // get last element, which should fill the place of `node`, so the array doesn't have holes
        if (filler !== node) {
            // otherwise node was the last element, which already got removed from array
            var index = map[node.__mapid] || 0; // getting index of `node`. this is the only place we actually use map.
            if (index) {
                // map store all indexes but 0, see comment in `addObserver`
                map[filler.__mapid] = index;
            }
            else {
                delete map[filler.__mapid];
            }
            list[index] = filler;
        }
        delete map[node.__mapid];
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation(observable) {
    if (observable.isPendingUnobservation === false) {
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable.isPendingUnobservation = true;
        globalState.pendingUnobservations.push(observable);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch() {
    globalState.inBatch++;
}
function endBatch() {
    if (--globalState.inBatch === 0) {
        runReactions();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable = list[i];
            observable.isPendingUnobservation = false;
            if (observable.observers.length === 0) {
                if (observable.isBeingObserved) {
                    // if this observable had reactive observers, trigger the hooks
                    observable.isBeingObserved = false;
                    observable.onBecomeUnobserved();
                }
                if (observable instanceof ComputedValue) {
                    // computed values are automatically teared down when the last observer leaves
                    // this process happens recursively, this computed might be the last observable of another, etc..
                    observable.suspend();
                }
            }
        }
        globalState.pendingUnobservations = [];
    }
}
function reportObserved(observable) {
    checkIfStateReadsAreAllowed(observable);
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
        /**
         * Simple optimization, give each derivation run an unique id (runId)
         * Check if last time this observable was accessed the same runId is used
         * if this is the case, the relation is already known
         */
        if (derivation.runId !== observable.lastAccessedBy) {
            observable.lastAccessedBy = derivation.runId;
            derivation.newObserving[derivation.unboundDepsCount++] = observable;
            if (!observable.isBeingObserved) {
                observable.isBeingObserved = true;
                observable.onBecomeObserved();
            }
        }
        return true;
    }
    else if (observable.observers.length === 0 && globalState.inBatch > 0) {
        queueForUnobservation(observable);
    }
    return false;
}
// function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
        d.dependenciesState = IDerivationState.STALE;
    }
    // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
            d.dependenciesState = IDerivationState.STALE;
        else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
        )
            observable.lowestObserverState = IDerivationState.UP_TO_DATE;
    }
    // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE)
        return;
    observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
    }
    // invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable) {
    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");
    if (derivation.isTracing === TraceMode.BREAK) {
        var lines = [];
        printDepTree(getDependencyTree(derivation), lines, 1);
        // prettier-ignore
        new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
}
function printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
        lines.push("(and many more)");
        return;
    }
    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
    if (tree.dependencies)
        tree.dependencies.forEach(function (child) { return printDepTree(child, lines, depth + 1); });
}

var Reaction = /** @class */ (function () {
    function Reaction(name, onInvalidate, errorHandler, requiresObservable) {
        if (name === void 0) { name = "Reaction@" + getNextId(); }
        if (requiresObservable === void 0) { requiresObservable = false; }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.errorHandler = errorHandler;
        this.requiresObservable = requiresObservable;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = [];
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
        this.isTracing = TraceMode.NONE;
    }
    Reaction.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState.pendingReactions.push(this);
            runReactions();
        }
    };
    Reaction.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    Reaction.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch();
            this._isScheduled = false;
            if (shouldCompute(this)) {
                this._isTrackPending = true;
                try {
                    this.onInvalidate();
                    if (this._isTrackPending && isSpyEnabled()) {
                        // onInvalidate didn't trigger track right away..
                        spyReport({
                            name: this.name,
                            type: "scheduled-reaction"
                        });
                    }
                }
                catch (e) {
                    this.reportExceptionInDerivation(e);
                }
            }
            endBatch();
        }
    };
    Reaction.prototype.track = function (fn) {
        startBatch();
        var notify = isSpyEnabled();
        var startTime;
        if (notify) {
            startTime = Date.now();
            spyReportStart({
                name: this.name,
                type: "reaction"
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving(this);
        }
        if (isCaughtException(result))
            this.reportExceptionInDerivation(result.cause);
        if (notify) {
            spyReportEnd({
                time: Date.now() - startTime
            });
        }
        endBatch();
    };
    Reaction.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        if (globalState.disableErrorBoundaries)
            throw error;
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
        if (globalState.suppressReactionErrors) {
            console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)"); // prettier-ignore
        }
        else {
            console.error(message, error);
            /** If debugging brought you here, please, read the above message :-). Tnx! */
        }
        if (isSpyEnabled()) {
            spyReport({
                type: "error",
                name: this.name,
                message: message,
                error: "" + error
            });
        }
        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
    };
    Reaction.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch();
                clearObserving(this);
                endBatch();
            }
        }
    };
    Reaction.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r.$mobx = this;
        return r;
    };
    Reaction.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction.prototype.trace = function (enterBreakPoint) {
        if (enterBreakPoint === void 0) { enterBreakPoint = false; }
        trace(this, enterBreakPoint);
    };
    return Reaction;
}());
function onReactionError(handler) {
    globalState.globalReactionErrorHandlers.push(handler);
    return function () {
        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0)
            globalState.globalReactionErrorHandlers.splice(idx, 1);
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) { return f(); };
function runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState.inBatch > 0 || globalState.isRunningReactions)
        return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState.isRunningReactions = false;
}
var isReaction = createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
}

function isSpyEnabled() {
    return !!globalState.spyListeners.length;
}
function spyReport(event) {
    if (!globalState.spyListeners.length)
        return;
    var listeners = globalState.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart(event) {
    var change = __assign(__assign({}, event), { spyReportStart: true });
    spyReport(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd(change) {
    if (change)
        spyReport(__assign(__assign({}, change), { spyReportEnd: true }));
    else
        spyReport(END_EVENT);
}
function spy(listener) {
    globalState.spyListeners.push(listener);
    return once(function () {
        globalState.spyListeners = globalState.spyListeners.filter(function (l) { return l !== listener; });
    });
}

function dontReassignFields() {
    fail( true && "@action fields are not reassignable");
}
function namedActionDecorator(name) {
    return function (target, prop, descriptor) {
        if (descriptor) {
            if ( true && descriptor.get !== undefined) {
                return fail("@action cannot be used with getters");
            }
            // babel / typescript
            // @action method() { }
            if (descriptor.value) {
                // typescript
                return {
                    value: createAction(name, descriptor.value),
                    enumerable: false,
                    configurable: true,
                    writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)
                };
            }
            // babel only: @action method = () => {}
            var initializer_1 = descriptor.initializer;
            return {
                enumerable: false,
                configurable: true,
                writable: true,
                initializer: function () {
                    // N.B: we can't immediately invoke initializer; this would be wrong
                    return createAction(name, initializer_1.call(this));
                }
            };
        }
        // bound instance methods
        return actionFieldDecorator(name).apply(this, arguments);
    };
}
function actionFieldDecorator(name) {
    // Simple property that writes on first invocation to the current instance
    return function (target, prop, descriptor) {
        Object.defineProperty(target, prop, {
            configurable: true,
            enumerable: false,
            get: function () {
                return undefined;
            },
            set: function (value) {
                addHiddenProp(this, prop, action(name, value));
            }
        });
    };
}
function boundActionDecorator(target, propertyName, descriptor, applyToInstance) {
    if (applyToInstance === true) {
        defineBoundAction(target, propertyName, descriptor.value);
        return null;
    }
    if (descriptor) {
        // if (descriptor.value)
        // Typescript / Babel: @action.bound method() { }
        // also: babel @action.bound method = () => {}
        return {
            configurable: true,
            enumerable: false,
            get: function () {
                defineBoundAction(this, propertyName, descriptor.value || descriptor.initializer.call(this));
                return this[propertyName];
            },
            set: dontReassignFields
        };
    }
    // field decorator Typescript @action.bound method = () => {}
    return {
        enumerable: false,
        configurable: true,
        set: function (v) {
            defineBoundAction(this, propertyName, v);
        },
        get: function () {
            return undefined;
        }
    };
}

var action = function action(arg1, arg2, arg3, arg4) {
    // action(fn() {})
    if (arguments.length === 1 && typeof arg1 === "function")
        return createAction(arg1.name || "<unnamed action>", arg1);
    // action("name", fn() {})
    if (arguments.length === 2 && typeof arg2 === "function")
        return createAction(arg1, arg2);
    // @action("name") fn() {}
    if (arguments.length === 1 && typeof arg1 === "string")
        return namedActionDecorator(arg1);
    // @action fn() {}
    if (arg4 === true) {
        // apply to instance immediately
        arg1[arg2] = createAction(arg1.name || arg2, arg3.value);
    }
    else {
        return namedActionDecorator(arg2).apply(null, arguments);
    }
};
action.bound = boundActionDecorator;
function runInAction(arg1, arg2) {
    // TODO: deprecate?
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    if (true) {
        invariant(typeof fn === "function" && fn.length === 0, "`runInAction` expects a function without arguments");
        if (typeof actionName !== "string" || !actionName)
            fail("actions should have valid names, got: '" + actionName + "'");
    }
    return executeAction(actionName, fn, this, undefined);
}
function isAction(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction(target, propertyName, fn) {
    addHiddenProp(target, propertyName, createAction(propertyName, fn.bind(target)));
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */
function autorun(view, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT; }
    if (true) {
        invariant(typeof view === "function", "Autorun expects a function as first argument");
        invariant(isAction(view) === false, "Autorun does not accept actions since actions are untrackable");
    }
    var name = (opts && opts.name) || view.name || "Autorun@" + getNextId();
    var runSync = !opts.scheduler && !opts.delay;
    var reaction;
    if (runSync) {
        // normal autorun
        reaction = new Reaction(name, function () {
            this.track(reactionRunner);
        }, opts.onError, opts.requiresObservable);
    }
    else {
        var scheduler_1 = createSchedulerFromOptions(opts);
        // debounced autorun
        var isScheduled_1 = false;
        reaction = new Reaction(name, function () {
            if (!isScheduled_1) {
                isScheduled_1 = true;
                scheduler_1(function () {
                    isScheduled_1 = false;
                    if (!reaction.isDisposed)
                        reaction.track(reactionRunner);
                });
            }
        }, opts.onError, opts.requiresObservable);
    }
    function reactionRunner() {
        view(reaction);
    }
    reaction.schedule();
    return reaction.getDisposer();
}
var run = function (f) { return f(); };
function createSchedulerFromOptions(opts) {
    return opts.scheduler
        ? opts.scheduler
        : opts.delay
            ? function (f) { return setTimeout(f, opts.delay); }
            : run;
}
function reaction(expression, effect, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT; }
    if (typeof opts === "boolean") {
        opts = { fireImmediately: opts };
        deprecated("Using fireImmediately as argument is deprecated. Use '{ fireImmediately: true }' instead");
    }
    if (true) {
        invariant(typeof expression === "function", "First argument to reaction should be a function");
        invariant(typeof opts === "object", "Third argument of reactions should be an object");
    }
    var name = opts.name || "Reaction@" + getNextId();
    var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
    var runSync = !opts.scheduler && !opts.delay;
    var scheduler = createSchedulerFromOptions(opts);
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.compareStructural
        ? comparer.structural
        : opts.equals || comparer.default;
    var r = new Reaction(name, function () {
        if (firstTime || runSync) {
            reactionRunner();
        }
        else if (!isScheduled) {
            isScheduled = true;
            scheduler(reactionRunner);
        }
    }, opts.onError, opts.requiresObservable);
    function reactionRunner() {
        isScheduled = false; // Q: move into reaction runner?
        if (r.isDisposed)
            return;
        var changed = false;
        r.track(function () {
            var nextValue = expression(r);
            changed = firstTime || !equals(value, nextValue);
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately)
            effectAction(value, r);
        if (!firstTime && changed === true)
            effectAction(value, r);
        if (firstTime)
            firstTime = false;
    }
    r.schedule();
    return r.getDisposer();
}
function wrapErrorHandler(errorHandler, baseFn) {
    return function () {
        try {
            return baseFn.apply(this, arguments);
        }
        catch (e) {
            errorHandler.call(this, e);
        }
    };
}

function onBecomeObserved(thing, arg2, arg3) {
    return interceptHook("onBecomeObserved", thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
    return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
    var cb = typeof arg3 === "function" ? arg3 : arg2;
    var orig = atom[hook];
    if (typeof orig !== "function")
        return fail( true && "Not an atom that can be (un)observed");
    atom[hook] = function () {
        orig.call(this);
        cb.call(this);
    };
    return function () {
        atom[hook] = orig;
    };
}

function configure(options) {
    var enforceActions = options.enforceActions, computedRequiresReaction = options.computedRequiresReaction, computedConfigurable = options.computedConfigurable, disableErrorBoundaries = options.disableErrorBoundaries, arrayBuffer = options.arrayBuffer, reactionScheduler = options.reactionScheduler, reactionRequiresObservable = options.reactionRequiresObservable, observableRequiresReaction = options.observableRequiresReaction;
    if (options.isolateGlobalState === true) {
        isolateGlobalState();
    }
    if (enforceActions !== undefined) {
        if (typeof enforceActions === "boolean" || enforceActions === "strict")
            deprecated("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
        var ea = void 0;
        switch (enforceActions) {
            case true:
            case "observed":
                ea = true;
                break;
            case false:
            case "never":
                ea = false;
                break;
            case "strict":
            case "always":
                ea = "strict";
                break;
            default:
                fail("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
        }
        globalState.enforceActions = ea;
        globalState.allowStateChanges = ea === true || ea === "strict" ? false : true;
    }
    if (computedRequiresReaction !== undefined) {
        globalState.computedRequiresReaction = !!computedRequiresReaction;
    }
    if (reactionRequiresObservable !== undefined) {
        globalState.reactionRequiresObservable = !!reactionRequiresObservable;
    }
    if (observableRequiresReaction !== undefined) {
        globalState.observableRequiresReaction = !!observableRequiresReaction;
        globalState.allowStateReads = !globalState.observableRequiresReaction;
    }
    if (computedConfigurable !== undefined) {
        globalState.computedConfigurable = !!computedConfigurable;
    }
    if (disableErrorBoundaries !== undefined) {
        if (disableErrorBoundaries === true)
            console.warn("WARNING: Debug feature only. MobX will NOT recover from errors if this is on.");
        globalState.disableErrorBoundaries = !!disableErrorBoundaries;
    }
    if (typeof arrayBuffer === "number") {
        reserveArrayBuffer(arrayBuffer);
    }
    if (reactionScheduler) {
        setReactionScheduler(reactionScheduler);
    }
}

function decorate(thing, decorators) {
    if ( true && !isPlainObject(decorators))
        fail("Decorators should be a key value map");
    var target = typeof thing === "function" ? thing.prototype : thing;
    var _loop_1 = function (prop) {
        var propertyDecorators = decorators[prop];
        if (!Array.isArray(propertyDecorators)) {
            propertyDecorators = [propertyDecorators];
        }
        // prettier-ignore
        if ( true && !propertyDecorators.every(function (decorator) { return typeof decorator === "function"; }))
            fail("Decorate: expected a decorator function or array of decorator functions for '" + prop + "'");
        var descriptor = Object.getOwnPropertyDescriptor(target, prop);
        var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) { return decorator(target, prop, accDescriptor); }, descriptor);
        if (newDescriptor)
            Object.defineProperty(target, prop, newDescriptor);
    };
    for (var prop in decorators) {
        _loop_1(prop);
    }
    return thing;
}

function extendShallowObservable(target, properties, decorators) {
    deprecated("'extendShallowObservable' is deprecated, use 'extendObservable(target, props, { deep: false })' instead");
    return extendObservable(target, properties, decorators, shallowCreateObservableOptions);
}
function extendObservable(target, properties, decorators, options) {
    if (true) {
        invariant(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
        invariant(typeof target === "object", "'extendObservable' expects an object as first argument");
        invariant(!isObservableMap(target), "'extendObservable' should not be used on maps, use map.merge instead");
        invariant(!isObservable(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
        if (decorators)
            for (var key in decorators)
                if (!(key in properties))
                    fail("Trying to declare a decorator for unspecified property '" + key + "'");
    }
    options = asCreateObservableOptions(options);
    var defaultDecorator = options.defaultDecorator || (options.deep === false ? refDecorator : deepDecorator);
    initializeInstance(target);
    asObservableObject(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props
    startBatch();
    try {
        var keys = Object.getOwnPropertyNames(properties);
        for (var i = 0, l = keys.length; i < l; i++) {
            var key = keys[i];
            var descriptor = Object.getOwnPropertyDescriptor(properties, key);
            if (true) {
                if (isComputed(descriptor.value))
                    fail("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
            }
            var decorator = decorators && key in decorators
                ? decorators[key]
                : descriptor.get
                    ? computedDecorator
                    : defaultDecorator;
            if ( true && typeof decorator !== "function")
                return fail("Not a valid decorator for '" + key + "', got: " + decorator);
            var resultDescriptor = decorator(target, key, descriptor, true);
            if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
            )
                Object.defineProperty(target, key, resultDescriptor);
        }
    }
    finally {
        endBatch();
    }
    return target;
}

function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length > 0)
        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
    return result;
}
function getObserverTree(thing, property) {
    return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name
    };
    if (hasObservers(node))
        result.observers = getObservers(node).map(nodeToObserverTree);
    return result;
}

var generatorId = 0;
function FlowCancellationError() {
    this.message = "FLOW_CANCELLED";
}
FlowCancellationError.prototype = Object.create(Error.prototype);
function isFlowCancellationError(error) {
    return error instanceof FlowCancellationError;
}
function flow(generator) {
    if (arguments.length !== 1)
        fail( true && "Flow expects one 1 argument and cannot be used as decorator");
    var name = generator.name || "<unnamed flow>";
    // Implementation based on https://github.com/tj/co/blob/master/index.js
    return function () {
        var ctx = this;
        var args = arguments;
        var runId = ++generatorId;
        var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
        var rejector;
        var pendingPromise = undefined;
        var res = new Promise(function (resolve, reject) {
            var stepId = 0;
            rejector = reject;
            function onFulfilled(res) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function onRejected(err) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function next(ret) {
                if (ret && typeof ret.then === "function") {
                    // an async iterator
                    ret.then(next, reject);
                    return;
                }
                if (ret.done)
                    return resolve(ret.value);
                pendingPromise = Promise.resolve(ret.value);
                return pendingPromise.then(onFulfilled, onRejected);
            }
            onFulfilled(undefined); // kick off the process
        });
        res.cancel = action(name + " - runid: " + runId + " - cancel", function () {
            try {
                if (pendingPromise)
                    cancelPromise(pendingPromise);
                // Finally block can return (or yield) stuff..
                var res_1 = gen.return(undefined);
                // eat anything that promise would do, it's cancelled!
                var yieldedPromise = Promise.resolve(res_1.value);
                yieldedPromise.then(noop, noop);
                cancelPromise(yieldedPromise); // maybe it can be cancelled :)
                // reject our original promise
                rejector(new FlowCancellationError());
            }
            catch (e) {
                rejector(e); // there could be a throwing finally block
            }
        });
        return res;
    };
}
function cancelPromise(promise) {
    if (typeof promise.cancel === "function")
        promise.cancel();
}

function interceptReads(thing, propOrHandler, handler) {
    var target;
    if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
        target = getAdministration(thing);
    }
    else if (isObservableObject(thing)) {
        if (typeof propOrHandler !== "string")
            return fail( true &&
                "InterceptReads can only be used with a specific property, not with an object in general");
        target = getAdministration(thing, propOrHandler);
    }
    else {
        return fail( true &&
            "Expected observable map, object or array as first array");
    }
    if (target.dehancer !== undefined)
        return fail( true && "An intercept reader was already established");
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function () {
        target.dehancer = undefined;
    };
}

function intercept(thing, propOrHandler, handler) {
    if (typeof handler === "function")
        return interceptProperty(thing, propOrHandler, handler);
    else
        return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
    return getAdministration(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration(thing, property).intercept(handler);
}

function _isComputed(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableObject(value) === false)
            return false;
        if (!value.$mobx.values[property])
            return false;
        var atom = getAtom(value, property);
        return isComputedValue(atom);
    }
    return isComputedValue(value);
}
function isComputed(value) {
    if (arguments.length > 1)
        return fail( true &&
            "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isComputed(value);
}
function isComputedProp(value, propName) {
    if (typeof propName !== "string")
        return fail( true &&
            "isComputed expected a property name as second argument");
    return _isComputed(value, propName);
}

function _isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if ( true &&
            (isObservableMap(value) || isObservableArray(value)))
            return fail("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
        if (isObservableObject(value)) {
            var o = value.$mobx;
            return o.values && !!o.values[property];
        }
        return false;
    }
    // For first check, see #701
    return (isObservableObject(value) ||
        !!value.$mobx ||
        isAtom(value) ||
        isReaction(value) ||
        isComputedValue(value));
}
function isObservable(value) {
    if (arguments.length !== 1)
        fail( true &&
            "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isObservable(value);
}
function isObservableProp(value, propName) {
    if (typeof propName !== "string")
        return fail( true && "expected a property name as second argument");
    return _isObservable(value, propName);
}

function keys(obj) {
    if (isObservableObject(obj)) {
        return obj.$mobx.getKeys();
    }
    if (isObservableMap(obj)) {
        return iteratorToArray(obj.keys());
    }
    if (isObservableSet(obj)) {
        return iteratorToArray(obj.keys());
    }
    if (isObservableArray(obj)) {
        return obj.map(function (_, index) { return index; });
    }
    return fail( true &&
        "'keys()' can only be used on observable objects, arrays, sets and maps");
}
function values(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function (key) { return obj[key]; });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function (key) { return obj.get(key); });
    }
    if (isObservableSet(obj)) {
        return iteratorToArray(obj.values());
    }
    if (isObservableArray(obj)) {
        return obj.slice();
    }
    return fail( true &&
        "'values()' can only be used on observable objects, arrays, sets and maps");
}
function entries(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function (key) { return [key, obj[key]]; });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function (key) { return [key, obj.get(key)]; });
    }
    if (isObservableSet(obj)) {
        return iteratorToArray(obj.entries());
    }
    if (isObservableArray(obj)) {
        return obj.map(function (key, index) { return [index, key]; });
    }
    return fail( true &&
        "'entries()' can only be used on observable objects, arrays and maps");
}
function set(obj, key, value) {
    if (arguments.length === 2 && !isObservableSet(obj)) {
        startBatch();
        var values_1 = key;
        try {
            for (var key_1 in values_1)
                set(obj, key_1, values_1[key_1]);
        }
        finally {
            endBatch();
        }
        return;
    }
    if (isObservableObject(obj)) {
        var adm = obj.$mobx;
        var existingObservable = adm.values[key];
        if (existingObservable) {
            adm.write(obj, key, value);
        }
        else {
            defineObservableProperty(obj, key, value, adm.defaultEnhancer);
        }
    }
    else if (isObservableMap(obj)) {
        obj.set(key, value);
    }
    else if (isObservableSet(obj)) {
        obj.add(key);
    }
    else if (isObservableArray(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant(key >= 0, "Not a valid index: '" + key + "'");
        startBatch();
        if (key >= obj.length)
            obj.length = key + 1;
        obj[key] = value;
        endBatch();
    }
    else {
        return fail( true &&
            "'set()' can only be used on observable objects, arrays and maps");
    }
}
function remove(obj, key) {
    if (isObservableObject(obj)) {
        obj.$mobx.remove(key);
    }
    else if (isObservableMap(obj)) {
        obj.delete(key);
    }
    else if (isObservableSet(obj)) {
        obj.delete(key);
    }
    else if (isObservableArray(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant(key >= 0, "Not a valid index: '" + key + "'");
        obj.splice(key, 1);
    }
    else {
        return fail( true &&
            "'remove()' can only be used on observable objects, arrays and maps");
    }
}
function has(obj, key) {
    if (isObservableObject(obj)) {
        // return keys(obj).indexOf(key) >= 0
        var adm = getAdministration(obj);
        adm.getKeys(); // make sure we get notified of key changes, but for performance, use the values map to look up existence
        return !!adm.values[key];
    }
    else if (isObservableMap(obj)) {
        return obj.has(key);
    }
    else if (isObservableSet(obj)) {
        return obj.has(key);
    }
    else if (isObservableArray(obj)) {
        return key >= 0 && key < obj.length;
    }
    else {
        return fail( true &&
            "'has()' can only be used on observable objects, arrays and maps");
    }
}
function get(obj, key) {
    if (!has(obj, key))
        return undefined;
    if (isObservableObject(obj)) {
        return obj[key];
    }
    else if (isObservableMap(obj)) {
        return obj.get(key);
    }
    else if (isObservableArray(obj)) {
        return obj[key];
    }
    else {
        return fail( true &&
            "'get()' can only be used on observable objects, arrays and maps");
    }
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function")
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
        return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration(thing, property).observe(listener, fireImmediately);
}

var defaultOptions = {
    detectCycles: true,
    exportMapsAsObjects: true,
    recurseEverything: false
};
function cache(map, key, value, options) {
    if (options.detectCycles)
        map.set(key, value);
    return value;
}
function toJSHelper(source, options, __alreadySeen) {
    if (!options.recurseEverything && !isObservable(source))
        return source;
    if (typeof source !== "object")
        return source;
    // Directly return null if source is null
    if (source === null)
        return null;
    // Directly return the Date object itself if contained in the observable
    if (source instanceof Date)
        return source;
    if (isObservableValue(source))
        return toJSHelper(source.get(), options, __alreadySeen);
    // make sure we track the keys of the object
    if (isObservable(source))
        keys(source);
    var detectCycles = options.detectCycles === true;
    if (detectCycles && source !== null && __alreadySeen.has(source)) {
        return __alreadySeen.get(source);
    }
    if (isObservableArray(source) || Array.isArray(source)) {
        var res_1 = cache(__alreadySeen, source, [], options);
        var toAdd = source.map(function (value) { return toJSHelper(value, options, __alreadySeen); });
        res_1.length = toAdd.length;
        for (var i = 0, l = toAdd.length; i < l; i++)
            res_1[i] = toAdd[i];
        return res_1;
    }
    if (isObservableSet(source) || Object.getPrototypeOf(source) === Set.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_2 = cache(__alreadySeen, source, new Set(), options);
            source.forEach(function (value) {
                res_2.add(toJSHelper(value, options, __alreadySeen));
            });
            return res_2;
        }
        else {
            var res_3 = cache(__alreadySeen, source, [], options);
            source.forEach(function (value) {
                res_3.push(toJSHelper(value, options, __alreadySeen));
            });
            return res_3;
        }
    }
    if (isObservableMap(source) || Object.getPrototypeOf(source) === Map.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_4 = cache(__alreadySeen, source, new Map(), options);
            source.forEach(function (value, key) {
                res_4.set(key, toJSHelper(value, options, __alreadySeen));
            });
            return res_4;
        }
        else {
            var res_5 = cache(__alreadySeen, source, {}, options);
            source.forEach(function (value, key) {
                res_5[key] = toJSHelper(value, options, __alreadySeen);
            });
            return res_5;
        }
    }
    // Fallback to the situation that source is an ObservableObject or a plain object
    var res = cache(__alreadySeen, source, {}, options);
    for (var key in source) {
        res[key] = toJSHelper(source[key], options, __alreadySeen);
    }
    return res;
}
function toJS(source, options) {
    // backward compatibility
    if (typeof options === "boolean")
        options = { detectCycles: options };
    if (!options)
        options = defaultOptions;
    options.detectCycles =
        options.detectCycles === undefined
            ? options.recurseEverything === true
            : options.detectCycles === true;
    var __alreadySeen;
    if (options.detectCycles)
        __alreadySeen = new Map();
    return toJSHelper(source, options, __alreadySeen);
}

function trace() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var enterBreakPoint = false;
    if (typeof args[args.length - 1] === "boolean")
        enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
        return fail( true &&
            "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }
    if (derivation.isTracing === TraceMode.NONE) {
        console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
    }
    derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}
function getAtomFromArgs(args) {
    switch (args.length) {
        case 0:
            return globalState.trackingDerivation;
        case 1:
            return getAtom(args[0]);
        case 2:
            return getAtom(args[0], args[1]);
    }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction(action, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    startBatch();
    try {
        return action.apply(thisArg);
    }
    finally {
        endBatch();
    }
}

function when(predicate, arg1, arg2) {
    if (arguments.length === 1 || (arg1 && typeof arg1 === "object"))
        return whenPromise(predicate, arg1);
    return _when(predicate, arg1, arg2 || {});
}
function _when(predicate, effect, opts) {
    var timeoutHandle;
    if (typeof opts.timeout === "number") {
        timeoutHandle = setTimeout(function () {
            if (!disposer.$mobx.isDisposed) {
                disposer();
                var error = new Error("WHEN_TIMEOUT");
                if (opts.onError)
                    opts.onError(error);
                else
                    throw error;
            }
        }, opts.timeout);
    }
    opts.name = opts.name || "When@" + getNextId();
    var effectAction = createAction(opts.name + "-effect", effect);
    var disposer = autorun(function (r) {
        if (predicate()) {
            r.dispose();
            if (timeoutHandle)
                clearTimeout(timeoutHandle);
            effectAction();
        }
    }, opts);
    return disposer;
}
function whenPromise(predicate, opts) {
    if ( true && opts && opts.onError)
        return fail("the options 'onError' and 'promise' cannot be combined");
    var cancel;
    var res = new Promise(function (resolve, reject) {
        var disposer = _when(predicate, resolve, __assign(__assign({}, opts), { onError: reject }));
        cancel = function () {
            disposer();
            reject("WHEN_CANCELLED");
        };
    });
    res.cancel = cancel;
    return res;
}

function hasInterceptors(interceptable) {
    return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}
function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
        var interceptors = interceptable.interceptors;
        if (interceptors)
            for (var i = 0, l = interceptors.length; i < l; i++) {
                change = interceptors[i](change);
                invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
                if (!change)
                    break;
            }
        return change;
    }
    finally {
        untrackedEnd(prevU);
    }
}

function hasListeners(listenable) {
    return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}
function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners;
    if (!listeners)
        return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd(prevU);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
// Detects bug in safari 9.1.1 (or iOS 9 safari mobile). See #364
var safariPrototypeSetterInheritanceBug = (function () {
    var v = false;
    var p = {};
    Object.defineProperty(p, "0", {
        set: function () {
            v = true;
        }
    });
    Object.create(p)["0"] = 1;
    return v === false;
})();
/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */
var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
// Typescript workaround to make sure ObservableArray extends Array
var StubArray = /** @class */ (function () {
    function StubArray() {
    }
    return StubArray;
}());
function inherit(ctor, proto) {
    if (typeof Object["setPrototypeOf"] !== "undefined") {
        Object["setPrototypeOf"](ctor.prototype, proto);
    }
    else if (typeof ctor.prototype.__proto__ !== "undefined") {
        ctor.prototype.__proto__ = proto;
    }
    else {
        ctor["prototype"] = proto;
    }
}
inherit(StubArray, Array.prototype);
// Weex freeze Array.prototype
// Make them writeable and configurable in prototype chain
// https://github.com/alibaba/weex/pull/1529
if (Object.isFrozen(Array)) {
    [
        "constructor",
        "push",
        "shift",
        "concat",
        "pop",
        "unshift",
        "replace",
        "find",
        "findIndex",
        "splice",
        "reverse",
        "sort"
    ].forEach(function (key) {
        Object.defineProperty(StubArray.prototype, key, {
            configurable: true,
            writable: true,
            value: Array.prototype[key]
        });
    });
}
var ObservableArrayAdministration = /** @class */ (function () {
    function ObservableArrayAdministration(name, enhancer, array, owned) {
        this.array = array;
        this.owned = owned;
        this.values = [];
        this.lastKnownLength = 0;
        this.atom = new Atom(name || "ObservableArray@" + getNextId());
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
    }
    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableArrayAdministration.prototype.dehanceValues = function (values) {
        if (this.dehancer !== undefined && values.length > 0)
            return values.map(this.dehancer);
        return values;
    };
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.array,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++)
                newItems[i] = undefined; // No Array.fill everywhere...
            this.spliceWithArray(currentLength, 0, newItems);
        }
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    // adds / removes the necessary numeric properties to this object
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
        this.lastKnownLength += delta;
        if (delta > 0 && oldLength + delta + 1 > OBSERVABLE_ARRAY_BUFFER_SIZE)
            reserveArrayBuffer(oldLength + delta + 1);
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this.atom);
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = EMPTY_ARRAY;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.array,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems =
            newItems.length === 0 ? newItems : newItems.map(function (v) { return _this.enhancer(v, undefined); });
        var lengthDelta = newItems.length - deleteCount;
        this.updateArrayLength(length, lengthDelta); // create or remove new entries
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return this.dehanceValues(res);
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        var _a;
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
        }
        else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values
                .slice(0, index)
                .concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.array,
                type: "update",
                index: index,
                newValue: newValue,
                oldValue: oldValue
            }
            : null;
        if (notifySpy)
            spyReportStart(__assign(__assign({}, change), { name: this.atom.name }));
        this.atom.reportChanged();
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.array,
                type: "splice",
                index: index,
                removed: removed,
                added: added,
                removedCount: removed.length,
                addedCount: added.length
            }
            : null;
        if (notifySpy)
            spyReportStart(__assign(__assign({}, change), { name: this.atom.name }));
        this.atom.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    return ObservableArrayAdministration;
}());
var ObservableArray = /** @class */ (function (_super) {
    __extends(ObservableArray, _super);
    function ObservableArray(initialValues, enhancer, name, owned) {
        if (name === void 0) { name = "ObservableArray@" + getNextId(); }
        if (owned === void 0) { owned = false; }
        var _this = _super.call(this) || this;
        var adm = new ObservableArrayAdministration(name, enhancer, _this, owned);
        addHiddenFinalProp(_this, "$mobx", adm);
        if (initialValues && initialValues.length) {
            var prev = allowStateChangesStart(true);
            _this.spliceWithArray(0, 0, initialValues);
            allowStateChangesEnd(prev);
        }
        if (safariPrototypeSetterInheritanceBug) {
            // Seems that Safari won't use numeric prototype setter untill any * numeric property is
            // defined on the instance. After that it works fine, even if this property is deleted.
            Object.defineProperty(adm.array, "0", ENTRY_0);
        }
        return _this;
    }
    ObservableArray.prototype.intercept = function (handler) {
        return this.$mobx.intercept(handler);
    };
    ObservableArray.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        return this.$mobx.observe(listener, fireImmediately);
    };
    ObservableArray.prototype.clear = function () {
        return this.splice(0);
    };
    ObservableArray.prototype.concat = function () {
        var arrays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrays[_i] = arguments[_i];
        }
        this.$mobx.atom.reportObserved();
        return Array.prototype.concat.apply(this.peek(), arrays.map(function (a) { return (isObservableArray(a) ? a.peek() : a); }));
    };
    ObservableArray.prototype.replace = function (newItems) {
        return this.$mobx.spliceWithArray(0, this.$mobx.values.length, newItems);
    };
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    ObservableArray.prototype.toJS = function () {
        return this.slice();
    };
    ObservableArray.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toJS();
    };
    ObservableArray.prototype.peek = function () {
        this.$mobx.atom.reportObserved();
        return this.$mobx.dehanceValues(this.$mobx.values);
    };
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        if (arguments.length === 3)
            deprecated("The array.find fromIndex argument to find will not be supported anymore in the next major");
        var idx = this.findIndex.apply(this, arguments);
        return idx === -1 ? undefined : this.get(idx);
    };
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    ObservableArray.prototype.findIndex = function (predicate, thisArg, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        if (arguments.length === 3)
            deprecated("The array.findIndex fromIndex argument to find will not be supported anymore in the next major");
        var items = this.peek(), l = items.length;
        for (var i = fromIndex; i < l; i++)
            if (predicate.call(thisArg, items[i], i, this))
                return i;
        return -1;
    };
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    ObservableArray.prototype.splice = function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return this.$mobx.spliceWithArray(index);
            case 2:
                return this.$mobx.spliceWithArray(index, deleteCount);
        }
        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
    };
    ObservableArray.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
    };
    ObservableArray.prototype.push = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this.$mobx;
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    };
    ObservableArray.prototype.pop = function () {
        return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
    };
    ObservableArray.prototype.shift = function () {
        return this.splice(0, 1)[0];
    };
    ObservableArray.prototype.unshift = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this.$mobx;
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    };
    ObservableArray.prototype.reverse = function () {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        // so we deviate from the default and just make it an dervitation
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    };
    ObservableArray.prototype.sort = function (compareFn) {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    };
    ObservableArray.prototype.remove = function (value) {
        var idx = this.$mobx.dehanceValues(this.$mobx.values).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    };
    ObservableArray.prototype.move = function (fromIndex, toIndex) {
        deprecated("observableArray.move is deprecated, use .slice() & .replace() instead");
        function checkIndex(index) {
            if (index < 0) {
                throw new Error("[mobx.array] Index out of bounds: " + index + " is negative");
            }
            var length = this.$mobx.values.length;
            if (index >= length) {
                throw new Error("[mobx.array] Index out of bounds: " + index + " is not smaller than " + length);
            }
        }
        checkIndex.call(this, fromIndex);
        checkIndex.call(this, toIndex);
        if (fromIndex === toIndex) {
            return;
        }
        var oldItems = this.$mobx.values;
        var newItems;
        if (fromIndex < toIndex) {
            newItems = __spread(oldItems.slice(0, fromIndex), oldItems.slice(fromIndex + 1, toIndex + 1), [
                oldItems[fromIndex]
            ], oldItems.slice(toIndex + 1));
        }
        else {
            // toIndex < fromIndex
            newItems = __spread(oldItems.slice(0, toIndex), [
                oldItems[fromIndex]
            ], oldItems.slice(toIndex, fromIndex), oldItems.slice(fromIndex + 1));
        }
        this.replace(newItems);
    };
    // See #734, in case property accessors are unreliable...
    ObservableArray.prototype.get = function (index) {
        var impl = this.$mobx;
        if (impl) {
            if (index < impl.values.length) {
                impl.atom.reportObserved();
                return impl.dehanceValue(impl.values[index]);
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + impl.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    };
    // See #734, in case property accessors are unreliable...
    ObservableArray.prototype.set = function (index, newValue) {
        var adm = this.$mobx;
        var values = adm.values;
        if (index < values.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed(adm.atom);
            var oldValue = values[index];
            if (hasInterceptors(adm)) {
                var change = interceptChange(adm, {
                    type: "update",
                    object: this,
                    index: index,
                    newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values.length) {
            // add a new item
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else {
            // out of bounds
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
        }
    };
    return ObservableArray;
}(StubArray));
declareIterator(ObservableArray.prototype, function () {
    this.$mobx.atom.reportObserved();
    var self = this;
    var nextIndex = 0;
    return makeIterable({
        next: function () {
            return nextIndex < self.length
                ? { value: self[nextIndex++], done: false }
                : { done: true, value: undefined };
        }
    });
});
Object.defineProperty(ObservableArray.prototype, "length", {
    enumerable: false,
    configurable: true,
    get: function () {
        return this.$mobx.getArrayLength();
    },
    set: function (newLength) {
        this.$mobx.setArrayLength(newLength);
    }
});
addHiddenProp(ObservableArray.prototype, toStringTagSymbol(), "Array");
["indexOf", "join", "lastIndexOf", "slice", "toString", "toLocaleString"].forEach(function (funcName) {
    var baseFunc = Array.prototype[funcName];
    invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
    addHiddenProp(ObservableArray.prototype, funcName, function () {
        return baseFunc.apply(this.peek(), arguments);
    });
});
[
    "every",
    "filter",
    //"find", // implemented individually (IE support)
    //"findIndex", // implemented individually (IE support)
    //"flatMap", // not supported
    "forEach",
    "map",
    "some"
].forEach(function (funcName) {
    var baseFunc = Array.prototype[funcName];
    invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
    addHiddenProp(ObservableArray.prototype, funcName, function (callback, thisArg) {
        var _this = this;
        var adm = this.$mobx;
        adm.atom.reportObserved();
        var dehancedValues = adm.dehanceValues(adm.values);
        return dehancedValues[funcName](function (element, index) {
            return callback.call(thisArg, element, index, _this);
        }, thisArg);
    });
});
["reduce", "reduceRight"].forEach(function (funcName) {
    addHiddenProp(ObservableArray.prototype, funcName, function () {
        var _this = this;
        var adm = this.$mobx;
        adm.atom.reportObserved();
        // #2432 - reduce behavior depends on arguments.length
        var callback = arguments[0];
        arguments[0] = function (accumulator, currentValue, index) {
            currentValue = adm.dehanceValue(currentValue);
            return callback(accumulator, currentValue, index, _this);
        };
        return adm.values[funcName].apply(adm.values, arguments);
    });
});
/**
 * We don't want those to show up in `for (const key in ar)` ...
 */
makeNonEnumerable(ObservableArray.prototype, [
    "constructor",
    "intercept",
    "observe",
    "clear",
    "concat",
    "get",
    "replace",
    "toJS",
    "toJSON",
    "peek",
    "find",
    "findIndex",
    "splice",
    "spliceWithArray",
    "push",
    "pop",
    "set",
    "shift",
    "unshift",
    "reverse",
    "sort",
    "remove",
    "move",
    "toString",
    "toLocaleString"
]);
// See #364
var ENTRY_0 = createArrayEntryDescriptor(0);
function createArrayEntryDescriptor(index) {
    return {
        enumerable: false,
        configurable: false,
        get: function () {
            return this.get(index);
        },
        set: function (value) {
            this.set(index, value);
        }
    };
}
function createArrayBufferItem(index) {
    Object.defineProperty(ObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}
function reserveArrayBuffer(max) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max; index++)
        createArrayBufferItem(index);
    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
}
reserveArrayBuffer(1000);
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing.$mobx);
}

var ObservableMapMarker = {};
var ObservableMap = /** @class */ (function () {
    function ObservableMap(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
        this.enhancer = enhancer;
        this.name = name;
        this.$mobx = ObservableMapMarker;
        this._keysAtom = createAtom(this.name + ".keys()");
        if (typeof Map !== "function") {
            throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
        }
        this._data = new Map();
        this._hasMap = new Map();
        this.merge(initialData);
    }
    ObservableMap.prototype._has = function (key) {
        return this._data.has(key);
    };
    ObservableMap.prototype.has = function (key) {
        var _this = this;
        if (!globalState.trackingDerivation)
            return this._has(key);
        var entry = this._hasMap.get(key);
        if (!entry) {
            // todo: replace with atom (breaking change)
            var newEntry = (entry = new ObservableValue(this._has(key), referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false));
            this._hasMap.set(key, newEntry);
            onBecomeUnobserved(newEntry, function () { return _this._hasMap.delete(key); });
        }
        return entry.get();
    };
    ObservableMap.prototype.set = function (key, value) {
        var hasKey = this._has(key);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap.prototype.delete = function (key) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._keysAtom);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: this._data.get(key).value,
                    name: key
                }
                : null;
            if (notifySpy)
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            transaction(function () {
                _this._keysAtom.reportChanged();
                _this._updateHasMapEntry(key, false);
                var observable = _this._data.get(key);
                observable.setNewValue(undefined);
                _this._data.delete(key);
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
        var entry = this._hasMap.get(key);
        if (entry) {
            entry.setNewValue(value);
        }
    };
    ObservableMap.prototype._updateValue = function (key, newValue) {
        var observable = this._data.get(key);
        newValue = observable.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy)
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableMap.prototype._addValue = function (key, newValue) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._keysAtom);
        transaction(function () {
            var observable = new ObservableValue(newValue, _this.enhancer, _this.name + "." + stringifyKey(key), false);
            _this._data.set(key, observable);
            newValue = observable.value; // value might have been changed
            _this._updateHasMapEntry(key, true);
            _this._keysAtom.reportChanged();
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy)
            spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    ObservableMap.prototype.get = function (key) {
        if (this.has(key))
            return this.dehanceValue(this._data.get(key).get());
        return this.dehanceValue(undefined);
    };
    ObservableMap.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableMap.prototype.keys = function () {
        this._keysAtom.reportObserved();
        return this._data.keys();
    };
    ObservableMap.prototype.values = function () {
        var self = this;
        var keys = this.keys();
        return makeIterable({
            next: function () {
                var _a = keys.next(), done = _a.done, value = _a.value;
                return {
                    done: done,
                    value: done ? undefined : self.get(value)
                };
            }
        });
    };
    ObservableMap.prototype.entries = function () {
        var self = this;
        var keys = this.keys();
        return makeIterable({
            next: function () {
                var _a = keys.next(), done = _a.done, value = _a.value;
                return {
                    done: done,
                    value: done ? undefined : [value, self.get(value)]
                };
            }
        });
    };
    ObservableMap.prototype.forEach = function (callback, thisArg) {
        var _this = this;
        this._keysAtom.reportObserved();
        this._data.forEach(function (_, key) { return callback.call(thisArg, _this.get(key), key, _this); });
    };
    /** Merge another object into this object, returns this. */
    ObservableMap.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap(other)) {
            other = other.toJS();
        }
        transaction(function () {
            var prev = allowStateChangesStart(true);
            try {
                if (isPlainObject(other))
                    Object.keys(other).forEach(function (key) { return _this.set(key, other[key]); });
                else if (Array.isArray(other))
                    other.forEach(function (_a) {
                        var _b = __read(_a, 2), key = _b[0], value = _b[1];
                        return _this.set(key, value);
                    });
                else if (isES6Map(other)) {
                    if (other.constructor !== Map)
                        fail("Cannot initialize from classes that inherit from Map: " + other.constructor.name); // prettier-ignore
                    else
                        other.forEach(function (value, key) { return _this.set(key, value); });
                }
                else if (other !== null && other !== undefined)
                    fail("Cannot initialize map from " + other);
            }
            finally {
                allowStateChangesEnd(prev);
            }
        });
        return this;
    };
    ObservableMap.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                // Note we are concurrently reading/deleting the same keys
                // forEach handles this properly
                _this._data.forEach(function (_, key) { return _this.delete(key); });
            });
        });
    };
    ObservableMap.prototype.replace = function (values) {
        var _this = this;
        // Implementation requirements:
        // - respect ordering of replacement map
        // - allow interceptors to run and potentially prevent individual operations
        // - don't recreate observables that already exist in original map (so we don't destroy existing subscriptions)
        // - don't _keysAtom.reportChanged if the keys of resulting map are indentical (order matters!)
        // - note that result map may differ from replacement map due to the interceptors
        transaction(function () {
            // Convert to map so we can do quick key lookups
            var replacementMap = convertToMap(values);
            var orderedData = new Map();
            // Used for optimization
            var keysReportChangedCalled = false;
            // Delete keys that don't exist in replacement map
            // if the key deletion is prevented by interceptor
            // add entry at the beginning of the result map
            forOf(_this._data.keys(), function (key) {
                // Concurrently iterating/deleting keys
                // iterator should handle this correctly
                if (!replacementMap.has(key)) {
                    var deleted = _this.delete(key);
                    // Was the key removed?
                    if (deleted) {
                        // _keysAtom.reportChanged() was already called
                        keysReportChangedCalled = true;
                    }
                    else {
                        // Delete prevented by interceptor
                        var value = _this._data.get(key);
                        orderedData.set(key, value);
                    }
                }
            });
            // Merge entries
            forOf(replacementMap.entries(), function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                // We will want to know whether a new key is added
                var keyExisted = _this._data.has(key);
                // Add or update value
                _this.set(key, value);
                // The addition could have been prevent by interceptor
                if (_this._data.has(key)) {
                    // The update could have been prevented by interceptor
                    // and also we want to preserve existing values
                    // so use value from _data map (instead of replacement map)
                    var value_1 = _this._data.get(key);
                    orderedData.set(key, value_1);
                    // Was a new key added?
                    if (!keyExisted) {
                        // _keysAtom.reportChanged() was already called
                        keysReportChangedCalled = true;
                    }
                }
            });
            // Check for possible key order change
            if (!keysReportChangedCalled) {
                if (_this._data.size !== orderedData.size) {
                    // If size differs, keys are definitely modified
                    _this._keysAtom.reportChanged();
                }
                else {
                    var iter1 = _this._data.keys();
                    var iter2 = orderedData.keys();
                    var next1 = iter1.next();
                    var next2 = iter2.next();
                    while (!next1.done) {
                        if (next1.value !== next2.value) {
                            _this._keysAtom.reportChanged();
                            break;
                        }
                        next1 = iter1.next();
                        next2 = iter2.next();
                    }
                }
            }
            // Use correctly ordered map
            _this._data = orderedData;
        });
        return this;
    };
    Object.defineProperty(ObservableMap.prototype, "size", {
        get: function () {
            this._keysAtom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a plain object that represents this map.
     * Note that all the keys being stringified.
     * If there are duplicating keys after converting them to strings, behaviour is undetermined.
     */
    ObservableMap.prototype.toPOJO = function () {
        var _this = this;
        var res = {};
        this.forEach(function (_, key) {
            return (res[typeof key === "symbol" ? key : stringifyKey(key)] = _this.get(key));
        });
        return res;
    };
    /**
     * Returns a shallow non observable object clone of this map.
     * Note that the values migth still be observable. For a deep clone use mobx.toJS.
     */
    ObservableMap.prototype.toJS = function () {
        return new Map(this);
    };
    ObservableMap.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toPOJO();
    };
    ObservableMap.prototype.toString = function () {
        var _this = this;
        return (this.name +
            "[{ " +
            iteratorToArray(this.keys())
                .map(function (key) { return stringifyKey(key) + ": " + ("" + _this.get(key)); })
                .join(", ") +
            " }]");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableMap.prototype.observe = function (listener, fireImmediately) {
         true &&
            invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
        return registerListener(this, listener);
    };
    ObservableMap.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableMap;
}());
function stringifyKey(key) {
    if (key && key.toString)
        return key.toString();
    else
        return new String(key).toString();
}
declareIterator(ObservableMap.prototype, function () {
    return this.entries();
});
addHiddenFinalProp(ObservableMap.prototype, toStringTagSymbol(), "Map");
/* 'var' fixes small-build issue */
var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);

var ObservableSetMarker = {};
var ObservableSet = /** @class */ (function () {
    function ObservableSet(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableSet@" + getNextId(); }
        this.name = name;
        this.$mobx = ObservableSetMarker;
        this._data = new Set();
        this._atom = createAtom(this.name);
        if (typeof Set !== "function") {
            throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
        }
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name); };
        if (initialData) {
            this.replace(initialData);
        }
    }
    ObservableSet.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableSet.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                _this._data.forEach(function (value) {
                    _this.delete(value);
                });
            });
        });
    };
    ObservableSet.prototype.forEach = function (callbackFn, thisArg) {
        var _this = this;
        this._atom.reportObserved();
        this._data.forEach(function (value) {
            callbackFn.call(thisArg, value, value, _this);
        });
    };
    Object.defineProperty(ObservableSet.prototype, "size", {
        get: function () {
            this._atom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    ObservableSet.prototype.add = function (value) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._atom);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "add",
                object: this,
                newValue: value
            });
            if (!change)
                return this;
            // TODO: ideally, value = change.value would be done here, so that values can be
            // changed by interceptor. Same applies for other Set and Map api's.
        }
        if (!this.has(value)) {
            transaction(function () {
                _this._data.add(_this.enhancer(value, undefined));
                _this._atom.reportChanged();
            });
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "add",
                    object: this,
                    newValue: value
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(change);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
        return this;
    };
    ObservableSet.prototype.delete = function (value) {
        var _this = this;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                oldValue: value
            });
            if (!change)
                return false;
        }
        if (this.has(value)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: value
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name }));
            transaction(function () {
                _this._atom.reportChanged();
                _this._data.delete(value);
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableSet.prototype.has = function (value) {
        this._atom.reportObserved();
        return this._data.has(this.dehanceValue(value));
    };
    ObservableSet.prototype.entries = function () {
        var nextIndex = 0;
        var keys = iteratorToArray(this.keys());
        var values = iteratorToArray(this.values());
        return makeIterable({
            next: function () {
                var index = nextIndex;
                nextIndex += 1;
                return index < values.length
                    ? { value: [keys[index], values[index]], done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet.prototype.keys = function () {
        return this.values();
    };
    ObservableSet.prototype.values = function () {
        this._atom.reportObserved();
        var self = this;
        var nextIndex = 0;
        var observableValues;
        if (this._data.values !== undefined) {
            observableValues = iteratorToArray(this._data.values());
        }
        else {
            // There is no values function in IE11
            observableValues = [];
            this._data.forEach(function (e) { return observableValues.push(e); });
        }
        return makeIterable({
            next: function () {
                return nextIndex < observableValues.length
                    ? { value: self.dehanceValue(observableValues[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet.prototype.replace = function (other) {
        var _this = this;
        if (isObservableSet(other)) {
            other = other.toJS();
        }
        transaction(function () {
            var prev = allowStateChangesStart(true);
            try {
                if (Array.isArray(other)) {
                    _this.clear();
                    other.forEach(function (value) { return _this.add(value); });
                }
                else if (isES6Set(other)) {
                    _this.clear();
                    other.forEach(function (value) { return _this.add(value); });
                }
                else if (other !== null && other !== undefined) {
                    fail("Cannot initialize set from " + other);
                }
            }
            finally {
                allowStateChangesEnd(prev);
            }
        });
        return this;
    };
    ObservableSet.prototype.observe = function (listener, fireImmediately) {
        // TODO 'fireImmediately' can be true?
         true &&
            invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with sets.");
        return registerListener(this, listener);
    };
    ObservableSet.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableSet.prototype.toJS = function () {
        return new Set(this);
    };
    ObservableSet.prototype.toString = function () {
        return this.name + "[ " + iteratorToArray(this.keys()).join(", ") + " ]";
    };
    return ObservableSet;
}());
declareIterator(ObservableSet.prototype, function () {
    return this.values();
});
addHiddenFinalProp(ObservableSet.prototype, toStringTagSymbol(), "Set");
var isObservableSet = createInstanceofPredicate("ObservableSet", ObservableSet);

var ObservableObjectAdministration = /** @class */ (function () {
    function ObservableObjectAdministration(target, name, defaultEnhancer) {
        this.target = target;
        this.name = name;
        this.defaultEnhancer = defaultEnhancer;
        this.values = {};
    }
    ObservableObjectAdministration.prototype.read = function (owner, key) {
        if (false) {}
        return this.values[key].get();
    };
    ObservableObjectAdministration.prototype.write = function (owner, key, newValue) {
        var instance = this.target;
        if (false) {}
        var observable = this.values[key];
        if (observable instanceof ComputedValue) {
            observable.set(newValue);
            return;
        }
        // intercept
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "update",
                object: instance,
                name: key,
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        newValue = observable.prepareNewValue(newValue);
        // notify spy & observers
        if (newValue !== globalState.UNCHANGED) {
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: instance,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy)
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableObjectAdministration.prototype.remove = function (key) {
        if (!this.values[key])
            return;
        var target = this.target;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: target,
                name: key,
                type: "remove"
            });
            if (!change)
                return;
        }
        try {
            startBatch();
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var oldValue = this.values[key].get();
            if (this.keys)
                this.keys.remove(key);
            delete this.values[key];
            delete this.target[key];
            var change = notify || notifySpy
                ? {
                    type: "remove",
                    object: target,
                    oldValue: oldValue,
                    name: key
                }
                : null;
            if (notifySpy)
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
        }
        finally {
            endBatch();
        }
    };
    ObservableObjectAdministration.prototype.illegalAccess = function (owner, propName) {
        /**
         * This happens if a property is accessed through the prototype chain, but the property was
         * declared directly as own property on the prototype.
         *
         * E.g.:
         * class A {
         * }
         * extendObservable(A.prototype, { x: 1 })
         *
         * classB extens A {
         * }
         * console.log(new B().x)
         *
         * It is unclear whether the property should be considered 'static' or inherited.
         * Either use `console.log(A.x)`
         * or: decorate(A, { x: observable })
         *
         * When using decorate, the property will always be redeclared as own property on the actual instance
         */
        console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
         true &&
            invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener(this, callback);
    };
    ObservableObjectAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableObjectAdministration.prototype.getKeys = function () {
        var _this = this;
        if (this.keys === undefined) {
            this.keys = (new ObservableArray(Object.keys(this.values).filter(function (key) { return _this.values[key] instanceof ObservableValue; }), referenceEnhancer, "keys(" + this.name + ")", true));
        }
        return this.keys.slice();
    };
    return ObservableObjectAdministration;
}());
function asObservableObject(target, name, defaultEnhancer) {
    if (name === void 0) { name = ""; }
    if (defaultEnhancer === void 0) { defaultEnhancer = deepEnhancer; }
    var adm = target.$mobx;
    if (adm)
        return adm;
     true &&
        invariant(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
    if (!isPlainObject(target))
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
    if (!name)
        name = "ObservableObject@" + getNextId();
    adm = new ObservableObjectAdministration(target, name, defaultEnhancer);
    addHiddenFinalProp(target, "$mobx", adm);
    return adm;
}
function defineObservableProperty(target, propName, newValue, enhancer) {
    var adm = asObservableObject(target);
    assertPropertyConfigurable(target, propName);
    if (hasInterceptors(adm)) {
        var change = interceptChange(adm, {
            object: target,
            name: propName,
            type: "add",
            newValue: newValue
        });
        if (!change)
            return;
        newValue = change.newValue;
    }
    var observable = (adm.values[propName] = new ObservableValue(newValue, enhancer, adm.name + "." + propName, false));
    newValue = observable.value; // observableValue might have changed it
    Object.defineProperty(target, propName, generateObservablePropConfig(propName));
    if (adm.keys)
        adm.keys.push(propName);
    notifyPropertyAddition(adm, target, propName, newValue);
}
function defineComputedProperty(target, // which objects holds the observable and provides `this` context?
propName, options) {
    var adm = asObservableObject(target);
    options.name = adm.name + "." + propName;
    options.context = target;
    adm.values[propName] = new ComputedValue(options);
    Object.defineProperty(target, propName, generateComputedPropConfig(propName));
}
var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);
function generateObservablePropConfig(propName) {
    return (observablePropertyConfigs[propName] ||
        (observablePropertyConfigs[propName] = {
            configurable: true,
            enumerable: true,
            get: function () {
                return this.$mobx.read(this, propName);
            },
            set: function (v) {
                this.$mobx.write(this, propName, v);
            }
        }));
}
function getAdministrationForComputedPropOwner(owner) {
    var adm = owner.$mobx;
    if (!adm) {
        // because computed props are declared on proty,
        // the current instance might not have been initialized yet
        initializeInstance(owner);
        return owner.$mobx;
    }
    return adm;
}
function generateComputedPropConfig(propName) {
    return (computedPropertyConfigs[propName] ||
        (computedPropertyConfigs[propName] = {
            configurable: globalState.computedConfigurable,
            enumerable: false,
            get: function () {
                return getAdministrationForComputedPropOwner(this).read(this, propName);
            },
            set: function (v) {
                getAdministrationForComputedPropOwner(this).write(this, propName, v);
            }
        }));
}
function notifyPropertyAddition(adm, object, key, newValue) {
    var notify = hasListeners(adm);
    var notifySpy = isSpyEnabled();
    var change = notify || notifySpy
        ? {
            type: "add",
            object: object,
            name: key,
            newValue: newValue
        }
        : null;
    if (notifySpy)
        spyReportStart(__assign(__assign({}, change), { name: adm.name, key: key }));
    if (notify)
        notifyListeners(adm, change);
    if (notifySpy)
        spyReportEnd();
}
var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
    if (isObject(thing)) {
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        return isObservableObjectAdministration(thing.$mobx);
    }
    return false;
}

function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray(thing)) {
            if (property !== undefined)
                fail( true &&
                    "It is not possible to get index atoms from arrays");
            return thing.$mobx.atom;
        }
        if (isObservableSet(thing)) {
            return thing.$mobx;
        }
        if (isObservableMap(thing)) {
            var anyThing = thing;
            if (property === undefined)
                return anyThing._keysAtom;
            var observable = anyThing._data.get(property) || anyThing._hasMap.get(property);
            if (!observable)
                fail( true &&
                    "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
            return observable;
        }
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        if (property && !thing.$mobx)
            thing[property]; // See #1072
        if (isObservableObject(thing)) {
            if (!property)
                return fail( true && "please specify a property");
            var observable = thing.$mobx.values[property];
            if (!observable)
                fail( true &&
                    "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
            return observable;
        }
        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (isReaction(thing.$mobx)) {
            // disposer function
            return thing.$mobx;
        }
    }
    return fail( true && "Cannot obtain atom from " + thing);
}
function getAdministration(thing, property) {
    if (!thing)
        fail("Expecting some object");
    if (property !== undefined)
        return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
        return thing;
    if (isObservableMap(thing) || isObservableSet(thing))
        return thing;
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance(thing);
    if (thing.$mobx)
        return thing.$mobx;
    fail( true && "Cannot obtain administration from " + thing);
}
function getDebugName(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom(thing, property);
    else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing))
        named = getAdministration(thing);
    else
        named = getAtom(thing); // valid for arrays as well
    return named.name;
}

var toString = Object.prototype.toString;
function deepEqual(a, b, depth) {
    if (depth === void 0) { depth = -1; }
    return eq(a, b, depth);
}
// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.
function eq(a, b, depth, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b)
        return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null)
        return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a)
        return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object")
        return false;
    // Unwrap any wrapped objects.
    a = unwrap(a);
    b = unwrap(b);
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b))
        return false;
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case "[object RegExp]":
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
        case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a)
                return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        case "[object Symbol]":
            return (
            // eslint-disable-next-line
            typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b));
    }
    var areArrays = className === "[object Array]";
    if (!areArrays) {
        if (typeof a != "object" || typeof b != "object")
            return false;
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor &&
            !(typeof aCtor === "function" &&
                aCtor instanceof aCtor &&
                typeof bCtor === "function" &&
                bCtor instanceof bCtor) &&
            ("constructor" in a && "constructor" in b)) {
            return false;
        }
    }
    if (depth === 0) {
        return false;
    }
    else if (depth < 0) {
        depth = -1;
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a)
            return bStack[length] === b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length)
            return false;
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!eq(a[length], b[length], depth - 1, aStack, bStack))
                return false;
        }
    }
    else {
        // Deep compare objects.
        var keys = Object.keys(a);
        var key = void 0;
        length = keys.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (Object.keys(b).length !== length)
            return false;
        while (length--) {
            // Deep compare each member
            key = keys[length];
            if (!(has$1(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack)))
                return false;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
}
function unwrap(a) {
    if (isObservableArray(a))
        return a.peek();
    if (isES6Map(a) || isObservableMap(a))
        return iteratorToArray(a.entries());
    if (isES6Set(a) || isObservableSet(a))
        return iteratorToArray(a.entries());
    return a;
}
function has$1(a, key) {
    return Object.prototype.hasOwnProperty.call(a, key);
}

/**
 * (c) Michel Weststrate 2015 - 2019
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
try {
    // define process.env if needed
    // if this is not a production build in the first place
    // (in which case the expression below would be substituted with 'production')
    // tslint:disable-next-line
    "development";
}
catch (e) {
    var g = getGlobal();
    if (typeof process === "undefined")
        g.process = {};
    g.process.env = {};
}
(function () {
    function testCodeMinification() { }
    if (testCodeMinification.name !== "testCodeMinification" &&
        "development" !== "production" &&
        typeof process !== 'undefined' && process.env.IGNORE_MOBX_MINIFY_WARNING !== "true") {
        // trick so it doesn't get replaced
        var varName = ["process", "env", "NODE_ENV"].join(".");
        console.warn("[mobx] you are running a minified build, but '" + varName + "' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
    }
})();
// forward compatibility with mobx, so that packages can easily support mobx 4 & 5
var $mobx = "$mobx";
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    // See: https://github.com/andykog/mobx-devtools/
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: spy,
        extras: {
            getDebugName: getDebugName
        },
        $mobx: $mobx
    });
}
// TODO: remove in some future build
if ( true &&
    typeof module.exports !== "undefined") {
    var warnedAboutDefaultExport_1 = false;
    Object.defineProperty(module.exports, "default", {
        enumerable: false,
        get: function () {
            if (!warnedAboutDefaultExport_1) {
                warnedAboutDefaultExport_1 = true;
                console.warn("The MobX package does not have a default export. Use 'import { thing } from \"mobx\"' (recommended) or 'import * as mobx from \"mobx\"' instead.\"");
            }
            return undefined;
        }
    });
    [
        "extras",
        "Atom",
        "BaseAtom",
        "asFlat",
        "asMap",
        "asReference",
        "asStructure",
        "autorunAsync",
        "createTranformer",
        "expr",
        "isModifierDescriptor",
        "isStrictModeEnabled",
        "map",
        "useStrict",
        "whyRun"
    ].forEach(function (prop) {
        Object.defineProperty(module.exports, prop, {
            enumerable: false,
            get: function () {
                fail("'" + prop + "' is no longer part of the public MobX api. Please consult the changelog to find out where this functionality went");
            },
            set: function () { }
        });
    });
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "3A9y":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "3Fdi":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "3L66":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "MMmD"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "ExA7");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "3UD+":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "4/DR":
/*!*****************************************************************************!*\
  !*** ./node_modules/ionic4-rating/__ivy_ngcc__/dist/ionic-rating.module.js ***!
  \*****************************************************************************/
/*! exports provided: IonicRatingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicRatingModule", function() { return IonicRatingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/rating */ "CbC+");

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var IonicRatingModule = /** @class */ (function () {
    function IonicRatingModule() {
    }
IonicRatingModule.ɵfac = function IonicRatingModule_Factory(t) { return new (t || IonicRatingModule)(); };
IonicRatingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IonicRatingModule });
IonicRatingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IonicRatingModule, { declarations: function () { return [_components_rating__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"]]; }, imports: function () { return [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]; }, exports: function () { return [_components_rating__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IonicRatingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
                exports: [_components_rating__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"]],
                declarations: [_components_rating__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"]]
            }]
    }], function () { return []; }, null); })();
    return IonicRatingModule;
}());


//# sourceMappingURL=ionic-rating.module.js.map

/***/ }),

/***/ "4/ic":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "ZWtO");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "44Ds":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "e4Nc");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "4DFU":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_customDefaultsMerge.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "+Qka"),
    isObject = __webpack_require__(/*! ./isObject */ "GoyQ");

/**
 * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
 * objects into destination objects that are passed thru.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to merge.
 * @param {Object} object The parent object of `objValue`.
 * @param {Object} source The parent object of `srcValue`.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if (isObject(objValue) && isObject(srcValue)) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, objValue);
    baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
    stack['delete'](srcValue);
  }
  return objValue;
}

module.exports = customDefaultsMerge;


/***/ }),

/***/ "4Oe1":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_customOmitClone.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPlainObject = __webpack_require__(/*! ./isPlainObject */ "YO3V");

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),

/***/ "4kuk":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "SfRM"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "Hvzi"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "u8Dt"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "ekgI"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "JSQU");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "4qC0":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "NykK"),
    isArray = __webpack_require__(/*! ./isArray */ "Z0cm"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "ExA7");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ "4sDh":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "4uTw"),
    isArguments = __webpack_require__(/*! ./isArguments */ "03A+"),
    isArray = __webpack_require__(/*! ./isArray */ "Z0cm"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "wJg7"),
    isLength = __webpack_require__(/*! ./isLength */ "shjB"),
    toKey = __webpack_require__(/*! ./_toKey */ "9Nap");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "4uTw":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "Z0cm"),
    isKey = __webpack_require__(/*! ./_isKey */ "9ggG"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "GNiM"),
    toString = __webpack_require__(/*! ./toString */ "dt0z");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "5Tg0":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "Kz5y");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "YuTi")(module)))

/***/ }),

/***/ "6sVZ":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "711d":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "77Zs":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "Xi7e");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "7GkX":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "b80T"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "A90E"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "MMmD");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "7H/F":
/*!********************************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/components/tree.component.js ***!
  \********************************************************************************************/
/*! exports provided: TreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return TreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_tree_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/tree.model */ "PLWw");
/* harmony import */ var _models_tree_dragged_element_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/tree-dragged-element.model */ "L9yc");
/* harmony import */ var _tree_viewport_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree-viewport.component */ "oBzg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tree_node_collection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tree-node-collection.component */ "2FH8");
/* harmony import */ var _tree_node_drop_slot_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tree-node-drop-slot.component */ "LLtC");
/* harmony import */ var _models_tree_options_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/tree-options.model */ "pA7x");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/includes */ "ijCd");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/pick */ "JZM8");
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_9__);








var _c0 = ["loadingTemplate"];
var _c1 = ["treeNodeTemplate"];
var _c2 = ["treeNodeWrapperTemplate"];
var _c3 = ["treeNodeFullTemplate"];
var _c4 = ["viewport"];
var _c5 = function (a0, a1, a2, a3) { return { loadingTemplate: a0, treeNodeTemplate: a1, treeNodeWrapperTemplate: a2, treeNodeFullTemplate: a3 }; };
function TreeComponent_tree_node_collection_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tree-node-collection", 4);
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nodes", ctx_r1.treeModel.roots)("treeModel", ctx_r1.treeModel)("templates", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](3, _c5, ctx_r1.loadingTemplate, ctx_r1.treeNodeTemplate, ctx_r1.treeNodeWrapperTemplate, ctx_r1.treeNodeFullTemplate));
} }
function TreeComponent_tree_node_drop_slot_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tree-node-drop-slot", 5);
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dropIndex", 0)("node", ctx_r2.treeModel.virtualRoot);
} }
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TreeComponent = /** @class */ (function () {
    function TreeComponent(treeModel, treeDraggedElement) {
        var _this = this;
        this.treeModel = treeModel;
        this.treeDraggedElement = treeDraggedElement;
        treeModel.eventNames.forEach(function (name) { return _this[name] = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); });
        treeModel.subscribeToState(function (state) { return _this.stateChange.emit(state); });
    }
    Object.defineProperty(TreeComponent.prototype, "nodes", {
        // Will be handled in ngOnChanges
        set: function (nodes) {
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeComponent.prototype, "options", {
        set: function (options) {
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeComponent.prototype, "focused", {
        set: function (value) {
            this.treeModel.setFocus(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "state", {
        set: function (state) {
            this.treeModel.setState(state);
        },
        enumerable: true,
        configurable: true
    });
    TreeComponent.prototype.onKeydown = function ($event) {
        if (!this.treeModel.isFocused)
            return;
        if (lodash_includes__WEBPACK_IMPORTED_MODULE_8___default()(['input', 'textarea'], document.activeElement.tagName.toLowerCase()))
            return;
        var focusedNode = this.treeModel.getFocusedNode();
        this.treeModel.performKeyAction(focusedNode, $event);
    };
    TreeComponent.prototype.onMousedown = function ($event) {
        function isOutsideClick(startElement, nodeName) {
            return !startElement ? true : startElement.localName === nodeName ? false : isOutsideClick(startElement.parentElement, nodeName);
        }
        if (isOutsideClick($event.target, 'tree-root')) {
            this.treeModel.setFocus(false);
        }
    };
    TreeComponent.prototype.ngOnChanges = function (changes) {
        if (changes.options || changes.nodes) {
            this.treeModel.setData({
                options: changes.options && changes.options.currentValue,
                nodes: changes.nodes && changes.nodes.currentValue,
                events: lodash_pick__WEBPACK_IMPORTED_MODULE_9___default()(this, this.treeModel.eventNames)
            });
        }
    };
    TreeComponent.prototype.sizeChanged = function () {
        this.viewportComponent.setViewport();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('loadingTemplate', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], TreeComponent.prototype, "loadingTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('treeNodeTemplate', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], TreeComponent.prototype, "treeNodeTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('treeNodeWrapperTemplate', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], TreeComponent.prototype, "treeNodeWrapperTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('treeNodeFullTemplate', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], TreeComponent.prototype, "treeNodeFullTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('viewport', { static: false }),
        __metadata("design:type", _tree_viewport_component__WEBPACK_IMPORTED_MODULE_3__["TreeViewportComponent"])
    ], TreeComponent.prototype, "viewportComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], TreeComponent.prototype, "nodes", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_tree_options_model__WEBPACK_IMPORTED_MODULE_7__["TreeOptions"]),
        __metadata("design:paramtypes", [_models_tree_options_model__WEBPACK_IMPORTED_MODULE_7__["TreeOptions"]])
    ], TreeComponent.prototype, "options", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TreeComponent.prototype, "focused", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TreeComponent.prototype, "state", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "toggleExpanded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "activate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "deactivate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "nodeActivate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "nodeDeactivate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "select", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "deselect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "focus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "blur", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "updateData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "initialized", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "moveNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "copyNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "loadNodeChildren", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "changeFilter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "event", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "stateChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('body: keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeComponent.prototype, "onKeydown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('body: mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeComponent.prototype, "onMousedown", null);
    TreeComponent = __decorate([ __metadata("design:paramtypes", [_models_tree_model__WEBPACK_IMPORTED_MODULE_1__["TreeModel"],
            _models_tree_dragged_element_model__WEBPACK_IMPORTED_MODULE_2__["TreeDraggedElement"]])
    ], TreeComponent);
TreeComponent.ɵfac = function TreeComponent_Factory(t) { return new (t || TreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_models_tree_model__WEBPACK_IMPORTED_MODULE_1__["TreeModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_models_tree_dragged_element_model__WEBPACK_IMPORTED_MODULE_2__["TreeDraggedElement"])); };
TreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeComponent, selectors: [["Tree"], ["tree-root"]], contentQueries: function TreeComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c3, 1);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.treeNodeTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.treeNodeWrapperTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.treeNodeFullTemplate = _t.first);
    } }, viewQuery: function TreeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 1);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.viewportComponent = _t.first);
    } }, hostBindings: function TreeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function TreeComponent_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveBody"])("mousedown", function TreeComponent_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveBody"]);
    } }, inputs: { nodes: "nodes", options: "options", focused: "focused", state: "state" }, outputs: { toggleExpanded: "toggleExpanded", activate: "activate", deactivate: "deactivate", nodeActivate: "nodeActivate", nodeDeactivate: "nodeDeactivate", select: "select", deselect: "deselect", focus: "focus", blur: "blur", updateData: "updateData", initialized: "initialized", moveNode: "moveNode", copyNode: "copyNode", loadNodeChildren: "loadNodeChildren", changeFilter: "changeFilter", event: "event", stateChange: "stateChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_models_tree_model__WEBPACK_IMPORTED_MODULE_1__["TreeModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 6, consts: [["viewport", ""], [1, "angular-tree-component"], [3, "nodes", "treeModel", "templates", 4, "ngIf"], ["class", "empty-tree-drop-slot", 3, "dropIndex", "node", 4, "ngIf"], [3, "nodes", "treeModel", "templates"], [1, "empty-tree-drop-slot", 3, "dropIndex", "node"]], template: function TreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tree-viewport", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TreeComponent_tree_node_collection_3_Template, 1, 8, "tree-node-collection", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TreeComponent_tree_node_drop_slot_4_Template, 1, 2, "tree-node-drop-slot", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("node-dragging", ctx.treeDraggedElement.isDragging())("angular-tree-component-rtl", ctx.treeModel.options.rtl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.treeModel.roots);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.treeModel.isEmptyTree());
    } }, directives: [_tree_viewport_component__WEBPACK_IMPORTED_MODULE_3__["TreeViewportComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _tree_node_collection_component__WEBPACK_IMPORTED_MODULE_5__["TreeNodeCollectionComponent"], _tree_node_drop_slot_component__WEBPACK_IMPORTED_MODULE_6__["TreeNodeDropSlot"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'Tree, tree-root',
                providers: [_models_tree_model__WEBPACK_IMPORTED_MODULE_1__["TreeModel"]],
                styles: [],
                template: "\n      <tree-viewport #viewport>\n          <div\n                  class=\"angular-tree-component\"\n                  [class.node-dragging]=\"treeDraggedElement.isDragging()\"\n                  [class.angular-tree-component-rtl]=\"treeModel.options.rtl\">\n              <tree-node-collection\n                      *ngIf=\"treeModel.roots\"\n                      [nodes]=\"treeModel.roots\"\n                      [treeModel]=\"treeModel\"\n                      [templates]=\"{\n            loadingTemplate: loadingTemplate,\n            treeNodeTemplate: treeNodeTemplate,\n            treeNodeWrapperTemplate: treeNodeWrapperTemplate,\n            treeNodeFullTemplate: treeNodeFullTemplate\n          }\">\n              </tree-node-collection>\n              <tree-node-drop-slot\n                      class=\"empty-tree-drop-slot\"\n                      *ngIf=\"treeModel.isEmptyTree()\"\n                      [dropIndex]=\"0\"\n                      [node]=\"treeModel.virtualRoot\">\n              </tree-node-drop-slot>\n          </div>\n      </tree-viewport>\n  "
            }]
    }], function () { return [{ type: _models_tree_model__WEBPACK_IMPORTED_MODULE_1__["TreeModel"] }, { type: _models_tree_dragged_element_model__WEBPACK_IMPORTED_MODULE_2__["TreeDraggedElement"] }]; }, { nodes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], focused: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onKeydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['body: keydown', ['$event']]
        }], onMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['body: mousedown', ['$event']]
        }], loadingTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: ['loadingTemplate', { static: false }]
        }], treeNodeTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: ['treeNodeTemplate', { static: false }]
        }], treeNodeWrapperTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: ['treeNodeWrapperTemplate', { static: false }]
        }], treeNodeFullTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: ['treeNodeFullTemplate', { static: false }]
        }], viewportComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['viewport', { static: false }]
        }], toggleExpanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deactivate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nodeActivate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nodeDeactivate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deselect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], updateData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], initialized: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], moveNode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], copyNode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], loadNodeChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], changeFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], stateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
    return TreeComponent;
}());


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRSxPQUFPLFFBQVEsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLElBQUksTUFBTSxhQUFhLENBQUM7QUFpQy9CO0FBQWlELElBMkMvQyx1QkFDUyxTQUFvQixFQUNwQixrQkFBc0M7QUFDakQsUUFIRSxpQkFNQztBQUNILFFBTlcsY0FBUyxHQUFULFNBQVMsQ0FBVztBQUFDLFFBQ3JCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7QUFBQyxRQUU5QyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLFlBQVksRUFBRSxFQUEvQixDQUErQixDQUFDLENBQUM7QUFDNUUsUUFBSSxTQUFTLENBQUMsZ0JBQWdCLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO0FBQ3hFLElBQUUsQ0FBQztBQUNILElBdkNXLHNCQUFJ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QUUsY0FDVixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O1VBeUJUO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQXdGRjtBQUFDLElBREQsb0JBQUM7QUFDQSxDQURBLEFBdEZELElBc0ZDO0FBQ0QsU0F2RmEsYUFBYTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWVNb2RlbCB9IGZyb20gJy4uL21vZGVscy90cmVlLm1vZGVsJztcbmltcG9ydCB7IFRyZWVEcmFnZ2VkRWxlbWVudCB9IGZyb20gJy4uL21vZGVscy90cmVlLWRyYWdnZWQtZWxlbWVudC5tb2RlbCc7XG5pbXBvcnQgeyBUcmVlT3B0aW9ucyB9IGZyb20gJy4uL21vZGVscy90cmVlLW9wdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgVHJlZVZpZXdwb3J0Q29tcG9uZW50IH0gZnJvbSAnLi90cmVlLXZpZXdwb3J0LmNvbXBvbmVudCc7XG5cbmltcG9ydCBpbmNsdWRlcyBmcm9tICdsb2Rhc2gvaW5jbHVkZXMnO1xuaW1wb3J0IHBpY2sgZnJvbSAnbG9kYXNoL3BpY2snO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdUcmVlLCB0cmVlLXJvb3QnLFxuICBwcm92aWRlcnM6IFtUcmVlTW9kZWxdLFxuICBzdHlsZXM6IFtdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPHRyZWUtdmlld3BvcnQgI3ZpZXdwb3J0PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYW5ndWxhci10cmVlLWNvbXBvbmVudFwiXG4gICAgICAgICAgICAgICAgICBbY2xhc3Mubm9kZS1kcmFnZ2luZ109XCJ0cmVlRHJhZ2dlZEVsZW1lbnQuaXNEcmFnZ2luZygpXCJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5hbmd1bGFyLXRyZWUtY29tcG9uZW50LXJ0bF09XCJ0cmVlTW9kZWwub3B0aW9ucy5ydGxcIj5cbiAgICAgICAgICAgICAgPHRyZWUtbm9kZS1jb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJ0cmVlTW9kZWwucm9vdHNcIlxuICAgICAgICAgICAgICAgICAgICAgIFtub2Rlc109XCJ0cmVlTW9kZWwucm9vdHNcIlxuICAgICAgICAgICAgICAgICAgICAgIFt0cmVlTW9kZWxdPVwidHJlZU1vZGVsXCJcbiAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVzXT1cIntcbiAgICAgICAgICAgIGxvYWRpbmdUZW1wbGF0ZTogbG9hZGluZ1RlbXBsYXRlLFxuICAgICAgICAgICAgdHJlZU5vZGVUZW1wbGF0ZTogdHJlZU5vZGVUZW1wbGF0ZSxcbiAgICAgICAgICAgIHRyZWVOb2RlV3JhcHBlclRlbXBsYXRlOiB0cmVlTm9kZVdyYXBwZXJUZW1wbGF0ZSxcbiAgICAgICAgICAgIHRyZWVOb2RlRnVsbFRlbXBsYXRlOiB0cmVlTm9kZUZ1bGxUZW1wbGF0ZVxuICAgICAgICAgIH1cIj5cbiAgICAgICAgICAgICAgPC90cmVlLW5vZGUtY29sbGVjdGlvbj5cbiAgICAgICAgICAgICAgPHRyZWUtbm9kZS1kcm9wLXNsb3RcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImVtcHR5LXRyZWUtZHJvcC1zbG90XCJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInRyZWVNb2RlbC5pc0VtcHR5VHJlZSgpXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZHJvcEluZGV4XT1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgIFtub2RlXT1cInRyZWVNb2RlbC52aXJ0dWFsUm9vdFwiPlxuICAgICAgICAgICAgICA8L3RyZWUtbm9kZS1kcm9wLXNsb3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L3RyZWUtdmlld3BvcnQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgVHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIF9ub2RlczogYW55W107XG4gIF9vcHRpb25zOiBUcmVlT3B0aW9ucztcblxuICBAQ29udGVudENoaWxkKCdsb2FkaW5nVGVtcGxhdGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgbG9hZGluZ1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKCd0cmVlTm9kZVRlbXBsYXRlJywgeyBzdGF0aWM6IGZhbHNlIH0pIHRyZWVOb2RlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoJ3RyZWVOb2RlV3JhcHBlclRlbXBsYXRlJywgeyBzdGF0aWM6IGZhbHNlIH0pIHRyZWVOb2RlV3JhcHBlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKCd0cmVlTm9kZUZ1bGxUZW1wbGF0ZScsIHsgc3RhdGljOiBmYWxzZSB9KSB0cmVlTm9kZUZ1bGxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndmlld3BvcnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgdmlld3BvcnRDb21wb25lbnQ6IFRyZWVWaWV3cG9ydENvbXBvbmVudDtcblxuICAvLyBXaWxsIGJlIGhhbmRsZWQgaW4gbmdPbkNoYW5nZXNcbiAgQElucHV0KCkgc2V0IG5vZGVzKG5vZGVzOiBhbnlbXSkge1xuICB9O1xuXG4gIEBJbnB1dCgpIHNldCBvcHRpb25zKG9wdGlvbnM6IFRyZWVPcHRpb25zKSB7XG4gIH07XG5cbiAgQElucHV0KCkgc2V0IGZvY3VzZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnRyZWVNb2RlbC5zZXRGb2N1cyh2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgc3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnRyZWVNb2RlbC5zZXRTdGF0ZShzdGF0ZSk7XG4gIH1cblxuICBAT3V0cHV0KCkgdG9nZ2xlRXhwYW5kZWQ7XG4gIEBPdXRwdXQoKSBhY3RpdmF0ZTtcbiAgQE91dHB1dCgpIGRlYWN0aXZhdGU7XG4gIEBPdXRwdXQoKSBub2RlQWN0aXZhdGU7XG4gIEBPdXRwdXQoKSBub2RlRGVhY3RpdmF0ZTtcbiAgQE91dHB1dCgpIHNlbGVjdDtcbiAgQE91dHB1dCgpIGRlc2VsZWN0O1xuICBAT3V0cHV0KCkgZm9jdXM7XG4gIEBPdXRwdXQoKSBibHVyO1xuICBAT3V0cHV0KCkgdXBkYXRlRGF0YTtcbiAgQE91dHB1dCgpIGluaXRpYWxpemVkO1xuICBAT3V0cHV0KCkgbW92ZU5vZGU7XG4gIEBPdXRwdXQoKSBjb3B5Tm9kZTtcbiAgQE91dHB1dCgpIGxvYWROb2RlQ2hpbGRyZW47XG4gIEBPdXRwdXQoKSBjaGFuZ2VGaWx0ZXI7XG4gIEBPdXRwdXQoKSBldmVudDtcbiAgQE91dHB1dCgpIHN0YXRlQ2hhbmdlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyB0cmVlTW9kZWw6IFRyZWVNb2RlbCxcbiAgICBwdWJsaWMgdHJlZURyYWdnZWRFbGVtZW50OiBUcmVlRHJhZ2dlZEVsZW1lbnQpIHtcblxuICAgIHRyZWVNb2RlbC5ldmVudE5hbWVzLmZvckVhY2goKG5hbWUpID0+IHRoaXNbbmFtZV0gPSBuZXcgRXZlbnRFbWl0dGVyKCkpO1xuICAgIHRyZWVNb2RlbC5zdWJzY3JpYmVUb1N0YXRlKChzdGF0ZSkgPT4gdGhpcy5zdGF0ZUNoYW5nZS5lbWl0KHN0YXRlKSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdib2R5OiBrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgb25LZXlkb3duKCRldmVudCkge1xuICAgIGlmICghdGhpcy50cmVlTW9kZWwuaXNGb2N1c2VkKSByZXR1cm47XG4gICAgaWYgKGluY2x1ZGVzKFsnaW5wdXQnLCAndGV4dGFyZWEnXSxcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgZm9jdXNlZE5vZGUgPSB0aGlzLnRyZWVNb2RlbC5nZXRGb2N1c2VkTm9kZSgpO1xuXG4gICAgdGhpcy50cmVlTW9kZWwucGVyZm9ybUtleUFjdGlvbihmb2N1c2VkTm9kZSwgJGV2ZW50KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JvZHk6IG1vdXNlZG93bicsIFsnJGV2ZW50J10pXG4gIG9uTW91c2Vkb3duKCRldmVudCkge1xuICAgIGZ1bmN0aW9uIGlzT3V0c2lkZUNsaWNrKHN0YXJ0RWxlbWVudDogRWxlbWVudCwgbm9kZU5hbWU6IHN0cmluZykge1xuICAgICAgcmV0dXJuICFzdGFydEVsZW1lbnQgPyB0cnVlIDogc3RhcnRFbGVtZW50LmxvY2FsTmFtZSA9PT0gbm9kZU5hbWUgPyBmYWxzZSA6IGlzT3V0c2lkZUNsaWNrKHN0YXJ0RWxlbWVudC5wYXJlbnRFbGVtZW50LCBub2RlTmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKGlzT3V0c2lkZUNsaWNrKCRldmVudC50YXJnZXQsICd0cmVlLXJvb3QnKSkge1xuICAgICAgdGhpcy50cmVlTW9kZWwuc2V0Rm9jdXMoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5vcHRpb25zIHx8IGNoYW5nZXMubm9kZXMpIHtcbiAgICAgIHRoaXMudHJlZU1vZGVsLnNldERhdGEoe1xuICAgICAgICBvcHRpb25zOiBjaGFuZ2VzLm9wdGlvbnMgJiYgY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZSxcbiAgICAgICAgbm9kZXM6IGNoYW5nZXMubm9kZXMgJiYgY2hhbmdlcy5ub2Rlcy5jdXJyZW50VmFsdWUsXG4gICAgICAgIGV2ZW50czogcGljayh0aGlzLCB0aGlzLnRyZWVNb2RlbC5ldmVudE5hbWVzKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2l6ZUNoYW5nZWQoKSB7XG4gICAgdGhpcy52aWV3cG9ydENvbXBvbmVudC5zZXRWaWV3cG9ydCgpO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "7Ix3":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "7fqy":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "88Gu":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "8L9B":
/*!*************************************************************!*\
  !*** ./src/app/components/skeleton-item/skeleton-item.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("skeleton-item {\n  display: block;\n}\nskeleton-item[inline] {\n  display: inline-block;\n}\nskeleton-item[inline] div {\n  display: inline-block;\n}\nskeleton-item[rounded] div {\n  border-radius: 999em;\n}\nskeleton-item[radius] div {\n  border-radius: 4px;\n}\nskeleton-item[no-animated] div {\n  animation: none !important;\n  background: rgba(130, 130, 130, 0.2);\n}\nskeleton-item + skeleton-item {\n  margin-top: 6px;\n}\n.animated-background, skeleton-item div {\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-name: placeHolderShimmer;\n  animation-timing-function: linear;\n  background: rgba(130, 130, 130, 0.2);\n  background: linear-gradient(to right, rgba(130, 130, 130, 0.2) 8%, rgba(130, 130, 130, 0.3) 18%, rgba(130, 130, 130, 0.2) 33%);\n  background-size: 800px 100px;\n  position: relative;\n}\n@keyframes placeHolderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NrZWxldG9uLWl0ZW0uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLGNBQUE7QUFMSjtBQU9JO0VBQ0kscUJBQUE7QUFMUjtBQU9RO0VBQ0kscUJBQUE7QUFMWjtBQVNJO0VBQ0ksb0JBQUE7QUFQUjtBQVVJO0VBQ0ksa0JBcEJjO0FBWXRCO0FBZUk7RUFDSSwwQkFBQTtFQUNBLG9DQTVCUztBQWVqQjtBQWlCQTtFQUNJLGVBcENrQjtBQXNCdEI7QUFpQkE7RUFDSSxzQkF2Q2dCO0VBd0NoQiw2QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQTFDYTtFQTJDYiw4SEFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFkSjtBQTJCQTtFQUNJO0lBQ0ksNkJBQUE7RUFoQk47RUFtQkU7SUFDSSw0QkFBQTtFQWpCTjtBQUNGIiwiZmlsZSI6InNrZWxldG9uLWl0ZW0uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRza2VsZXRvbkxpbmVTcGFjaW5nOiA2cHg7XG4kYW5pbWF0aW9uRHVyYXRpb246IDFzO1xuJGRlZmF1bHRCb3JkZXJSYWRpdXM6IDRweDtcbiRncmFkaWVudENvbG9yMTogcmdiYSgxMzAsIDEzMCwgMTMwLCAuMik7XG4kZ3JhZGllbnRDb2xvcjI6IHJnYmEoMTMwLCAxMzAsIDEzMCwgLjMpO1xuXG5za2VsZXRvbi1pdGVtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICZbaW5saW5lXSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgICBkaXYge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJltyb3VuZGVkXSBkaXYge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTllbTtcbiAgICB9XG5cbiAgICAmW3JhZGl1c10gZGl2IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGRlZmF1bHRCb3JkZXJSYWRpdXM7XG4gICAgfVxuXG4gICAgZGl2IHtcbiAgICAgICAgQGV4dGVuZCAuYW5pbWF0ZWQtYmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICAmW25vLWFuaW1hdGVkXSBkaXYge1xuICAgICAgICBhbmltYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDogJGdyYWRpZW50Q29sb3IxO1xuICAgIH1cbn1cblxuc2tlbGV0b24taXRlbStza2VsZXRvbi1pdGVtIHtcbiAgICBtYXJnaW4tdG9wOiAkc2tlbGV0b25MaW5lU3BhY2luZztcbn1cblxuLmFuaW1hdGVkLWJhY2tncm91bmQge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogJGFuaW1hdGlvbkR1cmF0aW9uO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBwbGFjZUhvbGRlclNoaW1tZXI7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIGJhY2tncm91bmQ6ICRncmFkaWVudENvbG9yMTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRncmFkaWVudENvbG9yMSA4JSwgJGdyYWRpZW50Q29sb3IyIDE4JSwgJGdyYWRpZW50Q29sb3IxIDMzJSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4MDBweCAxMDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBwbGFjZUhvbGRlclNoaW1tZXIge1xuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2OHB4IDBcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMFxuICAgIH1cbn1cblxuQGtleWZyYW1lcyBwbGFjZUhvbGRlclNoaW1tZXIge1xuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2OHB4IDBcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMFxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "9Nap":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "/9aa");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "9ggG":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "Z0cm"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "/9aa");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "A90E":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "6sVZ"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "V6Ve");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "AP2z":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "nmnc");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "Adh4":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/components/tree-node-children.component.js ***!
  \**********************************************************************************************************/
/*! exports provided: TreeNodeChildrenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeChildrenComponent", function() { return TreeNodeChildrenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mobx_angular_tree_mobx_autorun_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mobx-angular/tree-mobx-autorun.directive */ "D5+F");
/* harmony import */ var _directives_tree_animate_open_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directives/tree-animate-open.directive */ "tTM/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tree_node_collection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tree-node-collection.component */ "2FH8");
/* harmony import */ var _loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading.component */ "jbLY");
/* harmony import */ var _models_tree_node_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/tree-node.model */ "kJLP");







function TreeNodeChildrenComponent_ng_container_0_div_1_tree_node_collection_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tree-node-collection", 4);
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nodes", ctx_r2.node.children)("templates", ctx_r2.templates)("treeModel", ctx_r2.node.treeModel);
} }
function TreeNodeChildrenComponent_ng_container_0_div_1_tree_loading_component_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tree-loading-component", 5);
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-left", ctx_r3.node.getNodePadding());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", ctx_r3.templates.loadingTemplate)("node", ctx_r3.node);
} }
function TreeNodeChildrenComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeNodeChildrenComponent_ng_container_0_div_1_tree_node_collection_1_Template, 1, 3, "tree-node-collection", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeNodeChildrenComponent_ng_container_0_div_1_tree_loading_component_2_Template, 1, 4, "tree-loading-component", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tree-children", true)("tree-children-no-padding", ctx_r1.node.options.levelPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.node.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.node.children);
} }
function TreeNodeChildrenComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeNodeChildrenComponent_ng_container_0_div_1_Template, 3, 6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("treeAnimateOpen", ctx_r0.node.isExpanded)("treeAnimateOpenSpeed", ctx_r0.node.options.animateSpeed)("treeAnimateOpenAcceleration", ctx_r0.node.options.animateAcceleration)("treeAnimateOpenEnabled", ctx_r0.node.options.animateExpand);
} }
var _c0 = function () { return { dontDetach: true }; };
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeNodeChildrenComponent = /** @class */ (function () {
    function TreeNodeChildrenComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_tree_node_model__WEBPACK_IMPORTED_MODULE_6__["TreeNode"])
    ], TreeNodeChildrenComponent.prototype, "node", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TreeNodeChildrenComponent.prototype, "templates", void 0);
TreeNodeChildrenComponent.ɵfac = function TreeNodeChildrenComponent_Factory(t) { return new (t || TreeNodeChildrenComponent)(); };
TreeNodeChildrenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeNodeChildrenComponent, selectors: [["tree-node-children"]], inputs: { node: "node", templates: "templates" }, decls: 1, vars: 2, consts: [[4, "treeMobxAutorun"], [3, "tree-children", "tree-children-no-padding", 4, "treeAnimateOpen", "treeAnimateOpenSpeed", "treeAnimateOpenAcceleration", "treeAnimateOpenEnabled"], [3, "nodes", "templates", "treeModel", 4, "ngIf"], ["class", "tree-node-loading", 3, "padding-left", "template", "node", 4, "ngIf"], [3, "nodes", "templates", "treeModel"], [1, "tree-node-loading", 3, "template", "node"]], template: function TreeNodeChildrenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeNodeChildrenComponent_ng_container_0_Template, 2, 4, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("treeMobxAutorun", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_mobx_angular_tree_mobx_autorun_directive__WEBPACK_IMPORTED_MODULE_1__["TreeMobxAutorunDirective"], _directives_tree_animate_open_directive__WEBPACK_IMPORTED_MODULE_2__["TreeAnimateOpenDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _tree_node_collection_component__WEBPACK_IMPORTED_MODULE_4__["TreeNodeCollectionComponent"], _loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeNodeChildrenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tree-node-children',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [],
                template: "\n    <ng-container *treeMobxAutorun=\"{ dontDetach: true }\">\n      <div\n        [class.tree-children]=\"true\"\n        [class.tree-children-no-padding]=\"node.options.levelPadding\"\n        *treeAnimateOpen=\"\n          node.isExpanded;\n          speed: node.options.animateSpeed;\n          acceleration: node.options.animateAcceleration;\n          enabled: node.options.animateExpand\n        \"\n      >\n        <tree-node-collection\n          *ngIf=\"node.children\"\n          [nodes]=\"node.children\"\n          [templates]=\"templates\"\n          [treeModel]=\"node.treeModel\"\n        >\n        </tree-node-collection>\n        <tree-loading-component\n          [style.padding-left]=\"node.getNodePadding()\"\n          class=\"tree-node-loading\"\n          *ngIf=\"!node.children\"\n          [template]=\"templates.loadingTemplate\"\n          [node]=\"node\"\n        ></tree-loading-component>\n      </div>\n    </ng-container>\n  "
            }]
    }], function () { return []; }, { node: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return TreeNodeChildrenComponent;
}());


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWNoaWxkcmVuLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2NvbXBvbmVudHMvdHJlZS1ub2RlLWNoaWxkcmVuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBb0NyRDtBQUNvQixJQURwQjtBQUF1QyxJQUd2QyxDQUFDO0FBQ0QsSUFIVztBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFFLGtDQUFLLFFBQVE7QUFDekIsMkRBRDBCO0FBQ3pCLElBQVU7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBRTtBQUVhLGdFQUZDO0lBRmIseUJBQXlCLHdCQWxDckMsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFLG9CQUFvQixjQUM5QjtHQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxjQUNyQyxNQUFNLEVBQUUsRUFBRSxjQUNWLFFBQVEsRUFBRTs7OzttSkE0QlQsVUFDRixDQUFDLFFBQ1c7T0FBeUIsQ0FHckM7Ozs7Ozs7Ozs7OztvQkFDRDtBQUFDLElBREQsZ0NBQUM7QUFDQSxDQURBLEFBSEQsSUFHQztBQUNELFNBSmEseUJBQXlCO0FBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZWUtbm9kZS1jaGlsZHJlbicsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0eWxlczogW10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqdHJlZU1vYnhBdXRvcnVuPVwieyBkb250RGV0YWNoOiB0cnVlIH1cIj5cbiAgICAgIDxkaXZcbiAgICAgICAgW2NsYXNzLnRyZWUtY2hpbGRyZW5dPVwidHJ1ZVwiXG4gICAgICAgIFtjbGFzcy50cmVlLWNoaWxkcmVuLW5vLXBhZGRpbmddPVwibm9kZS5vcHRpb25zLmxldmVsUGFkZGluZ1wiXG4gICAgICAgICp0cmVlQW5pbWF0ZU9wZW49XCJcbiAgICAgICAgICBub2RlLmlzRXhwYW5kZWQ7XG4gICAgICAgICAgc3BlZWQ6IG5vZGUub3B0aW9ucy5hbmltYXRlU3BlZWQ7XG4gICAgICAgICAgYWNjZWxlcmF0aW9uOiBub2RlLm9wdGlvbnMuYW5pbWF0ZUFjY2VsZXJhdGlvbjtcbiAgICAgICAgICBlbmFibGVkOiBub2RlLm9wdGlvbnMuYW5pbWF0ZUV4cGFuZFxuICAgICAgICBcIlxuICAgICAgPlxuICAgICAgICA8dHJlZS1ub2RlLWNvbGxlY3Rpb25cbiAgICAgICAgICAqbmdJZj1cIm5vZGUuY2hpbGRyZW5cIlxuICAgICAgICAgIFtub2Rlc109XCJub2RlLmNoaWxkcmVuXCJcbiAgICAgICAgICBbdGVtcGxhdGVzXT1cInRlbXBsYXRlc1wiXG4gICAgICAgICAgW3RyZWVNb2RlbF09XCJub2RlLnRyZWVNb2RlbFwiXG4gICAgICAgID5cbiAgICAgICAgPC90cmVlLW5vZGUtY29sbGVjdGlvbj5cbiAgICAgICAgPHRyZWUtbG9hZGluZy1jb21wb25lbnRcbiAgICAgICAgICBbc3R5bGUucGFkZGluZy1sZWZ0XT1cIm5vZGUuZ2V0Tm9kZVBhZGRpbmcoKVwiXG4gICAgICAgICAgY2xhc3M9XCJ0cmVlLW5vZGUtbG9hZGluZ1wiXG4gICAgICAgICAgKm5nSWY9XCIhbm9kZS5jaGlsZHJlblwiXG4gICAgICAgICAgW3RlbXBsYXRlXT1cInRlbXBsYXRlcy5sb2FkaW5nVGVtcGxhdGVcIlxuICAgICAgICAgIFtub2RlXT1cIm5vZGVcIlxuICAgICAgICA+PC90cmVlLWxvYWRpbmctY29tcG9uZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgVHJlZU5vZGVDaGlsZHJlbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG5vZGU6IFRyZWVOb2RlO1xuICBASW5wdXQoKSB0ZW1wbGF0ZXM6IGFueTtcbn1cbiJdfQ==

/***/ }),

/***/ "B8du":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "BiGR":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "nmnc"),
    isArguments = __webpack_require__(/*! ./isArguments */ "03A+"),
    isArray = __webpack_require__(/*! ./isArray */ "Z0cm");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "CH3K":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "CMye":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "GoyQ");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "CZoQ":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_strictIndexOf.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "CbC+":
/*!***************************************************************************!*\
  !*** ./node_modules/ionic4-rating/__ivy_ngcc__/dist/components/rating.js ***!
  \***************************************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




function RatingComponent_ion_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_ion_button_1_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var i_r2 = ctx.index; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onClick(i_r2 + 1); })("mouseover", function RatingComponent_ion_button_1_Template_ion_button_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var i_r2 = ctx.index; var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.hoverRate = i_r2 + 1; })("mouseleave", function RatingComponent_ion_button_1_Template_ion_button_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.hoverRate = 0; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r2 = ctx.index;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.readonly)("size", ctx_r0.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", i_r2 + 1 <= ctx_r0.hoverRate || !ctx_r0.hoverRate && i_r2 + 1 <= ctx_r0.rate);
} }
var _c0 = function () { return [1, 2, 3, 4, 5]; };
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.size = 'default';
        this.rateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RatingComponent_1 = RatingComponent;
    RatingComponent.prototype.onClick = function (rate) {
        this.rate = rate;
        this.rateChange.emit(this.rate);
        this._onChange(this.rate);
    };
    RatingComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
            this.rate = value;
        }
    };
    RatingComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    RatingComponent.prototype.registerOnTouched = function (fn) { };
    RatingComponent.prototype.setDisabledState = function (isDisabled) {
        this.readonly = isDisabled;
    };
    var RatingComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "rate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RatingComponent.prototype, "readonly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RatingComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RatingComponent.prototype, "rateChange", void 0);
RatingComponent.ɵfac = function RatingComponent_Factory(t) { return new (t || RatingComponent)(); };
RatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RatingComponent, selectors: [["rating"]], inputs: { size: "size", rate: "rate", readonly: "readonly" }, outputs: { rateChange: "rateChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return RatingComponent_1; }),
                multi: true
            }
        ])], decls: 2, vars: 2, consts: [["fill", "clear", 3, "disabled", "size", "click", "mouseover", "mouseleave", 4, "ngFor", "ngForOf"], ["fill", "clear", 3, "disabled", "size", "click", "mouseover", "mouseleave"], ["slot", "icon-only", "name", "star-outline"]], template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RatingComponent_ion_button_1_Template, 2, 4, "ion-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"]], styles: ["ion-buttons[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n      }\n\n      [ion-button][disabled][_ngcontent-%COMP%] {\n        opacity: 1;\n      }\n\n      ion-icon[_ngcontent-%COMP%] {\n        color: orange;\n      }\n\n      ion-icon.filled[_ngcontent-%COMP%] {\n        color: orange;\n      }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "rating",
                template: "\n    <ion-buttons>\n      <ion-button [disabled]=\"readonly\" fill=\"clear\" [size]=\"size\" *ngFor=\"let current of [1, 2, 3, 4, 5]; let i = index\"\n        (click)=\"onClick(i + 1)\" (mouseover)=\"hoverRate = i + 1\" (mouseleave)=\"hoverRate = 0\">\n        <ion-icon slot=\"icon-only\" name=\"{{(i + 1 <= hoverRate || (!hoverRate && i + 1 <= rate))?'star':'star-outline'}}\" [class.filled]=\"(i + 1 <= hoverRate || (!hoverRate && i + 1 <= rate))\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  ",
                styles: [
                    "\n      ion-buttons {\n        display: flex;\n        justify-content: center;\n      }\n\n      [ion-button][disabled] {\n        opacity: 1;\n      }\n\n      ion-icon {\n        color: orange;\n      }\n\n      ion-icon.filled {\n        color: orange;\n      }\n    "
                ],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return RatingComponent_1; }),
                        multi: true
                    }
                ]
            }]
    }], function () { return []; }, { size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return RatingComponent;
}());


//# sourceMappingURL=rating.js.map

/***/ }),

/***/ "Cwc5":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "NKxu"),
    getValue = __webpack_require__(/*! ./_getValue */ "Npjl");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "D5+F":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/mobx-angular/tree-mobx-autorun.directive.js ***!
  \***********************************************************************************************************/
/*! exports provided: TreeMobxAutorunDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeMobxAutorunDirective", function() { return TreeMobxAutorunDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ "2vnA");

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeMobxAutorunDirective = /** @class */ (function () {
    function TreeMobxAutorunDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.templateBindings = {};
    }
    TreeMobxAutorunDirective.prototype.ngOnInit = function () {
        this.view = this.viewContainer.createEmbeddedView(this.templateRef);
        if (this.dispose) {
            this.dispose();
        }
        if (this.shouldDetach()) {
            this.view.detach();
        }
        this.autoDetect(this.view);
    };
    TreeMobxAutorunDirective.prototype.shouldDetach = function () {
        return this.treeMobxAutorun && this.treeMobxAutorun.detach;
    };
    TreeMobxAutorunDirective.prototype.autoDetect = function (view) {
        this.dispose = Object(mobx__WEBPACK_IMPORTED_MODULE_1__["autorun"])(function () { return view.detectChanges(); });
    };
    TreeMobxAutorunDirective.prototype.ngOnDestroy = function () {
        if (this.dispose) {
            this.dispose();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TreeMobxAutorunDirective.prototype, "treeMobxAutorun", void 0);
    TreeMobxAutorunDirective = __decorate([ __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], TreeMobxAutorunDirective);
TreeMobxAutorunDirective.ɵfac = function TreeMobxAutorunDirective_Factory(t) { return new (t || TreeMobxAutorunDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
TreeMobxAutorunDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TreeMobxAutorunDirective, selectors: [["", "treeMobxAutorun", ""]], inputs: { treeMobxAutorun: "treeMobxAutorun" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeMobxAutorunDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[treeMobxAutorun]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { treeMobxAutorun: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return TreeMobxAutorunDirective;
}());


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1tb2J4LWF1dG9ydW4uZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyIuLi8uLi9saWIvbW9ieC1hbmd1bGFyL3RyZWUtbW9ieC1hdXRvcnVuLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsV0FBVyxFQUdYLEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CO0FBQTRELElBTTFELGtDQUNZLFdBQTZCLEVBQzdCLGFBQStCO0FBQzFDLFFBRlcsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO0FBQUMsUUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQWtCO0FBQzdDLFFBUlkscUJBQWdCLEdBQUcsRUFBRSxDQUFDO0FBQ2xDLElBT0ssQ0FBQztBQUNOLElBQ0UsMkNBQVEsR0FBUjtBQUNELFFBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN4RSxRQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUN0QixZQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNyQixTQUFLO0FBQ0wsUUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtBQUM3QixZQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDekIsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0IsSUFBRSxDQUFDO0FBRUgsSUFBRSwrQ0FBWSxHQUFaO0FBQWMsUUFDWixPQUFPLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7QUFDL0QsSUFBRSxDQUFDO0FBRUgsSUFBRSw2Q0FBVSxHQUFWLFVBQVcsSUFBMEI7QUFDdkMsUUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxjQUFNLE9BQUEsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUM7QUFDdkQsSUFBRSxDQUFDO0FBRUgsSUFBRSw4Q0FBVyxHQUFYO0FBQWMsUUFDWixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDdEIsWUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDckIsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNGLElBakNVO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUU7QUFHRixxRUFIaUI7QUFFM0IsSUFOYSx3QkFBd0Isd0JBRHBDLFNBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSwvQkFDZixrQ0FPbUIsV0FBVztHQVJJLEVBQUUsQ0FBQyxOQVFMLFlBQ1gsZ0JBQWdCO0FBQzNDLE9BVFcsd0JBQXdCLENBcUNwQzs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELCtCQUFDO0FBQ0EsQ0FEQSxBQXJDRCxJQXFDQztBQUNELFNBdENhLHdCQUF3QjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBUZW1wbGF0ZVJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIElucHV0LFxuICBFbWJlZGRlZFZpZXdSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhdXRvcnVuIH0gZnJvbSAnbW9ieCc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1t0cmVlTW9ieEF1dG9ydW5dJyB9KVxuZXhwb3J0IGNsYXNzIFRyZWVNb2J4QXV0b3J1bkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJvdGVjdGVkIHRlbXBsYXRlQmluZGluZ3MgPSB7fTtcbiAgcHJvdGVjdGVkIGRpc3Bvc2U6IGFueTtcbiAgcHJvdGVjdGVkIHZpZXc6IEVtYmVkZGVkVmlld1JlZjxhbnk+O1xuICBASW5wdXQoKSB0cmVlTW9ieEF1dG9ydW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByb3RlY3RlZCB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnZpZXcgPSB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpO1xuXG4gICAgaWYgKHRoaXMuZGlzcG9zZSkge1xuICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2hvdWxkRGV0YWNoKCkpIHtcbiAgICAgIHRoaXMudmlldy5kZXRhY2goKTtcbiAgICB9XG4gICAgdGhpcy5hdXRvRGV0ZWN0KHRoaXMudmlldyk7XG4gIH1cblxuICBzaG91bGREZXRhY2goKSB7XG4gICAgcmV0dXJuIHRoaXMudHJlZU1vYnhBdXRvcnVuICYmIHRoaXMudHJlZU1vYnhBdXRvcnVuLmRldGFjaDtcbiAgfVxuXG4gIGF1dG9EZXRlY3QodmlldzogRW1iZWRkZWRWaWV3UmVmPGFueT4pIHtcbiAgICB0aGlzLmRpc3Bvc2UgPSBhdXRvcnVuKCgpID0+IHZpZXcuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmRpc3Bvc2UpIHtcbiAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgIH1cbiAgfVxufVxuIl19

/***/ }),

/***/ "DSRE":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "Kz5y"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "B8du");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "YuTi")(module)))

/***/ }),

/***/ "Dw+G":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseAssignIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "juv8"),
    keysIn = __webpack_require__(/*! ./keysIn */ "mTTR");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "DzJC":
/*!*****************************************!*\
  !*** ./node_modules/lodash/throttle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(/*! ./debounce */ "sEfC"),
    isObject = __webpack_require__(/*! ./isObject */ "GoyQ");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ "E2jh":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "2gN3");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "EA7m":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "zZ0H"),
    overRest = __webpack_require__(/*! ./_overRest */ "Ioao"),
    setToString = __webpack_require__(/*! ./_setToString */ "wclG");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "EEGq":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_copySymbolsIn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "juv8"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "oCl/");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "EHVX":
/*!***********************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/constants/events.js ***!
  \***********************************************************************************/
/*! exports provided: TREE_EVENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREE_EVENTS", function() { return TREE_EVENTS; });
var TREE_EVENTS = {
    toggleExpanded: 'toggleExpanded',
    activate: 'activate',
    deactivate: 'deactivate',
    nodeActivate: 'nodeActivate',
    nodeDeactivate: 'nodeDeactivate',
    select: 'select',
    deselect: 'deselect',
    focus: 'focus',
    blur: 'blur',
    initialized: 'initialized',
    updateData: 'updateData',
    moveNode: 'moveNode',
    copyNode: 'copyNode',
    event: 'event',
    loadNodeChildren: 'loadNodeChildren',
    changeFilter: 'changeFilter',
    stateChange: 'stateChange'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2NvbnN0YW50cy9ldmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLElBQU0sV0FBVyxHQUFHO0lBQ3pCLGNBQWMsRUFBRSxnQkFBZ0I7SUFDaEMsUUFBUSxFQUFFLFVBQVU7SUFDcEIsVUFBVSxFQUFFLFlBQVk7SUFDeEIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQyxNQUFNLEVBQUUsUUFBUTtJQUNoQixRQUFRLEVBQUUsVUFBVTtJQUNwQixLQUFLLEVBQUUsT0FBTztJQUNkLElBQUksRUFBRSxNQUFNO0lBQ1osV0FBVyxFQUFFLGFBQWE7SUFDMUIsVUFBVSxFQUFFLFlBQVk7SUFDeEIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsS0FBSyxFQUFFLE9BQU87SUFDZCxnQkFBZ0IsRUFBRSxrQkFBa0I7SUFDcEMsWUFBWSxFQUFFLGNBQWM7SUFDNUIsV0FBVyxFQUFFLGFBQWE7Q0FDM0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBUUkVFX0VWRU5UUyA9IHtcbiAgdG9nZ2xlRXhwYW5kZWQ6ICd0b2dnbGVFeHBhbmRlZCcsXG4gIGFjdGl2YXRlOiAnYWN0aXZhdGUnLFxuICBkZWFjdGl2YXRlOiAnZGVhY3RpdmF0ZScsXG4gIG5vZGVBY3RpdmF0ZTogJ25vZGVBY3RpdmF0ZScsXG4gIG5vZGVEZWFjdGl2YXRlOiAnbm9kZURlYWN0aXZhdGUnLFxuICBzZWxlY3Q6ICdzZWxlY3QnLFxuICBkZXNlbGVjdDogJ2Rlc2VsZWN0JyxcbiAgZm9jdXM6ICdmb2N1cycsXG4gIGJsdXI6ICdibHVyJyxcbiAgaW5pdGlhbGl6ZWQ6ICdpbml0aWFsaXplZCcsXG4gIHVwZGF0ZURhdGE6ICd1cGRhdGVEYXRhJyxcbiAgbW92ZU5vZGU6ICdtb3ZlTm9kZScsXG4gIGNvcHlOb2RlOiAnY29weU5vZGUnLFxuICBldmVudDogJ2V2ZW50JyxcbiAgbG9hZE5vZGVDaGlsZHJlbjogJ2xvYWROb2RlQ2hpbGRyZW4nLFxuICBjaGFuZ2VGaWx0ZXI6ICdjaGFuZ2VGaWx0ZXInLFxuICBzdGF0ZUNoYW5nZTogJ3N0YXRlQ2hhbmdlJ1xufTtcbiJdfQ==

/***/ }),

/***/ "EpBk":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "ExA7":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "FZoo":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "MrPd"),
    castPath = __webpack_require__(/*! ./_castPath */ "4uTw"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "wJg7"),
    isObject = __webpack_require__(/*! ./isObject */ "GoyQ"),
    toKey = __webpack_require__(/*! ./_toKey */ "9Nap");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ "FfPP":
/*!******************************************!*\
  !*** ./node_modules/lodash/_basePick.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__(/*! ./_basePickBy */ "idmN"),
    hasIn = __webpack_require__(/*! ./hasIn */ "hgQt");

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),

/***/ "G6z8":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "fR/l"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "oCl/"),
    keysIn = __webpack_require__(/*! ./keysIn */ "mTTR");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "GDhZ":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "wF/u"),
    get = __webpack_require__(/*! ./get */ "mwIZ"),
    hasIn = __webpack_require__(/*! ./hasIn */ "hgQt"),
    isKey = __webpack_require__(/*! ./_isKey */ "9ggG"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "CMye"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "IOzZ"),
    toKey = __webpack_require__(/*! ./_toKey */ "9Nap");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "GNiM":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "I01J");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "Gi0A":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsMap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "QqLw"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "ExA7");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "GoyQ":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "H0h1":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseEvery.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(/*! ./_baseEach */ "SKAX");

/**
 * The base implementation of `_.every` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`
 */
function baseEvery(collection, predicate) {
  var result = true;
  baseEach(collection, function(value, index, collection) {
    result = !!predicate(value, index, collection);
    return result;
  });
  return result;
}

module.exports = baseEvery;


/***/ }),

/***/ "H8j4":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "QkVE");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "HDyB":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "nmnc"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "JHRd"),
    eq = __webpack_require__(/*! ./eq */ "ljhN"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "or5M"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "7fqy"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "rEGp");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "HOxn":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "Cwc5"),
    root = __webpack_require__(/*! ./_root */ "Kz5y");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "Hvzi":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "I01J":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "44Ds");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "IOzZ":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "Ioao":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "heNW");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "J2m7":
/*!*************************************!*\
  !*** ./node_modules/lodash/find.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(/*! ./_createFind */ "XKAG"),
    findIndex = __webpack_require__(/*! ./findIndex */ "UfWW");

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),

/***/ "JBE3":
/*!******************************************!*\
  !*** ./node_modules/lodash/mergeWith.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "+Qka"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "LsHQ");

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});

module.exports = mergeWith;


/***/ }),

/***/ "JC6p":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "cq/+"),
    keys = __webpack_require__(/*! ./keys */ "7GkX");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "JHRd":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "Kz5y");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "JHgL":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "QkVE");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "JQxX":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/components/tree-node-expander.component.js ***!
  \**********************************************************************************************************/
/*! exports provided: TreeNodeExpanderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeExpanderComponent", function() { return TreeNodeExpanderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mobx_angular_tree_mobx_autorun_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mobx-angular/tree-mobx-autorun.directive */ "D5+F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _models_tree_node_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/tree-node.model */ "kJLP");




function TreeNodeExpanderComponent_ng_container_0_span_1_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeNodeExpanderComponent_ng_container_0_span_1_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.node.mouseAction("expanderClick", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("toggle-children-wrapper-expanded", ctx_r1.node.isExpanded)("toggle-children-wrapper-collapsed", ctx_r1.node.isCollapsed);
} }
function TreeNodeExpanderComponent_ng_container_0_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 5);
} }
function TreeNodeExpanderComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeNodeExpanderComponent_ng_container_0_span_1_Template, 2, 4, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeNodeExpanderComponent_ng_container_0_span_2_Template, 1, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.node.hasChildren);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.node.hasChildren);
} }
var _c0 = function () { return { dontDetach: true }; };
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeNodeExpanderComponent = /** @class */ (function () {
    function TreeNodeExpanderComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_tree_node_model__WEBPACK_IMPORTED_MODULE_3__["TreeNode"])
    ], TreeNodeExpanderComponent.prototype, "node", void 0);
TreeNodeExpanderComponent.ɵfac = function TreeNodeExpanderComponent_Factory(t) { return new (t || TreeNodeExpanderComponent)(); };
TreeNodeExpanderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeNodeExpanderComponent, selectors: [["tree-node-expander"]], inputs: { node: "node" }, decls: 1, vars: 2, consts: [[4, "treeMobxAutorun"], ["class", "toggle-children-wrapper", 3, "toggle-children-wrapper-expanded", "toggle-children-wrapper-collapsed", "click", 4, "ngIf"], ["class", "toggle-children-placeholder", 4, "ngIf"], [1, "toggle-children-wrapper", 3, "click"], [1, "toggle-children"], [1, "toggle-children-placeholder"]], template: function TreeNodeExpanderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeNodeExpanderComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("treeMobxAutorun", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_mobx_angular_tree_mobx_autorun_directive__WEBPACK_IMPORTED_MODULE_1__["TreeMobxAutorunDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeNodeExpanderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tree-node-expander',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [],
                template: "\n    <ng-container *treeMobxAutorun=\"{ dontDetach: true }\">\n      <span\n        *ngIf=\"node.hasChildren\"\n        [class.toggle-children-wrapper-expanded]=\"node.isExpanded\"\n        [class.toggle-children-wrapper-collapsed]=\"node.isCollapsed\"\n        class=\"toggle-children-wrapper\"\n        (click)=\"node.mouseAction('expanderClick', $event)\"\n      >\n        <span class=\"toggle-children\"></span>\n      </span>\n      <span *ngIf=\"!node.hasChildren\" class=\"toggle-children-placeholder\">\n      </span>\n    </ng-container>\n  "
            }]
    }], function () { return []; }, { node: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return TreeNodeExpanderComponent;
}());


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWV4cGFuZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2NvbXBvbmVudHMvdHJlZS1ub2RlLWV4cGFuZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFzQnJEO0FBQ29CLElBRHBCO0FBQXVDLElBRXZDLENBQUM7QUFDRCxJQUZXO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUUsa0NBQUssUUFBUTtBQUN6QiwyREFEMEI7SUFEYix5QkFBeUIsd0JBcEJyQyxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUsb0JBQW9CLGNBQzlCO0dBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGNBQ3JDLE1BQU0sRUFBRSxFQUFFLGNBQ1YsUUFBUSxFQUFFO2tEQWNULFVBQ0YsQ0FBQyxRQUNXLHlCQUF5QixDQUVyQzs7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELGdDQUFDO0FBQ0EsQ0FEQSxBQUZELElBRUM7QUFDRCxTQUhhLHlCQUF5QjtBQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4uL21vZGVscy90cmVlLW5vZGUubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmVlLW5vZGUtZXhwYW5kZXInLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdHlsZXM6IFtdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKnRyZWVNb2J4QXV0b3J1bj1cInsgZG9udERldGFjaDogdHJ1ZSB9XCI+XG4gICAgICA8c3BhblxuICAgICAgICAqbmdJZj1cIm5vZGUuaGFzQ2hpbGRyZW5cIlxuICAgICAgICBbY2xhc3MudG9nZ2xlLWNoaWxkcmVuLXdyYXBwZXItZXhwYW5kZWRdPVwibm9kZS5pc0V4cGFuZGVkXCJcbiAgICAgICAgW2NsYXNzLnRvZ2dsZS1jaGlsZHJlbi13cmFwcGVyLWNvbGxhcHNlZF09XCJub2RlLmlzQ29sbGFwc2VkXCJcbiAgICAgICAgY2xhc3M9XCJ0b2dnbGUtY2hpbGRyZW4td3JhcHBlclwiXG4gICAgICAgIChjbGljayk9XCJub2RlLm1vdXNlQWN0aW9uKCdleHBhbmRlckNsaWNrJywgJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidG9nZ2xlLWNoaWxkcmVuXCI+PC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gKm5nSWY9XCIhbm9kZS5oYXNDaGlsZHJlblwiIGNsYXNzPVwidG9nZ2xlLWNoaWxkcmVuLXBsYWNlaG9sZGVyXCI+XG4gICAgICA8L3NwYW4+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgVHJlZU5vZGVFeHBhbmRlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG5vZGU6IFRyZWVOb2RlO1xufVxuIl19

/***/ }),

/***/ "JSQU":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "YESw");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "JTzB":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "NykK"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "ExA7");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "JZM8":
/*!*************************************!*\
  !*** ./node_modules/lodash/pick.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var basePick = __webpack_require__(/*! ./_basePick */ "FfPP"),
    flatRest = __webpack_require__(/*! ./_flatRest */ "xs/l");

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),

/***/ "Jkoo":
/*!*************************************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/directives/tree-drop.directive.js ***!
  \*************************************************************************************************/
/*! exports provided: TreeDropDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDropDirective", function() { return TreeDropDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_tree_dragged_element_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/tree-dragged-element.model */ "L9yc");


var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DRAG_OVER_CLASS = 'is-dragging-over';
var DRAG_DISABLED_CLASS = 'is-dragging-over-disabled';
var TreeDropDirective = /** @class */ (function () {
    function TreeDropDirective(el, renderer, treeDraggedElement, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.treeDraggedElement = treeDraggedElement;
        this.ngZone = ngZone;
        this.allowDragoverStyling = true;
        this.onDropCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragOverCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragLeaveCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragEnterCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._allowDrop = function (element, $event) { return true; };
        this.dragOverEventHandler = this.onDragOver.bind(this);
        this.dragEnterEventHandler = this.onDragEnter.bind(this);
        this.dragLeaveEventHandler = this.onDragLeave.bind(this);
    }
    Object.defineProperty(TreeDropDirective.prototype, "treeAllowDrop", {
        set: function (allowDrop) {
            if (allowDrop instanceof Function) {
                this._allowDrop = allowDrop;
            }
            else
                this._allowDrop = function (element, $event) { return allowDrop; };
        },
        enumerable: true,
        configurable: true
    });
    TreeDropDirective.prototype.allowDrop = function ($event) {
        return this._allowDrop(this.treeDraggedElement.get(), $event);
    };
    TreeDropDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        var el = this.el.nativeElement;
        this.ngZone.runOutsideAngular(function () {
            el.addEventListener('dragover', _this.dragOverEventHandler);
            el.addEventListener('dragenter', _this.dragEnterEventHandler);
            el.addEventListener('dragleave', _this.dragLeaveEventHandler);
        });
    };
    TreeDropDirective.prototype.ngOnDestroy = function () {
        var el = this.el.nativeElement;
        el.removeEventListener('dragover', this.dragOverEventHandler);
        el.removeEventListener('dragenter', this.dragEnterEventHandler);
        el.removeEventListener('dragleave', this.dragLeaveEventHandler);
    };
    TreeDropDirective.prototype.onDragOver = function ($event) {
        if (!this.allowDrop($event)) {
            if (this.allowDragoverStyling) {
                return this.addDisabledClass();
            }
            return;
        }
        this.onDragOverCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
        $event.preventDefault();
        if (this.allowDragoverStyling) {
            this.addClass();
        }
    };
    TreeDropDirective.prototype.onDragEnter = function ($event) {
        if (!this.allowDrop($event))
            return;
        $event.preventDefault();
        this.onDragEnterCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
    };
    TreeDropDirective.prototype.onDragLeave = function ($event) {
        if (!this.allowDrop($event)) {
            if (this.allowDragoverStyling) {
                return this.removeDisabledClass();
            }
            return;
        }
        this.onDragLeaveCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
        if (this.allowDragoverStyling) {
            this.removeClass();
        }
    };
    TreeDropDirective.prototype.onDrop = function ($event) {
        if (!this.allowDrop($event))
            return;
        $event.preventDefault();
        this.onDropCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
        if (this.allowDragoverStyling) {
            this.removeClass();
        }
        this.treeDraggedElement.set(null);
    };
    TreeDropDirective.prototype.addClass = function () {
        this.renderer.addClass(this.el.nativeElement, DRAG_OVER_CLASS);
    };
    TreeDropDirective.prototype.removeClass = function () {
        this.renderer.removeClass(this.el.nativeElement, DRAG_OVER_CLASS);
    };
    TreeDropDirective.prototype.addDisabledClass = function () {
        this.renderer.addClass(this.el.nativeElement, DRAG_DISABLED_CLASS);
    };
    TreeDropDirective.prototype.removeDisabledClass = function () {
        this.renderer.removeClass(this.el.nativeElement, DRAG_DISABLED_CLASS);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TreeDropDirective.prototype, "allowDragoverStyling", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('treeDrop'),
        __metadata("design:type", Object)
    ], TreeDropDirective.prototype, "onDropCallback", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('treeDropDragOver'),
        __metadata("design:type", Object)
    ], TreeDropDirective.prototype, "onDragOverCallback", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('treeDropDragLeave'),
        __metadata("design:type", Object)
    ], TreeDropDirective.prototype, "onDragLeaveCallback", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('treeDropDragEnter'),
        __metadata("design:type", Object)
    ], TreeDropDirective.prototype, "onDragEnterCallback", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TreeDropDirective.prototype, "treeAllowDrop", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeDropDirective.prototype, "onDrop", null);
    TreeDropDirective = __decorate([ __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _models_tree_dragged_element_model__WEBPACK_IMPORTED_MODULE_1__["TreeDraggedElement"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], TreeDropDirective);
TreeDropDirective.ɵfac = function TreeDropDirective_Factory(t) { return new (t || TreeDropDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_models_tree_dragged_element_model__WEBPACK_IMPORTED_MODULE_1__["TreeDraggedElement"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
TreeDropDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TreeDropDirective, selectors: [["", "treeDrop", ""]], hostBindings: function TreeDropDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function TreeDropDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
    } }, inputs: { allowDragoverStyling: "allowDragoverStyling", treeAllowDrop: "treeAllowDrop" }, outputs: { onDropCallback: "treeDrop", onDragOverCallback: "treeDropDragOver", onDragLeaveCallback: "treeDropDragLeave", onDragEnterCallback: "treeDropDragEnter" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeDropDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[treeDrop]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _models_tree_dragged_element_model__WEBPACK_IMPORTED_MODULE_1__["TreeDraggedElement"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { allowDragoverStyling: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onDropCallback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['treeDrop']
        }], onDragOverCallback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['treeDropDragOver']
        }], onDragLeaveCallback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['treeDropDragLeave']
        }], onDragEnterCallback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['treeDropDragEnter']
        }], treeAllowDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['drop', ['$event']]
        }] }); })();
    return TreeDropDirective;
}());


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1kcm9wLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2RpcmVjdGl2ZXMvdHJlZS1kcm9wLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTFFLElBQU0sZUFBZSxHQUFHLGtCQUFrQixDQUFDO0FBQzNDLElBQU0sbUJBQW1CLEdBQUcsMkJBQTJCLENBQUM7QUFLeEQ7QUFBcUQsSUF1Qm5ELDJCQUFvQixFQUFjLEVBQVUsUUFBbUIsRUFBVSxrQkFBc0MsRUFBVSxNQUFjO0FBQ3pJLFFBRHNCLE9BQUUsR0FBRixFQUFFLENBQVk7QUFBQyxRQUFTLGFBQVEsR0FBUixRQUFRLENBQVc7QUFBQyxRQUFTLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7QUFBQyxRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7QUFBQyxRQXRCL0gseUJBQW9CLEdBQUcsSUFBSSxDQUFDO0FBQ3ZDLFFBQXNCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUMxRCxRQUE4Qix1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ3RFLFFBQStCLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7QUFDeEUsUUFBK0Isd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUN4RSxRQUlVLGVBQVUsR0FBRyxVQUFDLE9BQU8sRUFBRSxNQUFNLElBQUssT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDO0FBQ2pELFFBYUksSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUks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UUFBekMsTUFBTSxDQUFDLG1CQUFtQixDQUFDO0FBQUU7QUFDL0Isa0VBRHVFO0FBQ3ZFLElBTVU7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBRTtBQUNDO0FBQ1MsMERBR25CO0FBRUgsSUErRG9DO0FBQWEsUUFBOUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQUU7QUFDUjtBQUdwQjtBQUFnRCxtREFNdEQ7QUFFSCxJQTlGYSxpQkFBaUIsd0JBSDdCLFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRSxZQUFZLFVBQ3ZCLENBQUMsbEVBQ00sa0NBdUJrQixVQUFVLEVBQW9CLFNBQVMsRUFBOEIsa0JBQWtCLEVBQWtCLE1BQU07QUFBRyxPQXZCL0gsaUJBQWlCLENBNkc3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELHdCQUFDO0FBQ0EsQ0FEQSxBQTdHRCxJQTZHQztBQUNELFNBOUdhLGlCQUFpQjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWVEcmFnZ2VkRWxlbWVudCB9IGZyb20gJy4uL21vZGVscy90cmVlLWRyYWdnZWQtZWxlbWVudC5tb2RlbCc7XG5cbmNvbnN0IERSQUdfT1ZFUl9DTEFTUyA9ICdpcy1kcmFnZ2luZy1vdmVyJztcbmNvbnN0IERSQUdfRElTQUJMRURfQ0xBU1MgPSAnaXMtZHJhZ2dpbmctb3Zlci1kaXNhYmxlZCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0cmVlRHJvcF0nXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVEcm9wRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgYWxsb3dEcmFnb3ZlclN0eWxpbmcgPSB0cnVlO1xuICBAT3V0cHV0KCd0cmVlRHJvcCcpIG9uRHJvcENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCd0cmVlRHJvcERyYWdPdmVyJykgb25EcmFnT3ZlckNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCd0cmVlRHJvcERyYWdMZWF2ZScpIG9uRHJhZ0xlYXZlQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoJ3RyZWVEcm9wRHJhZ0VudGVyJykgb25EcmFnRW50ZXJDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBkcmFnT3ZlckV2ZW50SGFuZGxlcjogKGV2OiBEcmFnRXZlbnQpID0+IHZvaWQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgZHJhZ0VudGVyRXZlbnRIYW5kbGVyOiAoZXY6IERyYWdFdmVudCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSByZWFkb25seSBkcmFnTGVhdmVFdmVudEhhbmRsZXI6IChldjogRHJhZ0V2ZW50KSA9PiB2b2lkO1xuXG4gIHByaXZhdGUgX2FsbG93RHJvcCA9IChlbGVtZW50LCAkZXZlbnQpID0+IHRydWU7XG5cbiAgQElucHV0KCkgc2V0IHRyZWVBbGxvd0Ryb3AoYWxsb3dEcm9wKSB7XG4gICAgaWYgKGFsbG93RHJvcCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICB0aGlzLl9hbGxvd0Ryb3AgPSBhbGxvd0Ryb3A7XG4gICAgfVxuICAgIGVsc2UgdGhpcy5fYWxsb3dEcm9wID0gKGVsZW1lbnQsICRldmVudCkgPT4gYWxsb3dEcm9wO1xuICB9XG5cbiAgYWxsb3dEcm9wKCRldmVudCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd0Ryb3AodGhpcy50cmVlRHJhZ2dlZEVsZW1lbnQuZ2V0KCksICRldmVudCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgdHJlZURyYWdnZWRFbGVtZW50OiBUcmVlRHJhZ2dlZEVsZW1lbnQsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcbiAgICB0aGlzLmRyYWdPdmVyRXZlbnRIYW5kbGVyID0gdGhpcy5vbkRyYWdPdmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmFnRW50ZXJFdmVudEhhbmRsZXIgPSB0aGlzLm9uRHJhZ0VudGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmFnTGVhdmVFdmVudEhhbmRsZXIgPSB0aGlzLm9uRHJhZ0xlYXZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgbGV0IGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuZHJhZ092ZXJFdmVudEhhbmRsZXIpO1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgdGhpcy5kcmFnRW50ZXJFdmVudEhhbmRsZXIpO1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgdGhpcy5kcmFnTGVhdmVFdmVudEhhbmRsZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgbGV0IGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuZHJhZ092ZXJFdmVudEhhbmRsZXIpO1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIHRoaXMuZHJhZ0VudGVyRXZlbnRIYW5kbGVyKTtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZUV2ZW50SGFuZGxlcik7XG4gIH1cblxuICBvbkRyYWdPdmVyKCRldmVudCkge1xuICAgIGlmICghdGhpcy5hbGxvd0Ryb3AoJGV2ZW50KSkge1xuICAgICAgaWYgKHRoaXMuYWxsb3dEcmFnb3ZlclN0eWxpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkRGlzYWJsZWRDbGFzcygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub25EcmFnT3ZlckNhbGxiYWNrLmVtaXQoe2V2ZW50OiAkZXZlbnQsIGVsZW1lbnQ6IHRoaXMudHJlZURyYWdnZWRFbGVtZW50LmdldCgpfSk7XG5cbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5hbGxvd0RyYWdvdmVyU3R5bGluZykge1xuICAgICAgdGhpcy5hZGRDbGFzcygpO1xuICAgIH1cbiAgfVxuXG4gIG9uRHJhZ0VudGVyKCRldmVudCkge1xuICAgIGlmICghdGhpcy5hbGxvd0Ryb3AoJGV2ZW50KSkgcmV0dXJuO1xuXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5vbkRyYWdFbnRlckNhbGxiYWNrLmVtaXQoe2V2ZW50OiAkZXZlbnQsIGVsZW1lbnQ6IHRoaXMudHJlZURyYWdnZWRFbGVtZW50LmdldCgpfSk7XG4gIH1cblxuICBvbkRyYWdMZWF2ZSgkZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuYWxsb3dEcm9wKCRldmVudCkpIHtcbiAgICAgIGlmICh0aGlzLmFsbG93RHJhZ292ZXJTdHlsaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW92ZURpc2FibGVkQ2xhc3MoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vbkRyYWdMZWF2ZUNhbGxiYWNrLmVtaXQoe2V2ZW50OiAkZXZlbnQsIGVsZW1lbnQ6IHRoaXMudHJlZURyYWdnZWRFbGVtZW50LmdldCgpfSk7XG5cbiAgICBpZiAodGhpcy5hbGxvd0RyYWdvdmVyU3R5bGluZykge1xuICAgICAgdGhpcy5yZW1vdmVDbGFzcygpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKSBvbkRyb3AoJGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmFsbG93RHJvcCgkZXZlbnQpKSByZXR1cm47XG5cbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLm9uRHJvcENhbGxiYWNrLmVtaXQoe2V2ZW50OiAkZXZlbnQsIGVsZW1lbnQ6IHRoaXMudHJlZURyYWdnZWRFbGVtZW50LmdldCgpfSk7XG5cbiAgICBpZiAodGhpcy5hbGxvd0RyYWdvdmVyU3R5bGluZykge1xuICAgICAgdGhpcy5yZW1vdmVDbGFzcygpO1xuICAgIH1cbiAgICB0aGlzLnRyZWVEcmFnZ2VkRWxlbWVudC5zZXQobnVsbCk7XG4gIH1cblxuICBwcml2YXRlIGFkZENsYXNzKCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBEUkFHX09WRVJfQ0xBU1MpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVDbGFzcygpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgRFJBR19PVkVSX0NMQVNTKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkRGlzYWJsZWRDbGFzcygpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgRFJBR19ESVNBQkxFRF9DTEFTUyk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZURpc2FibGVkQ2xhc3MoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIERSQUdfRElTQUJMRURfQ0xBU1MpO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "Jlc5":
/*!**************************************!*\
  !*** ./node_modules/lodash/every.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayEvery = __webpack_require__(/*! ./_arrayEvery */ "ZirO"),
    baseEvery = __webpack_require__(/*! ./_baseEvery */ "H0h1"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "ut/Y"),
    isArray = __webpack_require__(/*! ./isArray */ "Z0cm"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "mv/X");

/**
 * Checks if `predicate` returns truthy for **all** elements of `collection`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * **Note:** This method returns `true` for
 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty collections.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 * @example
 *
 * _.every([true, 1, null, 'yes'], Boolean);
 * // => false
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.every(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.every(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.every(users, 'active');
 * // => false
 */
function every(collection, predicate, guard) {
  var func = isArray(collection) ? arrayEvery : baseEvery;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = every;


/***/ }),

/***/ "JmpY":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseValues.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "eUgh");

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),

/***/ "Juji":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "KMkd":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "KfNM":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "KwMD":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "KxBF":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "Kz5y":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "WFqU");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "L8xA":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "L9yc":
/*!****************************************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/models/tree-dragged-element.model.js ***!
  \****************************************************************************************************/
/*! exports provided: TreeDraggedElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDraggedElement", function() { return TreeDraggedElement; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TreeDraggedElement = /** @class */ (function () {
    function TreeDraggedElement() {
        this._draggedElement = null;
    }
    TreeDraggedElement.prototype.set = function (draggedElement) {
        this._draggedElement = draggedElement;
    };
    TreeDraggedElement.prototype.get = function () {
        return this._draggedElement;
    };
    TreeDraggedElement.prototype.isDragging = function () {
        return !!this.get();
    };
TreeDraggedElement.ɵfac = function TreeDraggedElement_Factory(t) { return new (t || TreeDraggedElement)(); };
TreeDraggedElement.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TreeDraggedElement, factory: function (t) { return TreeDraggedElement.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeDraggedElement, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
    return TreeDraggedElement;
}());


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1kcmFnZ2VkLWVsZW1lbnQubW9kZWwuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9tb2RlbHMvdHJlZS1kcmFnZ2VkLWVsZW1lbnQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0M7QUFDb0IsSUFGcEI7QUFDa0IsUUFDaEIsb0JBQWUsR0FBUSxJQUFJLENBQUM7QUFDOUIsSUFZQSxDQUFDO0FBQ0QsSUFaRSxnQ0FBRyxHQUFILFVBQUksY0FBbUI7QUFDekIsUUFBSSxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztBQUMxQyxJQUFFLENBQUM7QUFFSCxJQUFFLGdDQUFHLEdBQUg7QUFDRCxRQUFHLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztBQUNoQyxJQUFFLENBQUM7QUFFSCxJQUFFLHVDQUFVLEdBQVY7QUFBYyxRQUNaLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUN4QixJQUFFLENBQUM7SUFiVSxrQkFBa0Isd0JBRDlCLFVBQVUsRUFBRSxRQUNBLGtCQUFrQixDQWM5Qjs7OztnREFDRDtBQUFDLElBREQseUJBQUM7QUFDQSxDQURBLEFBZEQsSUFjQztBQUNELFNBZmEsa0JBQWtCO0FBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJlZURyYWdnZWRFbGVtZW50IHtcbiAgX2RyYWdnZWRFbGVtZW50OiBhbnkgPSBudWxsO1xuXG4gIHNldChkcmFnZ2VkRWxlbWVudDogYW55KSB7XG4gICAgdGhpcy5fZHJhZ2dlZEVsZW1lbnQgPSBkcmFnZ2VkRWxlbWVudDtcbiAgfVxuXG4gIGdldCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9kcmFnZ2VkRWxlbWVudDtcbiAgfVxuXG4gIGlzRHJhZ2dpbmcoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5nZXQoKTtcbiAgfVxufVxuIl19

/***/ }),

/***/ "LLtC":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/components/tree-node-drop-slot.component.js ***!
  \***********************************************************************************************************/
/*! exports provided: TreeNodeDropSlot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeDropSlot", function() { return TreeNodeDropSlot; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _directives_tree_drop_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directives/tree-drop.directive */ "Jkoo");
/* harmony import */ var _models_tree_node_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/tree-node.model */ "kJLP");


var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeNodeDropSlot = /** @class */ (function () {
    function TreeNodeDropSlot() {
    }
    TreeNodeDropSlot.prototype.onDrop = function ($event) {
        this.node.mouseAction('drop', $event.event, {
            from: $event.element,
            to: { parent: this.node, index: this.dropIndex }
        });
    };
    TreeNodeDropSlot.prototype.allowDrop = function (element, $event) {
        return this.node.options.allowDrop(element, { parent: this.node, index: this.dropIndex }, $event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_tree_node_model__WEBPACK_IMPORTED_MODULE_2__["TreeNode"])
    ], TreeNodeDropSlot.prototype, "node", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TreeNodeDropSlot.prototype, "dropIndex", void 0);
TreeNodeDropSlot.ɵfac = function TreeNodeDropSlot_Factory(t) { return new (t || TreeNodeDropSlot)(); };
TreeNodeDropSlot.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeNodeDropSlot, selectors: [["TreeNodeDropSlot"], ["tree-node-drop-slot"]], inputs: { node: "node", dropIndex: "dropIndex" }, decls: 1, vars: 2, consts: [[1, "node-drop-slot", 3, "treeAllowDrop", "allowDragoverStyling", "treeDrop"]], template: function TreeNodeDropSlot_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("treeDrop", function TreeNodeDropSlot_Template_div_treeDrop_0_listener($event) { return ctx.onDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("treeAllowDrop", ctx.allowDrop.bind(ctx))("allowDragoverStyling", true);
    } }, directives: [_directives_tree_drop_directive__WEBPACK_IMPORTED_MODULE_1__["TreeDropDirective"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeNodeDropSlot, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'TreeNodeDropSlot, tree-node-drop-slot',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [],
                template: "\n    <div\n      class=\"node-drop-slot\"\n      (treeDrop)=\"onDrop($event)\"\n      [treeAllowDrop]=\"allowDrop.bind(this)\"\n      [allowDragoverStyling]=\"true\">\n    </div>\n  "
            }]
    }], function () { return []; }, { node: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dropIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return TreeNodeDropSlot;
}());


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWRyb3Atc2xvdC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtbm9kZS1kcm9wLXNsb3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBZXJEO0FBQ29CLElBRHBCO0FBQThCLElBYzlCLENBQUM7QUFDRCxJQVhFLGlDQUFNLEdBQU4sVUFBTyxNQUFNO0FBQ2YsUUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRTtBQUNoRCxZQUFNLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTztBQUMxQixZQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQ3RELFNBQUssQ0FBQyxDQUFDO0FBQ1AsSUFBRSxDQUFDO0FBRUgsSUFBRSxvQ0FBUyxHQUFULFVBQVUsT0FBTyxFQUFFLE1BQU07QUFDM0IsUUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3RHLElBQUUsQ0FBQztBQUNGLElBYlU7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBRSxrQ0FBSyxRQUFRO0FBQ3pCLGtEQUQwQjtBQUN6QixJQUFVO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUU7QUFHUix1REFIeUI7SUFGaEIsZ0JBQWdCLHdCQWI1QixTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUU7YUFBdUMsY0FDakQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksY0FDckMsTUFBTSxFQUFFLEVBQUUsY0FDVixRQUFRLEVBQUUseUxBT1QsVUFDRixDQUFDLFFBQ1csZ0JBQWdCLENBYzVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsSUFERCx1QkFBQztBQUNBLENBREEsQUFkRCxJQWNDO0FBQ0QsU0FmYSxnQkFBZ0I7QUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1ub2RlLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnVHJlZU5vZGVEcm9wU2xvdCwgdHJlZS1ub2RlLWRyb3Atc2xvdCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0eWxlczogW10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJub2RlLWRyb3Atc2xvdFwiXG4gICAgICAodHJlZURyb3ApPVwib25Ecm9wKCRldmVudClcIlxuICAgICAgW3RyZWVBbGxvd0Ryb3BdPVwiYWxsb3dEcm9wLmJpbmQodGhpcylcIlxuICAgICAgW2FsbG93RHJhZ292ZXJTdHlsaW5nXT1cInRydWVcIj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBUcmVlTm9kZURyb3BTbG90IHtcbiAgQElucHV0KCkgbm9kZTogVHJlZU5vZGU7XG4gIEBJbnB1dCgpIGRyb3BJbmRleDogbnVtYmVyO1xuXG4gIG9uRHJvcCgkZXZlbnQpIHtcbiAgICB0aGlzLm5vZGUubW91c2VBY3Rpb24oJ2Ryb3AnLCAkZXZlbnQuZXZlbnQsIHtcbiAgICAgIGZyb206ICRldmVudC5lbGVtZW50LFxuICAgICAgdG86IHsgcGFyZW50OiB0aGlzLm5vZGUsIGluZGV4OiB0aGlzLmRyb3BJbmRleCB9XG4gICAgfSk7XG4gIH1cblxuICBhbGxvd0Ryb3AoZWxlbWVudCwgJGV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZS5vcHRpb25zLmFsbG93RHJvcChlbGVtZW50LCB7IHBhcmVudDogdGhpcy5ub2RlLCBpbmRleDogdGhpcy5kcm9wSW5kZXggfSwgJGV2ZW50KTtcbiAgfVxufVxuIl19

/***/ }),

/***/ "LXxW":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "LcsW":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "kekF");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "LsHQ":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ "EA7m"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "mv/X");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "MJIl":
/*!*************************************!*\
  !*** ./node_modules/lodash/some.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arraySome = __webpack_require__(/*! ./_arraySome */ "QoRX"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "ut/Y"),
    baseSome = __webpack_require__(/*! ./_baseSome */ "Nh2a"),
    isArray = __webpack_require__(/*! ./isArray */ "Z0cm"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "mv/X");

/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, guard) {
  var func = isArray(collection) ? arraySome : baseSome;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = some;


/***/ }),

/***/ "MMmD":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "lSCD"),
    isLength = __webpack_require__(/*! ./isLength */ "shjB");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "MrPd":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "hypo"),
    eq = __webpack_require__(/*! ./eq */ "ljhN");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "MvSz":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "LXxW"),
    stubArray = __webpack_require__(/*! ./stubArray */ "0ycA");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "NKxu":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "lSCD"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "E2jh"),
    isObject = __webpack_require__(/*! ./isObject */ "GoyQ"),
    toSource = __webpack_require__(/*! ./_toSource */ "3Fdi");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "Nh2a":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseSome.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(/*! ./_baseEach */ "SKAX");

/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function baseSome(collection, predicate) {
  var result;

  baseEach(collection, function(value, index, collection) {
    result = predicate(value, index, collection);
    return !result;
  });
  return !!result;
}

module.exports = baseSome;


/***/ }),

/***/ "Npjl":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "NykK":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "nmnc"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "AP2z"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "KfNM");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "O0oS":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "Cwc5");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "O7RO":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "CMye"),
    keys = __webpack_require__(/*! ./keys */ "7GkX");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "OBhP":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "fmRc"),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ "gFfm"),
    assignValue = __webpack_require__(/*! ./_assignValue */ "MrPd"),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ "WwFo"),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "Dw+G"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "5Tg0"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "Q1l4"),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ "VOtZ"),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "EEGq"),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "qZTm"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "G6z8"),
    getTag = __webpack_require__(/*! ./_getTag */ "QqLw"),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "yHx3"),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "wrZu"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "+iFO"),
    isArray = __webpack_require__(/*! ./isArray */ "Z0cm"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "DSRE"),
    isMap = __webpack_require__(/*! ./isMap */ "zEVN"),
    isObject = __webpack_require__(/*! ./isObject */ "GoyQ"),
    isSet = __webpack_require__(/*! ./isSet */ "1+5i"),
    keys = __webpack_require__(/*! ./keys */ "7GkX"),
    keysIn = __webpack_require__(/*! ./keysIn */ "mTTR");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "OF5B":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/components/tree-node-content.component.js ***!
  \*********************************************************************************************************/
/*! exports provided: TreeNodeContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeContent", function() { return TreeNodeContent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _models_tree_node_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/tree-node.model */ "kJLP");



function TreeNodeContent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.node.displayField);
} }
var _c0 = function (a0, a1, a2) { return { $implicit: a0, node: a1, index: a2 }; };
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeNodeContent = /** @class */ (function () {
    function TreeNodeContent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_tree_node_model__WEBPACK_IMPORTED_MODULE_2__["TreeNode"])
    ], TreeNodeContent.prototype, "node", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TreeNodeContent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], TreeNodeContent.prototype, "template", void 0);
TreeNodeContent.ɵfac = function TreeNodeContent_Factory(t) { return new (t || TreeNodeContent)(); };
TreeNodeContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeNodeContent, selectors: [["tree-node-content"]], inputs: { node: "node", index: "index", template: "template" }, decls: 2, vars: 7, consts: [[4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function TreeNodeContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeNodeContent_span_0_Template, 2, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c0, ctx.node, ctx.node, ctx.index));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeNodeContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tree-node-content',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: "\n  <span *ngIf=\"!template\">{{ node.displayField }}</span>\n  <ng-container\n    [ngTemplateOutlet]=\"template\"\n    [ngTemplateOutletContext]=\"{ $implicit: node, node: node, index: index }\">\n  </ng-container>"
            }]
    }], function () { return []; }, { node: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return TreeNodeContent;
}());


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50cy90cmVlLW5vZGUtY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFZckQ7QUFDb0IsSUFEcEI7QUFBNkIsSUFJN0IsQ0FBQztBQUNELElBSlc7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBRSxrQ0FBSyxRQUFRO0FBQ3pCLGlEQUQwQjtBQUN6QixJQUFVO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUU7QUFDZ0Isa0RBREg7QUFDeEIsSUFBVTtBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFFLGtDQUFTLFdBQVc7QUFBRSxxREFBSTtJQUh6QixlQUFlLHdCQVYzQixTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUsbUJBQW1CO1NBQzdCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGNBQ3JDLFFBQVEsRUFBRSx5TkFLTSxXQUNqQixDQUFDLFFBQ1csZUFBZSxDQUkzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsSUFERCxzQkFBQztBQUNBLENBREEsQUFKRCxJQUlDO0FBQ0QsU0FMYSxlQUFlO0FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4uL21vZGVscy90cmVlLW5vZGUubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmVlLW5vZGUtY29udGVudCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiBgXG4gIDxzcGFuICpuZ0lmPVwiIXRlbXBsYXRlXCI+e3sgbm9kZS5kaXNwbGF5RmllbGQgfX08L3NwYW4+XG4gIDxuZy1jb250YWluZXJcbiAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZW1wbGF0ZVwiXG4gICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBub2RlLCBub2RlOiBub2RlLCBpbmRleDogaW5kZXggfVwiPlxuICA8L25nLWNvbnRhaW5lcj5gLFxufSlcbmV4cG9ydCBjbGFzcyBUcmVlTm9kZUNvbnRlbnQge1xuICBASW5wdXQoKSBub2RlOiBUcmVlTm9kZTtcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG59XG4iXX0=

/***/ }),

/***/ "Of+w":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "Cwc5"),
    root = __webpack_require__(/*! ./_root */ "Kz5y");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "P/G1":
/*!***************************************!*\
  !*** ./node_modules/lodash/values.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(/*! ./_baseValues */ "JmpY"),
    keys = __webpack_require__(/*! ./keys */ "7GkX");

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

/***/ "P4Tr":
/*!*********************************************!*\
  !*** ./node_modules/lodash/defaultsDeep.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "heNW"),
    baseRest = __webpack_require__(/*! ./_baseRest */ "EA7m"),
    customDefaultsMerge = __webpack_require__(/*! ./_customDefaultsMerge */ "4DFU"),
    mergeWith = __webpack_require__(/*! ./mergeWith */ "JBE3");

/**
 * This method is like `_.defaults` except that it recursively assigns
 * default properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaults
 * @example
 *
 * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
 * // => { 'a': { 'b': 2, 'c': 3 } }
 */
var defaultsDeep = baseRest(function(args) {
  args.push(undefined, customDefaultsMerge);
  return apply(mergeWith, undefined, args);
});

module.exports = defaultsDeep;


/***/ }),

/***/ "PLWw":
/*!************************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/models/tree.model.js ***!
  \************************************************************************************/
/*! exports provided: TreeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeModel", function() { return TreeModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ "2vnA");
/* harmony import */ var _tree_node_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree-node.model */ "kJLP");
/* harmony import */ var _tree_options_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree-options.model */ "pA7x");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/events */ "EHVX");
/* harmony import */ var lodash_first__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/first */ "afOK");
/* harmony import */ var lodash_first__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_first__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/last */ "RBan");
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_compact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/compact */ "wig9");
/* harmony import */ var lodash_compact__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_compact__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/find */ "J2m7");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/isString */ "4qC0");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/isFunction */ "lSCD");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_10__);

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var TreeModel = /** @class */ (function () {
    function TreeModel() {
        this.options = new _tree_options_model__WEBPACK_IMPORTED_MODULE_3__["TreeOptions"]();
        this.eventNames = Object.keys(_constants_events__WEBPACK_IMPORTED_MODULE_4__["TREE_EVENTS"]);
        this.expandedNodeIds = {};
        this.selectedLeafNodeIds = {};
        this.activeNodeIds = {};
        this.hiddenNodeIds = {};
        this.focusedNodeId = null;
        this.firstUpdate = true;
        this.subscriptions = [];
    }
    TreeModel_1 = TreeModel;
    // events
    TreeModel.prototype.fireEvent = function (event) {
        event.treeModel = this;
        this.events[event.eventName].emit(event);
        this.events.event.emit(event);
    };
    TreeModel.prototype.subscribe = function (eventName, fn) {
        var subscription = this.events[eventName].subscribe(fn);
        this.subscriptions.push(subscription);
    };
    // getters
    TreeModel.prototype.getFocusedNode = function () {
        return this.focusedNode;
    };
    TreeModel.prototype.getActiveNode = function () {
        return this.activeNodes[0];
    };
    TreeModel.prototype.getActiveNodes = function () {
        return this.activeNodes;
    };
    TreeModel.prototype.getVisibleRoots = function () {
        return this.virtualRoot.visibleChildren;
    };
    TreeModel.prototype.getFirstRoot = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        return lodash_first__WEBPACK_IMPORTED_MODULE_5___default()(skipHidden ? this.getVisibleRoots() : this.roots);
    };
    TreeModel.prototype.getLastRoot = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        return lodash_last__WEBPACK_IMPORTED_MODULE_6___default()(skipHidden ? this.getVisibleRoots() : this.roots);
    };
    Object.defineProperty(TreeModel.prototype, "isFocused", {
        get: function () {
            return TreeModel_1.focusedTree === this;
        },
        enumerable: true,
        configurable: true
    });
    TreeModel.prototype.isNodeFocused = function (node) {
        return this.focusedNode === node;
    };
    TreeModel.prototype.isEmptyTree = function () {
        return this.roots && this.roots.length === 0;
    };
    Object.defineProperty(TreeModel.prototype, "focusedNode", {
        get: function () {
            return this.focusedNodeId ? this.getNodeById(this.focusedNodeId) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeModel.prototype, "expandedNodes", {
        get: function () {
            var _this = this;
            var nodes = Object.keys(this.expandedNodeIds)
                .filter(function (id) { return _this.expandedNodeIds[id]; })
                .map(function (id) { return _this.getNodeById(id); });
            return lodash_compact__WEBPACK_IMPORTED_MODULE_7___default()(nodes);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeModel.prototype, "activeNodes", {
        get: function () {
            var _this = this;
            var nodes = Object.keys(this.activeNodeIds)
                .filter(function (id) { return _this.activeNodeIds[id]; })
                .map(function (id) { return _this.getNodeById(id); });
            return lodash_compact__WEBPACK_IMPORTED_MODULE_7___default()(nodes);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeModel.prototype, "hiddenNodes", {
        get: function () {
            var _this = this;
            var nodes = Object.keys(this.hiddenNodeIds)
                .filter(function (id) { return _this.hiddenNodeIds[id]; })
                .map(function (id) { return _this.getNodeById(id); });
            return lodash_compact__WEBPACK_IMPORTED_MODULE_7___default()(nodes);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeModel.prototype, "selectedLeafNodes", {
        get: function () {
            var _this = this;
            var nodes = Object.keys(this.selectedLeafNodeIds)
                .filter(function (id) { return _this.selectedLeafNodeIds[id]; })
                .map(function (id) { return _this.getNodeById(id); });
            return lodash_compact__WEBPACK_IMPORTED_MODULE_7___default()(nodes);
        },
        enumerable: true,
        configurable: true
    });
    // locating nodes
    TreeModel.prototype.getNodeByPath = function (path, startNode) {
        if (startNode === void 0) { startNode = null; }
        if (!path)
            return null;
        startNode = startNode || this.virtualRoot;
        if (path.length === 0)
            return startNode;
        if (!startNode.children)
            return null;
        var childId = path.shift();
        var childNode = lodash_find__WEBPACK_IMPORTED_MODULE_8___default()(startNode.children, { id: childId });
        if (!childNode)
            return null;
        return this.getNodeByPath(path, childNode);
    };
    TreeModel.prototype.getNodeById = function (id) {
        var idStr = id.toString();
        return this.getNodeBy(function (node) { return node.id.toString() === idStr; });
    };
    TreeModel.prototype.getNodeBy = function (predicate, startNode) {
        if (startNode === void 0) { startNode = null; }
        startNode = startNode || this.virtualRoot;
        if (!startNode.children)
            return null;
        var found = lodash_find__WEBPACK_IMPORTED_MODULE_8___default()(startNode.children, predicate);
        if (found) { // found in children
            return found;
        }
        else { // look in children's children
            for (var _i = 0, _a = startNode.children; _i < _a.length; _i++) {
                var child = _a[_i];
                var foundInChildren = this.getNodeBy(predicate, child);
                if (foundInChildren)
                    return foundInChildren;
            }
        }
    };
    TreeModel.prototype.isExpanded = function (node) {
        return this.expandedNodeIds[node.id];
    };
    TreeModel.prototype.isHidden = function (node) {
        return this.hiddenNodeIds[node.id];
    };
    TreeModel.prototype.isActive = function (node) {
        return this.activeNodeIds[node.id];
    };
    TreeModel.prototype.isSelected = function (node) {
        return this.selectedLeafNodeIds[node.id];
    };
    TreeModel.prototype.ngOnDestroy = function () {
        this.dispose();
        this.unsubscribeAll();
    };
    TreeModel.prototype.dispose = function () {
        // Dispose reactions of the replaced nodes
        if (this.virtualRoot) {
            this.virtualRoot.dispose();
        }
    };
    TreeModel.prototype.unsubscribeAll = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
        this.subscriptions = [];
    };
    // actions
    TreeModel.prototype.setData = function (_a) {
        var nodes = _a.nodes, _b = _a.options, options = _b === void 0 ? null : _b, _c = _a.events, events = _c === void 0 ? null : _c;
        if (options) {
            this.options = new _tree_options_model__WEBPACK_IMPORTED_MODULE_3__["TreeOptions"](options);
        }
        if (events) {
            this.events = events;
        }
        if (nodes) {
            this.nodes = nodes;
        }
        this.update();
    };
    TreeModel.prototype.update = function () {
        var _a;
        // Rebuild tree:
        var virtualRootConfig = (_a = {
                id: this.options.rootId,
                virtual: true
            },
            _a[this.options.childrenField] = this.nodes,
            _a);
        this.dispose();
        this.virtualRoot = new _tree_node_model__WEBPACK_IMPORTED_MODULE_2__["TreeNode"](virtualRootConfig, null, this, 0);
        this.roots = this.virtualRoot.children;
        // Fire event:
        if (this.firstUpdate) {
            if (this.roots) {
                this.firstUpdate = false;
                this._calculateExpandedNodes();
            }
        }
        else {
            this.fireEvent({ eventName: _constants_events__WEBPACK_IMPORTED_MODULE_4__["TREE_EVENTS"].updateData });
        }
    };
    TreeModel.prototype.setFocusedNode = function (node) {
        this.focusedNodeId = node ? node.id : null;
    };
    TreeModel.prototype.setFocus = function (value) {
        TreeModel_1.focusedTree = value ? this : null;
    };
    TreeModel.prototype.doForAll = function (fn) {
        this.roots.forEach(function (root) { return root.doForAll(fn); });
    };
    TreeModel.prototype.focusNextNode = function () {
        var previousNode = this.getFocusedNode();
        var nextNode = previousNode ? previousNode.findNextNode(true, true) : this.getFirstRoot(true);
        if (nextNode)
            nextNode.focus();
    };
    TreeModel.prototype.focusPreviousNode = function () {
        var previousNode = this.getFocusedNode();
        var nextNode = previousNode ? previousNode.findPreviousNode(true) : this.getLastRoot(true);
        if (nextNode)
            nextNode.focus();
    };
    TreeModel.prototype.focusDrillDown = function () {
        var previousNode = this.getFocusedNode();
        if (previousNode && previousNode.isCollapsed && previousNode.hasChildren) {
            previousNode.toggleExpanded();
        }
        else {
            var nextNode = previousNode ? previousNode.getFirstChild(true) : this.getFirstRoot(true);
            if (nextNode)
                nextNode.focus();
        }
    };
    TreeModel.prototype.focusDrillUp = function () {
        var previousNode = this.getFocusedNode();
        if (!previousNode)
            return;
        if (previousNode.isExpanded) {
            previousNode.toggleExpanded();
        }
        else {
            var nextNode = previousNode.realParent;
            if (nextNode)
                nextNode.focus();
        }
    };
    TreeModel.prototype.setActiveNode = function (node, value, multi) {
        if (multi === void 0) { multi = false; }
        if (multi) {
            this._setActiveNodeMulti(node, value);
        }
        else {
            this._setActiveNodeSingle(node, value);
        }
        if (value) {
            node.focus(this.options.scrollOnActivate);
            this.fireEvent({ eventName: _constants_events__WEBPACK_IMPORTED_MODULE_4__["TREE_EVENTS"].activate, node: node });
            this.fireEvent({ eventName: _constants_events__WEBPACK_IMPORTED_MODULE_4__["TREE_EVENTS"].nodeActivate, node: node }); // For IE11
        }
        else {
            this.fireEvent({ eventName: _constants_events__WEBPACK_IMPORTED_MODULE_4__["TREE_EVENTS"].deactivate, node: node });
            this.fireEvent({ eventName: _constants_events__WEBPACK_IMPORTED_MODULE_4__["TREE_EVENTS"].nodeDeactivate, node: node }); // For IE11
        }
    };
    TreeModel.prototype.setSelectedNode = function (node, value) {
        var _a;
        this.selectedLeafNodeIds = Object.assign({}, this.selectedLeafNodeIds, (_a = {}, _a[node.id] = value, _a));
        if (value) {
            node.focus();
            this.fireEvent({ eventName: _constants_events__WEBPACK_IMPORTED_MODULE_4__["TREE_EVENTS"].select, node: node });
        }
        else {
            this.fireEvent({ eventName: _constants_events__WEBPACK_IMPORTED_MODULE_4__["TREE_EVENTS"].deselect, node: node });
        }
    };
    TreeModel.prototype.setExpandedNode = function (node, value) {
        var _a;
        this.expandedNodeIds = Object.assign({}, this.expandedNodeIds, (_a = {}, _a[node.id] = value, _a));
        this.fireEvent({ eventName: _constants_events__WEBPACK_IMPORTED_MODULE_4__["TREE_EVENTS"].toggleExpanded, node: node, isExpanded: value });
    };
    TreeModel.prototype.expandAll = function () {
        this.roots.forEach(function (root) { return root.expandAll(); });
    };
    TreeModel.prototype.collapseAll = function () {
        this.roots.forEach(function (root) { return root.collapseAll(); });
    };
    TreeModel.prototype.setIsHidden = function (node, value) {
        var _a;
        this.hiddenNodeIds = Object.assign({}, this.hiddenNodeIds, (_a = {}, _a[node.id] = value, _a));
    };
    TreeModel.prototype.setHiddenNodeIds = function (nodeIds) {
        this.hiddenNodeIds = nodeIds.reduce(function (hiddenNodeIds, id) {
            var _a;
            return Object.assign(hiddenNodeIds, (_a = {},
                _a[id] = true,
                _a));
        }, {});
    };
    TreeModel.prototype.performKeyAction = function (node, $event) {
        var action = this.options.actionMapping.keys[$event.keyCode];
        if (action) {
            $event.preventDefault();
            action(this, node, $event);
            return true;
        }
        else {
            return false;
        }
    };
    TreeModel.prototype.filterNodes = function (filter, autoShow) {
        var _this = this;
        if (autoShow === void 0) { autoShow = true; }
        var filterFn;
        if (!filter) {
            return this.clearFilter();
        }
        // support function and string filter
        if (lodash_isString__WEBPACK_IMPORTED_MODULE_9___default()(filter)) {
            filterFn = function (node) { return node.displayField.toLowerCase().indexOf(filter.toLowerCase()) !== -1; };
        }
        else if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_10___default()(filter)) {
            filterFn = filter;
        }
        else {
            console.error('Don\'t know what to do with filter', filter);
            console.error('Should be either a string or function');
            return;
        }
        var ids = {};
        this.roots.forEach(function (node) { return _this._filterNode(ids, node, filterFn, autoShow); });
        this.hiddenNodeIds = ids;
        this.fireEvent({ eventName: _constants_events__WEBPACK_IMPORTED_MODULE_4__["TREE_EVENTS"].changeFilter });
    };
    TreeModel.prototype.clearFilter = function () {
        this.hiddenNodeIds = {};
        this.fireEvent({ eventName: _constants_events__WEBPACK_IMPORTED_MODULE_4__["TREE_EVENTS"].changeFilter });
    };
    TreeModel.prototype.moveNode = function (node, to) {
        var fromIndex = node.getIndexInParent();
        var fromParent = node.parent;
        if (!this.canMoveNode(node, to, fromIndex))
            return;
        var fromChildren = fromParent.getField('children');
        // If node doesn't have children - create children array
        if (!to.parent.getField('children')) {
            to.parent.setField('children', []);
        }
        var toChildren = to.parent.getField('children');
        var originalNode = fromChildren.splice(fromIndex, 1)[0];
        // Compensate for index if already removed from parent:
        var toIndex = (fromParent === to.parent && to.index > fromIndex) ? to.index - 1 : to.index;
        toChildren.splice(toIndex, 0, originalNode);
        fromParent.treeModel.update();
        if (to.parent.treeModel !== fromParent.treeModel) {
            to.parent.treeModel.update();
        }
        this.fireEvent({
            eventName: _constants_events__WEBPACK_IMPORTED_MODULE_4__["TREE_EVENTS"].moveNode,
            node: originalNode,
            to: { parent: to.parent.data, index: toIndex },
            from: { parent: fromParent.data, index: fromIndex }
        });
    };
    TreeModel.prototype.copyNode = function (node, to) {
        var fromIndex = node.getIndexInParent();
        if (!this.canMoveNode(node, to, fromIndex))
            return;
        // If node doesn't have children - create children array
        if (!to.parent.getField('children')) {
            to.parent.setField('children', []);
        }
        var toChildren = to.parent.getField('children');
        var nodeCopy = this.options.getNodeClone(node);
        toChildren.splice(to.index, 0, nodeCopy);
        node.treeModel.update();
        if (to.parent.treeModel !== node.treeModel) {
            to.parent.treeModel.update();
        }
        this.fireEvent({ eventName: _constants_events__WEBPACK_IMPORTED_MODULE_4__["TREE_EVENTS"].copyNode, node: nodeCopy, to: { parent: to.parent.data, index: to.index } });
    };
    TreeModel.prototype.getState = function () {
        return {
            expandedNodeIds: this.expandedNodeIds,
            selectedLeafNodeIds: this.selectedLeafNodeIds,
            activeNodeIds: this.activeNodeIds,
            hiddenNodeIds: this.hiddenNodeIds,
            focusedNodeId: this.focusedNodeId
        };
    };
    TreeModel.prototype.setState = function (state) {
        if (!state)
            return;
        Object.assign(this, {
            expandedNodeIds: state.expandedNodeIds || {},
            selectedLeafNodeIds: state.selectedLeafNodeIds || {},
            activeNodeIds: state.activeNodeIds || {},
            hiddenNodeIds: state.hiddenNodeIds || {},
            focusedNodeId: state.focusedNodeId
        });
    };
    TreeModel.prototype.subscribeToState = function (fn) {
        var _this = this;
        Object(mobx__WEBPACK_IMPORTED_MODULE_1__["autorun"])(function () { return fn(_this.getState()); });
    };
    TreeModel.prototype.canMoveNode = function (node, to, fromIndex) {
        if (fromIndex === void 0) { fromIndex = undefined; }
        var fromNodeIndex = fromIndex || node.getIndexInParent();
        // same node:
        if (node.parent === to.parent && fromIndex === to.index) {
            return false;
        }
        return !to.parent.isDescendantOf(node);
    };
    TreeModel.prototype.calculateExpandedNodes = function () {
        this._calculateExpandedNodes();
    };
    // private methods
    TreeModel.prototype._filterNode = function (ids, node, filterFn, autoShow) {
        var _this = this;
        // if node passes function then it's visible
        var isVisible = filterFn(node);
        if (node.children) {
            // if one of node's children passes filter then this node is also visible
            node.children.forEach(function (child) {
                if (_this._filterNode(ids, child, filterFn, autoShow)) {
                    isVisible = true;
                }
            });
        }
        // mark node as hidden
        if (!isVisible) {
            ids[node.id] = true;
        }
        // auto expand parents to make sure the filtered nodes are visible
        if (autoShow && isVisible) {
            node.ensureVisible();
        }
        return isVisible;
    };
    TreeModel.prototype._calculateExpandedNodes = function (startNode) {
        var _a;
        var _this = this;
        if (startNode === void 0) { startNode = null; }
        startNode = startNode || this.virtualRoot;
        if (startNode.data[this.options.isExpandedField]) {
            this.expandedNodeIds = Object.assign({}, this.expandedNodeIds, (_a = {}, _a[startNode.id] = true, _a));
        }
        if (startNode.children) {
            startNode.children.forEach(function (child) { return _this._calculateExpandedNodes(child); });
        }
    };
    TreeModel.prototype._setActiveNodeSingle = function (node, value) {
        var _a;
        var _this = this;
        // Deactivate all other nodes:
        this.activeNodes
            .filter(function (activeNode) { return activeNode !== node; })
            .forEach(function (activeNode) {
            _this.fireEvent({ eventName: _constants_events__WEBPACK_IMPORTED_MODULE_4__["TREE_EVENTS"].deactivate, node: activeNode });
            _this.fireEvent({ eventName: _constants_events__WEBPACK_IMPORTED_MODULE_4__["TREE_EVENTS"].nodeDeactivate, node: activeNode }); // For IE11
        });
        if (value) {
            this.activeNodeIds = (_a = {}, _a[node.id] = true, _a);
        }
        else {
            this.activeNodeIds = {};
        }
    };
    TreeModel.prototype._setActiveNodeMulti = function (node, value) {
        var _a;
        this.activeNodeIds = Object.assign({}, this.activeNodeIds, (_a = {}, _a[node.id] = value, _a));
    };
    var TreeModel_1;
    TreeModel.focusedTree = null;
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["observable"],
        __metadata("design:type", Array)
    ], TreeModel.prototype, "roots", void 0);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["observable"],
        __metadata("design:type", Object)
    ], TreeModel.prototype, "expandedNodeIds", void 0);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["observable"],
        __metadata("design:type", Object)
    ], TreeModel.prototype, "selectedLeafNodeIds", void 0);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["observable"],
        __metadata("design:type", Object)
    ], TreeModel.prototype, "activeNodeIds", void 0);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["observable"],
        __metadata("design:type", Object)
    ], TreeModel.prototype, "hiddenNodeIds", void 0);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["observable"],
        __metadata("design:type", Object)
    ], TreeModel.prototype, "focusedNodeId", void 0);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["observable"],
        __metadata("design:type", _tree_node_model__WEBPACK_IMPORTED_MODULE_2__["TreeNode"])
    ], TreeModel.prototype, "virtualRoot", void 0);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["computed"],
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeModel.prototype, "focusedNode", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["computed"],
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeModel.prototype, "expandedNodes", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["computed"],
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeModel.prototype, "activeNodes", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["computed"],
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeModel.prototype, "hiddenNodes", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["computed"],
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeModel.prototype, "selectedLeafNodes", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "setData", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "update", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "setFocusedNode", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "setFocus", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "doForAll", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "focusNextNode", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "focusPreviousNode", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "focusDrillDown", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "focusDrillUp", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "setActiveNode", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "setSelectedNode", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "setExpandedNode", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "expandAll", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "collapseAll", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "setIsHidden", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "setHiddenNodeIds", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "filterNodes", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "clearFilter", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "moveNode", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "copyNode", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_1__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "setState", null);
TreeModel.ɵfac = function TreeModel_Factory(t) { return new (t || TreeModel)(); };
TreeModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TreeModel, factory: function (t) { return TreeModel.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeModel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
    return TreeModel;
}());


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5tb2RlbC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbGliL21vZGVscy90cmVlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUEyQixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTdELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWxELE9BQU8sS0FBSyxNQUFNLGNBQWMsQ0FBQztBQUNqQyxPQUFPLElBQUksTUFBTSxhQUFhLENBQUM7QUFDL0IsT0FBTyxPQUFPLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxJQUFJLE1BQU0sYUFBYSxDQUFDO0FBQy9CLE9BQU8sUUFBUSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sVUFBVSxNQUFNLG1CQUFtQixDQUFDO0FBRzNDO0FBQTZDLElBRDdDO0FBQ1MsUUFHUCxZQUFPLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUM7QUFDM0MsUUFDRSxlQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN4QyxRQUdjLG9CQUFlLEdBQXFCLEVBQUUsQ0FBQztBQUNyRCxRQUFjLHdCQUFtQixHQUFxQixFQUFFLENBQUM7QUFDekQsUUFBYyxrQkFBYSxHQUFxQixFQUFFLENBQUM7QUFDbkQsUUFBYyxrQkFBYSxHQUFxQixFQUFFLENBQUM7QUFDbkQsUUFBYyxrQkFBYSxHQUFXLElBQUksQ0FBQztBQUMzQyxRQUVVLGdCQUFXLEdBQUcsSUFBSSxDQUFDO0FBQzdCLFFBQ1Usa0JBQWEsR0FBbUIsRUFBRSxDQUFDO0FBQzdDLElBa2ZBLENBQUM7QUFDRCxrQkF0Z0JhLFNBQVM7QUFBRSxJQW9CdEIsU0FBUztBQUNYLElBQUUsNkJBQVMsR0FBVCxVQUFVLEtBQUs7QUFDakIsUUFBSSxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztBQUMzQixRQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QyxRQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsQyxJQUFFLENBQUM7QUFFSCxJQUFFLDZCQUFTLEdBQVQsVUFBVSxTQUFTLEVBQUUsRUFBRTtBQUN6QixRQUFJLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzlELFFBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDMUMsSUFBRSxDQUFDO0FBRUgsSUFDRSxVQUFVO0FBQ1osSUFBRSxrQ0FBYyxHQUFkO0FBQWMsUUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDNUIsSUFBRSxDQUFDO0FBRUgsSUFDRSxpQ0FBYSxHQUFiO0FBQWMsUUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0IsSUFBRSxDQUFDO0FBRUgsSUFBRSxrQ0FBYyxHQUFkO0FBQWMsUUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDNUIsSUFBRSxDQUFDO0FBRUgsSUFBRSxtQ0FBZSxHQUFmO0FBQWMsUUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDO0FBQzVDLElBQUUsQ0FBQztBQUVILElBQUUsZ0NBQVksR0FBWixVQUFhLFVBQWtCO0FBQ2pDLFFBRGUsMkJBQUEsRUFBQSxrQkFBa0I7QUFDakMsUUFBSSxPQUFPLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25FLElBQUUsQ0FBQztBQUVILElBQUUsK0JBQVcsR0FBWCxVQUFZLFVBQWtCO0FBQ2hDLFFBRGMsMkJBQUEsRUFBQSxrQkFBa0I7QUFDaEMsUUFBSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xFLElBQUUsQ0FBQztBQUVILElBQUUsc0JBQUksZ0NBQVM7QUFBSSxhQUFqQjtBQUFjLFlBQ1osT0FBTyxXQUFTLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQztBQUMxQyxRQUFFLENBQUM7QUFFSDtBQUNFO0FBQTJCLE9BSDFCO0FBQ0gsSUFDRSxpQ0FBYSxHQUFiLFVBQWMsSUFBSTtBQUNwQixRQUFJLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUM7QUFDckMsSUFBRSxDQUFDO0FBRUgsSUFBRSwrQkFBVyxHQUFYO0FBQWMsUUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0FBQ2pELElBQUUsQ0FBQztBQUVILElBQVksc0JBQUksa0NBQVc7QUFBSSxhQUFuQjtBQUFjLFlBQ3RCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUM1RSxRQUFFLENBQUM7QUFFSDtBQUEwQjtBQUNQLE9BSGhCO0FBQ0gsSUFDWSxzQkFBSSxvQ0FBYTtBQUFJLGFBQXJCO0FBQWMsWUFBeEIsaUJBTUM7QUFDSCxZQU5JLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztBQUNuRCxpQkFBTyxNQUFNLENBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUFDO0FBQy9DLGlCQUFPLEdBQUcsQ0FBQyxVQUFDLEVBQUUsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQXBCLENBQW9CLENBQUMsQ0FBQztBQUN6QyxZQUNJLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFCLFFBQUUsQ0FBQztBQUVIO0FBQTBCO0FBQ0wsT0FIbEI7QUFDSCxJQUNZLHNCQUFJLGtDQUFXO0FBQUksYUFBbkI7QUFBYyxZQUF4QixpQkFNQztBQUNILFlBTkksSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0FBQ2pELGlCQUFPLE1BQU0sQ0FBQyxVQUFDLEVBQUUsSUFBSyxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQXRCLENBQXNCLENBQUM7QUFDN0MsaUJBQU8sR0FBRyxDQUFDLFVBQUMsRUFBRSxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0FBQ3pDLFlBQ0ksT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDMUIsUUFBRSxDQUFDO0FBRUg7QUFBMEI7QUFDTCxPQUhsQjtBQUNILElBQ1ksc0JBQUksa0NBQVc7QUFBSSxhQUFuQjtBQUFjLFlBQXhCLGlCQU1DO0FBQ0gsWUFOSSxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7QUFDakQsaUJBQVMsTUFBTSxDQUFDLFVBQUMsRUFBRSxJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQztBQUMvQyxpQkFBUyxHQUFHLENBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUM7QUFDM0MsWUFDSSxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxQixRQUFFLENBQUM7QUFFSDtBQUEwQjtBQUNYLE9BSFo7QUFDSCxJQUNZLHNCQUFJLHdDQUFpQjtBQUFJLGFBQXpCO0FBQWMsWUFBeEIsaUJBTUM7QUFDSCxZQU5JLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO0FBQ3ZELGlCQUFTLE1BQU0sQ0FBQyxVQUFDLEVBQUUsSUFBSyxPQUFBLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQztBQUNyRCxpQkFBUyxHQUFHLENBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUM7QUFDM0MsWUFDSSxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxQixRQUFFLENBQUM7QUFFSDtBQUNNO0FBQTJCLE9BSDlCO0FBQ0gsSUFDRSxpQkFBaUI7QUFDbkIsSUFBRSxpQ0FBYSxHQUFiLFVBQWMsSUFBVyxFQUFFLFNBQWU7QUFBSSxRQUFuQiwwQkFBQSxFQUFBLGdCQUFlO0FBQUksUUFDNUMsSUFBSSxDQUFDLElBQUk7QUFBRSxZQUFBLE9BQU8sSUFBSSxDQUFDO0FBQzNCLFFBQ0ksU0FBUyxHQUFHLFNBQVMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQzlDLFFBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7QUFBRSxZQUFBLE9BQU8sU0FBUyxDQUFDO0FBQzVDLFFBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRO0FBQUUsWUFBQSxPQUFPLElBQUksQ0FBQztBQUN6QyxRQUNJLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNqQyxRQUFJLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDaEUsUUFDSSxJQUFJLENBQUMsU0FBUztBQUFFLFlBQUEsT0FBTyxJQUFJLENBQUM7QUFDaEMsUUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQy9DLElBQUUsQ0FBQztBQUVILElBQUUsK0JBQVcsR0FBWCxVQUFZLEVBQUU7QUFDaEIsUUFBSSxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDaEMsUUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO0FBQ2xFLElBQUUsQ0FBQztBQUVILElBQUUsNkJBQVMsR0FBVCxVQUFVLFNBQVMsRUFBRSxTQUFnQjtBQUN2QyxRQUR1QiwwQkFBQSxFQUFBLGdCQUFnQjtBQUN2QyxRQUFJLFNBQVMsR0FBRyxTQUFTLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUM5QyxRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUTtBQUFFLFlBQUEsT0FBTyxJQUFJLENBQUM7QUFDekMsUUFDSSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUN0RCxRQUNJLElBQUksS0FBSyxFQUFFLEVBQUUsb0JBQW9CO0FBQ3JDLFlBQU0sT0FBTyxLQUFLLENBQUM7QUFDbkIsU0FBSztBQUFDLGFBQUssRUFBRSw4QkFBOEI7QUFDM0MsWUFBTSxLQUFrQixVQUFrQixFQUFsQixLQUFBLFNBQVMsQ0FBQyxRQUFRLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCLEVBQUU7QUFDNUMsZ0JBRFcsSUFBSSxLQUFLLFNBQUE7QUFBRSxnQkFDZCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNqRSxnQkFBUSxJQUFJLGVBQWU7QUFBRSxvQkFBQSxPQUFPLGVBQWUsQ0FBQztBQUNwRCxhQUFPO0FBQ1AsU0FBSztBQUNMLElBQUUsQ0FBQztBQUVILElBQUUsOEJBQVUsR0FBVixVQUFXLElBQUk7QUFDakIsUUFBSSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3pDLElBQUUsQ0FBQztBQUVILElBQUUsNEJBQVEsR0FBUixVQUFTLElBQUk7QUFDZixRQUFJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdkMsSUFBRSxDQUFDO0FBRUgsSUFBRSw0QkFBUSxHQUFSLFVBQVMsSUFBSTtBQUNmLFFBQUksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN2QyxJQUFFLENBQUM7QUFFSCxJQUFFLDhCQUFVLEdBQVYsVUFBVyxJQUFJO0FBQ2pCLFFBQUksT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdDLElBQUUsQ0FBQztBQUVILElBQUUsK0JBQVcsR0FBWDtBQUFjLFFBQ1osSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ25CLFFBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzFCLElBQUUsQ0FBQztBQUVILElBQUUsMkJBQU8sR0FBUDtBQUNBLFFBQUUsMENBQTBDO0FBQzlDLFFBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQzFCLFlBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNqQyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBRUgsSUFBRSxrQ0FBYyxHQUFkO0FBQWMsUUFDWixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFlBQVksSUFBSSxPQUFBLFlBQVksQ0FBQyxXQUFXLEVBQUUsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO0FBQzNFLFFBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7QUFDNUIsSUFBRSxDQUFDO0FBRUgsSUFBRSxVQUFVO0FBQ1osSUFBVSwyQkFBTyxHQUFQLFVBQVEsRUFBaUY7QUFDbkcsWUFEb0IsZ0JBQUssRUFBRSxlQUFjLEVBQWQsbUNBQWMsRUFBRSxjQUFhLEVBQWIsa0NBQWE7QUFBRSxRQUN0RCxJQUFJLE9BQU8sRUFBRTtBQUNqQixZQUFNLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDOUMsU0FBSztBQUNMLFFBQUksSUFBSSxNQUFNLEVBQUU7QUFDaEIsWUFBTSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUMzQixTQUFLO0FBQ0wsUUFBSSxJQUFJLEtBQUssRUFBRTtBQUNmLFlBQU0sSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDekIsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2xCLElBQUUsQ0FBQztBQUVILElBQVUsMEJBQU0sR0FBTjtBQUNQO0FBQWdCLFFBQWYsZ0JBQWdCO0FBQ3BCLFFBQUksSUFBSSxpQkFBaUI7QUFDbkIsZ0JBQUEsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtBQUM3QixnQkFBTSxPQUFPLEVBQUUsSUFBSTtBQUFDO0FBQ04sWUFBUixHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxJQUFHLElBQUksQ0FBQyxLQUFLO0FBQzdDLGVBQUksQ0FBQztBQUNOLFFBQ0ksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ25CLFFBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3RFLFFBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztBQUMzQyxRQUNJLGNBQWM7QUFDbEIsUUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDMUIsWUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDdEIsZ0JBQVEsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7QUFDakMsZ0JBQVEsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7QUFDdkMsYUFBTztBQUNQLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQzVELFNBQUs7QUFDTCxJQUFFLENBQUM7QUFFSCxJQUNVLGtDQUFjLEdBQWQsVUFBZSxJQUFJO0FBQzdCLFFBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUMvQyxJQUFFLENBQUM7QUFFSCxJQUFVLDRCQUFRLEdBQVIsVUFBUyxLQUFLO0FBQ3hCLFFBQUksV0FBUyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ2hELElBQUUsQ0FBQztBQUVILElBQVUsNEJBQVEsR0FBUixVQUFTLEVBQUU7QUFDckIsUUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQWpCLENBQWlCLENBQUMsQ0FBQztBQUNwRCxJQUFFLENBQUM7QUFFSCxJQUFVLGlDQUFhLEdBQWI7QUFBYyxRQUNwQixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDN0MsUUFBSSxJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xHLFFBQUksSUFBSSxRQUFRO0FBQUUsWUFBQSxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbkMsSUFBRSxDQUFDO0FBRUgsSUFBVSxxQ0FBaUIsR0FBakI7QUFBYyxRQUNwQixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDN0MsUUFBSSxJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvRixRQUFJLElBQUksUUFBUTtBQUFFLFlBQUEsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ25DLElBQUUsQ0FBQztBQUVILElBQVUsa0NBQWMsR0FBZDtBQUFjLFFBQ3BCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUM3QyxRQUFJLElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxXQUFXLElBQUksWUFBWSxDQUFDLFdBQVcsRUFBRTtBQUM5RSxZQUFNLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNwQyxTQUFLO0FBQ0wsYUFBUztBQUNULFlBQU0sSUFBSSxRQUFRLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9GLFlBQU0sSUFBSSxRQUFRO0FBQUUsZ0JBQUEsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3JDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFFSCxJQUFVLGdDQUFZLEdBQVo7QUFBYyxRQUNwQixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDN0MsUUFBSSxJQUFJLENBQUMsWUFBWTtBQUFFLFlBQUEsT0FBTztBQUM5QixRQUFJLElBQUksWUFBWSxDQUFDLFVBQVUsRUFBRTtBQUNqQyxZQUFNLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNwQyxTQUFLO0FBQ0wsYUFBUztBQUNULFlBQU0sSUFBSSxRQUFRLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQztBQUM3QyxZQUFNLElBQUksUUFBUTtBQUFFLGdCQUFBLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNyQyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBRUgsSUFBVSxpQ0FBYSxHQUFiLFVBQWMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFhO0FBQ2xELFFBRHFDLHNCQUFBLEVBQUEsYUFBYTtBQUNsRCxRQUFJLElBQUksS0FBSyxFQUFFO0FBQ2YsWUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzVDLFNBQUs7QUFDTCxhQUFTO0FBQ1QsWUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzdDLFNBQUs7QUFDTCxRQUNJLElBQUksS0FBSyxFQUFFO0FBQ2YsWUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNoRCxZQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLENBQUM7QUFDaEUsWUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVztBQUNoRixTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsVUFBVSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQztBQUNsRSxZQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDLGNBQWMsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXO0FBQ2xGLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFFSCxJQUFVLG1DQUFlLEdBQWYsVUFBZ0IsSUFBSSxFQUFFLEtBQUs7QUFDckM7QUFBZ0IsUUFBWixJQUFJLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixZQUFHLEdBQUMsSUFBSSxDQUFDLEVBQUUsSUFBRyxLQUFLLE1BQUUsQ0FBQztBQUMvRixRQUNJLElBQUksS0FBSyxFQUFFO0FBQ2YsWUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbkIsWUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxDQUFDO0FBQzlELFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxDQUFDO0FBQ2hFLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFFSCxJQUFVLG1DQUFlLEdBQWYsVUFBZ0IsSUFBSSxFQUFFLEtBQUs7QUFDckM7QUFBZ0IsUUFBWixJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxlQUFlLFlBQUcsR0FBQyxJQUFJLENBQUMsRUFBRSxJQUFHLEtBQUssTUFBRSxDQUFDO0FBQ3ZGLFFBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsY0FBYyxFQUFFLElBQUksTUFBQSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZGLElBQUUsQ0FBQztBQUVILElBQVUsNkJBQVMsR0FBVDtBQUNWLFFBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQWhCLENBQWdCLENBQUMsQ0FBQztBQUNuRCxJQUFFLENBQUM7QUFFSCxJQUFVLCtCQUFXLEdBQVg7QUFBYyxRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0FBQ3JELElBQUUsQ0FBQztBQUVILElBQVUsK0JBQVcsR0FBWCxVQUFZLElBQUksRUFBRSxLQUFLO0FBQ2pDO0FBQWdCLFFBQVosSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxZQUFHLEdBQUMsSUFBSSxDQUFDLEVBQUUsSUFBRyxLQUFLLE1BQUUsQ0FBQztBQUNuRixJQUFFLENBQUM7QUFFSCxJQUFVLG9DQUFnQixHQUFoQixVQUFpQixPQUFPO0FBQ2xDLFFBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUMsYUFBYSxFQUFFLEVBQUU7QUFBSTtBQUFvQixZQUFuQixPQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYTtBQUNsRixnQkFBRixHQUFDLEVBQUUsSUFBRyxJQUFJO0FBQ2Ysb0JBQUs7QUFBRSxRQUZ1RCxDQUV6RCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1osSUFBRSxDQUFDO0FBRUgsSUFBRSxvQ0FBZ0IsR0FBaEIsVUFBaUIsSUFBSSxFQUFFLE1BQU07QUFDL0IsUUFBSSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ25FLFFBQUksSUFBSSxNQUFNLEVBQUU7QUFDaEIsWUFBTSxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDOUIsWUFBTSxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNqQyxZQUFNLE9BQU8sSUFBSSxDQUFDO0FBQ2xCLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxPQUFPLEtBQUssQ0FBQztBQUNuQixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBRUgsSUFBVSwrQkFBVyxHQUFYLFVBQVksTUFBTSxFQUFFLFFBQWU7QUFDN0MsUUFERSxpQkF3QkM7QUFDSCxRQXpCOEIseUJBQUEsRUFBQSxlQUFlO0FBQzdDLFFBQUksSUFBSSxRQUFRLENBQUM7QUFDakIsUUFDSSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2pCLFlBQU0sT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDaEMsU0FBSztBQUNMLFFBQ0kscUNBQXFDO0FBQ3pDLFFBQUksSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDMUIsWUFBTSxRQUFRLEdBQUcsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBcEUsQ0FBb0UsQ0FBQztBQUNoRyxTQUFLO0FBQ0wsYUFBUyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUNqQyxZQUFPLFFBQVEsR0FBRyxNQUFNLENBQUM7QUFDekIsU0FBSztBQUNMLGFBQVM7QUFDVCxZQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0NBQW9DLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDbEUsWUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7QUFDN0QsWUFBTSxPQUFPO0FBQ2IsU0FBSztBQUNMLFFBQ0ksSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ25CLFFBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxFQUEvQyxDQUErQyxDQUFDLENBQUM7QUFDbEYsUUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztBQUM3QixRQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7QUFDNUQsSUFBRSxDQUFDO0FBRUgsSUFBVSwrQkFBVyxHQUFYO0FBQWMsUUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7QUFDNUIsUUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBQzVELElBQUUsQ0FBQztBQUVILElBQVUsNEJBQVEsR0FBUixVQUFTLElBQUksRUFBRSxFQUFFO0FBQzNCLFFBQUksSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFDOUMsUUFBSSxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ25DLFFBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLENBQUM7QUFBRSxZQUFBLE9BQU87QUFDdkQsUUFDSSxJQUFNLFlBQVksR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3pELFFBQ0ksd0RBQXdEO0FBQzVELFFBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQ3pDLFlBQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pDLFNBQUs7QUFDTCxRQUFJLElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3RELFFBQ0ksSUFBTSxZQUFZLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUQsUUFDSSx1REFBdUQ7QUFDM0QsUUFBSSxJQUFJLE9BQU8sR0FBRyxDQUFDLFVBQVUsS0FBSyxFQUFFLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBQy9GLFFBQ0ksVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ2hELFFBQ0ksVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNsQyxRQUFJLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssVUFBVSxDQUFDLFNBQVMsRUFBRTtBQUN0RCxZQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ25DLFNBQUs7QUFDTCxRQUNJLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDbkIsWUFBTSxTQUFTLEVBQUUsV0FBVyxDQUFDLFFBQVE7QUFDckMsWUFBTSxJQUFJLEVBQUUsWUFBWTtBQUN4QixZQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO0FBQ3BELFlBQU0sSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQztBQUN4RCxTQUFLLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUVILElBQVUsNEJBQVEsR0FBUixVQUFTLElBQUksRUFBRSxFQUFFO0FBQzNCLFFBQUksSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFDOUMsUUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQztBQUFFLFlBQUEsT0FBTztBQUN2RCxRQUNJLHdEQUF3RDtBQUM1RCxRQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtBQUN6QyxZQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QyxTQUFLO0FBQ0wsUUFBSSxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN0RCxRQUNJLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JELFFBQ0ksVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM3QyxRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDNUIsUUFBSSxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDaEQsWUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNuQyxTQUFLO0FBQ0wsUUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekgsSUFBRSxDQUFDO0FBRUgsSUFBRSw0QkFBUSxHQUFSO0FBQ0QsUUFBRyxPQUFPO0FBQ1gsWUFBTSxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7QUFDM0MsWUFBTSxtQkFBbUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CO0FBQ25ELFlBQU0sYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO0FBQ3ZDLFlBQU0sYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO0FBQ3ZDLFlBQU0sYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO0FBQ3ZDLFNBQUssQ0FBQztBQUNOLElBQUUsQ0FBQztBQUVILElBQVUsNEJBQVEsR0FBUixVQUFTLEtBQUs7QUFDeEIsUUFBSSxJQUFJLENBQUMsS0FBSztBQUFFLFlBQUEsT0FBTztBQUN2QixRQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0FBQ3hCLFlBQU0sZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlLElBQUksRUFBRTtBQUNsRCxZQUFNLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUIsSUFBSSxFQUFFO0FBQzFELFlBQU0sYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhLElBQUksRUFBRTtBQUM5QyxZQUFNLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYSxJQUFJLEVBQUU7QUFDOUMsWUFBTSxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7QUFDeEMsU0FBSyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFFSCxJQUFFLG9DQUFnQixHQUFoQixVQUFpQixFQUFFO0FBQ3JCLFFBREUsaUJBRUM7QUFDSCxRQUZJLE9BQU8sQ0FBQyxjQUFNLE9BQUEsRUFBRSxDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFuQixDQUFtQixDQUFDLENBQUM7QUFDdkMsSUFBRSxDQUFDO0FBRUgsSUFBRSwrQkFBVyxHQUFYLFVBQVksSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFxQjtBQUM3QyxRQUR3QiwwQkFBQSxFQUFBLHFCQUFxQjtBQUM3QyxRQUFJLElBQU0sYUFBYSxHQUFHLFNBQVMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUMvRCxRQUNJLGFBQWE7QUFDakIsUUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLE1BQU0sSUFBSSxTQUFTLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRTtBQUM3RCxZQUFNLE9BQU8sS0FBSyxDQUFDO0FBQ25CLFNBQUs7QUFDTCxRQUNJLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzQyxJQUFFLENBQUM7QUFFSCxJQUFFLDBDQUFzQixHQUF0QjtBQUFjLFFBQ1YsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7QUFDckMsSUFBRSxDQUFDO0FBRUgsSUFBRSxrQkFBa0I7QUFDcEIsSUFBVSwrQkFBVyxHQUFuQixVQUFvQixHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRO0FBQ25ELFFBREUsaUJBc0JDO0FBQ0gsUUF0QkksNENBQTRDO0FBQ2hELFFBQUksSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25DLFFBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ3ZCLFlBQU0seUVBQXlFO0FBQy9FLFlBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO0FBQUksZ0JBQzlCLElBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsRUFBRTtBQUM5RCxvQkFBVSxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQzNCLGlCQUFTO0FBQ1QsWUFBTSxDQUFDLENBQUMsQ0FBQztBQUNULFNBQUs7QUFDTCxRQUNJLHNCQUFzQjtBQUMxQixRQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDcEIsWUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUMxQixTQUFLO0FBQ0wsUUFBSSxrRUFBa0U7QUFDdEUsUUFBSSxJQUFJLFFBQVEsSUFBSSxTQUFTLEVBQUU7QUFDL0IsWUFBTSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDM0IsU0FBSztBQUNMLFFBQUksT0FBTyxTQUFTLENBQUM7QUFDckIsSUFBRSxDQUFDO0FBRUgsSUFBVSwyQ0FBdUIsR0FBL0IsVUFBZ0MsU0FBZ0I7QUFDbEQ7QUFBZ0IsUUFEZCxpQkFTQztBQUNILFFBVmtDLDBCQUFBLEVBQUEsZ0JBQWdCO0FBQ2xELFFBQUksU0FBUyxHQUFHLFNBQVMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQzlDLFFBQ0ksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUU7QUFDdEQsWUFBTSxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxlQUFlLFlBQUcsR0FBQyxTQUFTLENBQUMsRUFBRSxJQUFHLElBQUksTUFBRSxDQUFDO0FBQzdGLFNBQUs7QUFDTCxRQUFJLElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRTtBQUM1QixZQUFNLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxFQUFuQyxDQUFtQyxDQUFDLENBQUM7QUFDakYsU0FBSztBQUNMLElBQUUsQ0FBQztBQUVILElBQVUsd0NBQW9CLEdBQTVCLFVBQTZCLElBQUksRUFBRSxLQUFLO0FBQzFDO0FBQWdCLFFBRGQsaUJBZUM7QUFDSCxRQWZJLDhCQUE4QjtBQUNsQyxRQUFJLElBQUksQ0FBQyxXQUFXO0FBQ3BCLGFBQU8sTUFBTSxDQUFDLFVBQUMsVUFBVSxJQUFLLE9BQUEsVUFBVSxLQUFLLElBQUksRUFBbkIsQ0FBbUIsQ0FBQztBQUNsRCxhQUFPLE9BQU8sQ0FBQyxVQUFDLFVBQVU7QUFBSSxZQUN0QixLQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDaEYsWUFBUSxLQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXO0FBQ2hHLFFBQU0sQ0FBQyxDQUFDLENBQUM7QUFDVCxRQUNJLElBQUksS0FBSyxFQUFFO0FBQ2YsWUFBTSxJQUFJLENBQUMsYUFBYSxhQUFJLEdBQUMsSUFBSSxDQUFDLEVBQUUsSUFBRyxJQUFJLEtBQUMsQ0FBQztBQUM3QyxTQUFLO0FBQ0wsYUFBUztBQUNULFlBQU0sSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7QUFDOUIsU0FBSztBQUNMLElBQUUsQ0FBQztBQUVILElBQVUsdUNBQW1CLEdBQTNCLFVBQTRCLElBQUksRUFBRSxLQUFLO0FBQ3pDO0FBQWdCLFFBQVosSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxZQUFHLEdBQUMsSUFBSSxDQUFDLEVBQUUsSUFBRyxLQUFLLE1BQUUsQ0FBQztBQUNuRixJQUFFLENBQUM7QUFFSDtBQUNtQixJQXJnQlYscUJBQVcsR0FBRyxJQUFJLENBQUM7QUFDNUIsSUFNYztBQUFhLFFBQXhCLFVBQVU7QUFBRTtBQUNRLDRDQURTO0FBQy9CLElBQWE7QUFBYSxRQUF4QixVQUFVO0FBQUU7QUFDWixzREFEa0Q7QUFDcEQsSUFBYTtBQUFhLFFBQXhCLFVBQVU7QUFBRTtBQUEwQywwREFBQTtBQUN4RCxJQUFhO0FBQWEsUUFBeEIsVUFBVTtBQUFFO0FBQ1Ysb0RBRDhDO0FBQ2xELElBQWE7QUFBYSxRQUF4QixVQUFVO0FBQUU7QUFDVixvREFEOEM7QUFDbEQsSUFBYTtBQUFhLFFBQXhCLFVBQVU7QUFBRTtBQUNGLG9EQUQ4QjtBQUMxQyxJQUFhO0FBQWEsUUFBeEIsVUFBVTtBQUFFLGtDQUFZLFFBQVE7QUFDbkMsa0RBRG9DO0FBRXBDLElBdURZO0FBQWEsUUFBdEIsUUFBUTtBQUFFO0FBQ1c7QUFBNEMsZ0RBQ2pFO0FBRUgsSUFBWTtBQUFhLFFBQXRCLFFBQVE7QUFBRTtBQUNTO0FBQ1Isa0RBSVg7QUFFSCxJQUFZO0FBQWEsUUFBdEIsUUFBUTtBQUFFO0FBQ1c7QUFDTixnREFJZjtBQUVILElBQVk7QUFBYSxRQUF0QixRQUFRO0FBQUU7QUFDVztBQUNOLGdEQUlmO0FBRUgsSUFBWTtBQUFhLFFBQXRCLFFBQVE7QUFBRTtBQUNLO0FBQ1osc0RBSUg7QUFFSCxJQTBFVTtBQUFhLFFBQXBCLE1BQU07QUFBRTtBQUE2QztBQUNwRDtBQUM2Qiw0Q0FVOUI7QUFFSCxJQUFVO0FBQ1IsUUFEQyxNQUFNO0FBQUU7QUFFRztBQUNlO0FBRUosMkNBa0J0QjtBQUVILElBQ1U7QUFBYSxRQUFwQixNQUFNO0FBQUU7QUFDWTtBQUdGO0FBQ29CLG1EQUh0QztBQUVILElBQVU7QUFBYSxRQUFwQixNQUFNO0FBQUU7QUFDaUI7QUFJNUI7QUFBZ0QsNkNBSDdDO0FBRUgsSUFBVTtBQUFhLFFBQXBCLE1BQU07QUFBRTtBQUNvQjtBQUdQO0FBQ29CLDZDQUh6QztBQUVILElBQVU7QUFBYSxRQUFwQixNQUFNO0FBQUU7QUFDaUI7QUFDRDtBQUFnRCxrREFFeEU7QUFFSCxJQUFVO0FBQWEsUUFBcEIsTUFBTTtBQUFFO0FBQ2E7QUFDRDtBQUFnRCxzREFFcEU7QUFFSCxJQUFVO0FBQWEsUUFBcEIsTUFBTTtBQUFFO0FBQ2dCO0FBQ0Q7QUFBZ0QsbURBT3ZFO0FBRUgsSUFBVTtBQUFhLFFBQXBCLE1BQU07QUFBRTtBQUNrQjtBQUNEO0FBRWxCLGlEQU1QO0FBRUgsSUFBVTtBQUFhLFFBQXBCLE1BQU07QUFBRTtBQUNUO0FBR0Q7QUFDcUMsa0RBV25DO0FBRUgsSUFBVTtBQUFhLFFBQXBCLE1BQU07QUFBRTtBQUNJO0FBQTJEO0FBR2xFLG9EQUtMO0FBRUgsSUFBVTtBQUFhLFFBQXBCLE1BQU07QUFBRTtBQUNJO0FBQTJEO0FBQ3hDLG9EQUMvQjtBQUVILElBQVU7QUFBYSxRQUFwQixNQUFNO0FBQUU7QUFDcUI7QUFHWjtBQUNzQiw4Q0FIdkM7QUFFSCxJQUFVO0FBQWEsUUFBcEIsTUFBTTtBQUFFO0FBQ21CO0FBR2Q7QUFDVyxnREFIeEI7QUFFSCxJQUFVO0FBQWEsUUFBcEIsTUFBTTtBQUFFO0FBQ1E7QUFBMkQ7QUFHekMsZ0RBRmxDO0FBRUgsSUFBVTtBQUFhLFFBQXBCLE1BQU07QUFBRTtBQUNPO0FBQW1EO0FBRS9ELHFEQUNIO0FBRUgsSUFXVTtBQUFhLFFBQXBCLE1BQU07QUFBRTtBQUNKO0FBR3FCO0FBR1EsZ0RBaUJqQztBQUVILElBQVU7QUFBYSxRQUFwQixNQUFNO0FBQUU7QUFFVjtBQUE2QztBQUdsQixnREFGekI7QUFFSCxJQUFVO0FBQWEsUUFBcEIsTUFBTTtBQUFFO0FBQ2M7QUFHekI7QUFBZ0QsNkNBNEI3QztBQUVILElBQVU7QUFBYSxRQUFwQixNQUFNO0FBQUU7QUFDYztBQUVXO0FBRVQsNkNBZ0J4QjtBQUVILElBVVU7QUFBYSxRQUFwQixNQUFNO0FBQUU7QUFHUjtBQUN5QjtBQUNKLDZDQUtyQjtJQXZiVSxTQUFTLHNDQURyQixVQUFVLEVBQUUsUUFDQSxTQUFTLENBcWdCckI7Ozs7Z0RBQ0Q7QUFBQyxJQURELGdCQUFDO0FBQ0EsQ0FEQSxBQXJnQkQsSUFxZ0JDO0FBQ0QsU0F0Z0JhLFNBQVM7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCwgYWN0aW9uLCBhdXRvcnVuIH0gZnJvbSAnbW9ieCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi90cmVlLW5vZGUubW9kZWwnO1xuaW1wb3J0IHsgVHJlZU9wdGlvbnMgfSBmcm9tICcuL3RyZWUtb3B0aW9ucy5tb2RlbCc7XG5pbXBvcnQgeyBUcmVlVmlydHVhbFNjcm9sbCB9IGZyb20gJy4vdHJlZS12aXJ0dWFsLXNjcm9sbC5tb2RlbCc7XG5pbXBvcnQgeyBJVHJlZU1vZGVsLCBJRFR5cGUsIElEVHlwZURpY3Rpb25hcnkgfSBmcm9tICcuLi9kZWZzL2FwaSc7XG5pbXBvcnQgeyBUUkVFX0VWRU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9ldmVudHMnO1xuXG5pbXBvcnQgZmlyc3QgZnJvbSAnbG9kYXNoL2ZpcnN0JztcbmltcG9ydCBsYXN0IGZyb20gJ2xvZGFzaC9sYXN0JztcbmltcG9ydCBjb21wYWN0IGZyb20gJ2xvZGFzaC9jb21wYWN0JztcbmltcG9ydCBmaW5kIGZyb20gJ2xvZGFzaC9maW5kJztcbmltcG9ydCBpc1N0cmluZyBmcm9tICdsb2Rhc2gvaXNTdHJpbmcnO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnbG9kYXNoL2lzRnVuY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJlZU1vZGVsIGltcGxlbWVudHMgSVRyZWVNb2RlbCwgT25EZXN0cm95IHtcbiAgc3RhdGljIGZvY3VzZWRUcmVlID0gbnVsbDtcblxuICBvcHRpb25zOiBUcmVlT3B0aW9ucyA9IG5ldyBUcmVlT3B0aW9ucygpO1xuICBub2RlczogYW55W107XG4gIGV2ZW50TmFtZXMgPSBPYmplY3Qua2V5cyhUUkVFX0VWRU5UUyk7XG4gIHZpcnR1YWxTY3JvbGw6IFRyZWVWaXJ0dWFsU2Nyb2xsO1xuXG4gIEBvYnNlcnZhYmxlIHJvb3RzOiBUcmVlTm9kZVtdO1xuICBAb2JzZXJ2YWJsZSBleHBhbmRlZE5vZGVJZHM6IElEVHlwZURpY3Rpb25hcnkgPSB7fTtcbiAgQG9ic2VydmFibGUgc2VsZWN0ZWRMZWFmTm9kZUlkczogSURUeXBlRGljdGlvbmFyeSA9IHt9O1xuICBAb2JzZXJ2YWJsZSBhY3RpdmVOb2RlSWRzOiBJRFR5cGVEaWN0aW9uYXJ5ID0ge307XG4gIEBvYnNlcnZhYmxlIGhpZGRlbk5vZGVJZHM6IElEVHlwZURpY3Rpb25hcnkgPSB7fTtcbiAgQG9ic2VydmFibGUgZm9jdXNlZE5vZGVJZDogSURUeXBlID0gbnVsbDtcbiAgQG9ic2VydmFibGUgdmlydHVhbFJvb3Q6IFRyZWVOb2RlO1xuXG4gIHByaXZhdGUgZmlyc3RVcGRhdGUgPSB0cnVlO1xuICBwcml2YXRlIGV2ZW50czogYW55O1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgLy8gZXZlbnRzXG4gIGZpcmVFdmVudChldmVudCkge1xuICAgIGV2ZW50LnRyZWVNb2RlbCA9IHRoaXM7XG4gICAgdGhpcy5ldmVudHNbZXZlbnQuZXZlbnROYW1lXS5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmV2ZW50cy5ldmVudC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zdWJzY3JpYmUoZm4pO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHN1YnNjcmlwdGlvbik7XG4gIH1cblxuXG4gIC8vIGdldHRlcnNcbiAgZ2V0Rm9jdXNlZE5vZGUoKTogVHJlZU5vZGUge1xuICAgIHJldHVybiB0aGlzLmZvY3VzZWROb2RlO1xuICB9XG5cblxuICBnZXRBY3RpdmVOb2RlKCk6IFRyZWVOb2RlIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVOb2Rlc1swXTtcbiAgfVxuXG4gIGdldEFjdGl2ZU5vZGVzKCk6IFRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZU5vZGVzO1xuICB9XG5cbiAgZ2V0VmlzaWJsZVJvb3RzKCkge1xuICAgIHJldHVybiB0aGlzLnZpcnR1YWxSb290LnZpc2libGVDaGlsZHJlbjtcbiAgfVxuXG4gIGdldEZpcnN0Um9vdChza2lwSGlkZGVuID0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmlyc3Qoc2tpcEhpZGRlbiA/IHRoaXMuZ2V0VmlzaWJsZVJvb3RzKCkgOiB0aGlzLnJvb3RzKTtcbiAgfVxuXG4gIGdldExhc3RSb290KHNraXBIaWRkZW4gPSBmYWxzZSkge1xuICAgIHJldHVybiBsYXN0KHNraXBIaWRkZW4gPyB0aGlzLmdldFZpc2libGVSb290cygpIDogdGhpcy5yb290cyk7XG4gIH1cblxuICBnZXQgaXNGb2N1c2VkKCkge1xuICAgIHJldHVybiBUcmVlTW9kZWwuZm9jdXNlZFRyZWUgPT09IHRoaXM7XG4gIH1cblxuICBpc05vZGVGb2N1c2VkKG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2VkTm9kZSA9PT0gbm9kZTtcbiAgfVxuXG4gIGlzRW1wdHlUcmVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJvb3RzICYmIHRoaXMucm9vdHMubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgQGNvbXB1dGVkIGdldCBmb2N1c2VkTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2VkTm9kZUlkID8gdGhpcy5nZXROb2RlQnlJZCh0aGlzLmZvY3VzZWROb2RlSWQpIDogbnVsbDtcbiAgfVxuXG4gIEBjb21wdXRlZCBnZXQgZXhwYW5kZWROb2RlcygpIHtcbiAgICBjb25zdCBub2RlcyA9IE9iamVjdC5rZXlzKHRoaXMuZXhwYW5kZWROb2RlSWRzKVxuICAgICAgLmZpbHRlcigoaWQpID0+IHRoaXMuZXhwYW5kZWROb2RlSWRzW2lkXSlcbiAgICAgIC5tYXAoKGlkKSA9PiB0aGlzLmdldE5vZGVCeUlkKGlkKSk7XG5cbiAgICByZXR1cm4gY29tcGFjdChub2Rlcyk7XG4gIH1cblxuICBAY29tcHV0ZWQgZ2V0IGFjdGl2ZU5vZGVzKCkge1xuICAgIGNvbnN0IG5vZGVzID0gT2JqZWN0LmtleXModGhpcy5hY3RpdmVOb2RlSWRzKVxuICAgICAgLmZpbHRlcigoaWQpID0+IHRoaXMuYWN0aXZlTm9kZUlkc1tpZF0pXG4gICAgICAubWFwKChpZCkgPT4gdGhpcy5nZXROb2RlQnlJZChpZCkpO1xuXG4gICAgcmV0dXJuIGNvbXBhY3Qobm9kZXMpO1xuICB9XG5cbiAgQGNvbXB1dGVkIGdldCBoaWRkZW5Ob2RlcygpIHtcbiAgICBjb25zdCBub2RlcyA9IE9iamVjdC5rZXlzKHRoaXMuaGlkZGVuTm9kZUlkcylcbiAgICAgICAgLmZpbHRlcigoaWQpID0+IHRoaXMuaGlkZGVuTm9kZUlkc1tpZF0pXG4gICAgICAgIC5tYXAoKGlkKSA9PiB0aGlzLmdldE5vZGVCeUlkKGlkKSk7XG5cbiAgICByZXR1cm4gY29tcGFjdChub2Rlcyk7XG4gIH1cblxuICBAY29tcHV0ZWQgZ2V0IHNlbGVjdGVkTGVhZk5vZGVzKCkge1xuICAgIGNvbnN0IG5vZGVzID0gT2JqZWN0LmtleXModGhpcy5zZWxlY3RlZExlYWZOb2RlSWRzKVxuICAgICAgICAuZmlsdGVyKChpZCkgPT4gdGhpcy5zZWxlY3RlZExlYWZOb2RlSWRzW2lkXSlcbiAgICAgICAgLm1hcCgoaWQpID0+IHRoaXMuZ2V0Tm9kZUJ5SWQoaWQpKTtcblxuICAgIHJldHVybiBjb21wYWN0KG5vZGVzKTtcbiAgfVxuXG4gIC8vIGxvY2F0aW5nIG5vZGVzXG4gIGdldE5vZGVCeVBhdGgocGF0aDogYW55W10sIHN0YXJ0Tm9kZT0gbnVsbCk6IFRyZWVOb2RlIHtcbiAgICBpZiAoIXBhdGgpIHJldHVybiBudWxsO1xuXG4gICAgc3RhcnROb2RlID0gc3RhcnROb2RlIHx8IHRoaXMudmlydHVhbFJvb3Q7XG4gICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gc3RhcnROb2RlO1xuXG4gICAgaWYgKCFzdGFydE5vZGUuY2hpbGRyZW4pIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgY2hpbGRJZCA9IHBhdGguc2hpZnQoKTtcbiAgICBjb25zdCBjaGlsZE5vZGUgPSBmaW5kKHN0YXJ0Tm9kZS5jaGlsZHJlbiwgeyBpZDogY2hpbGRJZCB9KTtcblxuICAgIGlmICghY2hpbGROb2RlKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiB0aGlzLmdldE5vZGVCeVBhdGgocGF0aCwgY2hpbGROb2RlKTtcbiAgfVxuXG4gIGdldE5vZGVCeUlkKGlkKSB7XG4gICAgY29uc3QgaWRTdHIgPSBpZC50b1N0cmluZygpO1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0Tm9kZUJ5KChub2RlKSA9PiBub2RlLmlkLnRvU3RyaW5nKCkgPT09IGlkU3RyKTtcbiAgfVxuXG4gIGdldE5vZGVCeShwcmVkaWNhdGUsIHN0YXJ0Tm9kZSA9IG51bGwpIHtcbiAgICBzdGFydE5vZGUgPSBzdGFydE5vZGUgfHwgdGhpcy52aXJ0dWFsUm9vdDtcblxuICAgIGlmICghc3RhcnROb2RlLmNoaWxkcmVuKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IGZvdW5kID0gZmluZChzdGFydE5vZGUuY2hpbGRyZW4sIHByZWRpY2F0ZSk7XG5cbiAgICBpZiAoZm91bmQpIHsgLy8gZm91bmQgaW4gY2hpbGRyZW5cbiAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9IGVsc2UgeyAvLyBsb29rIGluIGNoaWxkcmVuJ3MgY2hpbGRyZW5cbiAgICAgIGZvciAobGV0IGNoaWxkIG9mIHN0YXJ0Tm9kZS5jaGlsZHJlbikge1xuICAgICAgICBjb25zdCBmb3VuZEluQ2hpbGRyZW4gPSB0aGlzLmdldE5vZGVCeShwcmVkaWNhdGUsIGNoaWxkKTtcbiAgICAgICAgaWYgKGZvdW5kSW5DaGlsZHJlbikgcmV0dXJuIGZvdW5kSW5DaGlsZHJlbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc0V4cGFuZGVkKG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5leHBhbmRlZE5vZGVJZHNbbm9kZS5pZF07XG4gIH1cblxuICBpc0hpZGRlbihub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuaGlkZGVuTm9kZUlkc1tub2RlLmlkXTtcbiAgfVxuXG4gIGlzQWN0aXZlKG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVOb2RlSWRzW25vZGUuaWRdO1xuICB9XG5cbiAgaXNTZWxlY3RlZChub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRMZWFmTm9kZUlkc1tub2RlLmlkXTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmVBbGwoKTtcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgLy8gRGlzcG9zZSByZWFjdGlvbnMgb2YgdGhlIHJlcGxhY2VkIG5vZGVzXG4gICAgaWYgKHRoaXMudmlydHVhbFJvb3QpIHtcbiAgICAgIHRoaXMudmlydHVhbFJvb3QuZGlzcG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIHVuc3Vic2NyaWJlQWxsKCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKSk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zID0gW107XG4gIH1cblxuICAvLyBhY3Rpb25zXG4gIEBhY3Rpb24gc2V0RGF0YSh7IG5vZGVzLCBvcHRpb25zID0gbnVsbCwgZXZlbnRzID0gbnVsbCB9OiB7bm9kZXM6IGFueSwgb3B0aW9uczogYW55LCBldmVudHM6IGFueX0pIHtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgdGhpcy5vcHRpb25zID0gbmV3IFRyZWVPcHRpb25zKG9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzKSB7XG4gICAgICB0aGlzLmV2ZW50cyA9IGV2ZW50cztcbiAgICB9XG4gICAgaWYgKG5vZGVzKSB7XG4gICAgICB0aGlzLm5vZGVzID0gbm9kZXM7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIEBhY3Rpb24gdXBkYXRlKCkge1xuICAgIC8vIFJlYnVpbGQgdHJlZTpcbiAgICBsZXQgdmlydHVhbFJvb3RDb25maWcgPSB7XG4gICAgICBpZDogdGhpcy5vcHRpb25zLnJvb3RJZCxcbiAgICAgIHZpcnR1YWw6IHRydWUsXG4gICAgICBbdGhpcy5vcHRpb25zLmNoaWxkcmVuRmllbGRdOiB0aGlzLm5vZGVzXG4gICAgfTtcblxuICAgIHRoaXMuZGlzcG9zZSgpO1xuXG4gICAgdGhpcy52aXJ0dWFsUm9vdCA9IG5ldyBUcmVlTm9kZSh2aXJ0dWFsUm9vdENvbmZpZywgbnVsbCwgdGhpcywgMCk7XG5cbiAgICB0aGlzLnJvb3RzID0gdGhpcy52aXJ0dWFsUm9vdC5jaGlsZHJlbjtcblxuICAgIC8vIEZpcmUgZXZlbnQ6XG4gICAgaWYgKHRoaXMuZmlyc3RVcGRhdGUpIHtcbiAgICAgIGlmICh0aGlzLnJvb3RzKSB7XG4gICAgICAgIHRoaXMuZmlyc3RVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fY2FsY3VsYXRlRXhwYW5kZWROb2RlcygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpcmVFdmVudCh7IGV2ZW50TmFtZTogVFJFRV9FVkVOVFMudXBkYXRlRGF0YSB9KTtcbiAgICB9XG4gIH1cblxuXG4gIEBhY3Rpb24gc2V0Rm9jdXNlZE5vZGUobm9kZSkge1xuICAgIHRoaXMuZm9jdXNlZE5vZGVJZCA9IG5vZGUgPyBub2RlLmlkIDogbnVsbDtcbiAgfVxuXG4gIEBhY3Rpb24gc2V0Rm9jdXModmFsdWUpIHtcbiAgICBUcmVlTW9kZWwuZm9jdXNlZFRyZWUgPSB2YWx1ZSA/IHRoaXMgOiBudWxsO1xuICB9XG5cbiAgQGFjdGlvbiBkb0ZvckFsbChmbikge1xuICAgIHRoaXMucm9vdHMuZm9yRWFjaCgocm9vdCkgPT4gcm9vdC5kb0ZvckFsbChmbikpO1xuICB9XG5cbiAgQGFjdGlvbiBmb2N1c05leHROb2RlKCkge1xuICAgIGxldCBwcmV2aW91c05vZGUgPSB0aGlzLmdldEZvY3VzZWROb2RlKCk7XG4gICAgbGV0IG5leHROb2RlID0gcHJldmlvdXNOb2RlID8gcHJldmlvdXNOb2RlLmZpbmROZXh0Tm9kZSh0cnVlLCB0cnVlKSA6IHRoaXMuZ2V0Rmlyc3RSb290KHRydWUpO1xuICAgIGlmIChuZXh0Tm9kZSkgbmV4dE5vZGUuZm9jdXMoKTtcbiAgfVxuXG4gIEBhY3Rpb24gZm9jdXNQcmV2aW91c05vZGUoKSB7XG4gICAgbGV0IHByZXZpb3VzTm9kZSA9IHRoaXMuZ2V0Rm9jdXNlZE5vZGUoKTtcbiAgICBsZXQgbmV4dE5vZGUgPSBwcmV2aW91c05vZGUgPyBwcmV2aW91c05vZGUuZmluZFByZXZpb3VzTm9kZSh0cnVlKSA6IHRoaXMuZ2V0TGFzdFJvb3QodHJ1ZSk7XG4gICAgaWYgKG5leHROb2RlKSBuZXh0Tm9kZS5mb2N1cygpO1xuICB9XG5cbiAgQGFjdGlvbiBmb2N1c0RyaWxsRG93bigpIHtcbiAgICBsZXQgcHJldmlvdXNOb2RlID0gdGhpcy5nZXRGb2N1c2VkTm9kZSgpO1xuICAgIGlmIChwcmV2aW91c05vZGUgJiYgcHJldmlvdXNOb2RlLmlzQ29sbGFwc2VkICYmIHByZXZpb3VzTm9kZS5oYXNDaGlsZHJlbikge1xuICAgICAgcHJldmlvdXNOb2RlLnRvZ2dsZUV4cGFuZGVkKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IG5leHROb2RlID0gcHJldmlvdXNOb2RlID8gcHJldmlvdXNOb2RlLmdldEZpcnN0Q2hpbGQodHJ1ZSkgOiB0aGlzLmdldEZpcnN0Um9vdCh0cnVlKTtcbiAgICAgIGlmIChuZXh0Tm9kZSkgbmV4dE5vZGUuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBAYWN0aW9uIGZvY3VzRHJpbGxVcCgpIHtcbiAgICBsZXQgcHJldmlvdXNOb2RlID0gdGhpcy5nZXRGb2N1c2VkTm9kZSgpO1xuICAgIGlmICghcHJldmlvdXNOb2RlKSByZXR1cm47XG4gICAgaWYgKHByZXZpb3VzTm9kZS5pc0V4cGFuZGVkKSB7XG4gICAgICBwcmV2aW91c05vZGUudG9nZ2xlRXhwYW5kZWQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgbmV4dE5vZGUgPSBwcmV2aW91c05vZGUucmVhbFBhcmVudDtcbiAgICAgIGlmIChuZXh0Tm9kZSkgbmV4dE5vZGUuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBAYWN0aW9uIHNldEFjdGl2ZU5vZGUobm9kZSwgdmFsdWUsIG11bHRpID0gZmFsc2UpIHtcbiAgICBpZiAobXVsdGkpIHtcbiAgICAgIHRoaXMuX3NldEFjdGl2ZU5vZGVNdWx0aShub2RlLCB2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fc2V0QWN0aXZlTm9kZVNpbmdsZShub2RlLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBub2RlLmZvY3VzKHRoaXMub3B0aW9ucy5zY3JvbGxPbkFjdGl2YXRlKTtcbiAgICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5hY3RpdmF0ZSwgbm9kZSB9KTtcbiAgICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5ub2RlQWN0aXZhdGUsIG5vZGUgfSk7IC8vIEZvciBJRTExXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5kZWFjdGl2YXRlLCBub2RlIH0pO1xuICAgICAgdGhpcy5maXJlRXZlbnQoeyBldmVudE5hbWU6IFRSRUVfRVZFTlRTLm5vZGVEZWFjdGl2YXRlLCBub2RlIH0pOyAvLyBGb3IgSUUxMVxuICAgIH1cbiAgfVxuXG4gIEBhY3Rpb24gc2V0U2VsZWN0ZWROb2RlKG5vZGUsIHZhbHVlKSB7XG4gICAgdGhpcy5zZWxlY3RlZExlYWZOb2RlSWRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zZWxlY3RlZExlYWZOb2RlSWRzLCB7W25vZGUuaWRdOiB2YWx1ZX0pO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBub2RlLmZvY3VzKCk7XG4gICAgICB0aGlzLmZpcmVFdmVudCh7IGV2ZW50TmFtZTogVFJFRV9FVkVOVFMuc2VsZWN0LCBub2RlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpcmVFdmVudCh7IGV2ZW50TmFtZTogVFJFRV9FVkVOVFMuZGVzZWxlY3QsIG5vZGUgfSk7XG4gICAgfVxuICB9XG5cbiAgQGFjdGlvbiBzZXRFeHBhbmRlZE5vZGUobm9kZSwgdmFsdWUpIHtcbiAgICB0aGlzLmV4cGFuZGVkTm9kZUlkcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZXhwYW5kZWROb2RlSWRzLCB7W25vZGUuaWRdOiB2YWx1ZX0pO1xuICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy50b2dnbGVFeHBhbmRlZCwgbm9kZSwgaXNFeHBhbmRlZDogdmFsdWUgfSk7XG4gIH1cblxuICBAYWN0aW9uIGV4cGFuZEFsbCgpIHtcbiAgICB0aGlzLnJvb3RzLmZvckVhY2goKHJvb3QpID0+IHJvb3QuZXhwYW5kQWxsKCkpO1xuICB9XG5cbiAgQGFjdGlvbiBjb2xsYXBzZUFsbCgpIHtcbiAgICB0aGlzLnJvb3RzLmZvckVhY2goKHJvb3QpID0+IHJvb3QuY29sbGFwc2VBbGwoKSk7XG4gIH1cblxuICBAYWN0aW9uIHNldElzSGlkZGVuKG5vZGUsIHZhbHVlKSB7XG4gICAgdGhpcy5oaWRkZW5Ob2RlSWRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5oaWRkZW5Ob2RlSWRzLCB7W25vZGUuaWRdOiB2YWx1ZX0pO1xuICB9XG5cbiAgQGFjdGlvbiBzZXRIaWRkZW5Ob2RlSWRzKG5vZGVJZHMpIHtcbiAgICB0aGlzLmhpZGRlbk5vZGVJZHMgPSBub2RlSWRzLnJlZHVjZSgoaGlkZGVuTm9kZUlkcywgaWQpID0+IE9iamVjdC5hc3NpZ24oaGlkZGVuTm9kZUlkcywge1xuICAgICAgW2lkXTogdHJ1ZVxuICAgIH0pLCB7fSk7XG4gIH1cblxuICBwZXJmb3JtS2V5QWN0aW9uKG5vZGUsICRldmVudCkge1xuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMub3B0aW9ucy5hY3Rpb25NYXBwaW5nLmtleXNbJGV2ZW50LmtleUNvZGVdO1xuICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgYWN0aW9uKHRoaXMsIG5vZGUsICRldmVudCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEBhY3Rpb24gZmlsdGVyTm9kZXMoZmlsdGVyLCBhdXRvU2hvdyA9IHRydWUpIHtcbiAgICBsZXQgZmlsdGVyRm47XG5cbiAgICBpZiAoIWZpbHRlcikge1xuICAgICAgcmV0dXJuIHRoaXMuY2xlYXJGaWx0ZXIoKTtcbiAgICB9XG5cbiAgICAvLyBzdXBwb3J0IGZ1bmN0aW9uIGFuZCBzdHJpbmcgZmlsdGVyXG4gICAgaWYgKGlzU3RyaW5nKGZpbHRlcikpIHtcbiAgICAgIGZpbHRlckZuID0gKG5vZGUpID0+IG5vZGUuZGlzcGxheUZpZWxkLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXIudG9Mb3dlckNhc2UoKSkgIT09IC0xO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0Z1bmN0aW9uKGZpbHRlcikpIHtcbiAgICAgICBmaWx0ZXJGbiA9IGZpbHRlcjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdEb25cXCd0IGtub3cgd2hhdCB0byBkbyB3aXRoIGZpbHRlcicsIGZpbHRlcik7XG4gICAgICBjb25zb2xlLmVycm9yKCdTaG91bGQgYmUgZWl0aGVyIGEgc3RyaW5nIG9yIGZ1bmN0aW9uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaWRzID0ge307XG4gICAgdGhpcy5yb290cy5mb3JFYWNoKChub2RlKSA9PiB0aGlzLl9maWx0ZXJOb2RlKGlkcywgbm9kZSwgZmlsdGVyRm4sIGF1dG9TaG93KSk7XG4gICAgdGhpcy5oaWRkZW5Ob2RlSWRzID0gaWRzO1xuICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5jaGFuZ2VGaWx0ZXIgfSk7XG4gIH1cblxuICBAYWN0aW9uIGNsZWFyRmlsdGVyKCkge1xuICAgIHRoaXMuaGlkZGVuTm9kZUlkcyA9IHt9O1xuICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5jaGFuZ2VGaWx0ZXIgfSk7XG4gIH1cblxuICBAYWN0aW9uIG1vdmVOb2RlKG5vZGUsIHRvKSB7XG4gICAgY29uc3QgZnJvbUluZGV4ID0gbm9kZS5nZXRJbmRleEluUGFyZW50KCk7XG4gICAgY29uc3QgZnJvbVBhcmVudCA9IG5vZGUucGFyZW50O1xuXG4gICAgaWYgKCF0aGlzLmNhbk1vdmVOb2RlKG5vZGUsIHRvLCBmcm9tSW5kZXgpKSByZXR1cm47XG5cbiAgICBjb25zdCBmcm9tQ2hpbGRyZW4gPSBmcm9tUGFyZW50LmdldEZpZWxkKCdjaGlsZHJlbicpO1xuXG4gICAgLy8gSWYgbm9kZSBkb2Vzbid0IGhhdmUgY2hpbGRyZW4gLSBjcmVhdGUgY2hpbGRyZW4gYXJyYXlcbiAgICBpZiAoIXRvLnBhcmVudC5nZXRGaWVsZCgnY2hpbGRyZW4nKSkge1xuICAgICAgdG8ucGFyZW50LnNldEZpZWxkKCdjaGlsZHJlbicsIFtdKTtcbiAgICB9XG4gICAgY29uc3QgdG9DaGlsZHJlbiA9IHRvLnBhcmVudC5nZXRGaWVsZCgnY2hpbGRyZW4nKTtcblxuICAgIGNvbnN0IG9yaWdpbmFsTm9kZSA9IGZyb21DaGlsZHJlbi5zcGxpY2UoZnJvbUluZGV4LCAxKVswXTtcblxuICAgIC8vIENvbXBlbnNhdGUgZm9yIGluZGV4IGlmIGFscmVhZHkgcmVtb3ZlZCBmcm9tIHBhcmVudDpcbiAgICBsZXQgdG9JbmRleCA9IChmcm9tUGFyZW50ID09PSB0by5wYXJlbnQgJiYgdG8uaW5kZXggPiBmcm9tSW5kZXgpID8gdG8uaW5kZXggLSAxIDogdG8uaW5kZXg7XG5cbiAgICB0b0NoaWxkcmVuLnNwbGljZSh0b0luZGV4LCAwLCBvcmlnaW5hbE5vZGUpO1xuXG4gICAgZnJvbVBhcmVudC50cmVlTW9kZWwudXBkYXRlKCk7XG4gICAgaWYgKHRvLnBhcmVudC50cmVlTW9kZWwgIT09IGZyb21QYXJlbnQudHJlZU1vZGVsKSB7XG4gICAgICB0by5wYXJlbnQudHJlZU1vZGVsLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuZmlyZUV2ZW50KHtcbiAgICAgIGV2ZW50TmFtZTogVFJFRV9FVkVOVFMubW92ZU5vZGUsXG4gICAgICBub2RlOiBvcmlnaW5hbE5vZGUsXG4gICAgICB0bzogeyBwYXJlbnQ6IHRvLnBhcmVudC5kYXRhLCBpbmRleDogdG9JbmRleCB9LFxuICAgICAgZnJvbTogeyBwYXJlbnQ6IGZyb21QYXJlbnQuZGF0YSwgaW5kZXg6IGZyb21JbmRleH1cbiAgICB9KTtcbiAgfVxuXG4gIEBhY3Rpb24gY29weU5vZGUobm9kZSwgdG8pIHtcbiAgICBjb25zdCBmcm9tSW5kZXggPSBub2RlLmdldEluZGV4SW5QYXJlbnQoKTtcblxuICAgIGlmICghdGhpcy5jYW5Nb3ZlTm9kZShub2RlLCB0bywgZnJvbUluZGV4KSkgcmV0dXJuO1xuXG4gICAgLy8gSWYgbm9kZSBkb2Vzbid0IGhhdmUgY2hpbGRyZW4gLSBjcmVhdGUgY2hpbGRyZW4gYXJyYXlcbiAgICBpZiAoIXRvLnBhcmVudC5nZXRGaWVsZCgnY2hpbGRyZW4nKSkge1xuICAgICAgdG8ucGFyZW50LnNldEZpZWxkKCdjaGlsZHJlbicsIFtdKTtcbiAgICB9XG4gICAgY29uc3QgdG9DaGlsZHJlbiA9IHRvLnBhcmVudC5nZXRGaWVsZCgnY2hpbGRyZW4nKTtcblxuICAgIGNvbnN0IG5vZGVDb3B5ID0gdGhpcy5vcHRpb25zLmdldE5vZGVDbG9uZShub2RlKTtcblxuICAgIHRvQ2hpbGRyZW4uc3BsaWNlKHRvLmluZGV4LCAwLCBub2RlQ29weSk7XG5cbiAgICBub2RlLnRyZWVNb2RlbC51cGRhdGUoKTtcbiAgICBpZiAodG8ucGFyZW50LnRyZWVNb2RlbCAhPT0gbm9kZS50cmVlTW9kZWwpIHtcbiAgICAgIHRvLnBhcmVudC50cmVlTW9kZWwudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5maXJlRXZlbnQoeyBldmVudE5hbWU6IFRSRUVfRVZFTlRTLmNvcHlOb2RlLCBub2RlOiBub2RlQ29weSwgdG86IHsgcGFyZW50OiB0by5wYXJlbnQuZGF0YSwgaW5kZXg6IHRvLmluZGV4IH0gfSk7XG4gIH1cblxuICBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXhwYW5kZWROb2RlSWRzOiB0aGlzLmV4cGFuZGVkTm9kZUlkcyxcbiAgICAgIHNlbGVjdGVkTGVhZk5vZGVJZHM6IHRoaXMuc2VsZWN0ZWRMZWFmTm9kZUlkcyxcbiAgICAgIGFjdGl2ZU5vZGVJZHM6IHRoaXMuYWN0aXZlTm9kZUlkcyxcbiAgICAgIGhpZGRlbk5vZGVJZHM6IHRoaXMuaGlkZGVuTm9kZUlkcyxcbiAgICAgIGZvY3VzZWROb2RlSWQ6IHRoaXMuZm9jdXNlZE5vZGVJZFxuICAgIH07XG4gIH1cblxuICBAYWN0aW9uIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZSkgcmV0dXJuO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICBleHBhbmRlZE5vZGVJZHM6IHN0YXRlLmV4cGFuZGVkTm9kZUlkcyB8fCB7fSxcbiAgICAgIHNlbGVjdGVkTGVhZk5vZGVJZHM6IHN0YXRlLnNlbGVjdGVkTGVhZk5vZGVJZHMgfHwge30sXG4gICAgICBhY3RpdmVOb2RlSWRzOiBzdGF0ZS5hY3RpdmVOb2RlSWRzIHx8IHt9LFxuICAgICAgaGlkZGVuTm9kZUlkczogc3RhdGUuaGlkZGVuTm9kZUlkcyB8fCB7fSxcbiAgICAgIGZvY3VzZWROb2RlSWQ6IHN0YXRlLmZvY3VzZWROb2RlSWRcbiAgICB9KTtcbiAgfVxuXG4gIHN1YnNjcmliZVRvU3RhdGUoZm4pIHtcbiAgICBhdXRvcnVuKCgpID0+IGZuKHRoaXMuZ2V0U3RhdGUoKSkpO1xuICB9XG5cbiAgY2FuTW92ZU5vZGUobm9kZSwgdG8sIGZyb21JbmRleCA9IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGZyb21Ob2RlSW5kZXggPSBmcm9tSW5kZXggfHwgbm9kZS5nZXRJbmRleEluUGFyZW50KCk7XG5cbiAgICAvLyBzYW1lIG5vZGU6XG4gICAgaWYgKG5vZGUucGFyZW50ID09PSB0by5wYXJlbnQgJiYgZnJvbUluZGV4ID09PSB0by5pbmRleCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAhdG8ucGFyZW50LmlzRGVzY2VuZGFudE9mKG5vZGUpO1xuICB9XG5cbiAgY2FsY3VsYXRlRXhwYW5kZWROb2RlcygpIHtcbiAgICAgIHRoaXMuX2NhbGN1bGF0ZUV4cGFuZGVkTm9kZXMoKTtcbiAgfVxuXG4gIC8vIHByaXZhdGUgbWV0aG9kc1xuICBwcml2YXRlIF9maWx0ZXJOb2RlKGlkcywgbm9kZSwgZmlsdGVyRm4sIGF1dG9TaG93KSB7XG4gICAgLy8gaWYgbm9kZSBwYXNzZXMgZnVuY3Rpb24gdGhlbiBpdCdzIHZpc2libGVcbiAgICBsZXQgaXNWaXNpYmxlID0gZmlsdGVyRm4obm9kZSk7XG5cbiAgICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgLy8gaWYgb25lIG9mIG5vZGUncyBjaGlsZHJlbiBwYXNzZXMgZmlsdGVyIHRoZW4gdGhpcyBub2RlIGlzIGFsc28gdmlzaWJsZVxuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fZmlsdGVyTm9kZShpZHMsIGNoaWxkLCBmaWx0ZXJGbiwgYXV0b1Nob3cpKSB7XG4gICAgICAgICAgaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gbWFyayBub2RlIGFzIGhpZGRlblxuICAgIGlmICghaXNWaXNpYmxlKSB7XG4gICAgICBpZHNbbm9kZS5pZF0gPSB0cnVlO1xuICAgIH1cbiAgICAvLyBhdXRvIGV4cGFuZCBwYXJlbnRzIHRvIG1ha2Ugc3VyZSB0aGUgZmlsdGVyZWQgbm9kZXMgYXJlIHZpc2libGVcbiAgICBpZiAoYXV0b1Nob3cgJiYgaXNWaXNpYmxlKSB7XG4gICAgICBub2RlLmVuc3VyZVZpc2libGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzVmlzaWJsZTtcbiAgfVxuXG4gIHByaXZhdGUgX2NhbGN1bGF0ZUV4cGFuZGVkTm9kZXMoc3RhcnROb2RlID0gbnVsbCkge1xuICAgIHN0YXJ0Tm9kZSA9IHN0YXJ0Tm9kZSB8fCB0aGlzLnZpcnR1YWxSb290O1xuXG4gICAgaWYgKHN0YXJ0Tm9kZS5kYXRhW3RoaXMub3B0aW9ucy5pc0V4cGFuZGVkRmllbGRdKSB7XG4gICAgICB0aGlzLmV4cGFuZGVkTm9kZUlkcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZXhwYW5kZWROb2RlSWRzLCB7W3N0YXJ0Tm9kZS5pZF06IHRydWV9KTtcbiAgICB9XG4gICAgaWYgKHN0YXJ0Tm9kZS5jaGlsZHJlbikge1xuICAgICAgc3RhcnROb2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB0aGlzLl9jYWxjdWxhdGVFeHBhbmRlZE5vZGVzKGNoaWxkKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2V0QWN0aXZlTm9kZVNpbmdsZShub2RlLCB2YWx1ZSkge1xuICAgIC8vIERlYWN0aXZhdGUgYWxsIG90aGVyIG5vZGVzOlxuICAgIHRoaXMuYWN0aXZlTm9kZXNcbiAgICAgIC5maWx0ZXIoKGFjdGl2ZU5vZGUpID0+IGFjdGl2ZU5vZGUgIT09IG5vZGUpXG4gICAgICAuZm9yRWFjaCgoYWN0aXZlTm9kZSkgPT4ge1xuICAgICAgICB0aGlzLmZpcmVFdmVudCh7IGV2ZW50TmFtZTogVFJFRV9FVkVOVFMuZGVhY3RpdmF0ZSwgbm9kZTogYWN0aXZlTm9kZSB9KTtcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoeyBldmVudE5hbWU6IFRSRUVfRVZFTlRTLm5vZGVEZWFjdGl2YXRlLCBub2RlOiBhY3RpdmVOb2RlIH0pOyAvLyBGb3IgSUUxMVxuICAgICAgfSk7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuYWN0aXZlTm9kZUlkcyA9IHtbbm9kZS5pZF06IHRydWV9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlTm9kZUlkcyA9IHt9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldEFjdGl2ZU5vZGVNdWx0aShub2RlLCB2YWx1ZSkge1xuICAgIHRoaXMuYWN0aXZlTm9kZUlkcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuYWN0aXZlTm9kZUlkcywge1tub2RlLmlkXTogdmFsdWV9KTtcbiAgfVxuXG59XG4iXX0=

/***/ }),

/***/ "Puqe":
/*!*************************************!*\
  !*** ./node_modules/lodash/omit.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "eUgh"),
    baseClone = __webpack_require__(/*! ./_baseClone */ "OBhP"),
    baseUnset = __webpack_require__(/*! ./_baseUnset */ "S7Xf"),
    castPath = __webpack_require__(/*! ./_castPath */ "4uTw"),
    copyObject = __webpack_require__(/*! ./_copyObject */ "juv8"),
    customOmitClone = __webpack_require__(/*! ./_customOmitClone */ "4Oe1"),
    flatRest = __webpack_require__(/*! ./_flatRest */ "xs/l"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "G6z8");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),

/***/ "Q1l4":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "QIyF":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "Kz5y");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "QPK0":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/components/tree-node-checkbox.component.js ***!
  \**********************************************************************************************************/
/*! exports provided: TreeNodeCheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeCheckboxComponent", function() { return TreeNodeCheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mobx_angular_tree_mobx_autorun_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mobx-angular/tree-mobx-autorun.directive */ "D5+F");
/* harmony import */ var _models_tree_node_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/tree-node.model */ "kJLP");



function TreeNodeCheckboxComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeNodeCheckboxComponent_ng_container_0_Template_input_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.node.mouseAction("checkboxClick", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.node.isSelected)("indeterminate", ctx_r0.node.isPartiallySelected);
} }
var _c0 = function () { return { dontDetach: true }; };
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeNodeCheckboxComponent = /** @class */ (function () {
    function TreeNodeCheckboxComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_tree_node_model__WEBPACK_IMPORTED_MODULE_2__["TreeNode"])
    ], TreeNodeCheckboxComponent.prototype, "node", void 0);
TreeNodeCheckboxComponent.ɵfac = function TreeNodeCheckboxComponent_Factory(t) { return new (t || TreeNodeCheckboxComponent)(); };
TreeNodeCheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeNodeCheckboxComponent, selectors: [["tree-node-checkbox"]], inputs: { node: "node" }, decls: 1, vars: 2, consts: [[4, "treeMobxAutorun"], ["type", "checkbox", 1, "tree-node-checkbox", 3, "checked", "indeterminate", "click"]], template: function TreeNodeCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeNodeCheckboxComponent_ng_container_0_Template, 2, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("treeMobxAutorun", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_mobx_angular_tree_mobx_autorun_directive__WEBPACK_IMPORTED_MODULE_1__["TreeMobxAutorunDirective"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeNodeCheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tree-node-checkbox',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [],
                template: "\n    <ng-container *treeMobxAutorun=\"{ dontDetach: true }\">\n      <input\n        class=\"tree-node-checkbox\"\n        type=\"checkbox\"\n        (click)=\"node.mouseAction('checkboxClick', $event)\"\n        [checked]=\"node.isSelected\"\n        [indeterminate]=\"node.isPartiallySelected\"\n      />\n    </ng-container>\n  "
            }]
    }], function () { return []; }, { node: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return TreeNodeCheckboxComponent;
}());


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2NvbXBvbmVudHMvdHJlZS1ub2RlLWNoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBa0JyRDtBQUNvQixJQURwQjtBQUF1QyxJQUV2QyxDQUFDO0FBQ0QsSUFGVztBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFFLGtDQUFLLFFBQVE7QUFDekIsMkRBRDBCO0lBRGIseUJBQXlCLHdCQWhCckMsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFLG9CQUFvQixjQUM5QjtHQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxjQUNyQyxNQUFNLEVBQUUsRUFBRSxjQUNWLFFBQVEsRUFBRTtrQ0FVVCxVQUNGLENBQUMsUUFDVyx5QkFBeUIsQ0FFckM7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsSUFERCxnQ0FBQztBQUNBLENBREEsQUFGRCxJQUVDO0FBQ0QsU0FIYSx5QkFBeUI7QUFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1ub2RlLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJlZS1ub2RlLWNoZWNrYm94JyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3R5bGVzOiBbXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICp0cmVlTW9ieEF1dG9ydW49XCJ7IGRvbnREZXRhY2g6IHRydWUgfVwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzPVwidHJlZS1ub2RlLWNoZWNrYm94XCJcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgKGNsaWNrKT1cIm5vZGUubW91c2VBY3Rpb24oJ2NoZWNrYm94Q2xpY2snLCAkZXZlbnQpXCJcbiAgICAgICAgW2NoZWNrZWRdPVwibm9kZS5pc1NlbGVjdGVkXCJcbiAgICAgICAgW2luZGV0ZXJtaW5hdGVdPVwibm9kZS5pc1BhcnRpYWxseVNlbGVjdGVkXCJcbiAgICAgIC8+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgVHJlZU5vZGVDaGVja2JveENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG5vZGU6IFRyZWVOb2RlO1xufVxuIl19

/***/ }),

/***/ "QcOe":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "GoyQ"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "6sVZ"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "7Ix3");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "QkVE":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "EpBk");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "QoRX":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "QqLw":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "tadb"),
    Map = __webpack_require__(/*! ./_Map */ "ebwN"),
    Promise = __webpack_require__(/*! ./_Promise */ "HOxn"),
    Set = __webpack_require__(/*! ./_Set */ "yGk4"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "Of+w"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "NykK"),
    toSource = __webpack_require__(/*! ./_toSource */ "3Fdi");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "R/W3":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIndexOf.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "KwMD"),
    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ "2ajD"),
    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ "CZoQ");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "RBan":
/*!*************************************!*\
  !*** ./node_modules/lodash/last.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ "S7Xf":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnset.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "4uTw"),
    last = __webpack_require__(/*! ./last */ "RBan"),
    parent = __webpack_require__(/*! ./_parent */ "gpbi"),
    toKey = __webpack_require__(/*! ./_toKey */ "9Nap");

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),

/***/ "SKAX":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "JC6p"),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "lQqw");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "SfRM":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "YESw");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "Sxd8":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(/*! ./toFinite */ "ZCgT");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "T0zN":
/*!*********************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/vendor/closest.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// element-closest | CC0-1.0 | github.com/jonathantneal/closest
if (typeof Element !== 'undefined') {
    if (typeof Element.prototype.matches !== 'function') {
        Element.prototype.matches = Element.prototype.msMatchesSelector ||
            Element.prototype['mozMatchesSelector'] ||
            Element.prototype.webkitMatchesSelector ||
            function matches(selector) {
                var element = this;
                var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
                var index = 0;
                while (elements[index] && elements[index] !== element) {
                    ++index;
                }
                return Boolean(elements[index]);
            };
    }
    if (typeof Element.prototype['closest'] !== 'function') {
        Element.prototype['closest'] = function closest(selector) {
            var element = this;
            while (element && element.nodeType === 1) {
                if (element.matches(selector)) {
                    return element;
                }
                element = element.parentNode;
            }
            return null;
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2VzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi92ZW5kb3IvY2xvc2VzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrREFBK0Q7QUFDL0QsSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLEVBQUU7SUFDbEMsSUFBSSxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxLQUFLLFVBQVUsRUFBRTtRQUNuRCxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBSSxPQUFPLENBQUMsU0FBaUIsQ0FBQyxpQkFBaUI7WUFDcEUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQztZQUN2QyxPQUFPLENBQUMsU0FBUyxDQUFDLHFCQUFxQjtZQUN2QyxTQUFTLE9BQU8sQ0FBQyxRQUFRO2dCQUN2QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksUUFBUSxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RGLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFFZCxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssT0FBTyxFQUFFO29CQUNyRCxFQUFFLEtBQUssQ0FBQztpQkFDVDtnQkFFRCxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUM7S0FDUDtJQUVELElBQUksT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLFVBQVUsRUFBRTtRQUN0RCxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLFNBQVMsT0FBTyxDQUFDLFFBQVE7WUFDdEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBRW5CLE9BQU8sT0FBTyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssQ0FBQyxFQUFFO2dCQUN4QyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQzdCLE9BQU8sT0FBTyxDQUFDO2lCQUNoQjtnQkFFRCxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQzthQUM5QjtZQUVELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDO0tBQ0g7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVsZW1lbnQtY2xvc2VzdCB8IENDMC0xLjAgfCBnaXRodWIuY29tL2pvbmF0aGFudG5lYWwvY2xvc2VzdFxuaWYgKHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICBpZiAodHlwZW9mIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgIT09ICdmdW5jdGlvbicpIHtcbiAgICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID0gKEVsZW1lbnQucHJvdG90eXBlIGFzIGFueSkubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGVbJ21vek1hdGNoZXNTZWxlY3RvciddIHx8XG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICBmdW5jdGlvbiBtYXRjaGVzKHNlbGVjdG9yKSB7XG4gICAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzO1xuICAgICAgICAgIGxldCBlbGVtZW50cyA9IChlbGVtZW50LmRvY3VtZW50IHx8IGVsZW1lbnQub3duZXJEb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgbGV0IGluZGV4ID0gMDtcblxuICAgICAgICAgIHdoaWxlIChlbGVtZW50c1tpbmRleF0gJiYgZWxlbWVudHNbaW5kZXhdICE9PSBlbGVtZW50KSB7XG4gICAgICAgICAgICArK2luZGV4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBCb29sZWFuKGVsZW1lbnRzW2luZGV4XSk7XG4gICAgICAgIH07XG4gIH1cblxuICBpZiAodHlwZW9mIEVsZW1lbnQucHJvdG90eXBlWydjbG9zZXN0J10gIT09ICdmdW5jdGlvbicpIHtcbiAgICBFbGVtZW50LnByb3RvdHlwZVsnY2xvc2VzdCddID0gZnVuY3Rpb24gY2xvc2VzdChzZWxlY3Rvcikge1xuICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzO1xuXG4gICAgICB3aGlsZSAoZWxlbWVudCAmJiBlbGVtZW50Lm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "T1AV":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseMergeDeep.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "t2Dn"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "5Tg0"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "yP5f"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "Q1l4"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "+iFO"),
    isArguments = __webpack_require__(/*! ./isArguments */ "03A+"),
    isArray = __webpack_require__(/*! ./isArray */ "Z0cm"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "3L66"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "DSRE"),
    isFunction = __webpack_require__(/*! ./isFunction */ "lSCD"),
    isObject = __webpack_require__(/*! ./isObject */ "GoyQ"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "YO3V"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "c6wG"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "itsj"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "jeLo");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ "TO8r":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "TYy9":
/*!****************************************!*\
  !*** ./node_modules/lodash/flatten.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "XGnz");

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ "UB5X":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "NykK"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "ExA7");

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


/***/ }),

/***/ "UNi/":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "UfWW":
/*!******************************************!*\
  !*** ./node_modules/lodash/findIndex.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "KwMD"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "ut/Y"),
    toInteger = __webpack_require__(/*! ./toInteger */ "Sxd8");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ "V6Ve":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "kekF");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "VOtZ":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_copySymbols.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "juv8"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "MvSz");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "VaNO":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "WFqU":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),

/***/ "WwFo":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "juv8"),
    keys = __webpack_require__(/*! ./keys */ "7GkX");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "XGnz":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "CH3K"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "BiGR");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "XKAG":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createFind.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "ut/Y"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "MMmD"),
    keys = __webpack_require__(/*! ./keys */ "7GkX");

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),

/***/ "XYm9":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_cloneDataView.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "+K+b");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "Xcyb":
/*!***************************************************************!*\
  !*** ./node_modules/ionic4-rating/__ivy_ngcc__/dist/index.js ***!
  \***************************************************************/
/*! exports provided: IonicRatingModule, RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ionic_rating_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic-rating.module */ "4/DR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicRatingModule", function() { return _ionic_rating_module__WEBPACK_IMPORTED_MODULE_0__["IonicRatingModule"]; });

/* harmony import */ var _components_rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/rating */ "CbC+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return _components_rating__WEBPACK_IMPORTED_MODULE_1__["RatingComponent"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "Xi7e":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "KMkd"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "adU4"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "tMB7"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "+6XX"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "Z8oC");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "YESw":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "Cwc5");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "YO3V":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "NykK"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "LcsW"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "ExA7");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "Z0cm":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "Z8oC":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "y1pI");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "ZCgT":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(/*! ./toNumber */ "tLB3");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "ZCpW":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "lm/5"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "O7RO"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "IOzZ");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "ZWtO":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "4uTw"),
    toKey = __webpack_require__(/*! ./_toKey */ "9Nap");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "ZirO":
/*!********************************************!*\
  !*** ./node_modules/lodash/_arrayEvery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.every` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 */
function arrayEvery(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

module.exports = arrayEvery;


/***/ }),

/***/ "ZnHu":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/skeleton-item/skeleton-item.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngStyle]=\"styles\"></div>");

/***/ }),

/***/ "aXz+":
/*!*********************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/constants/keys.js ***!
  \*********************************************************************************/
/*! exports provided: KEYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYS", function() { return KEYS; });
var KEYS = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    ENTER: 13,
    SPACE: 32,
    CONTEXT_MENU: 32
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb25zdGFudHMva2V5cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsSUFBTSxJQUFJLEdBQUc7SUFDbEIsSUFBSSxFQUFFLEVBQUU7SUFDUixFQUFFLEVBQUUsRUFBRTtJQUNOLEtBQUssRUFBRSxFQUFFO0lBQ1QsSUFBSSxFQUFFLEVBQUU7SUFDUixLQUFLLEVBQUUsRUFBRTtJQUNULEtBQUssRUFBRSxFQUFFO0lBQ1QsWUFBWSxFQUFFLEVBQUU7Q0FDakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBLRVlTID0ge1xuICBMRUZUOiAzNyxcbiAgVVA6IDM4LFxuICBSSUdIVDogMzksXG4gIERPV046IDQwLFxuICBFTlRFUjogMTMsXG4gIFNQQUNFOiAzMixcbiAgQ09OVEVYVF9NRU5VOiAzMlxufTtcbiJdfQ==

/***/ }),

/***/ "adU4":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "y1pI");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "afOK":
/*!**************************************!*\
  !*** ./node_modules/lodash/first.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./head */ "pZt1");


/***/ }),

/***/ "b2z7":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneRegExp.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "b80T":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "UNi/"),
    isArguments = __webpack_require__(/*! ./isArguments */ "03A+"),
    isArray = __webpack_require__(/*! ./isArray */ "Z0cm"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "DSRE"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "wJg7"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "c6wG");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "c6wG":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "dD9F"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "sEf8"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "mdPL");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "cOj9":
/*!*************************************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/components/tree-node.component.js ***!
  \*************************************************************************************************/
/*! exports provided: TreeNodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeComponent", function() { return TreeNodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mobx_angular_tree_mobx_autorun_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mobx-angular/tree-mobx-autorun.directive */ "D5+F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tree_node_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree-node-wrapper.component */ "etd4");
/* harmony import */ var _tree_node_children_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tree-node-children.component */ "Adh4");
/* harmony import */ var _tree_node_drop_slot_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tree-node-drop-slot.component */ "LLtC");
/* harmony import */ var _models_tree_node_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/tree-node.model */ "kJLP");







function TreeNodeComponent_ng_container_0_div_1_tree_node_drop_slot_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tree-node-drop-slot", 6);
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dropIndex", ctx_r2.node.index)("node", ctx_r2.node.parent);
} }
function TreeNodeComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeNodeComponent_ng_container_0_div_1_tree_node_drop_slot_1_Template, 1, 2, "tree-node-drop-slot", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tree-node-wrapper", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tree-node-children", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tree-node-drop-slot", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.node.getClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tree-node", true)("tree-node-expanded", ctx_r1.node.isExpanded && ctx_r1.node.hasChildren)("tree-node-collapsed", ctx_r1.node.isCollapsed && ctx_r1.node.hasChildren)("tree-node-leaf", ctx_r1.node.isLeaf)("tree-node-active", ctx_r1.node.isActive)("tree-node-focused", ctx_r1.node.isFocused);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.index === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", ctx_r1.node)("index", ctx_r1.index)("templates", ctx_r1.templates);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", ctx_r1.node)("templates", ctx_r1.templates);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dropIndex", ctx_r1.node.index + 1)("node", ctx_r1.node.parent);
} }
var _c0 = function (a0, a1, a2, a3) { return { $implicit: a0, node: a1, index: a2, templates: a3 }; };
function TreeNodeComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeNodeComponent_ng_container_0_div_1_Template, 5, 22, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.templates.treeNodeFullTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.templates.treeNodeFullTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](3, _c0, ctx_r0.node, ctx_r0.node, ctx_r0.index, ctx_r0.templates));
} }
var _c1 = function () { return { dontDetach: true }; };
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeNodeComponent = /** @class */ (function () {
    function TreeNodeComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_tree_node_model__WEBPACK_IMPORTED_MODULE_6__["TreeNode"])
    ], TreeNodeComponent.prototype, "node", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TreeNodeComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TreeNodeComponent.prototype, "templates", void 0);
TreeNodeComponent.ɵfac = function TreeNodeComponent_Factory(t) { return new (t || TreeNodeComponent)(); };
TreeNodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeNodeComponent, selectors: [["TreeNode"], ["tree-node"]], inputs: { node: "node", index: "index", templates: "templates" }, decls: 1, vars: 2, consts: [[4, "treeMobxAutorun"], [3, "class", "tree-node", "tree-node-expanded", "tree-node-collapsed", "tree-node-leaf", "tree-node-active", "tree-node-focused", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "dropIndex", "node", 4, "ngIf"], [3, "node", "index", "templates"], [3, "node", "templates"], [3, "dropIndex", "node"]], template: function TreeNodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeNodeComponent_ng_container_0_Template, 3, 8, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("treeMobxAutorun", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
    } }, directives: [_mobx_angular_tree_mobx_autorun_directive__WEBPACK_IMPORTED_MODULE_1__["TreeMobxAutorunDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _tree_node_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["TreeNodeWrapperComponent"], _tree_node_children_component__WEBPACK_IMPORTED_MODULE_4__["TreeNodeChildrenComponent"], _tree_node_drop_slot_component__WEBPACK_IMPORTED_MODULE_5__["TreeNodeDropSlot"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeNodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'TreeNode, tree-node',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [],
                template: "\n    <ng-container *treeMobxAutorun=\"{ dontDetach: true }\">\n      <div\n        *ngIf=\"!templates.treeNodeFullTemplate\"\n        [class]=\"node.getClass()\"\n        [class.tree-node]=\"true\"\n        [class.tree-node-expanded]=\"node.isExpanded && node.hasChildren\"\n        [class.tree-node-collapsed]=\"node.isCollapsed && node.hasChildren\"\n        [class.tree-node-leaf]=\"node.isLeaf\"\n        [class.tree-node-active]=\"node.isActive\"\n        [class.tree-node-focused]=\"node.isFocused\"\n      >\n        <tree-node-drop-slot\n          *ngIf=\"index === 0\"\n          [dropIndex]=\"node.index\"\n          [node]=\"node.parent\"\n        ></tree-node-drop-slot>\n\n        <tree-node-wrapper\n          [node]=\"node\"\n          [index]=\"index\"\n          [templates]=\"templates\"\n        ></tree-node-wrapper>\n\n        <tree-node-children\n          [node]=\"node\"\n          [templates]=\"templates\"\n        ></tree-node-children>\n        <tree-node-drop-slot\n          [dropIndex]=\"node.index + 1\"\n          [node]=\"node.parent\"\n        ></tree-node-drop-slot>\n      </div>\n      <ng-container\n        [ngTemplateOutlet]=\"templates.treeNodeFullTemplate\"\n        [ngTemplateOutletContext]=\"{\n          $implicit: node,\n          node: node,\n          index: index,\n          templates: templates\n        }\"\n      >\n      </ng-container>\n    </ng-container>\n  "
            }]
    }], function () { return []; }, { node: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return TreeNodeComponent;
}());


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2NvbXBvbmVudHMvdHJlZS1ub2RlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLGlCQUFpQixFQUVsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFvRHJEO0FBQ29CLElBRHBCO0FBQStCLElBSS9CLENBQUM7QUFDRCxJQUpXO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUUsa0NBQUssUUFBUTtBQUN6QixtREFEMEI7QUFDekIsSUFBVTtBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFFO0FBRVgsb0RBRndCO0FBQ3hCLElBQVU7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBRTtBQUVhLHdEQUZDO0lBSGIsaUJBQWlCLHdCQWxEN0IsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFLHFCQUFxQjtPQUMvQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxjQUNyQyxNQUFNLEVBQUUsRUFBRSxjQUNWLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7bU1BNENULFVBQ0YsQ0FBQyxRQUNXLGlCQUFpQixDQUk3Qjs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELHdCQUFDO0FBQ0EsQ0FEQSxBQUpELElBSUM7QUFDRCxTQUxhLGlCQUFpQjtBQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1RyZWVOb2RlLCB0cmVlLW5vZGUnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdHlsZXM6IFtdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKnRyZWVNb2J4QXV0b3J1bj1cInsgZG9udERldGFjaDogdHJ1ZSB9XCI+XG4gICAgICA8ZGl2XG4gICAgICAgICpuZ0lmPVwiIXRlbXBsYXRlcy50cmVlTm9kZUZ1bGxUZW1wbGF0ZVwiXG4gICAgICAgIFtjbGFzc109XCJub2RlLmdldENsYXNzKClcIlxuICAgICAgICBbY2xhc3MudHJlZS1ub2RlXT1cInRydWVcIlxuICAgICAgICBbY2xhc3MudHJlZS1ub2RlLWV4cGFuZGVkXT1cIm5vZGUuaXNFeHBhbmRlZCAmJiBub2RlLmhhc0NoaWxkcmVuXCJcbiAgICAgICAgW2NsYXNzLnRyZWUtbm9kZS1jb2xsYXBzZWRdPVwibm9kZS5pc0NvbGxhcHNlZCAmJiBub2RlLmhhc0NoaWxkcmVuXCJcbiAgICAgICAgW2NsYXNzLnRyZWUtbm9kZS1sZWFmXT1cIm5vZGUuaXNMZWFmXCJcbiAgICAgICAgW2NsYXNzLnRyZWUtbm9kZS1hY3RpdmVdPVwibm9kZS5pc0FjdGl2ZVwiXG4gICAgICAgIFtjbGFzcy50cmVlLW5vZGUtZm9jdXNlZF09XCJub2RlLmlzRm9jdXNlZFwiXG4gICAgICA+XG4gICAgICAgIDx0cmVlLW5vZGUtZHJvcC1zbG90XG4gICAgICAgICAgKm5nSWY9XCJpbmRleCA9PT0gMFwiXG4gICAgICAgICAgW2Ryb3BJbmRleF09XCJub2RlLmluZGV4XCJcbiAgICAgICAgICBbbm9kZV09XCJub2RlLnBhcmVudFwiXG4gICAgICAgID48L3RyZWUtbm9kZS1kcm9wLXNsb3Q+XG5cbiAgICAgICAgPHRyZWUtbm9kZS13cmFwcGVyXG4gICAgICAgICAgW25vZGVdPVwibm9kZVwiXG4gICAgICAgICAgW2luZGV4XT1cImluZGV4XCJcbiAgICAgICAgICBbdGVtcGxhdGVzXT1cInRlbXBsYXRlc1wiXG4gICAgICAgID48L3RyZWUtbm9kZS13cmFwcGVyPlxuXG4gICAgICAgIDx0cmVlLW5vZGUtY2hpbGRyZW5cbiAgICAgICAgICBbbm9kZV09XCJub2RlXCJcbiAgICAgICAgICBbdGVtcGxhdGVzXT1cInRlbXBsYXRlc1wiXG4gICAgICAgID48L3RyZWUtbm9kZS1jaGlsZHJlbj5cbiAgICAgICAgPHRyZWUtbm9kZS1kcm9wLXNsb3RcbiAgICAgICAgICBbZHJvcEluZGV4XT1cIm5vZGUuaW5kZXggKyAxXCJcbiAgICAgICAgICBbbm9kZV09XCJub2RlLnBhcmVudFwiXG4gICAgICAgID48L3RyZWUtbm9kZS1kcm9wLXNsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGVzLnRyZWVOb2RlRnVsbFRlbXBsYXRlXCJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgICAkaW1wbGljaXQ6IG5vZGUsXG4gICAgICAgICAgbm9kZTogbm9kZSxcbiAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgdGVtcGxhdGVzOiB0ZW1wbGF0ZXNcbiAgICAgICAgfVwiXG4gICAgICA+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBUcmVlTm9kZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG5vZGU6IFRyZWVOb2RlO1xuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSB0ZW1wbGF0ZXM6IGFueTtcbn1cbiJdfQ==

/***/ }),

/***/ "cq/+":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "mc0g");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "cvCv":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "dD9F":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "NykK"),
    isLength = __webpack_require__(/*! ./isLength */ "shjB"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "ExA7");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "dTAl":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "GoyQ");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "dt0z":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "zoYe");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "e4Nc":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "fGT3"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "k+1r"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "JHgL"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "pSRY"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "H8j4");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "e5cp":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "fmRc"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "or5M"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "HDyB"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "seXi"),
    getTag = __webpack_require__(/*! ./_getTag */ "QqLw"),
    isArray = __webpack_require__(/*! ./isArray */ "Z0cm"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "DSRE"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "c6wG");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "eUgh":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "ebwN":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "Cwc5"),
    root = __webpack_require__(/*! ./_root */ "Kz5y");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "ekgI":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "YESw");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "etd4":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/components/tree-node-wrapper.component.js ***!
  \*********************************************************************************************************/
/*! exports provided: TreeNodeWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeWrapperComponent", function() { return TreeNodeWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tree_node_expander_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree-node-expander.component */ "JQxX");
/* harmony import */ var _directives_tree_drag_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directives/tree-drag.directive */ "wCVY");
/* harmony import */ var _directives_tree_drop_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directives/tree-drop.directive */ "Jkoo");
/* harmony import */ var _tree_node_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tree-node-content.component */ "OF5B");
/* harmony import */ var _tree_node_checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tree-node-checkbox.component */ "QPK0");
/* harmony import */ var _models_tree_node_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/tree-node.model */ "kJLP");








function TreeNodeWrapperComponent_div_0_tree_node_checkbox_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tree-node-checkbox", 4);
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", ctx_r1.node);
} }
function TreeNodeWrapperComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeNodeWrapperComponent_div_0_tree_node_checkbox_1_Template, 1, 1, "tree-node-checkbox", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tree-node-expander", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeNodeWrapperComponent_div_0_Template_div_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.node.mouseAction("click", $event); })("dblclick", function TreeNodeWrapperComponent_div_0_Template_div_dblclick_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.node.mouseAction("dblClick", $event); })("mouseover", function TreeNodeWrapperComponent_div_0_Template_div_mouseover_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.node.mouseAction("mouseOver", $event); })("mouseout", function TreeNodeWrapperComponent_div_0_Template_div_mouseout_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.node.mouseAction("mouseOut", $event); })("contextmenu", function TreeNodeWrapperComponent_div_0_Template_div_contextmenu_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.node.mouseAction("contextMenu", $event); })("treeDrop", function TreeNodeWrapperComponent_div_0_Template_div_treeDrop_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.node.onDrop($event); })("treeDropDragOver", function TreeNodeWrapperComponent_div_0_Template_div_treeDropDragOver_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.node.mouseAction("dragOver", $event); })("treeDropDragLeave", function TreeNodeWrapperComponent_div_0_Template_div_treeDropDragLeave_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.node.mouseAction("dragLeave", $event); })("treeDropDragEnter", function TreeNodeWrapperComponent_div_0_Template_div_treeDropDragEnter_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.node.mouseAction("dragEnter", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tree-node-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-left", ctx_r0.node.getNodePadding());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.node.options.useCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", ctx_r0.node);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("node-content-wrapper-active", ctx_r0.node.isActive)("node-content-wrapper-focused", ctx_r0.node.isFocused);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("treeAllowDrop", ctx_r0.node.allowDrop)("allowDragoverStyling", ctx_r0.node.allowDragoverStyling())("treeDrag", ctx_r0.node)("treeDragEnabled", ctx_r0.node.allowDrag());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", ctx_r0.node)("index", ctx_r0.index)("template", ctx_r0.templates.treeNodeTemplate);
} }
var _c0 = function (a0, a1, a2, a3) { return { $implicit: a0, node: a1, index: a2, templates: a3 }; };
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeNodeWrapperComponent = /** @class */ (function () {
    function TreeNodeWrapperComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_tree_node_model__WEBPACK_IMPORTED_MODULE_7__["TreeNode"])
    ], TreeNodeWrapperComponent.prototype, "node", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TreeNodeWrapperComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TreeNodeWrapperComponent.prototype, "templates", void 0);
    TreeNodeWrapperComponent = __decorate([ __metadata("design:paramtypes", [])
    ], TreeNodeWrapperComponent);
TreeNodeWrapperComponent.ɵfac = function TreeNodeWrapperComponent_Factory(t) { return new (t || TreeNodeWrapperComponent)(); };
TreeNodeWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeNodeWrapperComponent, selectors: [["tree-node-wrapper"]], inputs: { node: "node", index: "index", templates: "templates" }, decls: 2, vars: 8, consts: [["class", "node-wrapper", 3, "padding-left", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "node-wrapper"], [3, "node", 4, "ngIf"], [3, "node"], [1, "node-content-wrapper", 3, "treeAllowDrop", "allowDragoverStyling", "treeDrag", "treeDragEnabled", "click", "dblclick", "mouseover", "mouseout", "contextmenu", "treeDrop", "treeDropDragOver", "treeDropDragLeave", "treeDropDragEnter"], [3, "node", "index", "template"]], template: function TreeNodeWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeNodeWrapperComponent_div_0_Template, 5, 15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.templates.treeNodeWrapperTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.templates.treeNodeWrapperTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](3, _c0, ctx.node, ctx.node, ctx.index, ctx.templates));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _tree_node_expander_component__WEBPACK_IMPORTED_MODULE_2__["TreeNodeExpanderComponent"], _directives_tree_drag_directive__WEBPACK_IMPORTED_MODULE_3__["TreeDragDirective"], _directives_tree_drop_directive__WEBPACK_IMPORTED_MODULE_4__["TreeDropDirective"], _tree_node_content_component__WEBPACK_IMPORTED_MODULE_5__["TreeNodeContent"], _tree_node_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["TreeNodeCheckboxComponent"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeNodeWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tree-node-wrapper',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [],
                template: "\n      <div *ngIf=\"!templates.treeNodeWrapperTemplate\" class=\"node-wrapper\" [style.padding-left]=\"node.getNodePadding()\">\n          <tree-node-checkbox *ngIf=\"node.options.useCheckbox\" [node]=\"node\"></tree-node-checkbox>\n          <tree-node-expander [node]=\"node\"></tree-node-expander>\n          <div class=\"node-content-wrapper\"\n               [class.node-content-wrapper-active]=\"node.isActive\"\n               [class.node-content-wrapper-focused]=\"node.isFocused\"\n               (click)=\"node.mouseAction('click', $event)\"\n               (dblclick)=\"node.mouseAction('dblClick', $event)\"\n               (mouseover)=\"node.mouseAction('mouseOver', $event)\"\n               (mouseout)=\"node.mouseAction('mouseOut', $event)\"\n               (contextmenu)=\"node.mouseAction('contextMenu', $event)\"\n               (treeDrop)=\"node.onDrop($event)\"\n               (treeDropDragOver)=\"node.mouseAction('dragOver', $event)\"\n               (treeDropDragLeave)=\"node.mouseAction('dragLeave', $event)\"\n               (treeDropDragEnter)=\"node.mouseAction('dragEnter', $event)\"\n               [treeAllowDrop]=\"node.allowDrop\"\n               [allowDragoverStyling]=\"node.allowDragoverStyling()\"\n               [treeDrag]=\"node\"\n               [treeDragEnabled]=\"node.allowDrag()\">\n\n              <tree-node-content [node]=\"node\" [index]=\"index\" [template]=\"templates.treeNodeTemplate\">\n              </tree-node-content>\n          </div>\n      </div>\n      <ng-container\n              [ngTemplateOutlet]=\"templates.treeNodeWrapperTemplate\"\n              [ngTemplateOutletContext]=\"{ $implicit: node, node: node, index: index, templates: templates }\">\n      </ng-container>\n  "
            }]
    }], function () { return []; }, { node: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return TreeNodeWrapperComponent;
}());


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLXdyYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50cy90cmVlLW5vZGUtd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFHLEtBQUssRUFBRyxpQkFBaUIsRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBc0NyRDtBQUVtQixJQUlqQjtBQUlhLElBSGIsQ0FBQztBQUNILElBTlc7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBRSxrQ0FBSyxRQUFRO0FBQ3pCLDBEQUQwQjtBQUN6QixJQUFVO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUU7QUFHWiwyREFIeUI7QUFDeEIsSUFBVTtBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFFO0FBTVgsK0RBTnlCO0FBRTFCLElBTmEsd0JBQXdCLHdCQXBDcEMsU0FBUyxDQUFDLGNBQ1QsakNBbUNLO0lBbkNHLEVBQUUsbUJBQW1CLHpCQXFDNUIsT0FGVSx3QkFBd0IsQ0FTcEM7S0EzQ0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksY0FDckMsTUFBTSxFQUFFLEVBQUUsY0FDVixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztNQTZCVCxVQUNGLENBQUM7Ozs7Ozs7O29CQVlGO0FBQUMsSUFERCwrQkFBQztBQUNBLENBREEsQUFURCxJQVNDO0FBQ0QsU0FWYSx3QkFBd0I7QUFFckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgLCBJbnB1dCAsIFZpZXdFbmNhcHN1bGF0aW9uICwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZWUtbm9kZS13cmFwcGVyJyAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUgLFxuICBzdHlsZXM6IFtdICxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgKm5nSWY9XCIhdGVtcGxhdGVzLnRyZWVOb2RlV3JhcHBlclRlbXBsYXRlXCIgY2xhc3M9XCJub2RlLXdyYXBwZXJcIiBbc3R5bGUucGFkZGluZy1sZWZ0XT1cIm5vZGUuZ2V0Tm9kZVBhZGRpbmcoKVwiPlxuICAgICAgICAgIDx0cmVlLW5vZGUtY2hlY2tib3ggKm5nSWY9XCJub2RlLm9wdGlvbnMudXNlQ2hlY2tib3hcIiBbbm9kZV09XCJub2RlXCI+PC90cmVlLW5vZGUtY2hlY2tib3g+XG4gICAgICAgICAgPHRyZWUtbm9kZS1leHBhbmRlciBbbm9kZV09XCJub2RlXCI+PC90cmVlLW5vZGUtZXhwYW5kZXI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5vZGUtY29udGVudC13cmFwcGVyXCJcbiAgICAgICAgICAgICAgIFtjbGFzcy5ub2RlLWNvbnRlbnQtd3JhcHBlci1hY3RpdmVdPVwibm9kZS5pc0FjdGl2ZVwiXG4gICAgICAgICAgICAgICBbY2xhc3Mubm9kZS1jb250ZW50LXdyYXBwZXItZm9jdXNlZF09XCJub2RlLmlzRm9jdXNlZFwiXG4gICAgICAgICAgICAgICAoY2xpY2spPVwibm9kZS5tb3VzZUFjdGlvbignY2xpY2snLCAkZXZlbnQpXCJcbiAgICAgICAgICAgICAgIChkYmxjbGljayk9XCJub2RlLm1vdXNlQWN0aW9uKCdkYmxDbGljaycsICRldmVudClcIlxuICAgICAgICAgICAgICAgKG1vdXNlb3Zlcik9XCJub2RlLm1vdXNlQWN0aW9uKCdtb3VzZU92ZXInLCAkZXZlbnQpXCJcbiAgICAgICAgICAgICAgIChtb3VzZW91dCk9XCJub2RlLm1vdXNlQWN0aW9uKCdtb3VzZU91dCcsICRldmVudClcIlxuICAgICAgICAgICAgICAgKGNvbnRleHRtZW51KT1cIm5vZGUubW91c2VBY3Rpb24oJ2NvbnRleHRNZW51JywgJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAodHJlZURyb3ApPVwibm9kZS5vbkRyb3AoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAodHJlZURyb3BEcmFnT3Zlcik9XCJub2RlLm1vdXNlQWN0aW9uKCdkcmFnT3ZlcicsICRldmVudClcIlxuICAgICAgICAgICAgICAgKHRyZWVEcm9wRHJhZ0xlYXZlKT1cIm5vZGUubW91c2VBY3Rpb24oJ2RyYWdMZWF2ZScsICRldmVudClcIlxuICAgICAgICAgICAgICAgKHRyZWVEcm9wRHJhZ0VudGVyKT1cIm5vZGUubW91c2VBY3Rpb24oJ2RyYWdFbnRlcicsICRldmVudClcIlxuICAgICAgICAgICAgICAgW3RyZWVBbGxvd0Ryb3BdPVwibm9kZS5hbGxvd0Ryb3BcIlxuICAgICAgICAgICAgICAgW2FsbG93RHJhZ292ZXJTdHlsaW5nXT1cIm5vZGUuYWxsb3dEcmFnb3ZlclN0eWxpbmcoKVwiXG4gICAgICAgICAgICAgICBbdHJlZURyYWddPVwibm9kZVwiXG4gICAgICAgICAgICAgICBbdHJlZURyYWdFbmFibGVkXT1cIm5vZGUuYWxsb3dEcmFnKClcIj5cblxuICAgICAgICAgICAgICA8dHJlZS1ub2RlLWNvbnRlbnQgW25vZGVdPVwibm9kZVwiIFtpbmRleF09XCJpbmRleFwiIFt0ZW1wbGF0ZV09XCJ0ZW1wbGF0ZXMudHJlZU5vZGVUZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICA8L3RyZWUtbm9kZS1jb250ZW50PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRlbXBsYXRlcy50cmVlTm9kZVdyYXBwZXJUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogbm9kZSwgbm9kZTogbm9kZSwgaW5kZXg6IGluZGV4LCB0ZW1wbGF0ZXM6IHRlbXBsYXRlcyB9XCI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlV3JhcHBlckNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgbm9kZTogVHJlZU5vZGU7XG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIHRlbXBsYXRlczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbn1cbiJdfQ==

/***/ }),

/***/ "fGT3":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "4kuk"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "Xi7e"),
    Map = __webpack_require__(/*! ./_Map */ "ebwN");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "fR/l":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "CH3K"),
    isArray = __webpack_require__(/*! ./isArray */ "Z0cm");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "fmRc":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "Xi7e"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "77Zs"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "L8xA"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "gCq4"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "VaNO"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "0Cz8");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "ftKO":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "gCq4":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "gFfm":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "gpbi":
/*!****************************************!*\
  !*** ./node_modules/lodash/_parent.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "ZWtO"),
    baseSlice = __webpack_require__(/*! ./_baseSlice */ "KxBF");

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),

/***/ "heNW":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "hgQt":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "Juji"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "4sDh");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "hypo":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "O0oS");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "idmN":
/*!********************************************!*\
  !*** ./node_modules/lodash/_basePickBy.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "ZWtO"),
    baseSet = __webpack_require__(/*! ./_baseSet */ "FZoo"),
    castPath = __webpack_require__(/*! ./_castPath */ "4uTw");

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),

/***/ "ijCd":
/*!*****************************************!*\
  !*** ./node_modules/lodash/includes.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "R/W3"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "MMmD"),
    isString = __webpack_require__(/*! ./isString */ "4qC0"),
    toInteger = __webpack_require__(/*! ./toInteger */ "Sxd8"),
    values = __webpack_require__(/*! ./values */ "P/G1");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

module.exports = includes;


/***/ }),

/***/ "itsj":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_safeGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _skeleton_item_skeleton_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skeleton-item/skeleton-item */ "1AwP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_skeleton_item_skeleton_item__WEBPACK_IMPORTED_MODULE_3__["SkeletonItemComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]],
        exports: [_skeleton_item_skeleton_item__WEBPACK_IMPORTED_MODULE_3__["SkeletonItemComponent"]]
    })
], ComponentsModule);



/***/ }),

/***/ "jXQH":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "TO8r");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "jbLY":
/*!***********************************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/components/loading.component.js ***!
  \***********************************************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _models_tree_node_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/tree-node.model */ "kJLP");



function LoadingComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = function (a0) { return { $implicit: a0 }; };
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], LoadingComponent.prototype, "template", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_tree_node_model__WEBPACK_IMPORTED_MODULE_2__["TreeNode"])
    ], LoadingComponent.prototype, "node", void 0);
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["tree-loading-component"]], inputs: { template: "template", node: "node" }, decls: 2, vars: 5, consts: [[4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoadingComponent_span_0_Template, 2, 0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.node));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                selector: 'tree-loading-component',
                template: "\n    <span *ngIf=\"!template\">loading...</span>\n    <ng-container\n      [ngTemplateOutlet]=\"template\"\n      [ngTemplateOutletContext]=\"{ $implicit: node }\">\n    </ng-container>\n  "
            }]
    }], function () { return []; }, { template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], node: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return LoadingComponent;
}());


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL2xvYWRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFhckQ7QUFDb0IsSUFEcEI7QUFBOEIsSUFHOUIsQ0FBQztBQUNELElBSFc7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBRSxrQ0FBUyxXQUFXO0FBQUUsc0RBQUk7QUFDckMsSUFBVTtBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFFLGtDQUFLLFFBQVE7QUFDekIsa0RBRDBCO0lBRmIsZ0JBQWdCLHdCQVg1QixTQUFTLENBQUMsY0FDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUM7Q0FBSSxjQUNyQyxRQUFRLEVBQUUsd0JBQXdCLGNBQ2xDLFFBQVEsRUFBRSxnTUFNVCxXQUNGLENBQUMsUUFDVyxnQkFBZ0IsQ0FHNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELHVCQUFDO0FBQ0EsQ0FEQSxBQUhELElBR0M7QUFDRCxTQUphLGdCQUFnQjtBQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1ub2RlLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAndHJlZS1sb2FkaW5nLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gKm5nSWY9XCIhdGVtcGxhdGVcIj5sb2FkaW5nLi4uPC9zcGFuPlxuICAgIDxuZy1jb250YWluZXJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogbm9kZSB9XCI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdDb21wb25lbnQge1xuICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgbm9kZTogVHJlZU5vZGU7XG59XG4iXX0=

/***/ }),

/***/ "jeLo":
/*!**********************************************!*\
  !*** ./node_modules/lodash/toPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "juv8"),
    keysIn = __webpack_require__(/*! ./keysIn */ "mTTR");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ "juv8":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "MrPd"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "hypo");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "k+1r":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "QkVE");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "kJLP":
/*!*****************************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/models/tree-node.model.js ***!
  \*****************************************************************************************/
/*! exports provided: TreeNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return TreeNode; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "2vnA");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/events */ "EHVX");
/* harmony import */ var lodash_first__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/first */ "afOK");
/* harmony import */ var lodash_first__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_first__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/last */ "RBan");
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/some */ "MJIl");
/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_some__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_every__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/every */ "Jlc5");
/* harmony import */ var lodash_every__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_every__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TreeNode = /** @class */ (function () {
    function TreeNode(data, parent, treeModel, index) {
        var _this = this;
        this.data = data;
        this.parent = parent;
        this.treeModel = treeModel;
        this.position = 0;
        this.allowDrop = function (element, $event) {
            return _this.options.allowDrop(element, { parent: _this, index: 0 }, $event);
        };
        this.allowDragoverStyling = function () {
            return _this.options.allowDragoverStyling;
        };
        if (this.id === undefined || this.id === null) {
            this.id = uuid();
        } // Make sure there's a unique id without overriding existing ids to work with immutable data structures
        this.index = index;
        if (this.getField('children')) {
            this._initChildren();
        }
        this.autoLoadChildren();
    }
    Object.defineProperty(TreeNode.prototype, "isHidden", {
        get: function () { return this.treeModel.isHidden(this); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeNode.prototype, "isExpanded", {
        get: function () { return this.treeModel.isExpanded(this); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeNode.prototype, "isActive", {
        get: function () { return this.treeModel.isActive(this); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeNode.prototype, "isFocused", {
        get: function () { return this.treeModel.isNodeFocused(this); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeNode.prototype, "isSelected", {
        get: function () {
            if (this.isSelectable()) {
                return this.treeModel.isSelected(this);
            }
            else {
                return lodash_some__WEBPACK_IMPORTED_MODULE_4___default()(this.children, function (node) { return node.isSelected; });
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeNode.prototype, "isAllSelected", {
        get: function () {
            if (this.isSelectable()) {
                return this.treeModel.isSelected(this);
            }
            else {
                return lodash_every__WEBPACK_IMPORTED_MODULE_5___default()(this.children, function (node) { return node.isAllSelected; });
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeNode.prototype, "isPartiallySelected", {
        get: function () {
            return this.isSelected && !this.isAllSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "level", {
        get: function () {
            return this.parent ? this.parent.level + 1 : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "path", {
        get: function () {
            return this.parent ? this.parent.path.concat([this.id]) : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "elementRef", {
        get: function () {
            throw "Element Ref is no longer supported since introducing virtual scroll\n\n      You may use a template to obtain a reference to the element";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "originalNode", {
        get: function () { return this._originalNode; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeNode.prototype, "hasChildren", {
        // helper get functions:
        get: function () {
            return !!(this.getField('hasChildren') || (this.children && this.children.length > 0));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "isCollapsed", {
        get: function () { return !this.isExpanded; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "isLeaf", {
        get: function () { return !this.hasChildren; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "isRoot", {
        get: function () { return this.parent.data.virtual; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "realParent", {
        get: function () { return this.isRoot ? null : this.parent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "options", {
        // proxy functions:
        get: function () { return this.treeModel.options; },
        enumerable: true,
        configurable: true
    });
    TreeNode.prototype.fireEvent = function (event) { this.treeModel.fireEvent(event); };
    Object.defineProperty(TreeNode.prototype, "displayField", {
        // field accessors:
        get: function () {
            return this.getField('display');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "id", {
        get: function () {
            return this.getField('id');
        },
        set: function (value) {
            this.setField('id', value);
        },
        enumerable: true,
        configurable: true
    });
    TreeNode.prototype.getField = function (key) {
        return this.data[this.options[key + "Field"]];
    };
    TreeNode.prototype.setField = function (key, value) {
        this.data[this.options[key + "Field"]] = value;
    };
    // traversing:
    TreeNode.prototype._findAdjacentSibling = function (steps, skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        var siblings = this._getParentsChildren(skipHidden);
        var index = siblings.indexOf(this);
        return siblings.length > index + steps ? siblings[index + steps] : null;
    };
    TreeNode.prototype.findNextSibling = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        return this._findAdjacentSibling(+1, skipHidden);
    };
    TreeNode.prototype.findPreviousSibling = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        return this._findAdjacentSibling(-1, skipHidden);
    };
    TreeNode.prototype.getVisibleChildren = function () {
        return this.visibleChildren;
    };
    Object.defineProperty(TreeNode.prototype, "visibleChildren", {
        get: function () {
            return (this.children || []).filter(function (node) { return !node.isHidden; });
        },
        enumerable: true,
        configurable: true
    });
    TreeNode.prototype.getFirstChild = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        var children = skipHidden ? this.visibleChildren : this.children;
        return lodash_first__WEBPACK_IMPORTED_MODULE_2___default()(children || []);
    };
    TreeNode.prototype.getLastChild = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        var children = skipHidden ? this.visibleChildren : this.children;
        return lodash_last__WEBPACK_IMPORTED_MODULE_3___default()(children || []);
    };
    TreeNode.prototype.findNextNode = function (goInside, skipHidden) {
        if (goInside === void 0) { goInside = true; }
        if (skipHidden === void 0) { skipHidden = false; }
        return goInside && this.isExpanded && this.getFirstChild(skipHidden) ||
            this.findNextSibling(skipHidden) ||
            this.parent && this.parent.findNextNode(false, skipHidden);
    };
    TreeNode.prototype.findPreviousNode = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        var previousSibling = this.findPreviousSibling(skipHidden);
        if (!previousSibling) {
            return this.realParent;
        }
        return previousSibling._getLastOpenDescendant(skipHidden);
    };
    TreeNode.prototype._getLastOpenDescendant = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        var lastChild = this.getLastChild(skipHidden);
        return (this.isCollapsed || !lastChild)
            ? this
            : lastChild._getLastOpenDescendant(skipHidden);
    };
    TreeNode.prototype._getParentsChildren = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        var children = this.parent &&
            (skipHidden ? this.parent.getVisibleChildren() : this.parent.children);
        return children || [];
    };
    TreeNode.prototype.getIndexInParent = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        return this._getParentsChildren(skipHidden).indexOf(this);
    };
    TreeNode.prototype.isDescendantOf = function (node) {
        if (this === node)
            return true;
        else
            return this.parent && this.parent.isDescendantOf(node);
    };
    TreeNode.prototype.getNodePadding = function () {
        return this.options.levelPadding * (this.level - 1) + 'px';
    };
    TreeNode.prototype.getClass = function () {
        return [this.options.nodeClass(this), "tree-node-level-" + this.level].join(' ');
    };
    TreeNode.prototype.onDrop = function ($event) {
        this.mouseAction('drop', $event.event, {
            from: $event.element,
            to: { parent: this, index: 0, dropOnNode: true }
        });
    };
    TreeNode.prototype.allowDrag = function () {
        return this.options.allowDrag(this);
    };
    // helper methods:
    TreeNode.prototype.loadNodeChildren = function () {
        var _this = this;
        if (!this.options.getChildren) {
            return Promise.resolve(); // Not getChildren method - for using redux
        }
        return Promise.resolve(this.options.getChildren(this))
            .then(function (children) {
            if (children) {
                _this.setField('children', children);
                _this._initChildren();
                if (_this.options.useTriState && _this.treeModel.isSelected(_this)) {
                    _this.setIsSelected(true);
                }
                _this.children.forEach(function (child) {
                    if (child.getField('isExpanded') && child.hasChildren) {
                        child.expand();
                    }
                });
            }
        }).then(function () {
            _this.fireEvent({
                eventName: _constants_events__WEBPACK_IMPORTED_MODULE_1__["TREE_EVENTS"].loadNodeChildren,
                node: _this
            });
        });
    };
    TreeNode.prototype.expand = function () {
        if (!this.isExpanded) {
            this.toggleExpanded();
        }
        return this;
    };
    TreeNode.prototype.collapse = function () {
        if (this.isExpanded) {
            this.toggleExpanded();
        }
        return this;
    };
    TreeNode.prototype.doForAll = function (fn) {
        var _this = this;
        Promise.resolve(fn(this)).then(function () {
            if (_this.children) {
                _this.children.forEach(function (child) { return child.doForAll(fn); });
            }
        });
    };
    TreeNode.prototype.expandAll = function () {
        this.doForAll(function (node) { return node.expand(); });
    };
    TreeNode.prototype.collapseAll = function () {
        this.doForAll(function (node) { return node.collapse(); });
    };
    TreeNode.prototype.ensureVisible = function () {
        if (this.realParent) {
            this.realParent.expand();
            this.realParent.ensureVisible();
        }
        return this;
    };
    TreeNode.prototype.toggleExpanded = function () {
        this.setIsExpanded(!this.isExpanded);
        return this;
    };
    TreeNode.prototype.setIsExpanded = function (value) {
        if (this.hasChildren) {
            this.treeModel.setExpandedNode(this, value);
        }
        return this;
    };
    ;
    TreeNode.prototype.autoLoadChildren = function () {
        var _this = this;
        this.handler =
            Object(mobx__WEBPACK_IMPORTED_MODULE_0__["reaction"])(function () { return _this.isExpanded; }, function (isExpanded) {
                if (!_this.children && _this.hasChildren && isExpanded) {
                    _this.loadNodeChildren();
                }
            }, { fireImmediately: true });
    };
    TreeNode.prototype.dispose = function () {
        if (this.children) {
            this.children.forEach(function (child) { return child.dispose(); });
        }
        if (this.handler) {
            this.handler();
        }
        this.parent = null;
        this.children = null;
    };
    TreeNode.prototype.setIsActive = function (value, multi) {
        if (multi === void 0) { multi = false; }
        this.treeModel.setActiveNode(this, value, multi);
        if (value) {
            this.focus(this.options.scrollOnActivate);
        }
        return this;
    };
    TreeNode.prototype.isSelectable = function () {
        return this.isLeaf || !this.children || !this.options.useTriState;
    };
    TreeNode.prototype.setIsSelected = function (value) {
        if (this.isSelectable()) {
            this.treeModel.setSelectedNode(this, value);
        }
        else {
            this.visibleChildren.forEach(function (child) { return child.setIsSelected(value); });
        }
        return this;
    };
    TreeNode.prototype.toggleSelected = function () {
        this.setIsSelected(!this.isSelected);
        return this;
    };
    TreeNode.prototype.toggleActivated = function (multi) {
        if (multi === void 0) { multi = false; }
        this.setIsActive(!this.isActive, multi);
        return this;
    };
    TreeNode.prototype.setActiveAndVisible = function (multi) {
        if (multi === void 0) { multi = false; }
        this.setIsActive(true, multi)
            .ensureVisible();
        setTimeout(this.scrollIntoView.bind(this));
        return this;
    };
    TreeNode.prototype.scrollIntoView = function (force) {
        if (force === void 0) { force = false; }
        this.treeModel.virtualScroll.scrollIntoView(this, force);
    };
    TreeNode.prototype.focus = function (scroll) {
        if (scroll === void 0) { scroll = true; }
        var previousNode = this.treeModel.getFocusedNode();
        this.treeModel.setFocusedNode(this);
        if (scroll) {
            this.scrollIntoView();
        }
        if (previousNode) {
            this.fireEvent({ eventName: _constants_events__WEBPACK_IMPORTED_MODULE_1__["TREE_EVENTS"].blur, node: previousNode });
        }
        this.fireEvent({ eventName: _constants_events__WEBPACK_IMPORTED_MODULE_1__["TREE_EVENTS"].focus, node: this });
        return this;
    };
    TreeNode.prototype.blur = function () {
        var previousNode = this.treeModel.getFocusedNode();
        this.treeModel.setFocusedNode(null);
        if (previousNode) {
            this.fireEvent({ eventName: _constants_events__WEBPACK_IMPORTED_MODULE_1__["TREE_EVENTS"].blur, node: this });
        }
        return this;
    };
    TreeNode.prototype.setIsHidden = function (value) {
        this.treeModel.setIsHidden(this, value);
    };
    TreeNode.prototype.hide = function () {
        this.setIsHidden(true);
    };
    TreeNode.prototype.show = function () {
        this.setIsHidden(false);
    };
    TreeNode.prototype.mouseAction = function (actionName, $event, data) {
        if (data === void 0) { data = null; }
        this.treeModel.setFocus(true);
        var actionMapping = this.options.actionMapping.mouse;
        var action = actionMapping[actionName];
        if (action) {
            action(this.treeModel, this, $event, data);
        }
    };
    TreeNode.prototype.getSelfHeight = function () {
        return this.options.nodeHeight(this);
    };
    TreeNode.prototype._initChildren = function () {
        var _this = this;
        this.children = this.getField('children')
            .map(function (c, index) { return new TreeNode(c, _this, _this.treeModel, index); });
    };
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["computed"],
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeNode.prototype, "isHidden", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["computed"],
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeNode.prototype, "isExpanded", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["computed"],
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeNode.prototype, "isActive", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["computed"],
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeNode.prototype, "isFocused", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["computed"],
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeNode.prototype, "isSelected", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["computed"],
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeNode.prototype, "isAllSelected", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["computed"],
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeNode.prototype, "isPartiallySelected", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["observable"],
        __metadata("design:type", Array)
    ], TreeNode.prototype, "children", void 0);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["observable"],
        __metadata("design:type", Number)
    ], TreeNode.prototype, "index", void 0);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["observable"],
        __metadata("design:type", Object)
    ], TreeNode.prototype, "position", void 0);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["observable"],
        __metadata("design:type", Number)
    ], TreeNode.prototype, "height", void 0);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["computed"],
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], TreeNode.prototype, "level", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["computed"],
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [])
    ], TreeNode.prototype, "path", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["computed"],
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeNode.prototype, "visibleChildren", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeNode.prototype, "setIsSelected", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_0__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeNode.prototype, "_initChildren", null);
    return TreeNode;
}());

function uuid() {
    return Math.floor(Math.random() * 10000000000000);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL21vZGVscy90cmVlLW5vZGUubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFXLE1BQU0sRUFBcUIsTUFBTSxNQUFNLENBQUM7QUFJMUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWxELE9BQU8sS0FBSyxNQUFNLGNBQWMsQ0FBQztBQUNqQyxPQUFPLElBQUksTUFBTSxhQUFhLENBQUM7QUFDL0IsT0FBTyxJQUFJLE1BQU0sYUFBYSxDQUFDO0FBQy9CLE9BQU8sS0FBSyxNQUFNLGNBQWMsQ0FBQztBQUVqQztJQTJDRSxrQkFBbUIsSUFBUyxFQUFTLE1BQWdCLEVBQVMsU0FBb0IsRUFBRSxLQUFhO1FBQWpHLGlCQVVDO1FBVmtCLFNBQUksR0FBSixJQUFJLENBQUs7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQWpCdEUsYUFBUSxHQUFHLENBQUMsQ0FBQztRQXVKekIsY0FBUyxHQUFHLFVBQUMsT0FBTyxFQUFFLE1BQU87WUFDM0IsT0FBTyxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3RSxDQUFDLENBQUE7UUFFRCx5QkFBb0IsR0FBRztZQUNyQixPQUFPLEtBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUM7UUFDM0MsQ0FBQyxDQUFBO1FBM0lDLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDN0MsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLEVBQUUs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aURBR047SUFDSCxlQUFDO0NBQUEsQUE5WUQsSUE4WUM7U0E5WVksUUFBUTtBQWdackIsU0FBUyxJQUFJO0lBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxjQUFjLENBQUMsQ0FBQztBQUNwRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIHJlYWN0aW9uLCBhdXRvcnVuLCBhY3Rpb24sIElSZWFjdGlvbkRpc3Bvc2VyIH0gZnJvbSAnbW9ieCc7XG5pbXBvcnQgeyBUcmVlTW9kZWwgfSBmcm9tICcuL3RyZWUubW9kZWwnO1xuaW1wb3J0IHsgVHJlZU9wdGlvbnMgfSBmcm9tICcuL3RyZWUtb3B0aW9ucy5tb2RlbCc7XG5pbXBvcnQgeyBJVHJlZU5vZGUgfSBmcm9tICcuLi9kZWZzL2FwaSc7XG5pbXBvcnQgeyBUUkVFX0VWRU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9ldmVudHMnO1xuXG5pbXBvcnQgZmlyc3QgZnJvbSAnbG9kYXNoL2ZpcnN0JztcbmltcG9ydCBsYXN0IGZyb20gJ2xvZGFzaC9sYXN0JztcbmltcG9ydCBzb21lIGZyb20gJ2xvZGFzaC9zb21lJztcbmltcG9ydCBldmVyeSBmcm9tICdsb2Rhc2gvZXZlcnknO1xuXG5leHBvcnQgY2xhc3MgVHJlZU5vZGUgaW1wbGVtZW50cyBJVHJlZU5vZGUge1xuICBwcml2YXRlIGhhbmRsZXI6IElSZWFjdGlvbkRpc3Bvc2VyO1xuICBAY29tcHV0ZWQgZ2V0IGlzSGlkZGVuKCkgeyByZXR1cm4gdGhpcy50cmVlTW9kZWwuaXNIaWRkZW4odGhpcyk7IH07XG4gIEBjb21wdXRlZCBnZXQgaXNFeHBhbmRlZCgpIHsgcmV0dXJuIHRoaXMudHJlZU1vZGVsLmlzRXhwYW5kZWQodGhpcyk7IH07XG4gIEBjb21wdXRlZCBnZXQgaXNBY3RpdmUoKSB7IHJldHVybiB0aGlzLnRyZWVNb2RlbC5pc0FjdGl2ZSh0aGlzKTsgfTtcbiAgQGNvbXB1dGVkIGdldCBpc0ZvY3VzZWQoKSB7IHJldHVybiB0aGlzLnRyZWVNb2RlbC5pc05vZGVGb2N1c2VkKHRoaXMpOyB9O1xuICBAY29tcHV0ZWQgZ2V0IGlzU2VsZWN0ZWQoKSB7XG4gICAgaWYgKHRoaXMuaXNTZWxlY3RhYmxlKCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJlZU1vZGVsLmlzU2VsZWN0ZWQodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzb21lKHRoaXMuY2hpbGRyZW4sIChub2RlOiBUcmVlTm9kZSkgPT4gbm9kZS5pc1NlbGVjdGVkKTtcbiAgICB9XG4gIH07XG4gIEBjb21wdXRlZCBnZXQgaXNBbGxTZWxlY3RlZCgpIHtcbiAgICBpZiAodGhpcy5pc1NlbGVjdGFibGUoKSkge1xuICAgICAgcmV0dXJuIHRoaXMudHJlZU1vZGVsLmlzU2VsZWN0ZWQodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBldmVyeSh0aGlzLmNoaWxkcmVuLCAobm9kZTogVHJlZU5vZGUpID0+IG5vZGUuaXNBbGxTZWxlY3RlZCk7XG4gICAgfVxuICB9O1xuICBAY29tcHV0ZWQgZ2V0IGlzUGFydGlhbGx5U2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZCAmJiAhdGhpcy5pc0FsbFNlbGVjdGVkO1xuICB9XG5cbiAgQG9ic2VydmFibGUgY2hpbGRyZW46IFRyZWVOb2RlW107XG4gIEBvYnNlcnZhYmxlIGluZGV4OiBudW1iZXI7XG4gIEBvYnNlcnZhYmxlIHBvc2l0aW9uID0gMDtcbiAgQG9ic2VydmFibGUgaGVpZ2h0OiBudW1iZXI7XG4gIEBjb21wdXRlZCBnZXQgbGV2ZWwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5sZXZlbCArIDEgOiAwO1xuICB9XG4gIEBjb21wdXRlZCBnZXQgcGF0aCgpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gWy4uLnRoaXMucGFyZW50LnBhdGgsIHRoaXMuaWRdIDogW107XG4gIH1cblxuICBnZXQgZWxlbWVudFJlZigpOiBhbnkge1xuICAgIHRocm93IGBFbGVtZW50IFJlZiBpcyBubyBsb25nZXIgc3VwcG9ydGVkIHNpbmNlIGludHJvZHVjaW5nIHZpcnR1YWwgc2Nyb2xsXFxuXG4gICAgICBZb3UgbWF5IHVzZSBhIHRlbXBsYXRlIHRvIG9idGFpbiBhIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudGA7XG4gIH1cblxuICBwcml2YXRlIF9vcmlnaW5hbE5vZGU6IGFueTtcbiAgZ2V0IG9yaWdpbmFsTm9kZSgpIHsgcmV0dXJuIHRoaXMuX29yaWdpbmFsTm9kZTsgfTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0YTogYW55LCBwdWJsaWMgcGFyZW50OiBUcmVlTm9kZSwgcHVibGljIHRyZWVNb2RlbDogVHJlZU1vZGVsLCBpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuaWQgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmlkID09PSBudWxsKSB7XG4gICAgICB0aGlzLmlkID0gdXVpZCgpO1xuICAgIH0gLy8gTWFrZSBzdXJlIHRoZXJlJ3MgYSB1bmlxdWUgaWQgd2l0aG91dCBvdmVycmlkaW5nIGV4aXN0aW5nIGlkcyB0byB3b3JrIHdpdGggaW1tdXRhYmxlIGRhdGEgc3RydWN0dXJlc1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcblxuICAgIGlmICh0aGlzLmdldEZpZWxkKCdjaGlsZHJlbicpKSB7XG4gICAgICB0aGlzLl9pbml0Q2hpbGRyZW4oKTtcbiAgICB9XG4gICAgdGhpcy5hdXRvTG9hZENoaWxkcmVuKCk7XG4gIH1cblxuICAvLyBoZWxwZXIgZ2V0IGZ1bmN0aW9uczpcbiAgZ2V0IGhhc0NoaWxkcmVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhISh0aGlzLmdldEZpZWxkKCdoYXNDaGlsZHJlbicpIHx8ICh0aGlzLmNoaWxkcmVuICYmIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCkpO1xuICB9XG4gIGdldCBpc0NvbGxhcHNlZCgpOiBib29sZWFuIHsgcmV0dXJuICF0aGlzLmlzRXhwYW5kZWQ7IH1cbiAgZ2V0IGlzTGVhZigpOiBib29sZWFuIHsgcmV0dXJuICF0aGlzLmhhc0NoaWxkcmVuOyB9XG4gIGdldCBpc1Jvb3QoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnBhcmVudC5kYXRhLnZpcnR1YWw7IH1cbiAgZ2V0IHJlYWxQYXJlbnQoKTogVHJlZU5vZGUgeyByZXR1cm4gdGhpcy5pc1Jvb3QgPyBudWxsIDogdGhpcy5wYXJlbnQ7IH1cblxuICAvLyBwcm94eSBmdW5jdGlvbnM6XG4gIGdldCBvcHRpb25zKCk6IFRyZWVPcHRpb25zIHsgcmV0dXJuIHRoaXMudHJlZU1vZGVsLm9wdGlvbnM7IH1cbiAgZmlyZUV2ZW50KGV2ZW50KSB7IHRoaXMudHJlZU1vZGVsLmZpcmVFdmVudChldmVudCk7IH1cblxuICAvLyBmaWVsZCBhY2Nlc3NvcnM6XG4gIGdldCBkaXNwbGF5RmllbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RmllbGQoJ2Rpc3BsYXknKTtcbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRGaWVsZCgnaWQnKTtcbiAgfVxuXG4gIHNldCBpZCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0RmllbGQoJ2lkJywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0RmllbGQoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVt0aGlzLm9wdGlvbnNbYCR7a2V5fUZpZWxkYF1dO1xuICB9XG5cbiAgc2V0RmllbGQoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXMuZGF0YVt0aGlzLm9wdGlvbnNbYCR7a2V5fUZpZWxkYF1dID0gdmFsdWU7XG4gIH1cblxuICAvLyB0cmF2ZXJzaW5nOlxuICBfZmluZEFkamFjZW50U2libGluZyhzdGVwcywgc2tpcEhpZGRlbiA9IGZhbHNlKSB7XG4gICAgY29uc3Qgc2libGluZ3MgPSB0aGlzLl9nZXRQYXJlbnRzQ2hpbGRyZW4oc2tpcEhpZGRlbik7XG4gICAgY29uc3QgaW5kZXggPSBzaWJsaW5ncy5pbmRleE9mKHRoaXMpO1xuXG4gICAgcmV0dXJuIHNpYmxpbmdzLmxlbmd0aCA+IGluZGV4ICsgc3RlcHMgPyBzaWJsaW5nc1tpbmRleCArIHN0ZXBzXSA6IG51bGw7XG4gIH1cblxuICBmaW5kTmV4dFNpYmxpbmcoc2tpcEhpZGRlbiA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbmRBZGphY2VudFNpYmxpbmcoKzEsIHNraXBIaWRkZW4pO1xuICB9XG5cbiAgZmluZFByZXZpb3VzU2libGluZyhza2lwSGlkZGVuID0gZmFsc2UpIHtcbiAgICByZXR1cm4gdGhpcy5fZmluZEFkamFjZW50U2libGluZygtMSwgc2tpcEhpZGRlbik7XG4gIH1cblxuICBnZXRWaXNpYmxlQ2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMudmlzaWJsZUNoaWxkcmVuO1xuICB9XG5cbiAgQGNvbXB1dGVkIGdldCB2aXNpYmxlQ2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuICh0aGlzLmNoaWxkcmVuIHx8IFtdKS5maWx0ZXIoKG5vZGUpID0+ICFub2RlLmlzSGlkZGVuKTtcbiAgfVxuXG4gIGdldEZpcnN0Q2hpbGQoc2tpcEhpZGRlbiA9IGZhbHNlKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gc2tpcEhpZGRlbiA/IHRoaXMudmlzaWJsZUNoaWxkcmVuIDogdGhpcy5jaGlsZHJlbjtcblxuICAgIHJldHVybiBmaXJzdChjaGlsZHJlbiB8fCBbXSk7XG4gIH1cblxuICBnZXRMYXN0Q2hpbGQoc2tpcEhpZGRlbiA9IGZhbHNlKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gc2tpcEhpZGRlbiA/IHRoaXMudmlzaWJsZUNoaWxkcmVuIDogdGhpcy5jaGlsZHJlbjtcblxuICAgIHJldHVybiBsYXN0KGNoaWxkcmVuIHx8IFtdKTtcbiAgfVxuXG4gIGZpbmROZXh0Tm9kZShnb0luc2lkZSA9IHRydWUsIHNraXBIaWRkZW4gPSBmYWxzZSkge1xuICAgIHJldHVybiBnb0luc2lkZSAmJiB0aGlzLmlzRXhwYW5kZWQgJiYgdGhpcy5nZXRGaXJzdENoaWxkKHNraXBIaWRkZW4pIHx8XG4gICAgICAgICAgIHRoaXMuZmluZE5leHRTaWJsaW5nKHNraXBIaWRkZW4pIHx8XG4gICAgICAgICAgIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmZpbmROZXh0Tm9kZShmYWxzZSwgc2tpcEhpZGRlbik7XG4gIH1cblxuICBmaW5kUHJldmlvdXNOb2RlKHNraXBIaWRkZW4gPSBmYWxzZSkge1xuICAgIGxldCBwcmV2aW91c1NpYmxpbmcgPSB0aGlzLmZpbmRQcmV2aW91c1NpYmxpbmcoc2tpcEhpZGRlbik7XG4gICAgaWYgKCFwcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlYWxQYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiBwcmV2aW91c1NpYmxpbmcuX2dldExhc3RPcGVuRGVzY2VuZGFudChza2lwSGlkZGVuKTtcbiAgfVxuXG4gIF9nZXRMYXN0T3BlbkRlc2NlbmRhbnQoc2tpcEhpZGRlbiA9IGZhbHNlKSB7XG4gICAgY29uc3QgbGFzdENoaWxkID0gdGhpcy5nZXRMYXN0Q2hpbGQoc2tpcEhpZGRlbik7XG4gICAgcmV0dXJuICh0aGlzLmlzQ29sbGFwc2VkIHx8ICFsYXN0Q2hpbGQpXG4gICAgICA/IHRoaXNcbiAgICAgIDogbGFzdENoaWxkLl9nZXRMYXN0T3BlbkRlc2NlbmRhbnQoc2tpcEhpZGRlbik7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQYXJlbnRzQ2hpbGRyZW4oc2tpcEhpZGRlbiA9IGZhbHNlKTogYW55W10ge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5wYXJlbnQgJiZcbiAgICAgIChza2lwSGlkZGVuID8gdGhpcy5wYXJlbnQuZ2V0VmlzaWJsZUNoaWxkcmVuKCkgOiB0aGlzLnBhcmVudC5jaGlsZHJlbik7XG5cbiAgICByZXR1cm4gY2hpbGRyZW4gfHwgW107XG4gIH1cblxuICBwcml2YXRlIGdldEluZGV4SW5QYXJlbnQoc2tpcEhpZGRlbiA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldFBhcmVudHNDaGlsZHJlbihza2lwSGlkZGVuKS5pbmRleE9mKHRoaXMpO1xuICB9XG5cbiAgaXNEZXNjZW5kYW50T2Yobm9kZTogVHJlZU5vZGUpIHtcbiAgICBpZiAodGhpcyA9PT0gbm9kZSkgcmV0dXJuIHRydWU7XG4gICAgZWxzZSByZXR1cm4gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaXNEZXNjZW5kYW50T2Yobm9kZSk7XG4gIH1cblxuICBnZXROb2RlUGFkZGluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubGV2ZWxQYWRkaW5nICogKHRoaXMubGV2ZWwgLSAxKSArICdweCc7XG4gIH1cblxuICBnZXRDbGFzcygpOiBzdHJpbmcge1xuICAgIHJldHVybiBbdGhpcy5vcHRpb25zLm5vZGVDbGFzcyh0aGlzKSwgYHRyZWUtbm9kZS1sZXZlbC0keyB0aGlzLmxldmVsIH1gXS5qb2luKCcgJyk7XG4gIH1cblxuICBvbkRyb3AoJGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZUFjdGlvbignZHJvcCcsICRldmVudC5ldmVudCwge1xuICAgICAgZnJvbTogJGV2ZW50LmVsZW1lbnQsXG4gICAgICB0bzogeyBwYXJlbnQ6IHRoaXMsIGluZGV4OiAwLCBkcm9wT25Ob2RlOiB0cnVlIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFsbG93RHJvcCA9IChlbGVtZW50LCAkZXZlbnQ/KSA9PiB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hbGxvd0Ryb3AoZWxlbWVudCwgeyBwYXJlbnQ6IHRoaXMsIGluZGV4OiAwIH0sICRldmVudCk7XG4gIH1cblxuICBhbGxvd0RyYWdvdmVyU3R5bGluZyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmFsbG93RHJhZ292ZXJTdHlsaW5nO1xuICB9XG5cbiAgYWxsb3dEcmFnKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYWxsb3dEcmFnKHRoaXMpO1xuICB9XG5cblxuICAvLyBoZWxwZXIgbWV0aG9kczpcbiAgbG9hZE5vZGVDaGlsZHJlbigpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5nZXRDaGlsZHJlbikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpOyAvLyBOb3QgZ2V0Q2hpbGRyZW4gbWV0aG9kIC0gZm9yIHVzaW5nIHJlZHV4XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5vcHRpb25zLmdldENoaWxkcmVuKHRoaXMpKVxuICAgICAgLnRoZW4oKGNoaWxkcmVuKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgIHRoaXMuc2V0RmllbGQoJ2NoaWxkcmVuJywgY2hpbGRyZW4pO1xuICAgICAgICAgIHRoaXMuX2luaXRDaGlsZHJlbigpO1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudXNlVHJpU3RhdGUgJiYgdGhpcy50cmVlTW9kZWwuaXNTZWxlY3RlZCh0aGlzKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRJc1NlbGVjdGVkKHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuZ2V0RmllbGQoJ2lzRXhwYW5kZWQnKSAmJiBjaGlsZC5oYXNDaGlsZHJlbikge1xuICAgICAgICAgICAgICBjaGlsZC5leHBhbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH19KS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoe1xuICAgICAgICAgIGV2ZW50TmFtZTogVFJFRV9FVkVOVFMubG9hZE5vZGVDaGlsZHJlbixcbiAgICAgICAgICBub2RlOiB0aGlzXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBleHBhbmQoKSB7XG4gICAgaWYgKCF0aGlzLmlzRXhwYW5kZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlRXhwYW5kZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbGxhcHNlKCkge1xuICAgIGlmICh0aGlzLmlzRXhwYW5kZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlRXhwYW5kZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRvRm9yQWxsKGZuOiAobm9kZTogSVRyZWVOb2RlKSA9PiBhbnkpIHtcbiAgICBQcm9taXNlLnJlc29sdmUoZm4odGhpcykpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY2hpbGRyZW4pIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQuZG9Gb3JBbGwoZm4pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGV4cGFuZEFsbCgpIHtcbiAgICB0aGlzLmRvRm9yQWxsKChub2RlKSA9PiBub2RlLmV4cGFuZCgpKTtcbiAgfVxuXG4gIGNvbGxhcHNlQWxsKCkge1xuICAgIHRoaXMuZG9Gb3JBbGwoKG5vZGUpID0+IG5vZGUuY29sbGFwc2UoKSk7XG4gIH1cblxuICBlbnN1cmVWaXNpYmxlKCkge1xuICAgIGlmICh0aGlzLnJlYWxQYXJlbnQpIHtcbiAgICAgIHRoaXMucmVhbFBhcmVudC5leHBhbmQoKTtcbiAgICAgIHRoaXMucmVhbFBhcmVudC5lbnN1cmVWaXNpYmxlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0b2dnbGVFeHBhbmRlZCgpIHtcbiAgICB0aGlzLnNldElzRXhwYW5kZWQoIXRoaXMuaXNFeHBhbmRlZCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldElzRXhwYW5kZWQodmFsdWUpIHtcbiAgICBpZiAodGhpcy5oYXNDaGlsZHJlbikge1xuICAgICAgdGhpcy50cmVlTW9kZWwuc2V0RXhwYW5kZWROb2RlKHRoaXMsIHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBhdXRvTG9hZENoaWxkcmVuKCkge1xuICAgIHRoaXMuaGFuZGxlciA9XG4gICAgICByZWFjdGlvbihcbiAgICAgICAgKCkgPT4gdGhpcy5pc0V4cGFuZGVkLFxuICAgICAgICAoaXNFeHBhbmRlZCkgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5jaGlsZHJlbiAmJiB0aGlzLmhhc0NoaWxkcmVuICYmIGlzRXhwYW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZE5vZGVDaGlsZHJlbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgeyBmaXJlSW1tZWRpYXRlbHk6IHRydWUgfVxuICAgICAgKTtcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKHRoaXMuY2hpbGRyZW4pIHtcbiAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLmRpc3Bvc2UoKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmhhbmRsZXIpIHtcbiAgICAgIHRoaXMuaGFuZGxlcigpO1xuICAgIH1cbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgdGhpcy5jaGlsZHJlbiA9IG51bGw7XG4gIH1cblxuICBzZXRJc0FjdGl2ZSh2YWx1ZSwgbXVsdGkgPSBmYWxzZSkge1xuICAgIHRoaXMudHJlZU1vZGVsLnNldEFjdGl2ZU5vZGUodGhpcywgdmFsdWUsIG11bHRpKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZm9jdXModGhpcy5vcHRpb25zLnNjcm9sbE9uQWN0aXZhdGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNTZWxlY3RhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmlzTGVhZiB8fCAhdGhpcy5jaGlsZHJlbiB8fCAhdGhpcy5vcHRpb25zLnVzZVRyaVN0YXRlO1xuICB9XG5cbiAgQGFjdGlvbiBzZXRJc1NlbGVjdGVkKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaXNTZWxlY3RhYmxlKCkpIHtcbiAgICAgIHRoaXMudHJlZU1vZGVsLnNldFNlbGVjdGVkTm9kZSh0aGlzLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlzaWJsZUNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5zZXRJc1NlbGVjdGVkKHZhbHVlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0b2dnbGVTZWxlY3RlZCgpIHtcbiAgICB0aGlzLnNldElzU2VsZWN0ZWQoIXRoaXMuaXNTZWxlY3RlZCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRvZ2dsZUFjdGl2YXRlZChtdWx0aSA9IGZhbHNlKSB7XG4gICAgdGhpcy5zZXRJc0FjdGl2ZSghdGhpcy5pc0FjdGl2ZSwgbXVsdGkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRBY3RpdmVBbmRWaXNpYmxlKG11bHRpID0gZmFsc2UpIHtcbiAgICB0aGlzLnNldElzQWN0aXZlKHRydWUsIG11bHRpKVxuICAgICAgLmVuc3VyZVZpc2libGUoKTtcblxuICAgIHNldFRpbWVvdXQodGhpcy5zY3JvbGxJbnRvVmlldy5iaW5kKHRoaXMpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2Nyb2xsSW50b1ZpZXcoZm9yY2UgPSBmYWxzZSkge1xuICAgIHRoaXMudHJlZU1vZGVsLnZpcnR1YWxTY3JvbGwuc2Nyb2xsSW50b1ZpZXcodGhpcywgZm9yY2UpO1xuICB9XG5cbiAgZm9jdXMoc2Nyb2xsID0gdHJ1ZSkge1xuICAgIGxldCBwcmV2aW91c05vZGUgPSB0aGlzLnRyZWVNb2RlbC5nZXRGb2N1c2VkTm9kZSgpO1xuICAgIHRoaXMudHJlZU1vZGVsLnNldEZvY3VzZWROb2RlKHRoaXMpO1xuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICB9XG4gICAgaWYgKHByZXZpb3VzTm9kZSkge1xuICAgICAgdGhpcy5maXJlRXZlbnQoeyBldmVudE5hbWU6IFRSRUVfRVZFTlRTLmJsdXIsIG5vZGU6IHByZXZpb3VzTm9kZSB9KTtcbiAgICB9XG4gICAgdGhpcy5maXJlRXZlbnQoeyBldmVudE5hbWU6IFRSRUVfRVZFTlRTLmZvY3VzLCBub2RlOiB0aGlzIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBibHVyKCkge1xuICAgIGxldCBwcmV2aW91c05vZGUgPSB0aGlzLnRyZWVNb2RlbC5nZXRGb2N1c2VkTm9kZSgpO1xuICAgIHRoaXMudHJlZU1vZGVsLnNldEZvY3VzZWROb2RlKG51bGwpO1xuICAgIGlmIChwcmV2aW91c05vZGUpIHtcbiAgICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5ibHVyLCBub2RlOiB0aGlzIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0SXNIaWRkZW4odmFsdWUpIHtcbiAgICB0aGlzLnRyZWVNb2RlbC5zZXRJc0hpZGRlbih0aGlzLCB2YWx1ZSk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuc2V0SXNIaWRkZW4odHJ1ZSk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIHRoaXMuc2V0SXNIaWRkZW4oZmFsc2UpO1xuICB9XG5cbiAgbW91c2VBY3Rpb24oYWN0aW9uTmFtZTogc3RyaW5nLCAkZXZlbnQsIGRhdGE6IGFueSA9IG51bGwpIHtcbiAgICB0aGlzLnRyZWVNb2RlbC5zZXRGb2N1cyh0cnVlKTtcblxuICAgIGNvbnN0IGFjdGlvbk1hcHBpbmcgPSB0aGlzLm9wdGlvbnMuYWN0aW9uTWFwcGluZy5tb3VzZTtcbiAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25NYXBwaW5nW2FjdGlvbk5hbWVdO1xuXG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgYWN0aW9uKHRoaXMudHJlZU1vZGVsLCB0aGlzLCAkZXZlbnQsIGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNlbGZIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5ub2RlSGVpZ2h0KHRoaXMpO1xuICB9XG5cbiAgQGFjdGlvbiBfaW5pdENoaWxkcmVuKCkge1xuICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLmdldEZpZWxkKCdjaGlsZHJlbicpXG4gICAgICAubWFwKChjLCBpbmRleCkgPT4gbmV3IFRyZWVOb2RlKGMsIHRoaXMsIHRoaXMudHJlZU1vZGVsLCBpbmRleCkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHV1aWQoKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwMDAwMCk7XG59XG4iXX0=

/***/ }),

/***/ "kekF":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "kzw/":
/*!***************************************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/models/tree-virtual-scroll.model.js ***!
  \***************************************************************************************************/
/*! exports provided: TreeVirtualScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeVirtualScroll", function() { return TreeVirtualScroll; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tree_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree.model */ "PLWw");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ "2vnA");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/events */ "EHVX");


var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Y_OFFSET = 500; // Extra pixels outside the viewport, in each direction, to render nodes in
var Y_EPSILON = 150; // Minimum pixel change required to recalculate the rendered nodes
var TreeVirtualScroll = /** @class */ (function () {
    function TreeVirtualScroll(treeModel) {
        var _this = this;
        this.treeModel = treeModel;
        this.yBlocks = 0;
        this.x = 0;
        this.viewportHeight = null;
        this.viewport = null;
        treeModel.virtualScroll = this;
        this._dispose = [Object(mobx__WEBPACK_IMPORTED_MODULE_2__["autorun"])(function () { return _this.fixScroll(); })];
    }
    Object.defineProperty(TreeVirtualScroll.prototype, "y", {
        get: function () {
            return this.yBlocks * Y_EPSILON;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeVirtualScroll.prototype, "totalHeight", {
        get: function () {
            return this.treeModel.virtualRoot ? this.treeModel.virtualRoot.height : 0;
        },
        enumerable: true,
        configurable: true
    });
    TreeVirtualScroll.prototype.fireEvent = function (event) {
        this.treeModel.fireEvent(event);
    };
    TreeVirtualScroll.prototype.init = function () {
        var _this = this;
        var fn = this.recalcPositions.bind(this);
        fn();
        this._dispose = this._dispose.concat([
            Object(mobx__WEBPACK_IMPORTED_MODULE_2__["reaction"])(function () { return _this.treeModel.roots; }, fn),
            Object(mobx__WEBPACK_IMPORTED_MODULE_2__["reaction"])(function () { return _this.treeModel.expandedNodeIds; }, fn),
            Object(mobx__WEBPACK_IMPORTED_MODULE_2__["reaction"])(function () { return _this.treeModel.hiddenNodeIds; }, fn)
        ]);
        this.treeModel.subscribe(_constants_events__WEBPACK_IMPORTED_MODULE_3__["TREE_EVENTS"].loadNodeChildren, fn);
    };
    TreeVirtualScroll.prototype.isEnabled = function () {
        return this.treeModel.options.useVirtualScroll;
    };
    TreeVirtualScroll.prototype._setYBlocks = function (value) {
        this.yBlocks = value;
    };
    TreeVirtualScroll.prototype.recalcPositions = function () {
        this.treeModel.virtualRoot.height = this._getPositionAfter(this.treeModel.getVisibleRoots(), 0);
    };
    TreeVirtualScroll.prototype._getPositionAfter = function (nodes, startPos) {
        var _this = this;
        var position = startPos;
        nodes.forEach(function (node) {
            node.position = position;
            position = _this._getPositionAfterNode(node, position);
        });
        return position;
    };
    TreeVirtualScroll.prototype._getPositionAfterNode = function (node, startPos) {
        var position = node.getSelfHeight() + startPos;
        if (node.children && node.isExpanded) { // TBD: consider loading component as well
            position = this._getPositionAfter(node.visibleChildren, position);
        }
        node.height = position - startPos;
        return position;
    };
    TreeVirtualScroll.prototype.clear = function () {
        this._dispose.forEach(function (d) { return d(); });
    };
    TreeVirtualScroll.prototype.setViewport = function (viewport) {
        Object.assign(this, {
            viewport: viewport,
            x: viewport.scrollLeft,
            yBlocks: Math.round(viewport.scrollTop / Y_EPSILON),
            viewportHeight: viewport.getBoundingClientRect ? viewport.getBoundingClientRect().height : 0
        });
    };
    TreeVirtualScroll.prototype.scrollIntoView = function (node, force, scrollToMiddle) {
        if (scrollToMiddle === void 0) { scrollToMiddle = true; }
        if (node.options.scrollContainer) {
            var scrollContainer = node.options.scrollContainer;
            var scrollContainerHeight = scrollContainer.getBoundingClientRect().height;
            var scrollContainerTop = scrollContainer.getBoundingClientRect().top;
            var nodeTop = this.viewport.getBoundingClientRect().top + node.position - scrollContainerTop;
            if (force || // force scroll to node
                nodeTop < scrollContainer.scrollTop || // node is above scroll container
                nodeTop + node.getSelfHeight() > scrollContainer.scrollTop + scrollContainerHeight) { // node is below container
                scrollContainer.scrollTop = scrollToMiddle ?
                    nodeTop - scrollContainerHeight / 2 : // scroll to middle
                    nodeTop; // scroll to start
            }
        }
        else {
            if (force || // force scroll to node
                node.position < this.y || // node is above viewport
                node.position + node.getSelfHeight() > this.y + this.viewportHeight) { // node is below viewport
                if (this.viewport) {
                    this.viewport.scrollTop = scrollToMiddle ?
                        node.position - this.viewportHeight / 2 : // scroll to middle
                        node.position; // scroll to start
                    this._setYBlocks(Math.floor(this.viewport.scrollTop / Y_EPSILON));
                }
            }
        }
    };
    TreeVirtualScroll.prototype.getViewportNodes = function (nodes) {
        var _this = this;
        if (!nodes)
            return [];
        var visibleNodes = nodes.filter(function (node) { return !node.isHidden; });
        if (!this.isEnabled())
            return visibleNodes;
        if (!this.viewportHeight || !visibleNodes.length)
            return [];
        // Search for first node in the viewport using binary search
        // Look for first node that starts after the beginning of the viewport (with buffer)
        // Or that ends after the beginning of the viewport
        var firstIndex = binarySearch(visibleNodes, function (node) {
            return (node.position + Y_OFFSET > _this.y) ||
                (node.position + node.height > _this.y);
        });
        // Search for last node in the viewport using binary search
        // Look for first node that starts after the end of the viewport (with buffer)
        var lastIndex = binarySearch(visibleNodes, function (node) {
            return node.position - Y_OFFSET > _this.y + _this.viewportHeight;
        }, firstIndex);
        var viewportNodes = [];
        // Loading async top nodes' children is too long.
        // It happens when first node is visible withing viewport range (including Y_OFFSET).
        // In that case firstIndex == 0 and lastIndex == visibleNodes.length - 1 (e.g. 1000),
        // which means that it loops through every visibleNodes item and push them into viewportNodes array.
        // lastIndex should not equal visibleNodes.length - 1, but something around 50-100 (depending on the viewport)
        var nodeHeight = visibleNodes[0].treeModel.options.options.nodeHeight;
        var renderedNodesMaxLength = (Y_OFFSET * 2 + this.viewportHeight) / nodeHeight;
        // Something is probably wrong, prevent nodes from being pushed to an array.
        if (lastIndex - firstIndex > renderedNodesMaxLength) {
            return [];
        }
        for (var i = firstIndex; i <= lastIndex; i++) {
            viewportNodes.push(visibleNodes[i]);
        }
        return viewportNodes;
    };
    TreeVirtualScroll.prototype.fixScroll = function () {
        var maxY = Math.max(0, this.totalHeight - this.viewportHeight);
        if (this.y < 0)
            this._setYBlocks(0);
        if (this.y > maxY)
            this._setYBlocks(maxY / Y_EPSILON);
    };
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
        __metadata("design:type", Object)
    ], TreeVirtualScroll.prototype, "yBlocks", void 0);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
        __metadata("design:type", Object)
    ], TreeVirtualScroll.prototype, "x", void 0);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
        __metadata("design:type", Object)
    ], TreeVirtualScroll.prototype, "viewportHeight", void 0);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeVirtualScroll.prototype, "y", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_2__["computed"],
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeVirtualScroll.prototype, "totalHeight", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeVirtualScroll.prototype, "_setYBlocks", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeVirtualScroll.prototype, "recalcPositions", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeVirtualScroll.prototype, "setViewport", null);
    __decorate([
        mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], TreeVirtualScroll.prototype, "scrollIntoView", null);
    TreeVirtualScroll = __decorate([ __metadata("design:paramtypes", [_tree_model__WEBPACK_IMPORTED_MODULE_1__["TreeModel"]])
    ], TreeVirtualScroll);
TreeVirtualScroll.ɵfac = function TreeVirtualScroll_Factory(t) { return new (t || TreeVirtualScroll)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_tree_model__WEBPACK_IMPORTED_MODULE_1__["TreeModel"])); };
TreeVirtualScroll.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TreeVirtualScroll, factory: function (t) { return TreeVirtualScroll.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeVirtualScroll, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _tree_model__WEBPACK_IMPORTED_MODULE_1__["TreeModel"] }]; }, null); })();
    return TreeVirtualScroll;
}());

function binarySearch(nodes, condition, firstIndex) {
    if (firstIndex === void 0) { firstIndex = 0; }
    var index = firstIndex;
    var toIndex = nodes.length - 1;
    while (index !== toIndex) {
        var midIndex = Math.floor((index + toIndex) / 2);
        if (condition(nodes[midIndex])) {
            toIndex = midIndex;
        }
        else {
            if (index === midIndex)
                index = toIndex;
            else
                index = midIndex;
        }
    }
    return index;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS12aXJ0dWFsLXNjcm9sbC5tb2RlbC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbGliL21vZGVscy90cmVlLXZpcnR1YWwtc2Nyb2xsLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVsRCxJQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQywyRUFBMkU7QUFDakcsSUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsa0VBQWtFO0FBR3pGO0FBQ29CLElBZWxCLDJCQUFvQixTQUFvQjtBQUMxQyxRQURFLGlCQUdDO0FBQ0gsUUFKc0IsY0FBUyxHQUFULFNBQVMsQ0FBVztBQUFDLFFBYjdCLFlBQU8sR0FBRyxDQUFDLENBQUM7QUFDMUIsUUFBYyxNQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BCLFFBQWMsbUJBQWMsR0FBRyxJQUFJLENBQUM7QUFDcEMsUUFBRSxhQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLFFBVUksU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFDbkMsUUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsU0FBUyxFQUFFLEVBQWhCLENBQWdCLENBQUMsQ0FBQyxDQUFDO0FBQ3RELElBQUUsQ0FBQztBQUNILElBWlksc0JBQUksZ0NBQUM7QUFBSSxhQUFUO0FBQ1IsWUFBQSxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0FBQ3BDLFFBQUUsQ0FBQztBQUVIO0FB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RyxDQUFDLENBQUMsQ0FBQztBQUNyRCxRQUNJLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3BDLFlBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQztBQUN6QixTQUFLO0FBQ0wsYUFBUztBQUNULFlBQU0sSUFBSSxLQUFLLEtBQUssUUFBUTtBQUFFLGdCQUFBLEtBQUssR0FBRyxPQUFPLENBQUM7QUFDOUM7QUFBaUIsZ0JBQU4sS0FBSyxHQUFHLFFBQVEsQ0FBQztBQUM1QixTQUFLO0FBQ0wsS0FBRztBQUNILElBQUUsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCwgYWN0aW9uLCBhdXRvcnVuLCByZWFjdGlvbiB9IGZyb20gJ21vYngnO1xuaW1wb3J0IHsgVHJlZU1vZGVsIH0gZnJvbSAnLi90cmVlLm1vZGVsJztcbmltcG9ydCB7IFRSRUVfRVZFTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2V2ZW50cyc7XG5cbmNvbnN0IFlfT0ZGU0VUID0gNTAwOyAvLyBFeHRyYSBwaXhlbHMgb3V0c2lkZSB0aGUgdmlld3BvcnQsIGluIGVhY2ggZGlyZWN0aW9uLCB0byByZW5kZXIgbm9kZXMgaW5cbmNvbnN0IFlfRVBTSUxPTiA9IDE1MDsgLy8gTWluaW11bSBwaXhlbCBjaGFuZ2UgcmVxdWlyZWQgdG8gcmVjYWxjdWxhdGUgdGhlIHJlbmRlcmVkIG5vZGVzXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmVlVmlydHVhbFNjcm9sbCB7XG4gIHByaXZhdGUgX2Rpc3Bvc2U6IGFueTtcblxuICBAb2JzZXJ2YWJsZSB5QmxvY2tzID0gMDtcbiAgQG9ic2VydmFibGUgeCA9IDA7XG4gIEBvYnNlcnZhYmxlIHZpZXdwb3J0SGVpZ2h0ID0gbnVsbDtcbiAgdmlld3BvcnQgPSBudWxsO1xuXG4gIEBjb21wdXRlZCBnZXQgeSgpIHtcbiAgICByZXR1cm4gdGhpcy55QmxvY2tzICogWV9FUFNJTE9OO1xuICB9XG5cbiAgQGNvbXB1dGVkIGdldCB0b3RhbEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy50cmVlTW9kZWwudmlydHVhbFJvb3QgPyB0aGlzLnRyZWVNb2RlbC52aXJ0dWFsUm9vdC5oZWlnaHQgOiAwO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmVlTW9kZWw6IFRyZWVNb2RlbCkge1xuICAgIHRyZWVNb2RlbC52aXJ0dWFsU2Nyb2xsID0gdGhpcztcbiAgICB0aGlzLl9kaXNwb3NlID0gW2F1dG9ydW4oKCkgPT4gdGhpcy5maXhTY3JvbGwoKSldO1xuICB9XG5cbiAgZmlyZUV2ZW50KGV2ZW50KSB7XG4gICAgdGhpcy50cmVlTW9kZWwuZmlyZUV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc3QgZm4gPSB0aGlzLnJlY2FsY1Bvc2l0aW9ucy5iaW5kKHRoaXMpO1xuXG4gICAgZm4oKTtcbiAgICB0aGlzLl9kaXNwb3NlID0gW1xuICAgICAgLi4udGhpcy5fZGlzcG9zZSxcbiAgICAgIHJlYWN0aW9uKCgpID0+IHRoaXMudHJlZU1vZGVsLnJvb3RzLCBmbiksXG4gICAgICByZWFjdGlvbigoKSA9PiB0aGlzLnRyZWVNb2RlbC5leHBhbmRlZE5vZGVJZHMsIGZuKSxcbiAgICAgIHJlYWN0aW9uKCgpID0+IHRoaXMudHJlZU1vZGVsLmhpZGRlbk5vZGVJZHMsIGZuKVxuICAgIF07XG4gICAgdGhpcy50cmVlTW9kZWwuc3Vic2NyaWJlKFRSRUVfRVZFTlRTLmxvYWROb2RlQ2hpbGRyZW4sIGZuKTtcbiAgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy50cmVlTW9kZWwub3B0aW9ucy51c2VWaXJ0dWFsU2Nyb2xsO1xuICB9XG5cbiAgQGFjdGlvbiBwcml2YXRlIF9zZXRZQmxvY2tzKHZhbHVlKSB7XG4gICAgdGhpcy55QmxvY2tzID0gdmFsdWU7XG4gIH1cblxuICBAYWN0aW9uIHJlY2FsY1Bvc2l0aW9ucygpIHtcbiAgICB0aGlzLnRyZWVNb2RlbC52aXJ0dWFsUm9vdC5oZWlnaHQgPSB0aGlzLl9nZXRQb3NpdGlvbkFmdGVyKHRoaXMudHJlZU1vZGVsLmdldFZpc2libGVSb290cygpLCAwKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFBvc2l0aW9uQWZ0ZXIobm9kZXMsIHN0YXJ0UG9zKSB7XG4gICAgbGV0IHBvc2l0aW9uID0gc3RhcnRQb3M7XG5cbiAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBub2RlLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICBwb3NpdGlvbiA9IHRoaXMuX2dldFBvc2l0aW9uQWZ0ZXJOb2RlKG5vZGUsIHBvc2l0aW9uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBwcml2YXRlIF9nZXRQb3NpdGlvbkFmdGVyTm9kZShub2RlLCBzdGFydFBvcykge1xuICAgIGxldCBwb3NpdGlvbiA9IG5vZGUuZ2V0U2VsZkhlaWdodCgpICsgc3RhcnRQb3M7XG5cbiAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiBub2RlLmlzRXhwYW5kZWQpIHsgLy8gVEJEOiBjb25zaWRlciBsb2FkaW5nIGNvbXBvbmVudCBhcyB3ZWxsXG4gICAgICBwb3NpdGlvbiA9IHRoaXMuX2dldFBvc2l0aW9uQWZ0ZXIobm9kZS52aXNpYmxlQ2hpbGRyZW4sIHBvc2l0aW9uKTtcbiAgICB9XG4gICAgbm9kZS5oZWlnaHQgPSBwb3NpdGlvbiAtIHN0YXJ0UG9zO1xuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5fZGlzcG9zZS5mb3JFYWNoKChkKSA9PiBkKCkpO1xuICB9XG5cbiAgQGFjdGlvbiBzZXRWaWV3cG9ydCh2aWV3cG9ydCkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgdmlld3BvcnQsXG4gICAgICB4OiB2aWV3cG9ydC5zY3JvbGxMZWZ0LFxuICAgICAgeUJsb2NrczogTWF0aC5yb3VuZCh2aWV3cG9ydC5zY3JvbGxUb3AgLyBZX0VQU0lMT04pLFxuICAgICAgdmlld3BvcnRIZWlnaHQ6IHZpZXdwb3J0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCA/IHZpZXdwb3J0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCA6IDBcbiAgICB9KTtcbiAgfVxuXG4gIEBhY3Rpb24gc2Nyb2xsSW50b1ZpZXcobm9kZSwgZm9yY2UsIHNjcm9sbFRvTWlkZGxlID0gdHJ1ZSkge1xuICAgIGlmIChub2RlLm9wdGlvbnMuc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPSBub2RlLm9wdGlvbnMuc2Nyb2xsQ29udGFpbmVyO1xuICAgICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVySGVpZ2h0ID0gc2Nyb2xsQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lclRvcCA9IHNjcm9sbENvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICBjb25zdCBub2RlVG9wID0gdGhpcy52aWV3cG9ydC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBub2RlLnBvc2l0aW9uIC0gc2Nyb2xsQ29udGFpbmVyVG9wO1xuXG4gICAgICBpZiAoZm9yY2UgfHwgLy8gZm9yY2Ugc2Nyb2xsIHRvIG5vZGVcbiAgICAgICAgbm9kZVRvcCA8IHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgfHwgLy8gbm9kZSBpcyBhYm92ZSBzY3JvbGwgY29udGFpbmVyXG4gICAgICAgIG5vZGVUb3AgKyBub2RlLmdldFNlbGZIZWlnaHQoKSA+IHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgKyBzY3JvbGxDb250YWluZXJIZWlnaHQpIHsgLy8gbm9kZSBpcyBiZWxvdyBjb250YWluZXJcbiAgICAgICAgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCA9IHNjcm9sbFRvTWlkZGxlID9cbiAgICAgICAgICBub2RlVG9wIC0gc2Nyb2xsQ29udGFpbmVySGVpZ2h0IC8gMiA6IC8vIHNjcm9sbCB0byBtaWRkbGVcbiAgICAgICAgICBub2RlVG9wOyAvLyBzY3JvbGwgdG8gc3RhcnRcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGZvcmNlIHx8IC8vIGZvcmNlIHNjcm9sbCB0byBub2RlXG4gICAgICAgIG5vZGUucG9zaXRpb24gPCB0aGlzLnkgfHwgLy8gbm9kZSBpcyBhYm92ZSB2aWV3cG9ydFxuICAgICAgICBub2RlLnBvc2l0aW9uICsgbm9kZS5nZXRTZWxmSGVpZ2h0KCkgPiB0aGlzLnkgKyB0aGlzLnZpZXdwb3J0SGVpZ2h0KSB7IC8vIG5vZGUgaXMgYmVsb3cgdmlld3BvcnRcbiAgICAgICAgaWYgKHRoaXMudmlld3BvcnQpIHtcbiAgICAgICAgICB0aGlzLnZpZXdwb3J0LnNjcm9sbFRvcCA9IHNjcm9sbFRvTWlkZGxlID9cbiAgICAgICAgICBub2RlLnBvc2l0aW9uIC0gdGhpcy52aWV3cG9ydEhlaWdodCAvIDIgOiAvLyBzY3JvbGwgdG8gbWlkZGxlXG4gICAgICAgICAgbm9kZS5wb3NpdGlvbjsgLy8gc2Nyb2xsIHRvIHN0YXJ0XG5cbiAgICAgICAgICB0aGlzLl9zZXRZQmxvY2tzKE1hdGguZmxvb3IodGhpcy52aWV3cG9ydC5zY3JvbGxUb3AgLyBZX0VQU0lMT04pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFZpZXdwb3J0Tm9kZXMobm9kZXMpIHtcbiAgICBpZiAoIW5vZGVzKSByZXR1cm4gW107XG5cbiAgICBjb25zdCB2aXNpYmxlTm9kZXMgPSBub2Rlcy5maWx0ZXIoKG5vZGUpID0+ICFub2RlLmlzSGlkZGVuKTtcblxuICAgIGlmICghdGhpcy5pc0VuYWJsZWQoKSkgcmV0dXJuIHZpc2libGVOb2RlcztcblxuICAgIGlmICghdGhpcy52aWV3cG9ydEhlaWdodCB8fCAhdmlzaWJsZU5vZGVzLmxlbmd0aCkgcmV0dXJuIFtdO1xuXG4gICAgLy8gU2VhcmNoIGZvciBmaXJzdCBub2RlIGluIHRoZSB2aWV3cG9ydCB1c2luZyBiaW5hcnkgc2VhcmNoXG4gICAgLy8gTG9vayBmb3IgZmlyc3Qgbm9kZSB0aGF0IHN0YXJ0cyBhZnRlciB0aGUgYmVnaW5uaW5nIG9mIHRoZSB2aWV3cG9ydCAod2l0aCBidWZmZXIpXG4gICAgLy8gT3IgdGhhdCBlbmRzIGFmdGVyIHRoZSBiZWdpbm5pbmcgb2YgdGhlIHZpZXdwb3J0XG4gICAgY29uc3QgZmlyc3RJbmRleCA9IGJpbmFyeVNlYXJjaCh2aXNpYmxlTm9kZXMsIChub2RlKSA9PiB7XG4gICAgICByZXR1cm4gKG5vZGUucG9zaXRpb24gKyBZX09GRlNFVCA+IHRoaXMueSkgfHxcbiAgICAgICAgICAgICAobm9kZS5wb3NpdGlvbiArIG5vZGUuaGVpZ2h0ID4gdGhpcy55KTtcbiAgICB9KTtcblxuICAgIC8vIFNlYXJjaCBmb3IgbGFzdCBub2RlIGluIHRoZSB2aWV3cG9ydCB1c2luZyBiaW5hcnkgc2VhcmNoXG4gICAgLy8gTG9vayBmb3IgZmlyc3Qgbm9kZSB0aGF0IHN0YXJ0cyBhZnRlciB0aGUgZW5kIG9mIHRoZSB2aWV3cG9ydCAod2l0aCBidWZmZXIpXG4gICAgY29uc3QgbGFzdEluZGV4ID0gYmluYXJ5U2VhcmNoKHZpc2libGVOb2RlcywgKG5vZGUpID0+IHtcbiAgICAgIHJldHVybiBub2RlLnBvc2l0aW9uIC0gWV9PRkZTRVQgPiB0aGlzLnkgKyB0aGlzLnZpZXdwb3J0SGVpZ2h0O1xuICAgIH0sIGZpcnN0SW5kZXgpO1xuXG4gICAgY29uc3Qgdmlld3BvcnROb2RlcyA9IFtdO1xuXG4gICAgLy8gTG9hZGluZyBhc3luYyB0b3Agbm9kZXMnIGNoaWxkcmVuIGlzIHRvbyBsb25nLlxuICAgIC8vIEl0IGhhcHBlbnMgd2hlbiBmaXJzdCBub2RlIGlzIHZpc2libGUgd2l0aGluZyB2aWV3cG9ydCByYW5nZSAoaW5jbHVkaW5nIFlfT0ZGU0VUKS5cbiAgICAvLyBJbiB0aGF0IGNhc2UgZmlyc3RJbmRleCA9PSAwIGFuZCBsYXN0SW5kZXggPT0gdmlzaWJsZU5vZGVzLmxlbmd0aCAtIDEgKGUuZy4gMTAwMCksXG4gICAgLy8gd2hpY2ggbWVhbnMgdGhhdCBpdCBsb29wcyB0aHJvdWdoIGV2ZXJ5IHZpc2libGVOb2RlcyBpdGVtIGFuZCBwdXNoIHRoZW0gaW50byB2aWV3cG9ydE5vZGVzIGFycmF5LlxuICAgIC8vIGxhc3RJbmRleCBzaG91bGQgbm90IGVxdWFsIHZpc2libGVOb2Rlcy5sZW5ndGggLSAxLCBidXQgc29tZXRoaW5nIGFyb3VuZCA1MC0xMDAgKGRlcGVuZGluZyBvbiB0aGUgdmlld3BvcnQpXG4gICAgY29uc3Qgbm9kZUhlaWdodCA9IHZpc2libGVOb2Rlc1swXS50cmVlTW9kZWwub3B0aW9ucy5vcHRpb25zLm5vZGVIZWlnaHQ7XG4gICAgY29uc3QgcmVuZGVyZWROb2Rlc01heExlbmd0aCA9IChZX09GRlNFVCAqIDIgKyB0aGlzLnZpZXdwb3J0SGVpZ2h0KSAvIG5vZGVIZWlnaHQ7XG5cbiAgICAvLyBTb21ldGhpbmcgaXMgcHJvYmFibHkgd3JvbmcsIHByZXZlbnQgbm9kZXMgZnJvbSBiZWluZyBwdXNoZWQgdG8gYW4gYXJyYXkuXG4gICAgaWYgKGxhc3RJbmRleCAtIGZpcnN0SW5kZXggPiByZW5kZXJlZE5vZGVzTWF4TGVuZ3RoKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IGZpcnN0SW5kZXg7IGkgPD0gbGFzdEluZGV4OyBpKyspIHtcbiAgICAgIHZpZXdwb3J0Tm9kZXMucHVzaCh2aXNpYmxlTm9kZXNbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiB2aWV3cG9ydE5vZGVzO1xuICB9XG5cbiAgZml4U2Nyb2xsKCkge1xuICAgIGNvbnN0IG1heFkgPSBNYXRoLm1heCgwLCB0aGlzLnRvdGFsSGVpZ2h0IC0gdGhpcy52aWV3cG9ydEhlaWdodCk7XG5cbiAgICBpZiAodGhpcy55IDwgMCkgdGhpcy5fc2V0WUJsb2NrcygwKTtcbiAgICBpZiAodGhpcy55ID4gbWF4WSkgdGhpcy5fc2V0WUJsb2NrcyhtYXhZIC8gWV9FUFNJTE9OKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBiaW5hcnlTZWFyY2gobm9kZXMsIGNvbmRpdGlvbiwgZmlyc3RJbmRleCA9IDApIHtcbiAgbGV0IGluZGV4ID0gZmlyc3RJbmRleDtcbiAgbGV0IHRvSW5kZXggPSBub2Rlcy5sZW5ndGggLSAxO1xuXG4gIHdoaWxlIChpbmRleCAhPT0gdG9JbmRleCkge1xuICAgIGxldCBtaWRJbmRleCA9IE1hdGguZmxvb3IoKGluZGV4ICsgdG9JbmRleCkgLyAyKTtcblxuICAgIGlmIChjb25kaXRpb24obm9kZXNbbWlkSW5kZXhdKSkge1xuICAgICAgdG9JbmRleCA9IG1pZEluZGV4O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChpbmRleCA9PT0gbWlkSW5kZXgpIGluZGV4ID0gdG9JbmRleDtcbiAgICAgIGVsc2UgaW5kZXggPSBtaWRJbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGluZGV4O1xufVxuIl19

/***/ }),

/***/ "lQqw":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "MMmD");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "lSCD":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "NykK"),
    isObject = __webpack_require__(/*! ./isObject */ "GoyQ");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "ljhN":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "lm/5":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "fmRc"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "wF/u");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "mTTR":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "b80T"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "QcOe"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "MMmD");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "mc0g":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "mdPL":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "WFqU");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "YuTi")(module)))

/***/ }),

/***/ "mhhj":
/*!******************************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/mobx-angular/mobx-proxy.js ***!
  \******************************************************************************************/
/*! exports provided: actionInternal, action, computed, observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionInternal", function() { return actionInternal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "2vnA");



// Re-export mobx operators to be able to use inside components with AOT:
function actionInternal() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return mobx__WEBPACK_IMPORTED_MODULE_0__["action"].apply(void 0, args);
}
var action = Object.assign(actionInternal, mobx__WEBPACK_IMPORTED_MODULE_0__["action"]);
function computedInternal() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return mobx__WEBPACK_IMPORTED_MODULE_0__["computed"].apply(void 0, args);
}
var computed = Object.assign(computedInternal, mobx__WEBPACK_IMPORTED_MODULE_0__["computed"]);
function observableInternal() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].apply(void 0, args);
}
var observable = Object.assign(observableInternal, mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ieC1wcm94eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9tb2J4LWFuZ3VsYXIvbW9ieC1wcm94eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxJQUFJLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsUUFBUSxJQUFJLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsVUFBVSxJQUFJLGNBQWMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVwRCx5RUFBeUU7QUFDekUsTUFBTSxVQUFVLGNBQWM7SUFBQyxjQUFPO1NBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztRQUFQLHlCQUFPOztJQUNwQyxPQUFRLFVBQWtCLGVBQUksSUFBSSxFQUFFO0FBQ3RDLENBQUM7QUFDRCxNQUFNLENBQUMsSUFBTSxNQUFNLEdBQXNCLE1BQU0sQ0FBQyxNQUFNLENBQ3BELGNBQWMsRUFDZCxVQUFVLENBQ0osQ0FBQztBQUVULFNBQVMsZ0JBQWdCO0lBQUMsY0FBTztTQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87UUFBUCx5QkFBTzs7SUFDL0IsT0FBUSxZQUFvQixlQUFJLElBQUksRUFBRTtBQUN4QyxDQUFDO0FBQ0QsTUFBTSxDQUFDLElBQU0sUUFBUSxHQUF3QixNQUFNLENBQUMsTUFBTSxDQUN4RCxnQkFBZ0IsRUFDaEIsWUFBWSxDQUNOLENBQUM7QUFFVCxTQUFTLGtCQUFrQjtJQUFDLGNBQU87U0FBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1FBQVAseUJBQU87O0lBQ2pDLE9BQVEsY0FBc0IsZUFBSSxJQUFJLEVBQUU7QUFDMUMsQ0FBQztBQUVELE1BQU0sQ0FBQyxJQUFNLFVBQVUsR0FBMEIsTUFBTSxDQUFDLE1BQU0sQ0FDNUQsa0JBQWtCLEVBQ2xCLGNBQWMsQ0FDUixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWN0aW9uIGFzIG1vYnhBY3Rpb24gfSBmcm9tICdtb2J4JztcbmltcG9ydCB7IGNvbXB1dGVkIGFzIG1vYnhDb21wdXRlZCB9IGZyb20gJ21vYngnO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBtb2J4T2JzZXJ2YWJsZSB9IGZyb20gJ21vYngnO1xuXG4vLyBSZS1leHBvcnQgbW9ieCBvcGVyYXRvcnMgdG8gYmUgYWJsZSB0byB1c2UgaW5zaWRlIGNvbXBvbmVudHMgd2l0aCBBT1Q6XG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uSW50ZXJuYWwoLi4uYXJncykge1xuICByZXR1cm4gKG1vYnhBY3Rpb24gYXMgYW55KSguLi5hcmdzKTtcbn1cbmV4cG9ydCBjb25zdCBhY3Rpb246IHR5cGVvZiBtb2J4QWN0aW9uID0gT2JqZWN0LmFzc2lnbihcbiAgYWN0aW9uSW50ZXJuYWwsXG4gIG1vYnhBY3Rpb25cbikgYXMgYW55O1xuXG5mdW5jdGlvbiBjb21wdXRlZEludGVybmFsKC4uLmFyZ3MpIHtcbiAgcmV0dXJuIChtb2J4Q29tcHV0ZWQgYXMgYW55KSguLi5hcmdzKTtcbn1cbmV4cG9ydCBjb25zdCBjb21wdXRlZDogdHlwZW9mIG1vYnhDb21wdXRlZCA9IE9iamVjdC5hc3NpZ24oXG4gIGNvbXB1dGVkSW50ZXJuYWwsXG4gIG1vYnhDb21wdXRlZFxuKSBhcyBhbnk7XG5cbmZ1bmN0aW9uIG9ic2VydmFibGVJbnRlcm5hbCguLi5hcmdzKSB7XG4gIHJldHVybiAobW9ieE9ic2VydmFibGUgYXMgYW55KSguLi5hcmdzKTtcbn1cblxuZXhwb3J0IGNvbnN0IG9ic2VydmFibGU6IHR5cGVvZiBtb2J4T2JzZXJ2YWJsZSA9IE9iamVjdC5hc3NpZ24oXG4gIG9ic2VydmFibGVJbnRlcm5hbCxcbiAgbW9ieE9ic2VydmFibGVcbikgYXMgYW55O1xuIl19

/***/ }),

/***/ "mv/X":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "ljhN"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "MMmD"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "wJg7"),
    isObject = __webpack_require__(/*! ./isObject */ "GoyQ");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "mwIZ":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "ZWtO");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "nmnc":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "Kz5y");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "oBzg":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/components/tree-viewport.component.js ***!
  \*****************************************************************************************************/
/*! exports provided: TreeViewportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeViewportComponent", function() { return TreeViewportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_tree_virtual_scroll_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/tree-virtual-scroll.model */ "kzw/");
/* harmony import */ var _mobx_angular_tree_mobx_autorun_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mobx-angular/tree-mobx-autorun.directive */ "D5+F");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/events */ "EHVX");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/throttle */ "DzJC");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_4__);




function TreeViewportComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r0.getTotalHeight());
} }
var _c0 = function () { return { dontDetach: true }; };
var _c1 = ["*"];
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TreeViewportComponent = /** @class */ (function () {
    function TreeViewportComponent(elementRef, ngZone, virtualScroll) {
        var _this = this;
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.virtualScroll = virtualScroll;
        this.setViewport = lodash_throttle__WEBPACK_IMPORTED_MODULE_4___default()(function () {
            _this.virtualScroll.setViewport(_this.elementRef.nativeElement);
        }, 17);
        this.scrollEventHandler = this.setViewport.bind(this);
    }
    TreeViewportComponent.prototype.ngOnInit = function () {
        this.virtualScroll.init();
    };
    TreeViewportComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.setViewport();
            _this.virtualScroll.fireEvent({ eventName: _constants_events__WEBPACK_IMPORTED_MODULE_3__["TREE_EVENTS"].initialized });
        });
        var el = this.elementRef.nativeElement;
        this.ngZone.runOutsideAngular(function () {
            el.addEventListener('scroll', _this.scrollEventHandler);
        });
    };
    TreeViewportComponent.prototype.ngOnDestroy = function () {
        this.virtualScroll.clear();
        var el = this.elementRef.nativeElement;
        el.removeEventListener('scroll', this.scrollEventHandler);
    };
    TreeViewportComponent.prototype.getTotalHeight = function () {
        return ((this.virtualScroll.isEnabled() &&
            this.virtualScroll.totalHeight + 'px') ||
            'auto');
    };
    TreeViewportComponent = __decorate([ __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _models_tree_virtual_scroll_model__WEBPACK_IMPORTED_MODULE_1__["TreeVirtualScroll"]])
    ], TreeViewportComponent);
TreeViewportComponent.ɵfac = function TreeViewportComponent_Factory(t) { return new (t || TreeViewportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_models_tree_virtual_scroll_model__WEBPACK_IMPORTED_MODULE_1__["TreeVirtualScroll"])); };
TreeViewportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeViewportComponent, selectors: [["tree-viewport"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_models_tree_virtual_scroll_model__WEBPACK_IMPORTED_MODULE_1__["TreeVirtualScroll"]])], ngContentSelectors: _c1, decls: 1, vars: 2, consts: [[4, "treeMobxAutorun"]], template: function TreeViewportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeViewportComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("treeMobxAutorun", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_mobx_angular_tree_mobx_autorun_directive__WEBPACK_IMPORTED_MODULE_2__["TreeMobxAutorunDirective"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeViewportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tree-viewport',
                styles: [],
                providers: [_models_tree_virtual_scroll_model__WEBPACK_IMPORTED_MODULE_1__["TreeVirtualScroll"]],
                template: "\n    <ng-container *treeMobxAutorun=\"{ dontDetach: true }\">\n      <div [style.height]=\"getTotalHeight()\">\n        <ng-content></ng-content>\n      </div>\n    </ng-container>\n  "
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _models_tree_virtual_scroll_model__WEBPACK_IMPORTED_MODULE_1__["TreeVirtualScroll"] }]; }, null); })();
    return TreeViewportComponent;
}());


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS12aWV3cG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtdmlld3BvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBS1YsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVsRCxPQUFPLFFBQVEsTUFBTSxpQkFBaUIsQ0FBQztBQWN2QztBQUF5RCxJQU12RCwrQkFDVSxVQUFzQixFQUN0QixNQUFjLEVBQ2YsYUFBZ0M7QUFDeEMsUUFKRCxpQkFNQztBQUNILFFBTlksZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUFDLFFBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQVE7QUFBQyxRQUNoQixrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7QUFDM0MsUUFURSxnQkFBVyxHQUFHLFFBQVEsQ0FBQztBQUNuQixZQUFGLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDbEUsUUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDVCxRQU9JLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxRCxJQUFFLENBQUM7QUFDSCxJQUNFLHdDQUFRLEdBQVI7QUFDRCxRQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDOUIsSUFBRSxDQUFDO0FBRUgsSUFBRSwrQ0FBZSxHQUFmO0FBQWMsUUFBZCxpQkFTQztBQUNILFFBVEksVUFBVSxDQUFDO0FBQ1QsWUFBQSxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDekIsWUFBTSxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUMzRSxRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsUUFBSSxJQUFJLEVBQUUsR0FBZ0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7QUFDeEQsUUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDO0FBQzVCLFlBQUEsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUM3RCxRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsSUFBRSxDQUFDO0FBRUgsSUFBRSwyQ0FBVyxHQUFYO0FBQWMsUUFDWixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQy9CLFFBQUksSUFBSSxFQUFFLEdBQWdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0FBQ3hELFFBQUksRUFBRSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUM5RCxJQUFFLENBQUM7QUFFSCxJQUFFLDhDQUFjLEdBQWQ7QUFBYyxRQUNaLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFO0FBQ3JDLFlBQVEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQzlDLFlBQU0sTUFBTSxDQUNQLENBQUM7QUFDTixJQUFFLENBQUM7QUFDRixJQTFDWSxxQkFBcUIsd0JBWmpDLFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRSwzQ0FXSixrQ0FPZ0IsVUFBVTtZQWxCUCxaQW1CM0IsWUFBb0IsTUFBTTtNQWxCeEIsTUFBTSxFQUFFLEVBQUUsY0FDViw5QkFrQkYsWUFBMEIsaUJBQWlCO09BbEJoQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsNUJBbUI5QixPQVZXLHFCQUFxQixDQTBDakM7V0FsREMsUUFBUSxFQUFFLDJMQU1ULFVBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O3dJQTRDRjtBQUFDLElBREQsNEJBQUM7QUFDQSxDQURBLEFBMUNELElBMENDO0FBQ0QsU0EzQ2EscUJBQXFCO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBBZnRlclZpZXdJbml0LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgTmdab25lXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJlZVZpcnR1YWxTY3JvbGwgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS12aXJ0dWFsLXNjcm9sbC5tb2RlbCc7XG5pbXBvcnQgeyBUUkVFX0VWRU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9ldmVudHMnO1xuaW1wb3J0IHsgQ2FuY2VsYWJsZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoL3Rocm90dGxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJlZS12aWV3cG9ydCcsXG4gIHN0eWxlczogW10sXG4gIHByb3ZpZGVyczogW1RyZWVWaXJ0dWFsU2Nyb2xsXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICp0cmVlTW9ieEF1dG9ydW49XCJ7IGRvbnREZXRhY2g6IHRydWUgfVwiPlxuICAgICAgPGRpdiBbc3R5bGUuaGVpZ2h0XT1cImdldFRvdGFsSGVpZ2h0KClcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgVHJlZVZpZXdwb3J0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzZXRWaWV3cG9ydCA9IHRocm90dGxlKCgpID0+IHtcbiAgICB0aGlzLnZpcnR1YWxTY3JvbGwuc2V0Vmlld3BvcnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICB9LCAxNyk7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2Nyb2xsRXZlbnRIYW5kbGVyOiAoJGV2ZW50OiBFdmVudCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwdWJsaWMgdmlydHVhbFNjcm9sbDogVHJlZVZpcnR1YWxTY3JvbGxcbiAgKSB7XG4gICAgdGhpcy5zY3JvbGxFdmVudEhhbmRsZXIgPSB0aGlzLnNldFZpZXdwb3J0LmJpbmQodGhpcyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnZpcnR1YWxTY3JvbGwuaW5pdCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWaWV3cG9ydCgpO1xuICAgICAgdGhpcy52aXJ0dWFsU2Nyb2xsLmZpcmVFdmVudCh7IGV2ZW50TmFtZTogVFJFRV9FVkVOVFMuaW5pdGlhbGl6ZWQgfSk7XG4gICAgfSk7XG4gICAgbGV0IGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsRXZlbnRIYW5kbGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMudmlydHVhbFNjcm9sbC5jbGVhcigpO1xuICAgIGxldCBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEV2ZW50SGFuZGxlcik7XG4gIH1cblxuICBnZXRUb3RhbEhlaWdodCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMudmlydHVhbFNjcm9sbC5pc0VuYWJsZWQoKSAmJlxuICAgICAgICB0aGlzLnZpcnR1YWxTY3JvbGwudG90YWxIZWlnaHQgKyAncHgnKSB8fFxuICAgICAgJ2F1dG8nXG4gICAgKTtcbiAgfVxufVxuIl19

/***/ }),

/***/ "oCl/":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "CH3K"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "LcsW"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "MvSz"),
    stubArray = __webpack_require__(/*! ./stubArray */ "0ycA");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "or5M":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "1hJj"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "QoRX"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "xYSL");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "otv/":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneSymbol.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "nmnc");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "pA7x":
/*!********************************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/models/tree-options.model.js ***!
  \********************************************************************************************/
/*! exports provided: TREE_ACTIONS, TreeOptions, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12, ɵ13, ɵ14, ɵ15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREE_ACTIONS", function() { return TREE_ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeOptions", function() { return TreeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ3", function() { return ɵ3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ4", function() { return ɵ4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ5", function() { return ɵ5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ6", function() { return ɵ6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ7", function() { return ɵ7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ8", function() { return ɵ8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ9", function() { return ɵ9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ10", function() { return ɵ10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ11", function() { return ɵ11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ12", function() { return ɵ12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ13", function() { return ɵ13; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ14", function() { return ɵ14; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ15", function() { return ɵ15; });
/* harmony import */ var _constants_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/keys */ "aXz+");
/* harmony import */ var lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/defaultsDeep */ "P4Tr");
/* harmony import */ var lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "mwIZ");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/omit */ "Puqe");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isNumber */ "UB5X");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_4__);
var _a;





var ɵ0 = function (tree, node, $event) { return node && node.toggleActivated(); }, ɵ1 = function (tree, node, $event) { return node && node.toggleActivated(true); }, ɵ2 = function (tree, node, $event) { return node && node.toggleSelected(); }, ɵ3 = function (tree, node, $event) { return node.setIsActive(true); }, ɵ4 = function (tree, node, $event) { return node.setIsActive(false); }, ɵ5 = function (tree, node, $event) { return node.setIsSelected(true); }, ɵ6 = function (tree, node, $event) { return node.setIsSelected(false); }, ɵ7 = function (tree, node, $event) { return node.focus(); }, ɵ8 = function (tree, node, $event) { return node.hasChildren && node.toggleExpanded(); }, ɵ9 = function (tree, node, $event) { return node.expand(); }, ɵ10 = function (tree, node, $event) { return node.collapse(); }, ɵ11 = function (tree, node, $event) { return tree.focusDrillDown(); }, ɵ12 = function (tree, node, $event) { return tree.focusDrillUp(); }, ɵ13 = function (tree, node, $event) { return tree.focusNextNode(); }, ɵ14 = function (tree, node, $event) { return tree.focusPreviousNode(); }, ɵ15 = function (tree, node, $event, _a) {
    var from = _a.from, to = _a.to;
    // default action assumes from = node, to = {parent, index}
    if ($event.ctrlKey) {
        tree.copyNode(from, to);
    }
    else {
        tree.moveNode(from, to);
    }
};
var TREE_ACTIONS = {
    TOGGLE_ACTIVE: ɵ0,
    TOGGLE_ACTIVE_MULTI: ɵ1,
    TOGGLE_SELECTED: ɵ2,
    ACTIVATE: ɵ3,
    DEACTIVATE: ɵ4,
    SELECT: ɵ5,
    DESELECT: ɵ6,
    FOCUS: ɵ7,
    TOGGLE_EXPANDED: ɵ8,
    EXPAND: ɵ9,
    COLLAPSE: ɵ10,
    DRILL_DOWN: ɵ11,
    DRILL_UP: ɵ12,
    NEXT_NODE: ɵ13,
    PREVIOUS_NODE: ɵ14,
    MOVE_NODE: ɵ15
};
var defaultActionMapping = {
    mouse: {
        click: TREE_ACTIONS.TOGGLE_ACTIVE,
        dblClick: null,
        contextMenu: null,
        expanderClick: TREE_ACTIONS.TOGGLE_EXPANDED,
        checkboxClick: TREE_ACTIONS.TOGGLE_SELECTED,
        drop: TREE_ACTIONS.MOVE_NODE
    },
    keys: (_a = {},
        _a[_constants_keys__WEBPACK_IMPORTED_MODULE_0__["KEYS"].RIGHT] = TREE_ACTIONS.DRILL_DOWN,
        _a[_constants_keys__WEBPACK_IMPORTED_MODULE_0__["KEYS"].LEFT] = TREE_ACTIONS.DRILL_UP,
        _a[_constants_keys__WEBPACK_IMPORTED_MODULE_0__["KEYS"].DOWN] = TREE_ACTIONS.NEXT_NODE,
        _a[_constants_keys__WEBPACK_IMPORTED_MODULE_0__["KEYS"].UP] = TREE_ACTIONS.PREVIOUS_NODE,
        _a[_constants_keys__WEBPACK_IMPORTED_MODULE_0__["KEYS"].SPACE] = TREE_ACTIONS.TOGGLE_ACTIVE,
        _a[_constants_keys__WEBPACK_IMPORTED_MODULE_0__["KEYS"].ENTER] = TREE_ACTIONS.TOGGLE_ACTIVE,
        _a)
};
var TreeOptions = /** @class */ (function () {
    function TreeOptions(options) {
        if (options === void 0) { options = {}; }
        this.options = options;
        this.actionMapping = lodash_defaultsDeep__WEBPACK_IMPORTED_MODULE_1___default()({}, this.options.actionMapping, defaultActionMapping);
        if (options.rtl) {
            this.actionMapping.keys[_constants_keys__WEBPACK_IMPORTED_MODULE_0__["KEYS"].RIGHT] = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(options, ['actionMapping', 'keys', _constants_keys__WEBPACK_IMPORTED_MODULE_0__["KEYS"].RIGHT]) || TREE_ACTIONS.DRILL_UP;
            this.actionMapping.keys[_constants_keys__WEBPACK_IMPORTED_MODULE_0__["KEYS"].LEFT] = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(options, ['actionMapping', 'keys', _constants_keys__WEBPACK_IMPORTED_MODULE_0__["KEYS"].LEFT]) || TREE_ACTIONS.DRILL_DOWN;
        }
    }
    Object.defineProperty(TreeOptions.prototype, "hasChildrenField", {
        get: function () { return this.options.hasChildrenField || 'hasChildren'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "childrenField", {
        get: function () { return this.options.childrenField || 'children'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "displayField", {
        get: function () { return this.options.displayField || 'name'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "idField", {
        get: function () { return this.options.idField || 'id'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "isExpandedField", {
        get: function () { return this.options.isExpandedField || 'isExpanded'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "getChildren", {
        get: function () { return this.options.getChildren; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "levelPadding", {
        get: function () { return this.options.levelPadding || 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "useVirtualScroll", {
        get: function () { return this.options.useVirtualScroll; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "animateExpand", {
        get: function () { return this.options.animateExpand; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "animateSpeed", {
        get: function () { return this.options.animateSpeed || 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "animateAcceleration", {
        get: function () { return this.options.animateAcceleration || 1.2; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "scrollOnActivate", {
        get: function () { return this.options.scrollOnActivate === undefined ? true : this.options.scrollOnActivate; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "rtl", {
        get: function () { return !!this.options.rtl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "rootId", {
        get: function () { return this.options.rootId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "useCheckbox", {
        get: function () { return this.options.useCheckbox; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "useTriState", {
        get: function () { return this.options.useTriState === undefined ? true : this.options.useTriState; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "scrollContainer", {
        get: function () { return this.options.scrollContainer; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "allowDragoverStyling", {
        get: function () { return this.options.allowDragoverStyling === undefined ? true : this.options.allowDragoverStyling; },
        enumerable: true,
        configurable: true
    });
    TreeOptions.prototype.getNodeClone = function (node) {
        if (this.options.getNodeClone) {
            return this.options.getNodeClone(node);
        }
        return lodash_omit__WEBPACK_IMPORTED_MODULE_3___default()(Object.assign({}, node.data), ['id']);
    };
    TreeOptions.prototype.allowDrop = function (element, to, $event) {
        if (this.options.allowDrop instanceof Function) {
            return this.options.allowDrop(element, to, $event);
        }
        else {
            return this.options.allowDrop === undefined ? true : this.options.allowDrop;
        }
    };
    TreeOptions.prototype.allowDrag = function (node) {
        if (this.options.allowDrag instanceof Function) {
            return this.options.allowDrag(node);
        }
        else {
            return this.options.allowDrag;
        }
    };
    TreeOptions.prototype.nodeClass = function (node) {
        return this.options.nodeClass ? this.options.nodeClass(node) : '';
    };
    TreeOptions.prototype.nodeHeight = function (node) {
        if (node.data.virtual) {
            return 0;
        }
        var nodeHeight = this.options.nodeHeight || 22;
        if (typeof nodeHeight === 'function') {
            nodeHeight = nodeHeight(node);
        }
        // account for drop slots:
        return nodeHeight + (node.index === 0 ? 2 : 1) * this.dropSlotHeight;
    };
    Object.defineProperty(TreeOptions.prototype, "dropSlotHeight", {
        get: function () {
            return lodash_isNumber__WEBPACK_IMPORTED_MODULE_4___default()(this.options.dropSlotHeight) ? this.options.dropSlotHeight : 2;
        },
        enumerable: true,
        configurable: true
    });
    return TreeOptions;
}());


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1vcHRpb25zLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL21vZGVscy90cmVlLW9wdGlvbnMubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUd6QyxPQUFPLFlBQVksTUFBTSxxQkFBcUIsQ0FBQztBQUMvQyxPQUFPLEdBQUcsTUFBTSxZQUFZLENBQUM7QUFDN0IsT0FBTyxJQUFJLE1BQU0sYUFBYSxDQUFDO0FBQy9CLE9BQU8sUUFBUSxNQUFNLGlCQUFpQixDQUFDO1NBT3RCLFVBQUMsSUFBZSxFQUFFLElBQWMsRUFBRSxNQUFXLElBQUssT0FBQSxJQUFJLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUE5QixDQUE4QixPQUMxRSxVQUFDLElBQWUsRUFBRSxJQUFjLEVBQUUsTUFBVyxJQUFLLE9BQUEsSUFBSSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQWxDLENBQWtDLE9BQ3hGLFVBQUMsSUFBZSxFQUFFLElBQWMsRUFBRSxNQUFXLElBQUssT0FBQSxJQUFJLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUE3QixDQUE2QixPQUN0RixVQUFDLElBQWUsRUFBRSxJQUFjLEVBQUUsTUFBVyxJQUFLLE9BQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBdEIsQ0FBc0IsT0FDdEUsVUFBQyxJQUFlLEVBQUUsSUFBYyxFQUFFLE1BQVcsSUFBSyxPQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXZCLENBQXVCLE9BQzdFLFVBQUMsSUFBZSxFQUFFLElBQWMsRUFBRSxNQUFXLElBQUssT0FBQSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUF4QixDQUF3QixPQUN4RSxVQUFDLElBQWUsRUFBRSxJQUFjLEVBQUUsTUFBVyxJQUFLLE9BQUEsSUFBSSxDQUFD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LGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLENBQUM7OztPQUFBO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBNUVELElBNEVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuL3RyZWUtbm9kZS5tb2RlbCc7XG5pbXBvcnQgeyBUcmVlTW9kZWwgfSBmcm9tICcuL3RyZWUubW9kZWwnO1xuaW1wb3J0IHsgS0VZUyB9IGZyb20gJy4uL2NvbnN0YW50cy9rZXlzJztcbmltcG9ydCB7IElUcmVlT3B0aW9ucyB9IGZyb20gJy4uL2RlZnMvYXBpJztcblxuaW1wb3J0IGRlZmF1bHRzRGVlcCBmcm9tICdsb2Rhc2gvZGVmYXVsdHNEZWVwJztcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCc7XG5pbXBvcnQgb21pdCBmcm9tICdsb2Rhc2gvb21pdCc7XG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnbG9kYXNoL2lzTnVtYmVyJztcblxuZXhwb3J0IGludGVyZmFjZSBJQWN0aW9uSGFuZGxlciB7XG4gICh0cmVlOiBUcmVlTW9kZWwsIG5vZGU6IFRyZWVOb2RlLCAkZXZlbnQ6IGFueSwgLi4ucmVzdCk7XG59XG5cbmV4cG9ydCBjb25zdCBUUkVFX0FDVElPTlMgPSB7XG4gIFRPR0dMRV9BQ1RJVkU6ICh0cmVlOiBUcmVlTW9kZWwsIG5vZGU6IFRyZWVOb2RlLCAkZXZlbnQ6IGFueSkgPT4gbm9kZSAmJiBub2RlLnRvZ2dsZUFjdGl2YXRlZCgpLFxuICBUT0dHTEVfQUNUSVZFX01VTFRJOiAodHJlZTogVHJlZU1vZGVsLCBub2RlOiBUcmVlTm9kZSwgJGV2ZW50OiBhbnkpID0+IG5vZGUgJiYgbm9kZS50b2dnbGVBY3RpdmF0ZWQodHJ1ZSksXG4gIFRPR0dMRV9TRUxFQ1RFRDogKHRyZWU6IFRyZWVNb2RlbCwgbm9kZTogVHJlZU5vZGUsICRldmVudDogYW55KSA9PiBub2RlICYmIG5vZGUudG9nZ2xlU2VsZWN0ZWQoKSxcbiAgQUNUSVZBVEU6ICh0cmVlOiBUcmVlTW9kZWwsIG5vZGU6IFRyZWVOb2RlLCAkZXZlbnQ6IGFueSkgPT4gbm9kZS5zZXRJc0FjdGl2ZSh0cnVlKSxcbiAgREVBQ1RJVkFURTogKHRyZWU6IFRyZWVNb2RlbCwgbm9kZTogVHJlZU5vZGUsICRldmVudDogYW55KSA9PiBub2RlLnNldElzQWN0aXZlKGZhbHNlKSxcbiAgU0VMRUNUOiAodHJlZTogVHJlZU1vZGVsLCBub2RlOiBUcmVlTm9kZSwgJGV2ZW50OiBhbnkpID0+IG5vZGUuc2V0SXNTZWxlY3RlZCh0cnVlKSxcbiAgREVTRUxFQ1Q6ICh0cmVlOiBUcmVlTW9kZWwsIG5vZGU6IFRyZWVOb2RlLCAkZXZlbnQ6IGFueSkgPT4gbm9kZS5zZXRJc1NlbGVjdGVkKGZhbHNlKSxcbiAgRk9DVVM6ICh0cmVlOiBUcmVlTW9kZWwsIG5vZGU6IFRyZWVOb2RlLCAkZXZlbnQ6IGFueSkgPT4gbm9kZS5mb2N1cygpLFxuICBUT0dHTEVfRVhQQU5ERUQ6ICh0cmVlOiBUcmVlTW9kZWwsIG5vZGU6IFRyZWVOb2RlLCAkZXZlbnQ6IGFueSkgPT4gbm9kZS5oYXNDaGlsZHJlbiAmJiBub2RlLnRvZ2dsZUV4cGFuZGVkKCksXG4gIEVYUEFORDogKHRyZWU6IFRyZWVNb2RlbCwgbm9kZTogVHJlZU5vZGUsICRldmVudDogYW55KSA9PiBub2RlLmV4cGFuZCgpLFxuICBDT0xMQVBTRTogKHRyZWU6IFRyZWVNb2RlbCwgbm9kZTogVHJlZU5vZGUsICRldmVudDogYW55KSA9PiBub2RlLmNvbGxhcHNlKCksXG4gIERSSUxMX0RPV046ICh0cmVlOiBUcmVlTW9kZWwsIG5vZGU6IFRyZWVOb2RlLCAkZXZlbnQ6IGFueSkgPT4gdHJlZS5mb2N1c0RyaWxsRG93bigpLFxuICBEUklMTF9VUDogKHRyZWU6IFRyZWVNb2RlbCwgbm9kZTogVHJlZU5vZGUsICRldmVudDogYW55KSA9PiB0cmVlLmZvY3VzRHJpbGxVcCgpLFxuICBORVhUX05PREU6ICh0cmVlOiBUcmVlTW9kZWwsIG5vZGU6IFRyZWVOb2RlLCAkZXZlbnQ6IGFueSkgPT4gIHRyZWUuZm9jdXNOZXh0Tm9kZSgpLFxuICBQUkVWSU9VU19OT0RFOiAodHJlZTogVHJlZU1vZGVsLCBub2RlOiBUcmVlTm9kZSwgJGV2ZW50OiBhbnkpID0+ICB0cmVlLmZvY3VzUHJldmlvdXNOb2RlKCksXG4gIE1PVkVfTk9ERTogKHRyZWU6IFRyZWVNb2RlbCwgbm9kZTogVHJlZU5vZGUsICRldmVudDogYW55LCB7ZnJvbSAsIHRvfToge2Zyb206IGFueSwgdG86IGFueX0pID0+IHtcbiAgICAvLyBkZWZhdWx0IGFjdGlvbiBhc3N1bWVzIGZyb20gPSBub2RlLCB0byA9IHtwYXJlbnQsIGluZGV4fVxuICAgIGlmICgkZXZlbnQuY3RybEtleSkge1xuICAgICAgdHJlZS5jb3B5Tm9kZShmcm9tLCB0byk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyZWUubW92ZU5vZGUoZnJvbSwgdG8pO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZGVmYXVsdEFjdGlvbk1hcHBpbmc6IElBY3Rpb25NYXBwaW5nID0ge1xuICBtb3VzZToge1xuICAgIGNsaWNrOiBUUkVFX0FDVElPTlMuVE9HR0xFX0FDVElWRSxcbiAgICBkYmxDbGljazogbnVsbCxcbiAgICBjb250ZXh0TWVudTogbnVsbCxcbiAgICBleHBhbmRlckNsaWNrOiBUUkVFX0FDVElPTlMuVE9HR0xFX0VYUEFOREVELFxuICAgIGNoZWNrYm94Q2xpY2s6IFRSRUVfQUNUSU9OUy5UT0dHTEVfU0VMRUNURUQsXG4gICAgZHJvcDogVFJFRV9BQ1RJT05TLk1PVkVfTk9ERVxuICB9LFxuICBrZXlzOiB7XG4gICAgW0tFWVMuUklHSFRdOiBUUkVFX0FDVElPTlMuRFJJTExfRE9XTixcbiAgICBbS0VZUy5MRUZUXTogVFJFRV9BQ1RJT05TLkRSSUxMX1VQLFxuICAgIFtLRVlTLkRPV05dOiBUUkVFX0FDVElPTlMuTkVYVF9OT0RFLFxuICAgIFtLRVlTLlVQXTogVFJFRV9BQ1RJT05TLlBSRVZJT1VTX05PREUsXG4gICAgW0tFWVMuU1BBQ0VdOiBUUkVFX0FDVElPTlMuVE9HR0xFX0FDVElWRSxcbiAgICBbS0VZUy5FTlRFUl06IFRSRUVfQUNUSU9OUy5UT0dHTEVfQUNUSVZFXG4gIH1cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFjdGlvbk1hcHBpbmcge1xuICBtb3VzZT86IHtcbiAgICBjbGljaz86IElBY3Rpb25IYW5kbGVyLFxuICAgIGRibENsaWNrPzogSUFjdGlvbkhhbmRsZXIsXG4gICAgY29udGV4dE1lbnU/OiBJQWN0aW9uSGFuZGxlcixcbiAgICBleHBhbmRlckNsaWNrPzogSUFjdGlvbkhhbmRsZXIsXG4gICAgY2hlY2tib3hDbGljaz86IElBY3Rpb25IYW5kbGVyLFxuICAgIGRyYWdTdGFydD86IElBY3Rpb25IYW5kbGVyLFxuICAgIGRyYWc/OiBJQWN0aW9uSGFuZGxlcixcbiAgICBkcmFnRW5kPzogSUFjdGlvbkhhbmRsZXIsXG4gICAgZHJhZ092ZXI/OiBJQWN0aW9uSGFuZGxlcixcbiAgICBkcmFnTGVhdmU/OiBJQWN0aW9uSGFuZGxlcixcbiAgICBkcmFnRW50ZXI/OiBJQWN0aW9uSGFuZGxlcixcbiAgICBkcm9wPzogSUFjdGlvbkhhbmRsZXIsXG4gICAgbW91c2VPdmVyPzogSUFjdGlvbkhhbmRsZXIsXG4gICAgbW91c2VPdXQ/OiBJQWN0aW9uSGFuZGxlclxuICB9O1xuICBrZXlzPzoge1xuICAgIFtrZXk6IG51bWJlcl06IElBY3Rpb25IYW5kbGVyXG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlT3B0aW9ucyB7XG4gIGdldCBoYXNDaGlsZHJlbkZpZWxkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm9wdGlvbnMuaGFzQ2hpbGRyZW5GaWVsZCB8fCAnaGFzQ2hpbGRyZW4nOyB9XG4gIGdldCBjaGlsZHJlbkZpZWxkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm9wdGlvbnMuY2hpbGRyZW5GaWVsZCB8fCAnY2hpbGRyZW4nOyB9XG4gIGdldCBkaXNwbGF5RmllbGQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMub3B0aW9ucy5kaXNwbGF5RmllbGQgfHwgJ25hbWUnOyB9XG4gIGdldCBpZEZpZWxkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm9wdGlvbnMuaWRGaWVsZCB8fCAnaWQnOyB9XG4gIGdldCBpc0V4cGFuZGVkRmllbGQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0V4cGFuZGVkRmllbGQgfHwgJ2lzRXhwYW5kZWQnOyB9XG4gIGdldCBnZXRDaGlsZHJlbigpOiBhbnkgeyByZXR1cm4gdGhpcy5vcHRpb25zLmdldENoaWxkcmVuOyB9XG4gIGdldCBsZXZlbFBhZGRpbmcoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMub3B0aW9ucy5sZXZlbFBhZGRpbmcgfHwgMDsgfVxuICBnZXQgdXNlVmlydHVhbFNjcm9sbCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMub3B0aW9ucy51c2VWaXJ0dWFsU2Nyb2xsOyB9XG4gIGdldCBhbmltYXRlRXhwYW5kKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5vcHRpb25zLmFuaW1hdGVFeHBhbmQ7IH1cbiAgZ2V0IGFuaW1hdGVTcGVlZCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5vcHRpb25zLmFuaW1hdGVTcGVlZCB8fCAxOyB9XG4gIGdldCBhbmltYXRlQWNjZWxlcmF0aW9uKCk6IG51bWJlciB7IHJldHVybiB0aGlzLm9wdGlvbnMuYW5pbWF0ZUFjY2VsZXJhdGlvbiB8fCAxLjI7IH1cbiAgZ2V0IHNjcm9sbE9uQWN0aXZhdGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLm9wdGlvbnMuc2Nyb2xsT25BY3RpdmF0ZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHRoaXMub3B0aW9ucy5zY3JvbGxPbkFjdGl2YXRlOyB9XG4gIGdldCBydGwoKTogYm9vbGVhbiB7IHJldHVybiAhIXRoaXMub3B0aW9ucy5ydGw7IH1cbiAgZ2V0IHJvb3RJZCgpOiBhbnkge3JldHVybiB0aGlzLm9wdGlvbnMucm9vdElkOyB9XG4gIGdldCB1c2VDaGVja2JveCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMub3B0aW9ucy51c2VDaGVja2JveDsgfVxuICBnZXQgdXNlVHJpU3RhdGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLm9wdGlvbnMudXNlVHJpU3RhdGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiB0aGlzLm9wdGlvbnMudXNlVHJpU3RhdGU7IH1cbiAgZ2V0IHNjcm9sbENvbnRhaW5lcigpOiBIVE1MRWxlbWVudCB7IHJldHVybiB0aGlzLm9wdGlvbnMuc2Nyb2xsQ29udGFpbmVyOyB9XG4gIGdldCBhbGxvd0RyYWdvdmVyU3R5bGluZygpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMub3B0aW9ucy5hbGxvd0RyYWdvdmVyU3R5bGluZyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHRoaXMub3B0aW9ucy5hbGxvd0RyYWdvdmVyU3R5bGluZzsgfVxuICBhY3Rpb25NYXBwaW5nOiBJQWN0aW9uTWFwcGluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9wdGlvbnM6IElUcmVlT3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5hY3Rpb25NYXBwaW5nID0gZGVmYXVsdHNEZWVwKHt9LCB0aGlzLm9wdGlvbnMuYWN0aW9uTWFwcGluZywgZGVmYXVsdEFjdGlvbk1hcHBpbmcpO1xuICAgIGlmIChvcHRpb25zLnJ0bCkge1xuICAgICAgdGhpcy5hY3Rpb25NYXBwaW5nLmtleXNbS0VZUy5SSUdIVF0gPSA8SUFjdGlvbkhhbmRsZXI+Z2V0KG9wdGlvbnMsIFsnYWN0aW9uTWFwcGluZycsICdrZXlzJywgS0VZUy5SSUdIVF0pIHx8IFRSRUVfQUNUSU9OUy5EUklMTF9VUDtcbiAgICAgIHRoaXMuYWN0aW9uTWFwcGluZy5rZXlzW0tFWVMuTEVGVF0gPSA8SUFjdGlvbkhhbmRsZXI+Z2V0KG9wdGlvbnMsIFsnYWN0aW9uTWFwcGluZycsICdrZXlzJywgS0VZUy5MRUZUXSkgfHwgVFJFRV9BQ1RJT05TLkRSSUxMX0RPV047XG4gICAgfVxuICB9XG5cbiAgZ2V0Tm9kZUNsb25lKG5vZGU6IFRyZWVOb2RlKTogYW55IHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmdldE5vZGVDbG9uZSkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXROb2RlQ2xvbmUobm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9taXQoT2JqZWN0LmFzc2lnbih7fSwgbm9kZS5kYXRhKSwgWydpZCddKTtcbiAgfVxuXG4gIGFsbG93RHJvcChlbGVtZW50LCB0bywgJGV2ZW50Pyk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuYWxsb3dEcm9wIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYWxsb3dEcm9wKGVsZW1lbnQsIHRvLCAkZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYWxsb3dEcm9wID09PSB1bmRlZmluZWQgPyB0cnVlIDogdGhpcy5vcHRpb25zLmFsbG93RHJvcDtcbiAgICB9XG4gIH1cblxuICBhbGxvd0RyYWcobm9kZTogVHJlZU5vZGUpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmFsbG93RHJhZyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmFsbG93RHJhZyhub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hbGxvd0RyYWc7XG4gICAgfVxuICB9XG5cbiAgbm9kZUNsYXNzKG5vZGU6IFRyZWVOb2RlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLm5vZGVDbGFzcyA/IHRoaXMub3B0aW9ucy5ub2RlQ2xhc3Mobm9kZSkgOiAnJztcbiAgfVxuXG4gIG5vZGVIZWlnaHQobm9kZTogVHJlZU5vZGUpOiBudW1iZXIge1xuICAgIGlmIChub2RlLmRhdGEudmlydHVhbCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgbGV0IG5vZGVIZWlnaHQgPSB0aGlzLm9wdGlvbnMubm9kZUhlaWdodCB8fCAyMjtcblxuICAgIGlmICh0eXBlb2Ygbm9kZUhlaWdodCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbm9kZUhlaWdodCA9IG5vZGVIZWlnaHQobm9kZSk7XG4gICAgfVxuXG4gICAgLy8gYWNjb3VudCBmb3IgZHJvcCBzbG90czpcbiAgICByZXR1cm4gbm9kZUhlaWdodCArIChub2RlLmluZGV4ID09PSAwID8gIDIgOiAxKSAqIHRoaXMuZHJvcFNsb3RIZWlnaHQ7XG4gIH1cblxuICBnZXQgZHJvcFNsb3RIZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5vcHRpb25zLmRyb3BTbG90SGVpZ2h0KSA/IHRoaXMub3B0aW9ucy5kcm9wU2xvdEhlaWdodCA6IDI7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "pFRH":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ "cvCv"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "O0oS"),
    identity = __webpack_require__(/*! ./identity */ "zZ0H");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "pSRY":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "QkVE");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "pZt1":
/*!*************************************!*\
  !*** ./node_modules/lodash/head.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * _.head([1, 2, 3]);
 * // => 1
 *
 * _.head([]);
 * // => undefined
 */
function head(array) {
  return (array && array.length) ? array[0] : undefined;
}

module.exports = head;


/***/ }),

/***/ "q8Sv":
/*!****************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/polyfills.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_closest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/closest */ "T0zN");
/* harmony import */ var _vendor_closest__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_closest__WEBPACK_IMPORTED_MODULE_0__);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWZpbGxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL3BvbHlmaWxscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLGtCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3ZlbmRvci9jbG9zZXN0JztcbiJdfQ==

/***/ }),

/***/ "qZTm":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "fR/l"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "MvSz"),
    keys = __webpack_require__(/*! ./keys */ "7GkX");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "rDsv":
/*!*****************************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/angular-tree-component.js ***!
  \*****************************************************************************************/
/*! exports provided: TreeModule, TreeModel, TreeNode, TreeDraggedElement, TreeVirtualScroll, TREE_ACTIONS, KEYS, LoadingComponent, TreeAnimateOpenDirective, TreeComponent, TreeNodeComponent, TreeNodeWrapperComponent, TreeNodeContent, TreeDropDirective, TreeDragDirective, TreeNodeExpanderComponent, TreeNodeChildrenComponent, TreeNodeDropSlot, TreeNodeCollectionComponent, TreeViewportComponent, TreeNodeCheckboxComponent, TreeMobxAutorunDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeModule", function() { return TreeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _mobx_angular_tree_mobx_autorun_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobx-angular/tree-mobx-autorun.directive */ "D5+F");
/* harmony import */ var _models_tree_options_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/tree-options.model */ "pA7x");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TREE_ACTIONS", function() { return _models_tree_options_model__WEBPACK_IMPORTED_MODULE_3__["TREE_ACTIONS"]; });

/* harmony import */ var _constants_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/keys */ "aXz+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEYS", function() { return _constants_keys__WEBPACK_IMPORTED_MODULE_4__["KEYS"]; });

/* harmony import */ var _models_tree_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/tree.model */ "PLWw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeModel", function() { return _models_tree_model__WEBPACK_IMPORTED_MODULE_5__["TreeModel"]; });

/* harmony import */ var _models_tree_node_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/tree-node.model */ "kJLP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return _models_tree_node_model__WEBPACK_IMPORTED_MODULE_6__["TreeNode"]; });

/* harmony import */ var _models_tree_dragged_element_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/tree-dragged-element.model */ "L9yc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeDraggedElement", function() { return _models_tree_dragged_element_model__WEBPACK_IMPORTED_MODULE_7__["TreeDraggedElement"]; });

/* harmony import */ var _models_tree_virtual_scroll_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/tree-virtual-scroll.model */ "kzw/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeVirtualScroll", function() { return _models_tree_virtual_scroll_model__WEBPACK_IMPORTED_MODULE_8__["TreeVirtualScroll"]; });

/* harmony import */ var _components_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/loading.component */ "jbLY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return _components_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"]; });

/* harmony import */ var _components_tree_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tree.component */ "7H/F");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return _components_tree_component__WEBPACK_IMPORTED_MODULE_10__["TreeComponent"]; });

/* harmony import */ var _components_tree_node_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/tree-node.component */ "cOj9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeNodeComponent", function() { return _components_tree_node_component__WEBPACK_IMPORTED_MODULE_11__["TreeNodeComponent"]; });

/* harmony import */ var _components_tree_node_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/tree-node-content.component */ "OF5B");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeNodeContent", function() { return _components_tree_node_content_component__WEBPACK_IMPORTED_MODULE_12__["TreeNodeContent"]; });

/* harmony import */ var _components_tree_node_drop_slot_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/tree-node-drop-slot.component */ "LLtC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeNodeDropSlot", function() { return _components_tree_node_drop_slot_component__WEBPACK_IMPORTED_MODULE_13__["TreeNodeDropSlot"]; });

/* harmony import */ var _components_tree_node_expander_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/tree-node-expander.component */ "JQxX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeNodeExpanderComponent", function() { return _components_tree_node_expander_component__WEBPACK_IMPORTED_MODULE_14__["TreeNodeExpanderComponent"]; });

/* harmony import */ var _components_tree_node_children_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/tree-node-children.component */ "Adh4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeNodeChildrenComponent", function() { return _components_tree_node_children_component__WEBPACK_IMPORTED_MODULE_15__["TreeNodeChildrenComponent"]; });

/* harmony import */ var _components_tree_node_collection_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/tree-node-collection.component */ "2FH8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeNodeCollectionComponent", function() { return _components_tree_node_collection_component__WEBPACK_IMPORTED_MODULE_16__["TreeNodeCollectionComponent"]; });

/* harmony import */ var _components_tree_node_wrapper_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/tree-node-wrapper.component */ "etd4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeNodeWrapperComponent", function() { return _components_tree_node_wrapper_component__WEBPACK_IMPORTED_MODULE_17__["TreeNodeWrapperComponent"]; });

/* harmony import */ var _components_tree_viewport_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/tree-viewport.component */ "oBzg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeViewportComponent", function() { return _components_tree_viewport_component__WEBPACK_IMPORTED_MODULE_18__["TreeViewportComponent"]; });

/* harmony import */ var _components_tree_node_checkbox_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/tree-node-checkbox.component */ "QPK0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeNodeCheckboxComponent", function() { return _components_tree_node_checkbox_component__WEBPACK_IMPORTED_MODULE_19__["TreeNodeCheckboxComponent"]; });

/* harmony import */ var _directives_tree_drop_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/tree-drop.directive */ "Jkoo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeDropDirective", function() { return _directives_tree_drop_directive__WEBPACK_IMPORTED_MODULE_20__["TreeDropDirective"]; });

/* harmony import */ var _directives_tree_drag_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/tree-drag.directive */ "wCVY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeDragDirective", function() { return _directives_tree_drag_directive__WEBPACK_IMPORTED_MODULE_21__["TreeDragDirective"]; });

/* harmony import */ var _directives_tree_animate_open_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./directives/tree-animate-open.directive */ "tTM/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeAnimateOpenDirective", function() { return _directives_tree_animate_open_directive__WEBPACK_IMPORTED_MODULE_22__["TreeAnimateOpenDirective"]; });

/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./polyfills */ "q8Sv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeMobxAutorunDirective", function() { return _mobx_angular_tree_mobx_autorun_directive__WEBPACK_IMPORTED_MODULE_2__["TreeMobxAutorunDirective"]; });



var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var TreeModule = /** @class */ (function () {
    function TreeModule() {
    }
    TreeModule_1 = TreeModule;
    TreeModule.forRoot = function () {
        return {
            ngModule: TreeModule_1,
            providers: [_models_tree_dragged_element_model__WEBPACK_IMPORTED_MODULE_7__["TreeDraggedElement"]]
        };
    };
    var TreeModule_1;
TreeModule.ɵfac = function TreeModule_Factory(t) { return new (t || TreeModule)(); };
TreeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TreeModule });
TreeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TreeModule, { declarations: function () { return [_components_tree_component__WEBPACK_IMPORTED_MODULE_10__["TreeComponent"],
        _components_tree_node_component__WEBPACK_IMPORTED_MODULE_11__["TreeNodeComponent"],
        _components_tree_node_content_component__WEBPACK_IMPORTED_MODULE_12__["TreeNodeContent"],
        _components_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"],
        _directives_tree_drop_directive__WEBPACK_IMPORTED_MODULE_20__["TreeDropDirective"],
        _directives_tree_drag_directive__WEBPACK_IMPORTED_MODULE_21__["TreeDragDirective"],
        _components_tree_node_expander_component__WEBPACK_IMPORTED_MODULE_14__["TreeNodeExpanderComponent"],
        _components_tree_node_children_component__WEBPACK_IMPORTED_MODULE_15__["TreeNodeChildrenComponent"],
        _components_tree_node_drop_slot_component__WEBPACK_IMPORTED_MODULE_13__["TreeNodeDropSlot"],
        _components_tree_node_collection_component__WEBPACK_IMPORTED_MODULE_16__["TreeNodeCollectionComponent"],
        _components_tree_viewport_component__WEBPACK_IMPORTED_MODULE_18__["TreeViewportComponent"],
        _components_tree_node_wrapper_component__WEBPACK_IMPORTED_MODULE_17__["TreeNodeWrapperComponent"],
        _components_tree_node_checkbox_component__WEBPACK_IMPORTED_MODULE_19__["TreeNodeCheckboxComponent"],
        _directives_tree_animate_open_directive__WEBPACK_IMPORTED_MODULE_22__["TreeAnimateOpenDirective"],
        _mobx_angular_tree_mobx_autorun_directive__WEBPACK_IMPORTED_MODULE_2__["TreeMobxAutorunDirective"]]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [_components_tree_component__WEBPACK_IMPORTED_MODULE_10__["TreeComponent"],
        _components_tree_node_component__WEBPACK_IMPORTED_MODULE_11__["TreeNodeComponent"],
        _components_tree_node_content_component__WEBPACK_IMPORTED_MODULE_12__["TreeNodeContent"],
        _components_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"],
        _directives_tree_drop_directive__WEBPACK_IMPORTED_MODULE_20__["TreeDropDirective"],
        _directives_tree_drag_directive__WEBPACK_IMPORTED_MODULE_21__["TreeDragDirective"],
        _components_tree_node_expander_component__WEBPACK_IMPORTED_MODULE_14__["TreeNodeExpanderComponent"],
        _components_tree_node_children_component__WEBPACK_IMPORTED_MODULE_15__["TreeNodeChildrenComponent"],
        _components_tree_node_drop_slot_component__WEBPACK_IMPORTED_MODULE_13__["TreeNodeDropSlot"],
        _components_tree_node_collection_component__WEBPACK_IMPORTED_MODULE_16__["TreeNodeCollectionComponent"],
        _components_tree_viewport_component__WEBPACK_IMPORTED_MODULE_18__["TreeViewportComponent"],
        _components_tree_node_wrapper_component__WEBPACK_IMPORTED_MODULE_17__["TreeNodeWrapperComponent"],
        _components_tree_node_checkbox_component__WEBPACK_IMPORTED_MODULE_19__["TreeNodeCheckboxComponent"],
        _directives_tree_animate_open_directive__WEBPACK_IMPORTED_MODULE_22__["TreeAnimateOpenDirective"],
        _mobx_angular_tree_mobx_autorun_directive__WEBPACK_IMPORTED_MODULE_2__["TreeMobxAutorunDirective"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_tree_component__WEBPACK_IMPORTED_MODULE_10__["TreeComponent"],
                    _components_tree_node_component__WEBPACK_IMPORTED_MODULE_11__["TreeNodeComponent"],
                    _components_tree_node_content_component__WEBPACK_IMPORTED_MODULE_12__["TreeNodeContent"],
                    _components_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"],
                    _directives_tree_drop_directive__WEBPACK_IMPORTED_MODULE_20__["TreeDropDirective"],
                    _directives_tree_drag_directive__WEBPACK_IMPORTED_MODULE_21__["TreeDragDirective"],
                    _components_tree_node_expander_component__WEBPACK_IMPORTED_MODULE_14__["TreeNodeExpanderComponent"],
                    _components_tree_node_children_component__WEBPACK_IMPORTED_MODULE_15__["TreeNodeChildrenComponent"],
                    _components_tree_node_drop_slot_component__WEBPACK_IMPORTED_MODULE_13__["TreeNodeDropSlot"],
                    _components_tree_node_collection_component__WEBPACK_IMPORTED_MODULE_16__["TreeNodeCollectionComponent"],
                    _components_tree_viewport_component__WEBPACK_IMPORTED_MODULE_18__["TreeViewportComponent"],
                    _components_tree_node_wrapper_component__WEBPACK_IMPORTED_MODULE_17__["TreeNodeWrapperComponent"],
                    _components_tree_node_checkbox_component__WEBPACK_IMPORTED_MODULE_19__["TreeNodeCheckboxComponent"],
                    _directives_tree_animate_open_directive__WEBPACK_IMPORTED_MODULE_22__["TreeAnimateOpenDirective"],
                    _mobx_angular_tree_mobx_autorun_directive__WEBPACK_IMPORTED_MODULE_2__["TreeMobxAutorunDirective"]
                ],
                exports: [
                    _components_tree_component__WEBPACK_IMPORTED_MODULE_10__["TreeComponent"],
                    _components_tree_node_component__WEBPACK_IMPORTED_MODULE_11__["TreeNodeComponent"],
                    _components_tree_node_content_component__WEBPACK_IMPORTED_MODULE_12__["TreeNodeContent"],
                    _components_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"],
                    _directives_tree_drop_directive__WEBPACK_IMPORTED_MODULE_20__["TreeDropDirective"],
                    _directives_tree_drag_directive__WEBPACK_IMPORTED_MODULE_21__["TreeDragDirective"],
                    _components_tree_node_expander_component__WEBPACK_IMPORTED_MODULE_14__["TreeNodeExpanderComponent"],
                    _components_tree_node_children_component__WEBPACK_IMPORTED_MODULE_15__["TreeNodeChildrenComponent"],
                    _components_tree_node_drop_slot_component__WEBPACK_IMPORTED_MODULE_13__["TreeNodeDropSlot"],
                    _components_tree_node_collection_component__WEBPACK_IMPORTED_MODULE_16__["TreeNodeCollectionComponent"],
                    _components_tree_viewport_component__WEBPACK_IMPORTED_MODULE_18__["TreeViewportComponent"],
                    _components_tree_node_wrapper_component__WEBPACK_IMPORTED_MODULE_17__["TreeNodeWrapperComponent"],
                    _components_tree_node_checkbox_component__WEBPACK_IMPORTED_MODULE_19__["TreeNodeCheckboxComponent"],
                    _directives_tree_animate_open_directive__WEBPACK_IMPORTED_MODULE_22__["TreeAnimateOpenDirective"],
                    _mobx_angular_tree_mobx_autorun_directive__WEBPACK_IMPORTED_MODULE_2__["TreeMobxAutorunDirective"]
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                providers: []
            }]
    }], function () { return []; }, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_components_tree_node_collection_component__WEBPACK_IMPORTED_MODULE_16__["TreeNodeCollectionComponent"], [_mobx_angular_tree_mobx_autorun_directive__WEBPACK_IMPORTED_MODULE_2__["TreeMobxAutorunDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _components_tree_node_component__WEBPACK_IMPORTED_MODULE_11__["TreeNodeComponent"]], []);
    return TreeModule;
}());




//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci10cmVlLWNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vbGliL2FuZ3VsYXItdHJlZS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFdEYsT0FBTyxFQUdMLFlBQVksRUFDYixNQUFNLDZCQUE2QixDQUFDO0FBT3JDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDMUYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFcEYsT0FBTyxhQUFhLENBQUM7QUF3Q3JCO0FBQ29CLElBRHBCO0FBQXdCLElBT3hCLENBQUM7QUFDRCxtQkFSYSxVQUFVO0FBQUUsSUFDaEIsa0JBQU8sR0FBZDtBQUFjLFFBQ1osT0FBTztBQUNYLFlBQU0sUUFBUSxFQUFFLFlBQVU7QUFDMUIsWUFBTSxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztBQUNyQyxTQUFLLENBQUM7QUFDTixJQUFFLENBQUM7QUFDRjtJQVBZLFVBQVUsdUNBdEN0QixRQUFRLENBQUMsY0FDUjtFQUFZLEVBQUUsa0JBQ1osYUFBYSxrQkFDYjtLQUFpQixrQkFDakIsZUFBZSxrQkFDZixnQkFBZ0I7Q0FDaEIsaUJBQWlCLGtCQUNqQixpQkFBaUIsa0JBQ2pCLHlCQUF5QixrQkFDekIseUJBQXlCO0FBQ3pCLGdCQUFnQjtPQUNoQjtTQUEyQjtDQUMzQixxQkFBcUI7YUFDckI7VUFBd0Isa0JBQ3hCO2tCQUF5QjtDQUN6Qix3QkFBd0I7aUJBQ3hCO0lBQXdCLGNBQ3pCO0NBQ0QsT0FBTyxFQUFFLGtCQUNQO09BQWEsa0JBQ2I7T0FBaUIsa0JBQ2pCO01BQWUsa0JBQ2YsZ0JBQWdCLGtCQUNoQixpQkFBaUIsa0JBQ2pCLGlCQUFpQixrQkFDakI7b0JBQXlCO1dBQ3pCO1dBQXlCO0dBQ3pCLGdCQUFnQjtVQUNoQjtVQUEyQixrQkFDM0I7Y0FBcUIsa0JBQ3JCO3FCQUF3QjthQUN4QjtDQUF5QixrQkFDekI7WUFBd0Isa0JBQ3hCO29CQUF3QixjQUN6QjthQUNELE9BQU8sRUFBRSxDQUFDO0NBQVksQ0FBQyxjQUN2QixTQUFTLEVBQUUsRUFBRSxVQUNkLENBQUM7Q0FDVyxVQUFVLENBT3RCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsySEFDRDtBQUNBLElBRkEsaUJBQUM7QUFFRCxDQUZDLEFBUEQsSUFPQztBQUNELFNBUmEsVUFBVTtBQVN2QixPQUFPLEVBQ0wsU0FBUyxFQUNULFFBQVEsRUFDUixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBRWpCLFlBQVksRUFDWixJQUFJLEVBS0osZ0JBQWdCLEVBQ2hCLHdCQUF3QixFQUN4QixhQUFhLEVBQ2IsaUJBQWlCLEVBQ2pCLHdCQUF3QixFQUN4QixlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLGlCQUFpQixFQUNqQix5QkFBeUIsRUFDekIseUJBQXlCLEVBQ3pCLGdCQUFnQixFQUNoQiwyQkFBMkIsRUFDM0IscUJBQXFCLEVBQ3JCLHlCQUF5QixFQUUxQixDQUFDO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRyZWVNb2J4QXV0b3J1bkRpcmVjdGl2ZSB9IGZyb20gJy4vbW9ieC1hbmd1bGFyL3RyZWUtbW9ieC1hdXRvcnVuLmRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7XG4gIElBY3Rpb25IYW5kbGVyLFxuICBJQWN0aW9uTWFwcGluZyxcbiAgVFJFRV9BQ1RJT05TXG59IGZyb20gJy4vbW9kZWxzL3RyZWUtb3B0aW9ucy5tb2RlbCc7XG5pbXBvcnQge1xuICBJQWxsb3dEcmFnRm4sXG4gIElBbGxvd0Ryb3BGbixcbiAgSVRyZWVPcHRpb25zLFxuICBJVHJlZVN0YXRlXG59IGZyb20gJy4vZGVmcy9hcGknO1xuaW1wb3J0IHsgS0VZUyB9IGZyb20gJy4vY29uc3RhbnRzL2tleXMnO1xuaW1wb3J0IHsgVHJlZU1vZGVsIH0gZnJvbSAnLi9tb2RlbHMvdHJlZS5tb2RlbCc7XG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XG5pbXBvcnQgeyBUcmVlRHJhZ2dlZEVsZW1lbnQgfSBmcm9tICcuL21vZGVscy90cmVlLWRyYWdnZWQtZWxlbWVudC5tb2RlbCc7XG5pbXBvcnQgeyBUcmVlVmlydHVhbFNjcm9sbCB9IGZyb20gJy4vbW9kZWxzL3RyZWUtdmlydHVhbC1zY3JvbGwubW9kZWwnO1xuaW1wb3J0IHsgTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUuY29tcG9uZW50JztcbmltcG9ydCB7IFRyZWVOb2RlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJlZU5vZGVDb250ZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlTm9kZURyb3BTbG90IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1kcm9wLXNsb3QuY29tcG9uZW50JztcbmltcG9ydCB7IFRyZWVOb2RlRXhwYW5kZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJlZS1ub2RlLWV4cGFuZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlTm9kZUNoaWxkcmVuQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1jaGlsZHJlbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJlZU5vZGVDb2xsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1jb2xsZWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlTm9kZVdyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJlZS1ub2RlLXdyYXBwZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRyZWVWaWV3cG9ydENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmVlLXZpZXdwb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlTm9kZUNoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJlZURyb3BEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdHJlZS1kcm9wLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUcmVlRHJhZ0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy90cmVlLWRyYWcuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRyZWVBbmltYXRlT3BlbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy90cmVlLWFuaW1hdGUtb3Blbi5kaXJlY3RpdmUnO1xuXG5pbXBvcnQgJy4vcG9seWZpbGxzJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVHJlZUNvbXBvbmVudCxcbiAgICBUcmVlTm9kZUNvbXBvbmVudCxcbiAgICBUcmVlTm9kZUNvbnRlbnQsXG4gICAgTG9hZGluZ0NvbXBvbmVudCxcbiAgICBUcmVlRHJvcERpcmVjdGl2ZSxcbiAgICBUcmVlRHJhZ0RpcmVjdGl2ZSxcbiAgICBUcmVlTm9kZUV4cGFuZGVyQ29tcG9uZW50LFxuICAgIFRyZWVOb2RlQ2hpbGRyZW5Db21wb25lbnQsXG4gICAgVHJlZU5vZGVEcm9wU2xvdCxcbiAgICBUcmVlTm9kZUNvbGxlY3Rpb25Db21wb25lbnQsXG4gICAgVHJlZVZpZXdwb3J0Q29tcG9uZW50LFxuICAgIFRyZWVOb2RlV3JhcHBlckNvbXBvbmVudCxcbiAgICBUcmVlTm9kZUNoZWNrYm94Q29tcG9uZW50LFxuICAgIFRyZWVBbmltYXRlT3BlbkRpcmVjdGl2ZSxcbiAgICBUcmVlTW9ieEF1dG9ydW5EaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRyZWVDb21wb25lbnQsXG4gICAgVHJlZU5vZGVDb21wb25lbnQsXG4gICAgVHJlZU5vZGVDb250ZW50LFxuICAgIExvYWRpbmdDb21wb25lbnQsXG4gICAgVHJlZURyb3BEaXJlY3RpdmUsXG4gICAgVHJlZURyYWdEaXJlY3RpdmUsXG4gICAgVHJlZU5vZGVFeHBhbmRlckNvbXBvbmVudCxcbiAgICBUcmVlTm9kZUNoaWxkcmVuQ29tcG9uZW50LFxuICAgIFRyZWVOb2RlRHJvcFNsb3QsXG4gICAgVHJlZU5vZGVDb2xsZWN0aW9uQ29tcG9uZW50LFxuICAgIFRyZWVWaWV3cG9ydENvbXBvbmVudCxcbiAgICBUcmVlTm9kZVdyYXBwZXJDb21wb25lbnQsXG4gICAgVHJlZU5vZGVDaGVja2JveENvbXBvbmVudCxcbiAgICBUcmVlQW5pbWF0ZU9wZW5EaXJlY3RpdmUsXG4gICAgVHJlZU1vYnhBdXRvcnVuRGlyZWN0aXZlXG4gIF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRyZWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtUcmVlRHJhZ2dlZEVsZW1lbnRdXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBUcmVlTW9kZWwsXG4gIFRyZWVOb2RlLFxuICBUcmVlRHJhZ2dlZEVsZW1lbnQsXG4gIFRyZWVWaXJ0dWFsU2Nyb2xsLFxuICBJVHJlZU9wdGlvbnMsXG4gIFRSRUVfQUNUSU9OUyxcbiAgS0VZUyxcbiAgSUFjdGlvbk1hcHBpbmcsXG4gIElBY3Rpb25IYW5kbGVyLFxuICBJQWxsb3dEcm9wRm4sXG4gIElBbGxvd0RyYWdGbixcbiAgTG9hZGluZ0NvbXBvbmVudCxcbiAgVHJlZUFuaW1hdGVPcGVuRGlyZWN0aXZlLFxuICBUcmVlQ29tcG9uZW50LFxuICBUcmVlTm9kZUNvbXBvbmVudCxcbiAgVHJlZU5vZGVXcmFwcGVyQ29tcG9uZW50LFxuICBUcmVlTm9kZUNvbnRlbnQsXG4gIFRyZWVEcm9wRGlyZWN0aXZlLFxuICBUcmVlRHJhZ0RpcmVjdGl2ZSxcbiAgVHJlZU5vZGVFeHBhbmRlckNvbXBvbmVudCxcbiAgVHJlZU5vZGVDaGlsZHJlbkNvbXBvbmVudCxcbiAgVHJlZU5vZGVEcm9wU2xvdCxcbiAgVHJlZU5vZGVDb2xsZWN0aW9uQ29tcG9uZW50LFxuICBUcmVlVmlld3BvcnRDb21wb25lbnQsXG4gIFRyZWVOb2RlQ2hlY2tib3hDb21wb25lbnQsXG4gIElUcmVlU3RhdGVcbn07XG4iXX0=

/***/ }),

/***/ "rEGp":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "sEf8":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "sEfC":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "GoyQ"),
    now = __webpack_require__(/*! ./now */ "QIyF"),
    toNumber = __webpack_require__(/*! ./toNumber */ "tLB3");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "seXi":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "qZTm");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "shjB":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "t2Dn":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_assignMergeValue.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "hypo"),
    eq = __webpack_require__(/*! ./eq */ "ljhN");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ "tLB3":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "jXQH"),
    isObject = __webpack_require__(/*! ./isObject */ "GoyQ"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "/9aa");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "tMB7":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "y1pI");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "tTM/":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/directives/tree-animate-open.directive.js ***!
  \*********************************************************************************************************/
/*! exports provided: TreeAnimateOpenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeAnimateOpenDirective", function() { return TreeAnimateOpenDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EASE_ACCELERATION = 1.005;
var TreeAnimateOpenDirective = /** @class */ (function () {
    function TreeAnimateOpenDirective(renderer, templateRef, viewContainerRef) {
        this.renderer = renderer;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    Object.defineProperty(TreeAnimateOpenDirective.prototype, "isOpen", {
        set: function (value) {
            if (value) {
                this._show();
                if (this.isEnabled && this._isOpen === false) {
                    this._animateOpen();
                }
            }
            else {
                this.isEnabled ? this._animateClose() : this._hide();
            }
            this._isOpen = !!value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    TreeAnimateOpenDirective.prototype._show = function () {
        if (this.innerElement)
            return;
        // create child view
        this.innerElement = this.viewContainerRef.createEmbeddedView(this.templateRef).rootNodes[0];
    };
    TreeAnimateOpenDirective.prototype._hide = function () {
        this.viewContainerRef.clear();
        this.innerElement = null;
    };
    TreeAnimateOpenDirective.prototype._animateOpen = function () {
        var _this = this;
        var delta = this.animateSpeed;
        var ease = this.animateAcceleration;
        var maxHeight = 0;
        // set height to 0
        this.renderer.setStyle(this.innerElement, 'max-height', "0");
        // increase maxHeight until height doesn't change
        setTimeout(function () {
            var i = setInterval(function () {
                if (!_this._isOpen || !_this.innerElement)
                    return clearInterval(i);
                maxHeight += delta;
                var roundedMaxHeight = Math.round(maxHeight);
                _this.renderer.setStyle(_this.innerElement, 'max-height', roundedMaxHeight + "px");
                var height = _this.innerElement.getBoundingClientRect ? _this.innerElement.getBoundingClientRect().height : 0; // TBD use renderer
                delta *= ease;
                ease *= EASE_ACCELERATION;
                if (height < roundedMaxHeight) {
                    // Make maxHeight auto because animation finished and container might change height later on
                    _this.renderer.setStyle(_this.innerElement, 'max-height', null);
                    clearInterval(i);
                }
            }, 17);
        });
    };
    TreeAnimateOpenDirective.prototype._animateClose = function () {
        var _this = this;
        if (!this.innerElement)
            return;
        var delta = this.animateSpeed;
        var ease = this.animateAcceleration;
        var height = this.innerElement.getBoundingClientRect().height; // TBD use renderer
        // slowly decrease maxHeight to 0, starting from current height
        var i = setInterval(function () {
            if (_this._isOpen || !_this.innerElement)
                return clearInterval(i);
            height -= delta;
            _this.renderer.setStyle(_this.innerElement, 'max-height', height + "px");
            delta *= ease;
            ease *= EASE_ACCELERATION;
            if (height <= 0) {
                // after animation complete - remove child element
                _this.viewContainerRef.clear();
                _this.innerElement = null;
                clearInterval(i);
            }
        }, 17);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('treeAnimateOpenSpeed'),
        __metadata("design:type", Number)
    ], TreeAnimateOpenDirective.prototype, "animateSpeed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('treeAnimateOpenAcceleration'),
        __metadata("design:type", Number)
    ], TreeAnimateOpenDirective.prototype, "animateAcceleration", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('treeAnimateOpenEnabled'),
        __metadata("design:type", Boolean)
    ], TreeAnimateOpenDirective.prototype, "isEnabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('treeAnimateOpen'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TreeAnimateOpenDirective.prototype, "isOpen", null);
    TreeAnimateOpenDirective = __decorate([ __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], TreeAnimateOpenDirective);
TreeAnimateOpenDirective.ɵfac = function TreeAnimateOpenDirective_Factory(t) { return new (t || TreeAnimateOpenDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
TreeAnimateOpenDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TreeAnimateOpenDirective, selectors: [["", "treeAnimateOpen", ""]], inputs: { isOpen: ["treeAnimateOpen", "isOpen"], animateSpeed: ["treeAnimateOpenSpeed", "animateSpeed"], animateAcceleration: ["treeAnimateOpenAcceleration", "animateAcceleration"], isEnabled: ["treeAnimateOpenEnabled", "isEnabled"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeAnimateOpenDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[treeAnimateOpen]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['treeAnimateOpen']
        }], animateSpeed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['treeAnimateOpenSpeed']
        }], animateAcceleration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['treeAnimateOpenAcceleration']
        }], isEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['treeAnimateOpenEnabled']
        }] }); })();
    return TreeAnimateOpenDirective;
}());


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1hbmltYXRlLW9wZW4uZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyIuLi8uLi9saWIvZGlyZWN0aXZlcy90cmVlLWFuaW1hdGUtb3Blbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0YsSUFBTSxpQkFBaUIsR0FBRyxLQUFLLENBQUM7QUFLaEM7QUFDb0IsSUFxQmxCLGtDQUNVLFFBQW1CLEVBQ25CLFdBQTZCLEVBQzdCLGdCQUFrQztBQUM5QyxRQUhZLGFBQVEsR0FBUixRQUFRLENBQVc7QUFBQyxRQUNwQixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7QUFBQyxRQUM5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0FBQUMsSUFDN0MsQ0FBQztBQUNILElBbkJFLHNCQUFJLDRDQUFNO0FBQUksYUFBZCxVQUFXLEtBQWM7QUFDM0IsWUFBSSxJQUFJLEtBQUssRUFBRTtBQUNmLGdCQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNuQixnQkFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7QUFDcEQsb0JBQVEsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzVCLGlCQUFPO0FBQ1AsYUFBSztBQUFDLGlCQUFLO0FBQ1gsZ0JBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDM0QsYUFBSztBQUNMLFlBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQzNCLFFBQUUsQ0FBQztBQUNIO0FBQ3lCO0FBR2xCLE9BTEo7QUFBQyxJQUFELENBQUM7QUFD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LHdCQUF3QixDQThGcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsSUFERCwrQkFBQztBQUNBLENBREEsQUE5RkQsSUE4RkM7QUFDRCxTQS9GYSx3QkFBd0I7QUFDcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IEVBU0VfQUNDRUxFUkFUSU9OID0gMS4wMDU7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0cmVlQW5pbWF0ZU9wZW5dJ1xufSlcbmV4cG9ydCBjbGFzcyBUcmVlQW5pbWF0ZU9wZW5EaXJlY3RpdmUge1xuICBwcml2YXRlIF9pc09wZW46IGJvb2xlYW47XG5cbiAgQElucHV0KCd0cmVlQW5pbWF0ZU9wZW5TcGVlZCcpIGFuaW1hdGVTcGVlZDogbnVtYmVyO1xuICBASW5wdXQoJ3RyZWVBbmltYXRlT3BlbkFjY2VsZXJhdGlvbicpIGFuaW1hdGVBY2NlbGVyYXRpb246IG51bWJlcjtcbiAgQElucHV0KCd0cmVlQW5pbWF0ZU9wZW5FbmFibGVkJykgaXNFbmFibGVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgndHJlZUFuaW1hdGVPcGVuJylcbiAgc2V0IGlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5fc2hvdygpO1xuICAgICAgaWYgKHRoaXMuaXNFbmFibGVkICYmIHRoaXMuX2lzT3BlbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0ZU9wZW4oKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0VuYWJsZWQgPyB0aGlzLl9hbmltYXRlQ2xvc2UoKSA6IHRoaXMuX2hpZGUoKTtcbiAgICB9XG4gICAgdGhpcy5faXNPcGVuID0gISF2YWx1ZTtcbiAgfTtcblxuICBwcml2YXRlIGlubmVyRWxlbWVudDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICB9XG5cbiAgcHJpdmF0ZSBfc2hvdygpIHtcbiAgICBpZiAodGhpcy5pbm5lckVsZW1lbnQpIHJldHVybjtcblxuICAgIC8vIGNyZWF0ZSBjaGlsZCB2aWV3XG4gICAgdGhpcy5pbm5lckVsZW1lbnQgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpLnJvb3ROb2Rlc1swXTtcbiAgfVxuXG4gIHByaXZhdGUgX2hpZGUoKSB7XG4gICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gICAgdGhpcy5pbm5lckVsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfYW5pbWF0ZU9wZW4oKSB7XG4gICAgbGV0IGRlbHRhID0gdGhpcy5hbmltYXRlU3BlZWQ7XG4gICAgbGV0IGVhc2UgPSB0aGlzLmFuaW1hdGVBY2NlbGVyYXRpb247XG4gICAgbGV0IG1heEhlaWdodCA9IDA7XG5cbiAgICAvLyBzZXQgaGVpZ2h0IHRvIDBcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaW5uZXJFbGVtZW50LCAnbWF4LWhlaWdodCcsIGAwYCk7XG5cbiAgICAvLyBpbmNyZWFzZSBtYXhIZWlnaHQgdW50aWwgaGVpZ2h0IGRvZXNuJ3QgY2hhbmdlXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IC8vIEFsbG93IGlubmVyIGVsZW1lbnQgdG8gY3JlYXRlIGl0cyBjb250ZW50XG4gICAgICBjb25zdCBpID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2lzT3BlbiB8fCAhdGhpcy5pbm5lckVsZW1lbnQpIHJldHVybiBjbGVhckludGVydmFsKGkpO1xuXG4gICAgICAgIG1heEhlaWdodCArPSBkZWx0YTtcbiAgICAgICAgY29uc3Qgcm91bmRlZE1heEhlaWdodCA9IE1hdGgucm91bmQobWF4SGVpZ2h0KTtcblxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaW5uZXJFbGVtZW50LCAnbWF4LWhlaWdodCcsIGAke3JvdW5kZWRNYXhIZWlnaHR9cHhgKTtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5pbm5lckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID8gdGhpcy5pbm5lckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IDogMDsgLy8gVEJEIHVzZSByZW5kZXJlclxuXG4gICAgICAgIGRlbHRhICo9IGVhc2U7XG4gICAgICAgIGVhc2UgKj0gRUFTRV9BQ0NFTEVSQVRJT047XG4gICAgICAgIGlmIChoZWlnaHQgPCByb3VuZGVkTWF4SGVpZ2h0KSB7XG4gICAgICAgICAgLy8gTWFrZSBtYXhIZWlnaHQgYXV0byBiZWNhdXNlIGFuaW1hdGlvbiBmaW5pc2hlZCBhbmQgY29udGFpbmVyIG1pZ2h0IGNoYW5nZSBoZWlnaHQgbGF0ZXIgb25cbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaW5uZXJFbGVtZW50LCAnbWF4LWhlaWdodCcsIG51bGwpO1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgIH1cbiAgICAgIH0sIDE3KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2FuaW1hdGVDbG9zZSgpIHtcbiAgICBpZiAoIXRoaXMuaW5uZXJFbGVtZW50KSByZXR1cm47XG5cbiAgICBsZXQgZGVsdGEgPSB0aGlzLmFuaW1hdGVTcGVlZDtcbiAgICBsZXQgZWFzZSA9IHRoaXMuYW5pbWF0ZUFjY2VsZXJhdGlvbjtcbiAgICBsZXQgaGVpZ2h0ID0gdGhpcy5pbm5lckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0OyAvLyBUQkQgdXNlIHJlbmRlcmVyXG5cbiAgICAvLyBzbG93bHkgZGVjcmVhc2UgbWF4SGVpZ2h0IHRvIDAsIHN0YXJ0aW5nIGZyb20gY3VycmVudCBoZWlnaHRcbiAgICBjb25zdCBpID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2lzT3BlbiB8fCAhdGhpcy5pbm5lckVsZW1lbnQpIHJldHVybiBjbGVhckludGVydmFsKGkpO1xuXG4gICAgICBoZWlnaHQgLT0gZGVsdGE7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaW5uZXJFbGVtZW50LCAnbWF4LWhlaWdodCcsIGAke2hlaWdodH1weGApO1xuICAgICAgZGVsdGEgKj0gZWFzZTtcbiAgICAgIGVhc2UgKj0gRUFTRV9BQ0NFTEVSQVRJT047XG5cbiAgICAgIGlmIChoZWlnaHQgPD0gMCkge1xuICAgICAgICAvLyBhZnRlciBhbmltYXRpb24gY29tcGxldGUgLSByZW1vdmUgY2hpbGQgZWxlbWVudFxuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5pbm5lckVsZW1lbnQgPSBudWxsO1xuICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgICAgfVxuICAgIH0sIDE3KTtcbiAgfVxufVxuIl19

/***/ }),

/***/ "tadb":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "Cwc5"),
    root = __webpack_require__(/*! ./_root */ "Kz5y");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "u8Dt":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "YESw");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "ut/Y":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "ZCpW"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "GDhZ"),
    identity = __webpack_require__(/*! ./identity */ "zZ0H"),
    isArray = __webpack_require__(/*! ./isArray */ "Z0cm"),
    property = __webpack_require__(/*! ./property */ "+c4W");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "w/wX":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "QqLw"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "ExA7");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "wCVY":
/*!*************************************************************************************************!*\
  !*** ./node_modules/angular-tree-component/__ivy_ngcc__/dist/directives/tree-drag.directive.js ***!
  \*************************************************************************************************/
/*! exports provided: TreeDragDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDragDirective", function() { return TreeDragDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_tree_dragged_element_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/tree-dragged-element.model */ "L9yc");


var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DRAG_OVER_CLASS = 'is-dragging-over';
var TreeDragDirective = /** @class */ (function () {
    function TreeDragDirective(el, renderer, treeDraggedElement, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.treeDraggedElement = treeDraggedElement;
        this.ngZone = ngZone;
        this.dragEventHandler = this.onDrag.bind(this);
    }
    TreeDragDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        var el = this.el.nativeElement;
        this.ngZone.runOutsideAngular(function () {
            el.addEventListener('drag', _this.dragEventHandler);
        });
    };
    TreeDragDirective.prototype.ngDoCheck = function () {
        this.renderer.setAttribute(this.el.nativeElement, 'draggable', this.treeDragEnabled ? 'true' : 'false');
    };
    TreeDragDirective.prototype.ngOnDestroy = function () {
        var el = this.el.nativeElement;
        el.removeEventListener('drag', this.dragEventHandler);
    };
    TreeDragDirective.prototype.onDragStart = function (ev) {
        // setting the data is required by firefox
        ev.dataTransfer.setData('text', ev.target.id);
        this.treeDraggedElement.set(this.draggedElement);
        if (this.draggedElement.mouseAction) {
            this.draggedElement.mouseAction('dragStart', ev);
        }
    };
    TreeDragDirective.prototype.onDrag = function (ev) {
        if (this.draggedElement.mouseAction) {
            this.draggedElement.mouseAction('drag', ev);
        }
    };
    TreeDragDirective.prototype.onDragEnd = function () {
        if (this.draggedElement.mouseAction) {
            this.draggedElement.mouseAction('dragEnd');
        }
        this.treeDraggedElement.set(null);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('treeDrag'),
        __metadata("design:type", Object)
    ], TreeDragDirective.prototype, "draggedElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TreeDragDirective.prototype, "treeDragEnabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragstart', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeDragDirective.prototype, "onDragStart", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragend'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeDragDirective.prototype, "onDragEnd", null);
    TreeDragDirective = __decorate([ __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _models_tree_dragged_element_model__WEBPACK_IMPORTED_MODULE_1__["TreeDraggedElement"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], TreeDragDirective);
TreeDragDirective.ɵfac = function TreeDragDirective_Factory(t) { return new (t || TreeDragDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_models_tree_dragged_element_model__WEBPACK_IMPORTED_MODULE_1__["TreeDraggedElement"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
TreeDragDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TreeDragDirective, selectors: [["", "treeDrag", ""]], hostBindings: function TreeDragDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragstart", function TreeDragDirective_dragstart_HostBindingHandler($event) { return ctx.onDragStart($event); })("dragend", function TreeDragDirective_dragend_HostBindingHandler() { return ctx.onDragEnd(); });
    } }, inputs: { draggedElement: ["treeDrag", "draggedElement"], treeDragEnabled: "treeDragEnabled" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeDragDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[treeDrag]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _models_tree_dragged_element_model__WEBPACK_IMPORTED_MODULE_1__["TreeDraggedElement"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { onDragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragstart', ['$event']]
        }], onDragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragend']
        }], draggedElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['treeDrag']
        }], treeDragEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return TreeDragDirective;
}());


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1kcmFnLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2RpcmVjdGl2ZXMvdHJlZS1kcmFnLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFXLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakksT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFMUUsSUFBTSxlQUFlLEdBQUcsa0JBQWtCLENBQUM7QUFLM0M7QUFBcUQsSUFLbkQsMkJBQW9CLEVBQWMsRUFBVSxRQUFtQixFQUFVLGtCQUFzQyxFQUFVLE1BQWM7QUFDekksUUFEc0IsT0FBRSxHQUFGLEVBQUUsQ0FBWTtBQUFDLFFBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVztBQUFDLFFBQVMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtBQUFDLFFBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtBQUFDLFFBQ3RJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuRCxJQUFFLENBQUM7QUFDSCxJQUNFLDJDQUFlLEdBQWY7QUFBYyxRQUFkLGlCQUtDO0FBQ0gsUUFMSSxJQUFJLEVBQUUsR0FBZ0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7QUFDaEQsUUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDO0FBQzVCLFlBQUEsRUFBRSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN6RCxRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsSUFBRSxDQUFDO0FBRUgsSUFBRSxxQ0FBUyxHQUFUO0FBQ0YsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM1RyxJQUFFLENBQUM7QUFFSCxJQUFFLHVDQUFXLEdBQVg7QUFBYyxRQUNaLElBQUksRUFBRSxHQUFnQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztBQUNoRCxRQUFJLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDMUQsSUFBRSxDQUFDO0FBRUgsSUFBeUMsdUNBQVcsR0FBWCxVQUFZLEVBQUU7QUFDdkQsUUFBSSwwQ0FBMEM7QUFDOUMsUUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNsRCxRQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3JELFFBQUksSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRTtBQUN6QyxZQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN2RCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBRUgsSUFBRSxrQ0FBTSxHQUFOLFVBQU8sRUFBRTtBQUNYLFFBQUksSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRTtBQUN6QyxZQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNsRCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBRUgsSUFBMkIscUNBQVMsR0FBVDtBQUMzQixRQUFJLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUU7QUFDekMsWUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqRCxTQUFLO0FBQ0wsUUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RDLElBQUUsQ0FBQztBQUNGLElBN0NvQjtBQUFhLFFBQS9CLEtBQUssQ0FBQyxVQUFVLENBQUM7QUFBRTtBQUNLLDZEQURTO0FBQ25DLElBQVU7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBRTtBQUNjLDhEQURDO0FBQzFCLElBc0J3QztBQUFhLFFBQW5ELFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUFFO0FBQ2Q7QUFDSTtBQUNILHdEQUkxQjtBQUVILElBTTJCO0FBQWEsUUFBckMsWUFBWSxDQUFDLFNBQVMsQ0FBQztBQUFFO0FBQ0k7QUFDRTtBQUVSLHNEQUN2QjtBQUNGLElBOUNZLGlCQUFpQix3QkFIN0IsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFLFlBQVksVUFDdkIsQ0FBQyxsRUFDTSxrQ0FLa0IsVUFBVSxFQUFvQixTQUFTLEVBQThCLGtCQUFrQixFQUFrQixNQUFNO0FBQUcsT0FML0gsaUJBQWlCLENBOEM3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsSUFERCx3QkFBQztBQUNBLENBREEsQUE5Q0QsSUE4Q0M7QUFDRCxTQS9DYSxpQkFBaUI7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRG9DaGVjaywgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJlZURyYWdnZWRFbGVtZW50IH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtZHJhZ2dlZC1lbGVtZW50Lm1vZGVsJztcblxuY29uc3QgRFJBR19PVkVSX0NMQVNTID0gJ2lzLWRyYWdnaW5nLW92ZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdHJlZURyYWddJ1xufSlcbmV4cG9ydCBjbGFzcyBUcmVlRHJhZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIERvQ2hlY2ssIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgndHJlZURyYWcnKSBkcmFnZ2VkRWxlbWVudDtcbiAgQElucHV0KCkgdHJlZURyYWdFbmFibGVkO1xuICBwcml2YXRlIHJlYWRvbmx5IGRyYWdFdmVudEhhbmRsZXI6IChldjogRHJhZ0V2ZW50KSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSB0cmVlRHJhZ2dlZEVsZW1lbnQ6IFRyZWVEcmFnZ2VkRWxlbWVudCwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMuZHJhZ0V2ZW50SGFuZGxlciA9IHRoaXMub25EcmFnLmJpbmQodGhpcyk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgbGV0IGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnJywgdGhpcy5kcmFnRXZlbnRIYW5kbGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdkcmFnZ2FibGUnLCB0aGlzLnRyZWVEcmFnRW5hYmxlZCA/ICd0cnVlJyA6ICdmYWxzZScpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgbGV0IGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnJywgdGhpcy5kcmFnRXZlbnRIYW5kbGVyKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdzdGFydCcsIFsnJGV2ZW50J10pIG9uRHJhZ1N0YXJ0KGV2KSB7XG4gICAgLy8gc2V0dGluZyB0aGUgZGF0YSBpcyByZXF1aXJlZCBieSBmaXJlZm94XG4gICAgZXYuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCBldi50YXJnZXQuaWQpO1xuICAgIHRoaXMudHJlZURyYWdnZWRFbGVtZW50LnNldCh0aGlzLmRyYWdnZWRFbGVtZW50KTtcbiAgICBpZiAodGhpcy5kcmFnZ2VkRWxlbWVudC5tb3VzZUFjdGlvbikge1xuICAgICAgdGhpcy5kcmFnZ2VkRWxlbWVudC5tb3VzZUFjdGlvbignZHJhZ1N0YXJ0JywgZXYpO1xuICAgIH1cbiAgfVxuXG4gIG9uRHJhZyhldikge1xuICAgIGlmICh0aGlzLmRyYWdnZWRFbGVtZW50Lm1vdXNlQWN0aW9uKSB7XG4gICAgICB0aGlzLmRyYWdnZWRFbGVtZW50Lm1vdXNlQWN0aW9uKCdkcmFnJywgZXYpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdlbmQnKSBvbkRyYWdFbmQoKSB7XG4gICAgaWYgKHRoaXMuZHJhZ2dlZEVsZW1lbnQubW91c2VBY3Rpb24pIHtcbiAgICAgIHRoaXMuZHJhZ2dlZEVsZW1lbnQubW91c2VBY3Rpb24oJ2RyYWdFbmQnKTtcbiAgICB9XG4gICAgdGhpcy50cmVlRHJhZ2dlZEVsZW1lbnQuc2V0KG51bGwpO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "wF/u":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "e5cp"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "ExA7");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "wJg7":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "wclG":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "pFRH"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "88Gu");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "wig9":
/*!****************************************!*\
  !*** ./node_modules/lodash/compact.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = compact;


/***/ }),

/***/ "wrZu":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneByTag.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "+K+b"),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "XYm9"),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "b2z7"),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "otv/"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "yP5f");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "xYSL":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "xs/l":
/*!******************************************!*\
  !*** ./node_modules/lodash/_flatRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(/*! ./flatten */ "TYy9"),
    overRest = __webpack_require__(/*! ./_overRest */ "Ioao"),
    setToString = __webpack_require__(/*! ./_setToString */ "wclG");

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ "y1pI":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "ljhN");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "yGk4":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "Cwc5"),
    root = __webpack_require__(/*! ./_root */ "Kz5y");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "yHx3":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "yP5f":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "+K+b");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "zEVN":
/*!**************************************!*\
  !*** ./node_modules/lodash/isMap.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "Gi0A"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "sEf8"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "mdPL");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "zZ0H":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "zoYe":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "nmnc"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "eUgh"),
    isArray = __webpack_require__(/*! ./isArray */ "Z0cm"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "/9aa");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ })

}]);
//# sourceMappingURL=default~pages-categories-categories-module~pages-product-product-module.js.map