import{j as o}from"./iframe-q-XN_VZM.js";import{F as u}from"./FavoriteBorder-DF40WW_l.js";import{A as b}from"./Add-DsnlUBfa.js";import{c as C}from"./createSvgIcon-CvYdi5pS.js";import{C as t}from"./CustomCard-BaRKR-AP.js";import{T as e}from"./Typography-C8IUsM00.js";import{B as j}from"./Button-Coknce8O.js";import{B as r}from"./Box-Dmtu8wWb.js";import{I as y}from"./IconButton-BSXa4zK8.js";import{C as v}from"./Chip-CBvZjQD4.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-BW0efeYW.js";import"./CardContainer-B3rD2Xhu.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-JbB1eRtB.js";import"./useTimeout-C6lNLwyh.js";import"./CircularProgress-K6SSDdjw.js";import"./useSlot-Xw8rJOQc.js";import"./isHostComponent-DVu5iVWx.js";const w=C(o.jsx("path",{d:"M8 5v14l11-7z"})),D={title:"Custom Component/Card/CustomCard",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
## CustomCard

미디어 영역과 콘텐츠 영역으로 구성된 기본 카드 컴포넌트.
ImageCard, MoodboardCard 등 다양한 카드 컴포넌트의 기반이 됩니다.

### 레이아웃 타입
- **vertical**: 미디어가 위, 콘텐츠가 아래 (기본값)
- **horizontal**: 미디어와 콘텐츠가 좌우 배치
- **overlay**: 미디어 위에 콘텐츠가 오버레이

### 미디어 비율
- \`1/1\`: 정사각형
- \`4/3\`: 표준 사진 비율
- \`16/9\`: 와이드스크린
- \`21/9\`: 울트라와이드
- \`auto\`: 원본 이미지 비율 유지
        `}}},argTypes:{layout:{control:"select",options:["vertical","horizontal","overlay"],description:"카드 레이아웃 타입"},mediaPosition:{control:"select",options:["start","end"],description:"미디어 위치"},mediaRatio:{control:"select",options:["1/1","4/3","16/9","21/9","auto"],description:"미디어 영역 비율"},contentPadding:{control:"select",options:["none","sm","md","lg"],description:"콘텐츠 영역 패딩"},contentAlign:{control:"select",options:["start","center","end"],description:"콘텐츠 정렬"},isInteractive:{control:"boolean",description:"호버 인터랙션 효과"}}},a={args:{layout:"vertical",mediaSrc:"https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=600",mediaAlt:"Sample image",mediaRatio:"16/9",contentPadding:"md"},render:s=>o.jsxs(t,{...s,sx:{width:320},children:[o.jsx(e,{variant:"h6",sx:{fontWeight:600,mb:1},children:"카드 제목"}),o.jsx(e,{variant:"body2",color:"text.secondary",children:"CustomCard는 다양한 레이아웃을 지원하는 기본 카드 컴포넌트입니다."})]})},i={render:()=>o.jsxs(t,{layout:"horizontal",mediaSrc:"https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600",mediaRatio:"1/1",contentPadding:"md",sx:{width:480},children:[o.jsx(e,{variant:"h6",sx:{fontWeight:600,mb:1},children:"Horizontal 레이아웃"}),o.jsx(e,{variant:"body2",color:"text.secondary",sx:{mb:2},children:"미디어와 콘텐츠가 좌우로 배치됩니다."}),o.jsx(j,{variant:"outlined",size:"small",sx:{textTransform:"none"},children:"자세히 보기"})]})},n={render:()=>o.jsxs(t,{layout:"horizontal",mediaPosition:"end",mediaSrc:"https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=600",mediaRatio:"1/1",contentPadding:"md",sx:{width:480},children:[o.jsx(e,{variant:"h6",sx:{fontWeight:600,mb:1},children:"미디어가 오른쪽에"}),o.jsx(e,{variant:"body2",color:"text.secondary",children:'mediaPosition="end"로 미디어를 오른쪽에 배치합니다.'})]})},p={render:()=>o.jsxs(t,{layout:"overlay",mediaSrc:"https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600",contentPadding:"lg",sx:{width:400,height:300},children:[o.jsx(e,{variant:"h5",sx:{fontWeight:700,mb:1},children:"Overlay 레이아웃"}),o.jsx(e,{variant:"body2",sx:{opacity:.9},children:"미디어 위에 콘텐츠가 오버레이됩니다. 그라데이션 배경으로 텍스트 가독성을 확보합니다."})]})},d={render:()=>o.jsx(r,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:["1/1","4/3","16/9","21/9"].map(s=>o.jsx(t,{mediaSrc:"https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=600",mediaRatio:s,contentPadding:"sm",sx:{width:200},children:o.jsx(e,{variant:"body2",sx:{fontWeight:600},children:s})},s))})},c={render:()=>o.jsxs(r,{sx:{display:"flex",gap:2,alignItems:"flex-start"},children:[o.jsx(t,{mediaSrc:"https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=600",mediaRatio:"auto",contentPadding:"sm",sx:{width:200},children:o.jsx(e,{variant:"body2",sx:{fontWeight:600},children:"가로 이미지 (auto)"})}),o.jsx(t,{mediaSrc:"https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600",mediaRatio:"auto",contentPadding:"sm",sx:{width:200},children:o.jsx(e,{variant:"body2",sx:{fontWeight:600},children:"세로 이미지 (auto)"})})]})},m={render:()=>o.jsxs(t,{mediaSrc:"https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=600",mediaRatio:"4/3",contentPadding:"sm",overlaySlot:o.jsxs(r,{sx:{position:"absolute",top:8,right:8,display:"flex",gap:.5},children:[o.jsx(y,{size:"small",sx:{bgcolor:"background.paper",boxShadow:1,"&:hover":{bgcolor:"white"}},children:o.jsx(u,{fontSize:"small"})}),o.jsx(y,{size:"small",sx:{bgcolor:"primary.main",color:"white",boxShadow:1,"&:hover":{bgcolor:"primary.dark"}},children:o.jsx(b,{fontSize:"small"})})]}),sx:{width:280},children:[o.jsx(e,{variant:"body2",sx:{fontWeight:600},children:"overlaySlot 사용"}),o.jsx(e,{variant:"caption",color:"text.secondary",children:"미디어 위에 액션 버튼 오버레이"})]})},l={render:()=>o.jsxs(t,{mediaSlot:o.jsx(r,{sx:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridTemplateRows:"repeat(2, 1fr)",gap:"2px",width:"100%",aspectRatio:"1/1",backgroundColor:"grey.200"},children:[1,2,3,4].map(s=>o.jsx(r,{component:"img",src:`https://picsum.photos/seed/${s}/200/200`,alt:`Image ${s}`,sx:{width:"100%",height:"100%",objectFit:"cover"}},s))}),contentPadding:"md",sx:{width:280},children:[o.jsx(e,{variant:"subtitle1",sx:{fontWeight:700},children:"커스텀 미디어 슬롯"}),o.jsx(e,{variant:"body2",color:"text.secondary",children:"2×2 썸네일 그리드"})]})},h={render:()=>o.jsxs(t,{mediaSrc:"https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600",mediaRatio:"16/9",contentPadding:"md",isInteractive:!0,onClick:()=>console.log("Card clicked!"),overlaySlot:o.jsx(r,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:o.jsx(y,{sx:{bgcolor:"rgba(0,0,0,0.6)",color:"white","&:hover":{bgcolor:"rgba(0,0,0,0.8)"}},children:o.jsx(w,{fontSize:"large"})})}),sx:{width:320},children:[o.jsx(e,{variant:"h6",sx:{fontWeight:600,mb:.5},children:"Interactive 카드"}),o.jsx(e,{variant:"body2",color:"text.secondary",children:"마우스를 올리면 호버 효과가 적용됩니다."})]})},g={render:()=>o.jsxs(r,{sx:{display:"flex",gap:2},children:[o.jsx(t,{mediaSrc:"https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=600",mediaRatio:"1/1",sx:{width:150}}),o.jsx(t,{mediaSrc:"https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600",mediaRatio:"4/3",sx:{width:200}}),o.jsx(t,{mediaSrc:"https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=600",mediaRatio:"16/9",sx:{width:240}})]})},x={render:()=>o.jsx(r,{sx:{display:"flex",gap:2},children:["none","sm","md","lg"].map(s=>o.jsxs(t,{mediaSrc:"https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=600",mediaRatio:"16/9",contentPadding:s,sx:{width:180},children:[o.jsxs(e,{variant:"body2",sx:{fontWeight:600},children:["padding: ",s]}),o.jsx(r,{sx:{display:"flex",gap:.5,mt:.5},children:o.jsx(v,{label:"Tag",size:"small"})})]},s))})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'vertical',
    mediaSrc: 'https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=600',
    mediaAlt: 'Sample image',
    mediaRatio: '16/9',
    contentPadding: 'md'
  },
  render: args => <CustomCard {...args} sx={{
    width: 320
  }}>
      <Typography variant="h6" sx={{
      fontWeight: 600,
      mb: 1
    }}>
        카드 제목
      </Typography>
      <Typography variant="body2" color="text.secondary">
        CustomCard는 다양한 레이아웃을 지원하는 기본 카드 컴포넌트입니다.
      </Typography>
    </CustomCard>
}`,...a.parameters?.docs?.source},description:{story:"기본 Vertical 레이아웃",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <CustomCard layout="horizontal" mediaSrc="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600" mediaRatio="1/1" contentPadding="md" sx={{
    width: 480
  }}>
      <Typography variant="h6" sx={{
      fontWeight: 600,
      mb: 1
    }}>
        Horizontal 레이아웃
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{
      mb: 2
    }}>
        미디어와 콘텐츠가 좌우로 배치됩니다.
      </Typography>
      <Button variant="outlined" size="small" sx={{
      textTransform: 'none'
    }}>
        자세히 보기
      </Button>
    </CustomCard>
}`,...i.parameters?.docs?.source},description:{story:"Horizontal 레이아웃",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <CustomCard layout="horizontal" mediaPosition="end" mediaSrc="https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=600" mediaRatio="1/1" contentPadding="md" sx={{
    width: 480
  }}>
      <Typography variant="h6" sx={{
      fontWeight: 600,
      mb: 1
    }}>
        미디어가 오른쪽에
      </Typography>
      <Typography variant="body2" color="text.secondary">
        mediaPosition=&quot;end&quot;로 미디어를 오른쪽에 배치합니다.
      </Typography>
    </CustomCard>
}`,...n.parameters?.docs?.source},description:{story:"Horizontal - 미디어 오른쪽",...n.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <CustomCard layout="overlay" mediaSrc="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600" contentPadding="lg" sx={{
    width: 400,
    height: 300
  }}>
      <Typography variant="h5" sx={{
      fontWeight: 700,
      mb: 1
    }}>
        Overlay 레이아웃
      </Typography>
      <Typography variant="body2" sx={{
      opacity: 0.9
    }}>
        미디어 위에 콘텐츠가 오버레이됩니다. 그라데이션 배경으로 텍스트 가독성을 확보합니다.
      </Typography>
    </CustomCard>
}`,...p.parameters?.docs?.source},description:{story:"Overlay 레이아웃",...p.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    gap: 2,
    flexWrap: 'wrap'
  }}>
      {['1/1', '4/3', '16/9', '21/9'].map(ratio => <CustomCard key={ratio} mediaSrc="https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=600" mediaRatio={ratio} contentPadding="sm" sx={{
      width: 200
    }}>
          <Typography variant="body2" sx={{
        fontWeight: 600
      }}>
            {ratio}
          </Typography>
        </CustomCard>)}
    </Box>
}`,...d.parameters?.docs?.source},description:{story:"다양한 미디어 비율",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    gap: 2,
    alignItems: 'flex-start'
  }}>
      <CustomCard mediaSrc="https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=600" mediaRatio="auto" contentPadding="sm" sx={{
      width: 200
    }}>
        <Typography variant="body2" sx={{
        fontWeight: 600
      }}>
          가로 이미지 (auto)
        </Typography>
      </CustomCard>
      <CustomCard mediaSrc="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600" mediaRatio="auto" contentPadding="sm" sx={{
      width: 200
    }}>
        <Typography variant="body2" sx={{
        fontWeight: 600
      }}>
          세로 이미지 (auto)
        </Typography>
      </CustomCard>
    </Box>
}`,...c.parameters?.docs?.source},description:{story:"Auto 비율 (원본 유지)",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <CustomCard mediaSrc="https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=600" mediaRatio="4/3" contentPadding="sm" overlaySlot={<Box sx={{
    position: 'absolute',
    top: 8,
    right: 8,
    display: 'flex',
    gap: 0.5
  }}>
          <IconButton size="small" sx={{
      bgcolor: 'background.paper',
      boxShadow: 1,
      '&:hover': {
        bgcolor: 'white'
      }
    }}>
            <FavoriteBorderIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{
      bgcolor: 'primary.main',
      color: 'white',
      boxShadow: 1,
      '&:hover': {
        bgcolor: 'primary.dark'
      }
    }}>
            <AddIcon fontSize="small" />
          </IconButton>
        </Box>} sx={{
    width: 280
  }}>
      <Typography variant="body2" sx={{
      fontWeight: 600
    }}>
        overlaySlot 사용
      </Typography>
      <Typography variant="caption" color="text.secondary">
        미디어 위에 액션 버튼 오버레이
      </Typography>
    </CustomCard>
}`,...m.parameters?.docs?.source},description:{story:"overlaySlot 사용 예시",...m.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <CustomCard mediaSlot={<Box sx={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gap: '2px',
    width: '100%',
    aspectRatio: '1/1',
    backgroundColor: 'grey.200'
  }}>
          {[1, 2, 3, 4].map(i => <Box key={i} component="img" src={\`https://picsum.photos/seed/\${i}/200/200\`} alt={\`Image \${i}\`} sx={{
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }} />)}
        </Box>} contentPadding="md" sx={{
    width: 280
  }}>
      <Typography variant="subtitle1" sx={{
      fontWeight: 700
    }}>
        커스텀 미디어 슬롯
      </Typography>
      <Typography variant="body2" color="text.secondary">
        2×2 썸네일 그리드
      </Typography>
    </CustomCard>
}`,...l.parameters?.docs?.source},description:{story:"mediaSlot 사용 예시 (커스텀 미디어)",...l.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <CustomCard mediaSrc="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600" mediaRatio="16/9" contentPadding="md" isInteractive onClick={() => console.log('Card clicked!')} overlaySlot={<Box sx={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }}>
          <IconButton sx={{
      bgcolor: 'rgba(0,0,0,0.6)',
      color: 'white',
      '&:hover': {
        bgcolor: 'rgba(0,0,0,0.8)'
      }
    }}>
            <PlayArrowIcon fontSize="large" />
          </IconButton>
        </Box>} sx={{
    width: 320
  }}>
      <Typography variant="h6" sx={{
      fontWeight: 600,
      mb: 0.5
    }}>
        Interactive 카드
      </Typography>
      <Typography variant="body2" color="text.secondary">
        마우스를 올리면 호버 효과가 적용됩니다.
      </Typography>
    </CustomCard>
}`,...h.parameters?.docs?.source},description:{story:"Interactive 카드",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    gap: 2
  }}>
      <CustomCard mediaSrc="https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=600" mediaRatio="1/1" sx={{
      width: 150
    }} />
      <CustomCard mediaSrc="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600" mediaRatio="4/3" sx={{
      width: 200
    }} />
      <CustomCard mediaSrc="https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=600" mediaRatio="16/9" sx={{
      width: 240
    }} />
    </Box>
}`,...g.parameters?.docs?.source},description:{story:"콘텐츠 없는 카드",...g.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    gap: 2
  }}>
      {['none', 'sm', 'md', 'lg'].map(padding => <CustomCard key={padding} mediaSrc="https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=600" mediaRatio="16/9" contentPadding={padding} sx={{
      width: 180
    }}>
          <Typography variant="body2" sx={{
        fontWeight: 600
      }}>
            padding: {padding}
          </Typography>
          <Box sx={{
        display: 'flex',
        gap: 0.5,
        mt: 0.5
      }}>
            <Chip label="Tag" size="small" />
          </Box>
        </CustomCard>)}
    </Box>
}`,...x.parameters?.docs?.source},description:{story:"콘텐츠 패딩 비교",...x.parameters?.docs?.description}}};const V=["Default","Horizontal","HorizontalMediaEnd","Overlay","MediaRatios","AutoRatio","WithOverlaySlot","WithMediaSlot","Interactive","MediaOnly","ContentPaddings"];export{c as AutoRatio,x as ContentPaddings,a as Default,i as Horizontal,n as HorizontalMediaEnd,h as Interactive,g as MediaOnly,d as MediaRatios,p as Overlay,l as WithMediaSlot,m as WithOverlaySlot,V as __namedExportsOrder,D as default};
