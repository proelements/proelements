"use strict";(self.webpackChunkelementor_pro_notes=self.webpackChunkelementor_pro_notes||[]).push([[716],{7622:(e,t,n)=>{n.d(t,{default:()=>Wa});var r=n(1594),o=n.n(r),a=n(3254);const i=a.Ay.button`
	all: revert;

	--color: #000;
	--padding: 0;
	--background: transparent;
	--font-weight: 500;
	--font-size: 16px;
	--font-family: Roboto, sans-serif;
	--text-transform: none;
	--letter-spacing: 0;
	--font-style: normal;
	--text-decoration: none;
	--line-height: normal;
	--word-spacing: normal;
	--text-shadow: none;
	--box-shadow: none;
	--border: none;
	--border-radius: 0;

	// Override themes selectors.
	&,
	&&,
	&[type="button"],
	&[type="submit"],
	&[type="reset"],
	&:hover,
	&:focus,
	&:active,
	&:not( :hover ):not( :active ):not( .has-background ),
	&:not( :hover ):not( :active ):not( .has-text-color ) {
		font-family: var( --font-family ) !important;
		font-size: var( --font-size ) !important;
		font-weight: var( --font-weight ) !important;
		text-transform: var( --text-transform ) !important;
		letter-spacing: var( --letter-spacing ) !important;
		font-style: normal !important;
		text-decoration: none !important;
		line-height: normal !important;
		word-spacing: normal !important;
		color: var( --color ) !important;
		background: var( --background ) !important;
		border: var( --border ) !important;
		text-shadow: var( --text-shadow ) !important;
		box-shadow: var( --box-shadow ) !important;
		border-radius: var( --border-radius ) !important;
		padding: var( --padding ) !important;
		outline: none !important;
		width: var( --width, auto ) !important;
		height: var( --height, auto ) !important;
		display: var( --display, inline-block ) !important;
		min-height: revert !important;
	}

	&:before,
	&:after {
		display: none !important;
	}
`;var l=n(7598);const s={contained:{background:"--color-editor-info",border:"--color-editor-info",text:"--color-white",backgroundHover:"--color-editor-info-dark"},outlined:{background:"--color-ghost",border:"--color-gray-400",text:"--color-gray-600",backgroundHover:"--color-darken"},transparent:{background:"--color-ghost",border:"--color-ghost",text:"--color-default"}},c={md:{padding:"--padding-md",fontSize:"--font-size-md"}},p=(0,a.Ay)(i)`
	--color-editor-info: #58d0f5;
	--color-editor-info-dark: #10bcf2;
	--color-default: inherit;
	--color-ghost: transparent;
	--color-white: #fff;
	--color-gray-400: #c2cbd2;
	--color-gray-600: #6d7882;
	--color-darken: rgba( 0, 0, 0, .05 );

	--font-size-md: 13px;
	--padding-md: 8px 12px;

	--padding: var( ${({size:e})=>c[e].padding} );
	--color: var( ${({variant:e})=>s[e].text} );
	--background: var( ${({variant:e})=>s[e].background} );
	--border-color: var( ${({variant:e})=>s[e].border} );
	--border: 1px solid var( --border-color );
	--cursor: pointer;
	--font-weight: 400;
	--font-family: Roboto, sans-serif;
	--font-size: var( ${({size:e})=>c[e].fontSize} );
	--border-radius: 3px;

	font-style: normal !important;
	text-align: center !important;
	line-height: 1 !important;
	cursor: var( --cursor ) !important;
	transition: .3s all !important;

  	&, & * {
	  cursor: var( --cursor ) !important;
	}

	${({disabled:e})=>e&&a.AH`
			opacity: .5;
			pointer-events: none;
			--cursor: not-allowed;
	`}

	${({variant:e})=>"transparent"===e&&a.AH`
			--padding: 0;
	`}

	&:hover, &:focus {
		--background: var(
			${({variant:e})=>s[e].backgroundHover||s[e].background}
		);
	}
`;p.propTypes={variant:l.oneOf(["contained","outlined","transparent"]).isRequired,size:l.oneOf(["md"]).isRequired,disabled:l.bool},p.defaultProps={variant:"contained",size:"md"};const m=p;var d=n(7598);const u={xs:20,sm:25,md:34,lg:80,xl:160},f={active:{background:"--color-editor-info",text:"--color-white"},solid:{background:"--color-editor-info",text:"--color-white"},ghost:{background:"--color-ghost",text:"--color-gray"}},g=a.i7`
  0% {
	opacity: 0;
	transform: scale(.8);
	transform-origin: 50% 100%;
  }

  50% {
	opacity: 1;
	transform: scale(1.2);
	transform-origin: 50% 100%;
  }

  100% {
	opacity: 1;
	transform: scale(1);
	transform-origin: 50% 100%;
  }
`,h=a.Ay.span.withConfig({shouldForwardProp:e=>"children"===e})`
  all: revert;

  --color-editor-info: #58d0f5;
  --color-ghost: #fff;
  --color-white: #fff;
  --color-gray: #a4afb6;
  --color-shadow: rgba(0, 0, 0, 0.2);
  --size: ${({size:e})=>u[e]};
  --position: relative;

  display: grid;
  place-items: center;
  position: relative;
  height: calc(var(--size) * 1px);
  width: calc(var(--size) * 1px);
  line-height: 2.8;
  font-family: Roboto, sans-serif !important;
  font-size: calc(var(--size) * .38px);
  font-weight: 500;
  color: var(${({variant:e})=>f[e].text});
  isolation: isolate;
  animation: .3s ${g} both;
  transition: .3s all;

  ${({muted:e})=>e&&a.AH`
	--color-shadow: transparent;
	opacity: .5 !important;
  `}

  &::before {
	--background-color: var(${({variant:e})=>f[e].background});
	--border-color: var( --background-color );

	content: '';
	display: block;
	position: absolute;
	z-index: -1;
	inset: 0;
	background-color: var( --background-color );
	border: calc(var(--size) / 20 * 1px) solid var(--border-color);
	border-radius: 100% 100% 25% 100%;
	transform: rotate(45deg);

	${({variant:e})=>"active"===e&&a.AH`
		  mask-image: radial-gradient(transparent 30%, #000 32%);
	`}

	${({variant:e})=>"ghost"===e&&a.AH`
		  --border-color: var(--color-gray);
	`}
  }
`;h.propTypes={variant:d.oneOf(["active","solid","ghost"]).isRequired,size:d.oneOf(["xs","sm","md","lg","xl"]).isRequired,muted:d.bool,children:d.oneOfType([d.node,d.arrayOf(d.node)])},h.defaultProps={variant:"solid",size:"md",muted:!1};const y=h;var b=n(1121);const v=(0,a.Ay)(b.i3)`
  fill: #fff;
  margin: 0 10px;
`;var x=n(7940);const w=a.Ay.i`
	margin: 0 !important;
	padding: 0 !important;
`;var E=n(7598);const A={sm:"15px",md:"18px"},k=(0,a.Ay)(i)`
  --color: #a4afb7;
  --background: transparent;
  --padding: 4px;
  --font-size: ${({size:e})=>A[e]};
  --border: none;
  --border-radius: 100%;
  --display: grid;

  transition: 0.2s all;
  place-items: center;
  border-radius: 100%;
  cursor: pointer;

  &:hover, &:focus {
	--background: transparent;
	--color: #6d7882;
	outline: none;
  }

  &:focus {
	--background: #f1f3f5;
  }

  ${({disabled:e})=>e&&a.AH`
	opacity: .5;
	pointer-events: none;
	cursor: not-allowed;
  `}
`,C=o().forwardRef((({name:e,...t},n)=>o().createElement(k,(0,x.A)({},t,{ref:n}),o().createElement(w,{className:e}))));C.displayName="IconButton",C.propTypes={size:E.oneOf(["sm","md"]),name:E.string.isRequired,onClick:E.func,disabled:E.bool},C.defaultProps={size:"md"};const R=C,T=(0,a.Ay)(R)`
  --position-spacing: 4px;

  position: absolute;
  top: var(--position-spacing);
  inset-inline-end: var(--position-spacing);
`;function _(e){return o().createElement(b.bm,{asChild:!0},o().createElement(T,(0,x.A)({},e,{name:"eicon-editor-close",size:"sm"})))}_.propTypes={...b.bm.propTypes};const z=a.i7`
  0% {
	opacity: 0;
	transform: translateY(3px);
  }
  100% {
	opacity: 1;
	transform: translateY(0);
  }
`,$=a.i7`
  0% {
	opacity: 0;
	transform: translateX(-3px);
  }
  100% {
	opacity: 1;
	transform: translateX(0);
  }
`,I=a.i7`
  0% {
	opacity: 0;
	transform: translateY(-3px);
  }
  100% {
	opacity: 1;
	transform: translateY(0);
  }
`,L=a.i7`
  0% {
	opacity: 0;
	transform: translateX(3px);
  }
  100% {
	opacity: 1;
	transform: translateX(0);
  }
`,O=a.i7`
  0% {
	opacity: 1;
  }

  100% {
	opacity: 0;
  }
`,S=a.i7`
  0% {
	transform: rotate(0deg);
  }
  100% {
	transform: rotate(360deg);
  }
`,q=(0,a.Ay)(b.UC)`
  all: revert;

  font-family: Roboto, sans-serif !important;
  font-size: 1em !important;
  font-weight: normal !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: normal !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  background: #fff !important;
  border-radius: 3px !important;
  min-width: 120px !important;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.15) !important;
  animation-duration: 400ms !important;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;

  &[data-state="open"] {
	&[data-side="top"] {
	  animation-name: ${z};
	}

	&[data-side="right"] {
	  animation-name: ${$};
	}

	&[data-side="bottom"] {
	  animation-name: ${I};
	}

	&[data-side="left"] {
	  animation-name: ${L};
	}

    *:focus {
      outline: none;
    }
  }
`,P=b.bL;P.Trigger=b.l9,P.Content=q,P.Arrow=v,P.CloseButton=_,P.propTypes=b.bL.propTypes;const F=P;var M=n(7598);const D={sm:{width:16},md:{width:32},lg:{width:64}},N=a.Ay.img`
	all: revert;

	aspect-ratio: 1 / 1;
	border-radius: 100%;
	height: auto;
	width: ${({size:e})=>D[e].width}px;
`;N.propTypes={size:M.oneOf(["sm","md","lg"]).isRequired,src:M.string.isRequired},N.defaultProps={size:"md"};const H=N;var U=n(2886);const V=(0,a.Ay)(U.UC)`
  all: revert;

  background: #fff !important;
  border-radius: 3px !important;
  min-width: 120px !important;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.15) !important;
  animation-duration: 400ms !important;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;
  padding: 4px !important;

  &[data-state="open"] {
	&[data-side="top"] {
	  animation-name: ${z};
	}

	&[data-side="right"] {
	  animation-name: ${$};
	}

	&[data-side="bottom"] {
	  animation-name: ${I};
	}

	&[data-side="left"] {
	  animation-name: ${L};
	}
  }
`;var W=n(8323);const j=(0,a.Ay)(W.i3)`
  fill: #26292c;
`,K=(0,a.Ay)(W.UC)`
  all: revert;

  font-family: Roboto, sans-serif !important;
  font-size: 12px !important;
  font-weight: normal !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: normal !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  background: #26292c !important;
  color: #fff !important;
  border-radius: 3px !important;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.15) !important;
  padding: 5px 12px !important;
  animation-duration: 400ms !important;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;
  will-change: transform, opacity !important;
  max-width: 150px !important;

  &[data-state="delayed-open"] {
	&[data-side="top"] {
	  animation-name: ${z}
	}

	&[data-side="right"] {
	  animation-name: ${$}
	}

	&[data-side="bottom"] {
	  animation-name: ${I}
	}

	&[data-side="left"] {
	  animation-name: ${L}
	}
  }
`;K.propTypes=W.UC.propTypes,K.defaultProps={side:"top"};const Q=K,B=W.bL;B.Trigger=W.l9,B.Arrow=j,B.Content=Q;const Y=B;var Z=n(7598);const X={default:{hoverTextColor:"#6d7882",hoverIconColor:"#a4afb6"},danger:{hoverTextColor:"#b01b1b",hoverIconColor:"#d9534f"}},G=(0,a.Ay)(w)`
  color: #a4afb6 !important;
  transition: 0.2s all;
`,J=a.Ay.span`
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
`,ee=(0,a.Ay)(U.q7)`
  all: revert;

  font-family: Roboto, sans-serif !important;
  font-size: 11px !important;
  font-weight: 500 !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: 1.2 !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  cursor: pointer !important;
  border-radius: 4px !important;
  padding: 7px 12px !important;
  color: #6d7882 !important;
  transition: 0.2s all !important;

  &[data-disabled] {
	opacity: 0.5 !important;
	cursor: default !important;
  }

  &:focus {
	background: #f1f3f5 !important;
	outline: none !important;

	color: ${({variant:e})=>X[e].hoverTextColor} !important;

	${G} {
	  color: ${({variant:e})=>X[e].hoverIconColor} !important;
	}
  }
`;function te({children:e,icon:t,tooltip:n,...r}){const a=o().createElement(J,null,t&&o().createElement(G,{className:t}),e);return o().createElement(ee,r,n?o().createElement(Y,null,o().createElement(Y.Trigger,{asChild:!0},a),o().createElement(Y.Content,null,n,o().createElement(Y.Arrow,null))):a)}te.propTypes={...te.propTypes,icon:Z.string,tooltip:Z.node,variant:Z.oneOf(["default","danger"])},te.defaultProps={variant:"default"};const ne=(0,a.Ay)(U.i3)`
  fill: #fff;
  margin: 0 10px;
`,re=(0,a.Ay)(U.wv)`
  height: 1px !important;
  background: #f1f3f5 !important;
  margin: 7px 10px !important;
`,oe=U.bL;oe.Trigger=U.l9,oe.Content=V,oe.Item=te,oe.Arrow=ne,oe.Separator=re;const ae=oe;var ie=n(2053);class le{tokenClasses;fallbackTokenClass;parsePipeFunctions;constructor({tokenClasses:e,fallbackTokenClass:t,parsePipeFunctions:n}={}){this.tokenClasses=e,this.fallbackTokenClass=t,this.parsePipeFunctions=n}parse(e){var t;const n=this.extractLexemes(e),r=this.tokenize(n);return function(...e){return(t,...n)=>e.reduce(((e,t)=>t(e,...n)),t)}(...null!==(t=this.parsePipeFunctions)&&void 0!==t?t:[])(r)}extractLexemes(e){return e.trim().split(this.getLexerRegex()).reduce(((e,t)=>(t&&e.push(t),e)),[])}tokenize(e){return e.map((e=>{const t=this.tokenClasses.find((t=>t.isToken(e)));return t?t.create(e):this.fallbackTokenClass?this.fallbackTokenClass.create(e):null})).filter((e=>!!e))}getLexerRegex(){const e=this.tokenClasses.map((e=>e.getPattern()?.source)).filter((e=>!!e));return new RegExp(`(${e.join("|")})`,"igm")}}class se{static type="";type;value;constructor(e){this.value=e,this.type=this.constructor.type}static getPattern(){return null}static isToken(e){return!!e.match(new RegExp(this.getPattern(),"igm"))}static create(e=null){return new this(e)}is(e){return this.type===e.type}}class ce extends se{static type="Email";static getPattern(){return/[\w\-.]+@(?:[\w-]+\.)+[\w-]{2,4}/}}class pe extends se{static type="LineBreak";constructor(e){super(e||"\n")}static getPattern(){return/(?:\r?\n)/}}class me extends se{static type="Paragraph"}class de extends se{static type="Text"}class ue extends se{static type="Content"}class fe extends se{static type="Mention";static handleChar="@";handle;username;constructor(e){super(e),this.handle=ge.create(this.constructor.handleChar),this.username=he.create(e.replace(this.constructor.handleChar,""))}static getPattern(){return new RegExp(`\\B${this.handleChar}[\\w\\-]+`)}}class ge extends se{static type="Handle"}class he extends se{static type="Username"}class ye extends se{static type="Url";static getPattern(){return/https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)/}}class be extends se{static type="Wow";static getPattern(){return/(?:(?:\b(?:yay|wow)\b)|🎉)/}}function ve(e){return e.push(pe.create()),e.reduce(((e,t)=>{let n=t;if(t.is(pe)){const t=function(e,t){for(let n=e.length-1;n>=0;n--)if(t(e[n],n))return n;return-1}(e,(e=>e.is(me)));n=me.create(e.slice(t+1,e.length)),e=e.slice(0,t+1)}return e.push(n),e}),[])}function xe(e){return ue.create(e)}function we({tokenClasses:e,fallbackTokenClass:t,parsePipeFunctions:n}={}){return new le({tokenClasses:null!=e?e:[ce,pe,fe,ye,be],fallbackTokenClass:null!=t?t:de,parsePipeFunctions:null!=n?n:[ve,xe]})}const Ee=2147483647;function Ae(e){const t=we({tokenClasses:[fe],fallbackTokenClass:!1,parsePipeFunctions:[]}).parse(e).map((e=>e.username.value));return[...new Set(t)]}function ke(e){return Object.entries(e).reduce(((e,[t,n])=>null===n?e:("boolean"==typeof n&&(n=n?1:0),{...e,[t]:n})),{})}function Ce(e,{onlyIfNeeded:t=!0,...n}={}){return t&&function(e){const{top:t,left:n,bottom:r,right:o}=e.getBoundingClientRect(),{top:a,right:i,bottom:l,left:s}=e.parentElement.getBoundingClientRect(),c=t>=0&&n>=0&&t<=window.innerHeight&&n<=window.innerWidth,p=t>=a&&o<=i&&r<=l&&n>=s;return c&&p}(e)?Promise.resolve():new Promise((t=>{!function(e,t){new IntersectionObserver(((e,n)=>{e?.[0]?.isIntersecting&&(n.disconnect(),t())})).observe(e)}(e,(()=>{t()})),e.scrollIntoView({behavior:"smooth",block:"center",inline:"center",...n})}))}function Re(e){e.dispatchEvent(new Event("submit",{cancelable:!0,bubbles:!0}))}const Te=a.i7`
  0% {
	opacity: 0;
  }
  100% {
	opacity: 1;
  }
`,_e=a.i7`
  0% {
	opacity: 0;
	transform: translate(-50%, -48%) scale(.96);
  }
  100% {
	opacity: 1;
	transform: translate(-50%, -50%) scale(1);
  }
`,ze=(0,a.Ay)(ie.UC)`
  all: revert;

  font-family: Roboto, sans-serif !important;
  font-size: 1em !important;
  font-weight: normal !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: normal !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  background-color: #fff !important;
  box-shadow: 2px 8px 23px rgba(0, 0, 0, 0.2) !important;
  border-radius: 3px !important;
  width: 375px !important;
  text-align: center !important;
  position: fixed !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  max-height: 85vh !important;
  animation-duration: 150ms !important;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;
  animation-name: ${_e} !important;
  z-index: ${Ee} !important;

  &:focus {
	outline: none !important;
  }
`,$e=(0,a.Ay)(ie.hJ)`
  background-color: rgba(0, 0, 0, 0.5) !important;
  position: fixed !important;
  inset: 0 !important;
  animation-duration: 150ms !important;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;
  animation-name: ${Te} !important;
  z-index: ${Ee} !important;
`;function Ie(e){return o().createElement(ie.ZL,null,o().createElement($e,null),o().createElement(ze,e))}Ie.propTypes={...ie.UC.propTypes};const Le=(0,a.Ay)(ie.hE)`
  all: revert;

  font-family: Roboto, sans-serif !important;
  font-size: 17px !important;
  font-weight: 500 !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: normal !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  margin: 0 !important;
  color: #495157 !important;

  &::before, &::after {
    display: none;
  }
`;Le.propTypes={...ie.hE.propTypes};const Oe=Le,Se=a.Ay.div`
	all: revert;
	box-sizing: border-box;

	&:before,
	&:after {
		display: none !important;
	}
`,qe=(0,a.Ay)(Se)`
  padding: 30px !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 12px !important;
`,Pe=(0,a.Ay)(Se)`
  display: flex;
  align-items: center;
  border-top: 1px solid #d5dadf;

  & > button:not(:first-child) {
	/**
	 * will create a divider between the buttons,
	 * not matter how much buttons exists in the container.
	 */
	border-inline-start: 1px solid #d5dadf;
  }
`,Fe=(0,a.Ay)(ie.VY)`
  all: revert;

  font-family: Roboto, sans-serif !important;
  font-size: 13px !important;
  font-weight: 500 !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: normal !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  margin: 0 !important;
  color: #495157 !important;
`;Fe.propTypes={...ie.VY.propTypes};const Me=Fe,De=(0,a.Ay)(i).attrs((()=>({as:ie.ZD})))`
  --color: #6d7882;
  --padding: 13px;
  --font-size: 16px;
  --border: none;

  margin: 0;
  flex-grow: 1;
  transition: 0.2s all;
  border-radius: 0;

  &:focus, &:hover {
    --background: #f1f3f5;
	--color: #6d7882;
  }
`;De.propTypes={...ie.ZD.propTypes};const Ne=De,He=(0,a.Ay)(i).attrs((()=>({as:ie.rc})))`

  --font-size: 16px;
  --color: #b01b1b;
  --padding: 13px;

  margin: 0;
  flex-grow: 1;
  transition: 0.2s all;
  border: none;
  border-radius: 0;

  &:focus, &:hover {
	--background: #f1f3f5;
	--color: #b01b1b;
  }
`;He.propTypes={...ie.rc.propTypes};const Ue=He,Ve=ie.bL;Ve.Trigger=ie.l9,Ve.Content=Ie,Ve.Description=Me,Ve.DescriptionContainer=qe,Ve.ActionsContainer=Pe,Ve.Title=Oe,Ve.Cancel=Ne,Ve.Action=Ue,Ve.propTypes=ie.bL.propTypes;const We=Ve;class je{init(e={}){return Object.entries(e).forEach((([e,t])=>{this[e]=t})),this}}var Ke=n(2470).__;class Qe extends je{id=null;name="";slug="";avatarUrls={24:null,48:null,96:null};capabilities={};static createFromResponse(e){return(new Qe).init({id:e.id,name:e.name,slug:e.slug,avatarUrls:e.avatar_urls,capabilities:{notes:{read:e.capabilities?.notes?.can_read},post:{edit:e.capabilities?.post?.can_edit}}})}static createDeleted(e=""){const{avatar_defaults:t}=window.top.$e.components.get("notes").config.urls;return(new Qe).init({name:[e,Ke("(deleted user)","elementor-pro")].join(" "),avatarUrls:t})}}class Be extends je{id;type;typeTitle;static createFromResponse(e){return(new Be).init({id:e.id,type:e.type,typeTitle:e.type_title})}}class Ye extends je{id=null;parentId=0;elementId=null;content="";position={x:0,y:0};repliesCount=0;unreadRepliesCount=0;replies=[];author=null;readers=[];isRead=!1;isResolved=!1;routeUrl="";routeTitle="";userCan={};createdAt=null;updatedAt=null;lastActivityAt=null;_formattedLastActivityAt="";_formattedCreatedAt="";static createFromResponse(e){return(new Ye).init({id:e.id,parentId:e.parent_id,elementId:e.element_id,content:e.content,position:e.position,repliesCount:e.replies_count,unreadRepliesCount:e.unread_replies_count,replies:e.replies.map((e=>Ye.createFromResponse(e))),author:e.author?Qe.createFromResponse(e.author):Qe.createDeleted(e.author_display_name),document:e.document?Be.createFromResponse(e.document):null,readers:e.readers?e.readers.map((e=>Qe.createFromResponse(e))):[],isRead:e.is_read,isResolved:e.is_resolved,routeUrl:e.route_url,routeTitle:e.route_title,userCan:e.user_can,createdAt:new Date(e.created_at),updatedAt:new Date(e.updated_at),lastActivityAt:new Date(e.last_activity_at)})}getFormattedLastActivityAt(){return this._formattedLastActivityAt||(this._formattedLastActivityAt=this.lastActivityAt.toLocaleString()),this._formattedLastActivityAt}getFormattedCreatedAt(){return this._formattedCreatedAt||(this._formattedCreatedAt=this.createdAt.toLocaleString()),this._formattedCreatedAt}getURL(){const e=this.isReply()?this.parentId:this.id;return this.constructor.getURL(e)}static getURL(e){const{route:t}=window.top.$e.components.get("notes").config;return t.note_url_pattern.replace("{{NOTE_ID}}",e)}isUnreadThread(){return this.isThread()&&(!this.isRead||this.unreadRepliesCount>0)}isThread(){return 0===this.parentId}isReply(){return!this.isThread()}}const{useEffect:Ze,useRef:Xe}=React;function Ge(e,t){const n=Xe(!0);Ze((()=>{n.current?n.current=!1:e()}),t)}function Je(){return(0,r.useMemo)((()=>window.top.$e.components.get("notes").config),[])}var et=n(872);const tt=(0,r.createContext)(null),nt=()=>(0,r.useContext)(tt),rt=e=>{const[t,n]=(0,r.useState)((()=>new Map));(0,r.useEffect)((()=>{const e=new Map;document.querySelectorAll(".elementor-element[data-id]").forEach((t=>{const{id:n}=t.dataset;e.has(n)||e.set(n,t)})),n(e)}),[]);const a=(0,r.useCallback)(((e,n=window.top.$e.components.get("notes").config.route.post_id)=>{if(!t.has(e))return n;const r=t.get(e).closest("[data-elementor-id]");return r?r.dataset.elementorId:n}),[t]),i={elements:t,getDocumentIdByElement:a};return o().createElement(tt.Provider,(0,x.A)({value:i},e))};var ot=n(8790);const at="thread",it="new-thread";function lt(){const e=(0,ot.d4)((e=>e.notes.active)),t=(0,r.useCallback)((({type:e,data:t})=>{const n=[at,it];if(!n.includes(e))throw new Error("`setActive()` type must be one of: "+n.join(", "));return window.top.$e.run("notes/set-active",{type:e,data:t})}),[]),n=(0,r.useCallback)(((e=null)=>window.top.$e.run("notes/clear-active",{id:e})),[]),o=(0,r.useCallback)((t=>at===e?.type&&e?.data.noteId===t),[e]);return{activeThread:e,setActive:t,clearActive:n,isThreadActive:o}}function st(){const e=pt(),t=mt(),n=dt(),{getDocumentIdByElement:r}=nt(),o=Je();return(0,et.useMutation)((async({postId:e,elementId:t,content:n,position:a={x:0,y:0},routeUrl:i=o.route.url,routeTitle:l=o.route.title,routePostId:s=o.route.post_id,status:c="publish",parentId:p,isPublic:m=null})=>{e||(e=r(t));const{data:d}=await window.top.$e.data.create("notes/index",{post_id:e,element_id:t,content:n,position:a,route_post_id:s,route_url:i,route_title:l,status:c,parent_id:p,mentioned_usernames:Ae(n),...null!==m?{is_public:m}:{}});return Ye.createFromResponse(d.data)}),{onSuccess:r=>Promise.all(r.isThread()?[n({exact:!1}),t({exact:!1})]:[e({id:r.parentId})])})}function ct(){const e=mt(),t=pt(),n=dt();return(0,et.useMutation)((async({ids:e,isRead:t})=>(e=e.filter((e=>!!e&&e>0)),await window.top.$e.data[t?"create":"delete"]("notes/read-status",{ids:e}),e)),{onSuccess:r=>{const o=({queryKey:e})=>Object.prototype.hasOwnProperty.call(e[1]||{},"only_unread");return Promise.all([t({predicate:({queryKey:e})=>r.includes(e[1])}),n({predicate:o}),e({predicate:o,refetchActive:!1})])}})}function pt(){const e=(0,et.useQueryClient)();return(0,r.useCallback)((({id:t,...n})=>{const r=["note"];return t&&r.push(t),e.invalidateQueries(r,n)}),[e])}function mt(){const e=(0,et.useQueryClient)();return(0,r.useCallback)(((t={})=>e.invalidateQueries(["notes"],t)),[e])}function dt(){const e=(0,et.useQueryClient)();return(0,r.useCallback)(((t={})=>e.invalidateQueries(["notes/summary"],t)),[e])}var ut=n(2470).__,ft=n(7598);function gt(e){const t=function(){const e=mt(),t=pt(),n=dt(),{clearActive:r}=lt();return(0,et.useMutation)((async({id:e,parentId:t,force:n=!1})=>(await window.top.$e.data.delete("notes/index",ke({id:e,force:n})),{id:e,parentId:t})),{onSuccess:({id:o,parentId:a})=>{r(o);const i=!a;return Promise.all(i?[n({exact:!1}),e({exact:!1})]:[t({id:a})])}})}();return Ge((()=>{e.onLoadingChange&&e.onLoadingChange(t.isLoading)}),[t.isLoading]),o().createElement(We,{open:e.isOpen,onOpenChange:e.onOpenChange},o().createElement(We.Content,null,o().createElement(We.DescriptionContainer,null,o().createElement(We.Title,null,e.note.isReply()?ut("Delete this reply?","elementor-pro"):ut("Delete this note?","elementor-pro")),o().createElement(We.Description,null,e.note.isReply()?ut("Deleted replies can't be recovered.","elementor-pro"):ut("Deleted notes can't be recovered.","elementor-pro"))),o().createElement(We.ActionsContainer,null,o().createElement(We.Cancel,null,ut("Cancel","elementor-pro")),o().createElement(We.Action,{onClick:()=>{window.top.$e.run("notes/delete",{noteId:e.note.id}),t.mutateAsync({id:e.note.id,parentId:e.note.parentId,force:!0})}},ut("Delete","elementor-pro")))))}gt.propTypes={isOpen:ft.bool.isRequired,onOpenChange:ft.func.isRequired,note:ft.instanceOf(Ye),onLoadingChange:ft.func};var ht=n(2470).__,yt=n(7598);function bt(e){const t=e.note.isRead,n=ct();return o().createElement(ae.Item,{icon:"eicon-envelope",disabled:n.isLoading,onSelect:()=>n.mutateAsync({ids:[e.note.id,e.note.parentId],isRead:!t})},ht(t?"Mark as unread":"Mark as read","elementor-pro"))}bt.propTypes={note:yt.shape({id:yt.number,parentId:yt.number,isRead:yt.bool}).isRequired};var vt=n(2470).__,xt=n(7598);function wt(e){const t=e.note.isResolved,n=function(){const e=mt(),t=pt(),n=dt();return(0,et.useMutation)((async({id:e,isResolved:t})=>{const{data:n}=await window.top.$e.data.update("notes/index",{is_resolved:t},{id:e});return Ye.createFromResponse(n.data)}),{onSuccess:r=>{const o=({queryKey:e})=>Object.prototype.hasOwnProperty.call(e[1]||{},"is_resolved");return Promise.all([t({id:r.id}),e({predicate:o}),n({predicate:o})])}})}(),{clearActive:r}=lt();return Ge((()=>{e.onLoadingChange&&e.onLoadingChange(n.isLoading)}),[n.isLoading]),o().createElement(Y,null,o().createElement(Y.Trigger,{asChild:!0},o().createElement(R,{name:t?"eicon-check-circle-o":"eicon-check",disabled:n.isLoading,onClick:async()=>{const o=!t;o?window.top.$e.run("notes/resolve",{noteId:e.note.id}):window.top.$e.run("notes/re-open",{noteId:e.note.id}),await n.mutateAsync({id:e.note.id,isResolved:o}),o&&r(e.note.id)}})),o().createElement(Y.Content,null,vt(t?"Re-open":"Resolve","elementor-pro"),o().createElement(Y.Arrow,null)))}wt.propTypes={note:xt.instanceOf(Ye).isRequired,onLoadingChange:xt.func};var Et=n(2470).__,At=n(7598);const kt=(0,a.Ay)(Y.Content)`
  max-width: 200px;
`,Ct=(0,a.Ay)(w)`
  padding: 4px !important;
  color: #a4afb7 !important;
  transition: 0.2s all !important;
  display: grid !important;
  place-items: center !important;
  font-size: 18px !important;
  border-radius: 100% !important;

  &:hover, &:focus {
    color: #6d7882;
	outline: none;
	background: #f1f3f5;
  }
`;function Rt(e){return 0===e.readers.length?null:o().createElement(Y,{delayDuration:400},o().createElement(Y.Trigger,{asChild:!0},o().createElement(Ct,{className:"eicon-preview-medium",tabIndex:0})),o().createElement(kt,null,o().createElement("strong",null,Et("Seen by","elementor-pro")+": "),e.readers.map((e=>e.name)).join(", "),o().createElement(Y.Arrow,null)))}Rt.propTypes={readers:At.arrayOf(At.shape({name:At.string})).isRequired};const Tt="create",_t="edit",zt="delete",$t="create_users",It="edit_users",Lt=(e,t=null)=>{const n=Je();return(0,r.useMemo)((()=>t?!!t.userCan[e]:!!n.current_user_can[e]),[e,t,n])};function Ot(){return!!navigator?.clipboard}var St=n(2470).__,qt=n(7598);function Pt(e){const{direction:t}=Je(),{setIsDisabled:n}=(0,r.useContext)(Sr),[a,i]=(0,r.useState)(!1),l=Lt(zt,e.note),s=Lt(_t,e.note),c=e.note.isThread()&&s,p=s||l||e.note.isThread();return(0,r.useEffect)((()=>()=>n(!1)),[]),o().createElement(o().Fragment,null,c&&o().createElement(wt,{note:e.note,onLoadingChange:e=>n(e)}),o().createElement(Rt,{readers:e.note.readers}),p&&o().createElement(ae,{modal:!1,dir:t,onOpenChange:e=>{e?window.top.$e.run("notes/open-note-actions"):window.top.$e.run("notes/close-note-actions")}},o().createElement(ae.Trigger,{asChild:!0},o().createElement(R,{name:"eicon-ellipsis-h"})),o().createElement(ae.Content,{align:"end"},e.note.isThread()&&o().createElement(bt,{note:e.note}),s&&o().createElement(ae.Item,{onSelect:()=>e.setIsEditMode(!0),icon:"eicon-edit"},St("Edit","elementor-pro")),e.note.isThread()&&o().createElement(ae.Item,{onSelect:()=>{window.top.$e.run("notes/copy-link",{id:e.note.id})},icon:"eicon-copy",disabled:!Ot(),tooltip:!Ot()&&St('Supported in "https" sites only',"elementor-pro")},St("Copy Link","elementor-pro")),l&&o().createElement(o().Fragment,null,o().createElement(ae.Separator,null),o().createElement(ae.Item,{onSelect:()=>i(!0),icon:"eicon-trash",variant:"danger"},St("Delete","elementor-pro"))),o().createElement(ae.Arrow,null))),l&&o().createElement(gt,{note:e.note,isOpen:a,onOpenChange:i,onLoadingChange:e=>n(e)}))}Pt.propTypes={note:qt.instanceOf(Ye).isRequired,setIsEditMode:qt.func.isRequired};var Ft=n(7598);const Mt=(0,a.Ay)(Se)`
  --font: 300 12px Roboto, sans-serif;
  --line-height: 1.5;
  --padding-block: 8px;

  font-size: 12px !important;
  border-radius: 4px !important;
  border: 1px solid #c2cbd2 !important;
  transition: .3s border-color, .3s opacity !important;
  padding: var(--padding-block) 12px !important;
  overflow: auto !important;
  width: 100% !important;
  box-sizing: border-box !important;

  ${({maxRows:e})=>e&&a.AH`
	--max-rows: ${e};

	max-height: calc((1em * var(--line-height) * var(--max-rows)) + (var(--padding-block) * 2)) !important;
  `};

  textarea {
    all: revert;

	border: none !important;
    font: var( --font ) !important;
	line-height: var(--line-height) !important;
	padding: 0 !important;
	margin: 0 !important;
	color: #6d7882 !important;
	display: block !important;
	height: 100% !important;

	&::placeholder {
	  color: #c2cbd2 !important;
	}
  }

  &:focus-within {
	border-color: #a4afb6 !important;

	// Accessibility-friendly, since the Container itself has a border on focus.
	textarea:focus {
	  outline: none !important;
	  border: none !important;
	}
  }

  ${({disabled:e})=>e&&a.AH`
	opacity: .5 !important;
	pointer-events: none !important;
  `}

  ${({autoSize:e})=>e&&a.AH`
	display: inline-grid !important;
	vertical-align: top !important;
	align-items: center !important;

	textarea {
	  grid-area: 2 / 1 !important;
	  resize: none !important;
	  background: none !important;
	  appearance: none !important;
	  box-shadow: none !important;
	  overflow: hidden !important;

	  &::placeholder {
	    all: revert;
	  }
	}

	&::after {
	  content: attr(data-value) ' ' !important;
	  display: block !important;
	  font: var( --font ) !important;
	  white-space: pre-wrap !important;
	  grid-area: 2 / 1 !important;
	  visibility: hidden !important;
	  line-height: var(--line-height) !important;
	}`}`,Dt=o().forwardRef((({maxRows:e,autoSize:t,...n},a)=>{const i=(0,r.useRef)();return o().createElement(Mt,{maxRows:e,"data-value":n.value||n.defaultValue,autoSize:t,ref:i,disabled:n.disabled},o().createElement("textarea",(0,x.A)({},n,{ref:a,onInput:e=>{n.onInput&&n.onInput(e),i.current.dataset.value=e.target.value}})))}));Dt.displayName="Textarea",Dt.propTypes={disabled:Ft.bool,autoSize:Ft.bool,maxRows:Ft.number,onInput:Ft.func,value:Ft.string,defaultValue:Ft.string};const Nt=Dt;const Ht={enabled:!0,params:{}};function Ut(e,t){const n=(0,r.useRef)();return(0,r.useCallback)(((...r)=>{clearTimeout(n.current),n.current=setTimeout((()=>{clearTimeout(n.current),e(...r)}),t)}),[e,t])}const Vt=a.Ay.ul`
	all: revert;

	padding: 0 !important;
	margin: 0 !important;
	list-style: none !important;
	width: 272px !important;
	z-index: 1 !important; // Just needs any 'z-index' value in order to appear above other things.
	background: #ffffff !important;
	border-radius: 3px !important;
	box-shadow: 0 1px 20px rgba(0, 0, 0, 0.15) !important;
`;var Wt=n(7598);const jt=a.Ay.li`
	all: revert;

	font-family: Roboto, sans-serif !important;
	font-size: 12px !important;
	color: #6d7882 !important;
	background: #ffffff !important;
	padding: 8px !important;
	cursor: pointer !important;

	&:first-child {
		border-top-right-radius: inherit;
		border-top-left-radius: inherit;
	}

	&:last-child {
		border-bottom-right-radius: inherit;
		border-bottom-left-radius: inherit;
	}

	&[role="option"]:hover,
	&[aria-selected="true"] {
		background: #58d0f5 !important;

		&,
		& * {
			color: #ffffff !important;
		}
	}

	&[aria-disabled="true"] {
		cursor: not-allowed !important;
		opacity: .5 !important;
	}
`;function Kt({children:e,value:t,disabled:n,...r}){return o().createElement(jt,(0,x.A)({role:n?"listitem":"option","data-value":t},n?{"aria-disabled":!0}:{},r),e)}Kt.propTypes={value:Wt.string.isRequired,disabled:Wt.bool,children:Wt.oneOfType([Wt.node,Wt.arrayOf(Wt.node)]).isRequired},Kt.defaultProps={value:""};const Qt=(0,a.Ay)(Kt).attrs((()=>({role:"contentinfo"})))`
	font-family: Roboto, sans-serif !important;
	background: #f1f3f5 !important;
	text-align: center !important;
	font-size: 12px !important;
  	line-height: 1.5 !important;
`;n(2313);var Bt=n(7598);const Yt=e=>{const t=(0,r.useRef)(null),n=(0,r.useRef)(null),a=Ut((({resolve:t,text:r})=>{n.current||(n.current=document.createElement("div"));const o=e.fragment({search:r});ReactDOM.render(o,n.current),t({matched:!0,fragment:n.current})}),e.debounce),i=e=>{const{provide:t,text:n}=e.detail;t(new Promise((e=>a({resolve:e,text:n}))))},l=t=>{const{item:n}=t.detail;t.detail.value=`${e.handle}${n.dataset.value}`,e.onSelect(n,t)};return(0,r.useEffect)((()=>(t.current.addEventListener("text-expander-change",i),t.current.addEventListener("text-expander-value",l),()=>{t.current&&(t.current.removeEventListener("text-expander-change",i),t.current.removeEventListener("text-expander-value",l))})),[]),o().createElement("text-expander",{keys:e.handle,ref:t,multiword:e.multiword?e.handle:null},e.children)};Yt.List=Vt,Yt.ListItem=Kt,Yt.ListFooter=Qt,Yt.propTypes={fragment:Bt.func.isRequired,debounce:Bt.number.isRequired,handle:Bt.string.isRequired,multiword:Bt.bool.isRequired,children:Bt.node.isRequired,onSelect:Bt.func.isRequired},Yt.defaultProps={debounce:0,handle:"@",multiword:!1,onSelect:()=>{}};const Zt=Yt;var Xt=n(2470).__,Gt=n(7598);const Jt=a.Ay.div`
	display: flex !important;
	position: absolute !important;
	width: 100% !important;
	height: 100% !important;
	inset-inline-start: 0 !important;
	margin: 0 !important;
	padding: 0 !important;
	font-size: 11px !important;

	// Fixes bug with the position of Popover with portalled=false inside another Popover
	// @see https://github.com/radix-ui/primitives/issues/370
	[data-radix-popper-content-wrapper] {
		transform: translateY(-100%) !important;
		top: 10px !important;
		inset-inline-start: auto !important;
		inset-inline-end: -10px !important;
	}
`,en=a.Ay.div`
	overflow: hidden !important;
	position: relative !important;
	flex: 1 !important;
	height: 100% !important;

	&::before {
		content: '' !important;
		position: absolute !important;
		width: 100vw !important;
		height: 100vh !important;
		top: 50% !important;
		transform: translateY(-50%) !important;
		inset-inline-end: 0 !important;
		box-shadow: inset 0 0 60px 40px #f1f3f5 !important;
	}
`,tn=a.Ay.div`
	display: inline-flex !important;
	align-items: center !important;
	white-space: pre-wrap !important;
	padding: 10px !important;
	background: #f1f3f5 !important;
`,nn=a.Ay.a.attrs((()=>({target:"_blank",rel:"noreferrer"})))`
	color: #6d7882 !important;
	background: #f1f3f5 !important;
	padding: 10px !important;
	display: inline-flex !important;
	align-items: center !important;

	&:hover,
	&:focus {
		color: #58d0f5 !important;
		text-decoration: none !important;
	}
`,rn=(0,a.Ay)(Y.Content)`
	background: #ffffff !important;
	color: #6d7882 !important;
	line-height: 1.3 !important;
	font-style: italic !important;
	padding: 12px !important;
	box-shadow: 0 1px 20px rgba(0, 0, 0, 0.15) !important;
	max-width: 262px !important;
	box-sizing: border-box !important;

	&::after {
		content: '' !important;
		position: absolute !important;
		width: 10px !important;
		height: 10px !important;
		border: 5px solid transparent !important;
		border-top-color: #ffffff !important;
		bottom: -9px !important;
		inset-inline-end: 20px !important;
	}
`,on=a.Ay.a.attrs((()=>({target:"_blank"})))`
	all: revert;
	display: block !important;
	text-decoration: none !important;
	color: #58d0f5 !important;

	&:hover,
	&:focus {
		text-decoration: underline !important;
	}
`;function an(e){const{urls:t}=Je(),n=e.user.capabilities.post.edit,r=Lt(It),a=r&&n,i=r?t.help_notes_features:"",l=Xt(a?"Give access to Notes":"Can't mention them","elementor-pro"),s=function(e){const t=e.notes.read,n=e.post.edit,r=Lt(It);if(!r)return Xt("Contact the site admin to give this person the right permissions.","elementor-pro");if(!n)return Xt(t?"They need permission to view this post.":"This person needs: (1) permission to view this post, as well as (2) access to use Notes.","elementor-pro");return""}(e.user.capabilities);return o().createElement(Jt,{role:"tooltip","aria-label":l},o().createElement(en,null),a?o().createElement(nn,{href:`${t.admin_url_edit_user}?user_id=${e.user.id}#e-notes`,className:"elementor-clickable"},l+" ",o().createElement(w,{className:"eicon-editor-external-link"})):o().createElement(Y,{delayDuration:0},o().createElement(Y.Trigger,{onMouseDown:e=>e.preventDefault(),asChild:!0},o().createElement(tn,{"aria-label":s},l+" ",o().createElement(w,{className:"eicon-help-o"}),o().createElement(rn,{portalled:!1},s,i&&o().createElement(on,{href:i,className:"elementor-clickable"},Xt("Learn more","elementor-pro")))))))}an.propTypes={user:Gt.instanceOf(Qe).isRequired};var ln=n(2470).__,sn=n(7598);const cn={limit:5,order_by:"user_registered",order:"desc"},pn=(0,a.Ay)(Zt.List)`
	position: absolute !important;
	top: 100% !important;
`,mn=(0,a.Ay)(Se)`
	display: flex !important;
	flex-direction: column !important;
	justify-content: space-between !important;
	gap: 2px !important;

	&::before,
	&::after {
		display: none !important;
	}
`,dn=(0,a.Ay)(Zt.ListItem)`
	display: flex !important;
	flex-direction: row !important;
	align-items: center !important;
	gap: 10px !important;
	position: relative !important;

	&[aria-disabled='true'] {
		opacity: 1 !important;

		&:hover {
			background-color: #f1f3f5 !important;
		}

		${mn} {
			opacity: .5 !important;
		}

		&:not(:hover) {
			> [role='tooltip'] {
				display: none !important;
			}
		}
	}
`,un=a.Ay.span`
	all: revert;

	padding: 0 !important;
	margin: 0 !important;
	font-size: 12px !important;
	font-weight: 500 !important;
	color: inherit !important;
`,fn=a.Ay.span`
	font-size: 10px !important;
	color: #a4afb6 !important;
`,gn=a.Ay.a.attrs((()=>({target:"_blank",rel:"noreferrer"})))`
	all: revert;

	color: #58d0f5 !important;
	font-family: Roboto, sans-serif !important;
	font-size: 1em !important;
	font-weight: normal !important;
	text-transform: none !important;
	font-style: normal !important;
	text-decoration: underline !important;
	line-height: normal !important;
	letter-spacing: normal !important;
	word-spacing: normal !important;

	&:hover,
	&:focus {
		color: #6d7882 !important;
		text-decoration: underline; // Repeat in order to override theme styles.
	}
`,hn=a.Ay.strong`
  font-weight: 500 !important;
`;function yn(e){var t;const{route:n,urls:a}=Je(),i=Lt($t),{data:l=[],isSuccess:s}=function(e={}){const t=(0,r.useMemo)((()=>({...Ht,...e})),[e]),n=(0,r.useMemo)((()=>ke(t.params||{})),[t.params]);return(0,et.useQuery)(["users",n],(async({queryKey:[,e],signal:t})=>{const{data:n}=await window.top.$e.data.get("notes/users",e,{refresh:!0,signal:t});return n.data.map((e=>Qe.createFromResponse(e)))}),{keepPreviousData:!0,enabled:t.enabled})}({params:{...cn,search:e.search,post_id:null!==(t=n.post_id)&&void 0!==t?t:null}});return o().createElement(pn,null,l.map((e=>{const t=!e.capabilities.notes.read||!e.capabilities.post.edit;return o().createElement(dn,{key:e.id,value:e.slug,disabled:t},o().createElement(H,{size:"md",src:e.avatarUrls[48]}),o().createElement(mn,null,o().createElement(un,null,e.name),o().createElement(fn,null,e.slug)),t&&o().createElement(an,{user:e}))})),s&&o().createElement(Zt.ListFooter,null,o().createElement(hn,null,ln("Can't find someone?","elementor-pro")),o().createElement("br",null),o().createElement("span",null,i?o().createElement(o().Fragment,null,ln("Add them from the","elementor-pro")," ",o().createElement(gn,{href:a.admin_url_create_user,className:"elementor-clickable"},ln("WP Dashboard","elementor-pro"))):ln("Ask the site admin to add them","elementor-pro"))))}yn.propTypes={search:sn.string};const bn=new et.QueryClient({defaultOptions:{queries:{retry:2,refetchOnWindowFocus:!0},mutations:{retry:2}}});var vn=n(2470).__,xn=n(7598);const wn=(0,a.Ay)(Se)`
  position: relative;
`;function En(e){const t=function(e){const t=(0,r.useRef)();return(0,r.useEffect)((()=>{if(t.current){const n=e?e.length:0;t.current.focus(),t.current.setSelectionRange(n,n)}}),[]),t}(e.defaultValue),n=e.isReply?vn("Type your reply. Use @ to mention...","elementor-pro"):vn("Type a note. Use @ to mention...","elementor-pro");return o().createElement(wn,null,o().createElement(Zt,{debounce:250,fragment:({search:e})=>o().createElement(et.QueryClientProvider,{client:bn},o().createElement(yn,{search:e})),onSelect:()=>window.top.$e.run("notes/choose-mention")},o().createElement(Nt,{name:"content",placeholder:n,onKeyDown:t=>{e.onMetaAndEnterKeyDown&&(t.metaKey||t.ctrlKey)&&"enter"===t.key.toLowerCase()&&e.onMetaAndEnterKeyDown(t)},disabled:e.disabled,ref:t,defaultValue:e.defaultValue,onChange:e.onChange,rows:1,maxRows:6,autoSize:!0})))}function An(){const e=(0,ot.wA)(),{actions:t}=window.top.$e.store.get("notes"),n=(0,ot.d4)((e=>e.notes.formsInWritingMode)),o=(0,r.useCallback)((e=>n.includes(e)),[n]),a=(0,r.useCallback)((n=>e(t.addFormToWritingMode(n))),[e]),i=(0,r.useCallback)((n=>e(t.removeFormFromWritingMode(n))),[e]);return{formsInWritingMode:n,isInWritingMode:o,addToWritingMode:a,removeFromWritingMode:i}}En.propTypes={name:xn.string,disabled:xn.bool,onMetaAndEnterKeyDown:xn.func,defaultValue:xn.string,onChange:xn.func,isReply:xn.bool.isRequired},En.defaultProps={isReply:!1};var kn=n(7598);const Cn=a.Ay.form`
  all: revert;

  display: flex !important;
  flex-direction: column !important;
  gap: 16px !important;
`;function Rn({onReset:e,onChange:t,onSubmit:n,...r}){const{isInWritingMode:a,addToWritingMode:i,removeFromWritingMode:l}=An();return o().createElement(Cn,(0,x.A)({},r,{onReset:t=>{l(r.id);const n=t.currentTarget.content;if(void 0!==n){const e=new Event("input",{bubbles:!0});n.value="",n.dispatchEvent(e)}e?.(t)},onChange:e=>{const n=e.target.value.trim()!==e.target.defaultValue,o=a(r.id);n&&!o&&i(r.id),!n&&o&&l(r.id),t?.(e)},onSubmit:async e=>{if(e.preventDefault(),!a(r.id))return;const t=e.currentTarget,o=t.content.value.trim();await(n?.(e,{form:t,content:o}))}}))}function Tn(e){return(0,r.useMemo)((()=>{const t=document.createElement("textarea");t.innerHTML=e;const{value:n}=t;return t.remove(),n}),[e])}Rn.ButtonsContainer=(0,a.Ay)(Se)`
  display: flex !important;
  flex-direction: row-reverse !important;
  justify-content: end !important;
  gap: 8px !important;
`,Rn.propTypes={id:kn.string.isRequired,onChange:kn.func,onReset:kn.func,onSubmit:kn.func};var _n=n(2470).__,zn=n(7598);function $n(e){const t=`e-notes-edit-${e.note.id}`,n=Tn(e.note.content),r=function(){const e=pt();return(0,et.useMutation)((async({id:e,values:{content:t}})=>{const{data:n}=await window.top.$e.data.update("notes/index",{content:t,mentioned_usernames:Ae(t)},{id:e});return Ye.createFromResponse(n.data)}),{onSuccess:t=>e({id:t.isThread()?t.id:t.parentId})})}(),{isInWritingMode:a}=An();return o().createElement(Rn,{onSubmit:async(t,{content:n,form:o})=>{window.top.$e.run("notes/edit",{noteId:e.note.id}),await r.mutateAsync({id:e.note.id,values:{content:n}}),o.reset(),e.onClose()},id:t},o().createElement(En,{disabled:r.isLoading,defaultValue:n,onMetaAndEnterKeyDown:e=>Re(e.currentTarget.form),isReply:e.note.isReply()}),o().createElement(Rn.ButtonsContainer,null,o().createElement(m,{disabled:r.isLoading||!a(t),type:"submit"},_n("Save","elementor-pro")),o().createElement(m,{disabled:r.isLoading,variant:"outlined",type:"reset",onClick:t=>{window.top.$e.run("notes/cancel-edit",{noteId:e.note.id}),t.target.form.reset(),e.onClose(t)}},_n("Cancel","elementor-pro"))))}$n.propTypes={note:zn.instanceOf(Ye).isRequired,onClose:zn.func.isRequired};const In=a.Ay.p`
  --color-gray-600: #6d7882;

  font-family: Roboto, sans-serif !important;
  font-size: 12px !important;
  font-weight: 400 !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: 1.5 !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  color: var(--color-gray-600);
  margin: 0 0 .5em 0 !important;
`,Ln=a.Ay.span`
  color: #58d0f5;
`,On=a.Ay.a`
  all: revert;

  --color-editor-info: #58d0f5;
  --color-editor-info-dark: #10bcf2;

  font-family: Roboto, sans-serif !important;
  font-size: 1em !important;
  font-weight: normal !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: normal !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  cursor: pointer;


  &,
  &:visited {
    color: var( --color-editor-info ) !important;
  }

  &:hover,
  &:focus {
    color: var( --color-editor-info-dark ) !important;
  }
`;On.defaultProps={target:"_blank",rel:"noopener noreferrer",className:"elementor-clickable"};const Sn=On;var qn=n(7598);function Pn(e){return o().createElement(Sn,{href:e.token.value},e.children)}Pn.propTypes={children:qn.node.isRequired,token:qn.shape({value:qn.string}).isRequired};var Fn=n(7598);function Mn(e){return o().createElement(Sn,{href:`mailto:${e.token.value}`},e.children)}Mn.propTypes={children:Fn.node.isRequired,token:Fn.shape({value:Fn.string}).isRequired};var Dn=n(7598);const Nn=a.i7`
  0% {
	opacity: 1;
	background-position: 40% 66%, 54% 40%, 32% 36%, 46% 38%, 38% 55%, 60% 32%, 43% 34%, 31% 35%, 53% 63%, 58% 42%, 56% 37%, 40% 50%, 46% 46%, 36% 59%, 43% 50%, 63% 70%, 44% 40%, 51% 30%, 38% 45%, 37% 62%, 46% 34%, 45% 45%, 43% 44%, 43% 53%, 64% 42%, 31% 36%, 38% 54%, 40% 34%, 64% 48%, 43% 47%, 43% 50%, 56% 40%, 35% 68%, 68% 69%, 63% 35%, 32% 61%, 67% 57%, 51% 43%, 53% 45%, 47% 40%, 33% 42%, 35% 65%, 67% 47%, 30% 44%, 67% 52%, 41% 46%, 44% 55%, 38% 40%, 39% 37%, 37% 35%;
  }

  45% {
	opacity: 1;
	background-size: var(--radius) var(--radius);
  }

  100% {
	opacity: 0;
	background-size: 0 0;
	background-position: 8% 105%, 83% 50%, 53% 74%, 44% 9%, 6% 67%, 13% 62%, 88% 47%, 60% 18%, 78% 50%, 105% 11%, 59% 22%, 47% 98%, 77% 84%, 51% 60%, 70% 10%, 91% 103%, 8% 16%, 61% 1%, -5% 52%, 75% 74%, 58% 52%, 74% 30%, 51% 55%, 13% 78%, 28% 86%, 40% 1%, 24% 38%, 58% 6%, 70% 42%, 11% 22%, 73% 59%, 10% 57%, 72% 22%, 48% 26%, 44% -7%, 72% 29%, 50% 74%, 99% 87%, 17% 36%, 4% -8%, -11% 22%, 79% 95%, 19% 60%, 30% 4%, 110% 5%, 0% 71%, 82% 56%, 9% 68%, 69% 41%, 19% 61%;
  }
`,Hn=a.Ay.span`
  display: inline-block !important;
  position: relative !important;
  isolation: isolate !important;
  box-sizing: border-box !important;

  &::before {
	--radius: 2px;
	--color-1: #d50000;
	--color-2: #c51162;
	--color-3: #aa00ff;
	--color-4: #2962ff;
	--color-5: #00c853;
	--color-6: #ffd600;

	content: '' !important;
	position: absolute !important;
	inset: -25px !important;
	pointer-events: none !important;
	opacity: 0;
	z-index: -1 !important;
	transform: scale(1.5) !important;
	background-repeat: no-repeat !important;
	background-size: calc(2 * var(--radius)) calc(2 * var(--radius));
	background-image: radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-3 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-2 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-5 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-1 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-2 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-1 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-1 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-5 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-5 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-1 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-1 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-2 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-1 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-3 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-2 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-3 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-2 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-5 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-5 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-1 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-3 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-5 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-3 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-3 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-2 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-2 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-2 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-1 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-5 ) 49%,transparent 50% ) !important;

  	${({isAnimated:e})=>e&&a.AH`
	  animation: ${Nn} ease 1s forwards !important;
  	`}
  }
`;function Un(e){const[t,n]=(0,r.useState)(!1);return o().createElement(Hn,{isAnimated:t,onMouseEnter:()=>n(!0),onAnimationEnd:()=>n(!1)},e.children)}Un.propTypes={children:Dn.node.isRequired,token:Dn.shape({value:Dn.string}).isRequired};var Vn=n(7598);const Wn={Paragraph:In,Mention:Ln,Url:Pn,Email:Mn,Wow:Un,default:({children:e})=>e};function jn(e){const t=(0,r.useMemo)((()=>Wn[e.token.type]||Wn.default),[e.token.type]);return o().createElement(t,{token:e.token},Array.isArray(e.token.value)?e.token.value.map(((e,t)=>o().createElement(jn,{token:e,key:t}))):e.token.value)}const Kn={};Kn.value=Vn.oneOfType([Vn.string,Vn.arrayOf(Vn.shape(Kn))]),jn.propTypes={token:Vn.shape(Kn)};var Qn=n(7598);const Bn=we(),Yn=(0,a.Ay)(Se)`
  white-space: normal;
  word-break: break-word;
  word-wrap: break-word;

  ${({disableInteractions:e})=>e&&a.AH`
	pointer-events: none;
  `};
`;function Zn(e){const t=(0,r.useMemo)((()=>Bn.parse(e.children)),[e.children]);return o().createElement(Yn,{disableInteractions:e.disableInteractions,className:e.className},t&&o().createElement(jn,{token:t}))}Zn.propTypes={children:Qn.string.isRequired,disableInteractions:Qn.bool,className:Qn.string},Zn.defaultProps={disableInteractions:!1};const Xn=Zn;var Gn=n(2470).__,Jn=n(7598);const er=a.Ay.p`
  all: revert;

  color: #a4afb6 !important;
  margin: 0 !important;
  padding: 0 !important;
  font-family: Roboto, sans-serif !important;
  font-size: 10px !important;
  font-weight: normal !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: 1.5 !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
`,tr=a.Ay.strong`
  font-weight: 500;
`;function nr(e){const{route:t}=Je(),n=e.note.document?.id===t.post_id,r=e.note.routeUrl===t.url;return!e.note.document||n&&r?null:o().createElement(er,null,Gn("Noted on:","elementor-pro")," ",o().createElement(tr,null,n?e.note.routeTitle:e.note.document.typeTitle))}nr.propTypes={note:Jn.instanceOf(Ye).isRequired};var rr=n(7598);const or={sm:{text:9},md:{text:12}},ar=(0,a.Ay)(Se)`
  --color-gray-500: #a4afb6;
  --color-gray-600: #6d7882;

  display: flex !important;
  align-items: start !important;
  gap: 12px !important;

  &, & *:not( [class*="eicon"] ) {
    font-family: Roboto, sans-serif !important;
  }
`,ir=(0,a.Ay)(Se)`
  display: flex !important;
  flex-direction: column !important;
  gap: 12px !important;
  flex-grow: 1 !important;
  line-height: 1 !important;
`,lr=(0,a.Ay)(Se)`
  display: flex !important;
  gap: 10px !important;
  padding-top: 4px !important;
  line-height: 1 !important;
`,sr=(0,a.Ay)(Se)`
  display: flex !important;
  flex-direction: column !important;
  gap: 5px !important;
  flex-grow: 1 !important;
  line-height: 1 !important;
`,cr=(0,a.Ay)(Se)`
  display: flex !important;
  gap: 5px !important;
  flex-shrink: 0 !important;
  align-items: center !important;
  line-height: 1 !important;
`,pr=a.Ay.span`
  color: var(${({muted:e})=>e?"--color-gray-500":"--color-gray-600"}) !important;
  margin: 0 !important;
  padding: 0 !important;

  ${({size:e})=>e&&a.AH`
	font-size: ${or[e].text}px !important;
  `};

  ${({weight:e})=>e&&a.AH`
	font-weight: ${e} !important;
  `};

  ${({lineHeight:e})=>a.AH`
	line-height: ${e||1} !important;
  `};
`;function mr(e){const[t,n]=(0,r.useState)(!1),a=Tn(e.note.content);return o().createElement(ar,null,o().createElement(H,{size:"md",src:e.note.author.avatarUrls[48]}),o().createElement(ir,null,o().createElement(lr,null,o().createElement(sr,null,o().createElement(pr,{size:"md",weight:500},e.note.author.name),o().createElement(pr,{size:"sm",lineHeight:1.5,muted:!0},e.note.getFormattedCreatedAt())),o().createElement(cr,null,!t&&o().createElement(Pt,{note:e.note,setIsEditMode:n}))),!t&&o().createElement(Xn,null,a),t&&o().createElement($n,{note:e.note,onClose:()=>n(!1)}),o().createElement(nr,{note:e.note})))}function dr(e){const t=(0,et.useQueryClient)(),n=function(e){return(0,r.useCallback)((t=>{t.isReply()||e.setQueriesData({queryKey:["notes"],exact:!1,active:!0},(e=>e?e.map((e=>e.id===t.id?t:e)):e))}),[e])}(t),o=function(e,t){return(0,r.useCallback)((()=>e.getQueryData("notes",{active:!0,exact:!1})?.find((e=>e.id===t))),[e,t])}(t,e);return(0,et.useQuery)(["note",e],(async({queryKey:[,e],signal:t})=>{const{data:n}=await window.top.$e.data.get("notes/index",{id:e},{refresh:!0,signal:t});return Ye.createFromResponse(n.data)}),{onSuccess:n,placeholderData:o})}mr.propTypes={note:rr.instanceOf(Ye).isRequired};var ur=n(2470).__,fr=n(7598);function gr(e){const t=`e-notes-new-reply-for-${e.thread.id}`,n=st(),{clearActive:r}=lt(),{isInWritingMode:a}=An();return o().createElement(Rn,{id:t,onSubmit:async(t,{content:r,form:o})=>{window.top.$e.run("notes/reply",{parentId:e.thread.id}),await n.mutateAsync({elementId:e.thread.elementId,parentId:e.thread.id,content:r}),o.reset()}},o().createElement(En,{disabled:n.isLoading,onMetaAndEnterKeyDown:e=>Re(e.currentTarget.form),isReply:!0}),a(t)&&o().createElement(Rn.ButtonsContainer,null,o().createElement(m,{disabled:n.isLoading,type:"submit"},ur("Reply","elementor-pro")),o().createElement(m,{disabled:n.isLoading,variant:"outlined",type:"reset",onClick:t=>{window.top.$e.run("notes/cancel-reply",{parentId:e.thread.id}),t.target.form.reset(),r()}},ur("Cancel","elementor-pro"))))}gr.propTypes={thread:fr.instanceOf(Ye)};var hr=n(2470).__,yr=n(7598);const br=(0,a.Ay)(w).attrs({className:"eicon-loading eicon-animation-spin"})`
  align-self: center !important;
  color: #a4afb6 !important;
`,vr=a.Ay.p`
  all: revert;

  font-family: Roboto, sans-serif !important;
  font-size: 12px !important;
  font-weight: normal !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: normal !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  color: #6d7882 !important;
  margin: 0 !important;
  padding: 0 !important;
`;function xr(e){const{isLoading:t,isPlaceholderData:n,isFetching:a,data:i,isSuccess:l,isError:s}=dr(e.threadId),c=0!==i.repliesCount;return function({thread:e,shouldTrigger:t}){const n=(0,r.useRef)(!1),o=ct();(0,r.useEffect)((()=>{if(n.current||!t)return;const r=[e,...e.replies||[]].filter((e=>!e.isRead)).map((e=>e.id));0!==r.length&&o.mutate({ids:r,isRead:!0}),n.current=!0}),[e,t])}({thread:i,shouldTrigger:l&&!n&&!a}),t?o().createElement(br,null):s?o().createElement(vr,null,hr("Something went wrong.","elementor-pro")):o().createElement(o().Fragment,null,o().createElement(mr,{note:i,key:i.id}),c&&n&&o().createElement(br,null),i.replies.map((e=>o().createElement(mr,{key:e.id,note:e}))),o().createElement(gr,{thread:i}))}xr.propTypes={threadId:yr.number.isRequired};const wr="e-notes--disable-new-thread",Er="e-route-notes--notable";function Ar(){const e=function(){const e=Lt(Tt),{activeThread:t}=lt();return(0,r.useMemo)((()=>e&&!t),[e,t])}(),{elements:t}=nt(),{setActive:n}=lt(),o=e=>{const t=e.ctrlKey||e.metaKey||e.altKey,n=e.target.closest(`.${wr}`);return t||n};(0,r.useEffect)((()=>{const e=e=>{o(e)||(e.preventDefault(),e.stopPropagation())};return t.forEach((t=>{t.addEventListener("click",e)})),()=>{t.forEach((t=>{t.removeEventListener("click",e)}))}}),[t]),(0,r.useEffect)((()=>{const r=e=>{1===e.buttons&&!o(e)&&(e.preventDefault(),e.stopPropagation(),n({type:it,data:{elementId:e.currentTarget.dataset.id,position:kr(e)}}))};return t.size&&e&&(t.forEach((e=>{e.addEventListener("pointerdown",r)})),document.body.classList.add(Er)),()=>{t.forEach((e=>{e.removeEventListener("pointerdown",r)})),document.body.classList.remove(Er)}}),[t,e])}function kr(e){const t=e.currentTarget.getBoundingClientRect();return{x:(e.clientX-t.left)/t.width*100,y:(e.clientY-t.top)/t.height*100}}function Cr(e=!0,{onlyIfNeeded:t=!0,...n}={}){const o=(0,r.useRef)(null);return(0,r.useEffect)((()=>{e&&setTimeout((()=>{Ce(o.current,{onlyIfNeeded:t,...n})}))}),[e]),o}const Rr={keyframes:[{transform:"scale(1)",opacity:"1"},{transform:"scale(1.05)",opacity:"0.85"},{transform:"scale(1)",opacity:"1"}],options:{easing:"ease-in-out",duration:500}};function Tr(e){const{direction:t}=Je(),{formsInWritingMode:n}=An(),a=(0,r.useRef)();return o().createElement(F.Content,(0,x.A)({},e,{align:"rtl"===t?"end":"start",alignOffset:18,sideOffset:15,ref:a,onInteractOutside:async e=>{0!==n.length&&(e.preventDefault(),0===a.current.getAnimations().length&&(await Ce(a.current),a.current.animate(Rr.keyframes,Rr.options)))}}))}var _r=n(9320),zr=n(7598);const $r=(0,a.Ay)(_r.ZL).withConfig({shouldForwardProp:e=>"position"!==e})`
	all: revert;

	position: absolute;
  	z-index: 98; // One under sticky elements & wp-admin-bar.
  	top: ${({position:e})=>e?.y||0}%;
  	left: ${({position:e})=>e?.x||0}%;
  	transform: translate( -25%, -100% );
`;function Ir(e){const{elements:t}=nt(),n={current:t.get(e.elementId)};return n.current?o().createElement($r,{containerRef:n,"data-e-notes-portal":!0,position:e.position},e.children):null}Ir.propTypes={elementId:zr.string.isRequired,position:zr.shape({x:zr.number.isRequired,y:zr.number.isRequired}),children:zr.oneOfType([zr.node,zr.arrayOf(zr.node)])};var Lr=n(7598);const Or=(0,a.Ay)(Se)`
  display: flex !important;
  flex-direction: column !important;
  gap: 28px !important;
  padding: 20px 16px !important;
  width: 360px !important;
  border-radius: 4px !important;
  transition: 0.3s all !important;

  ${({disabled:e})=>e&&a.AH`
	opacity: 0.5;
	pointer-events: none;
  `}
`,Sr=(0,r.createContext)();function qr(e){const[t,n]=(0,r.useState)(!1),a=Cr(e.isActive);return o().createElement(Ir,{elementId:e.note.elementId,position:e.note.position},o().createElement(F,{open:e.isActive,onOpenChange:e.onOpenChange},o().createElement(F.Trigger,{asChild:!0},o().createElement(m,{variant:"transparent",className:wr},o().createElement(y,{ref:a,variant:e.isActive||e.note.isUnreadThread()?"solid":"ghost",size:"md",muted:e.note.isResolved},e.note.id))),o().createElement(Tr,null,o().createElement(Or,{disabled:t},o().createElement(Sr.Provider,{value:{isDisabled:t,setIsDisabled:n}},o().createElement(xr,{threadId:e.note.id}))))))}qr.propTypes={note:Lr.instanceOf(Ye).isRequired,onOpenChange:Lr.func.isRequired,isActive:Lr.bool.isRequired};var Pr=n(2470).__,Fr=n(7598);const Mr="e-notes-new-thread";function Dr(e){const{clearActive:t,setActive:n}=lt(),r=st(),{isInWritingMode:a}=An();return o().createElement(Rn,{onSubmit:async(t,{content:o,form:a})=>{window.top.$e.run("notes/create");const i=await r.mutateAsync({elementId:e.elementId,parentId:0,content:o,position:e.position});a.reset(),n({type:at,data:{noteId:i.id}})},id:Mr},o().createElement(En,{disabled:r.isLoading,onMetaAndEnterKeyDown:e=>Re(e.currentTarget.form)}),o().createElement(Rn.ButtonsContainer,null,o().createElement(m,{disabled:r.isLoading||!a(Mr),type:"submit"},Pr("Leave a Note","elementor-pro")),o().createElement(m,{disabled:r.isLoading,variant:"outlined",type:"reset",onClick:e=>{window.top.$e.run("notes/cancel-create"),e.target.form.reset(),t()}},Pr("Cancel","elementor-pro"))))}Dr.propTypes={elementId:Fr.string.isRequired,position:Fr.shape({x:Fr.number.isRequired,y:Fr.number.isRequired})};var Nr=n(7598);const Hr=(0,a.Ay)(Se)`
	display: flex !important;
	flex-direction: column !important;
	gap: 28px !important;
	padding: 20px 16px !important;
	width: 360px !important;
	border-radius: 4px !important;
`;function Ur(e){const t=Cr();return o().createElement(Ir,{elementId:e.elementId,position:e.position},o().createElement(F,{defaultOpen:!0,onOpenChange:e.onOpenChange},o().createElement(F.Trigger,{asChild:!0},o().createElement(m,{variant:"transparent",ref:t},o().createElement(y,{variant:"active",size:"md"}))),o().createElement(Tr,null,o().createElement(Hr,null,o().createElement(Dr,{elementId:e.elementId,position:e.position})))))}function Vr(){return[(0,ot.d4)((e=>e.notes.filters)),(0,r.useCallback)(((e,t=!1)=>window.top.$e.run("notes/filter",{filters:e,overwrite:t})),[])]}Ur.propTypes={elementId:Nr.string.isRequired,position:Nr.shape({x:Nr.number.isRequired,y:Nr.number.isRequired}),onOpenChange:Nr.func.isRequired};const Wr={enabled:!0,params:{}};function jr(e={}){const{route:t}=Je(),[n]=Vr(),o=(0,r.useMemo)((()=>({...Wr,...e})),[e]),a=(0,r.useMemo)((()=>ke({parent_id:0,order_by:"last_activity_at",order:"desc",...t.is_elementor_library?{post_id:t.post_id}:{route_url:encodeURIComponent(t.url)},...n,...o.params||{}})),[t,n,o.params]);return(0,et.useQuery)(["notes",a],(async({queryKey:[,e],signal:t})=>{const{data:n}=await window.top.$e.data.get("notes/index",e,{refresh:!0,signal:t});return n.data.map((e=>Ye.createFromResponse(e)))}),{keepPreviousData:!0,enabled:o.enabled})}function Kr(){const{data:e=[]}=jr(),{activeThread:t,clearActive:n,setActive:r,isThreadActive:a}=lt();return Ar(),o().createElement(o().Fragment,null,e.map((e=>o().createElement(qr,{key:e.id,note:e,isActive:a(e.id),onOpenChange:t=>{t?r({type:at,data:{noteId:e.id}}):n(e.id)}}))),it===t?.type&&o().createElement(Ur,{elementId:t.data.elementId,position:t.data.position,onOpenChange:e=>{e||n()}}))}var Qr=n(2470).__,Br=n(7598);const Yr=(0,a.Ay)(i)`
	--spacing: 12px;
	--background: #fafbfb;
	--color: #6d7882;
	--padding: var( --spacing );
	--font-family: Roboto, sans-serif;
	--font-size: 12px;
	--font-weight: 400;
	--width: 100%;
	--display: flex;

	gap: var( --spacing );
	margin: 1px 0 0 0 !important;
	border: none;
	text-align: inherit;
	border-radius: 0;
	transition: 0.2s all;
	line-height: 1.5;
	cursor: pointer;
	white-space: normal;

	&:hover,
	&:focus {
		--background: #f1f1f1;
		--color: #6d7882;
	}

	${({isActive:e})=>e&&a.AH`
			--background: #e8f4fb;

			&:hover,
			&:focus {
				--background: #e0f2fc;
			}
		`}
`,Zr=(0,a.Ay)(Se)`
	flex-shrink: 0;

	&::before,
	&::after {
		display: none !important;
	}
`,Xr=(0,a.Ay)(Se)`
	flex-grow: 1;

	&::before,
	&::after {
		display: none !important;
	}
`,Gr=a.Ay.p`
	all: revert;

	margin: 0 0 8px 0 !important;
	font-family: Roboto, sans-serif !important;
	font-size: 10px !important;
	font-weight: 500 !important;
	text-transform: none !important;
	font-style: normal !important;
	text-decoration: none !important;
	line-height: normal !important;
	letter-spacing: normal !important;
	word-spacing: normal !important;
`,Jr=a.Ay.span`
	color: #a4afb6;
`,eo=a.Ay.p`
	all: revert;

	margin: 4px 0 0 0 !important;
	color: #a4afb6 !important;
	font-family: Roboto, sans-serif !important;
	font-size: 10px !important;
	font-weight: normal !important;
	text-transform: none !important;
	font-style: normal !important;
	text-decoration: none !important;
	line-height: normal !important;
	letter-spacing: normal !important;
	word-spacing: normal !important;
`,to=(0,a.Ay)(Xn)`
  --line-height: 1.5;
  --max-rows: 6;

  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  -webkit-line-clamp: var( --max-rows ) !important;
  max-height: calc( ( 1em * var( --line-height ) * var( --max-rows ) ) ) !important;
  overflow: hidden !important;

  & > p {
	margin: 0 !important; // To make the ellipsis look better on multi-paragraph content.
  }
`;function no(e){const t=Cr(e.isActive,{block:"nearest",inline:"nearest"}),n=Tn(e.note.content);return o().createElement(Yr,{isActive:e.isActive,onClick:e.onClick,ref:t},o().createElement(Zr,null,o().createElement(y,{variant:e.isActive||e.note.isUnreadThread()?"solid":"ghost",size:"sm",muted:e.note.isResolved},e.note.id)),o().createElement(Xr,null,o().createElement(Gr,null,e.note.author.name," ",o().createElement(Jr,null,e.note.getFormattedCreatedAt())),o().createElement(to,{disableInteractions:!0},n),e.note.repliesCount>0&&o().createElement(eo,null,Qr("%s replies","elementor-pro").replace("%s",e.note.repliesCount))))}no.propTypes={note:Br.instanceOf(Ye).isRequired,onClick:Br.func,isActive:Br.bool};var ro=n(7598);const oo=a.Ay.h4`
  all: revert;

  padding: 10px 12px !important;
  background: #fff !important;
  font-family: Roboto, sans-serif !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  color: #6d7882 !important;
  margin: 1px 0 0 0 !important;
  line-height: 1.2 !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  position: relative !important;

  &::before, &::after {
    display: none !important;
  }
`,ao=a.Ay.span`
  color: #a4afb6;
  font-size: 11px;
`;function io(e){return o().createElement(oo,null,e.children," ",e.count&&o().createElement(ao,null,"(",e.count,")"))}io.propTypes={children:ro.oneOfType([ro.node,ro.arrayOf(ro.node)]),count:ro.number};var lo=n(2470).__;const so=(0,a.Ay)(Se)`
	display: flex !important;
	align-items: center !important;
	justify-content: center !important;
	height: 100% !important;
	width: 100% !important;
	text-align: center !important;
	padding: 13px 20px 43px 20px !important;
`,co=(0,a.Ay)(Se)`
	font-size: 30px !important;
	color: #a4afb6 !important;
	margin: 0 0 20px 0 !important;
`,po=a.Ay.h4`
	all: revert;

	font-family: Roboto, sans-serif !important;
	font-size: 16px !important;
	font-weight: 700 !important;
	text-transform: none !important;
	font-style: normal !important;
	text-decoration: none !important;
	line-height: 1.4 !important;
	letter-spacing: normal !important;
	word-spacing: normal !important;
	color: #6d7882 !important;
	margin: 0 0 12px 0 !important;
  	padding: 0 15px !important;

	&::before, &::after {
		display: none;
	}
`,mo=a.Ay.p`
	all: revert;

	font-family: Roboto, sans-serif !important;
	font-size: 11px !important;
	font-weight: normal !important;
	text-transform: none !important;
	font-style: normal !important;
	text-decoration: none !important;
	line-height: 1.5 !important;
	letter-spacing: normal !important;
	word-spacing: normal !important;
	margin: 0 !important;
	color: #6d7882 !important;
`,uo=a.Ay.a`
	all: revert;

	display: inline-flex !important;
	justify-content: center !important;
	align-item: center !important;
	font-family: Roboto, sans-serif !important;
	font-size: 12px !important;
	font-weight: 500 !important;
	text-transform: none !important;
	font-style: normal !important;
	text-decoration: none !important;
	line-height: 1.4 !important;
	letter-spacing: normal !important;
	word-spacing: normal !important;
	margin: 42px 0 0 0 !important;
	color: #6d7882 !important;

	> i {
		color: #a4afb7 !important;
		font-size: 18px !important;
		margin-inline-start: 4px !important;
	}

	&:hover {
		i::before {
			color: #58d0f5;
			content: '\\e926'; // eicon-info-circle
		}
	}
`;function fo(){return o().createElement(so,null,o().createElement("div",null,o().createElement(co,null,o().createElement(w,{className:"eicon-commenting-o"})),o().createElement(po,null,lo("Share your thoughts with a Note","elementor-pro")),o().createElement(mo,null,lo("Select an element on the page to leave a comment, ask a question, etc.","elementor-pro")),o().createElement(uo,{href:"https://go.elementor.com/app-notes/",target:"_blank",className:"elementor-clickable"},lo("Learn More","elementor-pro"),o().createElement(w,{className:"eicon-info"}))))}var go=n(7619);const ho=(0,a.Ay)(i).attrs((()=>({as:go.Qg})))`
  --font-weight: 600 !important;
  --font-size: inherit !important;
  --font-family: inherit !important;
`,yo=(0,a.Ay)(w)`
  color: var( --color ) !important; // Inherited from the <Toast /> component.
`;var bo=n(7598);const vo={default:{background:"#f1f2f3",icon:"#69727d",action:"#69727d"},success:{background:"#e9fbee",icon:"#1d6d38",action:"#1d6d38"},warning:{background:"#fff5e6",icon:"#976402",action:"#976402"},info:{background:"#e6f6ff",icon:"#006bb8",action:"#006bb8"},danger:{background:"#fde8ec",icon:"#b92136",action:"#b92136"}},xo=(0,a.Ay)(go.y8)`
  display: flex !important;
  gap: 8px !important;
  align-items: center !important;
  width: 100% !important;
  box-sizing: border-box !important;
  padding: 12px 16px !important;
  font-size: 14px !important;
  line-height: normal !important;
  color: #3a3f45 !important;
  text-align: start !important;
  border-radius: 6px !important;
  box-shadow: 0 0 15px 0 rgba( 0,0,0,.2 ) !important;
  animation-duration: 400ms !important;
  animation-timing-function: cubic-bezier( 0.16, 1, 0.3, 1 ) !important;
  background-color: ${({variant:e})=>vo[e].background} !important;

	&[data-state="open"] {
	  animation-name: ${z} !important;
	}

	&[data-state="closed"] {
	  animation-name: ${O} !important;
	}

	${yo} {
	  --color: ${({variant:e})=>vo[e].icon} !important;
	}

	${ho} {
	  --color: ${({variant:e})=>vo[e].icon} !important;
	}
`;xo.propTypes={variant:bo.oneOf(["default","success","warning","info","danger"]).isRequired},xo.defaultProps={variant:"default"};const wo=xo,Eo=(0,a.Ay)(go.Sb)`
	font-weight: bold !important;
`,Ao=(0,a.Ay)(go.aD)`
  font-weight: normal !important;
`,ko=(0,a.Ay)(i).attrs((()=>({as:go.eC})))`
  --height: 1em !important;
  --width: 1em !important;
  --display: block !important;

  margin-inline-start: auto !important;
  position: relative !important;

  &::before,
  &::after {
	content: '' !important;
	display: block !important;
	position: absolute !important;
	left: 50% !important;
	top: 50% !important;
	margin-left: -1px !important;
	margin-top: -.5em !important;
	height: 1em !important;
	width: 2px;
	border-radius: 9999px !important;
	background-color: #69727d !important;
	transform-origin: center center !important;
	transition: .3s all;
  }

  &::before {
	transform: rotate( 45deg ) !important;
  }

  &::after {
	transform: rotate( -45deg ) !important;
  }

  &:hover::before,
  &:hover::after {
	background-color: #232629 !important
  }
`;var Co=n(2470).__,Ro=n(7598);function To(e){const{route:t}=Je(),{activeThread:n,isThreadActive:a,setActive:i,clearActive:l}=lt(),[s,c]=(0,r.useState)(!1),[p,m]=function(e){const{elements:t}=nt();return(0,r.useMemo)((()=>{if(!e?.length||!t?.size)return[[],[]];const n=e.reduce(((e,n)=>(e[t.has(n.elementId)?"viewable":"nonViewable"].push(n),e)),{viewable:[],nonViewable:[]});return Object.values(n)}),[e,t])}(e.notes);return(0,r.useEffect)((()=>{const{noteId:e}=n?.data||{};if(e){!!p.find((t=>t.id===e&&t.isThread()))||l(e)}}),[p,n]),function(e,t){const n=(0,r.useRef)(!0),o=(0,r.useCallback)((()=>{n.current=!1}),[]);(0,r.useEffect)((()=>{n.current&&e(o)}),t)}((e=>{m.length>0&&(c(!0),e())}),[m]),o().createElement(o().Fragment,null,p.length?o().createElement(o().Fragment,null,o().createElement(io,{count:p.length},t.title),p.map((e=>o().createElement(no,{key:e.id,note:e,isActive:a(e.id),onClick:()=>i({type:at,data:{noteId:e.id}})})))):o().createElement(fo,null),o().createElement(wo,{open:s,onOpenChange:c,variant:"info"},o().createElement(yo,{className:"eicon-info-circle"}),o().createElement(Eo,null,Co("Some notes are not shown.","elementor-pro")),o().createElement(Ao,null,Co("This page contains notes on elements that are still in draft mode.","elementor-pro")),o().createElement(ko,null)))}To.propTypes={notes:Ro.arrayOf(Ro.instanceOf(Ye)).isRequired};class _o extends je{url="";fullURL="";title="";notesCount=0;static createFromResponse(e){return(new _o).init({url:e.url,fullURL:e.full_url,title:e.title,notesCount:e.notes_count})}}var zo=n(2470).__,$o=n(7598);const Io=a.Ay.a`
	position: absolute !important;
	font-size: 14px !important;
	inset-inline-end: 14px !important;
	top: 50% !important;
	margin-top: -.5em !important;
	color: #a4afb7 !important;
`;function Lo(e){const{route:{url:t}}=Je();return e.notesSummary.length?e.notesSummary.map((e=>o().createElement(io,{count:e.notesCount,key:e.url},e.title,e.url!==t&&o().createElement(Y,null,o().createElement(Y.Trigger,{asChild:!0},o().createElement(Io,{href:`${e.fullURL}#e:run:notes/open`,rel:"noopener noreferrer",target:"_blank",className:"elementor-clickable"},o().createElement(w,{className:"eicon-editor-external-link"}))),o().createElement(Y.Content,null,zo("Open page in a new tab","elementor-pro"),o().createElement(Y.Arrow,null)))))):o().createElement(fo,null)}Lo.propTypes={notesSummary:$o.arrayOf($o.instanceOf(_o)).isRequired};var Oo=n(2470).__;function So(){return o().createElement(Y,null,o().createElement(Y.Trigger,{asChild:!0},o().createElement(R,{name:"eicon-editor-close",onClick:()=>window.top.$e.run("notes/close")})),o().createElement(Y.Content,null,Oo("Close notes mode","elementor-pro"),o().createElement(Y.Arrow,null)))}var qo=n(2470).__;const Po=(0,a.Ay)(Se)`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  height: 100% !important;
  width: 100% !important;
  text-align: center !important;
  padding: 13px 13px 43px 13px !important;
`,Fo=a.Ay.p`
  all: revert;

  font-family: Roboto, sans-serif !important;
  font-size: 12px !important;
  font-weight: ${({weight:e})=>e||400} !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: normal !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  margin: 0 !important;
  color: #6d7882 !important;
`;function Mo(){return o().createElement(Po,null,o().createElement("div",null,o().createElement(Fo,{weight:700},qo("Could not load the panel.","elementor-pro")),o().createElement(Fo,null,qo("Please refresh the page and try again.","elementor-pro"))))}var Do=n(5835);const No=(0,a.Ay)(i).attrs((()=>({as:Do.bL})))`
  --border-color: #a4afb6;
  --background: #fff;
  --border: 1px solid var( --border-color );
  --border-radius: 3px;
  --width: 12px;
  --height: 12px;
  --display: inline-flex;

  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0;
  outline: none;
  transition: 0.2s all;
  overflow: hidden;

  &[data-state="checked"] {
    --border-color: #39b54a;
  }

  &:hover, &:focus {
	outline: none;
	--background: #eee;

	& > * {
	  --background: rgba(57, 181, 74, 0.8);
	}
  }
`,Ho=(0,a.Ay)(Do.C1)`
  all: revert;

  position: absolute !important;
  inset: 0 !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: #39b54a !important;
  color: #fff !important;
  outline: none !important;
  font-size: 8px !important;
`;function Uo(e){return o().createElement(No,e,o().createElement(Ho,null,o().createElement(w,{className:"eicon-check"})))}Uo.propTypes={...Do.bL.propTypes};var Vo=n(8430);const Wo=(0,a.Ay)(Vo.JU)`
  all: revert;

  font-size: 11px !important;
  color: #a4afb6 !important;
  font-weight: 500 !important;
  font-family: Roboto, sans-serif !important;
  user-select: none !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 8px !important;
  line-height: 2 !important;
`;var jo=n(8489);const Ko=(0,a.Ay)(i).attrs((()=>({as:jo.q7})))`
  --border-color: #a4afb6;
  --background: #fff;
  --border: 1px solid var( --border-color );
  --border-radius: 100%;
  --width: 12px;
  --height: 12px;
  --display: inline-flex;

  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0;
  outline: none;
  transition: 0.2s all;
  overflow: hidden;

  &[data-state="checked"] {
    --border-color: #39b54a;
  }

  &:hover, &:focus {
	outline: none;
	--background: #eee;

	& > * {
	  --background: rgba(57, 181, 74, 0.8);
	}
  }
`,Qo=(0,a.Ay)(jo.C1)`
  all: revert;

  position: absolute !important;
  top: 0 !important;
  right: 0 !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: #39b54a !important;
  color: #fff !important;
  outline: none !important;
  font-size: 8px !important;
  margin: 2px !important;
  border-radius: 100% !important;
  width: 6px !important;
  height: 6px !important;
`;function Bo(e){return o().createElement(Ko,e,o().createElement(Qo,null))}Bo.propTypes={...jo.q7.propTypes},Bo.Group=jo.z6;var Yo=n(9719);const Zo=(0,a.Ay)(Yo.b)`
  background: #f1f3f5;

  &[data-orientation=horizontal] {
	height: 1px;
	width: 100%;
	margin: 10px 0;
  }

  &[data-orientation=vertical] {
	height: 100%;
	width: 1px;
	margin: 0 10px;
  }
`;function Xo(){return o().createElement(Zo,null)}Xo.propTypes={...Yo.b.propTypes};const Go={enabled:!0,params:{}};const Jo="notes",ea="notes-summary";function ta(){const[e,t]=(0,r.useState)(Jo),n=(0,r.useMemo)((()=>Jo===e),[e]),o=(0,r.useMemo)((()=>ea===e),[e]),a=jr({enabled:n}),i=function(e={}){const[t]=Vr(),n=(0,r.useMemo)((()=>({...Go,...e})),[e]),o=(0,r.useMemo)((()=>ke({...t,...n.params||{}})),[n.params,t]);return(0,et.useQuery)(["notes/summary",o],(async({queryKey:[,e],signal:t})=>{const{data:n}=await window.top.$e.data.get("notes/summary",{parent_id:0,...e},{refresh:!0,signal:t});return n.data.map((e=>_o.createFromResponse(e)))}),{keepPreviousData:!0,enabled:n.enabled})}({enabled:o});return(0,r.useMemo)((()=>({...Jo===e?a:i,setView:t,view:e,isNotesView:n,isNotesSummaryView:o})),[a,i])}var na=n(2470).__,ra=n(7598);const oa=(0,a.Ay)(F.Content)`
  padding: 16px 16px 10px !important;
`;function aa(e){const[t,n]=Vr(),{direction:r}=Je();return o().createElement(F,{onOpenChange:e=>{e?window.top.$e.run("notes/open-panel-filters"):window.top.$e.run("notes/close-panel-filters")}},o().createElement(F.Trigger,{asChild:!0},o().createElement(R,{name:"eicon-ellipsis-h",size:"sm"})),o().createElement(oa,{align:"rtl"===r?"end":"start",sideOffset:5},o().createElement(Bo.Group,{value:e.view,onValueChange:e.setView,dir:r},o().createElement("div",null,o().createElement(Wo,null,o().createElement(Bo,{value:Jo}),na("Current page","elementor-pro"))),o().createElement("div",null,o().createElement(Wo,null,o().createElement(Bo,{value:ea}),na("All site","elementor-pro")))),o().createElement(Xo,null),o().createElement(Bo.Group,{value:t.only_relevant?"1":"0",onValueChange:e=>n({only_relevant:"1"===e||null}),dir:r},o().createElement("div",null,o().createElement(Wo,null,o().createElement(Bo,{value:"0"}),na("All notes","elementor-pro"))),o().createElement("div",null,o().createElement(Wo,null,o().createElement(Bo,{value:"1"}),na("Only yours","elementor-pro")))),o().createElement(Xo,null),o().createElement("div",null,o().createElement(Wo,{htmlFor:"notes-filter-show-resolved"},o().createElement(Uo,{id:"notes-filter-show-resolved",checked:null===t.is_resolved,onCheckedChange:e=>n({is_resolved:!!e&&null})}),na("Show resolved","elementor-pro"))),o().createElement("div",null,o().createElement(Wo,{htmlFor:"notes-filter-only-unread"},o().createElement(Uo,{id:"notes-filter-only-unread",checked:t.only_unread,onCheckedChange:e=>n({only_unread:!!e||null})}),na("Show unread only","elementor-pro"))),o().createElement(F.Arrow,null),o().createElement(F.CloseButton,null)))}aa.propTypes={view:ra.string.isRequired,setView:ra.func.isRequired};var ia=n(9460),la=n.n(ia),sa=n(7598);function ca(e){const{size:{defaultWidth:t}}=Sa(),[n,a]=(0,r.useState)({}),[i,l]=(0,r.useState)(e.defaultPosition),s=(0,r.useRef)({});s.current=i;const c=Ut((()=>{const{innerWidth:n,innerHeight:r}=window;a({top:0,left:0-.85*t,right:n-.15*t,bottom:r-(e.nodeRef.current?.querySelector(e.handleClass)?.offsetHeight||0)})}),100);return(0,r.useEffect)((()=>{(()=>{const{x:t,y:r}=s.current,{x:o,y:a}=e.defaultPosition;if(t===o&&r===a)return;const i=t<n.left||t>n.right?o:t,c=r<n.top||r>n.bottom?a:r;i===t&&c===r||l({x:i,y:c})})()}),[n]),(0,r.useEffect)((()=>(c(),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)})),[]),o().createElement(la(),{handle:e.handleClass,defaultPosition:e.defaultPosition,nodeRef:e.nodeRef,bounds:n,position:s.current,onStop:(e,t)=>{const{x:n,y:r}=t;l({x:n,y:r})}},e.children)}ca.propTypes={children:sa.oneOfType([sa.node,sa.arrayOf(sa.node)]),handleClass:sa.string,defaultPosition:sa.shape({x:sa.number,y:sa.number}),nodeRef:sa.shape({current:sa.object}),isFloating:sa.bool};var pa=n(7598);const ma=(0,a.Ay)(Se)`
  flex: 1 1 auto !important;
  inset: 0 !important;
  display: inline-flex !important;
  flex-direction: column !important;
  overflow: hidden !important;

  &.resizing {
    user-select: none;
  }
`,da=(0,a.Ay)(Se)`
  overflow-y: auto !important;
  flex-grow: 1 !important;
  flex-shrink: 1 !important;
`,ua={height:20},fa=(0,a.Ay)(Se)`
  flex: 0 0 ${ua.height}px !important;
  display: inline-flex !important;
  justify-content: center !important;
  align-items: center !important;
  background-color: #fff !important;
  margin-top: 1px !important;
  cursor: row-resize !important;
`;function ga(e){const{size:{defaultHeight:t}}=Sa(),n=(0,r.useRef)(null),a=(0,r.useRef)(null),i=(0,r.useRef)(null);let l,s,c=0,p=0;const m=e=>{n.current.classList.add("resizing");const t=e.clientY-p;s+=t,s<c&&(s=c),s>l&&(s=l),p=e.clientY,f()},d=()=>{document.removeEventListener("mousemove",m),n.current.classList.remove("resizing")},u=e=>{p=e.clientY,document.addEventListener("mousemove",m),document.addEventListener("mouseup",d)},f=()=>{n.current.style.height=`${s}px`};return(0,r.useEffect)((()=>(s=t,f(),c+=ua.height,l=window.innerHeight,i.current.addEventListener("mousedown",u),()=>{i.current&&i.current.removeEventListener("mousedown",u)})),[e.children]),o().createElement(ma,{ref:n},o().createElement(da,{ref:a},e.children),o().createElement(fa,{ref:i},o().createElement("i",{className:"eicon-ellipsis-h"})))}ga.propTypes={children:pa.oneOfType([pa.node,pa.arrayOf(pa.node)])};var ha=n(7598);const ya=(0,a.Ay)(Se)`
  position: relative !important;
  display: flex !important;
  flex-direction: column !important;
  overflow: hidden !important;
`;function ba(e){return o().createElement(ya,e,o().createElement(ga,null,e.children))}ba.propTypes={children:ha.oneOfType([ha.node,ha.arrayOf(ha.node)])};const va=(0,a.Ay)(Se)`
  background: #fff !important;
`;var xa=n(7598);const wa=(0,a.Ay)(Se)`
  display: grid !important;
  grid-template-columns: 1fr 2fr 1fr !important;
  grid-column-gap: 10px !important;
  align-items: center !important;
  background: #ffffff !important;
  padding: 6px 8px !important;
  flex-shrink: 0 !important;

  ${({isFloating:e})=>e&&a.AH`
  	cursor: move;
  `}
`;function Ea(e){const{floating:{active:t,handleClassName:n}}=Sa();return o().createElement(wa,{className:n,isFloating:t},e.children)}Ea.propTypes={children:xa.oneOfType([xa.node,xa.arrayOf(xa.node)])};var Aa=n(7598);const ka=(0,a.Ay)(Se)`
  display: flex !important;
  justify-self: ${({align:e})=>e} !important;
`;ka.propTypes={children:Aa.oneOfType([Aa.node,Aa.arrayOf(Aa.node)]),align:Aa.oneOf(["start","end"]).isRequired};const Ca=ka,Ra=a.Ay.h3`
	all: revert;

	font-family: Roboto, sans-serif !important;
	font-size: 13px !important;
	font-weight: 400 !important;
	text-transform: none !important;
	font-style: normal !important;
	text-decoration: none !important;
	line-height: 24px !important;
	letter-spacing: normal !important;
	word-spacing: normal !important;
  	color: #6d7882 !important;
  	text-align: center !important;
  	flex-grow: 1 !important;
  	margin: 0 !important;
  	user-select: none !important;

	&::before, &::after {
		display: none !important;
	}
`;var Ta=n(7598);const _a=(0,a.Ay)(Se)`
  position: absolute !important;
  inset: 0 !important;
  background: #e6e9ec !important;
  transition: 0.3s all !important;
  font-size: 30px !important;
  display: grid !important;
  place-items: center !important;
  color: #a4afb6 !important;

  ${({show:e})=>!e&&a.AH`
	opacity: 0 !important;
	pointer-events: none !important;
  `}
`;function za(e){return o().createElement(_a,e,o().createElement(w,{className:"eicon-loading eicon-animation-spin"}))}za.propTypes={show:Ta.bool};var $a=n(7598);const Ia=(0,a.Ay)(Se)`
  display: flex !important;
  flex-direction: column !important;
  background: #e6e9ec !important;
  overflow: hidden !important;
  border-radius: 3px !important;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1) !important;

  ${({defaultSize:e})=>e&&a.AH`
	width: ${e.width}px !important;
	max-height: 100vh !important;
  `}

  ${({isFloating:e})=>e&&a.AH`
	position: fixed !important;
	top: 0 !important;
	inset-inline-start: 0 !important;
	z-index: ${Ee} !important;
  `}

  // The class comes from the react-draggable component.
  &:not(.react-draggable-dragging) {
    transition: transform 0.3s ease-out !important;
  }

  *:focus {
    outline: none;
  }
`,La=(0,r.createContext)({});function Oa(e){const t=(0,r.useRef)(),n=(0,r.useMemo)((()=>({floating:{active:!!e.isFloating,handleClassName:"floating-handle"},size:{defaultWidth:e.defaultSize.width,defaultHeight:e.defaultSize.height}})),[e.isFloating]);return o().createElement(La.Provider,{value:n},e.isFloating?o().createElement(ca,{handleClass:`.${n.floating.handleClassName}`,defaultPosition:e.defaultPosition,nodeRef:t},o().createElement(Ia,(0,x.A)({},e,{ref:t,defaultSize:e.defaultSize}))):o().createElement(Ia,(0,x.A)({},e,{defaultSize:e.defaultSize})))}function Sa(){const e=(0,r.useContext)(La);if(!e)throw new Error("`usePanelContext` must be used inside Panel's components.");return e}Oa.propTypes={children:$a.oneOfType([$a.node,$a.arrayOf($a.node)]),defaultPosition:$a.shape({x:$a.number,y:$a.number}),defaultSize:$a.shape({width:$a.number,height:$a.number}),isFloating:$a.bool},Oa.Header=Ea,Oa.HeaderTitle=Ra,Oa.HeaderSideCol=Ca,Oa.Body=ba,Oa.Loading=za,Oa.Footer=va;var qa=n(2470).__,Pa=n(7598);const Fa=(0,a.Ay)(R)`
  animation-duration: 1.3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  &[data-state="loading"] {
	animation-name: ${S};
  }

  &[data-state="none"] {
	animation-name: none;
  }
`;function Ma(e){const[t,n]=(0,r.useState)(e.isFetching);return Ge((()=>{e.isFetching&&n(!0)}),[e.isFetching]),o().createElement(Y,null,o().createElement(Y.Trigger,{asChild:!0},o().createElement(Fa,{name:"eicon-sync","data-state":t?"loading":"none",onClick:()=>{window.top.$e.run("notes/refresh-panel"),e.refetch()},onAnimationIteration:()=>{e.isFetching||n(!1)}})),o().createElement(Y.Content,null,qa("Refresh","elementor-pro"),o().createElement(Y.Arrow,null)))}Ma.propTypes={isFetching:Pa.bool.isRequired,refetch:Pa.func.isRequired};var Da=n(2470).__;function Na(){const{direction:e}=Je(),{view:t,setView:n,data:r=[],refetch:a,isSuccess:i,isLoading:l,isFetching:s,isError:c,isNotesView:p,isNotesSummaryView:m}=ta();return o().createElement(Oa,{isFloating:!0,defaultPosition:{x:"rtl"===e?-50:50,y:50},defaultSize:{width:240,height:400}},o().createElement(Oa.Header,null,o().createElement(Oa.HeaderSideCol,{align:"start"},o().createElement(aa,{view:t,setView:n})),o().createElement(Oa.HeaderTitle,null,Da("Notes Panel","elementor-pro")),o().createElement(Oa.HeaderSideCol,{align:"end"},o().createElement(Ma,{isFetching:s,refetch:a}),o().createElement(So,null))),o().createElement(Oa.Body,null,o().createElement(Oa.Loading,{show:l}),c&&o().createElement(Mo,null),i&&p&&o().createElement(To,{notes:r}),i&&m&&o().createElement(Lo,{notesSummary:r})),o().createElement(Oa.Footer,null))}var Ha=n(5534);const Ua=(0,a.Ay)(go.US)`
  display: flex !important;
  flex-direction: column !important;
  gap: 12px !important;
  position: fixed !important;
  max-width: 960px !important;
  width: 100% !important;
  left: 50% !important;
  bottom: 10px !important;
  padding-inline: 0 10px !important;
  transform: translateX( -50% ) !important;
  z-index: ${Ee} !important;
`,Va=window.top.$e.store.getReduxStore();function Wa(){const{is_debug:e}=Je(),t=e?o().StrictMode:o().Fragment;return o().createElement(t,null,o().createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"}),o().createElement(ot.Kq,{store:Va},o().createElement(rt,null,o().createElement(go.tE,{duration:1/0},o().createElement(Ua,null),o().createElement(et.QueryClientProvider,{client:bn},o().createElement(Kr,null),o().createElement(Na,null),e&&o().createElement(Ha.ReactQueryDevtools,{initialIsOpen:!1}))))))}}}]);