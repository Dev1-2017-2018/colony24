/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./../web/js";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _logger = __webpack_require__(1);

	var _logger2 = _interopRequireDefault(_logger);

	var _game = __webpack_require__(2);

	var _game2 = _interopRequireDefault(_game);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _logger2.default)(); // yes

	$(function () {
	    var colony24 = void 0;

	    // ajaxSetup est la propriété ajax de jQuery, la propriéré async permet de préciser si l'on veut
	    // que les requêtes HTTP style post ou get soient synchrones ou asynchrones
	    // ici je désactive l'asynchrone ceci est nécessaire puisque l'éxecution de mon script doit se faire
	    // dans un certain ordre

	    // Initialisation du jeu

	    colony24 = new _game2.default(userData);
	});
	console.log('app loaded');

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    console.log('logger.js is RUNNING!!');
	};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _wallet = __webpack_require__(3);

	var _wallet2 = _interopRequireDefault(_wallet);

	var _boat = __webpack_require__(4);

	var _boat2 = _interopRequireDefault(_boat);

	var _map = __webpack_require__(6);

	var _map2 = _interopRequireDefault(_map);

	var _boatShop = __webpack_require__(7);

	var _boatShop2 = _interopRequireDefault(_boatShop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Game = function () {
	    function Game(config) {
	        _classCallCheck(this, Game);

	        this.name = config.name;

	        // Launch map
	        this.map = new _map2.default();

	        // Creation de la wallet
	        this.wallet = new _wallet2.default(Number(config.wallet.gold), Number(config.wallet.ecu));

	        // Creation des bateaux
	        this.boats = {};

	        var boat = null;

	        for (boat in config.boats) {
	            if (config.boats.hasOwnProperty(boat)) {
	                this.boats[boat] = new _boat2.default(config.boats[boat]);
	            }
	        }

	        // Creation de main Harbor
	        this.mainHarbor = {};

	        // Creation du shop
	        this.mainHarbor.shop = {};

	        for (var i = 0; i < 1; i++) {
	            this.mainHarbor.shop['button ' + i] = new _boatShop2.default(i);
	        }

	        //this.inventory = new Inventory();

	        // Creation des références au parent dans les enfants

	        this.setBoatParent(this);

	        this.setWalletParent(this);

	        this.setShopParent(this);

	        this.boats.Bateau.movement(this.map.map, 1, 1);

	        this.saveDataJson(this);

	        console.log(this);
	    }

	    // crée une référence au parent dans tous les enfants de bateau


	    _createClass(Game, [{
	        key: 'setBoatParent',
	        value: function setBoatParent(o) {
	            if (o.boats != undefined) {

	                var n = null;
	                for (n in o.boats) {

	                    o.boats[n].parent = o;
	                    this.setBoatParent(o.boats[n]);
	                }
	            }
	        }

	        // crée une référence au parent dans tous les enfants de wallet

	    }, {
	        key: 'setWalletParent',
	        value: function setWalletParent(o) {
	            if (o.wallet != undefined) {

	                o.wallet.parent = o;
	            }
	        }

	        // crée une référence au parent dans tous les enfants de shop

	    }, {
	        key: 'setShopParent',
	        value: function setShopParent(o) {
	            if (o.mainHarbor.shop != undefined) {

	                var n = null;
	                for (n in o.mainHarbor.shop) {

	                    o.mainHarbor.shop[n].parent = o;
	                    this.setBoatParent(o.mainHarbor.shop[n]);
	                }
	            }
	        }

	        // fonction pour sauvegarder l'objet du joueur dans son json aproprié

	    }, {
	        key: 'saveDataJson',
	        value: function saveDataJson(o) {

	            // premièrement dans cette fonction on va devoir enlever toutes les références au parent dans les enfants
	            // donc on fait la même chose que dans les setParent, sauf qu'on delete les propriétés au lieu de les crées

	            if (o.boats != undefined) {

	                var n = null;
	                for (n in o.boats) {

	                    delete o.boats[n].parent;
	                    delete o.boats[n].$el;
	                }
	            }
	            if (o.wallet != undefined) {

	                delete o.wallet.parent;
	            }
	            if (o.mainHarbor.shop != undefined) {

	                var _n = null;
	                for (_n in o.mainHarbor.shop) {

	                    delete o.mainHarbor.shop[_n].parent;
	                    delete o.mainHarbor.shop[_n].$el;
	                }
	            }

	            // ensuite on peut lancer la requete du fichier update_json_model.php

	            $.ajaxSetup({
	                async: false
	            });

	            $.post('', {
	                player: o
	            });

	            $.ajaxSetup({
	                async: true
	            });

	            this.setBoatParent(this);

	            this.setWalletParent(this);

	            this.setShopParent(this);
	        }
	    }]);

	    return Game;
	}();

	exports.default = Game;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Wallet = function () {
	  function Wallet(gold, ecu) {
	    _classCallCheck(this, Wallet);

	    this.goldValue = 1.2; //SQL GOLD VALUE A INTEGRER
	    this.gold = gold;
	    this.ecu = ecu;
	    console.log("[[WALLET]] goldValue is " + this.goldValue + " \n[[[WALLET]] gold is " + this.gold + " \n[[WALLET]] ecu is " + this.ecu + " \n");
	  }

	  //Gold convert to Ecu


	  _createClass(Wallet, [{
	    key: "convertGoldEcu",
	    value: function convertGoldEcu(goldChange) {
	      console.log("[[WALLET convertGoldToEcu()]] In Wallet > " + this.ecu + " ecu & " + this.gold + " gold & " + this.goldValue + " goldValue\n");
	      if (this.gold >= goldChange) {
	        console.log("[[WALLET convertGoldToEcu()]] You convert " + goldChange + " gold to ecu with a " + this.goldValue + " Value Gold \n");
	        this.gold -= goldChange;
	        this.ecu += goldChange * this.goldValue;
	        console.log("[[WALLET convertGoldToEcu()]] You have now " + this.ecu + " ecu and " + this.gold + " gold\n");
	      } else console.log("[[WALLET convertGoldToEcu()]] you are missing " + (goldChange - this.gold) + " to complete this transaction\n");
	    }
	  }]);

	  return Wallet;
	}();

	exports.default = Wallet;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
								value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _boats = __webpack_require__(5);

	var _boats2 = _interopRequireDefault(_boats);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Boat = function (_Boats) {
								_inherits(Boat, _Boats);

								function Boat(boat) {
															_classCallCheck(this, Boat);

															var _this = _possibleConstructorReturn(this, (Boat.__proto__ || Object.getPrototypeOf(Boat)).call(this, boat));

															_this.$el = $('ul#boats');
															_this.render_boats();
															return _this;
								}

								_createClass(Boat, [{
															key: 'render_boats',
															value: function render_boats() {
																						this.$el.append('<input type=\'button\' value="' + this.name + '"/>');
															}
								}]);

								return Boat;
	}(_boats2.default);

	exports.default = Boat;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Boats = function () {
	    function Boats() {
	        var boat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { name: "bateau", structure: 100, blindage: 50, capacite: 50, poids: 10, stockage: 0, x: 0, y: 0 };

	        _classCallCheck(this, Boats);

	        // Boats ici on crée automatiquement les propriétés de notre objet bateau et on vérifie si le type
	        // des propriétés doit être un number ou non
	        var property = null;
	        for (property in boat) {
	            if (boat.hasOwnProperty(property)) {
	                if (!Number.isNaN(Number(boat[property]))) {

	                    this[property] = Number(boat[property]);
	                } else {

	                    this[property] = boat[property];
	                }
	            }
	        }
	    }

	    _createClass(Boats, [{
	        key: "movement",
	        value: function movement(map, positionY, positionX) {
	            if (positionY >= 0 && positionX >= 0 && positionY <= 9 && positionX <= 9) {
	                // Ici, I correspond à une île, à modifier selon la vraie map
	                if (map[positionY][positionX] != "I") {
	                    // Modification de la position du bateau
	                    this.y = positionY;
	                    this.x = positionX;
	                    console.log("Votre bateau est maintenant en " + this.y + " - " + this.x);
	                    this.goldMining(map);
	                } else {
	                    console.log("Colision avec une île");
	                }
	            } else {
	                // Empêche de sortir de la map - ici défini en 10x10
	                console.log("Votre bateau ne peut s'aventurer aussi loin");
	            }
	        }
	    }, {
	        key: "goldMining",
	        value: function goldMining(map) {
	            // Ici, G correspond à de l'or, à modifier selon la vraie map
	            if (map[this.y][this.x] == "G") {
	                if (this.stockage <= 2) {
	                    this.stockage++;
	                    console.log("Vous avez extrait de l'Or en : " + this.y + " - " + this.x);
	                    console.log("Vous avez maintenant : " + this.stockage + " d'Or");
	                    if (this.stockage == 2) {
	                        this.returnHome();
	                    }
	                }
	            } else {
	                console.log("Il n'y a pas d'Or en : " + this.y + " - " + this.x);
	            }
	        }
	    }, {
	        key: "returnHome",
	        value: function returnHome() {
	            this.y = 0;
	            this.x = 0;
	            console.log("Votre bateau est retourner à Main Harbor ");
	            this.parent.wallet.gold += this.stockage;
	            this.stockage = 0;
	        }
	    }]);

	    return Boats;
	}();

	exports.default = Boats;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Map = function () {
	    function Map() {
	        _classCallCheck(this, Map);

	        this.map = [["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"], ["_", "G", "_", "_", "G", "_", "_", "_", "_", "_"], ["_", "_", "_", "I", "_", "_", "_", "_", "I", "_"], ["_", "_", "_", "_", "_", "_", "_", "G", "_", "_"], ["_", "_", "I", "_", "_", "_", "_", "_", "_", "_"], ["_", "_", "_", "_", "_", "_", "_", "I", "_", "_"], ["I", "_", "_", "_", "_", "_", "_", "_", "_", "G"], ["_", "G", "_", "G", "_", "I", "_", "_", "_", "I"], ["_", "_", "_", "_", "_", "_", "_", "G", "_", "_"], ["_", "_", "I", "_", "_", "_", "_", "_", "I", "_"]];

	        this.displayMap(this.map);
	    }

	    _createClass(Map, [{
	        key: "displayMap",
	        value: function displayMap(map) {
	            //vérifier map
	            if (Array.isArray(map) == false) {
	                console.error("crash de la fonction 11");
	            } else {
	                var _console;

	                //afficher les couleurs
	                var Chaine = "";
	                var map_couleur = [];
	                for (var i = 0; i < map.length; i++) {
	                    for (var j = 0; j < map[i].length; j++) {
	                        if (map[i][j] === "_") {
	                            map_couleur.push("background: blue");
	                        } else if (map[i][j] === "G") {
	                            map_couleur.push("background: yellow");
	                        } else if (map[i][j] === "P") {
	                            map_couleur.push("background: black");
	                        } else if (map[i][j] === "I") {
	                            map_couleur.push("background: green");
	                        } else if (map[i][j] === "B") {
	                            map_couleur.push("background: red");
	                        } else {
	                            console.error("crash de la fonction");
	                            return 0;
	                        }
	                        Chaine += '%c   ';
	                    }
	                    Chaine += '\n';
	                }
	                (_console = console).log.apply(_console, [Chaine].concat(map_couleur));
	                return "La map a été affichée correctement";
	            }
	        }
	    }]);

	    return Map;
	}();

	exports.default = Map;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _shop = __webpack_require__(8);

	var _shop2 = _interopRequireDefault(_shop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BuyBoat = function (_Shop) {
	    _inherits(BuyBoat, _Shop);

	    function BuyBoat(id) {
	        _classCallCheck(this, BuyBoat);

	        var _this = _possibleConstructorReturn(this, (BuyBoat.__proto__ || Object.getPrototypeOf(BuyBoat)).call(this, id));

	        _this.id = id;
	        _this.$el = $("ul#shop");

	        _this.create_button();

	        return _this;
	    }

	    _createClass(BuyBoat, [{
	        key: "create_button",
	        value: function create_button() {

	            var button = "<input type='button' data-id='" + this.id + "' value='buy a boat " + this.id + "'/>";
	            this.$el.append(button);
	        }
	    }]);

	    return BuyBoat;
	}(_shop2.default);

	exports.default = BuyBoat;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _boat = __webpack_require__(4);

	var _boat2 = _interopRequireDefault(_boat);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Shop = function () {
	    function Shop(id) {
	        _classCallCheck(this, Shop);

	        this.$el = $('ul#shop');
	        this.$el.on('click', 'input[data-id=' + id + ']', { class: _boat2.default, that: this, id: id }, this.buy_boat);
	    }

	    _createClass(Shop, [{
	        key: 'buy_boat',
	        value: function buy_boat(e) {

	            var data = e.data;
	            var parent = data.that.parent;

	            if (parent.wallet.ecu < 100) {

	                return console.log("Vous n'avez pas assez d'écu");
	            } else {

	                parent.boats['bateau' + data.id] = new data.class();

	                parent.wallet.ecu -= 100;

	                parent.saveDataJson(parent);
	            }
	        }
	    }]);

	    return Shop;
	}();

	exports.default = Shop;

/***/ })
/******/ ]);