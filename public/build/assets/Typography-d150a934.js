import{e as y,_ as i,t as T,v as B,a as C,g as W,s as _,c as f,u as M,f as $,h as j}from"./styled-b9d77b2a.js";import{r as R,j as U}from"./app-b5aa86aa.js";const A=["sx"],E=r=>{var t,a;const n={systemProps:{},otherProps:{}},e=(t=r==null||(a=r.theme)==null?void 0:a.unstable_sxConfig)!=null?t:T;return Object.keys(r).forEach(o=>{e[o]?n.systemProps[o]=r[o]:n.otherProps[o]=r[o]}),n};function N(r){const{sx:t}=r,a=y(r,A),{systemProps:n,otherProps:e}=E(a);let o;return Array.isArray(t)?o=[n,...t]:typeof t=="function"?o=(...p)=>{const s=t(...p);return B(s)?i({},n,s):n}:o=i({},n,t),i({},e,{sx:o})}function O(r){return C("MuiTypography",r)}W("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const L=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],k=r=>{const{align:t,gutterBottom:a,noWrap:n,paragraph:e,variant:o,classes:p}=r,s={root:["root",o,r.align!=="inherit"&&`align${f(t)}`,a&&"gutterBottom",n&&"noWrap",e&&"paragraph"]};return j(s,O,p)},z=_("span",{name:"MuiTypography",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:a}=r;return[t.root,a.variant&&t[a.variant],a.align!=="inherit"&&t[`align${f(a.align)}`],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})(({theme:r,ownerState:t})=>i({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&r.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),m={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},D={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},J=r=>D[r]||r,S=R.forwardRef(function(t,a){const n=M({props:t,name:"MuiTypography"}),e=J(n.color),o=N(i({},n,{color:e})),{align:p="inherit",className:s,component:h,gutterBottom:d=!1,noWrap:x=!1,paragraph:c=!1,variant:l="body1",variantMapping:g=m}=o,v=y(o,L),u=i({},o,{align:p,color:e,className:s,component:h,gutterBottom:d,noWrap:x,paragraph:c,variant:l,variantMapping:g}),b=h||(c?"p":g[l]||m[l])||"span",P=k(u);return U.jsx(z,i({as:b,ref:a,ownerState:u,className:$(P.root,s)},v))}),w=S;export{w as T};