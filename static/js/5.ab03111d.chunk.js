(this["webpackJsonpgithub-issue-gather"]=this["webpackJsonpgithub-issue-gather"]||[]).push([[5],{163:function(n,e,t){"use strict";var i=t(164);t.d(e,"a",(function(){return i.a})),t.d(e,"b",(function(){return i.b})),t.d(e,"c",(function(){return i.c})),t.d(e,"d",(function(){return i.d}))},164:function(n,e,t){"use strict";t.d(e,"d",(function(){return o})),t.d(e,"b",(function(){return c})),t.d(e,"a",(function(){return a})),t.d(e,"c",(function(){return l}));var i=t(55),o=Object(i.a)({},"search","\uac80\uc0c9 \uacb0\uacfc"),c=10,a=1,l=function(n){return n?n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):n}},182:function(n,e,t){"use strict";var i,o=t(160),c=t(0),a=t.n(c),l=t(296),r=t(305),s=t(287),d=t(304),u=t(86),b=t(308),j=t(292),h=t(309),v=t(163),p=t(20),f=Object(u.b)(l.b.Item)(i||(i=Object(o.a)(["\n  font-size: 24px;\n  font-family: GmarketSansLight;\n  padding: 40px 20px;\n\n  .ant-anchor-link-title {\n    font-size: 24px;\n    font-family: GmarketSansLight;\n  }\n  a.anchor {\n    color: #000;\n  }\n\n  p.issue {\n    margin-top: 15px;\n    font-size: 20px;\n  }\n\n  .add-button {\n    font-size: 22px;\n    cursor: pointer;\n  }\n\n  .anticon.anticon-heart.active {\n    color: #ff0000;\n  }\n"])));e.a=function(n){var e,t,i,o,c,u,m,O,x,g=n.bookMarkList,k=n.handleAddBookMark,y=n.handleRemoveBookMark,M=n.issueItems,N=n.searchItems,S=function(n){var e=n.icon,t=n.text,i=n.stringIcon;return Object(p.jsxs)(r.b,{children:[e?a.a.createElement(e):i,t]})},_=function(n){var e=new Date(n);return e.setHours(e.getHours()+9),e.toISOString().replace("T"," ").substring(0,19)},w=function(){return null===g||void 0===g?void 0:g.find((function(n){return n.id===(null===N||void 0===N?void 0:N.id)}))},C=[{count:Object(v.c)(null===N||void 0===N?void 0:N.forks_count),icon:b.a,key:"fork"},{count:Object(v.c)(null===N||void 0===N?void 0:N.watchers),icon:j.a,key:"watcher"}],z=[{count:Object(v.c)(null===M||void 0===M||null===(e=M.reactions)||void 0===e?void 0:e.confused),icon:"\ud83d\ude15",key:"confused"},{count:Object(v.c)(null===M||void 0===M||null===(t=M.reactions)||void 0===t?void 0:t.eyes),icon:"\ud83d\udc40",key:"eyes"},{count:Object(v.c)(null===M||void 0===M||null===(i=M.reactions)||void 0===i?void 0:i.heart),icon:"\u2764",key:"heart"},{count:Object(v.c)(null===M||void 0===M||null===(o=M.reactions)||void 0===o?void 0:o.hooray),icon:"\ud83c\udf89",key:"hooray"},{count:Object(v.c)(null===M||void 0===M||null===(c=M.reactions)||void 0===c?void 0:c.laugh),icon:"\ud83e\udd23",key:"laugh"},{count:Object(v.c)(null===M||void 0===M||null===(u=M.reactions)||void 0===u?void 0:u.rocket),icon:"\ud83d\ude80",key:"rocket"}];return Object(p.jsxs)(f,{actions:N?C.map((function(n){return Object(p.jsx)(S,{icon:n.icon,text:n.count},n.key)})):M?z.map((function(n){return Object(p.jsx)(S,{stringIcon:n.icon,text:n.count},n.key)})):[""],children:[Object(p.jsx)(l.b.Item.Meta,{avatar:Object(p.jsx)(s.a,{src:(null===N||void 0===N||null===(m=N.owner)||void 0===m?void 0:m.avatar_url)||(null===M||void 0===M?void 0:M.user.avatar_url)}),title:Object(p.jsx)("a",{href:(null===N||void 0===N?void 0:N.html_url)||(null===M||void 0===M?void 0:M.html_url),className:"list-title",children:(null===N||void 0===N?void 0:N.full_name)||(null===M||void 0===M?void 0:M.title)}),description:(null===N||void 0===N?void 0:N.description)||(null===M||void 0===M?void 0:M.body)}),N&&Object(p.jsxs)(p.Fragment,{children:[null===N||void 0===N||null===(O=N.topics)||void 0===O?void 0:O.map((function(n){return Object(p.jsx)(d.a,{color:"success",className:"tags",children:n},n)})),Object(p.jsxs)("p",{className:"issue",children:["\ucd1d ",Object(v.c)(null===N||void 0===N?void 0:N.open_issues_count),"\uac1c\uc758 \uc774\uc288\uac00 \uc788\uc2b5\ub2c8\ub2e4."]}),Object(p.jsxs)("div",{className:"footer-container",children:[Object(p.jsxs)("p",{className:"updated",children:["Updated"," ",_((null===N||void 0===N?void 0:N.pushed_at)||(null===M||void 0===M?void 0:M.updated_at))]}),Object(p.jsxs)("button",{className:"add-button",onClick:function(){return w()?y&&y(null===N||void 0===N?void 0:N.id):k&&k({repo:null===N||void 0===N?void 0:N.name,open_issues_count:null===N||void 0===N?void 0:N.open_issues_count,id:null===N||void 0===N?void 0:N.id,owner:null===N||void 0===N?void 0:N.owner.login,full_name:null===N||void 0===N?void 0:N.full_name})},children:[Object(p.jsx)(h.a,{className:w()?"active":""})," \ubd81\ub9c8\ud06c",w()&&" \ud574\uc81c"]})]})]}),M&&Object(p.jsxs)("div",{className:"footer-container",children:[Object(p.jsx)(d.a,{color:"success",className:"tags",children:(x=null===M||void 0===M?void 0:M.repository_url,null===x||void 0===x?void 0:x.split("https://api.github.com/repos/")[1])},"repo"),Object(p.jsxs)("p",{className:"updated",children:["Updated ",_(null===M||void 0===M?void 0:M.updated_at)]})]})]})}},188:function(n,e,t){"use strict";var i,o,c=t(95),a=t(160),l=(t(0),t(70)),r=t(294),s=t(86),d=t(297),u=t(307),b=t(163),j=t(20),h=Object(s.b)(d.a)(i||(i=Object(a.a)(["\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n\n  .menu-button {\n    all: unset;\n    cursor: pointer;\n  }\n\n  .menu-icon,\n  .anticon.anticon-arrow-left,\n  .ant-page-header-heading-title {\n    font-size: 30px;\n  }\n  .ant-page-header-back-button {\n    display: "," !important;\n  }\n"])),(function(n){return n.isMain?"none":"block"})),v=function(n){var e=n.handleMoveBack,t=n.handleMoveHome,i=n.pathName,o=n.isMain;return Object(j.jsx)(h,{onBack:e,isMain:o,title:o?"":b.d[i],extra:[Object(j.jsx)("button",{className:"menu-button",onClick:t,children:Object(j.jsx)(u.a,{className:"menu-icon"})},"menu")]})},p=t(35),f=["children"],m=s.b.div(o||(o=Object(a.a)(["\n  position: relative;\n\n  .ant-page-header-content {\n    padding: 0;\n  }\n"])));e.a=function(n){var e=n.children,t=Object(c.a)(n,f).isMain,i=Object(l.e)(),o=i.location.pathname.split("/")[1];return Object(j.jsxs)(m,{children:[Object(j.jsx)(v,{isMain:t,handleMoveBack:function(){i.goBack()},handleMoveHome:function(){i.push(p.a)},pathName:o}),Object(j.jsx)(r.a.Content,{children:e})]})}},303:function(n,e,t){"use strict";t.r(e);var i,o,c,a,l=t(93),r=t(160),s=t(0),d=t(36),u=t(86),b=t(302),j=t(157),h=t(301),v=t(295),p=t(296),f=t(52),m=t(189),O=t(66),x=t(95),g=t(299),k=t(215),y=t(20),M=["inputMode","handleModalToggle"],N=Object(u.b)(g.a)(i||(i=Object(r.a)(["\n  width: 90%;\n  input {\n    font-size: 28px;\n    font-family: GmarketSansMedium;\n  }\n\n  .ant-btn.ant-btn-primary.ant-btn-lg.ant-input-search-button {\n    height: 58px;\n  }\n\n  .anticon.anticon-close-circle.ant-input-clear-icon,\n  .anticon.anticon-search {\n    font-size: 24px;\n  }\n\n  .ant-input-group-addon {\n    background-color: ",";\n    color: #fff;\n  }\n"])),(function(n){return n.theme.mainColor})),S=function(n){var e=n.inputMode,t=n.handleModalToggle,i=Object(x.a)(n,M);return Object(y.jsx)(N,Object(O.a)(Object(O.a)({},i),{},{placeholder:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",addonAfter:Object(y.jsx)("button",{onClick:function(){return!e&&t()},children:Object(y.jsx)(k.a,{})}),allowClear:!0,readOnly:!e,onClick:function(){return!e&&t()},size:"large"}))},_=t(188),w=t(300),C=t(298),z=t(304),L=u.b.div(o||(o=Object(r.a)(["\n  width: 100%;\n  border-bottom: ",";\n  header.bookmark {\n    display: flex;\n    justify-content: space-between;\n    padding: 20px 40px;\n  }\n  p.title,\n  .remove-all {\n    font-family: GmarketSansMedium;\n    font-size: 24px;\n  }\n\n  .remove-all {\n    cursor: pointer;\n    color: ",";\n  }\n\n  section.tags-section {\n    padding: 0 40px 20px 40px;\n  }\n\n  .tags {\n    cursor: pointer;\n    padding: 10px;\n    margin-bottom: 10px;\n    font-size: 20px;\n    font-family: GmarketSansLight;\n  }\n\n  .anticon.anticon-close.ant-tag-close-icon {\n    font-size: 20px;\n  }\n\n  div.empty-tags {\n    margin-bottom: 30px;\n    text-align: center;\n    font-size: 20px;\n    font-family: GmarketSansMedium;\n  }\n"])),(function(n){return n.isBookMark?"1px solid #c8c8c8":"none"}),(function(n){return n.theme.mainColor})),B=function(n){var e=n.handleRemoveAll,t=n.handleRemove,i=n.handleMoveSearchOnClick,o=n.itemList,c=n.isBookMark;return Object(y.jsxs)(L,{isBookMark:!0,children:[Object(y.jsxs)("header",{className:"bookmark",children:[Object(y.jsx)("p",{className:"title",children:c?"\ub098\uc758 \ubd81\ub9c8\ud06c":"\ucd5c\uadfc \uac80\uc0c9\uc5b4"}),Object(y.jsx)("button",{className:"remove-all",onClick:function(){return(null===o||void 0===o?void 0:o.length)?e(c):alert("\uc800\uc7a5 \ub41c \uc815\ubcf4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.")},children:"\uc804\uccb4 \uc0ad\uc81c"})]}),Object(y.jsx)("section",{className:"tags-section",children:(null===o||void 0===o?void 0:o.length)?o.map((function(n){return Object(y.jsx)(z.a,{onClick:function(){return!c&&i&&i(n.full_name)},closable:!0,onClose:function(){return t(n.id,c)},color:"success",className:"tags",children:n.full_name},n.id)})):Object(y.jsx)("div",{className:"empty-tags",children:c?"\uc800\uc7a5\ub41c \ubd81\ub9c8\ud06c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.":"\ucd5c\uadfc \uac80\uc0c9\uc5b4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})})]})},I=Object(u.b)(w.a)(c||(c=Object(r.a)(["\n  margin: 0 auto;\n  top: none !important;\n  bottom: 0 !important;\n  padding: 0;\n  height: calc(100vh - 100px);\n  .ant-modal-close-x {\n    height: 91px;\n    line-height: 91px;\n    font-size: 28px;\n  }\n  .ant-modal-content {\n    height: calc(100vh - 100px);\n  }\n"]))),R=function(n){var e=n.modalToggle,t=n.recentlySearch,i=n.handleModalToggle,o=n.onFinish,c=n.handleRemoveAll,a=n.handleRemove,r=n.handleMoveSearchOnClick,d=C.a.useForm(),u=Object(l.a)(d,1)[0];return Object(s.useEffect)((function(){return function(){u.resetFields()}}),[e]),Object(y.jsx)(I,{title:Object(y.jsx)(C.a,{form:u,onFinish:o,children:Object(y.jsx)(C.a.Item,{name:"search",noStyle:!0,children:Object(y.jsx)(S,{inputMode:!0,handleModalToggle:i})})}),visible:e,onCancel:i,width:750,footer:null,children:Object(y.jsx)(B,{itemList:t,handleRemoveAll:c,handleRemove:a,handleMoveSearchOnClick:r})})},T=t(48),q=t(163),A=t(182),F=u.b.div(a||(a=Object(r.a)(["\n  position: relative;\n  .spin {\n    position: absolute;\n    top: 500px;\n    left: 50%;\n    right: 50%;\n    background: #000;\n  }\n  .search-input-wrap {\n    display: flex;\n    justify-content: center;\n  }\n"])));e.default=function(){var n=Object(d.e)((function(n){return n.githubState})),e=n.bookMarkList,t=n.recentlySearch,i=n.issueList,o=n.isLoading,c=Object(s.useState)(!1),a=Object(l.a)(c,2),r=a[0],u=a[1],O=Object(s.useState)(!1),x=Object(l.a)(O,2),g=x[0],k=x[1],M=Object(s.useState)(void 0),N=Object(l.a)(M,2),w=N[0],C=N[1],z=Object(s.useState)(20),L=Object(l.a)(z,2),I=L[0],G=L[1],E=localStorage.getItem("bookMark"),H=Object(d.d)(),D=Object(s.useCallback)((function(){u((function(n){return!n}))}),[r]),J=function(){C(void 0),G(20),H(Object(T.l)())},U=Object(s.useCallback)((function(n){n.search?(H(T.f.request({q:n.search,per_page:q.b,page:q.a})),H(T.b.request({id:Object(b.a)(),full_name:n.search})),J(),D()):alert("\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694!")}),[H]),K=Object(s.useCallback)((function(n){window.confirm(n?"\uc800\uc7a5\ub41c \ubd81\ub9c8\ud06c\uac00 \ubaa8\ub450 \uc81c\uac70\ub429\ub2c8\ub2e4.\n\uc9c4\ud589 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?":"\uc800\uc7a5\ub41c \ucd5c\uadfc \uac80\uc0c9\uc5b4\uac00 \ubaa8\ub450 \uc81c\uac70\ub429\ub2c8\ub2e4.\n\uc9c4\ud589 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(n?(J(),H(Object(T.k)())):H(Object(T.m)()))}),[e,t]),P=Object(s.useCallback)((function(n,e){if(e){var t=n;J(),H(T.i.request({id:t}))}else{var i=n;H(T.j.request({id:i}))}}),[e,t]),Q=function(){g||(k(!0),C(null===i||void 0===i?void 0:i.slice(0,I)),G((function(n){return n+20})),k(!1))};return Object(s.useEffect)((function(){E&&(H(Object(T.n)()),H(T.c.request(JSON.parse(E))))}),[e]),Object(s.useEffect)((function(){i&&20===I&&(C(i.slice(0,I)),G((function(n){return n+20})))}),[i,o,I]),Object(s.useEffect)((function(){return w&&Q(),function(){return J()}}),[]),Object(y.jsxs)(_.a,{isMain:!0,children:[Object(y.jsxs)(F,{children:[o&&Object(y.jsx)(j.a,{tip:"loading...",size:"large",className:"spin"}),Object(y.jsx)("div",{className:"search-input-wrap",children:Object(y.jsx)(S,{handleModalToggle:D})}),Object(y.jsx)(B,{handleRemoveAll:K,handleRemove:P,itemList:e,isBookMark:!0}),w&&(null===w||void 0===w?void 0:w.length)>1?Object(y.jsx)("div",{id:"scrollableDiv",style:{height:"calc(100vh - 400px)",overflow:"auto",padding:"0 16px"},children:Object(y.jsx)(m.a,{dataLength:null===w||void 0===w?void 0:w.length,next:Q,hasMore:(null===w||void 0===w?void 0:w.length)<(null===i||void 0===i?void 0:i.length),loader:Object(y.jsx)(h.a,{avatar:!0,paragraph:{rows:1},active:!0}),endMessage:Object(y.jsx)(v.a,{plain:!0,children:"\ub9c8\uc9c0\ub9c9 \uac8c\uc2dc\ubb3c\uc785\ub2c8\ub2e4."}),scrollableTarget:"scrollableDiv",children:Object(y.jsx)(p.b,{dataSource:w,itemLayout:"vertical",renderItem:function(n){return Object(y.jsx)(A.a,{issueItems:n})}})})}):w&&0===(null===w||void 0===w?void 0:w.length)&&Object(y.jsx)(f.a,{className:"empty",description:Object(y.jsx)("div",{children:Object(y.jsxs)("p",{className:"empty-description",children:["\uc800\uc7a5\ub41c \uc800\uc7a5\uc18c\uc5d0 \uc774\uc288\uac00 \uc5c6\uc5b4\uc694!",Object(y.jsx)("br",{}),"\uad00\uc2ec\uc788\ub294 \uc800\uc7a5\uc18c\ub97c \uc800\uc7a5\ud558\uace0 \uc774\uc288\ub97c \ubaa8\uc544\ubcf4\uc138\uc694!"]})}),imageStyle:{height:"100%"}}),!E&&Object(y.jsx)(f.a,{className:"empty",description:Object(y.jsx)("div",{children:Object(y.jsxs)("p",{className:"empty-description",children:["\uc800\uc7a5\ub41c \uc800\uc7a5\uc18c\uac00 \uc5c6\uc5b4\uc694!",Object(y.jsx)("br",{}),"\uad00\uc2ec\uc788\ub294 \uc800\uc7a5\uc18c\ub97c \uc800\uc7a5\ud558\uace0 \uc774\uc288\ub97c \ubaa8\uc544\ubcf4\uc138\uc694!"]})}),imageStyle:{height:"100%"}})]}),Object(y.jsx)(R,{onFinish:U,modalToggle:r,handleModalToggle:D,handleRemoveAll:K,handleRemove:P,recentlySearch:t,handleMoveSearchOnClick:function(n){H(T.f.request({q:n,per_page:q.b,page:q.a})),J()}})]})}}}]);
//# sourceMappingURL=5.ab03111d.chunk.js.map