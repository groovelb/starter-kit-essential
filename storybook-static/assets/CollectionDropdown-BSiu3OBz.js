import{r as s,u as A,j as e,c as W}from"./iframe-q-XN_VZM.js";import{c as m}from"./createSvgIcon-CvYdi5pS.js";import{A as F}from"./Add-DsnlUBfa.js";import{B as i}from"./Box-Dmtu8wWb.js";import{B as N}from"./Button-Coknce8O.js";import{L as R,M as V}from"./Select-DlpVDPsS.js";import{T as I}from"./Typography-C8IUsM00.js";import{D as b}from"./Divider-DePyv9fJ.js";import{g as q,M as L}from"./MenuItem-BnGKUDh9.js";import{s as E,c as P,m as H}from"./memoTheme-BW0efeYW.js";import{L as S}from"./ListItemText-DtuXspMo.js";import{T as K}from"./TextField-DgQ3k6VB.js";import{I as U}from"./IconButton-BSXa4zK8.js";const _=o=>{const{alignItems:a,classes:r}=o;return P({root:["root",a==="flex-start"&&"alignItemsFlexStart"]},q,r)},$=E("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:r}=o;return[a.root,r.alignItems==="flex-start"&&a.alignItemsFlexStart]}})(H(({theme:o})=>({minWidth:56,color:(o.vars||o).palette.action.active,flexShrink:0,display:"inline-flex",variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}))),w=s.forwardRef(function(a,r){const n=A({props:a,name:"MuiListItemIcon"}),{className:p,...u}=n,x=s.useContext(R),d={...n,alignItems:x.alignItems},h=_(d);return e.jsx($,{className:W(h.root,p),ownerState:d,ref:r,...u})}),k=m(e.jsx("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8z"})),z=m(e.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})),G=m(e.jsx("path",{d:"M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3z"})),J=m(e.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}));function Q({collections:o=[],selectedId:a,onSelect:r,onCreate:n,buttonLabel:p="Add to Board",variant:u="contained",size:x="medium",isFullWidth:d=!1,sx:h}){const[C,v]=s.useState(null),[B,f]=s.useState(!1),[l,g]=s.useState(""),y=!!C,M=s.useCallback(t=>{v(t.currentTarget)},[]),c=s.useCallback(()=>{v(null),f(!1),g("")},[]),T=s.useCallback(t=>{r(t),c()},[r,c]),D=s.useCallback(()=>{f(!0)},[]),j=s.useCallback(()=>{l.trim()&&n&&(n(l.trim()),c())},[l,n,c]),O=s.useCallback(t=>{t.key==="Enter"?j():t.key==="Escape"&&(f(!1),g(""))},[j]);return e.jsxs(i,{sx:h,children:[e.jsx(N,{variant:u,size:x,onClick:M,endIcon:e.jsx(J,{}),fullWidth:d,sx:{textTransform:"none",fontWeight:600},"aria-controls":y?"collection-menu":void 0,"aria-haspopup":"true","aria-expanded":y?"true":void 0,children:p}),e.jsxs(V,{id:"collection-menu",anchorEl:C,open:y,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},slotProps:{paper:{sx:{minWidth:240,maxWidth:320,maxHeight:400,mt:.5}}},children:[e.jsxs(i,{sx:{px:2,py:1.5},children:[e.jsx(I,{variant:"subtitle2",sx:{fontWeight:700},children:"Select Moodboard"}),e.jsxs(I,{variant:"caption",color:"text.secondary",children:[o.length," boards available"]})]}),e.jsx(b,{}),e.jsx(i,{sx:{maxHeight:240,overflow:"auto"},children:o.length===0?e.jsxs(i,{sx:{px:2,py:3,textAlign:"center"},children:[e.jsx(k,{sx:{fontSize:40,color:"text.disabled",mb:1}}),e.jsx(I,{variant:"body2",color:"text.secondary",children:"No moodboards yet"})]}):o.map(t=>e.jsxs(L,{onClick:()=>T(t.id),selected:t.id===a,sx:{py:1.5,"&.Mui-selected":{backgroundColor:"primary.lighter"}},children:[e.jsx(w,{children:e.jsx(k,{sx:{color:t.id===a?"primary.main":"text.secondary"}})}),e.jsx(S,{primary:t.name,secondary:`${t.count||0} items`,primaryTypographyProps:{fontWeight:t.id===a?600:400}}),t.id===a&&e.jsx(z,{sx:{color:"primary.main",fontSize:20}})]},t.id))}),e.jsx(b,{}),n&&e.jsx(i,{sx:{p:1},children:B?e.jsxs(i,{sx:{display:"flex",alignItems:"center",gap:1,px:1},children:[e.jsx(K,{autoFocus:!0,size:"small",placeholder:"Board name",value:l,onChange:t=>g(t.target.value),onKeyDown:O,sx:{flex:1},inputProps:{maxLength:50}}),e.jsx(U,{size:"small",color:"primary",onClick:j,disabled:!l.trim(),children:e.jsx(z,{})})]}):e.jsxs(L,{onClick:D,sx:{borderRadius:1},children:[e.jsx(w,{children:e.jsx(G,{sx:{color:"primary.main"}})}),e.jsx(S,{primary:"Create new board",primaryTypographyProps:{color:"primary.main",fontWeight:600}}),e.jsx(F,{sx:{color:"primary.main",fontSize:20}})]})})]})]})}Q.__docgenInfo={description:`CollectionDropdown 컴포넌트

아이템을 추가할 무드보드/컬렉션을 선택하는 드롭다운 메뉴.
새 컬렉션 생성 기능 포함.

동작 방식:
1. 버튼 클릭으로 드롭다운 메뉴 열기
2. 기존 컬렉션 목록에서 선택
3. "새 컬렉션 만들기"로 즉석 생성 가능
4. 선택 시 onSelect 콜백 호출

Props:
@param {Array} collections - 컬렉션 목록 [{ id, name, count }] [Required]
@param {string} selectedId - 현재 선택된 컬렉션 ID [Optional]
@param {function} onSelect - 컬렉션 선택 핸들러 (collectionId) => void [Required]
@param {function} onCreate - 새 컬렉션 생성 핸들러 (name) => void [Optional]
@param {string} buttonLabel - 버튼 레이블 [Optional, 기본값: 'Add to Board']
@param {string} variant - 버튼 스타일 ('contained' | 'outlined' | 'text') [Optional, 기본값: 'contained']
@param {string} size - 버튼 크기 ('small' | 'medium' | 'large') [Optional, 기본값: 'medium']
@param {boolean} isFullWidth - 전체 너비 사용 [Optional, 기본값: false]
@param {object} sx - 추가 스타일 [Optional]

Example usage:
<CollectionDropdown
  collections={moodboards}
  selectedId={currentBoard?.id}
  onSelect={handleAddToBoard}
  onCreate={handleCreateBoard}
/>`,methods:[],displayName:"CollectionDropdown",props:{collections:{defaultValue:{value:"[]",computed:!1},required:!1},buttonLabel:{defaultValue:{value:"'Add to Board'",computed:!1},required:!1},variant:{defaultValue:{value:"'contained'",computed:!1},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},required:!1},isFullWidth:{defaultValue:{value:"false",computed:!1},required:!1}}};export{Q as C,k as F,w as L};
