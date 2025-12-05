import{j as o}from"./iframe-q-XN_VZM.js";import{F as g}from"./FavoriteBorder-DF40WW_l.js";import{A as h}from"./Add-DsnlUBfa.js";import{C as x}from"./CustomCard-BaRKR-AP.js";import{T as b}from"./Typography-C8IUsM00.js";import{B as s}from"./Box-Dmtu8wWb.js";import{C as y}from"./Chip-CBvZjQD4.js";import{I as i}from"./IconButton-BSXa4zK8.js";function C({src:n,title:e,tags:r=[],onLike:l,onAddToBoard:p,hideActions:d=!1,customOverlay:m,sx:c,...u}){const f=o.jsxs(s,{className:"action-buttons",sx:{position:"absolute",top:8,right:8,display:"flex",gap:.5,opacity:0,transition:"opacity 0.2s"},children:[o.jsx(i,{size:"small",onClick:a=>{a.stopPropagation(),l?.()},sx:{bgcolor:"background.paper",boxShadow:1,"&:hover":{bgcolor:"white"}},children:o.jsx(g,{fontSize:"small"})}),o.jsx(i,{size:"small",onClick:a=>{a.stopPropagation(),p?.()},sx:{bgcolor:"primary.main",color:"white",boxShadow:1,"&:hover":{bgcolor:"primary.dark"}},children:o.jsx(h,{fontSize:"small"})})]}),t=e||r.length>0;return o.jsx(x,{layout:"vertical",mediaSrc:n,mediaAlt:e||"Image asset",mediaRatio:"auto",contentPadding:t?"sm":"none",overlaySlot:d?m:f,sx:{cursor:"pointer",transition:"transform 0.2s","&:hover":{transform:"translateY(-4px)","& .action-buttons":{opacity:1}},border:"none",...c},...u,children:t&&o.jsxs(o.Fragment,{children:[e&&o.jsx(b,{variant:"body2",sx:{fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e}),r.length>0&&o.jsx(s,{sx:{display:"flex",flexWrap:"wrap",gap:.5,mt:e?.5:0},children:r.slice(0,3).map(a=>o.jsx(y,{label:a,size:"small",sx:{height:20,fontSize:"0.7rem"}},a))})]})})}C.__docgenInfo={description:`ImageCard 컴포넌트

메인 그리드의 기본 아이템. CustomCard를 확장하여 구현.
Hover 시 위치 변경 효과와 액션 버튼 표시.

동작 방식:
1. 사용자가 카드에 마우스를 올리면 카드가 위로 살짝 이동
2. Hover 상태에서 우측 상단에 좋아요/추가 버튼 표시
3. 카드 하단에 제목과 태그 정보 항상 표시

Props:
@param {string} src - 이미지 URL [Required]
@param {string} title - 이미지 제목/설명 [Optional]
@param {string[]} tags - 관련 태그 목록 [Optional]
@param {function} onLike - 좋아요 버튼 클릭 핸들러 [Optional]
@param {function} onAddToBoard - 무드보드 추가 버튼 클릭 핸들러 [Optional]
@param {boolean} hideActions - 기본 액션 버튼 숨김 여부 [Optional, 기본값: false]
@param {node} customOverlay - 커스텀 오버레이 요소 (hideActions와 함께 사용) [Optional]
@param {object} sx - 추가 스타일 [Optional]

Example usage:
<ImageCard
  src="/image.jpg"
  title="Beautiful landscape"
  tags={['nature', 'landscape']}
  onLike={() => handleLike()}
  onAddToBoard={() => handleAdd()}
/>

// 커스텀 오버레이 사용 (MoodboardsPage 등)
<ImageCard
  src="/image.jpg"
  hideActions
  customOverlay={<MyCustomButtons />}
/>`,methods:[],displayName:"ImageCard",props:{tags:{defaultValue:{value:"[]",computed:!1},required:!1},hideActions:{defaultValue:{value:"false",computed:!1},required:!1}}};export{C as I};
