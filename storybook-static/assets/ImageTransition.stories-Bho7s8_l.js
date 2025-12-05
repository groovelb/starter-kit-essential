import{r,j as e,x as d}from"./iframe-q-XN_VZM.js";import{D as O,P as q,S as h}from"./SectionTitle-B-E4QVff.js";import{B as s}from"./Box-Dmtu8wWb.js";import{S as y}from"./Stack-BQqDyOBu.js";import{B as l}from"./Button-Coknce8O.js";import{T}from"./Typography-C8IUsM00.js";import{b as $,a as E,c as f,T as t,d as X}from"./TableRow-DxwoBvdd.js";import{T as V}from"./TableHead-CFjEf5Al.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CDdqLoBf.js";import"./Container-q5yveaGP.js";import"./memoTheme-BW0efeYW.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./Grid-Dd6PAMTp.js";import"./isMuiElement-DpiUmZPP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-JbB1eRtB.js";import"./useTimeout-C6lNLwyh.js";import"./CircularProgress-K6SSDdjw.js";const _=d`
  from { opacity: 0; }
  to { opacity: 1; }
`,Z=d`
  from { opacity: 1; }
  to { opacity: 0; }
`,M=d`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`,Y=d`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`,L=d`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,U=d`
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
`,K=d`
  from { transform: scale(1.2); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`,G=d`
  from { transform: scale(1); opacity: 1; }
  to { transform: scale(0.8); opacity: 0; }
`,J=d`
  from { clip-path: inset(0 100% 0 0); }
  to { clip-path: inset(0 0 0 0); }
`,Q=d`
  from { clip-path: inset(0 0 0 100%); }
  to { clip-path: inset(0 0 0 0); }
`,ee=d`
  from { transform: perspective(1000px) rotateY(-90deg); opacity: 0; }
  to { transform: perspective(1000px) rotateY(0); opacity: 1; }
`,te=d`
  from { transform: perspective(1000px) rotateY(0); opacity: 1; }
  to { transform: perspective(1000px) rotateY(90deg); opacity: 0; }
`;function x({images:S=[],activeIndex:i=0,transition:u="fade",duration:o=500,easing:n="ease-out",aspectRatio:C="16/9",objectFit:B="cover",onTransitionEnd:I,sx:F,...v}){const[k,j]=r.useState(i),[p,g]=r.useState(!1),[b,H]=r.useState("next"),N=r.useRef(i),D=S.map((c,m)=>typeof c=="string"?{src:c,alt:`Image ${m+1}`}:c);r.useEffect(()=>{if(i!==N.current){const c=i>N.current?"next":"prev",m=requestAnimationFrame(()=>{H(c),g(!0)}),A=setTimeout(()=>{j(i),g(!1),N.current=i,I?.()},o);return()=>{cancelAnimationFrame(m),clearTimeout(A)}}},[i,o,I]);const W=c=>{const m={animationDuration:`${o}ms`,animationTimingFunction:n,animationFillMode:"forwards"};switch(u){case"slide":return c?{...m,animationName:`${b==="next"?M:L}`}:{...m,animationName:`${b==="next"?Y:U}`};case"zoom":return{...m,animationName:`${c?K:G}`};case"reveal":return c?{...m,animationName:`${b==="next"?J:Q}`}:{opacity:p?1:0,transition:`opacity ${o}ms ${n}`};case"flip":return{...m,animationName:`${c?ee:te}`};case"fade":default:return{...m,animationName:`${c?_:Z}`}}},P=D[k],z=D[i];return P?e.jsxs(s,{sx:{position:"relative",width:"100%",aspectRatio:C,overflow:"hidden",backgroundColor:"grey.900",...F},...v,children:[e.jsx(s,{component:"img",src:P.src,alt:P.alt,sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:B,...p&&W(!1)}}),p&&z&&k!==i&&e.jsx(s,{component:"img",src:z.src,alt:z.alt,sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:B,...W(!0)}})]}):null}x.__docgenInfo={description:`ImageTransition 컴포넌트

인덱스 기반 이미지 트랜지션 컴포넌트.
다양한 트랜지션 효과(fade, slide, zoom, reveal, flip)를 지원한다.

동작 방식:
1. activeIndex가 변경되면 이전 이미지와 새 이미지 간 트랜지션 실행
2. 이전/다음 방향을 자동 감지하여 적절한 애니메이션 적용
3. 트랜지션 완료 후 onTransitionEnd 콜백 호출

Props:
@param {Array} images - 이미지 소스 배열 [{ src, alt }] 또는 string[] [Required]
@param {number} activeIndex - 현재 활성 이미지 인덱스 [Required]
@param {string} transition - 트랜지션 효과 ('fade' | 'slide' | 'zoom' | 'reveal' | 'flip') [Optional, 기본값: 'fade']
@param {number} duration - 트랜지션 지속 시간 (ms) [Optional, 기본값: 500]
@param {string} easing - CSS 이징 함수 [Optional, 기본값: 'ease-out']
@param {string} aspectRatio - 컨테이너 종횡비 [Optional, 기본값: '16/9']
@param {string} objectFit - 이미지 맞춤 방식 [Optional, 기본값: 'cover']
@param {function} onTransitionEnd - 트랜지션 완료 콜백 [Optional]
@param {object} sx - 추가 스타일 [Optional]

Example usage:
<ImageTransition
  images={['img1.jpg', 'img2.jpg', 'img3.jpg']}
  activeIndex={currentIndex}
  transition="fade"
  duration={500}
/>`,methods:[],displayName:"ImageTransition",props:{images:{defaultValue:{value:"[]",computed:!1},required:!1},activeIndex:{defaultValue:{value:"0",computed:!1},required:!1},transition:{defaultValue:{value:"'fade'",computed:!1},required:!1},duration:{defaultValue:{value:"500",computed:!1},required:!1},easing:{defaultValue:{value:"'ease-out'",computed:!1},required:!1},aspectRatio:{defaultValue:{value:"'16/9'",computed:!1},required:!1},objectFit:{defaultValue:{value:"'cover'",computed:!1},required:!1}}};const ve={title:"Custom Component/Media/ImageTransition",component:x,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
## ImageTransition

인덱스 기반 이미지 트랜지션 컴포넌트.

### 용도
- 이미지 슬라이더/갤러리의 트랜지션
- Hero 이미지 전환
- 제품 이미지 변경 효과
        `}}},argTypes:{transition:{control:"select",options:["fade","slide","zoom","reveal","flip"],description:"트랜지션 효과"},duration:{control:{type:"range",min:200,max:2e3,step:100},description:"트랜지션 지속 시간 (ms)"},aspectRatio:{control:"select",options:["16/9","4/3","1/1","21/9"],description:"컨테이너 종횡비"}}},a=[{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",alt:"Mountains"},{src:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop",alt:"Forest"},{src:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop",alt:"Beach"},{src:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=800&fit=crop",alt:"Night Sky"}],w={render:function(){const[i,u]=r.useState(0);return e.jsxs(s,{sx:{maxWidth:800},children:[e.jsx(x,{images:a,activeIndex:i,transition:"fade",duration:500}),e.jsx(y,{direction:"row",spacing:1,sx:{mt:2,justifyContent:"center"},children:a.map((o,n)=>e.jsx(l,{variant:i===n?"contained":"outlined",size:"small",onClick:()=>u(n),children:n+1},n))})]})}},R={render:function(){const[i,u]=r.useState(0),[o,n]=r.useState(0),[C,B]=r.useState(0),[I,F]=r.useState(0),[v,k]=r.useState(0),j=(g,b)=>{b(g>0?g-1:a.length-1)},p=(g,b)=>{b(g<a.length-1?g+1:0)};return e.jsxs(e.Fragment,{children:[e.jsx(O,{title:"ImageTransition",status:"Available",note:"Index-based image transition component",brandName:"Media",systemName:"Starter Kit",version:"1.0"}),e.jsxs(q,{children:[e.jsx(T,{variant:"h4",sx:{fontWeight:700,mb:1},children:"ImageTransition"}),e.jsx(T,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"activeIndex를 변경하면 이전 이미지와 새 이미지 간 트랜지션이 실행됩니다. 5가지 트랜지션 효과를 지원합니다."}),e.jsx(h,{title:"Props",description:"ImageTransition 컴포넌트의 Props입니다."}),e.jsx($,{children:e.jsxs(E,{size:"small",children:[e.jsx(V,{children:e.jsxs(f,{children:[e.jsx(t,{sx:{fontWeight:600},children:"Prop"}),e.jsx(t,{sx:{fontWeight:600},children:"Type"}),e.jsx(t,{sx:{fontWeight:600},children:"Default"}),e.jsx(t,{sx:{fontWeight:600},children:"Description"})]})}),e.jsxs(X,{children:[e.jsxs(f,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"images"}),e.jsx(t,{children:"Array"}),e.jsx(t,{children:"[]"}),e.jsxs(t,{children:["이미지 배열 (string[] 또는 ","{src, alt}","[])"]})]}),e.jsxs(f,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"activeIndex"}),e.jsx(t,{children:"number"}),e.jsx(t,{children:"0"}),e.jsx(t,{children:"현재 활성 이미지 인덱스"})]}),e.jsxs(f,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"transition"}),e.jsx(t,{children:"'fade' | 'slide' | 'zoom' | 'reveal' | 'flip'"}),e.jsx(t,{children:"'fade'"}),e.jsx(t,{children:"트랜지션 효과"})]}),e.jsxs(f,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"duration"}),e.jsx(t,{children:"number"}),e.jsx(t,{children:"500"}),e.jsx(t,{children:"트랜지션 지속 시간 (ms)"})]}),e.jsxs(f,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"easing"}),e.jsx(t,{children:"string"}),e.jsx(t,{children:"'ease-out'"}),e.jsx(t,{children:"CSS 이징 함수"})]}),e.jsxs(f,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"aspectRatio"}),e.jsx(t,{children:"string"}),e.jsx(t,{children:"'16/9'"}),e.jsx(t,{children:"컨테이너 종횡비"})]}),e.jsxs(f,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"onTransitionEnd"}),e.jsx(t,{children:"function"}),e.jsx(t,{children:"-"}),e.jsx(t,{children:"트랜지션 완료 콜백"})]})]})]})}),e.jsx(h,{title:"Transition: Fade",description:"기본 크로스페이드 효과입니다."}),e.jsxs(s,{sx:{maxWidth:700},children:[e.jsx(x,{images:a,activeIndex:i,transition:"fade",duration:600}),e.jsxs(y,{direction:"row",spacing:1,sx:{mt:2,justifyContent:"center"},children:[e.jsx(l,{variant:"outlined",onClick:()=>j(i,u),children:"← Prev"}),e.jsxs(T,{sx:{lineHeight:"36px",px:2},children:[i+1," / ",a.length]}),e.jsx(l,{variant:"outlined",onClick:()=>p(i,u),children:"Next →"})]})]}),e.jsx(h,{title:"Transition: Slide",description:"좌우 슬라이드 효과입니다."}),e.jsxs(s,{sx:{maxWidth:700},children:[e.jsx(x,{images:a,activeIndex:o,transition:"slide",duration:500}),e.jsxs(y,{direction:"row",spacing:1,sx:{mt:2,justifyContent:"center"},children:[e.jsx(l,{variant:"outlined",onClick:()=>j(o,n),children:"← Prev"}),e.jsxs(T,{sx:{lineHeight:"36px",px:2},children:[o+1," / ",a.length]}),e.jsx(l,{variant:"outlined",onClick:()=>p(o,n),children:"Next →"})]})]}),e.jsx(h,{title:"Transition: Zoom",description:"줌 인/아웃 효과입니다."}),e.jsxs(s,{sx:{maxWidth:700},children:[e.jsx(x,{images:a,activeIndex:C,transition:"zoom",duration:700}),e.jsxs(y,{direction:"row",spacing:1,sx:{mt:2,justifyContent:"center"},children:[e.jsx(l,{variant:"outlined",onClick:()=>j(C,B),children:"← Prev"}),e.jsxs(T,{sx:{lineHeight:"36px",px:2},children:[C+1," / ",a.length]}),e.jsx(l,{variant:"outlined",onClick:()=>p(C,B),children:"Next →"})]})]}),e.jsx(h,{title:"Transition: Reveal",description:"마스크 reveal 효과입니다."}),e.jsxs(s,{sx:{maxWidth:700},children:[e.jsx(x,{images:a,activeIndex:I,transition:"reveal",duration:800}),e.jsxs(y,{direction:"row",spacing:1,sx:{mt:2,justifyContent:"center"},children:[e.jsx(l,{variant:"outlined",onClick:()=>j(I,F),children:"← Prev"}),e.jsxs(T,{sx:{lineHeight:"36px",px:2},children:[I+1," / ",a.length]}),e.jsx(l,{variant:"outlined",onClick:()=>p(I,F),children:"Next →"})]})]}),e.jsx(h,{title:"Transition: Flip",description:"3D 플립 효과입니다."}),e.jsxs(s,{sx:{maxWidth:700},children:[e.jsx(x,{images:a,activeIndex:v,transition:"flip",duration:600}),e.jsxs(y,{direction:"row",spacing:1,sx:{mt:2,justifyContent:"center"},children:[e.jsx(l,{variant:"outlined",onClick:()=>j(v,k),children:"← Prev"}),e.jsxs(T,{sx:{lineHeight:"36px",px:2},children:[v+1," / ",a.length]}),e.jsx(l,{variant:"outlined",onClick:()=>p(v,k),children:"Next →"})]})]}),e.jsx(h,{title:"All Transitions Comparison",description:"모든 트랜지션 효과 비교입니다."}),e.jsx(ne,{}),e.jsx(h,{title:"Usage Example",description:"코드 사용 예시입니다."}),e.jsx(s,{component:"pre",sx:{backgroundColor:"grey.100",p:3,fontSize:13,fontFamily:"monospace",overflow:"auto",lineHeight:1.6},children:`const [activeIndex, setActiveIndex] = useState(0);

// 기본 페이드 트랜지션
<ImageTransition
  images={['img1.jpg', 'img2.jpg', 'img3.jpg']}
  activeIndex={activeIndex}
  transition="fade"
  duration={500}
/>

// 슬라이드 트랜지션
<ImageTransition
  images={[
    { src: 'img1.jpg', alt: 'First' },
    { src: 'img2.jpg', alt: 'Second' },
  ]}
  activeIndex={activeIndex}
  transition="slide"
  duration={400}
  aspectRatio="4/3"
  onTransitionEnd={() => console.log('Done!')}
/>`})]})]})}};function ne(){const[S,i]=r.useState({fade:0,slide:0,zoom:0,reveal:0,flip:0}),u=()=>{i(n=>({fade:(n.fade+1)%a.length,slide:(n.slide+1)%a.length,zoom:(n.zoom+1)%a.length,reveal:(n.reveal+1)%a.length,flip:(n.flip+1)%a.length}))},o=["fade","slide","zoom","reveal","flip"];return e.jsxs(s,{children:[e.jsx(l,{variant:"contained",onClick:u,sx:{mb:3},children:"Change All Images →"}),e.jsx(s,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",sm:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"},gap:2},children:o.map(n=>e.jsxs(s,{children:[e.jsx(T,{variant:"caption",sx:{mb:1,display:"block",fontWeight:600},children:n.toUpperCase()}),e.jsx(x,{images:a,activeIndex:S[n],transition:n,duration:600,aspectRatio:"16/9"})]},n))})]})}w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function DefaultStory() {
    const [index, setIndex] = useState(0);
    return <Box sx={{
      maxWidth: 800
    }}>
        <ImageTransition images={sampleImages} activeIndex={index} transition="fade" duration={500} />
        <Stack direction="row" spacing={1} sx={{
        mt: 2,
        justifyContent: 'center'
      }}>
          {sampleImages.map((_, i) => <Button key={i} variant={index === i ? 'contained' : 'outlined'} size="small" onClick={() => setIndex(i)}>
              {i + 1}
            </Button>)}
        </Stack>
      </Box>;
  }
}`,...w.parameters?.docs?.source},description:{story:"기본 사용",...w.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: function DocumentationStory() {
    const [fadeIndex, setFadeIndex] = useState(0);
    const [slideIndex, setSlideIndex] = useState(0);
    const [zoomIndex, setZoomIndex] = useState(0);
    const [revealIndex, setRevealIndex] = useState(0);
    const [flipIndex, setFlipIndex] = useState(0);
    const handlePrev = (current, setter) => {
      setter(current > 0 ? current - 1 : sampleImages.length - 1);
    };
    const handleNext = (current, setter) => {
      setter(current < sampleImages.length - 1 ? current + 1 : 0);
    };
    return <>
        <DocumentTitle title="ImageTransition" status="Available" note="Index-based image transition component" brandName="Media" systemName="Starter Kit" version="1.0" />
        <PageContainer>
          <Typography variant="h4" sx={{
          fontWeight: 700,
          mb: 1
        }}>
            ImageTransition
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{
          mb: 4
        }}>
            activeIndex를 변경하면 이전 이미지와 새 이미지 간 트랜지션이 실행됩니다.
            5가지 트랜지션 효과를 지원합니다.
          </Typography>

          <SectionTitle title="Props" description="ImageTransition 컴포넌트의 Props입니다." />
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
                }}>images</TableCell>
                  <TableCell>Array</TableCell>
                  <TableCell>[]</TableCell>
                  <TableCell>이미지 배열 (string[] 또는 {'{src, alt}'}[])</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{
                  fontFamily: 'monospace'
                }}>activeIndex</TableCell>
                  <TableCell>number</TableCell>
                  <TableCell>0</TableCell>
                  <TableCell>현재 활성 이미지 인덱스</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{
                  fontFamily: 'monospace'
                }}>transition</TableCell>
                  <TableCell>&apos;fade&apos; | &apos;slide&apos; | &apos;zoom&apos; | &apos;reveal&apos; | &apos;flip&apos;</TableCell>
                  <TableCell>&apos;fade&apos;</TableCell>
                  <TableCell>트랜지션 효과</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{
                  fontFamily: 'monospace'
                }}>duration</TableCell>
                  <TableCell>number</TableCell>
                  <TableCell>500</TableCell>
                  <TableCell>트랜지션 지속 시간 (ms)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{
                  fontFamily: 'monospace'
                }}>easing</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>&apos;ease-out&apos;</TableCell>
                  <TableCell>CSS 이징 함수</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{
                  fontFamily: 'monospace'
                }}>aspectRatio</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>&apos;16/9&apos;</TableCell>
                  <TableCell>컨테이너 종횡비</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{
                  fontFamily: 'monospace'
                }}>onTransitionEnd</TableCell>
                  <TableCell>function</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>트랜지션 완료 콜백</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <SectionTitle title="Transition: Fade" description="기본 크로스페이드 효과입니다." />
          <Box sx={{
          maxWidth: 700
        }}>
            <ImageTransition images={sampleImages} activeIndex={fadeIndex} transition="fade" duration={600} />
            <Stack direction="row" spacing={1} sx={{
            mt: 2,
            justifyContent: 'center'
          }}>
              <Button variant="outlined" onClick={() => handlePrev(fadeIndex, setFadeIndex)}>
                ← Prev
              </Button>
              <Typography sx={{
              lineHeight: '36px',
              px: 2
            }}>
                {fadeIndex + 1} / {sampleImages.length}
              </Typography>
              <Button variant="outlined" onClick={() => handleNext(fadeIndex, setFadeIndex)}>
                Next →
              </Button>
            </Stack>
          </Box>

          <SectionTitle title="Transition: Slide" description="좌우 슬라이드 효과입니다." />
          <Box sx={{
          maxWidth: 700
        }}>
            <ImageTransition images={sampleImages} activeIndex={slideIndex} transition="slide" duration={500} />
            <Stack direction="row" spacing={1} sx={{
            mt: 2,
            justifyContent: 'center'
          }}>
              <Button variant="outlined" onClick={() => handlePrev(slideIndex, setSlideIndex)}>
                ← Prev
              </Button>
              <Typography sx={{
              lineHeight: '36px',
              px: 2
            }}>
                {slideIndex + 1} / {sampleImages.length}
              </Typography>
              <Button variant="outlined" onClick={() => handleNext(slideIndex, setSlideIndex)}>
                Next →
              </Button>
            </Stack>
          </Box>

          <SectionTitle title="Transition: Zoom" description="줌 인/아웃 효과입니다." />
          <Box sx={{
          maxWidth: 700
        }}>
            <ImageTransition images={sampleImages} activeIndex={zoomIndex} transition="zoom" duration={700} />
            <Stack direction="row" spacing={1} sx={{
            mt: 2,
            justifyContent: 'center'
          }}>
              <Button variant="outlined" onClick={() => handlePrev(zoomIndex, setZoomIndex)}>
                ← Prev
              </Button>
              <Typography sx={{
              lineHeight: '36px',
              px: 2
            }}>
                {zoomIndex + 1} / {sampleImages.length}
              </Typography>
              <Button variant="outlined" onClick={() => handleNext(zoomIndex, setZoomIndex)}>
                Next →
              </Button>
            </Stack>
          </Box>

          <SectionTitle title="Transition: Reveal" description="마스크 reveal 효과입니다." />
          <Box sx={{
          maxWidth: 700
        }}>
            <ImageTransition images={sampleImages} activeIndex={revealIndex} transition="reveal" duration={800} />
            <Stack direction="row" spacing={1} sx={{
            mt: 2,
            justifyContent: 'center'
          }}>
              <Button variant="outlined" onClick={() => handlePrev(revealIndex, setRevealIndex)}>
                ← Prev
              </Button>
              <Typography sx={{
              lineHeight: '36px',
              px: 2
            }}>
                {revealIndex + 1} / {sampleImages.length}
              </Typography>
              <Button variant="outlined" onClick={() => handleNext(revealIndex, setRevealIndex)}>
                Next →
              </Button>
            </Stack>
          </Box>

          <SectionTitle title="Transition: Flip" description="3D 플립 효과입니다." />
          <Box sx={{
          maxWidth: 700
        }}>
            <ImageTransition images={sampleImages} activeIndex={flipIndex} transition="flip" duration={600} />
            <Stack direction="row" spacing={1} sx={{
            mt: 2,
            justifyContent: 'center'
          }}>
              <Button variant="outlined" onClick={() => handlePrev(flipIndex, setFlipIndex)}>
                ← Prev
              </Button>
              <Typography sx={{
              lineHeight: '36px',
              px: 2
            }}>
                {flipIndex + 1} / {sampleImages.length}
              </Typography>
              <Button variant="outlined" onClick={() => handleNext(flipIndex, setFlipIndex)}>
                Next →
              </Button>
            </Stack>
          </Box>

          <SectionTitle title="All Transitions Comparison" description="모든 트랜지션 효과 비교입니다." />
          <TransitionComparison />

          <SectionTitle title="Usage Example" description="코드 사용 예시입니다." />
          <Box component="pre" sx={{
          backgroundColor: 'grey.100',
          p: 3,
          fontSize: 13,
          fontFamily: 'monospace',
          overflow: 'auto',
          lineHeight: 1.6
        }}>
            {\`const [activeIndex, setActiveIndex] = useState(0);

// 기본 페이드 트랜지션
<ImageTransition
  images={['img1.jpg', 'img2.jpg', 'img3.jpg']}
  activeIndex={activeIndex}
  transition="fade"
  duration={500}
/>

// 슬라이드 트랜지션
<ImageTransition
  images={[
    { src: 'img1.jpg', alt: 'First' },
    { src: 'img2.jpg', alt: 'Second' },
  ]}
  activeIndex={activeIndex}
  transition="slide"
  duration={400}
  aspectRatio="4/3"
  onTransitionEnd={() => console.log('Done!')}
/>\`}
          </Box>
        </PageContainer>
      </>;
  }
}`,...R.parameters?.docs?.source},description:{story:"문서 및 데모",...R.parameters?.docs?.description}}};const ye=["Default","Documentation"];export{w as Default,R as Documentation,ye as __namedExportsOrder,ve as default};
