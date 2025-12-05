import{j as e}from"./iframe-q-XN_VZM.js";import{G as s}from"./Grid-Dd6PAMTp.js";import{B as i}from"./Box-Dmtu8wWb.js";import{s as x}from"./memoTheme-BW0efeYW.js";import{P as l}from"./Paper-ri-B2SDS.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CDdqLoBf.js";import"./styled-D6BANXgS.js";import"./isMuiElement-DpiUmZPP.js";import"./useThemeProps-CFXzbazh.js";const n=x(l)(({theme:r})=>({backgroundColor:r.palette.grey[100],...r.typography.body2,padding:r.spacing(2),textAlign:"center",color:r.palette.text.secondary,border:`1px solid ${r.palette.grey[300]}`,...r.applyStyles("dark",{backgroundColor:"#1A2027",borderColor:r.palette.grey[700]})})),m=x(l)(({theme:r})=>({padding:r.spacing(2),textAlign:"center",backgroundColor:r.palette.primary.main,color:"#fff"})),C={title:"MUI Component/Layout/Grid",component:s,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
## Grid

MUI Grid v7 컴포넌트입니다.

\`size\` prop을 사용하여 반응형 레이아웃을 구성합니다. **12컬럼 시스템**을 기반으로 합니다.

### 12컬럼 시스템
- 한 row의 컬럼 합은 항상 **12**입니다.
- 합이 12를 초과하면 자동으로 다음 줄로 넘어갑니다.
- 예: \`size={6}\` 2개 = 12 (한 줄), \`size={6}\` 3개 = 18 (두 줄로 분리)

| 배치 | size 값 | 합계 |
|------|---------|------|
| 2등분 | 6 + 6 | 12 |
| 3등분 | 4 + 4 + 4 | 12 |
| 4등분 | 3 + 3 + 3 + 3 | 12 |
| 사이드바 | 3 + 9 | 12 |

### 주요 변경사항 (v7)
- \`xs\`, \`sm\`, \`md\` 등의 props 대신 \`size\` prop 사용
- \`size={{ xs: 12, md: 6 }}\` 형태로 반응형 지정

### 사용 패턴
| 패턴 | 설명 | 예시 |
|------|------|------|
| 고정 크기 | 숫자로 컬럼 지정 | \`size={6}\` |
| 반응형 | 브레이크포인트별 지정 | \`size={{ xs: 12, md: 6 }}\` |
| 자동 확장 | 남은 공간 채움 | \`size="grow"\` |
        `}}},argTypes:{spacing:{control:"select",options:[0,1,2,3,4,5,6,7,8],description:"Grid 아이템 간의 간격을 지정합니다. (8px 단위)",table:{type:{summary:"number"},defaultValue:{summary:"0"}}}}},d={args:{spacing:2},render:({spacing:r})=>e.jsx(i,{sx:{flexGrow:1},children:e.jsxs(s,{container:!0,spacing:r,children:[e.jsx(s,{size:8,children:e.jsx(n,{children:"size=8"})}),e.jsx(s,{size:4,children:e.jsx(n,{children:"size=4"})}),e.jsx(s,{size:4,children:e.jsx(n,{children:"size=4"})}),e.jsx(s,{size:8,children:e.jsx(n,{children:"size=8"})})]})})},o={args:{spacing:2},render:({spacing:r})=>e.jsx(i,{sx:{flexGrow:1},children:e.jsxs(s,{container:!0,spacing:r,children:[e.jsx(s,{size:4,children:e.jsx(n,{children:"size=4"})}),e.jsx(s,{size:4,children:e.jsx(n,{children:"size=4"})}),e.jsx(s,{size:4,children:e.jsx(n,{children:"size=4"})})]})})},c={args:{spacing:2},render:({spacing:r})=>e.jsx(i,{sx:{flexGrow:1},children:e.jsxs(s,{container:!0,spacing:r,children:[e.jsx(s,{size:{xs:12,sm:6,md:4},children:e.jsx(m,{children:"xs=12 sm=6 md=4"})}),e.jsx(s,{size:{xs:12,sm:6,md:4},children:e.jsx(m,{children:"xs=12 sm=6 md=4"})}),e.jsx(s,{size:{xs:12,sm:6,md:4},children:e.jsx(m,{children:"xs=12 sm=6 md=4"})})]})})},a={args:{spacing:2},render:({spacing:r})=>e.jsx(i,{sx:{flexGrow:1},children:e.jsxs(s,{container:!0,spacing:r,children:[e.jsx(s,{size:"grow",children:e.jsx(n,{children:"grow"})}),e.jsx(s,{size:6,children:e.jsx(n,{children:"size=6"})}),e.jsx(s,{size:"grow",children:e.jsx(n,{children:"grow"})})]})})},t={args:{spacing:2},render:({spacing:r})=>e.jsx(i,{sx:{flexGrow:1},children:e.jsxs(s,{container:!0,spacing:r,children:[e.jsx(s,{size:12,children:e.jsx(n,{children:"size=12 (Parent)"})}),e.jsxs(s,{container:!0,size:12,spacing:r,children:[e.jsx(s,{size:6,children:e.jsx(m,{children:"Nested size=6"})}),e.jsx(s,{size:6,children:e.jsx(m,{children:"Nested size=6"})})]})]})})},p={render:()=>e.jsxs(i,{sx:{flexGrow:1},children:[e.jsxs(s,{container:!0,spacing:1,sx:{mb:2},children:[e.jsx(s,{size:4,children:e.jsx(n,{children:"spacing=1"})}),e.jsx(s,{size:4,children:e.jsx(n,{children:"spacing=1"})}),e.jsx(s,{size:4,children:e.jsx(n,{children:"spacing=1"})})]}),e.jsxs(s,{container:!0,spacing:2,sx:{mb:2},children:[e.jsx(s,{size:4,children:e.jsx(n,{children:"spacing=2"})}),e.jsx(s,{size:4,children:e.jsx(n,{children:"spacing=2"})}),e.jsx(s,{size:4,children:e.jsx(n,{children:"spacing=2"})})]}),e.jsxs(s,{container:!0,spacing:4,children:[e.jsx(s,{size:4,children:e.jsx(n,{children:"spacing=4"})}),e.jsx(s,{size:4,children:e.jsx(n,{children:"spacing=4"})}),e.jsx(s,{size:4,children:e.jsx(n,{children:"spacing=4"})})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: 2
  },
  render: ({
    spacing
  }) => <Box sx={{
    flexGrow: 1
  }}>
      <Grid container spacing={spacing}>
        <Grid size={8}>
          <Item>size=8</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={8}>
          <Item>size=8</Item>
        </Grid>
      </Grid>
    </Box>
}`,...d.parameters?.docs?.source},description:{story:"기본 그리드 - spacing 조절 가능",...d.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: 2
  },
  render: ({
    spacing
  }) => <Box sx={{
    flexGrow: 1
  }}>
      <Grid container spacing={spacing}>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
      </Grid>
    </Box>
}`,...o.parameters?.docs?.source},description:{story:"균등 컬럼 - 3등분",...o.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: 2
  },
  render: ({
    spacing
  }) => <Box sx={{
    flexGrow: 1
  }}>
      <Grid container spacing={spacing}>
        <Grid size={{
        xs: 12,
        sm: 6,
        md: 4
      }}>
          <ColoredItem>xs=12 sm=6 md=4</ColoredItem>
        </Grid>
        <Grid size={{
        xs: 12,
        sm: 6,
        md: 4
      }}>
          <ColoredItem>xs=12 sm=6 md=4</ColoredItem>
        </Grid>
        <Grid size={{
        xs: 12,
        sm: 6,
        md: 4
      }}>
          <ColoredItem>xs=12 sm=6 md=4</ColoredItem>
        </Grid>
      </Grid>
    </Box>
}`,...c.parameters?.docs?.source},description:{story:"반응형 그리드 - 브레이크포인트별 다른 크기",...c.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: 2
  },
  render: ({
    spacing
  }) => <Box sx={{
    flexGrow: 1
  }}>
      <Grid container spacing={spacing}>
        <Grid size="grow">
          <Item>grow</Item>
        </Grid>
        <Grid size={6}>
          <Item>size=6</Item>
        </Grid>
        <Grid size="grow">
          <Item>grow</Item>
        </Grid>
      </Grid>
    </Box>
}`,...a.parameters?.docs?.source},description:{story:"자동 레이아웃 - grow 사용",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: 2
  },
  render: ({
    spacing
  }) => <Box sx={{
    flexGrow: 1
  }}>
      <Grid container spacing={spacing}>
        <Grid size={12}>
          <Item>size=12 (Parent)</Item>
        </Grid>
        <Grid container size={12} spacing={spacing}>
          <Grid size={6}>
            <ColoredItem>Nested size=6</ColoredItem>
          </Grid>
          <Grid size={6}>
            <ColoredItem>Nested size=6</ColoredItem>
          </Grid>
        </Grid>
      </Grid>
    </Box>
}`,...t.parameters?.docs?.source},description:{story:"중첩 그리드",...t.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    flexGrow: 1
  }}>
      <Grid container spacing={1} sx={{
      mb: 2
    }}>
        <Grid size={4}><Item>spacing=1</Item></Grid>
        <Grid size={4}><Item>spacing=1</Item></Grid>
        <Grid size={4}><Item>spacing=1</Item></Grid>
      </Grid>
      <Grid container spacing={2} sx={{
      mb: 2
    }}>
        <Grid size={4}><Item>spacing=2</Item></Grid>
        <Grid size={4}><Item>spacing=2</Item></Grid>
        <Grid size={4}><Item>spacing=2</Item></Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid size={4}><Item>spacing=4</Item></Grid>
        <Grid size={4}><Item>spacing=4</Item></Grid>
        <Grid size={4}><Item>spacing=4</Item></Grid>
      </Grid>
    </Box>
}`,...p.parameters?.docs?.source},description:{story:"Spacing 비교 - 다양한 간격 한눈에 보기",...p.parameters?.docs?.description}}};const B=["Default","EqualColumns","Responsive","AutoLayout","NestedGrid","SpacingComparison"];export{a as AutoLayout,d as Default,o as EqualColumns,t as NestedGrid,c as Responsive,p as SpacingComparison,B as __namedExportsOrder,C as default};
