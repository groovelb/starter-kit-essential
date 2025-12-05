import{r as f,e as Be,u as me,j as e,c as ue,a as oe,C as le,U as we,S as ee,L as xe,a1 as de,N as ve,a2 as Se}from"./iframe-q-XN_VZM.js";import{u as w}from"./useTheme-CDdqLoBf.js";import{B as s}from"./Box-Dmtu8wWb.js";import{T as h}from"./Typography-C8IUsM00.js";import{G as k}from"./Grid-Dd6PAMTp.js";import{P as Y}from"./Paper-ri-B2SDS.js";import{S as ge}from"./Stack-BQqDyOBu.js";import{L as De}from"./LinearProgress-DIZCZ19C.js";import{D as He}from"./Divider-DePyv9fJ.js";import{C as Ve}from"./Chip-CBvZjQD4.js";import{a as be,g as ye,s as fe,c as Ce,m as ze}from"./memoTheme-BW0efeYW.js";import{c as Ee}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{B as Me}from"./ButtonBase-JbB1eRtB.js";import"./preload-helper-PPVm8Dsz.js";import"./styled-D6BANXgS.js";import"./isMuiElement-DpiUmZPP.js";import"./useThemeProps-CFXzbazh.js";import"./dividerClasses-BAQMkccN.js";import"./createSvgIcon-CvYdi5pS.js";import"./useSlot-Xw8rJOQc.js";import"./useTimeout-C6lNLwyh.js";import"./isHostComponent-DVu5iVWx.js";function Ae(o){return f.Children.toArray(o).filter(r=>f.isValidElement(r))}function Te(o){return ye("MuiToggleButton",o)}const B=be("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge","fullWidth"]),je=f.createContext({}),ke=f.createContext(void 0);function $e(o,r){return r===void 0||o===void 0?!1:Array.isArray(r)?r.includes(o):o===r}const Re=o=>{const{classes:r,fullWidth:t,selected:i,disabled:n,size:l,color:a}=o,c={root:["root",i&&"selected",n&&"disabled",t&&"fullWidth",`size${oe(l)}`,a]};return Ce(c,Te,r)},We=fe(Me,{name:"MuiToggleButton",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:t}=o;return[r.root,r[`size${oe(t.size)}`]]}})(ze(({theme:o})=>({...o.typography.button,borderRadius:(o.vars||o).shape.borderRadius,padding:11,border:`1px solid ${(o.vars||o).palette.divider}`,color:(o.vars||o).palette.action.active,[`&.${B.disabled}`]:{color:(o.vars||o).palette.action.disabled,border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:o.alpha((o.vars||o).palette.text.primary,(o.vars||o).palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[{props:{color:"standard"},style:{[`&.${B.selected}`]:{color:(o.vars||o).palette.text.primary,backgroundColor:o.alpha((o.vars||o).palette.text.primary,(o.vars||o).palette.action.selectedOpacity),"&:hover":{backgroundColor:o.alpha((o.vars||o).palette.text.primary,`${(o.vars||o).palette.action.selectedOpacity} + ${(o.vars||o).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:o.alpha((o.vars||o).palette.text.primary,(o.vars||o).palette.action.selectedOpacity)}}}}},...Object.entries(o.palette).filter(Ee()).map(([r])=>({props:{color:r},style:{[`&.${B.selected}`]:{color:(o.vars||o).palette[r].main,backgroundColor:o.alpha((o.vars||o).palette[r].main,(o.vars||o).palette.action.selectedOpacity),"&:hover":{backgroundColor:o.alpha((o.vars||o).palette[r].main,`${(o.vars||o).palette.action.selectedOpacity} + ${(o.vars||o).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:o.alpha((o.vars||o).palette[r].main,(o.vars||o).palette.action.selectedOpacity)}}}}})),{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{padding:7,fontSize:o.typography.pxToRem(13)}},{props:{size:"large"},style:{padding:15,fontSize:o.typography.pxToRem(15)}}]}))),C=f.forwardRef(function(r,t){const{value:i,...n}=f.useContext(je),l=f.useContext(ke),a=Be({...n,selected:$e(r.value,i)},r),c=me({props:a,name:"MuiToggleButton"}),{children:u,className:d,color:p="standard",disabled:x=!1,disableFocusRipple:D=!1,fullWidth:g=!1,onChange:E,onClick:M,selected:j,size:J="medium",value:H,...se}=c,A={...c,color:p,disabled:x,disableFocusRipple:D,fullWidth:g,size:J},ae=Re(A),ie=v=>{M&&(M(v,H),v.defaultPrevented)||E&&E(v,H)},z=l||"";return e.jsx(We,{className:ue(n.className,ae.root,d,z),disabled:x,focusRipple:!D,ref:t,onClick:ie,onChange:E,value:H,ownerState:A,"aria-pressed":j,...se,children:u})});function Ie(o){return ye("MuiToggleButtonGroup",o)}const m=be("MuiToggleButtonGroup",["root","selected","horizontal","vertical","disabled","grouped","groupedHorizontal","groupedVertical","fullWidth","firstButton","lastButton","middleButton"]),Ne=o=>{const{classes:r,orientation:t,fullWidth:i,disabled:n}=o,l={root:["root",t,i&&"fullWidth"],grouped:["grouped",`grouped${oe(t)}`,n&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return Ce(l,Ie,r)},Ge=fe("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:t}=o;return[{[`& .${m.grouped}`]:r.grouped},{[`& .${m.grouped}`]:r[`grouped${oe(t.orientation)}`]},{[`& .${m.firstButton}`]:r.firstButton},{[`& .${m.lastButton}`]:r.lastButton},{[`& .${m.middleButton}`]:r.middleButton},r.root,t.orientation==="vertical"&&r.vertical,t.fullWidth&&r.fullWidth]}})(ze(({theme:o})=>({display:"inline-flex",borderRadius:(o.vars||o).shape.borderRadius,variants:[{props:{orientation:"vertical"},style:{flexDirection:"column",[`& .${m.grouped}`]:{[`&.${m.selected} + .${m.grouped}.${m.selected}`]:{borderTop:0,marginTop:0}},[`& .${m.firstButton},& .${m.middleButton}`]:{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`& .${m.lastButton},& .${m.middleButton}`]:{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},[`& .${m.lastButton}.${B.disabled},& .${m.middleButton}.${B.disabled}`]:{borderTop:"1px solid transparent"}}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{orientation:"horizontal"},style:{[`& .${m.grouped}`]:{[`&.${m.selected} + .${m.grouped}.${m.selected}`]:{borderLeft:0,marginLeft:0}},[`& .${m.firstButton},& .${m.middleButton}`]:{borderTopRightRadius:0,borderBottomRightRadius:0},[`& .${m.lastButton},& .${m.middleButton}`]:{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},[`& .${m.lastButton}.${B.disabled},& .${m.middleButton}.${B.disabled}`]:{borderLeft:"1px solid transparent"}}}]}))),Pe=f.forwardRef(function(r,t){const i=me({props:r,name:"MuiToggleButtonGroup"}),{children:n,className:l,color:a="standard",disabled:c=!1,exclusive:u=!1,fullWidth:d=!1,onChange:p,orientation:x="horizontal",size:D="medium",value:g,...E}=i,M={...i,disabled:c,fullWidth:d,orientation:x,size:D},j=Ne(M),J=f.useCallback((z,v)=>{if(!p)return;const T=g&&g.indexOf(v);let Q;g&&T>=0?(Q=g.slice(),Q.splice(T,1)):Q=g?g.concat(v):[v],p(z,Q)},[p,g]),H=f.useCallback((z,v)=>{p&&p(z,g===v?null:v)},[p,g]),se=f.useMemo(()=>({className:j.grouped,onChange:u?H:J,value:g,size:D,fullWidth:d,color:a,disabled:c}),[j.grouped,u,H,J,g,D,d,a,c]),A=Ae(n),ae=A.length,ie=z=>{const v=z===0,T=z===ae-1;return v&&T?"":v?j.firstButton:T?j.lastButton:j.middleButton};return e.jsx(Ge,{role:"group",className:ue(j.root,l),ref:t,ownerState:M,...E,children:e.jsx(je.Provider,{value:se,children:A.map((z,v)=>e.jsx(ke.Provider,{value:ie(v),children:z},v))})})}),te={sunny:"clear_day",partlyCloudy:"partly_cloudy_day",cloudy:"cloud",rainy:"rainy",stormy:"thunderstorm",snowy:"weather_snowy",foggy:"foggy",windy:"air",night:"clear_night",nightCloudy:"nights_stay"},Ze={clear_day:"M13 3h-2v2h2V3zm4 2h2v2h-2V5zm-6 6h2v2h-2v-2zm-8 0h2v2H3v-2zm18 0h-2v2h2v-2zM5 5h2v2H5V5zm14 14h-2v-2h2v2zm-8 2h2v-2h-2v2zm-4-2H5v-2h2v2zM9 7h6v2H9V7zm0 8H7V9h2v6zm0 0v2h6v-2h2V9h-2v6H9z",clear_night:"M6 2h8v2h-2v2h-2V4H6V2ZM4 6V4h2v2H4Zm0 10H2V6h2v10Zm2 2H4v-2h2v2Zm2 2H6v-2h2v2Zm10 0v2H8v-2h10Zm2-2v2h-2v-2h2Zm-2-4h2v4h2v-8h-2v2h-2v2Zm-6 0v2h6v-2h-6Zm-2-2h2v2h-2v-2Zm0 0V6H8v6h2Z",cloud:"M16 4h-6v2H8v2H4v2H2v2H0v6h2v2h20v-2h2v-6h-2v-2h-2V8h-2V6h-2V4zm2 8h4v6H2v-6h2v-2h4v2h2v-2H8V8h2V6h6v2h2v4zm0 0v2h-2v-2h2z",partly_cloudy_day:"M11 0h2v4h-2V0Zm1 12H8v2H4v2H2v4h2v2h10v-2h2v-4h-2v-2h-2v-2Zm0 2v2h2v4H4v-4h4v2h2v-2H8v-2h4ZM8 6h6v2H8V6Zm0 2v2H6V8h2Zm8 2h-2V8h2v2Zm0 0h2v2h-2v-2Zm4-8h2v2h-2V2Zm0 2v2h-2V4h2ZM2 2h2v2H2V2Zm2 2h2v2H4V4Zm20 7h-4v2h4v-2Z",nights_stay:"M18 2h-8v2H8v2H6v4h2V6h2V4h4v2h-2v4h2v2h4v-2h2v4h-2v2h2v-2h2V6h-2v2h-2v2h-4V6h2V4h2V2ZM8 14v-2h4v2H8Zm0 2v-2H4v2H2v4h2v2h10v-2h2v-4h-2v-2h-2v2h2v4H4v-4h4Zm0 0h2v2H8v-2Z",rainy:"M10 4h6v2h-6V4zM8 8V6h2v2H8zm-4 2V8h4v2H4zm-2 2v-2h2v2H2zm0 6H0v-6h2v6zm0 0h5v2H2v-2zM18 8h-2V6h2v2zm4 4h-4V8h2v2h2v2zm0 6v-6h2v6h-2zm0 0v2h-5v-2h5zm-11 2h2v-2h2v-2h2v-2h-4V9h-2v5H7v2h2v2h2v2z",thunderstorm:"M12 1h2v8h8v4h-2v-2h-8V5h-2V3h2V1zM8 7V5h2v2H8zM6 9V7h2v2H6zm-2 2V9h2v2H4zm10 8v2h-2v2h-2v-8H2v-4h2v2h8v6h2zm2-2v2h-2v-2h2zm2-2v2h-2v-2h2zm0 0h2v-2h-2v2z",weather_snowy:"M13 2h-2v4H9V4H7v2h2v2h2v3H8V9H6V7H4v2h2v2H2v2h4v2H4v2h2v-2h2v-2h3v3H9v2H7v2h2v-2h2v4h2v-4h2v2h2v-2h-2v-2h-2v-3h3v2h2v2h2v-2h-2v-2h4v-2h-4V9h2V7h-2v2h-2v2h-3V8h2V6h2V4h-2v2h-2V2z",foggy:"M16 4h-6v2H8v2H4v2H2v2H0v6h2v2h20v-2h2v-6h-2v-2h-2V8h-2V6h-2V4zm2 8h4v6H2v-6h2v-2h4v2h2v-2H8V8h2V6h6v2h2v4zm0 0v2h-2v-2h2z",air:"M12 3H8v2h4v2H2v2h12V3h-2zm10 8V7h-6v2h4v2H2v2h20v-2zM2 17v-2h14v6h-6v-2h4v-2H2z",location_on:"M7 2h10v2H7V2zM5 6V4h2v2H5zm0 8H3V6h2v8zm2 2H5v-2h2v2zm2 2H7v-2h2v2zm2 2H9v-2h2v2zm2 0v2h-2v-2h2zm2-2v2h-2v-2h2zm2-2v2h-2v-2h2zm2-2v2h-2v-2h2zm0-8h2v8h-2V6zm0 0V4h-2v2h2zm-5 2h-4v4h4V8z",humidity_percentage:"M13 2h-2v2H9v4H7v4H5v6h2v2h2v2h6v-2h2v-2h2v-6h-2V8h-2V4h-2V2zm0 2v4h2v4h2v6h-2v2H9v-2H7v-6h2V8h2V4h2z",wb_sunny:"M13 3h-2v2h2V3zm4 2h2v2h-2V5zm-6 6h2v2h-2v-2zm-8 0h2v2H3v-2zm18 0h-2v2h2v-2zM5 5h2v2H5V5zm14 14h-2v-2h2v2zm-8 2h2v-2h-2v2zm-4-2H5v-2h2v2zM9 7h6v2H9V7zm0 8H7V9h2v6zm0 0v2h6v-2h2V9h-2v6H9z",thermostat:"M6 2H4v20h16V2H6zm12 2v16H6V4h12zm-5 12h-2v2h2v-2z",speed:"M13 5h-2v8h-1v4h4v-4h-1V5zM9 7H5v2H3v2H1v6h2v2h2v-2H3v-6h2V9h4V7zm12 4h2v6h-2v-6zm-2-2h2v2h-2V9zm0 0h-4V7h4v2zm2 8v2h-2v-2h2z",visibility:"M8 6h8v2H8V6zm-4 4V8h4v2H4zm-2 2v-2h2v2H2zm0 2v-2H0v2h2zm2 2H2v-2h2v2zm4 2H4v-2h4v2zm8 0v2H8v-2h8zm4-2v2h-4v-2h4zm2-2v2h-2v-2h2zm0-2h2v2h-2v-2zm-2-2h2v2h-2v-2zm0 0V8h-4v2h4zm-10 1h4v4h-4v-4z",wb_twilight:"M13 0h-2v4h2V0ZM0 11v2h4v-2H0Zm24 0v2h-4v-2h4ZM13 24h-2v-4h2v4ZM8 6h8v2H8V6ZM6 8h2v8H6V8Zm2 10v-2h8v2H8Zm10-2h-2V8h2v8Zm2-14h2v2h-2V2Zm0 2v2h-2V4h2Zm2 18h-2v-2h2v2Zm-2-2h-2v-2h2v2ZM4 2H2v2h2v2h2V4H4V2ZM2 22h2v-2h2v-2H4v2H2v2Z"},y={location:"Seoul, Korea",temperature:28,condition:"sunny",conditionText:"Sunny",high:32,low:24,sunrise:"05:42",sunset:"19:38",updatedAt:"Updated 5 min ago"},Le=[{time:"Now",temp:28,condition:"sunny",precipitation:0},{time:"1PM",temp:29,condition:"sunny",precipitation:0},{time:"2PM",temp:30,condition:"sunny",precipitation:0},{time:"3PM",temp:31,condition:"partlyCloudy",precipitation:10},{time:"4PM",temp:30,condition:"partlyCloudy",precipitation:15},{time:"5PM",temp:29,condition:"cloudy",precipitation:25},{time:"6PM",temp:28,condition:"cloudy",precipitation:30},{time:"7PM",temp:27,condition:"rainy",precipitation:60},{time:"8PM",temp:26,condition:"rainy",precipitation:70},{time:"9PM",temp:25,condition:"rainy",precipitation:55},{time:"10PM",temp:24,condition:"nightCloudy",precipitation:40},{time:"11PM",temp:24,condition:"night",precipitation:20}],qe=[{day:"Today",date:"Nov 28",high:32,low:24,condition:"sunny",precipitation:10},{day:"Fri",date:"Nov 29",high:30,low:23,condition:"partlyCloudy",precipitation:20},{day:"Sat",date:"Nov 30",high:26,low:20,condition:"rainy",precipitation:80},{day:"Sun",date:"Dec 1",high:24,low:18,condition:"rainy",precipitation:70},{day:"Mon",date:"Dec 2",high:25,low:17,condition:"cloudy",precipitation:30},{day:"Tue",date:"Dec 3",high:27,low:19,condition:"partlyCloudy",precipitation:15},{day:"Wed",date:"Dec 4",high:29,low:21,condition:"sunny",precipitation:5}],Oe=[{label:"Humidity",value:"65%",icon:"humidity_percentage"},{label:"Wind",value:"12 km/h NE",icon:"air"},{label:"UV Index",value:"8 (Very High)",icon:"wb_sunny"},{label:"Feels Like",value:"31°",icon:"thermostat"},{label:"Pressure",value:"1013 hPa",icon:"speed"},{label:"Visibility",value:"10 km",icon:"visibility"}],Fe="0.35s",he={sunny:{base:"radial-gradient(circle at 50% 50%, #FFF8E7 0%, #FFF8E7 100%)",blobs:[{color:"#FFD93D",size:400,top:"5%",left:"10%",opacity:.5},{color:"#FF8C00",size:350,top:"15%",right:"5%",opacity:.4},{color:"#87CEEB",size:300,bottom:"20%",left:"5%",opacity:.35},{color:"#FFE066",size:280,bottom:"10%",right:"15%",opacity:.4},{color:"#FFA500",size:200,top:"50%",left:"50%",opacity:.3}]},partlyCloudy:{base:"radial-gradient(circle at 50% 50%, #F0F8FF 0%, #F0F8FF 100%)",blobs:[{color:"#87CEEB",size:400,top:"5%",left:"10%",opacity:.45},{color:"#FFFFFF",size:380,top:"20%",right:"5%",opacity:.5},{color:"#B0E0E6",size:320,bottom:"15%",left:"5%",opacity:.4},{color:"#E0E8F0",size:280,bottom:"10%",right:"15%",opacity:.45},{color:"#FFE4B5",size:200,top:"40%",left:"60%",opacity:.35}]},cloudy:{base:"radial-gradient(circle at 50% 50%, #E8ECEF 0%, #E8ECEF 100%)",blobs:[{color:"#A9B4C2",size:420,top:"5%",left:"10%",opacity:.45},{color:"#D3D8DE",size:380,top:"20%",right:"5%",opacity:.5},{color:"#B8C4CE",size:300,bottom:"15%",left:"5%",opacity:.4},{color:"#C5CDD5",size:320,bottom:"10%",right:"15%",opacity:.45},{color:"#9AA8B8",size:250,top:"50%",left:"50%",opacity:.35}]},rainy:{base:"radial-gradient(circle at 50% 50%, #E3EBF2 0%, #E3EBF2 100%)",blobs:[{color:"#5B8FB9",size:400,top:"5%",left:"10%",opacity:.45},{color:"#7BA3C4",size:350,top:"20%",right:"5%",opacity:.4},{color:"#4A7C9B",size:320,bottom:"15%",left:"5%",opacity:.4},{color:"#89B4D4",size:280,bottom:"10%",right:"15%",opacity:.45},{color:"#3D6A89",size:220,top:"45%",left:"55%",opacity:.35}]},stormy:{base:"radial-gradient(circle at 50% 50%, #D8DCE6 0%, #D8DCE6 100%)",blobs:[{color:"#4A4063",size:420,top:"5%",left:"10%",opacity:.5},{color:"#6B5B7A",size:380,top:"20%",right:"5%",opacity:.45},{color:"#3D3550",size:300,bottom:"15%",left:"5%",opacity:.45},{color:"#8B7DA8",size:320,bottom:"10%",right:"15%",opacity:.4},{color:"#5C4E6E",size:250,top:"50%",left:"50%",opacity:.4}]},snowy:{base:"radial-gradient(circle at 50% 50%, #F5F8FC 0%, #F5F8FC 100%)",blobs:[{color:"#E8F4FC",size:400,top:"5%",left:"10%",opacity:.6},{color:"#FFFFFF",size:380,top:"20%",right:"5%",opacity:.7},{color:"#D6EAF8",size:320,bottom:"15%",left:"5%",opacity:.5},{color:"#C9E2F5",size:280,bottom:"10%",right:"15%",opacity:.55},{color:"#B8D8F0",size:220,top:"45%",left:"55%",opacity:.45}]},foggy:{base:"radial-gradient(circle at 50% 50%, #EAECEE 0%, #EAECEE 100%)",blobs:[{color:"#D5D8DC",size:450,top:"5%",left:"10%",opacity:.6},{color:"#E8EAED",size:400,top:"20%",right:"5%",opacity:.65},{color:"#CCD1D6",size:350,bottom:"15%",left:"5%",opacity:.55},{color:"#DFE2E5",size:320,bottom:"10%",right:"15%",opacity:.6},{color:"#C4C9CE",size:280,top:"50%",left:"50%",opacity:.5}]},windy:{base:"radial-gradient(circle at 50% 50%, #E8F6F3 0%, #E8F6F3 100%)",blobs:[{color:"#76D7C4",size:400,top:"5%",left:"10%",opacity:.4},{color:"#A3E4D7",size:350,top:"20%",right:"5%",opacity:.45},{color:"#48C9B0",size:300,bottom:"15%",left:"5%",opacity:.4},{color:"#85E0D0",size:280,bottom:"10%",right:"15%",opacity:.45},{color:"#5DADE2",size:220,top:"45%",left:"55%",opacity:.35}]},night:{base:"radial-gradient(circle at 50% 50%, #1A1A2E 0%, #1A1A2E 100%)",blobs:[{color:"#16213E",size:400,top:"5%",left:"10%",opacity:.6},{color:"#0F3460",size:350,top:"20%",right:"5%",opacity:.5},{color:"#1A1A40",size:320,bottom:"15%",left:"5%",opacity:.55},{color:"#2C2C54",size:280,bottom:"10%",right:"15%",opacity:.5},{color:"#40407A",size:200,top:"50%",left:"50%",opacity:.4}]},nightCloudy:{base:"radial-gradient(circle at 50% 50%, #1E2A3A 0%, #1E2A3A 100%)",blobs:[{color:"#2C3E50",size:400,top:"5%",left:"10%",opacity:.55},{color:"#34495E",size:350,top:"20%",right:"5%",opacity:.5},{color:"#1C2833",size:320,bottom:"15%",left:"5%",opacity:.5},{color:"#283747",size:280,bottom:"10%",right:"15%",opacity:.55},{color:"#212F3D",size:220,top:"45%",left:"55%",opacity:.45}]}},_e=o=>he[o]||he.sunny,S=()=>{const o=w(),r={duration:Fe,easing:"cubic-bezier(0.4, 0, 0.2, 1)",properties:"all"};return o.dashboard||{style:"default",iconStyle:"filled",iconWeight:400,cardColors:[],textColor:o.palette.text.primary,textSecondary:o.palette.text.secondary,textShadow:"none",iconGradient:null,backdropFilter:"none",WebkitBackdropFilter:"none",border:"none",shadow:"none",subBackdropFilter:"none",highlightColor:null,liquidEffect:!1,dividerColor:o.palette.divider,progressHeight:4,progressTrackColor:"rgba(0, 0, 0, 0.1)",progressBarColor:null,progressGradient:!0,background:o.palette.background.default,atmosphere:null,atmosphereOpacity:0,transition:r}},V=o=>{const r=o.transition||{duration:Fe,easing:"cubic-bezier(0.4, 0, 0.2, 1)",properties:"all"};return`${r.properties.split(", ").map(t=>`${t} ${r.duration} ${r.easing}`).join(", ")}`},Ue=({value:o})=>{const r=Math.max(o,5);return e.jsxs(s,{sx:{position:"relative",width:"100%",height:16},children:[e.jsx(s,{sx:{position:"absolute",inset:0,top:3,bottom:3,borderRadius:5,background:`
            linear-gradient(to bottom,
              #A8A8A8 0%,
              #C8C8C8 20%,
              #E0E0E0 50%,
              #D0D0D0 80%,
              #B8B8B8 100%
            )
          `,border:"1px solid #909090",boxShadow:`
            inset 0 1px 3px rgba(0, 0, 0, 0.25),
            inset 0 0 1px rgba(0, 0, 0, 0.1),
            0 1px 0 rgba(255, 255, 255, 0.8)
          `}}),e.jsx(s,{sx:{position:"absolute",left:0,width:`${r}%`,top:1,bottom:1,borderRadius:8,overflow:"hidden",background:`
            linear-gradient(to bottom,
              #B8D8FF 0%,
              #6BB3FA 15%,
              #2E7CF6 40%,
              #1461D8 70%,
              #0050C8 100%
            )
          `,border:"1px solid #0050C8",boxShadow:`
            inset 0 1px 0 rgba(255, 255, 255, 0.5),
            0 1px 2px rgba(0, 80, 200, 0.4),
            0 0 4px rgba(46, 124, 246, 0.3)
          `,"&::before":{content:'""',position:"absolute",top:1,left:2,right:2,height:"45%",borderRadius:"6px 6px 50% 50%",background:`
              linear-gradient(to bottom,
                rgba(255, 255, 255, 0.7) 0%,
                rgba(255, 255, 255, 0.4) 50%,
                rgba(255, 255, 255, 0.1) 100%
              )
            `,pointerEvents:"none"},"&::after":{content:'""',position:"absolute",bottom:1,left:3,right:3,height:"20%",borderRadius:"50% 50% 4px 4px",background:`
              linear-gradient(to top,
                rgba(255, 255, 255, 0.15) 0%,
                transparent 100%
              )
            `,pointerEvents:"none"}}}),e.jsx(s,{sx:{position:"absolute",left:0,top:1,bottom:1,width:8,borderRadius:"8px 0 0 8px",background:`
            radial-gradient(ellipse at left center,
              rgba(255, 255, 255, 0.3) 0%,
              transparent 70%
            )
          `,pointerEvents:"none"}})]})},ne=({color:o,size:r=12})=>e.jsx(s,{sx:{width:r,height:r,borderRadius:"50%",background:`
        linear-gradient(to bottom,
          rgba(255,255,255,0.4) 0%,
          rgba(255,255,255,0.1) 50%,
          transparent 50%
        ),
        linear-gradient(to bottom,
          ${o} 0%,
          ${o}dd 100%
        )
      `,border:`1px solid ${o}88`,boxShadow:`
        inset 0 1px 0 rgba(255,255,255,0.5),
        0 1px 2px rgba(0,0,0,0.15)
      `}}),re=({title:o,config:r,textSecondary:t})=>{const i=r.windowStyle,n=r.style==="aqua";if(!i)return e.jsx(h,{variant:"subtitle2",sx:{mb:2,color:t},children:o});if(n){const a=r.trafficLights||{close:"#FF5F57",minimize:"#FEBC2E",maximize:"#28C840"};return e.jsxs(s,{sx:{display:"flex",alignItems:"center",mb:2,pb:1.5,borderBottom:`1px solid ${r.borderColor||"#C8C8C8"}`,background:"linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)",mx:-2,mt:-1.5,px:2,pt:1,borderRadius:"5px 5px 0 0"},children:[e.jsxs(s,{sx:{display:"flex",gap:.75,mr:2},children:[e.jsx(ne,{color:a.close}),e.jsx(ne,{color:a.minimize}),e.jsx(ne,{color:a.maximize})]}),e.jsx(h,{variant:"subtitle2",sx:{flex:1,textAlign:"center",color:t,fontWeight:600,letterSpacing:"0.02em",textShadow:"0 1px 0 rgba(255,255,255,0.8)",pr:5},children:o})]})}const l=r.borderColor||r.textSecondary;return e.jsxs(s,{sx:{display:"flex",alignItems:"center",mb:2,gap:1},children:[e.jsx(s,{sx:{flex:1,display:"flex",flexDirection:"column",gap:"2px"},children:[0,1,2,3,4,5].map(a=>e.jsx(s,{sx:{height:"1px",backgroundColor:l,opacity:.6}},`left-${a}`))}),e.jsx(h,{variant:"subtitle2",sx:{color:t,px:1.5,whiteSpace:"nowrap",fontWeight:700,letterSpacing:"0.05em"},children:o}),e.jsx(s,{sx:{flex:1,display:"flex",flexDirection:"column",gap:"2px"},children:[0,1,2,3,4,5].map(a=>e.jsx(s,{sx:{height:"1px",backgroundColor:l,opacity:.6}},`right-${a}`))})]})},ce=(o,r,t)=>{const i=r.style==="tiles"||r.style==="monoline";if(r.style==="pixel"){if(r.background==="#9090D0")switch(o){case"sunny":case"partlyCloudy":return"#E8A000";case"rainy":case"stormy":return"#2080A0";case"cloudy":case"foggy":return"#4A4A4A";case"snowy":return"#3090A0";case"night":case"nightCloudy":return"#3050A0";default:return r.textColor}if(r.style==="grey3d")switch(o){case"sunny":case"partlyCloudy":return"#CC9933";case"rainy":case"stormy":return"#6699AA";case"cloudy":case"foggy":return"#666666";case"snowy":return"#88BBCC";case"night":case"nightCloudy":return"#447788";default:return r.textColor}return r.textColor}if(i)return r.textColor;if(r.style==="aqua")switch(o){case"sunny":case"partlyCloudy":return"linear-gradient(to bottom, #FFE066 0%, #F5A623 50%, #D68910 100%)";case"rainy":case"stormy":return"linear-gradient(to bottom, #6BB3FA 0%, #2E7CF6 50%, #1461D8 100%)";case"cloudy":case"foggy":return"linear-gradient(to bottom, #CCCCCC 0%, #888888 50%, #666666 100%)";case"snowy":return"linear-gradient(to bottom, #FFFFFF 0%, #B8D4FF 50%, #87CEEB 100%)";case"night":case"nightCloudy":return"linear-gradient(to bottom, #6B8DD6 0%, #3D5A99 50%, #2C3E50 100%)";default:return"linear-gradient(to bottom, #6BB3FA 0%, #2E7CF6 50%, #1461D8 100%)"}switch(o){case"sunny":case"partlyCloudy":return r.style==="skeuomorphism"?`linear-gradient(to bottom, #FFF176 0%, ${t.palette.warning.main} 100%)`:t.palette.warning.main;case"rainy":case"stormy":return r.style==="skeuomorphism"?`linear-gradient(to bottom, #81D4FA 0%, ${t.palette.info.main} 100%)`:t.palette.info.main;case"cloudy":case"foggy":return r.style==="skeuomorphism"?`linear-gradient(to bottom, #ECEFF1 0%, ${t.palette.text.secondary} 100%)`:t.palette.text.secondary;case"snowy":return r.style==="skeuomorphism"?`linear-gradient(to bottom, #FFFFFF 0%, ${t.palette.info.light} 100%)`:t.palette.info.light;default:return r.style==="skeuomorphism"?`linear-gradient(to bottom, #ECEFF1 0%, ${t.palette.text.secondary} 100%)`:t.palette.text.secondary}},F=({name:o,size:r=24,fill:t,color:i="inherit",weight:n,...l})=>{const a=S(),c=t!==void 0?t:a.iconStyle==="filled",u=n!==void 0?n:a.iconWeight,d=a.style==="pixel",p=Ze[o],x={color:i,textShadow:a.textShadow,imageRendering:a.style==="pixel"?"pixelated":"auto",display:"inline-block",transition:"color 0.35s ease, text-shadow 0.35s ease, font-size 0.35s ease"};return d&&p?e.jsx(s,{component:"svg",viewBox:"0 0 24 24",sx:{width:r,height:r,fill:i,display:"inline-block",verticalAlign:"middle",transition:"all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",...l.sx},...l,children:e.jsx("path",{d:p})}):e.jsx("span",{className:"material-symbols-rounded",style:{fontSize:r,fontVariationSettings:`'FILL' ${c?1:0}, 'wght' ${u}, 'GRAD' 0, 'opsz' 24`,lineHeight:1,display:"inline-block",verticalAlign:"middle",...x},...l,children:o})},K=({config:o})=>o.liquidEffect?e.jsxs(e.Fragment,{children:[e.jsx(s,{sx:{position:"absolute",inset:0,zIndex:0,backdropFilter:"blur(0px)",filter:"url(#lg-dist)",isolation:"isolate",pointerEvents:"none"}}),e.jsx(s,{sx:{position:"absolute",inset:0,zIndex:1,background:o.cardColors?.[0]||"rgba(255,255,255,0.25)",pointerEvents:"none"}}),e.jsx(s,{sx:{position:"absolute",inset:0,zIndex:2,borderRadius:"inherit",overflow:"hidden",boxShadow:o.highlightColor==="corner-only"?"inset 1px 1px 0 rgba(255,255,255,0.5), inset -1px -1px 0 rgba(255,255,255,0.2)":`inset 1px 1px 0 ${o.highlightColor||"rgba(255,255,255,0.75)"}, inset 0 0 5px ${o.highlightColor||"rgba(255,255,255,0.75)"}`,maskImage:o.highlightColor==="corner-only"?"linear-gradient(135deg, black 0%, transparent 25%, transparent 75%, black 100%)":"none",WebkitMaskImage:o.highlightColor==="corner-only"?"linear-gradient(135deg, black 0%, transparent 25%, transparent 75%, black 100%)":"none",pointerEvents:"none"}})]}):null,Xe=({index:o=0})=>{const r=w(),t=S(),i=r.palette.mode==="dark",n=t.style==="tiles",l=t.cardColors?.[0]||r.palette.background.paper,a=t.textColor,c=t.textSecondary,u=ce(y.condition,t,r),d=V(t),p=`${o*100}ms`;return e.jsxs(Y,{sx:{p:n?2.5:4,height:"100%",position:"relative",overflow:"hidden",background:t.liquidEffect?"transparent":l,color:a,border:t.border,borderRadius:t.cardBorderRadius??r.shape.borderRadius,boxShadow:t.shadow,backdropFilter:t.backdropFilter,WebkitBackdropFilter:t.WebkitBackdropFilter,transition:d,transitionDelay:p},children:[e.jsx(K,{config:t}),e.jsx(s,{sx:{position:"absolute",top:n?-20:-40,right:n?-20:-40,opacity:i?.1:.15,pointerEvents:"none",zIndex:3,"@keyframes spin":{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},animation:"spin 60s linear infinite"},children:e.jsx(F,{name:te[y.condition],size:n?240:200,color:a})}),e.jsxs(ge,{spacing:n?1.5:2,sx:{position:"relative",zIndex:3},children:[e.jsxs(s,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(F,{name:"location_on",size:18,color:c}),e.jsx(h,{variant:"subtitle2",sx:{color:c},children:y.location})]}),e.jsxs(s,{sx:{display:"flex",alignItems:"flex-start",gap:2},children:[e.jsxs(h,{variant:"h1",sx:{fontSize:{xs:"4rem",md:n?"6.5rem":"5.5rem"},fontWeight:n?700:300,lineHeight:1,color:a,textShadow:t.textShadow},children:[y.temperature,e.jsx(h,{component:"span",sx:{fontSize:"2rem",fontWeight:n?600:300,verticalAlign:"top"},children:"°"})]}),e.jsx(s,{sx:{pt:1},children:e.jsx(F,{name:te[y.condition],size:n?64:48,color:u})})]}),e.jsx(h,{variant:"h5",sx:{fontWeight:n?600:500,color:a,textShadow:t.textShadow},children:y.conditionText}),e.jsxs(s,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsxs(h,{variant:"body2",sx:{color:c},children:["H: ",y.high,"°"]}),e.jsxs(h,{variant:"body2",sx:{color:c},children:["L: ",y.low,"°"]})]}),e.jsx(h,{variant:"caption",sx:{color:c,opacity:.8},children:y.updatedAt})]})]})},Ye=({index:o=0})=>{const r=w(),t=S(),i=r.palette.mode==="dark",n=t.style==="tiles",l=t.cardColors?.[2]||r.palette.background.paper,a=t.textColor,c=t.textSecondary,u=V(t),d=`${o*100}ms`;return e.jsxs(Y,{sx:{p:n?2:3,background:t.liquidEffect?"transparent":l,color:a,border:t.border,borderRadius:t.cardBorderRadius??r.shape.borderRadius,boxShadow:t.shadow,backdropFilter:t.backdropFilter,WebkitBackdropFilter:t.WebkitBackdropFilter,transition:u,transitionDelay:d,position:"relative",overflow:"hidden"},children:[e.jsx(K,{config:t}),e.jsxs(s,{sx:{position:"relative",zIndex:3},children:[e.jsx(re,{title:"HOURLY FORECAST",config:t,textSecondary:c}),e.jsx(s,{sx:{display:"flex",justifyContent:"space-between",overflowX:"auto",pb:1,"&::-webkit-scrollbar":{height:4},"&::-webkit-scrollbar-thumb":{backgroundColor:i?"rgba(255,255,255,0.3)":t.dividerColor,borderRadius:2}},children:Le.map((p,x)=>e.jsxs(s,{sx:{flex:1,textAlign:"center",py:1,px:.5,borderRadius:0,background:t.subCardColors&&x===0?t.subCardColors[0]:x===0?le(a,.1):"transparent",border:t.subCardColors&&x===0?t.subBorder||"none":x===0?`1px solid ${le(a,.3)}`:"1px solid transparent",boxShadow:t.subCardColors&&x===0&&t.subShadow||"none"},children:[e.jsx(h,{variant:"caption",sx:{fontWeight:x===0?600:400,color:x===0?a:c},children:p.time}),e.jsx(s,{sx:{my:1},children:e.jsx(F,{name:te[p.condition],size:n?32:24,color:ce(p.condition,t,r)})}),e.jsxs(h,{variant:"body2",sx:{fontWeight:500,color:a},children:[p.temp,"°"]}),p.precipitation>0&&e.jsxs(h,{variant:"caption",sx:{color:c,display:"block",mt:.5},children:[p.precipitation,"%"]})]},p.time))})]})]})},Ke=({index:o=0})=>{const r=w(),t=S(),i=t.style==="tiles",n=t.cardColors?.[1]||r.palette.background.paper,l=t.textColor,a=t.textSecondary,c=V(t),u=`${o*100}ms`;return e.jsxs(Y,{sx:{p:i?2:3,height:"100%",background:t.liquidEffect?"transparent":n,color:l,border:t.border,borderRadius:t.cardBorderRadius??r.shape.borderRadius,boxShadow:t.shadow,backdropFilter:t.backdropFilter,WebkitBackdropFilter:t.WebkitBackdropFilter,transition:c,transitionDelay:u,position:"relative",overflow:"hidden"},children:[e.jsx(K,{config:t}),e.jsxs(s,{sx:{position:"relative",zIndex:3},children:[e.jsx(re,{title:"7-DAY FORECAST",config:t,textSecondary:a}),e.jsx(ge,{spacing:0,children:qe.map((d,p)=>e.jsxs(s,{sx:{display:"flex",alignItems:"center",py:i?1.2:1.5,gap:2},children:[e.jsx(h,{variant:"body2",sx:{width:48,fontWeight:p===0?600:400,color:l},children:d.day}),e.jsx(s,{sx:{width:i?40:32,textAlign:"center"},children:e.jsx(F,{name:te[d.condition],size:i?28:22,color:ce(d.condition,t,r)})}),d.precipitation>30&&e.jsxs(h,{variant:"caption",sx:{color:a,width:36},children:[d.precipitation,"%"]}),d.precipitation<=30&&e.jsx(s,{sx:{width:36}}),e.jsxs(s,{sx:{flex:1,display:"flex",alignItems:"center",gap:1},children:[e.jsxs(h,{variant:"body2",sx:{width:28,color:a},children:[d.low,"°"]}),e.jsx(s,{sx:{flex:1,mx:1},children:t.style==="aqua"?e.jsx(Ue,{value:(d.high-d.low)/20*100}):e.jsx(De,{variant:"determinate",value:(d.high-d.low)/20*100,sx:{height:t.progressHeight,borderRadius:t.progressGradient?2:0,background:t.progressTrackColor,"& .MuiLinearProgress-bar":{borderRadius:t.progressGradient?2:0,background:t.progressGradient?`linear-gradient(90deg, ${r.palette.info.main}, ${r.palette.warning.main})`:t.progressBarColor}}})}),e.jsxs(h,{variant:"body2",sx:{width:28,fontWeight:500,color:l},children:[d.high,"°"]})]})]},d.day))})]})]})},Je=({index:o=0})=>{const r=w(),t=S(),i=t.style==="tiles",n=t.cardColors?.[3]||r.palette.background.paper,l=t.textColor,a=t.textSecondary,c=V(t),u=`${o*100}ms`;return e.jsxs(Y,{sx:{p:i?2:3,height:"100%",background:t.liquidEffect?"transparent":n,color:l,border:t.border,borderRadius:t.cardBorderRadius??r.shape.borderRadius,boxShadow:t.shadow,backdropFilter:t.backdropFilter,WebkitBackdropFilter:t.WebkitBackdropFilter,transition:c,transitionDelay:u,position:"relative",overflow:"hidden"},children:[e.jsx(K,{config:t}),e.jsxs(s,{sx:{position:"relative",zIndex:3},children:[e.jsx(re,{title:"WEATHER DETAILS",config:t,textSecondary:a}),e.jsx(k,{container:!0,spacing:i?1.5:2,children:Oe.map((d,p)=>e.jsx(k,{size:6,children:e.jsxs(s,{sx:{p:i?1.5:2,borderRadius:t.subBorderRadius??r.shape.borderRadius*.75,background:t.subCardColors?t.subCardColors[p%t.subCardColors.length]:t.style==="tiles"?le(l,.15):r.palette.background.paper,border:t.subBorder||`1px solid ${t.borderColor}`,boxShadow:t.subShadow||"none",backdropFilter:t.subBackdropFilter||"none",WebkitBackdropFilter:t.subBackdropFilter||"none",transition:c},children:[e.jsxs(s,{sx:{display:"flex",alignItems:"center",gap:1,mb:1},children:[e.jsx(F,{name:d.icon,size:i?24:18,color:a}),e.jsx(h,{variant:"caption",sx:{color:a},children:d.label})]}),e.jsx(h,{variant:"body1",sx:{fontWeight:600,color:l,textShadow:t.textShadow,fontSize:i?"1.2rem":"1rem"},children:d.value})]})},d.label))})]})]})},Qe=({index:o=0})=>{const r=w(),t=S(),i=t.style==="tiles",n=t.cardColors?.[4]||r.palette.background.paper,l=t.textColor,a=t.textSecondary,c=t.style==="pixel"&&t.background==="#9090D0",u=t.style==="grey3d",d=t.style==="tiles"||t.style==="brutal"||t.style==="pixel"&&!c?l:c?"#E8A000":u?"#CC9933":r.palette.warning.light,p=V(t),x=`${o*100}ms`;return e.jsxs(Y,{sx:{p:i?2:3,background:t.liquidEffect?"transparent":n,color:l,border:t.border,boxShadow:t.shadow,backdropFilter:t.backdropFilter,WebkitBackdropFilter:t.WebkitBackdropFilter,transition:p,transitionDelay:x,position:"relative",overflow:"hidden"},children:[e.jsx(K,{config:t}),e.jsxs(s,{sx:{position:"relative",zIndex:3},children:[e.jsx(re,{title:"SUNRISE & SUNSET",config:t,textSecondary:a}),e.jsxs(s,{sx:{display:"flex",justifyContent:"space-around",alignItems:"center"},children:[e.jsxs(s,{sx:{textAlign:"center"},children:[e.jsx(F,{name:"wb_twilight",size:i?40:32,color:d}),e.jsx(h,{variant:"body2",sx:{mt:1,color:a},children:"Sunrise"}),e.jsx(h,{variant:"h6",sx:{fontWeight:600,color:l},children:y.sunrise})]}),e.jsx(He,{orientation:"vertical",flexItem:!0,sx:{borderColor:t.dividerColor}}),e.jsxs(s,{sx:{textAlign:"center"},children:[e.jsx(F,{name:"wb_twilight",size:i?40:32,color:t.style==="tiles"||t.style==="pixel"&&!c?d:c?"#D06020":u?"#AA7722":r.palette.warning.dark}),e.jsx(h,{variant:"body2",sx:{mt:1,color:a},children:"Sunset"}),e.jsx(h,{variant:"h6",sx:{fontWeight:600,color:l},children:y.sunset})]})]})]})]})},et=({blobs:o,transitionStyle:r})=>!o||o.length===0?null:e.jsx(e.Fragment,{children:o.map((t,i)=>e.jsx(s,{sx:{position:"absolute",width:t.size,height:t.size,borderRadius:"50%",background:`radial-gradient(circle, ${t.color} 0%, transparent 70%)`,opacity:t.opacity,top:t.top,left:t.left,right:t.right,bottom:t.bottom,filter:"blur(60px)",pointerEvents:"none",zIndex:0,transition:r||"opacity 0.5s ease-out"}},i))});function pe(){const o=w(),r=S(),t=r.style==="glass",i=_e(y.condition),n=V(r),l=r.background||o.palette.background.default,a=t?i.base:r.atmosphere,c=t?1:r.atmosphereOpacity??0,u=t?i.blobs:null;return e.jsxs(s,{sx:{minHeight:"100vh",p:{xs:2,md:4},position:"relative",overflow:"hidden",backgroundColor:l,transition:n,"& *":{transition:n}},children:[e.jsx(s,{sx:{position:"absolute",inset:0,background:a||"none",opacity:c,backgroundAttachment:t?"fixed":"scroll",transition:n,zIndex:0,pointerEvents:"none"}}),t&&e.jsx(et,{blobs:u,transitionStyle:n}),e.jsx("svg",{style:{display:"none"},children:e.jsxs("filter",{id:"lg-dist",x:"0%",y:"0%",width:"100%",height:"100%",children:[e.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.008 0.008",numOctaves:"2",seed:"92",result:"noise"}),e.jsx("feGaussianBlur",{in:"noise",stdDeviation:"2",result:"blurred"}),e.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"blurred",scale:"70",xChannelSelector:"R",yChannelSelector:"G"})]})}),e.jsxs(s,{sx:{maxWidth:1200,mx:"auto",position:"relative",zIndex:1},children:[e.jsxs(s,{sx:{mb:4},children:[e.jsx(h,{variant:"h4",sx:{fontWeight:700,mb:.5},children:"Weather"}),e.jsx(h,{variant:"body2",color:"text.secondary",children:new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})]}),e.jsxs(k,{container:!0,spacing:3,children:[e.jsx(k,{size:{xs:12,md:5},children:e.jsx(Xe,{index:0})}),e.jsx(k,{size:{xs:12,md:7},children:e.jsx(Je,{index:1})}),e.jsx(k,{size:12,children:e.jsx(Ye,{index:2})}),e.jsx(k,{size:{xs:12,md:8},children:e.jsx(Ke,{index:3})}),e.jsx(k,{size:{xs:12,md:4},children:e.jsx(Qe,{index:4})})]})]})]})}pe.__docgenInfo={description:"WeatherDashboard 메인 컴포넌트",methods:[],displayName:"WeatherDashboard"};const Ft={title:"Template/WeatherDashboard",parameters:{layout:"fullscreen",docs:{description:{component:`
## Weather Dashboard

테마 베리에이션을 테스트하기 위한 날씨 대시보드 템플릿입니다.

### 지원 테마

| 테마 | 설명 | 모드 |
|------|------|------|
| **Liquid Glass** | SVG 필터로 물결치는 젤리 유리 효과 | Dark |
| **Flat Design** | Metro 스타일 순수 플랫, 그림자 없음 | Light |
| **Material Design** | 라운드 카드와 미세한 elevation의 모던 머티리얼 | Light |
| **Glass Morphism** | 반투명 유리 효과와 Aurora 그라데이션 | Light |
| **Monoline Dark** | 미니멀한 라인 기반 다크 UI | Dark |
| **Neubrutalism** | 대담한 하드 섀도우와 두꺼운 테두리 | Light |

### 사용 방법

Controls 패널에서 \`theme\` 옵션을 변경하여 테마를 전환할 수 있습니다.
각 테마는 동일한 컴포넌트를 완전히 다른 비주얼로 렌더링합니다.
        `}}},argTypes:{theme:{control:"select",options:["pixel-modernism","color-pixel","grey-3d","aqua","skeuomorphism","flat","material","neubrutalism","monoline-dark","glassmorphism","liquid-glass"],description:"적용할 테마를 선택합니다",table:{type:{summary:"string"},defaultValue:{summary:"pixel-modernism"}}}}},tt=({currentTheme:o,onThemeChange:r})=>{const t=de(o),i=t.palette.mode==="dark";return e.jsx(s,{sx:{position:"fixed",top:16,right:16,zIndex:9999},children:e.jsxs(Pe,{value:o,exclusive:!0,onChange:(n,l)=>l&&r(l),size:"small",sx:{flexWrap:"nowrap",maxWidth:"none",justifyContent:"flex-end","& .MuiToggleButton-root":{color:i?"rgba(255,255,255,0.7)":"rgba(0,0,0,0.6)",borderColor:i?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.1)",px:2,py:.75,fontSize:"0.75rem",whiteSpace:"nowrap",backgroundColor:i?"rgba(255,255,255,0.1)":"rgba(255,255,255,0.8)",backdropFilter:"blur(8px)","&.Mui-selected":{backgroundColor:t.palette.primary.main,color:t.palette.primary.contrastText,"&:hover":{backgroundColor:t.palette.primary.dark}}}},children:[e.jsx(C,{value:"pixel-modernism",children:"Pixel"}),e.jsx(C,{value:"color-pixel",children:"Color Pixel"}),e.jsx(C,{value:"grey-3d",children:"Grey 3D"}),e.jsx(C,{value:"aqua",children:"Aqua"}),e.jsx(C,{value:"skeuomorphism",children:"Skeuomorphism"}),e.jsx(C,{value:"flat",children:"Flat"}),e.jsx(C,{value:"material",children:"Material"}),e.jsx(C,{value:"neubrutalism",children:"Brutal"}),e.jsx(C,{value:"monoline-dark",children:"Monoline"}),e.jsx(C,{value:"glassmorphism",children:"Glass"}),e.jsx(C,{value:"liquid-glass",children:"Liquid Glass"})]})})},b=({themeName:o})=>{const r=de(o);return e.jsxs(xe,{theme:r,children:[e.jsx(ve,{}),e.jsx(pe,{})]})},$={args:{theme:"liquid-glass"},render:({theme:o})=>e.jsx(b,{themeName:o})};function ot(){const[o,r]=f.useState("pixel-modernism"),t=de(o);return e.jsxs(xe,{theme:t,children:[e.jsx(ve,{}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;500;600;700&display=swap",rel:"stylesheet"}),e.jsx(Se,{styles:{body:{transition:"background-color 0.35s cubic-bezier(0.4, 0, 0.2, 1), color 0.35s cubic-bezier(0.4, 0, 0.2, 1)"}}}),e.jsx(tt,{currentTheme:o,onThemeChange:r}),e.jsx(pe,{})]})}const R={render:()=>e.jsx(ot,{})},W={render:()=>e.jsx(b,{themeName:"pixel-modernism"}),parameters:{docs:{description:{story:"매킨토시 스타일의 흑백 픽셀 GUI 테마입니다. 1px 그리드와 모노크롬 팔레트가 특징입니다."}}}},I={render:()=>e.jsx(b,{themeName:"color-pixel"}),parameters:{docs:{description:{story:"Apple IIgs 스타일의 16컬러 레트로 GUI 테마입니다. 레인보우 Apple 컬러와 디더링 패턴이 특징입니다."}}}},N={render:()=>e.jsx(b,{themeName:"grey-3d"}),parameters:{docs:{description:{story:"Mac OS 8 Platinum 스타일의 3D 그레이 UI 테마입니다. 입체 버튼, 줄무늬 타이틀바가 특징입니다."}}}},G={render:()=>e.jsx(b,{themeName:"aqua"}),parameters:{docs:{description:{story:"Mac OS X 10.0 Aqua 스타일의 젤 버튼과 파란 그라디언트 UI 테마입니다."}}}},P={render:()=>e.jsx(b,{themeName:"liquid-glass"}),parameters:{docs:{description:{story:"SVG Distortion Filter와 Specular highlight를 사용한 액체 유리 질감 테마입니다."}}}},Z={render:()=>e.jsx(b,{themeName:"flat"}),parameters:{docs:{description:{story:"Microsoft Metro/Windows 8 스타일의 순수 플랫 디자인입니다. 그림자 없음, 솔리드 컬러, 대담한 타이포그래피가 특징입니다."}}}},L={render:()=>e.jsx(b,{themeName:"material"}),parameters:{docs:{description:{story:"클린하고 기능적인 구글 머티리얼 디자인 테마입니다. Sharp corners와 subtle shadows가 특징입니다."}}}},q={render:()=>e.jsx(b,{themeName:"glassmorphism"}),parameters:{docs:{description:{story:"반투명 유리 효과와 Aurora 그라데이션이 특징인 몽환적인 테마입니다. backdrop-filter blur와 부드러운 곡선을 사용합니다."}}}},O={render:()=>e.jsx(b,{themeName:"monoline-dark"}),parameters:{docs:{description:{story:"미니멀한 라인 기반의 다크 UI 테마입니다. 채움 없이 1px 테두리만 사용하며 Lime accent가 포인트입니다."}}}},_={render:()=>e.jsx(b,{themeName:"neubrutalism"}),parameters:{docs:{description:{story:"브루탈리즘에서 영감받은 대담한 UI 테마입니다. 하드 섀도우(blur 없음), 두꺼운 검정 테두리, 고채도 비비드 컬러가 특징입니다."}}}},U={render:()=>e.jsx(b,{themeName:"skeuomorphism"}),parameters:{docs:{description:{story:"가죽과 유리 질감, 음각/양각 텍스트 효과가 특징인 클래식 스큐어모피즘 테마입니다."}}}},X={render:()=>e.jsxs(s,{sx:{p:2,backgroundColor:"#1a1a1a",minHeight:"100vh"},children:[e.jsx(h,{variant:"h4",sx:{color:"#fff",textAlign:"center",mb:4,fontFamily:'"Space Mono", monospace'},children:"Theme Comparison"}),e.jsx(s,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",md:"repeat(2, 1fr)",xl:"repeat(4, 1fr)"},gap:2},children:Object.keys(we).map(o=>e.jsxs(s,{sx:{border:"1px solid #333",borderRadius:1,overflow:"hidden"},children:[e.jsxs(s,{sx:{p:1.5,backgroundColor:"#222",borderBottom:"1px solid #333",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(h,{variant:"subtitle2",sx:{color:"#fff",fontFamily:"monospace",fontSize:"0.75rem"},children:ee[o]?.name}),e.jsx(Ve,{label:ee[o]?.mode,size:"small",sx:{height:20,fontSize:"0.625rem",backgroundColor:ee[o]?.mode==="dark"?"#333":"#eee",color:ee[o]?.mode==="dark"?"#fff":"#000"}})]}),e.jsx(s,{sx:{overflow:"auto",transform:"scale(0.6)",transformOrigin:"top left",width:"166.67%",height:{xs:"666px",lg:"1000px"}},children:e.jsx(b,{themeName:o})})]},o))})]}),parameters:{docs:{description:{story:"다섯 가지 테마를 나란히 비교할 수 있는 뷰입니다."}}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'liquid-glass'
  },
  render: ({
    theme
  }) => <ThemedDashboard themeName={theme} />
}`,...$.parameters?.docs?.source},description:{story:"Default - 테마 선택 가능",...$.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveDashboard />
}`,...R.parameters?.docs?.source},description:{story:"Interactive - 인터랙티브 테마 스위처 포함",...R.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <ThemedDashboard themeName="pixel-modernism" />,
  parameters: {
    docs: {
      description: {
        story: '매킨토시 스타일의 흑백 픽셀 GUI 테마입니다. 1px 그리드와 모노크롬 팔레트가 특징입니다.'
      }
    }
  }
}`,...W.parameters?.docs?.source},description:{story:"Pixel Modernism 테마",...W.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <ThemedDashboard themeName="color-pixel" />,
  parameters: {
    docs: {
      description: {
        story: 'Apple IIgs 스타일의 16컬러 레트로 GUI 테마입니다. 레인보우 Apple 컬러와 디더링 패턴이 특징입니다.'
      }
    }
  }
}`,...I.parameters?.docs?.source},description:{story:"Color Pixel 테마",...I.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <ThemedDashboard themeName="grey-3d" />,
  parameters: {
    docs: {
      description: {
        story: 'Mac OS 8 Platinum 스타일의 3D 그레이 UI 테마입니다. 입체 버튼, 줄무늬 타이틀바가 특징입니다.'
      }
    }
  }
}`,...N.parameters?.docs?.source},description:{story:"Grey 3D 테마",...N.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <ThemedDashboard themeName="aqua" />,
  parameters: {
    docs: {
      description: {
        story: 'Mac OS X 10.0 Aqua 스타일의 젤 버튼과 파란 그라디언트 UI 테마입니다.'
      }
    }
  }
}`,...G.parameters?.docs?.source},description:{story:"Aqua 테마",...G.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <ThemedDashboard themeName="liquid-glass" />,
  parameters: {
    docs: {
      description: {
        story: 'SVG Distortion Filter와 Specular highlight를 사용한 액체 유리 질감 테마입니다.'
      }
    }
  }
}`,...P.parameters?.docs?.source},description:{story:"Liquid Glass 테마",...P.parameters?.docs?.description}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <ThemedDashboard themeName="flat" />,
  parameters: {
    docs: {
      description: {
        story: 'Microsoft Metro/Windows 8 스타일의 순수 플랫 디자인입니다. 그림자 없음, 솔리드 컬러, 대담한 타이포그래피가 특징입니다.'
      }
    }
  }
}`,...Z.parameters?.docs?.source},description:{story:"Flat Design 테마",...Z.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <ThemedDashboard themeName="material" />,
  parameters: {
    docs: {
      description: {
        story: '클린하고 기능적인 구글 머티리얼 디자인 테마입니다. Sharp corners와 subtle shadows가 특징입니다.'
      }
    }
  }
}`,...L.parameters?.docs?.source},description:{story:"Material Design 테마",...L.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <ThemedDashboard themeName="glassmorphism" />,
  parameters: {
    docs: {
      description: {
        story: '반투명 유리 효과와 Aurora 그라데이션이 특징인 몽환적인 테마입니다. backdrop-filter blur와 부드러운 곡선을 사용합니다.'
      }
    }
  }
}`,...q.parameters?.docs?.source},description:{story:"Glass Morphism 테마",...q.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <ThemedDashboard themeName="monoline-dark" />,
  parameters: {
    docs: {
      description: {
        story: '미니멀한 라인 기반의 다크 UI 테마입니다. 채움 없이 1px 테두리만 사용하며 Lime accent가 포인트입니다.'
      }
    }
  }
}`,...O.parameters?.docs?.source},description:{story:"Monoline Dark 테마",...O.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <ThemedDashboard themeName="neubrutalism" />,
  parameters: {
    docs: {
      description: {
        story: '브루탈리즘에서 영감받은 대담한 UI 테마입니다. 하드 섀도우(blur 없음), 두꺼운 검정 테두리, 고채도 비비드 컬러가 특징입니다.'
      }
    }
  }
}`,..._.parameters?.docs?.source},description:{story:"Neubrutalism 테마",..._.parameters?.docs?.description}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <ThemedDashboard themeName="skeuomorphism" />,
  parameters: {
    docs: {
      description: {
        story: '가죽과 유리 질감, 음각/양각 텍스트 효과가 특징인 클래식 스큐어모피즘 테마입니다.'
      }
    }
  }
}`,...U.parameters?.docs?.source},description:{story:"Skeuomorphism 테마",...U.parameters?.docs?.description}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 2,
    backgroundColor: '#1a1a1a',
    minHeight: '100vh'
  }}>
      <Typography variant="h4" sx={{
      color: '#fff',
      textAlign: 'center',
      mb: 4,
      fontFamily: '"Space Mono", monospace'
    }}>
        Theme Comparison
      </Typography>
      <Box sx={{
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',
        md: 'repeat(2, 1fr)',
        xl: 'repeat(4, 1fr)'
      },
      gap: 2
    }}>
        {Object.keys(themes).map(themeName => <Box key={themeName} sx={{
        border: '1px solid #333',
        borderRadius: 1,
        overflow: 'hidden'
      }}>
            <Box sx={{
          p: 1.5,
          backgroundColor: '#222',
          borderBottom: '1px solid #333',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
              <Typography variant="subtitle2" sx={{
            color: '#fff',
            fontFamily: 'monospace',
            fontSize: '0.75rem'
          }}>
                {themeMeta[themeName]?.name}
              </Typography>
              <Chip label={themeMeta[themeName]?.mode} size="small" sx={{
            height: 20,
            fontSize: '0.625rem',
            backgroundColor: themeMeta[themeName]?.mode === 'dark' ? '#333' : '#eee',
            color: themeMeta[themeName]?.mode === 'dark' ? '#fff' : '#000'
          }} />
            </Box>
            <Box sx={{
          overflow: 'auto',
          transform: 'scale(0.6)',
          transformOrigin: 'top left',
          width: '166.67%',
          height: {
            xs: '666px',
            lg: '1000px'
          }
        }}>
              <ThemedDashboard themeName={themeName} />
            </Box>
          </Box>)}
      </Box>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: '다섯 가지 테마를 나란히 비교할 수 있는 뷰입니다.'
      }
    }
  }
}`,...X.parameters?.docs?.source},description:{story:"테마 비교 - 5개 테마 나란히",...X.parameters?.docs?.description}}};const Bt=["Default","Interactive","PixelModernism","ColorPixel","Grey3D","Aqua","LiquidGlass","FlatDesign","MaterialDesign","GlassMorphism","MonolineDark","Neubrutalism","Skeuomorphism","ThemeComparison"];export{G as Aqua,I as ColorPixel,$ as Default,Z as FlatDesign,q as GlassMorphism,N as Grey3D,R as Interactive,P as LiquidGlass,L as MaterialDesign,O as MonolineDark,_ as Neubrutalism,W as PixelModernism,U as Skeuomorphism,X as ThemeComparison,Bt as __namedExportsOrder,Ft as default};
