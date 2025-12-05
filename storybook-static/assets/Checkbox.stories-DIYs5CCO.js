import{j as e,r as y}from"./iframe-q-XN_VZM.js";import{C as o}from"./Checkbox-ByOSKfCG.js";import{F as r,a as F}from"./FormControlLabel-DB1puxt5.js";import{S}from"./Stack-BQqDyOBu.js";import{F as L,a as v}from"./FormLabel-Cx8V1pjo.js";import{F as P}from"./FormHelperText-C_TeGrMm.js";import{B as w}from"./Box-Dmtu8wWb.js";import{P as z}from"./Paper-ri-B2SDS.js";import{T as i}from"./Typography-C8IUsM00.js";import"./preload-helper-PPVm8Dsz.js";import"./SwitchBase-CH4WTCfY.js";import"./memoTheme-BW0efeYW.js";import"./utils-Bug588nc.js";import"./useSlot-Xw8rJOQc.js";import"./useTimeout-C6lNLwyh.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-Dx2BjZdt.js";import"./ButtonBase-JbB1eRtB.js";import"./createSvgIcon-CvYdi5pS.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-Cg99X4s0.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./isMuiElement-DpiUmZPP.js";import"./useTheme-CDdqLoBf.js";const te={title:"MUI Component/Input/Checkbox",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
## Checkbox

사용자가 하나 이상의 옵션을 선택할 수 있는 체크박스 컴포넌트입니다.

### 사용 패턴

| 패턴 | 설명 | 예시 |
|------|------|------|
| Basic | 기본 체크박스 | \`<Checkbox />\` |
| Labeled | 라벨이 있는 체크박스 | \`<FormControlLabel label="라벨" control={<Checkbox />} />\` |
| Group | 체크박스 그룹 | \`<FormGroup>...</FormGroup>\` |
| Indeterminate | 부분 선택 상태 | \`indeterminate\` prop |
        `}}},argTypes:{color:{control:"select",options:["primary","secondary","success","error","info","warning","default"],description:"체크박스 색상을 설정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},size:{control:"select",options:["small","medium","large"],description:"체크박스 크기를 설정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"medium"}}},disabled:{control:"boolean",description:"체크박스를 비활성화합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},defaultChecked:{control:"boolean",description:"기본 체크 상태를 설정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},indeterminate:{control:"boolean",description:"부분 선택(불확정) 상태를 설정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},m={args:{color:"primary",size:"medium",disabled:!1,defaultChecked:!1,indeterminate:!1},render:t=>e.jsx(o,{color:t.color,size:t.size,disabled:t.disabled,defaultChecked:t.defaultChecked,indeterminate:t.indeterminate})},h={render:()=>{const[t,l]=y.useState(!1);return e.jsx(r,{control:e.jsx(o,{checked:t,onChange:a=>l(a.target.checked)}),label:"이용약관에 동의합니다"})}},p={render:()=>e.jsxs(S,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(r,{control:e.jsx(o,{size:"small",defaultChecked:!0}),label:"Small"}),e.jsx(r,{control:e.jsx(o,{size:"medium",defaultChecked:!0}),label:"Medium"}),e.jsx(r,{control:e.jsx(o,{size:"large",defaultChecked:!0}),label:"Large"})]})},b={render:()=>e.jsxs(S,{direction:"row",spacing:1,flexWrap:"wrap",useFlexGap:!0,children:[e.jsx(r,{control:e.jsx(o,{defaultChecked:!0,color:"primary"}),label:"Primary"}),e.jsx(r,{control:e.jsx(o,{defaultChecked:!0,color:"secondary"}),label:"Secondary"}),e.jsx(r,{control:e.jsx(o,{defaultChecked:!0,color:"success"}),label:"Success"}),e.jsx(r,{control:e.jsx(o,{defaultChecked:!0,color:"error"}),label:"Error"}),e.jsx(r,{control:e.jsx(o,{defaultChecked:!0,color:"info"}),label:"Info"}),e.jsx(r,{control:e.jsx(o,{defaultChecked:!0,color:"warning"}),label:"Warning"})]})},u={render:()=>e.jsxs(S,{spacing:1,children:[e.jsx(r,{control:e.jsx(o,{disabled:!0}),label:"비활성화 (미체크)"}),e.jsx(r,{control:e.jsx(o,{disabled:!0,checked:!0}),label:"비활성화 (체크됨)"})]})},x={render:()=>{const[t,l]=y.useState(["react"]),a=c=>{const n=c.target.name;l(d=>d.includes(n)?d.filter(s=>s!==n):[...d,n])};return e.jsxs(L,{component:"fieldset",children:[e.jsx(v,{component:"legend",children:"선호하는 프레임워크"}),e.jsxs(F,{children:[e.jsx(r,{control:e.jsx(o,{checked:t.includes("react"),onChange:a,name:"react"}),label:"React"}),e.jsx(r,{control:e.jsx(o,{checked:t.includes("vue"),onChange:a,name:"vue"}),label:"Vue"}),e.jsx(r,{control:e.jsx(o,{checked:t.includes("angular"),onChange:a,name:"angular"}),label:"Angular"}),e.jsx(r,{control:e.jsx(o,{checked:t.includes("svelte"),onChange:a,name:"svelte"}),label:"Svelte"})]}),e.jsx(P,{children:"복수 선택 가능"})]})}},C={render:()=>e.jsxs(L,{component:"fieldset",children:[e.jsx(v,{component:"legend",children:"관심 분야"}),e.jsxs(F,{row:!0,children:[e.jsx(r,{control:e.jsx(o,{defaultChecked:!0}),label:"개발"}),e.jsx(r,{control:e.jsx(o,{}),label:"디자인"}),e.jsx(r,{control:e.jsx(o,{}),label:"기획"}),e.jsx(r,{control:e.jsx(o,{}),label:"마케팅"})]})]})},k={render:()=>{const[t,l]=y.useState([!0,!1,!1]),a=s=>{l([s.target.checked,s.target.checked,s.target.checked])},c=s=>G=>{const T=[...t];T[s]=G.target.checked,l(T)},n=t.every(Boolean),d=t.some(Boolean);return e.jsxs(w,{children:[e.jsx(r,{control:e.jsx(o,{checked:n,indeterminate:d&&!n,onChange:a}),label:"전체 선택"}),e.jsxs(w,{sx:{display:"flex",flexDirection:"column",ml:3},children:[e.jsx(r,{control:e.jsx(o,{checked:t[0],onChange:c(0)}),label:"옵션 1"}),e.jsx(r,{control:e.jsx(o,{checked:t[1],onChange:c(1)}),label:"옵션 2"}),e.jsx(r,{control:e.jsx(o,{checked:t[2],onChange:c(2)}),label:"옵션 3"})]})]})}},g={render:()=>e.jsxs(S,{spacing:2,children:[e.jsx(r,{control:e.jsx(o,{}),label:"End (기본)",labelPlacement:"end"}),e.jsx(r,{control:e.jsx(o,{}),label:"Start",labelPlacement:"start"}),e.jsx(r,{control:e.jsx(o,{}),label:"Top",labelPlacement:"top"}),e.jsx(r,{control:e.jsx(o,{}),label:"Bottom",labelPlacement:"bottom"})]})},j={render:()=>e.jsxs(L,{error:!0,component:"fieldset",children:[e.jsx(v,{component:"legend",children:"이용약관"}),e.jsxs(F,{children:[e.jsx(r,{control:e.jsx(o,{color:"error"}),label:"이용약관에 동의합니다 (필수)"}),e.jsx(r,{control:e.jsx(o,{color:"error"}),label:"개인정보 수집에 동의합니다 (필수)"})]}),e.jsx(P,{children:"필수 항목을 모두 선택해주세요"})]})},f={render:()=>{const[t,l]=y.useState({email:!0,push:!0,sms:!1,marketing:!1}),a=c=>n=>{l({...t,[c]:n.target.checked})};return e.jsxs(z,{sx:{p:3,width:320},children:[e.jsx(i,{variant:"h6",sx:{mb:2,fontWeight:600},children:"알림 설정"}),e.jsxs(F,{children:[e.jsx(r,{control:e.jsx(o,{checked:t.email,onChange:a("email")}),label:"이메일 알림"}),e.jsx(i,{variant:"caption",color:"text.secondary",sx:{ml:4,mb:1},children:"새로운 소식을 이메일로 받습니다"}),e.jsx(r,{control:e.jsx(o,{checked:t.push,onChange:a("push")}),label:"푸시 알림"}),e.jsx(i,{variant:"caption",color:"text.secondary",sx:{ml:4,mb:1},children:"앱 푸시 알림을 받습니다"}),e.jsx(r,{control:e.jsx(o,{checked:t.sms,onChange:a("sms")}),label:"SMS 알림"}),e.jsx(i,{variant:"caption",color:"text.secondary",sx:{ml:4,mb:1},children:"중요 알림을 문자로 받습니다"}),e.jsx(r,{control:e.jsx(o,{checked:t.marketing,onChange:a("marketing")}),label:"마케팅 수신 동의"}),e.jsx(i,{variant:"caption",color:"text.secondary",sx:{ml:4},children:"프로모션 및 이벤트 정보를 받습니다"})]})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'medium',
    disabled: false,
    defaultChecked: false,
    indeterminate: false
  },
  render: args => <Checkbox color={args.color} size={args.size} disabled={args.disabled} defaultChecked={args.defaultChecked} indeterminate={args.indeterminate} />
}`,...m.parameters?.docs?.source},description:{story:"기본 체크박스",...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <FormControlLabel control={<Checkbox checked={checked} onChange={e => setChecked(e.target.checked)} />} label="이용약관에 동의합니다" />;
  }
}`,...h.parameters?.docs?.source},description:{story:"라벨이 있는 체크박스",...h.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2} alignItems="center">
      <FormControlLabel control={<Checkbox size="small" defaultChecked />} label="Small" />
      <FormControlLabel control={<Checkbox size="medium" defaultChecked />} label="Medium" />
      <FormControlLabel control={<Checkbox size="large" defaultChecked />} label="Large" />
    </Stack>
}`,...p.parameters?.docs?.source},description:{story:"크기 비교",...p.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
      <FormControlLabel control={<Checkbox defaultChecked color="primary" />} label="Primary" />
      <FormControlLabel control={<Checkbox defaultChecked color="secondary" />} label="Secondary" />
      <FormControlLabel control={<Checkbox defaultChecked color="success" />} label="Success" />
      <FormControlLabel control={<Checkbox defaultChecked color="error" />} label="Error" />
      <FormControlLabel control={<Checkbox defaultChecked color="info" />} label="Info" />
      <FormControlLabel control={<Checkbox defaultChecked color="warning" />} label="Warning" />
    </Stack>
}`,...b.parameters?.docs?.source},description:{story:"색상 변형",...b.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={1}>
      <FormControlLabel control={<Checkbox disabled />} label="비활성화 (미체크)" />
      <FormControlLabel control={<Checkbox disabled checked />} label="비활성화 (체크됨)" />
    </Stack>
}`,...u.parameters?.docs?.source},description:{story:"비활성화 상태",...u.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState(['react']);
    const handleChange = event => {
      const value = event.target.name;
      setSelected(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
    };
    return <FormControl component="fieldset">
        <FormLabel component="legend">선호하는 프레임워크</FormLabel>
        <FormGroup>
          <FormControlLabel control={<Checkbox checked={selected.includes('react')} onChange={handleChange} name="react" />} label="React" />
          <FormControlLabel control={<Checkbox checked={selected.includes('vue')} onChange={handleChange} name="vue" />} label="Vue" />
          <FormControlLabel control={<Checkbox checked={selected.includes('angular')} onChange={handleChange} name="angular" />} label="Angular" />
          <FormControlLabel control={<Checkbox checked={selected.includes('svelte')} onChange={handleChange} name="svelte" />} label="Svelte" />
        </FormGroup>
        <FormHelperText>복수 선택 가능</FormHelperText>
      </FormControl>;
  }
}`,...x.parameters?.docs?.source},description:{story:"체크박스 그룹",...x.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <FormControl component="fieldset">
      <FormLabel component="legend">관심 분야</FormLabel>
      <FormGroup row>
        <FormControlLabel control={<Checkbox defaultChecked />} label="개발" />
        <FormControlLabel control={<Checkbox />} label="디자인" />
        <FormControlLabel control={<Checkbox />} label="기획" />
        <FormControlLabel control={<Checkbox />} label="마케팅" />
      </FormGroup>
    </FormControl>
}`,...C.parameters?.docs?.source},description:{story:"가로 배치 그룹",...C.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState([true, false, false]);
    const handleParent = event => {
      setChecked([event.target.checked, event.target.checked, event.target.checked]);
    };
    const handleChild = index => event => {
      const newChecked = [...checked];
      newChecked[index] = event.target.checked;
      setChecked(newChecked);
    };
    const allChecked = checked.every(Boolean);
    const someChecked = checked.some(Boolean);
    return <Box>
        <FormControlLabel control={<Checkbox checked={allChecked} indeterminate={someChecked && !allChecked} onChange={handleParent} />} label="전체 선택" />
        <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        ml: 3
      }}>
          <FormControlLabel control={<Checkbox checked={checked[0]} onChange={handleChild(0)} />} label="옵션 1" />
          <FormControlLabel control={<Checkbox checked={checked[1]} onChange={handleChild(1)} />} label="옵션 2" />
          <FormControlLabel control={<Checkbox checked={checked[2]} onChange={handleChild(2)} />} label="옵션 3" />
        </Box>
      </Box>;
  }
}`,...k.parameters?.docs?.source},description:{story:"Indeterminate (부분 선택)",...k.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <FormControlLabel control={<Checkbox />} label="End (기본)" labelPlacement="end" />
      <FormControlLabel control={<Checkbox />} label="Start" labelPlacement="start" />
      <FormControlLabel control={<Checkbox />} label="Top" labelPlacement="top" />
      <FormControlLabel control={<Checkbox />} label="Bottom" labelPlacement="bottom" />
    </Stack>
}`,...g.parameters?.docs?.source},description:{story:"라벨 위치",...g.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <FormControl error component="fieldset">
      <FormLabel component="legend">이용약관</FormLabel>
      <FormGroup>
        <FormControlLabel control={<Checkbox color="error" />} label="이용약관에 동의합니다 (필수)" />
        <FormControlLabel control={<Checkbox color="error" />} label="개인정보 수집에 동의합니다 (필수)" />
      </FormGroup>
      <FormHelperText>필수 항목을 모두 선택해주세요</FormHelperText>
    </FormControl>
}`,...j.parameters?.docs?.source},description:{story:"에러 상태",...j.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [settings, setSettings] = useState({
      email: true,
      push: true,
      sms: false,
      marketing: false
    });
    const handleChange = name => event => {
      setSettings({
        ...settings,
        [name]: event.target.checked
      });
    };
    return <Paper sx={{
      p: 3,
      width: 320
    }}>
        <Typography variant="h6" sx={{
        mb: 2,
        fontWeight: 600
      }}>
          알림 설정
        </Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox checked={settings.email} onChange={handleChange('email')} />} label="이메일 알림" />
          <Typography variant="caption" color="text.secondary" sx={{
          ml: 4,
          mb: 1
        }}>
            새로운 소식을 이메일로 받습니다
          </Typography>

          <FormControlLabel control={<Checkbox checked={settings.push} onChange={handleChange('push')} />} label="푸시 알림" />
          <Typography variant="caption" color="text.secondary" sx={{
          ml: 4,
          mb: 1
        }}>
            앱 푸시 알림을 받습니다
          </Typography>

          <FormControlLabel control={<Checkbox checked={settings.sms} onChange={handleChange('sms')} />} label="SMS 알림" />
          <Typography variant="caption" color="text.secondary" sx={{
          ml: 4,
          mb: 1
        }}>
            중요 알림을 문자로 받습니다
          </Typography>

          <FormControlLabel control={<Checkbox checked={settings.marketing} onChange={handleChange('marketing')} />} label="마케팅 수신 동의" />
          <Typography variant="caption" color="text.secondary" sx={{
          ml: 4
        }}>
            프로모션 및 이벤트 정보를 받습니다
          </Typography>
        </FormGroup>
      </Paper>;
  }
}`,...f.parameters?.docs?.source},description:{story:"실제 사용 예시 - 알림 설정",...f.parameters?.docs?.description}}};const ae=["Default","WithLabel","Sizes","Colors","Disabled","Group","GroupRow","Indeterminate","LabelPlacement","WithError","NotificationSettings"];export{b as Colors,m as Default,u as Disabled,x as Group,C as GroupRow,k as Indeterminate,g as LabelPlacement,f as NotificationSettings,p as Sizes,j as WithError,h as WithLabel,ae as __namedExportsOrder,te as default};
