import{r as c,j as e,x as v}from"./iframe-q-XN_VZM.js";import{D as I,P as E,S as f}from"./SectionTitle-B-E4QVff.js";import{T as y}from"./Typography-C8IUsM00.js";import{u as z}from"./useTheme-CDdqLoBf.js";import{B as r}from"./Box-Dmtu8wWb.js";import{b as S,a as P,c as o,T as a,d as O}from"./TableRow-DxwoBvdd.js";import{T as D}from"./TableHead-CFjEf5Al.js";import{S as V}from"./Stack-BQqDyOBu.js";import"./preload-helper-PPVm8Dsz.js";import"./Container-q5yveaGP.js";import"./memoTheme-BW0efeYW.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./Grid-Dd6PAMTp.js";import"./isMuiElement-DpiUmZPP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const N=l=>{const t=l.replace("#",""),m=parseInt(t.substring(0,2),16),n=parseInt(t.substring(2,4),16),s=parseInt(t.substring(4,6),16);return(m*299+n*587+s*114)/1e3},_=(l,t)=>{if(!t)return l.palette.primary.main;if(t.startsWith("#"))return t;const m=t.split(".");let n=l.palette;for(const s of m)n=n?.[s];return n||l.palette.primary.main},A=v`
  from {
    background-size: 0% 2px;
  }
  to {
    background-size: 100% 2px;
  }
`,M=v`
  from {
    background-size: 0% 100%;
  }
  to {
    background-size: 100% 100%;
  }
`,U=v`
  from {
    background-color: transparent;
  }
  to {
    background-color: var(--highlight-color);
  }
`,L=v`
  from {
    stroke-dashoffset: var(--circle-length);
  }
  to {
    stroke-dashoffset: 0;
  }
`;function i({children:l,type:t="background",color:m="primary.main",animated:n=!1,delay:s=0,duration:b=600,isVisible:k=!0,textColor:x="auto"}){const F=z(),u=c.useRef(null),[T,d]=c.useState(300),p=_(F,m),w=()=>x!=="auto"?x:t==="background"&&N(p)<128?"#FFFFFF":"inherit";c.useEffect(()=>{if(t==="circle"&&u.current){const W=u.current.offsetWidth,$=u.current.offsetHeight,R=W/2+8,B=$/2+6,q=Math.PI*(3*(R+B)-Math.sqrt((3*R+B)*(R+3*B)));d(q)}},[t,l]);const g=n&&k;return t==="underline"?e.jsx(r,{component:"span",sx:{position:"relative",display:"inline",backgroundImage:`linear-gradient(${p}, ${p})`,backgroundSize:g?"0% 2px":"100% 2px",backgroundPosition:"left bottom",backgroundRepeat:"no-repeat",paddingBottom:"2px",animation:g?`${A} ${b}ms ease-out ${s}ms forwards`:"none"},children:l}):t==="background"?e.jsx(r,{component:"span",sx:{"--highlight-color":p,display:"inline",backgroundColor:g?"transparent":"var(--highlight-color)",color:w(),padding:"0.1em 0.2em",borderRadius:"2px",animation:g?`${U} ${b}ms ease-out ${s}ms forwards`:"none"},children:l}):t==="marker"?e.jsx(r,{component:"span",sx:{position:"relative",display:"inline",backgroundImage:`linear-gradient(120deg, ${p}40 0%, ${p}40 100%)`,backgroundSize:g?"0% 100%":"100% 100%",backgroundPosition:"left center",backgroundRepeat:"no-repeat",animation:g?`${M} ${b}ms ease-out ${s}ms forwards`:"none"},children:l}):t==="circle"?e.jsxs(r,{component:"span",ref:u,sx:{"--circle-length":T,position:"relative",display:"inline-block",padding:"0.1em 0.3em"},children:[l,e.jsx(r,{component:"svg",viewBox:"0 0 100 50",preserveAspectRatio:"none",sx:{position:"absolute",left:"-8px",top:"-6px",width:"calc(100% + 16px)",height:"calc(100% + 12px)",overflow:"visible",pointerEvents:"none"},children:e.jsx(r,{component:"ellipse",cx:"50",cy:"25",rx:"48",ry:"22",sx:{fill:"none",stroke:p,strokeWidth:2,strokeLinecap:"round",strokeDasharray:T,strokeDashoffset:g?T:0,animation:g?`${L} ${b}ms ease-out ${s}ms forwards`:"none",transform:"rotate(-2deg)",transformOrigin:"center"}})})]}):e.jsx("span",{children:l})}function h({children:l,variant:t="body1",component:m="p",animated:n=!1,threshold:s=.5,sx:b,...k}){const x=c.useRef(null),[F,u]=c.useState(!n);c.useEffect(()=>{if(!n)return;const d=new IntersectionObserver(([w])=>{w.isIntersecting&&(u(!0),d.disconnect())},{threshold:s}),p=x.current;return p&&d.observe(p),()=>d.disconnect()},[n,s]);const T=c.Children.map(l,d=>c.isValidElement(d)&&d.type===i?c.cloneElement(d,{isVisible:F}):d);return e.jsx(y,{ref:x,variant:t,component:m,sx:{...b},...k,children:T})}h.Highlight=i;i.__docgenInfo={description:`Highlight 컴포넌트 (하위 컴포넌트)

