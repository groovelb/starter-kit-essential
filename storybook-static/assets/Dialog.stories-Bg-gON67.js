import{r as a,u as U,j as e,c as w}from"./iframe-q-XN_VZM.js";import{D as l,a as d,b as m,c as x}from"./DialogTitle-ebosctkT.js";import{B as i}from"./Button-Coknce8O.js";import{g as G,a as R,s as z,c as q,r as pe,m as ue}from"./memoTheme-BW0efeYW.js";import{T as c}from"./Typography-C8IUsM00.js";import{S as V}from"./Stack-BQqDyOBu.js";import{T as L}from"./TextField-DgQ3k6VB.js";import{L as F,a as me}from"./Select-DlpVDPsS.js";import{i as xe}from"./isMuiElement-DpiUmZPP.js";import{u as ge}from"./useTimeout-C6lNLwyh.js";import{i as ee}from"./isHostComponent-DVu5iVWx.js";import{A as he}from"./Avatar-DtmT2ppm.js";import{L as fe}from"./ListItemText-DtuXspMo.js";import{I as Ce}from"./IconButton-BSXa4zK8.js";import{B as N}from"./Box-Dmtu8wWb.js";import{D as E}from"./Divider-DePyv9fJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CDdqLoBf.js";import"./useSlot-Xw8rJOQc.js";import"./Paper-ri-B2SDS.js";import"./Modal-Cp6PhS6B.js";import"./ownerWindow-CO8Ksk3k.js";import"./ButtonBase-JbB1eRtB.js";import"./index-DUeF1Pkm.js";import"./index-C2SgXQAb.js";import"./getReactElementRef-CJ7j01sk.js";import"./utils-UDy2T9Xi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-K6SSDdjw.js";import"./styled-D6BANXgS.js";import"./useThemeProps-CFXzbazh.js";import"./InputLabel-DbttPIAK.js";import"./utils-Bug588nc.js";import"./FormLabel-Cx8V1pjo.js";import"./FormHelperText-C_TeGrMm.js";import"./useSlotProps-CYaCcMSY.js";import"./debounce-Be36O1Ab.js";import"./Grow-Cmv2id48.js";import"./mergeSlotProps-Cg99X4s0.js";import"./useControlled-Dx2BjZdt.js";import"./createSvgIcon-CvYdi5pS.js";import"./InputBase--W6Qy_gV.js";import"./listItemTextClasses-5YcgVpaX.js";import"./dividerClasses-BAQMkccN.js";function ye(n){return G("MuiDialogContentText",n)}R("MuiDialogContentText",["root"]);const De=n=>{const{classes:t}=n,s=q({root:["root"]},ye,t);return{...t,...s}},je=z(c,{shouldForwardProp:n=>pe(n)||n==="classes",name:"MuiDialogContentText",slot:"Root"})({}),h=a.forwardRef(function(t,o){const s=U({props:t,name:"MuiDialogContentText"}),{children:p,className:g,...u}=s,r=De(u);return e.jsx(je,{component:"p",variant:"body1",color:"textSecondary",ref:o,ownerState:u,className:w(r.root,g),...s,classes:r})});function ve(n){return G("MuiListItem",n)}R("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"]);const Se=R("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function be(n){return G("MuiListItemSecondaryAction",n)}R("MuiListItemSecondaryAction",["root","disableGutters"]);const Be=n=>{const{disableGutters:t,classes:o}=n;return q({root:["root",t&&"disableGutters"]},be,o)},ke=z("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:o}=n;return[t.root,o.disableGutters&&t.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:n})=>n.disableGutters,style:{right:0}}]}),te=a.forwardRef(function(t,o){const s=U({props:t,name:"MuiListItemSecondaryAction"}),{className:p,...g}=s,u=a.useContext(F),r={...s,disableGutters:u.disableGutters},f=Be(r);return e.jsx(ke,{className:w(f.root,p),ownerState:r,ref:o,...g})});te.muiName="ListItemSecondaryAction";const Te=(n,t)=>{const{ownerState:o}=n;return[t.root,o.dense&&t.dense,o.alignItems==="flex-start"&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters,!o.disablePadding&&t.padding,o.hasSecondaryAction&&t.secondaryAction]},Ae=n=>{const{alignItems:t,classes:o,dense:s,disableGutters:p,disablePadding:g,divider:u,hasSecondaryAction:r}=n;return q({root:["root",s&&"dense",!p&&"gutters",!g&&"padding",u&&"divider",t==="flex-start"&&"alignItemsFlexStart",r&&"secondaryAction"],container:["container"]},ve,o)},Oe=z("div",{name:"MuiListItem",slot:"Root",overridesResolver:Te})(ue(({theme:n})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:t})=>!t.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:t})=>!t.disablePadding&&t.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:t})=>!t.disablePadding&&!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>!t.disablePadding&&!!t.secondaryAction,style:{paddingRight:48}},{props:({ownerState:t})=>!!t.secondaryAction,style:{[`& > .${Se.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(n.vars||n).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>t.button,style:{transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:t})=>t.hasSecondaryAction,style:{paddingRight:48}}]}))),Ie=z("li",{name:"MuiListItem",slot:"Container"})({position:"relative"}),We=a.forwardRef(function(t,o){const s=U({props:t,name:"MuiListItem"}),{alignItems:p="center",children:g,className:u,component:r,components:f={},componentsProps:ne={},ContainerComponent:H="li",ContainerProps:{className:oe,...se}={},dense:Y=!1,disableGutters:_=!1,disablePadding:ie=!1,divider:ae=!1,secondaryAction:J,slotProps:re={},slots:le={},...ce}=s,K=a.useContext(F),$=a.useMemo(()=>({dense:Y||K.dense||!1,alignItems:p,disableGutters:_}),[p,K.dense,Y,_]),de=a.useRef(null),C=a.Children.toArray(g),Q=C.length&&xe(C[C.length-1],["ListItemSecondaryAction"]),M={...s,alignItems:p,dense:$.dense,disableGutters:_,disablePadding:ie,divider:ae,hasSecondaryAction:Q},X=Ae(M),Z=ge(de,o),P=le.root||f.Root||Oe,D=re.root||ne.root||{},j={className:w(X.root,D.className,u),...ce};let y=r||"li";return Q?(y=!j.component&&!r?"div":y,H==="li"&&(y==="li"?y="div":j.component==="li"&&(j.component="div")),e.jsx(F.Provider,{value:$,children:e.jsxs(Ie,{as:H,className:w(X.container,oe),ref:Z,ownerState:M,...se,children:[e.jsx(P,{...D,...!ee(P)&&{as:y,ownerState:{...M,...D.ownerState}},...j,children:C}),C.pop()]})})):e.jsx(F.Provider,{value:$,children:e.jsxs(P,{...D,as:y,ref:Z,...!ee(P)&&{ownerState:{...M,...D.ownerState}},...j,children:[C,J&&e.jsx(te,{children:J})]})})});function Le(n){return G("MuiListItemAvatar",n)}R("MuiListItemAvatar",["root","alignItemsFlexStart"]);const Fe=n=>{const{alignItems:t,classes:o}=n;return q({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},Le,o)},we=z("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:o}=n;return[t.root,o.alignItems==="flex-start"&&t.alignItemsFlexStart]}})({minWidth:56,flexShrink:0,variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}),Re=a.forwardRef(function(t,o){const s=U({props:t,name:"MuiListItemAvatar"}),{className:p,...g}=s,u=a.useContext(F),r={...s,alignItems:u.alignItems},f=Fe(r);return e.jsx(we,{className:w(f.root,p),ownerState:r,ref:o,...g})}),kt={title:"MUI Component/Feedback/Dialog",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
## Dialog

모달 대화상자 컴포넌트입니다. 사용자의 주의를 집중시키고 중요한 정보나 결정을 요청할 때 사용합니다.

### 구성 요소

| 컴포넌트 | 설명 | 예시 |
|----------|------|------|
| Dialog | 대화상자 컨테이너 | \`<Dialog open={open}>...</Dialog>\` |
| DialogTitle | 제목 영역 | 대화상자 제목 |
| DialogContent | 내용 영역 | 본문, 폼 등 |
| DialogActions | 액션 버튼 영역 | 확인, 취소 버튼 |
        `}}},argTypes:{maxWidth:{control:"select",options:["xs","sm","md","lg","xl",!1],description:"대화상자의 최대 너비를 설정합니다.",table:{type:{summary:"string | false"},defaultValue:{summary:"sm"}}},fullWidth:{control:"boolean",description:"maxWidth까지 전체 너비를 사용합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},fullScreen:{control:"boolean",description:"전체 화면 대화상자로 표시합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},scroll:{control:"select",options:["paper","body"],description:"스크롤 동작을 설정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"paper"}}}}},v={args:{maxWidth:"sm",fullWidth:!1,fullScreen:!1,scroll:"paper"},render:n=>{const[t,o]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"outlined",onClick:()=>o(!0),children:"대화상자 열기"}),e.jsxs(l,{open:t,onClose:()=>o(!1),maxWidth:n.maxWidth,fullWidth:n.fullWidth,fullScreen:n.fullScreen,scroll:n.scroll,children:[e.jsx(d,{children:"기본 대화상자"}),e.jsx(m,{children:e.jsx(h,{children:"대화상자는 사용자의 주의를 집중시키고 중요한 정보를 전달하거나 결정을 요청할 때 사용합니다."})}),e.jsxs(x,{children:[e.jsx(i,{onClick:()=>o(!1),children:"취소"}),e.jsx(i,{onClick:()=>o(!1),variant:"contained",children:"확인"})]})]})]})}},S={render:()=>{const[n,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"contained",color:"error",onClick:()=>t(!0),children:"삭제하기"}),e.jsxs(l,{open:n,onClose:()=>t(!1),children:[e.jsx(d,{children:"항목을 삭제하시겠습니까?"}),e.jsx(m,{children:e.jsx(h,{children:"이 작업은 되돌릴 수 없습니다. 선택한 항목이 영구적으로 삭제됩니다."})}),e.jsxs(x,{children:[e.jsx(i,{onClick:()=>t(!1),children:"취소"}),e.jsx(i,{onClick:()=>t(!1),color:"error",variant:"contained",children:"삭제"})]})]})]})}},b={render:()=>{const[n,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"contained",onClick:()=>t(!0),children:"새 항목 추가"}),e.jsxs(l,{open:n,onClose:()=>t(!1),maxWidth:"sm",fullWidth:!0,children:[e.jsx(d,{children:"새 항목 추가"}),e.jsxs(m,{children:[e.jsx(h,{sx:{mb:2},children:"새로운 항목의 정보를 입력해주세요."}),e.jsxs(V,{spacing:2,children:[e.jsx(L,{autoFocus:!0,label:"제목",fullWidth:!0,variant:"outlined"}),e.jsx(L,{label:"설명",fullWidth:!0,multiline:!0,rows:3,variant:"outlined"}),e.jsx(L,{label:"카테고리",fullWidth:!0,variant:"outlined"})]})]}),e.jsxs(x,{children:[e.jsx(i,{onClick:()=>t(!1),children:"취소"}),e.jsx(i,{onClick:()=>t(!1),variant:"contained",children:"추가"})]})]})]})}},B={render:()=>{const[n,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"outlined",color:"warning",onClick:()=>t(!0),children:"경고 표시"}),e.jsxs(l,{open:n,onClose:()=>t(!1),children:[e.jsx(d,{sx:{color:"warning.main"},children:"주의가 필요합니다"}),e.jsx(m,{children:e.jsx(h,{children:"저장하지 않은 변경사항이 있습니다. 페이지를 떠나면 변경사항이 손실됩니다."})}),e.jsxs(x,{children:[e.jsx(i,{onClick:()=>t(!1),children:"계속 편집"}),e.jsx(i,{onClick:()=>t(!1),color:"warning",children:"저장 안 함"}),e.jsx(i,{onClick:()=>t(!1),variant:"contained",children:"저장"})]})]})]})}},k={render:()=>{const[n,t]=a.useState(null),o=["xs","sm","md","lg"];return e.jsxs(e.Fragment,{children:[e.jsx(V,{direction:"row",spacing:2,children:o.map(s=>e.jsx(i,{variant:"outlined",onClick:()=>t(s),children:s.toUpperCase()},s))}),o.map(s=>e.jsxs(l,{open:n===s,onClose:()=>t(null),maxWidth:s,fullWidth:!0,children:[e.jsxs(d,{children:["maxWidth: ",s]}),e.jsx(m,{children:e.jsxs(h,{children:['fullWidth를 true로 설정하면 maxWidth까지 전체 너비를 사용합니다. 현재 설정된 maxWidth는 "',s,'"입니다.']})}),e.jsx(x,{children:e.jsx(i,{onClick:()=>t(null),children:"닫기"})})]},s))]})}},T={render:()=>{const[n,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"outlined",onClick:()=>t(!0),children:"긴 콘텐츠 대화상자"}),e.jsxs(l,{open:n,onClose:()=>t(!1),scroll:"paper",maxWidth:"sm",fullWidth:!0,children:[e.jsx(d,{children:"이용약관"}),e.jsx(m,{dividers:!0,children:[...Array(10)].map((o,s)=>e.jsx(c,{paragraph:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},s))}),e.jsxs(x,{children:[e.jsx(i,{onClick:()=>t(!1),children:"취소"}),e.jsx(i,{onClick:()=>t(!1),variant:"contained",children:"동의"})]})]})]})}},A={render:()=>{const[n,t]=a.useState(!1),o=[{name:"김철수",email:"kim@example.com"},{name:"이영희",email:"lee@example.com"},{name:"박민수",email:"park@example.com"},{name:"최수진",email:"choi@example.com"}];return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"outlined",onClick:()=>t(!0),children:"사용자 선택"}),e.jsxs(l,{open:n,onClose:()=>t(!1),children:[e.jsx(d,{children:"담당자 선택"}),e.jsx(me,{sx:{pt:0},children:o.map(s=>e.jsxs(We,{component:"button",onClick:()=>t(!1),sx:{cursor:"pointer","&:hover":{backgroundColor:"action.hover"}},children:[e.jsx(Re,{children:e.jsx(he,{sx:{bgcolor:"primary.main"},children:s.name[0]})}),e.jsx(fe,{primary:s.name,secondary:s.email})]},s.email))})]})]})}},O={render:()=>{const[n,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"contained",onClick:()=>t(!0),children:"설정 열기"}),e.jsxs(l,{open:n,onClose:()=>t(!1),maxWidth:"sm",fullWidth:!0,children:[e.jsxs(d,{sx:{m:0,p:2,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(c,{variant:"h6",component:"span",children:"설정"}),e.jsx(Ce,{onClick:()=>t(!1),sx:{color:"grey.500"},children:e.jsx(N,{component:"span",sx:{fontSize:20},children:"✕"})})]}),e.jsx(E,{}),e.jsx(m,{children:e.jsxs(V,{spacing:3,children:[e.jsxs(N,{children:[e.jsx(c,{variant:"subtitle2",gutterBottom:!0,children:"알림 설정"}),e.jsx(c,{variant:"body2",color:"text.secondary",children:"이메일 알림, 푸시 알림 등을 설정할 수 있습니다."})]}),e.jsxs(N,{children:[e.jsx(c,{variant:"subtitle2",gutterBottom:!0,children:"개인정보"}),e.jsx(c,{variant:"body2",color:"text.secondary",children:"프로필 정보와 개인정보 보호 설정을 관리합니다."})]}),e.jsxs(N,{children:[e.jsx(c,{variant:"subtitle2",gutterBottom:!0,children:"보안"}),e.jsx(c,{variant:"body2",color:"text.secondary",children:"비밀번호 변경, 2단계 인증 등 보안 설정을 관리합니다."})]})]})}),e.jsx(E,{}),e.jsxs(x,{children:[e.jsx(i,{onClick:()=>t(!1),children:"닫기"}),e.jsx(i,{onClick:()=>t(!1),variant:"contained",children:"저장"})]})]})]})}},I={render:()=>{const[n,t]=a.useState(!1),[o,s]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"outlined",onClick:()=>t(!0),children:"첫 번째 대화상자"}),e.jsxs(l,{open:n,onClose:()=>t(!1),children:[e.jsx(d,{children:"첫 번째 대화상자"}),e.jsx(m,{children:e.jsx(h,{children:"대화상자 안에서 다른 대화상자를 열 수 있습니다."})}),e.jsxs(x,{children:[e.jsx(i,{onClick:()=>t(!1),children:"닫기"}),e.jsx(i,{onClick:()=>s(!0),variant:"contained",children:"다음 대화상자 열기"})]})]}),e.jsxs(l,{open:o,onClose:()=>s(!1),children:[e.jsx(d,{children:"두 번째 대화상자"}),e.jsx(m,{children:e.jsx(h,{children:"이것은 중첩된 대화상자입니다."})}),e.jsx(x,{children:e.jsx(i,{onClick:()=>s(!1),variant:"contained",children:"확인"})})]})]})}},W={render:()=>{const[n,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"contained",onClick:()=>t(!0),children:"로그인"}),e.jsxs(l,{open:n,onClose:()=>t(!1),maxWidth:"xs",fullWidth:!0,children:[e.jsx(d,{sx:{textAlign:"center",pt:4},children:e.jsx(c,{variant:"h5",sx:{fontWeight:700},children:"로그인"})}),e.jsx(m,{children:e.jsxs(V,{spacing:2,sx:{mt:1},children:[e.jsx(L,{label:"이메일",type:"email",fullWidth:!0,variant:"outlined"}),e.jsx(L,{label:"비밀번호",type:"password",fullWidth:!0,variant:"outlined"}),e.jsx(i,{variant:"contained",fullWidth:!0,size:"large",children:"로그인"}),e.jsx(E,{children:"또는"}),e.jsx(i,{variant:"outlined",fullWidth:!0,children:"Google로 계속하기"})]})}),e.jsx(x,{sx:{justifyContent:"center",pb:3},children:e.jsxs(c,{variant:"body2",color:"text.secondary",children:["계정이 없으신가요?",e.jsx(i,{size:"small",children:"회원가입"})]})})]})]})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    maxWidth: 'sm',
    fullWidth: false,
    fullScreen: false,
    scroll: 'paper'
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          대화상자 열기
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth={args.maxWidth} fullWidth={args.fullWidth} fullScreen={args.fullScreen} scroll={args.scroll}>
          <DialogTitle>기본 대화상자</DialogTitle>
          <DialogContent>
            <DialogContentText>
              대화상자는 사용자의 주의를 집중시키고 중요한 정보를 전달하거나
              결정을 요청할 때 사용합니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>취소</Button>
            <Button onClick={() => setOpen(false)} variant="contained">
              확인
            </Button>
          </DialogActions>
        </Dialog>
      </>;
  }
}`,...v.parameters?.docs?.source},description:{story:"기본 대화상자",...v.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="contained" color="error" onClick={() => setOpen(true)}>
          삭제하기
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>항목을 삭제하시겠습니까?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              이 작업은 되돌릴 수 없습니다. 선택한 항목이 영구적으로 삭제됩니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>취소</Button>
            <Button onClick={() => setOpen(false)} color="error" variant="contained">
              삭제
            </Button>
          </DialogActions>
        </Dialog>
      </>;
  }
}`,...S.parameters?.docs?.source},description:{story:"확인 대화상자",...S.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          새 항목 추가
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
          <DialogTitle>새 항목 추가</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{
            mb: 2
          }}>
              새로운 항목의 정보를 입력해주세요.
            </DialogContentText>
            <Stack spacing={2}>
              <TextField autoFocus label="제목" fullWidth variant="outlined" />
              <TextField label="설명" fullWidth multiline rows={3} variant="outlined" />
              <TextField label="카테고리" fullWidth variant="outlined" />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>취소</Button>
            <Button onClick={() => setOpen(false)} variant="contained">
              추가
            </Button>
          </DialogActions>
        </Dialog>
      </>;
  }
}`,...b.parameters?.docs?.source},description:{story:"폼 대화상자",...b.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="outlined" color="warning" onClick={() => setOpen(true)}>
          경고 표시
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle sx={{
          color: 'warning.main'
        }}>
            주의가 필요합니다
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              저장하지 않은 변경사항이 있습니다.
              페이지를 떠나면 변경사항이 손실됩니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>
              계속 편집
            </Button>
            <Button onClick={() => setOpen(false)} color="warning">
              저장 안 함
            </Button>
            <Button onClick={() => setOpen(false)} variant="contained">
              저장
            </Button>
          </DialogActions>
        </Dialog>
      </>;
  }
}`,...B.parameters?.docs?.source},description:{story:"알림 대화상자",...B.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openSize, setOpenSize] = useState(null);
    const sizes = ['xs', 'sm', 'md', 'lg'];
    return <>
        <Stack direction="row" spacing={2}>
          {sizes.map(size => <Button key={size} variant="outlined" onClick={() => setOpenSize(size)}>
              {size.toUpperCase()}
            </Button>)}
        </Stack>
        {sizes.map(size => <Dialog key={size} open={openSize === size} onClose={() => setOpenSize(null)} maxWidth={size} fullWidth>
            <DialogTitle>maxWidth: {size}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                fullWidth를 true로 설정하면 maxWidth까지 전체 너비를 사용합니다.
                현재 설정된 maxWidth는 "{size}"입니다.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenSize(null)}>닫기</Button>
            </DialogActions>
          </Dialog>)}
      </>;
  }
}`,...k.parameters?.docs?.source},description:{story:"크기 변형",...k.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          긴 콘텐츠 대화상자
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} scroll="paper" maxWidth="sm" fullWidth>
          <DialogTitle>이용약관</DialogTitle>
          <DialogContent dividers>
            {[...Array(10)].map((_, index) => <Typography key={index} paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
              </Typography>)}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>취소</Button>
            <Button onClick={() => setOpen(false)} variant="contained">
              동의
            </Button>
          </DialogActions>
        </Dialog>
      </>;
  }
}`,...T.parameters?.docs?.source},description:{story:"스크롤 대화상자",...T.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const users = [{
      name: '김철수',
      email: 'kim@example.com'
    }, {
      name: '이영희',
      email: 'lee@example.com'
    }, {
      name: '박민수',
      email: 'park@example.com'
    }, {
      name: '최수진',
      email: 'choi@example.com'
    }];
    return <>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          사용자 선택
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>담당자 선택</DialogTitle>
          <List sx={{
          pt: 0
        }}>
            {users.map(user => <ListItem key={user.email} component="button" onClick={() => setOpen(false)} sx={{
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'action.hover'
            }
          }}>
                <ListItemAvatar>
                  <Avatar sx={{
                bgcolor: 'primary.main'
              }}>
                    {user.name[0]}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={user.name} secondary={user.email} />
              </ListItem>)}
          </List>
        </Dialog>
      </>;
  }
}`,...A.parameters?.docs?.source},description:{story:"리스트 대화상자",...A.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          설정 열기
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
          <DialogTitle sx={{
          m: 0,
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
            <Typography variant="h6" component="span">
              설정
            </Typography>
            <IconButton onClick={() => setOpen(false)} sx={{
            color: 'grey.500'
          }}>
              <Box component="span" sx={{
              fontSize: 20
            }}>✕</Box>
            </IconButton>
          </DialogTitle>
          <Divider />
          <DialogContent>
            <Stack spacing={3}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  알림 설정
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  이메일 알림, 푸시 알림 등을 설정할 수 있습니다.
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  개인정보
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  프로필 정보와 개인정보 보호 설정을 관리합니다.
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  보안
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  비밀번호 변경, 2단계 인증 등 보안 설정을 관리합니다.
                </Typography>
              </Box>
            </Stack>
          </DialogContent>
          <Divider />
          <DialogActions>
            <Button onClick={() => setOpen(false)}>닫기</Button>
            <Button onClick={() => setOpen(false)} variant="contained">
              저장
            </Button>
          </DialogActions>
        </Dialog>
      </>;
  }
}`,...O.parameters?.docs?.source},description:{story:"커스텀 헤더",...O.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    return <>
        <Button variant="outlined" onClick={() => setOpen1(true)}>
          첫 번째 대화상자
        </Button>

        <Dialog open={open1} onClose={() => setOpen1(false)}>
          <DialogTitle>첫 번째 대화상자</DialogTitle>
          <DialogContent>
            <DialogContentText>
              대화상자 안에서 다른 대화상자를 열 수 있습니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen1(false)}>닫기</Button>
            <Button onClick={() => setOpen2(true)} variant="contained">
              다음 대화상자 열기
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog open={open2} onClose={() => setOpen2(false)}>
          <DialogTitle>두 번째 대화상자</DialogTitle>
          <DialogContent>
            <DialogContentText>
              이것은 중첩된 대화상자입니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen2(false)} variant="contained">
              확인
            </Button>
          </DialogActions>
        </Dialog>
      </>;
  }
}`,...I.parameters?.docs?.source},description:{story:"중첩 대화상자",...I.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          로그인
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xs" fullWidth>
          <DialogTitle sx={{
          textAlign: 'center',
          pt: 4
        }}>
            <Typography variant="h5" sx={{
            fontWeight: 700
          }}>
              로그인
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Stack spacing={2} sx={{
            mt: 1
          }}>
              <TextField label="이메일" type="email" fullWidth variant="outlined" />
              <TextField label="비밀번호" type="password" fullWidth variant="outlined" />
              <Button variant="contained" fullWidth size="large">
                로그인
              </Button>
              <Divider>또는</Divider>
              <Button variant="outlined" fullWidth>
                Google로 계속하기
              </Button>
            </Stack>
          </DialogContent>
          <DialogActions sx={{
          justifyContent: 'center',
          pb: 3
        }}>
            <Typography variant="body2" color="text.secondary">
              계정이 없으신가요?
              <Button size="small">회원가입</Button>
            </Typography>
          </DialogActions>
        </Dialog>
      </>;
  }
}`,...W.parameters?.docs?.source},description:{story:"실제 사용 예시 - 로그인",...W.parameters?.docs?.description}}};const Tt=["Default","Confirmation","FormDialog","Alert","Sizes","Scrollable","ListDialog","CustomHeader","Nested","LoginDialog"];export{B as Alert,S as Confirmation,O as CustomHeader,v as Default,b as FormDialog,A as ListDialog,W as LoginDialog,I as Nested,T as Scrollable,k as Sizes,Tt as __namedExportsOrder,kt as default};
