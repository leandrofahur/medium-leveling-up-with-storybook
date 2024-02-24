import{r as ie,R as c}from"./index-CBqU2yxZ.js";import{P as d}from"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";var te={exports:{}},x={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce=ie,se=Symbol.for("react.element"),le=Symbol.for("react.fragment"),de=Object.prototype.hasOwnProperty,ue=ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pe={key:!0,ref:!0,__self:!0,__source:!0};function ne(e,r,t){var n,o={},a=null,s=null;t!==void 0&&(a=""+t),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(s=r.ref);for(n in r)de.call(r,n)&&!pe.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps,r)o[n]===void 0&&(o[n]=r[n]);return{$$typeof:se,type:e,key:a,ref:s,props:o,_owner:ue.current}}x.Fragment=le;x.jsx=ne;x.jsxs=ne;te.exports=x;var i=te.exports;const me="_btn_ij398_1",ye="_contained_ij398_13",fe="_primary_ij398_13",ve="_secondary_ij398_18",be="_outlined_ij398_23",ge="_text_ij398_34",S={btn:me,contained:ye,primary:fe,secondary:ve,outlined:be,text:ge};function j(e){const{variant:r,color:t,isDisabled:n,onClick:o,children:a}=e,s=`${S.btn} ${S[r]} ${S[t]}`;return i.jsx("button",{className:s,disabled:n,onClick:n?void 0:o,children:a})}j.propTypes={variant:d.oneOf(["contained","outlined","text"]),color:d.oneOf(["primary","secondary"]),isDisabled:d.bool,onClick:d.func,children:d.node.isRequired};j.defaultProps={variant:"contained",color:"primary",isDisabled:!1,onClick:()=>{},children:null};j.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:'"contained"',computed:!1},description:"",type:{name:"enum",value:[{value:'"contained"',computed:!1},{value:'"outlined"',computed:!1},{value:'"text"',computed:!1}]},required:!1},color:{defaultValue:{value:'"primary"',computed:!1},description:"",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1}]},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};var oe={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},w=c.createContext&&c.createContext(oe),he=["attr","size","title"];function _e(e,r){if(e==null)return{};var t=Oe(e,r),n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function Oe(e,r){if(e==null)return{};var t={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(r.indexOf(o)>=0)&&(t[o]=e[o]);return t}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},_.apply(this,arguments)}function E(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function O(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?E(Object(t),!0).forEach(function(n){xe(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function xe(e,r,t){return r=je(r),r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function je(e){var r=Se(e,"string");return typeof r=="symbol"?r:String(r)}function Se(e,r){if(typeof e!="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function ae(e){return e&&e.map((r,t)=>c.createElement(r.tag,O({key:t},r.attr),ae(r.child)))}function Pe(e){return r=>c.createElement(ke,_({attr:O({},e.attr)},r),ae(e.child))}function ke(e){var r=t=>{var{attr:n,size:o,title:a}=e,s=_e(e,he),k=o||t.size||"1em",l;return t.className&&(l=t.className),e.className&&(l=(l?l+" ":"")+e.className),c.createElement("svg",_({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,s,{className:l,style:O(O({color:e.color||t.color},t.style),e.style),height:k,width:k,xmlns:"http://www.w3.org/2000/svg"}),a&&c.createElement("title",null,a),e.children)};return w!==void 0?c.createElement(w.Consumer,null,t=>r(t)):r(oe)}function P(e){return Pe({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.71.243l-.12 2.71a.18.18 0 00.29.15l1.06-.8.9.7a.18.18 0 00.28-.14l-.1-2.76 1.33-.1a1.2 1.2 0 011.279 1.2v21.596a1.2 1.2 0 01-1.26 1.2l-16.096-.72a1.2 1.2 0 01-1.15-1.16l-.75-19.797a1.2 1.2 0 011.13-1.27L16.7.222zM13.64 9.3c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.859-4.89-3.15 0-4.899 1.72-4.899 4.29 0 4.45 5.999 4.53 5.999 6.959 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.649-.48-3.769 0-.27 4.03 2.23 5.2 5.099 5.2 2.79 0 4.969-1.49 4.969-4.18 0-4.77-6.099-4.64-6.099-6.999 0-.97.72-1.1 1.13-1.1.45 0 1.25.07 1.19 1.87z"},child:[]}]})(e)}const Te={title:"Components/Atoms/Button",component:j,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{description:"The button currently supports three variants",control:{type:"radio",options:["text","outlined","contained"]}},color:{description:"The button currently supports a primary and a secondary color",control:{type:"radio",options:["primary","secondary"]}},children:{description:"The content of the button. It can be text, an icon, or both"},isDisabled:{description:"The button disabled state"},onClick:{description:"The action to be performed when the button is clicked"}}},u={args:{variant:"contained",color:"primary",children:"Primary"}},p={args:{variant:"contained",color:"secondary",children:"Secondary"}},m={args:{variant:"text",color:"primary",children:"Text"}},y={args:{variant:"outlined",color:"primary",children:"Outlined"}},f={args:{variant:"contained",color:"primary",children:"Disabled",isDisabled:!0}},v={args:{variant:"contained",color:"primary",children:i.jsx(P,{}),startIcon:"add"}},b={args:{variant:"contained",color:"primary",children:i.jsxs(i.Fragment,{children:[i.jsx(P,{}),"Storybook"]}),startIcon:"add"}},g={args:{variant:"contained",color:"primary",children:i.jsxs(i.Fragment,{children:["Storybook",i.jsx(P,{})]}),endIcon:"add"}},h={args:{variant:"contained",color:"primary",children:"Action",onClick:()=>alert("Button clicked")}};var I,T,C;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: "contained",
    color: "primary",
    children: "Primary"
  }
}`,...(C=(T=u.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var D,N,W;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: "contained",
    color: "secondary",
    children: "Secondary"
  }
}`,...(W=(N=p.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var R,A,B;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: "text",
    color: "primary",
    children: "Text"
  }
}`,...(B=(A=m.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var q,z,L;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: "outlined",
    color: "primary",
    children: "Outlined"
  }
}`,...(L=(z=y.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var V,$,F;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: "contained",
    color: "primary",
    children: "Disabled",
    isDisabled: true
  }
}`,...(F=($=f.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var K,M,U;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: "contained",
    color: "primary",
    children: <SiStorybook />,
    startIcon: "add"
  }
}`,...(U=(M=v.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var G,J,Y;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: "contained",
    color: "primary",
    children: <>
        <SiStorybook />
        Storybook
      </>,
    startIcon: "add"
  }
}`,...(Y=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var H,Q,X;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: "contained",
    color: "primary",
    children: <>
        Storybook
        <SiStorybook />
      </>,
    endIcon: "add"
  }
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,re;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    variant: "contained",
    color: "primary",
    children: "Action",
    onClick: () => alert("Button clicked")
  }
}`,...(re=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const Ce=["Primary","Secondary","Text","Outlined","Disabled","WithIcon","WithIconAndText","WithIconAndTextEnd","WithAction"];export{f as Disabled,y as Outlined,u as Primary,p as Secondary,m as Text,h as WithAction,v as WithIcon,b as WithIconAndText,g as WithIconAndTextEnd,Ce as __namedExportsOrder,Te as default};
