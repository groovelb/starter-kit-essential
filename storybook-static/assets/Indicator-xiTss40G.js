import{r as z,j as r,x as S}from"./iframe-q-XN_VZM.js";import{B as n}from"./Box-Dmtu8wWb.js";import{T as w}from"./Typography-C8IUsM00.js";const V=S`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`,D=S`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,E=z.forwardRef(function({total:s,current:l,variant:u="dot",direction:I="horizontal",size:j="md",activeColor:d="common.white",inactiveColor:c="rgba(255,255,255,0.4)",gap:k=1,hasAnimation:h=!0,hasHoverEffect:O=!0,onClick:o,onKeyNavigate:p,sx:m,...g},b){const y={sm:{dot:6,line:{width:16,height:2},dash:{width:12,height:2,activeWidth:24},fontSize:11,progressHeight:2},md:{dot:8,line:{width:24,height:3},dash:{width:16,height:3,activeWidth:32},fontSize:13,progressHeight:3},lg:{dot:10,line:{width:32,height:4},dash:{width:20,height:4,activeWidth:40},fontSize:15,progressHeight:4}},i=y[j]||y.md,a=I==="vertical",f=!!o,q=z.useCallback(e=>{if(!p)return;const t=a?"ArrowUp":"ArrowLeft",v=a?"ArrowDown":"ArrowRight";e.key===t?(e.preventDefault(),p("prev")):e.key===v&&(e.preventDefault(),p("next"))},[a,p]),x=e=>f?{cursor:"pointer","&:hover":O?{transform:e?"scale(1.15)":"scale(1.25)",opacity:1}:{},"&:focus-visible":{outline:"2px solid",outlineColor:d,outlineOffset:2}}:{};if(u==="fraction"){const e=t=>String(t).padStart(2,"0");return r.jsxs(n,{ref:b,role:"status","aria-label":`${l+1} of ${s}`,sx:{display:"inline-flex",alignItems:"baseline",gap:.75,fontFamily:'"JetBrains Mono", "SF Mono", monospace',fontSize:i.fontSize,fontWeight:500,letterSpacing:"0.05em",...m},...g,children:[r.jsx(w,{component:"span",sx:{color:d,fontWeight:600,fontSize:"inherit",fontFamily:"inherit",letterSpacing:"inherit"},children:e(l+1)}),r.jsx(w,{component:"span",sx:{color:c,fontSize:"0.85em",fontFamily:"inherit"},children:"/"}),r.jsx(w,{component:"span",sx:{color:c,fontSize:"inherit",fontFamily:"inherit",letterSpacing:"inherit"},children:e(s)})]})}if(u==="progress"){const e=(l+1)/s*100;return r.jsx(n,{ref:b,role:"progressbar","aria-valuenow":l+1,"aria-valuemin":1,"aria-valuemax":s,"aria-label":`Progress: ${l+1} of ${s}`,sx:{position:"relative",width:"100%",maxWidth:180,height:i.progressHeight,backgroundColor:c,borderRadius:i.progressHeight/2,overflow:"hidden",...m},...g,children:r.jsx(n,{sx:{position:"absolute",top:0,left:0,width:`${e}%`,height:"100%",backgroundColor:d,borderRadius:"inherit",transition:h?"width 0.4s cubic-bezier(0.4, 0, 0.2, 1)":"none","&::after":h?{content:'""',position:"absolute",top:0,left:0,right:0,bottom:0,background:`linear-gradient(
                90deg,
                transparent 0%,
                rgba(255,255,255,0.3) 50%,
                transparent 100%
              )`,backgroundSize:"200% 100%",animation:`${D} 2s ease-in-out infinite`}:{}}})})}const R=Array.from({length:s},(e,t)=>t);return r.jsx(n,{ref:b,role:"tablist","aria-label":"Slide indicators",tabIndex:p?0:void 0,onKeyDown:q,sx:{display:"inline-flex",flexDirection:a?"column":"row",alignItems:"center",gap:k,outline:"none",...m},...g,children:R.map(e=>{const t=e===l;if(u==="dot")return r.jsx(n,{role:"tab","aria-selected":t,"aria-label":`Go to slide ${e+1}`,tabIndex:f?0:-1,onClick:o?()=>o(e):void 0,sx:{width:i.dot,height:i.dot,borderRadius:"50%",backgroundColor:t?d:c,opacity:t?1:.6,transition:h?"all 0.25s cubic-bezier(0.4, 0, 0.2, 1)":"none",transform:t?"scale(1.15)":"scale(1)",animation:t&&h?`${V} 2s ease-in-out infinite`:"none",...x(t)}},e);if(u==="line")return r.jsx(n,{role:"tab","aria-selected":t,"aria-label":`Go to slide ${e+1}`,tabIndex:f?0:-1,onClick:o?()=>o(e):void 0,sx:{width:a?i.line.height:i.line.width,height:a?i.line.width:i.line.height,borderRadius:i.line.height/2,backgroundColor:t?d:c,opacity:t?1:.5,transition:h?"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)":"none",transform:t?a?"scaleY(1.3)":"scaleX(1.3)":"scale(1)",transformOrigin:"center",...x(t)}},e);if(u==="dash"){const v=a?i.dash.height:i.dash.width,W=a?i.dash.height:i.dash.activeWidth,$=a?i.dash.width:i.dash.height,H=a?i.dash.activeWidth:i.dash.height;return r.jsx(n,{role:"tab","aria-selected":t,"aria-label":`Go to slide ${e+1}`,tabIndex:f?0:-1,onClick:o?()=>o(e):void 0,sx:{width:t?W:v,height:t?H:$,borderRadius:i.dash.height/2,backgroundColor:t?d:c,opacity:t?1:.5,transition:h?"all 0.35s cubic-bezier(0.4, 0, 0.2, 1)":"none",...x(t)}},e)}return null})})});E.__docgenInfo={description:`Indicator 컴포넌트

