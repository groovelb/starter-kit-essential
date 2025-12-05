import{j as e}from"./iframe-q-XN_VZM.js";import{D as j,P as S,S as l}from"./SectionTitle-B-E4QVff.js";import{T as s}from"./Typography-C8IUsM00.js";import{B as r}from"./Box-Dmtu8wWb.js";import{b as P,a as v,c as t,T as a,d as D}from"./TableRow-DxwoBvdd.js";import{T as w}from"./TableHead-CFjEf5Al.js";import{S as k}from"./Stack-BQqDyOBu.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CDdqLoBf.js";import"./Container-q5yveaGP.js";import"./memoTheme-BW0efeYW.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./Grid-Dd6PAMTp.js";import"./isMuiElement-DpiUmZPP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function o({children:h,variant:c="h5",dropCap:y=!1,styleColor:m="primary.main",align:x="left",maxWidth:p=65,sx:u,...C}){const g=typeof p=="number"?`${p}ch`:p,T={pl:4,borderLeft:"3px solid",borderColor:m,color:"text.secondary"},f={"&::first-letter":{float:"left",fontSize:"300%",fontWeight:700,lineHeight:.8,mr:1,mt:1,fontFamily:'"Outfit", "Pretendard Variable", sans-serif',color:m}};return e.jsx(s,{variant:c,component:"p",sx:{maxWidth:g,textAlign:x,...T,...y&&f,...u},...C,children:h})}function b({children:h,author:c,dropCap:y=!1,styleColor:m="primary.main",sx:x,...p}){return e.jsxs(r,{sx:{...x},...p,children:[e.jsx(o,{maxWidth:"none",dropCap:y,styleColor:m,children:h}),c&&e.jsx(s,{variant:"caption",component:"cite",sx:{display:"block",mt:2,pl:4,fontStyle:"normal",color:"text.secondary","&::before":{content:'"— "'}},children:c})]})}o.__docgenInfo={description:`StyledParagraph 컴포넌트

왼쪽 장식 라인과 Drop Cap을 지원하는 인용/강조 문단 컴포넌트.

동작 방식:
1. 왼쪽에 세로 장식 라인(3px)이 표시됨
2. dropCap이 true면 첫 글자가 정확히 2줄 높이로 확대되고 float됨
3. styleColor로 Drop Cap과 장식 라인 색상을 동시에 지정
4. variant로 Typography 스타일을 지정
5. maxWidth로 최적의 줄 길이를 제어

Props:
@param {string} children - 문단 텍스트 [Required]
@param {string} variant - Typography variant ('h4' | 'h5' | 'h6' | 'body1' | 'body2') [Optional, 기본값: 'h5']
@param {boolean} dropCap - 첫 글자 확대 (Drop Cap, 2줄 높이, 자동 float) [Optional, 기본값: false]
@param {string} styleColor - Drop Cap 및 장식 라인 색상 (MUI 색상 경로 또는 HEX) [Optional, 기본값: 'primary.main']
@param {string} align - 텍스트 정렬 ('left' | 'center' | 'right' | 'justify') [Optional, 기본값: 'left']
@param {number|string} maxWidth - 최대 너비 (ch 단위 숫자 또는 CSS 값) [Optional, 기본값: 65]
@param {object} sx - 추가 스타일 오버라이드 [Optional]

Example usage:
<StyledParagraph>
  This is a styled paragraph with left border.
</StyledParagraph>
<StyledParagraph variant="h4" dropCap styleColor="secondary.main">
  Lorem ipsum dolor sit amet...
</StyledParagraph>`,methods:[],displayName:"StyledParagraph",props:{variant:{defaultValue:{value:"'h5'",computed:!1},required:!1},dropCap:{defaultValue:{value:"false",computed:!1},required:!1},styleColor:{defaultValue:{value:"'primary.main'",computed:!1},required:!1},align:{defaultValue:{value:"'left'",computed:!1},required:!1},maxWidth:{defaultValue:{value:"65",computed:!1},required:!1}}};b.__docgenInfo={description:`PullQuote 컴포넌트 (편의 컴포넌트)

인용문과 저자를 함께 표시하는 컴포넌트.

Props:
@param {string} children - 인용 텍스트 [Required]
@param {string} author - 인용 출처/저자 [Optional]
@param {boolean} dropCap - 첫 글자 확대 (Drop Cap, 2줄 높이) [Optional, 기본값: false]
@param {string} styleColor - Drop Cap 및 장식 라인 색상 [Optional, 기본값: 'primary.main']
@param {object} sx - 추가 스타일 오버라이드 [Optional]

