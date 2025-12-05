import{j as e}from"./iframe-q-XN_VZM.js";import{D as I,P as q,S as d}from"./SectionTitle-B-E4QVff.js";import{B as i}from"./Box-Dmtu8wWb.js";import{T as l}from"./Typography-C8IUsM00.js";import{b as C,a as j,c as o,T as a,d as f}from"./TableRow-DxwoBvdd.js";import{T as v}from"./TableHead-CFjEf5Al.js";import{S as s}from"./Stack-BQqDyOBu.js";import{B as S}from"./Button-Coknce8O.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CDdqLoBf.js";import"./Container-q5yveaGP.js";import"./memoTheme-BW0efeYW.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./Grid-Dd6PAMTp.js";import"./isMuiElement-DpiUmZPP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-JbB1eRtB.js";import"./useTimeout-C6lNLwyh.js";import"./CircularProgress-K6SSDdjw.js";function n({children:t,heightMode:m="svh",heightRatio:T=1,minHeight:y,maxHeight:P,align:w="center",justify:k="center",background:r,overlay:c,isContained:R=!0,snap:W,sx:H,...B}){const D=()=>`${T*100}${m}`,M={start:"flex-start",center:"center",end:"flex-end",stretch:"stretch"},z={start:"flex-start",center:"center",end:"flex-end",between:"space-between",around:"space-around"},E=()=>r?r.startsWith("http")||r.startsWith("/")||r.startsWith("data:")?{backgroundImage:`url(${r})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}:{background:r}:{},O=()=>{if(!c)return null;let u;return typeof c=="number"?u=`rgba(0, 0, 0, ${c})`:u=c,{content:'""',position:"absolute",top:0,left:0,right:0,bottom:0,background:u,pointerEvents:"none"}};return e.jsx(i,{sx:{position:"relative",width:"100%",height:D(),minHeight:y,maxHeight:P,display:"flex",flexDirection:"column",alignItems:M[w]||"center",justifyContent:z[k]||"center",overflow:R?"hidden":"visible",scrollSnapAlign:W,...E(),...c&&{"&::before":O()},...H},...B,children:e.jsx(i,{sx:{position:"relative",zIndex:1,width:"100%",height:"100%",display:"contents"},children:t})})}function x(t){return e.jsx(n,{snap:"start",...t})}function F({children:t,snapType:m="mandatory",sx:T,...y}){return e.jsx(i,{sx:{height:"100svh",overflowY:"scroll",scrollSnapType:`y ${m}`,...T},...y,children:t})}n.__docgenInfo={description:`FullPageContainer 컴포넌트

100vh 또는 100svh 높이의 전체 화면 섹션 컨테이너.
Hero 섹션, 풀스크린 갤러리, 스크롤 스냅 레이아웃에 사용된다.

동작 방식:
1. heightMode에 따라 vh, svh, dvh 중 선택하여 높이 설정
2. 콘텐츠는 align, justify prop에 따라 정렬됨
3. background로 배경 이미지, 그라데이션 적용 가능
4. overlay로 어두운 오버레이 추가 가능

Props:
@param {ReactNode} children - 섹션 콘텐츠 [Required]
@param {string} heightMode - 높이 모드 ('vh' | 'svh' | 'dvh') [Optional, 기본값: 'svh']
@param {number} heightRatio - 높이 비율 (0.5 = 50vh) [Optional, 기본값: 1]
@param {string} minHeight - 최소 높이 [Optional]
@param {string} maxHeight - 최대 높이 [Optional]
@param {string} align - 수직 정렬 ('start' | 'center' | 'end' | 'stretch') [Optional, 기본값: 'center']
@param {string} justify - 수평 정렬 ('start' | 'center' | 'end' | 'between' | 'around') [Optional, 기본값: 'center']
@param {string} background - 배경 이미지 URL 또는 CSS 값 [Optional]
@param {string|number} overlay - 오버레이 색상 또는 불투명도 [Optional]
@param {boolean} isContained - overflow hidden 적용 [Optional, 기본값: true]
@param {string} snap - 스크롤 스냅 정렬 ('start' | 'center' | 'end') [Optional]
@param {object} sx - 추가 스타일 [Optional]

Example usage:
<FullPageContainer background="hero.jpg" overlay={0.5}>
  <HeroContent />
</FullPageContainer>
<FullPageContainer heightRatio={0.5} align="end">
  <CtaSection />
</FullPageContainer>`,methods:[],displayName:"FullPageContainer",props:{heightMode:{defaultValue:{value:"'svh'",computed:!1},required:!1},heightRatio:{defaultValue:{value:"1",computed:!1},required:!1},align:{defaultValue:{value:"'center'",computed:!1},required:!1},justify:{defaultValue:{value:"'center'",computed:!1},required:!1},isContained:{defaultValue:{value:"true",computed:!1},required:!1}}};x.__docgenInfo={description:`FullPageSection 컴포넌트

스크롤 스냅 컨테이너 내에서 사용되는 개별 섹션.
FullPageContainer를 확장하여 스크롤 스냅 기능을 기본으로 포함.

Props:
모든 FullPageContainer props를 상속

Example usage:
<FullPageSnap>
  <FullPageSection background="section1.jpg">
    <Section1Content />
  </FullPageSection>
  <FullPageSection background="section2.jpg">
    <Section2Content />
  </FullPageSection>
</FullPageSnap>`,methods:[],displayName:"FullPageSection"};F.__docgenInfo={description:`FullPageSnap 컴포넌트

스크롤 스냅이 적용된 전체 화면 섹션 컨테이너.
내부에 FullPageSection들을 배치하여 풀페이지 스크롤 효과를 구현.

Props:
@param {ReactNode} children - FullPageSection 컴포넌트들 [Required]
@param {string} snapType - 스냅 타입 ('mandatory' | 'proximity') [Optional, 기본값: 'mandatory']
@param {object} sx - 추가 스타일 [Optional]

Example usage:
<FullPageSnap>
  <FullPageSection>Section 1</FullPageSection>
  <FullPageSection>Section 2</FullPageSection>
</FullPageSnap>`,methods:[],displayName:"FullPageSnap",props:{snapType:{defaultValue:{value:"'mandatory'",computed:!1},required:!1}}};const re={title:"Custom Component/Layout/FullPageContainer",component:n,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
## FullPageContainer

100vh/svh 높이의 전체 화면 섹션 컨테이너.

### 용도
- Hero 섹션
- 풀스크린 갤러리
- 스크롤 스냅 레이아웃
        `}}},argTypes:{heightMode:{control:"select",options:["vh","svh","dvh"],description:"높이 단위"},heightRatio:{control:{type:"range",min:.3,max:1,step:.1},description:"높이 비율"},align:{control:"select",options:["start","center","end","stretch"],description:"수직 정렬"},justify:{control:"select",options:["start","center","end","between","around"],description:"수평 정렬"}}},p={args:{heightMode:"svh",heightRatio:1,align:"center",justify:"center",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},render:t=>e.jsx(n,{...t,children:e.jsx(l,{variant:"h2",sx:{color:"white",fontWeight:700},children:"Full Page Container"})})},h={parameters:{layout:"padded"},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(I,{title:"FullPageContainer",status:"Available",note:"Full screen section container",brandName:"Layout",systemName:"Starter Kit",version:"1.0"}),e.jsxs(q,{children:[e.jsx(l,{variant:"h4",sx:{fontWeight:700,mb:1},children:"FullPageContainer"}),e.jsx(l,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"100vh, 100svh, 100dvh 높이의 전체 화면 섹션 컨테이너입니다. Hero 섹션, 풀스크린 갤러리, 스크롤 스냅 레이아웃에 사용됩니다."}),e.jsx(d,{title:"Height Modes",description:"다양한 뷰포트 높이 단위를 지원합니다."}),e.jsx(C,{children:e.jsxs(j,{size:"small",children:[e.jsx(v,{children:e.jsxs(o,{children:[e.jsx(a,{sx:{fontWeight:600},children:"Mode"}),e.jsx(a,{sx:{fontWeight:600},children:"CSS Unit"}),e.jsx(a,{sx:{fontWeight:600},children:"Description"})]})}),e.jsxs(f,{children:[e.jsxs(o,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"vh"}),e.jsx(a,{children:"100vh"}),e.jsx(a,{children:"기본 뷰포트 높이 (주소바 포함)"})]}),e.jsxs(o,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"svh"}),e.jsx(a,{children:"100svh"}),e.jsx(a,{children:"Small viewport height (주소바 표시 시 높이)"})]}),e.jsxs(o,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"dvh"}),e.jsx(a,{children:"100dvh"}),e.jsx(a,{children:"Dynamic viewport height (주소바에 따라 동적 변화)"})]})]})]})}),e.jsx(d,{title:"Props",description:"FullPageContainer 컴포넌트의 Props입니다."}),e.jsx(C,{children:e.jsxs(j,{size:"small",children:[e.jsx(v,{children:e.jsxs(o,{children:[e.jsx(a,{sx:{fontWeight:600},children:"Prop"}),e.jsx(a,{sx:{fontWeight:600},children:"Type"}),e.jsx(a,{sx:{fontWeight:600},children:"Default"}),e.jsx(a,{sx:{fontWeight:600},children:"Description"})]})}),e.jsxs(f,{children:[e.jsxs(o,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"heightMode"}),e.jsx(a,{children:"'vh' | 'svh' | 'dvh'"}),e.jsx(a,{children:"'svh'"}),e.jsx(a,{children:"높이 단위"})]}),e.jsxs(o,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"heightRatio"}),e.jsx(a,{children:"number"}),e.jsx(a,{children:"1"}),e.jsx(a,{children:"높이 비율 (0.5 = 50vh)"})]}),e.jsxs(o,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"align"}),e.jsx(a,{children:"'start' | 'center' | 'end' | 'stretch'"}),e.jsx(a,{children:"'center'"}),e.jsx(a,{children:"수직 정렬"})]}),e.jsxs(o,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"justify"}),e.jsx(a,{children:"'start' | 'center' | 'end' | 'between' | 'around'"}),e.jsx(a,{children:"'center'"}),e.jsx(a,{children:"수평 정렬"})]}),e.jsxs(o,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"background"}),e.jsx(a,{children:"string"}),e.jsx(a,{children:"-"}),e.jsx(a,{children:"배경 이미지 URL 또는 CSS 값"})]}),e.jsxs(o,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"overlay"}),e.jsx(a,{children:"number | string"}),e.jsx(a,{children:"-"}),e.jsx(a,{children:"오버레이 (숫자: 불투명도, 문자열: 색상)"})]}),e.jsxs(o,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"snap"}),e.jsx(a,{children:"'start' | 'center' | 'end'"}),e.jsx(a,{children:"-"}),e.jsx(a,{children:"스크롤 스냅 정렬"})]})]})]})}),e.jsx(d,{title:"Height Ratio Examples",description:"다양한 높이 비율입니다."}),e.jsxs(s,{spacing:2,children:[e.jsxs(i,{sx:{border:"1px solid",borderColor:"divider",overflow:"hidden"},children:[e.jsx(l,{variant:"caption",sx:{p:1,display:"block",backgroundColor:"grey.100"},children:"heightRatio=0.3 (30vh)"}),e.jsx(n,{heightRatio:.3,background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",children:e.jsx(l,{variant:"h5",sx:{color:"white"},children:"30% Height"})})]}),e.jsxs(i,{sx:{border:"1px solid",borderColor:"divider",overflow:"hidden"},children:[e.jsx(l,{variant:"caption",sx:{p:1,display:"block",backgroundColor:"grey.100"},children:"heightRatio=0.5 (50vh)"}),e.jsx(n,{heightRatio:.5,background:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",children:e.jsx(l,{variant:"h5",sx:{color:"white"},children:"50% Height"})})]})]}),e.jsx(d,{title:"Sub Components",description:"함께 사용하는 컴포넌트들입니다."}),e.jsx(C,{children:e.jsxs(j,{size:"small",children:[e.jsx(v,{children:e.jsxs(o,{children:[e.jsx(a,{sx:{fontWeight:600},children:"Component"}),e.jsx(a,{sx:{fontWeight:600},children:"Description"})]})}),e.jsxs(f,{children:[e.jsxs(o,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"FullPageSection"}),e.jsx(a,{children:'스크롤 스냅이 기본 적용된 섹션 (snap="start")'})]}),e.jsxs(o,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"FullPageSnap"}),e.jsx(a,{children:"스크롤 스냅 컨테이너"})]})]})]})}),e.jsx(d,{title:"Usage Example",description:"코드 사용 예시입니다."}),e.jsx(i,{component:"pre",sx:{backgroundColor:"grey.100",p:3,fontSize:13,fontFamily:"monospace",overflow:"auto",lineHeight:1.6},children:`// Hero 섹션
<FullPageContainer
  background="https://example.com/hero.jpg"
  overlay={0.4}
  align="center"
  justify="center"
>
  <Typography variant="h1" sx={{ color: 'white' }}>
    Welcome
  </Typography>
  <Button variant="contained">Get Started</Button>
</FullPageContainer>

// 절반 높이 섹션
<FullPageContainer heightRatio={0.5} align="end">
  <CtaSection />
</FullPageContainer>

// 스크롤 스냅 페이지
<FullPageSnap>
  <FullPageSection background="section1.jpg">
    <Section1 />
  </FullPageSection>
  <FullPageSection background="section2.jpg">
    <Section2 />
  </FullPageSection>
  <FullPageSection background="section3.jpg">
    <Section3 />
  </FullPageSection>
</FullPageSnap>`})]})]})},g={render:()=>e.jsx(n,{background:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920",overlay:.4,children:e.jsxs(s,{spacing:3,alignItems:"center",sx:{textAlign:"center",px:4},children:[e.jsx(l,{variant:"overline",sx:{color:"rgba(255,255,255,0.8)",letterSpacing:4},children:"Welcome to"}),e.jsx(l,{variant:"h1",sx:{color:"white",fontWeight:700,fontSize:{xs:"2.5rem",md:"4rem"}},children:"Explore the Mountains"}),e.jsx(l,{variant:"h6",sx:{color:"rgba(255,255,255,0.9)",maxWidth:600,fontWeight:400},children:"Discover breathtaking landscapes and embark on adventures that will stay with you forever."}),e.jsxs(s,{direction:"row",spacing:2,sx:{mt:2},children:[e.jsx(S,{variant:"contained",size:"large",children:"Get Started"}),e.jsx(S,{variant:"outlined",size:"large",sx:{color:"white",borderColor:"white"},children:"Learn More"})]})]})})},b={render:()=>e.jsxs(F,{children:[e.jsx(x,{background:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920",overlay:.3,children:e.jsxs(s,{alignItems:"center",spacing:2,children:[e.jsx(l,{variant:"h2",sx:{color:"white",fontWeight:700},children:"Section 1"}),e.jsx(l,{variant:"body1",sx:{color:"white"},children:"Scroll down to see more"})]})}),e.jsx(x,{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",children:e.jsxs(s,{alignItems:"center",spacing:2,children:[e.jsx(l,{variant:"h2",sx:{color:"white",fontWeight:700},children:"Section 2"}),e.jsx(l,{variant:"body1",sx:{color:"white"},children:"Gradient background"})]})}),e.jsx(x,{background:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920",overlay:.4,children:e.jsxs(s,{alignItems:"center",spacing:2,children:[e.jsx(l,{variant:"h2",sx:{color:"white",fontWeight:700},children:"Section 3"}),e.jsx(l,{variant:"body1",sx:{color:"white"},children:"Another image background"})]})})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    heightMode: 'svh',
    heightRatio: 1,
    align: 'center',
    justify: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  render: args => <FullPageContainer {...args}>
      <Typography variant="h2" sx={{
      color: 'white',
      fontWeight: 700
    }}>
        Full Page Container
      </Typography>
    </FullPageContainer>
}`,...p.parameters?.docs?.source},description:{story:"기본 사용",...p.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <>
      <DocumentTitle title="FullPageContainer" status="Available" note="Full screen section container" brandName="Layout" systemName="Starter Kit" version="1.0" />
      <PageContainer>
        <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          FullPageContainer
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{
        mb: 4
      }}>
          100vh, 100svh, 100dvh 높이의 전체 화면 섹션 컨테이너입니다.
          Hero 섹션, 풀스크린 갤러리, 스크롤 스냅 레이아웃에 사용됩니다.
        </Typography>

        <SectionTitle title="Height Modes" description="다양한 뷰포트 높이 단위를 지원합니다." />
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{
                fontWeight: 600
              }}>Mode</TableCell>
                <TableCell sx={{
                fontWeight: 600
              }}>CSS Unit</TableCell>
                <TableCell sx={{
                fontWeight: 600
              }}>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>vh</TableCell>
                <TableCell>100vh</TableCell>
                <TableCell>기본 뷰포트 높이 (주소바 포함)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>svh</TableCell>
                <TableCell>100svh</TableCell>
                <TableCell>Small viewport height (주소바 표시 시 높이)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>dvh</TableCell>
                <TableCell>100dvh</TableCell>
                <TableCell>Dynamic viewport height (주소바에 따라 동적 변화)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="Props" description="FullPageContainer 컴포넌트의 Props입니다." />
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
              }}>heightMode</TableCell>
                <TableCell>&apos;vh&apos; | &apos;svh&apos; | &apos;dvh&apos;</TableCell>
                <TableCell>&apos;svh&apos;</TableCell>
                <TableCell>높이 단위</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>heightRatio</TableCell>
                <TableCell>number</TableCell>
                <TableCell>1</TableCell>
                <TableCell>높이 비율 (0.5 = 50vh)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>align</TableCell>
                <TableCell>&apos;start&apos; | &apos;center&apos; | &apos;end&apos; | &apos;stretch&apos;</TableCell>
                <TableCell>&apos;center&apos;</TableCell>
                <TableCell>수직 정렬</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>justify</TableCell>
                <TableCell>&apos;start&apos; | &apos;center&apos; | &apos;end&apos; | &apos;between&apos; | &apos;around&apos;</TableCell>
                <TableCell>&apos;center&apos;</TableCell>
                <TableCell>수평 정렬</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>background</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>배경 이미지 URL 또는 CSS 값</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>overlay</TableCell>
                <TableCell>number | string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>오버레이 (숫자: 불투명도, 문자열: 색상)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>snap</TableCell>
                <TableCell>&apos;start&apos; | &apos;center&apos; | &apos;end&apos;</TableCell>
                <TableCell>-</TableCell>
                <TableCell>스크롤 스냅 정렬</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="Height Ratio Examples" description="다양한 높이 비율입니다." />
        <Stack spacing={2}>
          <Box sx={{
          border: '1px solid',
          borderColor: 'divider',
          overflow: 'hidden'
        }}>
            <Typography variant="caption" sx={{
            p: 1,
            display: 'block',
            backgroundColor: 'grey.100'
          }}>
              heightRatio=0.3 (30vh)
            </Typography>
            <FullPageContainer heightRatio={0.3} background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
              <Typography variant="h5" sx={{
              color: 'white'
            }}>30% Height</Typography>
            </FullPageContainer>
          </Box>

          <Box sx={{
          border: '1px solid',
          borderColor: 'divider',
          overflow: 'hidden'
        }}>
            <Typography variant="caption" sx={{
            p: 1,
            display: 'block',
            backgroundColor: 'grey.100'
          }}>
              heightRatio=0.5 (50vh)
            </Typography>
            <FullPageContainer heightRatio={0.5} background="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)">
              <Typography variant="h5" sx={{
              color: 'white'
            }}>50% Height</Typography>
            </FullPageContainer>
          </Box>
        </Stack>

        <SectionTitle title="Sub Components" description="함께 사용하는 컴포넌트들입니다." />
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{
                fontWeight: 600
              }}>Component</TableCell>
                <TableCell sx={{
                fontWeight: 600
              }}>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>FullPageSection</TableCell>
                <TableCell>스크롤 스냅이 기본 적용된 섹션 (snap=&quot;start&quot;)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>FullPageSnap</TableCell>
                <TableCell>스크롤 스냅 컨테이너</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="Usage Example" description="코드 사용 예시입니다." />
        <Box component="pre" sx={{
        backgroundColor: 'grey.100',
        p: 3,
        fontSize: 13,
        fontFamily: 'monospace',
        overflow: 'auto',
        lineHeight: 1.6
      }}>
          {\`// Hero 섹션
<FullPageContainer
  background="https://example.com/hero.jpg"
  overlay={0.4}
  align="center"
  justify="center"
>
  <Typography variant="h1" sx={{ color: 'white' }}>
    Welcome
  </Typography>
  <Button variant="contained">Get Started</Button>
</FullPageContainer>

// 절반 높이 섹션
<FullPageContainer heightRatio={0.5} align="end">
  <CtaSection />
</FullPageContainer>

// 스크롤 스냅 페이지
<FullPageSnap>
  <FullPageSection background="section1.jpg">
    <Section1 />
  </FullPageSection>
  <FullPageSection background="section2.jpg">
    <Section2 />
  </FullPageSection>
  <FullPageSection background="section3.jpg">
    <Section3 />
  </FullPageSection>
</FullPageSnap>\`}
        </Box>
      </PageContainer>
    </>
}`,...h.parameters?.docs?.source},description:{story:"문서 및 데모",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <FullPageContainer background="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920" overlay={0.4}>
      <Stack spacing={3} alignItems="center" sx={{
      textAlign: 'center',
      px: 4
    }}>
        <Typography variant="overline" sx={{
        color: 'rgba(255,255,255,0.8)',
        letterSpacing: 4
      }}>
          Welcome to
        </Typography>
        <Typography variant="h1" sx={{
        color: 'white',
        fontWeight: 700,
        fontSize: {
          xs: '2.5rem',
          md: '4rem'
        }
      }}>
          Explore the Mountains
        </Typography>
        <Typography variant="h6" sx={{
        color: 'rgba(255,255,255,0.9)',
        maxWidth: 600,
        fontWeight: 400
      }}>
          Discover breathtaking landscapes and embark on adventures that will stay with you forever.
        </Typography>
        <Stack direction="row" spacing={2} sx={{
        mt: 2
      }}>
          <Button variant="contained" size="large">
            Get Started
          </Button>
          <Button variant="outlined" size="large" sx={{
          color: 'white',
          borderColor: 'white'
        }}>
            Learn More
          </Button>
        </Stack>
      </Stack>
    </FullPageContainer>
}`,...g.parameters?.docs?.source},description:{story:"Hero 섹션 예시",...g.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <FullPageSnap>
      <FullPageSection background="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920" overlay={0.3}>
        <Stack alignItems="center" spacing={2}>
          <Typography variant="h2" sx={{
          color: 'white',
          fontWeight: 700
        }}>
            Section 1
          </Typography>
          <Typography variant="body1" sx={{
          color: 'white'
        }}>
            Scroll down to see more
          </Typography>
        </Stack>
      </FullPageSection>

      <FullPageSection background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
        <Stack alignItems="center" spacing={2}>
          <Typography variant="h2" sx={{
          color: 'white',
          fontWeight: 700
        }}>
            Section 2
          </Typography>
          <Typography variant="body1" sx={{
          color: 'white'
        }}>
            Gradient background
          </Typography>
        </Stack>
      </FullPageSection>

      <FullPageSection background="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920" overlay={0.4}>
        <Stack alignItems="center" spacing={2}>
          <Typography variant="h2" sx={{
          color: 'white',
          fontWeight: 700
        }}>
            Section 3
          </Typography>
          <Typography variant="body1" sx={{
          color: 'white'
        }}>
            Another image background
          </Typography>
        </Stack>
      </FullPageSection>
    </FullPageSnap>
}`,...b.parameters?.docs?.source},description:{story:"스크롤 스냅 예시",...b.parameters?.docs?.description}}};const ie=["Default","Documentation","HeroExample","ScrollSnapExample"];export{p as Default,h as Documentation,g as HeroExample,b as ScrollSnapExample,ie as __namedExportsOrder,re as default};
