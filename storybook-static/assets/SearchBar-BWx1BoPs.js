import{j as e,r as s}from"./iframe-q-XN_VZM.js";import{S as j}from"./Search-B6cHP2qc.js";import{c as f}from"./createSvgIcon-CvYdi5pS.js";import{B as V}from"./Box-Dmtu8wWb.js";import{I as d}from"./IconButton-BSXa4zK8.js";import{I}from"./InputBase--W6Qy_gV.js";const O=f(e.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),B=f(e.jsx("path",{d:"M3 17v2h6v-2zM3 5v2h10V5zm10 16v-2h8v-2h-8v-2h-2v6zM7 9v2H3v2h4v2h2V9zm14 4v-2H11v2zm-6-4h2V7h4V5h-4V3h-2z"}));function F({value:o="",placeholder:u="Search...",onChange:t,onSearch:i,onClear:c,hasFilter:x=!1,isFilterActive:n=!1,onFilterToggle:g,variant:S="outlined",size:v="md",isFullWidth:p=!1,sx:b}){const[l,m]=s.useState(!1),h={sm:{height:36,fontSize:13,px:1.5,iconSize:"small"},md:{height:44,fontSize:14,px:2,iconSize:"medium"},lg:{height:52,fontSize:15,px:2.5,iconSize:"medium"}},r=h[v]||h.md,z=()=>{const a={display:"flex",alignItems:"center",height:r.height,borderRadius:2,transition:"all 0.2s ease"};switch(S){case"filled":return{...a,backgroundColor:l?"action.selected":"action.hover",border:"2px solid transparent","&:hover":{backgroundColor:"action.selected"}};case"minimal":return{...a,backgroundColor:"transparent",borderBottom:"2px solid",borderColor:l?"primary.main":"divider",borderRadius:0,"&:hover":{borderColor:"text.secondary"}};case"outlined":default:return{...a,backgroundColor:"background.paper",border:"1px solid",borderColor:l?"primary.main":"divider",boxShadow:l?"0 0 0 3px rgba(0, 0, 255, 0.1)":"none","&:hover":{borderColor:l?"primary.main":"text.secondary"}}}},y=s.useCallback(a=>{a.key==="Enter"&&i&&i(o),a.key==="Escape"&&a.target.blur()},[i,o]),C=s.useCallback(()=>{c?c():t&&t("")},[c,t]),k=s.useCallback(()=>{i&&i(o)},[i,o]);return e.jsxs(V,{sx:{width:p?"100%":"auto",minWidth:p?"auto":280,...z(),...b},children:[e.jsx(d,{size:r.iconSize,onClick:k,sx:{ml:.5,color:l?"primary.main":"text.secondary"},"aria-label":"search",children:e.jsx(j,{fontSize:r.iconSize})}),e.jsx(I,{value:o,onChange:a=>t?.(a.target.value),onKeyDown:y,onFocus:()=>m(!0),onBlur:()=>m(!1),placeholder:u,sx:{flex:1,fontSize:r.fontSize,"& .MuiInputBase-input":{py:1,"&::placeholder":{color:"text.disabled",opacity:1}}},inputProps:{"aria-label":u}}),o&&e.jsx(d,{size:r.iconSize,onClick:C,sx:{color:"text.secondary","&:hover":{color:"text.primary"}},"aria-label":"clear search",children:e.jsx(O,{fontSize:r.iconSize})}),x&&e.jsx(d,{size:r.iconSize,onClick:g,sx:{mr:.5,color:n?"primary.main":"text.secondary",backgroundColor:n?"primary.lighter":"transparent","&:hover":{backgroundColor:n?"primary.light":"action.hover"}},"aria-label":"toggle filter","aria-pressed":n,children:e.jsx(B,{fontSize:r.iconSize})})]})}F.__docgenInfo={description:`SearchBar 컴포넌트

키워드 검색을 위한 세련된 검색 입력 필드.
실시간 검색, 클리어 버튼, 필터 토글 기능을 제공한다.

동작 방식:
1. 사용자가 텍스트를 입력하면 onChange 콜백 호출
2. 입력값이 있으면 클리어(X) 버튼 표시
3. Enter 키 또는 검색 아이콘 클릭 시 onSearch 콜백 호출
4. 필터 아이콘 클릭 시 onFilterToggle 콜백 호출

Props:
@param {string} value - 현재 검색어 값 [Optional, 기본값: '']
@param {string} placeholder - 플레이스홀더 텍스트 [Optional, 기본값: 'Search...']
@param {function} onChange - 입력 변경 핸들러 (value) => void [Optional]
@param {function} onSearch - 검색 실행 핸들러 (value) => void [Optional]
@param {function} onClear - 클리어 버튼 클릭 핸들러 [Optional]
@param {boolean} hasFilter - 필터 버튼 표시 여부 [Optional, 기본값: false]
@param {boolean} isFilterActive - 필터 활성화 상태 [Optional, 기본값: false]
@param {function} onFilterToggle - 필터 토글 핸들러 [Optional]
@param {string} variant - 스타일 변형 ('outlined' | 'filled' | 'minimal') [Optional, 기본값: 'outlined']
@param {string} size - 크기 ('sm' | 'md' | 'lg') [Optional, 기본값: 'md']
@param {boolean} isFullWidth - 전체 너비 사용 여부 [Optional, 기본값: false]
@param {object} sx - 추가 스타일 [Optional]

Example usage:
<SearchBar
  value={searchTerm}
  placeholder="Search references..."
  onChange={setSearchTerm}
  onSearch={handleSearch}
  hasFilter
/>`,methods:[],displayName:"SearchBar",props:{value:{defaultValue:{value:"''",computed:!1},required:!1},placeholder:{defaultValue:{value:"'Search...'",computed:!1},required:!1},hasFilter:{defaultValue:{value:"false",computed:!1},required:!1},isFilterActive:{defaultValue:{value:"false",computed:!1},required:!1},variant:{defaultValue:{value:"'outlined'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},isFullWidth:{defaultValue:{value:"false",computed:!1},required:!1}}};export{F as S};
