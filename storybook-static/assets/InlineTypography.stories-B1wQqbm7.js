import{j as e}from"./iframe-q-XN_VZM.js";import{c as w}from"./createSvgIcon-CvYdi5pS.js";import{F as z}from"./Favorite-CJCmVXTr.js";import{A as S}from"./AutoAwesome-Da6E_c8-.js";import{D as B,P as q,S as m}from"./SectionTitle-B-E4QVff.js";import{T as h}from"./Typography-C8IUsM00.js";import{B as n}from"./Box-Dmtu8wWb.js";import{b as k,a as R,c as f,T as a,d as W}from"./TableRow-DxwoBvdd.js";import{T as M}from"./TableHead-CFjEf5Al.js";import{S as j}from"./Stack-BQqDyOBu.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-BW0efeYW.js";import"./useTheme-CDdqLoBf.js";import"./Container-q5yveaGP.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./Grid-Dd6PAMTp.js";import"./isMuiElement-DpiUmZPP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const s=w(e.jsx("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})),V=w(e.jsx("path",{d:"M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3m4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2"}));function v({children:c,size:r=1,align:l="middle",rounded:d=!1,hover:t=!1,spacing:p=.2,sx:g,...T}){const C={baseline:"baseline",middle:"middle",top:"text-top",bottom:"text-bottom"},u=typeof r=="number"?`${r}em`:r;return e.jsx(n,{component:"span",sx:{display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:C[l],width:u,height:u,mx:`${p}em`,borderRadius:d?"50%":0,overflow:"hidden",transition:t?"transform 0.2s ease-out, box-shadow 0.2s ease-out":"none",cursor:t?"pointer":"inherit","&:hover":t?{transform:"scale(1.1) rotate(3deg)",boxShadow:"0 4px 12px rgba(0,0,0,0.15)"}:{},"& > img, & > svg":{width:"100%",height:"100%",objectFit:"cover",display:"block"},...g},...T,children:c})}function o({children:c,variant:r="body1",component:l="p",align:d="left",sx:t,...p}){return e.jsx(h,{variant:r,component:l,sx:{textAlign:d,lineHeight:1.6,"& > span":{},...t},...p,children:c})}function i({icon:c,color:r="inherit",size:l=1,align:d="middle",sx:t,...p}){const g={baseline:"baseline",middle:"middle",top:"text-top",bottom:"text-bottom"};return e.jsx(n,{component:"span",sx:{display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:g[d],fontSize:`${l}em`,color:r,mx:"0.1em","& > svg":{fontSize:"inherit"},...t},...p,children:c})}function x({src:c,alt:r,size:l=1.5,rounded:d=!1,circle:t=!1,align:p="middle",hover:g=!1,sx:T,...C}){const u=typeof l=="number"?`${l}em`:l,O={baseline:"baseline",middle:"middle",top:"text-top",bottom:"text-bottom"};return e.jsx(n,{component:"span",sx:{display:"inline-block",verticalAlign:O[p],width:u,height:u,mx:"0.2em",borderRadius:t?"50%":d?"4px":0,overflow:"hidden",transition:g?"transform 0.2s ease-out":"none","&:hover":g?{transform:"scale(1.1)"}:{},...T},...C,children:e.jsx(n,{component:"img",src:c,alt:r,sx:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})})}o.Object=v;o.Icon=i;o.Image=x;v.__docgenInfo={description:`InlineObject 컴포넌트 (하위 컴포넌트)

텍스트 흐름 속에 이미지, 아이콘, 또는 다른 컴포넌트를 삽입하기 위한 래퍼.
인라인 요소의 수직 정렬과 크기를 제어한다.

Props:
@param {ReactNode} children - 삽입할 요소 (img, icon, component) [Required]
@param {number|string} size - 요소 크기 (em 단위 숫자 또는 CSS 값) [Optional, 기본값: 1]
@param {string} align - 수직 정렬 ('baseline' | 'middle' | 'top' | 'bottom') [Optional, 기본값: 'middle']
@param {boolean} rounded - 둥근 모서리 적용 [Optional, 기본값: false]
@param {boolean} hover - hover 효과 활성화 [Optional, 기본값: false]
@param {number} spacing - 좌우 간격 (em 단위) [Optional, 기본값: 0.2]
@param {object} sx - 추가 스타일 오버라이드 [Optional]

Example usage:
<InlineObject size={1.2} rounded>
  <img src="avatar.jpg" alt="avatar" />
</InlineObject>`,methods:[],displayName:"InlineObject",props:{size:{defaultValue:{value:"1",computed:!1},required:!1},align:{defaultValue:{value:"'middle'",computed:!1},required:!1},rounded:{defaultValue:{value:"false",computed:!1},required:!1},hover:{defaultValue:{value:"false",computed:!1},required:!1},spacing:{defaultValue:{value:"0.2",computed:!1},required:!1}}};o.__docgenInfo={description:`InlineTypography 컴포넌트

텍스트 흐름 속에 이미지, 아이콘, 또는 다른 컴포넌트를 자연스럽게 삽입할 수 있는 컴포넌트.
Compound component 패턴으로 InlineObject와 함께 사용한다.

동작 방식:
1. children으로 일반 텍스트와 InlineObject 컴포넌트를 조합하여 전달
2. 텍스트와 인라인 요소가 자연스럽게 한 줄에 배치됨
3. InlineObject의 align prop으로 수직 정렬 제어
4. variant에 따라 적절한 폰트 스타일 적용

Props:
@param {ReactNode} children - 텍스트와 InlineObject 조합 [Required]
@param {string} variant - 타이포그래피 variant ('body1' | 'body2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') [Optional, 기본값: 'body1']
@param {string} component - HTML 태그 [Optional, 기본값: 'p']
@param {string} align - 텍스트 정렬 ('left' | 'center' | 'right' | 'justify') [Optional, 기본값: 'left']
@param {object} sx - 추가 스타일 오버라이드 [Optional]

Example usage:
<InlineTypography variant="h3">
  We build <InlineObject size={1.2} rounded><img src="icon.png" /></InlineObject> amazing products.
</InlineTypography>`,methods:[{name:"Object",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  size = 1,
  align = 'middle',
  rounded = false,
  hover = false,
  spacing = 0.2,
  sx,
  ...props
}`,optional:!1,type:null}],returns:null},{name:"Icon",docblock:null,modifiers:["static"],params:[{name:`{
  icon,
  color = 'inherit',
  size = 1,
  align = 'middle',
  sx,
  ...props
}`,optional:!1,type:null}],returns:null},{name:"Image",docblock:null,modifiers:["static"],params:[{name:`{
  src,
  alt,
  size = 1.5,
  rounded = false,
  circle = false,
  align = 'middle',
  hover = false,
  sx,
  ...props
}`,optional:!1,type:null}],returns:null}],displayName:"InlineTypography",props:{variant:{defaultValue:{value:"'body1'",computed:!1},required:!1},component:{defaultValue:{value:"'p'",computed:!1},required:!1},align:{defaultValue:{value:"'left'",computed:!1},required:!1}}};i.__docgenInfo={description:`InlineIcon 컴포넌트 (편의 컴포넌트)

MUI 아이콘을 인라인으로 삽입하기 위한 특화된 래퍼.

Props:
@param {ReactNode} icon - MUI Icon 컴포넌트 [Required]
@param {string} color - 아이콘 색상 [Optional, 기본값: 'inherit']
@param {number} size - 아이콘 크기 (em 단위) [Optional, 기본값: 1]
@param {string} align - 수직 정렬 [Optional, 기본값: 'middle']

Example usage:
<InlineIcon icon={<StarIcon />} color="primary.main" size={1.2} />`,methods:[],displayName:"InlineIcon",props:{color:{defaultValue:{value:"'inherit'",computed:!1},required:!1},size:{defaultValue:{value:"1",computed:!1},required:!1},align:{defaultValue:{value:"'middle'",computed:!1},required:!1}}};x.__docgenInfo={description:`InlineImage 컴포넌트 (편의 컴포넌트)

이미지를 인라인으로 삽입하기 위한 특화된 래퍼.

Props:
@param {string} src - 이미지 URL [Required]
@param {string} alt - 이미지 alt 텍스트 [Required]
@param {number|string} size - 이미지 크기 [Optional, 기본값: 1.5]
@param {boolean} rounded - 둥근 모서리 [Optional, 기본값: false]
@param {boolean} circle - 원형 [Optional, 기본값: false]
@param {string} align - 수직 정렬 [Optional, 기본값: 'middle']
@param {boolean} hover - hover 효과 [Optional, 기본값: false]

Example usage:
<InlineImage src="photo.jpg" alt="Photo" size={2} circle hover />`,methods:[],displayName:"InlineImage",props:{size:{defaultValue:{value:"1.5",computed:!1},required:!1},rounded:{defaultValue:{value:"false",computed:!1},required:!1},circle:{defaultValue:{value:"false",computed:!1},required:!1},align:{defaultValue:{value:"'middle'",computed:!1},required:!1},hover:{defaultValue:{value:"false",computed:!1},required:!1}}};const ne={title:"Custom Component/Typography/InlineTypography",component:o,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
## InlineTypography

텍스트 흐름 속에 이미지, 아이콘, 또는 다른 컴포넌트를 자연스럽게 삽입할 수 있는 컴포넌트.

### 용도
- Editorial 스타일의 텍스트-이미지 조합
- 아이콘과 텍스트의 인라인 배치
- 브랜드 로고나 이모지 삽입
        `}}},argTypes:{variant:{control:"select",options:["body1","body2","h1","h2","h3","h4","h5","h6"],description:"타이포그래피 variant"},align:{control:"select",options:["left","center","right","justify"],description:"텍스트 정렬"}}},b={avatar1:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",avatar2:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",landscape:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=100&fit=crop"},y={render:()=>e.jsxs(o,{variant:"h4",children:["We build ",e.jsx(i,{icon:e.jsx(s,{}),color:"primary.main",size:1})," amazing products."]})},I={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(B,{title:"InlineTypography",status:"Available",note:"Insert images/icons inline with text",brandName:"Typography",systemName:"Starter Kit",version:"1.0"}),e.jsxs(q,{children:[e.jsx(h,{variant:"h4",sx:{fontWeight:700,mb:1},children:"InlineTypography"}),e.jsx(h,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"텍스트 흐름 속에 이미지, 아이콘, 또는 다른 컴포넌트를 자연스럽게 삽입할 수 있는 컴포넌트입니다. Compound component 패턴으로 InlineObject, InlineIcon, InlineImage와 함께 사용합니다."}),e.jsx(m,{title:"Sub Components",description:"InlineTypography와 함께 사용하는 하위 컴포넌트들입니다."}),e.jsx(k,{children:e.jsxs(R,{size:"small",children:[e.jsx(M,{children:e.jsxs(f,{children:[e.jsx(a,{sx:{fontWeight:600},children:"Component"}),e.jsx(a,{sx:{fontWeight:600},children:"Description"}),e.jsx(a,{sx:{fontWeight:600},children:"Use Case"})]})}),e.jsxs(W,{children:[e.jsxs(f,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"InlineObject"}),e.jsx(a,{children:"범용 인라인 요소 래퍼"}),e.jsx(a,{children:"커스텀 컴포넌트, 복잡한 요소"})]}),e.jsxs(f,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"InlineIcon"}),e.jsx(a,{children:"MUI 아이콘 전용 래퍼"}),e.jsx(a,{children:"아이콘 삽입"})]}),e.jsxs(f,{children:[e.jsx(a,{sx:{fontFamily:"monospace"},children:"InlineImage"}),e.jsx(a,{children:"이미지 전용 래퍼"}),e.jsx(a,{children:"이미지, 아바타 삽입"})]})]})]})}),e.jsx(m,{title:"With Icons",description:"MUI 아이콘을 텍스트와 함께 배치합니다."}),e.jsxs(j,{spacing:3,children:[e.jsx(n,{sx:{p:3,border:"1px solid",borderColor:"divider"},children:e.jsxs(o,{variant:"h4",children:["We ",e.jsx(i,{icon:e.jsx(z,{}),color:"error.main"})," building",e.jsx(i,{icon:e.jsx(S,{}),color:"warning.main"})," products."]})}),e.jsx(n,{sx:{p:3,border:"1px solid",borderColor:"divider"},children:e.jsxs(o,{variant:"h3",children:["Launch your ideas ",e.jsx(i,{icon:e.jsx(V,{}),color:"primary.main",size:1.2})," today."]})}),e.jsx(n,{sx:{p:3,border:"1px solid",borderColor:"divider"},children:e.jsxs(o,{variant:"body1",children:["This feature received ",e.jsx(i,{icon:e.jsx(s,{}),color:"warning.main"}),e.jsx(i,{icon:e.jsx(s,{}),color:"warning.main"}),e.jsx(i,{icon:e.jsx(s,{}),color:"warning.main"}),e.jsx(i,{icon:e.jsx(s,{}),color:"warning.main"}),e.jsx(i,{icon:e.jsx(s,{}),color:"warning.main"})," 5-star rating from our users."]})})]}),e.jsx(m,{title:"With Images",description:"이미지를 텍스트와 함께 배치합니다."}),e.jsxs(j,{spacing:3,children:[e.jsx(n,{sx:{p:3,border:"1px solid",borderColor:"divider"},children:e.jsxs(o,{variant:"h4",children:["Meet our team:",e.jsx(x,{src:b.avatar1,alt:"Team member 1",size:1.5,circle:!0,hover:!0}),e.jsx(x,{src:b.avatar2,alt:"Team member 2",size:1.5,circle:!0,hover:!0}),"and more talented people."]})}),e.jsx(n,{sx:{p:3,border:"1px solid",borderColor:"divider"},children:e.jsxs(o,{variant:"h3",children:["Explore the",e.jsx(x,{src:b.landscape,alt:"Mountains",size:"3em",rounded:!0,sx:{mx:"0.3em"}}),"world with us."]})})]}),e.jsx(m,{title:"With Custom Objects",description:"InlineObject로 커스텀 요소를 삽입합니다."}),e.jsxs(j,{spacing:3,children:[e.jsx(n,{sx:{p:3,border:"1px solid",borderColor:"divider"},children:e.jsxs(o,{variant:"h4",children:["Powered by",e.jsx(v,{size:1.5,spacing:.3,children:e.jsx(n,{sx:{width:"100%",height:"100%",backgroundColor:"primary.main",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:700,fontSize:"0.6em"},children:"AI"})}),"technology."]})}),e.jsx(n,{sx:{p:3,border:"1px solid",borderColor:"divider"},children:e.jsxs(o,{variant:"h4",children:["Status:",e.jsx(v,{size:.8,rounded:!0,spacing:.3,children:e.jsx(n,{sx:{width:"100%",height:"100%",backgroundColor:"success.main",borderRadius:"50%"}})}),"Online"]})})]}),e.jsx(m,{title:"Vertical Alignment",description:"수직 정렬 옵션입니다."}),e.jsxs(j,{spacing:3,children:[e.jsxs(n,{sx:{p:3,border:"1px solid",borderColor:"divider"},children:[e.jsx(h,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:'align="middle" (기본)'}),e.jsxs(o,{variant:"h4",children:["Text with ",e.jsx(i,{icon:e.jsx(s,{}),color:"primary.main",align:"middle"})," icon aligned to middle."]})]}),e.jsxs(n,{sx:{p:3,border:"1px solid",borderColor:"divider"},children:[e.jsx(h,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:'align="baseline"'}),e.jsxs(o,{variant:"h4",children:["Text with ",e.jsx(i,{icon:e.jsx(s,{}),color:"primary.main",align:"baseline"})," icon aligned to baseline."]})]}),e.jsxs(n,{sx:{p:3,border:"1px solid",borderColor:"divider"},children:[e.jsx(h,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:'align="top"'}),e.jsxs(o,{variant:"h4",children:["Text with ",e.jsx(i,{icon:e.jsx(s,{}),color:"primary.main",align:"top"})," icon aligned to top."]})]})]}),e.jsx(m,{title:"Hover Effects",description:"hover 효과를 적용한 인라인 이미지입니다."}),e.jsxs(n,{sx:{p:4,border:"1px solid",borderColor:"divider"},children:[e.jsxs(o,{variant:"h3",children:["Connect with",e.jsx(x,{src:b.avatar1,alt:"User 1",size:2,circle:!0,hover:!0}),e.jsx(x,{src:b.avatar2,alt:"User 2",size:2,circle:!0,hover:!0}),"on our platform."]}),e.jsx(h,{variant:"caption",color:"text.secondary",sx:{mt:1,display:"block"},children:"(이미지에 마우스를 올려보세요)"})]}),e.jsx(m,{title:"Usage Example",description:"코드 사용 예시입니다."}),e.jsx(n,{component:"pre",sx:{backgroundColor:"grey.100",p:3,fontSize:13,fontFamily:"monospace",overflow:"auto",lineHeight:1.6},children:`// 아이콘과 함께
<InlineTypography variant="h4">
  We <InlineIcon icon={<FavoriteIcon />} color="error.main" /> building products.
</InlineTypography>

// 이미지와 함께
<InlineTypography variant="h3">
  Meet our team:
  <InlineImage src="avatar.jpg" alt="Member" size={1.5} circle hover />
</InlineTypography>

// 커스텀 요소
<InlineTypography variant="h4">
  Powered by
  <InlineObject size={1.5}>
    <CustomBadge>AI</CustomBadge>
  </InlineObject>
  technology.
</InlineTypography>`})]})]})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <InlineTypography variant="h4">
      We build <InlineIcon icon={<StarIcon />} color="primary.main" size={1} /> amazing products.
    </InlineTypography>
}`,...y.parameters?.docs?.source},description:{story:"기본 사용",...y.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <DocumentTitle title="InlineTypography" status="Available" note="Insert images/icons inline with text" brandName="Typography" systemName="Starter Kit" version="1.0" />
      <PageContainer>
        <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          InlineTypography
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{
        mb: 4
      }}>
          텍스트 흐름 속에 이미지, 아이콘, 또는 다른 컴포넌트를 자연스럽게 삽입할 수 있는 컴포넌트입니다.
          Compound component 패턴으로 InlineObject, InlineIcon, InlineImage와 함께 사용합니다.
        </Typography>

        <SectionTitle title="Sub Components" description="InlineTypography와 함께 사용하는 하위 컴포넌트들입니다." />
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{
                fontWeight: 600
              }}>Component</TableCell>
                <TableCell sx={{
                fontWeight: 600
              }}>Description</TableCell>
                <TableCell sx={{
                fontWeight: 600
              }}>Use Case</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>InlineObject</TableCell>
                <TableCell>범용 인라인 요소 래퍼</TableCell>
                <TableCell>커스텀 컴포넌트, 복잡한 요소</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>InlineIcon</TableCell>
                <TableCell>MUI 아이콘 전용 래퍼</TableCell>
                <TableCell>아이콘 삽입</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>InlineImage</TableCell>
                <TableCell>이미지 전용 래퍼</TableCell>
                <TableCell>이미지, 아바타 삽입</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="With Icons" description="MUI 아이콘을 텍스트와 함께 배치합니다." />
        <Stack spacing={3}>
          <Box sx={{
          p: 3,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <InlineTypography variant="h4">
              We <InlineIcon icon={<FavoriteIcon />} color="error.main" /> building
              <InlineIcon icon={<AutoAwesomeIcon />} color="warning.main" /> products.
            </InlineTypography>
          </Box>

          <Box sx={{
          p: 3,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <InlineTypography variant="h3">
              Launch your ideas <InlineIcon icon={<RocketLaunchIcon />} color="primary.main" size={1.2} /> today.
            </InlineTypography>
          </Box>

          <Box sx={{
          p: 3,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <InlineTypography variant="body1">
              This feature received <InlineIcon icon={<StarIcon />} color="warning.main" />
              <InlineIcon icon={<StarIcon />} color="warning.main" />
              <InlineIcon icon={<StarIcon />} color="warning.main" />
              <InlineIcon icon={<StarIcon />} color="warning.main" />
              <InlineIcon icon={<StarIcon />} color="warning.main" /> 5-star rating from our users.
            </InlineTypography>
          </Box>
        </Stack>

        <SectionTitle title="With Images" description="이미지를 텍스트와 함께 배치합니다." />
        <Stack spacing={3}>
          <Box sx={{
          p: 3,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <InlineTypography variant="h4">
              Meet our team:
              <InlineImage src={sampleImages.avatar1} alt="Team member 1" size={1.5} circle hover />
              <InlineImage src={sampleImages.avatar2} alt="Team member 2" size={1.5} circle hover />
              and more talented people.
            </InlineTypography>
          </Box>

          <Box sx={{
          p: 3,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <InlineTypography variant="h3">
              Explore the
              <InlineImage src={sampleImages.landscape} alt="Mountains" size="3em" rounded sx={{
              mx: '0.3em'
            }} />
              world with us.
            </InlineTypography>
          </Box>
        </Stack>

        <SectionTitle title="With Custom Objects" description="InlineObject로 커스텀 요소를 삽입합니다." />
        <Stack spacing={3}>
          <Box sx={{
          p: 3,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <InlineTypography variant="h4">
              Powered by
              <InlineObject size={1.5} spacing={0.3}>
                <Box sx={{
                width: '100%',
                height: '100%',
                backgroundColor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 700,
                fontSize: '0.6em'
              }}>
                  AI
                </Box>
              </InlineObject>
              technology.
            </InlineTypography>
          </Box>

          <Box sx={{
          p: 3,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <InlineTypography variant="h4">
              Status:
              <InlineObject size={0.8} rounded spacing={0.3}>
                <Box sx={{
                width: '100%',
                height: '100%',
                backgroundColor: 'success.main',
                borderRadius: '50%'
              }} />
              </InlineObject>
              Online
            </InlineTypography>
          </Box>
        </Stack>

        <SectionTitle title="Vertical Alignment" description="수직 정렬 옵션입니다." />
        <Stack spacing={3}>
          <Box sx={{
          p: 3,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              align=&quot;middle&quot; (기본)
            </Typography>
            <InlineTypography variant="h4">
              Text with <InlineIcon icon={<StarIcon />} color="primary.main" align="middle" /> icon aligned to middle.
            </InlineTypography>
          </Box>

          <Box sx={{
          p: 3,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              align=&quot;baseline&quot;
            </Typography>
            <InlineTypography variant="h4">
              Text with <InlineIcon icon={<StarIcon />} color="primary.main" align="baseline" /> icon aligned to baseline.
            </InlineTypography>
          </Box>

          <Box sx={{
          p: 3,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              align=&quot;top&quot;
            </Typography>
            <InlineTypography variant="h4">
              Text with <InlineIcon icon={<StarIcon />} color="primary.main" align="top" /> icon aligned to top.
            </InlineTypography>
          </Box>
        </Stack>

        <SectionTitle title="Hover Effects" description="hover 효과를 적용한 인라인 이미지입니다." />
        <Box sx={{
        p: 4,
        border: '1px solid',
        borderColor: 'divider'
      }}>
          <InlineTypography variant="h3">
            Connect with
            <InlineImage src={sampleImages.avatar1} alt="User 1" size={2} circle hover />
            <InlineImage src={sampleImages.avatar2} alt="User 2" size={2} circle hover />
            on our platform.
          </InlineTypography>
          <Typography variant="caption" color="text.secondary" sx={{
          mt: 1,
          display: 'block'
        }}>
            (이미지에 마우스를 올려보세요)
          </Typography>
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
          {\`// 아이콘과 함께
<InlineTypography variant="h4">
  We <InlineIcon icon={<FavoriteIcon />} color="error.main" /> building products.
</InlineTypography>

// 이미지와 함께
<InlineTypography variant="h3">
  Meet our team:
  <InlineImage src="avatar.jpg" alt="Member" size={1.5} circle hover />
</InlineTypography>

// 커스텀 요소
<InlineTypography variant="h4">
  Powered by
  <InlineObject size={1.5}>
    <CustomBadge>AI</CustomBadge>
  </InlineObject>
  technology.
</InlineTypography>\`}
        </Box>
      </PageContainer>
    </>
}`,...I.parameters?.docs?.source},description:{story:"문서 및 데모",...I.parameters?.docs?.description}}};const oe=["Default","Documentation"];export{y as Default,I as Documentation,oe as __namedExportsOrder,ne as default};
