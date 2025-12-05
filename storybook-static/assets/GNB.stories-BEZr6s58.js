import{j as e}from"./iframe-q-XN_VZM.js";import{D as j,P as g,S as y}from"./Settings-iKJ-7qZL.js";import{G as i}from"./GNB-gGHZerHS.js";import{N as x}from"./NavMenu-DoD1bfgk.js";import{P as a,D as c}from"./SectionTitle-B-E4QVff.js";import{S as l}from"./SectionContainer-D9fIIAHK.js";import{B as t}from"./Box-Dmtu8wWb.js";import{T as h}from"./Typography-C8IUsM00.js";import"./preload-helper-PPVm8Dsz.js";import"./createSvgIcon-CvYdi5pS.js";import"./memoTheme-BW0efeYW.js";import"./Close-CmD3Qau8.js";import"./index-Ba9eRRNW.js";import"./useThemeProps-CFXzbazh.js";import"./useTheme-CDdqLoBf.js";import"./IconButton-BSXa4zK8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-JbB1eRtB.js";import"./useTimeout-C6lNLwyh.js";import"./CircularProgress-K6SSDdjw.js";import"./useSlot-Xw8rJOQc.js";import"./isHostComponent-DVu5iVWx.js";import"./mergeSlotProps-Cg99X4s0.js";import"./utils-UDy2T9Xi.js";import"./index-DUeF1Pkm.js";import"./index-C2SgXQAb.js";import"./getReactElementRef-CJ7j01sk.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-CO8Ksk3k.js";import"./Modal-Cp6PhS6B.js";import"./Paper-ri-B2SDS.js";import"./Container-q5yveaGP.js";import"./styled-D6BANXgS.js";import"./Grid-Dd6PAMTp.js";import"./isMuiElement-DpiUmZPP.js";const $={title:"Custom Component/Navigation/GNB",component:i,tags:["autodocs"],parameters:{layout:"fullscreen"}},p=[{id:"archive",label:"Archive",icon:e.jsx(j,{})},{id:"moodboards",label:"Moodboards",icon:e.jsx(g,{})},{id:"settings",label:"Settings",icon:e.jsx(y,{})}],m=()=>e.jsx(h,{variant:"h6",fontWeight:700,sx:{letterSpacing:"-0.5px"},children:"MUSE."}),r={render:()=>e.jsxs(a,{children:[e.jsx(c,{title:"GNB",status:"Ready",note:"Global Navigation Bar - 반응형 헤더 + 드로어",brandName:"Navigation",systemName:"GNB",version:"1.0"}),e.jsxs(l,{sx:{py:0},children:[e.jsx(i,{logo:e.jsx(m,{}),navContent:e.jsx(x,{items:p,activeId:"archive",variant:"underline"})}),e.jsx(t,{sx:{p:4,bgcolor:"grey.50",minHeight:300},children:e.jsx(h,{color:"text.secondary",children:"브라우저 너비를 줄여서 반응형 전환을 확인하세요."})})]})]})},o={render:()=>e.jsxs(a,{children:[e.jsx(c,{title:"GNB - Transparent",status:"Ready",note:"투명 배경 + 블러 효과",brandName:"Navigation",systemName:"GNB",version:"1.0"}),e.jsx(l,{sx:{py:0},children:e.jsxs(t,{sx:{position:"relative"},children:[e.jsx(i,{logo:e.jsx(m,{}),navContent:e.jsx(x,{items:p,activeId:"archive",variant:"underline"}),isTransparent:!0,hasBorder:!1}),e.jsx(t,{sx:{height:400,background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(h,{variant:"h3",color:"white",fontWeight:700,children:"Hero Section"})})]})})]})},n={render:()=>e.jsxs(a,{children:[e.jsx(c,{title:"GNB - With Persistent",status:"Ready",note:"항상 표시되는 요소 포함",brandName:"Navigation",systemName:"GNB",version:"1.0"}),e.jsxs(l,{sx:{py:0},children:[e.jsx(i,{logo:e.jsx(m,{}),navContent:e.jsx(x,{items:p,activeId:"archive",variant:"underline"}),persistent:e.jsx(t,{sx:{width:32,height:32,borderRadius:"50%",bgcolor:"primary.main",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:600},children:"S"})}),e.jsx(t,{sx:{p:4,bgcolor:"grey.50",minHeight:300},children:e.jsx(h,{color:"text.secondary",children:"프로필 아바타는 모바일에서도 항상 표시됩니다."})})]})]})},d={render:()=>e.jsxs(a,{children:[e.jsx(c,{title:"GNB - Custom Breakpoint",status:"Ready",note:"breakpoint='lg' 설정",brandName:"Navigation",systemName:"GNB",version:"1.0"}),e.jsxs(l,{sx:{py:0},children:[e.jsx(i,{logo:e.jsx(m,{}),navContent:e.jsx(x,{items:p,activeId:"archive",variant:"underline"}),breakpoint:"lg"}),e.jsx(t,{sx:{p:4,bgcolor:"grey.50",minHeight:300},children:e.jsx(h,{color:"text.secondary",children:"lg(1200px) 미만에서 햄버거 메뉴로 전환됩니다."})})]})]})},s={render:()=>e.jsxs(a,{children:[e.jsx(c,{title:"GNB Props",status:"Ready",note:"GNB 컴포넌트 Props 문서",brandName:"Navigation",systemName:"GNB",version:"1.0"}),e.jsx(l,{children:e.jsx(t,{sx:{overflowX:"auto"},children:e.jsxs(t,{component:"table",sx:{width:"100%",borderCollapse:"collapse","& th, & td":{p:2,textAlign:"left",borderBottom:"1px solid",borderColor:"divider"},"& th":{bgcolor:"grey.50",fontWeight:600}},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Prop"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"logo"})}),e.jsx("td",{children:"node"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"로고 영역 (항상 표시)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"navContent"})}),e.jsx("td",{children:"node"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"네비게이션 콘텐츠 (반응형 전환 대상)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"persistent"})}),e.jsx("td",{children:"node"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"항상 표시될 요소 (검색, 프로필 등)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"drawerHeader"})}),e.jsx("td",{children:"node"}),e.jsx("td",{children:"logo"}),e.jsx("td",{children:"드로어 상단 커스텀 요소"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"drawerFooter"})}),e.jsx("td",{children:"node"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"드로어 하단 커스텀 요소"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"breakpoint"})}),e.jsx("td",{children:"'sm' | 'md' | 'lg'"}),e.jsx("td",{children:"'md'"}),e.jsx("td",{children:"반응형 전환 브레이크포인트"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"height"})}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"64"}),e.jsx("td",{children:"헤더 높이 (px)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"drawerWidth"})}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"280"}),e.jsx("td",{children:"드로어 너비 (px)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"hasBorder"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"헤더 하단 보더"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isSticky"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"true"}),e.jsx("td",{children:"헤더 고정 여부"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isTransparent"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"false"}),e.jsx("td",{children:"투명 배경 + 블러 효과"})]})]})]})})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <PageContainer>
      <DocumentTitle title="GNB" status="Ready" note="Global Navigation Bar - 반응형 헤더 + 드로어" brandName="Navigation" systemName="GNB" version="1.0" />
      <SectionContainer sx={{
      py: 0
    }}>
        <GNB logo={<Logo />} navContent={<NavMenu items={navItems} activeId="archive" variant="underline" />} />
        <Box sx={{
        p: 4,
        bgcolor: 'grey.50',
        minHeight: 300
      }}>
          <Typography color="text.secondary">
            브라우저 너비를 줄여서 반응형 전환을 확인하세요.
          </Typography>
        </Box>
      </SectionContainer>
    </PageContainer>
}`,...r.parameters?.docs?.source},description:{story:`## Default

