import{j as e}from"./iframe-q-XN_VZM.js";import{C as t}from"./CardContainer-B3rD2Xhu.js";import{T as r}from"./Typography-C8IUsM00.js";import{S as n}from"./Stack-BQqDyOBu.js";import{C as x}from"./Chip-CBvZjQD4.js";import{B as y}from"./Box-Dmtu8wWb.js";import{B as v}from"./Button-Coknce8O.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-BW0efeYW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./createSvgIcon-CvYdi5pS.js";import"./useSlot-Xw8rJOQc.js";import"./useTimeout-C6lNLwyh.js";import"./isHostComponent-DVu5iVWx.js";import"./ButtonBase-JbB1eRtB.js";import"./CircularProgress-K6SSDdjw.js";const D={title:"Custom Component/Card/CardContainer",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
## CardContainer

자주 사용되는 카드 스타일을 미리 정의한 래퍼 컴포넌트.
CustomCard, ImageCard 등 다양한 카드 컴포넌트의 기반 컨테이너입니다.

### Variant 타입
- **outlined**: 테두리가 있는 기본 스타일 (기본값)
- **elevation**: 그림자가 있는 스타일
- **ghost**: 배경/테두리 없는 투명 스타일
- **filled**: 배경색이 채워진 스타일
        `}}},argTypes:{variant:{control:"select",options:["outlined","elevation","ghost","filled"],description:"카드 스타일 변형"},padding:{control:"select",options:["none","sm","md","lg"],description:"내부 패딩"},radius:{control:"select",options:["none","sm","md","lg"],description:"모서리 둥글기"},isInteractive:{control:"boolean",description:"호버 효과 활성화"},isSelected:{control:"boolean",description:"선택 상태 표시"}}},i={args:{variant:"outlined",padding:"md",radius:"md",isInteractive:!1,isSelected:!1},render:a=>e.jsxs(t,{...a,sx:{width:320},children:[e.jsx(r,{variant:"h6",sx:{fontWeight:600,mb:1},children:"카드 제목"}),e.jsx(r,{variant:"body2",color:"text.secondary",children:"CardContainer는 다양한 variant를 지원하는 기본 카드 래퍼입니다."})]})},s={render:()=>e.jsx(n,{direction:"row",spacing:2,flexWrap:"wrap",useFlexGap:!0,children:["outlined","elevation","ghost","filled"].map(a=>e.jsxs(t,{variant:a,padding:"md",sx:{width:200},children:[e.jsx(r,{variant:"subtitle2",sx:{fontWeight:600,mb:.5},children:a}),e.jsxs(r,{variant:"body2",color:"text.secondary",children:['variant="',a,'"']})]},a))})},d={render:()=>e.jsx(n,{direction:"row",spacing:2,alignItems:"flex-start",children:["none","sm","md","lg"].map(a=>e.jsxs(t,{variant:"outlined",padding:a,sx:{width:150},children:[e.jsxs(r,{variant:"body2",sx:{fontWeight:600},children:["padding: ",a]}),e.jsx(x,{label:"Tag",size:"small",sx:{mt:1}})]},a))})},c={render:()=>e.jsx(n,{direction:"row",spacing:2,children:["none","sm","md","lg"].map(a=>e.jsx(t,{variant:"elevation",padding:"md",radius:a,sx:{width:150},children:e.jsxs(r,{variant:"body2",sx:{fontWeight:600},children:["radius: ",a]})},a))})},p={render:()=>e.jsx(n,{direction:"row",spacing:2,children:["outlined","elevation","ghost","filled"].map(a=>e.jsxs(t,{variant:a,padding:"md",isInteractive:!0,onClick:()=>console.log(`${a} clicked!`),sx:{width:180},children:[e.jsx(r,{variant:"subtitle2",sx:{fontWeight:600,mb:.5},children:"Interactive"}),e.jsxs(r,{variant:"body2",color:"text.secondary",children:[a," + hover"]})]},a))})},l={render:()=>e.jsxs(n,{direction:"row",spacing:2,children:[e.jsxs(t,{variant:"outlined",padding:"md",sx:{width:180},children:[e.jsx(r,{variant:"subtitle2",sx:{fontWeight:600},children:"Normal"}),e.jsx(r,{variant:"body2",color:"text.secondary",children:"isSelected=false"})]}),e.jsxs(t,{variant:"outlined",padding:"md",isSelected:!0,sx:{width:180},children:[e.jsx(r,{variant:"subtitle2",sx:{fontWeight:600},children:"Selected"}),e.jsx(r,{variant:"body2",color:"text.secondary",children:"isSelected=true"})]})]})},m={render:()=>e.jsxs(t,{variant:"outlined",padding:"md",isInteractive:!0,onClick:()=>console.log("Product clicked"),sx:{width:280},children:[e.jsx(y,{component:"img",src:"https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Product",sx:{width:"100%",height:160,objectFit:"cover",borderRadius:1,mb:2}}),e.jsxs(y,{sx:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",mb:1},children:[e.jsx(r,{variant:"subtitle1",sx:{fontWeight:600},children:"프리미엄 무선 이어폰"}),e.jsx(x,{label:"NEW",size:"small",color:"primary"})]}),e.jsx(r,{variant:"body2",color:"text.secondary",sx:{mb:2},children:"고품질 사운드와 편안한 착용감"}),e.jsxs(y,{sx:{display:"flex",alignItems:"baseline",gap:1},children:[e.jsx(r,{variant:"h6",color:"primary",sx:{fontWeight:700},children:"₩89,000"}),e.jsx(r,{variant:"body2",color:"text.secondary",sx:{textDecoration:"line-through"},children:"₩120,000"})]})]})},h={render:()=>e.jsxs(n,{direction:"row",spacing:2,children:[e.jsxs(t,{variant:"elevation",padding:"md",sx:{minWidth:180},children:[e.jsx(r,{variant:"overline",color:"text.secondary",children:"총 방문자"}),e.jsx(r,{variant:"h4",sx:{fontWeight:700},children:"12,543"}),e.jsx(r,{variant:"caption",color:"success.main",children:"+12.5% 지난 주 대비"})]}),e.jsxs(t,{variant:"elevation",padding:"md",sx:{minWidth:180},children:[e.jsx(r,{variant:"overline",color:"text.secondary",children:"신규 가입"}),e.jsx(r,{variant:"h4",sx:{fontWeight:700},children:"847"}),e.jsx(r,{variant:"caption",color:"error.main",children:"-3.2% 지난 주 대비"})]})]})},g={render:()=>e.jsx(n,{direction:"row",spacing:2,children:["Basic","Pro","Enterprise"].map((a,o)=>e.jsxs(t,{variant:"outlined",padding:"md",isInteractive:!0,isSelected:o===1,onClick:()=>console.log(`${a} selected`),sx:{width:160},children:[e.jsx(r,{variant:"subtitle1",sx:{fontWeight:700,mb:.5},children:a}),e.jsxs(r,{variant:"h5",sx:{fontWeight:700,mb:1},children:["$",o===0?"9":o===1?"29":"99",e.jsx(r,{component:"span",variant:"body2",color:"text.secondary",children:"/mo"})]}),e.jsx(v,{variant:o===1?"contained":"outlined",size:"small",fullWidth:!0,sx:{textTransform:"none"},children:o===1?"Current":"Select"})]},a))})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    padding: 'md',
    radius: 'md',
    isInteractive: false,
    isSelected: false
  },
  render: args => <CardContainer {...args} sx={{
    width: 320
  }}>
      <Typography variant="h6" sx={{
      fontWeight: 600,
      mb: 1
    }}>
        카드 제목
      </Typography>
      <Typography variant="body2" color="text.secondary">
        CardContainer는 다양한 variant를 지원하는 기본 카드 래퍼입니다.
      </Typography>
    </CardContainer>
}`,...i.parameters?.docs?.source},description:{story:"기본 CardContainer",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
      {['outlined', 'elevation', 'ghost', 'filled'].map(variant => <CardContainer key={variant} variant={variant} padding="md" sx={{
      width: 200
    }}>
          <Typography variant="subtitle2" sx={{
        fontWeight: 600,
        mb: 0.5
      }}>
            {variant}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            variant=&quot;{variant}&quot;
          </Typography>
        </CardContainer>)}
    </Stack>
}`,...s.parameters?.docs?.source},description:{story:"Variant 비교",...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2} alignItems="flex-start">
      {['none', 'sm', 'md', 'lg'].map(padding => <CardContainer key={padding} variant="outlined" padding={padding} sx={{
      width: 150
    }}>
          <Typography variant="body2" sx={{
        fontWeight: 600
      }}>
            padding: {padding}
          </Typography>
          <Chip label="Tag" size="small" sx={{
        mt: 1
      }} />
        </CardContainer>)}
    </Stack>
}`,...d.parameters?.docs?.source},description:{story:"Padding 비교",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2}>
      {['none', 'sm', 'md', 'lg'].map(radius => <CardContainer key={radius} variant="elevation" padding="md" radius={radius} sx={{
      width: 150
    }}>
          <Typography variant="body2" sx={{
        fontWeight: 600
      }}>
            radius: {radius}
          </Typography>
        </CardContainer>)}
    </Stack>
}`,...c.parameters?.docs?.source},description:{story:"Radius 비교",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2}>
      {['outlined', 'elevation', 'ghost', 'filled'].map(variant => <CardContainer key={variant} variant={variant} padding="md" isInteractive onClick={() => console.log(\`\${variant} clicked!\`)} sx={{
      width: 180
    }}>
          <Typography variant="subtitle2" sx={{
        fontWeight: 600,
        mb: 0.5
      }}>
            Interactive
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {variant} + hover
          </Typography>
        </CardContainer>)}
    </Stack>
}`,...p.parameters?.docs?.source},description:{story:"Interactive 상태",...p.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2}>
      <CardContainer variant="outlined" padding="md" sx={{
      width: 180
    }}>
        <Typography variant="subtitle2" sx={{
        fontWeight: 600
      }}>
          Normal
        </Typography>
        <Typography variant="body2" color="text.secondary">
          isSelected=false
        </Typography>
      </CardContainer>
      <CardContainer variant="outlined" padding="md" isSelected sx={{
      width: 180
    }}>
        <Typography variant="subtitle2" sx={{
        fontWeight: 600
      }}>
          Selected
        </Typography>
        <Typography variant="body2" color="text.secondary">
          isSelected=true
        </Typography>
      </CardContainer>
    </Stack>
}`,...l.parameters?.docs?.source},description:{story:"Selected 상태",...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <CardContainer variant="outlined" padding="md" isInteractive onClick={() => console.log('Product clicked')} sx={{
    width: 280
  }}>
      <Box component="img" src="https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product" sx={{
      width: '100%',
      height: 160,
      objectFit: 'cover',
      borderRadius: 1,
      mb: 2
    }} />
      <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      mb: 1
    }}>
        <Typography variant="subtitle1" sx={{
        fontWeight: 600
      }}>
          프리미엄 무선 이어폰
        </Typography>
        <Chip label="NEW" size="small" color="primary" />
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{
      mb: 2
    }}>
        고품질 사운드와 편안한 착용감
      </Typography>
      <Box sx={{
      display: 'flex',
      alignItems: 'baseline',
      gap: 1
    }}>
        <Typography variant="h6" color="primary" sx={{
        fontWeight: 700
      }}>
          ₩89,000
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        textDecoration: 'line-through'
      }}>
          ₩120,000
        </Typography>
      </Box>
    </CardContainer>
}`,...m.parameters?.docs?.source},description:{story:"실제 사용 예시 - 상품 카드",...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2}>
      <CardContainer variant="elevation" padding="md" sx={{
      minWidth: 180
    }}>
        <Typography variant="overline" color="text.secondary">
          총 방문자
        </Typography>
        <Typography variant="h4" sx={{
        fontWeight: 700
      }}>
          12,543
        </Typography>
        <Typography variant="caption" color="success.main">
          +12.5% 지난 주 대비
        </Typography>
      </CardContainer>
      <CardContainer variant="elevation" padding="md" sx={{
      minWidth: 180
    }}>
        <Typography variant="overline" color="text.secondary">
          신규 가입
        </Typography>
        <Typography variant="h4" sx={{
        fontWeight: 700
      }}>
          847
        </Typography>
        <Typography variant="caption" color="error.main">
          -3.2% 지난 주 대비
        </Typography>
      </CardContainer>
    </Stack>
}`,...h.parameters?.docs?.source},description:{story:"실제 사용 예시 - 통계 카드",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2}>
      {['Basic', 'Pro', 'Enterprise'].map((plan, index) => <CardContainer key={plan} variant="outlined" padding="md" isInteractive isSelected={index === 1} onClick={() => console.log(\`\${plan} selected\`)} sx={{
      width: 160
    }}>
          <Typography variant="subtitle1" sx={{
        fontWeight: 700,
        mb: 0.5
      }}>
            {plan}
          </Typography>
          <Typography variant="h5" sx={{
        fontWeight: 700,
        mb: 1
      }}>
            \${index === 0 ? '9' : index === 1 ? '29' : '99'}
            <Typography component="span" variant="body2" color="text.secondary">
              /mo
            </Typography>
          </Typography>
          <Button variant={index === 1 ? 'contained' : 'outlined'} size="small" fullWidth sx={{
        textTransform: 'none'
      }}>
            {index === 1 ? 'Current' : 'Select'}
          </Button>
        </CardContainer>)}
    </Stack>
}`,...g.parameters?.docs?.source},description:{story:"실제 사용 예시 - 선택 가능한 옵션",...g.parameters?.docs?.description}}};const F=["Default","Variants","Paddings","RadiusOptions","Interactive","Selected","ProductExample","StatExample","SelectableOptions"];export{i as Default,p as Interactive,d as Paddings,m as ProductExample,c as RadiusOptions,g as SelectableOptions,l as Selected,h as StatExample,s as Variants,F as __namedExportsOrder,D as default};
