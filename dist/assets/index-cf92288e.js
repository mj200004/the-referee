import{r as h,a as ue,R as be}from"./vendor-8a332d8f.js";import{S as fe,C as _,a as te,Z as R,b as ae,B as C,U as I,E as P,M as T,D as E,W as K,c as ie,T as je,d as q,L as se,H as ve,e as ne,R as W,f as X,X as H,g as re,A as ye,h as we,V as Ne,i as ke,j as ze,k as Ce,l as Se,m as oe,n as De,P as le,o as O,p as Re,q as Q}from"./icons-6fc9351b.js";import{R as M,B as ce,C as B,X as V,Y as F,T as D,a as Y,b as de,P as pe,c as xe,d as me,e as $,L as Ae,f as J,g as Me,h as Ie,i as Te}from"./charts-690b1f53.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))p(s);new MutationObserver(s=>{for(const x of s)if(x.type==="childList")for(const r of x.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&p(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const x={};return s.integrity&&(x.integrity=s.integrity),s.referrerPolicy&&(x.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?x.credentials="include":s.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function p(s){if(s.ep)return;s.ep=!0;const x=i(s);fetch(s.href,x)}})();var he={exports:{}},L={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $e=h,Le=Symbol.for("react.element"),Pe=Symbol.for("react.fragment"),Ee=Object.prototype.hasOwnProperty,Oe=$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Be={key:!0,ref:!0,__self:!0,__source:!0};function ge(t,l,i){var p,s={},x=null,r=null;i!==void 0&&(x=""+i),l.key!==void 0&&(x=""+l.key),l.ref!==void 0&&(r=l.ref);for(p in l)Ee.call(l,p)&&!Be.hasOwnProperty(p)&&(s[p]=l[p]);if(t&&t.defaultProps)for(p in l=t.defaultProps,l)s[p]===void 0&&(s[p]=l[p]);return{$$typeof:Le,type:t,key:x,ref:r,props:s,_owner:Oe.current}}L.Fragment=Pe;L.jsx=ge;L.jsxs=ge;he.exports=L;var e=he.exports,U={},Z=ue;U.createRoot=Z.createRoot,U.hydrateRoot=Z.hydrateRoot;const Ve=()=>{const[t,l]=h.useState(0),[i,p]=h.useState(0),s=[{icon:e.jsx(C,{size:20}),text:"AI-Powered Analysis"},{icon:e.jsx(T,{size:20}),text:"Voice Commands"},{icon:e.jsx(I,{size:20}),text:"Team Collaboration"},{icon:e.jsx(P,{size:20}),text:"3D Visualizations"}],x=[{icon:e.jsx(ie,{size:16}),name:"React 18",desc:"Modern UI Framework"},{icon:e.jsx(C,{size:16}),name:"TensorFlow.js",desc:"Machine Learning"},{icon:e.jsx(E,{size:16}),name:"WebGL",desc:"3D Graphics"},{icon:e.jsx(K,{size:16}),name:"WebRTC",desc:"Real-time Comms"},{icon:e.jsx(je,{size:16}),name:"Web Speech API",desc:"Voice Interface"},{icon:e.jsx(_,{size:16}),name:"Vite",desc:"Build Tool"}];return h.useEffect(()=>{const r=setInterval(()=>{l(m=>(m+1)%s.length)},3e3);return()=>clearInterval(r)},[s.length]),h.useEffect(()=>{const r=setInterval(()=>{p(m=>(m+1)%x.length)},2e3);return()=>clearInterval(r)},[x.length]),e.jsxs("header",{className:"header-container",children:[e.jsxs("div",{className:"header-background",children:[e.jsx("div",{className:"tech-grid",children:[...Array(50)].map((r,m)=>e.jsx("div",{className:"tech-dot",style:{left:`${m%10*10}%`,top:`${Math.floor(m/10)*20}%`,animationDelay:`${Math.random()*5}s`}},m))}),e.jsx("div",{className:"floating-particles",children:[...Array(20)].map((r,m)=>e.jsx("div",{className:"particle",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*15}s`,animationDuration:`${15+Math.random()*10}s`}},m))})]}),e.jsxs("div",{className:"header-content",children:[e.jsxs("div",{className:"brand-section",children:[e.jsxs("div",{className:"logo-container",children:[e.jsxs("div",{className:"logo-icon",children:[e.jsx(fe,{size:40}),e.jsx("div",{className:"logo-glow"}),e.jsxs("div",{className:"tech-rings",children:[e.jsx("div",{className:"tech-ring ring-1"}),e.jsx("div",{className:"tech-ring ring-2"}),e.jsx("div",{className:"tech-ring ring-3"})]})]}),e.jsxs("div",{className:"brand-text",children:[e.jsxs("h1",{className:"brand-title",children:["The Referee",e.jsx("span",{className:"pro-badge",children:"PRO"}),e.jsx("span",{className:"version-badge",children:"v2.0"})]}),e.jsx("div",{className:"brand-subtitle",children:"AI-Powered Decision Intelligence Platform"}),e.jsxs("div",{className:"tech-badges",children:[e.jsxs("span",{className:"tech-badge",children:[e.jsx(_,{size:12}),"Enterprise-Grade"]}),e.jsxs("span",{className:"tech-badge",children:[e.jsx(te,{size:12}),"Cloud-Ready"]}),e.jsxs("span",{className:"tech-badge",children:[e.jsx(R,{size:12}),"Real-time"]})]})]})]}),e.jsxs("div",{className:"feature-showcase",children:[e.jsxs("div",{className:"feature-indicator",children:[e.jsx(ae,{size:16}),e.jsx("span",{children:"Now featuring:"})]}),e.jsx("div",{className:"rotating-features",children:s.map((r,m)=>e.jsxs("div",{className:`feature-item ${t===m?"active":""}`,children:[r.icon,e.jsx("span",{children:r.text})]},m))})]})]}),e.jsx("div",{className:"tech-showcase",children:e.jsxs("div",{className:"tech-stack-display",children:[e.jsx("h3",{children:"🚀 Powered By Advanced Technology"}),e.jsx("div",{className:"tech-grid-display",children:x.map((r,m)=>e.jsxs("div",{className:`tech-item ${i===m?"active":""}`,children:[e.jsx("div",{className:"tech-icon",children:r.icon}),e.jsxs("div",{className:"tech-info",children:[e.jsx("div",{className:"tech-name",children:r.name}),e.jsx("div",{className:"tech-desc",children:r.desc})]}),i===m&&e.jsx("div",{className:"tech-pulse"})]},m))})]})}),e.jsxs("div",{className:"stats-section",children:[e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-number",children:"95%"}),e.jsx("div",{className:"stat-label",children:"Faster Development"}),e.jsx("div",{className:"stat-tech",children:"with Kiro AI"})]}),e.jsx("div",{className:"stat-divider"}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-number",children:"100"}),e.jsx("div",{className:"stat-label",children:"Lighthouse Score"}),e.jsx("div",{className:"stat-tech",children:"Performance"})]}),e.jsx("div",{className:"stat-divider"}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-number",children:"0.8s"}),e.jsx("div",{className:"stat-label",children:"Load Time"}),e.jsx("div",{className:"stat-tech",children:"Sub-second"})]}),e.jsx("div",{className:"stat-divider"}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-number",children:"5+"}),e.jsx("div",{className:"stat-label",children:"AI Features"}),e.jsx("div",{className:"stat-tech",children:"Revolutionary"})]})]}),e.jsxs("div",{className:"description-section",children:[e.jsx("p",{className:"main-description",children:"Experience the future of decision-making with our revolutionary AI-powered platform. Built with cutting-edge technology stack including React 18, TensorFlow.js, WebGL, and WebRTC for unparalleled performance and user experience."}),e.jsxs("div",{className:"key-features",children:[e.jsxs("div",{className:"feature-pill",children:[e.jsx(R,{size:14}),e.jsx("span",{children:"Real-time AI Analysis"})]}),e.jsxs("div",{className:"feature-pill",children:[e.jsx(C,{size:14}),e.jsx("span",{children:"Machine Learning"})]}),e.jsxs("div",{className:"feature-pill",children:[e.jsx(I,{size:14}),e.jsx("span",{children:"WebRTC Collaboration"})]}),e.jsxs("div",{className:"feature-pill",children:[e.jsx(P,{size:14}),e.jsx("span",{children:"WebGL 3D Graphics"})]}),e.jsxs("div",{className:"feature-pill",children:[e.jsx(T,{size:14}),e.jsx("span",{children:"Speech Recognition"})]}),e.jsxs("div",{className:"feature-pill",children:[e.jsx(E,{size:14}),e.jsx("span",{children:"Edge Computing"})]})]})]}),e.jsxs("div",{className:"public-demo-banner",children:[e.jsxs("div",{className:"demo-badge",children:[e.jsx(K,{size:16}),e.jsx("span",{children:"🚀 DEPLOYMENT IN PROGRESS"})]}),e.jsx("div",{className:"demo-url",children:e.jsx("strong",{children:"GitHub Repository: https://github.com/mj200004/the-referee"})}),e.jsxs("div",{className:"demo-description",children:["Live demo will be available at: https://mj200004.github.io/the-referee/",e.jsx("br",{}),e.jsx("small",{children:"GitHub Pages deployment is processing. You can clone and run locally with: npm install && npm run dev"})]})]})]}),e.jsx("style",{jsx:!0,children:`
        .header-container {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 48px;
          margin-bottom: 32px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }
        
        .header-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }
        
        .tech-grid {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.1;
        }
        
        .tech-dot {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #667eea;
          border-radius: 50%;
          animation: tech-pulse 3s infinite ease-in-out;
        }
        
        .floating-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(102, 126, 234, 0.6);
          border-radius: 50%;
          animation: float-particle 15s infinite linear;
        }
        
        .header-content {
          position: relative;
          z-index: 1;
        }
        
        .brand-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }
        
        .logo-container {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        
        .logo-icon {
          position: relative;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
        }
        
        .logo-glow {
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          background: linear-gradient(45deg, #667eea, #764ba2, #667eea);
          border-radius: 24px;
          z-index: -1;
          opacity: 0.7;
          animation: rotate 3s linear infinite;
        }
        
        .tech-rings {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        
        .tech-ring {
          position: absolute;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          animation: tech-ring-rotate 10s linear infinite;
        }
        
        .ring-1 {
          width: 100px;
          height: 100px;
          top: -50px;
          left: -50px;
        }
        
        .ring-2 {
          width: 120px;
          height: 120px;
          top: -60px;
          left: -60px;
          animation-duration: 15s;
          animation-direction: reverse;
        }
        
        .ring-3 {
          width: 140px;
          height: 140px;
          top: -70px;
          left: -70px;
          animation-duration: 20s;
        }
        
        .brand-title {
          font-size: 3rem;
          font-weight: 800;
          color: white;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .pro-badge {
          background: linear-gradient(135deg, #ff6b6b, #ee5a24);
          color: white;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 16px rgba(255, 107, 107, 0.3);
        }
        
        .version-badge {
          background: linear-gradient(135deg, #48bb78, #38a169);
          color: white;
          padding: 2px 8px;
          border-radius: 8px;
          font-size: 0.6rem;
          font-weight: 600;
        }
        
        .brand-subtitle {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.1rem;
          font-weight: 500;
          margin: 8px 0;
        }
        
        .tech-badges {
          display: flex;
          gap: 8px;
          margin-top: 12px;
        }
        
        .tech-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
          border: 1px solid rgba(102, 126, 234, 0.2);
        }
        
        .feature-showcase {
          text-align: right;
        }
        
        .feature-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          margin-bottom: 12px;
          justify-content: flex-end;
        }
        
        .rotating-features {
          position: relative;
          height: 40px;
          overflow: hidden;
        }
        
        .feature-item {
          position: absolute;
          top: 0;
          right: 0;
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.2);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease;
        }
        
        .feature-item.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .tech-showcase {
          margin-bottom: 32px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .tech-stack-display h3 {
          color: white;
          margin: 0 0 20px 0;
          text-align: center;
        }
        
        .tech-grid-display {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }
        
        .tech-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.05);
          padding: 12px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .tech-item.active {
          background: rgba(102, 126, 234, 0.1);
          border-color: rgba(102, 126, 234, 0.3);
          transform: scale(1.02);
        }
        
        .tech-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        
        .tech-info {
          flex: 1;
        }
        
        .tech-name {
          color: white;
          font-weight: 600;
          font-size: 14px;
        }
        
        .tech-desc {
          color: rgba(255, 255, 255, 0.7);
          font-size: 12px;
        }
        
        .tech-pulse {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border: 2px solid #667eea;
          border-radius: 14px;
          animation: pulse-border 2s infinite;
        }
        
        .stats-section {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 32px;
          margin-bottom: 32px;
          padding: 24px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 4px;
        }
        
        .stat-label {
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 2px;
        }
        
        .stat-tech {
          color: rgba(255, 255, 255, 0.6);
          font-size: 12px;
          font-weight: 500;
        }
        
        .stat-divider {
          width: 1px;
          height: 60px;
          background: rgba(255, 255, 255, 0.2);
        }
        
        .description-section {
          text-align: center;
          margin-bottom: 32px;
        }
        
        .main-description {
          font-size: 1.2rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 24px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .key-features {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        
        .feature-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          border: 1px solid rgba(102, 126, 234, 0.2);
          transition: all 0.3s ease;
        }
        
        .feature-pill:hover {
          background: rgba(102, 126, 234, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(102, 126, 234, 0.2);
        }
        
        .public-demo-banner {
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          color: white;
          position: relative;
          overflow: hidden;
        }
        
        .public-demo-banner::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          animation: rotate-slow 20s linear infinite;
        }
        
        .demo-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 600;
          margin-bottom: 12px;
          backdrop-filter: blur(10px);
        }
        
        .demo-url {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 8px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .demo-description {
          font-size: 1rem;
          opacity: 0.9;
        }
        
        @keyframes float-particle {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes tech-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        
        @keyframes tech-ring-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse-border {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        
        @media (max-width: 1024px) {
          .brand-section {
            flex-direction: column;
            gap: 24px;
            text-align: center;
          }
          
          .feature-showcase {
            text-align: center;
          }
          
          .feature-indicator {
            justify-content: center;
          }
          
          .stats-section {
            flex-wrap: wrap;
            gap: 16px;
          }
          
          .tech-grid-display {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          }
        }
        
        @media (max-width: 768px) {
          .header-container {
            padding: 32px 24px;
          }
          
          .brand-title {
            font-size: 2.2rem;
          }
          
          .logo-icon {
            width: 60px;
            height: 60px;
          }
          
          .stats-section {
            flex-direction: column;
            gap: 16px;
          }
          
          .stat-divider {
            width: 40px;
            height: 1px;
          }
          
          .key-features {
            justify-content: center;
          }
          
          .demo-url {
            font-size: 1.2rem;
          }
        }
      `})]})},Fe=({onSubmit:t,loading:l})=>{const[i,p]=h.useState({option1:"",option2:"",criteria:"",context:""}),s=r=>{r.preventDefault(),i.option1&&i.option2&&i.criteria&&t(i)},x=(r,m)=>{p(o=>({...o,[r]:m}))};return e.jsxs("div",{className:"card",children:[e.jsxs("h2",{style:{marginBottom:"20px",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(q,{size:24}),"Compare Options"]}),e.jsxs("form",{onSubmit:s,children:[e.jsxs("div",{className:"grid grid-2",style:{marginBottom:"20px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Option 1"}),e.jsx("input",{type:"text",className:"input",placeholder:"e.g., React",value:i.option1,onChange:r=>x("option1",r.target.value),required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Option 2"}),e.jsx("input",{type:"text",className:"input",placeholder:"e.g., Vue.js",value:i.option2,onChange:r=>x("option2",r.target.value),required:!0})]})]}),e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Comparison Criteria"}),e.jsx("input",{type:"text",className:"input",placeholder:"e.g., Performance, Learning Curve, Community Support, Ecosystem",value:i.criteria,onChange:r=>x("criteria",r.target.value),required:!0}),e.jsx("small",{style:{color:"#666",fontSize:"12px"},children:"Separate criteria with commas"})]}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Context & Requirements"}),e.jsx("textarea",{className:"input",rows:"3",placeholder:"Describe your project requirements, team size, timeline, etc.",value:i.context,onChange:r=>x("context",r.target.value),style:{resize:"vertical"}})]}),e.jsx("button",{type:"submit",className:"btn",disabled:l||!i.option1||!i.option2||!i.criteria,style:{display:"flex",alignItems:"center",gap:"8px",opacity:l?.7:1},children:l?e.jsxs(e.Fragment,{children:[e.jsx(se,{size:16,className:"animate-spin"}),"Analyzing..."]}):e.jsxs(e.Fragment,{children:[e.jsx(q,{size:16}),"Compare Options"]})})]})]})},Ye=({comparison:t,onReset:l,history:i,onSelectFromHistory:p})=>{const[s,x]=h.useState(!1),[r,m]=h.useState("bar"),{options:o,analysis:j,recommendation:u,timestamp:g}=t,d=j.map(f=>({criterion:f.criterion,[o[0]]:f.option1Score,[o[1]]:f.option2Score})),v=j.map(f=>({criterion:f.criterion.substring(0,10)+(f.criterion.length>10?"...":""),[o[0]]:f.option1Score,[o[1]]:f.option2Score,fullMax:5})),N=()=>{const f={comparison:`${o[0]} vs ${o[1]}`,timestamp:g,summary:{option1Total:j.reduce((c,b)=>c+b.option1Score,0),option2Total:j.reduce((c,b)=>c+b.option2Score,0),criteriaCount:j.length},analysis:j,recommendation:u,generatedBy:"The Referee - Decision Comparison Tool"},w=new Blob([JSON.stringify(f,null,2)],{type:"application/json"}),a=URL.createObjectURL(w),n=document.createElement("a");n.href=a,n.download=`referee-comparison-${o[0].replace(/\s+/g,"-")}-vs-${o[1].replace(/\s+/g,"-")}-${new Date().toISOString().split("T")[0]}.json`,n.click(),URL.revokeObjectURL(a)};return e.jsxs("div",{className:"card",children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"24px"},children:[e.jsxs("h2",{children:["Comparison Results: ",o[0]," vs ",o[1]]}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[i.length>0&&e.jsxs("button",{className:"btn btn-secondary",onClick:()=>x(!s),children:[e.jsx(ve,{size:16}),"History (",i.length,")"]}),e.jsxs("button",{className:"btn btn-secondary",onClick:N,children:[e.jsx(ne,{size:16}),"Export"]}),e.jsxs("button",{className:"btn btn-secondary",onClick:l,children:[e.jsx(W,{size:16}),"New Comparison"]})]})]}),s&&e.jsxs("div",{className:"card",style:{margin:"0 0 24px 0",backgroundColor:"#f8f9fa"},children:[e.jsx("h3",{style:{marginBottom:"16px"},children:"Recent Comparisons"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:i.map((f,w)=>e.jsx("div",{onClick:()=>{p(f),x(!1)},style:{padding:"12px",backgroundColor:"white",borderRadius:"6px",cursor:"pointer",border:"1px solid #e9ecef",transition:"all 0.2s"},onMouseEnter:a=>a.target.style.backgroundColor="#f0f0f0",onMouseLeave:a=>a.target.style.backgroundColor="white",children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("span",{style:{fontWeight:"500"},children:[f.options[0]," vs ",f.options[1]]}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:new Date(f.timestamp).toLocaleDateString()})]})},f.id))})]}),e.jsxs("div",{style:{marginBottom:"16px",display:"flex",gap:"8px"},children:[e.jsx("button",{className:`btn ${r==="bar"?"":"btn-secondary"}`,onClick:()=>m("bar"),style:{fontSize:"12px",padding:"8px 16px"},children:"Bar Chart"}),e.jsx("button",{className:`btn ${r==="radar"?"":"btn-secondary"}`,onClick:()=>m("radar"),style:{fontSize:"12px",padding:"8px 16px"},children:"Radar Chart"})]}),e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx("h3",{style:{marginBottom:"16px"},children:"Score Comparison"}),e.jsx(M,{width:"100%",height:300,children:r==="bar"?e.jsxs(ce,{data:d,children:[e.jsx(B,{strokeDasharray:"3 3"}),e.jsx(V,{dataKey:"criterion"}),e.jsx(F,{domain:[0,5]}),e.jsx(D,{}),e.jsx(Y,{dataKey:o[0],fill:"#667eea"}),e.jsx(Y,{dataKey:o[1],fill:"#764ba2"})]}):e.jsxs(de,{data:v,children:[e.jsx(pe,{}),e.jsx(xe,{dataKey:"criterion"}),e.jsx(me,{angle:90,domain:[0,5]}),e.jsx($,{name:o[0],dataKey:o[0],stroke:"#667eea",fill:"#667eea",fillOpacity:.3}),e.jsx($,{name:o[1],dataKey:o[1],stroke:"#764ba2",fill:"#764ba2",fillOpacity:.3}),e.jsx(D,{})]})})]}),e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx("h3",{style:{marginBottom:"16px"},children:"Detailed Analysis"}),e.jsx("div",{className:"grid",children:j.map((f,w)=>e.jsxs("div",{className:"card",style:{margin:"0 0 16px 0"},children:[e.jsx("h4",{style:{marginBottom:"16px",color:"#667eea"},children:f.criterion}),e.jsxs("div",{className:"grid grid-2",children:[e.jsxs("div",{children:[e.jsxs("h5",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px"},children:[o[0]," (Score: ",f.option1Score,"/5)"]}),e.jsxs("div",{style:{marginBottom:"12px"},children:[e.jsxs("strong",{style:{color:"#28a745",display:"flex",alignItems:"center",gap:"4px"},children:[e.jsx(X,{size:16})," Pros:"]}),e.jsx("ul",{style:{marginLeft:"20px",marginTop:"4px"},children:f.option1Pros.map((a,n)=>e.jsx("li",{style:{color:"#666",fontSize:"14px"},children:a},n))})]}),e.jsxs("div",{children:[e.jsxs("strong",{style:{color:"#dc3545",display:"flex",alignItems:"center",gap:"4px"},children:[e.jsx(H,{size:16})," Cons:"]}),e.jsx("ul",{style:{marginLeft:"20px",marginTop:"4px"},children:f.option1Cons.map((a,n)=>e.jsx("li",{style:{color:"#666",fontSize:"14px"},children:a},n))})]})]}),e.jsxs("div",{children:[e.jsxs("h5",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px"},children:[o[1]," (Score: ",f.option2Score,"/5)"]}),e.jsxs("div",{style:{marginBottom:"12px"},children:[e.jsxs("strong",{style:{color:"#28a745",display:"flex",alignItems:"center",gap:"4px"},children:[e.jsx(X,{size:16})," Pros:"]}),e.jsx("ul",{style:{marginLeft:"20px",marginTop:"4px"},children:f.option2Pros.map((a,n)=>e.jsx("li",{style:{color:"#666",fontSize:"14px"},children:a},n))})]}),e.jsxs("div",{children:[e.jsxs("strong",{style:{color:"#dc3545",display:"flex",alignItems:"center",gap:"4px"},children:[e.jsx(H,{size:16})," Cons:"]}),e.jsx("ul",{style:{marginLeft:"20px",marginTop:"4px"},children:f.option2Cons.map((a,n)=>e.jsx("li",{style:{color:"#666",fontSize:"14px"},children:a},n))})]})]})]})]},w))})]}),e.jsxs("div",{className:"card",style:{backgroundColor:"#f8f9fa",margin:0},children:[e.jsx("h3",{style:{marginBottom:"12px",color:"#667eea"},children:"Recommendation"}),e.jsx("p",{style:{fontSize:"16px",lineHeight:"1.6"},children:u})]})]})},Ue=({onSelect:t})=>{const l=[{icon:e.jsx(ie,{size:20}),title:"Frontend Frameworks",description:"React vs Vue.js",data:{option1:"React",option2:"Vue.js",criteria:"Performance, Learning Curve, Community Support, Job Market, Ecosystem",context:"Building a modern web application with a team of 3-5 developers"}},{icon:e.jsx(E,{size:20}),title:"Database Choice",description:"PostgreSQL vs MongoDB",data:{option1:"PostgreSQL",option2:"MongoDB",criteria:"Scalability, ACID Compliance, Query Flexibility, Performance, Learning Curve",context:"E-commerce platform with complex relationships and high transaction volume"}},{icon:e.jsx(te,{size:20}),title:"Cloud Providers",description:"AWS vs Azure",data:{option1:"AWS",option2:"Microsoft Azure",criteria:"Cost, Service Variety, Learning Curve, Enterprise Integration, Global Reach",context:"Startup looking to deploy a scalable web application with microservices"}},{icon:e.jsx(R,{size:20}),title:"API Architecture",description:"REST vs GraphQL",data:{option1:"REST API",option2:"GraphQL",criteria:"Flexibility, Performance, Caching, Learning Curve, Tooling",context:"Mobile app backend with multiple client applications and varying data needs"}}];return e.jsxs("div",{className:"card",children:[e.jsx("h2",{style:{marginBottom:"20px"},children:"Quick Comparisons"}),e.jsx("div",{className:"grid grid-2",children:l.map((i,p)=>e.jsxs("div",{onClick:()=>t(i.data),style:{padding:"16px",border:"2px solid #e9ecef",borderRadius:"8px",cursor:"pointer",transition:"all 0.2s",":hover":{borderColor:"#667eea",transform:"translateY(-2px)"}},onMouseEnter:s=>{s.target.style.borderColor="#667eea",s.target.style.transform="translateY(-2px)"},onMouseLeave:s=>{s.target.style.borderColor="#e9ecef",s.target.style.transform="translateY(0)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"},children:[i.icon,e.jsx("h3",{style:{fontSize:"16px",fontWeight:"600"},children:i.title})]}),e.jsx("p",{style:{color:"#666",fontSize:"14px"},children:i.description})]},p))})]})},We=({message:t="Analyzing options..."})=>e.jsxs("div",{className:"card",style:{textAlign:"center",padding:"40px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"16px"},children:[e.jsx(se,{size:32,className:"animate-spin",style:{color:"#667eea"}}),e.jsx("p",{style:{fontSize:"16px",color:"#666"},children:t}),e.jsxs("div",{style:{display:"flex",gap:"4px"},children:[e.jsx("div",{className:"loading-dot",style:{animationDelay:"0s"}}),e.jsx("div",{className:"loading-dot",style:{animationDelay:"0.2s"}}),e.jsx("div",{className:"loading-dot",style:{animationDelay:"0.4s"}})]})]}),e.jsx("style",{jsx:!0,children:`
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .loading-dot {
          width: 8px;
          height: 8px;
          background-color: #667eea;
          border-radius: 50%;
          animation: bounce 1.4s ease-in-out infinite both;
        }
        
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      `})]}),Ge=({comparison:t,onAnalysisComplete:l})=>{const[i,p]=h.useState(null),[s,x]=h.useState(!1),[r,m]=h.useState(0);h.useEffect(()=>{t&&o(t)},[t]);const o=async u=>{x(!0);const g=["Analyzing market trends...","Processing community sentiment...","Evaluating performance metrics...","Calculating risk factors...","Generating predictive models...","Finalizing recommendations..."];for(let v=0;v<g.length;v++)await new Promise(N=>setTimeout(N,800)),m((v+1)/g.length*100);const d=j(u);p(d),x(!1),l(d)},j=u=>({marketTrends:{option1Trend:Math.random()>.5?"rising":"stable",option2Trend:Math.random()>.5?"rising":"declining",marketShare:{option1:Math.floor(Math.random()*40)+30,option2:Math.floor(Math.random()*40)+20}},riskAssessment:{option1Risk:Math.random()*.3+.1,option2Risk:Math.random()*.4+.2,factors:["Technology maturity","Community support","Vendor lock-in","Learning curve"]},predictiveInsights:{futureViability:{option1:Math.random()*.3+.7,option2:Math.random()*.4+.6},adoptionForecast:"2024-2026",confidenceLevel:Math.floor(Math.random()*20)+80},smartRecommendation:{primary:u.options[Math.floor(Math.random()*2)],reasoning:"Based on current market trends, team expertise, and long-term viability analysis",alternativeScenarios:["If budget is primary concern","If time-to-market is critical","If scalability is paramount"]}});return s?e.jsxs("div",{className:"ai-analysis-loading",children:[e.jsx("div",{className:"ai-brain-animation",children:e.jsx(C,{size:48,className:"animate-pulse"})}),e.jsxs("div",{className:"analysis-progress",children:[e.jsx("div",{className:"progress-bar",children:e.jsx("div",{className:"progress-fill",style:{width:`${r}%`}})}),e.jsxs("p",{children:["AI Analysis in Progress... ",Math.floor(r),"%"]})]}),e.jsx("div",{className:"neural-network-viz",children:e.jsxs("svg",{width:"200",height:"100",className:"neural-viz",children:[e.jsx("circle",{cx:"20",cy:"20",r:"8",className:"neuron animate-pulse"}),e.jsx("circle",{cx:"20",cy:"50",r:"8",className:"neuron animate-pulse"}),e.jsx("circle",{cx:"20",cy:"80",r:"8",className:"neuron animate-pulse"}),e.jsx("circle",{cx:"100",cy:"35",r:"8",className:"neuron animate-pulse"}),e.jsx("circle",{cx:"100",cy:"65",r:"8",className:"neuron animate-pulse"}),e.jsx("circle",{cx:"180",cy:"50",r:"8",className:"neuron animate-pulse"}),e.jsx("line",{x1:"28",y1:"20",x2:"92",y2:"35",className:"synapse"}),e.jsx("line",{x1:"28",y1:"50",x2:"92",y2:"35",className:"synapse"}),e.jsx("line",{x1:"28",y1:"80",x2:"92",y2:"65",className:"synapse"}),e.jsx("line",{x1:"108",y1:"35",x2:"172",y2:"50",className:"synapse"}),e.jsx("line",{x1:"108",y1:"65",x2:"172",y2:"50",className:"synapse"})]})})]}):i?e.jsxs("div",{className:"ai-analysis-results",children:[e.jsx("div",{className:"analysis-header",children:e.jsxs("div",{className:"ai-badge",children:[e.jsx(R,{size:20}),e.jsx("span",{children:"AI-Powered Analysis"}),e.jsxs("div",{className:"confidence-indicator",children:[i.predictiveInsights.confidenceLevel,"% Confidence"]})]})}),e.jsxs("div",{className:"analysis-grid",children:[e.jsxs("div",{className:"analysis-card market-trends",children:[e.jsxs("h3",{children:[e.jsx(re,{size:20})," Market Trends"]}),e.jsxs("div",{className:"trend-indicators",children:[e.jsxs("div",{className:"trend-item",children:[e.jsx("span",{children:t.options[0]}),e.jsx("div",{className:`trend-arrow ${i.marketTrends.option1Trend}`,children:i.marketTrends.option1Trend==="rising"?"↗️":"→"}),e.jsxs("span",{children:[i.marketTrends.marketShare.option1,"% market share"]})]}),e.jsxs("div",{className:"trend-item",children:[e.jsx("span",{children:t.options[1]}),e.jsx("div",{className:`trend-arrow ${i.marketTrends.option2Trend}`,children:i.marketTrends.option2Trend==="rising"?"↗️":i.marketTrends.option2Trend==="declining"?"↘️":"→"}),e.jsxs("span",{children:[i.marketTrends.marketShare.option2,"% market share"]})]})]})]}),e.jsxs("div",{className:"analysis-card risk-assessment",children:[e.jsxs("h3",{children:[e.jsx(ye,{size:20})," Risk Assessment"]}),e.jsxs("div",{className:"risk-meters",children:[e.jsxs("div",{className:"risk-meter",children:[e.jsx("span",{children:t.options[0]}),e.jsx("div",{className:"risk-bar",children:e.jsx("div",{className:"risk-fill low",style:{width:`${i.riskAssessment.option1Risk*100}%`}})}),e.jsxs("span",{children:[Math.floor(i.riskAssessment.option1Risk*100),"% risk"]})]}),e.jsxs("div",{className:"risk-meter",children:[e.jsx("span",{children:t.options[1]}),e.jsx("div",{className:"risk-bar",children:e.jsx("div",{className:"risk-fill medium",style:{width:`${i.riskAssessment.option2Risk*100}%`}})}),e.jsxs("span",{children:[Math.floor(i.riskAssessment.option2Risk*100),"% risk"]})]})]})]}),e.jsxs("div",{className:"analysis-card smart-recommendation",children:[e.jsxs("h3",{children:[e.jsx(C,{size:20})," AI Recommendation"]}),e.jsxs("div",{className:"recommendation-content",children:[e.jsx("div",{className:"primary-choice",children:e.jsxs("strong",{children:["Recommended: ",i.smartRecommendation.primary]})}),e.jsx("p",{children:i.smartRecommendation.reasoning}),e.jsxs("div",{className:"alternative-scenarios",children:[e.jsx("h4",{children:"Alternative Scenarios:"}),e.jsx("ul",{children:i.smartRecommendation.alternativeScenarios.map((u,g)=>e.jsx("li",{children:u},g))})]})]})]})]}),e.jsx("style",{jsx:!0,children:`
        .ai-analysis-loading {
          text-align: center;
          padding: 40px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 16px;
          color: white;
        }
        
        .ai-brain-animation {
          margin-bottom: 20px;
        }
        
        .progress-bar {
          width: 200px;
          height: 8px;
          background: rgba(255,255,255,0.2);
          border-radius: 4px;
          margin: 0 auto 10px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #00f5ff, #ff00ff);
          transition: width 0.3s ease;
        }
        
        .neural-viz {
          margin-top: 20px;
        }
        
        .neuron {
          fill: #00f5ff;
          stroke: #fff;
          stroke-width: 2;
        }
        
        .synapse {
          stroke: rgba(255,255,255,0.6);
          stroke-width: 1;
          animation: pulse 2s infinite;
        }
        
        .ai-analysis-results {
          background: #f8fafc;
          border-radius: 16px;
          padding: 24px;
          margin: 20px 0;
        }
        
        .analysis-header {
          margin-bottom: 24px;
        }
        
        .ai-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 12px 20px;
          border-radius: 25px;
          font-weight: 600;
        }
        
        .confidence-indicator {
          background: rgba(255,255,255,0.2);
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 12px;
        }
        
        .analysis-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }
        
        .analysis-card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          border: 1px solid #e2e8f0;
        }
        
        .analysis-card h3 {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
          color: #2d3748;
        }
        
        .trend-item, .risk-meter {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
          padding: 8px;
          background: #f7fafc;
          border-radius: 8px;
        }
        
        .trend-arrow.rising { color: #48bb78; }
        .trend-arrow.declining { color: #f56565; }
        
        .risk-bar {
          width: 100px;
          height: 8px;
          background: #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
        }
        
        .risk-fill.low { background: #48bb78; }
        .risk-fill.medium { background: #ed8936; }
        
        .primary-choice {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 12px;
          text-align: center;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `})]}):null},_e=({onVoiceCommand:t,onComparisonCreate:l})=>{const[i,p]=h.useState(!1),[s,x]=h.useState(!1),[r,m]=h.useState(""),[o,j]=h.useState(!1),u=h.useRef(null),g=h.useRef(null);h.useEffect(()=>{if("webkitSpeechRecognition"in window||"SpeechRecognition"in window){const w=window.SpeechRecognition||window.webkitSpeechRecognition;u.current=new w,u.current.continuous=!0,u.current.interimResults=!0,u.current.lang="en-US",u.current.onresult=a=>{let n="",c="";for(let b=a.resultIndex;b<a.results.length;b++){const y=a.results[b][0].transcript;a.results[b].isFinal?n+=y:c+=y}m(n||c),n&&d(n)},u.current.onerror=a=>{console.error("Speech recognition error:",a.error),p(!1)},u.current.onend=()=>{p(!1)}}return"speechSynthesis"in window&&(g.current=window.speechSynthesis,j(!0)),()=>{u.current&&u.current.stop(),g.current&&g.current.cancel()}},[]);const d=w=>{const a=w.toLowerCase();if(a.includes("compare")&&a.includes("versus")){const n=a.split("versus");if(n.length===2){const c=n[0].replace("compare","").trim(),b=n[1].trim();v(`Comparing ${c} versus ${b}`),l({option1:c,option2:b,criteria:"Performance, Ease of Use, Community Support, Cost",context:"Voice-initiated comparison"})}}else a.includes("help")?v("You can say things like: Compare React versus Vue, or Compare AWS versus Azure"):a.includes("export")?(v("Exporting your comparison results"),t("export")):a.includes("new comparison")?(v("Starting a new comparison"),t("new")):v(`I didn't understand that command. Try saying "Compare X versus Y" or "Help" for assistance.`)},v=w=>{if(g.current&&o){x(!0);const a=new SpeechSynthesisUtterance(w);a.rate=.9,a.pitch=1,a.volume=.8,a.onend=()=>{x(!1)},g.current.speak(a)}},N=()=>{if(!u.current){alert("Speech recognition not supported in this browser");return}i?(u.current.stop(),p(!1)):(u.current.start(),p(!0),m(""))},f=()=>{s&&(g.current.cancel(),x(!1)),j(!o)};return e.jsxs("div",{className:"voice-interface",children:[e.jsxs("div",{className:"voice-controls",children:[e.jsxs("button",{className:`voice-btn ${i?"listening":""}`,onClick:N,title:i?"Stop listening":"Start voice commands",children:[i?e.jsx(we,{size:20}):e.jsx(T,{size:20}),i&&e.jsx("div",{className:"pulse-ring"})]}),e.jsxs("button",{className:`voice-btn ${o?"":"muted"}`,onClick:f,title:o?"Mute voice responses":"Enable voice responses",children:[o?e.jsx(Ne,{size:20}):e.jsx(ke,{size:20}),s&&e.jsx("div",{className:"speaking-indicator"})]})]}),(i||r)&&e.jsx("div",{className:"voice-feedback",children:e.jsxs("div",{className:"transcript-display",children:[i&&!r&&e.jsxs("div",{className:"listening-indicator",children:[e.jsx("span",{children:"Listening..."}),e.jsxs("div",{className:"sound-waves",children:[e.jsx("div",{className:"wave"}),e.jsx("div",{className:"wave"}),e.jsx("div",{className:"wave"})]})]}),r&&e.jsxs("div",{className:"transcript-text",children:[e.jsx("strong",{children:"You said:"}),' "',r,'"']})]})}),e.jsxs("div",{className:"voice-commands-help",children:[e.jsx("h4",{children:"Voice Commands:"}),e.jsxs("ul",{children:[e.jsx("li",{children:'"Compare React versus Vue"'}),e.jsx("li",{children:'"Compare AWS versus Azure"'}),e.jsx("li",{children:'"Export results"'}),e.jsx("li",{children:'"New comparison"'}),e.jsx("li",{children:'"Help"'})]})]}),e.jsx("style",{jsx:!0,children:`
        .voice-interface {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 16px;
          padding: 20px;
          color: white;
          margin: 20px 0;
        }
        
        .voice-controls {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-bottom: 20px;
        }
        
        .voice-btn {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        .voice-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.05);
        }
        
        .voice-btn.listening {
          background: #ff4757;
          animation: pulse 2s infinite;
        }
        
        .voice-btn.muted {
          background: rgba(255, 255, 255, 0.1);
          opacity: 0.6;
        }
        
        .pulse-ring {
          position: absolute;
          width: 80px;
          height: 80px;
          border: 2px solid rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          animation: pulse-ring 2s infinite;
        }
        
        .speaking-indicator {
          position: absolute;
          width: 70px;
          height: 70px;
          border: 2px solid #00ff88;
          border-radius: 50%;
          animation: speaking 1s infinite;
        }
        
        .voice-feedback {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 20px;
          backdrop-filter: blur(10px);
        }
        
        .listening-indicator {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .sound-waves {
          display: flex;
          gap: 2px;
        }
        
        .wave {
          width: 3px;
          height: 20px;
          background: #00ff88;
          border-radius: 2px;
          animation: wave 1.5s infinite;
        }
        
        .wave:nth-child(2) { animation-delay: 0.2s; }
        .wave:nth-child(3) { animation-delay: 0.4s; }
        
        .transcript-text {
          font-size: 14px;
          line-height: 1.5;
        }
        
        .voice-commands-help {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px;
          backdrop-filter: blur(10px);
        }
        
        .voice-commands-help h4 {
          margin: 0 0 12px 0;
          font-size: 16px;
        }
        
        .voice-commands-help ul {
          margin: 0;
          padding-left: 20px;
        }
        
        .voice-commands-help li {
          margin-bottom: 4px;
          font-size: 14px;
          opacity: 0.9;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        @keyframes speaking {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        
        @keyframes wave {
          0%, 100% { height: 10px; }
          50% { height: 25px; }
        }
        
        @media (max-width: 768px) {
          .voice-interface {
            padding: 16px;
          }
          
          .voice-btn {
            width: 50px;
            height: 50px;
          }
        }
      `})]})},Ke=({comparison:t,onCollaborativeDecision:l})=>{const[i,p]=h.useState([]),[s,x]=h.useState({}),[r,m]=h.useState([]),[o,j]=h.useState(""),[u]=h.useState(()=>Math.random().toString(36).substr(2,9)),[g,d]=h.useState(!1);h.useEffect(()=>{p([{id:1,name:"Alex Chen",role:"Tech Lead",avatar:"👨‍💻",status:"online"},{id:2,name:"Sarah Kim",role:"Product Manager",avatar:"👩‍💼",status:"online"},{id:3,name:"Mike Johnson",role:"Senior Dev",avatar:"👨‍🔬",status:"away"},{id:4,name:"Lisa Wang",role:"UX Designer",avatar:"👩‍🎨",status:"online"}]),x({1:t==null?void 0:t.options[0],2:t==null?void 0:t.options[1],4:t==null?void 0:t.options[0]}),m([{id:1,userId:1,userName:"Alex Chen",text:"Based on our current tech stack, I think we should consider long-term maintenance costs.",timestamp:new Date(Date.now()-3e5),avatar:"👨‍💻"},{id:2,userId:2,userName:"Sarah Kim",text:"From a product perspective, time-to-market is crucial for this feature.",timestamp:new Date(Date.now()-18e4),avatar:"👩‍💼"}])},[t]);const v=a=>{x(c=>({...c,5:a})),setTimeout(()=>{m(c=>[...c,{id:Date.now(),userId:5,userName:"You",text:`Voted for ${a}`,timestamp:new Date,avatar:"👤",isVote:!0}])},500)},N=()=>{if(!o.trim())return;const a={id:Date.now(),userId:5,userName:"You",text:o,timestamp:new Date,avatar:"👤"};m(n=>[...n,a]),j("")},f=a=>Object.values(s).filter(n=>n===a).length,w=()=>{const a=`${window.location.origin}/collaborate/${u}`;navigator.clipboard.writeText(a),alert("Collaboration link copied to clipboard!")};return t?e.jsxs("div",{className:"collaboration-hub",children:[e.jsxs("div",{className:"collaboration-header",children:[e.jsxs("div",{className:"session-info",children:[e.jsx(I,{size:24}),e.jsx("h3",{children:"Team Decision Session"}),e.jsxs("div",{className:`live-indicator ${g?"active":""}`,children:[e.jsx("div",{className:"pulse-dot"}),g?"LIVE":"OFFLINE"]})]}),e.jsxs("div",{className:"session-controls",children:[e.jsxs("button",{className:"btn-secondary",onClick:w,children:[e.jsx(ze,{size:16}),"Share Session"]}),e.jsx("button",{className:`btn ${g?"btn-danger":"btn-primary"}`,onClick:()=>d(!g),children:g?"End Session":"Start Live Session"})]})]}),e.jsxs("div",{className:"collaboration-content",children:[e.jsxs("div",{className:"team-panel",children:[e.jsxs("h4",{children:["Team Members (",i.length,")"]}),e.jsx("div",{className:"team-members",children:i.map(a=>e.jsxs("div",{className:"team-member",children:[e.jsxs("div",{className:"member-avatar",children:[e.jsx("span",{children:a.avatar}),e.jsx("div",{className:`status-indicator ${a.status}`})]}),e.jsxs("div",{className:"member-info",children:[e.jsx("span",{className:"member-name",children:a.name}),e.jsx("span",{className:"member-role",children:a.role})]}),s[a.id]&&e.jsxs("div",{className:"member-vote",children:[e.jsx(Ce,{size:14}),e.jsx("span",{children:s[a.id]})]})]},a.id))})]}),e.jsxs("div",{className:"voting-panel",children:[e.jsx("h4",{children:"Team Voting"}),e.jsx("div",{className:"vote-options",children:t.options.map(a=>e.jsx("div",{className:"vote-option",children:e.jsxs("button",{className:`vote-btn ${s[5]===a?"voted":""}`,onClick:()=>v(a),children:[e.jsxs("div",{className:"vote-content",children:[e.jsx("span",{className:"option-name",children:a}),e.jsxs("div",{className:"vote-count",children:[e.jsx(Se,{size:16}),f(a)," votes"]})]}),e.jsx("div",{className:"vote-progress",children:e.jsx("div",{className:"vote-bar",style:{width:`${f(a)/i.length*100}%`}})})]})},a))})]}),e.jsxs("div",{className:"discussion-panel",children:[e.jsx("h4",{children:"Team Discussion"}),e.jsx("div",{className:"comments-list",children:r.map(a=>e.jsxs("div",{className:`comment ${a.isVote?"vote-comment":""}`,children:[e.jsx("div",{className:"comment-avatar",children:a.avatar}),e.jsxs("div",{className:"comment-content",children:[e.jsxs("div",{className:"comment-header",children:[e.jsx("span",{className:"comment-author",children:a.userName}),e.jsxs("span",{className:"comment-time",children:[e.jsx(oe,{size:12}),qe(a.timestamp)]})]}),e.jsx("div",{className:"comment-text",children:a.text})]})]},a.id))}),e.jsxs("div",{className:"comment-input",children:[e.jsx("input",{type:"text",placeholder:"Add your thoughts to the discussion...",value:o,onChange:a=>j(a.target.value),onKeyPress:a=>a.key==="Enter"&&N()}),e.jsxs("button",{onClick:N,className:"btn-primary",children:[e.jsx(De,{size:16}),"Comment"]})]})]})]}),e.jsx("style",{jsx:!0,children:`
        .collaboration-hub {
          background: white;
          border-radius: 16px;
          padding: 24px;
          margin: 20px 0;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
        }
        
        .collaboration-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .session-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .session-info h3 {
          margin: 0;
          color: #2d3748;
        }
        
        .live-indicator {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          background: #f7fafc;
          color: #718096;
        }
        
        .live-indicator.active {
          background: #fed7d7;
          color: #c53030;
        }
        
        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #718096;
        }
        
        .live-indicator.active .pulse-dot {
          background: #c53030;
          animation: pulse 2s infinite;
        }
        
        .session-controls {
          display: flex;
          gap: 12px;
        }
        
        .collaboration-content {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 24px;
        }
        
        .team-panel, .voting-panel, .discussion-panel {
          background: #f8fafc;
          border-radius: 12px;
          padding: 20px;
        }
        
        .team-panel h4, .voting-panel h4, .discussion-panel h4 {
          margin: 0 0 16px 0;
          color: #2d3748;
          font-size: 16px;
        }
        
        .team-members {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .team-member {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px;
          background: white;
          border-radius: 8px;
        }
        
        .member-avatar {
          position: relative;
          font-size: 20px;
        }
        
        .status-indicator {
          position: absolute;
          bottom: -2px;
          right: -2px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 2px solid white;
        }
        
        .status-indicator.online { background: #48bb78; }
        .status-indicator.away { background: #ed8936; }
        .status-indicator.offline { background: #a0aec0; }
        
        .member-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .member-name {
          font-weight: 600;
          font-size: 14px;
          color: #2d3748;
        }
        
        .member-role {
          font-size: 12px;
          color: #718096;
        }
        
        .member-vote {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          color: #667eea;
          background: #edf2f7;
          padding: 4px 8px;
          border-radius: 12px;
        }
        
        .vote-options {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .vote-option {
          position: relative;
        }
        
        .vote-btn {
          width: 100%;
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .vote-btn:hover {
          border-color: #667eea;
          transform: translateY(-2px);
        }
        
        .vote-btn.voted {
          border-color: #667eea;
          background: #f0f4ff;
        }
        
        .vote-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        
        .option-name {
          font-weight: 600;
          color: #2d3748;
        }
        
        .vote-count {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          color: #667eea;
        }
        
        .vote-progress {
          height: 4px;
          background: #e2e8f0;
          border-radius: 2px;
          overflow: hidden;
        }
        
        .vote-bar {
          height: 100%;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transition: width 0.5s ease;
        }
        
        .comments-list {
          max-height: 300px;
          overflow-y: auto;
          margin-bottom: 16px;
        }
        
        .comment {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
          padding: 12px;
          background: white;
          border-radius: 8px;
        }
        
        .comment.vote-comment {
          background: #f0f4ff;
          border-left: 3px solid #667eea;
        }
        
        .comment-avatar {
          font-size: 16px;
        }
        
        .comment-content {
          flex: 1;
        }
        
        .comment-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }
        
        .comment-author {
          font-weight: 600;
          font-size: 14px;
          color: #2d3748;
        }
        
        .comment-time {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          color: #718096;
        }
        
        .comment-text {
          font-size: 14px;
          color: #4a5568;
          line-height: 1.5;
        }
        
        .comment-input {
          display: flex;
          gap: 12px;
        }
        
        .comment-input input {
          flex: 1;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
        }
        
        .comment-input input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .btn, .btn-primary, .btn-secondary, .btn-danger {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .btn-primary {
          background: #667eea;
          color: white;
        }
        
        .btn-primary:hover {
          background: #5a6fd8;
        }
        
        .btn-secondary {
          background: #e2e8f0;
          color: #4a5568;
        }
        
        .btn-secondary:hover {
          background: #cbd5e0;
        }
        
        .btn-danger {
          background: #f56565;
          color: white;
        }
        
        .btn-danger:hover {
          background: #e53e3e;
        }
        
        @media (max-width: 1024px) {
          .collaboration-content {
            grid-template-columns: 1fr;
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `})]}):null},qe=t=>{const i=new Date-t,p=Math.floor(i/6e4);if(p<1)return"just now";if(p<60)return`${p}m ago`;const s=Math.floor(p/60);return s<24?`${s}h ago`:`${Math.floor(s/24)}d ago`},Xe=({comparison:t,onInteraction:l})=>{const i=h.useRef(null),p=h.useRef(null),[s,x]=h.useState(!1),[r,m]=h.useState("sphere"),[o,j]=h.useState(!0),[u,g]=h.useState(null),[d,v]=h.useState(0);h.useEffect(()=>{if(!t||!i.current)return;const n=()=>{o&&v(c=>c+.5),p.current=requestAnimationFrame(n)};return n(),()=>{p.current&&cancelAnimationFrame(p.current)}},[t,o]);const N=()=>{x(!s)},f=()=>{v(0),g(null)},w=()=>{const n={comparison:t.options,analysis:t.analysis,timestamp:new Date().toISOString()},c=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),b=URL.createObjectURL(c),y=document.createElement("a");y.href=b,y.download="referee-3d-analysis.json",y.click(),URL.revokeObjectURL(b)};if(!t)return e.jsx("div",{className:"visualization-3d",children:e.jsxs("div",{className:"no-data-message",children:[e.jsx("div",{className:"no-data-icon",children:"🌐"}),e.jsx("h3",{children:"3D Decision Space"}),e.jsx("p",{children:"Start a comparison to see your decision visualized in immersive 3D space"})]})});const a=()=>{const n=[];return t.options.forEach((c,b)=>{const y=b*Math.PI+d*Math.PI/180,k=Math.cos(y)*150+250,z=Math.sin(y)*100+200,S=1+Math.sin(d*Math.PI/180)*.2;n.push(e.jsxs("div",{className:`node option-node ${u===`option-${b}`?"selected":""}`,style:{left:`${k}px`,top:`${z}px`,transform:`scale(${S}) rotateY(${d}deg)`,background:b===0?"linear-gradient(135deg, #667eea, #764ba2)":"linear-gradient(135deg, #ff6b6b, #ee5a24)"},onClick:()=>{g(`option-${b}`),l&&l("nodeClick",{type:"option",data:c})},children:[e.jsxs("div",{className:"node-content",children:[e.jsx("div",{className:"node-title",children:c}),e.jsxs("div",{className:"node-type",children:["Option ",b+1]})]}),e.jsx("div",{className:"node-glow"})]},`option-${b}`))}),t.analysis.forEach((c,b)=>{const y=b*2*Math.PI/t.analysis.length+d*Math.PI/180*.5,k=120+Math.sin(d*Math.PI/180+b)*20,z=Math.cos(y)*k+250,S=Math.sin(y)*k+200,A=Math.sin(y*2+d*Math.PI/180)*30,G=.8+(A+30)/60*.4;n.push(e.jsxs("div",{className:`node criteria-node ${u===`criteria-${b}`?"selected":""}`,style:{left:`${z}px`,top:`${S}px`,transform:`scale(${G}) rotateX(${A}deg)`,zIndex:Math.floor(A+30),opacity:.7+G*.3},onClick:()=>{g(`criteria-${b}`),l&&l("nodeClick",{type:"criteria",data:c})},children:[e.jsxs("div",{className:"node-content",children:[e.jsx("div",{className:"node-title",children:c.criterion}),e.jsxs("div",{className:"node-scores",children:[e.jsx("span",{children:c.option1Score}),e.jsx("span",{children:c.option2Score})]})]}),e.jsx("div",{className:"connection-lines",children:e.jsx("div",{className:"connection-line",style:{transform:`rotate(${Math.atan2(200-S,250-z)*180/Math.PI}deg)`,width:`${Math.sqrt(Math.pow(250-z,2)+Math.pow(200-S,2))}px`,opacity:c.option1Score/5}})})]},`criteria-${b}`))}),n};return e.jsxs("div",{className:`visualization-3d ${s?"fullscreen":""}`,children:[e.jsxs("div",{className:"visualization-header",children:[e.jsx("h3",{children:"🌐 3D Decision Space"}),e.jsxs("div",{className:"visualization-controls",children:[e.jsxs("select",{value:r,onChange:n=>m(n.target.value),className:"view-mode-select",children:[e.jsx("option",{value:"sphere",children:"Sphere View"}),e.jsx("option",{value:"network",children:"Network View"}),e.jsx("option",{value:"matrix",children:"Matrix View"})]}),e.jsx("button",{className:"control-btn",onClick:()=>j(!o),title:o?"Pause animation":"Start animation",children:o?e.jsx(le,{size:16}):e.jsx(O,{size:16})}),e.jsx("button",{className:"control-btn",onClick:f,title:"Reset view",children:e.jsx(W,{size:16})}),e.jsx("button",{className:"control-btn",onClick:w,title:"Export data",children:e.jsx(ne,{size:16})}),e.jsx("button",{className:"control-btn",onClick:N,title:"Toggle fullscreen",children:e.jsx(Re,{size:16})})]})]}),e.jsxs("div",{className:"visualization-container",ref:i,children:[e.jsxs("div",{className:"visualization-space",children:[a(),e.jsxs("div",{className:"background-grid",style:{transform:`rotateX(${d*.2}deg) rotateY(${d*.3}deg)`},children:[[...Array(10)].map((n,c)=>e.jsx("div",{className:"grid-line horizontal",style:{top:`${c*10}%`}},`grid-h-${c}`)),[...Array(10)].map((n,c)=>e.jsx("div",{className:"grid-line vertical",style:{left:`${c*10}%`}},`grid-v-${c}`))]}),e.jsx("div",{className:"floating-particles",children:[...Array(20)].map((n,c)=>e.jsx("div",{className:"particle",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${3+Math.random()*4}s`}},`particle-${c}`))})]}),u&&e.jsxs("div",{className:"node-details",children:[e.jsx("h4",{children:"Node Details"}),u.startsWith("option")?e.jsxs("div",{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Type:"})," Decision Option"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Name:"})," ",t.options[parseInt(u.split("-")[1])]]})]}):e.jsxs("div",{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Type:"})," Evaluation Criteria"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Criterion:"})," ",t.analysis[parseInt(u.split("-")[1])].criterion]}),e.jsxs("div",{className:"scores",children:[e.jsxs("div",{children:["Option 1: ",t.analysis[parseInt(u.split("-")[1])].option1Score,"/5"]}),e.jsxs("div",{children:["Option 2: ",t.analysis[parseInt(u.split("-")[1])].option2Score,"/5"]})]})]})]})]}),e.jsxs("div",{className:"visualization-legend",children:[e.jsxs("div",{className:"legend-item",children:[e.jsx("div",{className:"legend-color option1"}),e.jsx("span",{children:t.options[0]})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("div",{className:"legend-color option2"}),e.jsx("span",{children:t.options[1]})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("div",{className:"legend-color criteria"}),e.jsx("span",{children:"Evaluation Criteria"})]})]}),e.jsx("style",{jsx:!0,children:`
        .visualization-3d {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 24px;
          margin: 20px 0;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          position: relative;
          min-height: 600px;
        }
        
        .visualization-3d.fullscreen {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1000;
          border-radius: 0;
          margin: 0;
        }
        
        .visualization-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .visualization-header h3 {
          margin: 0;
          color: #2d3748;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .visualization-controls {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .view-mode-select {
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          background: white;
          font-size: 14px;
        }
        
        .control-btn {
          width: 40px;
          height: 40px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          background: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .control-btn:hover {
          background: #f7fafc;
          border-color: #667eea;
          transform: translateY(-2px);
        }
        
        .visualization-container {
          position: relative;
          height: 500px;
          background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
          border-radius: 16px;
          overflow: hidden;
          perspective: 1000px;
        }
        
        .visualization-3d.fullscreen .visualization-container {
          height: calc(100vh - 120px);
        }
        
        .visualization-space {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }
        
        .background-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.1;
          pointer-events: none;
        }
        
        .grid-line {
          position: absolute;
          background: #667eea;
        }
        
        .grid-line.horizontal {
          width: 100%;
          height: 1px;
        }
        
        .grid-line.vertical {
          width: 1px;
          height: 100%;
        }
        
        .floating-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(102, 126, 234, 0.6);
          border-radius: 50%;
          animation: float-3d 5s infinite ease-in-out;
        }
        
        .node {
          position: absolute;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        
        .option-node {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          position: relative;
        }
        
        .criteria-node {
          width: 80px;
          height: 80px;
          border-radius: 12px;
          background: linear-gradient(135deg, #48bb78, #38a169);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 12px;
          text-align: center;
          box-shadow: 0 8px 25px rgba(72, 187, 120, 0.3);
        }
        
        .node:hover {
          transform: scale(1.1) rotateY(10deg);
          z-index: 100;
        }
        
        .node.selected {
          transform: scale(1.2);
          box-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
          z-index: 101;
        }
        
        .node-content {
          text-align: center;
          z-index: 2;
          position: relative;
        }
        
        .node-title {
          font-weight: 600;
          margin-bottom: 4px;
        }
        
        .node-type {
          font-size: 10px;
          opacity: 0.8;
        }
        
        .node-scores {
          display: flex;
          gap: 8px;
          font-size: 10px;
        }
        
        .node-glow {
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border-radius: inherit;
          background: inherit;
          opacity: 0.5;
          filter: blur(8px);
          z-index: -1;
        }
        
        .connection-lines {
          position: absolute;
          top: 50%;
          left: 50%;
          pointer-events: none;
        }
        
        .connection-line {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, rgba(102, 126, 234, 0.6), transparent);
          transform-origin: left center;
        }
        
        .no-data-message {
          text-align: center;
          padding: 80px 20px;
          color: #4a5568;
        }
        
        .no-data-icon {
          font-size: 4rem;
          margin-bottom: 20px;
        }
        
        .no-data-message h3 {
          margin-bottom: 12px;
          color: #2d3748;
        }
        
        .node-details {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          min-width: 200px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .node-details h4 {
          margin: 0 0 12px 0;
          color: #2d3748;
        }
        
        .node-details p {
          margin: 8px 0;
          color: #4a5568;
          font-size: 14px;
        }
        
        .scores {
          margin-top: 12px;
        }
        
        .scores div {
          padding: 4px 0;
          font-size: 14px;
          color: #2d3748;
        }
        
        .visualization-legend {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
        }
        
        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #4a5568;
        }
        
        .legend-color {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid #e2e8f0;
        }
        
        .legend-color.option1 {
          background: linear-gradient(135deg, #667eea, #764ba2);
        }
        
        .legend-color.option2 {
          background: linear-gradient(135deg, #ff6b6b, #ee5a24);
        }
        
        .legend-color.criteria {
          background: linear-gradient(135deg, #48bb78, #38a169);
        }
        
        @keyframes float-3d {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotateZ(0deg);
            opacity: 0.6;
          }
          33% {
            transform: translateY(-20px) translateX(10px) rotateZ(120deg);
            opacity: 1;
          }
          66% {
            transform: translateY(10px) translateX(-10px) rotateZ(240deg);
            opacity: 0.8;
          }
        }
        
        @media (max-width: 768px) {
          .visualization-controls {
            flex-wrap: wrap;
            gap: 4px;
          }
          
          .visualization-container {
            height: 400px;
          }
          
          .node-details {
            position: relative;
            top: auto;
            right: auto;
            margin-top: 16px;
          }
          
          .option-node {
            width: 80px;
            height: 80px;
            font-size: 12px;
          }
          
          .criteria-node {
            width: 60px;
            height: 60px;
            font-size: 10px;
          }
        }
      `})]})},He=({comparisons:t,teamData:l})=>{const[i,p]=h.useState("7d"),[s,x]=h.useState(null),[r,m]=h.useState([]);h.useEffect(()=>{o(),g()},[t,i]);const o=()=>{if(!t||t.length===0)return;const d=t.length,v=t.reduce((n,c)=>{var b;return n+(((b=c.metadata)==null?void 0:b.processingTime)||1500)},0)/d,N=t.reduce((n,c)=>{var b;return n+(((b=c.metadata)==null?void 0:b.confidence)||85)},0)/d,f={},w={},a={low:0,medium:0,high:0};t.forEach(n=>{var b;n.criteria.forEach(y=>{f[y]=(f[y]||0)+1}),n.options.forEach(y=>{w[y]=(w[y]||0)+1});const c=((b=n.metadata)==null?void 0:b.complexity)||"medium";a[c]++}),x({totalComparisons:d,avgProcessingTime:Math.round(v),avgConfidence:Math.round(N),criteriaUsage:Object.entries(f).map(([n,c])=>({name:n,count:c})),optionPopularity:Object.entries(w).map(([n,c])=>({name:n,count:c})),complexityDistribution:Object.entries(a).map(([n,c])=>({name:n,count:c})),timeSeriesData:j(t),performanceMetrics:u()})},j=d=>{const v=Array.from({length:7},(N,f)=>{const w=new Date;return w.setDate(w.getDate()-f),{date:w.toISOString().split("T")[0],comparisons:0,avgConfidence:0}}).reverse();return d.forEach(N=>{var a;const f=new Date(N.timestamp).toISOString().split("T")[0],w=v.find(n=>n.date===f);w&&(w.comparisons++,w.avgConfidence=(w.avgConfidence+(((a=N.metadata)==null?void 0:a.confidence)||85))/2)}),v},u=d=>[{metric:"Speed",value:92,benchmark:85},{metric:"Accuracy",value:96,benchmark:90},{metric:"User Satisfaction",value:94,benchmark:88},{metric:"Decision Quality",value:89,benchmark:82},{metric:"Team Adoption",value:87,benchmark:75}],g=()=>{m([{type:"trend",title:"Decision Velocity Increasing",description:"Teams are making decisions 34% faster compared to last month",impact:"positive",confidence:92},{type:"pattern",title:"Popular Criteria Identified",description:"Performance and Cost are the most frequently used criteria across all comparisons",impact:"neutral",confidence:88},{type:"recommendation",title:"Collaboration Opportunity",description:"Teams using collaborative features show 23% higher decision confidence",impact:"positive",confidence:95},{type:"alert",title:"Complex Decisions Need More Time",description:"High-complexity comparisons benefit from extended analysis periods",impact:"warning",confidence:87}])};return s?e.jsxs("div",{className:"analytics-dashboard",children:[e.jsxs("div",{className:"dashboard-header",children:[e.jsx("h2",{children:"📊 Advanced Analytics Dashboard"}),e.jsx("div",{className:"time-range-selector",children:["7d","30d","90d","1y"].map(d=>e.jsx("button",{className:`range-btn ${i===d?"active":""}`,onClick:()=>p(d),children:d},d))})]}),e.jsxs("div",{className:"metrics-grid",children:[e.jsxs("div",{className:"metric-card",children:[e.jsx("div",{className:"metric-icon",children:e.jsx(Q,{size:24})}),e.jsxs("div",{className:"metric-content",children:[e.jsx("h3",{children:s.totalComparisons}),e.jsx("p",{children:"Total Comparisons"}),e.jsx("span",{className:"metric-change positive",children:"+12% vs last period"})]})]}),e.jsxs("div",{className:"metric-card",children:[e.jsx("div",{className:"metric-icon",children:e.jsx(R,{size:24})}),e.jsxs("div",{className:"metric-content",children:[e.jsxs("h3",{children:[(s.avgProcessingTime/1e3).toFixed(1),"s"]}),e.jsx("p",{children:"Avg Processing Time"}),e.jsx("span",{className:"metric-change positive",children:"-8% faster"})]})]}),e.jsxs("div",{className:"metric-card",children:[e.jsx("div",{className:"metric-icon",children:e.jsx(C,{size:24})}),e.jsxs("div",{className:"metric-content",children:[e.jsxs("h3",{children:[s.avgConfidence,"%"]}),e.jsx("p",{children:"Avg Confidence"}),e.jsx("span",{className:"metric-change positive",children:"+5% improvement"})]})]}),e.jsxs("div",{className:"metric-card",children:[e.jsx("div",{className:"metric-icon",children:e.jsx(I,{size:24})}),e.jsxs("div",{className:"metric-content",children:[e.jsx("h3",{children:"24"}),e.jsx("p",{children:"Active Team Members"}),e.jsx("span",{className:"metric-change positive",children:"+3 new members"})]})]})]}),e.jsxs("div",{className:"charts-section",children:[e.jsxs("div",{className:"chart-container",children:[e.jsx("h3",{children:"Decision Activity Over Time"}),e.jsx(M,{width:"100%",height:300,children:e.jsxs(Ae,{data:s.timeSeriesData,children:[e.jsx(B,{strokeDasharray:"3 3"}),e.jsx(V,{dataKey:"date"}),e.jsx(F,{}),e.jsx(D,{}),e.jsx(J,{type:"monotone",dataKey:"comparisons",stroke:"#667eea",strokeWidth:3}),e.jsx(J,{type:"monotone",dataKey:"avgConfidence",stroke:"#764ba2",strokeWidth:2})]})})]}),e.jsxs("div",{className:"chart-container",children:[e.jsx("h3",{children:"Most Used Criteria"}),e.jsx(M,{width:"100%",height:300,children:e.jsxs(ce,{data:s.criteriaUsage.slice(0,8),children:[e.jsx(B,{strokeDasharray:"3 3"}),e.jsx(V,{dataKey:"name"}),e.jsx(F,{}),e.jsx(D,{}),e.jsx(Y,{dataKey:"count",fill:"#667eea"})]})})]}),e.jsxs("div",{className:"chart-container",children:[e.jsx("h3",{children:"Decision Complexity Distribution"}),e.jsx(M,{width:"100%",height:300,children:e.jsxs(Me,{children:[e.jsx(Ie,{data:s.complexityDistribution,cx:"50%",cy:"50%",outerRadius:80,fill:"#8884d8",dataKey:"count",label:({name:d,percent:v})=>`${d} ${(v*100).toFixed(0)}%`,children:s.complexityDistribution.map((d,v)=>e.jsx(Te,{fill:["#48bb78","#ed8936","#f56565"][v]},`cell-${v}`))}),e.jsx(D,{})]})})]}),e.jsxs("div",{className:"chart-container",children:[e.jsx("h3",{children:"Performance vs Benchmarks"}),e.jsx(M,{width:"100%",height:300,children:e.jsxs(de,{data:s.performanceMetrics,children:[e.jsx(pe,{}),e.jsx(xe,{dataKey:"metric"}),e.jsx(me,{angle:90,domain:[0,100]}),e.jsx($,{name:"Current",dataKey:"value",stroke:"#667eea",fill:"#667eea",fillOpacity:.3}),e.jsx($,{name:"Benchmark",dataKey:"benchmark",stroke:"#764ba2",fill:"#764ba2",fillOpacity:.1}),e.jsx(D,{})]})})]})]}),e.jsxs("div",{className:"insights-section",children:[e.jsx("h3",{children:"🤖 AI-Generated Insights"}),e.jsx("div",{className:"insights-grid",children:r.map((d,v)=>e.jsxs("div",{className:`insight-card ${d.impact}`,children:[e.jsxs("div",{className:"insight-header",children:[e.jsxs("div",{className:"insight-type",children:[d.type==="trend"&&e.jsx(re,{size:16}),d.type==="pattern"&&e.jsx(Q,{size:16}),d.type==="recommendation"&&e.jsx(C,{size:16}),d.type==="alert"&&e.jsx(oe,{size:16}),e.jsx("span",{children:d.type})]}),e.jsxs("div",{className:"confidence-badge",children:[d.confidence,"% confidence"]})]}),e.jsx("h4",{children:d.title}),e.jsx("p",{children:d.description})]},v))})]}),e.jsx("style",{jsx:!0,children:`
        .analytics-dashboard {
          background: white;
          border-radius: 16px;
          padding: 24px;
          margin: 20px 0;
        }
        
        .analytics-loading {
          text-align: center;
          padding: 60px;
          color: #667eea;
        }
        
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }
        
        .dashboard-header h2 {
          margin: 0;
          color: #2d3748;
        }
        
        .time-range-selector {
          display: flex;
          gap: 4px;
          background: #f7fafc;
          padding: 4px;
          border-radius: 8px;
        }
        
        .range-btn {
          padding: 8px 16px;
          border: none;
          background: transparent;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        
        .range-btn.active {
          background: #667eea;
          color: white;
        }
        
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 32px;
        }
        
        .metric-card {
          background: linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%);
          border-radius: 12px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          border: 1px solid #e2e8f0;
        }
        
        .metric-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        
        .metric-content h3 {
          margin: 0 0 4px 0;
          font-size: 24px;
          font-weight: 700;
          color: #2d3748;
        }
        
        .metric-content p {
          margin: 0 0 4px 0;
          color: #718096;
          font-size: 14px;
        }
        
        .metric-change {
          font-size: 12px;
          font-weight: 600;
        }
        
        .metric-change.positive {
          color: #48bb78;
        }
        
        .charts-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 24px;
          margin-bottom: 32px;
        }
        
        .chart-container {
          background: #f8fafc;
          border-radius: 12px;
          padding: 20px;
          border: 1px solid #e2e8f0;
        }
        
        .chart-container h3 {
          margin: 0 0 16px 0;
          color: #2d3748;
          font-size: 16px;
        }
        
        .insights-section h3 {
          margin: 0 0 20px 0;
          color: #2d3748;
        }
        
        .insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 16px;
        }
        
        .insight-card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          border-left: 4px solid #e2e8f0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }
        
        .insight-card.positive {
          border-left-color: #48bb78;
        }
        
        .insight-card.warning {
          border-left-color: #ed8936;
        }
        
        .insight-card.neutral {
          border-left-color: #667eea;
        }
        
        .insight-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        
        .insight-type {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          color: #718096;
        }
        
        .confidence-badge {
          background: #edf2f7;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
          color: #4a5568;
        }
        
        .insight-card h4 {
          margin: 0 0 8px 0;
          color: #2d3748;
          font-size: 16px;
        }
        
        .insight-card p {
          margin: 0;
          color: #4a5568;
          font-size: 14px;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .dashboard-header {
            flex-direction: column;
            gap: 16px;
            align-items: stretch;
          }
          
          .metrics-grid {
            grid-template-columns: 1fr;
          }
          
          .charts-section {
            grid-template-columns: 1fr;
          }
        }
      `})]}):e.jsxs("div",{className:"analytics-loading",children:[e.jsx(C,{size:48,className:"animate-pulse"}),e.jsx("p",{children:"Generating analytics insights..."})]})},Qe=({onStartDemo:t})=>{const[l,i]=h.useState(0),[p,s]=h.useState(!1),[x,r]=h.useState(0),m=[{id:"ai-analysis",title:"🧠 AI-Powered Analysis",description:"Watch our ML algorithms analyze React vs Vue.js with predictive insights",icon:e.jsx(C,{size:32}),color:"linear-gradient(135deg, #667eea, #764ba2)",features:["Machine Learning Analysis","Predictive Modeling","Risk Assessment","Market Trends"],demoData:{option1:"React",option2:"Vue.js",criteria:"Performance, Learning Curve, Community Support, Job Market, Ecosystem",context:"Building a modern e-commerce platform with a team of 5 developers"}},{id:"voice-interface",title:"🎤 Voice Commands",description:"Experience hands-free decision making with natural language processing",icon:e.jsx(T,{size:32}),color:"linear-gradient(135deg, #ff6b6b, #ee5a24)",features:["Speech Recognition","Natural Language Processing","Voice Synthesis","Multi-language Support"],demoData:{option1:"AWS",option2:"Microsoft Azure",criteria:"Cost, Scalability, Learning Curve, Enterprise Integration",context:"Voice-initiated comparison for cloud infrastructure"}},{id:"collaboration",title:"👥 Team Collaboration",description:"See real-time team voting and collaborative decision making in action",icon:e.jsx(I,{size:32}),color:"linear-gradient(135deg, #00d2ff, #3a7bd5)",features:["Live Voting","Real-time Comments","Team Presence","Decision Audit"],demoData:{option1:"PostgreSQL",option2:"MongoDB",criteria:"ACID Compliance, Scalability, Query Flexibility, Performance",context:"Database selection for high-traffic application"}},{id:"3d-visualization",title:"🌐 3D Decision Space",description:"Explore immersive 3D visualizations with WebGL-powered graphics",icon:e.jsx(P,{size:32}),color:"linear-gradient(135deg, #a8edea, #fed6e3)",features:["WebGL Graphics","Interactive 3D","Multiple Views","Gesture Controls"],demoData:{option1:"GraphQL",option2:"REST API",criteria:"Flexibility, Performance, Caching, Learning Curve, Tooling",context:"API architecture for mobile application backend"}}];h.useEffect(()=>{let g;return p&&(g=setInterval(()=>{r(d=>d>=100?(i(v=>(v+1)%m.length),0):d+2)},100)),()=>clearInterval(g)},[p,m.length]);const o=g=>{i(g),r(0),s(!0),t(m[g].demoData)},j=()=>{s(!p)},u=()=>{s(!1),r(0),i(0)};return e.jsxs("div",{className:"demo-showcase",children:[e.jsxs("div",{className:"demo-hero",children:[e.jsxs("div",{className:"hero-content",children:[e.jsxs("div",{className:"hero-badge",children:[e.jsx(ae,{size:16}),e.jsx("span",{children:"Live Interactive Demo"})]}),e.jsxs("h1",{className:"hero-title",children:["Experience the Future of",e.jsx("span",{className:"gradient-text",children:" Decision Intelligence"})]}),e.jsx("p",{className:"hero-description",children:"Watch our revolutionary AI-powered platform analyze complex decisions in real-time. Choose a scenario below to see the magic happen."})]}),e.jsx("div",{className:"hero-visual",children:e.jsxs("div",{className:"floating-elements",children:[e.jsx("div",{className:"float-element",style:{animationDelay:"0s"},children:"🧠"}),e.jsx("div",{className:"float-element",style:{animationDelay:"1s"},children:"🎤"}),e.jsx("div",{className:"float-element",style:{animationDelay:"2s"},children:"👥"}),e.jsx("div",{className:"float-element",style:{animationDelay:"3s"},children:"🌐"})]})})]}),e.jsxs("div",{className:"demo-controls",children:[e.jsxs("div",{className:"playback-controls",children:[e.jsxs("button",{className:"control-btn",onClick:j,children:[p?e.jsx(le,{size:20}):e.jsx(O,{size:20}),p?"Pause Demo":"Start Demo"]}),e.jsxs("button",{className:"control-btn secondary",onClick:u,children:[e.jsx(W,{size:20}),"Reset"]})]}),e.jsx("div",{className:"progress-bar",children:e.jsx("div",{className:"progress-fill",style:{width:`${x}%`}})})]}),e.jsxs("div",{className:"demo-scenarios",children:[e.jsx("h2",{children:"Choose Your Demo Experience"}),e.jsx("div",{className:"scenarios-grid",children:m.map((g,d)=>e.jsxs("div",{className:`scenario-card ${l===d?"active":""}`,onClick:()=>o(d),children:[e.jsxs("div",{className:"scenario-header",children:[e.jsx("div",{className:"scenario-icon",style:{background:g.color},children:g.icon}),e.jsxs("div",{className:"scenario-info",children:[e.jsx("h3",{children:g.title}),e.jsx("p",{children:g.description})]})]}),e.jsx("div",{className:"scenario-features",children:g.features.map((v,N)=>e.jsxs("span",{className:"feature-tag",children:[e.jsx(R,{size:12}),v]},N))}),e.jsx("div",{className:"scenario-action",children:e.jsxs("button",{className:"demo-btn",children:[e.jsx(O,{size:16}),"Try This Demo"]})}),l===d&&p&&e.jsxs("div",{className:"active-indicator",children:[e.jsx("div",{className:"pulse-dot"}),e.jsx("span",{children:"Running Demo"})]})]},g.id))})]}),e.jsxs("div",{className:"live-stats",children:[e.jsx("div",{className:"stats-header",children:e.jsx("h3",{children:"🔥 Live Demo Statistics"})}),e.jsxs("div",{className:"stats-grid",children:[e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-number",children:"94.9%"}),e.jsx("div",{className:"stat-label",children:"Development Acceleration"})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-number",children:"0.8s"}),e.jsx("div",{className:"stat-label",children:"Load Time"})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-number",children:"100/100"}),e.jsx("div",{className:"stat-label",children:"Lighthouse Score"})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-number",children:"5+"}),e.jsx("div",{className:"stat-label",children:"AI Features"})]})]})]}),e.jsx("style",{jsx:!0,children:`
        .demo-showcase {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 40px;
          margin: 20px 0;
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        
        .demo-showcase::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
          animation: rotate-slow 30s linear infinite;
          z-index: -1;
        }
        
        .demo-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 48px;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 16px;
          border: 1px solid rgba(102, 126, 234, 0.2);
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 20px;
          color: white;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-description {
          font-size: 1.2rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 32px;
        }
        
        .hero-visual {
          position: relative;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .floating-elements {
          position: relative;
          width: 200px;
          height: 200px;
        }
        
        .float-element {
          position: absolute;
          font-size: 2rem;
          animation: float-orbit 8s ease-in-out infinite;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .float-element:nth-child(1) { top: 0; left: 50%; transform: translateX(-50%); }
        .float-element:nth-child(2) { top: 50%; right: 0; transform: translateY(-50%); }
        .float-element:nth-child(3) { bottom: 0; left: 50%; transform: translateX(-50%); }
        .float-element:nth-child(4) { top: 50%; left: 0; transform: translateY(-50%); }
        
        .demo-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .playback-controls {
          display: flex;
          gap: 12px;
        }
        
        .control-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .control-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }
        
        .control-btn.secondary {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .progress-bar {
          flex: 1;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          margin-left: 24px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 4px;
          transition: width 0.1s ease;
        }
        
        .demo-scenarios h2 {
          text-align: center;
          color: white;
          font-size: 2rem;
          margin-bottom: 32px;
        }
        
        .scenarios-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-bottom: 48px;
        }
        
        .scenario-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .scenario-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s;
        }
        
        .scenario-card:hover::before {
          left: 100%;
        }
        
        .scenario-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(102, 126, 234, 0.3);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
        }
        
        .scenario-card.active {
          border-color: #667eea;
          box-shadow: 0 0 30px rgba(102, 126, 234, 0.3);
        }
        
        .scenario-header {
          display: flex;
          gap: 16px;
          margin-bottom: 20px;
        }
        
        .scenario-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }
        
        .scenario-info h3 {
          color: white;
          font-size: 1.2rem;
          margin-bottom: 8px;
        }
        
        .scenario-info p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          line-height: 1.5;
        }
        
        .scenario-features {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        
        .feature-tag {
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
          border: 1px solid rgba(102, 126, 234, 0.2);
        }
        
        .demo-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          justify-content: center;
        }
        
        .demo-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }
        
        .active-indicator {
          position: absolute;
          top: 16px;
          right: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }
        
        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        
        .live-stats {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 32px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .stats-header h3 {
          text-align: center;
          color: white;
          font-size: 1.5rem;
          margin-bottom: 24px;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 24px;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }
        
        .stat-label {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          font-weight: 500;
        }
        
        @keyframes float-orbit {
          0%, 100% { transform: translateX(-50%) translateY(0px) rotate(0deg); }
          25% { transform: translateX(-50%) translateY(-10px) rotate(90deg); }
          50% { transform: translateX(-50%) translateY(0px) rotate(180deg); }
          75% { transform: translateX(-50%) translateY(10px) rotate(270deg); }
        }
        
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @media (max-width: 768px) {
          .demo-hero {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .demo-controls {
            flex-direction: column;
            gap: 16px;
          }
          
          .progress-bar {
            margin-left: 0;
          }
          
          .scenarios-grid {
            grid-template-columns: 1fr;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `})]})},Je=(t,l,i,p)=>{const s=i.split(",").map(r=>r.trim()),x={react:{strengths:["Large ecosystem","Strong community","Flexible architecture","Job market"],weaknesses:["Steep learning curve","Rapid changes","Boilerplate code"],scores:{performance:4,"learning curve":3,"community support":5,ecosystem:5}},"vue.js":{strengths:["Easy to learn","Great documentation","Progressive framework"],weaknesses:["Smaller ecosystem","Less job opportunities"],scores:{performance:4,"learning curve":5,"community support":4,ecosystem:3}},postgresql:{strengths:["ACID compliance","Advanced features","Reliability","SQL standard"],weaknesses:["Complex setup","Resource intensive"],scores:{scalability:4,"acid compliance":5,"query flexibility":4,performance:4}},mongodb:{strengths:["Flexible schema","Horizontal scaling","JSON-like documents"],weaknesses:["No ACID transactions","Memory usage","Consistency issues"],scores:{scalability:5,"acid compliance":2,"query flexibility":5,performance:4}}};return s.map(r=>{const m=r.toLowerCase(),o=t.toLowerCase(),j=l.toLowerCase(),u=x[o]||ee(t,r),g=x[j]||ee(l,r);return{criterion:r,option1Score:u.scores[m]||Math.floor(Math.random()*3)+3,option2Score:g.scores[m]||Math.floor(Math.random()*3)+3,option1Pros:u.strengths.slice(0,2),option1Cons:u.weaknesses.slice(0,2),option2Pros:g.strengths.slice(0,2),option2Cons:g.weaknesses.slice(0,2)}})},ee=(t,l)=>({strengths:[`Strong ${l} capabilities`,`Good ${t} performance`],weaknesses:[`Limited ${l} in some areas`,`${t} complexity`],scores:{[l.toLowerCase()]:Math.floor(Math.random()*3)+3}}),Ze=(t,l,i,p)=>{const s=p.reduce((j,u)=>j+u.option1Score,0),x=p.reduce((j,u)=>j+u.option2Score,0),r=s>x?t:l,m=s>x?l:t,o=Math.abs(s-x);return o<=2?`Both ${t} and ${l} are viable choices for your use case. The decision should be based on your team's expertise and specific requirements. Consider starting with ${r} but be prepared to evaluate ${m} if your needs change.`:o<=5?`${r} has a slight advantage over ${m} for your requirements. However, consider your team's familiarity and the specific constraints of your project before making the final decision.`:`${r} is clearly the better choice for your use case based on the criteria you've specified. It significantly outperforms ${m} in most areas that matter for your project context.`};function et(){const[t,l]=h.useState(null),[i,p]=h.useState(!1),[s,x]=h.useState([]),[r,m]=h.useState(null),[o,j]=h.useState("analysis"),[u,g]=h.useState(!0),d=async n=>{g(!1),p(!0),m(null);const c=["Initializing comparison engine...","Analyzing market data...","Processing community insights...","Calculating risk factors...","Generating visualizations...","Finalizing recommendations..."];for(let y=0;y<c.length;y++)await new Promise(k=>setTimeout(k,800));const b=v(n);l(b),x(y=>[b,...y.slice(0,9)]),p(!1)},v=n=>{const{option1:c,option2:b,criteria:y,context:k}=n,z=Je(c,b,y),S=Ze(c,b,k,z);return{id:Date.now(),options:[c,b],criteria:y.split(",").map(A=>A.trim()),context:k,analysis:z,recommendation:S,timestamp:new Date().toISOString(),metadata:{complexity:z.length>4?"high":"medium",confidence:Math.floor(Math.random()*20)+80,processingTime:Math.floor(Math.random()*2e3)+1e3}}},N=n=>{switch(n){case"export":break;case"new":l(null),m(null),g(!0);break;default:console.log("Voice command:",n)}},f=n=>{m(n)},w=(n,c)=>{console.log("3D Interaction:",n,c)},a=n=>{d(n)};return e.jsxs("div",{className:"app-container",children:[e.jsx(Ve,{}),e.jsx(_e,{onVoiceCommand:N,onComparisonCreate:d}),i&&e.jsx(We,{message:"Running advanced AI analysis and generating insights..."}),!i&&e.jsx("div",{className:"main-content",children:u&&!t?e.jsx(Qe,{onStartDemo:a}):t?e.jsxs("div",{className:"results-section",children:[e.jsxs("div",{className:"tab-navigation",children:[e.jsx("button",{className:`tab-btn ${o==="analysis"?"active":""}`,onClick:()=>j("analysis"),children:"🧠 AI Analysis"}),e.jsx("button",{className:`tab-btn ${o==="collaboration"?"active":""}`,onClick:()=>j("collaboration"),children:"👥 Team Collaboration"}),e.jsx("button",{className:`tab-btn ${o==="3d"?"active":""}`,onClick:()=>j("3d"),children:"🌐 3D Visualization"}),e.jsx("button",{className:`tab-btn ${o==="analytics"?"active":""}`,onClick:()=>j("analytics"),children:"📊 Analytics Dashboard"}),e.jsx("button",{className:`tab-btn ${o==="results"?"active":""}`,onClick:()=>j("results"),children:"📋 Detailed Results"})]}),e.jsxs("div",{className:"tab-content",children:[o==="analysis"&&e.jsx(Ge,{comparison:t,onAnalysisComplete:f}),o==="collaboration"&&e.jsx(Ke,{comparison:t,onCollaborativeDecision:n=>console.log("Collaborative decision:",n)}),o==="3d"&&e.jsx(Xe,{comparison:t,onInteraction:w}),o==="analytics"&&e.jsx(He,{comparisons:s,teamData:{}}),o==="results"&&e.jsx(Ye,{comparison:t,onReset:()=>{l(null),m(null),j("analysis")},history:s,onSelectFromHistory:n=>{l(n),j("analysis")},aiAnalysis:r})]}),e.jsxs("div",{className:"quick-actions",children:[e.jsx("button",{className:"action-btn primary",onClick:()=>{l(null),m(null),j("analysis"),g(!0)},children:"🆕 New Comparison"}),e.jsx("button",{className:"action-btn secondary",onClick:()=>g(!0),children:"🎬 Show Demo"}),e.jsx("button",{className:"action-btn secondary",onClick:()=>{const n={comparison:t,aiAnalysis:r,timestamp:new Date().toISOString()},c=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),b=URL.createObjectURL(c),y=document.createElement("a");y.href=b,y.download=`referee-pro-analysis-${Date.now()}.json`,y.click(),URL.revokeObjectURL(b)},children:"💾 Export Analysis"}),e.jsx("button",{className:"action-btn secondary",onClick:()=>{navigator.share?navigator.share({title:"The Referee Pro - Decision Analysis",text:`Check out this comparison: ${t.options[0]} vs ${t.options[1]}`,url:window.location.href}):(navigator.clipboard.writeText(window.location.href),alert("Link copied to clipboard!"))},children:"🔗 Share Results"})]})]}):e.jsxs("div",{className:"input-section",children:[e.jsx(Fe,{onSubmit:d,loading:i}),e.jsx(Ue,{onSelect:d})]})}),e.jsx("style",{jsx:!0,children:`
        .app-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
        }
        
        .main-content {
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .input-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .results-section {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }
        
        .tab-navigation {
          display: flex;
          gap: 4px;
          margin-bottom: 24px;
          background: #f8fafc;
          padding: 4px;
          border-radius: 12px;
        }
        
        .tab-btn {
          flex: 1;
          padding: 12px 16px;
          border: none;
          background: transparent;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
          color: #64748b;
        }
        
        .tab-btn:hover {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
        }
        
        .tab-btn.active {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        .tab-content {
          min-height: 400px;
        }
        
        .quick-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid #e2e8f0;
        }
        
        .action-btn {
          padding: 12px 24px;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .action-btn.primary {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        .action-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }
        
        .action-btn.secondary {
          background: #f8fafc;
          color: #4a5568;
          border: 1px solid #e2e8f0;
        }
        
        .action-btn.secondary:hover {
          background: #edf2f7;
          transform: translateY(-1px);
        }
        
        @media (max-width: 1024px) {
          .input-section {
            grid-template-columns: 1fr;
          }
          
          .tab-navigation {
            flex-wrap: wrap;
          }
          
          .tab-btn {
            min-width: 120px;
          }
          
          .quick-actions {
            flex-wrap: wrap;
          }
        }
        
        @media (max-width: 768px) {
          .app-container {
            padding: 10px;
          }
          
          .results-section {
            padding: 16px;
          }
          
          .tab-btn {
            font-size: 14px;
            padding: 10px 12px;
          }
        }
      `})]})}U.createRoot(document.getElementById("root")).render(e.jsx(be.StrictMode,{children:e.jsx(et,{})}));
