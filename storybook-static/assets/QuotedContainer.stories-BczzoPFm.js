import{r as Q,j as e,x as D}from"./iframe-q-XN_VZM.js";import{D as F,P as J,S as q}from"./SectionTitle-B-E4QVff.js";import{B as t}from"./Box-Dmtu8wWb.js";import{T as l}from"./Typography-C8IUsM00.js";import{b as P,a as O,c as a,T as o,d as W}from"./TableRow-DxwoBvdd.js";import{T as A}from"./TableHead-CFjEf5Al.js";import{S as w}from"./Stack-BQqDyOBu.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CDdqLoBf.js";import"./Container-q5yveaGP.js";import"./memoTheme-BW0efeYW.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./Grid-Dd6PAMTp.js";import"./isMuiElement-DpiUmZPP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function m({name:x,size:f=24,fill:d=!1,weight:p=400,color:s="inherit",sx:i={}}){return e.jsx(t,{component:"span",className:"material-symbols-rounded",sx:{fontSize:f,color:s,fontVariationSettings:`'FILL' ${d?1:0}, 'wght' ${p}`,lineHeight:1,display:"inline-flex",alignItems:"center",justifyContent:"center",...i},children:x})}const z=D`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;function r({children:x,quoteSize:f="lg",quoteColor:d="text.disabled",position:p="outside",animated:s=!1,author:i,variant:C="h4",align:c="left",sx:g,...j}){const h=Q.useRef(null),[y,B]=Q.useState(!s);Q.useEffect(()=>{if(!s)return;const S=new IntersectionObserver(([R])=>{R.isIntersecting&&(B(!0),S.disconnect())},{threshold:.3}),k=h.current;return k&&S.observe(k),()=>S.disconnect()},[s]);const v={sm:20,md:28,lg:36,xl:48}[f],T={opacity:s&&!y?0:p==="overlay"?.12:.3,animation:s&&y?`${z} 0.4s ease-out forwards`:"none",flexShrink:0};return p==="outside"?e.jsxs(t,{ref:h,sx:{textAlign:c,...g},...j,children:[e.jsxs(l,{variant:C,component:"blockquote",sx:{fontWeight:400,lineHeight:1.6,textAlign:c,m:0,position:"relative"},children:[e.jsx(m,{name:"format_quote",size:v,fill:!0,color:d,sx:{...T,transform:"scaleX(-1) translateY(-0.15em)",verticalAlign:"top",mr:"0.1em",ml:"-0.1em"}}),x,e.jsx(m,{name:"format_quote",size:v,fill:!0,color:d,sx:{...T,transform:"translateY(0.15em)",verticalAlign:"bottom",ml:"0.1em",mr:"-0.1em",animationDelay:"0.15s"}})]}),i&&e.jsx(l,{variant:"body2",component:"cite",sx:{display:"block",mt:2,fontStyle:"normal",color:"text.secondary",textAlign:c,"&::before":{content:'"— "'}},children:i})]}):p==="inside"?e.jsxs(t,{ref:h,sx:{textAlign:c,...g},...j,children:[e.jsxs(l,{variant:C,component:"blockquote",sx:{fontWeight:400,lineHeight:1.6,m:0},children:[e.jsx(m,{name:"format_quote",size:"0.8em",fill:!0,color:d,sx:{...T,transform:"scaleX(-1) translateY(-0.2em)",verticalAlign:"top",mr:"0.05em"}}),x,e.jsx(m,{name:"format_quote",size:"0.8em",fill:!0,color:d,sx:{...T,transform:"translateY(0.2em)",verticalAlign:"bottom",ml:"0.05em",animationDelay:"0.15s"}})]}),i&&e.jsx(l,{variant:"body2",component:"cite",sx:{display:"block",mt:2,fontStyle:"normal",color:"text.secondary","&::before":{content:'"— "'}},children:i})]}):p==="overlay"?e.jsxs(t,{ref:h,sx:{position:"relative",textAlign:c,py:3,...g},...j,children:[e.jsx(m,{name:"format_quote",size:v*4,fill:!0,color:d,sx:{position:"absolute",left:c==="right"?"auto":0,right:c==="right"?0:"auto",top:0,transform:"scaleX(-1)",opacity:s&&!y?0:.06,animation:s&&y?`${z} 0.4s ease-out forwards`:"none",pointerEvents:"none",zIndex:0}}),e.jsxs(t,{sx:{position:"relative",zIndex:1},children:[e.jsx(l,{variant:C,component:"blockquote",sx:{fontWeight:400,lineHeight:1.6,m:0},children:x}),i&&e.jsx(l,{variant:"body2",component:"cite",sx:{display:"block",mt:2,fontStyle:"normal",color:"text.secondary","&::before":{content:'"— "'}},children:i})]})]}):null}r.__docgenInfo={description:`QuotedContainer 컴포넌트

