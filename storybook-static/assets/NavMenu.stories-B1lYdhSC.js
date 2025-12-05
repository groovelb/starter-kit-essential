import{j as e,r as x}from"./iframe-q-XN_VZM.js";import{D as I,P as S,S as h}from"./Settings-iKJ-7qZL.js";import{N as s}from"./NavMenu-DoD1bfgk.js";import{P as r,D as n}from"./SectionTitle-B-E4QVff.js";import{S as i}from"./SectionContainer-D9fIIAHK.js";import{S as j}from"./Stack-BQqDyOBu.js";import{B as y}from"./Box-Dmtu8wWb.js";import{T as g}from"./Typography-C8IUsM00.js";import"./preload-helper-PPVm8Dsz.js";import"./createSvgIcon-CvYdi5pS.js";import"./memoTheme-BW0efeYW.js";import"./useTheme-CDdqLoBf.js";import"./Container-q5yveaGP.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./Grid-Dd6PAMTp.js";import"./isMuiElement-DpiUmZPP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const o=[{id:"archive",label:"Archive",icon:e.jsx(I,{})},{id:"moodboards",label:"Moodboards",icon:e.jsx(S,{})},{id:"settings",label:"Settings",icon:e.jsx(h,{})}];function b(){const[a,c]=x.useState("archive");return e.jsxs(r,{children:[e.jsx(n,{title:"NavMenu - Interactive",status:"Ready",note:"Click to change active state",brandName:"Navigation",systemName:"NavMenu",version:"1.0"}),e.jsxs(i,{children:[e.jsx(s,{items:o,activeId:a,variant:"underline",onItemClick:t=>c(t.id)}),e.jsxs(g,{variant:"body2",sx:{mt:3,color:"text.secondary"},children:["Active: ",a]})]})]})}function M(){const[a,c]=x.useState("archive");return e.jsxs(r,{children:[e.jsx(n,{title:"NavMenu - Variants",status:"Ready",note:"Different style variants",brandName:"Navigation",systemName:"NavMenu",version:"1.0"}),e.jsx(i,{children:e.jsx(j,{spacing:4,children:["default","pills","underline"].map(t=>e.jsxs(y,{children:[e.jsx(g,{variant:"caption",sx:{mb:1.5,display:"block",color:"text.secondary",textTransform:"uppercase"},children:t}),e.jsx(s,{items:o,activeId:a,variant:t,onItemClick:N=>c(N.id)})]},t))})})]})}function C(){const[a,c]=x.useState("archive"),t=[...o,{id:"disabled",label:"Disabled Item",icon:e.jsx(h,{}),disabled:!0}];return e.jsxs(r,{children:[e.jsx(n,{title:"NavMenu - Vertical",status:"Ready",note:"Sidebar navigation style",brandName:"Navigation",systemName:"NavMenu",version:"1.0"}),e.jsx(i,{children:e.jsx(y,{sx:{maxWidth:280},children:e.jsx(s,{items:t,activeId:a,orientation:"vertical",variant:"default",onItemClick:N=>c(N.id)})})})]})}const F={title:"Custom Component/Navigation/NavMenu",component:s,tags:["autodocs"],parameters:{layout:"fullscreen"}},m={render:()=>e.jsxs(r,{children:[e.jsx(n,{title:"NavMenu",status:"Ready",note:"Navigation menu component for headers and sidebars",brandName:"Navigation",systemName:"NavMenu",version:"1.0"}),e.jsx(i,{children:e.jsx(s,{items:o,activeId:"archive",variant:"underline"})})]})},d={render:()=>e.jsx(b,{})},l={render:()=>e.jsx(M,{})},p={render:()=>e.jsx(C,{})},v={render:()=>e.jsxs(r,{children:[e.jsx(n,{title:"NavMenu - Icon Only",status:"Ready",note:"Compact icon-only navigation",brandName:"Navigation",systemName:"NavMenu",version:"1.0"}),e.jsx(i,{children:e.jsx(s,{items:o,activeId:"archive",isIconOnly:!0,variant:"pills"})})]})},u={render:()=>e.jsxs(r,{children:[e.jsx(n,{title:"NavMenu - Sizes",status:"Ready",note:"Size comparison: sm, md, lg",brandName:"Navigation",systemName:"NavMenu",version:"1.0"}),e.jsx(i,{children:e.jsx(j,{spacing:4,children:["sm","md","lg"].map(a=>e.jsxs(y,{children:[e.jsx(g,{variant:"caption",sx:{mb:1,display:"block",color:"text.secondary"},children:a.toUpperCase()}),e.jsx(s,{items:o,activeId:"archive",size:a,variant:"pills"})]},a))})})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <PageContainer>
      <DocumentTitle title="NavMenu" status="Ready" note="Navigation menu component for headers and sidebars" brandName="Navigation" systemName="NavMenu" version="1.0" />
      <SectionContainer>
        <NavMenu items={museNavItems} activeId="archive" variant="underline" />
      </SectionContainer>
    </PageContainer>
}`,...m.parameters?.docs?.source},description:{story:"Default horizontal menu with MUSE style",...m.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveDemo />
}`,...d.parameters?.docs?.source},description:{story:"Interactive menu",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <VariantsDemo />
}`,...l.parameters?.docs?.source},description:{story:"Style variants",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <VerticalDemo />
}`,...p.parameters?.docs?.source},description:{story:"Vertical orientation (sidebar)",...p.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <PageContainer>
      <DocumentTitle title="NavMenu - Icon Only" status="Ready" note="Compact icon-only navigation" brandName="Navigation" systemName="NavMenu" version="1.0" />
      <SectionContainer>
        <NavMenu items={museNavItems} activeId="archive" isIconOnly variant="pills" />
      </SectionContainer>
    </PageContainer>
}`,...v.parameters?.docs?.source},description:{story:"Icon only mode",...v.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <PageContainer>
      <DocumentTitle title="NavMenu - Sizes" status="Ready" note="Size comparison: sm, md, lg" brandName="Navigation" systemName="NavMenu" version="1.0" />
      <SectionContainer>
        <Stack spacing={4}>
          {['sm', 'md', 'lg'].map(size => <Box key={size}>
              <Typography variant="caption" sx={{
            mb: 1,
            display: 'block',
            color: 'text.secondary'
          }}>
                {size.toUpperCase()}
              </Typography>
              <NavMenu items={museNavItems} activeId="archive" size={size} variant="pills" />
            </Box>)}
        </Stack>
      </SectionContainer>
    </PageContainer>
}`,...u.parameters?.docs?.source},description:{story:"Size comparison",...u.parameters?.docs?.description}}};const G=["Default","Interactive","Variants","Vertical","IconOnly","Sizes"];export{m as Default,v as IconOnly,d as Interactive,u as Sizes,l as Variants,p as Vertical,G as __namedExportsOrder,F as default};
