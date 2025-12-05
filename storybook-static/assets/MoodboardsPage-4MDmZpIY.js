import{j as o,r as s,u as K,c as H,a as Z}from"./iframe-q-XN_VZM.js";import{A as Ce}from"./Add-DsnlUBfa.js";import{c as D,S as Ze}from"./createSvgIcon-CvYdi5pS.js";import{C as se}from"./Close-CmD3Qau8.js";import{S as Je}from"./SearchBar-BWx1BoPs.js";import{B as S}from"./Box-Dmtu8wWb.js";import{B as N}from"./Button-Coknce8O.js";import{M as Be,S as Ke}from"./Select-DlpVDPsS.js";import{M as ee}from"./MenuItem-BnGKUDh9.js";import{I as _}from"./IconButton-BSXa4zK8.js";import{C as Qe}from"./Collapse-BRrJOswI.js";import{T as P}from"./Typography-C8IUsM00.js";import{C as ce}from"./Chip-CBvZjQD4.js";import{C as Xe,F as Me}from"./FileDropzone-pmc9wW2H.js";import{T as Ye}from"./TagInput-j-IMxDsC.js";import{M as eo,F as Se}from"./Modal-Cp6PhS6B.js";import{a as Q,g as X,s as F,c as Y,m as W,r as oo}from"./memoTheme-BW0efeYW.js";import{u as E}from"./useSlot-Xw8rJOQc.js";import{S as Re}from"./Snackbar-bTBQXszO.js";import{T as re}from"./TextField-DgQ3k6VB.js";import{F as to}from"./FormLabel-Cx8V1pjo.js";import{I as ao}from"./InputLabel-DbttPIAK.js";import{S as Le,E as no,a as so,b as ro,c as lo,I as ze}from"./museMockData-Y3ZfJwd0.js";import{P as Pe}from"./PageContainer-CGiDBXoR.js";import{C as io,F as co,L as te}from"./CollectionDropdown-BSiu3OBz.js";import{A as po}from"./AutoAwesome-Da6E_c8-.js";import{I as De}from"./ImageCard-COWnLIyX.js";import{M as uo}from"./Masonry-YhtJCdL7.js";import{c as ne}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{B as mo}from"./ButtonBase-JbB1eRtB.js";import{M as ho,C as fo}from"./MoodboardCard-Cw87D5OT.js";import{G as le}from"./Grid-Dd6PAMTp.js";import{L as ae}from"./ListItemText-DtuXspMo.js";import{D as pe,a as ue,b as me,c as he}from"./DialogTitle-ebosctkT.js";import{P as xo}from"./Paper-ri-B2SDS.js";import{b as go}from"./pexels-test-data-Di7YEpDZ.js";function bo(e){return X("MuiAlert",e)}const we=Q("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),vo=D(o.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"})),Co=D(o.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"})),So=D(o.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),yo=D(o.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"})),jo=D(o.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),Mo=e=>{const{variant:t,color:a,severity:n,classes:r}=e,l={root:["root",`color${Z(a||n)}`,`${t}${Z(a||n)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return Y(l,bo,r)},wo=F(xo,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`${a.variant}${Z(a.color||a.severity)}`]]}})(W(({theme:e})=>{const t=e.palette.mode==="light"?e.darken:e.lighten,a=e.palette.mode==="light"?e.lighten:e.darken;return{...e.typography.body2,backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(e.palette).filter(ne(["light"])).map(([n])=>({props:{colorSeverity:n,variant:"standard"},style:{color:e.vars?e.vars.palette.Alert[`${n}Color`]:t(e.palette[n].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${n}StandardBg`]:a(e.palette[n].light,.9),[`& .${we.icon}`]:e.vars?{color:e.vars.palette.Alert[`${n}IconColor`]}:{color:e.palette[n].main}}})),...Object.entries(e.palette).filter(ne(["light"])).map(([n])=>({props:{colorSeverity:n,variant:"outlined"},style:{color:e.vars?e.vars.palette.Alert[`${n}Color`]:t(e.palette[n].light,.6),border:`1px solid ${(e.vars||e).palette[n].light}`,[`& .${we.icon}`]:e.vars?{color:e.vars.palette.Alert[`${n}IconColor`]}:{color:e.palette[n].main}}})),...Object.entries(e.palette).filter(ne(["dark"])).map(([n])=>({props:{colorSeverity:n,variant:"filled"},style:{fontWeight:e.typography.fontWeightMedium,...e.vars?{color:e.vars.palette.Alert[`${n}FilledColor`],backgroundColor:e.vars.palette.Alert[`${n}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[n].dark:e.palette[n].main,color:e.palette.getContrastText(e.palette[n].main)}}}))]}})),Io=F("div",{name:"MuiAlert",slot:"Icon"})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),ko=F("div",{name:"MuiAlert",slot:"Message"})({padding:"8px 0",minWidth:0,overflow:"auto"}),Ao=F("div",{name:"MuiAlert",slot:"Action"})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),Ie={success:o.jsx(vo,{fontSize:"inherit"}),warning:o.jsx(Co,{fontSize:"inherit"}),error:o.jsx(So,{fontSize:"inherit"}),info:o.jsx(yo,{fontSize:"inherit"})},ve=s.forwardRef(function(t,a){const n=K({props:t,name:"MuiAlert"}),{action:r,children:l,className:i,closeText:d="Close",color:p,components:u={},componentsProps:h={},icon:m,iconMapping:w=Ie,onClose:x,role:C="alert",severity:g="success",slotProps:j={},slots:y={},variant:R="standard",...k}=n,M={...n,color:p,severity:g,variant:R,colorSeverity:p||g},v=Mo(M),L={slots:{closeButton:u.CloseButton,closeIcon:u.CloseIcon,...y},slotProps:{...h,...j}},[b,A]=E("root",{ref:a,shouldForwardComponentProp:!0,className:H(v.root,i),elementType:wo,externalForwardedProps:{...L,...k},ownerState:M,additionalProps:{role:C,elevation:0}}),[T,q]=E("icon",{className:v.icon,elementType:Io,externalForwardedProps:L,ownerState:M}),[U,V]=E("message",{className:v.message,elementType:ko,externalForwardedProps:L,ownerState:M}),[$,f]=E("action",{className:v.action,elementType:Ao,externalForwardedProps:L,ownerState:M}),[c,I]=E("closeButton",{elementType:_,externalForwardedProps:L,ownerState:M}),[J,B]=E("closeIcon",{elementType:jo,externalForwardedProps:L,ownerState:M});return o.jsxs(b,{...A,children:[m!==!1?o.jsx(T,{...q,children:m||w[g]||Ie[g]}):null,o.jsx(U,{...V,children:l}),r!=null?o.jsx($,{...f,children:r}):null,r==null&&x?o.jsx($,{...f,children:o.jsx(c,{size:"small","aria-label":d,title:d,color:"inherit",onClick:x,...I,children:o.jsx(J,{fontSize:"small",...B})})}):null]})});function Bo(e){return X("MuiFab",e)}const ke=Q("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),Ro=e=>{const{color:t,variant:a,classes:n,size:r}=e,l={root:["root",a,`size${Z(r)}`,t==="inherit"?"colorInherit":t]},i=Y(l,Bo,n);return{...n,...i}},Lo=F(mo,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>oo(e)||e==="classes",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`size${Z(a.size)}`],a.color==="inherit"&&t.colorInherit,t[Z(a.size)],t[a.color]]}})(W(({theme:e})=>({...e.typography.button,minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(e.vars||e).zIndex.fab,boxShadow:(e.vars||e).shadows[6],"&:active":{boxShadow:(e.vars||e).shadows[12]},color:e.vars?e.vars.palette.grey[900]:e.palette.getContrastText?.(e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],"&:hover":{backgroundColor:(e.vars||e).palette.grey.A100,"@media (hover: none)":{backgroundColor:(e.vars||e).palette.grey[300]},textDecoration:"none"},[`&.${ke.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]},variants:[{props:{size:"small"},style:{width:40,height:40}},{props:{size:"medium"},style:{width:48,height:48}},{props:{variant:"extended"},style:{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48}},{props:{variant:"extended",size:"small"},style:{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34}},{props:{variant:"extended",size:"medium"},style:{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40}},{props:{color:"inherit"},style:{color:"inherit"}}]})),W(({theme:e})=>({variants:[...Object.entries(e.palette).filter(ne(["dark","contrastText"])).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].contrastText,backgroundColor:(e.vars||e).palette[t].main,"&:hover":{backgroundColor:(e.vars||e).palette[t].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t].main}}}}))]})),W(({theme:e})=>({[`&.${ke.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}}))),zo=s.forwardRef(function(t,a){const n=K({props:t,name:"MuiFab"}),{children:r,className:l,color:i="default",component:d="button",disabled:p=!1,disableFocusRipple:u=!1,focusVisibleClassName:h,size:m="large",variant:w="circular",...x}=n,C={...n,color:i,component:d,disabled:p,disableFocusRipple:u,size:m,variant:w},g=Ro(C);return o.jsx(Lo,{className:H(g.root,l),component:d,disabled:p,focusRipple:!u,focusVisibleClassName:H(g.focusVisible,h),ownerState:C,ref:a,...x,classes:g,children:r})}),ie=s.createContext({}),ye=s.createContext({});function Po(e){return X("MuiStep",e)}Q("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const Do=e=>{const{classes:t,orientation:a,alternativeLabel:n,completed:r}=e;return Y({root:["root",a,n&&"alternativeLabel",r&&"completed"]},Po,t)},To=F("div",{name:"MuiStep",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.orientation],a.alternativeLabel&&t.alternativeLabel,a.completed&&t.completed]}})({variants:[{props:{orientation:"horizontal"},style:{paddingLeft:8,paddingRight:8}},{props:{alternativeLabel:!0},style:{flex:1,position:"relative"}}]}),Oo=s.forwardRef(function(t,a){const n=K({props:t,name:"MuiStep"}),{active:r,children:l,className:i,component:d="div",completed:p,disabled:u,expanded:h=!1,index:m,last:w,...x}=n,{activeStep:C,connector:g,alternativeLabel:j,orientation:y,nonLinear:R}=s.useContext(ie);let[k=!1,M=!1,v=!1]=[r,p,u];C===m?k=r!==void 0?r:!0:!R&&C>m?M=p!==void 0?p:!0:!R&&C<m&&(v=u!==void 0?u:!0);const L=s.useMemo(()=>({index:m,last:w,expanded:h,icon:m+1,active:k,completed:M,disabled:v}),[m,w,h,k,M,v]),b={...n,active:k,orientation:y,alternativeLabel:j,completed:M,disabled:v,expanded:h,component:d},A=Do(b),T=o.jsxs(To,{as:d,className:H(A.root,i),ref:a,ownerState:b,...x,children:[g&&j&&m!==0?g:null,l]});return o.jsx(ye.Provider,{value:L,children:g&&!j&&m!==0?o.jsxs(s.Fragment,{children:[g,T]}):T})}),Fo=D(o.jsx("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"})),Uo=D(o.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}));function No(e){return X("MuiStepIcon",e)}const fe=Q("MuiStepIcon",["root","active","completed","error","text"]);var Ae;const Vo=e=>{const{classes:t,active:a,completed:n,error:r}=e;return Y({root:["root",a&&"active",n&&"completed",r&&"error"],text:["text"]},No,t)},xe=F(Ze,{name:"MuiStepIcon",slot:"Root"})(W(({theme:e})=>({display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),color:(e.vars||e).palette.text.disabled,[`&.${fe.completed}`]:{color:(e.vars||e).palette.primary.main},[`&.${fe.active}`]:{color:(e.vars||e).palette.primary.main},[`&.${fe.error}`]:{color:(e.vars||e).palette.error.main}}))),$o=F("text",{name:"MuiStepIcon",slot:"Text"})(W(({theme:e})=>({fill:(e.vars||e).palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily}))),qo=s.forwardRef(function(t,a){const n=K({props:t,name:"MuiStepIcon"}),{active:r=!1,className:l,completed:i=!1,error:d=!1,icon:p,...u}=n,h={...n,active:r,completed:i,error:d},m=Vo(h);if(typeof p=="number"||typeof p=="string"){const w=H(l,m.root);return d?o.jsx(xe,{as:Uo,className:w,ref:a,ownerState:h,...u}):i?o.jsx(xe,{as:Fo,className:w,ref:a,ownerState:h,...u}):o.jsxs(xe,{className:w,ref:a,ownerState:h,...u,children:[Ae||(Ae=o.jsx("circle",{cx:"12",cy:"12",r:"12"})),o.jsx($o,{className:m.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:h,children:p})]})}return p});function Eo(e){return X("MuiStepLabel",e)}const G=Q("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),Wo=e=>{const{classes:t,orientation:a,active:n,completed:r,error:l,disabled:i,alternativeLabel:d}=e;return Y({root:["root",a,l&&"error",i&&"disabled",d&&"alternativeLabel"],label:["label",n&&"active",r&&"completed",l&&"error",i&&"disabled",d&&"alternativeLabel"],iconContainer:["iconContainer",n&&"active",r&&"completed",l&&"error",i&&"disabled",d&&"alternativeLabel"],labelContainer:["labelContainer",d&&"alternativeLabel"]},Eo,t)},Ho=F("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.orientation]]}})({display:"flex",alignItems:"center",[`&.${G.alternativeLabel}`]:{flexDirection:"column"},[`&.${G.disabled}`]:{cursor:"default"},variants:[{props:{orientation:"vertical"},style:{textAlign:"left",padding:"8px 0"}}]}),_o=F("span",{name:"MuiStepLabel",slot:"Label"})(W(({theme:e})=>({...e.typography.body2,display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),[`&.${G.active}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${G.completed}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${G.alternativeLabel}`]:{marginTop:16},[`&.${G.error}`]:{color:(e.vars||e).palette.error.main}}))),Go=F("span",{name:"MuiStepLabel",slot:"IconContainer"})({flexShrink:0,display:"flex",paddingRight:8,[`&.${G.alternativeLabel}`]:{paddingRight:0}}),Zo=F("span",{name:"MuiStepLabel",slot:"LabelContainer"})(W(({theme:e})=>({width:"100%",color:(e.vars||e).palette.text.secondary,[`&.${G.alternativeLabel}`]:{textAlign:"center"}}))),Te=s.forwardRef(function(t,a){const n=K({props:t,name:"MuiStepLabel"}),{children:r,className:l,componentsProps:i={},error:d=!1,icon:p,optional:u,slots:h={},slotProps:m={},StepIconComponent:w,StepIconProps:x,...C}=n,{alternativeLabel:g,orientation:j}=s.useContext(ie),{active:y,disabled:R,completed:k,icon:M}=s.useContext(ye),v=p||M;let L=w;v&&!L&&(L=qo);const b={...n,active:y,alternativeLabel:g,completed:k,disabled:R,error:d,orientation:j},A=Wo(b),T={slots:h,slotProps:{stepIcon:x,...i,...m}},[q,U]=E("root",{elementType:Ho,externalForwardedProps:{...T,...C},ownerState:b,ref:a,className:H(A.root,l)}),[V,$]=E("label",{elementType:_o,externalForwardedProps:T,ownerState:b}),[f,c]=E("stepIcon",{elementType:L,externalForwardedProps:T,ownerState:b});return o.jsxs(q,{...U,children:[v||f?o.jsx(Go,{className:A.iconContainer,ownerState:b,children:o.jsx(f,{completed:k,active:y,error:d,icon:v,...c})}):null,o.jsxs(Zo,{className:A.labelContainer,ownerState:b,children:[r?o.jsx(V,{...$,className:H(A.label,$?.className),children:r}):null,u]})]})});Te.muiName="StepLabel";function Jo(e){return X("MuiStepConnector",e)}Q("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);const Ko=e=>{const{classes:t,orientation:a,alternativeLabel:n,active:r,completed:l,disabled:i}=e,d={root:["root",a,n&&"alternativeLabel",r&&"active",l&&"completed",i&&"disabled"],line:["line",`line${Z(a)}`]};return Y(d,Jo,t)},Qo=F("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.orientation],a.alternativeLabel&&t.alternativeLabel,a.completed&&t.completed]}})({flex:"1 1 auto",variants:[{props:{orientation:"vertical"},style:{marginLeft:12}},{props:{alternativeLabel:!0},style:{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"}}]}),Xo=F("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.line,t[`line${Z(a.orientation)}`]]}})(W(({theme:e})=>{const t=e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[600];return{display:"block",borderColor:e.vars?e.vars.palette.StepConnector.border:t,variants:[{props:{orientation:"horizontal"},style:{borderTopStyle:"solid",borderTopWidth:1}},{props:{orientation:"vertical"},style:{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24}}]}})),Yo=s.forwardRef(function(t,a){const n=K({props:t,name:"MuiStepConnector"}),{className:r,...l}=n,{alternativeLabel:i,orientation:d="horizontal"}=s.useContext(ie),{active:p,disabled:u,completed:h}=s.useContext(ye),m={...n,alternativeLabel:i,orientation:d,active:p,completed:h,disabled:u},w=Ko(m);return o.jsx(Qo,{className:H(w.root,r),ref:a,ownerState:m,...l,children:o.jsx(Xo,{className:w.line,ownerState:m})})});function et(e){return X("MuiStepper",e)}Q("MuiStepper",["root","horizontal","vertical","nonLinear","alternativeLabel"]);const ot=e=>{const{orientation:t,nonLinear:a,alternativeLabel:n,classes:r}=e;return Y({root:["root",t,a&&"nonLinear",n&&"alternativeLabel"]},et,r)},tt=F("div",{name:"MuiStepper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.orientation],a.alternativeLabel&&t.alternativeLabel,a.nonLinear&&t.nonLinear]}})({display:"flex",variants:[{props:{orientation:"horizontal"},style:{flexDirection:"row",alignItems:"center"}},{props:{orientation:"vertical"},style:{flexDirection:"column"}},{props:{alternativeLabel:!0},style:{alignItems:"flex-start"}}]}),at=o.jsx(Yo,{}),nt=s.forwardRef(function(t,a){const n=K({props:t,name:"MuiStepper"}),{activeStep:r=0,alternativeLabel:l=!1,children:i,className:d,component:p="div",connector:u=at,nonLinear:h=!1,orientation:m="horizontal",...w}=n,x={...n,nonLinear:h,alternativeLabel:l,orientation:m,component:p},C=ot(x),g=s.Children.toArray(i).filter(Boolean),j=g.map((R,k)=>s.cloneElement(R,{index:k,last:k+1===g.length,...R.props})),y=s.useMemo(()=>({activeStep:r,alternativeLabel:l,connector:u,nonLinear:h,orientation:m}),[r,l,u,h,m]);return o.jsx(ie.Provider,{value:y,children:o.jsx(tt,{as:p,ownerState:x,className:H(C.root,d),ref:a,...w,children:j})})}),st=D(o.jsx("path",{d:"M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"})),rt=D(o.jsx("path",{d:"M3 18h6v-2H3zM3 6v2h18V6zm0 7h12v-2H3z"})),lt=D(o.jsx("path",{fillRule:"evenodd",d:"M3 3v8h8V3zm6 6H5V5h4zm-6 4v8h8v-8zm6 6H5v-4h4zm4-16v8h8V3zm6 6h-4V5h4zm-6 4v8h8v-8zm6 6h-4v-4h4z"})),it=D(o.jsx("path",{d:"M3 14h4v-4H3zm0 5h4v-4H3zM3 9h4V5H3zm5 5h13v-4H8zm0 5h13v-4H8zM8 5v4h13V5z"}));function Oe({searchValue:e="",onSearchChange:t,availableTags:a=[],selectedTags:n=[],onTagToggle:r,onClearFilters:l,sortBy:i="newest",onSortChange:d,viewMode:p="grid",onViewModeChange:u,resultCount:h,sx:m}){const[w,x]=s.useState(!1),[C,g]=s.useState(null),j=[{id:"newest",label:"Newest First"},{id:"oldest",label:"Oldest First"},{id:"name-asc",label:"Name (A-Z)"},{id:"name-desc",label:"Name (Z-A)"}],y=n.length>0||e.length>0,R=s.useCallback(b=>{r(b)},[r]),k=s.useCallback(b=>{g(b.currentTarget)},[]),M=s.useCallback(()=>{g(null)},[]),v=s.useCallback(b=>{d?.(b),M()},[d,M]),L=s.useCallback(()=>{l?.()},[l]);return o.jsxs(S,{sx:{mb:3,...m},children:[o.jsxs(S,{sx:{display:"flex",alignItems:"center",gap:2,flexWrap:"wrap"},children:[o.jsx(Je,{value:e,onChange:t,placeholder:"Search references...",hasFilter:!0,isFilterActive:w,onFilterToggle:()=>x(!w),sx:{flex:1,minWidth:200}}),d&&o.jsxs(o.Fragment,{children:[o.jsx(N,{variant:"outlined",size:"small",startIcon:o.jsx(rt,{}),onClick:k,sx:{textTransform:"none",borderColor:"divider",color:"text.secondary"},children:j.find(b=>b.id===i)?.label||"Sort"}),o.jsx(Be,{anchorEl:C,open:!!C,onClose:M,children:j.map(b=>o.jsx(ee,{selected:b.id===i,onClick:()=>v(b.id),children:b.label},b.id))})]}),u&&o.jsxs(S,{sx:{display:"flex",border:"1px solid",borderColor:"divider",borderRadius:1,overflow:"hidden"},children:[o.jsx(_,{size:"small",onClick:()=>u("grid"),sx:{borderRadius:0,bgcolor:p==="grid"?"action.selected":"transparent",color:p==="grid"?"primary.main":"text.secondary"},children:o.jsx(lt,{fontSize:"small"})}),o.jsx(_,{size:"small",onClick:()=>u("list"),sx:{borderRadius:0,bgcolor:p==="list"?"action.selected":"transparent",color:p==="list"?"primary.main":"text.secondary"},children:o.jsx(it,{fontSize:"small"})})]})]}),o.jsx(Qe,{in:w,children:o.jsxs(S,{sx:{mt:2,p:2,borderRadius:1,border:"1px solid",borderColor:"divider",bgcolor:"background.default"},children:[o.jsxs(S,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",mb:2},children:[o.jsxs(S,{sx:{display:"flex",alignItems:"center",gap:1},children:[o.jsx(st,{sx:{fontSize:18,color:"text.secondary"}}),o.jsx(P,{variant:"subtitle2",sx:{fontWeight:600},children:"Filter by Tags"})]}),y&&l&&o.jsx(N,{size:"small",onClick:L,sx:{textTransform:"none",color:"text.secondary"},children:"Clear all"})]}),o.jsx(S,{sx:{display:"flex",flexWrap:"wrap",gap:1},children:a.map(b=>{const A=n.includes(b);return o.jsx(ce,{label:`#${b}`,onClick:()=>R(b),variant:A?"filled":"outlined",color:A?"primary":"default",sx:{fontWeight:A?600:400,cursor:"pointer",transition:"all 0.15s ease","&:hover":{backgroundColor:A?"primary.dark":"action.hover"}}},b)})})]})}),(y||h!==void 0)&&o.jsxs(S,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",mt:2,pt:2,borderTop:"1px solid",borderColor:"divider"},children:[o.jsxs(S,{sx:{display:"flex",alignItems:"center",gap:1,flexWrap:"wrap"},children:[n.map(b=>o.jsx(ce,{label:`#${b}`,size:"small",onDelete:()=>R(b),deleteIcon:o.jsx(se,{sx:{fontSize:14}}),sx:{fontWeight:500,bgcolor:"primary.lighter",color:"primary.dark","& .MuiChip-deleteIcon":{color:"primary.main","&:hover":{color:"primary.dark"}}}},b)),e&&o.jsx(ce,{label:`"${e}"`,size:"small",onDelete:()=>t(""),deleteIcon:o.jsx(se,{sx:{fontSize:14}}),sx:{fontWeight:500,bgcolor:"grey.200","& .MuiChip-deleteIcon":{color:"text.secondary"}}})]}),h!==void 0&&o.jsxs(P,{variant:"body2",color:"text.secondary",children:[h," ",h===1?"result":"results"]})]})]})}Oe.__docgenInfo={description:`FilterBar 템플릿

검색 및 태그 기반 필터링 인터랙션을 관리하는 상단 바.
SearchBar, Keyword Chip 등을 조합한 필터링 UI.

동작 방식:
1. 검색어 입력으로 실시간 필터링
2. 태그 Chip 클릭으로 필터 토글
3. 정렬 옵션 선택
4. 뷰 모드 전환 (그리드/리스트)

Props:
@param {string} searchValue - 현재 검색어 [Optional, 기본값: '']
@param {function} onSearchChange - 검색어 변경 핸들러 [Required]
@param {string[]} availableTags - 사용 가능한 태그 목록 [Optional]
@param {string[]} selectedTags - 선택된 태그 목록 [Optional, 기본값: []]
@param {function} onTagToggle - 태그 토글 핸들러 (tag) => void [Required]
@param {function} onClearFilters - 필터 초기화 핸들러 [Optional]
@param {string} sortBy - 현재 정렬 기준 [Optional, 기본값: 'newest']
@param {function} onSortChange - 정렬 변경 핸들러 [Optional]
@param {string} viewMode - 현재 뷰 모드 ('grid' | 'list') [Optional, 기본값: 'grid']
@param {function} onViewModeChange - 뷰 모드 변경 핸들러 [Optional]
@param {number} resultCount - 검색 결과 수 [Optional]
@param {object} sx - 추가 스타일 [Optional]

Example usage:
<FilterBar
  searchValue={search}
  onSearchChange={setSearch}
  availableTags={allTags}
  selectedTags={activeTags}
  onTagToggle={handleTagToggle}
  resultCount={filteredItems.length}
/>`,methods:[],displayName:"FilterBar",props:{searchValue:{defaultValue:{value:"''",computed:!1},required:!1},availableTags:{defaultValue:{value:"[]",computed:!1},required:!1},selectedTags:{defaultValue:{value:"[]",computed:!1},required:!1},sortBy:{defaultValue:{value:"'newest'",computed:!1},required:!1},viewMode:{defaultValue:{value:"'grid'",computed:!1},required:!1}}};function Fe({isOpen:e,onClose:t,onUpload:a,categories:n=[{id:"photography",label:"Photography"},{id:"illustration",label:"Illustration"},{id:"ui-design",label:"UI Design"},{id:"branding",label:"Branding"},{id:"motion",label:"Motion Graphics"},{id:"other",label:"Other"}],suggestedTags:r=["minimal","bold","colorful","dark","light","retro","modern","organic"]}){const[l,i]=s.useState(0),[d,p]=s.useState(null),[u,h]=s.useState(null),[m,w]=s.useState({title:"",category:"",tags:[],memo:""}),[x,C]=s.useState(!1),[g,j]=s.useState(0),[y,R]=s.useState(!1),[k,M]=s.useState(null),v=["Select File","Add Details","Upload"],L=s.useCallback(c=>{if(p(c),M(null),c.type.startsWith("image/")){const I=URL.createObjectURL(c);h(I)}else h(null)},[]),b=s.useCallback(()=>{p(null),u&&(URL.revokeObjectURL(u),h(null))},[u]),A=s.useCallback((c,I)=>{w(J=>({...J,[c]:I}))},[]),T=s.useCallback(()=>{if(l===0&&!d){M("Please select a file to upload");return}if(l===1&&!m.title.trim()){M("Please enter a title");return}M(null),i(c=>c+1)},[l,d,m.title]),q=s.useCallback(()=>{M(null),i(c=>c-1)},[]),U=s.useCallback((c=!1)=>{i(0),p(null),u&&!c&&URL.revokeObjectURL(u),h(null),w({title:"",category:"",tags:[],memo:""}),C(!1),j(0),M(null)},[u]),V=s.useCallback(()=>{x||(U(),t())},[x,U,t]),$=s.useCallback(async()=>{C(!0),j(0);try{const c=setInterval(()=>{j(I=>I>=90?(clearInterval(c),I):I+10)},200);await a({file:d,previewUrl:u,...m}),clearInterval(c),j(100),setTimeout(()=>{R(!0),U(!0),t()},500)}catch(c){M(c.message||"Upload failed. Please try again."),C(!1)}},[d,m,u,a,t,U]),f=()=>{switch(l){case 0:return o.jsxs(S,{sx:{py:2},children:[o.jsx(Me,{onFileSelect:L,onFileRemove:b,selectedFile:d,previewUrl:u,variant:"default"}),d&&o.jsx(P,{variant:"body2",color:"text.secondary",sx:{mt:2,textAlign:"center"},children:'Click "Next" to add details about this reference'})]});case 1:return o.jsxs(S,{sx:{py:2,display:"flex",flexDirection:"column",gap:3},children:[u&&o.jsx(S,{sx:{width:"100%",height:120,borderRadius:1,overflow:"hidden",bgcolor:"grey.100"},children:o.jsx(S,{component:"img",src:u,alt:"Preview",sx:{width:"100%",height:"100%",objectFit:"cover"}})}),o.jsx(re,{label:"Title",value:m.title,onChange:c=>A("title",c.target.value),placeholder:"Enter a descriptive title",fullWidth:!0,required:!0}),o.jsxs(to,{fullWidth:!0,children:[o.jsx(ao,{children:"Category"}),o.jsx(Ke,{value:m.category,onChange:c=>A("category",c.target.value),label:"Category",children:n.map(c=>o.jsx(ee,{value:c.id,children:c.label},c.id))})]}),o.jsx(Ye,{tags:m.tags,onChange:c=>A("tags",c),placeholder:"Add style keywords...",suggestions:r,maxTags:8,label:"Tags"}),o.jsx(re,{label:"Memo (Optional)",value:m.memo,onChange:c=>A("memo",c.target.value),placeholder:"Add notes about this reference...",multiline:!0,rows:3,fullWidth:!0})]});case 2:return o.jsxs(S,{sx:{py:4,display:"flex",flexDirection:"column",alignItems:"center",gap:3},children:[o.jsx(Me,{selectedFile:d,previewUrl:u,isUploading:x,uploadProgress:g,isComplete:g===100,variant:"compact"}),!x&&o.jsxs(o.Fragment,{children:[o.jsx(P,{variant:"h6",sx:{fontWeight:600},children:"Ready to Upload"}),o.jsxs(S,{sx:{textAlign:"center"},children:[o.jsx(P,{variant:"body2",color:"text.secondary",children:o.jsx("strong",{children:m.title})}),o.jsxs(P,{variant:"caption",color:"text.secondary",children:[m.category&&`${n.find(c=>c.id===m.category)?.label} • `,m.tags.length," tags"]})]})]})]});default:return null}};return o.jsxs(o.Fragment,{children:[o.jsx(eo,{open:e,onClose:V,sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:o.jsxs(S,{sx:{width:"100%",maxWidth:540,bgcolor:"background.paper",borderRadius:2,boxShadow:24,outline:"none",maxHeight:"90vh",display:"flex",flexDirection:"column"},children:[o.jsxs(S,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",p:3,pb:2,borderBottom:"1px solid",borderColor:"divider"},children:[o.jsxs(S,{sx:{display:"flex",alignItems:"center",gap:1.5},children:[o.jsx(Xe,{sx:{color:"primary.main"}}),o.jsx(P,{variant:"h6",sx:{fontWeight:700},children:"Upload Reference"})]}),o.jsx(_,{onClick:V,disabled:x,size:"small",children:o.jsx(se,{})})]}),o.jsx(S,{sx:{px:3,pt:3},children:o.jsx(nt,{activeStep:l,alternativeLabel:!0,children:v.map(c=>o.jsx(Oo,{children:o.jsx(Te,{children:c})},c))})}),o.jsxs(S,{sx:{px:3,flex:1,overflow:"auto"},children:[f(),k&&o.jsx(ve,{severity:"error",sx:{mt:2},children:k})]}),o.jsxs(S,{sx:{display:"flex",justifyContent:"space-between",p:3,pt:2,borderTop:"1px solid",borderColor:"divider"},children:[o.jsx(N,{onClick:l===0?V:q,disabled:x,sx:{textTransform:"none"},children:l===0?"Cancel":"Back"}),o.jsx(N,{variant:"contained",onClick:l===v.length-1?$:T,disabled:x,sx:{textTransform:"none",fontWeight:600,minWidth:100},children:l===v.length-1?x?"Uploading...":"Upload":"Next"})]})]})}),o.jsx(Re,{open:y,autoHideDuration:4e3,onClose:()=>R(!1),anchorOrigin:{vertical:"bottom",horizontal:"center"},children:o.jsx(ve,{severity:"success",variant:"filled",onClose:()=>R(!1),children:"Reference uploaded successfully!"})})]})}Fe.__docgenInfo={description:`UploadModal 템플릿

레퍼런스 이미지를 업로드하고 메타데이터를 입력하는 전체 플로우 모달.
FileDropzone, TagInput 등 하위 컴포넌트를 조합한 템플릿.

동작 방식:
1. Step 1: 파일 드래그 앤 드롭 또는 선택
2. Step 2: 제목, 카테고리, 태그 입력
3. Step 3: 업로드 진행 및 완료 확인
4. 성공 시 Toast 피드백 표시

Props:
@param {boolean} isOpen - 모달 열림 상태 [Required]
@param {function} onClose - 모달 닫기 핸들러 [Required]
@param {function} onUpload - 업로드 완료 핸들러 (data) => Promise [Required]
@param {Array} categories - 카테고리 옵션 목록 [{ id, label }] [Optional]
@param {string[]} suggestedTags - 태그 자동완성 제안 [Optional]

Example usage:
<UploadModal
  isOpen={showUpload}
  onClose={() => setShowUpload(false)}
  onUpload={handleUpload}
  categories={categoryOptions}
/>`,methods:[],displayName:"UploadModal",props:{categories:{defaultValue:{value:`[
  { id: 'photography', label: 'Photography' },
  { id: 'illustration', label: 'Illustration' },
  { id: 'ui-design', label: 'UI Design' },
  { id: 'branding', label: 'Branding' },
  { id: 'motion', label: 'Motion Graphics' },
  { id: 'other', label: 'Other' },
]`,computed:!1},required:!1},suggestedTags:{defaultValue:{value:"['minimal', 'bold', 'colorful', 'dark', 'light', 'retro', 'modern', 'organic']",computed:!1},required:!1}}};function de({icon:e,title:t,description:a,actionLabel:n,onAction:r,actionHref:l,actionVariant:i="outlined",hasBorder:d=!1,sx:p={}}){return o.jsxs(S,{sx:{textAlign:"center",py:12,px:4,...d&&{border:"2px dashed",borderColor:"divider",borderRadius:2},...p},children:[e&&o.jsx(S,{sx:{mb:2},children:e}),o.jsx(P,{variant:"h6",sx:{fontWeight:600,mb:1},children:t}),a&&o.jsx(P,{variant:"body2",color:"text.secondary",sx:{mb:3},children:a}),n&&(r||l)&&o.jsx(N,{variant:i,onClick:r,href:l,sx:{textTransform:"none"},children:n})]})}de.__docgenInfo={description:`EmptyState 섹션 컴포넌트

데이터가 없거나 검색 결과가 없을 때 표시하는 빈 상태 화면.
아이콘, 제목, 설명, 액션 버튼을 조합하여 사용자에게 안내.

Props:
@param {React.ReactNode} icon - 상단에 표시할 아이콘 컴포넌트 [Required]
@param {string} title - 메인 타이틀 텍스트 [Required]
@param {string} description - 부가 설명 텍스트 [Optional]
@param {string} actionLabel - 액션 버튼 레이블 [Optional]
@param {function} onAction - 액션 버튼 클릭 핸들러 [Optional]
@param {string} actionHref - 액션 버튼 링크 URL [Optional]
@param {string} actionVariant - 버튼 variant (outlined, contained) [Optional, 기본값: 'outlined']
@param {boolean} hasBorder - 점선 테두리 표시 여부 [Optional, 기본값: false]
@param {object} sx - 추가 스타일 [Optional]

Example usage:
<EmptyState
  icon={<SearchOffIcon sx={{ fontSize: 64, color: 'text.disabled' }} />}
  title="No results found"
  description="Try adjusting your search or filters"
  actionLabel="Clear filters"
  onAction={handleClearFilters}
/>`,methods:[],displayName:"EmptyState",props:{actionVariant:{defaultValue:{value:"'outlined'",computed:!1},required:!1},hasBorder:{defaultValue:{value:"false",computed:!1},required:!1},sx:{defaultValue:{value:"{}",computed:!1},required:!1}}};function je({title:e,subtitle:t,actionLabel:a,actionIcon:n,onAction:r,actionVariant:l="contained",actions:i,sx:d={}}){return o.jsxs(S,{sx:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",mb:4,gap:2,flexWrap:"wrap",...d},children:[o.jsxs(S,{children:[o.jsx(P,{variant:"h4",sx:{fontWeight:800,letterSpacing:"-0.02em",mb:.5},children:e}),t&&o.jsx(P,{variant:"body1",color:"text.secondary",children:t})]}),i||(a&&r?o.jsx(N,{variant:l,startIcon:n,onClick:r,sx:{textTransform:"none",fontWeight:600,px:3,py:1.25,borderRadius:2},children:a}):null)]})}je.__docgenInfo={description:`PageHeader 섹션 컴포넌트

페이지 상단에 표시되는 헤더 영역.
제목, 부제목(설명), 액션 버튼을 포함하는 공통 레이아웃.

Props:
@param {string} title - 페이지 메인 타이틀 [Required]
@param {string} subtitle - 부제목 또는 설명 텍스트 [Optional]
@param {string} actionLabel - 액션 버튼 레이블 [Optional]
@param {React.ReactNode} actionIcon - 버튼 시작 아이콘 [Optional]
@param {function} onAction - 액션 버튼 클릭 핸들러 [Optional]
@param {string} actionVariant - 버튼 variant (contained, outlined) [Optional, 기본값: 'contained']
@param {React.ReactNode} actions - 커스텀 액션 영역 (버튼 대신 사용) [Optional]
@param {object} sx - 추가 스타일 [Optional]

Example usage:
<PageHeader
  title="Archive"
  subtitle="128 references in your collection"
  actionLabel="Upload Reference"
  actionIcon={<AddIcon />}
  onAction={() => setShowUpload(true)}
/>`,methods:[],displayName:"PageHeader",props:{actionVariant:{defaultValue:{value:"'contained'",computed:!1},required:!1},sx:{defaultValue:{value:"{}",computed:!1},required:!1}}};function Ue({isOpen:e,onClose:t,title:a="Add to Moodboard",collections:n,onSelect:r,onCreate:l,buttonLabel:i="Select Board"}){return e?o.jsx(S,{onClick:t,sx:{position:"fixed",inset:0,zIndex:1400,display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"rgba(0, 0, 0, 0.5)"},children:o.jsxs(S,{onClick:d=>d.stopPropagation(),sx:{bgcolor:"background.paper",borderRadius:2,p:3,minWidth:300,boxShadow:24},children:[o.jsx(P,{variant:"h6",sx:{fontWeight:700,mb:2},children:a}),o.jsx(io,{collections:n,onSelect:r,onCreate:l,buttonLabel:i,variant:"outlined",isFullWidth:!0})]})}):null}Ue.__docgenInfo={description:`BoardSelectModal 섹션 컴포넌트

무드보드 선택을 위한 오버레이 모달.
백드롭 클릭 시 닫히고, 내부 영역은 클릭 전파 방지.

동작 방식:
1. isOpen이 true일 때 전체 화면 오버레이 표시
2. 백드롭(어두운 영역) 클릭 시 onClose 호출
3. CollectionDropdown으로 무드보드 선택 또는 새로 생성
4. 선택/생성 완료 시 onSelect/onCreate 호출

Props:
@param {boolean} isOpen - 모달 표시 여부 [Required]
@param {function} onClose - 모달 닫기 핸들러 [Required]
@param {string} title - 모달 타이틀 [Optional, 기본값: 'Add to Moodboard']
@param {Array} collections - 무드보드 목록 [{id, name, count}] [Required]
@param {function} onSelect - 무드보드 선택 핸들러 (boardId) => void [Required]
@param {function} onCreate - 새 무드보드 생성 핸들러 (name) => void [Required]
@param {string} buttonLabel - 드롭다운 버튼 레이블 [Optional, 기본값: 'Select Board']

Example usage:
<BoardSelectModal
  isOpen={showBoardDropdown}
  onClose={() => setShowBoardDropdown(false)}
  collections={moodboardOptions}
  onSelect={handleAddToBoard}
  onCreate={handleCreateBoard}
/>`,methods:[],displayName:"BoardSelectModal",props:{title:{defaultValue:{value:"'Add to Moodboard'",computed:!1},required:!1},buttonLabel:{defaultValue:{value:"'Select Board'",computed:!1},required:!1}}};function Ne({assets:e=[],viewMode:t="grid",onAssetClick:a,onLike:n,onAddToBoard:r,onClearFilters:l,emptyTitle:i="No references found",emptyDescription:d="Try adjusting your search or filters",emptyActionLabel:p="Clear all filters"}){return e.length===0?o.jsx(de,{icon:o.jsx(po,{sx:{fontSize:64,color:"text.disabled"}}),title:i,description:d,actionLabel:l?p:void 0,onAction:l}):o.jsx(uo,{columns:{xs:1,sm:2,md:t==="list"?1:3,lg:t==="list"?1:4},spacing:2,sx:{margin:0},children:e.map((u,h)=>o.jsx(Se,{in:!0,timeout:300+h*50,children:o.jsx(S,{onClick:()=>a?.(u,h),sx:{cursor:"pointer"},children:o.jsx(De,{src:u.thumbnail,title:u.title,tags:u.tags,onLike:n?m=>{m?.stopPropagation?.(),n(u.id,m)}:void 0,onAddToBoard:r?m=>{m?.stopPropagation?.(),r(u,m)}:void 0})})},u.id))})}Ne.__docgenInfo={description:`AssetGallery 섹션 컴포넌트

에셋(이미지/비디오) 목록을 Masonry 레이아웃으로 표시하는 갤러리.
에셋이 없을 경우 EmptyState 표시.

동작 방식:
1. assets 배열이 비어있으면 EmptyState 표시
2. assets가 있으면 Masonry 그리드로 ImageCard 렌더링
3. 각 카드에 Fade 애니메이션 적용 (순차적 등장)
4. 카드 클릭, 좋아요, 무드보드 추가 이벤트 처리

Props:
@param {Array} assets - 표시할 에셋 배열 [{id, thumbnail, title, tags, ...}] [Required]
@param {string} viewMode - 뷰 모드 ('grid' | 'list') [Optional, 기본값: 'grid']
@param {function} onAssetClick - 에셋 클릭 핸들러 (asset, index) => void [Required]
@param {function} onLike - 좋아요 클릭 핸들러 (assetId, event) => void [Optional]
@param {function} onAddToBoard - 무드보드 추가 클릭 핸들러 (asset, event) => void [Optional]
@param {function} onClearFilters - 필터 초기화 핸들러 (빈 상태에서 사용) [Optional]
@param {string} emptyTitle - 빈 상태 제목 [Optional, 기본값: 'No references found']
@param {string} emptyDescription - 빈 상태 설명 [Optional]
@param {string} emptyActionLabel - 빈 상태 버튼 레이블 [Optional]

Example usage:
<AssetGallery
  assets={filteredAssets}
  viewMode="grid"
  onAssetClick={(asset, index) => openDetail(asset, index)}
  onLike={(id) => toggleLike(id)}
  onAddToBoard={(asset) => openBoardSelect(asset)}
  onClearFilters={clearFilters}
/>`,methods:[],displayName:"AssetGallery",props:{assets:{defaultValue:{value:"[]",computed:!1},required:!1},viewMode:{defaultValue:{value:"'grid'",computed:!1},required:!1},emptyTitle:{defaultValue:{value:"'No references found'",computed:!1},required:!1},emptyDescription:{defaultValue:{value:"'Try adjusting your search or filters'",computed:!1},required:!1},emptyActionLabel:{defaultValue:{value:"'Clear all filters'",computed:!1},required:!1}}};function Ve({onClick:e,icon:t=o.jsx(Ce,{}),color:a="primary",sx:n={}}){return o.jsx(zo,{color:a,onClick:e,sx:{position:"fixed",bottom:24,right:24,display:{xs:"flex",md:"none"},...n},children:t})}Ve.__docgenInfo={description:`MobileUploadFab 섹션 컴포넌트

모바일 화면에서만 표시되는 플로팅 업로드 버튼.
우측 하단에 고정 위치로 표시됨.

Props:
@param {function} onClick - 클릭 핸들러 [Required]
@param {React.ReactNode} icon - 버튼 아이콘 [Optional, 기본값: AddIcon]
@param {string} color - FAB 색상 [Optional, 기본값: 'primary']
@param {object} sx - 추가 스타일 [Optional]

Example usage:
<MobileUploadFab onClick={() => setShowUpload(true)} />`,methods:[],displayName:"MobileUploadFab",props:{icon:{defaultValue:{value:"<AddIcon />",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1},sx:{defaultValue:{value:"{}",computed:!1},required:!1}}};function $e({boards:e=[],onBoardClick:t,onBoardEdit:a,onBoardDelete:n,onCreateNew:r}){const l=e.reduce((i,d)=>i+d.items.length,0);return o.jsxs(o.Fragment,{children:[o.jsx(je,{title:"Moodboards",subtitle:`${e.length} boards, ${l} total items`,actionLabel:"New Board",actionIcon:o.jsx(Ce,{}),onAction:r}),e.length>0?o.jsx(le,{container:!0,spacing:2,children:e.map((i,d)=>o.jsx(le,{size:{xs:12,sm:6,md:4,lg:3},children:o.jsx(Se,{in:!0,timeout:300+d*50,children:o.jsx(S,{children:o.jsx(ho,{id:i.id,name:i.name,description:i.description,items:i.items,createdAt:i.createdAt,onClick:()=>t(i.id),onEdit:a,onDelete:n})})})},i.id))}):o.jsx(de,{icon:o.jsx(co,{sx:{fontSize:64,color:"text.disabled"}}),title:"No moodboards yet",description:"Create your first moodboard to start curating",actionLabel:"Create Moodboard",actionVariant:"contained",onAction:r})]})}$e.__docgenInfo={description:`MoodboardGridView 섹션 컴포넌트

모든 무드보드를 카드 그리드로 표시하는 뷰.
PageHeader, MoodboardCard 그리드, EmptyState 포함.

동작 방식:
1. boards 배열이 비어있으면 EmptyState 표시
2. boards가 있으면 MoodboardCard 그리드 렌더링
3. 각 카드에 Fade 애니메이션 적용
4. 카드 클릭, 편집, 삭제 이벤트 처리

Props:
@param {Array} boards - 무드보드 배열 [{id, name, description, items, createdAt}] [Required]
@param {function} onBoardClick - 보드 클릭 핸들러 (boardId) => void [Required]
@param {function} onBoardEdit - 편집 클릭 핸들러 (boardId) => void [Required]
@param {function} onBoardDelete - 삭제 클릭 핸들러 (boardId) => void [Required]
@param {function} onCreateNew - 새 보드 생성 클릭 핸들러 () => void [Required]

Example usage:
<MoodboardGridView
  boards={moodboards}
  onBoardClick={(id) => selectBoard(id)}
  onBoardEdit={(id) => openRenameDialog(id)}
  onBoardDelete={(id) => openDeleteDialog(id)}
  onCreateNew={() => openCreateDialog()}
/>`,methods:[],displayName:"MoodboardGridView",props:{boards:{defaultValue:{value:"[]",computed:!1},required:!1}}};const dt=D(o.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"})),ct=D(o.jsx("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"})),pt=D(o.jsx("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}));function qe({board:e,onBack:t,onItemClick:a,onItemRemove:n,onMenuOpen:r,onShare:l}){return e?o.jsxs(o.Fragment,{children:[o.jsxs(S,{sx:{display:"flex",alignItems:"center",gap:2,mb:3},children:[o.jsx(_,{onClick:t,sx:{mr:1},children:o.jsx(dt,{})}),o.jsxs(S,{sx:{flex:1},children:[o.jsx(P,{variant:"h4",sx:{fontWeight:800,letterSpacing:"-0.02em",mb:.5},children:e.name}),e.description&&o.jsx(P,{variant:"body1",color:"text.secondary",children:e.description}),o.jsxs(P,{variant:"caption",color:"text.disabled",children:["Created ",e.createdAt," • ",e.items.length," items"]})]}),o.jsxs(S,{sx:{display:"flex",gap:1},children:[o.jsx(N,{variant:"outlined",size:"small",startIcon:o.jsx(Le,{}),onClick:l,sx:{textTransform:"none"},children:"Share"}),o.jsx(_,{onClick:r,children:o.jsx(ct,{})})]})]}),e.items.length>0?o.jsx(le,{container:!0,spacing:2,children:e.items.map((i,d)=>o.jsx(le,{size:{xs:12,sm:6,md:4,lg:3},children:o.jsx(Se,{in:!0,timeout:300+d*50,children:o.jsx(S,{onClick:()=>a(i,d),sx:{cursor:"pointer"},children:o.jsx(De,{src:i.thumbnail,title:i.title,tags:i.tags,hideActions:!0,customOverlay:o.jsxs(S,{className:"moodboard-item-overlay",sx:{position:"absolute",inset:0,display:"flex",justifyContent:"space-between",alignItems:"flex-start",p:1,opacity:0,transition:"opacity 0.2s"},children:[o.jsx(_,{size:"small",sx:{bgcolor:"rgba(255,255,255,0.9)",cursor:"grab","&:hover":{bgcolor:"white"}},children:o.jsx(pt,{fontSize:"small"})}),o.jsx(_,{size:"small",onClick:p=>{p.stopPropagation(),n(i.id)},sx:{bgcolor:"error.main",color:"white","&:hover":{bgcolor:"error.dark"}},children:o.jsx(se,{fontSize:"small"})})]}),sx:{"&:hover .moodboard-item-overlay":{opacity:1}}})})})},`${e.id}-${i.id}`))}):o.jsx(de,{icon:o.jsx(fo,{sx:{fontSize:64,color:"text.disabled"}}),title:"This board is empty",description:"Add references from the Archive to get started",actionLabel:"Browse Archive",actionHref:"/",hasBorder:!0})]}):null}qe.__docgenInfo={description:`MoodboardDetailView 섹션 컴포넌트

선택된 무드보드의 상세 뷰.
헤더(뒤로가기, 제목, 액션) + 아이템 그리드 표시.

동작 방식:
1. 헤더에 보드 정보 및 액션 버튼 표시
2. 아이템이 없으면 EmptyState 표시
3. 아이템이 있으면 Grid로 ImageCard 렌더링
4. 각 카드에 드래그 핸들과 제거 버튼 오버레이

Props:
@param {object} board - 무드보드 객체 {id, name, description, items, createdAt} [Required]
@param {function} onBack - 뒤로가기 핸들러 [Required]
@param {function} onItemClick - 아이템 클릭 핸들러 (item, index) => void [Required]
@param {function} onItemRemove - 아이템 제거 핸들러 (itemId) => void [Required]
@param {function} onMenuOpen - 메뉴 열기 핸들러 (event) => void [Required]
@param {function} onShare - 공유 핸들러 [Required]

Example usage:
<MoodboardDetailView
  board={currentBoard}
  onBack={backToGrid}
  onItemClick={(item, index) => openDetail(item, index)}
  onItemRemove={(id) => removeItem(id)}
  onMenuOpen={(e) => openMenu(e)}
  onShare={shareBoard}
/>`,methods:[],displayName:"MoodboardDetailView"};const ut=D(o.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"})),mt=D(o.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}));function Ee({anchorEl:e,onClose:t,onRename:a,onDuplicate:n,onShare:r,onDelete:l}){return o.jsxs(Be,{anchorEl:e,open:!!e,onClose:t,children:[o.jsxs(ee,{onClick:a,children:[o.jsx(te,{children:o.jsx(no,{fontSize:"small"})}),o.jsx(ae,{children:"Rename"})]}),o.jsxs(ee,{onClick:n,children:[o.jsx(te,{children:o.jsx(ut,{fontSize:"small"})}),o.jsx(ae,{children:"Duplicate"})]}),o.jsxs(ee,{onClick:r,children:[o.jsx(te,{children:o.jsx(Le,{fontSize:"small"})}),o.jsx(ae,{children:"Share"})]}),o.jsxs(ee,{onClick:l,sx:{color:"error.main"},children:[o.jsx(te,{children:o.jsx(mt,{fontSize:"small",color:"error"})}),o.jsx(ae,{children:"Delete"})]})]})}Ee.__docgenInfo={description:`BoardActionsMenu 섹션 컴포넌트

무드보드 액션 메뉴 (이름변경, 복제, 공유, 삭제).
Menu 컴포넌트를 래핑하여 일관된 액션 UI 제공.

Props:
@param {HTMLElement|null} anchorEl - 메뉴 앵커 요소 [Required]
@param {function} onClose - 메뉴 닫기 핸들러 [Required]
@param {function} onRename - 이름변경 클릭 핸들러 [Required]
@param {function} onDuplicate - 복제 클릭 핸들러 [Required]
@param {function} onShare - 공유 클릭 핸들러 [Required]
@param {function} onDelete - 삭제 클릭 핸들러 [Required]

Example usage:
<BoardActionsMenu
  anchorEl={menuAnchor}
  onClose={closeMenu}
  onRename={openRenameDialog}
  onDuplicate={duplicateBoard}
  onShare={shareBoard}
  onDelete={openDeleteDialog}
/>`,methods:[],displayName:"BoardActionsMenu"};function We({createDialog:e,renameDialog:t,deleteDialog:a}){return o.jsxs(o.Fragment,{children:[o.jsxs(pe,{open:e.isOpen,onClose:e.onClose,maxWidth:"xs",fullWidth:!0,children:[o.jsx(ue,{sx:{fontWeight:700},children:"Create New Board"}),o.jsx(me,{children:o.jsx(re,{autoFocus:!0,fullWidth:!0,label:"Board Name",value:e.value,onChange:n=>e.onChange(n.target.value),onKeyDown:n=>n.key==="Enter"&&e.onSubmit(),sx:{mt:1}})}),o.jsxs(he,{children:[o.jsx(N,{onClick:e.onClose,sx:{textTransform:"none"},children:"Cancel"}),o.jsx(N,{variant:"contained",onClick:e.onSubmit,disabled:!e.value?.trim(),sx:{textTransform:"none"},children:"Create"})]})]}),o.jsxs(pe,{open:t.isOpen,onClose:t.onClose,maxWidth:"xs",fullWidth:!0,children:[o.jsx(ue,{sx:{fontWeight:700},children:"Rename Board"}),o.jsx(me,{children:o.jsx(re,{autoFocus:!0,fullWidth:!0,label:"Board Name",value:t.value,onChange:n=>t.onChange(n.target.value),onKeyDown:n=>n.key==="Enter"&&t.onSubmit(),sx:{mt:1}})}),o.jsxs(he,{children:[o.jsx(N,{onClick:t.onClose,sx:{textTransform:"none"},children:"Cancel"}),o.jsx(N,{variant:"contained",onClick:t.onSubmit,disabled:!t.value?.trim(),sx:{textTransform:"none"},children:"Rename"})]})]}),o.jsxs(pe,{open:a.isOpen,onClose:a.onClose,maxWidth:"xs",fullWidth:!0,children:[o.jsx(ue,{sx:{fontWeight:700},children:"Delete Board"}),o.jsx(me,{children:o.jsxs(P,{children:['Are you sure you want to delete "',a.boardName,'"? This action cannot be undone.']})}),o.jsxs(he,{children:[o.jsx(N,{onClick:a.onClose,sx:{textTransform:"none"},children:"Cancel"}),o.jsx(N,{variant:"contained",color:"error",onClick:a.onConfirm,sx:{textTransform:"none"},children:"Delete"})]})]})]})}We.__docgenInfo={description:`BoardDialogs 섹션 컴포넌트

무드보드 관리 다이얼로그 모음 (생성, 이름변경, 삭제).
하나의 컴포넌트로 세 가지 다이얼로그를 통합 관리.

Props:
@param {object} createDialog - 생성 다이얼로그 상태 {isOpen, value, onChange, onSubmit, onClose} [Required]
@param {object} renameDialog - 이름변경 다이얼로그 상태 {isOpen, value, onChange, onSubmit, onClose} [Required]
@param {object} deleteDialog - 삭제 다이얼로그 상태 {isOpen, boardName, onConfirm, onClose} [Required]

Example usage:
<BoardDialogs
  createDialog={{
    isOpen: showCreate,
    value: newName,
    onChange: setNewName,
    onSubmit: handleCreate,
    onClose: () => setShowCreate(false),
  }}
  renameDialog={{
    isOpen: showRename,
    value: newName,
    onChange: setNewName,
    onSubmit: handleRename,
    onClose: () => setShowRename(false),
  }}
  deleteDialog={{
    isOpen: showDelete,
    boardName: targetBoard?.name,
    onConfirm: handleDelete,
    onClose: () => setShowDelete(false),
  }}
/>`,methods:[],displayName:"BoardDialogs"};function He(e={}){const{autoHideDuration:t=3e3,anchorOrigin:a={vertical:"bottom",horizontal:"center"}}=e,[n,r]=s.useState({open:!1,message:"",severity:"success"}),l=s.useCallback((p,u="success")=>{r({open:!0,message:p,severity:u})},[]),i=s.useCallback(()=>{r(p=>({...p,open:!1}))},[]),d=s.useCallback(()=>o.jsx(Re,{open:n.open,autoHideDuration:t,onClose:i,anchorOrigin:a,children:o.jsx(ve,{severity:n.severity,variant:"filled",onClose:i,children:n.message})}),[n.open,n.message,n.severity,t,a,i]);return{notify:l,close:i,SnackbarComponent:d,isOpen:n.open}}function _e(e=[]){const[t,a]=s.useState(null),[n,r]=s.useState(-1),[l,i]=s.useState([]),d=s.useCallback((x,C)=>{a(x),r(C)},[]),p=s.useCallback(()=>{a(null),r(-1)},[]),u=s.useCallback(()=>{if(n>0){const x=n-1;r(x),a(e[x])}},[n,e]),h=s.useCallback(()=>{if(n<e.length-1){const x=n+1;r(x),a(e[x])}},[n,e]),m=s.useCallback(x=>{i(C=>C.includes(x)?C.filter(g=>g!==x):[...C,x])},[]),w=s.useCallback(x=>l.includes(x),[l]);return{isOpen:!!t,asset:t,index:n,likedIds:l,hasPrevious:n>0,hasNext:n<e.length-1,open:d,close:p,previous:u,next:h,toggleLike:m,isLiked:w}}function ht(e,t){return{id:`asset-${String(t+1).padStart(3,"0")}`,title:e.alt,type:"image",format:"JPG",resolution:e.aspectRatio==="16/9"?"1920x1080":"1200x900",size:`${Math.floor(Math.random()*10+2)} MB`,thumbnail:e.src.medium,tags:e.tags||[],license:"Pexels License",status:"approved",photographer:e.photographer,aspectRatio:e.aspectRatio,src:e.src}}const z=go.map(ht);function ge(e="item"){return`${e}-${Date.now()}-${Math.random().toString(36).substr(2,9)}`}function be(){return new Date().toISOString().split("T")[0]}class ft{constructor(){this.data={assets:[...z],moodboards:[{id:"board-1",name:"Abstract Art",description:"Abstract and geometric artwork collection",items:[z[0],z[1],z[2],z[3]],createdAt:"2024-10-15"},{id:"board-2",name:"Fine Art",description:"Paintings and canvas artwork",items:[z[8],z[9],z[10],z[11]],createdAt:"2024-10-10"},{id:"board-3",name:"Illustration",description:"Digital illustration and artwork",items:[z[16],z[17],z[18],z[19]],createdAt:"2024-09-28"},{id:"board-4",name:"Photography",description:"Product and editorial photography",items:[z[40],z[41],z[42],z[43]],createdAt:"2024-09-15"},{id:"board-5",name:"Portrait",description:"Fashion and artistic portraits",items:[z[48],z[49],z[50],z[51]],createdAt:"2024-09-01"}],projects:[...lo],metrics:[...ro],user:{...so}},this.subscribers={assets:[],moodboards:[],projects:[],metrics:[],user:[]}}notify(t){this.subscribers[t].forEach(a=>{a(this.data[t])})}subscribe(t,a){return this.subscribers[t]?(this.subscribers[t].push(a),()=>{this.subscribers[t]=this.subscribers[t].filter(n=>n!==a)}):(console.warn(`Unknown data key: ${t}`),()=>{})}getAssets(){return[...this.data.assets]}getAssetById(t){return this.data.assets.find(a=>a.id===t)}addAsset(t){const a={id:ge("asset"),title:t.title||"Untitled",type:t.type||"image",format:t.format||"JPG",resolution:t.resolution||"Unknown",size:t.size||"Unknown",thumbnail:t.thumbnail||t.previewUrl||"",tags:t.tags||[],license:t.license||"Personal",status:"pending",createdAt:be()};return this.data.assets=[a,...this.data.assets],this.notify("assets"),a}deleteAsset(t){this.data.assets=this.data.assets.filter(a=>a.id!==t),this.notify("assets")}updateAsset(t,a){this.data.assets=this.data.assets.map(n=>n.id===t?{...n,...a}:n),this.notify("assets")}getMoodboards(){return[...this.data.moodboards]}getMoodboardById(t){return this.data.moodboards.find(a=>a.id===t)}createMoodboard(t,a=""){const n={id:ge("board"),name:t,description:a,items:[],createdAt:be()};return this.data.moodboards=[...this.data.moodboards,n],this.notify("moodboards"),n}renameMoodboard(t,a){this.data.moodboards=this.data.moodboards.map(n=>n.id===t?{...n,name:a}:n),this.notify("moodboards")}deleteMoodboard(t){this.data.moodboards=this.data.moodboards.filter(a=>a.id!==t),this.notify("moodboards")}duplicateMoodboard(t){const a=this.getMoodboardById(t);if(!a)return null;const n={...a,id:ge("board"),name:`${a.name} (Copy)`,items:[...a.items],createdAt:be()};return this.data.moodboards=[...this.data.moodboards,n],this.notify("moodboards"),n}addItemToMoodboard(t,a){this.data.moodboards=this.data.moodboards.map(n=>n.id!==t||n.items.some(l=>l.id===a.id)?n:{...n,items:[...n.items,a]}),this.notify("moodboards")}removeItemFromMoodboard(t,a){this.data.moodboards=this.data.moodboards.map(n=>n.id===t?{...n,items:n.items.filter(r=>r.id!==a)}:n),this.notify("moodboards")}getProjects(){return[...this.data.projects]}getMetrics(){return[...this.data.metrics]}getUser(){return{...this.data.user}}}const O=new ft;function xt(){const[e,t]=s.useState(()=>O.getAssets()),[a,n]=s.useState(()=>O.getMoodboards()),[r,l]=s.useState(""),[i,d]=s.useState([]),[p,u]=s.useState("newest"),[h,m]=s.useState("grid"),[w,x]=s.useState(!1),[C,g]=s.useState(!1),[j,y]=s.useState(null);s.useEffect(()=>{const f=O.subscribe("assets",t),c=O.subscribe("moodboards",n);return()=>{f(),c()}},[]);const R=s.useMemo(()=>{const f=new Set;return e.forEach(c=>{c.tags?.forEach(I=>f.add(I))}),Array.from(f)},[e]),k=s.useMemo(()=>{let f=[...e];if(r){const c=r.toLowerCase();f=f.filter(I=>I.title.toLowerCase().includes(c)||I.tags?.some(J=>J.toLowerCase().includes(c)))}switch(i.length>0&&(f=f.filter(c=>i.some(I=>c.tags?.includes(I)))),p){case"oldest":f.reverse();break;case"name-asc":f.sort((c,I)=>c.title.localeCompare(I.title));break;case"name-desc":f.sort((c,I)=>I.title.localeCompare(c.title));break}return f},[e,r,i,p]),M=s.useMemo(()=>a.map(f=>({id:f.id,name:f.name,count:f.items.length})),[a]),v=s.useCallback(f=>{d(c=>c.includes(f)?c.filter(I=>I!==f):[...c,f])},[]),L=s.useCallback(()=>{l(""),d([])},[]),b=s.useCallback(()=>{x(!0)},[]),A=s.useCallback(()=>{x(!1)},[]),T=s.useCallback(async f=>(await new Promise(I=>setTimeout(I,2e3)),O.addAsset({title:f.title||"Untitled Upload",tags:f.tags||[],thumbnail:f.previewUrl||"https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",type:f.file?.type?.startsWith("video")?"video":"image",format:f.file?.name?.split(".").pop()?.toUpperCase()||"JPG",size:f.file?.size?`${(f.file.size/1024/1024).toFixed(1)} MB`:"Unknown",license:f.license||"Personal"})),[]),q=s.useCallback(f=>{y(f),g(!0)},[]),U=s.useCallback(()=>{g(!1),y(null)},[]),V=s.useCallback(f=>{if(!j)return null;const c=a.find(I=>I.id===f);return O.addItemToMoodboard(f,j),g(!1),y(null),c},[j,a]),$=s.useCallback(f=>{const c=O.createMoodboard(f);return j&&O.addItemToMoodboard(c.id,j),g(!1),y(null),{board:c,hasItem:!!j}},[j]);return{assets:e,filteredAssets:k,moodboards:a,moodboardOptions:M,allTags:R,count:k.length,searchValue:r,selectedTags:i,sortBy:p,viewMode:h,setSearchValue:l,handleTagToggle:v,setSortBy:u,setViewMode:m,clearFilters:L,filterProps:{searchValue:r,onSearchChange:l,availableTags:R,selectedTags:i,onTagToggle:v,onClearFilters:L,sortBy:p,onSortChange:u,viewMode:h,onViewModeChange:m,resultCount:k.length},uploadModal:{isOpen:w,open:b,close:A,onUpload:T},boardSelectModal:{isOpen:C,open:q,close:U,collections:M,onSelect:V,onCreate:$,currentAsset:j}}}function gt(){const[e,t]=s.useState(()=>O.getMoodboards()),[a,n]=s.useState(null),[r,l]=s.useState(null),[i,d]=s.useState(null),[p,u]=s.useState(!1),[h,m]=s.useState(!1),[w,x]=s.useState(!1),[C,g]=s.useState("");s.useEffect(()=>O.subscribe("moodboards",t),[]);const j=a?e.find(B=>B.id===a):null,y=i?e.find(B=>B.id===i):j,R=s.useCallback(B=>{n(B)},[]),k=s.useCallback(()=>{n(null)},[]),M=s.useCallback((B,oe=null)=>{B.stopPropagation(),l(B.currentTarget),d(oe)},[]),v=s.useCallback(()=>{l(null),d(null)},[]),L=s.useCallback(()=>{g(""),u(!0)},[]),b=s.useCallback(()=>{u(!1),g("")},[]),A=s.useCallback(()=>{if(!C.trim())return null;const B=O.createMoodboard(C.trim());return n(B.id),g(""),u(!1),B},[C]),T=s.useCallback(B=>{const oe=e.find(Ge=>Ge.id===B);oe&&(g(oe.name),d(B),m(!0)),v()},[e,v]),q=s.useCallback(()=>{m(!1),g("")},[]),U=s.useCallback(()=>!C.trim()||!y?!1:(O.renameMoodboard(y.id,C.trim()),g(""),m(!1),v(),!0),[C,y,v]),V=s.useCallback(B=>{d(B),x(!0),v()},[v]),$=s.useCallback(()=>{x(!1)},[]),f=s.useCallback(()=>y?(O.deleteMoodboard(y.id),a===y.id&&n(null),x(!1),v(),!0):!1,[y,a,v]),c=s.useCallback(()=>{if(!y)return null;const B=O.duplicateMoodboard(y.id);return v(),B},[y,v]),I=s.useCallback(()=>(v(),!0),[v]),J=s.useCallback(B=>j?(O.removeItemFromMoodboard(j.id,B),!0):!1,[j]);return{moodboards:e,selectedBoard:j,menuTargetBoard:y,isDetailView:!!a,selectBoard:R,backToGrid:k,menuProps:{anchorEl:r,onClose:v,onRename:()=>T(y?.id),onDuplicate:c,onShare:I,onDelete:()=>V(y?.id)},openMenu:M,closeMenu:v,dialogProps:{createDialog:{isOpen:p,value:C,onChange:g,onSubmit:A,onClose:b},renameDialog:{isOpen:h,value:C,onChange:g,onSubmit:U,onClose:q},deleteDialog:{isOpen:w,boardName:y?.name||"",onConfirm:f,onClose:$}},openCreateDialog:L,openRenameDialog:T,openDeleteDialog:V,createBoard:A,renameBoard:U,deleteBoard:f,duplicateBoard:c,shareBoard:I,removeItem:J}}function bt(){const e=xt(),t=_e(e.filteredAssets),{notify:a,SnackbarComponent:n}=He(),r=async d=>{const p=await e.uploadModal.onUpload(d);a(`"${p.title}" uploaded successfully!`,"success")},l=d=>{const p=e.boardSelectModal.onSelect(d);p&&a(`Added to "${p.name}"`,"success")},i=d=>{e.boardSelectModal.onCreate(d).hasItem?a(`Created "${d}" and added item`,"success"):a(`Created new board "${d}"`,"success")};return o.jsxs(Pe,{children:[o.jsx(je,{title:"Archive",subtitle:`${e.count} references in your collection`,actionLabel:"Upload Reference",actionIcon:o.jsx(Ce,{}),onAction:e.uploadModal.open}),o.jsx(Oe,{...e.filterProps}),o.jsx(Ne,{assets:e.filteredAssets,viewMode:e.viewMode,onAssetClick:t.open,onLike:t.toggleLike,onAddToBoard:e.boardSelectModal.open,onClearFilters:e.clearFilters}),o.jsx(Ve,{onClick:e.uploadModal.open}),o.jsx(Fe,{isOpen:e.uploadModal.isOpen,onClose:e.uploadModal.close,onUpload:r}),o.jsx(ze,{isOpen:t.isOpen,onClose:t.close,asset:t.asset,isLiked:t.asset?t.isLiked(t.asset.id):!1,onLike:()=>t.asset&&t.toggleLike(t.asset.id),onDownload:()=>console.log("Download:",t.asset?.title),onShare:()=>console.log("Share:",t.asset?.title),onEdit:()=>console.log("Edit:",t.asset?.title),onAddToBoard:()=>e.boardSelectModal.open(t.asset),onPrevious:t.previous,onNext:t.next,hasPrevious:t.hasPrevious,hasNext:t.hasNext}),o.jsx(Ue,{isOpen:e.boardSelectModal.isOpen,onClose:e.boardSelectModal.close,collections:e.boardSelectModal.collections,onSelect:l,onCreate:i}),o.jsx(n,{})]})}bt.__docgenInfo={description:`ArchivePage 컴포넌트

MUSE 메인 대시보드 - 레퍼런스 아카이브 탐색 및 관리 화면.

페이지 구조:
1. PageHeader - 제목 + 업로드 버튼
2. FilterBar - 검색, 태그, 정렬, 뷰 모드
3. AssetGallery - Masonry 이미지 그리드
4. MobileUploadFab - 모바일 플로팅 버튼
5. Modals - 업로드, 상세 보기, 무드보드 선택

Example usage:
<ArchivePage />`,methods:[],displayName:"ArchivePage"};function vt(){const e=gt(),t=_e(e.selectedBoard?.items||[]),{notify:a,SnackbarComponent:n}=He(),r=()=>{const h=e.createBoard();h&&a(`Created "${h.name}"`,"success")},l=()=>{e.renameBoard()&&a("Board renamed","success")},i=()=>{e.deleteBoard()&&a("Board deleted","info")},d=()=>{e.duplicateBoard()&&a("Board duplicated","success")},p=()=>{e.shareBoard(),a("Share link copied to clipboard","success")},u=h=>{e.removeItem(h)&&a("Removed from moodboard","info")};return o.jsxs(Pe,{children:[e.selectedBoard?o.jsx(qe,{board:e.selectedBoard,onBack:e.backToGrid,onItemClick:t.open,onItemRemove:u,onMenuOpen:e.openMenu,onShare:p}):o.jsx($e,{boards:e.moodboards,onBoardClick:e.selectBoard,onBoardEdit:e.openRenameDialog,onBoardDelete:e.openDeleteDialog,onCreateNew:e.openCreateDialog}),o.jsx(Ee,{anchorEl:e.menuProps.anchorEl,onClose:e.menuProps.onClose,onRename:e.menuProps.onRename,onDuplicate:d,onShare:p,onDelete:e.menuProps.onDelete}),o.jsx(We,{createDialog:{...e.dialogProps.createDialog,onSubmit:r},renameDialog:{...e.dialogProps.renameDialog,onSubmit:l},deleteDialog:{...e.dialogProps.deleteDialog,onConfirm:i}}),o.jsx(ze,{isOpen:t.isOpen,onClose:t.close,asset:t.asset,isLiked:t.asset?t.isLiked(t.asset.id):!1,onLike:()=>t.asset&&t.toggleLike(t.asset.id),onDownload:()=>console.log("Download:",t.asset?.title),onShare:()=>console.log("Share:",t.asset?.title),onEdit:()=>console.log("Edit:",t.asset?.title),onPrevious:t.previous,onNext:t.next,hasPrevious:t.hasPrevious,hasNext:t.hasNext}),o.jsx(n,{})]})}vt.__docgenInfo={description:`MoodboardsPage 컴포넌트

무드보드 관리 및 큐레이션 화면.

페이지 구조:
1. MoodboardGridView - 전체 무드보드 카드 그리드 (기본 뷰)
2. MoodboardDetailView - 선택된 보드의 아이템 목록 (상세 뷰)
3. BoardActionsMenu - 보드 액션 메뉴
4. BoardDialogs - 생성/이름변경/삭제 다이얼로그
5. ImageDetailModal - 이미지 상세 모달

Example usage:
<MoodboardsPage />`,methods:[],displayName:"MoodboardsPage"};export{bt as A,Ue as B,de as E,Oe as F,vt as M,je as P,Fe as U,O as m};
