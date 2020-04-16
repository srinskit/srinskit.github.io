(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{124:function(e,t,a){e.exports=a(135)},134:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),l=a.n(i),c=a(8),o=a(9),s=a(10),u=a(11),m=a(5),p=a(196),d=a(197),h=r.a.createContext(void 0),v=a(103),f=a(68),g=a(66),E=Object(v.a)({palette:{type:"dark",background:{default:"#121212"},primary:{main:f.a[500]},secondary:{main:g.a[500]}},overrides:{MuiPaper:{root:{backgroundColor:"rgba(30,30,30)"}},MuiContainer:{root:{paddingTop:"16px",paddingBottom:"16px"}}}}),b=a(101),O=a(38),y=a(104),k=a(176),C=a(88),x=a.n(C),j=a(89),w=a.n(j),T=a(202),S=-2,N=-1,W=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;Object(c.a)(this,a);var r=(n=t.call(this,e)).props,i=r.word,l=r.words;if(n.instructions=[],i&&n.compile(i),l)for(var o=0;o<l.length;++o)n.compile(l[o]);return n.state={text:"",cursorVisible:!0,instructionPtr:0},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.startExec()}},{key:"componentWillUnmount",value:function(){this.stopExec(),clearTimeout(this.instructionSleepTimer)}},{key:"startExec",value:function(){var e=this.props.typeSleep;this.typeTimer=setInterval(this.typeTick.bind(this),e)}},{key:"stopExec",value:function(){clearInterval(this.typeTimer)}},{key:"startBlinking",value:function(){var e=this.props.cursorBlinkSleep;this.blinkTimer=setInterval(this.cursorTick.bind(this),e)}},{key:"stopBlinking",value:function(){clearInterval(this.blinkTimer),this.setState({cursorVisible:!0})}},{key:"pauseExec",value:function(){var e=this.props.cursor;this.stopExec(),"blink"===e&&this.startBlinking()}},{key:"resumeExec",value:function(){var e=this.props.cursor;this.startExec(),"blink"===e&&this.stopBlinking()}},{key:"cursorTick",value:function(){this.setState((function(e){return{cursorVisible:!e.cursorVisible}}))}},{key:"typeTick",value:function(){var e=this,t=this.props.loop;this.setState((function(a){var n=a.text,r=a.instructionPtr,i={};switch(e.instructions[r]){case S:e.pauseExec(),++r,e.instructionSleepTimer=setTimeout(e.resumeExec.bind(e),e.instructions[r]);break;case N:i.text=n.slice(0,-1);break;default:i.text=n+e.instructions[r]}return t?i.instructionPtr=(r+1)%e.instructions.length:r!==e.instructions.length-1?i.instructionPtr=r+1:e.stopExec(),i}))}},{key:"render",value:function(){var e=this.props,t=e.prefix,a=e.suffix,i=e.cursor,l=this.state,c=l.text,o=l.cursorVisible;return r.a.createElement(n.Fragment,null,r.a.createElement(n.Fragment,null,t),r.a.createElement(n.Fragment,null,c),i?r.a.createElement("span",{style:{visibility:o?"visible":"hidden"}},"|"):null,r.a.createElement(n.Fragment,null,a))}},{key:"compile",value:function(e){for(var t=this.props,a=t.clearSleep,n=t.clear,r=0;r<e.length;++r)this.instructions.push(e[r]);if(a&&(this.instructions.push(S),this.instructions.push(a)),n)for(var i=0;i<e.length;++i)this.instructions.push(N)}}]),a}(n.Component);W.defaultProps={loop:!1,clear:!1,cursor:null,prefix:"",suffix:"",word:"",words:[],typeSleep:50,clearSleep:2e3,cursorBlinkSleep:400};var I=W,M=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).navigate=function(t){return e.props.history.push(t)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(y.a,{variant:"h1"},"Hi,"),r.a.createElement(y.a,{variant:"h3",align:"left"},r.a.createElement(I,{prefix:"I speak ",words:["C","C++","Python","Javascript","Tulu"],cursor:"blink",loop:!0,clear:!0})),r.a.createElement(k.a,{className:t.tree,defaultCollapseIcon:r.a.createElement(x.a,null),defaultExpandIcon:r.a.createElement(w.a,null),onNodeToggle:this.handleChange},r.a.createElement(T.a,{nodeId:"1",label:"Demos"},r.a.createElement(T.a,{nodeId:"8",label:"2048",onClick:function(){return e.navigate("/2048")}}),r.a.createElement(T.a,{nodeId:"9",label:"Skyfall",onClick:function(){return e.navigate("/skyfall")}}),r.a.createElement(T.a,{nodeId:"2",label:"Sacrifice",onClick:function(){return e.navigate("/sacrifice")}}),r.a.createElement(T.a,{nodeId:"7",label:"Give me space",onClick:function(){return e.navigate("/GiveMeSpace")}}),r.a.createElement(T.a,{nodeId:"3",label:"Timetable",onClick:function(){return e.navigate("/timetable")}}),r.a.createElement(T.a,{nodeId:"4",label:"Chat",onClick:function(){return e.navigate("/you")}}),r.a.createElement(T.a,{nodeId:"5",label:"Calc",onClick:function(){return e.navigate("/calc")}}),r.a.createElement(T.a,{nodeId:"6",label:"Quora",onClick:function(){return e.navigate("/quora")}}))))}}]),a}(r.a.Component),D=Object(m.a)((function(e){return{root:{padding:e.spacing(2)},tree:{flexGrow:1,maxWidth:400}}}),{withTheme:!0})(M),L=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Contact.")}}]),a}(r.a.Component),F=Object(m.a)((function(e){return{}}),{withTheme:!0})(L),G=a(22),B=a(177),Y=a(136),V=a(200),R=a(186),A=a(178),U=a(184),P=a(65),q=a.n(P),z=a(185),K=a(64),J=a.n(K),H=a(204),Q=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return function(t){var a=Object(G.a)({},e,t.target.value);n.setState(a)}},n.state={input:"",output:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.output,n=t.input;return r.a.createElement(B.a,{maxWidth:"md"},r.a.createElement(Y.a,{className:e.paper},r.a.createElement(A.a,{container:!0,spacing:2},r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement(V.a,{autoFocus:!0,value:n,onChange:this.handleChange("input"),label:"Your text",variant:"outlined",fullWidth:!0,multiline:!0})),a?r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement(V.a,{value:a,onChange:this.handleChange("output"),variant:"outlined",fullWidth:!0,multiline:!0})):null,r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement(U.a,null,r.a.createElement(H.a,{title:"Clear"},r.a.createElement("span",null,r.a.createElement(z.a,{"aria-label":"clear",disabled:!(a||n),onClick:this.onClickClear.bind(this)},r.a.createElement(J.a,null)))),a?r.a.createElement(H.a,{title:"Copy"},r.a.createElement(z.a,{"aria-label":"copy",onClick:this.onClickCopy.bind(this)},r.a.createElement(q.a,null))):null,r.a.createElement(R.a,{onClick:this.onClickRender.bind(this),variant:"outlined",disabled:!n},"Render"))))))}},{key:"onClickRender",value:function(){this.setState({output:X(this.state.input)})}},{key:"onClickClear",value:function(){this.setState({output:"",input:""})}},{key:"onClickCopy",value:function(){var e;e=this.state.output,navigator.clipboard.writeText(e)}}]),a}(r.a.Component);function X(e){var t,a,n=!0,r="";for(a=0;a<e.length;++a)t=e.charAt(a),"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(t)&&(t=n?t.toUpperCase():t.toLowerCase(),n=!n),r+=t;return r}var Z=Object(m.a)((function(e){return{paper:{padding:e.spacing(2)}}}),{withTheme:!0})(Q),$=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return function(t){var a=Object(G.a)({},e,t.target.value);n.setState(a)}},n.state={input:"",output:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.output,n=t.input;return r.a.createElement(B.a,{maxWidth:"md"},r.a.createElement(Y.a,{className:e.paper},r.a.createElement(A.a,{container:!0,spacing:2},r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement(V.a,{autoFocus:!0,value:n,onChange:this.handleChange("input"),label:"Your text",variant:"outlined",fullWidth:!0,multiline:!0})),a?r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement(V.a,{value:a,onChange:this.handleChange("output"),variant:"outlined",fullWidth:!0,multiline:!0})):null,r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement(U.a,null,r.a.createElement(H.a,{title:"Clear"},r.a.createElement("span",null,r.a.createElement(z.a,{"aria-label":"clear",disabled:!(a||n),onClick:this.onClickClear.bind(this)},r.a.createElement(J.a,null)))),a?r.a.createElement(H.a,{title:"Copy"},r.a.createElement(z.a,{"aria-label":"copy",onClick:this.onClickCopy.bind(this)},r.a.createElement(q.a,null))):null,r.a.createElement(R.a,{onClick:this.onClickRender.bind(this),variant:"outlined",disabled:!n},"Render"))))))}},{key:"onClickRender",value:function(){this.setState({output:_(this.state.input)})}},{key:"onClickClear",value:function(){this.setState({output:"",input:""})}},{key:"onClickCopy",value:function(){var e;e=this.state.output,navigator.clipboard.writeText(e)}}]),a}(r.a.Component);function _(e){var t,a,n=e.length?e[0]:"";for(a=1;a<e.length;++a)t=e.charAt(a),"0123456789 abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(t)?n+=" "+t:n+=t;return n}var ee=Object(m.a)((function(e){return{paper:{padding:e.spacing(2)}}}),{withTheme:!0})($),te=a(187),ae=a(106),ne=a(188),re=a(91),ie=a.n(re),le=a(92),ce=a.n(le),oe=Object(te.a)((function(e){return{root:{height:"100%",padding:e.spacing(.5,1),display:"flex",alignItems:"center"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:e.spacing(1)},divider:{height:"90%",margin:e.spacing(.5)}}}));function se(){var e=oe();return r.a.createElement(Y.a,{className:e.root},r.a.createElement(ae.a,{className:e.input,placeholder:"Your message",inputProps:{"aria-label":"type your message"}}),r.a.createElement(z.a,{className:e.iconButton,"aria-label":"search"},r.a.createElement(ie.a,null)),r.a.createElement(ne.a,{className:e.divider,orientation:"vertical"}),r.a.createElement(z.a,{color:"primary",className:e.iconButton,"aria-label":"directions"},r.a.createElement(ce.a,null)))}var ue=a(190),me=a(189),pe=a(191),de=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.text,n=e.image;return r.a.createElement(me.a,{className:t.card},n?r.a.createElement(ue.a,null,r.a.createElement("img",{alt:n,className:t.media,src:n})):null,a?r.a.createElement(pe.a,{className:t.content},r.a.createElement(y.a,null,a)):null)}}]),a}(r.a.Component),he=Object(m.a)((function(e){return{card:{maxWidth:"70%",display:"inline-block"},media:{width:"100%"},content:{}}}),{withTheme:!0})(de),ve=a(93),fe=a.n(ve),ge="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",Ee="Lorem ipsum dolor sit amet.",be=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){return function(a){var n=Object(G.a)({},t,a.target.value);e.setState(n)}},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement("div",{className:e.chat},r.a.createElement(B.a,{maxWidth:"md",className:e.chatContainer},r.a.createElement(A.a,{container:!0,spacing:1},r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement(he,{text:ge})),r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement(he,{text:Ee,image:fe.a})),r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement(he,{text:ge})),r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement(he,{text:Ee}))))),r.a.createElement("div",{className:e.chatInput},r.a.createElement(B.a,{maxWidth:"md",className:e.chatInputContainer},r.a.createElement(se,null))))}}]),a}(r.a.Component),Oe=Object(m.a)((function(e){return{paper:{padding:e.spacing(2)},card:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},chat:{height:"89vh"},chatContainer:{height:"100%",overflowY:"auto"},chatInput:{width:"100%",position:"fixed",bottom:0,height:"11vh"},chatInputContainer:{height:"100%"}}}),{withTheme:!0})(be),ye=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={content:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.classes;this.state.content;return r.a.createElement(B.a,{maxWidth:"md"},r.a.createElement(Y.a,{className:e.paper},r.a.createElement(y.a,{align:"center"},"A Quora proxy will come up here. One day.")))}},{key:"componentDidMount",value:function(){this.props.match.params.query}}]),a}(r.a.Component),ke=Object(m.a)((function(e){return{paper:{padding:e.spacing(2)}}}),{withTheme:!0})(ye),Ce=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(B.a,{maxWidth:"md"},r.a.createElement(Y.a,{className:e.paper},r.a.createElement(y.a,{align:"center"},"A concept calculator will come up here. One day.")))}}]),a}(r.a.Component),xe=Object(m.a)((function(e){return{paper:{padding:e.spacing(2)}}}),{withTheme:!0})(Ce),je=a(94),we=a(192),Te=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.item,n=e.active,i=e.expanded,l=e.onClick,c=e.index;return r.a.createElement(me.a,{className:n?t.cardFocused:t.card},r.a.createElement(ue.a,{onClick:function(){return l(c)}},r.a.createElement("div",{className:n?t.rootFocused:t.root},r.a.createElement("div",{className:t.headWrapper},r.a.createElement("div",null,r.a.createElement(y.a,null,Se(a.startTime))),r.a.createElement("div",{className:t.titleWrapper},r.a.createElement(y.a,{variant:"h6",align:"center",noWrap:!0},a.title)),r.a.createElement("div",null,r.a.createElement(y.a,null,Se(a.endTime)))),i?r.a.createElement("div",null,r.a.createElement("div",{className:t.dividerWrapper},r.a.createElement(ne.a,null)),r.a.createElement("div",null,r.a.createElement(y.a,{align:"center"},a.description))):null)),n?r.a.createElement(we.a,{variant:"determinate",value:a.completed}):null)}}]),a}(r.a.Component);function Se(e){var t=e%60,a=(e-t)/60;return t=(t<10?"0":"")+t,"".concat(a=(a<10?"0":"")+a,":").concat(t)}var Ne=Object(m.a)((function(e){return{card:{margin:e.spacing(2)},cardFocused:{margin:e.spacing(2)},root:{padding:e.spacing(2)},rootFocused:{padding:e.spacing(2,2)},headWrapper:{display:"flex",alignItems:"center"},titleWrapper:{flex:1},dividerWrapper:{padding:e.spacing(2,0)}}}),{withTheme:!0})(Te),We=[{startTime:0,endTime:50,title:"One",description:"Do One. Or don't. YOLO."},{startTime:50,endTime:100,title:"Two",description:"Do Two. Or don't. YOLO."},{startTime:100,endTime:200,title:"Three",description:"Do Three. Or don't. YOLO."},{startTime:200,endTime:300,title:"Four",description:"Do Four. Or don't. YOLO."},{startTime:300,endTime:400,title:"Five",description:"Do Five. Or don't. YOLO."},{startTime:400,endTime:500,title:"Six",description:"Do Six. Or don't. YOLO."},{startTime:500,endTime:600,title:"Seven",description:"Do Seven. Or don't. YOLO."},{startTime:600,endTime:700,title:"Eight",description:"Do Eight. Or don't. YOLO."},{startTime:700,endTime:800,title:"Nine",description:"Do Nine. Or don't. YOLO."},{startTime:800,endTime:900,title:"Ten",description:"Do Ten. Or don't. YOLO."},{startTime:900,endTime:1e3,title:"Eleven",description:"Do Eleven. Or don't. YOLO."},{startTime:1e3,endTime:1440,title:"Twelve",description:"Do Twelve. Or don't. YOLO."}],Ie=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onItemClick=function(e){n.setState((function(t){return{expanded:t.expanded===e?-1:e}}))},n.state={items:We,active:{},expanded:-1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.items,n=t.active,i=t.expanded;return r.a.createElement(B.a,{maxWidth:"md"},a.map((function(t,a){return r.a.createElement(Ne,{index:a,onClick:e.onItemClick,item:t,expanded:a===i,active:n[a],key:a})})))}},{key:"componentDidMount",value:function(){this.updateCompleted(),this.updateTimer=setInterval(this.updateCompleted.bind(this),6e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateTimer)}},{key:"updateCompleted",value:function(){for(var e=this.state.items,t=[],a={},n=new Date,r=60*n.getHours()+n.getMinutes(),i=0;i<e.length;++i){var l=-1,c=e[i].startTime,o=e[i].endTime;c<=r&&r<o&&(l=Math.floor(100*(r-c)/(o-c))),-1!==l?(a[i]=!0,t.push(Object(je.a)({},e[i],{completed:l}))):(a[i]=!1,t.push(e[i]))}this.setState({items:t,active:a})}}]),a}(r.a.Component),Me=Object(m.a)((function(e){return{}}),{withTheme:!0})(Ie),De=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(y.a,{variant:"h2",align:"center"},"To 4 or !4"))}}]),a}(r.a.Component),Le=Object(m.a)((function(e){return{root:{padding:e.spacing(2)}}}),{withTheme:!0})(De),Fe=a(67),Ge=a(95),Be=a.n(Ge),Ye=a(205),Ve=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;Object(c.a)(this,a),n=t.call(this,e);var r=function(){var e=["Age cannot wither her, nor custom stale her infinite variety","Batten down the hatches","Channel surfing","Dead as a doornail","Eeny, meeny, miny, mo","From sea to shining sea","srinskit","The plot of Skyfall is unlike previous Bond films"];return e[(t=e.length,Math.floor(Math.random()*Math.floor(t)))];var t}();return n.state={stage:0,index:0,phrase:r,typographyVariant:n.getVariant(r),err:!1},document.addEventListener("keyup",(function(e){var t=e.key;n.handleKeyUp(t)}),!1),n}return Object(o.a)(a,[{key:"render",value:function(){var e,t=this.props.classes,a=this.state,n=a.phrase,i=a.index,l=(a.stage,a.err),c=a.typographyVariant;return r.a.createElement(B.a,{className:t.root},r.a.createElement(we.a,{variant:"determinate",value:100*i/n.length}),r.a.createElement(y.a,{className:t.phrase,variant:c,align:"center"},r.a.createElement("span",{className:t.done},n.slice(0,i)),r.a.createElement("span",{className:Be()((e={},Object(G.a)(e,t.current,!0),Object(G.a)(e,t.err,l),e))},n[i]),r.a.createElement("span",{className:t.rest},n.slice(i+1))),r.a.createElement(V.a,{autoFocus:!0,fullWidth:!0,style:{display:"none"}}))}},{key:"handleKeyUp",value:function(e){this.setState((function(t){var a=t.phrase,n=t.index;if(a&&n<a.length)return e.toLowerCase()===a[n].toLowerCase()?++n===a.length?{index:n,stage:2}:{index:n,err:!1}:{err:!0}}))}},{key:"onPhraseDone",value:function(){}},{key:"getVariant",value:function(e){var t,a=this.props.width,n=e.length;t=/xs/.test(a)?[22,16,0,0,0,0]:[95,65,47,37,23,0];for(var r=0;r<6;++r)if(n>t[r])return"h".concat(6-r)}}]),a}(r.a.Component);var Re=Object(Ye.a)()(Object(m.a)((function(e){var t;return{root:(t={},Object(G.a)(t,e.breakpoints.down("xs"),{padding:e.spacing(4,4)}),Object(G.a)(t,e.breakpoints.up("sm"),{padding:e.spacing(4,4)}),t),phrase:{padding:e.spacing(4,0)},done:{color:g.a[200]},current:{color:f.a[500]},rest:{color:g.a[800]},err:{color:Fe.a[500]}}}),{withTheme:!0})(Ve)),Ae=a(56),Ue=Object(te.a)((function(e){return{root:{paddingTop:"100%",position:"relative"},tile:{position:"absolute",top:0,left:0,bottom:0,right:0,padding:e.spacing(1)},paper:{width:"100%",height:"100%",animation:"fadein .1s"},textWrapper:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"center"}}}));function Pe(e){var t=e.val,a=Ue();return r.a.createElement("div",{className:a.root},r.a.createElement("div",{className:a.tile},t?r.a.createElement(Y.a,{className:a.paper,elevation:8},r.a.createElement("div",{className:a.textWrapper},r.a.createElement(y.a,{align:"center",variant:"h5"},t))):null))}var qe=a(96),ze=a(201),Ke=a(193),Je=a(194),He=a(195),Qe=a(181),Xe=a(198),Ze=a(206),$e=a(100),_e=a.n($e),et=a(99),tt=a.n(et),at=a(97),nt=a.n(at),rt=a(98),it=a.n(rt),lt=["Up","Down","Left","Right"],ct=0,ot=1,st=2,ut=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;Object(c.a)(this,a),(n=t.call(this,e)).handleSettingsOpen=function(){n.setState({settingsOpen:!0})},n.handleSettingsClose=function(){n.setState({settingsOpen:!1})},n.handleGameOverOpen=function(){n.setState({gameOverOpen:!0})},n.handleGameOverClose=function(){n.setState({gameOverOpen:!1})},n.handleGameReset=function(){n.setState((function(e){return{stage:ct,gameOverOpen:!1,settingsOpen:!1,score:0,tiles:pt(e.gridN,e.gridM)}}))},n.onChangeGridN=function(e){var t=e.target.value;n.setState((function(e){return{gridN:t,tiles:pt(t,e.gridM)}}))},n.onChangeGridM=function(e){var t=e.target.value;n.setState((function(e){return{gridM:t,tiles:pt(e.gridN,t)}}))};n.swipeConfig={};for(var r=0;r<lt.length;++r)n.swipeConfig["onSwiped".concat(lt[r])]=n.onMove.bind(Object(Ae.a)(n),lt[r]);return n.state={stage:ot,settingsOpen:!1,gameOverOpen:!1,score:0,gridN:4,gridM:4,tiles:pt(4,4)},document.addEventListener("keyup",(function(e){var t=e.key;n.handleKeyUp(t)}),!1),n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.width,n=/xs/.test(a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{className:t.root,maxWidth:"sm"},r.a.createElement("div",{className:t.header},r.a.createElement(A.a,{container:!0,justify:"space-between"},r.a.createElement(A.a,{item:!0},r.a.createElement(y.a,{className:t.title,variant:"h2"},"2048")),r.a.createElement(A.a,{item:!0},r.a.createElement(z.a,null,r.a.createElement(nt.a,{fontSize:n?"default":"large"})),r.a.createElement(z.a,{onClick:this.handleGameReset},r.a.createElement(it.a,{fontSize:n?"default":"large"})),r.a.createElement(z.a,{onClick:this.handleSettingsOpen},r.a.createElement(tt.a,{fontSize:n?"default":"large"}))))),this.gameView()),this.settingsView(),this.gameOverView())}},{key:"gameView",value:function(){var e=this.props.classes,t=this.state.tiles;return r.a.createElement(qe.a,this.swipeConfig,r.a.createElement(Y.a,{className:e.grid,variant:"outlined"},t.map((function(t,a){return r.a.createElement("div",{key:"".concat(a),className:e.row},t.map((function(t,n){return r.a.createElement("div",{className:e.tileContainer,key:"".concat(a,",").concat(n)},r.a.createElement(Pe,{val:t}))})))}))))}},{key:"settingsView",value:function(){var e=this.props.classes,t=this.state,a=t.settingsOpen,n=t.gridN,i=t.gridM;return r.a.createElement(ze.a,{open:a,onClose:this.handleSettingsClose,maxWidth:"xs",fullWidth:!0},r.a.createElement(A.a,{container:!0,justify:"space-between"},r.a.createElement(A.a,{item:!0},r.a.createElement(Ke.a,null,"Settings"))),r.a.createElement(Je.a,null,r.a.createElement(He.a,null,"Grid size"),r.a.createElement("div",{className:e.gridSizeSelectorWrapper},r.a.createElement(Qe.a,{variant:"outlined",className:e.formControl},r.a.createElement(Xe.a,{value:n,onChange:this.onChangeGridN},mt())),r.a.createElement(_e.a,{fontSize:"large"}),r.a.createElement(Qe.a,{variant:"outlined",className:e.formControl},r.a.createElement(Xe.a,{value:i,onChange:this.onChangeGridM},mt())))))}},{key:"gameOverView",value:function(){this.props.classes;var e=this.state,t=e.gameOverOpen,a=e.score;return r.a.createElement(ze.a,{open:t,onClose:this.handleGameOverClose,maxWidth:"xs",fullWidth:!0},r.a.createElement(Ke.a,null,"Game Over"),r.a.createElement(Je.a,null,r.a.createElement(He.a,null,"Score: ",a)),r.a.createElement(U.a,null,r.a.createElement(R.a,{fullWidth:!0,variant:"outlined",onClick:this.handleGameOverClose,color:"secondary"},"Back"),r.a.createElement(R.a,{fullWidth:!0,variant:"contained",onClick:this.handleGameReset,color:"primary"},"Reset")))}},{key:"handleKeyUp",value:function(e){switch(e){case"s":case"S":return this.handleSettingsOpen();case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":return this.onMove(e.slice(5))}}},{key:"onMove",value:function(e){var t=this.state,a=t.tiles;if(t.stage===ot){for(var n=a.length,r=a[0].length,i="Up"===e||"Down"===e?r:n,l=function(e,t){for(var a=[],n=0;n<e;++n){a.push([]);for(var r=0;r<t;++r)a[n].push(0)}return a}(n,r),c=0;c<i;++c)gt(l,a,c,e);var o=function(e){for(var t=[],a=[],n=0;n<e.length;++n)for(var r=0;r<e[n].length;++r)e[n][r]||(t.push(n),a.push(r));if(0===a.length)return!1;var i=Et(t.length);return e[t[i]][a[i]]=2,!0}(l);(function(e,t){for(var a=0;a<e.length;++a)for(var n=0;n<t.length;++n)if(e[a][n]!==t[a][n])return!1;return!0})(a,l)||this.setState({tiles:l}),o||this.setState({stage:st,gameOverOpen:!0})}}}]),a}(r.a.Component);function mt(){for(var e=[],t=2;t<=8;++t)e.push(r.a.createElement(Ze.a,{key:t,value:t},t));return e}function pt(e,t){var a=[],n=e*t/10;n=n<1?1:n;for(var r=0;r<e;++r){a.push([]);for(var i=0;i<t;++i)a[r].push(Et(2)?Math.pow(2,1+Et(3)):0)}return a}function dt(e,t){e.push(t)}function ht(e,t,a){for(var n=0;n<t;++n)dt(e,a)}function vt(e,t,a,n){if("row"===n)for(var r=0;r<e[a].length;++r)e[a][r]=t[r];else for(var i=0;i<e.length;++i)e[i][a]=t[i]}function ft(e,t,a){return 0!==t&&(a?(dt(e,t),a=!1):function(e){return e.length>0?e[e.length-1]:null}(e)===t?(!function(e,t){e[e.length-1]=t}(e,2*t),a=!0):(dt(e,t),a=!1)),a}function gt(e,t,a,n){var r=[],i=!0;if("Left"===n){for(var l=0;l<t[a].length;++l)i=ft(r,t[a][l],i);ht(r,t[a].length-r.length,0),vt(e,r,a,"row")}else if("Right"===n){for(var c=t[a].length-1;c>=0;--c)i=ft(r,t[a][c],i);ht(r,t[a].length-r.length,0),r.reverse(),vt(e,r,a,"row")}else if("Up"===n){for(var o=0;o<t.length;++o)i=ft(r,t[o][a],i);ht(r,t.length-r.length,0),vt(e,r,a,"col")}else if("Down"===n){for(var s=t.length-1;s>=0;--s)i=ft(r,t[s][a],i);ht(r,t.length-r.length,0),r.reverse(),vt(e,r,a,"col")}}function Et(e){return Math.floor(Math.random()*Math.floor(e))}var bt=Object(Ye.a)()(Object(m.a)((function(e){return{root:{padding:e.spacing(0,2)},header:{margin:e.spacing(4,0,2,0),padding:e.spacing(0,1)},tools:{},iconButton:{margin:e.spacing(1)},title:{},grid:{touchAction:"none",padding:e.spacing(1)},row:{display:"flex",width:"100%"},tileContainer:{flexGrow:1},settingsPaper:{margin:e.spacing(2,0,2,0),padding:e.spacing(2)},formControl:{margin:e.spacing(1),minWidth:80},gridSizeSelectorWrapper:{display:"flex",alignItems:"center"}}}),{withTheme:!0})(ut)),Ot=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{theme:E},r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null),r.a.createElement(h.Provider,null,r.a.createElement(b.a,null,r.a.createElement("div",null,r.a.createElement(O.c,null,r.a.createElement(O.a,{exact:!0,path:"/",component:D}),r.a.createElement(O.a,{path:"/contact",component:F}),r.a.createElement(O.a,{path:"/sacrifice",component:Z}),r.a.createElement(O.a,{path:"/GiveMeSpace",component:ee}),r.a.createElement(O.a,{path:"/you",component:Oe}),r.a.createElement(O.a,{path:"/quora/:query?",component:ke}),r.a.createElement(O.a,{path:"/calc",component:xe}),r.a.createElement(O.a,{path:"/timetable",component:Me}),r.a.createElement(O.a,{path:"/skyfall",component:Re}),r.a.createElement(O.a,{path:"/2048",component:bt}),r.a.createElement(O.a,{path:"/",component:Le})))))))}}]),a}(r.a.Component),yt=Object(m.a)((function(e){return{}}),{withTheme:!0})(Ot);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(134);l.a.render(r.a.createElement(yt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},93:function(e,t,a){e.exports=a.p+"static/media/1.92d0889a.jpg"}},[[124,1,2]]]);
//# sourceMappingURL=main.a02557c2.chunk.js.map