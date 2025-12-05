import{r,j as t}from"./iframe-q-XN_VZM.js";import{B as m}from"./Box-Dmtu8wWb.js";import{T as g}from"./Typography-C8IUsM00.js";import{C as S}from"./Chip-CBvZjQD4.js";import{I as A}from"./InputBase--W6Qy_gV.js";function W({tags:a=[],onChange:u,placeholder:w="Add tags...",maxTags:o=10,suggestions:c=[],variant:j="outlined",size:z="md",chipColor:I="default",label:b,isDisabled:n=!1,sx:q}){const[i,C]=r.useState(""),[f,v]=r.useState(!1),[T,s]=r.useState(!1),h=r.useRef(null),y={sm:{minHeight:36,chipSize:"small",fontSize:13,gap:.5,px:1},md:{minHeight:44,chipSize:"medium",fontSize:14,gap:1,px:1.5}},d=y[z]||y.md,p=r.useCallback(e=>{const l=e.trim().toLowerCase();l&&(a.length>=o||a.includes(l)||(u([...a,l]),C(""),s(!1)))},[a,o,u]),x=r.useCallback(e=>{u(a.filter(l=>l!==e))},[a,u]),V=r.useCallback(e=>{e.key==="Enter"||e.key===","?(e.preventDefault(),p(i)):e.key==="Backspace"&&!i&&a.length>0?x(a[a.length-1]):e.key==="Escape"&&(s(!1),h.current?.blur())},[i,a,p,x]),O=r.useCallback(e=>{const l=e.target.value;l.includes(",")?l.split(",").forEach(R=>p(R)):(C(l),s(l.length>0&&c.length>0))},[p,c]),B=r.useCallback(()=>{n||h.current?.focus()},[n]),k=c.filter(e=>e.toLowerCase().includes(i.toLowerCase())&&!a.includes(e.toLowerCase())),E=()=>{const e={display:"flex",flexWrap:"wrap",alignItems:"center",gap:d.gap,minHeight:d.minHeight,px:d.px,py:1,borderRadius:1,cursor:n?"not-allowed":"text",opacity:n?.5:1,transition:"all 0.2s ease"};return j==="filled"?{...e,backgroundColor:f?"action.selected":"action.hover",border:"2px solid transparent"}:{...e,backgroundColor:"background.paper",border:"1px solid",borderColor:f?"primary.main":"divider",boxShadow:f?"0 0 0 3px rgba(0, 0, 255, 0.1)":"none","&:hover":{borderColor:f?"primary.main":"text.secondary"}}};return t.jsxs(m,{sx:q,children:[b&&t.jsx(g,{variant:"caption",sx:{display:"block",mb:.5,fontWeight:600,color:"text.secondary"},children:b}),t.jsxs(m,{onClick:B,sx:E(),children:[a.map(e=>t.jsx(S,{label:`#${e}`,size:d.chipSize,color:I,onDelete:n?void 0:()=>x(e),sx:{fontWeight:500,"& .MuiChip-label":{px:1}}},e)),a.length<o&&t.jsx(A,{ref:h,value:i,onChange:O,onKeyDown:V,onFocus:()=>{v(!0),s(i.length>0&&c.length>0)},onBlur:()=>{v(!1),setTimeout(()=>s(!1),200)},placeholder:a.length===0?w:"",disabled:n,sx:{flex:1,minWidth:80,fontSize:d.fontSize,"& .MuiInputBase-input":{p:0,"&::placeholder":{color:"text.disabled",opacity:1}}}})]}),T&&k.length>0&&t.jsxs(m,{sx:{mt:.5,p:1,borderRadius:1,border:"1px solid",borderColor:"divider",backgroundColor:"background.paper",boxShadow:2},children:[t.jsx(g,{variant:"caption",color:"text.secondary",sx:{mb:.5,display:"block"},children:"Suggestions"}),t.jsx(m,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:k.slice(0,8).map(e=>t.jsx(S,{label:e,size:"small",variant:"outlined",onClick:()=>p(e),sx:{cursor:"pointer","&:hover":{backgroundColor:"action.hover"}}},e))})]}),o&&t.jsxs(g,{variant:"caption",sx:{display:"block",mt:.5,textAlign:"right",color:a.length>=o?"warning.main":"text.disabled"},children:[a.length," / ",o]})]})}W.__docgenInfo={description:`TagInput 컴포넌트

태그를 입력하고 Chip으로 변환하는 입력 필드.
키워드 관리 및 필터링에 사용되는 핵심 컴포넌트.

동작 방식:
1. 텍스트 입력 후 Enter 또는 쉼표로 태그 추가
2. 추가된 태그는 Chip 형태로 표시
3. Chip의 X 버튼 또는 Backspace로 태그 삭제
4. 중복 태그 자동 필터링

Props:
@param {string[]} tags - 현재 태그 목록 [Required]
@param {function} onChange - 태그 변경 핸들러 (tags[]) => void [Required]
@param {string} placeholder - 입력 플레이스홀더 [Optional, 기본값: 'Add tags...']
@param {number} maxTags - 최대 태그 개수 [Optional, 기본값: 10]
@param {string[]} suggestions - 자동완성 제안 목록 [Optional]
@param {string} variant - 스타일 변형 ('outlined' | 'filled') [Optional, 기본값: 'outlined']
@param {string} size - 크기 ('sm' | 'md') [Optional, 기본값: 'md']
@param {string} chipColor - 칩 색상 테마 [Optional, 기본값: 'default']
@param {string} label - 필드 레이블 [Optional]
@param {boolean} isDisabled - 비활성화 상태 [Optional, 기본값: false]
@param {object} sx - 추가 스타일 [Optional]

Example usage:
<TagInput
  tags={selectedTags}
  onChange={setSelectedTags}
  placeholder="Add style keywords..."
  maxTags={5}
/>`,methods:[],displayName:"TagInput",props:{tags:{defaultValue:{value:"[]",computed:!1},required:!1},placeholder:{defaultValue:{value:"'Add tags...'",computed:!1},required:!1},maxTags:{defaultValue:{value:"10",computed:!1},required:!1},suggestions:{defaultValue:{value:"[]",computed:!1},required:!1},variant:{defaultValue:{value:"'outlined'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},chipColor:{defaultValue:{value:"'default'",computed:!1},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},required:!1}}};export{W as T};