인용 부호를 텍스트의 시작/끝 위치에 스마트하게 배치하는 컴포넌트.
대형 장식적 인용 부호로 인용문을 시각적으로 강조한다.

동작 방식:
1. 텍스트 주변에 장식적인 인용 부호가 배치됨
2. quoteStyle에 따라 다양한 인용 부호 문자 사용
3. position에 따라 인용 부호의 위치가 조정됨
4. animated가 true면 viewport 진입 시 애니메이션 실행

Props:
@param {string} children - 인용할 텍스트 [Required]
@param {string} quoteSize - 인용 부호 크기 ('sm' | 'md' | 'lg' | 'xl') [Optional, 기본값: 'lg']
@param {string} quoteColor - 인용 부호 색상 [Optional, 기본값: 'text.disabled']
@param {string} position - 인용 부호 위치 ('outside' | 'inside' | 'overlay') [Optional, 기본값: 'outside']
@param {boolean} animated - 등장 애니메이션 [Optional, 기본값: false]
@param {string} author - 인용 출처/저자 [Optional]
@param {string} variant - 타이포그래피 variant [Optional, 기본값: 'h4']
@param {string} align - 텍스트 정렬 ('left' | 'center' | 'right') [Optional, 기본값: 'left']
@param {object} sx - 추가 스타일 오버라이드 [Optional]

Example usage:
<QuotedContainer>Design is how it works.</QuotedContainer>
<QuotedContainer author="Steve Jobs">
  Design is not just what it looks like.
