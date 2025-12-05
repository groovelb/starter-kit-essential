import{R as p,j as e}from"./iframe-q-XN_VZM.js";import{u as W}from"./index-Ba9eRRNW.js";import{u as V}from"./useTheme-CDdqLoBf.js";import{S as E}from"./Stack-BQqDyOBu.js";import{D as M}from"./Divider-DePyv9fJ.js";import{G as i}from"./Grid-Dd6PAMTp.js";import{B as m}from"./Box-Dmtu8wWb.js";import{T as w}from"./Typography-C8IUsM00.js";import"./preload-helper-PPVm8Dsz.js";import"./useThemeProps-CFXzbazh.js";import"./memoTheme-BW0efeYW.js";import"./styled-D6BANXgS.js";import"./dividerClasses-BAQMkccN.js";import"./isMuiElement-DpiUmZPP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const n=p.forwardRef(({container:s,children:t,gap:d=0,borderColor:h="text.primary",equalHeight:v=!1,rowHeights:l=null,...f},R)=>{const H=V(),B=W(H.breakpoints.down("md"));if(!s)return e.jsx(E,{ref:R,spacing:d/8,divider:e.jsx(M,{sx:{borderColor:h,borderWidth:1,transition:"border-color 1s ease"}}),...f,children:t});const L=p.Children.toArray(t),k=L.map(o=>{if(!p.isValidElement(o))return 12;const a=o.props.size||{};let c;return B?c=a.xs||a.sm||12:c=a.md||a.lg||a.xl||a.xs||12,Math.max(1,Math.min(12,typeof c=="number"?c:12))}),C=[];let I=0,x=0;k.forEach((o,a)=>{o>12-x&&(I+=1,x=0),C[a]={row:I,colStart:x,span:o},x+=o,x>=12&&(I+=1,x=0)});const q=C.length>0?Math.max(...C.map(o=>o.row))+1:1,T=o=>{if(l&&Array.isArray(l)){const a=l.reduce((D,z)=>D+z,0);return`${(l[o]||1)/a*100}%`}return v?`calc(100% / ${q})`:"auto"},S=v||l&&Array.isArray(l);return e.jsx(i,{container:!0,spacing:d/8,ref:R,...f,sx:{width:"100%",height:S?"100%":"auto"},children:L.map((o,a)=>{if(!p.isValidElement(o))return o;const c=C[a]||{row:0,colStart:0},D=c.row===0,z=c.colStart===0;return p.cloneElement(o,{...o.props,sx:{position:"relative",...S&&{height:T(c.row)},...!z&&{"&::before":{content:'""',position:"absolute",left:`-${d/2}px`,top:0,bottom:0,width:"1px",bgcolor:h,transition:"background-color 1s ease",zIndex:10}},...!D&&{"&::after":{content:'""',position:"absolute",top:`-${d/2}px`,left:0,right:0,height:"1px",bgcolor:h,transition:"background-color 1s ease",zIndex:10}},...o.props.sx}})})})});n.displayName="LineGrid";n.__docgenInfo={description:`LineGrid Component
MUI Grid with lines drawn between items (in spacing gaps)

Usage 1 - Grid Container with items:
<LineGrid container gap={0}>
  <Grid item xs={7.5}>Content 1</Grid>
  <Grid item xs={4.5}>Content 2</Grid>
</LineGrid>

Usage 2 - Stack Layout (vertical):
<LineGrid>
  <Section1 />
  <Section2 />
</LineGrid>

Usage 3 - Equal Height Grid:
<LineGrid container gap={0} equalHeight>
  <Grid size={{ xs: 12 }}>Row 1</Grid>
  <Grid size={{ xs: 4 }}>Row 2 Col 1</Grid>
  <Grid size={{ xs: 4 }}>Row 2 Col 2</Grid>
  <Grid size={{ xs: 4 }}>Row 2 Col 3</Grid>
</LineGrid>

