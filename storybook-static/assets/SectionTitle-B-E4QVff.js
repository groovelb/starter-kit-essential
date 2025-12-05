import{j as e}from"./iframe-q-XN_VZM.js";import{u as x}from"./useTheme-CDdqLoBf.js";import{C as c}from"./Container-q5yveaGP.js";import{G as s}from"./Grid-Dd6PAMTp.js";import{B as m}from"./Box-Dmtu8wWb.js";import{T as d}from"./Typography-C8IUsM00.js";function o({children:a,isEnd:t=!1}){const i=x();return e.jsx(m,{sx:{px:1.5,py:1,display:"flex",flexDirection:"column",gap:.5,borderRight:t?"none":`1px solid ${i.palette.divider}`,color:i.palette.text.primary},children:a})}function g({title:a,status:t="Available",note:i="N/A",brandName:u,systemName:h,version:f="1.0"}){const p=x(),r=l=>l?e.jsx(d,{variant:"caption",sx:{color:p.palette.text.secondary},children:l}):null,n=l=>e.jsx(d,{variant:"body2",sx:{fontWeight:700,wordBreak:"keep-all"},children:l??""});return e.jsxs(e.Fragment,{children:[e.jsx(c,{disableGutters:!0,maxWidth:!1,sx:{borderBottom:`1px solid ${p.palette.divider}`,pt:{xs:1,md:2},pb:{xs:1,md:2},px:{xs:1,md:4},position:"fixed",width:"100%",left:0,top:0,backgroundColor:p.palette.background.paper,zIndex:999},children:e.jsxs(s,{container:!0,columns:{xs:24},spacing:0,children:[e.jsx(s,{size:{xs:24,md:3},children:e.jsxs(o,{isEnd:!1,children:[r("Title"),n(a)]})}),e.jsx(s,{size:{xs:24,md:2},children:e.jsxs(o,{isEnd:!1,children:[r("Status"),n(t)]})}),e.jsx(s,{size:{xs:24,md:12},children:e.jsxs(o,{isEnd:!1,children:[r("Note"),n(i)]})}),e.jsx(s,{size:{xs:24,md:6},children:e.jsxs(o,{isEnd:!1,children:[r(u),n(h)]})}),e.jsx(s,{size:{xs:24,md:1},children:e.jsxs(o,{isEnd:!0,children:[r("Version"),n(f)]})})]})}),e.jsx(m,{sx:{height:"56px"}})]})}g.__docgenInfo={description:`DocumentTitle 컴포넌트

스토리북 문서 상단에 표시되는 타이틀 바
문서 제목, 상태, 노트, 브랜드 정보, 버전을 표시

Props:
@param {string} title - 문서 제목 (예: Color System) [Required]
@param {string} status - 컴포넌트 상태 (예: Available, Disabled, Pending) [Optional, 기본값: 'Available']
@param {string} note - 문서 관련 노트 [Optional, 기본값: 'N/A']
@param {string} brandName - 브랜드명 라벨 [Optional]
@param {string} systemName - 디자인 시스템명 [Optional]
@param {string} version - 버전 정보 [Optional, 기본값: '1.0']

Example usage:
<DocumentTitle
  title="Color System"
  status="Available"
  note="Primary colors updated"
  brandName="Brand"
  systemName="Starter Kit"
  version="1.0"
/>`,methods:[],displayName:"DocumentTitle",props:{status:{defaultValue:{value:"'Available'",computed:!1},required:!1},note:{defaultValue:{value:"'N/A'",computed:!1},required:!1},version:{defaultValue:{value:"'1.0'",computed:!1},required:!1}}};function b({children:a,maxWidth:t="xl"}){return e.jsx(c,{maxWidth:t,disableGutters:!0,sx:{width:"100%",pt:{xs:8,sm:12,md:12},px:{xs:2,sm:3,md:4},pb:{xs:4,sm:5,md:6}},children:a})}b.__docgenInfo={description:`PageContainer 컴포넌트

스토리북 문서 페이지의 최상위 컨테이너
xl(1536px) 이상에서는 maxWidth 적용, 이하에서는 100% 너비
DocumentTitle 고정 헤더를 고려한 상단 패딩 포함

Props:
@param {ReactNode} children - 페이지 콘텐츠 [Required]
@param {string} maxWidth - 최대 너비 breakpoint [Optional, 기본값: 'xl']

Example usage:
<PageContainer>
  <Typography variant="h4">Title</Typography>
  <Table>...</Table>
</PageContainer>`,methods:[],displayName:"PageContainer",props:{maxWidth:{defaultValue:{value:"'xl'",computed:!1},required:!1}}};function y({title:a,description:t,children:i}){return e.jsxs(m,{sx:{mt:4,mb:3},children:[e.jsx(d,{variant:"h5",sx:{fontWeight:600,pb:1,mb:1.5,borderBottom:"2px solid",borderColor:"text.primary"},children:a}),t&&e.jsx(d,{variant:"body1",color:"text.secondary",sx:{whiteSpace:"pre-line",mb:i?3:0},children:t}),i]})}y.__docgenInfo={description:`SectionTitle 컴포넌트

스토리북 문서 내 섹션 제목과 설명을 표시
제목 하단에 구분선 포함

Props:
@param {string} title - 섹션 제목 [Required]
@param {string} description - 섹션 설명 (줄바꿈 지원) [Optional]
@param {ReactNode} children - 섹션 내용 [Optional]

Example usage:
<SectionTitle
  title="Color Palette"
  description="Primary and secondary colors used in the design system."
/>

<SectionTitle title="Color Palette">
  <Table>...</Table>
</SectionTitle>`,methods:[],displayName:"SectionTitle"};export{g as D,b as P,y as S};
