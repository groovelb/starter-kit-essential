import{j as r,L as n,M as a,N as p}from"./iframe-q-XN_VZM.js";import{A as m,M as s}from"./MoodboardsPage-4MDmZpIY.js";import{B as d}from"./Box-Dmtu8wWb.js";import"./preload-helper-PPVm8Dsz.js";import"./Add-DsnlUBfa.js";import"./createSvgIcon-CvYdi5pS.js";import"./memoTheme-BW0efeYW.js";import"./Close-CmD3Qau8.js";import"./SearchBar-BWx1BoPs.js";import"./Search-B6cHP2qc.js";import"./IconButton-BSXa4zK8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-JbB1eRtB.js";import"./useTimeout-C6lNLwyh.js";import"./CircularProgress-K6SSDdjw.js";import"./InputBase--W6Qy_gV.js";import"./utils-Bug588nc.js";import"./ownerWindow-CO8Ksk3k.js";import"./debounce-Be36O1Ab.js";import"./isHostComponent-DVu5iVWx.js";import"./Button-Coknce8O.js";import"./Select-DlpVDPsS.js";import"./useSlot-Xw8rJOQc.js";import"./useSlotProps-CYaCcMSY.js";import"./Paper-ri-B2SDS.js";import"./useTheme-CDdqLoBf.js";import"./Grow-Cmv2id48.js";import"./utils-UDy2T9Xi.js";import"./index-DUeF1Pkm.js";import"./index-C2SgXQAb.js";import"./getReactElementRef-CJ7j01sk.js";import"./mergeSlotProps-Cg99X4s0.js";import"./Modal-Cp6PhS6B.js";import"./useControlled-Dx2BjZdt.js";import"./MenuItem-BnGKUDh9.js";import"./listItemTextClasses-5YcgVpaX.js";import"./dividerClasses-BAQMkccN.js";import"./Collapse-BRrJOswI.js";import"./Typography-C8IUsM00.js";import"./Chip-CBvZjQD4.js";import"./FileDropzone-pmc9wW2H.js";import"./LinearProgress-DIZCZ19C.js";import"./TagInput-j-IMxDsC.js";import"./Snackbar-bTBQXszO.js";import"./TextField-DgQ3k6VB.js";import"./InputLabel-DbttPIAK.js";import"./FormLabel-Cx8V1pjo.js";import"./isMuiElement-DpiUmZPP.js";import"./FormHelperText-C_TeGrMm.js";import"./museMockData-Y3ZfJwd0.js";import"./Favorite-CJCmVXTr.js";import"./FavoriteBorder-DF40WW_l.js";import"./ChevronRight-C82aywmU.js";import"./Divider-DePyv9fJ.js";import"./PageContainer-CGiDBXoR.js";import"./Container-q5yveaGP.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./CollectionDropdown-BSiu3OBz.js";import"./ListItemText-DtuXspMo.js";import"./AutoAwesome-Da6E_c8-.js";import"./ImageCard-COWnLIyX.js";import"./CustomCard-BaRKR-AP.js";import"./CardContainer-B3rD2Xhu.js";import"./Masonry-YhtJCdL7.js";import"./MoodboardCard-Cw87D5OT.js";import"./Grid-Dd6PAMTp.js";import"./DialogTitle-ebosctkT.js";import"./pexels-test-data-Di7YEpDZ.js";function t({children:i}){return r.jsxs(n,{theme:a,children:[r.jsx(p,{}),r.jsx(d,{sx:{minHeight:"100vh",bgcolor:"background.default",p:3},children:i})]})}const Br={title:"Pages/MUSE",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
## MUSE 페이지

MUSE 프로젝트의 전체 페이지 컴포넌트.

### 페이지 목록
- **ArchivePage**: 메인 대시보드 - 레퍼런스 아카이브 탐색 및 관리
- **MoodboardsPage**: 무드보드 관리 및 큐레이션

### 사용 방법
각 페이지는 MainLayout 내에서 렌더링되며, React Router를 통해 네비게이션됩니다.

\`\`\`jsx
import { ArchivePage } from './pages/ArchivePage';
import { MoodboardsPage } from './pages/MoodboardsPage';

<Routes>
  <Route element={<MainLayout />}>
    <Route index element={<ArchivePage />} />
    <Route path="moodboards" element={<MoodboardsPage />} />
  </Route>
</Routes>
\`\`\`
        `}}}},o={render:()=>r.jsx(t,{children:r.jsx(m,{})}),parameters:{docs:{description:{story:`
### Archive 페이지

MUSE의 메인 대시보드로, 사용자가 수집한 모든 레퍼런스를 탐색하고 관리할 수 있습니다.

**구성 요소:**
- 페이지 헤더 (제목, 업로드 버튼)
- FilterBar (검색, 태그 필터, 정렬, 뷰 모드)
- ImageCard 그리드
- UploadModal (레퍼런스 업로드)
- ImageDetailModal (상세 보기)
- CollectionDropdown (무드보드 추가)

**인터랙션:**
1. 검색창에 키워드 입력하여 필터링
2. 태그 칩 클릭하여 태그 기반 필터링
3. 이미지 카드 클릭하여 상세 보기
4. 하트 아이콘 클릭하여 좋아요
5. 폴더 아이콘 클릭하여 무드보드에 추가
6. Upload 버튼 클릭하여 새 레퍼런스 업로드
        `}}}},e={render:()=>r.jsx(t,{children:r.jsx(s,{})}),parameters:{docs:{description:{story:`
### Moodboards 페이지

선별된 레퍼런스들을 프로젝트별로 정리하고 관리하는 페이지입니다.

**구성 요소:**
- 페이지 헤더 (제목, 새 보드 생성 버튼)
- 무드보드 탭 네비게이션
- 현재 보드 정보 영역
- ImageCard 그리드 (제거/드래그 버튼 포함)
- 보드 관리 메뉴 (이름 변경, 복제, 공유, 삭제)
- 다이얼로그 (생성, 이름 변경, 삭제 확인)

**인터랙션:**
1. 탭 클릭하여 무드보드 전환
2. New Board 버튼으로 새 무드보드 생성
3. 이미지 카드의 X 버튼으로 아이템 제거
4. 드래그 핸들로 순서 변경 (시뮬레이션)
5. 메뉴에서 보드 관리 (이름 변경, 복제, 공유, 삭제)
6. Share 버튼으로 공유 링크 복사
        `}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeWrapper>
      <ArchivePage />
    </ThemeWrapper>,
  parameters: {
    docs: {
      description: {
        story: \`
### Archive 페이지

MUSE의 메인 대시보드로, 사용자가 수집한 모든 레퍼런스를 탐색하고 관리할 수 있습니다.

**구성 요소:**
- 페이지 헤더 (제목, 업로드 버튼)
- FilterBar (검색, 태그 필터, 정렬, 뷰 모드)
- ImageCard 그리드
- UploadModal (레퍼런스 업로드)
- ImageDetailModal (상세 보기)
- CollectionDropdown (무드보드 추가)

**인터랙션:**
1. 검색창에 키워드 입력하여 필터링
2. 태그 칩 클릭하여 태그 기반 필터링
3. 이미지 카드 클릭하여 상세 보기
4. 하트 아이콘 클릭하여 좋아요
5. 폴더 아이콘 클릭하여 무드보드에 추가
6. Upload 버튼 클릭하여 새 레퍼런스 업로드
        \`
      }
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`Archive 페이지 (메인 대시보드)

레퍼런스 아카이브 탐색 및 관리 화면.

주요 기능:
- FilterBar로 검색어/태그 기반 실시간 필터링
- ImageCard 그리드에서 레퍼런스 탐색
- 카드 클릭 시 ImageDetailModal로 상세 보기
- FAB 또는 헤더 버튼으로 UploadModal 진입
- 무드보드 추가 시 CollectionDropdown 표시`,...o.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeWrapper>
      <MoodboardsPage />
    </ThemeWrapper>,
  parameters: {
    docs: {
      description: {
        story: \`
### Moodboards 페이지

선별된 레퍼런스들을 프로젝트별로 정리하고 관리하는 페이지입니다.

**구성 요소:**
- 페이지 헤더 (제목, 새 보드 생성 버튼)
- 무드보드 탭 네비게이션
- 현재 보드 정보 영역
- ImageCard 그리드 (제거/드래그 버튼 포함)
- 보드 관리 메뉴 (이름 변경, 복제, 공유, 삭제)
- 다이얼로그 (생성, 이름 변경, 삭제 확인)

**인터랙션:**
1. 탭 클릭하여 무드보드 전환
2. New Board 버튼으로 새 무드보드 생성
3. 이미지 카드의 X 버튼으로 아이템 제거
4. 드래그 핸들로 순서 변경 (시뮬레이션)
5. 메뉴에서 보드 관리 (이름 변경, 복제, 공유, 삭제)
6. Share 버튼으로 공유 링크 복사
        \`
      }
    }
  }
}`,...e.parameters?.docs?.source},description:{story:`Moodboards 페이지

무드보드 관리 및 큐레이션 화면.

주요 기능:
- 탭으로 무드보드 간 전환
- 각 무드보드 내 아이템 그리드 표시
- 아이템 제거, 순서 변경 (시뮬레이션)
- 새 무드보드 생성, 이름 변경, 삭제`,...e.parameters?.docs?.description}}};const Cr=["Archive","Moodboards"];export{o as Archive,e as Moodboards,Cr as __namedExportsOrder,Br as default};
