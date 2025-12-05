import{r as z,j as r}from"./iframe-q-XN_VZM.js";import{C as q}from"./CardContainer-B3rD2Xhu.js";import{B as i}from"./Box-Dmtu8wWb.js";const S=z.forwardRef(function({layout:t="vertical",mediaPosition:s="start",mediaRatio:a="16/9",mediaSrc:o,mediaAlt:u="",mediaSlot:n,overlaySlot:l,children:d,contentPadding:c="md",contentAlign:p="start",isInteractive:m=!1,onClick:f,sx:g,...v},h){const y={none:0,sm:2,md:3,lg:4},x={start:"flex-start",center:"center",end:"flex-end"},C=()=>{switch(t){case"horizontal":return{display:"flex",flexDirection:s==="end"?"row-reverse":"row"};case"overlay":return{position:"relative"};case"vertical":default:return{display:"flex",flexDirection:s==="end"?"column-reverse":"column"}}},b=()=>{const e={position:"relative",overflow:"hidden",backgroundColor:"grey.200"};return t==="horizontal"?{...e,width:"40%",flexShrink:0,...a!=="auto"&&{aspectRatio:a}}:t==="overlay"?{...e,position:"absolute",inset:0,aspectRatio:"unset"}:{...e,width:"100%",...a!=="auto"&&{aspectRatio:a}}},O=()=>{const e={display:"flex",flexDirection:"column",alignItems:x[p],p:y[c]};return t==="horizontal"?{...e,flex:1,justifyContent:"center"}:t==="overlay"?{...e,position:"relative",zIndex:1,minHeight:200,justifyContent:"flex-end",background:"linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",color:"common.white"}:e},j=()=>{if(!(n||o)&&!l)return null;const w=a==="auto"?{display:"block",width:"100%",height:"auto",objectFit:"cover",transition:"transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)"}:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)"};return r.jsxs(i,{className:"custom-card-media",sx:b(),children:[n,!n&&o&&r.jsx(i,{component:"img",src:o,alt:u,sx:w}),l]})};return r.jsxs(q,{ref:h,variant:"outlined",padding:"none",radius:"md",onClick:f,isInteractive:m,sx:{...C(),...g},...v,children:[j(),d&&r.jsx(i,{sx:O(),children:d})]})});S.__docgenInfo={description:`CustomCard 컴포넌트

미디어 영역과 콘텐츠 영역으로 구성된 커스텀 카드 컴포넌트.
다양한 레이아웃(vertical, horizontal, overlay)을 지원한다.

동작 방식:
1. layout에 따라 미디어와 콘텐츠 배치 결정
2. 미디어 영역은 이미지, 비디오 등 시각적 콘텐츠 표시
3. 콘텐츠 영역은 텍스트, 버튼 등 정보 표시
4. overlaySlot을 통해 미디어 위에 액션 버튼, 배지 등 오버레이 가능

Props:
@param {string} layout - 레이아웃 타입 ('vertical' | 'horizontal' | 'overlay') [Optional, 기본값: 'vertical']
@param {string} mediaPosition - 미디어 위치 ('start' | 'end') [Optional, 기본값: 'start']
@param {string} mediaRatio - 미디어 영역 비율 ('1/1' | '4/3' | '16/9' | '21/9' | 'auto') [Optional, 기본값: '16/9']
@param {string} mediaSrc - 미디어 소스 URL [Optional]
@param {string} mediaAlt - 미디어 대체 텍스트 [Optional, 기본값: '']
@param {node} mediaSlot - 커스텀 미디어 요소 (mediaSrc보다 우선) [Optional]
@param {node} overlaySlot - 미디어 영역 위에 표시할 오버레이 요소 (액션 버튼, 배지 등) [Optional]
@param {node} children - 콘텐츠 영역 내용 [Optional]
@param {string} contentPadding - 콘텐츠 패딩 ('none' | 'sm' | 'md' | 'lg') [Optional, 기본값: 'md']
@param {string} contentAlign - 콘텐츠 정렬 ('start' | 'center' | 'end') [Optional, 기본값: 'start']
@param {boolean} isInteractive - 호버 효과 [Optional, 기본값: false]
@param {function} onClick - 클릭 핸들러 [Optional]
@param {object} sx - 추가 스타일 [Optional]

Example usage:
<CustomCard
  layout="horizontal"
  mediaSrc="/image.jpg"
  mediaRatio="4/3"
  overlaySlot={<ActionButtons />}
>
  <Typography variant="h6">Title</Typography>
  <Typography>Description</Typography>
</CustomCard>`,methods:[],displayName:"CustomCard",props:{layout:{defaultValue:{value:"'vertical'",computed:!1},required:!1},mediaPosition:{defaultValue:{value:"'start'",computed:!1},required:!1},mediaRatio:{defaultValue:{value:"'16/9'",computed:!1},required:!1},mediaAlt:{defaultValue:{value:"''",computed:!1},required:!1},contentPadding:{defaultValue:{value:"'md'",computed:!1},required:!1},contentAlign:{defaultValue:{value:"'start'",computed:!1},required:!1},isInteractive:{defaultValue:{value:"false",computed:!1},required:!1}}};export{S as C};
