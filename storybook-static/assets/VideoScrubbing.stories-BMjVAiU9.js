import{r as b,j as e}from"./iframe-q-XN_VZM.js";import{D as j,P as C,S}from"./SectionTitle-B-E4QVff.js";import{B as n}from"./Box-Dmtu8wWb.js";import{T as s}from"./Typography-C8IUsM00.js";import{b as k,a as A,c as a,T as o,d as O}from"./TableRow-DxwoBvdd.js";import{T as B}from"./TableHead-CFjEf5Al.js";import{S as q}from"./Stack-BQqDyOBu.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CDdqLoBf.js";import"./Container-q5yveaGP.js";import"./memoTheme-BW0efeYW.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./Grid-Dd6PAMTp.js";import"./isMuiElement-DpiUmZPP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const d=({src:i,containerRef:l=null,sx:E={},scrollRange:w={start:0,end:1},onProgressChange:R,...I})=>{const u=b.useRef(null),[V,_]=b.useState(!1);return b.useEffect(()=>{const t=u.current;if(!t)return;const r=()=>{t.currentTime=0};return t.addEventListener("loadeddata",r),t.readyState>=2&&(t.currentTime=0),()=>{t.removeEventListener("loadeddata",r)}},[]),b.useEffect(()=>{const t=u.current;if(!t)return;const r=new IntersectionObserver(([T])=>{_(T.isIntersecting)},{threshold:.1});return r.observe(t),()=>r.disconnect()},[]),b.useEffect(()=>{const t=u.current;if(!t||!V)return;let r=null,T=0;const N=16,y=()=>{const P=Date.now();if(P-T<N){r=requestAnimationFrame(y);return}T=P;let c=0;if(l&&l.current){const x=l.current,z=x.offsetHeight,W=x.offsetTop;c=((window.scrollY||window.pageYOffset)-W)/z}else{const x=t.offsetHeight,z=t.offsetTop;c=((window.scrollY||window.pageYOffset)-z)/x}const{start:D,end:U}=w;if(c=(c-D)/(U-D),c=Math.max(0,Math.min(1,c)),R&&R(c),t.duration){const x=t.duration*c;Math.abs(t.currentTime-x)>.033&&(t.currentTime=x)}r=requestAnimationFrame(y)};r=requestAnimationFrame(y);const F=()=>{r||(r=requestAnimationFrame(y))};return window.addEventListener("scroll",F,{passive:!0}),()=>{window.removeEventListener("scroll",F),r&&cancelAnimationFrame(r)}},[V,l,w,R]),e.jsx(n,{sx:{position:"relative",width:"100%",height:"100%"},children:e.jsx(n,{component:"video",ref:u,muted:!0,playsInline:!0,preload:"auto",sx:{width:"100%",height:"auto",display:"block",position:"relative",zIndex:0,...E},...I,children:e.jsx("source",{src:i,type:"video/mp4"})})})};d.__docgenInfo={description:`VideoScrubbing Component
스크롤 위치에 따라 비디오를 프레임 단위로 재생(스크러빙)하는 컴포넌트입니다.

