import{r as o,j as e}from"./iframe-q-XN_VZM.js";import{B as a}from"./Box-Dmtu8wWb.js";import{S as F}from"./Stack-BQqDyOBu.js";import{T as i}from"./Typography-C8IUsM00.js";import{G as b}from"./Grid-Dd6PAMTp.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-BW0efeYW.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-CDdqLoBf.js";import"./isMuiElement-DpiUmZPP.js";function r({text:t,variant:v="body",minFontSize:u=0,maxFontSize:T=9999,letterSpacing:w=1,wordSpacing:j=1,fontWeight:z,...B}){const y=o.useRef(null),g=o.useRef(null),[H,V]=o.useState(u),f=v==="h1"||v==="headline",k=f?'"Chillax", sans-serif':'"Inter", sans-serif',C=f?.9:1.3,W=z!==void 0?z:f?400:300,L=.02,O=.2,E=`${L*w}em`,R=`${O*j}em`,S=o.useCallback(()=>{if(!y.current||!g.current)return;const h=y.current.offsetWidth,n=g.current.offsetWidth;if(n===0)return;const I=100*(h*.98/n),D=Math.min(Math.max(I,u),T);V(D)},[u,T]);return o.useEffect(()=>{const h=y.current;if(!h)return;const n=new ResizeObserver(()=>{S()});return n.observe(h),S(),()=>n.disconnect()},[t,w,j,S]),e.jsxs(a,{ref:y,className:"text-fit",sx:{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",...B.sx},...B,children:[e.jsx(a,{component:"span",sx:{display:"block",fontFamily:k,lineHeight:C,fontWeight:W,fontSize:`${H}px`,letterSpacing:E,wordSpacing:R,whiteSpace:"nowrap",textAlign:"center",transition:"font-size 0.1s ease-out"},children:t}),e.jsx(a,{ref:g,component:"span","aria-hidden":"true",sx:{position:"absolute",left:"-9999px",top:0,visibility:"hidden",whiteSpace:"nowrap",fontFamily:k,fontWeight:W,fontSize:"100px",letterSpacing:E,wordSpacing:R,pointerEvents:"none"},children:t})]})}r.__docgenInfo={description:`FitText 컴포넌트

컨테이너 너비에 꽉 차도록 텍스트 크기가 자동으로 조절되는 반응형 타이포그래피 컴포넌트.

시각적 동작:
1. 텍스트가 컨테이너 너비에 맞춰 자동으로 크기가 커지거나 작아짐
2. 브라우저 창 크기를 조절하면 텍스트 크기가 실시간으로 변함
3. variant를 'headline'으로 설정하면 Chillax 폰트로 전환되며 더 타이트한 행간 적용
4. letterSpacing, wordSpacing 값을 높이면 글자/단어 간격이 넓어짐
5. minFontSize, maxFontSize로 텍스트 크기의 최소/최대 범위 제한 가능

Props:
@param {string} text - 표시할 텍스트 [Required]
@param {string} variant - 타이포그래피 변형 ('body' | 'h1' | 'headline') [Optional, 기본값: 'body']
@param {number} minFontSize - 최소 폰트 크기 (px) [Optional, 기본값: 0]
@param {number} maxFontSize - 최대 폰트 크기 (px) [Optional, 기본값: 9999]
@param {number} letterSpacing - 자간 배율 [Optional, 기본값: 1]
@param {number} wordSpacing - 단어 간격 배율 [Optional, 기본값: 1]
@param {number} fontWeight - 폰트 굵기 [Optional]

Example usage:
<FitText text="Hello World" variant="headline" />
<FitText text="Responsive Text" minFontSize={ 16 } maxFontSize={ 120 } />`,methods:[],displayName:"FitText",props:{variant:{defaultValue:{value:"'body'",computed:!1},required:!1},minFontSize:{defaultValue:{value:"0",computed:!1},required:!1},maxFontSize:{defaultValue:{value:"9999",computed:!1},required:!1},letterSpacing:{defaultValue:{value:"1",computed:!1},required:!1},wordSpacing:{defaultValue:{value:"1",computed:!1},required:!1}}};const Z={title:"Custom Component/Typography/FitText",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
## FitText

컨테이너 너비에 맞춰 텍스트 크기를 자동으로 조절하는 반응형 타이포그래피 컴포넌트입니다.

### 핵심 기능
- **자동 크기 조절**: ResizeObserver로 컨테이너 크기 변화 감지
- **Variant 지원**: body (Inter) / headline (Chillax) 폰트 자동 적용
- **Min/Max 제한**: 최소/최대 폰트 크기 설정 가능
- **간격 조절**: letterSpacing, wordSpacing 배율 조정

### 용도
- 히어로 섹션 헤드라인
- 반응형 배너 텍스트
- 카드 타이틀
        `}}},argTypes:{text:{control:"text",description:"표시할 텍스트",table:{type:{summary:"string"}}},variant:{control:"radio",options:["body","headline","h1"],description:"타이포그래피 변형",table:{type:{summary:"string"},defaultValue:{summary:"body"}}},minFontSize:{control:{type:"number",min:0,max:100},description:"최소 폰트 크기 (px)",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},maxFontSize:{control:{type:"number",min:10,max:500},description:"최대 폰트 크기 (px)",table:{type:{summary:"number"},defaultValue:{summary:"9999"}}},letterSpacing:{control:{type:"number",min:0,max:5,step:.1},description:"자간 배율",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},wordSpacing:{control:{type:"number",min:0,max:5,step:.1},description:"단어 간격 배율",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},fontWeight:{control:{type:"number",min:100,max:900,step:100},description:"폰트 굵기",table:{type:{summary:"number"}}}}},s={args:{text:"Hello World",variant:"body",minFontSize:16,maxFontSize:200},render:t=>e.jsx(a,{sx:{width:400,border:"1px dashed grey",p:2},children:e.jsx(r,{...t})})},d={args:{text:"HEADLINE",variant:"headline",minFontSize:24,maxFontSize:300},render:t=>e.jsx(a,{sx:{width:500,border:"1px dashed grey",p:2},children:e.jsx(r,{...t})})},p={render:()=>e.jsx(F,{spacing:3,sx:{width:600},children:[200,300,400,500].map(t=>e.jsxs(a,{children:[e.jsxs(i,{variant:"caption",sx:{fontFamily:"monospace",mb:1,display:"block"},children:["width: ",t,"px"]}),e.jsx(a,{sx:{width:t,border:"1px dashed grey",p:1},children:e.jsx(r,{text:"Responsive Text",variant:"body"})})]},t))})},c={render:()=>e.jsxs(F,{spacing:4,sx:{width:500},children:[e.jsxs(a,{children:[e.jsx(i,{variant:"caption",sx:{fontFamily:"monospace",mb:1,display:"block"},children:"variant: body (Inter)"}),e.jsx(a,{sx:{border:"1px dashed grey",p:2},children:e.jsx(r,{text:"Body Text Style",variant:"body"})})]}),e.jsxs(a,{children:[e.jsx(i,{variant:"caption",sx:{fontFamily:"monospace",mb:1,display:"block"},children:"variant: headline (Chillax)"}),e.jsx(a,{sx:{border:"1px dashed grey",p:2},children:e.jsx(r,{text:"Headline Style",variant:"headline"})})]})]})},l={render:()=>e.jsxs(b,{container:!0,spacing:3,sx:{width:600},children:[e.jsxs(b,{size:{xs:6},children:[e.jsx(i,{variant:"caption",sx:{fontFamily:"monospace",mb:1,display:"block"},children:"maxFontSize: 48px"}),e.jsx(a,{sx:{border:"1px dashed grey",p:2},children:e.jsx(r,{text:"Limited",variant:"headline",maxFontSize:48})})]}),e.jsxs(b,{size:{xs:6},children:[e.jsx(i,{variant:"caption",sx:{fontFamily:"monospace",mb:1,display:"block"},children:"maxFontSize: 120px"}),e.jsx(a,{sx:{border:"1px dashed grey",p:2},children:e.jsx(r,{text:"Limited",variant:"headline",maxFontSize:120})})]})]})},x={render:()=>e.jsx(F,{spacing:3,sx:{width:500},children:[{letterSpacing:1,wordSpacing:1,label:"Default"},{letterSpacing:2,wordSpacing:1,label:"Wide Letters"},{letterSpacing:1,wordSpacing:2,label:"Wide Words"},{letterSpacing:.5,wordSpacing:.5,label:"Tight"}].map(t=>e.jsxs(a,{children:[e.jsxs(i,{variant:"caption",sx:{fontFamily:"monospace",mb:1,display:"block"},children:[t.label," (letter: ",t.letterSpacing,", word: ",t.wordSpacing,")"]}),e.jsx(a,{sx:{border:"1px dashed grey",p:2},children:e.jsx(r,{text:"Spacing Test",variant:"body",letterSpacing:t.letterSpacing,wordSpacing:t.wordSpacing})})]},t.label))})},m={parameters:{layout:"fullscreen"},render:()=>e.jsxs(a,{sx:{width:"100%",height:"100vh",backgroundColor:"#000000",display:"flex",flexDirection:"column",justifyContent:"center",px:{xs:2,md:4}},children:[e.jsx(r,{text:"RETHINK",variant:"headline",sx:{color:"#ffffff"}}),e.jsx(r,{text:"REVERSE",variant:"headline",sx:{color:"#ffffff"}}),e.jsx(r,{text:"REPEAT",variant:"headline",sx:{color:"#ffffff"}})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Hello World',
    variant: 'body',
    minFontSize: 16,
    maxFontSize: 200
  },
  render: args => <Box sx={{
    width: 400,
    border: '1px dashed grey',
    p: 2
  }}>
      <FitText {...args} />
    </Box>
}`,...s.parameters?.docs?.source},description:{story:"기본 사용",...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'HEADLINE',
    variant: 'headline',
    minFontSize: 24,
    maxFontSize: 300
  },
  render: args => <Box sx={{
    width: 500,
    border: '1px dashed grey',
    p: 2
  }}>
      <FitText {...args} />
    </Box>
}`,...d.parameters?.docs?.source},description:{story:"Headline 변형",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} sx={{
    width: 600
  }}>
      {[200, 300, 400, 500].map(width => <Box key={width}>
          <Typography variant="caption" sx={{
        fontFamily: 'monospace',
        mb: 1,
        display: 'block'
      }}>
            width: {width}px
          </Typography>
          <Box sx={{
        width,
        border: '1px dashed grey',
        p: 1
      }}>
            <FitText text="Responsive Text" variant="body" />
          </Box>
        </Box>)}
    </Stack>
}`,...p.parameters?.docs?.source},description:{story:"다양한 컨테이너 너비",...p.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={4} sx={{
    width: 500
  }}>
      <Box>
        <Typography variant="caption" sx={{
        fontFamily: 'monospace',
        mb: 1,
        display: 'block'
      }}>
          variant: body (Inter)
        </Typography>
        <Box sx={{
        border: '1px dashed grey',
        p: 2
      }}>
          <FitText text="Body Text Style" variant="body" />
        </Box>
      </Box>
      <Box>
        <Typography variant="caption" sx={{
        fontFamily: 'monospace',
        mb: 1,
        display: 'block'
      }}>
          variant: headline (Chillax)
        </Typography>
        <Box sx={{
        border: '1px dashed grey',
        p: 2
      }}>
          <FitText text="Headline Style" variant="headline" />
        </Box>
      </Box>
    </Stack>
}`,...c.parameters?.docs?.source},description:{story:"Variant 비교",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={3} sx={{
    width: 600
  }}>
      <Grid size={{
      xs: 6
    }}>
        <Typography variant="caption" sx={{
        fontFamily: 'monospace',
        mb: 1,
        display: 'block'
      }}>
          maxFontSize: 48px
        </Typography>
        <Box sx={{
        border: '1px dashed grey',
        p: 2
      }}>
          <FitText text="Limited" variant="headline" maxFontSize={48} />
        </Box>
      </Grid>
      <Grid size={{
      xs: 6
    }}>
        <Typography variant="caption" sx={{
        fontFamily: 'monospace',
        mb: 1,
        display: 'block'
      }}>
          maxFontSize: 120px
        </Typography>
        <Box sx={{
        border: '1px dashed grey',
        p: 2
      }}>
          <FitText text="Limited" variant="headline" maxFontSize={120} />
        </Box>
      </Grid>
    </Grid>
}`,...l.parameters?.docs?.source},description:{story:"Min/Max 폰트 크기 제한",...l.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} sx={{
    width: 500
  }}>
      {[{
      letterSpacing: 1,
      wordSpacing: 1,
      label: 'Default'
    }, {
      letterSpacing: 2,
      wordSpacing: 1,
      label: 'Wide Letters'
    }, {
      letterSpacing: 1,
      wordSpacing: 2,
      label: 'Wide Words'
    }, {
      letterSpacing: 0.5,
      wordSpacing: 0.5,
      label: 'Tight'
    }].map(config => <Box key={config.label}>
          <Typography variant="caption" sx={{
        fontFamily: 'monospace',
        mb: 1,
        display: 'block'
      }}>
            {config.label} (letter: {config.letterSpacing}, word: {config.wordSpacing})
          </Typography>
          <Box sx={{
        border: '1px dashed grey',
        p: 2
      }}>
            <FitText text="Spacing Test" variant="body" letterSpacing={config.letterSpacing} wordSpacing={config.wordSpacing} />
          </Box>
        </Box>)}
    </Stack>
}`,...x.parameters?.docs?.source},description:{story:"간격 조절",...x.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <Box sx={{
    width: '100%',
    height: '100vh',
    backgroundColor: '#000000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    px: {
      xs: 2,
      md: 4
    }
  }}>
      <FitText text="RETHINK" variant="headline" sx={{
      color: '#ffffff'
    }} />
      <FitText text="REVERSE" variant="headline" sx={{
      color: '#ffffff'
    }} />
      <FitText text="REPEAT" variant="headline" sx={{
      color: '#ffffff'
    }} />
    </Box>
}`,...m.parameters?.docs?.source},description:{story:`히어로 섹션 활용 예시

극도로 미니멀한 풀스크린 타이포그래피.
오직 텍스트만으로 강렬한 메시지를 전달.`,...m.parameters?.docs?.description}}};const ee=["Default","Headline","ResponsiveWidths","VariantComparison","FontSizeLimits","SpacingOptions","HeroSectionUsage"];export{s as Default,l as FontSizeLimits,d as Headline,m as HeroSectionUsage,p as ResponsiveWidths,x as SpacingOptions,c as VariantComparison,ee as __namedExportsOrder,Z as default};
