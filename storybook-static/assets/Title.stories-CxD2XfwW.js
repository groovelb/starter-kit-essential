import{j as e}from"./iframe-q-XN_VZM.js";import{D as S,P as W,S as x}from"./SectionTitle-B-E4QVff.js";import{B as i}from"./Box-Dmtu8wWb.js";import{T as r}from"./Typography-C8IUsM00.js";import{b as B,a as k,c as o,T as l,d as D}from"./TableRow-DxwoBvdd.js";import{T as w}from"./TableHead-CFjEf5Al.js";import{S as T}from"./Stack-BQqDyOBu.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CDdqLoBf.js";import"./Container-q5yveaGP.js";import"./memoTheme-BW0efeYW.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./Grid-Dd6PAMTp.js";import"./isMuiElement-DpiUmZPP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function s({title:m,overline:a,subtitle:n,level:t="h2",align:d="left",layout:u="stack",divider:g=!1,dividerStyle:c="line",sx:v,...y}){const j={h1:"h1",h2:"h2",h3:"h3",h4:"h4"},f={h1:"subtitle1",h2:"subtitle1",h3:"subtitle2",h4:"body2"},C={left:"flex-start",center:"center",right:"flex-end"},p={line:{width:"100%",maxWidth:d==="center"?120:"100%",height:1,backgroundColor:"divider",mt:2},dot:{display:"flex",gap:1,mt:2,"& > span":{width:6,height:6,borderRadius:"50%",backgroundColor:"primary.main"}},gradient:{width:"100%",maxWidth:d==="center"?200:"100%",height:2,background:"linear-gradient(90deg, transparent 0%, currentColor 50%, transparent 100%)",color:"primary.main",mt:2,opacity:.6}};return u==="stack"?e.jsxs(i,{sx:{display:"flex",flexDirection:"column",alignItems:C[d],textAlign:d,...v},...y,children:[a&&e.jsx(r,{variant:"overline",component:"span",sx:{color:"primary.main",fontWeight:600,letterSpacing:"0.1em",mb:.5},children:a}),e.jsx(r,{variant:j[t],component:t,sx:{fontWeight:t==="h1"?900:t==="h2"?800:700},children:m}),n&&e.jsx(r,{variant:f[t],component:"p",sx:{color:"text.secondary",mt:1,maxWidth:"60ch"},children:n}),g&&(c==="dot"?e.jsxs(i,{sx:p.dot,children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}):e.jsx(i,{sx:p[c]}))]}):u==="inline"?e.jsxs(i,{sx:{display:"flex",flexDirection:"column",alignItems:C[d],textAlign:d,...v},...y,children:[e.jsxs(i,{sx:{display:"flex",alignItems:"baseline",gap:2,flexWrap:"wrap"},children:[a&&e.jsx(r,{variant:"overline",component:"span",sx:{color:"primary.main",fontWeight:600,letterSpacing:"0.1em"},children:a}),e.jsx(r,{variant:j[t],component:t,sx:{fontWeight:t==="h1"?900:t==="h2"?800:700},children:m})]}),n&&e.jsx(r,{variant:f[t],component:"p",sx:{color:"text.secondary",mt:1,maxWidth:"60ch"},children:n}),g&&(c==="dot"?e.jsxs(i,{sx:p.dot,children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}):e.jsx(i,{sx:p[c]}))]}):u==="split"?e.jsxs(i,{sx:{display:"flex",flexDirection:"column",gap:1,...v},...y,children:[a&&e.jsx(r,{variant:"overline",component:"span",sx:{color:"primary.main",fontWeight:600,letterSpacing:"0.1em"},children:a}),e.jsxs(i,{sx:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:2},children:[e.jsx(r,{variant:j[t],component:t,sx:{fontWeight:t==="h1"?900:t==="h2"?800:700,flex:"1 1 auto"},children:m}),n&&e.jsx(r,{variant:f[t],component:"p",sx:{color:"text.secondary",maxWidth:"40ch",textAlign:"right",flex:"0 1 auto"},children:n})]}),g&&(c==="dot"?e.jsxs(i,{sx:{...p.dot,justifyContent:"flex-start"},children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}):e.jsx(i,{sx:p[c]}))]}):null}s.__docgenInfo={description:`Title 컴포넌트

