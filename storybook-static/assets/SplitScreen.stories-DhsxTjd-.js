import{j as e}from"./iframe-q-XN_VZM.js";import{D as _,P as U,S as C}from"./SectionTitle-B-E4QVff.js";import{B as i}from"./Box-Dmtu8wWb.js";import{T as o}from"./Typography-C8IUsM00.js";import{b as W,a as B,c as p,T as t,d as P}from"./TableRow-DxwoBvdd.js";import{T as O}from"./TableHead-CFjEf5Al.js";import{S as h}from"./Stack-BQqDyOBu.js";import{T as A}from"./TextField-DgQ3k6VB.js";import{B as R}from"./Button-Coknce8O.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CDdqLoBf.js";import"./Container-q5yveaGP.js";import"./memoTheme-BW0efeYW.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./Grid-Dd6PAMTp.js";import"./isMuiElement-DpiUmZPP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-Xw8rJOQc.js";import"./useTimeout-C6lNLwyh.js";import"./isHostComponent-DVu5iVWx.js";import"./Select-DlpVDPsS.js";import"./useSlotProps-CYaCcMSY.js";import"./Paper-ri-B2SDS.js";import"./ownerWindow-CO8Ksk3k.js";import"./debounce-Be36O1Ab.js";import"./Grow-Cmv2id48.js";import"./utils-UDy2T9Xi.js";import"./index-DUeF1Pkm.js";import"./index-C2SgXQAb.js";import"./getReactElementRef-CJ7j01sk.js";import"./mergeSlotProps-Cg99X4s0.js";import"./Modal-Cp6PhS6B.js";import"./ButtonBase-JbB1eRtB.js";import"./utils-Bug588nc.js";import"./useControlled-Dx2BjZdt.js";import"./createSvgIcon-CvYdi5pS.js";import"./InputBase--W6Qy_gV.js";import"./InputLabel-DbttPIAK.js";import"./FormLabel-Cx8V1pjo.js";import"./FormHelperText-C_TeGrMm.js";import"./CircularProgress-K6SSDdjw.js";function m({left:a,right:n,direction:r="row",ratio:s="50:50",gap:x=0,stackAt:d="sm",stackOrder:g="normal",minHeight:j,isFullHeight:k=!1,leftSx:w,rightSx:I,sx:E,...N}){const q=()=>{if(Array.isArray(s))return s;const l={"50:50":[50,50],"60:40":[60,40],"40:60":[40,60],"70:30":[70,30],"30:70":[30,70],"75:25":[75,25],"25:75":[25,75]};return l[s]?l[s]:typeof s=="string"&&s.includes(":")?s.split(":").map(Number):[50,50]},[z,V]=q(),L=()=>{if(d==="none")return r;const l=g==="reverse"?"column-reverse":"column";return{xs:{xs:l,sm:r},sm:{xs:l,sm:l,md:r},md:{xs:l,sm:l,md:l,lg:r},lg:{xs:l,sm:l,md:l,lg:l,xl:r}}[d]||r},F=l=>{if(d==="none")return`0 0 ${l}%`;const c="0 0 auto",y=`0 0 ${l}%`;return{xs:{xs:c,sm:y},sm:{xs:c,sm:c,md:y},md:{xs:c,sm:c,md:c,lg:y},lg:{xs:c,sm:c,md:c,lg:c,xl:y}}[d]||y};return e.jsxs(i,{sx:{display:"flex",flexDirection:L(),gap:x,minHeight:j,height:k?"100svh":void 0,width:"100%",...E},...N,children:[e.jsx(i,{sx:{flex:F(z),minWidth:0,minHeight:0,...w},children:a}),e.jsx(i,{sx:{flex:F(V),minWidth:0,minHeight:0,...I},children:n})]})}function D({children:a,position:n="top",offset:r=0,height:s="100vh",sx:x,...d}){const g=typeof r=="number"?`${r}px`:r;return e.jsx(i,{sx:{position:"sticky",[n]:g,height:s,overflow:"hidden",...x},...d,children:a})}function H({children:a,background:n,overlay:r,align:s="center",justify:x="center",sx:d,...g}){const j={start:"flex-start",center:"center",end:"flex-end"},k=()=>n?n.startsWith("http")||n.startsWith("/")||n.startsWith("data:")?{backgroundImage:`url(${n})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:n}:{},w=()=>r?{content:'""',position:"absolute",top:0,left:0,right:0,bottom:0,background:typeof r=="number"?`rgba(0,0,0,${r})`:r,pointerEvents:"none"}:null;return e.jsx(i,{sx:{position:"relative",height:"100%",width:"100%",display:"flex",flexDirection:"column",alignItems:j[s]||"center",justifyContent:j[x]||"center",...k(),...r&&{"&::before":w()},...d},...g,children:e.jsx(i,{sx:{position:"relative",zIndex:1},children:a})})}m.__docgenInfo={description:`SplitScreen 컴포넌트

화면을 두 영역으로 분할하는 레이아웃 컴포넌트.
기본 50:50 분할부터 커스텀 비율까지 지원한다.

동작 방식:
1. direction에 따라 가로(row) 또는 세로(column) 분할
2. ratio로 분할 비율 조정 (기본 50:50)
3. stackAt 브레이크포인트에서 스택 레이아웃으로 전환
4. 각 영역에 개별 배경, 스타일 적용 가능

Props:
@param {ReactNode} left - 왼쪽(또는 상단) 영역 콘텐츠 [Required]
@param {ReactNode} right - 오른쪽(또는 하단) 영역 콘텐츠 [Required]
@param {string} direction - 분할 방향 ('row' | 'column') [Optional, 기본값: 'row']
@param {string|number[]} ratio - 분할 비율 ('50:50' | '60:40' | '70:30' | [number, number]) [Optional, 기본값: '50:50']
@param {number} gap - 영역 간 간격 [Optional, 기본값: 0]
@param {string} stackAt - 스택 전환 브레이크포인트 ('xs' | 'sm' | 'md' | 'lg' | 'none') [Optional, 기본값: 'sm']
@param {string} stackOrder - 스택 시 순서 ('normal' | 'reverse') [Optional, 기본값: 'normal']
@param {string} minHeight - 최소 높이 [Optional]
@param {boolean} isFullHeight - 100vh 높이 적용 [Optional, 기본값: false]
@param {object} leftSx - 왼쪽 영역 추가 스타일 [Optional]
@param {object} rightSx - 오른쪽 영역 추가 스타일 [Optional]
@param {object} sx - 컨테이너 추가 스타일 [Optional]

Example usage:
<SplitScreen
  left={<ImageSection />}
  right={<ContentSection />}
  ratio="60:40"
/>
<SplitScreen
  direction="column"
  left={<Header />}
  right={<Main />}
  ratio={[30, 70]}
  isFullHeight
/>`,methods:[],displayName:"SplitScreen",props:{direction:{defaultValue:{value:"'row'",computed:!1},required:!1},ratio:{defaultValue:{value:"'50:50'",computed:!1},required:!1},gap:{defaultValue:{value:"0",computed:!1},required:!1},stackAt:{defaultValue:{value:"'sm'",computed:!1},required:!1},stackOrder:{defaultValue:{value:"'normal'",computed:!1},required:!1},isFullHeight:{defaultValue:{value:"false",computed:!1},required:!1}}};D.__docgenInfo={description:`StickySection 컴포넌트

SplitScreen과 함께 사용하여 한쪽 영역을 sticky로 고정.
스크롤 시 반대편 콘텐츠가 스크롤되는 동안 고정 유지.

Props:
@param {ReactNode} children - 섹션 콘텐츠 [Required]
@param {string} position - sticky 위치 ('top' | 'bottom') [Optional, 기본값: 'top']
@param {string|number} offset - top/bottom 오프셋 [Optional, 기본값: 0]
@param {string} height - 섹션 높이 [Optional, 기본값: '100vh']
@param {object} sx - 추가 스타일 [Optional]

Example usage:
<SplitScreen
  left={
    <StickySection>
      <FixedImage />
    </StickySection>
  }
  right={<ScrollingContent />}
/>`,methods:[],displayName:"StickySection",props:{position:{defaultValue:{value:"'top'",computed:!1},required:!1},offset:{defaultValue:{value:"0",computed:!1},required:!1},height:{defaultValue:{value:"'100vh'",computed:!1},required:!1}}};H.__docgenInfo={description:`SplitOverlay 컴포넌트

SplitScreen 영역에 오버레이 효과를 적용하는 래퍼.

Props:
@param {ReactNode} children - 콘텐츠 [Required]
@param {string} background - 배경 이미지 URL 또는 CSS 값 [Optional]
@param {string|number} overlay - 오버레이 색상 또는 불투명도 [Optional]
@param {string} align - 콘텐츠 수직 정렬 [Optional, 기본값: 'center']
@param {string} justify - 콘텐츠 수평 정렬 [Optional, 기본값: 'center']
@param {object} sx - 추가 스타일 [Optional]

Example usage:
<SplitScreen
  left={
    <SplitOverlay background="hero.jpg" overlay={0.4}>
      <Content />
    </SplitOverlay>
  }
  right={<FormSection />}
/>`,methods:[],displayName:"SplitOverlay",props:{align:{defaultValue:{value:"'center'",computed:!1},required:!1},justify:{defaultValue:{value:"'center'",computed:!1},required:!1}}};const De={title:"Custom Component/Layout/SplitScreen",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
## SplitScreen

화면을 두 영역으로 분할하는 레이아웃 컴포넌트.

### 용도
- 로그인/회원가입 페이지
- 비교 레이아웃
- 이미지/콘텐츠 분할 섹션
        `}}},argTypes:{direction:{control:"select",options:["row","column"],description:"분할 방향"},ratio:{control:"select",options:["50:50","60:40","40:60","70:30","30:70"],description:"분할 비율"},stackAt:{control:"select",options:["xs","sm","md","lg","none"],description:"스택 전환 브레이크포인트"},isFullHeight:{control:"boolean",description:"100vh 높이 적용"}}},v=({label:a,color:n="#667eea",height:r=300})=>e.jsx(i,{sx:{height:r,backgroundColor:n,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:600,fontSize:24},children:a}),u={args:{direction:"row",ratio:"50:50",stackAt:"sm",isFullHeight:!1,gap:0},render:a=>e.jsx(m,{...a,left:e.jsx(v,{label:"Left",color:"#667eea"}),right:e.jsx(v,{label:"Right",color:"#764ba2"})})},b={parameters:{layout:"padded"},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(_,{title:"SplitScreen",status:"Available",note:"Screen split layout component",brandName:"Layout",systemName:"Starter Kit",version:"1.0"}),e.jsxs(U,{children:[e.jsx(o,{variant:"h4",sx:{fontWeight:700,mb:1},children:"SplitScreen"}),e.jsx(o,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"화면을 두 영역으로 분할하는 레이아웃 컴포넌트입니다. 다양한 비율과 반응형 전환을 지원합니다."}),e.jsx(C,{title:"Props",description:"SplitScreen 컴포넌트의 Props입니다."}),e.jsx(W,{children:e.jsxs(B,{size:"small",children:[e.jsx(O,{children:e.jsxs(p,{children:[e.jsx(t,{sx:{fontWeight:600},children:"Prop"}),e.jsx(t,{sx:{fontWeight:600},children:"Type"}),e.jsx(t,{sx:{fontWeight:600},children:"Default"}),e.jsx(t,{sx:{fontWeight:600},children:"Description"})]})}),e.jsxs(P,{children:[e.jsxs(p,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"left"}),e.jsx(t,{children:"ReactNode"}),e.jsx(t,{children:"-"}),e.jsx(t,{children:"왼쪽(상단) 영역 콘텐츠"})]}),e.jsxs(p,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"right"}),e.jsx(t,{children:"ReactNode"}),e.jsx(t,{children:"-"}),e.jsx(t,{children:"오른쪽(하단) 영역 콘텐츠"})]}),e.jsxs(p,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"ratio"}),e.jsx(t,{children:"string | number[]"}),e.jsx(t,{children:"'50:50'"}),e.jsx(t,{children:"분할 비율"})]}),e.jsxs(p,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"direction"}),e.jsx(t,{children:"'row' | 'column'"}),e.jsx(t,{children:"'row'"}),e.jsx(t,{children:"분할 방향"})]}),e.jsxs(p,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"stackAt"}),e.jsx(t,{children:"'xs' | 'sm' | 'md' | 'lg' | 'none'"}),e.jsx(t,{children:"'sm'"}),e.jsx(t,{children:"스택 전환 브레이크포인트"})]}),e.jsxs(p,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"stackOrder"}),e.jsx(t,{children:"'normal' | 'reverse'"}),e.jsx(t,{children:"'normal'"}),e.jsx(t,{children:"스택 시 순서"})]}),e.jsxs(p,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"isFullHeight"}),e.jsx(t,{children:"boolean"}),e.jsx(t,{children:"false"}),e.jsx(t,{children:"100vh 높이 적용"})]})]})]})}),e.jsx(C,{title:"Ratio Presets",description:"자주 사용되는 분할 비율입니다."}),e.jsx(h,{spacing:3,children:["50:50","60:40","70:30"].map(a=>e.jsxs(i,{children:[e.jsxs(o,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:['ratio="',a,'"']}),e.jsx(m,{ratio:a,stackAt:"none",left:e.jsx(v,{label:a.split(":")[0]+"%",height:80,color:"#667eea"}),right:e.jsx(v,{label:a.split(":")[1]+"%",height:80,color:"#764ba2"})})]},a))}),e.jsx(C,{title:"Sub Components",description:"함께 사용하는 컴포넌트들입니다."}),e.jsx(W,{children:e.jsxs(B,{size:"small",children:[e.jsx(O,{children:e.jsxs(p,{children:[e.jsx(t,{sx:{fontWeight:600},children:"Component"}),e.jsx(t,{sx:{fontWeight:600},children:"Description"})]})}),e.jsxs(P,{children:[e.jsxs(p,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"StickySection"}),e.jsx(t,{children:"스크롤 시 고정되는 섹션"})]}),e.jsxs(p,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"SplitOverlay"}),e.jsx(t,{children:"배경 이미지 + 오버레이가 적용된 영역"})]})]})]})}),e.jsx(C,{title:"Usage Example",description:"코드 사용 예시입니다."}),e.jsx(i,{component:"pre",sx:{backgroundColor:"grey.100",p:3,fontSize:13,fontFamily:"monospace",overflow:"auto",lineHeight:1.6},children:`// 기본 50:50 분할
<SplitScreen
  left={<ImageSection />}
  right={<ContentSection />}
/>

// 60:40 비율
<SplitScreen
  ratio="60:40"
  left={<LargeSection />}
  right={<SmallSection />}
/>

// 배경 이미지 + 폼
<SplitScreen
  isFullHeight
  ratio="60:40"
  stackAt="md"
  left={
    <SplitOverlay
      background="https://example.com/bg.jpg"
      overlay={0.4}
    >
      <Typography variant="h2" sx={{ color: 'white' }}>
        Welcome
      </Typography>
    </SplitOverlay>
  }
  right={
    <Box sx={{ p: 4 }}>
      <LoginForm />
    </Box>
  }
/>

// Sticky 섹션
<SplitScreen
  left={
    <StickySection>
      <FixedImage />
    </StickySection>
  }
  right={<ScrollingContent />}
/>`})]})]})},f={render:()=>e.jsx(m,{isFullHeight:!0,ratio:"55:45",stackAt:"md",left:e.jsx(H,{background:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",overlay:.4,children:e.jsxs(h,{spacing:2,sx:{textAlign:"center",px:4},children:[e.jsx(o,{variant:"h3",sx:{color:"white",fontWeight:700},children:"Welcome Back"}),e.jsx(o,{variant:"body1",sx:{color:"rgba(255,255,255,0.9)"},children:"Sign in to continue your journey"})]})}),right:e.jsxs(i,{sx:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",p:{xs:4,md:8},backgroundColor:"background.paper"},children:[e.jsx(o,{variant:"h4",sx:{fontWeight:700,mb:1},children:"Sign In"}),e.jsx(o,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"Enter your credentials to access your account"}),e.jsxs(h,{spacing:3,children:[e.jsx(A,{label:"Email",fullWidth:!0}),e.jsx(A,{label:"Password",type:"password",fullWidth:!0}),e.jsx(R,{variant:"contained",size:"large",fullWidth:!0,children:"Sign In"}),e.jsx(o,{variant:"body2",color:"text.secondary",sx:{textAlign:"center"},children:"Don't have an account? Sign up"})]})]})})},T={parameters:{layout:"padded"},render:()=>e.jsx(m,{ratio:"50:50",gap:2,stackAt:"md",minHeight:"400px",left:e.jsxs(i,{sx:{p:4,backgroundColor:"grey.50",height:"100%"},children:[e.jsx(o,{variant:"h5",sx:{fontWeight:700,mb:2},children:"Free Plan"}),e.jsxs(h,{spacing:1,children:[e.jsx(o,{variant:"body2",children:"✓ 5 projects"}),e.jsx(o,{variant:"body2",children:"✓ Basic analytics"}),e.jsx(o,{variant:"body2",children:"✓ Email support"}),e.jsx(o,{variant:"body2",color:"text.disabled",children:"✗ Custom domain"}),e.jsx(o,{variant:"body2",color:"text.disabled",children:"✗ Priority support"})]}),e.jsx(R,{variant:"outlined",fullWidth:!0,sx:{mt:4},children:"Get Started"})]}),right:e.jsxs(i,{sx:{p:4,backgroundColor:"primary.main",color:"white",height:"100%"},children:[e.jsx(o,{variant:"h5",sx:{fontWeight:700,mb:2},children:"Pro Plan"}),e.jsxs(h,{spacing:1,children:[e.jsx(o,{variant:"body2",children:"✓ Unlimited projects"}),e.jsx(o,{variant:"body2",children:"✓ Advanced analytics"}),e.jsx(o,{variant:"body2",children:"✓ Priority support"}),e.jsx(o,{variant:"body2",children:"✓ Custom domain"}),e.jsx(o,{variant:"body2",children:"✓ API access"})]}),e.jsx(R,{variant:"contained",fullWidth:!0,sx:{mt:4,backgroundColor:"white",color:"primary.main"},children:"Upgrade Now"})]})})},S={render:()=>e.jsx(i,{sx:{height:"200vh"},children:e.jsx(m,{ratio:"50:50",stackAt:"md",left:e.jsx(D,{height:"100vh",children:e.jsx(i,{sx:{height:"100%",backgroundImage:"url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800)",backgroundSize:"cover",backgroundPosition:"center"}})}),right:e.jsx(i,{sx:{p:6},children:e.jsx(h,{spacing:8,children:[1,2,3,4].map(a=>e.jsxs(i,{children:[e.jsxs(o,{variant:"h4",sx:{fontWeight:700,mb:2},children:["Section ",a]}),e.jsxs(o,{variant:"body1",color:"text.secondary",children:["This is the content for section ",a,". The left side image stays fixed while this content scrolls. This creates an engaging storytelling experience that keeps the visual context while progressing through content."]})]},a))})})})})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'row',
    ratio: '50:50',
    stackAt: 'sm',
    isFullHeight: false,
    gap: 0
  },
  render: args => <SplitScreen {...args} left={<DemoPanel label="Left" color="#667eea" />} right={<DemoPanel label="Right" color="#764ba2" />} />
}`,...u.parameters?.docs?.source},description:{story:"기본 사용",...u.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <>
      <DocumentTitle title="SplitScreen" status="Available" note="Screen split layout component" brandName="Layout" systemName="Starter Kit" version="1.0" />
      <PageContainer>
        <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          SplitScreen
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{
        mb: 4
      }}>
          화면을 두 영역으로 분할하는 레이아웃 컴포넌트입니다.
          다양한 비율과 반응형 전환을 지원합니다.
        </Typography>

        <SectionTitle title="Props" description="SplitScreen 컴포넌트의 Props입니다." />
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
              }}>left</TableCell>
                <TableCell>ReactNode</TableCell>
                <TableCell>-</TableCell>
                <TableCell>왼쪽(상단) 영역 콘텐츠</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>right</TableCell>
                <TableCell>ReactNode</TableCell>
                <TableCell>-</TableCell>
                <TableCell>오른쪽(하단) 영역 콘텐츠</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>ratio</TableCell>
                <TableCell>string | number[]</TableCell>
                <TableCell>&apos;50:50&apos;</TableCell>
                <TableCell>분할 비율</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>direction</TableCell>
                <TableCell>&apos;row&apos; | &apos;column&apos;</TableCell>
                <TableCell>&apos;row&apos;</TableCell>
                <TableCell>분할 방향</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>stackAt</TableCell>
                <TableCell>&apos;xs&apos; | &apos;sm&apos; | &apos;md&apos; | &apos;lg&apos; | &apos;none&apos;</TableCell>
                <TableCell>&apos;sm&apos;</TableCell>
                <TableCell>스택 전환 브레이크포인트</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>stackOrder</TableCell>
                <TableCell>&apos;normal&apos; | &apos;reverse&apos;</TableCell>
                <TableCell>&apos;normal&apos;</TableCell>
                <TableCell>스택 시 순서</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>isFullHeight</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>100vh 높이 적용</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="Ratio Presets" description="자주 사용되는 분할 비율입니다." />
        <Stack spacing={3}>
          {['50:50', '60:40', '70:30'].map(r => <Box key={r}>
              <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
                ratio=&quot;{r}&quot;
              </Typography>
              <SplitScreen ratio={r} stackAt="none" left={<DemoPanel label={r.split(':')[0] + '%'} height={80} color="#667eea" />} right={<DemoPanel label={r.split(':')[1] + '%'} height={80} color="#764ba2" />} />
            </Box>)}
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
              }}>StickySection</TableCell>
                <TableCell>스크롤 시 고정되는 섹션</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>SplitOverlay</TableCell>
                <TableCell>배경 이미지 + 오버레이가 적용된 영역</TableCell>
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
          {\`// 기본 50:50 분할
<SplitScreen
  left={<ImageSection />}
  right={<ContentSection />}
/>

// 60:40 비율
<SplitScreen
  ratio="60:40"
  left={<LargeSection />}
  right={<SmallSection />}
/>

// 배경 이미지 + 폼
<SplitScreen
  isFullHeight
  ratio="60:40"
  stackAt="md"
  left={
    <SplitOverlay
      background="https://example.com/bg.jpg"
      overlay={0.4}
    >
      <Typography variant="h2" sx={{ color: 'white' }}>
        Welcome
      </Typography>
    </SplitOverlay>
  }
  right={
    <Box sx={{ p: 4 }}>
      <LoginForm />
    </Box>
  }
/>

// Sticky 섹션
<SplitScreen
  left={
    <StickySection>
      <FixedImage />
    </StickySection>
  }
  right={<ScrollingContent />}
/>\`}
        </Box>
      </PageContainer>
    </>
}`,...b.parameters?.docs?.source},description:{story:"문서 및 데모",...b.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <SplitScreen isFullHeight ratio="55:45" stackAt="md" left={<SplitOverlay background="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200" overlay={0.4}>
          <Stack spacing={2} sx={{
      textAlign: 'center',
      px: 4
    }}>
            <Typography variant="h3" sx={{
        color: 'white',
        fontWeight: 700
      }}>
              Welcome Back
            </Typography>
            <Typography variant="body1" sx={{
        color: 'rgba(255,255,255,0.9)'
      }}>
              Sign in to continue your journey
            </Typography>
          </Stack>
        </SplitOverlay>} right={<Box sx={{
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    p: {
      xs: 4,
      md: 8
    },
    backgroundColor: 'background.paper'
  }}>
          <Typography variant="h4" sx={{
      fontWeight: 700,
      mb: 1
    }}>
            Sign In
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{
      mb: 4
    }}>
            Enter your credentials to access your account
          </Typography>
          <Stack spacing={3}>
            <TextField label="Email" fullWidth />
            <TextField label="Password" type="password" fullWidth />
            <Button variant="contained" size="large" fullWidth>
              Sign In
            </Button>
            <Typography variant="body2" color="text.secondary" sx={{
        textAlign: 'center'
      }}>
              Don&apos;t have an account? Sign up
            </Typography>
          </Stack>
        </Box>} />
}`,...f.parameters?.docs?.source},description:{story:"로그인 페이지 예시",...f.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <SplitScreen ratio="50:50" gap={2} stackAt="md" minHeight="400px" left={<Box sx={{
    p: 4,
    backgroundColor: 'grey.50',
    height: '100%'
  }}>
          <Typography variant="h5" sx={{
      fontWeight: 700,
      mb: 2
    }}>
            Free Plan
          </Typography>
          <Stack spacing={1}>
            <Typography variant="body2">✓ 5 projects</Typography>
            <Typography variant="body2">✓ Basic analytics</Typography>
            <Typography variant="body2">✓ Email support</Typography>
            <Typography variant="body2" color="text.disabled">✗ Custom domain</Typography>
            <Typography variant="body2" color="text.disabled">✗ Priority support</Typography>
          </Stack>
          <Button variant="outlined" fullWidth sx={{
      mt: 4
    }}>
            Get Started
          </Button>
        </Box>} right={<Box sx={{
    p: 4,
    backgroundColor: 'primary.main',
    color: 'white',
    height: '100%'
  }}>
          <Typography variant="h5" sx={{
      fontWeight: 700,
      mb: 2
    }}>
            Pro Plan
          </Typography>
          <Stack spacing={1}>
            <Typography variant="body2">✓ Unlimited projects</Typography>
            <Typography variant="body2">✓ Advanced analytics</Typography>
            <Typography variant="body2">✓ Priority support</Typography>
            <Typography variant="body2">✓ Custom domain</Typography>
            <Typography variant="body2">✓ API access</Typography>
          </Stack>
          <Button variant="contained" fullWidth sx={{
      mt: 4,
      backgroundColor: 'white',
      color: 'primary.main'
    }}>
            Upgrade Now
          </Button>
        </Box>} />
}`,...T.parameters?.docs?.source},description:{story:"비교 레이아웃 예시",...T.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    height: '200vh'
  }}>
      <SplitScreen ratio="50:50" stackAt="md" left={<StickySection height="100vh">
            <Box sx={{
        height: '100%',
        backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
          </StickySection>} right={<Box sx={{
      p: 6
    }}>
            <Stack spacing={8}>
              {[1, 2, 3, 4].map(section => <Box key={section}>
                  <Typography variant="h4" sx={{
            fontWeight: 700,
            mb: 2
          }}>
                    Section {section}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    This is the content for section {section}. The left side image stays fixed
                    while this content scrolls. This creates an engaging storytelling experience
                    that keeps the visual context while progressing through content.
                  </Typography>
                </Box>)}
            </Stack>
          </Box>} />
    </Box>
}`,...S.parameters?.docs?.source},description:{story:"Sticky 섹션 예시",...S.parameters?.docs?.description}}};const He=["Default","Documentation","LoginPageExample","ComparisonExample","StickySectionExample"];export{T as ComparisonExample,u as Default,b as Documentation,f as LoginPageExample,S as StickySectionExample,He as __namedExportsOrder,De as default};
