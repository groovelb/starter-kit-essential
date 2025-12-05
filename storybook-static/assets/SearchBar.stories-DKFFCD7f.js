import{r as p,j as e}from"./iframe-q-XN_VZM.js";import{S as o}from"./SearchBar-BWx1BoPs.js";import{B as i}from"./Box-Dmtu8wWb.js";import{T as d}from"./Typography-C8IUsM00.js";import"./preload-helper-PPVm8Dsz.js";import"./Search-B6cHP2qc.js";import"./createSvgIcon-CvYdi5pS.js";import"./memoTheme-BW0efeYW.js";import"./IconButton-BSXa4zK8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-JbB1eRtB.js";import"./useTimeout-C6lNLwyh.js";import"./CircularProgress-K6SSDdjw.js";import"./InputBase--W6Qy_gV.js";import"./utils-Bug588nc.js";import"./ownerWindow-CO8Ksk3k.js";import"./debounce-Be36O1Ab.js";import"./isHostComponent-DVu5iVWx.js";const O={title:"Custom Component/Input/SearchBar",component:o,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
## SearchBar

키워드 검색 입력 필드 컴포넌트.

### 기능
- outlined, filled, minimal 변형 지원
- 필터 토글 버튼 옵션
- 전체 너비 모드 지원
        `}}}},s={render:()=>{const[t,l]=p.useState("");return e.jsx(i,{sx:{maxWidth:400},children:e.jsx(o,{value:t,onChange:l,placeholder:"Search references...",onSearch:a=>console.log("Search:",a)})})}},n={render:()=>{const[t,l]=p.useState({outlined:"",filled:"",minimal:""}),a=(r,h)=>{l(m=>({...m,[r]:h}))};return e.jsxs(i,{sx:{display:"flex",flexDirection:"column",gap:3,maxWidth:400},children:[e.jsxs(i,{children:[e.jsx(d,{variant:"caption",color:"text.secondary",sx:{mb:1,display:"block"},children:"Outlined (Default)"}),e.jsx(o,{value:t.outlined,onChange:r=>a("outlined",r),variant:"outlined",placeholder:"Outlined variant..."})]}),e.jsxs(i,{children:[e.jsx(d,{variant:"caption",color:"text.secondary",sx:{mb:1,display:"block"},children:"Filled"}),e.jsx(o,{value:t.filled,onChange:r=>a("filled",r),variant:"filled",placeholder:"Filled variant..."})]}),e.jsxs(i,{children:[e.jsx(d,{variant:"caption",color:"text.secondary",sx:{mb:1,display:"block"},children:"Minimal"}),e.jsx(o,{value:t.minimal,onChange:r=>a("minimal",r),variant:"minimal",placeholder:"Minimal variant..."})]})]})}},c={render:()=>{const[t,l]=p.useState(""),[a,r]=p.useState(!1);return e.jsxs(i,{sx:{maxWidth:500},children:[e.jsx(o,{value:t,onChange:l,placeholder:"Search with filter...",hasFilter:!0,isFilterActive:a,onFilterToggle:()=>r(!a),isFullWidth:!0}),a&&e.jsx(i,{sx:{mt:2,p:2,border:"1px dashed",borderColor:"primary.main",borderRadius:1},children:e.jsx(d,{variant:"body2",color:"text.secondary",children:"Filter panel is active"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Box sx={{
      maxWidth: 400
    }}>
        <SearchBar value={value} onChange={setValue} placeholder="Search references..." onSearch={v => console.log('Search:', v)} />
      </Box>;
  }
}`,...s.parameters?.docs?.source},description:{story:"SearchBar 기본 사용 예시",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [values, setValues] = useState({
      outlined: '',
      filled: '',
      minimal: ''
    });
    const handleChange = (variant, value) => {
      setValues(prev => ({
        ...prev,
        [variant]: value
      }));
    };
    return <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      maxWidth: 400
    }}>
        <Box>
          <Typography variant="caption" color="text.secondary" sx={{
          mb: 1,
          display: 'block'
        }}>
            Outlined (Default)
          </Typography>
          <SearchBar value={values.outlined} onChange={v => handleChange('outlined', v)} variant="outlined" placeholder="Outlined variant..." />
        </Box>
        <Box>
          <Typography variant="caption" color="text.secondary" sx={{
          mb: 1,
          display: 'block'
        }}>
            Filled
          </Typography>
          <SearchBar value={values.filled} onChange={v => handleChange('filled', v)} variant="filled" placeholder="Filled variant..." />
        </Box>
        <Box>
          <Typography variant="caption" color="text.secondary" sx={{
          mb: 1,
          display: 'block'
        }}>
            Minimal
          </Typography>
          <SearchBar value={values.minimal} onChange={v => handleChange('minimal', v)} variant="minimal" placeholder="Minimal variant..." />
        </Box>
      </Box>;
  }
}`,...n.parameters?.docs?.source},description:{story:"SearchBar 변형 비교",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [filterActive, setFilterActive] = useState(false);
    return <Box sx={{
      maxWidth: 500
    }}>
        <SearchBar value={value} onChange={setValue} placeholder="Search with filter..." hasFilter isFilterActive={filterActive} onFilterToggle={() => setFilterActive(!filterActive)} isFullWidth />
        {filterActive && <Box sx={{
        mt: 2,
        p: 2,
        border: '1px dashed',
        borderColor: 'primary.main',
        borderRadius: 1
      }}>
            <Typography variant="body2" color="text.secondary">
              Filter panel is active
            </Typography>
          </Box>}
      </Box>;
  }
}`,...c.parameters?.docs?.source},description:{story:"SearchBar with Filter",...c.parameters?.docs?.description}}};const M=["Default","Variants","WithFilter"];export{s as Default,n as Variants,c as WithFilter,M as __namedExportsOrder,O as default};
