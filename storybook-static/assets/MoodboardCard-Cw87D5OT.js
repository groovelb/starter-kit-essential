import{j as o}from"./iframe-q-XN_VZM.js";import{c as s}from"./createSvgIcon-CvYdi5pS.js";import{C as w}from"./CustomCard-BaRKR-AP.js";import{B as e}from"./Box-Dmtu8wWb.js";import{T as r}from"./Typography-C8IUsM00.js";import{I as g}from"./IconButton-BSXa4zK8.js";const k=s(o.jsx("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"})),z=s(o.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"})),S=s(o.jsx("path",{d:"M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2m-11-4 2.03 2.71L16 11l4 5H8zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6z"}));function I({id:l,name:b,description:i,items:c=[],createdAt:d,onClick:u,onEdit:m,onDelete:p,sx:f,...y}){const x=c.slice(0,4),h=c.length,j=t=>t?new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",v=o.jsx(e,{className:"thumbnail-grid",sx:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridTemplateRows:"repeat(2, 1fr)",gap:"2px",width:"100%",height:"100%",backgroundColor:"grey.200",transition:"transform 0.3s ease"},children:x.length>0?[...Array(4)].map((t,n)=>{const a=x[n];return o.jsx(e,{sx:{position:"relative",overflow:"hidden",backgroundColor:"grey.100"},children:a?o.jsx(e,{component:"img",src:a.thumbnail||a.src?.medium,alt:a.title||`Image ${n+1}`,sx:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}):o.jsx(e,{sx:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"grey.100"}})},n)}):o.jsxs(e,{sx:{gridColumn:"1 / -1",gridRow:"1 / -1",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"grey.100",color:"grey.400"},children:[o.jsx(S,{sx:{fontSize:48,mb:1}}),o.jsx(r,{variant:"caption",color:"inherit",children:"No images yet"})]})}),C=o.jsxs(o.Fragment,{children:[o.jsxs(e,{className:"moodboard-actions",sx:{position:"absolute",top:8,right:8,display:"flex",gap:.5,opacity:0,transition:"opacity 0.2s ease"},children:[m&&o.jsx(g,{size:"small",onClick:t=>{t.stopPropagation(),m(l)},sx:{bgcolor:"background.paper",boxShadow:"0 2px 8px rgba(0,0,0,0.15)","&:hover":{bgcolor:"white"}},children:o.jsx(k,{fontSize:"small"})}),p&&o.jsx(g,{size:"small",onClick:t=>{t.stopPropagation(),p(l)},sx:{bgcolor:"background.paper",boxShadow:"0 2px 8px rgba(0,0,0,0.15)","&:hover":{bgcolor:"error.light",color:"white"}},children:o.jsx(z,{fontSize:"small"})})]}),o.jsx(e,{sx:{position:"absolute",top:8,left:8,px:1.5,py:.5,borderRadius:1,bgcolor:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)"},children:o.jsxs(r,{variant:"caption",sx:{color:"white",fontWeight:600,fontSize:"0.7rem"},children:[h," ",h===1?"item":"items"]})})]});return o.jsxs(w,{layout:"vertical",mediaSlot:v,mediaRatio:"1/1",contentPadding:"md",overlaySlot:C,onClick:u,sx:{cursor:"pointer",transition:"transform 0.2s ease, box-shadow 0.2s ease",border:"none","&:hover":{transform:"translateY(-4px)",boxShadow:"0 12px 24px -8px rgba(0,0,0,0.15)","& .moodboard-actions":{opacity:1},"& .thumbnail-grid":{transform:"scale(1.02)"}},...f},...y,children:[o.jsx(r,{variant:"subtitle1",sx:{fontWeight:700,lineHeight:1.3,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",mb:i?.5:0},children:b}),i&&o.jsx(r,{variant:"body2",color:"text.secondary",sx:{display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",lineHeight:1.4,mb:1.5},children:i}),d&&o.jsxs(r,{variant:"caption",sx:{color:"text.disabled",fontSize:"0.75rem"},children:["Created ",j(d)]})]})}I.__docgenInfo={description:`MoodboardCard 컴포넌트

무드보드 컬렉션을 표시하는 카드. CustomCard를 확장하여 구현.
2×2 썸네일 그리드로 컬렉션 미리보기를 제공하고,
무드보드의 메타데이터(이름, 설명, 아이템 수, 생성일)를 표시.

동작 방식:
1. 썸네일 그리드: items 배열의 처음 4개 이미지를 2×2 그리드로 표시
2. 이미지가 4개 미만일 경우: 빈 슬롯은 회색 배경으로 표시
3. 이미지가 0개일 경우: 전체 placeholder 아이콘 표시
4. Hover 시: 카드가 살짝 위로 이동하고 액션 버튼 표시

Props:
@param {string} id - 무드보드 ID [Required]
@param {string} name - 무드보드 이름 [Required]
@param {string} description - 무드보드 설명 [Optional]
@param {Array} items - 무드보드 내 아이템 배열 [Required]
@param {string} createdAt - 생성 날짜 (YYYY-MM-DD) [Optional]
@param {function} onClick - 카드 클릭 핸들러 [Optional]
@param {function} onEdit - 편집 버튼 핸들러 [Optional]
@param {function} onDelete - 삭제 버튼 핸들러 [Optional]
@param {object} sx - 추가 스타일 [Optional]

Example usage:
<MoodboardCard
  id="board-1"
  name="Abstract Art"
  description="Abstract and geometric artwork collection"
  items={moodboard.items}
  createdAt="2024-10-15"
  onClick={() => navigate(\`/moodboards/\${id}\`)}
  onEdit={() => handleEdit(id)}
/>`,methods:[],displayName:"MoodboardCard",props:{items:{defaultValue:{value:"[]",computed:!1},required:!1}}};export{S as C,I as M};
