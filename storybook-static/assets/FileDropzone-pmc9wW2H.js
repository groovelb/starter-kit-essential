import{j as a,r as o}from"./iframe-q-XN_VZM.js";import{c as v}from"./createSvgIcon-CvYdi5pS.js";import{C as R}from"./Close-CmD3Qau8.js";import{B as n}from"./Box-Dmtu8wWb.js";import{T as i}from"./Typography-C8IUsM00.js";import{L}from"./LinearProgress-DIZCZ19C.js";import{I as q}from"./IconButton-BSXa4zK8.js";const E=v(a.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z"})),V=v(a.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"})),H=v(a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"}));function U({onFileSelect:b,onFileRemove:m,selectedFile:s,previewUrl:g,isUploading:l=!1,uploadProgress:j=0,isComplete:c=!1,accept:z="image/*,video/*",maxSize:d=50*1024*1024,variant:p="default",sx:C}){const[t,h]=o.useState(!1),[u,x]=o.useState(null),y=o.useRef(null),D=o.useCallback(e=>e.size>d?`File size exceeds ${Math.round(d/1048576)}MB limit`:null,[d]),f=o.useCallback(e=>{const r=D(e);if(r){x(r);return}x(null),b(e)},[D,b]),I=o.useCallback(e=>{e.preventDefault(),e.stopPropagation(),h(!0)},[]),w=o.useCallback(e=>{e.preventDefault(),e.stopPropagation(),h(!1)},[]),S=o.useCallback(e=>{e.preventDefault(),e.stopPropagation()},[]),F=o.useCallback(e=>{e.preventDefault(),e.stopPropagation(),h(!1);const r=e.dataTransfer.files;r&&r.length>0&&f(r[0])},[f]),M=o.useCallback(()=>{!l&&!c&&y.current?.click()},[l,c]),O=o.useCallback(e=>{const r=e.target.files;r&&r.length>0&&f(r[0]),e.target.value=""},[f]),B=o.useCallback(e=>{e.stopPropagation(),x(null),m?.()},[m]),k={default:240,compact:160,minimal:120},P=e=>e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`;return g||s?a.jsxs(n,{sx:{position:"relative",height:k[p],borderRadius:2,overflow:"hidden",border:"2px solid",borderColor:c?"success.main":"divider",backgroundColor:"grey.900",...C},children:[g&&a.jsx(n,{component:"img",src:g,alt:"Preview",sx:{width:"100%",height:"100%",objectFit:"contain"}}),l&&a.jsxs(n,{sx:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",bgcolor:"rgba(0, 0, 0, 0.7)"},children:[a.jsxs(i,{variant:"body2",sx:{color:"white",mb:2},children:["Uploading... ",j,"%"]}),a.jsx(L,{variant:"determinate",value:j,sx:{width:"60%",height:6,borderRadius:1}})]}),c&&!l&&a.jsxs(n,{sx:{position:"absolute",top:12,left:12,display:"flex",alignItems:"center",gap:.5,bgcolor:"success.main",color:"white",px:1.5,py:.5,borderRadius:1},children:[a.jsx(H,{fontSize:"small"}),a.jsx(i,{variant:"caption",sx:{fontWeight:600},children:"Uploaded"})]}),s&&a.jsxs(n,{sx:{position:"absolute",bottom:0,left:0,right:0,p:1.5,background:"linear-gradient(transparent, rgba(0,0,0,0.8))"},children:[a.jsx(i,{variant:"body2",sx:{color:"white",fontWeight:500,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:s.name}),a.jsx(i,{variant:"caption",sx:{color:"grey.400"},children:P(s.size)})]}),!l&&m&&a.jsx(q,{size:"small",onClick:B,sx:{position:"absolute",top:8,right:8,bgcolor:"rgba(0, 0, 0, 0.6)",color:"white","&:hover":{bgcolor:"error.main"}},children:a.jsx(R,{fontSize:"small"})})]}):a.jsxs(n,{onClick:M,onDragEnter:I,onDragLeave:w,onDragOver:S,onDrop:F,sx:{height:k[p],borderRadius:2,border:"2px dashed",borderColor:u?"error.main":t?"primary.main":"divider",backgroundColor:t?"action.hover":"background.paper",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:1.5,cursor:"pointer",transition:"all 0.2s ease","&:hover":{borderColor:u?"error.main":"primary.main",backgroundColor:"action.hover"},...C},children:[a.jsx("input",{ref:y,type:"file",accept:z,onChange:O,style:{display:"none"}}),a.jsx(n,{sx:{width:56,height:56,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",bgcolor:t?"primary.main":"action.selected",color:t?"white":"text.secondary",transition:"all 0.2s ease"},children:t?a.jsx(E,{sx:{fontSize:28}}):a.jsx(V,{sx:{fontSize:28}})}),a.jsxs(n,{sx:{textAlign:"center"},children:[p!=="minimal"&&a.jsx(i,{variant:"body1",sx:{fontWeight:600,color:t?"primary.main":"text.primary"},children:t?"Drop your file here":"Drag & drop or click to upload"}),p==="default"&&a.jsxs(i,{variant:"caption",color:"text.secondary",sx:{mt:.5,display:"block"},children:["Supports images and videos up to ",Math.round(d/(1024*1024)),"MB"]})]}),u&&a.jsx(i,{variant:"caption",color:"error",sx:{mt:1},children:u})]})}U.__docgenInfo={description:`FileDropzone 컴포넌트

드래그 앤 드롭 또는 클릭으로 파일을 업로드하는 영역.
미리보기, 업로드 진행률, 파일 정보 표시 기능 제공.

동작 방식:
1. 드래그 앤 드롭 또는 클릭으로 파일 선택
2. 선택된 파일의 썸네일 미리보기 표시
3. 업로드 진행률 표시 (isUploading 상태)
4. 업로드 완료 후 성공 상태 표시

Props:
@param {function} onFileSelect - 파일 선택 핸들러 (file) => void [Required]
@param {function} onFileRemove - 파일 제거 핸들러 [Optional]
@param {File} selectedFile - 현재 선택된 파일 [Optional]
@param {string} previewUrl - 미리보기 이미지 URL [Optional]
@param {boolean} isUploading - 업로드 중 상태 [Optional, 기본값: false]
@param {number} uploadProgress - 업로드 진행률 (0-100) [Optional, 기본값: 0]
@param {boolean} isComplete - 업로드 완료 상태 [Optional, 기본값: false]
@param {string} accept - 허용 파일 형식 [Optional, 기본값: 'image/*,video/*']
@param {number} maxSize - 최대 파일 크기 (bytes) [Optional, 기본값: 50MB]
@param {string} variant - 스타일 변형 ('default' | 'compact' | 'minimal') [Optional, 기본값: 'default']
@param {object} sx - 추가 스타일 [Optional]

Example usage:
<FileDropzone
  onFileSelect={handleFileSelect}
  selectedFile={file}
  previewUrl={preview}
  isUploading={uploading}
  uploadProgress={progress}
/>`,methods:[],displayName:"FileDropzone",props:{isUploading:{defaultValue:{value:"false",computed:!1},required:!1},uploadProgress:{defaultValue:{value:"0",computed:!1},required:!1},isComplete:{defaultValue:{value:"false",computed:!1},required:!1},accept:{defaultValue:{value:"'image/*,video/*'",computed:!1},required:!1},maxSize:{defaultValue:{value:"50 * 1024 * 1024",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},required:!1}}};export{E as C,U as F};