</QuotedContainer>`,methods:[],displayName:"QuotedContainer",props:{quoteSize:{defaultValue:{value:"'lg'",computed:!1},required:!1},quoteColor:{defaultValue:{value:"'text.disabled'",computed:!1},required:!1},position:{defaultValue:{value:"'outside'",computed:!1},required:!1},animated:{defaultValue:{value:"false",computed:!1},required:!1},variant:{defaultValue:{value:"'h4'",computed:!1},required:!1},align:{defaultValue:{value:"'left'",computed:!1},required:!1}}};const te={title:"Custom Component/Typography/QuotedContainer",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
## QuotedContainer

인용 부호를 텍스트의 시작/끝 위치에 스마트하게 배치하는 컴포넌트.

### 용도
- 인용문을 시각적으로 강조
- Editorial 스타일의 큰 인용 부호 장식
- 다양한 인용 부호 스타일 지원
        `}}},argTypes:{children:{control:{type:"text"},description:"인용할 텍스트"},quoteSize:{control:{type:"select"},options:["sm","md","lg","xl"],description:"인용 부호 크기"},quoteColor:{control:{type:"select"},options:["text.disabled","text.secondary","primary.main","secondary.main","#000000","#666666"],description:"인용 부호 색상"},position:{control:{type:"select"},options:["outside","inside","overlay"],description:"인용 부호 위치"},animated:{control:{type:"boolean"},description:"등장 애니메이션"},author:{control:{type:"text"},description:"인용 출처/저자"},variant:{control:{type:"select"},options:["h3","h4","h5","h6","body1","body2"],description:"타이포그래피 variant"},align:{control:{type:"select"},options:["left","center","right"],description:"텍스트 정렬"}}},n={short:"Design is not just what it looks like. Design is how it works.",medium:"The details are not the details. They make the design. A design is not complete until the user finds it obvious."},b={args:{children:n.short,quoteSize:"lg",quoteColor:"text.disabled",position:"outside",animated:!1,author:"Steve Jobs",variant:"h4",align:"left"}},u={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(F,{title:"QuotedContainer",status:"Available",note:"Place quote marks around text",brandName:"Typography",systemName:"Starter Kit",version:"1.0"}),e.jsxs(J,{children:[e.jsx(l,{variant:"h4",sx:{fontWeight:700,mb:1},children:"QuotedContainer"}),e.jsx(l,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"인용 부호를 텍스트의 시작/끝 위치에 스마트하게 배치하는 컴포넌트입니다. 대형 장식적 인용 부호로 인용문을 시각적으로 강조합니다."}),e.jsx(q,{title:"Props",description:"QuotedContainer 컴포넌트의 Props 목록입니다."}),e.jsx(P,{children:e.jsxs(O,{size:"small",children:[e.jsx(A,{children:e.jsxs(a,{children:[e.jsx(o,{sx:{fontWeight:600},children:"Prop"}),e.jsx(o,{sx:{fontWeight:600},children:"Type"}),e.jsx(o,{sx:{fontWeight:600},children:"Default"}),e.jsx(o,{sx:{fontWeight:600},children:"Description"})]})}),e.jsxs(W,{children:[e.jsxs(a,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"children"}),e.jsx(o,{children:"string"}),e.jsx(o,{children:"-"}),e.jsx(o,{children:"인용할 텍스트 (필수)"})]}),e.jsxs(a,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"quoteSize"}),e.jsx(o,{children:"'sm' | 'md' | 'lg' | 'xl'"}),e.jsx(o,{children:"'lg'"}),e.jsx(o,{children:"인용 부호 크기"})]}),e.jsxs(a,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"quoteColor"}),e.jsx(o,{children:"string"}),e.jsx(o,{children:"'text.disabled'"}),e.jsx(o,{children:"인용 부호 색상"})]}),e.jsxs(a,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"position"}),e.jsx(o,{children:"'outside' | 'inside' | 'overlay'"}),e.jsx(o,{children:"'outside'"}),e.jsx(o,{children:"인용 부호 위치"})]}),e.jsxs(a,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"animated"}),e.jsx(o,{children:"boolean"}),e.jsx(o,{children:"false"}),e.jsx(o,{children:"등장 애니메이션"})]}),e.jsxs(a,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"author"}),e.jsx(o,{children:"string"}),e.jsx(o,{children:"-"}),e.jsx(o,{children:"인용 출처/저자"})]}),e.jsxs(a,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"variant"}),e.jsx(o,{children:"string"}),e.jsx(o,{children:"'h4'"}),e.jsx(o,{children:"타이포그래피 variant"})]}),e.jsxs(a,{children:[e.jsx(o,{sx:{fontFamily:"monospace"},children:"align"}),e.jsx(o,{children:"'left' | 'center' | 'right'"}),e.jsx(o,{children:"'left'"}),e.jsx(o,{children:"텍스트 정렬"})]})]})]})}),e.jsx(q,{title:"Quote Size",description:"네 가지 인용 부호 크기입니다."}),e.jsxs(w,{spacing:4,children:[e.jsxs(t,{sx:{p:4,border:"1px solid",borderColor:"divider"},children:[e.jsx(l,{variant:"caption",sx:{mb:2,display:"block",color:"text.secondary"},children:"Small (sm)"}),e.jsx(r,{quoteSize:"sm",author:"Steve Jobs",children:n.short})]}),e.jsxs(t,{sx:{p:4,border:"1px solid",borderColor:"divider"},children:[e.jsx(l,{variant:"caption",sx:{mb:2,display:"block",color:"text.secondary"},children:"Medium (md)"}),e.jsx(r,{quoteSize:"md",author:"Steve Jobs",children:n.short})]}),e.jsxs(t,{sx:{p:4,border:"1px solid",borderColor:"divider"},children:[e.jsx(l,{variant:"caption",sx:{mb:2,display:"block",color:"text.secondary"},children:"Large (lg) - Default"}),e.jsx(r,{quoteSize:"lg",author:"Steve Jobs",children:n.short})]}),e.jsxs(t,{sx:{p:4,border:"1px solid",borderColor:"divider"},children:[e.jsx(l,{variant:"caption",sx:{mb:2,display:"block",color:"text.secondary"},children:"Extra Large (xl)"}),e.jsx(r,{quoteSize:"xl",author:"Steve Jobs",children:n.short})]})]}),e.jsx(q,{title:"Position Variants",description:"세 가지 인용 부호 위치 옵션입니다."}),e.jsxs(w,{spacing:5,children:[e.jsxs(t,{children:[e.jsx(l,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:"Outside (기본) - 첫 글자 좌상단, 마지막 글자 우하단"}),e.jsx(t,{sx:{p:4,border:"1px solid",borderColor:"divider"},children:e.jsx(r,{position:"outside",author:"Steve Jobs",children:n.short})})]}),e.jsxs(t,{children:[e.jsx(l,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:"Inside - 더 작은 아이콘, 텍스트에 밀착"}),e.jsx(t,{sx:{p:4,border:"1px solid",borderColor:"divider"},children:e.jsx(r,{position:"inside",author:"Steve Jobs",children:n.short})})]}),e.jsxs(t,{children:[e.jsx(l,{variant:"subtitle2",sx:{mb:1,color:"text.secondary"},children:"Overlay - 텍스트 뒤에 배경 장식"}),e.jsx(t,{sx:{p:4,border:"1px solid",borderColor:"divider"},children:e.jsx(r,{position:"overlay",author:"Dieter Rams",children:n.medium})})]})]})]})]})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: sampleQuotes.short,
    quoteSize: 'lg',
    quoteColor: 'text.disabled',
    position: 'outside',
    animated: false,
    author: 'Steve Jobs',
    variant: 'h4',
    align: 'left'
  }
}`,...b.parameters?.docs?.source},description:{story:"기본 사용",...b.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <DocumentTitle title="QuotedContainer" status="Available" note="Place quote marks around text" brandName="Typography" systemName="Starter Kit" version="1.0" />
      <PageContainer>
        <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          QuotedContainer
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{
        mb: 4
      }}>
          인용 부호를 텍스트의 시작/끝 위치에 스마트하게 배치하는 컴포넌트입니다.
          대형 장식적 인용 부호로 인용문을 시각적으로 강조합니다.
        </Typography>

        <SectionTitle title="Props" description="QuotedContainer 컴포넌트의 Props 목록입니다." />
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
              }}>children</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>인용할 텍스트 (필수)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>quoteSize</TableCell>
                <TableCell>&apos;sm&apos; | &apos;md&apos; | &apos;lg&apos; | &apos;xl&apos;</TableCell>
                <TableCell>&apos;lg&apos;</TableCell>
                <TableCell>인용 부호 크기</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>quoteColor</TableCell>
                <TableCell>string</TableCell>
                <TableCell>&apos;text.disabled&apos;</TableCell>
                <TableCell>인용 부호 색상</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>position</TableCell>
                <TableCell>&apos;outside&apos; | &apos;inside&apos; | &apos;overlay&apos;</TableCell>
                <TableCell>&apos;outside&apos;</TableCell>
                <TableCell>인용 부호 위치</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>animated</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>등장 애니메이션</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>author</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>인용 출처/저자</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>variant</TableCell>
                <TableCell>string</TableCell>
                <TableCell>&apos;h4&apos;</TableCell>
                <TableCell>타이포그래피 variant</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{
                fontFamily: 'monospace'
              }}>align</TableCell>
                <TableCell>&apos;left&apos; | &apos;center&apos; | &apos;right&apos;</TableCell>
                <TableCell>&apos;left&apos;</TableCell>
                <TableCell>텍스트 정렬</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="Quote Size" description="네 가지 인용 부호 크기입니다." />
        <Stack spacing={4}>
          <Box sx={{
          p: 4,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <Typography variant="caption" sx={{
            mb: 2,
            display: 'block',
            color: 'text.secondary'
          }}>
              Small (sm)
            </Typography>
            <QuotedContainer quoteSize="sm" author="Steve Jobs">
              {sampleQuotes.short}
            </QuotedContainer>
          </Box>
          <Box sx={{
          p: 4,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <Typography variant="caption" sx={{
            mb: 2,
            display: 'block',
            color: 'text.secondary'
          }}>
              Medium (md)
            </Typography>
            <QuotedContainer quoteSize="md" author="Steve Jobs">
              {sampleQuotes.short}
            </QuotedContainer>
          </Box>
          <Box sx={{
          p: 4,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <Typography variant="caption" sx={{
            mb: 2,
            display: 'block',
            color: 'text.secondary'
          }}>
              Large (lg) - Default
            </Typography>
            <QuotedContainer quoteSize="lg" author="Steve Jobs">
              {sampleQuotes.short}
            </QuotedContainer>
          </Box>
          <Box sx={{
          p: 4,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <Typography variant="caption" sx={{
            mb: 2,
            display: 'block',
            color: 'text.secondary'
          }}>
              Extra Large (xl)
            </Typography>
            <QuotedContainer quoteSize="xl" author="Steve Jobs">
              {sampleQuotes.short}
            </QuotedContainer>
          </Box>
        </Stack>

        <SectionTitle title="Position Variants" description="세 가지 인용 부호 위치 옵션입니다." />
        <Stack spacing={5}>
          <Box>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              Outside (기본) - 첫 글자 좌상단, 마지막 글자 우하단
            </Typography>
            <Box sx={{
            p: 4,
            border: '1px solid',
            borderColor: 'divider'
          }}>
              <QuotedContainer position="outside" author="Steve Jobs">
                {sampleQuotes.short}
              </QuotedContainer>
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              Inside - 더 작은 아이콘, 텍스트에 밀착
            </Typography>
            <Box sx={{
            p: 4,
            border: '1px solid',
            borderColor: 'divider'
          }}>
              <QuotedContainer position="inside" author="Steve Jobs">
                {sampleQuotes.short}
              </QuotedContainer>
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={{
            mb: 1,
            color: 'text.secondary'
          }}>
              Overlay - 텍스트 뒤에 배경 장식
            </Typography>
            <Box sx={{
            p: 4,
            border: '1px solid',
            borderColor: 'divider'
          }}>
              <QuotedContainer position="overlay" author="Dieter Rams">
                {sampleQuotes.medium}
              </QuotedContainer>
            </Box>
          </Box>
        </Stack>
      </PageContainer>
    </>
}`,...u.parameters?.docs?.source},description:{story:"문서 및 데모",...u.parameters?.docs?.description}}};const le=["Default","Documentation"];export{b as Default,u as Documentation,le as __namedExportsOrder,te as default};