기본 GNB. 로고와 네비게이션 메뉴를 포함합니다.
브레이크포인트(md) 미만에서 햄버거 메뉴로 전환됩니다.`,...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <PageContainer>
      <DocumentTitle title="GNB - Transparent" status="Ready" note="투명 배경 + 블러 효과" brandName="Navigation" systemName="GNB" version="1.0" />
      <SectionContainer sx={{
      py: 0
    }}>
        <Box sx={{
        position: 'relative'
      }}>
          <GNB logo={<Logo />} navContent={<NavMenu items={navItems} activeId="archive" variant="underline" />} isTransparent hasBorder={false} />
          <Box sx={{
          height: 400,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
            <Typography variant="h3" color="white" fontWeight={700}>
              Hero Section
            </Typography>
          </Box>
        </Box>
      </SectionContainer>
    </PageContainer>
}`,...o.parameters?.docs?.source},description:{story:`## Transparent Header

투명 배경의 GNB. 히어로 섹션 위에 오버레이할 때 사용합니다.`,...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <PageContainer>
      <DocumentTitle title="GNB - With Persistent" status="Ready" note="항상 표시되는 요소 포함" brandName="Navigation" systemName="GNB" version="1.0" />
      <SectionContainer sx={{
      py: 0
    }}>
        <GNB logo={<Logo />} navContent={<NavMenu items={navItems} activeId="archive" variant="underline" />} persistent={<Box sx={{
        width: 32,
        height: 32,
        borderRadius: '50%',
        bgcolor: 'primary.main',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        fontWeight: 600
      }}>
              S
            </Box>} />
        <Box sx={{
        p: 4,
        bgcolor: 'grey.50',
        minHeight: 300
      }}>
          <Typography color="text.secondary">
            프로필 아바타는 모바일에서도 항상 표시됩니다.
          </Typography>
        </Box>
      </SectionContainer>
    </PageContainer>
}`,...n.parameters?.docs?.source},description:{story:`## With Persistent Elements

