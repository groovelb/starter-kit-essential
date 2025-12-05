import{j as e,Q as C,S as h,U as m,L as R}from"./iframe-q-XN_VZM.js";import{D as u,P as j,S as T}from"./SectionTitle-B-E4QVff.js";import{T as r}from"./Typography-C8IUsM00.js";import{G as g}from"./Grid-Dd6PAMTp.js";import{b as f,a as v,c as i,T as a,d as w}from"./TableRow-DxwoBvdd.js";import{T as S}from"./TableHead-CFjEf5Al.js";import{B as l}from"./Box-Dmtu8wWb.js";import{B as y}from"./Button-Coknce8O.js";import{C as c}from"./Chip-CBvZjQD4.js";import{C as B,a as W}from"./CardContent-CQT6se0_.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CDdqLoBf.js";import"./Container-q5yveaGP.js";import"./memoTheme-BW0efeYW.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isMuiElement-DpiUmZPP.js";import"./ButtonBase-JbB1eRtB.js";import"./useTimeout-C6lNLwyh.js";import"./CircularProgress-K6SSDdjw.js";import"./createSvgIcon-CvYdi5pS.js";import"./useSlot-Xw8rJOQc.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-ri-B2SDS.js";const{useGlobals:k}=__STORYBOOK_MODULE_PREVIEW_API__,te={title:"Settings/Theme Selector",parameters:{layout:"padded",docs:{description:{component:`
## 테마 선택기

프로젝트에서 사용 가능한 테마를 미리보고 선택할 수 있습니다.

### 사용 가능한 테마
- Default, Material, Flat, Glassmorphism 등 12가지 테마
- 각 테마별 고유한 색상, 그림자, 모서리 스타일
        `}}}},N=({themeName:n,isSelected:s,onSelect:t})=>{const o=m[n],d=h[n];return!o||!d?null:e.jsx(R,{theme:o,children:e.jsxs(l,{onClick:()=>t(n),sx:{cursor:"pointer",border:s?"2px solid":"1px solid",borderColor:s?"primary.main":"divider",borderRadius:o.shape?.borderRadius||0,overflow:"hidden",transition:"all 0.2s","&:hover":{borderColor:"primary.main"}},children:[e.jsx(l,{sx:{p:2,backgroundColor:o.palette?.background?.default||"#fff",minHeight:100},children:e.jsx(B,{elevation:2,children:e.jsxs(W,{sx:{p:1.5,"&:last-child":{pb:1.5}},children:[e.jsx(r,{variant:"body2",fontWeight:600,children:d.name}),e.jsx(r,{variant:"caption",color:"text.secondary",children:"Sample Card"})]})})}),e.jsxs(l,{sx:{p:1.5,backgroundColor:o.palette?.background?.paper||"#fff",borderTop:"1px solid",borderColor:"divider"},children:[e.jsx(r,{variant:"subtitle2",fontWeight:600,children:d.name}),e.jsx(r,{variant:"caption",color:"text.secondary",display:"block",children:d.description}),e.jsx(c,{label:d.mode,size:"small",sx:{mt:.5,fontSize:10}})]})]})})},x={render:()=>{const[n,s]=k(),t=n.theme||"default",o=C(),d=p=>{s({theme:p})};return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Theme Selector",status:"Available",note:"Theme selection and preview",brandName:"Design System",systemName:"Starter Kit",version:"1.0"}),e.jsxs(j,{children:[e.jsx(r,{variant:"h4",sx:{fontWeight:700,mb:1},children:"테마 선택기"}),e.jsx(r,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"테마를 선택하면 Storybook 전체에 즉시 적용됩니다."}),e.jsx(T,{title:"Available Themes",description:`총 ${o.length}개의 테마 사용 가능`}),e.jsx(g,{container:!0,spacing:2,sx:{mb:6},children:o.map(p=>e.jsx(g,{size:{xs:6,sm:4,md:3},children:e.jsx(N,{themeName:p,isSelected:t===p,onSelect:d})},p))}),e.jsx(T,{title:"Current Theme",description:`현재 선택: ${h[t]?.name||t}`}),e.jsx(f,{sx:{mb:4},children:e.jsxs(v,{size:"small",children:[e.jsx(S,{children:e.jsxs(i,{children:[e.jsx(a,{sx:{fontWeight:600,width:"30%"},children:"속성"}),e.jsx(a,{sx:{fontWeight:600},children:"값"})]})}),e.jsxs(w,{children:[e.jsxs(i,{children:[e.jsx(a,{sx:{fontWeight:600},children:"Name"}),e.jsx(a,{children:h[t]?.name})]}),e.jsxs(i,{children:[e.jsx(a,{sx:{fontWeight:600},children:"Description"}),e.jsx(a,{children:h[t]?.description})]}),e.jsxs(i,{children:[e.jsx(a,{sx:{fontWeight:600},children:"Mode"}),e.jsx(a,{children:h[t]?.mode})]}),e.jsxs(i,{children:[e.jsx(a,{sx:{fontWeight:600},children:"Primary Color"}),e.jsx(a,{children:e.jsxs(l,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(l,{sx:{width:20,height:20,backgroundColor:m[t]?.palette?.primary?.main,border:"1px solid rgba(0,0,0,0.1)"}}),e.jsx(r,{variant:"body2",sx:{fontFamily:"monospace"},children:m[t]?.palette?.primary?.main})]})})]}),e.jsxs(i,{children:[e.jsx(a,{sx:{fontWeight:600},children:"Border Radius"}),e.jsx(a,{sx:{fontFamily:"monospace"},children:m[t]?.shape?.borderRadius})]}),e.jsxs(i,{children:[e.jsx(a,{sx:{fontWeight:600},children:"Background"}),e.jsx(a,{children:e.jsxs(l,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(l,{sx:{width:20,height:20,backgroundColor:m[t]?.palette?.background?.default,border:"1px solid rgba(0,0,0,0.1)"}}),e.jsx(r,{variant:"body2",sx:{fontFamily:"monospace"},children:m[t]?.palette?.background?.default})]})})]})]})]})}),e.jsx(T,{title:"Component Preview",description:"현재 적용된 테마로 컴포넌트 미리보기"}),e.jsxs(l,{sx:{p:4,backgroundColor:"background.default",borderRadius:1,border:"1px solid",borderColor:"divider"},children:[e.jsx(r,{variant:"h5",gutterBottom:!0,children:"Typography Preview"}),e.jsx(r,{variant:"body1",paragraph:!0,children:"이 텍스트는 body1 스타일입니다. 테마의 기본 폰트와 색상을 확인하세요."}),e.jsx(r,{variant:"body2",color:"text.secondary",paragraph:!0,children:"이 텍스트는 body2 스타일입니다. Secondary 색상이 적용됩니다."}),e.jsxs(l,{sx:{display:"flex",gap:1,mb:3},children:[e.jsx(y,{variant:"contained",children:"Contained"}),e.jsx(y,{variant:"outlined",children:"Outlined"}),e.jsx(y,{variant:"text",children:"Text"})]}),e.jsxs(l,{sx:{display:"flex",gap:1,mb:3},children:[e.jsx(c,{label:"Default"}),e.jsx(c,{label:"Primary",color:"primary"}),e.jsx(c,{label:"Success",color:"success"}),e.jsx(c,{label:"Error",color:"error"})]}),e.jsx(B,{elevation:2,children:e.jsxs(W,{children:[e.jsx(r,{variant:"h6",children:"Card Component"}),e.jsx(r,{variant:"body2",color:"text.secondary",children:"이 카드는 테마의 그림자와 모서리 스타일을 보여줍니다."})]})})]})]})]})}},b={render:()=>{const n=C();return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Theme List",status:"Available",note:"Available themes list",brandName:"Design System",systemName:"Starter Kit",version:"1.0"}),e.jsxs(j,{children:[e.jsx(r,{variant:"h4",sx:{fontWeight:700,mb:1},children:"테마 목록"}),e.jsx(r,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"프로젝트에서 사용 가능한 모든 테마 정보입니다."}),e.jsx(T,{title:"All Themes",description:`총 ${n.length}개`}),e.jsx(f,{children:e.jsxs(v,{children:[e.jsx(S,{children:e.jsxs(i,{children:[e.jsx(a,{sx:{fontWeight:600,width:"15%"},children:"Key"}),e.jsx(a,{sx:{fontWeight:600,width:"15%"},children:"Name"}),e.jsx(a,{sx:{fontWeight:600,width:"10%"},children:"Mode"}),e.jsx(a,{sx:{fontWeight:600},children:"Description"}),e.jsx(a,{sx:{fontWeight:600,width:"15%"},children:"Primary"})]})}),e.jsx(w,{children:n.map(s=>{const t=h[s],o=m[s];return e.jsxs(i,{children:[e.jsx(a,{sx:{fontFamily:"monospace",fontSize:12},children:s}),e.jsx(a,{sx:{fontWeight:600},children:t?.name}),e.jsx(a,{children:e.jsx(c,{label:t?.mode,size:"small",color:t?.mode==="dark"?"default":"primary",variant:"outlined",sx:{fontSize:10}})}),e.jsx(a,{sx:{color:"text.secondary",fontSize:13},children:t?.description}),e.jsx(a,{children:e.jsxs(l,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(l,{sx:{width:16,height:16,backgroundColor:o?.palette?.primary?.main,border:"1px solid rgba(0,0,0,0.1)"}}),e.jsx(r,{variant:"caption",sx:{fontFamily:"monospace"},children:o?.palette?.primary?.main})]})})]},s)})})]})})]})]})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [globals, updateGlobals] = useGlobals();
    const selectedTheme = globals.theme || 'default';
    const themeNames = getThemeNames();
    const handleThemeSelect = themeName => {
      updateGlobals({
        theme: themeName
      });
    };
    return <>
        <DocumentTitle title="Theme Selector" status="Available" note="Theme selection and preview" brandName="Design System" systemName="Starter Kit" version="1.0" />
        <PageContainer>
          <Typography variant="h4" sx={{
          fontWeight: 700,
          mb: 1
        }}>
            테마 선택기
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{
          mb: 4
        }}>
            테마를 선택하면 Storybook 전체에 즉시 적용됩니다.
          </Typography>

          <SectionTitle title="Available Themes" description={\`총 \${themeNames.length}개의 테마 사용 가능\`} />

          <Grid container spacing={2} sx={{
          mb: 6
        }}>
            {themeNames.map(name => <Grid key={name} size={{
            xs: 6,
            sm: 4,
            md: 3
          }}>
                <ThemePreview themeName={name} isSelected={selectedTheme === name} onSelect={handleThemeSelect} />
              </Grid>)}
          </Grid>

          <SectionTitle title="Current Theme" description={\`현재 선택: \${themeMeta[selectedTheme]?.name || selectedTheme}\`} />

          <TableContainer sx={{
          mb: 4
        }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{
                  fontWeight: 600,
                  width: '30%'
                }}>속성</TableCell>
                  <TableCell sx={{
                  fontWeight: 600
                }}>값</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{
                  fontWeight: 600
                }}>Name</TableCell>
                  <TableCell>{themeMeta[selectedTheme]?.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{
                  fontWeight: 600
                }}>Description</TableCell>
                  <TableCell>{themeMeta[selectedTheme]?.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{
                  fontWeight: 600
                }}>Mode</TableCell>
                  <TableCell>{themeMeta[selectedTheme]?.mode}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{
                  fontWeight: 600
                }}>Primary Color</TableCell>
                  <TableCell>
                    <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}>
                      <Box sx={{
                      width: 20,
                      height: 20,
                      backgroundColor: themes[selectedTheme]?.palette?.primary?.main,
                      border: '1px solid rgba(0,0,0,0.1)'
                    }} />
                      <Typography variant="body2" sx={{
                      fontFamily: 'monospace'
                    }}>
                        {themes[selectedTheme]?.palette?.primary?.main}
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{
                  fontWeight: 600
                }}>Border Radius</TableCell>
                  <TableCell sx={{
                  fontFamily: 'monospace'
                }}>
                    {themes[selectedTheme]?.shape?.borderRadius}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{
                  fontWeight: 600
                }}>Background</TableCell>
                  <TableCell>
                    <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}>
                      <Box sx={{
                      width: 20,
                      height: 20,
                      backgroundColor: themes[selectedTheme]?.palette?.background?.default,
                      border: '1px solid rgba(0,0,0,0.1)'
                    }} />
                      <Typography variant="body2" sx={{
                      fontFamily: 'monospace'
                    }}>
                        {themes[selectedTheme]?.palette?.background?.default}
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <SectionTitle title="Component Preview" description="현재 적용된 테마로 컴포넌트 미리보기" />

          <Box sx={{
          p: 4,
          backgroundColor: 'background.default',
          borderRadius: 1,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <Typography variant="h5" gutterBottom>
              Typography Preview
            </Typography>
            <Typography variant="body1" paragraph>
              이 텍스트는 body1 스타일입니다. 테마의 기본 폰트와 색상을 확인하세요.
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              이 텍스트는 body2 스타일입니다. Secondary 색상이 적용됩니다.
            </Typography>

            <Box sx={{
            display: 'flex',
            gap: 1,
            mb: 3
          }}>
              <Button variant="contained">Contained</Button>
              <Button variant="outlined">Outlined</Button>
              <Button variant="text">Text</Button>
            </Box>

            <Box sx={{
            display: 'flex',
            gap: 1,
            mb: 3
          }}>
              <Chip label="Default" />
              <Chip label="Primary" color="primary" />
              <Chip label="Success" color="success" />
              <Chip label="Error" color="error" />
            </Box>

            <Card elevation={2}>
              <CardContent>
                <Typography variant="h6">Card Component</Typography>
                <Typography variant="body2" color="text.secondary">
                  이 카드는 테마의 그림자와 모서리 스타일을 보여줍니다.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </PageContainer>
      </>;
  }
}`,...x.parameters?.docs?.source},description:{story:"테마 선택기 - Storybook 전역 테마 변경",...x.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const themeNames = getThemeNames();
    return <>
        <DocumentTitle title="Theme List" status="Available" note="Available themes list" brandName="Design System" systemName="Starter Kit" version="1.0" />
        <PageContainer>
          <Typography variant="h4" sx={{
          fontWeight: 700,
          mb: 1
        }}>
            테마 목록
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{
          mb: 4
        }}>
            프로젝트에서 사용 가능한 모든 테마 정보입니다.
          </Typography>

          <SectionTitle title="All Themes" description={\`총 \${themeNames.length}개\`} />

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{
                  fontWeight: 600,
                  width: '15%'
                }}>Key</TableCell>
                  <TableCell sx={{
                  fontWeight: 600,
                  width: '15%'
                }}>Name</TableCell>
                  <TableCell sx={{
                  fontWeight: 600,
                  width: '10%'
                }}>Mode</TableCell>
                  <TableCell sx={{
                  fontWeight: 600
                }}>Description</TableCell>
                  <TableCell sx={{
                  fontWeight: 600,
                  width: '15%'
                }}>Primary</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {themeNames.map(name => {
                const meta = themeMeta[name];
                const theme = themes[name];
                return <TableRow key={name}>
                      <TableCell sx={{
                    fontFamily: 'monospace',
                    fontSize: 12
                  }}>
                        {name}
                      </TableCell>
                      <TableCell sx={{
                    fontWeight: 600
                  }}>
                        {meta?.name}
                      </TableCell>
                      <TableCell>
                        <Chip label={meta?.mode} size="small" color={meta?.mode === 'dark' ? 'default' : 'primary'} variant="outlined" sx={{
                      fontSize: 10
                    }} />
                      </TableCell>
                      <TableCell sx={{
                    color: 'text.secondary',
                    fontSize: 13
                  }}>
                        {meta?.description}
                      </TableCell>
                      <TableCell>
                        <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}>
                          <Box sx={{
                        width: 16,
                        height: 16,
                        backgroundColor: theme?.palette?.primary?.main,
                        border: '1px solid rgba(0,0,0,0.1)'
                      }} />
                          <Typography variant="caption" sx={{
                        fontFamily: 'monospace'
                      }}>
                            {theme?.palette?.primary?.main}
                          </Typography>
                        </Box>
                      </TableCell>
                    </TableRow>;
              })}
              </TableBody>
            </Table>
          </TableContainer>
        </PageContainer>
      </>;
  }
}`,...b.parameters?.docs?.source},description:{story:"테마 목록",...b.parameters?.docs?.description}}};const re=["Default","ThemeList"];export{x as Default,b as ThemeList,re as __namedExportsOrder,te as default};
