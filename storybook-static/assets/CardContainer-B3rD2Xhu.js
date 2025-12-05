import{r as b,j as x}from"./iframe-q-XN_VZM.js";import{B as v}from"./Box-Dmtu8wWb.js";const C=b.forwardRef(function({variant:a="outlined",padding:n="md",radius:i="md",isInteractive:d=!1,isSelected:l=!1,onClick:r,children:s,sx:p,...u},c){const o={none:0,sm:2,md:3,lg:4},t={none:0,sm:1,md:2,lg:3},m=()=>{const e={position:"relative",overflow:"hidden"};switch(a){case"elevation":return{...e,backgroundColor:"background.paper",boxShadow:"0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)"};case"ghost":return{...e,backgroundColor:"transparent",border:"none"};case"filled":return{...e,backgroundColor:"grey.100",border:"none"};case"outlined":default:return{...e,backgroundColor:"background.paper",border:"1px solid",borderColor:"divider"}}},g=()=>{if(!d&&!r)return{};const e={outlined:{borderColor:"primary.main",boxShadow:"0 0 0 1px rgba(25, 118, 210, 0.2)"},elevation:{boxShadow:"0 4px 12px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08)",transform:"translateY(-2px)"},ghost:{backgroundColor:"action.hover"},filled:{backgroundColor:"grey.200"}};return{cursor:"pointer",transition:"all 0.2s cubic-bezier(0.4, 0, 0.2, 1)","&:hover":e[a]||e.outlined,"&:active":{transform:"scale(0.98)"}}},f=()=>l?{borderColor:"primary.main",boxShadow:"0 0 0 2px rgba(25, 118, 210, 0.3)","&::before":{content:'""',position:"absolute",top:0,left:0,right:0,height:3,backgroundColor:"primary.main"}}:{};return x.jsx(v,{ref:c,onClick:r,sx:{p:o[n]??o.md,borderRadius:t[i]??t.md,...m(),...g(),...f(),...p},...u,children:s})});C.__docgenInfo={description:`CardContainer 컴포넌트

자주 사용되는 카드 스타일을 미리 정의한 래퍼 컴포넌트.
outlined, elevation, ghost 등 다양한 변형을 지원한다.

동작 방식:
1. variant에 따라 미리 정의된 스타일 적용
2. hover 상태에서 시각적 피드백 제공
3. sx prop으로 추가 커스터마이징 가능

Props:
@param {string} variant - 카드 스타일 ('outlined' | 'elevation' | 'ghost' | 'filled') [Optional, 기본값: 'outlined']
@param {string} padding - 내부 패딩 ('none' | 'sm' | 'md' | 'lg') [Optional, 기본값: 'md']
@param {string} radius - 모서리 둥글기 ('none' | 'sm' | 'md' | 'lg') [Optional, 기본값: 'md']
@param {boolean} isInteractive - 호버 효과 활성화 [Optional, 기본값: false]
@param {boolean} isSelected - 선택 상태 표시 [Optional, 기본값: false]
@param {function} onClick - 클릭 핸들러 [Optional]
@param {node} children - 카드 내용 [Required]
@param {object} sx - 추가 스타일 [Optional]

Example usage:
<CardContainer variant="elevation" padding="lg" isInteractive>
  <Typography>Card Content</Typography>
</CardContainer>`,methods:[],displayName:"CardContainer",props:{variant:{defaultValue:{value:"'outlined'",computed:!1},required:!1},padding:{defaultValue:{value:"'md'",computed:!1},required:!1},radius:{defaultValue:{value:"'md'",computed:!1},required:!1},isInteractive:{defaultValue:{value:"false",computed:!1},required:!1},isSelected:{defaultValue:{value:"false",computed:!1},required:!1}}};export{C};
