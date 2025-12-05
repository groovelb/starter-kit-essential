import{j as e,V as k,W,X as w,Y as P,Z as R,$ as O,a0 as F}from"./iframe-q-XN_VZM.js";import{D as T,P as j,S as i}from"./SectionTitle-B-E4QVff.js";import{u as v}from"./useTheme-CDdqLoBf.js";import{T as t}from"./Typography-C8IUsM00.js";import{b as f,a as u,c as n,T as o,d as S}from"./TableRow-DxwoBvdd.js";import{T as z}from"./TableHead-CFjEf5Al.js";import{B as a}from"./Box-Dmtu8wWb.js";import{D}from"./Divider-DePyv9fJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Container-q5yveaGP.js";import"./memoTheme-BW0efeYW.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./Grid-Dd6PAMTp.js";import"./isMuiElement-DpiUmZPP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./dividerClasses-BAQMkccN.js";const J={title:"Style/Colors",parameters:{layout:"padded",docs:{description:{component:`
## 색상 시스템

프로젝트에서 사용하는 색상 팔레트와 역할별 컬러 토큰입니다.

### 구조
- Color Palette: 순수 색상값 모음 (blue[500], grey[100])
- Semantic Tokens: 역할별 의미 부여 (primary, secondary)
- Component Tokens: 컴포넌트별 적용 (Button, Alert)
        `}}}},c=({name:r,colorObj:s,description:y})=>e.jsxs(a,{sx:{mb:6},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:600,mb:.5},children:r}),e.jsx(t,{variant:"body2",color:"text.secondary",sx:{mb:2},children:y}),e.jsx(a,{sx:{display:"flex",flexWrap:"wrap",gap:1},children:[50,100,200,300,400,500,600,700,800,900].map(l=>e.jsxs(a,{sx:{width:80,height:80,backgroundColor:s[l],display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:1},children:[e.jsx(t,{variant:"caption",sx:{color:l>=400?"white":"rgba(0,0,0,0.7)",fontSize:12,fontWeight:700},children:l}),e.jsx(t,{variant:"caption",sx:{color:l>=400?"rgba(255,255,255,0.7)":"rgba(0,0,0,0.5)",fontSize:10,fontFamily:"monospace"},children:s[l]})]},l))})]}),m={render:()=>{const r=v();return e.jsxs(e.Fragment,{children:[e.jsx(T,{title:"Color System",status:"Available",note:"Color palette and semantic color tokens",brandName:"Design System",systemName:"Starter Kit",version:"1.0"}),e.jsxs(j,{children:[e.jsx(t,{variant:"h4",sx:{fontWeight:700,mb:1},children:"색상 시스템 개요"}),e.jsx(t,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"색상 시스템의 구조와 계층을 이해합니다."}),e.jsx(i,{title:"색상 토큰 계층 구조"}),e.jsx(f,{sx:{mb:4},children:e.jsxs(u,{size:"small",children:[e.jsx(z,{children:e.jsxs(n,{children:[e.jsx(o,{sx:{fontWeight:600},children:"계층"}),e.jsx(o,{sx:{fontWeight:600},children:"설명"}),e.jsx(o,{sx:{fontWeight:600},children:"예시"})]})}),e.jsxs(S,{children:[e.jsxs(n,{children:[e.jsx(o,{sx:{fontWeight:600},children:"Color Palette"}),e.jsx(o,{children:"순수 색상값"}),e.jsx(o,{sx:{fontFamily:"monospace",fontSize:12},children:"blue[500], grey[100]"})]}),e.jsxs(n,{children:[e.jsx(o,{sx:{fontWeight:600},children:"Semantic Tokens"}),e.jsx(o,{children:"역할별 색상"}),e.jsx(o,{sx:{fontFamily:"monospace",fontSize:12},children:"primary.main, error.main"})]}),e.jsxs(n,{children:[e.jsx(o,{sx:{fontWeight:600},children:"Component Tokens"}),e.jsx(o,{children:"컴포넌트별 적용"}),e.jsx(o,{sx:{fontFamily:"monospace",fontSize:12},children:'Button color="primary"'})]})]})]})}),e.jsx(i,{title:"현재 프로젝트 주요 색상"}),e.jsx(f,{children:e.jsx(u,{size:"small",children:e.jsxs(S,{children:[e.jsxs(n,{children:[e.jsx(o,{sx:{fontWeight:600,width:"20%"},children:"Primary"}),e.jsx(o,{sx:{fontFamily:"monospace"},children:"#0000FF"}),e.jsx(o,{children:"브랜드 색상, CTA 버튼, 링크"}),e.jsx(o,{sx:{width:40},children:e.jsx(a,{sx:{width:24,height:24,backgroundColor:r.palette.primary.main}})})]}),e.jsxs(n,{children:[e.jsx(o,{sx:{fontWeight:600},children:"Secondary"}),e.jsx(o,{sx:{fontFamily:"monospace"},children:r.palette.secondary.main}),e.jsx(o,{children:"보조 액션, 비활성 요소"}),e.jsx(o,{children:e.jsx(a,{sx:{width:24,height:24,backgroundColor:r.palette.secondary.main}})})]})]})})})]})]})}},x={name:"1. Color Palette",render:()=>e.jsxs(e.Fragment,{children:[e.jsx(T,{title:"Color Palette",status:"Available",note:"MUI default color palette",brandName:"Design System",systemName:"Starter Kit",version:"1.0"}),e.jsxs(j,{children:[e.jsx(t,{variant:"h4",sx:{fontWeight:700,mb:1},children:"Color Palette (원시 색상)"}),e.jsx(t,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"MUI에서 제공하는 기본 색상 팔레트입니다. 이 색상들을 조합하여 테마를 구성합니다."}),e.jsx(D,{sx:{mb:4}}),e.jsx(c,{name:"Blue",colorObj:k,description:"Primary 색상의 기반"}),e.jsx(c,{name:"Blue Grey",colorObj:W,description:"Secondary 색상의 기반"}),e.jsx(c,{name:"Grey",colorObj:w,description:"텍스트, 배경, 보더"}),e.jsx(c,{name:"Red",colorObj:P,description:"Error 상태"}),e.jsx(c,{name:"Orange",colorObj:R,description:"Warning 상태"}),e.jsx(c,{name:"Green",colorObj:O,description:"Success 상태"}),e.jsx(c,{name:"Light Blue",colorObj:F,description:"Info 상태"}),e.jsx(i,{title:"명도 가이드"}),e.jsx(f,{children:e.jsx(u,{size:"small",children:e.jsxs(S,{children:[e.jsxs(n,{children:[e.jsx(o,{sx:{fontWeight:600,width:"20%"},children:"50-100"}),e.jsx(o,{children:"매우 밝음 - 배경색"})]}),e.jsxs(n,{children:[e.jsx(o,{sx:{fontWeight:600},children:"200-300"}),e.jsx(o,{children:"밝음 - hover, 보더"})]}),e.jsxs(n,{children:[e.jsx(o,{sx:{fontWeight:600},children:"400-500"}),e.jsx(o,{children:"기본 - main 색상"})]}),e.jsxs(n,{children:[e.jsx(o,{sx:{fontWeight:600},children:"600-700"}),e.jsx(o,{children:"어두움 - active, dark"})]}),e.jsxs(n,{children:[e.jsx(o,{sx:{fontWeight:600},children:"800-900"}),e.jsx(o,{children:"매우 어두움 - 텍스트"})]})]})})})]})]})},d=({name:r,colorObj:s,description:y})=>{const l=["light","main","dark"];return e.jsxs(a,{sx:{mb:6},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:600,mb:.5},children:r}),e.jsx(t,{variant:"body2",color:"text.secondary",sx:{mb:2},children:y}),e.jsx(a,{sx:{display:"flex",flexWrap:"wrap",gap:1},children:l.map(g=>{const B=s[g],C=g==="light";return e.jsxs(a,{sx:{width:120,height:80,backgroundColor:B,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:1,border:C?"1px solid rgba(0,0,0,0.1)":"none"},children:[e.jsx(t,{variant:"caption",sx:{color:C?"rgba(0,0,0,0.7)":"white",fontSize:12,fontWeight:700},children:g}),e.jsx(t,{variant:"caption",sx:{color:C?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.7)",fontSize:10,fontFamily:"monospace"},children:B})]},g)})})]})},p=({name:r,color:s,description:y,hasBorder:l=!1})=>e.jsxs(a,{sx:{width:120,height:80,backgroundColor:s,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:1,border:l?"1px solid rgba(0,0,0,0.1)":"none"},children:[e.jsx(t,{variant:"caption",sx:{color:l?"rgba(0,0,0,0.7)":"white",fontSize:12,fontWeight:700},children:r}),e.jsx(t,{variant:"caption",sx:{color:l?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.7)",fontSize:10,fontFamily:"monospace"},children:s})]}),b={name:"2. Semantic Tokens",render:()=>{const r=v();return e.jsxs(e.Fragment,{children:[e.jsx(T,{title:"Semantic Tokens",status:"Available",note:"Role-based semantic colors",brandName:"Design System",systemName:"Starter Kit",version:"1.0"}),e.jsxs(j,{children:[e.jsx(t,{variant:"h4",sx:{fontWeight:700,mb:1},children:"Semantic Tokens (역할별 색상)"}),e.jsx(t,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"색상에 의미와 역할을 부여한 토큰입니다. 컴포넌트에서 이 토큰을 참조합니다."}),e.jsx(i,{title:"브랜드 색상"}),e.jsx(d,{name:"Primary",colorObj:r.palette.primary,description:"CTA 버튼, 링크, 선택된 상태"}),e.jsx(d,{name:"Secondary",colorObj:r.palette.secondary,description:"보조 버튼, 태그"}),e.jsx(i,{title:"상태 색상 (Feedback Colors)",description:"사용자에게 시스템 상태를 전달하는 색상입니다."}),e.jsx(d,{name:"Error",colorObj:r.palette.error,description:"오류, 삭제, 위험"}),e.jsx(d,{name:"Warning",colorObj:r.palette.warning,description:"주의, 경고"}),e.jsx(d,{name:"Success",colorObj:r.palette.success,description:"성공, 완료, 활성"}),e.jsx(d,{name:"Info",colorObj:r.palette.info,description:"정보, 안내"}),e.jsx(i,{title:"텍스트 및 배경 색상"}),e.jsxs(a,{sx:{mb:6},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:600,mb:.5},children:"Text"}),e.jsx(t,{variant:"body2",color:"text.secondary",sx:{mb:2},children:"텍스트 색상"}),e.jsxs(a,{sx:{display:"flex",flexWrap:"wrap",gap:1},children:[e.jsx(p,{name:"primary",color:r.palette.text.primary,description:"주요 텍스트"}),e.jsx(p,{name:"secondary",color:r.palette.text.secondary,description:"보조 텍스트"}),e.jsx(p,{name:"disabled",color:r.palette.text.disabled,description:"비활성 텍스트"})]})]}),e.jsxs(a,{sx:{mb:6},children:[e.jsx(t,{variant:"h6",sx:{fontWeight:600,mb:.5},children:"Background"}),e.jsx(t,{variant:"body2",color:"text.secondary",sx:{mb:2},children:"배경 색상"}),e.jsxs(a,{sx:{display:"flex",flexWrap:"wrap",gap:1},children:[e.jsx(p,{name:"default",color:r.palette.background.default,description:"페이지 배경",hasBorder:!0}),e.jsx(p,{name:"paper",color:r.palette.background.paper,description:"카드, 모달 배경",hasBorder:!0})]})]})]})]})}},h={name:"3. Usage",render:()=>e.jsxs(e.Fragment,{children:[e.jsx(T,{title:"Color Usage",status:"Available",note:"Color application in components",brandName:"Design System",systemName:"Starter Kit",version:"1.0"}),e.jsxs(j,{children:[e.jsx(t,{variant:"h4",sx:{fontWeight:700,mb:1},children:"컴포넌트 적용 예시"}),e.jsx(t,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"Semantic Token이 실제 컴포넌트에 어떻게 적용되는지 확인합니다."}),e.jsx(i,{title:"Button 컴포넌트",description:"Button의 color prop에 Semantic Token 이름을 전달하면 해당 색상이 적용됩니다."}),e.jsx(a,{component:"pre",sx:{backgroundColor:"#f5f5f5",p:2,fontSize:12,fontFamily:"monospace",overflow:"auto",mb:4},children:`<Button variant="contained" color="primary">Primary</Button>
<Button variant="contained" color="error">Error</Button>
<Button variant="contained" color="success">Success</Button>`}),e.jsx(i,{title:"sx prop으로 직접 사용",description:"sx prop에서 theme 값을 직접 참조할 수 있습니다."}),e.jsx(a,{component:"pre",sx:{backgroundColor:"#f5f5f5",p:2,fontSize:12,fontFamily:"monospace",overflow:"auto"},children:`// 문자열로 참조 (권장)
<Box sx={{ backgroundColor: 'primary.main' }} />
<Box sx={{ color: 'text.secondary' }} />
<Box sx={{ borderColor: 'divider' }} />

// 함수로 참조 (복잡한 계산 필요시)
<Box sx={{ backgroundColor: (theme) => theme.palette.primary.light }} />`})]})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const theme = useTheme();
    return <>
        <DocumentTitle title="Color System" status="Available" note="Color palette and semantic color tokens" brandName="Design System" systemName="Starter Kit" version="1.0" />
        <PageContainer>
          <Typography variant="h4" sx={{
          fontWeight: 700,
          mb: 1
        }}>
            색상 시스템 개요
          </Typography>
        <Typography variant="body1" color="text.secondary" sx={{
          mb: 4
        }}>
          색상 시스템의 구조와 계층을 이해합니다.
        </Typography>

        <SectionTitle title="색상 토큰 계층 구조" />

        <TableContainer sx={{
          mb: 4
        }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{
                  fontWeight: 600
                }}>계층</TableCell>
                <TableCell sx={{
                  fontWeight: 600
                }}>설명</TableCell>
                <TableCell sx={{
                  fontWeight: 600
                }}>예시</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{
                  fontWeight: 600
                }}>Color Palette</TableCell>
                <TableCell>순수 색상값</TableCell>
                <TableCell sx={{
                  fontFamily: 'monospace',
                  fontSize: 12
                }}>blue[500], grey[100]</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                  fontWeight: 600
                }}>Semantic Tokens</TableCell>
                <TableCell>역할별 색상</TableCell>
                <TableCell sx={{
                  fontFamily: 'monospace',
                  fontSize: 12
                }}>primary.main, error.main</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                  fontWeight: 600
                }}>Component Tokens</TableCell>
                <TableCell>컴포넌트별 적용</TableCell>
                <TableCell sx={{
                  fontFamily: 'monospace',
                  fontSize: 12
                }}>Button color="primary"</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="현재 프로젝트 주요 색상" />

        <TableContainer>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell sx={{
                  fontWeight: 600,
                  width: '20%'
                }}>Primary</TableCell>
                <TableCell sx={{
                  fontFamily: 'monospace'
                }}>#0000FF</TableCell>
                <TableCell>브랜드 색상, CTA 버튼, 링크</TableCell>
                <TableCell sx={{
                  width: 40
                }}>
                  <Box sx={{
                    width: 24,
                    height: 24,
                    backgroundColor: theme.palette.primary.main
                  }} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                  fontWeight: 600
                }}>Secondary</TableCell>
                <TableCell sx={{
                  fontFamily: 'monospace'
                }}>{theme.palette.secondary.main}</TableCell>
                <TableCell>보조 액션, 비활성 요소</TableCell>
                <TableCell>
                  <Box sx={{
                    width: 24,
                    height: 24,
                    backgroundColor: theme.palette.secondary.main
                  }} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        </PageContainer>
      </>;
  }
}`,...m.parameters?.docs?.source},description:{story:"기본 - 전체 색상 시스템 개요",...m.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '1. Color Palette',
  render: () => <>
      <DocumentTitle title="Color Palette" status="Available" note="MUI default color palette" brandName="Design System" systemName="Starter Kit" version="1.0" />
      <PageContainer>
        <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          Color Palette (원시 색상)
        </Typography>
      <Typography variant="body1" color="text.secondary" sx={{
        mb: 4
      }}>
        MUI에서 제공하는 기본 색상 팔레트입니다. 이 색상들을 조합하여 테마를 구성합니다.
      </Typography>

      <Divider sx={{
        mb: 4
      }} />

      <PaletteScale name="Blue" colorObj={blue} description="Primary 색상의 기반" />
      <PaletteScale name="Blue Grey" colorObj={blueGrey} description="Secondary 색상의 기반" />
      <PaletteScale name="Grey" colorObj={grey} description="텍스트, 배경, 보더" />
      <PaletteScale name="Red" colorObj={red} description="Error 상태" />
      <PaletteScale name="Orange" colorObj={orange} description="Warning 상태" />
      <PaletteScale name="Green" colorObj={green} description="Success 상태" />
      <PaletteScale name="Light Blue" colorObj={lightBlue} description="Info 상태" />

      <SectionTitle title="명도 가이드" />

      <TableContainer>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell sx={{
                fontWeight: 600,
                width: '20%'
              }}>50-100</TableCell>
              <TableCell>매우 밝음 - 배경색</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{
                fontWeight: 600
              }}>200-300</TableCell>
              <TableCell>밝음 - hover, 보더</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{
                fontWeight: 600
              }}>400-500</TableCell>
              <TableCell>기본 - main 색상</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{
                fontWeight: 600
              }}>600-700</TableCell>
              <TableCell>어두움 - active, dark</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{
                fontWeight: 600
              }}>800-900</TableCell>
              <TableCell>매우 어두움 - 텍스트</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </PageContainer>
    </>
}`,...x.parameters?.docs?.source},description:{story:"1. Color Palette - 원시 색상",...x.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '2. Semantic Tokens',
  render: () => {
    const theme = useTheme();
    return <>
        <DocumentTitle title="Semantic Tokens" status="Available" note="Role-based semantic colors" brandName="Design System" systemName="Starter Kit" version="1.0" />
        <PageContainer>
          <Typography variant="h4" sx={{
          fontWeight: 700,
          mb: 1
        }}>
            Semantic Tokens (역할별 색상)
          </Typography>
        <Typography variant="body1" color="text.secondary" sx={{
          mb: 4
        }}>
          색상에 의미와 역할을 부여한 토큰입니다. 컴포넌트에서 이 토큰을 참조합니다.
        </Typography>

        <SectionTitle title="브랜드 색상" />

        <SemanticColorBlock name="Primary" colorObj={theme.palette.primary} description="CTA 버튼, 링크, 선택된 상태" />
        <SemanticColorBlock name="Secondary" colorObj={theme.palette.secondary} description="보조 버튼, 태그" />

        <SectionTitle title="상태 색상 (Feedback Colors)" description="사용자에게 시스템 상태를 전달하는 색상입니다." />

        <SemanticColorBlock name="Error" colorObj={theme.palette.error} description="오류, 삭제, 위험" />
        <SemanticColorBlock name="Warning" colorObj={theme.palette.warning} description="주의, 경고" />
        <SemanticColorBlock name="Success" colorObj={theme.palette.success} description="성공, 완료, 활성" />
        <SemanticColorBlock name="Info" colorObj={theme.palette.info} description="정보, 안내" />

        <SectionTitle title="텍스트 및 배경 색상" />

        <Box sx={{
          mb: 6
        }}>
          <Typography variant="h6" sx={{
            fontWeight: 600,
            mb: 0.5
          }}>Text</Typography>
          <Typography variant="body2" color="text.secondary" sx={{
            mb: 2
          }}>텍스트 색상</Typography>
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1
          }}>
            <SingleColorBlock name="primary" color={theme.palette.text.primary} description="주요 텍스트" />
            <SingleColorBlock name="secondary" color={theme.palette.text.secondary} description="보조 텍스트" />
            <SingleColorBlock name="disabled" color={theme.palette.text.disabled} description="비활성 텍스트" />
          </Box>
        </Box>

        <Box sx={{
          mb: 6
        }}>
          <Typography variant="h6" sx={{
            fontWeight: 600,
            mb: 0.5
          }}>Background</Typography>
          <Typography variant="body2" color="text.secondary" sx={{
            mb: 2
          }}>배경 색상</Typography>
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1
          }}>
            <SingleColorBlock name="default" color={theme.palette.background.default} description="페이지 배경" hasBorder />
            <SingleColorBlock name="paper" color={theme.palette.background.paper} description="카드, 모달 배경" hasBorder />
          </Box>
        </Box>
        </PageContainer>
      </>;
  }
}`,...b.parameters?.docs?.source},description:{story:"2. Semantic Tokens - 역할별 색상",...b.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '3. Usage',
  render: () => <>
      <DocumentTitle title="Color Usage" status="Available" note="Color application in components" brandName="Design System" systemName="Starter Kit" version="1.0" />
      <PageContainer>
        <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          컴포넌트 적용 예시
        </Typography>
      <Typography variant="body1" color="text.secondary" sx={{
        mb: 4
      }}>
        Semantic Token이 실제 컴포넌트에 어떻게 적용되는지 확인합니다.
      </Typography>

      <SectionTitle title="Button 컴포넌트" description="Button의 color prop에 Semantic Token 이름을 전달하면 해당 색상이 적용됩니다." />

      <Box component="pre" sx={{
        backgroundColor: '#f5f5f5',
        p: 2,
        fontSize: 12,
        fontFamily: 'monospace',
        overflow: 'auto',
        mb: 4
      }}>
        {\`<Button variant="contained" color="primary">Primary</Button>
<Button variant="contained" color="error">Error</Button>
<Button variant="contained" color="success">Success</Button>\`}
      </Box>

      <SectionTitle title="sx prop으로 직접 사용" description="sx prop에서 theme 값을 직접 참조할 수 있습니다." />

      <Box component="pre" sx={{
        backgroundColor: '#f5f5f5',
        p: 2,
        fontSize: 12,
        fontFamily: 'monospace',
        overflow: 'auto'
      }}>
        {\`// 문자열로 참조 (권장)
<Box sx={{ backgroundColor: 'primary.main' }} />
<Box sx={{ color: 'text.secondary' }} />
<Box sx={{ borderColor: 'divider' }} />

// 함수로 참조 (복잡한 계산 필요시)
<Box sx={{ backgroundColor: (theme) => theme.palette.primary.light }} />\`}
      </Box>
      </PageContainer>
    </>
}`,...h.parameters?.docs?.source},description:{story:"3. Usage - 컴포넌트에서의 활용",...h.parameters?.docs?.description}}};const Q=["Default","Palette","SemanticTokens","Usage"];export{m as Default,x as Palette,b as SemanticTokens,h as Usage,Q as __namedExportsOrder,J as default};
