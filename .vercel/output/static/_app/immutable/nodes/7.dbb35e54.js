import{S as O,i as U,s as Y,e as p,a as D,t as x,m as Z,c as h,b as u,f as a,g as V,d as E,o as B,p as l,j as r,h as K,q as F,r as H,n as S,u as J}from"../chunks/index.6031e960.js";import{g as Q}from"../chunks/navigation.009a91b5.js";function W(b){let s,f,t,o,c,n,e,_,z,I,y,k,P,m,R,i,w,C,q;return{c(){s=p("script"),t=p("script"),c=D(),n=p("div"),e=p("div"),_=p("div"),z=x("Redirecting to payment gateway..."),I=D(),y=p("div"),k=x("Please do not close this tab."),P=D(),m=p("div"),R=x("Incase it does not redirect, please "),i=p("a"),w=x("click here"),this.h()},l(d){const v=Z("svelte-1hhtlpe",document.head);s=h(v,"SCRIPT",{src:!0});var L=u(s);L.forEach(a),t=h(v,"SCRIPT",{src:!0});var M=u(t);M.forEach(a),v.forEach(a),c=V(d),n=h(d,"DIV",{class:!0});var A=u(n);e=h(A,"DIV",{class:!0});var g=u(e);_=h(g,"DIV",{class:!0});var G=u(_);z=E(G,"Redirecting to payment gateway..."),G.forEach(a),I=V(g),y=h(g,"DIV",{class:!0});var N=u(y);k=E(N,"Please do not close this tab."),N.forEach(a),P=V(g),m=h(g,"DIV",{class:!0});var j=u(m);R=E(j,"Incase it does not redirect, please "),i=h(j,"A",{href:!0,class:!0});var T=u(i);w=E(T,"click here"),T.forEach(a),j.forEach(a),g.forEach(a),A.forEach(a),this.h()},h(){B(s.src,f="/rzp/checkout.js")||l(s,"src",f),B(t.src,o="https://checkout.razorpay.com/v1/checkout.js")||l(t,"src",o),document.title="Payment Gateway | Adhyaaya'24",l(_,"class","text-2xl font-bold"),l(y,"class","text-xl font-bold"),l(i,"href",""),l(i,"class","uppercase font-bold"),l(m,"class","text-2xl font-bold"),l(e,"class","flex flex-col items-center justify-center"),l(n,"class","h-full-w-full flex items-center justify-center")},m(d,v){r(document.head,s),r(document.head,t),K(d,c,v),K(d,n,v),r(n,e),r(e,_),r(_,z),r(e,I),r(e,y),r(y,k),r(e,P),r(e,m),r(m,R),r(m,i),r(i,w),C||(q=F(i,"click",H(b[3])),C=!0)},p:S,i:S,o:S,d(d){a(s),a(t),d&&a(c),d&&a(n),C=!1,q()}}}function X(b,s,f){let{data:t}=s,o;const c={key:"PUBLIC_RZP_KEY",amount:t.db.amount,currency:"INR",name:"Adhyaaya'23 | GCOEN",description:`Payment by ${t.db.name} for ${t.db.event_id}, of amount ${t.db.amount/100}`,image:"https://adhyaaya.org/favicon.png",order_id:t.pg.id,prefill:{name:t.db.name,email:t.db.email,contact:t.db.phone},notes:{address:"Government College of Engineering, Nagpur - 440010"},theme:{color:"#3399cc"},handler(e){Q(`/pg/check_status?rzp_pid=${e.razorpay_payment_id}&rzp_oid=${t.pg.id}&rzp_sig=${e.razorpay_signature}`)}};J(()=>{try{f(0,o=new Razorpay(c))}catch(e){alert(e),f(0,o=new Razorpay(c))}o.on("payment.failed",function(e){alert(e.error.description)}),o.open()});const n=()=>{try{f(0,o=new Razorpay(c)),o.on("payment.failed",function(e){alert(e.error.description)}),o.open()}catch(e){alert(e)}};return b.$$set=e=>{"data"in e&&f(2,t=e.data)},[o,c,t,n]}class te extends O{constructor(s){super(),U(this,s,X,W,Y,{data:2})}}export{te as component};