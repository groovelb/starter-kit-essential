import{r as x,j as s}from"./iframe-q-XN_VZM.js";import{B as i}from"./Box-Dmtu8wWb.js";const O=x.forwardRef(function({src:e,alt:r="",type:a="image",aspectRatio:u="16/9",objectFit:p="cover",isLazy:d=!0,poster:n,isAutoPlay:f=!1,isMuted:c=!0,isLoop:m=!1,hasControls:v=!1,isPlaysInline:g=!0,sx:y={},...t},o){const l={width:"100%",height:"auto",aspectRatio:u,objectFit:p,display:"block",...y};return a==="image"?s.jsx(i,{ref:o,component:"img",src:e,alt:r,loading:d?"lazy":"eager",sx:l,...t}):a==="video"?s.jsx(i,{ref:o,component:"video",src:e,poster:n,autoPlay:f,muted:c,loop:m,controls:v,playsInline:g,sx:l,...t}):null});O.__docgenInfo={description:`AspectMedia Component

이미지 또는 비디오를 지정된 비율로 표시하는 범용 미디어 컴포넌트입니다.
CSS aspect-ratio 속성을 사용하여 반응형 비율을 유지합니다.

## 동작 방식
1. type prop으로 이미지/비디오 렌더링 방식 결정
2. aspectRatio prop으로 고정 비율 유지 (예: '16/9', '4/3', '1/1')
3. objectFit prop으로 미디어가 컨테이너에 맞춰지는 방식 결정
4. 비디오의 경우 autoPlay, muted, loop, controls 등 제어 가능

Props:
@param {string} src - 미디어 소스 URL [Required]
@param {string} alt - 대체 텍스트 (이미지용) [Optional, 기본값: '']
@param {string} type - 미디어 타입 ('image' | 'video') [Optional, 기본값: 'image']
@param {string} aspectRatio - CSS aspect-ratio 값 [Optional, 기본값: '16/9']
@param {string} objectFit - CSS object-fit 값 [Optional, 기본값: 'cover']
@param {boolean} isLazy - 지연 로딩 활성화 [Optional, 기본값: true]
@param {string} poster - 비디오 포스터 이미지 URL [Optional]
@param {boolean} isAutoPlay - 비디오 자동 재생 [Optional, 기본값: false]
@param {boolean} isMuted - 비디오 음소거 [Optional, 기본값: true]
@param {boolean} isLoop - 비디오 반복 재생 [Optional, 기본값: false]
@param {boolean} hasControls - 비디오 컨트롤 표시 [Optional, 기본값: false]
@param {boolean} isPlaysInline - 인라인 재생 (모바일) [Optional, 기본값: true]
@param {Object} sx - 추가 MUI sx 스타일 [Optional]

Example usage:
// 이미지
<AspectMedia
  src="/photo.jpg"
  alt="Photo description"
  aspectRatio="4/3"
/>

// 비디오
<AspectMedia
  type="video"
  src="/video.mp4"
  aspectRatio="16/9"
  isAutoPlay
  isMuted
  isLoop
/>`,methods:[],displayName:"AspectMedia",props:{alt:{defaultValue:{value:"''",computed:!1},required:!1},type:{defaultValue:{value:"'image'",computed:!1},required:!1},aspectRatio:{defaultValue:{value:"'16/9'",computed:!1},required:!1},objectFit:{defaultValue:{value:"'cover'",computed:!1},required:!1},isLazy:{defaultValue:{value:"true",computed:!1},required:!1},isAutoPlay:{defaultValue:{value:"false",computed:!1},required:!1},isMuted:{defaultValue:{value:"true",computed:!1},required:!1},isLoop:{defaultValue:{value:"false",computed:!1},required:!1},hasControls:{defaultValue:{value:"false",computed:!1},required:!1},isPlaysInline:{defaultValue:{value:"true",computed:!1},required:!1},sx:{defaultValue:{value:"{}",computed:!1},required:!1}}};export{O as A};
