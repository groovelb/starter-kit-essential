import{j as e}from"./iframe-q-XN_VZM.js";import{M as n}from"./Masonry-YhtJCdL7.js";import{B as t}from"./Box-Dmtu8wWb.js";import{s as m}from"./memoTheme-BW0efeYW.js";import{P as x}from"./Paper-ri-B2SDS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DUeF1Pkm.js";import"./index-C2SgXQAb.js";import"./useThemeProps-CFXzbazh.js";import"./useTheme-CDdqLoBf.js";const d=[150,90,180,120,200,100,160,130,170,110,140,190],h=m(x)(({theme:s})=>({backgroundColor:s.palette.grey[100],...s.typography.body2,padding:s.spacing(2),textAlign:"center",color:s.palette.text.secondary,border:`1px solid ${s.palette.grey[300]}`,...s.applyStyles("dark",{backgroundColor:"#1A2027",borderColor:s.palette.grey[700]})})),u=m(x)(({theme:s})=>({padding:s.spacing(2),textAlign:"center",backgroundColor:s.palette.primary.main,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center"})),y=m(t)({borderRadius:4,overflow:"hidden","& img":{width:"100%",height:"auto",display:"block"}}),D={title:"MUI Component/Layout/Masonry",component:n,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
## Masonry

\`@mui/lab\`의 Masonry 컴포넌트입니다. **Pinterest 스타일**의 가변 높이 그리드 레이아웃을 구현합니다.

### Grid와의 차이점

| Grid | Masonry |
|------|---------|
| Flexbox 기반 | CSS columns 기반 |
| 행 높이 균등 | 개별 아이템 높이 유지 |
| 가로 → 세로 순서 | 세로 → 가로 순서 |
| 일반 레이아웃 | 이미지 갤러리, 카드 목록 |

### 사용 시나리오
- 이미지 갤러리 (다양한 비율)
- 카드 목록 (다양한 콘텐츠 길이)
- Pinterest/Behance 스타일 레이아웃

### 주요 Props

| Prop | 타입 | 설명 |
|------|------|------|
| \`columns\` | number \\| object | 컬럼 수 (반응형 지원) |
| \`spacing\` | number | 아이템 간 간격 (8px 단위) |
| \`defaultColumns\` | number | SSR용 기본 컬럼 수 |
| \`defaultSpacing\` | number | SSR용 기본 간격 |
        `}}},argTypes:{columns:{control:"select",options:[1,2,3,4,5,6],description:"컬럼 수를 지정합니다.",table:{type:{summary:"number | object"},defaultValue:{summary:"4"}}},spacing:{control:"select",options:[0,1,2,3,4],description:"아이템 간 간격 (8px 단위)",table:{type:{summary:"number"},defaultValue:{summary:"1"}}}}},a={args:{columns:4,spacing:2},render:({columns:s,spacing:o})=>e.jsx(t,{sx:{width:"100%"},children:e.jsx(n,{columns:s,spacing:o,children:d.map((r,g)=>e.jsx(h,{sx:{height:r},children:g+1},g))})})},i={render:()=>e.jsx(t,{sx:{width:"100%"},children:e.jsx(n,{columns:{xs:1,sm:2,md:3,lg:4},spacing:2,children:d.map((s,o)=>e.jsx(u,{sx:{height:s},children:o+1},o))})})},p={render:()=>{const s=[{id:1,src:"https://images.pexels.com/photos/2110951/pexels-photo-2110951.jpeg?auto=compress&cs=tinysrgb&w=400",alt:"Abstract fluid art"},{id:2,src:"https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=400",alt:"Oil painting"},{id:3,src:"https://images.pexels.com/photos/2832468/pexels-photo-2832468.jpeg?auto=compress&cs=tinysrgb&w=400",alt:"Digital illustration"},{id:4,src:"https://images.pexels.com/photos/752484/pexels-photo-752484.jpeg?auto=compress&cs=tinysrgb&w=400",alt:"Typography poster"},{id:5,src:"https://images.pexels.com/photos/3109807/pexels-photo-3109807.jpeg?auto=compress&cs=tinysrgb&w=400",alt:"Gradient mesh"},{id:6,src:"https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=400",alt:"Acrylic painting"},{id:7,src:"https://images.pexels.com/photos/3493730/pexels-photo-3493730.jpeg?auto=compress&cs=tinysrgb&w=400",alt:"Surreal art"},{id:8,src:"https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg?auto=compress&cs=tinysrgb&w=400",alt:"Fluid gradient"}];return e.jsx(t,{sx:{width:"100%"},children:e.jsx(n,{columns:{xs:2,sm:3,md:4},spacing:2,children:s.map(o=>e.jsx(y,{children:e.jsx("img",{src:o.src,alt:o.alt,loading:"lazy"})},o.id))})})}},c={render:()=>e.jsx(t,{sx:{display:"flex",flexDirection:"column",gap:4},children:[1,2,3].map(s=>e.jsxs(t,{children:[e.jsxs(t,{sx:{mb:1,fontWeight:600},children:["spacing=",s]}),e.jsx(n,{columns:4,spacing:s,children:[100,80,120,90].map((o,r)=>e.jsx(h,{sx:{height:o},children:r+1},r))})]},s))})},l={render:()=>e.jsx(t,{sx:{display:"flex",flexDirection:"column",gap:4},children:[2,3,4,5].map(s=>e.jsxs(t,{children:[e.jsxs(t,{sx:{mb:1,fontWeight:600},children:["columns=",s]}),e.jsx(n,{columns:s,spacing:1,children:d.slice(0,8).map((o,r)=>e.jsx(u,{sx:{height:o},children:r+1},r))})]},s))})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    columns: 4,
    spacing: 2
  },
  render: ({
    columns,
    spacing
  }) => <Box sx={{
    width: '100%'
  }}>
      <Masonry columns={columns} spacing={spacing}>
        {heights.map((height, index) => <Item key={index} sx={{
        height
      }}>
            {index + 1}
          </Item>)}
      </Masonry>
    </Box>
}`,...a.parameters?.docs?.source},description:{story:"기본 Masonry - 다양한 높이의 아이템",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: '100%'
  }}>
      <Masonry columns={{
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    }} spacing={2}>
        {heights.map((height, index) => <ColoredItem key={index} sx={{
        height
      }}>
            {index + 1}
          </ColoredItem>)}
      </Masonry>
    </Box>
}`,...i.parameters?.docs?.source},description:{story:"반응형 컬럼 - 브레이크포인트별 컬럼 수",...i.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    // 디자인 결과물 이미지 (abstract, fineart, illustration, poster, gradient)
    const images = [{
      id: 1,
      src: 'https://images.pexels.com/photos/2110951/pexels-photo-2110951.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Abstract fluid art'
    }, {
      id: 2,
      src: 'https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Oil painting'
    }, {
      id: 3,
      src: 'https://images.pexels.com/photos/2832468/pexels-photo-2832468.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Digital illustration'
    }, {
      id: 4,
      src: 'https://images.pexels.com/photos/752484/pexels-photo-752484.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Typography poster'
    }, {
      id: 5,
      src: 'https://images.pexels.com/photos/3109807/pexels-photo-3109807.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Gradient mesh'
    }, {
      id: 6,
      src: 'https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Acrylic painting'
    }, {
      id: 7,
      src: 'https://images.pexels.com/photos/3493730/pexels-photo-3493730.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Surreal art'
    }, {
      id: 8,
      src: 'https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Fluid gradient'
    }];
    return <Box sx={{
      width: '100%'
    }}>
        <Masonry columns={{
        xs: 2,
        sm: 3,
        md: 4
      }} spacing={2}>
          {images.map(image => <ImageItem key={image.id}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </ImageItem>)}
        </Masonry>
      </Box>;
  }
}`,...p.parameters?.docs?.source},description:{story:"이미지 갤러리 - 실제 이미지로 Masonry 효과",...p.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  }}>
      {[1, 2, 3].map(spacing => <Box key={spacing}>
          <Box sx={{
        mb: 1,
        fontWeight: 600
      }}>spacing={spacing}</Box>
          <Masonry columns={4} spacing={spacing}>
            {[100, 80, 120, 90].map((height, index) => <Item key={index} sx={{
          height
        }}>
                {index + 1}
              </Item>)}
          </Masonry>
        </Box>)}
    </Box>
}`,...c.parameters?.docs?.source},description:{story:"Spacing 비교",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  }}>
      {[2, 3, 4, 5].map(columns => <Box key={columns}>
          <Box sx={{
        mb: 1,
        fontWeight: 600
      }}>columns={columns}</Box>
          <Masonry columns={columns} spacing={1}>
            {heights.slice(0, 8).map((height, index) => <ColoredItem key={index} sx={{
          height
        }}>
                {index + 1}
              </ColoredItem>)}
          </Masonry>
        </Box>)}
    </Box>
}`,...l.parameters?.docs?.source},description:{story:"컬럼 수 비교",...l.parameters?.docs?.description}}};const A=["Default","Responsive","ImageGallery","SpacingComparison","ColumnsComparison"];export{l as ColumnsComparison,a as Default,p as ImageGallery,i as Responsive,c as SpacingComparison,A as __namedExportsOrder,D as default};
