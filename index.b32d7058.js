!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,c)=>{const a=new URL(e,r);if(self[t].moduleMap[a])return o(self[t].moduleMap[a]);const l=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){c(new Error(`Failed to import: ${e}`)),n(m)},onload(){o(self[t].moduleMap[a]),n(m)}});document.head.appendChild(m)})),self[t].moduleMap={}}}("/twitch-gengar/");
