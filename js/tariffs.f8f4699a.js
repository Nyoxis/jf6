(function(t){function a(a){for(var n,s,c=a[0],l=a[1],o=a[2],f=0,d=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(a);while(d.length)d.shift()();return i.push.apply(i,o||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],n=!0,c=1;c<e.length;c++){var l=e[c];0!==r[l]&&(n=!1)}n&&(i.splice(a--,1),t=s(s.s=e[0]))}return t}var n={},r={tariffs:0},i=[];function s(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=n,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)s.d(e,n,function(a){return t[a]}.bind(null,n));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/jf6/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=a,c=c.slice();for(var o=0;o<c.length;o++)a(c[o]);var u=l;i.push([1,"chunk-vendors","chunk-common"]),e()})({"0924":function(t,a,e){"use strict";var n=e("ed83"),r=e.n(n);r.a},1:function(t,a,e){t.exports=e("32bd")},"22eb":function(t,a,e){"use strict";var n=e("ffc5"),r=e.n(n);r.a},"291c":function(t,a,e){},"32bd":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("Calculator",{attrs:{id:"calculator",tariff:t.tariff},on:{updateTariff:function(a){t.tariff=a},attachData:t.attachData}}),e("Shape",{attrs:{id:"shape1"}}),e("TariffsContent",{attrs:{id:"tariffscontent"},on:{updateTariff:function(a){t.tariff=a}}}),e("Shape",{staticClass:"invshape",attrs:{id:"shape2"}}),e("Application",{ref:"application",attrs:{id:"application"}})],1)},i=[],s=e("3695"),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"calculator"}},[e("CalcRes",{attrs:{elValues:t.calcEls.slice(0,-1),tariff:t.tariff,cost:t.cost},on:{updateTariff:t.updateTariff,cost:function(a){t.cost=a},attach:t.attachData}}),e("div",{attrs:{id:"calccont"}},[e("transition-group",{attrs:{name:"fade",tag:"div",id:"calcels"}},t._l(t.calcEls,(function(a,n){return e("CalcEl",{key:a.id,staticClass:"fade-item",style:t.backgroundColor(n,t.calcEls.length-1),attrs:{calcelId:n,last:t.calcEls.length-1===n,tariff:t.tariff,values:a.values,id:n},on:{remove:function(a){return t.removeEl(n)},add:t.addel,values:function(t){a.values=t}}})})),1)],1)],1)},l=[],o=(e("a4d3"),e("e01a"),e("d28b"),e("fb6a"),e("a434"),e("d3b7"),e("ac1f"),e("3ca3"),e("841c"),e("ddb0"),e("2b3d"),e("3835")),u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"round2",attrs:{id:"calcel"}},[t.last?t._e():e("div",{staticClass:"round2",attrs:{id:"calcel2"}},[e("h4",[t._v(" Посылка #"+t._s(t.id+1)+" "),e("button",{staticClass:"bluebtn",on:{click:t.eventRemove}},[t._v("×")])]),e("CalcIn",{attrs:{tariff:t.tariff,values:t.values},on:{values:t.updateVal}})],1),t.last?e("div",{attrs:{id:"add"}},[e("button",{staticClass:"btn",on:{click:t.eventAdd}},[t._v("╋")])]):t._e()])},f=[],d=e("ce8b"),v={name:"CalcEl",props:["values","id","tariff","last"],components:{CalcIn:d["a"]},methods:{eventRemove:function(){this.$emit("remove")},eventAdd:function(){this.$emit("add")},updateVal:function(t){this.$emit("values",t)}}},p=v,h=(e("8844"),e("2877")),m=Object(h["a"])(p,u,f,!1,null,"5a7f37bb",null),_=m.exports,g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"round2",attrs:{id:"calcres"}},[e("div",{attrs:{id:"calcblocks"}},[e("div",[e("label",{attrs:{for:"tariff"}},[t._v("Тариф")]),e("select",{staticClass:"field",attrs:{id:"tariff"},domProps:{value:t.tariff},on:{input:function(a){return t.updateTariff(a.target.value)}}},[e("option",{attrs:{value:"avia",selected:""}},[t._v("Авиадоставка")]),e("option",{attrs:{value:"auto"}},[t._v("Автодоставка")]),e("option",{attrs:{value:"train"}},[t._v("Доставка поездом")])]),e("ul",t._l(t.elValues,(function(a,n){return e("li",{key:a.id,style:t.color(n,t.elValues.length)},[e("h4",[t._v("Посылка #"+t._s(n+1))]),e("h2",[t._v(t._s(a.values.result)),e("span",[t._v(" USD")])])])})),0)]),e("div",[e("p",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.isInsurance,expression:"isInsurance"}],attrs:{type:"checkbox",name:"insurance",value:"insurance"},domProps:{checked:Array.isArray(t.isInsurance)?t._i(t.isInsurance,"insurance")>-1:t.isInsurance},on:{change:function(a){var e=t.isInsurance,n=a.target,r=!!n.checked;if(Array.isArray(e)){var i="insurance",s=t._i(e,i);n.checked?s<0&&(t.isInsurance=e.concat([i])):s>-1&&(t.isInsurance=e.slice(0,s).concat(e.slice(s+1)))}else t.isInsurance=r}}}),t._v(" Страховка ")]),e("label",{attrs:{for:"cost"}},[t._v("Стоимость, USD")]),e("input",{staticClass:"field",attrs:{type:"number",name:"Cost",id:"cost",disabled:!t.isInsurance},domProps:{value:t.cost},on:{input:function(a){t.$emit("cost",t.format(a.target.value,0))}}}),e("h5",[t._v("+ "+t._s(t.insurance)),e("span",[t._v(" USD")])]),e("p",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.isFromMSK,expression:"isFromMSK"}],attrs:{type:"checkbox",name:"fromMSK",value:"fromMSK"},domProps:{checked:Array.isArray(t.isFromMSK)?t._i(t.isFromMSK,"fromMSK")>-1:t.isFromMSK},on:{change:function(a){var e=t.isFromMSK,n=a.target,r=!!n.checked;if(Array.isArray(e)){var i="fromMSK",s=t._i(e,i);n.checked?s<0&&(t.isFromMSK=e.concat([i])):s>-1&&(t.isFromMSK=e.slice(0,s).concat(e.slice(s+1)))}else t.isFromMSK=r}}}),t._v(" Доставка по СНГ ")]),e("h5",[t._v("+ "+t._s(t.fromMSK)),e("span",[t._v(" USD")])]),e("p",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.isLegalPay,expression:"isLegalPay"}],attrs:{type:"checkbox",name:"legalpay",value:"legalpay"},domProps:{checked:Array.isArray(t.isLegalPay)?t._i(t.isLegalPay,"legalpay")>-1:t.isLegalPay},on:{change:function(a){var e=t.isLegalPay,n=a.target,r=!!n.checked;if(Array.isArray(e)){var i="legalpay",s=t._i(e,i);n.checked?s<0&&(t.isLegalPay=e.concat([i])):s>-1&&(t.isLegalPay=e.slice(0,s).concat(e.slice(s+1)))}else t.isLegalPay=r}}}),t._v(" Оплата с юр. лица ")]),e("h5",[t._v("+ "+t._s(t.legalPay)),e("span",[t._v(" USD")])])])]),e("h1",[t._v(t._s(t.totalResult)),e("span",[t._v(" USD")])]),e("a",{attrs:{href:"#application"}},[e("button",{staticClass:"btn",on:{click:function(a){return t.$emit("attach",{isFromMSK:t.isFromMSK,isLegalPay:t.isLegalPay})}}},[t._v(" Прикрепить к заявке ")])])])},y=[],b=(e("13d5"),e("b680"),e("4222")),S=e("8a5a"),M={name:"CalcRes",props:["tariff","elValues","cost"],data:function(){return{isInsurance:!0,isFromMSK:!1,isLegalPay:!1}},computed:{totalResult:function(){return(parseFloat(this.insurance)+parseFloat(this.fromMSK)+parseFloat(this.legalPay)+parseFloat(this.elValues.reduce((function(t,a){return parseFloat(t)+parseFloat(a.values.result)}),0).toFixed(2))).toFixed(2)},insurance:function(){return this.isInsurance?parseFloat((this.cost*S.insrate).toFixed(2)):(this.$emit("cost",""),0)},fromMSK:function(){return this.isFromMSK?S.fromMSK:0},legalPay:function(){return this.isLegalPay?S.legalPay:0}},mixins:[b["a"]],methods:{updateTariff:function(t){this.$emit("updateTariff",t)},color:function(t,a){var e=(410-360*Math.pow(t/a,1.2))%360,n=100-60*Math.pow(t/a,.5),r=30;return{color:"hsl( "+e+", "+n+"%, "+r+"%)"}}}},P=M,C=(e("0924"),Object(h["a"])(P,g,y,!1,null,"19c11dc5",null)),E=C.exports,k={name:"Calculator",components:{CalcEl:_,CalcRes:E},props:["tariff"],data:function(){return{calcEls:[{id:-1}],cost:""}},mounted:function(){this.addel();var t=window.location.search,a=new URLSearchParams(t);a.get("tariff")&&this.$emit("updateTariff",a.get("tariff")),a.get("cost")&&(this.cost=a.get("cost")),a.get("category")&&(this.calcEls[0].values.category=a.get("category")),a.get("volume")&&(this.calcEls[0].values.volume=a.get("volume")),a.get("weight")&&(this.calcEls[0].values.weight=a.get("weight")),a.get("quantity")&&(this.calcEls[0].values.quantity=a.get("quantity"))},methods:{updateTariff:function(t){this.$emit("updateTariff",t)},addel:function(){this.calcEls.length<2?this.calcEls.splice(this.calcEls.length-1,0,{id:0,values:{}}):this.calcEls.splice(this.calcEls.length-1,0,{id:this.calcEls[this.calcEls.length-2].id+1,values:{}})},removeEl:function(t){this.calcEls.length<3&&this.addel(),this.calcEls.splice(t,1)},attachData:function(t){var a="____________\ntar: "+this.tariff;a+="\ncos: "+this.cost,t.isFromMSK&&(a+="\n+fromMSK"),t.isLegalPay&&(a+="\n+legalPay");var e=!0,n=!1,r=void 0;try{for(var i,s=this.calcEls.slice(0,-1).entries()[Symbol.iterator]();!(e=(i=s.next()).done);e=!0){var c=Object(o["a"])(i.value,2),l=c[0],u=c[1];a+="\n#"+(l+1)+" res: "+u.values.apiece+" x"+u.values.quantity+"\n",a+="cat: "+u.values.category+"\n",a+="vol: "+u.values.volume+"\n",a+="wgh: "+u.values.weight}}catch(f){n=!0,r=f}finally{try{e||null==s.return||s.return()}finally{if(n)throw r}}this.$emit("attachData",a)},backgroundColor:function(t,a){if(t===a)return{margin:0};var e=(420-360*Math.pow(t/a,1.2))%360,n=80-60*Math.pow(t/a,.3),r=75-15*Math.pow(t/a,4),i=(e+360-1e3/n)%360;return{background:"linear-gradient(150deg,hsl( "+e+", "+n+"%, "+r+"%),hsl( "+i+", "+n+"%, "+r+"%))","z-index":1}}}},w=k,T=(e("c162"),Object(h["a"])(w,c,l,!1,null,"3b7d8bfc",null)),x=T.exports,F=e("3b9f"),K=e("0ebe"),$=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"round4"},[e("div",{attrs:{id:"tariffs"}}),e("h3",[t._v("ТАРИФЫ")]),e("Tariffs",{on:{updateTariff:t.updateTariff}}),e("h3",[t._v("ОСОБЕННОСТИ РАСЧЕТА")]),e("p",[t._v(" Уловите свое руки мощные вдохновение вкладывает в ваши творческие инструменты, которые обеспечивают абсолютный контроль над текстом. их помощью вы любым элементам тени, эффекты с использованием прозрачности. Они позволят вам создавать элегантные таблицы. И не бойтесь экспериментировать у вас всегда ть отменить или выполнить повторно действия. Любая работа в продуктивность работы на всех этапах подготовки публикаций. Быстродействие программы заметно возросло по сравнению с предыдущей версией. Многослойная документов очень удобна для управления объектами. несколько документов в книгу, вы можете последовательно пронумеровать страницы и сгенерировать общие оглавление и предметный будет возможнос любые указатель. Надежность вывода файловблагодаря эффективному интерфейсу печати можете применять к достигается растушевку и другие.редактируемые Объединив структура срокповышает ")])],1)},O=[],j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[t._m(0),e("tbody",[e("tr",[e("th",[t._v("Самолет")]),e("td",[t._v("3-4 дня")]),e("td",[t._v("10 USD")]),e("button",{staticClass:"btn",attrs:{value:"avia"},on:{click:function(a){return t.updateTariff(a.target.value)}}},[t._v("Выбрать")])]),e("tr",[e("th",[t._v("Автодоставка")]),e("td",[t._v("1-2 недели")]),e("td",[t._v("10 USD")]),e("button",{staticClass:"btn",attrs:{value:"auto"},on:{click:function(a){return t.updateTariff(a.target.value)}}},[t._v("Выбрать")])]),e("tr",[e("th",[t._v("Поезд")]),e("td",[t._v("2 недели")]),e("td",[t._v("20 USD")]),e("button",{staticClass:"btn",attrs:{value:"train"},on:{click:function(a){return t.updateTariff(a.target.value)}}},[t._v("Выбрать")])])])])},A=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th"),e("th",[t._v("Срок доставки")]),e("th",[t._v("Минимальная Стоимость")])])])}],L={name:"Tariffs",methods:{updateTariff:function(t){this.$emit("updateTariff",t)}}},D=L,I=(e("6918"),Object(h["a"])(D,j,A,!1,null,null,null)),U=I.exports,R={name:"TariffsContent",components:{Tariffs:U},methods:{updateTariff:function(t){this.$emit("updateTariff",t)}}},V=R,q=(e("22eb"),Object(h["a"])(V,$,O,!1,null,"779225df",null)),N=q.exports,J={name:"App",components:{Layout:s["a"],Calculator:x,Shape:F["a"],TariffsContent:N,Application:K["a"]},data:function(){return{tariff:"avia"}},methods:{attachData:function(t){this.$refs.application.attachData(t)}}},z=J,B=(e("c6d9"),Object(h["a"])(z,r,i,!1,null,null,null)),G=B.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(G)}}).$mount("#app")},6918:function(t,a,e){"use strict";var n=e("c1fe"),r=e.n(n);r.a},8844:function(t,a,e){"use strict";var n=e("f852"),r=e.n(n);r.a},a55a:function(t,a,e){},c162:function(t,a,e){"use strict";var n=e("a55a"),r=e.n(n);r.a},c1fe:function(t,a,e){},c6d9:function(t,a,e){"use strict";var n=e("291c"),r=e.n(n);r.a},ed83:function(t,a,e){},f852:function(t,a,e){},ffc5:function(t,a,e){}});
//# sourceMappingURL=tariffs.f8f4699a.js.map