import{j as e}from"./iframe-q-XN_VZM.js";import{D as v,P as k,S as m}from"./SectionTitle-B-E4QVff.js";import{B as a}from"./Box-Dmtu8wWb.js";import{T as r}from"./Typography-C8IUsM00.js";import{b as B,a as S,c as s,T as o,d as C}from"./TableRow-DxwoBvdd.js";import{T as w}from"./TableHead-CFjEf5Al.js";import{S as R}from"./Stack-BQqDyOBu.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CDdqLoBf.js";import"./Container-q5yveaGP.js";import"./memoTheme-BW0efeYW.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./Grid-Dd6PAMTp.js";import"./isMuiElement-DpiUmZPP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function p({children:n,columns:l=4,gap:x=2,rowHeight:h="200px",isAutoRows:T=!1,sx:y,...j}){const u=()=>typeof h=="number"?`${h}px`:h,d={xs:1,sm:2,md:Math.max(2,Math.floor(l/2)),lg:l,xl:l};return e.jsx(a,{sx:{display:"grid",gridTemplateColumns:{xs:`repeat(${d.xs}, 1fr)`,sm:`repeat(${d.sm}, 1fr)`,md:`repeat(${d.md}, 1fr)`,lg:`repeat(${d.lg}, 1fr)`},gridAutoRows:T?"auto":`minmax(${u()}, auto)`,gap:x,width:"100%",...y},...j,children:n})}function t({children:n,colSpan:l=1,rowSpan:x=1,background:h,isContained:T=!0,sx:y,...j}){const u=c=>{if(typeof c=="number")return c>1?`span ${c}`:void 0;if(typeof c=="object"){const d={};return Object.keys(c).forEach(f=>{d[f]=c[f]>1?`span ${c[f]}`:void 0}),d}};return e.jsx(a,{sx:{gridColumn:u(l),gridRow:u(x),backgroundColor:h,overflow:T?"hidden":"visible",borderRadius:2,position:"relative",...y},...j,children:n})}p.__docgenInfo={description:`BentoGrid 컴포넌트

Apple 스타일의 벤토 박스 그리드 레이아웃.
CSS Grid를 활용하여 다양한 크기의 셀을 유연하게 배치한다.

동작 방식:
1. columns prop에 따라 기본 그리드 열 개수가 설정됨
2. BentoItem으로 각 셀의 span을 개별 지정
3. rowHeight로 기본 행 높이를 설정하고 span에 따라 높이가 배수로 적용됨
4. 반응형 브레이크포인트에서 열 개수가 자동 조정됨

Props:
@param {ReactNode} children - BentoItem 컴포넌트들 [Required]
@param {number} columns - 기본 열 개수 [Optional, 기본값: 4]
@param {number|string} gap - 셀 간 간격 [Optional, 기본값: 2]
@param {number|string} rowHeight - 기본 행 높이 [Optional, 기본값: '200px']
@param {boolean} isAutoRows - 자동 행 높이 여부 [Optional, 기본값: false]
@param {object} sx - 추가 스타일 [Optional]

Example usage:
<BentoGrid columns={4} gap={2}>
  <BentoItem colSpan={2} rowSpan={2}>
    <FeaturedCard />
  </BentoItem>
  <BentoItem>
    <SmallCard />
  </BentoItem>
</BentoGrid>`,methods:[],displayName:"BentoGrid",props:{columns:{defaultValue:{value:"4",computed:!1},required:!1},gap:{defaultValue:{value:"2",computed:!1},required:!1},rowHeight:{defaultValue:{value:"'200px'",computed:!1},required:!1},isAutoRows:{defaultValue:{value:"false",computed:!1},required:!1}}};t.__docgenInfo={description:`BentoItem 컴포넌트

BentoGrid 내에서 개별 셀의 크기와 span을 지정하는 컴포넌트.

동작 방식:
1. colSpan으로 가로 span 지정 (1-4)
2. rowSpan으로 세로 span 지정 (1-3)
3. 반응형 브레이크포인트에서 span이 자동 조정됨

