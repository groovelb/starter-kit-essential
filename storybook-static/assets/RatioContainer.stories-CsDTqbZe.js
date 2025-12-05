import{j as e}from"./iframe-q-XN_VZM.js";import{D as k,P as G,S as l}from"./SectionTitle-B-E4QVff.js";import{B as n}from"./Box-Dmtu8wWb.js";import{T as o}from"./Typography-C8IUsM00.js";import{b as S,a as W,c as r,T as t,d as z}from"./TableRow-DxwoBvdd.js";import{T as F}from"./TableHead-CFjEf5Al.js";import{G as a}from"./Grid-Dd6PAMTp.js";import{S as B}from"./Stack-BQqDyOBu.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CDdqLoBf.js";import"./Container-q5yveaGP.js";import"./memoTheme-BW0efeYW.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isMuiElement-DpiUmZPP.js";const p=1.618033988749895;function i({children:g,ratio:s="16:9",maxWidth:y,minHeight:C,isContained:u=!0,align:T="center",justify:f="center",background:j,sx:R,...v}){const w=()=>{if(typeof s=="number")return s;const m={phi:p,"phi-vertical":1/p,square:1,golden:p};if(m[s])return m[s];if(typeof s=="string"&&s.includes(":")){const[b,x]=s.split(":").map(Number);if(!isNaN(b)&&!isNaN(x)&&x!==0)return b/x}return 1.7777777777777777},h={center:"center",start:"flex-start",end:"flex-end",stretch:"stretch"};return e.jsx(n,{sx:{position:"relative",width:"100%",maxWidth:y,minHeight:C,aspectRatio:w(),overflow:u?"hidden":"visible",display:"flex",alignItems:h[T]||"center",justifyContent:h[f]||"center",background:j,"& > img, & > video":{width:"100%",height:"100%",objectFit:"cover"},...R},...v,children:g})}i.__docgenInfo={description:`RatioContainer 컴포넌트

고정된 종횡비를 유지하는 컨테이너 컴포넌트.
CSS aspect-ratio 속성을 활용하여 16:9, 4:3, 1:1, 황금비율 등 다양한 비율을 지원한다.

동작 방식:
1. ratio prop에 따라 컨테이너의 종횡비가 설정됨
2. 컨테이너 너비가 변해도 비율이 유지됨
3. children은 컨테이너 내부에 align prop에 따라 배치됨
4. contain이 true면 overflow: hidden 적용

Props:
@param {ReactNode} children - 컨테이너 내용 [Required]
@param {string|number} ratio - 비율 ('16:9' | '4:3' | '1:1' | '3:2' | '21:9' | 'phi' | 'phi-vertical' | number) [Optional, 기본값: '16:9']
@param {string} maxWidth - 최대 너비 [Optional]
@param {string} minHeight - 최소 높이 [Optional]
@param {boolean} isContained - 내용이 컨테이너를 넘지 않도록 overflow hidden [Optional, 기본값: true]
@param {string} align - 내용 정렬 ('center' | 'start' | 'end' | 'stretch') [Optional, 기본값: 'center']
@param {string} justify - 수평 정렬 ('center' | 'start' | 'end' | 'stretch') [Optional, 기본값: 'center']
@param {string} background - 배경색 또는 그라데이션 [Optional]
@param {object} sx - 추가 스타일 오버라이드 [Optional]

Example usage:
<RatioContainer ratio="16:9">
  <img src="hero.jpg" alt="Hero" />
</RatioContainer>
<RatioContainer ratio="phi" align="center">
  <Typography>Golden Ratio Container</Typography>
</RatioContainer>`,methods:[],displayName:"RatioContainer",props:{ratio:{defaultValue:{value:"'16:9'",computed:!1},required:!1},isContained:{defaultValue:{value:"true",computed:!1},required:!1},align:{defaultValue:{value:"'center'",computed:!1},required:!1},justify:{defaultValue:{value:"'center'",computed:!1},required:!1}}};const J={title:"Custom Component/Layout/RatioContainer",component:i,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
## RatioContainer

고정된 종횡비를 유지하는 컨테이너 컴포넌트.

### 용도
- 16:9, 4:3 등 고정 비율 미디어 컨테이너
- 황금비율 기반 레이아웃 영역
- 일관된 카드/썸네일 비율 유지
        `}}},argTypes:{ratio:{control:"select",options:["16:9","4:3","1:1","3:2","21:9","phi","phi-vertical"],description:"종횡비"},isContained:{control:"boolean",description:"overflow hidden 적용"},align:{control:"select",options:["center","start","end","stretch"],description:"수직 정렬"},justify:{control:"select",options:["center","start","end","stretch"],description:"수평 정렬"}}},c={args:{ratio:"16:9",isContained:!0,align:"center",justify:"center",children:e.jsx(o,{variant:"h5",sx:{color:"white"},children:"16:9 Ratio"}),background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}},d={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(k,{title:"RatioContainer",status:"Available",note:"Fixed aspect ratio container component",brandName:"Layout",systemName:"Starter Kit",version:"1.0"}),e.jsxs(G,{children:[e.jsx(o,{variant:"h4",sx:{fontWeight:700,mb:1},children:"RatioContainer"}),e.jsx(o,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"CSS aspect-ratio를 활용하여 고정된 종횡비를 유지하는 컨테이너입니다. 16:9, 4:3, 황금비율 등 다양한 비율을 지원합니다."}),e.jsx(l,{title:"Props",description:"RatioContainer 컴포넌트의 Props 목록입니다."}),e.jsx(S,{children:e.jsxs(W,{size:"small",children:[e.jsx(F,{children:e.jsxs(r,{children:[e.jsx(t,{sx:{fontWeight:600},children:"Prop"}),e.jsx(t,{sx:{fontWeight:600},children:"Type"}),e.jsx(t,{sx:{fontWeight:600},children:"Default"}),e.jsx(t,{sx:{fontWeight:600},children:"Description"})]})}),e.jsxs(z,{children:[e.jsxs(r,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"ratio"}),e.jsx(t,{children:"string | number"}),e.jsx(t,{children:"'16:9'"}),e.jsx(t,{children:"종횡비 (예: '16:9', 'phi', 1.5)"})]}),e.jsxs(r,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"maxWidth"}),e.jsx(t,{children:"string"}),e.jsx(t,{children:"-"}),e.jsx(t,{children:"최대 너비"})]}),e.jsxs(r,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"minHeight"}),e.jsx(t,{children:"string"}),e.jsx(t,{children:"-"}),e.jsx(t,{children:"최소 높이"})]}),e.jsxs(r,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"isContained"}),e.jsx(t,{children:"boolean"}),e.jsx(t,{children:"true"}),e.jsx(t,{children:"overflow hidden 적용 여부"})]}),e.jsxs(r,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"align"}),e.jsx(t,{children:"'center' | 'start' | 'end' | 'stretch'"}),e.jsx(t,{children:"'center'"}),e.jsx(t,{children:"수직 정렬"})]}),e.jsxs(r,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"justify"}),e.jsx(t,{children:"'center' | 'start' | 'end' | 'stretch'"}),e.jsx(t,{children:"'center'"}),e.jsx(t,{children:"수평 정렬"})]}),e.jsxs(r,{children:[e.jsx(t,{sx:{fontFamily:"monospace"},children:"background"}),e.jsx(t,{children:"string"}),e.jsx(t,{children:"-"}),e.jsx(t,{children:"배경색 또는 그라데이션"})]})]})]})}),e.jsx(l,{title:"Standard Ratios",description:"자주 사용되는 표준 비율입니다."}),e.jsxs(a,{container:!0,spacing:3,children:[e.jsxs(a,{size:{xs:12,md:6},children:[e.jsx(o,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:"16:9 - 영상, 와이드스크린"}),e.jsx(i,{ratio:"16:9",background:"#1a1a2e",children:e.jsx(o,{sx:{color:"white"},children:"16:9"})})]}),e.jsxs(a,{size:{xs:12,md:6},children:[e.jsx(o,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:"4:3 - 클래식, 문서"}),e.jsx(i,{ratio:"4:3",background:"#16213e",children:e.jsx(o,{sx:{color:"white"},children:"4:3"})})]}),e.jsxs(a,{size:{xs:12,md:6},children:[e.jsx(o,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:"1:1 - 정사각형, 프로필"}),e.jsx(i,{ratio:"1:1",background:"#0f3460",maxWidth:"300px",children:e.jsx(o,{sx:{color:"white"},children:"1:1"})})]}),e.jsxs(a,{size:{xs:12,md:6},children:[e.jsx(o,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:"21:9 - 울트라와이드, 시네마"}),e.jsx(i,{ratio:"21:9",background:"#533483",children:e.jsx(o,{sx:{color:"white"},children:"21:9"})})]})]}),e.jsx(l,{title:"Golden Ratio (황금비율)",description:`PHI = ${p.toFixed(6)} (약 1.618:1)`}),e.jsxs(B,{spacing:4,children:[e.jsxs(n,{children:[e.jsx(o,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:"phi - 가로로 긴 황금비율 (1.618:1)"}),e.jsx(i,{ratio:"phi",background:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",children:e.jsx(o,{sx:{color:"white",fontWeight:600},children:"φ (Golden Ratio)"})})]}),e.jsxs(n,{children:[e.jsx(o,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:"phi-vertical - 세로로 긴 황금비율 (1:1.618)"}),e.jsx(i,{ratio:"phi-vertical",background:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",maxWidth:"400px",children:e.jsx(o,{sx:{color:"white",fontWeight:600},children:"1/φ (Vertical Golden)"})})]})]}),e.jsx(l,{title:"With Images",description:"이미지와 함께 사용하면 일관된 비율을 유지합니다."}),e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{size:{xs:12,md:4},children:e.jsx(i,{ratio:"1:1",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",alt:"Mountain"})})}),e.jsx(a,{size:{xs:12,md:4},children:e.jsx(i,{ratio:"1:1",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop",alt:"Forest"})})}),e.jsx(a,{size:{xs:12,md:4},children:e.jsx(i,{ratio:"1:1",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=400&fit=crop",alt:"Nature"})})})]}),e.jsx(l,{title:"Alignment Options",description:"내부 콘텐츠의 정렬 옵션입니다."}),e.jsxs(a,{container:!0,spacing:3,children:[e.jsxs(a,{size:{xs:12,md:4},children:[e.jsx(o,{variant:"caption",sx:{mb:1,display:"block",color:"text.secondary"},children:'align="start", justify="start"'}),e.jsx(i,{ratio:"16:9",align:"start",justify:"start",background:"#f5f5f5",sx:{border:"1px solid",borderColor:"divider"},children:e.jsx(n,{sx:{p:2,backgroundColor:"primary.main",color:"white"},children:"Top Left"})})]}),e.jsxs(a,{size:{xs:12,md:4},children:[e.jsx(o,{variant:"caption",sx:{mb:1,display:"block",color:"text.secondary"},children:'align="center", justify="center"'}),e.jsx(i,{ratio:"16:9",align:"center",justify:"center",background:"#f5f5f5",sx:{border:"1px solid",borderColor:"divider"},children:e.jsx(n,{sx:{p:2,backgroundColor:"primary.main",color:"white"},children:"Center"})})]}),e.jsxs(a,{size:{xs:12,md:4},children:[e.jsx(o,{variant:"caption",sx:{mb:1,display:"block",color:"text.secondary"},children:'align="end", justify="end"'}),e.jsx(i,{ratio:"16:9",align:"end",justify:"end",background:"#f5f5f5",sx:{border:"1px solid",borderColor:"divider"},children:e.jsx(n,{sx:{p:2,backgroundColor:"primary.main",color:"white"},children:"Bottom Right"})})]})]}),e.jsx(l,{title:"Custom Numeric Ratio",description:"숫자로 직접 비율을 지정할 수 있습니다."}),e.jsxs(n,{sx:{maxWidth:500},children:[e.jsxs(o,{variant:"caption",sx:{mb:1,display:"block",color:"text.secondary"},children:["ratio=",2.35," (Cinemascope 2.35:1)"]}),e.jsx(i,{ratio:2.35,background:"linear-gradient(90deg, #000 0%, #333 50%, #000 100%)",children:e.jsx(o,{sx:{color:"white",letterSpacing:4},children:"CINEMASCOPE"})})]}),e.jsx(l,{title:"Usage Example",description:"코드 사용 예시입니다."}),e.jsx(n,{component:"pre",sx:{backgroundColor:"grey.100",p:3,fontSize:13,fontFamily:"monospace",overflow:"auto",lineHeight:1.6},children:`// 기본 16:9 비율
<RatioContainer ratio="16:9">
  <img src="hero.jpg" alt="Hero" />
</RatioContainer>

// 황금비율 컨테이너
<RatioContainer ratio="phi" background="#f0f0f0">
  <Typography>Golden Ratio Content</Typography>
</RatioContainer>

// 정렬과 최대 너비 지정
<RatioContainer
  ratio="1:1"
  maxWidth="300px"
  align="center"
  justify="center"
>
  <Avatar src="profile.jpg" />
</RatioContainer>

// 숫자로 커스텀 비율
<RatioContainer ratio={2.35}>
  <CinemaScopeContent />
</RatioContainer>`})]})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ratio: '16:9',
    isContained: true,
    align: 'center',
    justify: 'center',
    children: <Typography variant="h5" sx={{
      color: 'white'
    }}>
        16:9 Ratio
      </Typography>,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  }
}`,...c.parameters?.docs?.source},description:{story:"기본 사용",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <DocumentTitle title="RatioContainer" status="Available" note="Fixed aspect ratio container component" brandName="Layout" systemName="Starter Kit" version="1.0" />
      <PageContainer>
        <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          RatioContainer
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{
        mb: 4
      }}>
          CSS aspect-ratio를 활용하여 고정된 종횡비를 유지하는 컨테이너입니다.
          16:9, 4:3, 황금비율 등 다양한 비율을 지원합니다.
        </Typography>

        <SectionTitle title="Props" description="RatioContainer 컴포넌트의 Props 목록입니다." />
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
              }}>ratio</TableCell>
                <TableCell>string | number</TableCell>
                <TableCell>&apos;16:9&apos;</TableCell>
                <TableCell>종횡비 (예: &apos;16:9&apos;, &apos;phi&apos;, 1.5)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>maxWidth</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>최대 너비</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>minHeight</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>최소 높이</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>isContained</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>true</TableCell>
                <TableCell>overflow hidden 적용 여부</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>align</TableCell>
                <TableCell>&apos;center&apos; | &apos;start&apos; | &apos;end&apos; | &apos;stretch&apos;</TableCell>
                <TableCell>&apos;center&apos;</TableCell>
                <TableCell>수직 정렬</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>justify</TableCell>
                <TableCell>&apos;center&apos; | &apos;start&apos; | &apos;end&apos; | &apos;stretch&apos;</TableCell>
                <TableCell>&apos;center&apos;</TableCell>
                <TableCell>수평 정렬</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>background</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>배경색 또는 그라데이션</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="Standard Ratios" description="자주 사용되는 표준 비율입니다." />
        <Grid container spacing={3}>
          <Grid size={{
          xs: 12,
          md: 6
        }}>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              16:9 - 영상, 와이드스크린
            </Typography>
            <RatioContainer ratio="16:9" background="#1a1a2e">
              <Typography sx={{
              color: 'white'
            }}>16:9</Typography>
            </RatioContainer>
          </Grid>
          <Grid size={{
          xs: 12,
          md: 6
        }}>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              4:3 - 클래식, 문서
            </Typography>
            <RatioContainer ratio="4:3" background="#16213e">
              <Typography sx={{
              color: 'white'
            }}>4:3</Typography>
            </RatioContainer>
          </Grid>
          <Grid size={{
          xs: 12,
          md: 6
        }}>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              1:1 - 정사각형, 프로필
            </Typography>
            <RatioContainer ratio="1:1" background="#0f3460" maxWidth="300px">
              <Typography sx={{
              color: 'white'
            }}>1:1</Typography>
            </RatioContainer>
          </Grid>
          <Grid size={{
          xs: 12,
          md: 6
        }}>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              21:9 - 울트라와이드, 시네마
            </Typography>
            <RatioContainer ratio="21:9" background="#533483">
              <Typography sx={{
              color: 'white'
            }}>21:9</Typography>
            </RatioContainer>
          </Grid>
        </Grid>

        <SectionTitle title="Golden Ratio (황금비율)" description={\`PHI = \${PHI.toFixed(6)} (약 1.618:1)\`} />
        <Stack spacing={4}>
          <Box>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              phi - 가로로 긴 황금비율 (1.618:1)
            </Typography>
            <RatioContainer ratio="phi" background="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)">
              <Typography sx={{
              color: 'white',
              fontWeight: 600
            }}>
                φ (Golden Ratio)
              </Typography>
            </RatioContainer>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              phi-vertical - 세로로 긴 황금비율 (1:1.618)
            </Typography>
            <RatioContainer ratio="phi-vertical" background="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" maxWidth="400px">
              <Typography sx={{
              color: 'white',
              fontWeight: 600
            }}>
                1/φ (Vertical Golden)
              </Typography>
            </RatioContainer>
          </Box>
        </Stack>

        <SectionTitle title="With Images" description="이미지와 함께 사용하면 일관된 비율을 유지합니다." />
        <Grid container spacing={3}>
          <Grid size={{
          xs: 12,
          md: 4
        }}>
            <RatioContainer ratio="1:1">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop" alt="Mountain" />
            </RatioContainer>
          </Grid>
          <Grid size={{
          xs: 12,
          md: 4
        }}>
            <RatioContainer ratio="1:1">
              <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop" alt="Forest" />
            </RatioContainer>
          </Grid>
          <Grid size={{
          xs: 12,
          md: 4
        }}>
            <RatioContainer ratio="1:1">
              <img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=400&fit=crop" alt="Nature" />
            </RatioContainer>
          </Grid>
        </Grid>

        <SectionTitle title="Alignment Options" description="내부 콘텐츠의 정렬 옵션입니다." />
        <Grid container spacing={3}>
          <Grid size={{
          xs: 12,
          md: 4
        }}>
            <Typography variant="caption" sx={{
            mb: 1,
            display: 'block',
            color: 'text.secondary'
          }}>
              align=&quot;start&quot;, justify=&quot;start&quot;
            </Typography>
            <RatioContainer ratio="16:9" align="start" justify="start" background="#f5f5f5" sx={{
            border: '1px solid',
            borderColor: 'divider'
          }}>
              <Box sx={{
              p: 2,
              backgroundColor: 'primary.main',
              color: 'white'
            }}>
                Top Left
              </Box>
            </RatioContainer>
          </Grid>
          <Grid size={{
          xs: 12,
          md: 4
        }}>
            <Typography variant="caption" sx={{
            mb: 1,
            display: 'block',
            color: 'text.secondary'
          }}>
              align=&quot;center&quot;, justify=&quot;center&quot;
            </Typography>
            <RatioContainer ratio="16:9" align="center" justify="center" background="#f5f5f5" sx={{
            border: '1px solid',
            borderColor: 'divider'
          }}>
              <Box sx={{
              p: 2,
              backgroundColor: 'primary.main',
              color: 'white'
            }}>
                Center
              </Box>
            </RatioContainer>
          </Grid>
          <Grid size={{
          xs: 12,
          md: 4
        }}>
            <Typography variant="caption" sx={{
            mb: 1,
            display: 'block',
            color: 'text.secondary'
          }}>
              align=&quot;end&quot;, justify=&quot;end&quot;
            </Typography>
            <RatioContainer ratio="16:9" align="end" justify="end" background="#f5f5f5" sx={{
            border: '1px solid',
            borderColor: 'divider'
          }}>
              <Box sx={{
              p: 2,
              backgroundColor: 'primary.main',
              color: 'white'
            }}>
                Bottom Right
              </Box>
            </RatioContainer>
          </Grid>
        </Grid>

        <SectionTitle title="Custom Numeric Ratio" description="숫자로 직접 비율을 지정할 수 있습니다." />
        <Box sx={{
        maxWidth: 500
      }}>
          <Typography variant="caption" sx={{
          mb: 1,
          display: 'block',
          color: 'text.secondary'
        }}>
            ratio={2.35} (Cinemascope 2.35:1)
          </Typography>
          <RatioContainer ratio={2.35} background="linear-gradient(90deg, #000 0%, #333 50%, #000 100%)">
            <Typography sx={{
            color: 'white',
            letterSpacing: 4
          }}>CINEMASCOPE</Typography>
          </RatioContainer>
        </Box>

        <SectionTitle title="Usage Example" description="코드 사용 예시입니다." />
        <Box component="pre" sx={{
        backgroundColor: 'grey.100',
        p: 3,
        fontSize: 13,
        fontFamily: 'monospace',
        overflow: 'auto',
        lineHeight: 1.6
      }}>
          {\`// 기본 16:9 비율
<RatioContainer ratio="16:9">
  <img src="hero.jpg" alt="Hero" />
</RatioContainer>

// 황금비율 컨테이너
<RatioContainer ratio="phi" background="#f0f0f0">
  <Typography>Golden Ratio Content</Typography>
</RatioContainer>

// 정렬과 최대 너비 지정
<RatioContainer
  ratio="1:1"
  maxWidth="300px"
  align="center"
  justify="center"
>
  <Avatar src="profile.jpg" />
</RatioContainer>

// 숫자로 커스텀 비율
<RatioContainer ratio={2.35}>
  <CinemaScopeContent />
</RatioContainer>\`}
        </Box>
      </PageContainer>
    </>
}`,...d.parameters?.docs?.source},description:{story:"문서 및 데모",...d.parameters?.docs?.description}}};const Q=["Default","Documentation"];export{c as Default,d as Documentation,Q as __namedExportsOrder,J as default};
