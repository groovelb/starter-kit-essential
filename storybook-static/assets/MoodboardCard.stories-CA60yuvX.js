import{j as o}from"./iframe-q-XN_VZM.js";import{M as a}from"./MoodboardCard-Cw87D5OT.js";import{t as y}from"./pexels-test-data-Di7YEpDZ.js";import{B as e}from"./Box-Dmtu8wWb.js";import{T as m}from"./Typography-C8IUsM00.js";import{M as u}from"./Masonry-YhtJCdL7.js";import{G as b}from"./Grid-Dd6PAMTp.js";import"./preload-helper-PPVm8Dsz.js";import"./createSvgIcon-CvYdi5pS.js";import"./memoTheme-BW0efeYW.js";import"./CustomCard-BaRKR-AP.js";import"./CardContainer-B3rD2Xhu.js";import"./IconButton-BSXa4zK8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-JbB1eRtB.js";import"./useTimeout-C6lNLwyh.js";import"./CircularProgress-K6SSDdjw.js";import"./index-DUeF1Pkm.js";import"./index-C2SgXQAb.js";import"./useThemeProps-CFXzbazh.js";import"./useTheme-CDdqLoBf.js";import"./styled-D6BANXgS.js";import"./isMuiElement-DpiUmZPP.js";const r=(t,s=4)=>(y[t]||y.abstract).slice(0,s).map((x,g)=>({id:`asset-${t}-${g}`,title:x.alt,thumbnail:x.src.medium,src:x.src})),h=[{id:"board-1",name:"Abstract Art",description:"Abstract and geometric artwork collection for brand exploration",items:r("abstract",4),createdAt:"2024-10-15"},{id:"board-2",name:"Fine Art",description:"Paintings and canvas artwork",items:r("fineart",4),createdAt:"2024-10-10"},{id:"board-3",name:"Illustration",description:"Digital illustration and artwork for UI design inspiration",items:r("illustration",4),createdAt:"2024-09-28"},{id:"board-4",name:"Photography",description:"Product and editorial photography",items:r("photography",4),createdAt:"2024-09-15"},{id:"board-5",name:"Portrait",description:"Fashion and artistic portraits",items:r("portrait",4),createdAt:"2024-09-01"}],_={title:"Custom Component/Card/MoodboardCard",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
## MoodboardCard

무드보드 컬렉션을 표시하는 카드 컴포넌트입니다.

### ImageCard와의 차이점

| 요소 | ImageCard | MoodboardCard |
|------|-----------|---------------|
| **썸네일** | 단일 이미지 | 2×2 그리드 (4개 이미지) |
| **타이틀** | body2 (14px) | subtitle1 (16px), bold |
| **메타데이터** | 태그 칩 | 설명, 아이템 수, 생성일 |

### 주요 기능
- **2×2 썸네일 그리드**: 컬렉션 미리보기
- **반응형 메타데이터**: 이름, 설명, 아이템 수, 생성일
- **Hover 인터랙션**: 편집/삭제 버튼 표시
- **빈 상태 처리**: 이미지가 없을 때 placeholder 표시
        `}}},argTypes:{name:{control:"text",description:"무드보드 이름",table:{type:{summary:"string"}}},description:{control:"text",description:"무드보드 설명 (최대 2줄 표시)",table:{type:{summary:"string"}}},items:{control:"object",description:"무드보드 내 아이템 배열 (thumbnail 필드 필요)",table:{type:{summary:"Array<{id, title, thumbnail}>"}}},createdAt:{control:"text",description:"생성 날짜 (YYYY-MM-DD 형식)",table:{type:{summary:"string"}}},onClick:{action:"clicked",description:"카드 클릭 핸들러",table:{type:{summary:"function"}}},onEdit:{action:"edit",description:"편집 버튼 클릭 핸들러",table:{type:{summary:"function"}}},onDelete:{action:"delete",description:"삭제 버튼 클릭 핸들러",table:{type:{summary:"function"}}}}},i={args:{id:"board-1",name:"Abstract Art",description:"Abstract and geometric artwork collection for brand exploration",items:r("abstract",4),createdAt:"2024-10-15"},render:t=>o.jsx(e,{sx:{width:280},children:o.jsx(a,{...t})})},d={render:()=>o.jsx(e,{sx:{display:"flex",gap:3,flexWrap:"wrap"},children:[4,3,2,1,0].map(t=>o.jsxs(e,{sx:{width:240},children:[o.jsxs(m,{variant:"caption",color:"text.secondary",sx:{mb:1,display:"block"},children:[t," items"]}),o.jsx(a,{id:`board-${t}`,name:t===0?"Empty Board":`${t} Images`,description:t===0?"Start adding images to this board":"Sample description text",items:r("abstract",t),createdAt:"2024-10-15",onEdit:()=>{},onDelete:()=>{}})]},t))})},n={render:()=>o.jsxs(e,{sx:{display:"flex",gap:3},children:[o.jsxs(e,{sx:{width:280},children:[o.jsx(m,{variant:"caption",color:"text.secondary",sx:{mb:1,display:"block"},children:"긴 제목"}),o.jsx(a,{id:"board-long-title",name:"This is a very long moodboard name that should be truncated with ellipsis",description:"Short description",items:r("fineart",4),createdAt:"2024-10-15",onEdit:()=>{}})]}),o.jsxs(e,{sx:{width:280},children:[o.jsx(m,{variant:"caption",color:"text.secondary",sx:{mb:1,display:"block"},children:"긴 설명"}),o.jsx(a,{id:"board-long-desc",name:"Fine Art Collection",description:"This is a very long description that spans multiple lines and should be clamped at two lines with an ellipsis at the end to maintain visual consistency across all cards in the grid layout.",items:r("fineart",4),createdAt:"2024-10-15",onEdit:()=>{}})]})]})},c={render:()=>o.jsxs(e,{sx:{width:"100%",maxWidth:1200},children:[o.jsx(m,{variant:"h6",sx:{fontWeight:700,mb:3},children:"Moodboards"}),o.jsx(u,{columns:{xs:1,sm:2,md:3,lg:4},spacing:2,children:h.map(t=>o.jsx(a,{...t,onClick:()=>console.log("Navigate to:",t.id),onEdit:s=>console.log("Edit:",s),onDelete:s=>console.log("Delete:",s)},t.id))})]}),parameters:{layout:"padded"}},p={render:()=>o.jsxs(e,{sx:{width:"100%",maxWidth:1200},children:[o.jsx(m,{variant:"h6",sx:{fontWeight:700,mb:3},children:"Moodboards (Grid Layout)"}),o.jsx(b,{container:!0,spacing:2,children:h.map(t=>o.jsx(b,{size:{xs:12,sm:6,md:4,lg:3},children:o.jsx(a,{...t,onClick:()=>console.log("Navigate to:",t.id),onEdit:s=>console.log("Edit:",s)})},t.id))})]}),parameters:{layout:"padded"}},l={args:{id:"board-readonly",name:"Read Only Board",description:"This board has no edit or delete actions",items:r("poster",4),createdAt:"2024-10-15"},render:t=>o.jsx(e,{sx:{width:280},children:o.jsx(a,{...t})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'board-1',
    name: 'Abstract Art',
    description: 'Abstract and geometric artwork collection for brand exploration',
    items: createMockAssets('abstract', 4),
    createdAt: '2024-10-15'
  },
  render: args => <Box sx={{
    width: 280
  }}>
      <MoodboardCard {...args} />
    </Box>
}`,...i.parameters?.docs?.source},description:{story:"기본 MoodboardCard",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    gap: 3,
    flexWrap: 'wrap'
  }}>
      {[4, 3, 2, 1, 0].map(count => <Box key={count} sx={{
      width: 240
    }}>
          <Typography variant="caption" color="text.secondary" sx={{
        mb: 1,
        display: 'block'
      }}>
            {count} items
          </Typography>
          <MoodboardCard id={\`board-\${count}\`} name={count === 0 ? 'Empty Board' : \`\${count} Images\`} description={count === 0 ? 'Start adding images to this board' : 'Sample description text'} items={createMockAssets('abstract', count)} createdAt="2024-10-15" onEdit={() => {}} onDelete={() => {}} />
        </Box>)}
    </Box>
}`,...d.parameters?.docs?.source},description:{story:"이미지 개수별 상태",...d.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    gap: 3
  }}>
      <Box sx={{
      width: 280
    }}>
        <Typography variant="caption" color="text.secondary" sx={{
        mb: 1,
        display: 'block'
      }}>
          긴 제목
        </Typography>
        <MoodboardCard id="board-long-title" name="This is a very long moodboard name that should be truncated with ellipsis" description="Short description" items={createMockAssets('fineart', 4)} createdAt="2024-10-15" onEdit={() => {}} />
      </Box>
      <Box sx={{
      width: 280
    }}>
        <Typography variant="caption" color="text.secondary" sx={{
        mb: 1,
        display: 'block'
      }}>
          긴 설명
        </Typography>
        <MoodboardCard id="board-long-desc" name="Fine Art Collection" description="This is a very long description that spans multiple lines and should be clamped at two lines with an ellipsis at the end to maintain visual consistency across all cards in the grid layout." items={createMockAssets('fineart', 4)} createdAt="2024-10-15" onEdit={() => {}} />
      </Box>
    </Box>
}`,...n.parameters?.docs?.source},description:{story:"긴 텍스트 처리",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: '100%',
    maxWidth: 1200
  }}>
      <Typography variant="h6" sx={{
      fontWeight: 700,
      mb: 3
    }}>
        Moodboards
      </Typography>
      <Masonry columns={{
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    }} spacing={2}>
        {sampleMoodboards.map(board => <MoodboardCard key={board.id} {...board} onClick={() => console.log('Navigate to:', board.id)} onEdit={id => console.log('Edit:', id)} onDelete={id => console.log('Delete:', id)} />)}
      </Masonry>
    </Box>,
  parameters: {
    layout: 'padded'
  }
}`,...c.parameters?.docs?.source},description:{story:"Masonry 그리드 레이아웃",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: '100%',
    maxWidth: 1200
  }}>
      <Typography variant="h6" sx={{
      fontWeight: 700,
      mb: 3
    }}>
        Moodboards (Grid Layout)
      </Typography>
      <Grid container spacing={2}>
        {sampleMoodboards.map(board => <Grid key={board.id} size={{
        xs: 12,
        sm: 6,
        md: 4,
        lg: 3
      }}>
            <MoodboardCard {...board} onClick={() => console.log('Navigate to:', board.id)} onEdit={id => console.log('Edit:', id)} />
          </Grid>)}
      </Grid>
    </Box>,
  parameters: {
    layout: 'padded'
  }
}`,...p.parameters?.docs?.source},description:{story:"Grid 레이아웃 (균등 높이)",...p.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'board-readonly',
    name: 'Read Only Board',
    description: 'This board has no edit or delete actions',
    items: createMockAssets('poster', 4),
    createdAt: '2024-10-15'
  },
  render: args => <Box sx={{
    width: 280
  }}>
      <MoodboardCard {...args} />
    </Box>
}`,...l.parameters?.docs?.source},description:{story:"액션 버튼 없음 (읽기 전용)",...l.parameters?.docs?.description}}};const z=["Default","ItemCounts","LongText","MasonryGrid","GridLayout","ReadOnly"];export{i as Default,p as GridLayout,d as ItemCounts,n as LongText,c as MasonryGrid,l as ReadOnly,z as __namedExportsOrder,_ as default};
