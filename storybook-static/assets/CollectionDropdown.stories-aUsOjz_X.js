import{r as s,j as t}from"./iframe-q-XN_VZM.js";import{C as c}from"./CollectionDropdown-BSiu3OBz.js";import{B as a}from"./Box-Dmtu8wWb.js";import{T as d}from"./Typography-C8IUsM00.js";import"./preload-helper-PPVm8Dsz.js";import"./createSvgIcon-CvYdi5pS.js";import"./memoTheme-BW0efeYW.js";import"./Add-DsnlUBfa.js";import"./Button-Coknce8O.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-JbB1eRtB.js";import"./useTimeout-C6lNLwyh.js";import"./CircularProgress-K6SSDdjw.js";import"./Select-DlpVDPsS.js";import"./useSlot-Xw8rJOQc.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlotProps-CYaCcMSY.js";import"./Paper-ri-B2SDS.js";import"./useTheme-CDdqLoBf.js";import"./ownerWindow-CO8Ksk3k.js";import"./debounce-Be36O1Ab.js";import"./Grow-Cmv2id48.js";import"./utils-UDy2T9Xi.js";import"./index-DUeF1Pkm.js";import"./index-C2SgXQAb.js";import"./getReactElementRef-CJ7j01sk.js";import"./mergeSlotProps-Cg99X4s0.js";import"./Modal-Cp6PhS6B.js";import"./utils-Bug588nc.js";import"./useControlled-Dx2BjZdt.js";import"./InputBase--W6Qy_gV.js";import"./Divider-DePyv9fJ.js";import"./dividerClasses-BAQMkccN.js";import"./MenuItem-BnGKUDh9.js";import"./listItemTextClasses-5YcgVpaX.js";import"./ListItemText-DtuXspMo.js";import"./TextField-DgQ3k6VB.js";import"./InputLabel-DbttPIAK.js";import"./FormLabel-Cx8V1pjo.js";import"./isMuiElement-DpiUmZPP.js";import"./FormHelperText-C_TeGrMm.js";import"./IconButton-BSXa4zK8.js";const $={title:"Custom Component/Input/CollectionDropdown",component:c,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
## CollectionDropdown

무드보드 선택 드롭다운 컴포넌트.

### 기능
- 기존 컬렉션 선택
- 새 컬렉션 생성
- contained, outlined, text 변형 지원
        `}}}},r={render:()=>{const[o,e]=s.useState(null),l=[{id:"1",name:"Tech Product Shots",count:24},{id:"2",name:"Summer Campaign",count:18},{id:"3",name:"Brand Identity",count:42},{id:"4",name:"UI References",count:31}];return t.jsxs(a,{sx:{maxWidth:300},children:[t.jsx(c,{collections:l,selectedId:o,onSelect:e,onCreate:i=>console.log("Create:",i)}),o&&t.jsxs(d,{variant:"caption",color:"text.secondary",sx:{mt:2,display:"block"},children:["Selected: ",l.find(i=>i.id===o)?.name]})]})}},n={render:()=>{const o=[{id:"1",name:"Moodboard A",count:12},{id:"2",name:"Moodboard B",count:8}];return t.jsxs(a,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[t.jsx(c,{collections:o,onSelect:e=>console.log("Selected:",e),buttonLabel:"Add to Board",variant:"contained"}),t.jsx(c,{collections:o,onSelect:e=>console.log("Selected:",e),buttonLabel:"Select Board",variant:"outlined"}),t.jsx(c,{collections:o,onSelect:e=>console.log("Selected:",e),buttonLabel:"Choose",variant:"text",size:"small"})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState(null);
    const collections = [{
      id: '1',
      name: 'Tech Product Shots',
      count: 24
    }, {
      id: '2',
      name: 'Summer Campaign',
      count: 18
    }, {
      id: '3',
      name: 'Brand Identity',
      count: 42
    }, {
      id: '4',
      name: 'UI References',
      count: 31
    }];
    return <Box sx={{
      maxWidth: 300
    }}>
        <CollectionDropdown collections={collections} selectedId={selected} onSelect={setSelected} onCreate={name => console.log('Create:', name)} />
        {selected && <Typography variant="caption" color="text.secondary" sx={{
        mt: 2,
        display: 'block'
      }}>
            Selected: {collections.find(c => c.id === selected)?.name}
          </Typography>}
      </Box>;
  }
}`,...r.parameters?.docs?.source},description:{story:"CollectionDropdown 기본 사용 예시",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const collections = [{
      id: '1',
      name: 'Moodboard A',
      count: 12
    }, {
      id: '2',
      name: 'Moodboard B',
      count: 8
    }];
    return <Box sx={{
      display: 'flex',
      gap: 2,
      flexWrap: 'wrap'
    }}>
        <CollectionDropdown collections={collections} onSelect={id => console.log('Selected:', id)} buttonLabel="Add to Board" variant="contained" />
        <CollectionDropdown collections={collections} onSelect={id => console.log('Selected:', id)} buttonLabel="Select Board" variant="outlined" />
        <CollectionDropdown collections={collections} onSelect={id => console.log('Selected:', id)} buttonLabel="Choose" variant="text" size="small" />
      </Box>;
  }
}`,...n.parameters?.docs?.source},description:{story:"CollectionDropdown 변형",...n.parameters?.docs?.description}}};const oo=["Default","Variants"];export{r as Default,n as Variants,oo as __namedExportsOrder,$ as default};
