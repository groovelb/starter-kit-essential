import{j as e}from"./iframe-q-XN_VZM.js";import{D as w,P as v,S as d}from"./SectionTitle-B-E4QVff.js";import{T as s}from"./Typography-C8IUsM00.js";import{b as m,a as h,c as r,T as t,d as g}from"./TableRow-DxwoBvdd.js";import{T as x}from"./TableHead-CFjEf5Al.js";import{B as a}from"./Box-Dmtu8wWb.js";import{D as j}from"./Divider-DePyv9fJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CDdqLoBf.js";import"./Container-q5yveaGP.js";import"./memoTheme-BW0efeYW.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./Grid-Dd6PAMTp.js";import"./isMuiElement-DpiUmZPP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./dividerClasses-BAQMkccN.js";const f={Button:{name:"Button",description:"클릭 가능한 인터랙션 요소. 주요 액션을 유도하는 데 사용됩니다.",variants:["contained","outlined","text"],sizes:["small","medium","large"],tokens:{palette:{items:[{token:"primary",role:"기본 버튼 색상"},{token:"secondary",role:"보조 버튼 색상"},{token:"error",role:"삭제/위험 액션"},{token:"warning",role:"주의 필요 액션"},{token:"success",role:"완료/확인 액션"},{token:"info",role:"정보성 액션"}],affects:"배경색 (contained), 테두리색 (outlined), 텍스트색",howToUse:'color prop으로 지정 (예: color="primary")'},typography:{items:[{token:"button",role:"버튼 텍스트 스타일"}],affects:"폰트 크기 (14px), 굵기 (600), 자간 (0.02em)",howToUse:"자동 적용 (theme.typography.button)"},spacing:{items:[{token:"spacing(1)",role:"small 버튼 padding"},{token:"spacing(2)",role:"medium 버튼 padding"},{token:"spacing(3)",role:"large 버튼 padding"}],affects:"버튼 내부 여백",howToUse:"size prop으로 간접 조절"},shape:{items:[{token:"borderRadius",role:"버튼 모서리 곡률"}],affects:"버튼 외곽선 모서리",howToUse:"theme.shape.borderRadius (현재: 0px)"},shadows:{items:[{token:"elevation1",role:"기본 그림자"},{token:"elevation2",role:"hover 시 그림자"}],affects:"contained 버튼의 그림자",howToUse:"disableElevation prop으로 제거 가능"},transitions:{items:[{token:"duration.short",role:"상태 변화 속도"},{token:"easing.easeInOut",role:"애니메이션 곡선"}],affects:"hover, focus, active 전환 효과",howToUse:"자동 적용"}},stateTokens:{hover:"palette.action.hover (배경 오버레이)",focus:"palette.action.focus + focusVisible 링",active:"palette.[color].dark (어두운 색상)",disabled:"palette.action.disabled, disabledBackground"}},Typography:{name:"Typography",description:"텍스트를 표시하는 컴포넌트. 제목부터 본문까지 다양한 텍스트 스타일을 제공합니다.",variants:["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","overline"],tokens:{typography:{items:[{token:"h1",role:"가장 큰 제목 (40px, 900)"},{token:"h2",role:"섹션 제목 (32px, 900)"},{token:"h3",role:"하위 섹션 제목 (28px, 800)"},{token:"h4",role:"카드 제목 (24px, 700)"},{token:"h5",role:"작은 제목 (20px, 700)"},{token:"h6",role:"가장 작은 제목 (18px, 600)"},{token:"subtitle1",role:"부제목 (16px, 500)"},{token:"subtitle2",role:"작은 부제목 (14px, 500)"},{token:"body1",role:"기본 본문 (16px)"},{token:"body2",role:"보조 본문 (14px)"},{token:"caption",role:"캡션/주석 (12px)"},{token:"overline",role:"라벨/분류 (12px, 대문자)"}],affects:"fontFamily, fontSize, fontWeight, lineHeight, letterSpacing",howToUse:"variant prop으로 지정"},palette:{items:[{token:"text.primary",role:"주요 텍스트 색상"},{token:"text.secondary",role:"보조 텍스트 색상"},{token:"text.disabled",role:"비활성 텍스트 색상"},{token:"primary.main",role:"강조 텍스트"},{token:"error.main",role:"오류 텍스트"}],affects:"텍스트 색상",howToUse:'color prop으로 지정 (예: color="textSecondary")'}}},TextField:{name:"TextField",description:"텍스트 입력 필드. 사용자로부터 텍스트 데이터를 입력받습니다.",variants:["outlined","filled","standard"],tokens:{palette:{items:[{token:"primary.main",role:"focus 시 테두리/라벨 색상"},{token:"error.main",role:"오류 상태 색상"},{token:"text.primary",role:"입력 텍스트 색상"},{token:"text.secondary",role:"라벨/플레이스홀더 색상"},{token:"action.hover",role:"hover 시 배경"},{token:"action.disabled",role:"비활성 상태"}],affects:"테두리, 라벨, 입력 텍스트, 배경 색상",howToUse:"color, error prop으로 지정"},typography:{items:[{token:"body1",role:"입력 텍스트 스타일"},{token:"caption",role:"helperText 스타일"},{token:"body2",role:"라벨 스타일"}],affects:"입력 필드 내 텍스트 스타일",howToUse:"자동 적용"},spacing:{items:[{token:"spacing(1.5)",role:"내부 padding"},{token:"spacing(1)",role:"helperText 간격"}],affects:"필드 내부 여백",howToUse:"size, margin prop으로 조절"},shape:{items:[{token:"borderRadius",role:"필드 모서리"}],affects:"outlined, filled variant 모서리",howToUse:"theme.shape.borderRadius"},transitions:{items:[{token:"duration.shorter",role:"focus 전환 속도"}],affects:"테두리 색상, 라벨 위치 전환",howToUse:"자동 적용"}},stateTokens:{hover:"테두리 색상 진해짐",focus:"primary.main 테두리, 라벨 축소 이동",error:"error.main 테두리/라벨",disabled:"action.disabled 배경, 텍스트"}},Select:{name:"Select",description:"드롭다운 선택 컴포넌트. 여러 옵션 중 하나를 선택할 수 있습니다.",variants:["outlined","filled","standard"],tokens:{palette:{items:[{token:"primary.main",role:"focus 시 테두리 색상"},{token:"text.primary",role:"선택된 값 텍스트"},{token:"text.secondary",role:"라벨/플레이스홀더"},{token:"action.hover",role:"옵션 hover 배경"},{token:"action.selected",role:"선택된 옵션 배경"},{token:"background.paper",role:"드롭다운 메뉴 배경"}],affects:"필드, 드롭다운 메뉴 색상",howToUse:"TextField와 동일"},typography:{items:[{token:"body1",role:"선택된 값 텍스트"},{token:"body2",role:"옵션 텍스트"}],affects:"텍스트 스타일",howToUse:"자동 적용"},shape:{items:[{token:"borderRadius",role:"필드 및 메뉴 모서리"}],affects:"모서리 곡률",howToUse:"theme.shape.borderRadius"},shadows:{items:[{token:"elevation8",role:"드롭다운 메뉴 그림자"}],affects:"메뉴 떠있는 효과",howToUse:"MenuProps로 조절 가능"},zIndex:{items:[{token:"modal",role:"드롭다운 레이어 순서"}],affects:"다른 요소 위에 표시",howToUse:"자동 적용"}}},Card:{name:"Card",description:"콘텐츠를 담는 컨테이너. 관련 정보를 그룹화하여 표시합니다.",subComponents:["CardHeader","CardContent","CardActions","CardMedia"],tokens:{palette:{items:[{token:"background.paper",role:"카드 배경색"},{token:"text.primary",role:"제목 텍스트"},{token:"text.secondary",role:"부제목, 설명 텍스트"},{token:"divider",role:"구분선 색상"}],affects:"카드 배경, 텍스트 색상",howToUse:"sx prop으로 커스텀"},shape:{items:[{token:"borderRadius",role:"카드 모서리"}],affects:"카드 외곽 모서리",howToUse:"theme.shape.borderRadius (현재: 0px)"},shadows:{items:[{token:"elevation1",role:"기본 그림자"},{token:"elevation2-24",role:"elevation prop 값"}],affects:"카드 떠있는 효과",howToUse:"elevation prop으로 지정"},spacing:{items:[{token:"spacing(2)",role:"CardContent padding"},{token:"spacing(1)",role:"CardActions padding"}],affects:"내부 여백",howToUse:"자동 적용, sx로 조절"}}},Table:{name:"Table",description:"데이터를 행과 열로 구성하여 표시하는 테이블 컴포넌트.",subComponents:["TableHead","TableBody","TableRow","TableCell","TablePagination"],tokens:{palette:{items:[{token:"background.paper",role:"테이블 배경"},{token:"text.primary",role:"셀 텍스트"},{token:"text.secondary",role:"보조 텍스트"},{token:"divider",role:"셀 구분선"},{token:"action.hover",role:"행 hover 배경"},{token:"action.selected",role:"선택된 행 배경"}],affects:"배경, 텍스트, 구분선 색상",howToUse:"sx prop으로 커스텀"},typography:{items:[{token:"body2",role:"셀 텍스트 (14px)"},{token:"subtitle2",role:"헤더 셀 텍스트"}],affects:"텍스트 스타일",howToUse:"자동 적용"},spacing:{items:[{token:"spacing(2)",role:"셀 padding"}],affects:"셀 내부 여백",howToUse:"size prop (small, medium)"}},stateTokens:{hover:"action.hover 행 배경",selected:"action.selected 행 배경",sortActive:"primary.main 정렬 아이콘"}},Chip:{name:"Chip",description:"태그, 상태, 카테고리를 표시하는 작은 컴포넌트.",variants:["filled","outlined"],sizes:["small","medium"],tokens:{palette:{items:[{token:"default",role:"기본 회색 배경"},{token:"primary",role:"주요 강조"},{token:"secondary",role:"보조 강조"},{token:"error",role:"오류/삭제 상태"},{token:"warning",role:"주의 상태"},{token:"success",role:"성공/완료 상태"},{token:"info",role:"정보 상태"}],affects:"배경색 (filled), 테두리색 (outlined)",howToUse:"color prop으로 지정"},typography:{items:[{token:"body2",role:"칩 텍스트 스타일"}],affects:"라벨 텍스트",howToUse:"자동 적용"},shape:{items:[{token:"16px (커스텀)",role:"칩 모서리 (pill 형태)"}],affects:"둥근 모서리",howToUse:"theme.components.MuiChip (현재: 4px)"},spacing:{items:[{token:"spacing(0.5)",role:"아이콘-텍스트 간격"},{token:"spacing(1)",role:"내부 padding"}],affects:"내부 여백",howToUse:"size prop으로 조절"}},stateTokens:{hover:"배경색 진해짐 (clickable)",focus:"focusVisible 링",disabled:"action.disabled"}},Alert:{name:"Alert",description:"사용자에게 중요한 메시지를 전달하는 피드백 컴포넌트.",variants:["standard","filled","outlined"],severities:["error","warning","success","info"],tokens:{palette:{items:[{token:"error",role:"오류 메시지 (빨간색)"},{token:"warning",role:"경고 메시지 (주황색)"},{token:"success",role:"성공 메시지 (초록색)"},{token:"info",role:"정보 메시지 (파란색)"}],affects:"배경색, 아이콘색, 텍스트색",howToUse:"severity prop으로 지정"},typography:{items:[{token:"body2",role:"메시지 텍스트"},{token:"subtitle2",role:"제목 텍스트 (AlertTitle)"}],affects:"텍스트 스타일",howToUse:"자동 적용"},shape:{items:[{token:"borderRadius",role:"Alert 모서리"}],affects:"외곽 모서리",howToUse:"theme.shape.borderRadius"},spacing:{items:[{token:"spacing(1.5)",role:"내부 padding"},{token:"spacing(1.5)",role:"아이콘-텍스트 간격"}],affects:"내부 여백",howToUse:"자동 적용"}}},Tabs:{name:"Tabs",description:"콘텐츠를 탭으로 구분하여 네비게이션하는 컴포넌트.",subComponents:["Tab"],tokens:{palette:{items:[{token:"primary.main",role:"선택된 탭, indicator 색상"},{token:"text.primary",role:"선택된 탭 텍스트"},{token:"text.secondary",role:"비선택 탭 텍스트"},{token:"action.hover",role:"탭 hover 배경"},{token:"divider",role:"탭 구분선 (선택적)"}],affects:"탭 텍스트, indicator 색상",howToUse:"textColor, indicatorColor prop"},typography:{items:[{token:"button",role:"탭 텍스트 스타일"}],affects:"탭 라벨 텍스트",howToUse:"자동 적용"},spacing:{items:[{token:"spacing(2)",role:"탭 내부 padding"},{token:"spacing(3)",role:"탭 간 간격"}],affects:"탭 크기, 간격",howToUse:"자동 적용"},transitions:{items:[{token:"duration.standard",role:"indicator 이동 속도"}],affects:"indicator 슬라이드 애니메이션",howToUse:"자동 적용"}},stateTokens:{hover:"action.hover 배경",selected:"primary.main 텍스트, indicator",disabled:"text.disabled"}},Dialog:{name:"Dialog",description:"모달 창. 사용자의 주의를 끌어 중요한 정보나 액션을 요청합니다.",subComponents:["DialogTitle","DialogContent","DialogActions"],tokens:{palette:{items:[{token:"background.paper",role:"다이얼로그 배경"},{token:"text.primary",role:"제목, 본문 텍스트"},{token:"text.secondary",role:"보조 텍스트"},{token:"divider",role:"섹션 구분선"},{token:"action.active",role:"backdrop (어두운 오버레이)"}],affects:"배경, 텍스트, backdrop 색상",howToUse:"sx prop으로 커스텀"},typography:{items:[{token:"h6",role:"DialogTitle 텍스트"},{token:"body1",role:"DialogContent 텍스트"}],affects:"텍스트 스타일",howToUse:"자동 적용"},shape:{items:[{token:"borderRadius",role:"다이얼로그 모서리"}],affects:"외곽 모서리",howToUse:"theme.shape.borderRadius"},shadows:{items:[{token:"elevation24",role:"다이얼로그 그림자"}],affects:"떠있는 효과",howToUse:"자동 적용 (가장 높은 elevation)"},zIndex:{items:[{token:"modal (1300)",role:"레이어 순서"}],affects:"다른 모든 요소 위에 표시",howToUse:"자동 적용"},spacing:{items:[{token:"spacing(2)",role:"DialogTitle padding"},{token:"spacing(3)",role:"DialogContent padding"},{token:"spacing(1)",role:"DialogActions padding"}],affects:"내부 여백",howToUse:"자동 적용"},transitions:{items:[{token:"duration.enteringScreen",role:"열림 애니메이션"},{token:"duration.leavingScreen",role:"닫힘 애니메이션"}],affects:"나타남/사라짐 효과",howToUse:"TransitionComponent prop"}}}},T={palette:{name:"Palette",description:"색상 토큰",figmaAnalogy:"Color Styles / Variables",icon:"🎨"},typography:{name:"Typography",description:"타이포그래피 토큰",figmaAnalogy:"Text Styles",icon:"📝"},spacing:{name:"Spacing",description:"간격 토큰 (8px 기반)",figmaAnalogy:"Auto Layout spacing",icon:"📐"},shape:{name:"Shape",description:"모양 토큰",figmaAnalogy:"Corner Radius",icon:"⬜"},shadows:{name:"Shadows",description:"그림자/Elevation 토큰",figmaAnalogy:"Drop Shadow Effects",icon:"🌑"},transitions:{name:"Transitions",description:"전환 효과 토큰",figmaAnalogy:"Smart Animate",icon:"⏱️"},zIndex:{name:"Z-Index",description:"레이어 순서",figmaAnalogy:"Layer Order",icon:"📚"}},k=["Button","Typography","TextField","Select","Card","Table","Chip","Alert","Tabs","Dialog"],$={title:"Style/Component Tokens",parameters:{layout:"padded",docs:{description:{component:`
## 컴포넌트별 토큰 사용 가이드

MUI 컴포넌트가 디자인될 때 어떤 테마 토큰을 참조하는지 보여줍니다.

### 목적
- 디자이너가 각 컴포넌트의 스타일링 구조를 이해
- 토큰 변경 시 영향받는 컴포넌트 파악
        `}}}},l={render:()=>{const c=["palette","typography","spacing","shape","shadows","transitions","zIndex"],u={palette:"색상 토큰 - 버튼, 칩, 알림 등 대부분의 컬러풀한 컴포넌트에 영향",typography:"타이포그래피 토큰 - 모든 텍스트 요소에 영향",spacing:"간격 토큰 (8px 기반) - 모든 컴포넌트의 여백에 영향",shape:"모양 토큰 - 카드, 버튼, 인풋 필드 등 모서리에 영향",shadows:"그림자 토큰 - elevation 있는 컴포넌트에 영향",transitions:"전환 효과 토큰 - 애니메이션 있는 컴포넌트에 영향",zIndex:"레이어 순서 토큰 - 모달, 드롭다운 등에 영향"},C=k.map(o=>{const n=f[o];return{name:o,description:n?.description||"",categories:c.map(i=>n?.tokens[i]?.items.length||0),total:Object.values(n?.tokens||{}).reduce((i,p)=>i+(p.items?.length||0),0)}});return e.jsxs(e.Fragment,{children:[e.jsx(w,{title:"Component Tokens",status:"Available",note:"Theme token usage by component",brandName:"Design System",systemName:"Starter Kit",version:"1.0"}),e.jsxs(v,{children:[e.jsx(s,{variant:"h4",sx:{fontWeight:700,mb:1},children:"Component Token Usage"}),e.jsx(s,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"MUI 컴포넌트가 테마의 어떤 토큰을 사용하는지 확인합니다."}),e.jsx(d,{title:"Token Categories",description:"테마 토큰 카테고리 설명"}),e.jsx(m,{sx:{mb:6},children:e.jsxs(h,{size:"small",children:[e.jsx(x,{children:e.jsxs(r,{children:[e.jsx(t,{sx:{fontWeight:600,width:"20%"},children:"Category"}),e.jsx(t,{sx:{fontWeight:600,width:"20%"},children:"Name"}),e.jsx(t,{sx:{fontWeight:600},children:"설명"})]})}),e.jsx(g,{children:c.map(o=>e.jsxs(r,{children:[e.jsx(t,{sx:{fontFamily:"monospace",fontSize:12},children:o}),e.jsx(t,{sx:{fontWeight:600},children:T[o]?.name}),e.jsx(t,{sx:{color:"text.secondary",fontSize:13},children:u[o]})]},o))})]})}),e.jsx(d,{title:"Usage Matrix",description:"컴포넌트 × 토큰 카테고리 사용 현황 (숫자는 토큰 개수)"}),e.jsx(m,{sx:{mb:6},children:e.jsxs(h,{size:"small",children:[e.jsx(x,{children:e.jsxs(r,{children:[e.jsx(t,{sx:{fontWeight:600,width:"15%"},children:"Component"}),c.map(o=>e.jsx(t,{align:"center",sx:{fontWeight:600,fontSize:11},children:T[o]?.name},o)),e.jsx(t,{align:"center",sx:{fontWeight:600},children:"Total"})]})}),e.jsx(g,{children:C.map(o=>e.jsxs(r,{children:[e.jsx(t,{sx:{fontWeight:600},children:o.name}),o.categories.map((n,i)=>e.jsx(t,{align:"center",children:n>0?e.jsx(a,{sx:{display:"inline-block",minWidth:24,py:.25,px:.75,backgroundColor:n>=5?"primary.main":n>=3?"grey.300":"grey.100",color:n>=5?"white":"text.primary",fontSize:12,fontWeight:600},children:n}):e.jsx(s,{variant:"caption",color:"text.disabled",children:"-"})},i)),e.jsx(t,{align:"center",sx:{fontWeight:600},children:o.total})]},o.name))})]})}),e.jsxs(a,{sx:{display:"flex",gap:3,mb:6},children:[e.jsxs(a,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(a,{sx:{width:24,height:20,backgroundColor:"primary.main"}}),e.jsx(s,{variant:"caption",children:"5+ (많이 사용)"})]}),e.jsxs(a,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(a,{sx:{width:24,height:20,backgroundColor:"grey.300"}}),e.jsx(s,{variant:"caption",children:"3-4 (보통)"})]}),e.jsxs(a,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(a,{sx:{width:24,height:20,backgroundColor:"grey.100"}}),e.jsx(s,{variant:"caption",children:"1-2 (적게 사용)"})]})]}),e.jsx(d,{title:"Component Details",description:"컴포넌트별 상세 토큰 정보"}),k.map(o=>{const n=f[o];return n?e.jsxs(a,{sx:{mb:4},children:[e.jsx(s,{variant:"h6",sx:{fontWeight:600,mb:1},children:n.name}),e.jsx(s,{variant:"body2",color:"text.secondary",sx:{mb:2},children:n.description}),e.jsx(m,{sx:{mb:2},children:e.jsxs(h,{size:"small",children:[e.jsx(x,{children:e.jsxs(r,{children:[e.jsx(t,{sx:{fontWeight:600,width:"15%"},children:"Category"}),e.jsx(t,{sx:{fontWeight:600,width:"30%"},children:"Token"}),e.jsx(t,{sx:{fontWeight:600},children:"Role"})]})}),e.jsx(g,{children:Object.entries(n.tokens).flatMap(([i,p])=>p.items.map((y,b)=>e.jsxs(r,{children:[b===0?e.jsx(t,{rowSpan:p.items.length,sx:{fontWeight:600,verticalAlign:"top"},children:T[i]?.name}):null,e.jsx(t,{sx:{fontFamily:"monospace",fontSize:12},children:y.token}),e.jsx(t,{sx:{color:"text.secondary",fontSize:13},children:y.role})]},`${i}-${b}`)))})]})}),e.jsx(j,{})]},o):null})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const categories = ['palette', 'typography', 'spacing', 'shape', 'shadows', 'transitions', 'zIndex'];
    const categoryDescriptions = {
      palette: '색상 토큰 - 버튼, 칩, 알림 등 대부분의 컬러풀한 컴포넌트에 영향',
      typography: '타이포그래피 토큰 - 모든 텍스트 요소에 영향',
      spacing: '간격 토큰 (8px 기반) - 모든 컴포넌트의 여백에 영향',
      shape: '모양 토큰 - 카드, 버튼, 인풋 필드 등 모서리에 영향',
      shadows: '그림자 토큰 - elevation 있는 컴포넌트에 영향',
      transitions: '전환 효과 토큰 - 애니메이션 있는 컴포넌트에 영향',
      zIndex: '레이어 순서 토큰 - 모달, 드롭다운 등에 영향'
    };
    const matrix = componentList.map(name => {
      const component = componentTokenMap[name];
      return {
        name,
        description: component?.description || '',
        categories: categories.map(cat => component?.tokens[cat]?.items.length || 0),
        total: Object.values(component?.tokens || {}).reduce((sum, cat) => sum + (cat.items?.length || 0), 0)
      };
    });
    return <>
        <DocumentTitle title="Component Tokens" status="Available" note="Theme token usage by component" brandName="Design System" systemName="Starter Kit" version="1.0" />
        <PageContainer>
          <Typography variant="h4" sx={{
          fontWeight: 700,
          mb: 1
        }}>
            Component Token Usage
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{
          mb: 4
        }}>
            MUI 컴포넌트가 테마의 어떤 토큰을 사용하는지 확인합니다.
          </Typography>

          <SectionTitle title="Token Categories" description="테마 토큰 카테고리 설명" />

          <TableContainer sx={{
          mb: 6
        }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{
                  fontWeight: 600,
                  width: '20%'
                }}>Category</TableCell>
                  <TableCell sx={{
                  fontWeight: 600,
                  width: '20%'
                }}>Name</TableCell>
                  <TableCell sx={{
                  fontWeight: 600
                }}>설명</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categories.map(cat => <TableRow key={cat}>
                    <TableCell sx={{
                  fontFamily: 'monospace',
                  fontSize: 12
                }}>{cat}</TableCell>
                    <TableCell sx={{
                  fontWeight: 600
                }}>{tokenCategories[cat]?.name}</TableCell>
                    <TableCell sx={{
                  color: 'text.secondary',
                  fontSize: 13
                }}>
                      {categoryDescriptions[cat]}
                    </TableCell>
                  </TableRow>)}
              </TableBody>
            </Table>
          </TableContainer>

          <SectionTitle title="Usage Matrix" description="컴포넌트 × 토큰 카테고리 사용 현황 (숫자는 토큰 개수)" />

          <TableContainer sx={{
          mb: 6
        }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{
                  fontWeight: 600,
                  width: '15%'
                }}>Component</TableCell>
                  {categories.map(cat => <TableCell key={cat} align="center" sx={{
                  fontWeight: 600,
                  fontSize: 11
                }}>
                      {tokenCategories[cat]?.name}
                    </TableCell>)}
                  <TableCell align="center" sx={{
                  fontWeight: 600
                }}>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {matrix.map(row => <TableRow key={row.name}>
                    <TableCell sx={{
                  fontWeight: 600
                }}>{row.name}</TableCell>
                    {row.categories.map((count, idx) => <TableCell key={idx} align="center">
                        {count > 0 ? <Box sx={{
                    display: 'inline-block',
                    minWidth: 24,
                    py: 0.25,
                    px: 0.75,
                    backgroundColor: count >= 5 ? 'primary.main' : count >= 3 ? 'grey.300' : 'grey.100',
                    color: count >= 5 ? 'white' : 'text.primary',
                    fontSize: 12,
                    fontWeight: 600
                  }}>
                            {count}
                          </Box> : <Typography variant="caption" color="text.disabled">-</Typography>}
                      </TableCell>)}
                    <TableCell align="center" sx={{
                  fontWeight: 600
                }}>{row.total}</TableCell>
                  </TableRow>)}
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{
          display: 'flex',
          gap: 3,
          mb: 6
        }}>
            <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}>
              <Box sx={{
              width: 24,
              height: 20,
              backgroundColor: 'primary.main'
            }} />
              <Typography variant="caption">5+ (많이 사용)</Typography>
            </Box>
            <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}>
              <Box sx={{
              width: 24,
              height: 20,
              backgroundColor: 'grey.300'
            }} />
              <Typography variant="caption">3-4 (보통)</Typography>
            </Box>
            <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}>
              <Box sx={{
              width: 24,
              height: 20,
              backgroundColor: 'grey.100'
            }} />
              <Typography variant="caption">1-2 (적게 사용)</Typography>
            </Box>
          </Box>

          <SectionTitle title="Component Details" description="컴포넌트별 상세 토큰 정보" />

          {componentList.map(name => {
          const component = componentTokenMap[name];
          if (!component) return null;
          return <Box key={name} sx={{
            mb: 4
          }}>
                <Typography variant="h6" sx={{
              fontWeight: 600,
              mb: 1
            }}>
                  {component.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{
              mb: 2
            }}>
                  {component.description}
                </Typography>

                <TableContainer sx={{
              mb: 2
            }}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{
                      fontWeight: 600,
                      width: '15%'
                    }}>Category</TableCell>
                        <TableCell sx={{
                      fontWeight: 600,
                      width: '30%'
                    }}>Token</TableCell>
                        <TableCell sx={{
                      fontWeight: 600
                    }}>Role</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Object.entries(component.tokens).flatMap(([category, data]) => data.items.map((item, idx) => <TableRow key={\`\${category}-\${idx}\`}>
                            {idx === 0 ? <TableCell rowSpan={data.items.length} sx={{
                      fontWeight: 600,
                      verticalAlign: 'top'
                    }}>
                                {tokenCategories[category]?.name}
                              </TableCell> : null}
                            <TableCell sx={{
                      fontFamily: 'monospace',
                      fontSize: 12
                    }}>
                              {item.token}
                            </TableCell>
                            <TableCell sx={{
                      color: 'text.secondary',
                      fontSize: 13
                    }}>
                              {item.role}
                            </TableCell>
                          </TableRow>))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Divider />
              </Box>;
        })}
        </PageContainer>
      </>;
  }
}`,...l.parameters?.docs?.source},description:{story:"컴포넌트 토큰 문서",...l.parameters?.docs?.description}}};const V=["Default"];export{l as Default,V as __namedExportsOrder,$ as default};