텍스트의 특정 부분을 강조하는 스타일을 적용.
background 타입의 경우 배경색 밝기에 따라 텍스트 색상 자동 결정.

Props:
@param {ReactNode} children - 강조할 텍스트 [Required]
@param {string} type - 강조 유형 ('underline' | 'background' | 'marker' | 'circle') [Required]
@param {string} color - 강조 색상 ('primary.main', 'secondary.main', '#FF0000' 등) [Optional, 기본값: 'primary.main']
@param {boolean} animated - draw 애니메이션 활성화 [Optional, 기본값: false]
@param {number} delay - 애니메이션 지연 (ms) [Optional, 기본값: 0]
@param {number} duration - 애니메이션 지속 시간 (ms) [Optional, 기본값: 600]
@param {string} textColor - 텍스트 색상 강제 지정 ('auto' | 'white' | 'inherit' 등) [Optional, 기본값: 'auto']

Example usage:
<Highlight type="background" color="primary.main">자동 색상</Highlight>
<Highlight type="background" color="#000000" textColor="white">흰색 강제</Highlight>`,methods:[],displayName:"Highlight",props:{type:{defaultValue:{value:"'background'",computed:!1},required:!1},color:{defaultValue:{value:"'primary.main'",computed:!1},required:!1},animated:{defaultValue:{value:"false",computed:!1},required:!1},delay:{defaultValue:{value:"0",computed:!1},required:!1},duration:{defaultValue:{value:"600",computed:!1},required:!1},isVisible:{defaultValue:{value:"true",computed:!1},required:!1},textColor:{defaultValue:{value:"'auto'",computed:!1},required:!1}}};h.__docgenInfo={description:`HighlightedTypography 컴포넌트

텍스트 내 특정 단어나 구문을 다양한 스타일로 강조할 수 있는 컴포넌트.
Compound component 패턴으로 Highlight 컴포넌트와 함께 사용.

동작 방식:
1. children으로 일반 텍스트와 Highlight 컴포넌트를 조합하여 전달
2. Highlight 컴포넌트가 있는 부분에 강조 스타일이 적용됨
3. animated가 true이면 viewport 진입 시 draw 애니메이션 실행
4. 각 Highlight에 개별 delay를 설정하여 순차 애니메이션 가능

Props:
@param {ReactNode} children - 텍스트와 Highlight 컴포넌트 조합 [Required]
@param {string} variant - 타이포그래피 variant ('body1' | 'body2' | 'h1' | 'h2' | 'h3' | 'h4') [Optional, 기본값: 'body1']
@param {string} component - HTML 태그 [Optional, 기본값: 'p']
@param {boolean} animated - 전체 애니메이션 활성화 [Optional, 기본값: false]
@param {number} threshold - Intersection Observer threshold [Optional, 기본값: 0.5]
@param {object} sx - 추가 스타일 오버라이드 [Optional]

