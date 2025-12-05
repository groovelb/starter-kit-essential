import{j as e}from"./iframe-q-XN_VZM.js";import{D as x,P as u,S as c}from"./SectionTitle-B-E4QVff.js";import{T as i}from"./Typography-C8IUsM00.js";import{b as f,a as h,c as m,T as a,d as T}from"./TableRow-DxwoBvdd.js";import{T as C}from"./TableHead-CFjEf5Al.js";import{B as r}from"./Box-Dmtu8wWb.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CDdqLoBf.js";import"./Container-q5yveaGP.js";import"./memoTheme-BW0efeYW.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./Grid-Dd6PAMTp.js";import"./isMuiElement-DpiUmZPP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const d={outlined:"material-symbols-outlined",rounded:"material-symbols-rounded",sharp:"material-symbols-sharp"},n=({name:s,variant:t="outlined",size:p=24,fill:b=!1,weight:y=400,color:g="inherit"})=>e.jsx("span",{className:d[t]||d.outlined,style:{fontSize:p,color:g,fontVariationSettings:`'FILL' ${b?1:0}, 'wght' ${y}`,lineHeight:1,display:"inline-block",verticalAlign:"middle"},children:s}),_={title:"Style/Icons",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
## Material Symbols

Google Material Symbols is a Variable Font based icon system with 2,500+ icons.

### Structure
- Style: Outlined, Rounded, Sharp
- Variable Font Axes: Fill, Weight, Grade, Optical Size

### Usage
Use the Controls panel to change icon properties in real-time.
        `}}},argTypes:{name:{control:"text",description:"Icon name (Material Symbols name)",table:{type:{summary:"string"},defaultValue:{summary:"favorite"}}},variant:{control:"select",options:["outlined","rounded","sharp"],description:"Icon style",table:{type:{summary:"string"},defaultValue:{summary:"outlined"}}},size:{control:{type:"range",min:16,max:96,step:4},description:"Icon size (px)",table:{type:{summary:"number"},defaultValue:{summary:24}}},fill:{control:"boolean",description:"Fill state (Fill axis)",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},weight:{control:{type:"range",min:100,max:700,step:100},description:"Stroke weight (Weight axis)",table:{type:{summary:"number"},defaultValue:{summary:400}}},color:{control:"color",description:"Icon color",table:{type:{summary:"string"},defaultValue:{summary:"inherit"}}}}},l={args:{name:"favorite",variant:"outlined",size:48,fill:!1,weight:400,color:"#0000FF"}},o={parameters:{layout:"padded"},render:()=>{const s=[{icon:"favorite",label:"Like",activeColor:"#e91e63"},{icon:"bookmark",label:"Bookmark",activeColor:"#1976d2"},{icon:"star",label:"Favorite",activeColor:"#ffc107"},{icon:"thumb_up",label:"Recommend",activeColor:"#0000FF"},{icon:"check_circle",label:"Complete",activeColor:"#2e7d32"},{icon:"visibility",label:"Visible",activeColor:"#263238"}];return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Icon Fill Usage",status:"Available",note:"Fill property usage patterns",brandName:"Design System",systemName:"Starter Kit",version:"1.0"}),e.jsxs(u,{children:[e.jsx(i,{variant:"h4",sx:{fontWeight:700,mb:1},children:"Fill Usage"}),e.jsx(i,{variant:"body1",color:"text.secondary",sx:{mb:4},children:"Express toggle states using the Fill property."}),e.jsx(c,{title:"Toggle Pattern",description:"Selected/Unselected state expression"}),e.jsx(f,{sx:{mb:4},children:e.jsxs(h,{children:[e.jsx(C,{children:e.jsxs(m,{children:[e.jsx(a,{sx:{fontWeight:600,width:"20%"},children:"Icon"}),e.jsx(a,{sx:{fontWeight:600,width:"20%"},children:"Usage"}),e.jsx(a,{sx:{fontWeight:600,width:"30%"},children:"Off (Fill: 0)"}),e.jsx(a,{sx:{fontWeight:600},children:"On (Fill: 1)"})]})}),e.jsx(T,{children:s.map(t=>e.jsxs(m,{children:[e.jsx(a,{sx:{fontFamily:"monospace",fontSize:13},children:t.icon}),e.jsx(a,{children:t.label}),e.jsx(a,{children:e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(n,{name:t.icon,size:28,fill:!1}),e.jsx(i,{variant:"caption",color:"text.secondary",children:"Unselected"})]})}),e.jsx(a,{children:e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(n,{name:t.icon,size:28,fill:!0,color:t.activeColor}),e.jsx(i,{variant:"caption",color:"text.secondary",children:"Selected"})]})})]},t.icon))})]})}),e.jsx(c,{title:"Code Example"}),e.jsx(r,{component:"pre",sx:{backgroundColor:"grey.100",p:3,fontSize:12,fontFamily:"monospace",overflow:"auto"},children:`// React state toggle
