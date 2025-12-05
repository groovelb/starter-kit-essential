import{j as t,r as z}from"./iframe-q-XN_VZM.js";import{D as g,P as u}from"./SectionTitle-B-E4QVff.js";import{u as x}from"./useTheme-CDdqLoBf.js";import{T as s}from"./Typography-C8IUsM00.js";import{B as a}from"./Box-Dmtu8wWb.js";import{D as j}from"./Divider-DePyv9fJ.js";import{C as w}from"./Collapse-BRrJOswI.js";import"./preload-helper-PPVm8Dsz.js";import"./Container-q5yveaGP.js";import"./memoTheme-BW0efeYW.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./Grid-Dd6PAMTp.js";import"./isMuiElement-DpiUmZPP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./dividerClasses-BAQMkccN.js";import"./utils-UDy2T9Xi.js";import"./useTimeout-C6lNLwyh.js";import"./index-DUeF1Pkm.js";import"./index-C2SgXQAb.js";import"./useSlot-Xw8rJOQc.js";import"./isHostComponent-DVu5iVWx.js";const J={title:"Style/Overview",parameters:{layout:"padded",docs:{description:{component:`
## Theme 구조

\`src/styles/theme.js\`의 전체 구조를 트리 형태로 탐색합니다.

키를 클릭하면 하위 구조를 펼치거나 접을 수 있습니다.
        `}}}},b=({keyName:e,value:o,depth:r=0,defaultOpen:i=!1})=>{const[y,d]=z.useState(i),f=typeof o=="object"&&o!==null&&!Array.isArray(o),c=Array.isArray(o),p=f||c,m=p?Object.keys(o).length:0,v=typeof o=="string"&&(o.startsWith("#")||o.startsWith("rgb")||o.startsWith("rgba")),k=n=>typeof n=="string"?`"${n}"`:typeof n=="number"?n:typeof n=="boolean"?n?"true":"false":typeof n=="function"?"ƒ()":n===null?"null":n===void 0?"undefined":String(n);return t.jsxs(a,{sx:{ml:r>0?2:0},children:[t.jsxs(a,{onClick:()=>p&&d(!y),sx:{display:"flex",alignItems:"center",gap:1,py:.5,px:1,cursor:p?"pointer":"default",borderRadius:1,"&:hover":p?{backgroundColor:"action.hover"}:{},borderLeft:r>0?"1px solid":"none",borderColor:"divider"},children:[p?t.jsx(s,{component:"span",sx:{width:16,color:"text.secondary",fontSize:"12px",fontFamily:"monospace",userSelect:"none"},children:y?"▼":"▶"}):t.jsx(a,{sx:{width:16}}),t.jsx(s,{component:"span",sx:{color:p?"primary.main":"secondary.main",fontFamily:"monospace",fontSize:"13px",fontWeight:p?600:400},children:e}),t.jsx(s,{component:"span",sx:{color:"text.secondary",fontSize:"13px"},children:":"}),p?t.jsx(s,{component:"span",sx:{color:"text.secondary",fontSize:"12px",fontFamily:"monospace"},children:c?`Array[${m}]`:`{${m}}`}):t.jsxs(a,{sx:{display:"flex",alignItems:"center",gap:1},children:[v&&t.jsx(a,{sx:{width:14,height:14,backgroundColor:o,border:"1px solid",borderColor:"divider",borderRadius:"2px",flexShrink:0}}),t.jsx(s,{component:"span",sx:{color:typeof o=="string"?"success.dark":typeof o=="number"?"warning.dark":"text.primary",fontFamily:"monospace",fontSize:"12px",maxWidth:400,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:k(o)})]})]}),p&&t.jsx(w,{in:y,children:t.jsx(a,{children:Object.entries(o).map(([n,S])=>t.jsx(b,{keyName:n,value:S,depth:r+1},n))})})]})},l={render:()=>{const e=x(),o={palette:{primary:e.palette.primary,secondary:e.palette.secondary,error:e.palette.error,warning:e.palette.warning,success:e.palette.success,info:e.palette.info,text:e.palette.text,background:e.palette.background,action:e.palette.action,divider:e.palette.divider,grey:e.palette.grey},typography:{fontFamily:e.typography.fontFamily,fontSize:e.typography.fontSize,htmlFontSize:e.typography.htmlFontSize,fontWeightLight:e.typography.fontWeightLight,fontWeightRegular:e.typography.fontWeightRegular,fontWeightMedium:e.typography.fontWeightMedium,fontWeightBold:e.typography.fontWeightBold,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,body1:e.typography.body1,body2:e.typography.body2,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,button:e.typography.button,caption:e.typography.caption,overline:e.typography.overline},spacing:{unit:8,"spacing(1)":e.spacing(1),"spacing(2)":e.spacing(2),"spacing(3)":e.spacing(3),"spacing(4)":e.spacing(4),"spacing(5)":e.spacing(5),"spacing(6)":e.spacing(6),"spacing(8)":e.spacing(8)},shape:e.shape,breakpoints:{values:e.breakpoints.values},zIndex:e.zIndex,transitions:{duration:e.transitions.duration,easing:e.transitions.easing},shadows:{elevation0:e.shadows[0],elevation1:e.shadows[1],elevation2:e.shadows[2],elevation3:e.shadows[3],elevation4:e.shadows[4],elevation8:e.shadows[8],elevation16:e.shadows[16],elevation24:e.shadows[24]}};return t.jsxs(t.Fragment,{children:[t.jsx(g,{title:"Theme Overview",status:"Available",note:"Complete theme structure explorer",brandName:"Design System",systemName:"Starter Kit",version:"1.0"}),t.jsxs(u,{children:[t.jsx(s,{variant:"h4",sx:{fontWeight:700,mb:1},children:"Theme Structure"}),t.jsxs(s,{variant:"body2",color:"text.secondary",sx:{mb:3},children:["클릭하여 펼치기/접기 | ",t.jsx("code",{children:"src/styles/theme.js"})]}),t.jsx(a,{sx:{p:2,border:"1px solid",borderColor:"divider",borderRadius:1},children:t.jsx(a,{sx:{fontFamily:"monospace"},children:Object.entries(o).map(([r,i])=>t.jsx(b,{keyName:r,value:i,depth:0,defaultOpen:!1},r))})}),t.jsx(j,{sx:{my:3}}),t.jsx(s,{variant:"body2",color:"text.secondary",children:"이 구조는 피그마의 Local Variables 패널과 유사합니다. 각 카테고리(palette, typography 등)가 Variable Collection이고, 그 안의 값들이 개별 Variable입니다."})]})]})}},h={name:"Table View",render:()=>{const e=x(),o=[{title:"palette",description:"색상 토큰",data:[{key:"primary.main",value:e.palette.primary.main},{key:"primary.light",value:e.palette.primary.light},{key:"primary.dark",value:e.palette.primary.dark},{key:"secondary.main",value:e.palette.secondary.main},{key:"error.main",value:e.palette.error.main},{key:"warning.main",value:e.palette.warning.main},{key:"success.main",value:e.palette.success.main},{key:"info.main",value:e.palette.info.main},{key:"text.primary",value:e.palette.text.primary},{key:"text.secondary",value:e.palette.text.secondary},{key:"background.default",value:e.palette.background.default},{key:"background.paper",value:e.palette.background.paper},{key:"divider",value:e.palette.divider}]},{title:"typography",description:"타이포그래피 토큰",data:[{key:"fontSize",value:e.typography.fontSize},{key:"h1.fontSize",value:e.typography.h1.fontSize},{key:"h2.fontSize",value:e.typography.h2.fontSize},{key:"h3.fontSize",value:e.typography.h3.fontSize},{key:"h4.fontSize",value:e.typography.h4.fontSize},{key:"h5.fontSize",value:e.typography.h5.fontSize},{key:"h6.fontSize",value:e.typography.h6.fontSize},{key:"body1.fontSize",value:e.typography.body1.fontSize},{key:"body2.fontSize",value:e.typography.body2.fontSize},{key:"caption.fontSize",value:e.typography.caption.fontSize}]},{title:"spacing",description:"간격 토큰 (8px 기반)",data:[{key:"spacing(1)",value:e.spacing(1)},{key:"spacing(2)",value:e.spacing(2)},{key:"spacing(3)",value:e.spacing(3)},{key:"spacing(4)",value:e.spacing(4)},{key:"spacing(6)",value:e.spacing(6)},{key:"spacing(8)",value:e.spacing(8)}]},{title:"shape",description:"모양 토큰",data:[{key:"borderRadius",value:`${e.shape.borderRadius}px`}]},{title:"breakpoints",description:"반응형 분기점",data:Object.entries(e.breakpoints.values).map(([r,i])=>({key:r,value:`${i}px`}))},{title:"zIndex",description:"레이어 순서",data:Object.entries(e.zIndex).map(([r,i])=>({key:r,value:i}))}];return t.jsxs(t.Fragment,{children:[t.jsx(g,{title:"Token Tables",status:"Available",note:"Summary tables of key tokens",brandName:"Design System",systemName:"Starter Kit",version:"1.0"}),t.jsxs(u,{children:[t.jsx(s,{variant:"h4",sx:{fontWeight:700,mb:1},children:"Token Tables"}),t.jsx(s,{variant:"body2",color:"text.secondary",sx:{mb:4},children:"주요 토큰을 테이블 형태로 확인합니다."}),o.map(r=>t.jsxs(a,{sx:{mb:4},children:[t.jsx(s,{variant:"h6",sx:{fontWeight:600,mb:.5},children:r.title}),t.jsx(s,{variant:"caption",color:"text.secondary",sx:{display:"block",mb:1},children:r.description}),t.jsx(a,{sx:{border:"1px solid",borderColor:"divider",borderRadius:1,overflow:"hidden"},children:t.jsxs(a,{component:"table",sx:{width:"100%",borderCollapse:"collapse",fontSize:"13px",fontFamily:"monospace"},children:[t.jsx(a,{component:"thead",sx:{backgroundColor:"action.hover"},children:t.jsxs(a,{component:"tr",children:[t.jsx(a,{component:"th",sx:{p:1.5,textAlign:"left",fontWeight:600},children:"Key"}),t.jsx(a,{component:"th",sx:{p:1.5,textAlign:"left",fontWeight:600},children:"Value"})]})}),t.jsx(a,{component:"tbody",children:r.data.map((i,y)=>{const d=typeof i.value=="string"&&(i.value.startsWith("#")||i.value.startsWith("rgb"));return t.jsxs(a,{component:"tr",sx:{borderTop:"1px solid",borderColor:"divider","&:hover":{backgroundColor:"action.hover"}},children:[t.jsx(a,{component:"td",sx:{p:1.5,color:"primary.main"},children:i.key}),t.jsxs(a,{component:"td",sx:{p:1.5,display:"flex",alignItems:"center",gap:1},children:[d&&t.jsx(a,{sx:{width:16,height:16,backgroundColor:i.value,border:"1px solid",borderColor:"divider",borderRadius:"2px"}}),t.jsx("span",{children:i.value})]})]},i.key)})})]})})]},r.title))]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const theme = useTheme();

    // theme 객체에서 순환 참조와 함수를 제외한 주요 키만 추출
    const themeStructure = {
      palette: {
        primary: theme.palette.primary,
        secondary: theme.palette.secondary,
        error: theme.palette.error,
        warning: theme.palette.warning,
        success: theme.palette.success,
        info: theme.palette.info,
        text: theme.palette.text,
        background: theme.palette.background,
        action: theme.palette.action,
        divider: theme.palette.divider,
        grey: theme.palette.grey
      },
      typography: {
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.fontSize,
        htmlFontSize: theme.typography.htmlFontSize,
        fontWeightLight: theme.typography.fontWeightLight,
        fontWeightRegular: theme.typography.fontWeightRegular,
        fontWeightMedium: theme.typography.fontWeightMedium,
        fontWeightBold: theme.typography.fontWeightBold,
        h1: theme.typography.h1,
        h2: theme.typography.h2,
        h3: theme.typography.h3,
        h4: theme.typography.h4,
        h5: theme.typography.h5,
        h6: theme.typography.h6,
        body1: theme.typography.body1,
        body2: theme.typography.body2,
        subtitle1: theme.typography.subtitle1,
        subtitle2: theme.typography.subtitle2,
        button: theme.typography.button,
        caption: theme.typography.caption,
        overline: theme.typography.overline
      },
      spacing: {
        unit: 8,
        'spacing(1)': theme.spacing(1),
        'spacing(2)': theme.spacing(2),
        'spacing(3)': theme.spacing(3),
        'spacing(4)': theme.spacing(4),
        'spacing(5)': theme.spacing(5),
        'spacing(6)': theme.spacing(6),
        'spacing(8)': theme.spacing(8)
      },
      shape: theme.shape,
      breakpoints: {
        values: theme.breakpoints.values
      },
      zIndex: theme.zIndex,
      transitions: {
        duration: theme.transitions.duration,
        easing: theme.transitions.easing
      },
      shadows: {
        'elevation0': theme.shadows[0],
        'elevation1': theme.shadows[1],
        'elevation2': theme.shadows[2],
        'elevation3': theme.shadows[3],
        'elevation4': theme.shadows[4],
        'elevation8': theme.shadows[8],
        'elevation16': theme.shadows[16],
        'elevation24': theme.shadows[24]
      }
    };
    return <>
        <DocumentTitle title="Theme Overview" status="Available" note="Complete theme structure explorer" brandName="Design System" systemName="Starter Kit" version="1.0" />
        <PageContainer>
          <Typography variant="h4" sx={{
          fontWeight: 700,
          mb: 1
        }}>
            Theme Structure
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{
          mb: 3
        }}>
            클릭하여 펼치기/접기 | <code>src/styles/theme.js</code>
          </Typography>

          <Box sx={{
          p: 2,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1
        }}>
          <Box sx={{
            fontFamily: 'monospace'
          }}>
            {Object.entries(themeStructure).map(([key, value]) => <TreeNode key={key} keyName={key} value={value} depth={0} defaultOpen={false} />)}
          </Box>
        </Box>

        <Divider sx={{
          my: 3
        }} />

          <Typography variant="body2" color="text.secondary">
            이 구조는 피그마의 Local Variables 패널과 유사합니다.
            각 카테고리(palette, typography 등)가 Variable Collection이고,
            그 안의 값들이 개별 Variable입니다.
          </Typography>
        </PageContainer>
      </>;
  }
}`,...l.parameters?.docs?.source},description:{story:"기본 - Theme 트리 탐색기",...l.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Table View',
  render: () => {
    const theme = useTheme();
    const tables = [{
      title: 'palette',
      description: '색상 토큰',
      data: [{
        key: 'primary.main',
        value: theme.palette.primary.main
      }, {
        key: 'primary.light',
        value: theme.palette.primary.light
      }, {
        key: 'primary.dark',
        value: theme.palette.primary.dark
      }, {
        key: 'secondary.main',
        value: theme.palette.secondary.main
      }, {
        key: 'error.main',
        value: theme.palette.error.main
      }, {
        key: 'warning.main',
        value: theme.palette.warning.main
      }, {
        key: 'success.main',
        value: theme.palette.success.main
      }, {
        key: 'info.main',
        value: theme.palette.info.main
      }, {
        key: 'text.primary',
        value: theme.palette.text.primary
      }, {
        key: 'text.secondary',
        value: theme.palette.text.secondary
      }, {
        key: 'background.default',
        value: theme.palette.background.default
      }, {
        key: 'background.paper',
        value: theme.palette.background.paper
      }, {
        key: 'divider',
        value: theme.palette.divider
      }]
    }, {
      title: 'typography',
      description: '타이포그래피 토큰',
      data: [{
        key: 'fontSize',
        value: theme.typography.fontSize
      }, {
        key: 'h1.fontSize',
        value: theme.typography.h1.fontSize
      }, {
        key: 'h2.fontSize',
        value: theme.typography.h2.fontSize
      }, {
        key: 'h3.fontSize',
        value: theme.typography.h3.fontSize
      }, {
        key: 'h4.fontSize',
        value: theme.typography.h4.fontSize
      }, {
        key: 'h5.fontSize',
        value: theme.typography.h5.fontSize
      }, {
        key: 'h6.fontSize',
        value: theme.typography.h6.fontSize
      }, {
        key: 'body1.fontSize',
        value: theme.typography.body1.fontSize
      }, {
        key: 'body2.fontSize',
        value: theme.typography.body2.fontSize
      }, {
        key: 'caption.fontSize',
        value: theme.typography.caption.fontSize
      }]
    }, {
      title: 'spacing',
      description: '간격 토큰 (8px 기반)',
      data: [{
        key: 'spacing(1)',
        value: theme.spacing(1)
      }, {
        key: 'spacing(2)',
        value: theme.spacing(2)
      }, {
        key: 'spacing(3)',
        value: theme.spacing(3)
      }, {
        key: 'spacing(4)',
        value: theme.spacing(4)
      }, {
        key: 'spacing(6)',
        value: theme.spacing(6)
      }, {
        key: 'spacing(8)',
        value: theme.spacing(8)
      }]
    }, {
      title: 'shape',
      description: '모양 토큰',
      data: [{
        key: 'borderRadius',
        value: \`\${theme.shape.borderRadius}px\`
      }]
    }, {
      title: 'breakpoints',
      description: '반응형 분기점',
      data: Object.entries(theme.breakpoints.values).map(([key, value]) => ({
        key,
        value: \`\${value}px\`
      }))
    }, {
      title: 'zIndex',
      description: '레이어 순서',
      data: Object.entries(theme.zIndex).map(([key, value]) => ({
        key,
        value
      }))
    }];
    return <>
        <DocumentTitle title="Token Tables" status="Available" note="Summary tables of key tokens" brandName="Design System" systemName="Starter Kit" version="1.0" />
        <PageContainer>
          <Typography variant="h4" sx={{
          fontWeight: 700,
          mb: 1
        }}>
            Token Tables
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{
          mb: 4
        }}>
            주요 토큰을 테이블 형태로 확인합니다.
          </Typography>

          {tables.map(table => <Box key={table.title} sx={{
          mb: 4
        }}>
            <Typography variant="h6" sx={{
            fontWeight: 600,
            mb: 0.5
          }}>
              {table.title}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{
            display: 'block',
            mb: 1
          }}>
              {table.description}
            </Typography>

            <Box sx={{
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1,
            overflow: 'hidden'
          }}>
              <Box component="table" sx={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '13px',
              fontFamily: 'monospace'
            }}>
                <Box component="thead" sx={{
                backgroundColor: 'action.hover'
              }}>
                  <Box component="tr">
                    <Box component="th" sx={{
                    p: 1.5,
                    textAlign: 'left',
                    fontWeight: 600
                  }}>Key</Box>
                    <Box component="th" sx={{
                    p: 1.5,
                    textAlign: 'left',
                    fontWeight: 600
                  }}>Value</Box>
                  </Box>
                </Box>
                <Box component="tbody">
                  {table.data.map((row, index) => {
                  const isColor = typeof row.value === 'string' && (row.value.startsWith('#') || row.value.startsWith('rgb'));
                  return <Box component="tr" key={row.key} sx={{
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    '&:hover': {
                      backgroundColor: 'action.hover'
                    }
                  }}>
                        <Box component="td" sx={{
                      p: 1.5,
                      color: 'primary.main'
                    }}>
                          {row.key}
                        </Box>
                        <Box component="td" sx={{
                      p: 1.5,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}>
                          {isColor && <Box sx={{
                        width: 16,
                        height: 16,
                        backgroundColor: row.value,
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: '2px'
                      }} />}
                          <span>{row.value}</span>
                        </Box>
                      </Box>;
                })}
                </Box>
              </Box>
            </Box>
          </Box>)}
        </PageContainer>
      </>;
  }
}`,...h.parameters?.docs?.source},description:{story:"테이블 뷰 - 주요 토큰 요약",...h.parameters?.docs?.description}}};const Q=["Default","TableView"];export{l as Default,h as TableView,Q as __namedExportsOrder,J as default};