항상 표시되는 요소(검색바, 프로필 등)와 함께 사용합니다.`,...n.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <PageContainer>
      <DocumentTitle title="GNB - Custom Breakpoint" status="Ready" note="breakpoint='lg' 설정" brandName="Navigation" systemName="GNB" version="1.0" />
      <SectionContainer sx={{
      py: 0
    }}>
        <GNB logo={<Logo />} navContent={<NavMenu items={navItems} activeId="archive" variant="underline" />} breakpoint="lg" />
        <Box sx={{
        p: 4,
        bgcolor: 'grey.50',
        minHeight: 300
      }}>
          <Typography color="text.secondary">
            lg(1200px) 미만에서 햄버거 메뉴로 전환됩니다.
          </Typography>
        </Box>
      </SectionContainer>
    </PageContainer>
}`,...d.parameters?.docs?.source},description:{story:`## Custom Breakpoint

브레이크포인트를 lg로 변경하여 더 넓은 화면에서 전환합니다.`,...d.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <PageContainer>
      <DocumentTitle title="GNB Props" status="Ready" note="GNB 컴포넌트 Props 문서" brandName="Navigation" systemName="GNB" version="1.0" />
      <SectionContainer>
        <Box sx={{
        overflowX: 'auto'
      }}>
          <Box component="table" sx={{
          width: '100%',
          borderCollapse: 'collapse',
          '& th, & td': {
            p: 2,
            textAlign: 'left',
            borderBottom: '1px solid',
            borderColor: 'divider'
          },
          '& th': {
            bgcolor: 'grey.50',
            fontWeight: 600
          }
        }}>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>logo</code></td>
                <td>node</td>
                <td>-</td>
                <td>로고 영역 (항상 표시)</td>
              </tr>
              <tr>
                <td><code>navContent</code></td>
                <td>node</td>
                <td>-</td>
                <td>네비게이션 콘텐츠 (반응형 전환 대상)</td>
              </tr>
              <tr>
                <td><code>persistent</code></td>
                <td>node</td>
                <td>-</td>
                <td>항상 표시될 요소 (검색, 프로필 등)</td>
              </tr>
              <tr>
                <td><code>drawerHeader</code></td>
                <td>node</td>
                <td>logo</td>
                <td>드로어 상단 커스텀 요소</td>
              </tr>
              <tr>
                <td><code>drawerFooter</code></td>
                <td>node</td>
                <td>-</td>
                <td>드로어 하단 커스텀 요소</td>
              </tr>
              <tr>
                <td><code>breakpoint</code></td>
                <td>'sm' | 'md' | 'lg'</td>
                <td>'md'</td>
                <td>반응형 전환 브레이크포인트</td>
              </tr>
              <tr>
                <td><code>height</code></td>
                <td>number</td>
                <td>64</td>
                <td>헤더 높이 (px)</td>
              </tr>
              <tr>
                <td><code>drawerWidth</code></td>
                <td>number</td>
                <td>280</td>
                <td>드로어 너비 (px)</td>
              </tr>
              <tr>
                <td><code>hasBorder</code></td>
                <td>boolean</td>
                <td>true</td>
                <td>헤더 하단 보더</td>
              </tr>
              <tr>
                <td><code>isSticky</code></td>
                <td>boolean</td>
                <td>true</td>
                <td>헤더 고정 여부</td>
              </tr>
              <tr>
                <td><code>isTransparent</code></td>
                <td>boolean</td>
                <td>false</td>
                <td>투명 배경 + 블러 효과</td>
              </tr>
            </tbody>
          </Box>
        </Box>
      </SectionContainer>
    </PageContainer>
}`,...s.parameters?.docs?.source},description:{story:"## Props",...s.parameters?.docs?.description}}};const ee=["Default","Transparent","WithPersistent","CustomBreakpoint","Props"];export{d as CustomBreakpoint,r as Default,s as Props,o as Transparent,n as WithPersistent,ee as __namedExportsOrder,$ as default};
