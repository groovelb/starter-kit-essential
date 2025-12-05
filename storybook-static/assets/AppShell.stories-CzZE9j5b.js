import{j as e,r as H}from"./iframe-q-XN_VZM.js";import{S as w}from"./Search-B6cHP2qc.js";import{c as W}from"./createSvgIcon-CvYdi5pS.js";import{G as P}from"./GNB-gGHZerHS.js";import{B as r}from"./Box-Dmtu8wWb.js";import{N as s}from"./NavMenu-DoD1bfgk.js";import{P as l,D as d}from"./SectionTitle-B-E4QVff.js";import{S as p}from"./SectionContainer-D9fIIAHK.js";import{T as t}from"./Typography-C8IUsM00.js";import{I as h}from"./IconButton-BSXa4zK8.js";import{B as c}from"./Button-Coknce8O.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-BW0efeYW.js";import"./Close-CmD3Qau8.js";import"./index-Ba9eRRNW.js";import"./useThemeProps-CFXzbazh.js";import"./useTheme-CDdqLoBf.js";import"./useSlot-Xw8rJOQc.js";import"./useTimeout-C6lNLwyh.js";import"./isHostComponent-DVu5iVWx.js";import"./mergeSlotProps-Cg99X4s0.js";import"./utils-UDy2T9Xi.js";import"./index-DUeF1Pkm.js";import"./index-C2SgXQAb.js";import"./getReactElementRef-CJ7j01sk.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-CO8Ksk3k.js";import"./Modal-Cp6PhS6B.js";import"./ButtonBase-JbB1eRtB.js";import"./Paper-ri-B2SDS.js";import"./Container-q5yveaGP.js";import"./styled-D6BANXgS.js";import"./Grid-Dd6PAMTp.js";import"./isMuiElement-DpiUmZPP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-K6SSDdjw.js";const R=W(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"})),n=H.forwardRef(function({logo:x,headerPersistent:u,headerCollapsible:g,drawerHeader:f,drawerFooter:y,children:v,breakpoint:b="md",headerHeight:S=64,drawerWidth:j=280,hasHeaderBorder:B=!0,isHeaderSticky:C=!0,isHeaderTransparent:A=!1,sx:I,...N},T){return e.jsxs(r,{ref:T,sx:{display:"flex",flexDirection:"column",minHeight:"100vh",...I},...N,children:[e.jsx(P,{logo:x,navContent:g,persistent:u,drawerHeader:f,drawerFooter:y,breakpoint:b,height:S,drawerWidth:j,hasBorder:B,isSticky:C,isTransparent:A}),e.jsx(r,{component:"main",sx:{flex:1,display:"flex",flexDirection:"column"},children:v})]})});n.__docgenInfo={description:`AppShell 컴포넌트

반응형 레이아웃 쉘. GNB(헤더)와 메인 영역으로 구성된다.
GNB가 반응형 네비게이션(Header + Drawer)을 처리한다.

Props:
@param {node} logo - 로고 영역 (항상 표시) [Optional]
@param {node} headerPersistent - 헤더에 항상 표시될 요소 [Optional]
@param {node} headerCollapsible - 모바일에서 드로어로 이동할 요소 [Optional]
@param {node} drawerHeader - 드로어 상단 커스텀 요소 [Optional]
@param {node} drawerFooter - 드로어 하단 커스텀 요소 [Optional]
@param {node} children - 메인 콘텐츠 영역 [Required]
@param {string} breakpoint - 반응형 전환 브레이크포인트 ('sm' | 'md' | 'lg') [Optional, 기본값: 'md']
@param {number} headerHeight - 헤더 높이 (px) [Optional, 기본값: 64]
@param {number} drawerWidth - 드로어 너비 (px) [Optional, 기본값: 280]
@param {boolean} hasHeaderBorder - 헤더 하단 보더 [Optional, 기본값: true]
@param {boolean} isHeaderSticky - 헤더 고정 [Optional, 기본값: true]
@param {boolean} isHeaderTransparent - 헤더 투명 배경 [Optional, 기본값: false]
@param {object} sx - 추가 스타일 [Optional]

Example usage:
<AppShell
  logo={<Logo />}
  headerPersistent={<SearchBar />}
  headerCollapsible={<NavMenu items={menuItems} />}
  breakpoint="md"
>
  <MainContent />
</AppShell>`,methods:[],displayName:"AppShell",props:{breakpoint:{defaultValue:{value:"'md'",computed:!1},required:!1},headerHeight:{defaultValue:{value:"64",computed:!1},required:!1},drawerWidth:{defaultValue:{value:"280",computed:!1},required:!1},hasHeaderBorder:{defaultValue:{value:"true",computed:!1},required:!1},isHeaderSticky:{defaultValue:{value:"true",computed:!1},required:!1},isHeaderTransparent:{defaultValue:{value:"false",computed:!1},required:!1}}};const k=[{id:"archive",label:"Archive"},{id:"moodboards",label:"Moodboards"},{id:"settings",label:"Settings"}],m=[{id:"home",label:"Home"},{id:"products",label:"Products"},{id:"about",label:"About"},{id:"contact",label:"Contact"}],ye={title:"Custom Component/Navigation/AppShell",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"}},a={render:()=>e.jsxs(l,{children:[e.jsx(d,{title:"AppShell",status:"Ready",note:"반응형 애플리케이션 쉘 컴포넌트",brandName:"Navigation",systemName:"AppShell",version:"1.0"}),e.jsx(p,{children:e.jsx(r,{sx:{border:"1px solid",borderColor:"divider",borderRadius:2,overflow:"hidden",height:400},children:e.jsx(n,{logo:e.jsx(t,{variant:"h6",fontWeight:700,sx:{letterSpacing:"-0.5px"},children:"MUSE."}),headerPersistent:e.jsx(h,{size:"small",children:e.jsx(R,{})}),headerCollapsible:e.jsx(s,{items:k,activeId:"archive",variant:"underline"}),children:e.jsxs(r,{sx:{p:4},children:[e.jsx(t,{variant:"h4",fontWeight:700,gutterBottom:!0,children:"Welcome to Dashboard"}),e.jsx(t,{color:"text.secondary",children:"화면 크기를 조절해보세요. 모바일에서는 네비게이션이 드로어 메뉴로 전환됩니다."})]})})})})]})},o={render:()=>e.jsxs(l,{children:[e.jsx(d,{title:"AppShell - Full Featured",status:"Ready",note:"다양한 기능이 포함된 전체 구성 예시",brandName:"Navigation",systemName:"AppShell",version:"1.0"}),e.jsx(p,{children:e.jsx(r,{sx:{border:"1px solid",borderColor:"divider",borderRadius:2,overflow:"hidden",height:500},children:e.jsx(n,{logo:e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(r,{sx:{width:32,height:32,borderRadius:1,backgroundColor:"primary.main",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:700,fontSize:14},children:"SK"}),e.jsx(t,{variant:"subtitle1",fontWeight:600,children:"Starter Kit"})]}),headerPersistent:e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(h,{size:"small",children:e.jsx(w,{})}),e.jsx(c,{variant:"contained",size:"small",sx:{display:{xs:"none",sm:"flex"}},children:"Get Started"})]}),headerCollapsible:e.jsx(s,{items:m,activeId:"home",variant:"underline"}),drawerFooter:e.jsx(c,{variant:"contained",fullWidth:!0,children:"Get Started"}),breakpoint:"lg",children:e.jsx(r,{sx:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"grey.50"},children:e.jsxs(r,{sx:{textAlign:"center",p:4},children:[e.jsx(t,{variant:"h3",fontWeight:700,gutterBottom:!0,children:"Home Page"}),e.jsx(t,{color:"text.secondary",sx:{maxWidth:400},children:"메인 콘텐츠 영역입니다. AppShell이 반응형 헤더와 자동 드로어 변환을 제공합니다."})]})})})})})]})},i={render:()=>e.jsxs(l,{children:[e.jsx(d,{title:"AppShell - Transparent Header",status:"Ready",note:"Hero 섹션에 적합한 투명 헤더 모드",brandName:"Navigation",systemName:"AppShell",version:"1.0"}),e.jsx(p,{children:e.jsx(r,{sx:{borderRadius:2,overflow:"hidden",height:400},children:e.jsx(n,{logo:e.jsx(t,{variant:"h6",fontWeight:700,sx:{color:"white"},children:"Brand"}),headerCollapsible:e.jsx(s,{items:m,activeId:"home",sx:{"& button":{color:"white"}}}),isHeaderTransparent:!0,hasHeaderBorder:!1,children:e.jsx(r,{sx:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",color:"white"},children:e.jsx(t,{variant:"h2",fontWeight:700,children:"Hero Section"})})})})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <PageContainer>
      <DocumentTitle title="AppShell" status="Ready" note="반응형 애플리케이션 쉘 컴포넌트" brandName="Navigation" systemName="AppShell" version="1.0" />
      <SectionContainer>
        <Box sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        overflow: 'hidden',
        height: 400
      }}>
          <AppShell logo={<Typography variant="h6" fontWeight={700} sx={{
          letterSpacing: '-0.5px'
        }}>
                MUSE.
              </Typography>} headerPersistent={<IconButton size="small">
                <AccountCircleIcon />
              </IconButton>} headerCollapsible={<NavMenu items={museNavItems} activeId="archive" variant="underline" />}>
            <Box sx={{
            p: 4
          }}>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                Welcome to Dashboard
              </Typography>
              <Typography color="text.secondary">
                화면 크기를 조절해보세요. 모바일에서는 네비게이션이 드로어 메뉴로 전환됩니다.
              </Typography>
            </Box>
          </AppShell>
        </Box>
      </SectionContainer>
    </PageContainer>
}`,...a.parameters?.docs?.source},description:{story:`## 기본 사용법

반응형 애플리케이션 쉘입니다.
모바일에서는 자동으로 드로어 메뉴로 전환됩니다.`,...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <PageContainer>
      <DocumentTitle title="AppShell - Full Featured" status="Ready" note="다양한 기능이 포함된 전체 구성 예시" brandName="Navigation" systemName="AppShell" version="1.0" />
      <SectionContainer>
        <Box sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        overflow: 'hidden',
        height: 500
      }}>
          <AppShell logo={<Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}>
                <Box sx={{
            width: 32,
            height: 32,
            borderRadius: 1,
            backgroundColor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: 14
          }}>
                  SK
                </Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  Starter Kit
                </Typography>
              </Box>} headerPersistent={<Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}>
                <IconButton size="small">
                  <SearchIcon />
                </IconButton>
                <Button variant="contained" size="small" sx={{
            display: {
              xs: 'none',
              sm: 'flex'
            }
          }}>
                  Get Started
                </Button>
              </Box>} headerCollapsible={<NavMenu items={basicNavItems} activeId="home" variant="underline" />} drawerFooter={<Button variant="contained" fullWidth>
                Get Started
              </Button>} breakpoint="lg">
            <Box sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'grey.50'
          }}>
              <Box sx={{
              textAlign: 'center',
              p: 4
            }}>
                <Typography variant="h3" fontWeight={700} gutterBottom>
                  Home Page
                </Typography>
                <Typography color="text.secondary" sx={{
                maxWidth: 400
              }}>
                  메인 콘텐츠 영역입니다. AppShell이 반응형 헤더와 자동 드로어 변환을 제공합니다.
                </Typography>
              </Box>
            </Box>
          </AppShell>
        </Box>
      </SectionContainer>
    </PageContainer>
}`,...o.parameters?.docs?.source},description:{story:`## 다양한 기능 조합

