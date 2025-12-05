import{j as r,r as x}from"./iframe-q-XN_VZM.js";import{I as a}from"./Indicator-xiTss40G.js";import{S as i}from"./Stack-BQqDyOBu.js";import{T as g}from"./Typography-C8IUsM00.js";import{B as n}from"./Box-Dmtu8wWb.js";import{B as h}from"./Button-Coknce8O.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-BW0efeYW.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-JbB1eRtB.js";import"./useTimeout-C6lNLwyh.js";import"./CircularProgress-K6SSDdjw.js";function y(){const[s,o]=x.useState(1),t=5,C=()=>o(e=>e>0?e-1:t-1),f=()=>o(e=>e<t-1?e+1:0),v=["dot","line","dash","fraction","progress"];return r.jsx(n,{sx:{p:4,minWidth:400},children:r.jsxs(i,{spacing:4,children:[r.jsxs(i,{direction:"row",spacing:2,justifyContent:"center",children:[r.jsx(h,{variant:"outlined",size:"small",onClick:C,children:"Prev"}),r.jsx(h,{variant:"outlined",size:"small",onClick:f,children:"Next"})]}),v.map(e=>r.jsxs(i,{spacing:1,alignItems:"center",children:[r.jsx(g,{variant:"caption",sx:{color:"text.secondary",textTransform:"uppercase",letterSpacing:1},children:e}),r.jsx(n,{sx:{p:2,backgroundColor:e==="fraction"||e==="progress"?"grey.900":"grey.100",borderRadius:1,minWidth:e==="progress"?200:"auto"},children:r.jsx(a,{total:t,current:s,variant:e,activeColor:e==="fraction"||e==="progress"?"common.white":"primary.main",inactiveColor:e==="fraction"||e==="progress"?"rgba(255,255,255,0.4)":"rgba(0,0,0,0.25)",onClick:e!=="fraction"&&e!=="progress"?o:void 0})})]},e))]})})}function b(){const[s,o]=x.useState(1);return r.jsx(i,{direction:"row",spacing:6,sx:{p:4},children:["dot","line","dash"].map(t=>r.jsxs(i,{spacing:1,alignItems:"center",children:[r.jsx(g,{variant:"caption",sx:{color:"text.secondary"},children:t}),r.jsx(n,{sx:{p:2,backgroundColor:"grey.100",borderRadius:1},children:r.jsx(a,{total:5,current:s,variant:t,direction:"vertical",activeColor:"primary.main",inactiveColor:"rgba(0,0,0,0.25)",onClick:o})})]},t))})}function j(){const[s,o]=x.useState(2);return r.jsx(n,{sx:{p:6,backgroundColor:"grey.900",borderRadius:2,minWidth:400},children:r.jsx(i,{spacing:4,alignItems:"center",children:["dot","line","dash","fraction","progress"].map(t=>r.jsx(n,{sx:{width:t==="progress"?"80%":"auto"},children:r.jsx(a,{total:5,current:s,variant:t,activeColor:"common.white",inactiveColor:"rgba(255,255,255,0.35)",onClick:t!=="fraction"&&t!=="progress"?o:void 0})},t))})})}function S(){const[s,o]=x.useState(0);return r.jsxs(n,{sx:{p:4,textAlign:"center"},children:[r.jsx(g,{variant:"body2",sx:{mb:3,color:"text.secondary"},children:"Click on any indicator to navigate"}),r.jsx(a,{total:7,current:s,variant:"dash",size:"lg",activeColor:"primary.main",inactiveColor:"rgba(0,0,0,0.2)",onClick:o}),r.jsxs(g,{variant:"h4",sx:{mt:4,fontWeight:600},children:["Slide ",s+1]})]})}const N={title:"Custom Component/Common/Indicator",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
## Indicator

A visual indicator component for carousels, sliders, and pagination.
Supports multiple visual styles (dot, line, dash, fraction, progress) with smooth animations.

### Features
- Multiple variants: dot, line, dash, fraction, progress
- Horizontal and vertical orientation
- Keyboard navigation support
- Accessible with ARIA attributes
- Customizable colors and sizes
        `}}},argTypes:{total:{control:{type:"number",min:1,max:20},description:"Total number of items"},current:{control:{type:"number",min:0,max:19},description:"Current active index (0-based)"},variant:{control:"select",options:["dot","line","dash","fraction","progress"],description:"Visual style of the indicator"},direction:{control:"radio",options:["horizontal","vertical"],description:"Layout direction"},size:{control:"radio",options:["sm","md","lg"],description:"Size of indicator elements"},activeColor:{control:"color",description:"Color for active state"},inactiveColor:{control:"color",description:"Color for inactive state"},gap:{control:{type:"number",min:.5,max:3,step:.5},description:"Spacing between indicator items"},hasAnimation:{control:"boolean",description:"Enable/disable animations"},hasHoverEffect:{control:"boolean",description:"Enable/disable hover effects"}}},c={args:{total:5,current:2,variant:"dot",direction:"horizontal",size:"md",activeColor:"#1976d2",inactiveColor:"rgba(0, 0, 0, 0.3)",hasAnimation:!0,hasHoverEffect:!0}},l={render:()=>r.jsx(y,{})},d={render:()=>{const s=["sm","md","lg"];return r.jsx(i,{spacing:4,alignItems:"center",sx:{p:4},children:s.map(o=>r.jsxs(i,{spacing:1,alignItems:"center",children:[r.jsx(g,{variant:"caption",sx:{color:"text.secondary"},children:o.toUpperCase()}),r.jsx(a,{total:5,current:2,variant:"dot",size:o,activeColor:"primary.main",inactiveColor:"rgba(0,0,0,0.25)"})]},o))})}},p={render:()=>r.jsx(b,{})},m={render:()=>r.jsx(j,{})},u={render:()=>r.jsx(S,{})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    total: 5,
    current: 2,
    variant: 'dot',
    direction: 'horizontal',
    size: 'md',
    activeColor: '#1976d2',
    inactiveColor: 'rgba(0, 0, 0, 0.3)',
    hasAnimation: true,
    hasHoverEffect: true
  }
}`,...c.parameters?.docs?.source},description:{story:"Default dot style indicator",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <AllVariantsDemo />
}`,...l.parameters?.docs?.source},description:{story:"Interactive demo with all variants",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const sizes = ['sm', 'md', 'lg'];
    return <Stack spacing={4} alignItems="center" sx={{
      p: 4
    }}>
        {sizes.map(size => <Stack key={size} spacing={1} alignItems="center">
            <Typography variant="caption" sx={{
          color: 'text.secondary'
        }}>
              {size.toUpperCase()}
            </Typography>
            <Indicator total={5} current={2} variant="dot" size={size} activeColor="primary.main" inactiveColor="rgba(0,0,0,0.25)" />
          </Stack>)}
      </Stack>;
  }
}`,...d.parameters?.docs?.source},description:{story:"Size comparison",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <VerticalDemo />
}`,...p.parameters?.docs?.source},description:{story:"Vertical orientation",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <DarkThemeDemo />
}`,...m.parameters?.docs?.source},description:{story:"Dark theme usage (for overlays)",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveDemo />
}`,...u.parameters?.docs?.source},description:{story:"Clickable indicator example",...u.parameters?.docs?.description}}};const P=["Default","AllVariants","Sizes","Vertical","DarkTheme","Interactive"];export{l as AllVariants,m as DarkTheme,c as Default,u as Interactive,d as Sizes,p as Vertical,P as __namedExportsOrder,N as default};
