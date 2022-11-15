"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[798],{8798:function(r,o,e){e.r(o),e.d(o,{default:function(){return P}});var n=e(7689),t=e(2791),i=e(1980),a=e(7205),c=e(4942),s=e(3366),u=e(7462),d=e(1184),l=e(5682),p=e(8519),x=e(2466),f=e(277),h=e(5513),b=e(184),g=["component","direction","spacing","divider","children"];function v(r,o){var e=t.Children.toArray(r).filter(Boolean);return e.reduce((function(r,n,i){return r.push(n),i<e.length-1&&r.push(t.cloneElement(o,{key:"separator-".concat(i)})),r}),[])}var m=(0,f.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(r,o){return[o.root]}})((function(r){var o=r.ownerState,e=r.theme,n=(0,u.Z)({display:"flex",flexDirection:"column"},(0,d.k9)({theme:e},(0,d.P$)({values:o.direction,breakpoints:e.breakpoints.values}),(function(r){return{flexDirection:r}})));if(o.spacing){var t=(0,l.hB)(e),i=Object.keys(e.breakpoints.values).reduce((function(r,e){return("object"===typeof o.spacing&&null!=o.spacing[e]||"object"===typeof o.direction&&null!=o.direction[e])&&(r[e]=!0),r}),{}),a=(0,d.P$)({values:o.direction,base:i}),s=(0,d.P$)({values:o.spacing,base:i});"object"===typeof a&&Object.keys(a).forEach((function(r,o,e){if(!a[r]){var n=o>0?a[e[o-1]]:"column";a[r]=n}}));n=(0,x.Z)(n,(0,d.k9)({theme:e},s,(function(r,e){return{"& > :not(style) + :not(style)":(0,c.Z)({margin:0},"margin".concat((n=e?a[e]:o.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[n])),(0,l.NA)(t,r))};var n})))}return n=(0,d.dt)(e.breakpoints,n)})),k=t.forwardRef((function(r,o){var e=(0,h.Z)({props:r,name:"MuiStack"}),n=(0,p.Z)(e),t=n.component,i=void 0===t?"div":t,a=n.direction,c=void 0===a?"column":a,d=n.spacing,l=void 0===d?0:d,x=n.divider,f=n.children,k=(0,s.Z)(n,g),j={direction:c,spacing:l};return(0,b.jsx)(m,(0,u.Z)({as:i,ownerState:j,ref:o},k,{children:x?v(f,x):f}))})),j=k,y=e(9434),Z=e(1689);function w(){var r=(0,y.I0)(),o=(0,i.a)().user;return(0,b.jsxs)(j,{direction:"row",spacing:2,alignItems:"center",children:[(0,b.jsx)("h3",{className:"user-name",children:o.name}),(0,b.jsx)(a.Z,{onClick:function(){return r((0,Z.ni)())},sx:{fontSize:"24px",fontWeight:"700",color:"#fda40a",backgroundColor:"rgba(0, 0, 0, 0.15)",border:"2px solid #fda40a",boxShadow:"0px 0px 10px 10px rgba(255, 162, 0, 0.2) inset",borderRadius:"10px","&.MuiButton-root:hover":{color:"#165563",backgroundColor:"#fbb845",boxShadow:"0px 5px 10px 6px rgba(139, 211, 225, 0.4)"}},children:"Log Out"})]})}function S(){var r=(0,n.s0)();return(0,b.jsxs)("div",{children:[(0,b.jsx)(a.Z,{onClick:function(){r("/register")},variant:"contained",sx:{fontSize:"24px",fontWeight:"700",color:"#fda40a",backgroundColor:"rgba(0, 0, 0, 0.3)",border:"2px solid #fda40a",boxShadow:"0px 0px 10px 10px rgba(255, 162, 0, 0.2) inset",borderRadius:"10px",marginRight:"15px","&.MuiButton-root:hover":{color:"#165563",backgroundColor:"#fbb845",boxShadow:"0px 5px 10px 6px rgba(139, 211, 225, 0.4)"}},children:"Sign Up"}),(0,b.jsx)(a.Z,{onClick:function(){r("/login")},variant:"contained",sx:{fontSize:"24px",fontWeight:"700",color:"#fda40a",backgroundColor:"rgba(0, 0, 0, 0.3)",border:"2px solid #fda40a",boxShadow:"0px 0px 10px 10px rgba(255, 162, 0, 0.2) inset",borderRadius:"10px","&.MuiButton-root:hover":{color:"#165563",backgroundColor:"#fbb845",boxShadow:"0px 5px 10px 6px rgba(139, 211, 225, 0.4)"}},children:"Log in"})]})}function C(){var r=(0,i.a)().isLoggedIn;return(0,b.jsxs)("div",{className:"header",children:[(0,b.jsx)("h1",{className:"header-title",children:"PHONEBOOK"}),r?(0,b.jsx)(w,{}):(0,b.jsx)(S,{})]})}function P(){return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{className:"login-screen-bgd",children:[(0,b.jsx)(C,{}),(0,b.jsx)(t.Suspense,{fallback:null,children:(0,b.jsx)(n.j3,{})})]})})}},8519:function(r,o,e){e.d(o,{Z:function(){return u}});var n=e(2982),t=e(7462),i=e(3366),a=e(2466),c=e(114),s=["sx"];function u(r){var o,e=r.sx,u=function(r){var o={systemProps:{},otherProps:{}};return Object.keys(r).forEach((function(e){c.Gc[e]?o.systemProps[e]=r[e]:o.otherProps[e]=r[e]})),o}((0,i.Z)(r,s)),d=u.systemProps,l=u.otherProps;return o=Array.isArray(e)?[d].concat((0,n.Z)(e)):"function"===typeof e?function(){var r=e.apply(void 0,arguments);return(0,a.P)(r)?(0,t.Z)({},d,r):d}:(0,t.Z)({},d,e),(0,t.Z)({},l,{sx:o})}}}]);
//# sourceMappingURL=798.c1eae9f5.chunk.js.map