검색, CTA 버튼, 드로어 푸터 등을 포함한 전체 기능 예시입니다.`,...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <PageContainer>
      <DocumentTitle title="AppShell - Transparent Header" status="Ready" note="Hero 섹션에 적합한 투명 헤더 모드" brandName="Navigation" systemName="AppShell" version="1.0" />
      <SectionContainer>
        <Box sx={{
        borderRadius: 2,
        overflow: 'hidden',
        height: 400
      }}>
          <AppShell logo={<Typography variant="h6" fontWeight={700} sx={{
          color: 'white'
        }}>
                Brand
              </Typography>} headerCollapsible={<NavMenu items={basicNavItems} activeId="home" sx={{
          '& button': {
            color: 'white'
          }
        }} />} isHeaderTransparent hasHeaderBorder={false}>
            <Box sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            color: 'white'
          }}>
              <Typography variant="h2" fontWeight={700}>
                Hero Section
              </Typography>
            </Box>
          </AppShell>
        </Box>
      </SectionContainer>
    </PageContainer>
}`,...i.parameters?.docs?.source},description:{story:`## 투명 헤더

Hero 섹션에 적합한 투명 헤더 모드입니다.`,...i.parameters?.docs?.description}}};const ve=["Default","FullFeatured","TransparentHeader"];export{a as Default,o as FullFeatured,i as TransparentHeader,ve as __namedExportsOrder,ye as default};
