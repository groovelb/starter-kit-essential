import{r as n,j as e}from"./iframe-q-XN_VZM.js";import{T as a}from"./TagInput-j-IMxDsC.js";import{B as i}from"./Box-Dmtu8wWb.js";import{T as p}from"./Typography-C8IUsM00.js";import"./preload-helper-PPVm8Dsz.js";import"./Chip-CBvZjQD4.js";import"./createSvgIcon-CvYdi5pS.js";import"./memoTheme-BW0efeYW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-Xw8rJOQc.js";import"./useTimeout-C6lNLwyh.js";import"./isHostComponent-DVu5iVWx.js";import"./ButtonBase-JbB1eRtB.js";import"./InputBase--W6Qy_gV.js";import"./utils-Bug588nc.js";import"./ownerWindow-CO8Ksk3k.js";import"./debounce-Be36O1Ab.js";const w={title:"Custom Component/Input/TagInput",component:a,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
## TagInput

태그 입력 및 관리 필드 컴포넌트.

### 기능
- 태그 추가/삭제
- 최대 태그 수 제한
- 자동완성 제안 지원
        `}}}},t={render:()=>{const[o,r]=n.useState(["minimal","dark"]);return e.jsx(i,{sx:{maxWidth:400},children:e.jsx(a,{tags:o,onChange:r,placeholder:"Add tags...",maxTags:8,label:"Style Keywords"})})}},s={render:()=>{const[o,r]=n.useState([]),g=["minimal","bold","colorful","dark","light","retro","modern","organic","geometric","playful"];return e.jsxs(i,{sx:{maxWidth:400},children:[e.jsx(p,{variant:"subtitle2",sx:{mb:2,fontWeight:600},children:"TagInput with Suggestions"}),e.jsx(a,{tags:o,onChange:r,placeholder:"Type to see suggestions...",suggestions:g,maxTags:5})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState(['minimal', 'dark']);
    return <Box sx={{
      maxWidth: 400
    }}>
        <TagInput tags={tags} onChange={setTags} placeholder="Add tags..." maxTags={8} label="Style Keywords" />
      </Box>;
  }
}`,...t.parameters?.docs?.source},description:{story:"TagInput 기본 사용 예시",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState([]);
    const suggestions = ['minimal', 'bold', 'colorful', 'dark', 'light', 'retro', 'modern', 'organic', 'geometric', 'playful'];
    return <Box sx={{
      maxWidth: 400
    }}>
        <Typography variant="subtitle2" sx={{
        mb: 2,
        fontWeight: 600
      }}>
          TagInput with Suggestions
        </Typography>
        <TagInput tags={tags} onChange={setTags} placeholder="Type to see suggestions..." suggestions={suggestions} maxTags={5} />
      </Box>;
  }
}`,...s.parameters?.docs?.source},description:{story:"TagInput with Suggestions",...s.parameters?.docs?.description}}};const k=["Default","WithSuggestions"];export{t as Default,s as WithSuggestions,k as __namedExportsOrder,w as default};
