(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[159],{6723:function(e,n,r){"use strict";r.d(n,{zx:function(){return C}});var t=r(7375),a=r(1604),i=r(9703),l=r(8554),s=r.n(l),o=r(7294),c=r(6450),d=r(917),u=r(1358);function f(){return(f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var m=["label","thickness","speed","emptyColor","className"],p=(0,d.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),h=(0,a.Gp)((function(e,n){var r=(0,a.mq)("Spinner",e),t=(0,a.Lr)(e),l=t.label,s=void 0===l?"Loading...":l,c=t.thickness,d=void 0===c?"2px":c,h=t.speed,x=void 0===h?"0.45s":h,g=t.emptyColor,b=void 0===g?"transparent":g,y=t.className,v=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(t,m),j=(0,i.cx)("chakra-spinner",y),_=f({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:d,borderBottomColor:b,borderLeftColor:b,animation:p+" "+x+" linear infinite"},r);return o.createElement(a.m$.div,f({ref:n,__css:_,className:j},v),s&&o.createElement(u.TX,null,s))}));function x(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}function g(){return(g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}i.Ts&&(h.displayName="Spinner");var b=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],y=(0,c.kr)({strict:!1,name:"ButtonGroupContext"}),v=y[0],j=y[1],_=(0,a.Gp)((function(e,n){var r=e.size,t=e.colorScheme,l=e.variant,s=e.className,c=e.spacing,d=void 0===c?"0.5rem":c,u=e.isAttached,f=e.isDisabled,m=x(e,b),p=(0,i.cx)("chakra-button__group",s),h=o.useMemo((function(){return{size:r,colorScheme:t,variant:l,isDisabled:f}}),[r,t,l,f]),y={display:"inline-flex"};return y=g({},y,u?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:d}}),o.createElement(v,{value:h},o.createElement(a.m$.div,g({ref:n,role:"group",__css:y,className:p},m)))}));i.Ts&&(_.displayName="ButtonGroup");var S=["label","placement","spacing","children","className","__css"],E=function(e){var n=e.label,r=e.placement;e.spacing;var t=e.children,l=void 0===t?o.createElement(h,{color:"currentColor",width:"1em",height:"1em"}):t,s=e.className,c=e.__css,d=x(e,S),u=(0,i.cx)("chakra-button__spinner",s),f="start"===r?"marginEnd":"marginStart",m=o.useMemo((function(){var e;return g(((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"})[f]=n?"0.5rem":0,e.fontSize="1em",e.lineHeight="normal",e),c)}),[c,n,f]);return o.createElement(a.m$.div,g({className:u},d,{__css:m}),l)};i.Ts&&(E.displayName="ButtonSpinner");var N=["children","className"],O=function(e){var n=e.children,r=e.className,t=x(e,N),l=o.isValidElement(n)?o.cloneElement(n,{"aria-hidden":!0,focusable:!1}):n,s=(0,i.cx)("chakra-button__icon",r);return o.createElement(a.m$.span,g({display:"inline-flex",alignSelf:"center",flexShrink:0},t,{className:s}),l)};i.Ts&&(O.displayName="ButtonIcon");var w=["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],C=(0,a.Gp)((function(e,n){var r=j(),l=(0,a.mq)("Button",g({},r,e)),c=(0,a.Lr)(e),d=c.isDisabled,u=void 0===d?null==r?void 0:r.isDisabled:d,f=c.isLoading,m=c.isActive,p=c.isFullWidth,h=c.children,b=c.leftIcon,y=c.rightIcon,v=c.loadingText,_=c.iconSpacing,S=void 0===_?"0.5rem":_,N=c.type,O=c.spinner,C=c.spinnerPlacement,I=void 0===C?"start":C,z=c.className,T=c.as,W=x(c,w),A=o.useMemo((function(){var e,n=s()({},null!=(e=null==l?void 0:l._focus)?e:{},{zIndex:1});return g({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:p?"100%":"auto"},l,!!r&&{_focus:n})}),[l,r,p]),B=function(e){var n=o.useState(!e),r=n[0],t=n[1];return{ref:o.useCallback((function(e){e&&t("BUTTON"===e.tagName)}),[]),type:r?"button":void 0}}(T),R=B.ref,P=B.type,q={rightIcon:y,leftIcon:b,iconSpacing:S,children:h};return o.createElement(a.m$.button,g({disabled:u||f,ref:(0,t.qq)(n,R),as:T,type:null!=N?N:P,"data-active":(0,i.PB)(m),"data-loading":(0,i.PB)(f),__css:A,className:(0,i.cx)("chakra-button",z)},W),f&&"start"===I&&o.createElement(E,{className:"chakra-button__spinner--start",label:v,placement:"start"},O),f?v||o.createElement(a.m$.span,{opacity:0},o.createElement(k,q)):o.createElement(k,q),f&&"end"===I&&o.createElement(E,{className:"chakra-button__spinner--end",label:v,placement:"end"},O))}));function k(e){var n=e.leftIcon,r=e.rightIcon,t=e.children,a=e.iconSpacing;return o.createElement(o.Fragment,null,n&&o.createElement(O,{marginEnd:a},n),t,r&&o.createElement(O,{marginStart:a},r))}i.Ts&&(C.displayName="Button");var I=["icon","children","isRound","aria-label"],z=(0,a.Gp)((function(e,n){var r=e.icon,t=e.children,a=e.isRound,i=e["aria-label"],l=x(e,I),s=r||t,c=o.isValidElement(s)?o.cloneElement(s,{"aria-hidden":!0,focusable:!1}):null;return o.createElement(C,g({padding:"0",borderRadius:a?"full":void 0,ref:n,"aria-label":i},l),c)}));i.Ts&&(z.displayName="IconButton")},1358:function(e,n,r){"use strict";r.d(n,{TX:function(){return l},NL:function(){return i}});var t=r(1604),a=r(9703),i={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},l=(0,t.m$)("span",{baseStyle:i});a.Ts&&(l.displayName="VisuallyHidden");var s=(0,t.m$)("input",{baseStyle:i});a.Ts&&(s.displayName="VisuallyHiddenInput")},6850:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users/create",function(){return r(8493)}])},264:function(e,n,r){"use strict";r.d(n,{I:function(){return c}});var t=r(5893),a=r(9762),i=r(4612);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){l(e,n,r[n])}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function c(e){var n=e.name,r=e.label,l=o(e,["name","label"]);return(0,t.jsxs)(a.NI,{children:[r&&(0,t.jsx)(a.lX,{htmlFor:n,children:r}),(0,t.jsx)(i.II,s({},l,{id:n,bgColor:"gray.900",variant:"filled",focusBorderColor:"pink.500",name:n,_hover:{bgColor:"gray.900"},size:"lg"}))]})}},5141:function(e,n,r){"use strict";r.d(n,{h:function(){return c}});var t=r(5893),a=r(8527),i=r(4612),l=r(894),s=r(5684),o=r(9352);function c(){return(0,t.jsxs)(a.kC,{as:"header",w:"100%",maxWidth:1480,h:"20",mx:"auto",mt:"4",px:"6",align:"center",children:[(0,t.jsxs)(a.xv,{as:"span",display:"flex",fontSize:"3xl",fontWeight:"bold",letterSpacing:"",children:["dashgo"," ",(0,t.jsx)(a.xv,{ml:"1",color:"pink.500",children:"."})]}),(0,t.jsxs)(a.kC,{as:"label",flex:"1",py:"4",px:"8",ml:"6",maxWidth:400,position:"relative",alignSelf:"center",color:"gray.200",bg:"gray.800",borderRadius:"full",children:[(0,t.jsx)(i.II,{color:"gray.50",variant:"unstyled",placeholder:"Buscar na plataforma",_placeholder:{color:"gray.400"}}),(0,t.jsx)(l.JO,{as:o.Qcu,fontSize:"20"})]}),(0,t.jsxs)(a.kC,{align:"center",ml:"auto",children:[(0,t.jsxs)(a.Ug,{spacing:"8",mx:"8",pr:"8",py:"1",color:"gray.300",bordercolor:"gray.700",borderRightWidth:1,children:[(0,t.jsx)(l.JO,{as:o.WqI,fontSize:"20"}),(0,t.jsx)(l.JO,{as:o.zOC,fontSize:"20"})]}),(0,t.jsxs)(a.kC,{children:[(0,t.jsxs)(a.xu,{mr:"4",texAlign:"center",children:[(0,t.jsx)(a.xv,{children:"Rafael Cassiano"}),(0,t.jsx)(a.xv,{color:"gray.300",fontSize:"small",children:"rafael30011@gmail.com"})]}),(0,t.jsx)(s.qE,{size:"md",name:"Rafael Cassiano ",src:"https://scontent.fcgh55-1.fna.fbcdn.net/v/t39.30808-6/231627754_4315451045202644_8623504303640700356_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG0Jk6T_UTefSf2Us89E0jsNZEY5VWRlx81kRjlVZGXH1ufLbnLGr3-iVyIaENEw1qQSdAyR5VO24fffHhif0KQ&_nc_ohc=FK8s6YTA6LgAX-Xjbud&_nc_ht=scontent.fcgh55-1.fna&oh=00_AT-Tud34oPIFt6jcl57IKWztHoHusjYAqAG18jBZa_CFmQ&oe=61EB8D5B"})]})]})]})}},706:function(e,n,r){"use strict";r.d(n,{Y:function(){return s}});var t=r(5893),a=r(8527),i=r(894),l=r(9352),s=function(){return(0,t.jsx)(a.xu,{a:"aside",w:"64",mr:"8",children:(0,t.jsxs)(a.Kq,{spacing:"12",align:"flex-start",children:[(0,t.jsxs)(a.xu,{children:[(0,t.jsx)(a.xv,{fontWeight:"bold",color:"gray.400",fontSize:"small",children:"GERAl"}),(0,t.jsxs)(a.Kq,{spacing:"4",mt:"8",align:"stretch",children:[(0,t.jsxs)(a.rU,{display:"flex",align:"center",children:[(0,t.jsx)(i.JO,{as:l.Ez2,fontSize:"20"}),(0,t.jsx)(a.xv,{ml:"4",fontWeight:"medium",children:"DashBoard"})]}),(0,t.jsxs)(a.rU,{display:"flex",align:"center",children:[(0,t.jsx)(i.JO,{as:l.Nwp,fontSize:"20"}),(0,t.jsx)(a.xv,{ml:"4",fontWeight:"medium",children:"Usuarios"})]})]})]}),(0,t.jsxs)(a.xu,{children:[(0,t.jsx)(a.xv,{fontWeight:"bold",color:"gray.400",fontSize:"small",children:"Automa\xe7\xe2o"}),(0,t.jsxs)(a.Kq,{spacing:"4",mt:"8",align:"stretch",children:[(0,t.jsxs)(a.rU,{display:"flex",align:"center",children:[(0,t.jsx)(i.JO,{as:l.EMH,fontSize:"20"}),(0,t.jsx)(a.xv,{ml:"4",fontWeight:"medium",children:"Formularios"})]}),(0,t.jsxs)(a.rU,{display:"flex",align:"center",children:[(0,t.jsx)(i.JO,{as:l.oDc,fontSize:"20"}),(0,t.jsx)(a.xv,{ml:"4",fontWeight:"medium",children:"Automa\xe7\xe2o"})]})]})]})]})})}},8493:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t=r(5893),a=r(8527),i=r(6723),l=r(5141),s=r(706),o=r(264);function c(){return(0,t.jsxs)(a.xu,{children:[(0,t.jsx)(l.h,{}),(0,t.jsxs)(a.kC,{w:"100%",my:"6",maxWidth:1480,mx:"auto",px:"6",children:[(0,t.jsx)(s.Y,{}),(0,t.jsxs)(a.xu,{flex:"1",borderRadius:8,bgColor:"gray.800",p:"8",children:[(0,t.jsx)(a.X6,{size:"lg",fontWeigth:"normal",children:"Criar usu\xe1rios"}),(0,t.jsx)(a.iz,{my:"6",borderColor:"gray.700"}),(0,t.jsxs)(a.gC,{spacing:"8",children:[(0,t.jsxs)(a.MI,{minChildWidth:"240px",spacing:"8",w:"100%",children:[(0,t.jsx)(o.I,{name:"name",label:"Nome completo"}),(0,t.jsx)(o.I,{name:"email",label:"Email"})]}),(0,t.jsxs)(a.MI,{minChildWidth:"240px",spacing:"8",w:"100%",children:[(0,t.jsx)(o.I,{name:"passoword",type:"password",label:"Senha"}),(0,t.jsx)(o.I,{name:"passoword_confirmation",label:"Confirmacao da senha"})]}),(0,t.jsx)(a.kC,{w:"100%",mt:"8",justify:"flex-end",children:(0,t.jsxs)(a.Ug,{spacing:"4",children:[(0,t.jsx)(i.zx,{colorScheme:"whiteAlpha",children:"Cancelar"}),(0,t.jsx)(i.zx,{colorScheme:"pink",children:"Salvar"})]})})]})]})]})]})}}},function(e){e.O(0,[937,249,368,774,888,179],(function(){return n=6850,e(e.s=n);var n}));var n=e.O();_N_E=n}]);