Usage 4 - Custom Row Heights (ratio-based):
<LineGrid container gap={0} rowHeights={[1, 2]}>
  <Grid size={{ xs: 12 }}>Row 1 (1/3 height)</Grid>
  <Grid size={{ xs: 4 }}>Row 2 Col 1 (2/3 height)</Grid>
  <Grid size={{ xs: 4 }}>Row 2 Col 2</Grid>
  <Grid size={{ xs: 4 }}>Row 2 Col 3</Grid>
</LineGrid>`,methods:[],displayName:"LineGrid",props:{gap:{defaultValue:{value:"0",computed:!1},required:!1},borderColor:{defaultValue:{value:"'text.primary'",computed:!1},required:!1},equalHeight:{defaultValue:{value:"false",computed:!1},required:!1},rowHeights:{defaultValue:{value:"null",computed:!1},required:!1}}};const r=({children:s,variant:t="default",height:d="auto"})=>{const h={default:{backgroundColor:"grey.100",color:"text.secondary"},primary:{backgroundColor:"primary.main",color:"primary.contrastText"},secondary:{backgroundColor:"secondary.main",color:"secondary.contrastText"}},v=h[t]||h.default;return e.jsx(m,{sx:{p:2,height:d,display:"flex",alignItems:"center",justifyContent:"center",...v},children:e.jsx(w,{variant:"body2",fontWeight:600,sx:{fontFamily:"monospace"},children:s})})},re={title:"Custom Component/Layout/LineGrid",component:n,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
## LineGrid

MUI Grid를 확장하여 아이템 사이에 선(border)을 자동으로 그려주는 커스텀 레이아웃 컴포넌트입니다.

### 주요 기능
- **Grid Container 모드**: \`container\` prop 사용 시 Grid 아이템 사이에 수직/수평선 자동 생성
- **Stack 모드**: \`container\` prop 없이 사용 시 Stack + Divider로 동작
- **Equal Height**: \`equalHeight\` prop으로 모든 행 높이 균등 분배
- **Row Heights**: \`rowHeights\` prop으로 행별 비율 지정 가능

### 사용 패턴
| 패턴 | 설명 | 예시 |
|------|------|------|
| Grid Container | 선이 있는 그리드 | \`<LineGrid container gap={16}>\` |
| Stack | 수직 구분선 | \`<LineGrid>\` |
| Equal Height | 균등 높이 | \`<LineGrid container equalHeight>\` |
| Row Heights | 비율 지정 | \`<LineGrid container rowHeights={[1, 2]}>\` |
        `}}},argTypes:{container:{control:"boolean",description:"Grid container 모드 활성화. false면 Stack 모드로 동작",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},gap:{control:{type:"range",min:0,max:64,step:8},description:"아이템 간 간격 (px). 선은 이 간격의 중앙에 그려집니다",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},borderColor:{control:"text",description:"선 색상 (MUI 색상 토큰)",table:{type:{summary:"string"},defaultValue:{summary:"text.primary"}}},equalHeight:{control:"boolean",description:"모든 행 높이를 균등하게 분배",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},rowHeights:{control:"object",description:"행별 높이 비율 배열 (예: [1, 2, 1])",table:{type:{summary:"number[]"},defaultValue:{summary:"null"}}}}},g={args:{container:!0,gap:16,borderColor:"text.primary"},render:({container:s,gap:t,borderColor:d})=>e.jsx(m,{sx:{width:"100%",maxWidth:600},children:e.jsxs(n,{container:s,gap:t,borderColor:d,children:[e.jsx(i,{size:{xs:6},children:e.jsx(r,{variant:"primary",height:80,children:"xs=6"})}),e.jsx(i,{size:{xs:6},children:e.jsx(r,{variant:"secondary",height:80,children:"xs=6"})}),e.jsx(i,{size:{xs:4},children:e.jsx(r,{height:80,children:"xs=4"})}),e.jsx(i,{size:{xs:4},children:e.jsx(r,{variant:"primary",height:80,children:"xs=4"})}),e.jsx(i,{size:{xs:4},children:e.jsx(r,{variant:"secondary",height:80,children:"xs=4"})})]})})},u={args:{gap:16,borderColor:"text.primary"},render:({gap:s,borderColor:t})=>e.jsx(m,{sx:{width:"100%",maxWidth:400},children:e.jsxs(n,{gap:s,borderColor:t,children:[e.jsx(r,{variant:"primary",height:60,children:"Section 1"}),e.jsx(r,{variant:"secondary",height:60,children:"Section 2"}),e.jsx(r,{height:60,children:"Section 3"})]})})},y={args:{gap:16,borderColor:"divider"},render:({gap:s,borderColor:t})=>e.jsx(m,{sx:{width:"100%",maxWidth:600,height:300},children:e.jsxs(n,{container:!0,gap:s,borderColor:t,equalHeight:!0,children:[e.jsx(i,{size:{xs:12},children:e.jsx(r,{variant:"primary",height:"100%",children:"Row 1 (1/3)"})}),e.jsx(i,{size:{xs:6},children:e.jsx(r,{variant:"secondary",height:"100%",children:"Row 2 - Col 1"})}),e.jsx(i,{size:{xs:6},children:e.jsx(r,{height:"100%",children:"Row 2 - Col 2"})}),e.jsx(i,{size:{xs:4},children:e.jsx(r,{variant:"primary",height:"100%",children:"Row 3"})}),e.jsx(i,{size:{xs:4},children:e.jsx(r,{variant:"secondary",height:"100%",children:"Row 3"})}),e.jsx(i,{size:{xs:4},children:e.jsx(r,{height:"100%",children:"Row 3"})})]})})},G={args:{gap:16,borderColor:"text.secondary",rowHeights:[1,2]},render:({gap:s,borderColor:t,rowHeights:d})=>e.jsx(m,{sx:{width:"100%",maxWidth:600,height:300},children:e.jsxs(n,{container:!0,gap:s,borderColor:t,rowHeights:d,children:[e.jsx(i,{size:{xs:12},children:e.jsx(r,{variant:"primary",height:"100%",children:"Row 1 (1/3 height)"})}),e.jsx(i,{size:{xs:6},children:e.jsx(r,{variant:"secondary",height:"100%",children:"Row 2 (2/3 height)"})}),e.jsx(i,{size:{xs:6},children:e.jsx(r,{height:"100%",children:"Row 2 (2/3 height)"})})]})})},b={args:{gap:16,borderColor:"text.primary"},render:({gap:s,borderColor:t})=>e.jsxs(m,{sx:{width:"100%",maxWidth:800},children:[e.jsx(w,{variant:"caption",color:"text.secondary",sx:{mb:2,display:"block"},children:"브라우저 크기를 조절해서 반응형 동작을 확인하세요"}),e.jsxs(n,{container:!0,gap:s,borderColor:t,children:[e.jsx(i,{size:{xs:12,md:8},children:e.jsx(r,{variant:"primary",height:100,children:"xs=12 md=8"})}),e.jsx(i,{size:{xs:12,md:4},children:e.jsx(r,{variant:"secondary",height:100,children:"xs=12 md=4"})}),e.jsx(i,{size:{xs:6,md:4},children:e.jsx(r,{height:80,children:"xs=6 md=4"})}),e.jsx(i,{size:{xs:6,md:4},children:e.jsx(r,{variant:"primary",height:80,children:"xs=6 md=4"})}),e.jsx(i,{size:{xs:12,md:4},children:e.jsx(r,{variant:"secondary",height:80,children:"xs=12 md=4"})})]})]})},j={render:()=>e.jsxs(m,{sx:{display:"flex",flexDirection:"column",gap:4,width:"100%",maxWidth:400},children:[e.jsxs(m,{children:[e.jsx(w,{variant:"subtitle2",sx:{mb:1},children:'borderColor="text.primary"'}),e.jsxs(n,{container:!0,gap:16,borderColor:"text.primary",children:[e.jsx(i,{size:{xs:6},children:e.jsx(r,{height:50,children:"1"})}),e.jsx(i,{size:{xs:6},children:e.jsx(r,{height:50,children:"2"})})]})]}),e.jsxs(m,{children:[e.jsx(w,{variant:"subtitle2",sx:{mb:1},children:'borderColor="primary.main"'}),e.jsxs(n,{container:!0,gap:16,borderColor:"primary.main",children:[e.jsx(i,{size:{xs:6},children:e.jsx(r,{variant:"primary",height:50,children:"1"})}),e.jsx(i,{size:{xs:6},children:e.jsx(r,{variant:"primary",height:50,children:"2"})})]})]}),e.jsxs(m,{children:[e.jsx(w,{variant:"subtitle2",sx:{mb:1},children:'borderColor="divider"'}),e.jsxs(n,{container:!0,gap:16,borderColor:"divider",children:[e.jsx(i,{size:{xs:6},children:e.jsx(r,{variant:"secondary",height:50,children:"1"})}),e.jsx(i,{size:{xs:6},children:e.jsx(r,{variant:"secondary",height:50,children:"2"})})]})]})]})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    container: true,
    gap: 16,
    borderColor: 'text.primary'
  },
  render: ({
    container,
    gap,
    borderColor
  }) => <Box sx={{
    width: '100%',
    maxWidth: 600
  }}>
      <LineGrid container={container} gap={gap} borderColor={borderColor}>
        <Grid size={{
        xs: 6
      }}>
          <DemoItem variant="primary" height={80}>xs=6</DemoItem>
        </Grid>
        <Grid size={{
        xs: 6
      }}>
          <DemoItem variant="secondary" height={80}>xs=6</DemoItem>
        </Grid>
        <Grid size={{
        xs: 4
      }}>
          <DemoItem height={80}>xs=4</DemoItem>
        </Grid>
        <Grid size={{
        xs: 4
      }}>
          <DemoItem variant="primary" height={80}>xs=4</DemoItem>
        </Grid>
        <Grid size={{
        xs: 4
      }}>
          <DemoItem variant="secondary" height={80}>xs=4</DemoItem>
        </Grid>
      </LineGrid>
    </Box>
}`,...g.parameters?.docs?.source},description:{story:"기본 Grid Container - 선이 있는 그리드 레이아웃",...g.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    gap: 16,
    borderColor: 'text.primary'
  },
  render: ({
    gap,
    borderColor
  }) => <Box sx={{
    width: '100%',
    maxWidth: 400
  }}>
      <LineGrid gap={gap} borderColor={borderColor}>
        <DemoItem variant="primary" height={60}>Section 1</DemoItem>
        <DemoItem variant="secondary" height={60}>Section 2</DemoItem>
        <DemoItem height={60}>Section 3</DemoItem>
      </LineGrid>
    </Box>
}`,...u.parameters?.docs?.source},description:{story:"Stack 모드 - 수직 Divider로 섹션 구분",...u.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    gap: 16,
    borderColor: 'divider'
  },
  render: ({
    gap,
    borderColor
  }) => <Box sx={{
    width: '100%',
    maxWidth: 600,
    height: 300
  }}>
      <LineGrid container gap={gap} borderColor={borderColor} equalHeight>
        <Grid size={{
        xs: 12
      }}>
          <DemoItem variant="primary" height="100%">Row 1 (1/3)</DemoItem>
        </Grid>
        <Grid size={{
        xs: 6
      }}>
          <DemoItem variant="secondary" height="100%">Row 2 - Col 1</DemoItem>
        </Grid>
        <Grid size={{
        xs: 6
      }}>
          <DemoItem height="100%">Row 2 - Col 2</DemoItem>
        </Grid>
        <Grid size={{
        xs: 4
      }}>
          <DemoItem variant="primary" height="100%">Row 3</DemoItem>
        </Grid>
        <Grid size={{
        xs: 4
      }}>
          <DemoItem variant="secondary" height="100%">Row 3</DemoItem>
        </Grid>
        <Grid size={{
        xs: 4
      }}>
          <DemoItem height="100%">Row 3</DemoItem>
        </Grid>
      </LineGrid>
    </Box>
}`,...y.parameters?.docs?.source},description:{story:"Equal Height - 모든 행 균등 높이",...y.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    gap: 16,
    borderColor: 'text.secondary',
    rowHeights: [1, 2]
  },
  render: ({
    gap,
    borderColor,
    rowHeights
  }) => <Box sx={{
    width: '100%',
    maxWidth: 600,
    height: 300
  }}>
      <LineGrid container gap={gap} borderColor={borderColor} rowHeights={rowHeights}>
        <Grid size={{
        xs: 12
      }}>
          <DemoItem variant="primary" height="100%">Row 1 (1/3 height)</DemoItem>
        </Grid>
        <Grid size={{
        xs: 6
      }}>
          <DemoItem variant="secondary" height="100%">Row 2 (2/3 height)</DemoItem>
        </Grid>
        <Grid size={{
        xs: 6
      }}>
          <DemoItem height="100%">Row 2 (2/3 height)</DemoItem>
        </Grid>
      </LineGrid>
    </Box>
}`,...G.parameters?.docs?.source},description:{story:"Row Heights - 행별 비율 지정",...G.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    gap: 16,
    borderColor: 'text.primary'
  },
  render: ({
    gap,
    borderColor
  }) => <Box sx={{
    width: '100%',
    maxWidth: 800
  }}>
      <Typography variant="caption" color="text.secondary" sx={{
      mb: 2,
      display: 'block'
    }}>
        브라우저 크기를 조절해서 반응형 동작을 확인하세요
      </Typography>
      <LineGrid container gap={gap} borderColor={borderColor}>
        <Grid size={{
        xs: 12,
        md: 8
      }}>
          <DemoItem variant="primary" height={100}>xs=12 md=8</DemoItem>
        </Grid>
        <Grid size={{
        xs: 12,
        md: 4
      }}>
          <DemoItem variant="secondary" height={100}>xs=12 md=4</DemoItem>
        </Grid>
        <Grid size={{
        xs: 6,
        md: 4
      }}>
          <DemoItem height={80}>xs=6 md=4</DemoItem>
        </Grid>
        <Grid size={{
        xs: 6,
        md: 4
      }}>
          <DemoItem variant="primary" height={80}>xs=6 md=4</DemoItem>
        </Grid>
        <Grid size={{
        xs: 12,
        md: 4
      }}>
          <DemoItem variant="secondary" height={80}>xs=12 md=4</DemoItem>
        </Grid>
      </LineGrid>
    </Box>
}`,...b.parameters?.docs?.source},description:{story:"반응형 그리드 - 브레이크포인트별 레이아웃 변경",...b.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    width: '100%',
    maxWidth: 400
  }}>
      <Box>
        <Typography variant="subtitle2" sx={{
        mb: 1
      }}>borderColor="text.primary"</Typography>
        <LineGrid container gap={16} borderColor="text.primary">
          <Grid size={{
          xs: 6
        }}><DemoItem height={50}>1</DemoItem></Grid>
          <Grid size={{
          xs: 6
        }}><DemoItem height={50}>2</DemoItem></Grid>
        </LineGrid>
      </Box>

      <Box>
        <Typography variant="subtitle2" sx={{
        mb: 1
      }}>borderColor="primary.main"</Typography>
        <LineGrid container gap={16} borderColor="primary.main">
          <Grid size={{
          xs: 6
        }}><DemoItem variant="primary" height={50}>1</DemoItem></Grid>
          <Grid size={{
          xs: 6
        }}><DemoItem variant="primary" height={50}>2</DemoItem></Grid>
        </LineGrid>
      </Box>

      <Box>
        <Typography variant="subtitle2" sx={{
        mb: 1
      }}>borderColor="divider"</Typography>
        <LineGrid container gap={16} borderColor="divider">
          <Grid size={{
          xs: 6
        }}><DemoItem variant="secondary" height={50}>1</DemoItem></Grid>
          <Grid size={{
          xs: 6
        }}><DemoItem variant="secondary" height={50}>2</DemoItem></Grid>
        </LineGrid>
      </Box>
    </Box>
}`,...j.parameters?.docs?.source},description:{story:"Border Color 변형 - 다양한 선 색상",...j.parameters?.docs?.description}}};const ie=["Default","StackMode","EqualHeight","CustomRowHeights","Responsive","BorderColorVariants"];export{j as BorderColorVariants,G as CustomRowHeights,g as Default,y as EqualHeight,b as Responsive,u as StackMode,ie as __namedExportsOrder,re as default};
