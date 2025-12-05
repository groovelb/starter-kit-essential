import{j as e,r as d}from"./iframe-q-XN_VZM.js";import{F as r}from"./FileDropzone-pmc9wW2H.js";import{B as t}from"./Box-Dmtu8wWb.js";import{T as l}from"./Typography-C8IUsM00.js";import"./preload-helper-PPVm8Dsz.js";import"./createSvgIcon-CvYdi5pS.js";import"./memoTheme-BW0efeYW.js";import"./Close-CmD3Qau8.js";import"./LinearProgress-DIZCZ19C.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./IconButton-BSXa4zK8.js";import"./ButtonBase-JbB1eRtB.js";import"./useTimeout-C6lNLwyh.js";import"./CircularProgress-K6SSDdjw.js";const R={title:"Custom Component/Input/FileDropzone",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
## FileDropzone

드래그 앤 드롭 파일 업로드 영역 컴포넌트.

### 기능
- 드래그 앤 드롭 파일 선택
- default, compact, minimal 변형 지원
- 파일 미리보기 및 업로드 진행률 표시
        `}}}},s={render:()=>{const[o,c]=d.useState(null),[n,m]=d.useState(null),x=p=>{c(p),p.type.startsWith("image/")&&m(URL.createObjectURL(p))},u=()=>{c(null),n&&URL.revokeObjectURL(n),m(null)};return e.jsx(t,{sx:{maxWidth:400},children:e.jsx(r,{onFileSelect:x,onFileRemove:u,selectedFile:o,previewUrl:n})})}},i={render:()=>e.jsxs(t,{sx:{display:"flex",flexDirection:"column",gap:3,maxWidth:400},children:[e.jsxs(t,{children:[e.jsx(l,{variant:"caption",color:"text.secondary",sx:{mb:1,display:"block"},children:"Default"}),e.jsx(r,{onFileSelect:o=>console.log(o),variant:"default"})]}),e.jsxs(t,{children:[e.jsx(l,{variant:"caption",color:"text.secondary",sx:{mb:1,display:"block"},children:"Compact"}),e.jsx(r,{onFileSelect:o=>console.log(o),variant:"compact"})]}),e.jsxs(t,{children:[e.jsx(l,{variant:"caption",color:"text.secondary",sx:{mb:1,display:"block"},children:"Minimal"}),e.jsx(r,{onFileSelect:o=>console.log(o),variant:"minimal"})]})]})},a={render:()=>e.jsxs(t,{sx:{maxWidth:400},children:[e.jsx(l,{variant:"subtitle2",sx:{mb:2,fontWeight:600},children:"Uploading State"}),e.jsx(r,{onFileSelect:()=>{},selectedFile:{name:"sample-image.jpg",size:25e5},previewUrl:"https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=600",isUploading:!0,uploadProgress:65})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const handleSelect = selectedFile => {
      setFile(selectedFile);
      if (selectedFile.type.startsWith('image/')) {
        setPreview(URL.createObjectURL(selectedFile));
      }
    };
    const handleRemove = () => {
      setFile(null);
      if (preview) URL.revokeObjectURL(preview);
      setPreview(null);
    };
    return <Box sx={{
      maxWidth: 400
    }}>
        <FileDropzone onFileSelect={handleSelect} onFileRemove={handleRemove} selectedFile={file} previewUrl={preview} />
      </Box>;
  }
}`,...s.parameters?.docs?.source},description:{story:"FileDropzone 기본 사용 예시",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
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
          Default
        </Typography>
        <FileDropzone onFileSelect={f => console.log(f)} variant="default" />
      </Box>
      <Box>
        <Typography variant="caption" color="text.secondary" sx={{
        mb: 1,
        display: 'block'
      }}>
          Compact
        </Typography>
        <FileDropzone onFileSelect={f => console.log(f)} variant="compact" />
      </Box>
      <Box>
        <Typography variant="caption" color="text.secondary" sx={{
        mb: 1,
        display: 'block'
      }}>
          Minimal
        </Typography>
        <FileDropzone onFileSelect={f => console.log(f)} variant="minimal" />
      </Box>
    </Box>
}`,...i.parameters?.docs?.source},description:{story:"FileDropzone 변형",...i.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    maxWidth: 400
  }}>
      <Typography variant="subtitle2" sx={{
      mb: 2,
      fontWeight: 600
    }}>
        Uploading State
      </Typography>
      <FileDropzone onFileSelect={() => {}} selectedFile={{
      name: 'sample-image.jpg',
      size: 2500000
    }} previewUrl="https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=600" isUploading uploadProgress={65} />
    </Box>
}`,...a.parameters?.docs?.source},description:{story:"FileDropzone 업로드 상태",...a.parameters?.docs?.description}}};const T=["Default","Variants","Uploading"];export{s as Default,a as Uploading,i as Variants,T as __namedExportsOrder,R as default};