캐러셀, 슬라이더, 페이지네이션 등에서 현재 위치를 표시하는 인디케이터.
다양한 시각적 스타일과 인터랙션을 지원한다.

동작 방식:
1. total과 current로 전체 개수와 현재 위치 표시
2. variant에 따라 다른 시각적 스타일 적용 (dot, line, dash, fraction, progress)
3. onClick으로 특정 인덱스 클릭 시 이동 가능
4. 키보드 접근성 지원 (화살표 키로 탐색)

Props:
@param {number} total - 전체 아이템 개수 [Required]
@param {number} current - 현재 활성 인덱스 (0-based) [Required]
@param {string} variant - 인디케이터 스타일 ('dot' | 'line' | 'dash' | 'fraction' | 'progress') [Optional, 기본값: 'dot']
@param {string} direction - 배치 방향 ('horizontal' | 'vertical') [Optional, 기본값: 'horizontal']
@param {string} size - 크기 ('sm' | 'md' | 'lg') [Optional, 기본값: 'md']
@param {string} activeColor - 활성 색상 [Optional, 기본값: 'common.white']
@param {string} inactiveColor - 비활성 색상 [Optional, 기본값: 'rgba(255,255,255,0.4)']
@param {number} gap - 아이템 간 간격 (spacing unit) [Optional, 기본값: 1]
@param {boolean} hasAnimation - 애니메이션 활성화 [Optional, 기본값: true]
@param {boolean} hasHoverEffect - 호버 효과 활성화 [Optional, 기본값: true]
@param {function} onClick - 클릭 핸들러 (index) => void [Optional]
@param {function} onKeyNavigate - 키보드 탐색 핸들러 (direction: 'prev' | 'next') => void [Optional]
@param {object} sx - 추가 스타일 [Optional]

Example usage:
<Indicator
  total={5}
  current={2}
  variant="dot"
  onClick={(index) => setCurrentSlide(index)}
/>`,methods:[],displayName:"Indicator",props:{variant:{defaultValue:{value:"'dot'",computed:!1},required:!1},direction:{defaultValue:{value:"'horizontal'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},activeColor:{defaultValue:{value:"'common.white'",computed:!1},required:!1},inactiveColor:{defaultValue:{value:"'rgba(255,255,255,0.4)'",computed:!1},required:!1},gap:{defaultValue:{value:"1",computed:!1},required:!1},hasAnimation:{defaultValue:{value:"true",computed:!1},required:!1},hasHoverEffect:{defaultValue:{value:"true",computed:!1},required:!1}}};export{E as I};