Example usage:
<PullQuote author="Steve Jobs">
  Design is not just what it looks like.
</PullQuote>`,methods:[],displayName:"PullQuote",props:{dropCap:{defaultValue:{value:"false",computed:!1},required:!1},styleColor:{defaultValue:{value:"'primary.main'",computed:!1},required:!1}}};const A={title:"Custom Component/Typography/StyledParagraph",component:o,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
## StyledParagraph

왼쪽 장식 라인과 Drop Cap을 지원하는 인용/강조 문단 컴포넌트.

### 용도
- 인용문 강조
- 섹션 도입부 텍스트
- 중요 정보 하이라이트
        `}}},argTypes:{children:{control:{type:"text"},description:"문단 텍스트"},variant:{control:{type:"select"},options:["h4","h5","h6","body1","body2"],description:"Typography variant"},dropCap:{control:{type:"boolean"},description:"첫 글자 확대 (Drop Cap, 2줄 높이, 자동 float)"},styleColor:{control:{type:"select"},options:["primary.main","secondary.main","text.primary","text.secondary","error.main","warning.main","success.main"],description:"Drop Cap 및 장식 라인 색상"},align:{control:{type:"select"},options:["left","center","right","justify"],description:"텍스트 정렬"},maxWidth:{control:{type:"number"},description:"최대 너비 (ch 단위)"}}},i={medium:"A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications. It serves as a single source of truth for product teams.",long:"Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters. The term typography is also applied to the style, arrangement, and appearance of the letters, numbers, and symbols created by the process.",korean:"디자인 시스템은 재사용 가능한 컴포넌트와 명확한 표준으로 구성된 집합으로, 어떤 수의 애플리케이션이든 구축할 수 있습니다. 제품 팀을 위한 단일 진실 공급원(Single Source of Truth) 역할을 합니다."},n={args:{children:i.medium,variant:"h5",dropCap:!1,styleColor:"primary.main",align:"left",maxWidth:65}},d={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"StyledParagraph",status:"Available",note:"Quote style paragraph with decoration line",brandName:"Typography",systemName:"Starter Kit",version:"2.0"}),e.jsxs(S,{children:[e.jsx(s,{variant:"h4",sx:{fontWeight:700,mb:1},children:"StyledParagraph"}),e.jsx(s,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"왼쪽 장식 라인과 Drop Cap을 지원하는 인용/강조 문단 컴포넌트입니다. styleColor로 장식 라인과 Drop Cap 색상을 동시에 제어합니다."}),e.jsx(l,{title:"Props",description:"StyledParagraph 컴포넌트의 Props 목록입니다."}),e.jsx(P,{children:e.jsxs(v,{size:"small",children:[e.jsx(w,{children:e.jsxs(t,{children:[e.jsx(a,{sx:{fontWeight:600},children:"Prop"}),e.jsx(a,{sx:{fontWeight:600},children:"Type"}),e.jsx(a,{sx:{fontWeight:600},children:"Default"}),e.jsx(a,{sx:{fontWeight:600},children:"Description"})]})}),e.jsxs(D,{children:[e.jsxs(t,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"children"}),e.jsx(a,{children:"string"}),e.jsx(a,{children:"-"}),e.jsx(a,{children:"문단 텍스트 (필수)"})]}),e.jsxs(t,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"variant"}),e.jsx(a,{children:"'h4' | 'h5' | 'h6' | 'body1' | 'body2'"}),e.jsx(a,{children:"'h5'"}),e.jsx(a,{children:"Typography variant"})]}),e.jsxs(t,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"dropCap"}),e.jsx(a,{children:"boolean"}),e.jsx(a,{children:"false"}),e.jsx(a,{children:"첫 글자 확대 (Drop Cap, 2줄 높이, 자동 float)"})]}),e.jsxs(t,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"styleColor"}),e.jsx(a,{children:"string"}),e.jsx(a,{children:"'primary.main'"}),e.jsx(a,{children:"Drop Cap 및 장식 라인 색상"})]}),e.jsxs(t,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"maxWidth"}),e.jsx(a,{children:"number | string"}),e.jsx(a,{children:"65"}),e.jsx(a,{children:"최대 너비 (ch 단위 또는 CSS 값)"})]}),e.jsxs(t,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"align"}),e.jsx(a,{children:"'left' | 'center' | 'right' | 'justify'"}),e.jsx(a,{children:"'left'"}),e.jsx(a,{children:"텍스트 정렬"})]})]})]})}),e.jsx(l,{title:"Basic Usage",description:"기본 사용 예시입니다."}),e.jsx(r,{sx:{p:3,border:"1px solid",borderColor:"divider"},children:e.jsx(o,{children:i.medium})}),e.jsx(l,{title:"Drop Cap",description:"첫 글자가 2줄 높이로 확대됩니다."}),e.jsx(r,{sx:{p:3,border:"1px solid",borderColor:"divider"},children:e.jsx(o,{dropCap:!0,children:i.long})}),e.jsx(l,{title:"Style Color",description:"styleColor로 장식 라인과 Drop Cap 색상을 동시에 제어합니다."}),e.jsxs(k,{spacing:4,children:[e.jsxs(r,{sx:{p:3,border:"1px solid",borderColor:"divider"},children:[e.jsx(s,{variant:"caption",sx:{mb:1,display:"block",color:"text.secondary"},children:"primary.main (기본값)"}),e.jsx(o,{dropCap:!0,styleColor:"primary.main",children:i.medium})]}),e.jsxs(r,{sx:{p:3,border:"1px solid",borderColor:"divider"},children:[e.jsx(s,{variant:"caption",sx:{mb:1,display:"block",color:"text.secondary"},children:"secondary.main"}),e.jsx(o,{dropCap:!0,styleColor:"secondary.main",children:i.medium})]}),e.jsxs(r,{sx:{p:3,border:"1px solid",borderColor:"divider"},children:[e.jsx(s,{variant:"caption",sx:{mb:1,display:"block",color:"text.secondary"},children:"error.main"}),e.jsx(o,{dropCap:!0,styleColor:"error.main",children:i.medium})]})]}),e.jsx(l,{title:"PullQuote",description:"저자 정보를 포함한 인용문 컴포넌트입니다."}),e.jsx(r,{sx:{p:3,border:"1px solid",borderColor:"divider"},children:e.jsx(b,{author:"Steve Jobs",children:"Design is not just what it looks like and feels like. Design is how it works."})}),e.jsx(l,{title:"PullQuote with Drop Cap",description:"Drop Cap이 적용된 인용문입니다."}),e.jsx(r,{sx:{p:3,border:"1px solid",borderColor:"divider"},children:e.jsx(b,{author:"Dieter Rams",dropCap:!0,styleColor:"secondary.main",children:"Good design is as little design as possible. Less, but better, because it concentrates on the essential aspects."})}),e.jsx(l,{title:"Korean Text",description:"한글 텍스트 예시입니다."}),e.jsx(r,{sx:{p:3,border:"1px solid",borderColor:"divider"},children:e.jsx(o,{dropCap:!0,children:i.korean})}),e.jsx(l,{title:"Usage Example",description:"코드 사용 예시입니다."}),e.jsx(r,{component:"pre",sx:{backgroundColor:"grey.100",p:3,fontSize:13,fontFamily:"monospace",overflow:"auto",lineHeight:1.6},children:`// 기본 사용
<StyledParagraph>
  Your quote text here...
</StyledParagraph>

// Drop Cap과 색상 지정
<StyledParagraph dropCap styleColor="secondary.main">
  Lorem ipsum dolor sit amet...
</StyledParagraph>

// PullQuote with author
<PullQuote author="Steve Jobs">
  Design is how it works.
</PullQuote>`})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: sampleText.medium,
    variant: 'h5',
    dropCap: false,
    styleColor: 'primary.main',
    align: 'left',
    maxWidth: 65
  }
}`,...n.parameters?.docs?.source},description:{story:"기본 사용",...n.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <DocumentTitle title="StyledParagraph" status="Available" note="Quote style paragraph with decoration line" brandName="Typography" systemName="Starter Kit" version="2.0" />
      <PageContainer>
        <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          StyledParagraph
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{
        mb: 4
      }}>
          왼쪽 장식 라인과 Drop Cap을 지원하는 인용/강조 문단 컴포넌트입니다.
          styleColor로 장식 라인과 Drop Cap 색상을 동시에 제어합니다.
        </Typography>

        <SectionTitle title="Props" description="StyledParagraph 컴포넌트의 Props 목록입니다." />
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
              }}>children</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>문단 텍스트 (필수)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>variant</TableCell>
                <TableCell>&apos;h4&apos; | &apos;h5&apos; | &apos;h6&apos; | &apos;body1&apos; | &apos;body2&apos;</TableCell>
                <TableCell>&apos;h5&apos;</TableCell>
                <TableCell>Typography variant</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>dropCap</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>첫 글자 확대 (Drop Cap, 2줄 높이, 자동 float)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>styleColor</TableCell>
                <TableCell>string</TableCell>
                <TableCell>&apos;primary.main&apos;</TableCell>
                <TableCell>Drop Cap 및 장식 라인 색상</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>maxWidth</TableCell>
                <TableCell>number | string</TableCell>
                <TableCell>65</TableCell>
                <TableCell>최대 너비 (ch 단위 또는 CSS 값)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>align</TableCell>
                <TableCell>&apos;left&apos; | &apos;center&apos; | &apos;right&apos; | &apos;justify&apos;</TableCell>
                <TableCell>&apos;left&apos;</TableCell>
                <TableCell>텍스트 정렬</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="Basic Usage" description="기본 사용 예시입니다." />
        <Box sx={{
        p: 3,
        border: '1px solid',
        borderColor: 'divider'
      }}>
          <StyledParagraph>
            {sampleText.medium}
          </StyledParagraph>
        </Box>

        <SectionTitle title="Drop Cap" description="첫 글자가 2줄 높이로 확대됩니다." />
        <Box sx={{
        p: 3,
        border: '1px solid',
        borderColor: 'divider'
      }}>
          <StyledParagraph dropCap>
            {sampleText.long}
          </StyledParagraph>
        </Box>

        <SectionTitle title="Style Color" description="styleColor로 장식 라인과 Drop Cap 색상을 동시에 제어합니다." />
        <Stack spacing={4}>
          <Box sx={{
          p: 3,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <Typography variant="caption" sx={{
            mb: 1,
            display: 'block',
            color: 'text.secondary'
          }}>
              primary.main (기본값)
            </Typography>
            <StyledParagraph dropCap styleColor="primary.main">
              {sampleText.medium}
            </StyledParagraph>
          </Box>
          <Box sx={{
          p: 3,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <Typography variant="caption" sx={{
            mb: 1,
            display: 'block',
            color: 'text.secondary'
          }}>
              secondary.main
            </Typography>
            <StyledParagraph dropCap styleColor="secondary.main">
              {sampleText.medium}
            </StyledParagraph>
          </Box>
          <Box sx={{
          p: 3,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <Typography variant="caption" sx={{
            mb: 1,
            display: 'block',
            color: 'text.secondary'
          }}>
              error.main
            </Typography>
            <StyledParagraph dropCap styleColor="error.main">
              {sampleText.medium}
            </StyledParagraph>
          </Box>
        </Stack>

        <SectionTitle title="PullQuote" description="저자 정보를 포함한 인용문 컴포넌트입니다." />
        <Box sx={{
        p: 3,
        border: '1px solid',
        borderColor: 'divider'
      }}>
          <PullQuote author="Steve Jobs">
            Design is not just what it looks like and feels like. Design is how it works.
          </PullQuote>
        </Box>

        <SectionTitle title="PullQuote with Drop Cap" description="Drop Cap이 적용된 인용문입니다." />
        <Box sx={{
        p: 3,
        border: '1px solid',
        borderColor: 'divider'
      }}>
          <PullQuote author="Dieter Rams" dropCap styleColor="secondary.main">
            Good design is as little design as possible. Less, but better, because it concentrates on the essential aspects.
          </PullQuote>
        </Box>

        <SectionTitle title="Korean Text" description="한글 텍스트 예시입니다." />
        <Box sx={{
        p: 3,
        border: '1px solid',
        borderColor: 'divider'
      }}>
          <StyledParagraph dropCap>
            {sampleText.korean}
          </StyledParagraph>
        </Box>

        <SectionTitle title="Usage Example" description="코드 사용 예시입니다." />
        <Box component="pre" sx={{
        backgroundColor: 'grey.100',
        p: 3,
        fontSize: 13,
        fontFamily: 'monospace',
        overflow: 'auto',
        lineHeight: 1.6
      }}>
          {\`// 기본 사용
<StyledParagraph>
  Your quote text here...
</StyledParagraph>

// Drop Cap과 색상 지정
<StyledParagraph dropCap styleColor="secondary.main">
  Lorem ipsum dolor sit amet...
</StyledParagraph>

// PullQuote with author
<PullQuote author="Steve Jobs">
  Design is how it works.
</PullQuote>\`}
        </Box>
      </PageContainer>
    </>
}`,...d.parameters?.docs?.source},description:{story:"문서 및 데모",...d.parameters?.docs?.description}}};const I=["Default","Documentation"];export{n as Default,d as Documentation,I as __namedExportsOrder,A as default};
