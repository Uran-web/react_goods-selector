(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var o=s(3),c=s.n(o),n=s(6),d=s(4),a=s(5),i=s(8),l=s(7),r=s(1),u=s.n(r),h=(s(13),s(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(d.a)(this,s);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={goods:j,selectedGoods:["Jam"]},e.addWord=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(n.a)(e.selectedGoods),[t])}}))},e.removeWord=function(t){e.state.selectedGoods.splice(e.state.selectedGoods.indexOf(t),1),e.setState((function(e){return{selectedGoods:e.selectedGoods}}))},e.resetList=function(){e.setState({selectedGoods:[]})},e}return Object(a.a)(s,[{key:"render",value:function(){var e=this,t="";return 0===this.state.selectedGoods.length&&(t="No goods selected"),1===this.state.selectedGoods.length&&(t="- is selected"),this.state.selectedGoods.length>1&&(t="- are selected"),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{className:"title",children:[Object(h.jsxs)("h1",{className:"title__article",children:[this.state.selectedGoods[this.state.selectedGoods.length-1]," ",t]}),Object(h.jsx)("button",{type:"button",className:"title__button",onClick:function(){e.resetList()},children:"X"})]}),Object(h.jsx)("div",{className:"goods-list",children:this.state.goods.map((function(t){return Object(h.jsxs)("div",{className:e.state.selectedGoods.includes(t)?"active_item":"item",children:[Object(h.jsx)("h2",{children:t},t),Object(h.jsx)("button",{type:"button",onClick:function(){e.addWord(t)},children:"Add"}),Object(h.jsx)("button",{type:"button",onClick:function(){e.removeWord(t)},children:"Remove"})]})}))})]})}}]),s}(u.a.Component);c.a.render(Object(h.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6f490c7a.chunk.js.map