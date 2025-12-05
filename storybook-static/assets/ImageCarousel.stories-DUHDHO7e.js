import{r as l,j as e}from"./iframe-q-XN_VZM.js";import{D as ie,P as ne,S as b}from"./SectionTitle-B-E4QVff.js";import{C as ce,a as de}from"./ChevronRight-C82aywmU.js";import{I as pe}from"./Indicator-xiTss40G.js";import{B as t}from"./Box-Dmtu8wWb.js";import{I as Y}from"./IconButton-BSXa4zK8.js";import{T as i}from"./Typography-C8IUsM00.js";import{b as me,a as ue,c as g,T as o,d as xe}from"./TableRow-DxwoBvdd.js";import{T as he}from"./TableHead-CFjEf5Al.js";import{S as D}from"./Stack-BQqDyOBu.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CDdqLoBf.js";import"./Container-q5yveaGP.js";import"./memoTheme-BW0efeYW.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./Grid-Dd6PAMTp.js";import"./isMuiElement-DpiUmZPP.js";import"./createSvgIcon-CvYdi5pS.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-JbB1eRtB.js";import"./useTimeout-C6lNLwyh.js";import"./CircularProgress-K6SSDdjw.js";function n({images:T=[],aspectRatio:v="16/9",transition:p="slide",transitionDuration:B=300,isAutoPlay:j=!1,autoPlayInterval:f=5e3,isLoop:u=!0,hasIndicator:O=!0,indicatorType:x="dot",indicatorPosition:C="bottom",hasArrows:w=!0,isPausedOnHover:P=!0,onSlideChange:h,sx:W,...k}){const[s,c]=l.useState(0),[z,L]=l.useState(!1),[y,X]=l.useState(!1),[K,G]=l.useState(0),[q,N]=l.useState(0),_=l.useRef(null),M=l.useRef(null),H=T.map((a,d)=>typeof a=="string"?{src:a,alt:`Image ${d+1}`}:a),r=H.length,I=l.useCallback(()=>{c(a=>a>=r-1?u?0:a:a+1)},[r,u]),F=l.useCallback(()=>{c(a=>a<=0?u?r-1:a:a-1)},[r,u]),J=l.useCallback(a=>{a>=0&&a<r&&c(a)},[r]);l.useEffect(()=>{h?.(s)},[s,h]),l.useEffect(()=>(j&&!z&&!y&&(M.current=setInterval(I,f)),()=>{M.current&&clearInterval(M.current)}),[j,z,y,f,I]),l.useEffect(()=>{const a=E=>{E.key==="ArrowLeft"&&F(),E.key==="ArrowRight"&&I()},d=_.current;if(d)return d.addEventListener("keydown",a),()=>d.removeEventListener("keydown",a)},[I,F]);const $=a=>{X(!0),G(a)},U=a=>{if(!y)return;const d=a-K;N(d)},V=()=>{if(!y)return;const a=50;q>a?F():q<-a&&I(),X(!1),N(0)},Q=a=>$(a.clientX),Z=a=>U(a.clientX),ee=()=>V(),ae=()=>{y&&V()},oe=a=>$(a.touches[0].clientX),te=a=>U(a.touches[0].clientX),se=()=>V(),re=()=>{const a={position:"absolute",zIndex:2};switch(C){case"top":return{...a,top:16,left:"50%",transform:"translateX(-50%)"};case"left":return{...a,left:16,top:"50%",transform:"translateY(-50%)"};case"right":return{...a,right:16,top:"50%",transform:"translateY(-50%)"};case"bottom":default:return{...a,bottom:16,left:"50%",transform:"translateX(-50%)"}}},le=()=>{if(p==="fade")return"none";const a=100/r,d=y?q/300*a:0;return`translateX(${-(s*a)+d}%)`};return r===0?null:e.jsxs(t,{ref:_,tabIndex:0,onMouseEnter:P?()=>L(!0):void 0,onMouseLeave:P?()=>L(!1):void 0,sx:{position:"relative",width:"100%",aspectRatio:v,overflow:"hidden",backgroundColor:"grey.900",outline:"none",cursor:y?"grabbing":"grab",userSelect:"none",...W},...k,children:[e.jsx(t,{onMouseDown:Q,onMouseMove:Z,onMouseUp:ee,onMouseLeave:ae,onTouchStart:oe,onTouchMove:te,onTouchEnd:se,sx:{display:p==="fade"?"block":"flex",width:p==="fade"?"100%":`${r*100}%`,height:"100%",transform:le(),transition:y?"none":`transform ${B}ms ease-out`},children:H.map((a,d)=>e.jsx(t,{sx:{width:p==="fade"?"100%":`${100/r}%`,height:"100%",flexShrink:0,position:p==="fade"?"absolute":"relative",top:0,left:0,opacity:p==="fade"?d===s?1:0:1,transition:p==="fade"?`opacity ${B}ms ease-out`:"none"},children:e.jsx(t,{component:"img",src:a.src,alt:a.alt,draggable:!1,sx:{width:"100%",height:"100%",objectFit:"cover",pointerEvents:"none"}})},d))}),w&&r>1&&e.jsxs(e.Fragment,{children:[e.jsx(Y,{onClick:F,disabled:!u&&s===0,sx:{position:"absolute",left:8,top:"50%",transform:"translateY(-50%)",backgroundColor:"rgba(255,255,255,0.9)",color:"grey.800",zIndex:2,"&:hover":{backgroundColor:"white"},"&:disabled":{opacity:.3}},children:e.jsx(ce,{})}),e.jsx(Y,{onClick:I,disabled:!u&&s===r-1,sx:{position:"absolute",right:8,top:"50%",transform:"translateY(-50%)",backgroundColor:"rgba(255,255,255,0.9)",color:"grey.800",zIndex:2,"&:hover":{backgroundColor:"white"},"&:disabled":{opacity:.3}},children:e.jsx(de,{})})]}),O&&r>1&&e.jsx(t,{sx:re(),children:e.jsx(pe,{total:r,current:s,variant:x,direction:C==="left"||C==="right"?"vertical":"horizontal",activeColor:"common.white",inactiveColor:"rgba(255,255,255,0.5)",onClick:J})})]})}n.__docgenInfo={description:`ImageCarousel 컴포넌트

단일 이미지 영역 내에서 여러 이미지를 캐러셀로 표시하는 컴포넌트.
스와이프 제스처, 키보드 네비게이션, 자동 재생을 지원한다.

동작 방식:
1. 이미지들이 가로로 배치되고 현재 인덱스에 따라 이동
2. 터치/마우스 드래그로 스와이프 가능
3. 자동 재생 시 일정 간격으로 다음 이미지로 전환
4. 내장 Indicator로 현재 위치 표시 및 직접 이동

Props:
@param {Array} images - 이미지 배열 [{ src, alt }] 또는 string[] [Required]
@param {string} aspectRatio - 컨테이너 종횡비 [Optional, 기본값: '16/9']
@param {string} transition - 트랜지션 타입 ('slide' | 'fade') [Optional, 기본값: 'slide']
@param {number} transitionDuration - 트랜지션 시간 (ms) [Optional, 기본값: 300]
@param {boolean} isAutoPlay - 자동 재생 [Optional, 기본값: false]
@param {number} autoPlayInterval - 자동 재생 간격 (ms) [Optional, 기본값: 5000]
@param {boolean} isLoop - 무한 루프 [Optional, 기본값: true]
@param {boolean} hasIndicator - 인디케이터 표시 [Optional, 기본값: true]
@param {string} indicatorType - 인디케이터 타입 [Optional, 기본값: 'dot']
@param {string} indicatorPosition - 인디케이터 위치 [Optional, 기본값: 'bottom']
@param {boolean} hasArrows - 화살표 버튼 표시 [Optional, 기본값: true]
@param {boolean} isPausedOnHover - 호버 시 자동 재생 일시 정지 [Optional, 기본값: true]
@param {function} onSlideChange - 슬라이드 변경 콜백 (index) => void [Optional]
@param {object} sx - 추가 스타일 [Optional]

Example usage:
<ImageCarousel
  images={['img1.jpg', 'img2.jpg', 'img3.jpg']}
  aspectRatio="16/9"
  isAutoPlay
  autoPlayInterval={4000}
  hasIndicator
  indicatorType="line"
/>`,methods:[],displayName:"ImageCarousel",props:{images:{defaultValue:{value:"[]",computed:!1},required:!1},aspectRatio:{defaultValue:{value:"'16/9'",computed:!1},required:!1},transition:{defaultValue:{value:"'slide'",computed:!1},required:!1},transitionDuration:{defaultValue:{value:"300",computed:!1},required:!1},isAutoPlay:{defaultValue:{value:"false",computed:!1},required:!1},autoPlayInterval:{defaultValue:{value:"5000",computed:!1},required:!1},isLoop:{defaultValue:{value:"true",computed:!1},required:!1},hasIndicator:{defaultValue:{value:"true",computed:!1},required:!1},indicatorType:{defaultValue:{value:"'dot'",computed:!1},required:!1},indicatorPosition:{defaultValue:{value:"'bottom'",computed:!1},required:!1},hasArrows:{defaultValue:{value:"true",computed:!1},required:!1},isPausedOnHover:{defaultValue:{value:"true",computed:!1},required:!1}}};function A({total:T,current:v,type:p="dot",direction:B="horizontal",size:j="md",activeColor:f="primary.main",inactiveColor:u="grey.400",gap:O=1,onClick:x,sx:C,...w}){const P={sm:{dot:6,line:{width:16,height:2}},md:{dot:8,line:{width:24,height:3}},lg:{dot:10,line:{width:32,height:4}}},h=P[j]||P.md;if(p==="fraction")return e.jsxs(t,{sx:{display:"flex",alignItems:"center",fontFamily:"monospace",fontSize:j==="sm"?12:j==="lg"?16:14,color:"text.secondary",...C},...w,children:[e.jsx(t,{component:"span",sx:{color:f,fontWeight:700},children:v+1}),e.jsx(t,{component:"span",sx:{mx:.5,opacity:.5},children:"/"}),e.jsx(t,{component:"span",children:T})]});if(p==="progress"){const s=(v+1)/T*100;return e.jsx(t,{sx:{width:"100%",maxWidth:200,height:h.line.height,backgroundColor:u,borderRadius:1,overflow:"hidden",...C},...w,children:e.jsx(t,{sx:{width:`${s}%`,height:"100%",backgroundColor:f,transition:"width 0.3s ease-out"}})})}const W=Array.from({length:T},(s,c)=>c),k=B==="vertical";return e.jsx(t,{sx:{display:"flex",flexDirection:k?"column":"row",alignItems:"center",gap:O,...C},...w,children:W.map(s=>{const c=s===v;return p==="line"?e.jsx(t,{onClick:x?()=>x(s):void 0,sx:{width:k?h.line.height:h.line.width,height:k?h.line.width:h.line.height,backgroundColor:c?f:u,borderRadius:.5,cursor:x?"pointer":"default",transition:"all 0.2s ease-out",transform:c?"scaleX(1.2)":"scaleX(1)",transformOrigin:"center","&:hover":x?{backgroundColor:c?f:"grey.500"}:{}}},s):e.jsx(t,{onClick:x?()=>x(s):void 0,sx:{width:h.dot,height:h.dot,borderRadius:"50%",backgroundColor:c?f:u,cursor:x?"pointer":"default",transition:"all 0.2s ease-out",transform:c?"scale(1.2)":"scale(1)","&:hover":x?{backgroundColor:c?f:"grey.500",transform:"scale(1.3)"}:{}}},s)})})}A.__docgenInfo={description:`CarouselIndicator 컴포넌트

캐러셀, 슬라이더 등에서 현재 위치를 표시하는 인디케이터 컴포넌트.
dot, line, fraction 등 다양한 스타일을 지원한다.

동작 방식:
1. total과 current로 전체 개수와 현재 위치 표시
2. type에 따라 다른 시각적 스타일 적용
3. onClick으로 특정 인덱스 클릭 시 이동 가능

Props:
@param {number} total - 전체 아이템 개수 [Required]
@param {number} current - 현재 활성 인덱스 (0-based) [Required]
@param {string} type - 인디케이터 타입 ('dot' | 'line' | 'fraction' | 'progress') [Optional, 기본값: 'dot']
@param {string} direction - 배치 방향 ('horizontal' | 'vertical') [Optional, 기본값: 'horizontal']
@param {string} size - 크기 ('sm' | 'md' | 'lg') [Optional, 기본값: 'md']
@param {string} activeColor - 활성 색상 [Optional, 기본값: 'primary.main']
@param {string} inactiveColor - 비활성 색상 [Optional, 기본값: 'grey.400']
@param {number} gap - 아이템 간 간격 [Optional, 기본값: 1]
@param {function} onClick - 클릭 핸들러 (index) => void [Optional]
@param {object} sx - 추가 스타일 [Optional]

Example usage:
<CarouselIndicator
  total={5}
  current={2}
  type="dot"
  onClick={(index) => setCurrentSlide(index)}
/>`,methods:[],displayName:"CarouselIndicator",props:{type:{defaultValue:{value:"'dot'",computed:!1},required:!1},direction:{defaultValue:{value:"'horizontal'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},activeColor:{defaultValue:{value:"'primary.main'",computed:!1},required:!1},inactiveColor:{defaultValue:{value:"'grey.400'",computed:!1},required:!1},gap:{defaultValue:{value:"1",computed:!1},required:!1}}};const Ee={title:"Custom Component/Media/ImageCarousel",component:n,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
## ImageCarousel

스와이프와 자동 재생을 지원하는 이미지 캐러셀 컴포넌트.

### 용도
- 제품 이미지 갤러리
- Hero 슬라이더
- 프로모션 배너
        `}}},argTypes:{transition:{control:"select",options:["slide","fade"],description:"트랜지션 타입"},isAutoPlay:{control:"boolean",description:"자동 재생"},hasArrows:{control:"boolean",description:"화살표 버튼 표시"},hasIndicator:{control:"boolean",description:"인디케이터 표시"},indicatorType:{control:"select",options:["dot","line","fraction","progress"],description:"인디케이터 타입"},indicatorPosition:{control:"select",options:["top","bottom","left","right"],description:"인디케이터 위치"}}},m=[{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",alt:"Mountains"},{src:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop",alt:"Forest"},{src:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop",alt:"Beach"},{src:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=800&fit=crop",alt:"Night Sky"},{src:"https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&h=800&fit=crop",alt:"Forest Path"}],R={args:{images:m,aspectRatio:"16/9",transition:"slide",isAutoPlay:!1,hasArrows:!0,hasIndicator:!0,indicatorType:"dot",indicatorPosition:"bottom",isLoop:!0},render:T=>e.jsx(t,{sx:{maxWidth:800},children:e.jsx(n,{...T})})},S={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(ie,{title:"ImageCarousel",status:"Available",note:"Swipe/autoplay image carousel",brandName:"Media",systemName:"Starter Kit",version:"1.0"}),e.jsxs(ne,{children:[e.jsx(i,{variant:"h4",sx:{fontWeight:700,mb:1},children:"ImageCarousel"}),e.jsx(i,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"스와이프 제스처, 키보드 네비게이션, 자동 재생을 지원하는 이미지 캐러셀입니다. 내장된 CarouselIndicator로 현재 위치를 표시합니다."}),e.jsx(b,{title:"Props",description:"ImageCarousel 컴포넌트의 Props입니다."}),e.jsx(me,{children:e.jsxs(ue,{size:"small",children:[e.jsx(he,{children:e.jsxs(g,{children:[e.jsx(o,{sx:{fontWeight:600},children:"Prop"}),e.jsx(o,{sx:{fontWeight:600},children:"Type"}),e.jsx(o,{sx:{fontWeight:600},children:"Default"}),e.jsx(o,{sx:{fontWeight:600},children:"Description"})]})}),e.jsxs(xe,{children:[e.jsxs(g,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"images"}),e.jsx(o,{children:"Array"}),e.jsx(o,{children:"[]"}),e.jsx(o,{children:"이미지 배열"})]}),e.jsxs(g,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"transition"}),e.jsx(o,{children:"'slide' | 'fade'"}),e.jsx(o,{children:"'slide'"}),e.jsx(o,{children:"트랜지션 타입"})]}),e.jsxs(g,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"isAutoPlay"}),e.jsx(o,{children:"boolean"}),e.jsx(o,{children:"false"}),e.jsx(o,{children:"자동 재생"})]}),e.jsxs(g,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"autoPlayInterval"}),e.jsx(o,{children:"number"}),e.jsx(o,{children:"5000"}),e.jsx(o,{children:"자동 재생 간격 (ms)"})]}),e.jsxs(g,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"isLoop"}),e.jsx(o,{children:"boolean"}),e.jsx(o,{children:"true"}),e.jsx(o,{children:"무한 루프"})]}),e.jsxs(g,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"hasIndicator"}),e.jsx(o,{children:"boolean"}),e.jsx(o,{children:"true"}),e.jsx(o,{children:"인디케이터 표시"})]}),e.jsxs(g,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"indicatorType"}),e.jsx(o,{children:"'dot' | 'line' | 'fraction' | 'progress'"}),e.jsx(o,{children:"'dot'"}),e.jsx(o,{children:"인디케이터 타입"})]}),e.jsxs(g,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"indicatorPosition"}),e.jsx(o,{children:"'top' | 'bottom' | 'left' | 'right'"}),e.jsx(o,{children:"'bottom'"}),e.jsx(o,{children:"인디케이터 위치"})]}),e.jsxs(g,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"hasArrows"}),e.jsx(o,{children:"boolean"}),e.jsx(o,{children:"true"}),e.jsx(o,{children:"화살표 버튼 표시"})]})]})]})}),e.jsx(b,{title:"Slide Transition",description:"기본 슬라이드 트랜지션입니다. 드래그하여 스와이프할 수 있습니다."}),e.jsx(t,{sx:{maxWidth:700},children:e.jsx(n,{images:m,transition:"slide",hasIndicator:!0,indicatorType:"dot"})}),e.jsx(b,{title:"Fade Transition",description:"페이드 트랜지션입니다."}),e.jsx(t,{sx:{maxWidth:700},children:e.jsx(n,{images:m,transition:"fade",transitionDuration:500,hasIndicator:!0,indicatorType:"line"})}),e.jsx(b,{title:"Auto Play",description:"자동 재생 캐러셀입니다. 호버 시 일시 정지됩니다."}),e.jsx(t,{sx:{maxWidth:700},children:e.jsx(n,{images:m,isAutoPlay:!0,autoPlayInterval:3e3,hasIndicator:!0,indicatorType:"progress"})}),e.jsx(b,{title:"Indicator Types",description:"다양한 인디케이터 타입입니다."}),e.jsxs(D,{spacing:4,children:[e.jsxs(t,{children:[e.jsx(i,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:"Dot (기본)"}),e.jsx(t,{sx:{maxWidth:500},children:e.jsx(n,{images:m.slice(0,4),hasIndicator:!0,indicatorType:"dot",hasArrows:!1})})]}),e.jsxs(t,{children:[e.jsx(i,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:"Line"}),e.jsx(t,{sx:{maxWidth:500},children:e.jsx(n,{images:m.slice(0,4),hasIndicator:!0,indicatorType:"line",hasArrows:!1})})]}),e.jsxs(t,{children:[e.jsx(i,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:"Fraction"}),e.jsx(t,{sx:{maxWidth:500},children:e.jsx(n,{images:m.slice(0,4),hasIndicator:!0,indicatorType:"fraction",hasArrows:!1})})]})]}),e.jsx(b,{title:"Indicator Position",description:"인디케이터 위치 옵션입니다."}),e.jsxs(D,{direction:{xs:"column",md:"row"},spacing:2,children:[e.jsxs(t,{sx:{flex:1},children:[e.jsx(i,{variant:"caption",sx:{mb:1,display:"block"},children:"Top"}),e.jsx(n,{images:m.slice(0,3),aspectRatio:"4/3",indicatorPosition:"top",hasArrows:!1})]}),e.jsxs(t,{sx:{flex:1},children:[e.jsx(i,{variant:"caption",sx:{mb:1,display:"block"},children:"Right"}),e.jsx(n,{images:m.slice(0,3),aspectRatio:"4/3",indicatorPosition:"right",hasArrows:!1})]})]}),e.jsx(b,{title:"CarouselIndicator (Standalone)",description:"인디케이터를 독립적으로 사용할 수 있습니다."}),e.jsxs(D,{spacing:3,sx:{p:3,backgroundColor:"grey.100"},children:[e.jsxs(t,{children:[e.jsx(i,{variant:"caption",sx:{mb:1,display:"block"},children:"Dot"}),e.jsx(A,{total:5,current:2,type:"dot"})]}),e.jsxs(t,{children:[e.jsx(i,{variant:"caption",sx:{mb:1,display:"block"},children:"Line"}),e.jsx(A,{total:5,current:2,type:"line"})]}),e.jsxs(t,{children:[e.jsx(i,{variant:"caption",sx:{mb:1,display:"block"},children:"Fraction"}),e.jsx(A,{total:5,current:2,type:"fraction"})]}),e.jsxs(t,{children:[e.jsx(i,{variant:"caption",sx:{mb:1,display:"block"},children:"Progress"}),e.jsx(A,{total:5,current:2,type:"progress"})]})]}),e.jsx(b,{title:"Different Aspect Ratios",description:"다양한 종횡비 설정입니다."}),e.jsxs(D,{direction:{xs:"column",md:"row"},spacing:2,children:[e.jsxs(t,{sx:{flex:1},children:[e.jsx(i,{variant:"caption",sx:{mb:1,display:"block"},children:"16/9"}),e.jsx(n,{images:m.slice(0,3),aspectRatio:"16/9",hasArrows:!1})]}),e.jsxs(t,{sx:{flex:1},children:[e.jsx(i,{variant:"caption",sx:{mb:1,display:"block"},children:"1/1"}),e.jsx(n,{images:m.slice(0,3),aspectRatio:"1/1",hasArrows:!1})]})]}),e.jsx(b,{title:"Usage Example",description:"코드 사용 예시입니다."}),e.jsx(t,{component:"pre",sx:{backgroundColor:"grey.100",p:3,fontSize:13,fontFamily:"monospace",overflow:"auto",lineHeight:1.6},children:`// 기본 캐러셀
<ImageCarousel
  images={['img1.jpg', 'img2.jpg', 'img3.jpg']}
  hasIndicator
  hasArrows
/>

// 자동 재생 + 페이드 트랜지션
<ImageCarousel
  images={productImages}
  transition="fade"
  isAutoPlay
  autoPlayInterval={4000}
  indicatorType="progress"
/>

// 인디케이터만 사용
<CarouselIndicator
  total={5}
  current={currentIndex}
  type="line"
  onClick={(index) => setCurrentIndex(index)}
/>`})]})]})};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    images: sampleImages,
    aspectRatio: '16/9',
    transition: 'slide',
    isAutoPlay: false,
    hasArrows: true,
    hasIndicator: true,
    indicatorType: 'dot',
    indicatorPosition: 'bottom',
    isLoop: true
  },
  render: args => <Box sx={{
    maxWidth: 800
  }}>
      <ImageCarousel {...args} />
    </Box>
}`,...R.parameters?.docs?.source},description:{story:"기본 사용",...R.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <DocumentTitle title="ImageCarousel" status="Available" note="Swipe/autoplay image carousel" brandName="Media" systemName="Starter Kit" version="1.0" />
      <PageContainer>
        <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          ImageCarousel
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{
        mb: 4
      }}>
          스와이프 제스처, 키보드 네비게이션, 자동 재생을 지원하는 이미지 캐러셀입니다.
          내장된 CarouselIndicator로 현재 위치를 표시합니다.
        </Typography>

        <SectionTitle title="Props" description="ImageCarousel 컴포넌트의 Props입니다." />
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
                <TableCell>이미지 배열</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>transition</TableCell>
                <TableCell>&apos;slide&apos; | &apos;fade&apos;</TableCell>
                <TableCell>&apos;slide&apos;</TableCell>
                <TableCell>트랜지션 타입</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>isAutoPlay</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>자동 재생</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>autoPlayInterval</TableCell>
                <TableCell>number</TableCell>
                <TableCell>5000</TableCell>
                <TableCell>자동 재생 간격 (ms)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>isLoop</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>true</TableCell>
                <TableCell>무한 루프</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>hasIndicator</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>true</TableCell>
                <TableCell>인디케이터 표시</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>indicatorType</TableCell>
                <TableCell>&apos;dot&apos; | &apos;line&apos; | &apos;fraction&apos; | &apos;progress&apos;</TableCell>
                <TableCell>&apos;dot&apos;</TableCell>
                <TableCell>인디케이터 타입</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>indicatorPosition</TableCell>
                <TableCell>&apos;top&apos; | &apos;bottom&apos; | &apos;left&apos; | &apos;right&apos;</TableCell>
                <TableCell>&apos;bottom&apos;</TableCell>
                <TableCell>인디케이터 위치</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>hasArrows</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>true</TableCell>
                <TableCell>화살표 버튼 표시</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="Slide Transition" description="기본 슬라이드 트랜지션입니다. 드래그하여 스와이프할 수 있습니다." />
        <Box sx={{
        maxWidth: 700
      }}>
          <ImageCarousel images={sampleImages} transition="slide" hasIndicator indicatorType="dot" />
        </Box>

        <SectionTitle title="Fade Transition" description="페이드 트랜지션입니다." />
        <Box sx={{
        maxWidth: 700
      }}>
          <ImageCarousel images={sampleImages} transition="fade" transitionDuration={500} hasIndicator indicatorType="line" />
        </Box>

        <SectionTitle title="Auto Play" description="자동 재생 캐러셀입니다. 호버 시 일시 정지됩니다." />
        <Box sx={{
        maxWidth: 700
      }}>
          <ImageCarousel images={sampleImages} isAutoPlay autoPlayInterval={3000} hasIndicator indicatorType="progress" />
        </Box>

        <SectionTitle title="Indicator Types" description="다양한 인디케이터 타입입니다." />
        <Stack spacing={4}>
          <Box>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              Dot (기본)
            </Typography>
            <Box sx={{
            maxWidth: 500
          }}>
              <ImageCarousel images={sampleImages.slice(0, 4)} hasIndicator indicatorType="dot" hasArrows={false} />
            </Box>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              Line
            </Typography>
            <Box sx={{
            maxWidth: 500
          }}>
              <ImageCarousel images={sampleImages.slice(0, 4)} hasIndicator indicatorType="line" hasArrows={false} />
            </Box>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              Fraction
            </Typography>
            <Box sx={{
            maxWidth: 500
          }}>
              <ImageCarousel images={sampleImages.slice(0, 4)} hasIndicator indicatorType="fraction" hasArrows={false} />
            </Box>
          </Box>
        </Stack>

        <SectionTitle title="Indicator Position" description="인디케이터 위치 옵션입니다." />
        <Stack direction={{
        xs: 'column',
        md: 'row'
      }} spacing={2}>
          <Box sx={{
          flex: 1
        }}>
            <Typography variant="caption" sx={{
            mb: 1,
            display: 'block'
          }}>Top</Typography>
            <ImageCarousel images={sampleImages.slice(0, 3)} aspectRatio="4/3" indicatorPosition="top" hasArrows={false} />
          </Box>
          <Box sx={{
          flex: 1
        }}>
            <Typography variant="caption" sx={{
            mb: 1,
            display: 'block'
          }}>Right</Typography>
            <ImageCarousel images={sampleImages.slice(0, 3)} aspectRatio="4/3" indicatorPosition="right" hasArrows={false} />
          </Box>
        </Stack>

        <SectionTitle title="CarouselIndicator (Standalone)" description="인디케이터를 독립적으로 사용할 수 있습니다." />
        <Stack spacing={3} sx={{
        p: 3,
        backgroundColor: 'grey.100'
      }}>
          <Box>
            <Typography variant="caption" sx={{
            mb: 1,
            display: 'block'
          }}>Dot</Typography>
            <CarouselIndicator total={5} current={2} type="dot" />
          </Box>
          <Box>
            <Typography variant="caption" sx={{
            mb: 1,
            display: 'block'
          }}>Line</Typography>
            <CarouselIndicator total={5} current={2} type="line" />
          </Box>
          <Box>
            <Typography variant="caption" sx={{
            mb: 1,
            display: 'block'
          }}>Fraction</Typography>
            <CarouselIndicator total={5} current={2} type="fraction" />
          </Box>
          <Box>
            <Typography variant="caption" sx={{
            mb: 1,
            display: 'block'
          }}>Progress</Typography>
            <CarouselIndicator total={5} current={2} type="progress" />
          </Box>
        </Stack>

        <SectionTitle title="Different Aspect Ratios" description="다양한 종횡비 설정입니다." />
        <Stack direction={{
        xs: 'column',
        md: 'row'
      }} spacing={2}>
          <Box sx={{
          flex: 1
        }}>
            <Typography variant="caption" sx={{
            mb: 1,
            display: 'block'
          }}>16/9</Typography>
            <ImageCarousel images={sampleImages.slice(0, 3)} aspectRatio="16/9" hasArrows={false} />
          </Box>
          <Box sx={{
          flex: 1
        }}>
            <Typography variant="caption" sx={{
            mb: 1,
            display: 'block'
          }}>1/1</Typography>
            <ImageCarousel images={sampleImages.slice(0, 3)} aspectRatio="1/1" hasArrows={false} />
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
          {\`// 기본 캐러셀
<ImageCarousel
  images={['img1.jpg', 'img2.jpg', 'img3.jpg']}
  hasIndicator
  hasArrows
/>

// 자동 재생 + 페이드 트랜지션
<ImageCarousel
  images={productImages}
  transition="fade"
  isAutoPlay
  autoPlayInterval={4000}
  indicatorType="progress"
/>

// 인디케이터만 사용
<CarouselIndicator
  total={5}
  current={currentIndex}
  type="line"
  onClick={(index) => setCurrentIndex(index)}
/>\`}
        </Box>
      </PageContainer>
    </>
}`,...S.parameters?.docs?.source},description:{story:"문서 및 데모",...S.parameters?.docs?.description}}};const ze=["Default","Documentation"];export{R as Default,S as Documentation,ze as __namedExportsOrder,Ee as default};
