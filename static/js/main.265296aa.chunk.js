(this["webpackJsonpwords-spinner"]=this["webpackJsonpwords-spinner"]||[]).push([[0],{12:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var r=s(1),n=s.n(r),a=s(7),c=s.n(a),o=s(2),i=s(3),l=s(5),j=s(4),d=(s(12),s(0)),h=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("div",{className:"header__icon",children:"\ud83c\udf00"}),Object(d.jsxs)("div",{className:"header__text",children:[Object(d.jsx)("h1",{className:"header__title",children:"The Words Spinner"}),Object(d.jsx)("p",{className:"header__description",children:"It reverse any word that has 5 or more letters"})]})]})}}]),s}(r.Component),u=s.p+"static/media/github.0561db14.svg",b=s.p+"static/media/portfolio.27a21adb.png",p=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsx)("div",{className:"footer__copyright",children:"Designed & Developed by Youssef Ahmed 2021"}),Object(d.jsxs)("ul",{className:"footer__links",children:[Object(d.jsx)("li",{className:"footer__link",children:Object(d.jsxs)("a",{href:"#",target:"_blank",children:[Object(d.jsx)("span",{className:"footer__link__text",children:"Portfolio"}),Object(d.jsx)("img",{className:"footer__link__logo",src:b,alt:"Portfolio Logo"})]})}),Object(d.jsx)("li",{className:"footer__link",children:Object(d.jsxs)("a",{href:"#",target:"_blank",children:[Object(d.jsx)("span",{className:"footer__link__text",children:"Code"}),Object(d.jsx)("img",{className:"footer__link__logo",src:u,alt:"GitHub Logo"})]})})]})]})}}]),s}(r.Component),O=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(o.a)(this,s);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={resultWords:""},e.changeResultWords=function(t){e.setState({resultWords:e.spinWords(t.target.value)})},e.spinWords=function(e){return e.split(" ").map((function(e){return e.length>=5?e.split("").reverse().join(""):e})).join(" ")},e}return Object(i.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("section",{className:"words-spinner",children:[Object(d.jsx)("textarea",{className:"words-spinner__textarea",onChange:this.changeResultWords,placeholder:"Type anything...",name:"words",cols:"30",rows:"10"}),Object(d.jsx)("div",{className:"words-spinner__results",children:this.state.resultWords?this.state.resultWords:"Here we will display everything you type..."})]})}}]),s}(r.Component),_=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h,{}),Object(d.jsx)(O,{}),Object(d.jsx)(p,{})]})}}]),s}(r.Component);c.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(_,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.265296aa.chunk.js.map