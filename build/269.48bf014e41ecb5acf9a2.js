"use strict";(self.webpackChunkpayload_template_js_blank=self.webpackChunkpayload_template_js_blank||[]).push([[269],{8269:(e,a,t)=>{t.r(a),t.d(a,{default:()=>g});var i=t(67294),l=t(16550),s=t(26793),o=t(9980),n=t(28630),r=t(47489),d=t(2143),c=t(58951),u=t(58938),p=t(19826),f=t(40684),m=t(45074),$=t(91455),v=t(30894);const g=e=>{var a,t;const{collection:g,isEditing:k}=e,{slug:h,admin:{components:{views:{Edit:E}={}}={}}={}}=g,[S]=(0,i.useState)((()=>(0,u.Z)(g,k))),[b]=(0,i.useState)((()=>({...g,fields:S}))),[P,Z]=(0,i.useState)(),_=(0,f.bU)(),{serverURL:w,routes:{admin:C,api:y}}=(0,o.Z)(),{params:{id:L}={}}=(0,l.$B)(),{state:U}=(0,l.TH)(),j=(0,l.k6)(),[D,R]=(0,i.useState)(),{user:x}=(0,n.a)(),{getVersions:B,preferencesKey:G,getDocPermissions:H,docPermissions:K}=(0,m.x)(),{getPreference:T}=(0,$.G)(),{t:V}=(0,s.$)("general"),q=(0,i.useCallback)((async e=>{var a;if(B(),H(),k){const a=await(0,p.Z)({fieldSchema:b.fields,data:e.doc,user:x,id:L,operation:"update",locale:_,t:V});R(a)}else Z(`${C}/collections/${b.slug}/${null===(a=null==e?void 0:e.doc)||void 0===a?void 0:a.id}`)}),[C,b,k,B,x,L,V,_,H]),[{data:z,isLoading:A,isError:F}]=(0,r.Z)(k?`${w}${y}/${h}/${L}`:null,{initialParams:{"fallback-locale":"null",depth:0,draft:"true"}}),I=(null==U?void 0:U.data)||z;if((0,i.useEffect)((()=>{if(A)return;(async()=>{const e=await(0,p.Z)({fieldSchema:S,data:I,user:x,operation:k?"update":"create",id:L,locale:_,t:V});await T(G),R(e)})()}),[I,S,k,L,x,_,A,G,T,V]),(0,i.useEffect)((()=>{P&&j.push(P)}),[j,P]),F)return i.createElement(l.l_,{to:`${C}/not-found`});const J=`${w}${y}/${h}/${L}${b.versions.drafts?"?draft=true":""}`,M=`${w}${y}/${h}${k?`/${L}`:""}?locale=${_}&depth=0&fallback-locale=null`,N=k&&(null===(a=null==K?void 0:K.update)||void 0===a?void 0:a.permission)||!k&&(null===(t=null==K?void 0:K.create)||void 0===t?void 0:t.permission);return i.createElement(v.f.Provider,{value:1},i.createElement(d.Z,{DefaultComponent:c.Z,CustomComponent:E,componentProps:{id:L,isLoading:!D||!K,data:I,collection:b,permissions:K,isEditing:k,onSave:q,initialState:D,hasSavePermission:N,apiURL:J,action:M}}))}}}]);