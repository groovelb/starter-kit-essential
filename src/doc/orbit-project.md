# Orbit Project: Vibe Coding Starter Kit

> **Concept:** 하이퍼 그로스 미디어 팀을 위한 콘텐츠 생산성 OS
> **Purpose:** 디자이너가 "데이터 집약적"이고 "속도감 있는" UI를 설계하는 경험 제공

---

## 1. Project Summary & Background (프로젝트 개요 및 배경)

### 🏢 Target Company: "Neon Spikes" (가상)
- **업종:** 숏폼 및 디지털 광고 콘텐츠 제작 스튜디오
- **규모:** 크리에이터 20명, PM 5명 (매월 300개 이상의 영상 발행)
- **상황:** 최근 클라이언트가 급증하면서 콘텐츠 생산량이 폭발적으로 늘어났습니다.

### 🚨 The Core Problem (직면한 문제)
**"속도가 생명인데, 관리가 발목을 잡고 있다."**

1.  **자산의 파편화 (Asset Fragmentation):**
    - 고화질 영상 소스가 NAS, Google Drive, Dropbox에 흩어져 있어 찾을 때마다 30분씩 허비합니다.
    - "지난번 그 영상 어디 있어?"라는 질문이 슬랙에서 하루에 50번씩 반복됩니다.
2.  **승인 병목 (Approval Bottleneck):**
    - PM이 슬랙, 카톡, 이메일로 쏟아지는 컨펌 요청을 놓쳐 배포 기한(Dead-line)을 넘기기 일쑤입니다.
    - 누가 지금 '노는 손'인지, 누가 '과부하' 상태인지 파악이 불가능합니다.
3.  **버전 관리 실패 (Version Chaos):**
    - `final_v2_real_final.mp4` 같은 파일명으로 인해 잘못된 버전이 클라이언트에게 전송되는 사고가 발생했습니다.

### 🎯 Orbit's Mission
Orbit은 Neon Spikes와 같은 고속 성장 미디어 팀을 위해 **"모든 디지털 자산과 프로젝트 흐름을 하나의 궤도(Orbit) 위에서 시각화"**하는 운영 체제입니다.
단순한 저장소가 아닌, **제작 속도(Velocity)를 0.1초라도 단축시키는 것**이 이 서비스의 유일한 목표입니다.

---

## 2. PRD (Product Requirements Document)

### 핵심 가치 (Core Value)
- **Velocity First:** 모든 UI는 클릭 수를 줄이고, 빠른 탐색을 지원해야 함 (단축키, 빠른 필터)
- **Visual Intelligence:** 메타데이터(해상도, 길이, 포맷)를 텍스트가 아닌 시각적 배지나 컬러로 즉시 인지 가능하게 함
- **Contextual Focus:** 나의 작업 단계(기획/제작/검수)에 따라 필요한 정보만 노출

---

## 3. Primary User Scenarios & Personas (핵심 사용자 시나리오: 문제와 해결)

### 👤 Persona A: Sarah (Head of Content) - "병목 해결사"
> "오늘 발행되어야 할 릴스 5개가 아직 승인 대기 중이에요. 어디서 막혔죠?"

- **🚨 The Problem (Pain Point):**
    - 팀원들이 마감을 지키고 있는지 한눈에 파악 불가 (Slack, Notion, 파일 서버를 오가며 확인해야 함)
    - 승인 대기 중인 프로젝트가 쌓여서 배포가 지연됨
