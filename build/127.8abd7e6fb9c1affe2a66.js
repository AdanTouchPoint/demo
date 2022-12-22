"use strict";(self.webpackChunkpayload_template_js_blank=self.webpackChunkpayload_template_js_blank||[]).push([[127],{89127:(e,a,l)=>{l.r(a),l.d(a,{default:()=>I});var t=l(67294),i=l(16550),s=l(26793),n=l(9980),d=l(28630),o=l(75091),r=l(47489),c=l(40684),m=l(2143),v=l(49546),u=l(28584),b=l(26644),p=l(4983),f=l(46268),E=l(5590),_=l(55532),g=l(37276),Z=l(24427),h=l(50854),N=l(8742),$=l(28019),w=l(40829),S=l(45074),k=l(8792),y=l(11750),P=l(24531),L=l(34088),U=l(9684),R=l(69850),A=l(28960);l(88446);const C="global-edit",D=e=>{var a,l,i,d,o,r,c,m,D,F,T,I,j,x,M,O;const{admin:{dateFormat:G}}=(0,n.Z)(),{publishedDoc:H}=(0,S.x)(),{t:K,i18n:V}=(0,s.$)("general"),{global:q,data:z,onSave:B,permissions:J,action:Q,apiURL:W,initialState:X,isLoading:Y}=e,{fields:ee,preview:ae,versions:le,label:te,admin:{description:ie,hideAPIURL:se}={}}=q,ne=null===(a=null==J?void 0:J.update)||void 0===a?void 0:a.permission;return t.createElement("div",{className:C},Y&&t.createElement(w.Z,null),!Y&&t.createElement(U.R.Provider,{value:"update"},t.createElement(b.Z,{className:"global-edit__form",method:"post",action:Q,onSuccess:B,disabled:!ne,initialState:X},t.createElement("div",{className:"global-edit__main"},t.createElement(g.Z,{title:(0,A.i)(te,V),description:(0,A.i)(te,V),keywords:`${(0,A.i)(te,V)}, Payload, CMS`}),t.createElement(u.Z,null),!((null===(l=q.versions)||void 0===l?void 0:l.drafts)&&(null===(d=null===(i=q.versions)||void 0===i?void 0:i.drafts)||void 0===d?void 0:d.autosave))&&t.createElement(h.Z,null),t.createElement(R.T,{className:"global-edit__edit"},t.createElement("header",{className:"global-edit__header"},t.createElement("h1",null,K("editLabel",{label:(0,A.i)(te,V)})),ie&&t.createElement("div",{className:"global-edit__sub-header"},t.createElement($.Z,{description:ie}))),t.createElement(E.Z,{readOnly:!ne,permissions:J.fields,filter:e=>!e.admin.position||e.admin.position&&"sidebar"!==e.admin.position,fieldTypes:Z.Z,fieldSchema:ee}))),t.createElement("div",{className:"global-edit__sidebar-wrap"},t.createElement("div",{className:"global-edit__sidebar"},t.createElement("div",{className:"global-edit__sidebar-sticky-wrap"},t.createElement("div",{className:"global-edit__document-actions"+((null===(o=q.versions)||void 0===o?void 0:o.drafts)&&!(null===(c=null===(r=q.versions)||void 0===r?void 0:r.drafts)||void 0===c?void 0:c.autosave)||ae?" global-edit__document-actions--has-2":"")},ae&&(!(null===(m=q.versions)||void 0===m?void 0:m.drafts)||(null===(F=null===(D=q.versions)||void 0===D?void 0:D.drafts)||void 0===F?void 0:F.autosave))&&t.createElement(p.Z,{generatePreviewURL:ae,data:z}),ne&&t.createElement(t.Fragment,null,(null===(T=q.versions)||void 0===T?void 0:T.drafts)&&t.createElement(t.Fragment,null,!q.versions.drafts.autosave&&t.createElement(k.Z,null),t.createElement(y.Z,null)),!(null===(I=q.versions)||void 0===I?void 0:I.drafts)&&t.createElement(f.Z,{buttonId:"action-save"},K("save")))),t.createElement("div",{className:"global-edit__sidebar-fields"},ae&&(null===(j=q.versions)||void 0===j?void 0:j.drafts)&&!(null===(M=null===(x=q.versions)||void 0===x?void 0:x.drafts)||void 0===M?void 0:M.autosave)&&t.createElement(p.Z,{generatePreviewURL:ae,data:z}),(null===(O=q.versions)||void 0===O?void 0:O.drafts)&&t.createElement(t.Fragment,null,t.createElement(P.Z,null),q.versions.drafts.autosave&&ne&&t.createElement(L.Z,{publishedDocUpdatedAt:(null==H?void 0:H.updatedAt)||(null==z?void 0:z.createdAt),global:q})),t.createElement(E.Z,{readOnly:!ne,permissions:J.fields,filter:e=>"sidebar"===e.admin.position,fieldTypes:Z.Z,fieldSchema:ee})),t.createElement("ul",{className:"global-edit__meta"},le&&t.createElement("li",null,t.createElement("div",{className:"global-edit__label"},K("version:versions")),t.createElement(N.Z,{global:q})),z&&!se&&t.createElement("li",{className:"global-edit__api-url"},t.createElement("span",{className:"global-edit__label"},"API URL"," ",t.createElement(_.Z,{value:W})),t.createElement("a",{href:W,target:"_blank",rel:"noopener noreferrer"},W)),z.updatedAt&&t.createElement("li",null,t.createElement("div",{className:"global-edit__label"},K("lastModified")),t.createElement("div",null,(0,v.default)(new Date(z.updatedAt),G))))))))))};var F=l(19826),T=l(91455);const I=e=>{var a;const{state:l}=(0,i.TH)(),v=(0,c.bU)(),{setStepNav:u}=(0,o.FP)(),{user:b}=(0,d.a)(),[p,f]=(0,t.useState)(),{getVersions:E,preferencesKey:_,docPermissions:g,getDocPermissions:Z}=(0,S.x)(),{getPreference:h}=(0,T.G)(),{t:N}=(0,s.$)(),{serverURL:$,routes:{api:w}}=(0,n.Z)(),{global:k}=e,{slug:y,label:P,fields:L,admin:{components:{views:{Edit:U}={}}={}}={}}=k,R=(0,t.useCallback)((async e=>{E(),Z();const a=await(0,F.Z)({fieldSchema:L,data:e.result,operation:"update",user:b,locale:v,t:N});f(a)}),[E,L,b,v,N,Z]),[{data:A}]=(0,r.Z)(`${$}${w}/globals/${y}`,{initialParams:{"fallback-locale":"null",depth:0,draft:"true"}}),C=(null==l?void 0:l.data)||A;return(0,t.useEffect)((()=>{u([{label:P}])}),[u,P]),(0,t.useEffect)((()=>{(async()=>{const e=await(0,F.Z)({fieldSchema:L,data:C,user:b,operation:"update",locale:v,t:N});await h(_),f(e)})()}),[C,L,b,v,h,_,N]),t.createElement(m.Z,{DefaultComponent:D,CustomComponent:U,componentProps:{isLoading:!p||!g,data:C,permissions:g,initialState:p,global:k,onSave:R,apiURL:`${$}${w}/globals/${y}${(null===(a=k.versions)||void 0===a?void 0:a.drafts)?"?draft=true":""}`,action:`${$}${w}/globals/${y}?locale=${v}&depth=0&fallback-locale=null`}})}}}]);