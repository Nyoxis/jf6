(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"0ebe":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{staticClass:"application round3",attrs:{action:"https://formspree.io/mrglyebv",method:"POST"}},[i("h3",[t._v("Оставить заявку")]),i("div",{staticClass:"form"},[i("div",[i("label",[t._v("Как к вам обращаться?")]),i("input",{attrs:{type:"text",name:"name",required:""}}),i("label",[t._v("Номер телефона")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"tel",name:"phone",pattern:"+7 ([0-9]{3}) [0-9]{3}-[0-9]{2}-[0-9]{2}",required:t.phonerequired},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),i("label",[t._v("Эл.почта")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.mail,expression:"mail"}],attrs:{type:"text",name:"_replyto",required:t.mailrequired},domProps:{value:t.mail},on:{input:function(e){e.target.composing||(t.mail=e.target.value)}}})]),i("div",[i("label",[t._v("Комментарий")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],attrs:{name:"Comment",rows:"5",cols:"21"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})])]),t._m(0),i("a",{attrs:{href:"./#application",alt:"Application",title:"application"}},[t._v("Оставить заявку")])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form"},[i("label",{attrs:{id:"consent"}},[t._v(' Нажимая на кнопку "Отправить", вы даете'),i("br"),i("a",{attrs:{href:"/"}},[t._v("согласие на обработку своих персональных данных")]),t._v(". ")]),i("input",{staticClass:"btn",attrs:{type:"submit",value:"Отправить"}})])}],o=(i("ac1f"),i("1276"),{name:"Application",data:function(){return{comment:"",mail:"",phone:""}},computed:{mailrequired:function(){return!this.phone},phonerequired:function(){return!this.mail}},methods:{attachData:function(t){this.comment=this.comment.split("\n____________"),this.comment.length>1&&this.comment.pop(),this.comment+="\n"+t}}}),s=o,r=(i("ef04"),i("2877")),l=Object(r["a"])(s,a,n,!1,null,"2eecf8ae",null);e["a"]=l.exports},"11fa":function(t,e,i){},"2f63":function(t,e,i){},3695:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"layout"}},[i("div",{attrs:{id:"pattern"}}),i("Navigation"),i("div",{attrs:{id:"content"}},[t._t("default")],2),i("Footer",{attrs:{id:"footer"}})],1)},n=[],o=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"Navigation"}},[t.activeBtn?i("div",{attrs:{id:"block"},on:{click:t.deactivateBtn}}):t._e(),i("header",{directives:[{name:"scroll",rawName:"v-scroll",value:t.handleScroll,expression:"handleScroll"}]},[i("button",{class:{btnactive:t.activeBtn},attrs:{type:"button"},on:{click:t.activateBtn}}),i("a",{attrs:{href:"./",alt:"JF6.ru",id:"logo"}}),i("nav",{staticClass:"menu",class:{expand:t.activeBtn},attrs:{id:"nav"},on:{click:t.deactivateBtn}},[i("a",{attrs:{href:"./#homecontent"}},[t._v("Услуги")]),i("a",{attrs:{href:"./tariffs#tariffs"}},[t._v("Тарифы")]),i("a",{attrs:{href:"./tariffs"}},[t._v("Расчет стоимости")]),i("a",{attrs:{href:"./contact"}},[t._v("Контакты")])]),i("div",{staticClass:"menu contacts",class:{expand:t.activeBtn},attrs:{id:"mcontacts"},on:{click:t.deactivateBtn}},[t._m(0),t._m(1)]),t._m(2)])])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{attrs:{href:"mailto: omicronnyoxis@gmail.com",alt:"E-mail:"}},[i("div",{attrs:{id:"mail"}}),i("p",[t._v("example@example.com")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{attrs:{href:"https://wa.me/79930106278",alt:"Whatsapp:"}},[i("div",{attrs:{id:"wa"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contacts",attrs:{id:"bcontacts"}},[i("a",{attrs:{href:"tel:79059457672",alt:"Phone:"}},[i("div",{attrs:{id:"phone"}}),i("p",[t._v("+7 (999) 999-99-99")])])])}],l={name:"Navigation",data:function(){return{activeBtn:!1}},methods:{handleScroll:function(t,e){window.scrollY>30?e.setAttribute("class","opaque"):e.removeAttribute("class")},activateBtn:function(){this.activeBtn?this.deactivateBtn():(this.activeBtn=!0,document.body.setAttribute("style","height: 100vh; overflow-y: hidden"))},deactivateBtn:function(){this.activeBtn=!1,document.body.removeAttribute("style")}}},c=l,u=(i("5647"),i("2877")),m=Object(u["a"])(c,s,r,!1,null,"41df7863",null),v=m.exports,d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[t._v(" footer ")])},p=[],h={name:"Footer"},f=h,_=(i("48c2"),Object(u["a"])(f,d,p,!1,null,"0d26ce37",null)),y=_.exports,g={name:"Layout",components:{Navigation:v,Footer:y}};o["a"].directive("scroll",{inserted:function(t,e){var i=function i(a){e.value(a,t)&&window.removeEventListener("scroll",i)};window.addEventListener("scroll",i)}});var b=g,w=(i("7c9e"),Object(u["a"])(b,a,n,!1,null,null,null));e["a"]=w.exports},"3bcd":function(t,e,i){},4222:function(t,e,i){"use strict";i("b680"),i("ac1f"),i("1276");e["a"]={methods:{format:function(t,e){return t.split("-").length>1&&(t=t.split("-")[1]),t.split(".").length>1&&t.split(".")[1].length>e?parseFloat(t).toFixed(e):t}}}},"48c2":function(t,e,i){"use strict";var a=i("3bcd"),n=i.n(a);n.a},5647:function(t,e,i){"use strict";var a=i("2f63"),n=i.n(a);n.a},"7c9e":function(t,e,i){"use strict";var a=i("b182"),n=i.n(a);n.a},"84d3":function(t,e,i){},"8a5a":function(t){t.exports=JSON.parse('{"insrate":0.02,"fromMSK":20,"legalPay":20,"avia":{"default":{"PricePerVol":320,"Prices":[[1000,1.3],[800,1.4],[600,1.5],[400,1.6],[350,1.65],[300,1.7],[250,1.75],[200,1.8],[190,1.85],[180,1.9],[170,1.95],[160,2],[150,2.05],[140,2.1],[130,2.2],[120,2.3],[110,2.4],[100,2.5]]},"clothes":{"PricePerVol":400,"Prices":[[1000,1.3],[800,1.4],[600,1.5],[400,1.6],[350,1.65],[300,1.7],[250,1.75],[200,1.8],[190,1.85],[180,1.9],[170,1.95],[160,2],[150,2.05],[140,2.1],[130,2.2],[120,2.3],[110,2.4],[100,2.5]]},"bags":{"PricePerVol":400,"Prices":[[1000,1.3],[800,1.4],[600,1.5],[400,1.6],[350,1.65],[300,1.7],[250,1.75],[200,1.8],[190,1.85],[180,1.9],[170,1.95],[160,2],[150,2.05],[140,2.1],[130,2.2],[120,2.3],[110,2.4],[100,2.5]]},"furniture":{"PricePerVol":400,"Prices":[[1000,1.3],[800,1.4],[600,1.5],[400,1.6],[350,1.65],[300,1.7],[250,1.75],[200,1.8],[190,1.85],[180,1.9],[170,1.95],[160,2],[150,2.05],[140,2.1],[130,2.2],[120,2.3],[110,2.4],[100,2.5]]}},"auto":{"default":{"PricePerVol":350,"Prices":[[1000,1.3],[800,1.4],[600,1.5],[400,1.6],[350,1.65],[300,1.7],[250,1.75],[200,1.8],[190,1.85],[180,1.9],[170,1.95],[160,2],[150,2.05],[140,2.1],[130,2.2],[120,2.3],[110,2.4],[100,2.5]]}},"train":{"default":{"PricePerVol":320,"Prices":[[1000,1.3],[800,1.4],[600,1.5],[400,1.6],[350,1.65],[300,1.7],[250,1.75],[200,1.8],[190,1.85],[180,1.9],[170,1.95],[160,2],[150,2.05],[140,2.1],[130,2.2],[120,2.3],[110,2.4],[100,2.5]]}}}')},b182:function(t,e,i){},ce8b:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"calcin"}},[t.wcost?i("div",[i("label",{attrs:{for:"cost"}},[t._v("Стоимость, USD")]),i("input",{attrs:{type:"number",name:"Cost",id:"cost",autocomplete:"off"},domProps:{value:t.cost},on:{input:function(e){t.cost=t.format(e.target.value,2),t.calculate()}}})]):t._e(),i("div",[i("label",{attrs:{for:"category"}},[t._v("Категория груза")]),i("select",{attrs:{id:"category"},domProps:{value:t.category},on:{input:function(e){t.category=e.target.value,t.calculate()}}},[i("option",{attrs:{value:"default"}},[t._v("Стандартный товар")]),i("option",{attrs:{value:"clothes"}},[t._v("Одежда")]),i("option",{attrs:{value:"bags"}},[t._v("Обувь, сумки, аксессуары")]),i("option",{attrs:{value:"furniture"}},[t._v("Мебель")])])]),"volume"===t.volumeType?i("div",{staticClass:"volume"},[i("div",[i("label",{attrs:{for:"volume"}},[t._v("Объем, м3")]),i("input",{attrs:{type:"number",name:"Volume",id:"volume",autocomplete:"off"},domProps:{value:t.volume},on:{input:function(e){t.volume=t.format(e.target.value,3),t.dimensions.fill(Math.pow(t.volume,1/3).toFixed(3)),t.cylpar.fill(Math.pow(4*t.volume/Math.PI,1/3).toFixed(3)),t.calculate()}}})]),i("button",{on:{click:function(e){t.volumeType="dimensions"}}},[t._v("D")])]):t._e(),"dimensions"===t.volumeType?i("div",{staticClass:"volume"},[i("div",[i("label",{attrs:{for:"width"}},[t._v("Ширина, м")]),i("input",{attrs:{type:"number",name:"Width",id:"width",autocomplete:"off"},domProps:{value:t.dimensions[0]},on:{input:function(e){t.dimensions[0]=t.format(e.target.value,3),t.volume=(t.dimensions[0]*t.dimensions[1]*t.dimensions[2]).toFixed(3),t.cylpar.fill(Math.pow(4*t.volume/Math.PI,1/3).toFixed(3)),t.calculate()}}})]),i("div",[i("label",{attrs:{for:"depth"}},[t._v("Глубина, м")]),i("input",{attrs:{type:"number",name:"Depth",id:"depth",autocomplete:"off"},domProps:{value:t.dimensions[1]},on:{input:function(e){t.dimensions[1]=t.format(e.target.value,3),t.volume=(t.dimensions[0]*t.dimensions[1]*t.dimensions[2]).toFixed(3),t.cylpar.fill(Math.pow(4*t.volume/Math.PI,1/3).toFixed(3)),t.calculate()}}})]),i("div",[i("label",{attrs:{for:"height"}},[t._v("Высота, м")]),i("input",{attrs:{type:"number",name:"Height",id:"height",autocomplete:"off"},domProps:{value:t.dimensions[2]},on:{input:function(e){t.dimensions[2]=t.format(e.target.value,3),t.volume=(t.dimensions[0]*t.dimensions[1]*t.dimensions[2]).toFixed(3),t.cylpar.fill(Math.pow(4*t.volume/Math.PI,1/3).toFixed(3)),t.calculate()}}})]),i("button",{on:{click:function(e){t.volumeType="cylinder"}}},[t._v("C")])]):t._e(),"cylinder"===t.volumeType?i("div",{staticClass:"volume"},[i("div",[i("label",{attrs:{for:"diameter"}},[t._v("Диаметр, м")]),i("input",{attrs:{type:"number",name:"Diameter",id:"diameter",autocomplete:"off"},domProps:{value:t.cylpar[0]},on:{input:function(e){t.cylpar[0]=t.format(e.target.value,3),t.volume=(t.cylpar[0]*t.cylpar[0]*t.cylpar[1]*Math.PI*.25).toFixed(3),t.dimensions.fill(Math.pow(t.volume,1/3).toFixed(3)),t.calculate()}}})]),i("div",[i("label",{attrs:{for:"cheight"}},[t._v("Высота, м")]),i("input",{attrs:{type:"number",name:"Height",id:"cheight",autocomplete:"off"},domProps:{value:t.cylpar[1]},on:{input:function(e){t.cylpar[1]=t.format(e.target.value,3),t.volume=(t.cylpar[0]*t.cylpar[0]*t.cylpar[1]*Math.PI*.25).toFixed(3),t.dimensions.fill(Math.pow(t.volume,1/3).toFixed(3)),t.calculate()}}})]),i("button",{on:{click:function(e){t.volumeType="volume"}}},[t._v("V")])]):t._e(),i("div",{staticClass:"wghqnt"},[i("div",[i("label",{attrs:{for:"weight"}},[t._v("Вес, кг")]),i("input",{attrs:{type:"number",name:"Weight",id:"weight",autocomplete:"off"},domProps:{value:t.weight},on:{input:function(e){t.weight=t.format(e.target.value,3),t.calculate()}}})]),i("div",[i("label",{attrs:{for:"quantity"}},[t._v("Количество")]),i("input",{attrs:{type:"number",name:"Quantity",id:"quantity",autocomplete:"off"},domProps:{value:t.quantity},on:{input:function(e){t.quantity=t.format(e.target.value,0),t.calculate()}}})])]),i("div",{attrs:{id:"intres"}},[i("ul",[t.wcost?i("li",[t._v("Страховка:")]):t._e(),i("li",[t._v("Плотность:")]),i("li",[t._v("Ставка:")]),i("li",[t._v("За штуку:")])]),i("ul",[t.wcost?i("li",[t._v(t._s(t.insurance))]):t._e(),i("li",[t._v(t._s(t.density))]),i("li",[t._v(t._s(t.rate))]),i("li",[t._v(t._s(t.apiece))])])]),i("h2",[t._v(t._s(t.result))])])},n=[],o=(i("b680"),i("d3b7"),i("ddb0"),i("4222")),s=i("8a5a"),r={name:"CalcIn",props:["values","tariff","wcost"],data:function(){return{cost:"",category:"default",volume:"",dimensions:["","",""],cylpar:["",""],volumeType:"volume",weight:"",quantity:1,insurance:0,density:"Max",rate:0,apiece:0,result:0}},mixins:[o["a"]],methods:{calculate:function(){this.wcost?this.insurance=parseFloat((this.cost*s.insrate).toFixed(2)):this.insurance=0;var t=s[this.tariff][this.category];for(var e in this.density=(this.weight/this.volume).toFixed(0),isNaN(this.density)&&(this.density=1/0),t.Prices)if(t.Prices[e][0]<=this.density)return this.weight?this.apiece=(this.insurance+parseFloat((this.weight*t.Prices[e][1]).toFixed(2))).toFixed(2):this.apiece=0,this.rate=t.Prices[e][1]+" за кг",this.updateValue(),void(t.Prices[0][0]<=this.density&&(this.density="Max"));this.apiece=(this.insurance+parseFloat((this.volume*t.PricePerVol).toFixed(2))).toFixed(2),this.rate=t.PricePerVol+" за м3",this.density="Min",this.updateValue()},updateValue:function(){this.result=(this.apiece*this.quantity).toFixed(2),this.$emit("values",{cost:this.cost,category:this.category,volume:this.volume,weight:this.weight,quantity:this.quantity,apiece:this.apiece,result:this.result})}},mounted:function(){this.values&&(this.values.category&&(this.category=this.values.category),this.values.volume&&(this.volume=this.values.volume),this.values.weight&&(this.weight=this.values.weight),this.values.quantity&&(this.quantity=this.values.quantity)),this.calculate()},watch:{tariff:function(){this.calculate()}}},l=r,c=(i("dc98"),i("2877")),u=Object(c["a"])(l,a,n,!1,null,"70550dac",null);e["a"]=u.exports},dc98:function(t,e,i){"use strict";var a=i("84d3"),n=i.n(a);n.a},ef04:function(t,e,i){"use strict";var a=i("11fa"),n=i.n(a);n.a}}]);
//# sourceMappingURL=chunk-common.f2af1119.js.map