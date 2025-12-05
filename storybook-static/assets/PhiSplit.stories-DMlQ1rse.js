import{j as e}from"./iframe-q-XN_VZM.js";import{D as N,P as M,S as x}from"./SectionTitle-B-E4QVff.js";import{B as r}from"./Box-Dmtu8wWb.js";import{T as a}from"./Typography-C8IUsM00.js";import{S as T}from"./Stack-BQqDyOBu.js";import{b as z,a as E,c as t,T as o,d as L}from"./TableRow-DxwoBvdd.js";import{T as O}from"./TableHead-CFjEf5Al.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CDdqLoBf.js";import"./Container-q5yveaGP.js";import"./memoTheme-BW0efeYW.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./Grid-Dd6PAMTp.js";import"./isMuiElement-DpiUmZPP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const d=1.618033988749895;function s({primary:p,secondary:b,direction:l="row",isReversed:n=!1,gap:P=0,stackAt:g="sm",minHeight:k,primarySx:j,secondarySx:C,sx:R,...B}){const f=d/(d+1),v=1/(d+1),w=()=>g==="none"?l:{xs:{xs:"column",sm:l,md:l,lg:l,xl:l},sm:{xs:"column",sm:"column",md:l,lg:l,xl:l},md:{xs:"column",sm:"column",md:"column",lg:l,xl:l},lg:{xs:"column",sm:"column",md:"column",lg:"column",xl:l}}[g]||l,S=u=>{if(g==="none")return`0 0 ${u*100}%`;const i="0 0 auto",m=`0 0 ${u*100}%`;return{xs:{xs:i,sm:m},sm:{xs:i,sm:i,md:m},md:{xs:i,sm:i,md:i,lg:m},lg:{xs:i,sm:i,md:i,lg:i,xl:m}}[g]||m},D=n?b:p,H=n?p:b,F=n?v:f,W=n?f:v,A=n?C:j,I=n?j:C;return e.jsxs(r,{sx:{display:"flex",flexDirection:w(),gap:P,minHeight:k,width:"100%",...R},...B,children:[e.jsx(r,{sx:{flex:S(F),minWidth:0,...A},children:D}),e.jsx(r,{sx:{flex:S(W),minWidth:0,...I},children:H})]})}s.__docgenInfo={description:`PhiSplit 컴포넌트

황금비율(φ = 1.618)을 기반으로 두 영역을 분할하는 레이아웃 컴포넌트.
CSS Flexbox를 활용하여 약 61.8% : 38.2% 비율로 콘텐츠를 배치한다.

동작 방식:
1. direction prop에 따라 가로(row) 또는 세로(column) 분할 결정
2. primary와 secondary 영역이 황금비율로 배치됨
3. reversed가 true면 비율이 반전되어 작은 영역이 먼저 옴
4. 반응형 브레이크포인트에서 자동으로 스택 레이아웃으로 전환

Props:
@param {ReactNode} primary - 황금비율의 큰 영역에 배치될 콘텐츠 [Required]
@param {ReactNode} secondary - 황금비율의 작은 영역에 배치될 콘텐츠 [Required]
@param {string} direction - 분할 방향 ('row' | 'column') [Optional, 기본값: 'row']
@param {boolean} isReversed - 비율 반전 (작은 영역이 먼저) [Optional, 기본값: false]
@param {number} gap - 영역 간 간격 (theme spacing 단위) [Optional, 기본값: 0]
@param {string} stackAt - 스택으로 전환되는 브레이크포인트 ('xs' | 'sm' | 'md' | 'lg' | 'none') [Optional, 기본값: 'sm']
@param {string} minHeight - 컨테이너 최소 높이 [Optional]
@param {object} primarySx - primary 영역 추가 스타일 [Optional]
@param {object} secondarySx - secondary 영역 추가 스타일 [Optional]
@param {object} sx - 컨테이너 추가 스타일 [Optional]

Example usage:
<PhiSplit
  primary={<HeroImage />}
  secondary={<HeroText />}
  gap={4}
/>
<PhiSplit
  direction="column"
  isReversed
  primary={<MainContent />}
  secondary={<Sidebar />}
