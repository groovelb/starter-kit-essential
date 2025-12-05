import{r as i,j as e}from"./iframe-q-XN_VZM.js";import{u as N}from"./index-Ba9eRRNW.js";import{C as se,a as oe}from"./ChevronRight-C82aywmU.js";import{u as ne}from"./useTheme-CDdqLoBf.js";import{B as t}from"./Box-Dmtu8wWb.js";import{I as A}from"./IconButton-BSXa4zK8.js";import{T as o}from"./Typography-C8IUsM00.js";import{S as ie}from"./Stack-BQqDyOBu.js";import"./preload-helper-PPVm8Dsz.js";import"./useThemeProps-CFXzbazh.js";import"./createSvgIcon-CvYdi5pS.js";import"./memoTheme-BW0efeYW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-JbB1eRtB.js";import"./useTimeout-C6lNLwyh.js";import"./CircularProgress-K6SSDdjw.js";import"./styled-D6BANXgS.js";const c=i.forwardRef(function({items:a=[],renderItem:f,visible:u={xs:1,sm:2,md:3,lg:4},gap:d=16,step:w=1,hasNavigation:X=!0,hasDivider:G=!1,dividerColor:Q="divider",navPosition:M="inside",onIndexChange:W,sx:U,...Y},H){const D=ne(),J=N(D.breakpoints.down("sm")),E=N(D.breakpoints.between("sm","md")),R=N(D.breakpoints.between("md","lg")),z=N(D.breakpoints.up("lg")),O=i.useRef(null),[F,K]=i.useState(0),[Z,q]=i.useState(0),p=i.useMemo(()=>z?u.lg??u.xl??4:R?u.md??3:E?u.sm??2:u.xs??1,[E,R,z,u]),S=Math.max(0,(a.length||0)-p),l=Math.min(Z,S);i.useEffect(()=>{if(!O.current)return;const r=O.current,n=()=>K(r.clientWidth);n();let m;return"ResizeObserver"in window?(m=new ResizeObserver(n),m.observe(r)):window.addEventListener("resize",n),()=>{m?m.disconnect():window.removeEventListener("resize",n)}},[]);const x=i.useMemo(()=>{if(F<=0||p<=0)return 0;const r=d*(p-1),n=F-r,m=Math.floor(n/p);return Math.max(50,m)},[F,p,d]),ee=i.useCallback(()=>{const r=Math.max(0,l-w);q(r),W?.(r)},[l,w,W]),re=i.useCallback(()=>{const r=Math.min(S,l+w);q(r),W?.(r)},[l,S,w,W]),te=-(l*(x+d)),P=l<=0,_=l>=S,$=r=>({position:"absolute",top:"50%",transform:"translateY(-50%)",backgroundColor:"background.paper",border:"1px solid",borderColor:"divider",borderRadius:0,p:{xs:.75,sm:1},minWidth:"auto",color:r?"text.disabled":"text.primary",opacity:r?.4:1,transition:"all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",zIndex:2,boxShadow:"none","&:hover":{backgroundColor:r?"background.paper":"action.hover",borderColor:r?"divider":"text.primary",boxShadow:"none"},"&.Mui-disabled":{color:"text.disabled",backgroundColor:"background.paper"}}),B=M==="inside"?{xs:8,sm:12,md:16}:{xs:-40,sm:-48,md:-56},L=J?18:E?20:R?22:24;return e.jsxs(t,{ref:H,sx:{position:"relative",width:"100%",maxWidth:"100%",minWidth:0,overflow:M==="outside"?"visible":"hidden",...U},...Y,children:[e.jsx(t,{ref:O,sx:{overflow:"hidden",width:"100%",maxWidth:"100%",minWidth:0,position:"relative"},children:e.jsx(t,{sx:{display:"flex",flexDirection:"row",gap:`${d}px`,transform:`translate3d(${te}px, 0, 0)`,transition:"transform 350ms cubic-bezier(0.4, 0, 0.2, 1)",willChange:"transform",width:`${(x+d)*a.length-d}px`,maxWidth:`${(x+d)*a.length-d}px`},children:a.map((r,n)=>{const m=n===Math.min(l+p-1,a.length-1);return e.jsx(t,{sx:{flex:"0 0 auto",width:x,maxWidth:x,minWidth:x,position:"relative",overflow:"hidden","&::after":G&&!m?{content:'""',position:"absolute",right:`-${d/2}px`,top:0,bottom:0,width:"1px",backgroundColor:Q}:{}},children:f(r,n)},n)})})}),X&&a.length>p&&e.jsxs(e.Fragment,{children:[e.jsx(A,{onClick:ee,disabled:P,"aria-label":"Previous slide",sx:{...$(P),left:B},children:e.jsx(se,{sx:{fontSize:L}})}),e.jsx(A,{onClick:re,disabled:_,"aria-label":"Next slide",sx:{...$(_),right:B},children:e.jsx(oe,{sx:{fontSize:L}})})]})]})});c.__docgenInfo={description:`CarouselContainer 컴포넌트

반응형 멀티 아이템 캐러셀 컨테이너.
브레이크포인트별로 동시에 보이는 아이템 수를 조절하고,
좌우 네비게이션으로 아이템을 탐색한다.

동작 방식:
1. visible prop에 따라 브레이크포인트별 노출 개수 결정
2. 컨테이너 너비를 자동 감지하여 아이템 너비 계산
3. 좌우 화살표 클릭 시 step 단위로 슬라이드 이동
4. transform translate로 부드러운 애니메이션 적용

Props:
@param {Array} items - 렌더링할 아이템 배열 [Required]
@param {function} renderItem - 아이템 렌더러 (item, index) => ReactNode [Required]
@param {object} visible - 브레이크포인트별 노출 개수 {xs, sm, md, lg, xl} [Optional, 기본값: {xs:1, sm:2, md:3, lg:4}]
@param {number} gap - 아이템 간 간격 (px) [Optional, 기본값: 16]
@param {number} step - 한 번에 이동할 아이템 수 [Optional, 기본값: 1]
@param {boolean} hasNavigation - 네비게이션 버튼 표시 여부 [Optional, 기본값: true]
@param {boolean} hasDivider - 아이템 사이 구분선 표시 [Optional, 기본값: false]
@param {string} dividerColor - 구분선 색상 [Optional, 기본값: 'divider']
@param {string} navPosition - 네비게이션 위치 ('inside' | 'outside') [Optional, 기본값: 'inside']
@param {function} onIndexChange - 인덱스 변경 콜백 (index) => void [Optional]
@param {object} sx - 추가 스타일 [Optional]

Example usage:
<CarouselContainer
  items={products}
  renderItem={(item, idx) => <ProductCard {...item} />}
  visible={{ xs: 1, sm: 2, md: 3, lg: 4 }}
  gap={24}
/>`,methods:[],displayName:"CarouselContainer",props:{items:{defaultValue:{value:"[]",computed:!1},required:!1},visible:{defaultValue:{value:"{ xs: 1, sm: 2, md: 3, lg: 4 }",computed:!1},required:!1},gap:{defaultValue:{value:"16",computed:!1},required:!1},step:{defaultValue:{value:"1",computed:!1},required:!1},hasNavigation:{defaultValue:{value:"true",computed:!1},required:!1},hasDivider:{defaultValue:{value:"false",computed:!1},required:!1},dividerColor:{defaultValue:{value:"'divider'",computed:!1},required:!1},navPosition:{defaultValue:{value:"'inside'",computed:!1},required:!1}}};const T=s=>Array.from({length:s},(a,f)=>({id:f+1,title:`Item ${f+1}`,color:["#E3F2FD","#FCE4EC","#E8F5E9","#FFF3E0","#F3E5F5","#E0F7FA","#FFF8E1","#EFEBE9"][f%8]})),h=T(8),k=s=>e.jsxs(t,{sx:{backgroundColor:s.color,p:3,height:180,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[e.jsx(o,{variant:"h6",sx:{fontWeight:600},children:s.title}),e.jsxs(o,{variant:"caption",color:"text.secondary",children:["ID: ",s.id]})]}),V=s=>e.jsxs(t,{sx:{backgroundColor:"background.paper",border:"1px solid",borderColor:"divider",height:200,display:"flex",flexDirection:"column"},children:[e.jsx(t,{sx:{backgroundColor:s.color,height:120,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(o,{variant:"h4",sx:{fontWeight:700,opacity:.5},children:s.id})}),e.jsxs(t,{sx:{p:2},children:[e.jsx(o,{variant:"body2",sx:{fontWeight:600},children:s.title}),e.jsx(o,{variant:"caption",color:"text.secondary",children:"Sample description"})]})]});function ae(){return e.jsxs(t,{sx:{width:"100%",maxWidth:1200},children:[e.jsx(o,{variant:"body2",color:"text.secondary",sx:{mb:2},children:"화면 크기에 따라 보이는 아이템 수가 변경됩니다. (xs:1, sm:2, md:3, lg:4)"}),e.jsx(c,{items:h,renderItem:k,visible:{xs:1,sm:2,md:3,lg:4},gap:16})]})}function de(){return e.jsxs(t,{sx:{width:"100%",maxWidth:1e3},children:[e.jsx(o,{variant:"body2",color:"text.secondary",sx:{mb:2},children:"아이템 사이에 구분선이 표시됩니다."}),e.jsx(c,{items:h,renderItem:V,visible:{xs:1,sm:2,md:3},gap:24,hasDivider:!0,dividerColor:"rgba(0,0,0,0.12)"})]})}function le(){return e.jsxs(t,{sx:{width:"100%",maxWidth:900,px:8},children:[e.jsx(o,{variant:"body2",color:"text.secondary",sx:{mb:2},children:"네비게이션 버튼이 컨테이너 바깥에 위치합니다."}),e.jsx(c,{items:h,renderItem:k,visible:{xs:1,sm:2,md:3},gap:16,navPosition:"outside"})]})}function me(){const[s,a]=i.useState(0);return e.jsxs(t,{sx:{width:"100%",maxWidth:1e3},children:[e.jsxs(ie,{direction:"row",spacing:2,alignItems:"center",sx:{mb:2},children:[e.jsx(o,{variant:"body2",color:"text.secondary",children:"현재 인덱스:"}),e.jsx(o,{variant:"h6",sx:{fontWeight:600,color:"primary.main"},children:s})]}),e.jsx(c,{items:h,renderItem:V,visible:{xs:1,sm:2,md:3},gap:20,onIndexChange:a})]})}function ce(){return e.jsxs(t,{sx:{width:"100%",maxWidth:1e3},children:[e.jsx(o,{variant:"body2",color:"text.secondary",sx:{mb:2},children:"step=2: 한 번에 2개씩 이동합니다."}),e.jsx(c,{items:T(12),renderItem:k,visible:{xs:2,sm:3,md:4},gap:16,step:2})]})}function pe(){return e.jsxs(t,{sx:{width:"100%",maxWidth:1e3},children:[e.jsx(o,{variant:"body2",color:"text.secondary",sx:{mb:2},children:"네비게이션 버튼이 숨겨진 상태입니다. 터치 스와이프 등 다른 방식으로 제어할 때 사용합니다."}),e.jsx(c,{items:h.slice(0,4),renderItem:V,visible:{xs:1,sm:2,md:4},gap:16,hasNavigation:!1})]})}const Ee={title:"Custom Component/Common/CarouselContainer",component:c,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
## CarouselContainer

반응형 멀티 아이템 캐러셀 컨테이너 컴포넌트입니다.

### 특징
- 브레이크포인트별 노출 개수 설정
- 부드러운 슬라이드 애니메이션
- 아이템 간 구분선 지원
- 네비게이션 버튼 위치 커스터마이징
- 인덱스 변경 콜백 지원
        `}}},argTypes:{items:{description:"렌더링할 아이템 배열",table:{type:{summary:"Array"}}},renderItem:{description:"아이템 렌더러 함수 (item, index) => ReactNode",table:{type:{summary:"function"}}},visible:{description:"브레이크포인트별 노출 개수 {xs, sm, md, lg, xl}",control:"object",table:{type:{summary:"object"},defaultValue:{summary:"{xs:1, sm:2, md:3, lg:4}"}}},gap:{description:"아이템 간 간격 (px)",control:{type:"number",min:0,max:48},table:{type:{summary:"number"},defaultValue:{summary:16}}},step:{description:"한 번에 이동할 아이템 수",control:{type:"number",min:1,max:5},table:{type:{summary:"number"},defaultValue:{summary:1}}},hasNavigation:{description:"네비게이션 버튼 표시 여부",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},hasDivider:{description:"아이템 사이 구분선 표시 여부",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},dividerColor:{description:"구분선 색상",control:"color",table:{type:{summary:"string"},defaultValue:{summary:"divider"}}},navPosition:{description:"네비게이션 버튼 위치",control:"radio",options:["inside","outside"],table:{type:{summary:"'inside' | 'outside'"},defaultValue:{summary:"inside"}}},onIndexChange:{description:"인덱스 변경 콜백 함수",table:{type:{summary:"(index: number) => void"}}}}},v={args:{items:h,renderItem:k,visible:{xs:1,sm:2,md:3,lg:4},gap:16,step:1,hasNavigation:!0,hasDivider:!1,navPosition:"inside"}},b={render:()=>e.jsx(ae,{})},g={render:()=>e.jsx(de,{})},y={render:()=>e.jsx(le,{})},C={render:()=>e.jsx(me,{})},j={render:()=>e.jsx(ce,{})},I={render:()=>e.jsx(pe,{})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    renderItem: DefaultItemRenderer,
    visible: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    },
    gap: 16,
    step: 1,
    hasNavigation: true,
    hasDivider: false,
    navPosition: 'inside'
  }
}`,...v.parameters?.docs?.source},description:{story:"기본 캐러셀 - 반응형 아이템 노출",...v.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ResponsiveDemo />
}`,...b.parameters?.docs?.source},description:{story:"반응형 데모 - 화면 크기에 따른 변화",...b.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <WithDividerDemo />
}`,...g.parameters?.docs?.source},description:{story:"구분선이 있는 캐러셀",...g.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <OutsideNavigationDemo />
}`,...y.parameters?.docs?.source},description:{story:"외부 네비게이션 버튼",...y.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <IndexChangeDemo />
}`,...C.parameters?.docs?.source},description:{story:"인덱스 변경 콜백 데모",...C.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <StepDemo />
}`,...j.parameters?.docs?.source},description:{story:"Step 설정 데모 - 한 번에 여러 개 이동",...j.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <NoNavigationDemo />
}`,...I.parameters?.docs?.source},description:{story:"네비게이션 숨김",...I.parameters?.docs?.description}}};const Re=["Default","Responsive","WithDivider","OutsideNavigation","WithIndexChange","StepMovement","NoNavigation"];export{v as Default,I as NoNavigation,y as OutsideNavigation,b as Responsive,j as StepMovement,g as WithDivider,C as WithIndexChange,Re as __namedExportsOrder,Ee as default};
