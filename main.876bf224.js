parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";$(".question-wrapper").click(function(){var e=$(this).parents(".accordion"),s=e.find(".answer-wrapper"),n=e.find(".material-icons.drop"),a=e.find(".question");s.animate({height:"toggle"},100),n.hasClass("icon-expend")?(n.removeClass("icon-expend"),a.removeClass("active")):(n.addClass("icon-expend"),a.addClass("active")),e.hasClass("expanded")?e.removeClass("expanded"):e.addClass("expanded"),e.hasClass("expanded")?e.removeClass("border"):e.addClass("border")});var e=document.getElementById("burger-menu"),s=document.getElementById("menu"),n=document.getElementById("close_menu"),a=document.getElementById("body"),d=$("#button"),o=document.getElementById("header");$(window).scroll(function(){$(window).scrollTop()>300?(d.addClass("show"),o.classList.add("header__background")):(d.removeClass("show"),o.classList.remove("header__background"))}),e.addEventListener("click",function(){s.classList.add("burger-menu--open"),s.classList.remove("burger-menu--closed"),a.classList.add("open"),d.removeClass("show")}),n.addEventListener("click",function(){s.classList.remove("burger-menu--open"),a.classList.remove("open"),s.classList.add("burger-menu--closed")}),d.on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},"300")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.876bf224.js.map