Example usage:
<HighlightedTypography animated>
  This is <Highlight type="underline">important</Highlight> text with
  <Highlight type="marker" delay={300}>highlighted</Highlight> words.
</HighlightedTypography>`,methods:[{name:"Highlight",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  type = 'background',
  color = 'primary.main',
  animated = false,
  delay = 0,
  duration = 600,
  isVisible = true,
  textColor = 'auto',
}`,optional:!1,type:null}],returns:null}],displayName:"HighlightedTypography",props:{variant:{defaultValue:{value:"'body1'",computed:!1},required:!1},component:{defaultValue:{value:"'p'",computed:!1},required:!1},animated:{defaultValue:{value:"false",computed:!1},required:!1},threshold:{defaultValue:{value:"0.5",computed:!1},required:!1}}};const he={title:"Custom Component/Typography/HighlightedTypography",component:h,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
## HighlightedTypography

텍스트 내 특정 단어나 구문을 다양한 스타일로 강조할 수 있는 컴포넌트.

### 용도
- 중요한 단어나 구문 강조
- 밑줄, 배경, 형광펜, 원 효과 적용
- 스크롤 트리거 애니메이션
        `}}},argTypes:{variant:{control:{type:"select"},options:["body1","body2","h1","h2","h3","h4","h5","h6"]},component:{control:{type:"text"}},animated:{control:{type:"boolean"}},threshold:{control:{type:"number",min:0,max:1,step:.1}}}},C={args:{variant:"h4",component:"p",animated:!1,threshold:.5},render:l=>e.jsxs(h,{variant:l.variant,component:l.component,animated:l.animated,threshold:l.threshold,children:["This is a ",e.jsx(i,{type:"background",children:"highlighted"})," text example."]})},j={args:{type:"background",color:"primary.main",textColor:"auto",animated:!1,delay:0,duration:600},argTypes:{type:{control:{type:"select"},options:["underline","background","marker","circle"]},color:{control:{type:"select"},options:["primary.main","secondary.main","error.main","warning.main","success.main","#FF0000","#00FF00","#0000FF","#000000","#FFFF00"]},textColor:{control:{type:"select"},options:["auto","#FFFFFF","inherit"]},animated:{control:{type:"boolean"}},delay:{control:{type:"number",min:0,max:2e3,step:100}},duration:{control:{type:"number",min:100,max:2e3,step:100}}},render:l=>e.jsxs(h,{variant:"h4",animated:l.animated,children:["This text has a"," ",e.jsx(i,{type:l.type,color:l.color,textColor:l.textColor,animated:l.animated,delay:l.delay,duration:l.duration,children:"highlighted word"})," ","in it."]})},H={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(I,{title:"HighlightedTypography",status:"Available",note:"Text highlighting effect component",brandName:"Typography",systemName:"Starter Kit",version:"1.0"}),e.jsxs(E,{children:[e.jsx(y,{variant:"h4",sx:{fontWeight:700,mb:1},children:"HighlightedTypography"}),e.jsx(y,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"텍스트 내 특정 단어나 구문을 다양한 스타일로 강조합니다. Compound component 패턴으로 Highlight 컴포넌트와 함께 사용합니다."}),e.jsx(f,{title:"Props",description:"HighlightedTypography 컴포넌트의 Props 목록입니다."}),e.jsx(S,{children:e.jsxs(P,{size:"small",children:[e.jsx(D,{children:e.jsxs(o,{children:[e.jsx(a,{sx:{fontWeight:600},children:"Prop"}),e.jsx(a,{sx:{fontWeight:600},children:"Type"}),e.jsx(a,{sx:{fontWeight:600},children:"Default"}),e.jsx(a,{sx:{fontWeight:600},children:"Description"})]})}),e.jsxs(O,{children:[e.jsxs(o,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"children"}),e.jsx(a,{children:"ReactNode"}),e.jsx(a,{children:"-"}),e.jsx(a,{children:"텍스트와 Highlight 컴포넌트 조합"})]}),e.jsxs(o,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"variant"}),e.jsx(a,{children:"string"}),e.jsx(a,{children:"'body1'"}),e.jsx(a,{children:"타이포그래피 variant"})]}),e.jsxs(o,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"animated"}),e.jsx(a,{children:"boolean"}),e.jsx(a,{children:"false"}),e.jsx(a,{children:"viewport 진입 시 애니메이션 활성화"})]}),e.jsxs(o,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"threshold"}),e.jsx(a,{children:"number"}),e.jsx(a,{children:"0.5"}),e.jsx(a,{children:"Intersection Observer threshold"})]})]})]})}),e.jsx(f,{title:"Highlight Props",description:"Highlight 하위 컴포넌트의 Props입니다."}),e.jsx(S,{children:e.jsxs(P,{size:"small",children:[e.jsx(D,{children:e.jsxs(o,{children:[e.jsx(a,{sx:{fontWeight:600},children:"Prop"}),e.jsx(a,{sx:{fontWeight:600},children:"Type"}),e.jsx(a,{sx:{fontWeight:600},children:"Default"}),e.jsx(a,{sx:{fontWeight:600},children:"Description"})]})}),e.jsxs(O,{children:[e.jsxs(o,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"type"}),e.jsx(a,{children:"'underline' | 'background' | 'marker' | 'circle'"}),e.jsx(a,{children:"-"}),e.jsx(a,{children:"강조 유형 (필수)"})]}),e.jsxs(o,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"color"}),e.jsx(a,{children:"string"}),e.jsx(a,{children:"'primary.main'"}),e.jsx(a,{children:"강조 색상"})]}),e.jsxs(o,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"animated"}),e.jsx(a,{children:"boolean"}),e.jsx(a,{children:"false"}),e.jsx(a,{children:"draw 애니메이션 활성화"})]}),e.jsxs(o,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"delay"}),e.jsx(a,{children:"number"}),e.jsx(a,{children:"0"}),e.jsx(a,{children:"애니메이션 지연 (ms)"})]}),e.jsxs(o,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"duration"}),e.jsx(a,{children:"number"}),e.jsx(a,{children:"600"}),e.jsx(a,{children:"애니메이션 지속 시간 (ms)"})]}),e.jsxs(o,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"textColor"}),e.jsx(a,{children:"string"}),e.jsx(a,{children:"'auto'"}),e.jsx(a,{children:"텍스트 색상 ('auto': 배경 밝기에 따라 자동 결정)"})]})]})]})}),e.jsx(f,{title:"Highlight Types",description:"네 가지 강조 스타일을 제공합니다."}),e.jsxs(V,{spacing:4,children:[e.jsxs(r,{children:[e.jsx(y,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:"Underline - 밑줄 효과"}),e.jsxs(h,{variant:"h5",children:["We believe in ",e.jsx(i,{type:"underline",children:"innovation"})," and ",e.jsx(i,{type:"underline",children:"creativity"}),"."]})]}),e.jsxs(r,{children:[e.jsx(y,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:"Background - 배경색 효과"}),e.jsxs(h,{variant:"h5",children:["Our ",e.jsx(i,{type:"background",children:"mission"})," is to build ",e.jsx(i,{type:"background",children:"better products"}),"."]})]}),e.jsxs(r,{children:[e.jsx(y,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:"Marker - 형광펜 효과"}),e.jsxs(h,{variant:"h5",children:["This feature is ",e.jsx(i,{type:"marker",children:"absolutely essential"})," for our users."]})]}),e.jsxs(r,{children:[e.jsx(y,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:"Circle - 손으로 그린 원 효과"}),e.jsxs(h,{variant:"h5",children:["The ",e.jsx(i,{type:"circle",children:"key insight"})," changed everything."]})]})]}),e.jsx(f,{title:"Animated Examples",description:"스크롤하여 애니메이션을 확인하세요."}),e.jsx(r,{sx:{height:100}}),e.jsxs(V,{spacing:6,children:[e.jsx(r,{sx:{p:4,border:"1px solid",borderColor:"divider"},children:e.jsxs(h,{variant:"h4",animated:!0,children:["We are ",e.jsx(i,{type:"underline",animated:!0,delay:0,children:"passionate"})," about creating ",e.jsx(i,{type:"marker",animated:!0,delay:300,children:"exceptional"})," experiences that ",e.jsx(i,{type:"circle",animated:!0,delay:600,children:"inspire"})," people."]})}),e.jsx(r,{sx:{p:4,border:"1px solid",borderColor:"divider"},children:e.jsxs(h,{variant:"body1",animated:!0,children:["디자인 시스템은 ",e.jsx(i,{type:"background",animated:!0,children:"일관성"}),"을 유지하면서",e.jsx(i,{type:"underline",animated:!0,delay:200,children:"효율적인"})," 개발을 가능하게 합니다. 이를 통해 ",e.jsx(i,{type:"marker",animated:!0,delay:400,children:"사용자 경험"}),"을 개선하고",e.jsx(i,{type:"circle",animated:!0,delay:600,children:"브랜드 아이덴티티"}),"를 강화할 수 있습니다."]})})]}),e.jsx(f,{title:"Usage Example",description:"코드 사용 예시입니다."}),e.jsx(r,{component:"pre",sx:{backgroundColor:"grey.100",p:3,fontSize:13,fontFamily:"monospace",overflow:"auto",lineHeight:1.6},children:`<HighlightedTypography variant="h4" animated>
  We are <Highlight type="underline" animated delay={0}>passionate</Highlight> about
  creating <Highlight type="marker" animated delay={300}>exceptional</Highlight> experiences
  that <Highlight type="circle" animated delay={600}>inspire</Highlight> people.
</HighlightedTypography>`})]})]})};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'h4',
    component: 'p',
    animated: false,
    threshold: 0.5
  },
  render: args => <HighlightedTypography variant={args.variant} component={args.component} animated={args.animated} threshold={args.threshold}>
      This is a <Highlight type="background">highlighted</Highlight> text example.
    </HighlightedTypography>
}`,...C.parameters?.docs?.source},description:{story:"기본 사용 - HighlightedTypography props 조절",...C.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'background',
    color: 'primary.main',
    textColor: 'auto',
    animated: false,
    delay: 0,
    duration: 600
  },
  argTypes: {
    type: {
      control: {
        type: 'select'
      },
      options: ['underline', 'background', 'marker', 'circle']
    },
    color: {
      control: {
        type: 'select'
      },
      options: ['primary.main', 'secondary.main', 'error.main', 'warning.main', 'success.main', '#FF0000', '#00FF00', '#0000FF', '#000000', '#FFFF00']
    },
    textColor: {
      control: {
        type: 'select'
      },
      options: ['auto', '#FFFFFF', 'inherit']
    },
    animated: {
      control: {
        type: 'boolean'
      }
    },
    delay: {
      control: {
        type: 'number',
        min: 0,
        max: 2000,
        step: 100
      }
    },
    duration: {
      control: {
        type: 'number',
        min: 100,
        max: 2000,
        step: 100
      }
    }
  },
  render: args => <HighlightedTypography variant="h4" animated={args.animated}>
      This text has a{' '}
      <Highlight type={args.type} color={args.color} textColor={args.textColor} animated={args.animated} delay={args.delay} duration={args.duration}>
        highlighted word
      </Highlight>{' '}
      in it.
    </HighlightedTypography>
}`,...j.parameters?.docs?.source},description:{story:"Highlight 컴포넌트 props 조절",...j.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <DocumentTitle title="HighlightedTypography" status="Available" note="Text highlighting effect component" brandName="Typography" systemName="Starter Kit" version="1.0" />
      <PageContainer>
        <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          HighlightedTypography
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{
        mb: 4
      }}>
          텍스트 내 특정 단어나 구문을 다양한 스타일로 강조합니다.
          Compound component 패턴으로 Highlight 컴포넌트와 함께 사용합니다.
        </Typography>

        <SectionTitle title="Props" description="HighlightedTypography 컴포넌트의 Props 목록입니다." />
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
                <TableCell>ReactNode</TableCell>
                <TableCell>-</TableCell>
                <TableCell>텍스트와 Highlight 컴포넌트 조합</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>variant</TableCell>
                <TableCell>string</TableCell>
                <TableCell>&apos;body1&apos;</TableCell>
                <TableCell>타이포그래피 variant</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>animated</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>viewport 진입 시 애니메이션 활성화</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>threshold</TableCell>
                <TableCell>number</TableCell>
                <TableCell>0.5</TableCell>
                <TableCell>Intersection Observer threshold</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="Highlight Props" description="Highlight 하위 컴포넌트의 Props입니다." />
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
              }}>type</TableCell>
                <TableCell>&apos;underline&apos; | &apos;background&apos; | &apos;marker&apos; | &apos;circle&apos;</TableCell>
                <TableCell>-</TableCell>
                <TableCell>강조 유형 (필수)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>color</TableCell>
                <TableCell>string</TableCell>
                <TableCell>&apos;primary.main&apos;</TableCell>
                <TableCell>강조 색상</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>animated</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>draw 애니메이션 활성화</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>delay</TableCell>
                <TableCell>number</TableCell>
                <TableCell>0</TableCell>
                <TableCell>애니메이션 지연 (ms)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>duration</TableCell>
                <TableCell>number</TableCell>
                <TableCell>600</TableCell>
                <TableCell>애니메이션 지속 시간 (ms)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>textColor</TableCell>
                <TableCell>string</TableCell>
                <TableCell>&apos;auto&apos;</TableCell>
                <TableCell>텍스트 색상 (&apos;auto&apos;: 배경 밝기에 따라 자동 결정)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="Highlight Types" description="네 가지 강조 스타일을 제공합니다." />
        <Stack spacing={4}>
          <Box>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              Underline - 밑줄 효과
            </Typography>
            <HighlightedTypography variant="h5">
              We believe in <Highlight type="underline">innovation</Highlight> and <Highlight type="underline">creativity</Highlight>.
            </HighlightedTypography>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              Background - 배경색 효과
            </Typography>
            <HighlightedTypography variant="h5">
              Our <Highlight type="background">mission</Highlight> is to build <Highlight type="background">better products</Highlight>.
            </HighlightedTypography>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              Marker - 형광펜 효과
            </Typography>
            <HighlightedTypography variant="h5">
              This feature is <Highlight type="marker">absolutely essential</Highlight> for our users.
            </HighlightedTypography>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              Circle - 손으로 그린 원 효과
            </Typography>
            <HighlightedTypography variant="h5">
              The <Highlight type="circle">key insight</Highlight> changed everything.
            </HighlightedTypography>
          </Box>
        </Stack>

        <SectionTitle title="Animated Examples" description="스크롤하여 애니메이션을 확인하세요." />
        <Box sx={{
        height: 100
      }} />
        <Stack spacing={6}>
          <Box sx={{
          p: 4,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <HighlightedTypography variant="h4" animated>
              We are <Highlight type="underline" animated delay={0}>passionate</Highlight> about
              creating <Highlight type="marker" animated delay={300}>exceptional</Highlight> experiences
              that <Highlight type="circle" animated delay={600}>inspire</Highlight> people.
            </HighlightedTypography>
          </Box>

          <Box sx={{
          p: 4,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <HighlightedTypography variant="body1" animated>
              디자인 시스템은 <Highlight type="background" animated>일관성</Highlight>을 유지하면서
              <Highlight type="underline" animated delay={200}>효율적인</Highlight> 개발을 가능하게 합니다.
              이를 통해 <Highlight type="marker" animated delay={400}>사용자 경험</Highlight>을 개선하고
              <Highlight type="circle" animated delay={600}>브랜드 아이덴티티</Highlight>를 강화할 수 있습니다.
            </HighlightedTypography>
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
          {\`<HighlightedTypography variant="h4" animated>
  We are <Highlight type="underline" animated delay={0}>passionate</Highlight> about
  creating <Highlight type="marker" animated delay={300}>exceptional</Highlight> experiences
  that <Highlight type="circle" animated delay={600}>inspire</Highlight> people.
</HighlightedTypography>\`}
        </Box>
      </PageContainer>
    </>
}`,...H.parameters?.docs?.source},description:{story:"문서 및 데모",...H.parameters?.docs?.description}}};const de=["Default","HighlightPlayground","Documentation"];export{C as Default,H as Documentation,j as HighlightPlayground,de as __namedExportsOrder,he as default};