- **⚡ The Solution (Orbit's Value):**
    - **Visual Bottleneck Indicator:** 대시보드에서 '지연' 상태를 색상으로 즉시 식별
    - **One-Click Nudge:** 별도 메신저 이동 없이 담당자에게 알림 전송
- **🎬 Key Scenario (Bottleneck Removal Workflow):**
    1. 출근 직후 **Team Pulse (Dashboard)**를 확인한다. 상단 'Pending Approval' 지표가 **Red Alert** 상태인 것을 발견한다.
    2. **Urgent Tasks** 위젯에서 '승인 대기 시간이 24시간을 넘긴' 프로젝트만 필터링한다.
    3. 해당 카드의 `Remind` 버튼을 클릭해 담당자에게 Slack 알림을 쏘고, 바로 미리보기 모달을 띄워 **"즉시 승인"** 처리한다.

### 👤 Persona B: Mike (Visual Editor) - "소스 사냥꾼"
> "지난번에 썼던 그 '네온 사인' 4K 영상, 라이선스 만료됐나요? 지금 당장 써야 하는데!"

- **🚨 The Problem (Pain Point):**
    - 수천 개의 파일 중 원하는 소스를 찾는 데만 1시간 소요
    - 저작권 만료된 소스를 잘못 사용하여 법적 리스크 발생
- **⚡ The Solution (Orbit's Value):**
    - **Metadata Filtering:** 해상도, 프레임레이트, 라이선스 만료일로 즉시 필터링
    - **Instant Preview:** 다운로드 없이 마우스 호버만으로 영상 내용 확인
- **🎬 Key Scenario (Rapid Asset Hunting):**
    1. **Asset Vault (Library)**에 진입해 단축키 `Cmd+K`로 필터 패널을 연다.
    2. 태그: `#Neon`, 해상도: `4K`, 라이선스: `Commercial Use` 조건을 동시에 건다.
    3. 검색된 12개 영상 위로 마우스를 올려 **Hover Preview**로 내용을 훑어본다.
    4. 최적의 소스를 찾아 상세 페이지에서 'License Valid' 배지를 확인 후, **'Copy CDN Link'**로 편집 툴에 바로 붙여넣는다.

### 👤 Persona C: Jin (Schedule Manager) - "일정 조율자"
> "A 클라이언트는 피드백이 너무 느려요. 우리 팀 리소스가 낭비되고 있어요."

- **🚨 The Problem (Pain Point):**
    - 클라이언트 피드백 지연으로 내부 제작 일정이 꼬임
    - 우선순위가 낮은 프로젝트에 디자이너들이 시간을 쏟고 있음
- **⚡ The Solution (Orbit's Value):**
    - **Status-based Sorting:** 진행 상태(Status)를 기준으로 프로젝트를 그룹화하여 관리
    - **Priority Flagging:** 프로젝트 우선순위를 시각적으로 격상/격하 가능
- **🎬 Key Scenario (Campaign Optimization):**
    1. **Campaign Ops (Manager)**에서 테이블 뷰를 열고, 'Status' 컬럼을 기준으로 정렬한다.
    2. 'Client Review' 상태에서 3일 이상 멈춰있는 프로젝트들을 일괄 선택(Multi-select)한다.
    3. 상태를 **'On Hold(보류)'**로 변경하고, 우선순위를 'Low'로 낮춰 팀원들의 대시보드에서 해당 건을 아래로 내린다.

---

## 4. Design Concept (디자인 방향성)

### 4.1. Visual Language: "Orbit Dark & Neon"
- **Concept:** 어두운 편집실 모니터 환경에 최적화된 다크 모드 기본 + 형광색(Neon) 포인트
- **Background:** `Deep Space (#0B0E14)` - 완전한 검정이 아닌 깊은 남색 계열
- **Accent:** `Signal Green`, `Alert Red`, `Electric Blue` 등 채도가 높은 색상으로 상태를 즉각 알림
- **Interaction:** 빠릿빠릿한(Snappy) 모션감. 딜레이 없는 Hover 효과.

### 4.2. Information Density (정보 밀도)
- **Maximized:** 한 화면에 최대한 많은 에셋과 정보를 보여주는 '전문가용 툴' 레이아웃
- **Visual Hierarchy:** 텍스트보다는 **썸네일, 상태 배지, 프로그레스 바**가 시선을 먼저 잡아야 함

---

## 5. Detailed Feature Scope (세부 기능 명세)

각 페이지는 Neon Spikes 팀이 직면한 구체적인 '병목'을 해결하도록 설계되었습니다.

### 5.1. Team Pulse (Dashboard)
**"승인 병목(Bottleneck)을 3초 안에 시각적으로 감지하라."**
- **Metric Cards with Trends:** '오늘 마감', '승인 대기' 건수를 강조하고, 전주 대비 증감률(Velocity)을 표시하여 팀의 속도감을 보여줍니다.
- **Urgent Task Widget:** 마감이 24시간 내로 임박했거나, 48시간 이상 승인이 지연된 'Red Alert' 항목만 모아서 보여줍니다.
- **Activity Feed:** 파일 업로드, 댓글, 승인 상태 변경 등 팀의 모든 움직임을 실시간 타임라인으로 중계하여 '누가 무엇을 하는지' 투명하게 합니다.
- **One-Click Actions:** 대시보드를 벗어나지 않고 카드 내에서 바로 `Remind(재촉)`, `Approve(승인)` 액션을 수행합니다.

### 5.2. Asset Vault (Library)
**"30분의 검색 시간을 30초로 단축하라."**
- **Multi-Filter Sidebar:** 단순히 폴더를 뒤지는 것이 아니라, `해상도(4K)`, `비율(9:16)`, `분위기(Neon)` 등 메타데이터를 복합적으로 필터링합니다.
- **Smart Grid (Masonry):** 숏폼(세로), 유튜브(가로), 카드뉴스(정방형) 등 서로 다른 비율의 미디어를 여백 없이 촘촘하게 배치하여 스크롤 효율을 높입니다.
- **Instant Preview:**
    - **Video:** 클릭 없이 마우스 호버만으로 영상을 재생(Muted)하여 내용을 확인합니다.
    - **Image:** 클릭 시 고해상도 모달을 띄워 픽셀 단위 디테일을 확인합니다.
- **Asset Details Panel:** 파일 크기, 포맷뿐만 아니라 '라이선스 만료일'과 '사용된 프로젝트'를 표시하여 잘못된 소스 사용을 방지합니다.

### 5.3. Campaign Ops (Manager)
**"수십 개의 프로젝트 흐름을 하나의 테이블에서 통제하라."**
- **Status-driven Table:** 프로젝트의 현재 상태(기획/제작/내부검수/클라이언트검수/완료)를 색상 배지로 시각화하여 흐름을 파악합니다.
- **Visual Progress:** 단순 텍스트 상태가 아닌, 진행률(%)을 프로그레스 바 형태로 보여주어 작업 완성도를 직관적으로 인지합니다.
- **Bulk Actions:** 여러 프로젝트를 다중 선택하여 `상태 일괄 변경`, `담당자 일괄 할당`, `우선순위 조정` 등 반복 작업을 자동화합니다.
- **Priority Sort:** 마감일 순, 혹은 긴급도(Urgent) 순으로 정렬하여 '지금 당장 해야 할 일'을 위로 올립니다.

### 5.4. Studio Config (Settings)
**"몰입을 방해하는 모든 요소를 제어하라."**
- **Theme Switcher:** 장시간 편집 작업에 지친 눈을 위해 'Dark Mode'를 기본으로 제공하고, 브랜드 컬러(Accent)를 커스텀합니다.
- **Notification Control:** 슬랙, 이메일, 푸시 알림 중 불필요한 채널을 끄고, '긴급(Urgent)' 알림만 받도록 설정합니다.
- **Workspace Profile:** 내 역할(Editor/Manager)과 전문 분야를 태깅하여, 협업 시 적합한 작업자로 추천되도록 합니다.

---

## 6. Showcase Range (구현 범위)
전체 백엔드 로직 없이, **프론트엔드 인터랙션과 UI**에 집중합니다.

- **포함:**
    - 반응형 레이아웃 (Mobile/Tablet/Desktop)
    - 라우팅 시뮬레이션 (메뉴 클릭 시 화면 전환)
    - 인터랙티브 요소 (Hover, Click, Dialog Open, Tab 전환)
    - 테마 스위칭 (Light/Dark Mode)
- **미포함:**
    - 실제 로그인/회원가입 로직 (Mocking 처리)
    - DB 연동 (로컬 Mock Data 사용)

---

## 7. Component List (사용될 핵심 컴포넌트)
기존 `src/components`를 기반으로, 필요 시 래핑(Wrapping)하여 사용합니다.

### Layout & Navigation
- `AppShell`: 전체 레이아웃 프레임 (Header + Sidebar)
- `PageContainer`: 페이지 여백 및 타이틀 관리
- `DynamicGrid` / `Grid`: 대시보드 위젯 배치 (SmartGrid 대체)

### Card & Data Display (Based on CustomCard)
모든 카드형 UI는 `CustomCard`를 래핑하거나 직접 사용하여 구현합니다.

- **`MetricCard` (Wrapper):** `CustomCard` 사용
    - Layout: `horizontal` 또는 `vertical`
    - Content: 아이콘 + 숫자 + 라벨 조합
- **`AssetCard` (Wrapper):** `CustomCard` 사용
    - Layout: `vertical`
    - Media: `mediaRatio`로 이미지/비디오 표시
    - Content: 제목 + 다운로드 버튼
- **`ProjectCard` (Wrapper):** `CustomCard` 사용
    - Layout: `vertical`
    - Content: 프로젝트 상태 뱃지 + 진행률 바 포함

### Table & List
- `AdvancedTable` (New): MUI Table 기반 + Sort/Select 기능 추가
- `StatusBadge` (New): Chip 컴포넌트 커스텀 래퍼

### Feedback & Input
- `ThemeSelector`: 테마 변경 컨트롤
- `SearchBar`: TextField + Icon 래퍼

---

## 8. Template List (조립된 템플릿)
`CustomCard`와 MUI Grid 시스템을 활용하여 조립된 중간 단위 블록입니다. (`src/components/templates/`)

1.  **StatsOverview:**
    - `Grid` 컨테이너 안에 4개의 `MetricCard` 배치
    - 반응형 Breakpoint (`xs=12`, `md=6`, `lg=3`) 적용
2.  **MediaGridGallery:**
    - 상단: `SearchBar` + `Chip` (필터)
    - 메인: `Grid` + 다수의 `AssetCard` (CustomCard 활용)
    - 인터랙션: 카드 클릭 시 상세 모달 오픈
3.  **TaskTableBoard:**
    - 상단: 탭 네비게이션 (All / Active / Completed)
    - 메인: `AdvancedTable` (데이터 리스트)
4.  **ConfigFormSection:**
    - 구조: `CustomCard` (Layout: `vertical`) 안에 폼 요소 배치
    - 내용: 프로필 설정, 알림 스위치 그룹

---

## 9. Page List (최종 페이지)
템플릿을 배치하여 완성된 화면입니다. (`src/pages/`)

1.  **Team Pulse (Dashboard):** `StatsOverview` + `ActivityFeed`
2.  **Asset Vault (Library):** `MediaGridGallery`
3.  **Campaign Ops (Manager):** `TaskTableBoard`
4.  **Studio Config (Settings):** `ConfigFormSection`
