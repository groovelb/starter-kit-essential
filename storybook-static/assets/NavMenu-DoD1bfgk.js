import{r as I,j as t}from"./iframe-q-XN_VZM.js";import{B as r}from"./Box-Dmtu8wWb.js";import{T as C}from"./Typography-C8IUsM00.js";const j=I.forwardRef(function({items:s=[],activeId:u,orientation:f="horizontal",variant:d="default",size:m="md",isIconOnly:o=!1,hasIconStart:c=!0,onItemClick:h,sx:g,...x},b){const p={sm:{padding:"6px 12px",fontSize:13,iconSize:18,gap:.75},md:{padding:"8px 16px",fontSize:14,iconSize:20,gap:1},lg:{padding:"12px 20px",fontSize:15,iconSize:22,gap:1.25}},a=p[m]||p.md,i=f==="vertical",y=()=>({display:"flex",flexDirection:i?"column":"row",alignItems:i?"stretch":"center",gap:i?.5:1}),z=(e,n)=>({display:"flex",alignItems:"center",justifyContent:o?"center":"flex-start",gap:a.gap,padding:a.padding,fontSize:a.fontSize,fontWeight:e?600:400,textDecoration:"none",borderRadius:d==="pills"?99:1,cursor:n?"not-allowed":"pointer",opacity:n?.5:1,transition:"all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",whiteSpace:"nowrap",userSelect:"none"}),v=e=>{switch(d){case"pills":return{backgroundColor:e?"primary.main":"transparent",color:e?"primary.contrastText":"text.primary","&:hover":{backgroundColor:e?"primary.dark":"action.hover"}};case"underline":return{backgroundColor:"transparent",color:e?"primary.main":"text.secondary",borderBottom:"2px solid",borderColor:e?"primary.main":"transparent",borderRadius:0,"&:hover":{color:"primary.main",borderColor:e?"primary.main":"grey.300"}};case"default":default:return{backgroundColor:e?"action.selected":"transparent",color:e?"primary.main":"text.primary","&:hover":{backgroundColor:e?"action.selected":"action.hover"}}}},S=e=>{e.disabled||h?.(e)};return s.length===0?null:t.jsx(r,{ref:b,component:"nav",role:"navigation",sx:{...y(),...g},...x,children:s.map(e=>{const n=e.id===u,l=e.disabled||!1;return t.jsxs(r,{component:e.href?"a":"button",href:e.href,onClick:()=>S(e),role:"menuitem","aria-current":n?"page":void 0,"aria-disabled":l,sx:{...z(n,l),...v(n),border:"none",background:"none",font:"inherit"},children:[e.icon&&c&&t.jsx(r,{sx:{display:"flex",alignItems:"center",justifyContent:"center",width:a.iconSize,height:a.iconSize,"& > svg":{width:"100%",height:"100%"}},children:e.icon}),!o&&t.jsx(C,{component:"span",sx:{fontSize:"inherit",fontWeight:"inherit",lineHeight:1.2},children:e.label}),e.icon&&!c&&!o&&t.jsx(r,{sx:{display:"flex",alignItems:"center",justifyContent:"center",width:a.iconSize,height:a.iconSize,"& > svg":{width:"100%",height:"100%"}},children:e.icon}),e.icon&&o&&t.jsx(r,{sx:{display:"flex",alignItems:"center",justifyContent:"center",width:a.iconSize,height:a.iconSize,"& > svg":{width:"100%",height:"100%"}},children:e.icon})]},e.id)})})});j.__docgenInfo={description:`NavMenu 컴포넌트

헤더, 사이드바, 드로어에서 사용되는 네비게이션 메뉴 컴포넌트.
아이콘과 텍스트 조합을 지원하며 다양한 레이아웃에 적응한다.

동작 방식:
1. items 배열로 메뉴 아이템 정의
2. orientation에 따라 가로/세로 배치
3. activeId로 현재 활성 메뉴 표시
4. onItemClick으로 메뉴 선택 처리

Props:
@param {Array} items - 메뉴 아이템 배열 [{ id, label, icon, href, disabled }] [Required]
@param {string} activeId - 현재 활성 아이템 ID [Optional]
@param {string} orientation - 배치 방향 ('horizontal' | 'vertical') [Optional, 기본값: 'horizontal']
@param {string} variant - 스타일 변형 ('default' | 'pills' | 'underline') [Optional, 기본값: 'default']
@param {string} size - 크기 ('sm' | 'md' | 'lg') [Optional, 기본값: 'md']
@param {boolean} isIconOnly - 아이콘만 표시 [Optional, 기본값: false]
@param {boolean} hasIconStart - 아이콘을 텍스트 앞에 배치 [Optional, 기본값: true]
@param {function} onItemClick - 아이템 클릭 핸들러 (item) => void [Optional]
@param {object} sx - 추가 스타일 [Optional]

Example usage:
<NavMenu
  items={[
    { id: 'home', label: 'Home', icon: <HomeIcon /> },
    { id: 'about', label: 'About', icon: <InfoIcon /> },
  ]}
  activeId="home"
  onItemClick={(item) => navigate(item.href)}
/>`,methods:[],displayName:"NavMenu",props:{items:{defaultValue:{value:"[]",computed:!1},required:!1},orientation:{defaultValue:{value:"'horizontal'",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},isIconOnly:{defaultValue:{value:"false",computed:!1},required:!1},hasIconStart:{defaultValue:{value:"true",computed:!1},required:!1}}};export{j as N};
