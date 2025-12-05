import{r as E,j as e}from"./iframe-q-XN_VZM.js";import{D as I,P as D,S as n}from"./SectionTitle-B-E4QVff.js";import{B as l}from"./Box-Dmtu8wWb.js";import{T as v}from"./Typography-C8IUsM00.js";import{b as B,a as M,c as s,T as t,d as O}from"./TableRow-DxwoBvdd.js";import{T as k}from"./TableHead-CFjEf5Al.js";import{S as p}from"./Stack-BQqDyOBu.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CDdqLoBf.js";import"./Container-q5yveaGP.js";import"./memoTheme-BW0efeYW.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./Grid-Dd6PAMTp.js";import"./isMuiElement-DpiUmZPP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function a({text:h,variant:i="static",fillWidth:d=!0,minWordSpacing:b=.5,fontFamily:u='"Outfit", "Pretendard Variable", sans-serif',fontSize:f="clamp(2rem, 8vw, 6rem)",fontWeight:c=900,lineHeight:j=1,textTransform:y="uppercase",sx:w,...H}){const g=E.useRef(null),[T,R]=E.useState(!1),C=h.trim().split(/\s+/);return E.useEffect(()=>{if(i!=="animated")return;const o=new IntersectionObserver(([W])=>{W.isIntersecting&&(R(!0),o.disconnect())},{threshold:.3}),r=g.current;return r&&o.observe(r),()=>o.disconnect()},[i]),d?e.jsx(l,{ref:g,sx:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",fontFamily:u,fontSize:f,fontWeight:c,lineHeight:j,textTransform:y,letterSpacing:"-0.02em",...w},...H,children:C.map((o,r)=>e.jsx(l,{component:"span",sx:{display:"inline-block",opacity:i==="animated"?T?1:0:1,transform:i==="animated"?T?"translateY(0)":"translateY(20px)":"none",transition:i==="animated"?`opacity 0.6s ease-out ${r*.1}s, transform 0.6s ease-out ${r*.1}s`:"none"},children:o},r))}):e.jsx(l,{ref:g,sx:{display:"block",width:"100%",fontFamily:u,fontSize:f,fontWeight:c,lineHeight:j,textTransform:y,letterSpacing:"-0.02em",wordSpacing:`${b}em`,textAlign:"center",...w},...H,children:i==="animated"?C.map((o,r)=>e.jsx(l,{component:"span",sx:{display:"inline-block",opacity:T?1:0,transform:T?"translateY(0)":"translateY(20px)",transition:`opacity 0.6s ease-out ${r*.1}s, transform 0.6s ease-out ${r*.1}s`,mr:r<C.length-1?`${b}em`:0},children:o},r)):h})}function S({lines:h,gap:i=0,headlineProps:d={},sx:b,...u}){return e.jsx(l,{sx:{display:"flex",flexDirection:"column",gap:i,width:"100%",...b},...u,children:h.map((f,c)=>e.jsx(a,{text:f,...d,sx:{...d.variant==="animated"&&{"--animation-delay":`${c*.2}s`},...d.sx}},c))})}a.__docgenInfo={description:`StretchedHeadline 컴포넌트

단어 간격을 동적으로 늘려 컨테이너 전체 너비를 채우는 히어로 타이포그래피 컴포넌트.
각 단어를 개별 span으로 분리하고 flexbox의 space-between으로 배치한다.

동작 방식:
1. 텍스트를 공백 기준으로 단어 단위로 분리
2. 각 단어를 개별 span 요소로 래핑
3. flexbox justify-content: space-between으로 전체 너비에 균등 배치
4. ResizeObserver로 컨테이너 크기 변화 감지하여 반응형 대응
5. fillWidth가 false면 일반 word-spacing으로 간격 조절

Props:
@param {string} text - 표시할 텍스트 [Required]
@param {string} variant - 'static' | 'animated' [Optional, 기본값: 'static']
@param {boolean} fillWidth - 전체 너비 채우기 [Optional, 기본값: true]
@param {number} minWordSpacing - fillWidth가 false일 때 최소 단어 간격 (em) [Optional, 기본값: 0.5]
@param {string} fontFamily - 폰트 패밀리 [Optional, 기본값: 'Outfit']
@param {number} fontSize - 폰트 크기 (px 또는 rem) [Optional, 기본값: 'clamp(2rem, 8vw, 6rem)']
@param {number} fontWeight - 폰트 굵기 [Optional, 기본값: 900]
@param {number} lineHeight - 줄 높이 [Optional, 기본값: 1]
@param {string} textTransform - 텍스트 변환 ('none' | 'uppercase' | 'lowercase') [Optional, 기본값: 'uppercase']
@param {object} sx - 추가 스타일 오버라이드 [Optional]

Example usage:
<StretchedHeadline text="DESIGN SYSTEM" />
<StretchedHeadline text="Hello World" fillWidth={false} minWordSpacing={2} />`,methods:[],displayName:"StretchedHeadline",props:{variant:{defaultValue:{value:"'static'",computed:!1},required:!1},fillWidth:{defaultValue:{value:"true",computed:!1},required:!1},minWordSpacing:{defaultValue:{value:"0.5",computed:!1},required:!1},fontFamily:{defaultValue:{value:`'"Outfit", "Pretendard Variable", sans-serif'`,computed:!1},required:!1},fontSize:{defaultValue:{value:"'clamp(2rem, 8vw, 6rem)'",computed:!1},required:!1},fontWeight:{defaultValue:{value:"900",computed:!1},required:!1},lineHeight:{defaultValue:{value:"1",computed:!1},required:!1},textTransform:{defaultValue:{value:"'uppercase'",computed:!1},required:!1}}};S.__docgenInfo={description:`StretchedHeadlineMultiline 컴포넌트

여러 줄의 StretchedHeadline을 세로로 배치하는 래퍼 컴포넌트.
각 줄이 독립적으로 전체 너비를 채운다.

Props:
@param {string[]} lines - 각 줄의 텍스트 배열 [Required]
@param {number} gap - 줄 간격 [Optional, 기본값: 0]
@param {object} headlineProps - 각 StretchedHeadline에 전달할 props [Optional]
@param {object} sx - 추가 스타일 오버라이드 [Optional]

Example usage:
<StretchedHeadlineMultiline
  lines={['WE CREATE', 'DIGITAL', 'EXPERIENCES']}
  gap={1}
/>`,methods:[],displayName:"StretchedHeadlineMultiline",props:{gap:{defaultValue:{value:"0",computed:!1},required:!1},headlineProps:{defaultValue:{value:"{}",computed:!1},required:!1}}};const J={title:"Custom Component/Typography/StretchedHeadline",component:a,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
## StretchedHeadline

단어 간격을 동적으로 늘려 컨테이너 전체 너비를 채우는 히어로 타이포그래피 컴포넌트.

### 용도
- 히어로 섹션의 임팩트 있는 헤드라인
- 풀 너비 타이포그래피 디자인
- 스크롤 트리거 애니메이션
        `}}},argTypes:{text:{control:"text",description:"표시할 텍스트"},fillWidth:{control:"boolean",description:"전체 너비 채우기"},variant:{control:"select",options:["static","animated"],description:"애니메이션 variant"},textTransform:{control:"select",options:["none","uppercase","lowercase"],description:"텍스트 변환"}}},x={args:{text:"DESIGN SYSTEM",fillWidth:!0,variant:"static",textTransform:"uppercase"}},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(I,{title:"StretchedHeadline",status:"Available",note:"Hero typography that fills container width",brandName:"Typography",systemName:"Starter Kit",version:"1.0"}),e.jsxs(D,{children:[e.jsx(v,{variant:"h4",sx:{fontWeight:700,mb:1},children:"StretchedHeadline"}),e.jsx(v,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"단어 간격을 동적으로 늘려 컨테이너 전체 너비를 채우는 히어로 타이포그래피 컴포넌트입니다. 각 단어를 개별 span으로 분리하고 flexbox의 space-between으로 배치합니다."}),e.jsx(n,{title:"Props",description:"StretchedHeadline 컴포넌트의 Props 목록입니다."}),e.jsx(B,{children:e.jsxs(M,{size:"small",children:[e.jsx(k,{children:e.jsxs(s,{children:[e.jsx(t,{sx:{fontWeight:600},children:"Prop"}),e.jsx(t,{sx:{fontWeight:600},children:"Type"}),e.jsx(t,{sx:{fontWeight:600},children:"Default"}),e.jsx(t,{sx:{fontWeight:600},children:"Description"})]})}),e.jsxs(O,{children:[e.jsxs(s,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"text"}),e.jsx(t,{children:"string"}),e.jsx(t,{children:"-"}),e.jsx(t,{children:"표시할 텍스트 (필수)"})]}),e.jsxs(s,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"fillWidth"}),e.jsx(t,{children:"boolean"}),e.jsx(t,{children:"true"}),e.jsx(t,{children:"전체 너비 채우기 (space-between)"})]}),e.jsxs(s,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"variant"}),e.jsx(t,{children:"'static' | 'animated'"}),e.jsx(t,{children:"'static'"}),e.jsx(t,{children:"애니메이션 variant"})]}),e.jsxs(s,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"fontSize"}),e.jsx(t,{children:"string | number"}),e.jsx(t,{children:"clamp(2rem, 8vw, 6rem)"}),e.jsx(t,{children:"폰트 크기"})]}),e.jsxs(s,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"fontWeight"}),e.jsx(t,{children:"number"}),e.jsx(t,{children:"900"}),e.jsx(t,{children:"폰트 굵기"})]}),e.jsxs(s,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"textTransform"}),e.jsx(t,{children:"'none' | 'uppercase' | 'lowercase'"}),e.jsx(t,{children:"'uppercase'"}),e.jsx(t,{children:"텍스트 변환"})]})]})]})}),e.jsx(n,{title:"Fill Width Mode",description:"fillWidth={true}일 때 단어가 전체 너비에 균등 배치됩니다."}),e.jsxs(p,{spacing:4,children:[e.jsx(l,{sx:{p:4,backgroundColor:"grey.50"},children:e.jsx(a,{text:"DESIGN SYSTEM"})}),e.jsx(l,{sx:{p:4,backgroundColor:"grey.900",color:"white"},children:e.jsx(a,{text:"WE CREATE EXPERIENCES",sx:{color:"white"}})}),e.jsx(l,{sx:{p:4,backgroundColor:"primary.main",color:"white"},children:e.jsx(a,{text:"BOLD TYPOGRAPHY",sx:{color:"white"}})})]}),e.jsx(n,{title:"Word Spacing Mode",description:"fillWidth={false}일 때 word-spacing으로 간격을 조절합니다."}),e.jsxs(p,{spacing:4,children:[e.jsx(l,{sx:{p:4,border:"1px solid",borderColor:"divider"},children:e.jsx(a,{text:"Hello World",fillWidth:!1,minWordSpacing:.5,textTransform:"none"})}),e.jsx(l,{sx:{p:4,border:"1px solid",borderColor:"divider"},children:e.jsx(a,{text:"Creative Studio",fillWidth:!1,minWordSpacing:2,textTransform:"none"})})]}),e.jsx(n,{title:"Multiline Headlines",description:"StretchedHeadlineMultiline으로 여러 줄을 배치합니다."}),e.jsxs(p,{spacing:4,children:[e.jsx(l,{sx:{p:4,backgroundColor:"grey.50"},children:e.jsx(S,{lines:["WE CREATE","DIGITAL","EXPERIENCES"],gap:0})}),e.jsx(l,{sx:{p:4,backgroundColor:"grey.900"},children:e.jsx(S,{lines:["INNOVATION","MEETS","DESIGN"],gap:1,headlineProps:{sx:{color:"white"}}})})]}),e.jsx(n,{title:"Font Size Variations",description:"다양한 폰트 크기 옵션입니다."}),e.jsxs(p,{spacing:3,children:[e.jsx(l,{sx:{p:2,border:"1px solid",borderColor:"divider"},children:e.jsx(a,{text:"SMALL SIZE",fontSize:"1.5rem"})}),e.jsx(l,{sx:{p:2,border:"1px solid",borderColor:"divider"},children:e.jsx(a,{text:"MEDIUM SIZE",fontSize:"3rem"})}),e.jsx(l,{sx:{p:2,border:"1px solid",borderColor:"divider"},children:e.jsx(a,{text:"LARGE SIZE",fontSize:"5rem"})})]}),e.jsx(n,{title:"Animated Variant",description:"스크롤하여 애니메이션을 확인하세요."}),e.jsx(l,{sx:{height:100}}),e.jsxs(p,{spacing:6,children:[e.jsx(l,{sx:{p:6,backgroundColor:"grey.900"},children:e.jsx(a,{text:"SCROLL TRIGGERED",variant:"animated",sx:{color:"white"}})}),e.jsx(l,{sx:{p:6,backgroundColor:"primary.main"},children:e.jsx(S,{lines:["FUTURE","OF","DESIGN"],gap:0,headlineProps:{variant:"animated",sx:{color:"white"}}})})]}),e.jsx(n,{title:"Usage Example",description:"코드 사용 예시입니다."}),e.jsx(l,{component:"pre",sx:{backgroundColor:"grey.100",p:3,fontSize:13,fontFamily:"monospace",overflow:"auto",lineHeight:1.6},children:`// 기본 사용
<StretchedHeadline text="DESIGN SYSTEM" />

// 여러 줄
<StretchedHeadlineMultiline
  lines={['WE CREATE', 'DIGITAL', 'EXPERIENCES']}
  gap={0}
/>

// 애니메이션
<StretchedHeadline
  text="SCROLL TRIGGERED"
  variant="animated"
/>`})]})]})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'DESIGN SYSTEM',
    fillWidth: true,
    variant: 'static',
    textTransform: 'uppercase'
  }
}`,...x.parameters?.docs?.source},description:{story:"기본 사용",...x.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <DocumentTitle title="StretchedHeadline" status="Available" note="Hero typography that fills container width" brandName="Typography" systemName="Starter Kit" version="1.0" />
      <PageContainer>
        <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          StretchedHeadline
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{
        mb: 4
      }}>
          단어 간격을 동적으로 늘려 컨테이너 전체 너비를 채우는 히어로 타이포그래피 컴포넌트입니다.
          각 단어를 개별 span으로 분리하고 flexbox의 space-between으로 배치합니다.
        </Typography>

        <SectionTitle title="Props" description="StretchedHeadline 컴포넌트의 Props 목록입니다." />
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
              }}>text</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>표시할 텍스트 (필수)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>fillWidth</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>true</TableCell>
                <TableCell>전체 너비 채우기 (space-between)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>variant</TableCell>
                <TableCell>&apos;static&apos; | &apos;animated&apos;</TableCell>
                <TableCell>&apos;static&apos;</TableCell>
                <TableCell>애니메이션 variant</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>fontSize</TableCell>
                <TableCell>string | number</TableCell>
                <TableCell>clamp(2rem, 8vw, 6rem)</TableCell>
                <TableCell>폰트 크기</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>fontWeight</TableCell>
                <TableCell>number</TableCell>
                <TableCell>900</TableCell>
                <TableCell>폰트 굵기</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>textTransform</TableCell>
                <TableCell>&apos;none&apos; | &apos;uppercase&apos; | &apos;lowercase&apos;</TableCell>
                <TableCell>&apos;uppercase&apos;</TableCell>
                <TableCell>텍스트 변환</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="Fill Width Mode" description="fillWidth={true}일 때 단어가 전체 너비에 균등 배치됩니다." />
        <Stack spacing={4}>
          <Box sx={{
          p: 4,
          backgroundColor: 'grey.50'
        }}>
            <StretchedHeadline text="DESIGN SYSTEM" />
          </Box>
          <Box sx={{
          p: 4,
          backgroundColor: 'grey.900',
          color: 'white'
        }}>
            <StretchedHeadline text="WE CREATE EXPERIENCES" sx={{
            color: 'white'
          }} />
          </Box>
          <Box sx={{
          p: 4,
          backgroundColor: 'primary.main',
          color: 'white'
        }}>
            <StretchedHeadline text="BOLD TYPOGRAPHY" sx={{
            color: 'white'
          }} />
          </Box>
        </Stack>

        <SectionTitle title="Word Spacing Mode" description="fillWidth={false}일 때 word-spacing으로 간격을 조절합니다." />
        <Stack spacing={4}>
          <Box sx={{
          p: 4,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <StretchedHeadline text="Hello World" fillWidth={false} minWordSpacing={0.5} textTransform="none" />
          </Box>
          <Box sx={{
          p: 4,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <StretchedHeadline text="Creative Studio" fillWidth={false} minWordSpacing={2} textTransform="none" />
          </Box>
        </Stack>

        <SectionTitle title="Multiline Headlines" description="StretchedHeadlineMultiline으로 여러 줄을 배치합니다." />
        <Stack spacing={4}>
          <Box sx={{
          p: 4,
          backgroundColor: 'grey.50'
        }}>
            <StretchedHeadlineMultiline lines={['WE CREATE', 'DIGITAL', 'EXPERIENCES']} gap={0} />
          </Box>
          <Box sx={{
          p: 4,
          backgroundColor: 'grey.900'
        }}>
            <StretchedHeadlineMultiline lines={['INNOVATION', 'MEETS', 'DESIGN']} gap={1} headlineProps={{
            sx: {
              color: 'white'
            }
          }} />
          </Box>
        </Stack>

        <SectionTitle title="Font Size Variations" description="다양한 폰트 크기 옵션입니다." />
        <Stack spacing={3}>
          <Box sx={{
          p: 2,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <StretchedHeadline text="SMALL SIZE" fontSize="1.5rem" />
          </Box>
          <Box sx={{
          p: 2,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <StretchedHeadline text="MEDIUM SIZE" fontSize="3rem" />
          </Box>
          <Box sx={{
          p: 2,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <StretchedHeadline text="LARGE SIZE" fontSize="5rem" />
          </Box>
        </Stack>

        <SectionTitle title="Animated Variant" description="스크롤하여 애니메이션을 확인하세요." />
        <Box sx={{
        height: 100
      }} />
        <Stack spacing={6}>
          <Box sx={{
          p: 6,
          backgroundColor: 'grey.900'
        }}>
            <StretchedHeadline text="SCROLL TRIGGERED" variant="animated" sx={{
            color: 'white'
          }} />
          </Box>
          <Box sx={{
          p: 6,
          backgroundColor: 'primary.main'
        }}>
            <StretchedHeadlineMultiline lines={['FUTURE', 'OF', 'DESIGN']} gap={0} headlineProps={{
            variant: 'animated',
            sx: {
              color: 'white'
            }
          }} />
          </Box>
        </Stack>

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
<StretchedHeadline text="DESIGN SYSTEM" />

// 여러 줄
<StretchedHeadlineMultiline
  lines={['WE CREATE', 'DIGITAL', 'EXPERIENCES']}
  gap={0}
/>

// 애니메이션
<StretchedHeadline
  text="SCROLL TRIGGERED"
  variant="animated"
/>\`}
        </Box>
      </PageContainer>
    </>
}`,...m.parameters?.docs?.source},description:{story:"문서 및 데모",...m.parameters?.docs?.description}}};const Q=["Default","Documentation"];export{x as Default,m as Documentation,Q as __namedExportsOrder,J as default};
