(this["webpackJsonpbdm-tools"]=this["webpackJsonpbdm-tools"]||[]).push([[0],{20:function(e,t,o){},21:function(e,t,o){},23:function(e,t,o){"use strict";o.r(t);var i=o(0),s=o.n(i),n=o(11),r=o.n(n),a=(o(20),o(2)),c=(o(21),o(25)),l=o(28),d=o(26),p=o(27),j=o(5),b=o(24),u=o(1);var O=function(e){var t=Object(j.divIcon)({iconSize:[32,32],iconAnchor:[16,16],html:'\n      <div class="markerPopup-'.concat(e.className,'">\n        <span class="').concat(e.color,'">').concat(e.title,'</span>\n        <img src="/bdm-desert/static/icons/').concat(e.icon?e.icon:"marker_".concat(e.className),'.png" alt="Marker">\n      </div>')});return Object(u.jsx)(b.a,{position:e.position,icon:t,title:e.title,riseOnHover:!0})};var h=function(){var e=Object(i.useState)([{position:[-7,0],title:"T\xfamulo do Khutum",icon:"zones/tumulo_do_khutum"},{position:[-23,33],title:"Desfiladeiro dos Anci\xf5es",icon:"zones/desfiladeiro_dos_ancioes"},{position:[-38,-78],title:"O\xe1sis Ibellaph",icon:"zones/oasis_ibellaph"},{position:[-52,-18],title:"Templo em Ru\xednas",icon:"zones/templo_em_ruinas"},{position:[31,-39],title:"O\xe1sis da Sombra da Floresta",icon:"zones/oasis_da_sombra_da_floresta"},{position:[28,-80],title:"Pedra Bico de P\xe1ssaro",icon:"zones/pedra_bico_de_passaro"},{position:[47,-72],title:"O\xe1sis \xc1rido",icon:"zones/oasis_arido"},{position:[45,-112],title:"Fronteira Aakman",icon:"zones/fronteira_aakman"},{position:[-10,-90],title:"Torre de Pedra do Desejo",icon:"zones/torre_de_pedra_do_desejo"},{position:[-40,-125],title:"Altar dos Gahaz",icon:"zones/altar_dos_gahaz"},{position:[-67,-120],title:"Bazar de Areia",icon:"zones/bazar_de_areia"},{position:[-51,28],title:"O\xe1sis Thalid",icon:"zones/oasis_thalid"},{position:[0,39],title:"C\xe2mara de Hystria",icon:"zones/camara_de_hystria"},{position:[4,96],title:"O\xe1sis Rakshande",icon:"zones/oasis_rakshande"},{position:[52,2],title:"N\xe1ufrago",icon:"zones/naufrago"},{position:[35,87],title:"Ru\xednas de Hystria",icon:"zones/ruinas_de_hystria"},{position:[-20,113],title:"Santu\xe1rio dos Fogan do Deserto",icon:"zones/santuario_dos_fogan_do_deserto"},{position:[-32,55],title:"Meteorito da Pedra Negra",icon:"zones/meteorito_da_pedra_negra"}]),t=Object(a.a)(e,2),o=t[0],s=(t[1],Object(i.useState)([])),n=Object(a.a)(s,2),r=(n[0],n[1],Object(i.useState)([{position:[-43,-45],title:"Tukar I",color:"red"},{position:[10,-52],title:"Tukar II",color:"red"},{position:[-40,65],title:"Tukar III",color:"red"},{position:[10,30],title:"Tukar IV",color:"red"},{position:[-55,88],title:"Tukar V",color:"red"}])),j=Object(a.a)(r,2),b=j[0],h=(j[1],Object(i.useState)([{position:[-15,-103],title:"Lunas I",color:"green"},{position:[14,-27],title:"Lunas II",color:"green"},{position:[54,-75],title:"Lunas III",color:"green"},{position:[50,75],title:"Lunas IV",color:"green"},{position:[50,10],title:"Lunas V",color:"green"}])),m=Object(a.a)(h,2),x=m[0],I=(m[1],Object(i.useState)([{position:[-55,-30],title:"Serrett I",color:"blue"},{position:[-27,50],title:"Serrett II",color:"blue"},{position:[-44,70],title:"Serrett III",color:"blue"},{position:[47,-35],title:"Serrett IV",color:"blue"},{position:[31,120],title:"Serrett V",color:"blue"}])),_=Object(a.a)(I,2),g=_[0],z=(_[1],Object(i.useState)([{position:[-57,-55],title:"Shayla I",color:"yellow"},{position:[-55,43],title:"Shayla II",color:"yellow"},{position:[35,-10],title:"Shayla III",color:"yellow"}])),k=Object(a.a)(z,2),S=k[0],f=(k[1],Object(i.useState)([{position:[49,0],title:"Dest\xe9rio I",color:"purple"},{position:[5,35],title:"Dest\xe9rio II",color:"purple"},{position:[-50,105],title:"Dest\xe9rio III",color:"purple"}])),y=Object(a.a)(f,2),v=y[0],D=(y[1],Object(i.useState)([{position:[-23,-47],title:"Olhm I",color:"orange"},{position:[40,110],title:"Olhm II",color:"orange"},{position:[-8,100],title:"Olhm III",color:"orange"}])),N=Object(a.a)(D,2),T=N[0];return N[1],Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{children:Object(u.jsxs)("nav",{children:[Object(u.jsx)("a",{href:"http://iserte.github.io/bdm-pinkgear",children:"Equipamentos Ancestrais"}),Object(u.jsx)("a",{href:"http://iserte.github.io/bdm-desert",children:"Deserto"})]})}),Object(u.jsxs)("span",{children:[Object(u.jsx)("h1",{children:"Templos e Quests Escondidas do Deserto"}),Object(u.jsx)("h4",{children:"Junho/2021"})]}),Object(u.jsxs)(c.a,{id:"map",center:[0,0],zoom:0,minZoom:2,maxZoom:4,maxBounds:[[-70.6,-180],[70.6,180]],style:{backgroundColor:"#FFF"},children:[Object(u.jsx)(l.a,{url:"/bdm-desert/static/tiles/{z}/{x}/{y}.png",noWrap:!0}),Object(u.jsxs)(d.a,{position:"topright",children:[Object(u.jsx)(p.a,{children:o.map((function(e){return Object(u.jsx)(O,{position:e.position,title:e.title,icon:e.icon,className:"zone"})}))}),Object(u.jsx)(d.a.Overlay,{name:"Tukar",checked:!0,children:Object(u.jsx)(p.a,{children:b.map((function(e){return Object(u.jsx)(O,{position:e.position,title:e.title,className:"temple",color:e.color})}))})}),Object(u.jsx)(d.a.Overlay,{name:"Lunas",checked:!0,children:Object(u.jsx)(p.a,{children:x.map((function(e){return Object(u.jsx)(O,{position:e.position,title:e.title,className:"temple",color:e.color})}))})}),Object(u.jsx)(d.a.Overlay,{name:"Serrett",checked:!0,children:Object(u.jsx)(p.a,{children:g.map((function(e){return Object(u.jsx)(O,{position:e.position,title:e.title,className:"temple",color:e.color})}))})}),Object(u.jsx)(d.a.Overlay,{name:"Shayla",checked:!0,children:Object(u.jsx)(p.a,{children:S.map((function(e){return Object(u.jsx)(O,{position:e.position,title:e.title,className:"temple",color:e.color})}))})}),Object(u.jsx)(d.a.Overlay,{name:"Dest\xe9rio",checked:!0,children:Object(u.jsx)(p.a,{children:v.map((function(e){return Object(u.jsx)(O,{position:e.position,title:e.title,className:"temple",color:e.color})}))})}),Object(u.jsx)(d.a.Overlay,{name:"Olhm",checked:!0,children:Object(u.jsx)(p.a,{children:T.map((function(e){return Object(u.jsx)(O,{position:e.position,title:e.title,className:"temple",color:e.color})}))})})]})]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Derrotar Inimigos no Deserto x2000"}),Object(u.jsx)("li",{children:"Escavar x50"}),Object(u.jsx)("li",{children:"Obter Moeda de Edana x35000"}),Object(u.jsx)("li",{children:"Completar Templo de Shayla x1"})]}),Object(u.jsx)("footer",{children:Object(u.jsx)("span",{children:"C\xf3digo de Fama: 3SR77GZYL3RV | Discord: Iserte#3575"})})]})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.e35bc309.chunk.js.map