섹션/아이템의 계층적 타이틀 시스템을 제공하는 컴포넌트.
Overline, 메인 타이틀, 서브타이틀의 조합으로 명확한 정보 계층을 구성한다.

동작 방식:
1. level prop에 따라 적절한 시맨틱 HTML 태그 (h1~h4)가 자동 적용됨
2. overline이 있으면 메인 타이틀 위에 작은 레이블로 표시됨
3. subtitle이 있으면 메인 타이틀 아래에 부연 설명으로 표시됨
4. layout에 따라 요소들의 배치 방식이 달라짐
5. divider가 true면 하단에 시각적 구분선이 추가됨

Props:
@param {string} title - 메인 타이틀 텍스트 [Required]
@param {string} overline - 상단 작은 레이블 텍스트 [Optional]
@param {string} subtitle - 하단 서브타이틀 텍스트 [Optional]
@param {string} level - 시맨틱 레벨 ('h1' | 'h2' | 'h3' | 'h4') [Optional, 기본값: 'h2']
@param {string} align - 텍스트 정렬 ('left' | 'center' | 'right') [Optional, 기본값: 'left']
@param {string} layout - 레이아웃 방식 ('stack' | 'inline' | 'split') [Optional, 기본값: 'stack']
@param {boolean} divider - 하단 구분선 표시 여부 [Optional, 기본값: false]
@param {string} dividerStyle - 구분선 스타일 ('line' | 'dot' | 'gradient') [Optional, 기본값: 'line']
@param {object} sx - 추가 스타일 오버라이드 [Optional]

