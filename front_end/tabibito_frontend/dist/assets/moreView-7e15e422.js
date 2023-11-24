import{L as a}from"./index.esm-edc83051.js";import{_ as t,q as e,r as i,H as l,D as d,a as o,o as s,c as r,b as n,d as c,F as u,e as p,w as v,t as h,h as m,s as g,p as _,j as b}from"./index-6bfe40dc.js";import{N as w}from"./navigationBar-a9774400.js";import{H as y,L as k,T,C as f,S as x,a as j,b as D}from"./TodayOutline-c2a1f312.js";import{A as C}from"./ArrowForward-ccadb430.js";const L=e({name:"moreView",components:{NavigationBar:w,HeartOutline:y,LocationOutline:k,TodayOutline:T,CompassOutline:f,Search:x,StatsChartOutline:j,Star:D,ArrowForward:C},setup(){const t=i([]),e=l();let o="en-US";"zh"===e.language&&(o="zh-CN");let s=i(null),r=i(null),n=i(null),c=i(null);const u=i(!1);let p=i(null),v=i(null),h=i({}),m=1;const g=d();return{currentLocation:n,startTime:s,endTime:r,tourType:c,price:p,duration:v,products:h,countPage:m,raw_trip_data:t,project_loc:null,project_zoom:1,locations:[],loadMap(){new a({apiKey:"AIzaSyBctzU8ocpP_0j4IdTRqA-GABIAnaXd0ow",version:"beta",libraries:["marker"],language:o}).load().then((a=>{const t=this.project_loc;let e=new a.maps.Map(document.getElementById("map"),{center:t,zoom:this.project_zoom,mapId:"jkhjkhkjhjkh"});const i=this.locations,l=new a.maps.InfoWindow;i.forEach((({position:t,title:i},d)=>{const o=new a.maps.marker.PinView({glyph:`${d+1}`}),s=new a.maps.marker.AdvancedMarkerView({position:t,map:e,title:`${d+1}. ${i}`,content:o.element});s.addListener("click",(({domEvent:a,latLng:t})=>{l.close(),l.setContent(s.title),l.open(s.map,s)}))}))}))},handleClick(){u.value=!0,setTimeout((()=>{u.value=!1}),2e3)},priceoptions:[{label:"Less than $500",value:"-500",key:"-500"},{label:"$500 - $1000",value:"500-1000",key:"500-1000"},{label:"$1000 - $2000",value:"1000-2000",key:"1000-2000"},{label:"$2000+",value:"2000+",key:"2000+"}],durationoptions:[{label:"1 week",value:"1 week",key:"1 week"},{label:"2 weeks",value:"2 weeks",key:"2 weeks"},{label:"3 weeks",value:"3 weeks",key:"3 weeks"},{label:"1 month",value:"1 month",key:"1 month"}],languageoptions:[{label:"English",value:"English",key:"English"},{label:"Italian",value:"Italian",key:"Italian"},{label:"Deutsch",value:"Deutsch",key:"Deutsch"},{label:"Turkish",value:"Turkish",key:"Turkish"}],sortoptions:[{label:"discount (high to low)",key:"discount (high to low)"},{label:"discount (low to high)",key:"discount (low to high)"},{label:"price (high to low)",key:"price (high to low)"},{label:"price (low to high)",key:"price (low to high)"}],locOptions:[{label:"London",key:"London",value:"London"},{label:"China",key:"China",value:"China"},{label:"England",key:"England",value:"England"},{label:"Ireland",key:"Ireland",value:"Ireland"}],typeOptions:[{label:"Wildlife Tour",key:"Wildlife Tour",value:"Wildlife Tour"},{label:"Adventure Tour",key:"Adventure Tour",value:"Adventure Tour"},{label:"City Tours",key:"City Tours",value:"City Tours"},{label:"Museum Tours",key:"Museum Tours",value:"Museum Tours"},{label:"Beaches Tour",key:"Beaches Tour",value:"Beaches Tour"}],handleSelectLoc(a){},handleSelectType(a){},handleSelectSort(a){g.info(String(a))},handleSelectPrice(a){},handleSelectDuration(a){},secureStartTime:a=>null!=r.value?a<Date.now()||a>r.value:a<Date.now(),secureEndTime:a=>null!=s.value?a<Date.now()||a<s.value:a<Date.now(),handleSearchProject(){this.axios.post("/search/product_list",{page:1,startTime:s.value,endTime:r.value,currentLocation:n.value,tourType:c.value,price:p.value,duration:v.value}).then((a=>{if(200===a.status){h.value=a.data.products;for(let a=0;a<h.value.length;a++){let t=h.value[a].duration,e=Math.round(t/3600),i=Math.round(e/24);e>24&&1===i&&(h.value[a].duration="1 Day"),e>24&&i>1&&(h.value[a].duration=i+" Days"),1===e&&(h.value[a].duration="1 Hour"),e<24&&1!==e&&(h.value[a].duration=e+" Hours")}this.project_loc={lat:a.data.products.map_latitude,lng:a.data.products.map_longitude},this.project_zoom=a.data.products.map_zoom,this.raw_trip_data.value=a.data.products;for(let a=0;a<this.raw_trip_data.value.length;a++)this.locations.push({position:{lat:this.raw_trip_data.value[a].location.map_latitude,lng:this.raw_trip_data.value[a].location.map_longitude},title:this.raw_trip_data.value[a].location.exact}),this.itineraryData.push({name:this.raw_trip_data.value[a].activity,time:"Day "+this.raw_trip_data.value[a].day+", "+this.raw_trip_data.value[a].time_of_day+" "+this.raw_trip_data.value[a].time,description:this.raw_trip_data.value[a].location.exact,picture:this.raw_trip_data.value[a].picture});this.loadMap()}})),this.axios.post("/search/product_number",{startTime:s.value,endTime:r.value,currentLocation:n.value,tourType:c.value,price:p.value,duration:v.value}).then((a=>{if(200===a.status){const t=a.data.number;m=Math.floor(t/3)+(t%3>0?1:0)}}))}}},created(){this.axios.post("/product/trips",{product_id:9}).then((a=>{this.project_loc={lat:a.data.location.map_latitude,lng:a.data.location.map_longitude},this.project_zoom=a.data.location.map_zoom,this.raw_trip_data.value=a.data.trips;for(let t=0;t<this.raw_trip_data.value.length;t++)this.locations.push({position:{lat:this.raw_trip_data.value[t].location.map_latitude,lng:this.raw_trip_data.value[t].location.map_longitude},title:this.raw_trip_data.value[t].location.exact}),this.itineraryData.push({name:this.raw_trip_data.value[t].activity,time:"Day "+this.raw_trip_data.value[t].day+", "+this.raw_trip_data.value[t].time_of_day+" "+this.raw_trip_data.value[t].time,description:this.raw_trip_data.value[t].location.exact,picture:this.raw_trip_data.value[t].picture});this.loadMap()})),this.axios.post("/search/product_list",{page:1,startTime:null,endTime:null,currentLocation:null,tourType:null,price:null,duration:null}).then((a=>{if(200===a.status){this.products=a.data.products;for(let a=0;a<this.products.length;a++){let t=this.products[a].duration,e=Math.round(t/3600),i=Math.round(e/24);e>24&&1===i&&(this.products[a].duration="1 Day"),e>24&&i>1&&(this.products[a].duration=i+" Days"),1===e&&(this.products[a].duration="1 Hour"),e<24&&1!==e&&(this.products[a].duration=e+" Hours")}}})),this.axios.post("/search/product_number",{startTime:Date.now(),endTime:2*Date.now(),currentLocation:i(),tourType:i(),price:i(),duration:i()}).then((a=>{if(200===a.status){const t=a.data.number;self.countPage=Math.floor(t/3)+(t%3>0?1:0)}}))},data:()=>({countPage:i(),itineraryData:[],products:[]}),methods:{pageChange(a){axios.post("http://127.0.0.1:5000/search/product_list",{page:a,startTime:startTime.value,endTime:endTime.value,currentLocation:currentLocation.value,tourType:tourType.value,price:price.value,duration:duration.value}).then((function(a){products.value=a.data})).catch((function(a){}))}}}),S=a=>(_("data-v-c9d4d1b3"),a=a(),b(),a),I={class:"halfMap"},M={class:"list_content"},z={class:"row y-gap-20 contents_wrap"},A={class:"col-12"},B={class:"content_wrap"},E={class:"col-md-auto"},$={class:"content_left ratio ratio-1:1"},O={class:"cardImage_content"},P=["src"],H={class:"cardImage_wish"},W=g('<div class="col-md" data-v-c9d4d1b3><div class="d-flex flex-column h-full justify-between" data-v-c9d4d1b3><div class="" data-v-c9d4d1b3><p class="text-14 lh-14 mb-5 text-light-1" data-v-c9d4d1b3>Westminster Borough, London</p><h3 class="text-16 lh-16 fw-500" data-v-c9d4d1b3>Luxury New Apartment With Private<br data-v-c9d4d1b3> Garden</h3><div class="row x-gap-5 items-center pt-5" data-v-c9d4d1b3><div class="col-auto" data-v-c9d4d1b3><div class="text-14 text-light-1" data-v-c9d4d1b3>2 guests</div></div><div class="col-auto round" data-v-c9d4d1b3><div class="size-3 rounded-full bg-light-1" data-v-c9d4d1b3></div></div><div class="col-auto" data-v-c9d4d1b3><div class="text-14 text-light-1" data-v-c9d4d1b3>1 bedroom</div></div><div class="col-auto round" data-v-c9d4d1b3><div class="size-3 rounded-full bg-light-1" data-v-c9d4d1b3></div></div><div class="col-auto" data-v-c9d4d1b3><div class="text-14 text-light-1" data-v-c9d4d1b3>1 bed</div></div></div></div><div class="row x-gap-10 y-gap-10 pt-20" data-v-c9d4d1b3><div class="col-auto" data-v-c9d4d1b3><div class="border-light rounded-100 py-5 px-20 text-14 lh-14" data-v-c9d4d1b3>Breakfast</div></div><div class="col-auto" data-v-c9d4d1b3><div class="border-light rounded-100 py-5 px-20 text-14 lh-14" data-v-c9d4d1b3>WiFi</div></div><div class="col-auto" data-v-c9d4d1b3><div class="border-light rounded-100 py-5 px-20 text-14 lh-14" data-v-c9d4d1b3>Spa</div></div><div class="col-auto" data-v-c9d4d1b3><div class="border-light rounded-100 py-5 px-20 text-14 lh-14" data-v-c9d4d1b3>Bar</div></div></div></div></div>',1),F={class:"col-md-auto content_right"},N=g('<div class="review-and-grade row x-gap-10 y-gap-10 justify-end items-center md:justify-start" data-v-c9d4d1b3><div class="col-auto" data-v-c9d4d1b3><div class="text-14 lh-14 fw-500" data-v-c9d4d1b3>Exceptional</div><div class="text-14 lh-14 text-light-1" data-v-c9d4d1b3>3,014 reviews</div></div><div class="col-auto" data-v-c9d4d1b3><div class="star" data-v-c9d4d1b3>4.8</div></div></div><div class="from" data-v-c9d4d1b3>From</div>',2),U={class:"price"},V=S((()=>c("div",{class:"per"},"per adult",-1))),q=["onClick"],G=S((()=>c("div",{class:"map_content"},[c("div",{class:"map",id:"map"})],-1)));const K=t(L,[["render",function(a,t,e,i,l,d){const g=o("navigation-bar"),_=o("HeartOutline"),b=o("n-icon"),w=o("n-button"),y=o("ArrowForward"),k=o("n-pagination");return s(),r(u,null,[n(g,{class:"zup"}),c("div",I,[c("div",M,[c("div",z,[c("div",A,[c("div",B,[(s(!0),r(u,null,p(a.products,(t=>(s(),r("div",{class:"row x-gap-20 y-gap-20 card",key:t.id},[c("div",E,[c("div",$,[c("div",O,[c("img",{class:"cardImage col-12",src:t.image},null,8,P)]),c("div",H,[n(w,{loading:!1,onClick:a.handleClick,strong:"",secondary:"",circle:"",type:"info"},{icon:v((()=>[n(b,null,{default:v((()=>[n(_)])),_:1})])),_:1},8,["onClick"])])])]),W,c("div",F,[N,c("div",U,"US$"+h(t.price),1),V,c("a",{class:"button -dark-1 btn_detail",onClick:a=>this.$router.push("/trip/"+t.id)},[m(" View Detail "),n(b,{class:"margin"},{default:v((()=>[n(y)])),_:1})],8,q)])])))),128))])])]),n(k,{class:"page",page:a.page,"onUpdate:page":t[0]||(t[0]=t=>a.page=t),"on-update:page":a.pageChange,"page-count":a.countPage},null,8,["page","on-update:page","page-count"])]),G])],64)}],["__scopeId","data-v-c9d4d1b3"]]);export{K as default};