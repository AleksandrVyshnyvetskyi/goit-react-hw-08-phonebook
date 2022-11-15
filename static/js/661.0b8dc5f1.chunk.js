"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[661],{661:function(e,t,o){o.r(t),o.d(t,{default:function(){return R}});var r=o(7205),a=o(4942),n=o(3366),i=o(7462),s=o(2791),d=o(8182),u=o(7312),l=o(1217),c=o(4419),m=o(7078),p=(0,o(4046).ZP)(),f=o(5080),x=o(184),h=["className","component","disableGutters","fixed","maxWidth","classes"],b=(0,f.Z)(),v=p("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t["maxWidth".concat((0,u.Z)(String(o.maxWidth)))],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}}),g=function(e){return(0,m.Z)({props:e,name:"MuiContainer",defaultTheme:b})},Z=function(e,t){var o=e.classes,r=e.fixed,a=e.disableGutters,n=e.maxWidth,i={root:["root",n&&"maxWidth".concat((0,u.Z)(String(n))),r&&"fixed",a&&"disableGutters"]};return(0,c.Z)(i,(function(e){return(0,l.Z)(t,e)}),o)};var w=o(9853),C=o(277),k=o(5513),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,o=void 0===t?v:t,r=e.useThemeProps,u=void 0===r?g:r,l=e.componentName,c=void 0===l?"MuiContainer":l,m=o((function(e){var t=e.theme,o=e.ownerState;return(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!o.disableGutters&&(0,a.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,o){var r=o,a=t.breakpoints.values[r];return 0!==a&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(a).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,o=e.ownerState;return(0,i.Z)({},"xs"===o.maxWidth&&(0,a.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),o.maxWidth&&"xs"!==o.maxWidth&&(0,a.Z)({},t.breakpoints.up(o.maxWidth),{maxWidth:"".concat(t.breakpoints.values[o.maxWidth]).concat(t.breakpoints.unit)}))})),p=s.forwardRef((function(e,t){var o=u(e),r=o.className,a=o.component,s=void 0===a?"div":a,l=o.disableGutters,p=void 0!==l&&l,f=o.fixed,b=void 0!==f&&f,v=o.maxWidth,g=void 0===v?"lg":v,w=(0,n.Z)(o,h),C=(0,i.Z)({},o,{component:s,disableGutters:p,fixed:b,maxWidth:g}),k=Z(C,c);return(0,x.jsx)(m,(0,i.Z)({as:s,ownerState:C,className:(0,d.Z)(k.root,r),ref:t},w))}));return p}({createStyledComponent:(0,C.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t["maxWidth".concat((0,w.Z)(String(o.maxWidth)))],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,k.Z)({props:e,name:"MuiContainer"})}}),S=W,y=o(6015),P=o(6128),M=o(9434),N=o(1689),j=(0,C.ZP)(P.Z)({"& .MuiInputBase-input":{color:"#ffa200",fontSize:"20px",backgroundColor:"rgb(0, 0, 0, 0.4)"},"& .MuiFormLabel-root":{color:"#ffa200"},"& label.Mui-focused":{color:"#ffa200"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#ffa200",boxShadow:"0px 5px 10px 6px rgba(139, 211, 225, 0.2)"},"&:hover fieldset":{borderColor:"#ffa200"},"&.Mui-focused fieldset":{borderColor:"#ffa200",boxShadow:"0px 0px 10px 10px rgba(255, 162, 0, 0.2) inset"}}});function G(){var e=(0,M.I0)();return(0,x.jsxs)(S,{component:"main",maxWidth:"xs",sx:{marginTop:"60px"},children:[(0,x.jsx)("h1",{className:"phonebook-title loginScreen-title",children:"Create your account"}),(0,x.jsxs)(y.Z,{component:"form",noValidate:!0,onSubmit:function(t){t.preventDefault();var o=t.currentTarget;e((0,N.y1)({name:o.elements.name.value,email:o.elements.email.value,password:o.elements.password.value})),o.reset()},children:[(0,x.jsx)(j,{margin:"normal",autoComplete:"off",name:"firstName",required:!0,fullWidth:!0,id:"name",label:"First Name"}),(0,x.jsx)(j,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"off"}),(0,x.jsx)(j,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"off"}),(0,x.jsx)(r.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{fontSize:"24px",fontWeight:"700",padding:"15px",marginTop:"20px",color:"#165563",backgroundColor:"#fbb845",borderRadius:"10px",height:"60px",boxShadow:"0px 5px 10px 6px rgba(139, 211, 225, 0.2)","&.MuiButton-root:hover":{color:"#fda40a",backgroundColor:"rgba(0, 0, 0, 0.3)",border:"2px solid #fda40a",boxShadow:"0px 0px 10px 10px rgba(255, 162, 0, 0.2) inset"}},children:"Create account"})]})]})}function R(){return(0,x.jsx)(G,{})}},6015:function(e,t,o){o.d(t,{Z:function(){return x}});var r=o(7462),a=o(3366),n=o(2791),i=o(8182),s=o(3842),d=o(104),u=o(8519),l=o(3459),c=o(184),m=["className","component"];var p=o(5902),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,o=e.defaultClassName,p=void 0===o?"MuiBox-root":o,f=e.generateClassName,x=e.styleFunctionSx,h=void 0===x?d.Z:x,b=(0,s.ZP)("div",{shouldForwardProp:function(e){return"theme"!==e&&"sx"!==e&&"as"!==e}})(h),v=n.forwardRef((function(e,o){var n=(0,l.Z)(t),s=(0,u.Z)(e),d=s.className,x=s.component,h=void 0===x?"div":x,v=(0,a.Z)(s,m);return(0,c.jsx)(b,(0,r.Z)({as:h,ref:o,className:(0,i.Z)(d,f?f(p):p),theme:n},v))}));return v}({defaultTheme:(0,o(4360).Z)(),defaultClassName:"MuiBox-root",generateClassName:p.Z.generate}),x=f},8519:function(e,t,o){o.d(t,{Z:function(){return u}});var r=o(2982),a=o(7462),n=o(3366),i=o(2466),s=o(114),d=["sx"];function u(e){var t,o=e.sx,u=function(e){var t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((function(o){s.Gc[o]?t.systemProps[o]=e[o]:t.otherProps[o]=e[o]})),t}((0,n.Z)(e,d)),l=u.systemProps,c=u.otherProps;return t=Array.isArray(o)?[l].concat((0,r.Z)(o)):"function"===typeof o?function(){var e=o.apply(void 0,arguments);return(0,i.P)(e)?(0,a.Z)({},l,e):l}:(0,a.Z)({},l,o),(0,a.Z)({},c,{sx:t})}}}]);
//# sourceMappingURL=661.0b8dc5f1.chunk.js.map