@param {string} src - 비디오 소스 경로 [Required]
@param {React.RefObject} containerRef - 스크롤 추적용 컨테이너 요소 [Optional]
@param {Object} sx - MUI sx 스타일 [Optional]
@param {Object} scrollRange - 스크롤 범위 매핑 { start: 0, end: 1 } [Optional]
@param {function} onProgressChange - 진행도 변경 콜백 (progress: 0-1) [Optional]`,methods:[],displayName:"VideoScrubbing",props:{containerRef:{defaultValue:{value:"null",computed:!1},required:!1},sx:{defaultValue:{value:"{}",computed:!1},required:!1},scrollRange:{defaultValue:{value:"{ start: 0, end: 1 }",computed:!1},required:!1}}};const L=""+new URL("9-motion-mw7zdAYy.mp4",import.meta.url).href,m=L,ce={title:"Custom Component/Media/VideoScrubbing",component:d,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
## VideoScrubbing

스크롤 위치에 따라 비디오를 프레임 단위로 재생(스크러빙)하는 컴포넌트입니다.

### 핵심 기능
- 스크롤 기반 재생: 페이지 스크롤에 따라 비디오 프레임 이동
- 성능 최적화: IntersectionObserver + requestAnimationFrame (~60fps)
- 진행도 콜백: onProgressChange로 외부에서 진행도(0-1) 활용 가능
        `}}},argTypes:{src:{control:"text",description:"비디오 소스 경로",table:{type:{summary:"string"}}},containerRef:{control:!1,description:"스크롤 추적용 컨테이너 요소",table:{type:{summary:"React.RefObject"}}},scrollRange:{control:"object",description:"스크롤 범위 매핑",table:{type:{summary:"{ start: number, end: number }"},defaultValue:{summary:"{ start: 0, end: 1 }"}}},onProgressChange:{control:!1,description:"진행도 변경 콜백 (0-1)",table:{type:{summary:"function"}}}}},v=({children:i,height:l="150vh"})=>e.jsx(n,{sx:{minHeight:l,pb:8},children:i}),H=()=>{const[i,l]=b.useState(0);return e.jsxs(v,{height:"180vh",children:[e.jsxs(n,{sx:{position:"sticky",top:0,zIndex:5,backgroundColor:"grey.100",py:1.5,px:2,mb:3},children:[e.jsxs(s,{variant:"body2",sx:{fontFamily:"monospace"},children:["progress: ",(i*100).toFixed(1),"%"]}),e.jsx(n,{sx:{height:4,backgroundColor:"grey.300",mt:1},children:e.jsx(n,{sx:{height:"100%",width:`${i*100}%`,backgroundColor:"primary.main",transition:"width 0.05s linear"}})})]}),e.jsx(n,{sx:{maxWidth:800},children:e.jsx(d,{src:m,onProgressChange:l})})]})},M=()=>{const i=b.useRef(null);return e.jsx(v,{height:"180vh",children:e.jsxs(n,{ref:i,sx:{height:"150vh",backgroundColor:"grey.50",p:2},children:[e.jsx(s,{variant:"caption",color:"text.secondary",sx:{mb:2,display:"block"},children:"이 컨테이너 높이 기준으로 비디오 진행"}),e.jsx(n,{sx:{position:"sticky",top:16,maxWidth:800},children:e.jsx(d,{src:m,containerRef:i})})]})})},p={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"VideoScrubbing",status:"Available",note:"Scroll-based video scrubbing",brandName:"Design System",systemName:"Starter Kit",version:"1.0"}),e.jsxs(C,{children:[e.jsx(s,{variant:"h4",sx:{fontWeight:700,mb:1},children:"VideoScrubbing"}),e.jsx(s,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"스크롤 위치에 따라 비디오를 프레임 단위로 재생하는 컴포넌트입니다."}),e.jsx(S,{title:"Demo",description:"스크롤하여 비디오 재생 테스트"}),e.jsx(v,{children:e.jsx(n,{sx:{maxWidth:800},children:e.jsx(d,{src:m})})}),e.jsx(S,{title:"Props",description:"컴포넌트 속성"}),e.jsx(k,{sx:{mb:4},children:e.jsxs(A,{size:"small",children:[e.jsx(B,{children:e.jsxs(a,{children:[e.jsx(o,{sx:{fontWeight:600},children:"Prop"}),e.jsx(o,{sx:{fontWeight:600},children:"Type"}),e.jsx(o,{sx:{fontWeight:600},children:"Default"}),e.jsx(o,{sx:{fontWeight:600},children:"Description"})]})}),e.jsxs(O,{children:[e.jsxs(a,{children:[e.jsx(o,{sx:{fontFamily:"monospace",fontSize:12},children:"src"}),e.jsx(o,{sx:{fontSize:13},children:"string"}),e.jsx(o,{sx:{fontSize:13},children:"-"}),e.jsx(o,{sx:{color:"text.secondary",fontSize:13},children:"비디오 소스 경로 [Required]"})]}),e.jsxs(a,{children:[e.jsx(o,{sx:{fontFamily:"monospace",fontSize:12},children:"containerRef"}),e.jsx(o,{sx:{fontSize:13},children:"React.RefObject"}),e.jsx(o,{sx:{fontSize:13},children:"null"}),e.jsx(o,{sx:{color:"text.secondary",fontSize:13},children:"스크롤 추적용 컨테이너 요소"})]}),e.jsxs(a,{children:[e.jsx(o,{sx:{fontFamily:"monospace",fontSize:12},children:"scrollRange"}),e.jsx(o,{sx:{fontSize:13},children:"{ start, end }"}),e.jsx(o,{sx:{fontSize:13},children:"{ 0, 1 }"}),e.jsx(o,{sx:{color:"text.secondary",fontSize:13},children:"스크롤 범위 매핑 (0-1)"})]}),e.jsxs(a,{children:[e.jsx(o,{sx:{fontFamily:"monospace",fontSize:12},children:"onProgressChange"}),e.jsx(o,{sx:{fontSize:13},children:"function"}),e.jsx(o,{sx:{fontSize:13},children:"-"}),e.jsx(o,{sx:{color:"text.secondary",fontSize:13},children:"진행도 변경 콜백 (progress: 0-1)"})]}),e.jsxs(a,{children:[e.jsx(o,{sx:{fontFamily:"monospace",fontSize:12},children:"sx"}),e.jsx(o,{sx:{fontSize:13},children:"object"}),e.jsx(o,{sx:{fontSize:13},children:"{}"}),e.jsx(o,{sx:{color:"text.secondary",fontSize:13},children:"MUI sx 스타일 객체"})]})]})]})}),e.jsx(S,{title:"Usage",description:"코드 예시"}),e.jsx(n,{component:"pre",sx:{backgroundColor:"grey.100",p:2,fontSize:12,fontFamily:"monospace",overflow:"auto",mb:4},children:`import VideoScrubbing from '@/components/media/VideoScrubbing';

// 기본 사용
<VideoScrubbing src="/video.mp4" />

// 진행도 콜백 활용
const [progress, setProgress] = useState(0);
<VideoScrubbing
  src="/video.mp4"
  onProgressChange={setProgress}
/>

// 컨테이너 기준 스크롤
const containerRef = useRef(null);
<Box ref={containerRef} sx={{ height: '200vh' }}>
  <VideoScrubbing
    src="/video.mp4"
    containerRef={containerRef}
  />
</Box>`}),e.jsx(S,{title:"Video Encoding",description:"스크러빙 최적화를 위한 비디오 인코딩"}),e.jsx(s,{variant:"body2",color:"text.secondary",sx:{mb:2},children:"부드러운 스크러빙을 위해서는 비디오의 키프레임(I-frame) 설정이 중요합니다. 일반 비디오는 키프레임 간격이 2~10초로, seeking 시 가장 가까운 키프레임부터 디코딩해야 하므로 끊김이 발생합니다."}),e.jsx(k,{sx:{mb:3},children:e.jsxs(A,{size:"small",children:[e.jsx(B,{children:e.jsxs(a,{children:[e.jsx(o,{sx:{fontWeight:600},children:"비디오 타입"}),e.jsx(o,{sx:{fontWeight:600},children:"키프레임 간격"}),e.jsx(o,{sx:{fontWeight:600},children:"Seeking 속도"}),e.jsx(o,{sx:{fontWeight:600},children:"파일 크기"})]})}),e.jsxs(O,{children:[e.jsxs(a,{children:[e.jsx(o,{sx:{fontSize:13},children:"일반 MP4"}),e.jsx(o,{sx:{fontSize:13},children:"2~10초"}),e.jsx(o,{sx:{color:"error.main",fontSize:13},children:"50~100ms (끊김)"}),e.jsx(o,{sx:{fontSize:13},children:"기본"})]}),e.jsxs(a,{children:[e.jsx(o,{sx:{fontSize:13},children:"스크러빙 최적화"}),e.jsx(o,{sx:{fontSize:13},children:"매 프레임"}),e.jsx(o,{sx:{color:"success.main",fontSize:13},children:"1~5ms (즉시)"}),e.jsx(o,{sx:{fontSize:13},children:"2~3배"})]})]})]})}),e.jsx(s,{variant:"subtitle2",sx:{mb:1},children:"FFmpeg 인코딩 명령어"}),e.jsx(n,{component:"pre",sx:{backgroundColor:"grey.100",p:2,fontSize:12,fontFamily:"monospace",overflow:"auto",mb:2},children:`# 모든 프레임을 키프레임으로 인코딩
ffmpeg -i input.mp4 -g 1 -keyint_min 1 -c:v libx264 -crf 23 output.mp4

# 옵션 설명
# -g 1          : GOP(Group of Pictures) 크기를 1로 설정
# -keyint_min 1 : 최소 키프레임 간격 1
# -crf 23       : 품질 설정 (낮을수록 고품질, 18~28 권장)`}),e.jsx(s,{variant:"caption",color:"text.secondary",sx:{display:"block",mb:4},children:"참고: 키프레임 최적화 비디오는 파일 크기가 증가하므로, 짧은 클립(30초 이내)에 적합합니다."})]})]})},h={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"VideoScrubbing",status:"Available",note:"Using onProgressChange callback",brandName:"Design System",systemName:"Starter Kit",version:"1.0"}),e.jsxs(C,{children:[e.jsx(s,{variant:"h4",sx:{fontWeight:700,mb:1},children:"Progress Callback"}),e.jsx(s,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"onProgressChange 콜백으로 현재 진행도(0-1)를 외부에서 활용할 수 있습니다."}),e.jsx(H,{})]})]})},f={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"VideoScrubbing",status:"Available",note:"Using containerRef",brandName:"Design System",systemName:"Starter Kit",version:"1.0"}),e.jsxs(C,{children:[e.jsx(s,{variant:"h4",sx:{fontWeight:700,mb:1},children:"Container Reference"}),e.jsx(s,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"containerRef를 전달하면 해당 컨테이너 기준으로 스크롤 진행도를 계산합니다."}),e.jsx(M,{})]})]})},g={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"VideoScrubbing",status:"Available",note:"Aspect ratio variations",brandName:"Design System",systemName:"Starter Kit",version:"1.0"}),e.jsxs(C,{children:[e.jsx(s,{variant:"h4",sx:{fontWeight:700,mb:1},children:"Aspect Ratios"}),e.jsx(s,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"sx prop으로 다양한 비율을 적용할 수 있습니다."}),e.jsx(v,{height:"300vh",children:e.jsxs(q,{spacing:6,sx:{maxWidth:800},children:[e.jsxs(n,{children:[e.jsx(s,{variant:"subtitle2",sx:{mb:1,fontFamily:"monospace"},children:"aspectRatio: 21/9 (Cinematic)"}),e.jsx(d,{src:m,sx:{aspectRatio:"21/9",objectFit:"cover"}})]}),e.jsxs(n,{children:[e.jsx(s,{variant:"subtitle2",sx:{mb:1,fontFamily:"monospace"},children:"aspectRatio: 16/9 (Standard)"}),e.jsx(d,{src:m,sx:{aspectRatio:"16/9",objectFit:"cover"}})]}),e.jsxs(n,{children:[e.jsx(s,{variant:"subtitle2",sx:{mb:1,fontFamily:"monospace"},children:"aspectRatio: 4/3 (Classic)"}),e.jsx(d,{src:m,sx:{aspectRatio:"4/3",objectFit:"cover"}})]})]})})]})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <DocumentTitle title="VideoScrubbing" status="Available" note="Scroll-based video scrubbing" brandName="Design System" systemName="Starter Kit" version="1.0" />
      <PageContainer>
        <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          VideoScrubbing
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{
        mb: 4
      }}>
          스크롤 위치에 따라 비디오를 프레임 단위로 재생하는 컴포넌트입니다.
        </Typography>

        <SectionTitle title="Demo" description="스크롤하여 비디오 재생 테스트" />
        <ScrollArea>
          <Box sx={{
          maxWidth: 800
        }}>
            <VideoScrubbing src={TEST_VIDEO_URL} />
          </Box>
        </ScrollArea>

        <SectionTitle title="Props" description="컴포넌트 속성" />
        <TableContainer sx={{
        mb: 4
      }}>
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
                fontFamily: 'monospace',
                fontSize: 12
              }}>src</TableCell>
                <TableCell sx={{
                fontSize: 13
              }}>string</TableCell>
                <TableCell sx={{
                fontSize: 13
              }}>-</TableCell>
                <TableCell sx={{
                color: 'text.secondary',
                fontSize: 13
              }}>비디오 소스 경로 [Required]</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace',
                fontSize: 12
              }}>containerRef</TableCell>
                <TableCell sx={{
                fontSize: 13
              }}>React.RefObject</TableCell>
                <TableCell sx={{
                fontSize: 13
              }}>null</TableCell>
                <TableCell sx={{
                color: 'text.secondary',
                fontSize: 13
              }}>스크롤 추적용 컨테이너 요소</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace',
                fontSize: 12
              }}>scrollRange</TableCell>
                <TableCell sx={{
                fontSize: 13
              }}>{'{ start, end }'}</TableCell>
                <TableCell sx={{
                fontSize: 13
              }}>{'{ 0, 1 }'}</TableCell>
                <TableCell sx={{
                color: 'text.secondary',
                fontSize: 13
              }}>스크롤 범위 매핑 (0-1)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace',
                fontSize: 12
              }}>onProgressChange</TableCell>
                <TableCell sx={{
                fontSize: 13
              }}>function</TableCell>
                <TableCell sx={{
                fontSize: 13
              }}>-</TableCell>
                <TableCell sx={{
                color: 'text.secondary',
                fontSize: 13
              }}>진행도 변경 콜백 (progress: 0-1)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace',
                fontSize: 12
              }}>sx</TableCell>
                <TableCell sx={{
                fontSize: 13
              }}>object</TableCell>
                <TableCell sx={{
                fontSize: 13
              }}>{'{}'}</TableCell>
                <TableCell sx={{
                color: 'text.secondary',
                fontSize: 13
              }}>MUI sx 스타일 객체</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="Usage" description="코드 예시" />
        <Box component="pre" sx={{
        backgroundColor: 'grey.100',
        p: 2,
        fontSize: 12,
        fontFamily: 'monospace',
        overflow: 'auto',
        mb: 4
      }}>
        {\`import VideoScrubbing from '@/components/media/VideoScrubbing';

// 기본 사용
<VideoScrubbing src="/video.mp4" />

// 진행도 콜백 활용
const [progress, setProgress] = useState(0);
<VideoScrubbing
  src="/video.mp4"
  onProgressChange={setProgress}
/>

// 컨테이너 기준 스크롤
const containerRef = useRef(null);
<Box ref={containerRef} sx={{ height: '200vh' }}>
  <VideoScrubbing
    src="/video.mp4"
    containerRef={containerRef}
  />
</Box>\`}
        </Box>

        <SectionTitle title="Video Encoding" description="스크러빙 최적화를 위한 비디오 인코딩" />
        <Typography variant="body2" color="text.secondary" sx={{
        mb: 2
      }}>
          부드러운 스크러빙을 위해서는 비디오의 키프레임(I-frame) 설정이 중요합니다.
          일반 비디오는 키프레임 간격이 2~10초로, seeking 시 가장 가까운 키프레임부터 디코딩해야 하므로 끊김이 발생합니다.
        </Typography>

        <TableContainer sx={{
        mb: 3
      }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{
                fontWeight: 600
              }}>비디오 타입</TableCell>
                <TableCell sx={{
                fontWeight: 600
              }}>키프레임 간격</TableCell>
                <TableCell sx={{
                fontWeight: 600
              }}>Seeking 속도</TableCell>
                <TableCell sx={{
                fontWeight: 600
              }}>파일 크기</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{
                fontSize: 13
              }}>일반 MP4</TableCell>
                <TableCell sx={{
                fontSize: 13
              }}>2~10초</TableCell>
                <TableCell sx={{
                color: 'error.main',
                fontSize: 13
              }}>50~100ms (끊김)</TableCell>
                <TableCell sx={{
                fontSize: 13
              }}>기본</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontSize: 13
              }}>스크러빙 최적화</TableCell>
                <TableCell sx={{
                fontSize: 13
              }}>매 프레임</TableCell>
                <TableCell sx={{
                color: 'success.main',
                fontSize: 13
              }}>1~5ms (즉시)</TableCell>
                <TableCell sx={{
                fontSize: 13
              }}>2~3배</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="subtitle2" sx={{
        mb: 1
      }}>
          FFmpeg 인코딩 명령어
        </Typography>
        <Box component="pre" sx={{
        backgroundColor: 'grey.100',
        p: 2,
        fontSize: 12,
        fontFamily: 'monospace',
        overflow: 'auto',
        mb: 2
      }}>
        {\`# 모든 프레임을 키프레임으로 인코딩
ffmpeg -i input.mp4 -g 1 -keyint_min 1 -c:v libx264 -crf 23 output.mp4

# 옵션 설명
# -g 1          : GOP(Group of Pictures) 크기를 1로 설정
# -keyint_min 1 : 최소 키프레임 간격 1
# -crf 23       : 품질 설정 (낮을수록 고품질, 18~28 권장)\`}
        </Box>
        <Typography variant="caption" color="text.secondary" sx={{
        display: 'block',
        mb: 4
      }}>
          참고: 키프레임 최적화 비디오는 파일 크기가 증가하므로, 짧은 클립(30초 이내)에 적합합니다.
        </Typography>
      </PageContainer>
    </>
}`,...p.parameters?.docs?.source},description:{story:"기본 사용",...p.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <DocumentTitle title="VideoScrubbing" status="Available" note="Using onProgressChange callback" brandName="Design System" systemName="Starter Kit" version="1.0" />
      <PageContainer>
        <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          Progress Callback
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{
        mb: 4
      }}>
          onProgressChange 콜백으로 현재 진행도(0-1)를 외부에서 활용할 수 있습니다.
        </Typography>
        <ProgressDemo />
      </PageContainer>
    </>
}`,...h.parameters?.docs?.source},description:{story:"진행도 콜백",...h.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <DocumentTitle title="VideoScrubbing" status="Available" note="Using containerRef" brandName="Design System" systemName="Starter Kit" version="1.0" />
      <PageContainer>
        <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          Container Reference
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{
        mb: 4
      }}>
          containerRef를 전달하면 해당 컨테이너 기준으로 스크롤 진행도를 계산합니다.
        </Typography>
        <ContainerRefDemo />
      </PageContainer>
    </>
}`,...f.parameters?.docs?.source},description:{story:"컨테이너 Ref",...f.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <DocumentTitle title="VideoScrubbing" status="Available" note="Aspect ratio variations" brandName="Design System" systemName="Starter Kit" version="1.0" />
      <PageContainer>
        <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          Aspect Ratios
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{
        mb: 4
      }}>
          sx prop으로 다양한 비율을 적용할 수 있습니다.
        </Typography>

        <ScrollArea height="300vh">
          <Stack spacing={6} sx={{
          maxWidth: 800
        }}>
            <Box>
              <Typography variant="subtitle2" sx={{
              mb: 1,
              fontFamily: 'monospace'
            }}>
                aspectRatio: 21/9 (Cinematic)
              </Typography>
              <VideoScrubbing src={TEST_VIDEO_URL} sx={{
              aspectRatio: '21/9',
              objectFit: 'cover'
            }} />
            </Box>

            <Box>
              <Typography variant="subtitle2" sx={{
              mb: 1,
              fontFamily: 'monospace'
            }}>
                aspectRatio: 16/9 (Standard)
              </Typography>
              <VideoScrubbing src={TEST_VIDEO_URL} sx={{
              aspectRatio: '16/9',
              objectFit: 'cover'
            }} />
            </Box>

            <Box>
              <Typography variant="subtitle2" sx={{
              mb: 1,
              fontFamily: 'monospace'
            }}>
                aspectRatio: 4/3 (Classic)
              </Typography>
              <VideoScrubbing src={TEST_VIDEO_URL} sx={{
              aspectRatio: '4/3',
              objectFit: 'cover'
            }} />
            </Box>
          </Stack>
        </ScrollArea>
      </PageContainer>
    </>
}`,...g.parameters?.docs?.source},description:{story:"다양한 비율",...g.parameters?.docs?.description}}};const de=["Default","WithProgressCallback","WithContainerRef","AspectRatios"];export{g as AspectRatios,p as Default,f as WithContainerRef,h as WithProgressCallback,de as __namedExportsOrder,ce as default};
