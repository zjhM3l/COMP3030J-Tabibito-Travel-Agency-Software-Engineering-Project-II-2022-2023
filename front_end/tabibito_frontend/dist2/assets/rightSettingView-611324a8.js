import{_ as a,q as e,I as t,a as i,o as l,c as s,d as n,b as d,k as o,v as r,h as u,t as c,p,j as m}from"./index-d8eefb82.js";import{A as h}from"./ArrowForwardOutline-76c1dc4e.js";const b=e({name:"rightSettingView",components:{ArrowForwardOutline:h},created(){this.axios.get("/profile/info").then((a=>{this.avatar=a.data.avatar,this.gender=a.data.gender,this.u_name=a.data.u_name,this.f_name=a.data.f_name,this.l_name=a.data.l_name,this.email=a.data.email,this.phone=a.data.phone,this.birthday=a.data.birthday,this.about=a.data.about}))},data:()=>({isEditing:!1,avatar:"",gender:"",u_name:"",f_name:"",l_name:"",email:"",phone:"",birthday:"",about:""}),computed:{buttonText(){return this.isEditing?"Save":"Edit"}},methods:{toggleEdit(){this.isEditing=!this.isEditing,this.isEditing||t.post("/profile/update_info",{u_name:this.u_name,gender:this.gender,f_name:this.f_name,l_name:this.l_name,email:this.email,phone:this.phone,birthday:this.birthday,about:this.about})}}}),v=a=>(p("data-v-941cb513"),a=a(),m(),a),g={class:"tabInnerContainer"},_={class:"tabs_content"},f={class:"row y-gap-30 tab_main"},y={class:"col-auto"},x={class:"avatar_container"},E=["src"],w=v((()=>n("div",{class:"col-auto"},[n("h4",{class:"avatar_title"},"Your avatar"),n("div",{class:"avatar_text"},"PNG or JPG no bigger than 800px wide and tall.")],-1))),U=v((()=>n("div",{class:"line"},null,-1))),q={class:"col-xl-9"},V={class:"row x-gap-20 y-gap-20"},j={class:"col-12"},F={class:"input_form"},A=["readonly"],N=v((()=>n("label",{class:"label"},"Gender",-1))),I={class:"col-12"},k={class:"input_form"},B=["readonly"],G=v((()=>n("label",{class:"label"},"User Name",-1))),P={class:"col-md-6"},C={class:"input_form"},L=["readonly"],O=v((()=>n("label",{class:"label"},"First Name",-1))),S={class:"col-md-6"},T={class:"input_form"},Y=["readonly"],J=v((()=>n("label",{class:"label"},"Last Name",-1))),z={class:"col-md-6"},D={class:"input_form"},H=v((()=>n("label",{class:"label"},"Email",-1))),K={class:"col-md-6"},M={class:"input_form"},Q=["readonly"],R=v((()=>n("label",{class:"label"},"Phone Number",-1))),W={class:"col-12"},X={class:"input_form"},Z=["readonly"],$=v((()=>n("label",{class:"label"},"Birthday",-1))),aa={class:"col-12"},ea={class:"input_form"},ta=["readonly"],ia=v((()=>n("label",{class:"label"},"About Yourself",-1))),la={class:"btn_container"},sa=v((()=>n("div",{class:"icon-arrow-top-right ml-15"},null,-1)));const na=a(b,[["render",function(a,e,t,p,m,h){const b=i("n-upload");return l(),s("div",g,[n("div",_,[n("div",f,[n("div",y,[n("div",x,[n("img",{src:a.avatar,alt:"avatar",style:{position:"absolute",top:"30px",left:"30px",width:"200px",height:"200px","-o-object-fit":"cover","object-fit":"cover","border-radius":"4px"}},null,8,E),d(b,{action:"http://127.0.0.1:5000/profile/uploadavatar","default-file-list":a.coverImageList,"list-type":"image-card",style:{position:"absolute",top:"30px",left:"30px",width:"200px",height:"200px","-o-object-fit":"cover","object-fit":"cover","border-radius":"4px"},onBeforeUpload:a.beforeUpload,accept:"image/*",onFinish:a.handleFinishAvatar,max:1,disabled:!a.isEditing},null,8,["default-file-list","onBeforeUpload","onFinish","disabled"])])]),w]),U,n("div",q,[n("div",V,[n("div",j,[n("div",F,[o(n("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=e=>a.gender=e),readonly:!a.isEditing,required:""},null,8,A),[[r,a.gender]]),N])]),n("div",I,[n("div",k,[o(n("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=e=>a.u_name=e),readonly:!a.isEditing,required:""},null,8,B),[[r,a.u_name]]),G])]),n("div",P,[n("div",C,[o(n("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=e=>a.f_name=e),readonly:!a.isEditing,required:""},null,8,L),[[r,a.f_name]]),O])]),n("div",S,[n("div",T,[o(n("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=e=>a.l_name=e),readonly:!a.isEditing,required:""},null,8,Y),[[r,a.l_name]]),J])]),n("div",z,[n("div",D,[o(n("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=e=>a.email=e),readonly:!0,required:""},null,512),[[r,a.email]]),H])]),n("div",K,[n("div",M,[o(n("input",{type:"text","onUpdate:modelValue":e[5]||(e[5]=e=>a.phone=e),readonly:!a.isEditing,required:""},null,8,Q),[[r,a.phone]]),R])]),n("div",W,[n("div",X,[o(n("input",{type:"text","onUpdate:modelValue":e[6]||(e[6]=e=>a.birthday=e),readonly:!a.isEditing,required:""},null,8,Z),[[r,a.birthday]]),$])]),n("div",aa,[n("div",ea,[o(n("textarea",{"onUpdate:modelValue":e[7]||(e[7]=e=>a.about=e),readonly:!a.isEditing,required:"",rows:"5"},null,8,ta),[[r,a.about]]),ia])])])]),n("div",la,[n("a",{href:"#",class:"button px-24 -dark-1 btn_bg",onClick:e[8]||(e[8]=(...e)=>a.toggleEdit&&a.toggleEdit(...e))},[u(c(a.buttonText)+" ",1),sa])])])])}],["__scopeId","data-v-941cb513"]]);export{na as default};