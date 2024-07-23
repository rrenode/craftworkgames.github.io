"use strict";(self.webpackChunkmonogame_extended_website=self.webpackChunkmonogame_extended_website||[]).push([[3851],{6129:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(4848),r=t(8453);const s={id:"inputlistener",title:"InputListener",sidebar_label:"InputListener"},o=void 0,a={id:"features/input/inputlistener/inputlistener",title:"InputListener",description:"MonoGame.Extended offers input listeners that can be used to subscribe to input events instead of having to poll for input changes.  These listeners include",source:"@site/docs/features/input/inputlistener/inputlistener.md",sourceDirName:"features/input/inputlistener",slug:"/features/input/inputlistener/",permalink:"/docs/features/input/inputlistener/",draft:!1,unlisted:!1,editUrl:"https://github.com/craftworkgames/craftworkgames.github.io/tree/develop/docs/features/input/inputlistener/inputlistener.md",tags:[],version:"current",frontMatter:{id:"inputlistener",title:"InputListener",sidebar_label:"InputListener"},sidebar:"docs",previous:{title:"MouseExtended",permalink:"/docs/features/input/mouseextended/"},next:{title:"Gum Forms",permalink:"/docs/features/ui/gum/gum-forms/"}},l={},d=[{value:"Using the Listeners",id:"using-the-listeners",level:2},{value:"Using the <code>InputListenerComponent</code>",id:"using-the-inputlistenercomponent",level:2}];function h(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"MonoGame.Extended"})," offers input listeners that can be used to subscribe to input events instead of having to poll for input changes.  These listeners include"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"KeyboardListener"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"MouseListener"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"GamePadListener"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"TouchListener"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"using-the-listeners",children:"Using the Listeners"}),"\n",(0,i.jsx)(n.p,{children:"To get started using a listener, first create an instance of them"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"// highlight-next-line\r\nprivate readonly KeyboardListener _keyboardListener;\r\n// highlight-next-line\r\nprivate readonly MouseListener _mouseListener;\r\n// highlight-next-line\r\nprivate readonly GamePadListener _gamePadListener;\r\n// highlight-next-line\r\nprivate readonly TouchListener _touchListener;\r\n\r\nprotected override void Initialize()\r\n{\r\n    // highlight-next-line\r\n    _keyboardListener = new KeyboardListener();\r\n    // highlight-next-line\r\n    _gamePadListener = new GamePadListener();\r\n    // highlight-next-line\r\n    _mouseListener = new MouseListener();\r\n    // highlight-next-line\r\n    _touchListener = new TouchListener();\r\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Next ensure that you update the listener each frame"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"protected override void Update(GameTime gameTime)\r\n{\r\n    // highlight-next-line\r\n    _keyboardListener.Update(gameTime);\r\n    // highlight-next-line\r\n    _gamePadListener.Update(gameTime);\r\n    // highlight-next-line\r\n    _mouseListener.Update(gameTime);\r\n    // highlight-next-line\r\n    _touchListener.Update(gameTime);\r\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Finally subscribe to any events of the listeners that you want to be notified about"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:'private readonly KeyboardListener _keyboardListener;\r\nprivate readonly MouseListener _mouseListener;\r\nprivate readonly GamePadListener _gamePadListener;\r\nprivate readonly TouchListener _touchListener;\r\n\r\nprotected override void Initialize()\r\n{\r\n    _keyboardListener = new KeyboardListener();\r\n    _gamePadListener = new GamePadListener();\r\n    _mouseListener = new MouseListener();\r\n    _touchListener = new TouchListener();\r\n\r\n    // highlight-next-line\r\n    _keyboardListener.KeyPressed += (sender, args) => { Window.Title = $"Key {args.Key} Pressed"; };\r\n    // highlight-next-line\r\n    _mouseListener.MouseClicked += (sender, args) => { Window.Title = $"Mouse {args.Button} Clicked"; };\r\n    // highlight-next-line\r\n    _gamePadListener.ButtonDown +=  (sender, args) => { Window.Title = $"Key {args.Button} Down"; };\r\n    // highlight-next-line\r\n    _touchListener.TouchStarted +=  (sender, args) => { Window.Title = $"Touched"; };\r\n}\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"using-the-inputlistenercomponent",children:["Using the ",(0,i.jsx)(n.code,{children:"InputListenerComponent"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"MonoGame.Extended"})," also provides an ",(0,i.jsx)(n.code,{children:"InputListenerComponent"})," that can be created and added to the game component collection to have it automatically updated for you each frame.  Using it is similar to using hte individual listeners, you just have to create an instance of it and add it to the components collection"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"// highlight-next-line\r\nprivate readonly KeyboardListener _keyboardListener;\r\n// highlight-next-line\r\nprivate readonly MouseListener _mouseListener;\r\n// highlight-next-line\r\nprivate readonly GamePadListener _gamePadListener;\r\n// highlight-next-line\r\nprivate readonly TouchListener _touchListener;\r\n\r\nprotected override void Initialize()\r\n{\r\n    // highlight-next-line\r\n    _keyboardListener = new KeyboardListener();\r\n    // highlight-next-line\r\n    _gamePadListener = new GamePadListener();\r\n    // highlight-next-line\r\n    _mouseListener = new MouseListener();\r\n    // highlight-next-line\r\n    _touchListener = new TouchListener();\r\n\r\n    // highlight-next-line\r\n    Components.Add(new InputListenerComponent(this, _keyboardListener, _gamePadListener, _mouseListener, _touchListener));\r\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);