Props:
@param {ReactNode} children - 셀 콘텐츠 [Required]
@param {number|object} colSpan - 열 span (1-4) 또는 반응형 객체 [Optional, 기본값: 1]
@param {number|object} rowSpan - 행 span (1-3) 또는 반응형 객체 [Optional, 기본값: 1]
@param {string} background - 배경색 [Optional]
@param {boolean} isContained - overflow hidden 적용 [Optional, 기본값: true]
@param {object} sx - 추가 스타일 [Optional]

Example usage:
<BentoItem colSpan={2} rowSpan={2} background="primary.main">
  <FeaturedContent />
</BentoItem>
<BentoItem colSpan={{ xs: 1, md: 2 }}>
  <ResponsiveContent />
</BentoItem>`,methods:[],displayName:"BentoItem",props:{colSpan:{defaultValue:{value:"1",computed:!1},required:!1},rowSpan:{defaultValue:{value:"1",computed:!1},required:!1},isContained:{defaultValue:{value:"true",computed:!1},required:!1}}};const I={featured:[{colSpan:2,rowSpan:2},{colSpan:1,rowSpan:1},{colSpan:1,rowSpan:1}],hero:[{colSpan:4,rowSpan:1},{colSpan:1,rowSpan:1},{colSpan:1,rowSpan:1},{colSpan:2,rowSpan:1}]},U={title:"Custom Component/Layout/BentoGrid",component:p,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
## BentoGrid

Apple 스타일의 벤토 박스 그리드 레이아웃.

### 용도
- 대시보드 위젯 레이아웃
- 포트폴리오/갤러리
- Feature 소개 섹션
        `}}},argTypes:{columns:{control:{type:"range",min:2,max:6},description:"열 개수"},gap:{control:{type:"range",min:0,max:6},description:"셀 간 간격"},rowHeight:{control:"text",description:"기본 행 높이"}}},i=({label:n,color:l="#667eea",icon:x})=>e.jsxs(a,{sx:{height:"100%",minHeight:100,backgroundColor:l,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"white",fontWeight:600,fontSize:18,p:2},children:[x&&e.jsx(a,{sx:{fontSize:40,mb:1},children:x}),n]}),b={args:{columns:4,gap:2,rowHeight:"150px"},render:n=>e.jsxs(p,{...n,children:[e.jsx(t,{colSpan:2,rowSpan:2,background:"#667eea",children:e.jsx(i,{label:"Featured",color:"transparent"})}),e.jsx(t,{background:"#764ba2",children:e.jsx(i,{label:"Item 2",color:"transparent"})}),e.jsx(t,{background:"#f093fb",children:e.jsx(i,{label:"Item 3",color:"transparent"})}),e.jsx(t,{colSpan:2,background:"#4facfe",children:e.jsx(i,{label:"Wide",color:"transparent"})})]})},g={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(v,{title:"BentoGrid",status:"Available",note:"Apple-style bento box layout",brandName:"Layout",systemName:"Starter Kit",version:"1.0"}),e.jsxs(k,{children:[e.jsx(r,{variant:"h4",sx:{fontWeight:700,mb:1},children:"BentoGrid"}),e.jsx(r,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"CSS Grid를 활용한 Apple 스타일의 벤토 박스 레이아웃입니다. 다양한 크기의 셀을 유연하게 배치할 수 있습니다."}),e.jsx(m,{title:"Props - BentoGrid",description:"BentoGrid 컴포넌트의 Props입니다."}),e.jsx(B,{children:e.jsxs(S,{size:"small",children:[e.jsx(w,{children:e.jsxs(s,{children:[e.jsx(o,{sx:{fontWeight:600},children:"Prop"}),e.jsx(o,{sx:{fontWeight:600},children:"Type"}),e.jsx(o,{sx:{fontWeight:600},children:"Default"}),e.jsx(o,{sx:{fontWeight:600},children:"Description"})]})}),e.jsxs(C,{children:[e.jsxs(s,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"columns"}),e.jsx(o,{children:"number"}),e.jsx(o,{children:"4"}),e.jsx(o,{children:"기본 열 개수"})]}),e.jsxs(s,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"gap"}),e.jsx(o,{children:"number | string"}),e.jsx(o,{children:"2"}),e.jsx(o,{children:"셀 간 간격"})]}),e.jsxs(s,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"rowHeight"}),e.jsx(o,{children:"number | string"}),e.jsx(o,{children:"'200px'"}),e.jsx(o,{children:"기본 행 높이"})]}),e.jsxs(s,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"isAutoRows"}),e.jsx(o,{children:"boolean"}),e.jsx(o,{children:"false"}),e.jsx(o,{children:"자동 행 높이 여부"})]})]})]})}),e.jsx(m,{title:"Props - BentoItem",description:"BentoItem 컴포넌트의 Props입니다."}),e.jsx(B,{children:e.jsxs(S,{size:"small",children:[e.jsx(w,{children:e.jsxs(s,{children:[e.jsx(o,{sx:{fontWeight:600},children:"Prop"}),e.jsx(o,{sx:{fontWeight:600},children:"Type"}),e.jsx(o,{sx:{fontWeight:600},children:"Default"}),e.jsx(o,{sx:{fontWeight:600},children:"Description"})]})}),e.jsxs(C,{children:[e.jsxs(s,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"colSpan"}),e.jsx(o,{children:"number | object"}),e.jsx(o,{children:"1"}),e.jsx(o,{children:"열 span (1-4)"})]}),e.jsxs(s,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"rowSpan"}),e.jsx(o,{children:"number | object"}),e.jsx(o,{children:"1"}),e.jsx(o,{children:"행 span (1-3)"})]}),e.jsxs(s,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"background"}),e.jsx(o,{children:"string"}),e.jsx(o,{children:"-"}),e.jsx(o,{children:"배경색"})]}),e.jsxs(s,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"isContained"}),e.jsx(o,{children:"boolean"}),e.jsx(o,{children:"true"}),e.jsx(o,{children:"overflow hidden 적용"})]})]})]})}),e.jsx(m,{title:"Featured Layout",description:"대표 콘텐츠를 강조하는 레이아웃입니다."}),e.jsxs(p,{columns:4,gap:2,rowHeight:"150px",children:[e.jsx(t,{colSpan:2,rowSpan:2,children:e.jsx(a,{sx:{height:"100%",backgroundImage:"url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600)",backgroundSize:"cover",backgroundPosition:"center",display:"flex",alignItems:"flex-end",p:3},children:e.jsx(r,{variant:"h5",sx:{color:"white",fontWeight:700,textShadow:"0 2px 4px rgba(0,0,0,0.3)"},children:"Featured"})})}),e.jsx(t,{background:"#1a1a2e",children:e.jsx(i,{label:"Quick Stats",color:"transparent",icon:"📊"})}),e.jsx(t,{background:"#16213e",children:e.jsx(i,{label:"Updates",color:"transparent",icon:"🔔"})}),e.jsx(t,{background:"#0f3460",children:e.jsx(i,{label:"Settings",color:"transparent",icon:"⚙️"})}),e.jsx(t,{background:"#533483",children:e.jsx(i,{label:"Profile",color:"transparent",icon:"👤"})})]}),e.jsx(m,{title:"Dashboard Layout",description:"대시보드 스타일 레이아웃입니다."}),e.jsxs(p,{columns:4,gap:2,rowHeight:"120px",children:[e.jsx(t,{colSpan:3,background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",children:e.jsxs(a,{sx:{p:3,height:"100%",display:"flex",flexDirection:"column",justifyContent:"center"},children:[e.jsx(r,{variant:"overline",sx:{color:"rgba(255,255,255,0.7)"},children:"Welcome back"}),e.jsx(r,{variant:"h4",sx:{color:"white",fontWeight:700},children:"Dashboard Overview"})]})}),e.jsx(t,{rowSpan:2,background:"#f5f5f5",children:e.jsxs(a,{sx:{p:2,height:"100%"},children:[e.jsx(r,{variant:"subtitle2",color:"text.secondary",children:"Activity"}),e.jsx(a,{sx:{mt:2},children:["Mon","Tue","Wed","Thu","Fri"].map((n,l)=>e.jsxs(a,{sx:{display:"flex",alignItems:"center",mb:1},children:[e.jsx(r,{variant:"caption",sx:{width:30},children:n}),e.jsx(a,{sx:{flex:1,height:8,backgroundColor:"grey.200",borderRadius:1,overflow:"hidden"},children:e.jsx(a,{sx:{width:`${40+l*15}%`,height:"100%",backgroundColor:"primary.main"}})})]},n))})]})}),e.jsx(t,{background:"#e8f5e9",children:e.jsxs(a,{sx:{p:2,height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[e.jsx(r,{variant:"h3",sx:{fontWeight:700,color:"success.main"},children:"+24%"}),e.jsx(r,{variant:"caption",color:"text.secondary",children:"Growth"})]})}),e.jsx(t,{background:"#fff3e0",children:e.jsxs(a,{sx:{p:2,height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[e.jsx(r,{variant:"h3",sx:{fontWeight:700,color:"warning.main"},children:"1.2K"}),e.jsx(r,{variant:"caption",color:"text.secondary",children:"Users"})]})}),e.jsx(t,{background:"#e3f2fd",children:e.jsxs(a,{sx:{p:2,height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[e.jsx(r,{variant:"h3",sx:{fontWeight:700,color:"info.main"},children:"89"}),e.jsx(r,{variant:"caption",color:"text.secondary",children:"Tasks"})]})})]}),e.jsx(m,{title:"Gallery Layout",description:"포트폴리오/갤러리 스타일입니다."}),e.jsx(p,{columns:3,gap:1,rowHeight:"180px",children:[{span:[2,2],img:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600"},{span:[1,1],img:"https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400"},{span:[1,1],img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"},{span:[1,1],img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"},{span:[2,1],img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"}].map((n,l)=>e.jsx(t,{colSpan:n.span[0],rowSpan:n.span[1],children:e.jsx(a,{sx:{height:"100%",backgroundImage:`url(${n.img})`,backgroundSize:"cover",backgroundPosition:"center"}})},l))}),e.jsx(m,{title:"Preset Layouts",description:"자주 사용되는 프리셋 레이아웃입니다."}),e.jsxs(R,{spacing:4,children:[e.jsxs(a,{children:[e.jsx(r,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:"BENTO_PRESETS.featured"}),e.jsx(p,{columns:3,gap:2,rowHeight:"100px",children:I.featured.map((n,l)=>e.jsx(t,{colSpan:n.colSpan,rowSpan:n.rowSpan,background:l===0?"#667eea":"#764ba2",children:e.jsx(i,{label:`${n.colSpan}x${n.rowSpan}`,color:"transparent"})},l))})]}),e.jsxs(a,{children:[e.jsx(r,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:"BENTO_PRESETS.hero"}),e.jsx(p,{columns:4,gap:2,rowHeight:"100px",children:I.hero.map((n,l)=>e.jsx(t,{colSpan:n.colSpan,rowSpan:n.rowSpan,background:["#f093fb","#f5576c","#4facfe","#00f2fe"][l],children:e.jsx(i,{label:`${n.colSpan}x${n.rowSpan}`,color:"transparent"})},l))})]})]}),e.jsx(m,{title:"Usage Example",description:"코드 사용 예시입니다."}),e.jsx(a,{component:"pre",sx:{backgroundColor:"grey.100",p:3,fontSize:13,fontFamily:"monospace",overflow:"auto",lineHeight:1.6},children:`// 기본 벤토 그리드
<BentoGrid columns={4} gap={2}>
  <BentoItem colSpan={2} rowSpan={2}>
    <FeaturedCard />
  </BentoItem>
  <BentoItem>
    <SmallCard />
  </BentoItem>
  <BentoItem>
    <SmallCard />
  </BentoItem>
  <BentoItem colSpan={2}>
    <WideCard />
  </BentoItem>
</BentoGrid>

// 프리셋 사용
import { BENTO_PRESETS } from './BentoGrid';

<BentoGrid columns={3}>
  {items.map((item, i) => (
    <BentoItem
      key={i}
      colSpan={BENTO_PRESETS.featured[i]?.colSpan || 1}
      rowSpan={BENTO_PRESETS.featured[i]?.rowSpan || 1}
    >
      <Card {...item} />
    </BentoItem>
  ))}
</BentoGrid>`})]})]})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    columns: 4,
    gap: 2,
    rowHeight: '150px'
  },
  render: args => <BentoGrid {...args}>
      <BentoItem colSpan={2} rowSpan={2} background="#667eea">
        <DemoCell label="Featured" color="transparent" />
      </BentoItem>
      <BentoItem background="#764ba2">
        <DemoCell label="Item 2" color="transparent" />
      </BentoItem>
      <BentoItem background="#f093fb">
        <DemoCell label="Item 3" color="transparent" />
      </BentoItem>
      <BentoItem colSpan={2} background="#4facfe">
        <DemoCell label="Wide" color="transparent" />
      </BentoItem>
    </BentoGrid>
}`,...b.parameters?.docs?.source},description:{story:"기본 사용",...b.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <DocumentTitle title="BentoGrid" status="Available" note="Apple-style bento box layout" brandName="Layout" systemName="Starter Kit" version="1.0" />
      <PageContainer>
        <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          BentoGrid
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{
        mb: 4
      }}>
          CSS Grid를 활용한 Apple 스타일의 벤토 박스 레이아웃입니다.
          다양한 크기의 셀을 유연하게 배치할 수 있습니다.
        </Typography>

        <SectionTitle title="Props - BentoGrid" description="BentoGrid 컴포넌트의 Props입니다." />
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
              }}>columns</TableCell>
                <TableCell>number</TableCell>
                <TableCell>4</TableCell>
                <TableCell>기본 열 개수</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>gap</TableCell>
                <TableCell>number | string</TableCell>
                <TableCell>2</TableCell>
                <TableCell>셀 간 간격</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>rowHeight</TableCell>
                <TableCell>number | string</TableCell>
                <TableCell>&apos;200px&apos;</TableCell>
                <TableCell>기본 행 높이</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>isAutoRows</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>자동 행 높이 여부</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="Props - BentoItem" description="BentoItem 컴포넌트의 Props입니다." />
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
              }}>colSpan</TableCell>
                <TableCell>number | object</TableCell>
                <TableCell>1</TableCell>
                <TableCell>열 span (1-4)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>rowSpan</TableCell>
                <TableCell>number | object</TableCell>
                <TableCell>1</TableCell>
                <TableCell>행 span (1-3)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>background</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>배경색</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>isContained</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>true</TableCell>
                <TableCell>overflow hidden 적용</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="Featured Layout" description="대표 콘텐츠를 강조하는 레이아웃입니다." />
        <BentoGrid columns={4} gap={2} rowHeight="150px">
          <BentoItem colSpan={2} rowSpan={2}>
            <Box sx={{
            height: '100%',
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'flex-end',
            p: 3
          }}>
              <Typography variant="h5" sx={{
              color: 'white',
              fontWeight: 700,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
                Featured
              </Typography>
            </Box>
          </BentoItem>
          <BentoItem background="#1a1a2e">
            <DemoCell label="Quick Stats" color="transparent" icon="📊" />
          </BentoItem>
          <BentoItem background="#16213e">
            <DemoCell label="Updates" color="transparent" icon="🔔" />
          </BentoItem>
          <BentoItem background="#0f3460">
            <DemoCell label="Settings" color="transparent" icon="⚙️" />
          </BentoItem>
          <BentoItem background="#533483">
            <DemoCell label="Profile" color="transparent" icon="👤" />
          </BentoItem>
        </BentoGrid>

        <SectionTitle title="Dashboard Layout" description="대시보드 스타일 레이아웃입니다." />
        <BentoGrid columns={4} gap={2} rowHeight="120px">
          <BentoItem colSpan={3} background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
            <Box sx={{
            p: 3,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
              <Typography variant="overline" sx={{
              color: 'rgba(255,255,255,0.7)'
            }}>Welcome back</Typography>
              <Typography variant="h4" sx={{
              color: 'white',
              fontWeight: 700
            }}>Dashboard Overview</Typography>
            </Box>
          </BentoItem>
          <BentoItem rowSpan={2} background="#f5f5f5">
            <Box sx={{
            p: 2,
            height: '100%'
          }}>
              <Typography variant="subtitle2" color="text.secondary">Activity</Typography>
              <Box sx={{
              mt: 2
            }}>
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => <Box key={day} sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 1
              }}>
                    <Typography variant="caption" sx={{
                  width: 30
                }}>{day}</Typography>
                    <Box sx={{
                  flex: 1,
                  height: 8,
                  backgroundColor: 'grey.200',
                  borderRadius: 1,
                  overflow: 'hidden'
                }}>
                      <Box sx={{
                    width: \`\${40 + i * 15}%\`,
                    height: '100%',
                    backgroundColor: 'primary.main'
                  }} />
                    </Box>
                  </Box>)}
              </Box>
            </Box>
          </BentoItem>
          <BentoItem background="#e8f5e9">
            <Box sx={{
            p: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
              <Typography variant="h3" sx={{
              fontWeight: 700,
              color: 'success.main'
            }}>+24%</Typography>
              <Typography variant="caption" color="text.secondary">Growth</Typography>
            </Box>
          </BentoItem>
          <BentoItem background="#fff3e0">
            <Box sx={{
            p: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
              <Typography variant="h3" sx={{
              fontWeight: 700,
              color: 'warning.main'
            }}>1.2K</Typography>
              <Typography variant="caption" color="text.secondary">Users</Typography>
            </Box>
          </BentoItem>
          <BentoItem background="#e3f2fd">
            <Box sx={{
            p: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
              <Typography variant="h3" sx={{
              fontWeight: 700,
              color: 'info.main'
            }}>89</Typography>
              <Typography variant="caption" color="text.secondary">Tasks</Typography>
            </Box>
          </BentoItem>
        </BentoGrid>

        <SectionTitle title="Gallery Layout" description="포트폴리오/갤러리 스타일입니다." />
        <BentoGrid columns={3} gap={1} rowHeight="180px">
          {[{
          span: [2, 2],
          img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600'
        }, {
          span: [1, 1],
          img: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400'
        }, {
          span: [1, 1],
          img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
        }, {
          span: [1, 1],
          img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
        }, {
          span: [2, 1],
          img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600'
        }].map((item, i) => <BentoItem key={i} colSpan={item.span[0]} rowSpan={item.span[1]}>
              <Box sx={{
            height: '100%',
            backgroundImage: \`url(\${item.img})\`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
            </BentoItem>)}
        </BentoGrid>

        <SectionTitle title="Preset Layouts" description="자주 사용되는 프리셋 레이아웃입니다." />
        <Stack spacing={4}>
          <Box>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              BENTO_PRESETS.featured
            </Typography>
            <BentoGrid columns={3} gap={2} rowHeight="100px">
              {BENTO_PRESETS.featured.map((preset, i) => <BentoItem key={i} colSpan={preset.colSpan} rowSpan={preset.rowSpan} background={i === 0 ? '#667eea' : '#764ba2'}>
                  <DemoCell label={\`\${preset.colSpan}x\${preset.rowSpan}\`} color="transparent" />
                </BentoItem>)}
            </BentoGrid>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              BENTO_PRESETS.hero
            </Typography>
            <BentoGrid columns={4} gap={2} rowHeight="100px">
              {BENTO_PRESETS.hero.map((preset, i) => <BentoItem key={i} colSpan={preset.colSpan} rowSpan={preset.rowSpan} background={['#f093fb', '#f5576c', '#4facfe', '#00f2fe'][i]}>
                  <DemoCell label={\`\${preset.colSpan}x\${preset.rowSpan}\`} color="transparent" />
                </BentoItem>)}
            </BentoGrid>
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
          {\`// 기본 벤토 그리드
<BentoGrid columns={4} gap={2}>
  <BentoItem colSpan={2} rowSpan={2}>
    <FeaturedCard />
  </BentoItem>
  <BentoItem>
    <SmallCard />
  </BentoItem>
  <BentoItem>
    <SmallCard />
  </BentoItem>
  <BentoItem colSpan={2}>
    <WideCard />
  </BentoItem>
</BentoGrid>

// 프리셋 사용
import { BENTO_PRESETS } from './BentoGrid';

<BentoGrid columns={3}>
  {items.map((item, i) => (
    <BentoItem
      key={i}
      colSpan={BENTO_PRESETS.featured[i]?.colSpan || 1}
      rowSpan={BENTO_PRESETS.featured[i]?.rowSpan || 1}
    >
      <Card {...item} />
    </BentoItem>
  ))}
</BentoGrid>\`}
        </Box>
      </PageContainer>
    </>
}`,...g.parameters?.docs?.source},description:{story:"문서 및 데모",...g.parameters?.docs?.description}}};const K=["Default","Documentation"];export{b as Default,g as Documentation,K as __namedExportsOrder,U as default};
