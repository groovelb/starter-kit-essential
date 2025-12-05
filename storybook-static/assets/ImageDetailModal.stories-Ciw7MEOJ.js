import{r as d,j as t}from"./iframe-q-XN_VZM.js";import{I as u,m as o}from"./museMockData-Y3ZfJwd0.js";import{B as n}from"./Box-Dmtu8wWb.js";import{B as g}from"./Button-Coknce8O.js";import{T as x}from"./Typography-C8IUsM00.js";import"./preload-helper-PPVm8Dsz.js";import"./Close-CmD3Qau8.js";import"./createSvgIcon-CvYdi5pS.js";import"./memoTheme-BW0efeYW.js";import"./Favorite-CJCmVXTr.js";import"./FavoriteBorder-DF40WW_l.js";import"./ChevronRight-C82aywmU.js";import"./Modal-Cp6PhS6B.js";import"./ownerWindow-CO8Ksk3k.js";import"./useTimeout-C6lNLwyh.js";import"./ButtonBase-JbB1eRtB.js";import"./useSlot-Xw8rJOQc.js";import"./isHostComponent-DVu5iVWx.js";import"./index-DUeF1Pkm.js";import"./index-C2SgXQAb.js";import"./getReactElementRef-CJ7j01sk.js";import"./useTheme-CDdqLoBf.js";import"./utils-UDy2T9Xi.js";import"./IconButton-BSXa4zK8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-K6SSDdjw.js";import"./useControlled-Dx2BjZdt.js";import"./Grow-Cmv2id48.js";import"./useSlotProps-CYaCcMSY.js";import"./Divider-DePyv9fJ.js";import"./dividerClasses-BAQMkccN.js";import"./Chip-CBvZjQD4.js";const ee={title:"Custom Component/Overlay/ImageDetailModal",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
## ImageDetailModal

레퍼런스 이미지 상세 보기 모달 컴포넌트.

### 기능
- 이미지 상세 정보 표시 (제목, 태그, 메타데이터)
- 좋아요, 다운로드, 공유, 편집 액션
- 이전/다음 네비게이션 지원
- 다양한 에셋 타입 (이미지, 비디오) 지원
        `}}}},p={render:()=>{const[r,i]=d.useState(!1),[e,a]=d.useState(!1);return t.jsxs(n,{children:[t.jsx(g,{variant:"contained",onClick:()=>i(!0),children:"Open Image Detail"}),t.jsx(u,{isOpen:r,onClose:()=>i(!1),asset:o[0],isLiked:e,onLike:()=>a(!e),onDownload:()=>console.log("Download"),onShare:()=>console.log("Share"),onEdit:()=>console.log("Edit"),onAddToBoard:()=>console.log("Add to board")})]})}},c={render:()=>{const[r,i]=d.useState(!1),[e,a]=d.useState(0),[h,I]=d.useState([]),y=()=>{a(s=>Math.max(0,s-1))},v=()=>{a(s=>Math.min(o.length-1,s+1))},f=()=>{const s=o[e].id;I(l=>l.includes(s)?l.filter(b=>b!==s):[...l,s])};return t.jsxs(n,{children:[t.jsx(x,{variant:"body2",color:"text.secondary",sx:{mb:2},children:"Click any image to open the detail modal with navigation"}),t.jsx(n,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:o.map((s,l)=>t.jsx(n,{onClick:()=>{a(l),i(!0)},sx:{width:120,height:80,borderRadius:1,overflow:"hidden",cursor:"pointer",border:"2px solid",borderColor:e===l?"primary.main":"transparent",transition:"all 0.2s","&:hover":{transform:"scale(1.05)"}},children:t.jsx(n,{component:"img",src:s.thumbnail,alt:s.title,sx:{width:"100%",height:"100%",objectFit:"cover"}})},s.id))}),t.jsx(u,{isOpen:r,onClose:()=>i(!1),asset:o[e],isLiked:h.includes(o[e]?.id),onLike:f,onDownload:()=>console.log("Download:",o[e]?.title),onShare:()=>console.log("Share:",o[e]?.title),onEdit:()=>console.log("Edit:",o[e]?.title),onAddToBoard:()=>console.log("Add to board:",o[e]?.title),onPrevious:y,onNext:v,hasPrevious:e>0,hasNext:e<o.length-1})]})}},m={render:()=>{const[r,i]=d.useState(null),e=[{id:"img-1",title:"Product Photography",type:"image",format:"JPEG",resolution:"4000x3000",size:"8.5 MB",thumbnail:"https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=600",tags:["Product","Minimal","White"],license:"Commercial",status:"approved"},{id:"vid-1",title:"Motion Graphics Loop",type:"video",format:"MP4",resolution:"1920x1080",duration:"00:15",size:"45 MB",thumbnail:"https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600",tags:["Motion","Abstract","Loop"],license:"Commercial",status:"approved"},{id:"img-2",title:"Pending Review Asset",type:"image",format:"PNG",resolution:"2400x1600",size:"12 MB",thumbnail:"https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=600",tags:["Neon","City","Night"],license:"Internal Only",status:"pending"}];return t.jsxs(n,{children:[t.jsx(x,{variant:"body2",color:"text.secondary",sx:{mb:2},children:"Different asset types: Image, Video, Pending status"}),t.jsx(n,{sx:{display:"flex",gap:2},children:e.map(a=>t.jsxs(g,{variant:"outlined",onClick:()=>i(a),sx:{textTransform:"none"},children:[a.type.toUpperCase(),": ",a.title.substring(0,15),"..."]},a.id))}),t.jsx(u,{isOpen:!!r,onClose:()=>i(null),asset:r,onLike:()=>console.log("Like"),onAddToBoard:()=>console.log("Add to board")})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    return <Box>
        <Button variant="contained" onClick={() => setIsOpen(true)}>
          Open Image Detail
        </Button>
        <ImageDetailModal isOpen={isOpen} onClose={() => setIsOpen(false)} asset={museAssets[0]} isLiked={isLiked} onLike={() => setIsLiked(!isLiked)} onDownload={() => console.log('Download')} onShare={() => console.log('Share')} onEdit={() => console.log('Edit')} onAddToBoard={() => console.log('Add to board')} />
      </Box>;
  }
}`,...p.parameters?.docs?.source},description:{story:"ImageDetailModal 기본 사용 예시",...p.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [likedIds, setLikedIds] = useState([]);
    const handlePrevious = () => {
      setCurrentIndex(prev => Math.max(0, prev - 1));
    };
    const handleNext = () => {
      setCurrentIndex(prev => Math.min(museAssets.length - 1, prev + 1));
    };
    const handleLike = () => {
      const assetId = museAssets[currentIndex].id;
      setLikedIds(prev => prev.includes(assetId) ? prev.filter(id => id !== assetId) : [...prev, assetId]);
    };
    return <Box>
        <Typography variant="body2" color="text.secondary" sx={{
        mb: 2
      }}>
          Click any image to open the detail modal with navigation
        </Typography>
        <Box sx={{
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap'
      }}>
          {museAssets.map((asset, index) => <Box key={asset.id} onClick={() => {
          setCurrentIndex(index);
          setIsOpen(true);
        }} sx={{
          width: 120,
          height: 80,
          borderRadius: 1,
          overflow: 'hidden',
          cursor: 'pointer',
          border: '2px solid',
          borderColor: currentIndex === index ? 'primary.main' : 'transparent',
          transition: 'all 0.2s',
          '&:hover': {
            transform: 'scale(1.05)'
          }
        }}>
              <Box component="img" src={asset.thumbnail} alt={asset.title} sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }} />
            </Box>)}
        </Box>
        <ImageDetailModal isOpen={isOpen} onClose={() => setIsOpen(false)} asset={museAssets[currentIndex]} isLiked={likedIds.includes(museAssets[currentIndex]?.id)} onLike={handleLike} onDownload={() => console.log('Download:', museAssets[currentIndex]?.title)} onShare={() => console.log('Share:', museAssets[currentIndex]?.title)} onEdit={() => console.log('Edit:', museAssets[currentIndex]?.title)} onAddToBoard={() => console.log('Add to board:', museAssets[currentIndex]?.title)} onPrevious={handlePrevious} onNext={handleNext} hasPrevious={currentIndex > 0} hasNext={currentIndex < museAssets.length - 1} />
      </Box>;
  }
}`,...c.parameters?.docs?.source},description:{story:"ImageDetailModal with Navigation",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openAsset, setOpenAsset] = useState(null);
    const assets = [{
      id: 'img-1',
      title: 'Product Photography',
      type: 'image',
      format: 'JPEG',
      resolution: '4000x3000',
      size: '8.5 MB',
      thumbnail: 'https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Product', 'Minimal', 'White'],
      license: 'Commercial',
      status: 'approved'
    }, {
      id: 'vid-1',
      title: 'Motion Graphics Loop',
      type: 'video',
      format: 'MP4',
      resolution: '1920x1080',
      duration: '00:15',
      size: '45 MB',
      thumbnail: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Motion', 'Abstract', 'Loop'],
      license: 'Commercial',
      status: 'approved'
    }, {
      id: 'img-2',
      title: 'Pending Review Asset',
      type: 'image',
      format: 'PNG',
      resolution: '2400x1600',
      size: '12 MB',
      thumbnail: 'https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Neon', 'City', 'Night'],
      license: 'Internal Only',
      status: 'pending'
    }];
    return <Box>
        <Typography variant="body2" color="text.secondary" sx={{
        mb: 2
      }}>
          Different asset types: Image, Video, Pending status
        </Typography>
        <Box sx={{
        display: 'flex',
        gap: 2
      }}>
          {assets.map(asset => <Button key={asset.id} variant="outlined" onClick={() => setOpenAsset(asset)} sx={{
          textTransform: 'none'
        }}>
              {asset.type.toUpperCase()}: {asset.title.substring(0, 15)}...
            </Button>)}
        </Box>
        <ImageDetailModal isOpen={!!openAsset} onClose={() => setOpenAsset(null)} asset={openAsset} onLike={() => console.log('Like')} onAddToBoard={() => console.log('Add to board')} />
      </Box>;
  }
}`,...m.parameters?.docs?.source},description:{story:"다양한 에셋 타입 표시",...m.parameters?.docs?.description}}};const te=["ImageDetailModalDefault","ImageDetailModalWithNavigation","ImageDetailModalAssetTypes"];export{m as ImageDetailModalAssetTypes,p as ImageDetailModalDefault,c as ImageDetailModalWithNavigation,te as __namedExportsOrder,ee as default};
