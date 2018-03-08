webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-navbar/app-navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-navbar/app-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">CRUD Local Storage</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Início <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item dropdown\" ngbDropdown>\n        <a class=\"nav-link dropdown-toggle\" id=\"dropdown01\" ngbDropdownToggle>Categoria</a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\" ngbDropdownMenu>\n          <a class=\"dropdown-item\" href=\"#\">Categoria A</a>\n          <a class=\"dropdown-item\" href=\"#\">Categoria B</a>\n          <a class=\"dropdown-item\" href=\"#\">Categoria C</a>\n        </div>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/app-navbar/app-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppNavbarComponent = (function () {
    function AppNavbarComponent() {
    }
    AppNavbarComponent.prototype.ngOnInit = function () {
    };
    AppNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/app-navbar/app-navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app-navbar/app-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppNavbarComponent);
    return AppNavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar> \n<app-crud-local-storage></app-crud-local-storage>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_webstorage__ = __webpack_require__("../../../../ngx-webstorage/dist/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__crud_local_storage_crud_local_storage_component__ = __webpack_require__("../../../../../src/app/crud-local-storage/crud-local-storage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_navbar_app_navbar_component__ = __webpack_require__("../../../../../src/app/app-navbar/app-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__crud_local_storage_crud_local_storage_component__["a" /* CrudLocalStorageComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_navbar_app_navbar_component__["a" /* AppNavbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_webstorage__["c" /* Ng2Webstorage */],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_toastr__["a" /* ToastrModule */].forRoot({ closeButton: true,
                    progressBar: true,
                    timeOut: 5000,
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: true })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/crud-local-storage/crud-local-storage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../bootstrap/dist/css/bootstrap.css"), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/crud-local-storage/crud-local-storage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Cadastro de Pessoa</h2>\n  <hr style=\"padding-top: 10px;\">\n  <form #pessoaForm=\"ngForm\" (ngSubmit)=\"save()\" novalidate>\n    <div class=\"form-group\">\n      <label for=\"name\">Nome</label>\n      <input type=\"name\" class=\"form-control\" id=\"nome\" name=\"name\" [(ngModel)]=\"pessoa.name\" placeholder=\"Digite um nome\">\n\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Endereço de Email</label>\n      <input type=\"email\" require class=\"form-control\" id=\"exampleInputEmail1\" required name=\"email\" [(ngModel)]=\"pessoa.email\" aria-describedby=\"emailHelp\" placeholder=\"Digite um email\">\n      <small id=\"emailHelp\" class=\"form-text text-muted\">Não compartilhe seus dados com qualquer pessoa.</small>\n\n    </div>\n    <div class=\"form-group\">\n        <label for=\"exampleInputPhoto\">URL Foto</label>\n        <input type=\"text\"  class=\"form-control\" id=\"exampleInputFoto\" required name=\"photo\" [(ngModel)]=\"pessoa.photo\" aria-describedby=\"photoHelp\" placeholder=\"Digite/Cole aqui a URL de sua Foto\">\n        <small id=\"photoHelp\" class=\"form-text text-muted\">Deve ser uma URL aberta</small>\n  \n      </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteAll()\">Apagar Todas Pessoas</button>\n  </form>\n  <hr style=\"padding-top: 10px;\">\n  <h2>Lista de Pessoas</h2>\n  <input class=\"form-control mr-sm-2\" type=\"text\" [(ngModel)]=\"term\" placeholder=\"Search\" aria-label=\"Search\">  \n  <div>\n    <!--\n    <table class=\"table table-hover\">\n    <thead class=\"thead-default\">\n        <tr>\n          <th>#</th>\n          <th>Name</th>\n          <th>Email</th>\n          <th></th>\n          <th></th>\n        </tr>\n      </thead>\n      <tr *ngFor='let pessoa of list()'>\n        <td scope=\"row\">{{pessoa.id}}</td>\n        <td>{{pessoa.name}}</td>\n        <td>{{pessoa.email}}</td>\n        <td colspan=\"2\" style=\"text-align: end;\">\n          <button id=\"{{pessoa.id}}\" type=\"button\" class=\"btn btn-outline-primary\" (click)=\"edit(pessoa.id)\">Edit</button>\n          <button id=\"{{pessoa.id}}\" type=\"button\" class=\"btn btn-outline-danger\" (click)=\"remove(pessoa.id)\">Remove</button>\n          \n        </td>\n\n      </tr>\n    </table> -->\n    <div class=\"row\">\n      <div class=\"col-md-6\" *ngFor=\"let pessoa of list()\" style=\"padding: 10px;\">\n        <div class=\"card\">\n            \n            <img class=\"card-img-top\" style= 'width: 30%;' src=\"{{pessoa.photo !== '' ? pessoa.photo : 'https://st3.depositphotos.com/4111759/13425/v/450/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg'}}\" alt=\"Card image cap\">            \n          <div class=\"card-block\">\n            <h3 class=\"card-title\">\n              <span style=\"margin-left: 10px; font-weight: 900; margin-right: 2px;\">#</span>{{pessoa.id}}</h3>\n            <p class=\"card-text\">\n              <span style=\"margin-left: 10px; font-weight: 900; margin-right: 2px;\">Nome:</span> {{pessoa.name}}</p>\n            <p class=\"card-text\">\n              <span style=\"margin-left: 10px; font-weight: 900; margin-right: 2px;\">Email:</span>{{pessoa.email}}</p>\n            <div class=\"btn-group\" style=\"padding: 10px\">\n              <button id=\"{{pessoa.id}}\" type=\"button\" class=\"btn btn-outline-primary\" (click)=\"edit(pessoa.id)\">Editar</button>\n              <button id=\"{{pessoa.id}}\" type=\"button\" class=\"btn btn-outline-danger\" (click)=\"remove(pessoa.id)\">Remover</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/crud-local-storage/crud-local-storage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudLocalStorageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_webstorage__ = __webpack_require__("../../../../ngx-webstorage/dist/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrudLocalStorageComponent = (function () {
    function CrudLocalStorageComponent(storage, toastr) {
        this.storage = storage;
        this.toastr = toastr;
        this.pessoa = {
            id: '',
            name: '',
            email: '',
            photo: ''
        };
        // TODO filter
        this.term = '';
        this.listUser = [];
    }
    CrudLocalStorageComponent.prototype.save = function () {
        var listLocal = this.storage.retrieve('pessoa');
        if (!this.pessoa.id) {
            this.pessoa.id = new Date().getTime().toString();
            this.listUser = listLocal === null ? [] : listLocal;
            this.listUser.push(this.pessoa);
            this.storage.store('pessoa', this.listUser);
            this.list();
            this.toastr.success('Cadastro efetuado com sucesso!', "Pessoa  " + this.pessoa.name);
            this.pessoa = {
                id: '',
                name: '',
                email: '',
                photo: ''
            };
        }
        else {
            this.update(this.pessoa.id);
            this.toastr.success('Edição efetuada com sucesso!', "Pessoa  " + this.pessoa.name);
            this.pessoa = {
                id: '',
                name: '',
                email: '',
                photo: ''
            };
        }
    };
    CrudLocalStorageComponent.prototype.update = function (id) {
        var usersTemp = this.list();
        for (var index = 0; index < usersTemp.length; index++) {
            if (usersTemp[index].id === id) {
                usersTemp[index].name = this.pessoa.name;
                usersTemp[index].email = this.pessoa.email;
                usersTemp[index].photo = this.pessoa.photo;
            }
        }
        this.storage.store('pessoa', usersTemp);
    };
    CrudLocalStorageComponent.prototype.list = function () {
        if (this.storage.retrieve('pessoa') !== null && this.storage.retrieve('pessoa').length > 0) {
            return this.storage.retrieve('pessoa');
        }
        else {
            return [];
        }
    };
    CrudLocalStorageComponent.prototype.deleteAll = function () {
        if (window.confirm('Hê doido quer remover todo mundo mesmo?') === true) {
            this.toastr.success('Remoção da galera efetuada com sucesso!');
            this.storage.clear('pessoa');
            var listLocal = this.storage.store('pessoa', []);
        }
    };
    CrudLocalStorageComponent.prototype.getById = function (id) {
        var usersTemp = this.list();
        for (var index = 0; index < usersTemp.length; index++) {
            if (usersTemp[index].id === id) {
                return usersTemp[index];
            }
        }
    };
    CrudLocalStorageComponent.prototype.edit = function (id) {
        this.pessoa = this.getById(id);
    };
    CrudLocalStorageComponent.prototype.remove = function (id) {
        var usersTemp = this.list();
        for (var index = 0; index < usersTemp.length; index++) {
            if (usersTemp[index].id === id) {
                if (window.confirm('Deseja realmente remover o ' + usersTemp[index].name + ' ?') === true) {
                    this.toastr.success('Remoção efetuada com sucesso!', "Pessoa  " + usersTemp[index].name);
                    usersTemp.splice(index, 1);
                }
            }
        }
        this.storage.store('pessoa', usersTemp);
        this.pessoa = {
            id: '',
            name: '',
            email: '',
            photo: ''
        };
    };
    CrudLocalStorageComponent.prototype.ngOnInit = function () {
        this.list();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ngx_webstorage__["a" /* LocalStorage */])('pessoa'),
        __metadata("design:type", Object)
    ], CrudLocalStorageComponent.prototype, "pessoaAttribute", void 0);
    CrudLocalStorageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-crud-local-storage',
            template: __webpack_require__("../../../../../src/app/crud-local-storage/crud-local-storage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/crud-local-storage/crud-local-storage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_webstorage__["b" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], CrudLocalStorageComponent);
    return CrudLocalStorageComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map