Example usage:
<Title title="섹션 제목" />
<Title title="About Us" overline="Company" subtitle="우리의 이야기" />
<Title title="Features" layout="inline" divider dividerStyle="gradient" />`,methods:[],displayName:"Title",props:{level:{defaultValue:{value:"'h2'",computed:!1},required:!1},align:{defaultValue:{value:"'left'",computed:!1},required:!1},layout:{defaultValue:{value:"'stack'",computed:!1},required:!1},divider:{defaultValue:{value:"false",computed:!1},required:!1},dividerStyle:{defaultValue:{value:"'line'",computed:!1},required:!1}}};const K={title:"Custom Component/Typography/Title",component:s,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
## Title

섹션/아이템의 계층적 타이틀 시스템을 제공하는 컴포넌트.

### 용도
- 페이지 섹션의 제목 표시
- Overline + Title + Subtitle 조합으로 정보 계층 구성
- 다양한 레이아웃 옵션으로 유연한 배치
        `}}},argTypes:{title:{control:"text",description:"메인 타이틀 텍스트"},overline:{control:"text",description:"상단 작은 레이블"},subtitle:{control:"text",description:"하단 서브타이틀"},level:{control:"select",options:["h1","h2","h3","h4"],description:"시맨틱 HTML 레벨"},align:{control:"select",options:["left","center","right"],description:"텍스트 정렬"},layout:{control:"select",options:["stack","inline","split"],description:"레이아웃 방식"},divider:{control:"boolean",description:"하단 구분선 표시"},dividerStyle:{control:"select",options:["line","dot","gradient"],description:"구분선 스타일"}}},h={args:{title:"Section Title",overline:"Category",subtitle:"A brief description of this section that provides context.",level:"h2",align:"left",layout:"stack",divider:!1}},b={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(S,{title:"Title",status:"Available",note:"Hierarchical title system for sections and items",brandName:"Typography",systemName:"Starter Kit",version:"1.0"}),e.jsxs(W,{children:[e.jsx(r,{variant:"h4",sx:{fontWeight:700,mb:1},children:"Title Component"}),e.jsx(r,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"Overline, 메인 타이틀, 서브타이틀의 조합으로 명확한 정보 계층을 구성합니다."}),e.jsx(x,{title:"Props",description:"Title 컴포넌트의 Props 목록입니다."}),e.jsx(B,{children:e.jsxs(k,{size:"small",children:[e.jsx(w,{children:e.jsxs(o,{children:[e.jsx(l,{sx:{fontWeight:600},children:"Prop"}),e.jsx(l,{sx:{fontWeight:600},children:"Type"}),e.jsx(l,{sx:{fontWeight:600},children:"Default"}),e.jsx(l,{sx:{fontWeight:600},children:"Description"})]})}),e.jsxs(D,{children:[e.jsxs(o,{children:[e.jsx(l,{sx:{fontFamily:"monospace"},children:"title"}),e.jsx(l,{children:"string"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"메인 타이틀 텍스트 (필수)"})]}),e.jsxs(o,{children:[e.jsx(l,{sx:{fontFamily:"monospace"},children:"overline"}),e.jsx(l,{children:"string"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"상단 작은 레이블"})]}),e.jsxs(o,{children:[e.jsx(l,{sx:{fontFamily:"monospace"},children:"subtitle"}),e.jsx(l,{children:"string"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"하단 서브타이틀"})]}),e.jsxs(o,{children:[e.jsx(l,{sx:{fontFamily:"monospace"},children:"level"}),e.jsx(l,{children:"'h1' | 'h2' | 'h3' | 'h4'"}),e.jsx(l,{children:"'h2'"}),e.jsx(l,{children:"시맨틱 HTML 레벨"})]}),e.jsxs(o,{children:[e.jsx(l,{sx:{fontFamily:"monospace"},children:"align"}),e.jsx(l,{children:"'left' | 'center' | 'right'"}),e.jsx(l,{children:"'left'"}),e.jsx(l,{children:"텍스트 정렬"})]}),e.jsxs(o,{children:[e.jsx(l,{sx:{fontFamily:"monospace"},children:"layout"}),e.jsx(l,{children:"'stack' | 'inline' | 'split'"}),e.jsx(l,{children:"'stack'"}),e.jsx(l,{children:"레이아웃 방식"})]}),e.jsxs(o,{children:[e.jsx(l,{sx:{fontFamily:"monospace"},children:"divider"}),e.jsx(l,{children:"boolean"}),e.jsx(l,{children:"false"}),e.jsx(l,{children:"하단 구분선 표시"})]}),e.jsxs(o,{children:[e.jsx(l,{sx:{fontFamily:"monospace"},children:"dividerStyle"}),e.jsx(l,{children:"'line' | 'dot' | 'gradient'"}),e.jsx(l,{children:"'line'"}),e.jsx(l,{children:"구분선 스타일"})]})]})]})}),e.jsx(x,{title:"Layout Variants",description:"세 가지 레이아웃 옵션을 제공합니다."}),e.jsxs(T,{spacing:6,children:[e.jsxs(i,{children:[e.jsx(r,{variant:"subtitle2",sx:{mb:2,color:"text.secondary"},children:"Stack (기본) - 수직 배치"}),e.jsx(i,{sx:{p:3,border:"1px solid",borderColor:"divider"},children:e.jsx(s,{title:"Our Services",overline:"What We Do",subtitle:"We provide comprehensive solutions for your business needs.",layout:"stack"})})]}),e.jsxs(i,{children:[e.jsx(r,{variant:"subtitle2",sx:{mb:2,color:"text.secondary"},children:"Inline - Overline과 Title 가로 배치"}),e.jsx(i,{sx:{p:3,border:"1px solid",borderColor:"divider"},children:e.jsx(s,{title:"Our Services",overline:"01",subtitle:"We provide comprehensive solutions for your business needs.",layout:"inline"})})]}),e.jsxs(i,{children:[e.jsx(r,{variant:"subtitle2",sx:{mb:2,color:"text.secondary"},children:"Split - Title과 Subtitle 양쪽 분리"}),e.jsx(i,{sx:{p:3,border:"1px solid",borderColor:"divider"},children:e.jsx(s,{title:"Our Services",overline:"What We Do",subtitle:"We provide comprehensive solutions for your business needs.",layout:"split"})})]})]}),e.jsx(x,{title:"Heading Levels",description:"시맨틱 HTML 레벨에 따른 크기 변화입니다."}),e.jsxs(T,{spacing:4,children:[e.jsx(s,{title:"Heading Level 1",level:"h1"}),e.jsx(s,{title:"Heading Level 2",level:"h2"}),e.jsx(s,{title:"Heading Level 3",level:"h3"}),e.jsx(s,{title:"Heading Level 4",level:"h4"})]}),e.jsx(x,{title:"Divider Styles",description:"세 가지 구분선 스타일을 제공합니다."}),e.jsxs(T,{spacing:6,children:[e.jsx(i,{children:e.jsx(s,{title:"Line Divider",subtitle:"기본 라인 스타일",divider:!0,dividerStyle:"line"})}),e.jsx(i,{children:e.jsx(s,{title:"Dot Divider",subtitle:"점 3개로 구성된 장식적 스타일",divider:!0,dividerStyle:"dot"})}),e.jsx(i,{children:e.jsx(s,{title:"Gradient Divider",subtitle:"가운데가 진하고 양 끝이 투명한 그라데이션",divider:!0,dividerStyle:"gradient"})})]}),e.jsx(x,{title:"Alignment",description:"텍스트 정렬 옵션입니다."}),e.jsxs(T,{spacing:6,children:[e.jsx(i,{sx:{p:3,border:"1px solid",borderColor:"divider"},children:e.jsx(s,{title:"Left Aligned",overline:"Alignment",subtitle:"기본 좌측 정렬입니다.",align:"left",divider:!0,dividerStyle:"gradient"})}),e.jsx(i,{sx:{p:3,border:"1px solid",borderColor:"divider"},children:e.jsx(s,{title:"Center Aligned",overline:"Alignment",subtitle:"중앙 정렬입니다.",align:"center",divider:!0,dividerStyle:"gradient"})}),e.jsx(i,{sx:{p:3,border:"1px solid",borderColor:"divider"},children:e.jsx(s,{title:"Right Aligned",overline:"Alignment",subtitle:"우측 정렬입니다.",align:"right",divider:!0,dividerStyle:"gradient"})})]})]})]})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Section Title',
    overline: 'Category',
    subtitle: 'A brief description of this section that provides context.',
    level: 'h2',
    align: 'left',
    layout: 'stack',
    divider: false
  }
}`,...h.parameters?.docs?.source},description:{story:"기본 사용",...h.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <DocumentTitle title="Title" status="Available" note="Hierarchical title system for sections and items" brandName="Typography" systemName="Starter Kit" version="1.0" />
      <PageContainer>
        <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          Title Component
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{
        mb: 4
      }}>
          Overline, 메인 타이틀, 서브타이틀의 조합으로 명확한 정보 계층을 구성합니다.
        </Typography>

        <SectionTitle title="Props" description="Title 컴포넌트의 Props 목록입니다." />
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{
                fontWeight: 600
              }}>Prop</TableCell>
                <TableCell sx={{
                fontWeight: 600
              }}>Type</TableCell>
                <TableCell sx={{
                fontWeight: 600
              }}>Default</TableCell>
                <TableCell sx={{
                fontWeight: 600
              }}>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>title</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>메인 타이틀 텍스트 (필수)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>overline</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>상단 작은 레이블</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>subtitle</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>하단 서브타이틀</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>level</TableCell>
                <TableCell>&apos;h1&apos; | &apos;h2&apos; | &apos;h3&apos; | &apos;h4&apos;</TableCell>
                <TableCell>&apos;h2&apos;</TableCell>
                <TableCell>시맨틱 HTML 레벨</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>align</TableCell>
                <TableCell>&apos;left&apos; | &apos;center&apos; | &apos;right&apos;</TableCell>
                <TableCell>&apos;left&apos;</TableCell>
                <TableCell>텍스트 정렬</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>layout</TableCell>
                <TableCell>&apos;stack&apos; | &apos;inline&apos; | &apos;split&apos;</TableCell>
                <TableCell>&apos;stack&apos;</TableCell>
                <TableCell>레이아웃 방식</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>divider</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>하단 구분선 표시</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>dividerStyle</TableCell>
                <TableCell>&apos;line&apos; | &apos;dot&apos; | &apos;gradient&apos;</TableCell>
                <TableCell>&apos;line&apos;</TableCell>
                <TableCell>구분선 스타일</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="Layout Variants" description="세 가지 레이아웃 옵션을 제공합니다." />
        <Stack spacing={6}>
          <Box>
            <Typography variant="subtitle2" sx={{
            mb: 2,
            color: 'text.secondary'
          }}>
              Stack (기본) - 수직 배치
            </Typography>
            <Box sx={{
            p: 3,
            border: '1px solid',
            borderColor: 'divider'
          }}>
              <Title title="Our Services" overline="What We Do" subtitle="We provide comprehensive solutions for your business needs." layout="stack" />
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={{
            mb: 2,
            color: 'text.secondary'
          }}>
              Inline - Overline과 Title 가로 배치
            </Typography>
            <Box sx={{
            p: 3,
            border: '1px solid',
            borderColor: 'divider'
          }}>
              <Title title="Our Services" overline="01" subtitle="We provide comprehensive solutions for your business needs." layout="inline" />
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={{
            mb: 2,
            color: 'text.secondary'
          }}>
              Split - Title과 Subtitle 양쪽 분리
            </Typography>
            <Box sx={{
            p: 3,
            border: '1px solid',
            borderColor: 'divider'
          }}>
              <Title title="Our Services" overline="What We Do" subtitle="We provide comprehensive solutions for your business needs." layout="split" />
            </Box>
          </Box>
        </Stack>

        <SectionTitle title="Heading Levels" description="시맨틱 HTML 레벨에 따른 크기 변화입니다." />
        <Stack spacing={4}>
          <Title title="Heading Level 1" level="h1" />
          <Title title="Heading Level 2" level="h2" />
          <Title title="Heading Level 3" level="h3" />
          <Title title="Heading Level 4" level="h4" />
        </Stack>

        <SectionTitle title="Divider Styles" description="세 가지 구분선 스타일을 제공합니다." />
        <Stack spacing={6}>
          <Box>
            <Title title="Line Divider" subtitle="기본 라인 스타일" divider dividerStyle="line" />
          </Box>
          <Box>
            <Title title="Dot Divider" subtitle="점 3개로 구성된 장식적 스타일" divider dividerStyle="dot" />
          </Box>
          <Box>
            <Title title="Gradient Divider" subtitle="가운데가 진하고 양 끝이 투명한 그라데이션" divider dividerStyle="gradient" />
          </Box>
        </Stack>

        <SectionTitle title="Alignment" description="텍스트 정렬 옵션입니다." />
        <Stack spacing={6}>
          <Box sx={{
          p: 3,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <Title title="Left Aligned" overline="Alignment" subtitle="기본 좌측 정렬입니다." align="left" divider dividerStyle="gradient" />
          </Box>
          <Box sx={{
          p: 3,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <Title title="Center Aligned" overline="Alignment" subtitle="중앙 정렬입니다." align="center" divider dividerStyle="gradient" />
          </Box>
          <Box sx={{
          p: 3,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <Title title="Right Aligned" overline="Alignment" subtitle="우측 정렬입니다." align="right" divider dividerStyle="gradient" />
          </Box>
        </Stack>
      </PageContainer>
    </>
}`,...b.parameters?.docs?.source},description:{story:"모든 레이아웃 비교",...b.parameters?.docs?.description}}};const U=["Default","Layouts"];export{h as Default,b as Layouts,U as __namedExportsOrder,K as default};
