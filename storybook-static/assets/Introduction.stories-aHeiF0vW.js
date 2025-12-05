import{j as e}from"./iframe-q-XN_VZM.js";import{P as l}from"./SectionTitle-B-E4QVff.js";import{T as r}from"./Typography-C8IUsM00.js";import{D as i}from"./Divider-DePyv9fJ.js";import{b as s,a as n,d,c as t,T as a}from"./TableRow-DxwoBvdd.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CDdqLoBf.js";import"./Container-q5yveaGP.js";import"./memoTheme-BW0efeYW.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./Grid-Dd6PAMTp.js";import"./isMuiElement-DpiUmZPP.js";import"./Box-Dmtu8wWb.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./dividerClasses-BAQMkccN.js";const w={title:"Page/Introduction",parameters:{layout:"padded",docs:{description:{component:`
## 페이지

전체 페이지 레이아웃과 플로우를 보여줍니다.

### 용도
- 페이지 단위 레이아웃 확인
- 컴포넌트 조합 패턴 검토
- 전체 사용자 플로우 시뮬레이션
        `}}}},o={render:()=>e.jsxs(l,{children:[e.jsx(r,{variant:"h4",sx:{fontWeight:700,mb:1},children:"페이지 섹션"}),e.jsx(r,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"전체 페이지 레이아웃이 추가될 예정입니다."}),e.jsx(i,{sx:{mb:4}}),e.jsx(r,{variant:"h5",sx:{fontWeight:600,mb:3},children:"예정된 페이지"}),e.jsx(s,{sx:{mb:4},children:e.jsx(n,{size:"small",children:e.jsxs(d,{children:[e.jsxs(t,{children:[e.jsx(a,{sx:{fontWeight:600,width:"30%"},children:"Main Page"}),e.jsx(a,{children:"메인 랜딩 페이지"})]}),e.jsxs(t,{children:[e.jsx(a,{sx:{fontWeight:600},children:"Detail Page"}),e.jsx(a,{children:"상세 정보 페이지"})]}),e.jsxs(t,{children:[e.jsx(a,{sx:{fontWeight:600},children:"Settings Page"}),e.jsx(a,{children:"설정 페이지"})]})]})})}),e.jsx(r,{variant:"body2",color:"text.secondary",children:"각 페이지는 Template 섹션의 컴포넌트 조합을 활용하여 구성됩니다."})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <PageContainer>
      <Typography variant="h4" sx={{
      fontWeight: 700,
      mb: 1
    }}>
        페이지 섹션
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{
      mb: 4
    }}>
        전체 페이지 레이아웃이 추가될 예정입니다.
      </Typography>

      <Divider sx={{
      mb: 4
    }} />

      <Typography variant="h5" sx={{
      fontWeight: 600,
      mb: 3
    }}>
        예정된 페이지
      </Typography>

      <TableContainer sx={{
      mb: 4
    }}>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell sx={{
              fontWeight: 600,
              width: '30%'
            }}>Main Page</TableCell>
              <TableCell>메인 랜딩 페이지</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{
              fontWeight: 600
            }}>Detail Page</TableCell>
              <TableCell>상세 정보 페이지</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{
              fontWeight: 600
            }}>Settings Page</TableCell>
              <TableCell>설정 페이지</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="body2" color="text.secondary">
        각 페이지는 Template 섹션의 컴포넌트 조합을 활용하여 구성됩니다.
      </Typography>
    </PageContainer>
}`,...o.parameters?.docs?.source}}};const R=["Default"];export{o as Default,R as __namedExportsOrder,w as default};