const [isLiked, setIsLiked] = useState(false);

<span
  className="material-symbols-outlined"
  style={{
    fontVariationSettings: \`'FILL' \${isLiked ? 1 : 0}\`,
    color: isLiked ? '#e91e63' : 'inherit',
    cursor: 'pointer'
  }}
  onClick={() => setIsLiked(!isLiked)}
>
  favorite
</span>`})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: "favorite",
    variant: "outlined",
    size: 48,
    fill: false,
    weight: 400,
    color: "#0000FF"
  }
}`,...l.parameters?.docs?.source},description:{story:"Default - Interactive Controls",...l.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => {
    const fillExamples = [{
      icon: "favorite",
      label: "Like",
      activeColor: "#e91e63"
    }, {
      icon: "bookmark",
      label: "Bookmark",
      activeColor: "#1976d2"
    }, {
      icon: "star",
      label: "Favorite",
      activeColor: "#ffc107"
    }, {
      icon: "thumb_up",
      label: "Recommend",
      activeColor: "#0000FF"
    }, {
      icon: "check_circle",
      label: "Complete",
      activeColor: "#2e7d32"
    }, {
      icon: "visibility",
      label: "Visible",
      activeColor: "#263238"
    }];
    return <>
                <DocumentTitle title="Icon Fill Usage" status="Available" note="Fill property usage patterns" brandName="Design System" systemName="Starter Kit" version="1.0" />
                <PageContainer>
                    <Typography variant="h4" sx={{
          fontWeight: 700,
          mb: 1
        }}>
                        Fill Usage
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{
          mb: 4
        }}>
                        Express toggle states using the Fill property.
                    </Typography>

                    <SectionTitle title="Toggle Pattern" description="Selected/Unselected state expression" />

                    <TableContainer sx={{
          mb: 4
        }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{
                  fontWeight: 600,
                  width: "20%"
                }}>
                                        Icon
                                    </TableCell>
                                    <TableCell sx={{
                  fontWeight: 600,
                  width: "20%"
                }}>
                                        Usage
                                    </TableCell>
                                    <TableCell sx={{
                  fontWeight: 600,
                  width: "30%"
                }}>
                                        Off (Fill: 0)
                                    </TableCell>
                                    <TableCell sx={{
                  fontWeight: 600
                }}>On (Fill: 1)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {fillExamples.map(item => <TableRow key={item.icon}>
                                        <TableCell sx={{
                  fontFamily: "monospace",
                  fontSize: 13
                }}>
                                            {item.icon}
                                        </TableCell>
                                        <TableCell>{item.label}</TableCell>
                                        <TableCell>
                                            <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1
                  }}>
                                                <MaterialSymbol name={item.icon} size={28} fill={false} />
                                                <Typography variant="caption" color="text.secondary">
                                                    Unselected
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1
                  }}>
                                                <MaterialSymbol name={item.icon} size={28} fill color={item.activeColor} />
                                                <Typography variant="caption" color="text.secondary">
                                                    Selected
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                    </TableRow>)}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <SectionTitle title="Code Example" />

                    <Box component="pre" sx={{
          backgroundColor: "grey.100",
          p: 3,
          fontSize: 12,
          fontFamily: "monospace",
          overflow: "auto"
        }}>
                        {\`// React state toggle
const [isLiked, setIsLiked] = useState(false);

<span
  className="material-symbols-outlined"
  style={{
    fontVariationSettings: \\\`'FILL' \\\${isLiked ? 1 : 0}\\\`,
    color: isLiked ? '#e91e63' : 'inherit',
    cursor: 'pointer'
  }}
  onClick={() => setIsLiked(!isLiked)}
>
  favorite
</span>\`}
                    </Box>
                </PageContainer>
            </>;
  }
}`,...o.parameters?.docs?.source},description:{story:"Fill Usage - Toggle state pattern",...o.parameters?.docs?.description}}};const D=["Default","FillUsage"];export{l as Default,o as FillUsage,D as __namedExportsOrder,_ as default};
