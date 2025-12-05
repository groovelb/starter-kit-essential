import{j as e}from"./iframe-q-XN_VZM.js";import{A as r}from"./AspectMedia-DE5ZL9H3.js";import{t as a,a as m}from"./pexels-test-data-Di7YEpDZ.js";import{B as u}from"./Box-Dmtu8wWb.js";import{G as s}from"./Grid-Dd6PAMTp.js";import{S as x}from"./Stack-BQqDyOBu.js";import{T as l}from"./Typography-C8IUsM00.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-BW0efeYW.js";import"./useTheme-CDdqLoBf.js";import"./styled-D6BANXgS.js";import"./isMuiElement-DpiUmZPP.js";import"./useThemeProps-CFXzbazh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const V={title:"Custom Component/Media/AspectMedia",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
## AspectMedia

이미지 또는 비디오를 지정된 비율로 표시하는 범용 미디어 컴포넌트입니다.

### 핵심 기능
- **CSS aspect-ratio**: 네이티브 비율 유지 (96%+ 브라우저 지원)
- **이미지/비디오 통합**: type prop으로 전환
- **Lazy Loading**: 기본 활성화
- **비디오 제어**: autoPlay, muted, loop, controls 지원

### 용도
- 반응형 이미지 갤러리
- 비디오 썸네일/배경
- 제품 이미지 카드
        `}}},argTypes:{type:{control:"radio",options:["image","video"],description:"미디어 타입",table:{type:{summary:"string"},defaultValue:{summary:"image"}}},aspectRatio:{control:"select",options:["1/1","4/3","3/4","16/9","9/16","21/9"],description:"CSS aspect-ratio 값",table:{type:{summary:"string"},defaultValue:{summary:"16/9"}}},objectFit:{control:"select",options:["cover","contain","fill","none","scale-down"],description:"CSS object-fit 값",table:{type:{summary:"string"},defaultValue:{summary:"cover"}}},isLazy:{control:"boolean",description:"지연 로딩 활성화",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}}}},o={args:{src:a.nature[0].src.medium,alt:a.nature[0].alt,type:"image",aspectRatio:"16/9",objectFit:"cover"},render:t=>e.jsx(u,{sx:{width:400},children:e.jsx(r,{...t})})},i={render:()=>e.jsx(s,{container:!0,spacing:3,sx:{width:800},children:["1/1","4/3","16/9","21/9"].map((t,g)=>e.jsx(s,{size:{xs:6,md:3},children:e.jsxs(x,{spacing:1,children:[e.jsx(r,{src:a.nature[g].src.medium,alt:`Ratio ${t}`,aspectRatio:t}),e.jsx(l,{variant:"caption",sx:{fontFamily:"monospace"},children:t})]})},t))})},n={render:()=>e.jsx(s,{container:!0,spacing:3,sx:{width:800},children:["cover","contain","fill","none"].map(t=>e.jsx(s,{size:{xs:6,md:3},children:e.jsxs(x,{spacing:1,children:[e.jsx(u,{sx:{backgroundColor:"grey.200",p:.5},children:e.jsx(r,{src:a.product[0].src.medium,alt:`Object-fit: ${t}`,aspectRatio:"1/1",objectFit:t})}),e.jsxs(l,{variant:"caption",sx:{fontFamily:"monospace"},children:["objectFit: ",t]})]})},t))})},c={args:{type:"video",src:m.nature[0].src.sd,poster:m.nature[0].poster,aspectRatio:"16/9",isAutoPlay:!0,isMuted:!0,isLoop:!0},render:t=>e.jsx(u,{sx:{width:500},children:e.jsx(r,{...t})})},p={render:()=>e.jsx(u,{sx:{width:500},children:e.jsx(r,{type:"video",src:m.nature[1].src.sd,poster:m.nature[1].poster,aspectRatio:"16/9",hasControls:!0,isMuted:!1})})},d={render:()=>e.jsxs(x,{spacing:4,sx:{width:800},children:[e.jsx(l,{variant:"h6",children:"Nature"}),e.jsx(s,{container:!0,spacing:2,children:a.nature.map(t=>e.jsx(s,{size:{xs:6,md:3},children:e.jsx(r,{src:t.src.small,alt:t.alt,aspectRatio:t.aspectRatio})},t.id))}),e.jsx(l,{variant:"h6",children:"Product"}),e.jsx(s,{container:!0,spacing:2,children:a.product.map(t=>e.jsx(s,{size:{xs:6,md:3},children:e.jsx(r,{src:t.src.small,alt:t.alt,aspectRatio:t.aspectRatio})},t.id))})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    src: testImages.nature[0].src.medium,
    alt: testImages.nature[0].alt,
    type: 'image',
    aspectRatio: '16/9',
    objectFit: 'cover'
  },
  render: args => <Box sx={{
    width: 400
  }}>
      <AspectMedia {...args} />
    </Box>
}`,...o.parameters?.docs?.source},description:{story:"기본 이미지",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={3} sx={{
    width: 800
  }}>
      {['1/1', '4/3', '16/9', '21/9'].map((ratio, idx) => <Grid size={{
      xs: 6,
      md: 3
    }} key={ratio}>
          <Stack spacing={1}>
            <AspectMedia src={testImages.nature[idx].src.medium} alt={\`Ratio \${ratio}\`} aspectRatio={ratio} />
            <Typography variant="caption" sx={{
          fontFamily: 'monospace'
        }}>
              {ratio}
            </Typography>
          </Stack>
        </Grid>)}
    </Grid>
}`,...i.parameters?.docs?.source},description:{story:"다양한 비율",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={3} sx={{
    width: 800
  }}>
      {['cover', 'contain', 'fill', 'none'].map(fit => <Grid size={{
      xs: 6,
      md: 3
    }} key={fit}>
          <Stack spacing={1}>
            <Box sx={{
          backgroundColor: 'grey.200',
          p: 0.5
        }}>
              <AspectMedia src={testImages.product[0].src.medium} alt={\`Object-fit: \${fit}\`} aspectRatio="1/1" objectFit={fit} />
            </Box>
            <Typography variant="caption" sx={{
          fontFamily: 'monospace'
        }}>
              objectFit: {fit}
            </Typography>
          </Stack>
        </Grid>)}
    </Grid>
}`,...n.parameters?.docs?.source},description:{story:"Object Fit 비교",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'video',
    src: testVideos.nature[0].src.sd,
    poster: testVideos.nature[0].poster,
    aspectRatio: '16/9',
    isAutoPlay: true,
    isMuted: true,
    isLoop: true
  },
  render: args => <Box sx={{
    width: 500
  }}>
      <AspectMedia {...args} />
    </Box>
}`,...c.parameters?.docs?.source},description:{story:"비디오",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 500
  }}>
      <AspectMedia type="video" src={testVideos.nature[1].src.sd} poster={testVideos.nature[1].poster} aspectRatio="16/9" hasControls isMuted={false} />
    </Box>
}`,...p.parameters?.docs?.source},description:{story:"비디오 with Controls",...p.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={4} sx={{
    width: 800
  }}>
      <Typography variant="h6">Nature</Typography>
      <Grid container spacing={2}>
        {testImages.nature.map(img => <Grid size={{
        xs: 6,
        md: 3
      }} key={img.id}>
            <AspectMedia src={img.src.small} alt={img.alt} aspectRatio={img.aspectRatio} />
          </Grid>)}
      </Grid>

      <Typography variant="h6">Product</Typography>
      <Grid container spacing={2}>
        {testImages.product.map(img => <Grid size={{
        xs: 6,
        md: 3
      }} key={img.id}>
            <AspectMedia src={img.src.small} alt={img.alt} aspectRatio={img.aspectRatio} />
          </Grid>)}
      </Grid>
    </Stack>
}`,...d.parameters?.docs?.source},description:{story:"카테고리별 이미지 갤러리",...d.parameters?.docs?.description}}};const C=["Default","AspectRatios","ObjectFitOptions","Video","VideoWithControls","ImageGallery"];export{i as AspectRatios,o as Default,d as ImageGallery,n as ObjectFitOptions,c as Video,p as VideoWithControls,C as __namedExportsOrder,V as default};