/>`,methods:[],displayName:"PhiSplit",props:{direction:{defaultValue:{value:"'row'",computed:!1},required:!1},isReversed:{defaultValue:{value:"false",computed:!1},required:!1},gap:{defaultValue:{value:"0",computed:!1},required:!1},stackAt:{defaultValue:{value:"'sm'",computed:!1},required:!1}}};const ie={title:"Custom Component/Layout/PhiSplit",component:s,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
## PhiSplit

황금비율(φ = 1.618)을 기반으로 두 영역을 분할하는 레이아웃 컴포넌트.

### 용도
- Hero 섹션의 이미지/텍스트 분할
- 사이드바와 메인 콘텐츠 레이아웃
- 시각적으로 균형 잡힌 2분할 레이아웃
        `}}},argTypes:{direction:{control:"select",options:["row","column"],description:"분할 방향"},isReversed:{control:"boolean",description:"비율 반전"},gap:{control:{type:"range",min:0,max:8},description:"영역 간 간격"},stackAt:{control:"select",options:["xs","sm","md","lg","none"],description:"스택 전환 브레이크포인트"}}},c=({children:p,color:b="primary.main",height:l=200,...n})=>e.jsx(r,{sx:{height:l,backgroundColor:b,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:600,fontSize:18,p:3},...n,children:p}),h={args:{direction:"row",isReversed:!1,gap:2,stackAt:"sm"},render:p=>e.jsx(s,{...p,primary:e.jsx(c,{color:"#667eea",children:"Primary (61.8%)"}),secondary:e.jsx(c,{color:"#764ba2",children:"Secondary (38.2%)"})})},y={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(N,{title:"PhiSplit",status:"Available",note:"Golden ratio based two-column layout",brandName:"Layout",systemName:"Starter Kit",version:"1.0"}),e.jsxs(M,{children:[e.jsx(a,{variant:"h4",sx:{fontWeight:700,mb:1},children:"PhiSplit"}),e.jsx(a,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"황금비율(φ = 1.618)을 기반으로 두 영역을 분할하는 레이아웃 컴포넌트입니다. 약 61.8% : 38.2% 비율로 시각적 균형을 제공합니다."}),e.jsx(x,{title:"Golden Ratio",description:`PHI = ${d.toFixed(6)}`}),e.jsxs(r,{sx:{p:3,backgroundColor:"grey.50",mb:4},children:[e.jsx(a,{variant:"body2",sx:{mb:2},children:"황금비율은 자연과 예술에서 발견되는 수학적 비율입니다:"}),e.jsxs(T,{direction:"row",spacing:4,children:[e.jsxs(r,{children:[e.jsx(a,{variant:"caption",color:"text.secondary",children:"Primary 영역"}),e.jsxs(a,{variant:"h6",children:[(d/(d+1)*100).toFixed(1),"%"]})]}),e.jsxs(r,{children:[e.jsx(a,{variant:"caption",color:"text.secondary",children:"Secondary 영역"}),e.jsxs(a,{variant:"h6",children:[(1/(d+1)*100).toFixed(1),"%"]})]})]})]}),e.jsx(x,{title:"Props",description:"PhiSplit 컴포넌트의 Props 목록입니다."}),e.jsx(z,{children:e.jsxs(E,{size:"small",children:[e.jsx(O,{children:e.jsxs(t,{children:[e.jsx(o,{sx:{fontWeight:600},children:"Prop"}),e.jsx(o,{sx:{fontWeight:600},children:"Type"}),e.jsx(o,{sx:{fontWeight:600},children:"Default"}),e.jsx(o,{sx:{fontWeight:600},children:"Description"})]})}),e.jsxs(L,{children:[e.jsxs(t,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"primary"}),e.jsx(o,{children:"ReactNode"}),e.jsx(o,{children:"-"}),e.jsx(o,{children:"큰 영역 (61.8%) 콘텐츠"})]}),e.jsxs(t,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"secondary"}),e.jsx(o,{children:"ReactNode"}),e.jsx(o,{children:"-"}),e.jsx(o,{children:"작은 영역 (38.2%) 콘텐츠"})]}),e.jsxs(t,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"direction"}),e.jsx(o,{children:"'row' | 'column'"}),e.jsx(o,{children:"'row'"}),e.jsx(o,{children:"분할 방향"})]}),e.jsxs(t,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"isReversed"}),e.jsx(o,{children:"boolean"}),e.jsx(o,{children:"false"}),e.jsx(o,{children:"비율 반전 (작은 영역 먼저)"})]}),e.jsxs(t,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"gap"}),e.jsx(o,{children:"number"}),e.jsx(o,{children:"0"}),e.jsx(o,{children:"영역 간 간격 (spacing 단위)"})]}),e.jsxs(t,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"stackAt"}),e.jsx(o,{children:"'xs' | 'sm' | 'md' | 'lg' | 'none'"}),e.jsx(o,{children:"'sm'"}),e.jsx(o,{children:"스택 전환 브레이크포인트"})]}),e.jsxs(t,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"primarySx"}),e.jsx(o,{children:"object"}),e.jsx(o,{children:"-"}),e.jsx(o,{children:"Primary 영역 추가 스타일"})]}),e.jsxs(t,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"secondarySx"}),e.jsx(o,{children:"object"}),e.jsx(o,{children:"-"}),e.jsx(o,{children:"Secondary 영역 추가 스타일"})]})]})]})}),e.jsx(x,{title:"Horizontal Split",description:"가로 방향 분할 (기본)"}),e.jsxs(T,{spacing:4,children:[e.jsxs(r,{children:[e.jsx(a,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:"기본 - Primary가 왼쪽"}),e.jsx(s,{gap:2,stackAt:"none",primary:e.jsx(c,{color:"#667eea",height:150,children:"Primary (61.8%)"}),secondary:e.jsx(c,{color:"#764ba2",height:150,children:"Secondary (38.2%)"})})]}),e.jsxs(r,{children:[e.jsx(a,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:"isReversed - Secondary가 왼쪽"}),e.jsx(s,{gap:2,isReversed:!0,stackAt:"none",primary:e.jsx(c,{color:"#667eea",height:150,children:"Primary (61.8%)"}),secondary:e.jsx(c,{color:"#764ba2",height:150,children:"Secondary (38.2%)"})})]})]}),e.jsx(x,{title:"Vertical Split",description:"세로 방향 분할"}),e.jsx(r,{sx:{maxWidth:400},children:e.jsx(s,{direction:"column",gap:2,stackAt:"none",primary:e.jsx(c,{color:"#f093fb",height:180,children:"Primary (61.8%)"}),secondary:e.jsx(c,{color:"#f5576c",height:110,children:"Secondary (38.2%)"})})}),e.jsx(x,{title:"Real-World Examples",description:"실제 사용 예시입니다."}),e.jsxs(T,{spacing:5,children:[e.jsxs(r,{children:[e.jsx(a,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:"Hero Section - 이미지와 텍스트"}),e.jsx(s,{gap:4,stackAt:"md",primary:e.jsx(r,{sx:{height:300,backgroundImage:"url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800)",backgroundSize:"cover",backgroundPosition:"center"}}),secondary:e.jsxs(r,{sx:{p:4,display:"flex",flexDirection:"column",justifyContent:"center"},children:[e.jsx(a,{variant:"overline",color:"primary",children:"Featured"}),e.jsx(a,{variant:"h4",sx:{fontWeight:700,mb:2},children:"Explore the Mountains"}),e.jsx(a,{variant:"body1",color:"text.secondary",children:"Discover breathtaking landscapes and embark on adventures that will stay with you forever."})]})})]}),e.jsxs(r,{children:[e.jsx(a,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:"Sidebar Layout - 콘텐츠와 사이드바"}),e.jsx(s,{gap:3,stackAt:"md",primary:e.jsxs(r,{sx:{p:3,border:"1px solid",borderColor:"divider",minHeight:200},children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"Main Content"}),e.jsx(a,{variant:"body2",color:"text.secondary",children:"This is the main content area that takes up the larger portion of the layout. It uses the golden ratio for optimal visual balance."})]}),secondary:e.jsxs(r,{sx:{p:3,backgroundColor:"grey.50",minHeight:200},children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"Sidebar"}),e.jsxs(T,{spacing:1,children:[e.jsx(a,{variant:"body2",children:"• Navigation"}),e.jsx(a,{variant:"body2",children:"• Quick Links"}),e.jsx(a,{variant:"body2",children:"• Related Items"})]})]})})]}),e.jsxs(r,{children:[e.jsx(a,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:"Reversed - 사이드바가 왼쪽"}),e.jsx(s,{gap:3,isReversed:!0,stackAt:"md",primary:e.jsxs(r,{sx:{p:3,border:"1px solid",borderColor:"divider",minHeight:200},children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"Main Content"}),e.jsx(a,{variant:"body2",color:"text.secondary",children:"With isReversed, the sidebar (smaller area) appears on the left side."})]}),secondary:e.jsxs(r,{sx:{p:3,backgroundColor:"primary.main",color:"white",minHeight:200},children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"Sidebar"}),e.jsx(a,{variant:"body2",children:"Left-side navigation"})]})})]})]}),e.jsx(x,{title:"Usage Example",description:"코드 사용 예시입니다."}),e.jsx(r,{component:"pre",sx:{backgroundColor:"grey.100",p:3,fontSize:13,fontFamily:"monospace",overflow:"auto",lineHeight:1.6},children:`// 기본 가로 분할
<PhiSplit
  primary={<HeroImage />}
  secondary={<HeroText />}
  gap={4}
/>

// 반전된 레이아웃 (사이드바 왼쪽)
<PhiSplit
  isReversed
  primary={<MainContent />}
  secondary={<Sidebar />}
  gap={3}
  stackAt="md"
/>

// 세로 분할
<PhiSplit
  direction="column"
  primary={<MainSection />}
  secondary={<Footer />}
/>`})]})]})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'row',
    isReversed: false,
    gap: 2,
    stackAt: 'sm'
  },
  render: args => <PhiSplit {...args} primary={<DemoBox color="#667eea">
          Primary (61.8%)
        </DemoBox>} secondary={<DemoBox color="#764ba2">
          Secondary (38.2%)
        </DemoBox>} />
}`,...h.parameters?.docs?.source},description:{story:"기본 사용",...h.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <DocumentTitle title="PhiSplit" status="Available" note="Golden ratio based two-column layout" brandName="Layout" systemName="Starter Kit" version="1.0" />
      <PageContainer>
        <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          PhiSplit
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{
        mb: 4
      }}>
          황금비율(φ = 1.618)을 기반으로 두 영역을 분할하는 레이아웃 컴포넌트입니다.
          약 61.8% : 38.2% 비율로 시각적 균형을 제공합니다.
        </Typography>

        <SectionTitle title="Golden Ratio" description={\`PHI = \${PHI.toFixed(6)}\`} />
        <Box sx={{
        p: 3,
        backgroundColor: 'grey.50',
        mb: 4
      }}>
          <Typography variant="body2" sx={{
          mb: 2
        }}>
            황금비율은 자연과 예술에서 발견되는 수학적 비율입니다:
          </Typography>
          <Stack direction="row" spacing={4}>
            <Box>
              <Typography variant="caption" color="text.secondary">Primary 영역</Typography>
              <Typography variant="h6">
                {(PHI / (PHI + 1) * 100).toFixed(1)}%
              </Typography>
            </Box>
            <Box>
              <Typography variant="caption" color="text.secondary">Secondary 영역</Typography>
              <Typography variant="h6">
                {(1 / (PHI + 1) * 100).toFixed(1)}%
              </Typography>
            </Box>
          </Stack>
        </Box>

        <SectionTitle title="Props" description="PhiSplit 컴포넌트의 Props 목록입니다." />
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
              }}>primary</TableCell>
                <TableCell>ReactNode</TableCell>
                <TableCell>-</TableCell>
                <TableCell>큰 영역 (61.8%) 콘텐츠</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>secondary</TableCell>
                <TableCell>ReactNode</TableCell>
                <TableCell>-</TableCell>
                <TableCell>작은 영역 (38.2%) 콘텐츠</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>direction</TableCell>
                <TableCell>&apos;row&apos; | &apos;column&apos;</TableCell>
                <TableCell>&apos;row&apos;</TableCell>
                <TableCell>분할 방향</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>isReversed</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>비율 반전 (작은 영역 먼저)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>gap</TableCell>
                <TableCell>number</TableCell>
                <TableCell>0</TableCell>
                <TableCell>영역 간 간격 (spacing 단위)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>stackAt</TableCell>
                <TableCell>&apos;xs&apos; | &apos;sm&apos; | &apos;md&apos; | &apos;lg&apos; | &apos;none&apos;</TableCell>
                <TableCell>&apos;sm&apos;</TableCell>
                <TableCell>스택 전환 브레이크포인트</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>primarySx</TableCell>
                <TableCell>object</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Primary 영역 추가 스타일</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>secondarySx</TableCell>
                <TableCell>object</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Secondary 영역 추가 스타일</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="Horizontal Split" description="가로 방향 분할 (기본)" />
        <Stack spacing={4}>
          <Box>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              기본 - Primary가 왼쪽
            </Typography>
            <PhiSplit gap={2} stackAt="none" primary={<DemoBox color="#667eea" height={150}>
                  Primary (61.8%)
                </DemoBox>} secondary={<DemoBox color="#764ba2" height={150}>
                  Secondary (38.2%)
                </DemoBox>} />
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              isReversed - Secondary가 왼쪽
            </Typography>
            <PhiSplit gap={2} isReversed stackAt="none" primary={<DemoBox color="#667eea" height={150}>
                  Primary (61.8%)
                </DemoBox>} secondary={<DemoBox color="#764ba2" height={150}>
                  Secondary (38.2%)
                </DemoBox>} />
          </Box>
        </Stack>

        <SectionTitle title="Vertical Split" description="세로 방향 분할" />
        <Box sx={{
        maxWidth: 400
      }}>
          <PhiSplit direction="column" gap={2} stackAt="none" primary={<DemoBox color="#f093fb" height={180}>
                Primary (61.8%)
              </DemoBox>} secondary={<DemoBox color="#f5576c" height={110}>
                Secondary (38.2%)
              </DemoBox>} />
        </Box>

        <SectionTitle title="Real-World Examples" description="실제 사용 예시입니다." />
        <Stack spacing={5}>
          <Box>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              Hero Section - 이미지와 텍스트
            </Typography>
            <PhiSplit gap={4} stackAt="md" primary={<Box sx={{
            height: 300,
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />} secondary={<Box sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
                  <Typography variant="overline" color="primary">Featured</Typography>
                  <Typography variant="h4" sx={{
              fontWeight: 700,
              mb: 2
            }}>
                    Explore the Mountains
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Discover breathtaking landscapes and embark on adventures that will stay with you forever.
                  </Typography>
                </Box>} />
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              Sidebar Layout - 콘텐츠와 사이드바
            </Typography>
            <PhiSplit gap={3} stackAt="md" primary={<Box sx={{
            p: 3,
            border: '1px solid',
            borderColor: 'divider',
            minHeight: 200
          }}>
                  <Typography variant="h6" sx={{
              mb: 2
            }}>Main Content</Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is the main content area that takes up the larger portion of the layout.
                    It uses the golden ratio for optimal visual balance.
                  </Typography>
                </Box>} secondary={<Box sx={{
            p: 3,
            backgroundColor: 'grey.50',
            minHeight: 200
          }}>
                  <Typography variant="h6" sx={{
              mb: 2
            }}>Sidebar</Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2">• Navigation</Typography>
                    <Typography variant="body2">• Quick Links</Typography>
                    <Typography variant="body2">• Related Items</Typography>
                  </Stack>
                </Box>} />
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              Reversed - 사이드바가 왼쪽
            </Typography>
            <PhiSplit gap={3} isReversed stackAt="md" primary={<Box sx={{
            p: 3,
            border: '1px solid',
            borderColor: 'divider',
            minHeight: 200
          }}>
                  <Typography variant="h6" sx={{
              mb: 2
            }}>Main Content</Typography>
                  <Typography variant="body2" color="text.secondary">
                    With isReversed, the sidebar (smaller area) appears on the left side.
                  </Typography>
                </Box>} secondary={<Box sx={{
            p: 3,
            backgroundColor: 'primary.main',
            color: 'white',
            minHeight: 200
          }}>
                  <Typography variant="h6" sx={{
              mb: 2
            }}>Sidebar</Typography>
                  <Typography variant="body2">Left-side navigation</Typography>
                </Box>} />
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
          {\`// 기본 가로 분할
<PhiSplit
  primary={<HeroImage />}
  secondary={<HeroText />}
  gap={4}
/>

// 반전된 레이아웃 (사이드바 왼쪽)
<PhiSplit
  isReversed
  primary={<MainContent />}
  secondary={<Sidebar />}
  gap={3}
  stackAt="md"
/>

// 세로 분할
<PhiSplit
  direction="column"
  primary={<MainSection />}
  secondary={<Footer />}
/>\`}
        </Box>
      </PageContainer>
    </>
}`,...y.parameters?.docs?.source},description:{story:"문서 및 데모",...y.parameters?.docs?.description}}};const te=["Default","Documentation"];export{h as Default,y as Documentation,te as __namedExportsOrder,ie as default};
