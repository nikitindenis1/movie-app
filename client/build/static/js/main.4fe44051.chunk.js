(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{139:function(e,t,a){},140:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"updateGlobalReducer",(function(){return N})),a.d(n,"handleFavorites",(function(){return M}));var r=a(0),o=a.n(r),i=a(22),c=a.n(i),s=a(9),l=a(18),u=a(60),m=a(36),d=a(62);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=a(72),p=a.n(v),f=a(3),_=a(4),h=a(6),b=a(5),E=a(7),g=a(14),O=a(1),w=a.n(O),j=a(8),y=a(37),k=a.n(y),S=function(e,t,a){return k.a.set(e,t,{expires:a})},x=function(e){return k.a.get(e)},N=function(e,t){return function(){var a=Object(j.a)(w.a.mark((function a(n){return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n({type:"update global reducer",payload:{name:e,value:t}});case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},M=function(e,t){return function(){var a=Object(j.a)(w.a.mark((function a(n){var r,o;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r=x("favorites1"),o=[],r&&(o=JSON.parse(r)),o=t?[].concat(Object(g.a)(o),[e]):o.filter((function(t){return t.id!==e})),S("favorites1",JSON.stringify(o)),"favorites",n({type:"update global reducer",payload:{name:"favorites",value:o}});case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},C=function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null)}}]),t}(r.Component);Object(s.c)((function(e){return{global:e.global}}),n)(C);var V=a(28);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach((function(t){Object(V.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var R={},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"update global reducer":var a=t.payload,n=a.name,r=a.value;return P({},e,Object(V.a)({},n,r));default:return e}},D=(a(85),a(86),"https://image.tmdb.org/t/p/w500"),Y="https://www.youtube.com/watch?v=",L=a(64),W=a.n(L),I=function(e,t){return new Promise((function(a){var n="".concat("https://api.themoviedb.org/3","/").concat(e,"?api_key=").concat("ec0393b9502ed1b3cb6ed11c9688ece5","&language=en-US&").concat(t?"page=".concat(t):"");try{W.a.get(n).then((function(e){a(e.data)}))}catch(r){a(!1)}}))},A=a(20),B=a.n(A),F=function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(h.a)(this,Object(b.a)(t).call(this))).state={},e}return Object(E.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({loaded:!0})}),400)}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.show_video!==this.props.show_video&&setTimeout((function(){t.setState({loaded:!1})}),2500)}},{key:"render",value:function(){var e=this.state.loaded,t=this.props.movie;return o.a.createElement("div",{id:e?"movie__element__details--active":"",className:"movie__element__details flex__column"},o.a.createElement("h2",null,t.title),o.a.createElement("span",{className:"flex__start"},o.a.createElement("h3",null,"Rating:"),o.a.createElement("figure",null,t.vote_average)),o.a.createElement("aside",{className:"movie__element__details__arrow"}))}}]),t}(r.Component),G=a(65),q=a.n(G),J=a(67),U=a.n(J),H=function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(h.a)(this,Object(b.a)(t).call(this))).state={},e}return Object(E.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this,t=this.props.muted;return o.a.createElement("button",{onClick:function(t){t.stopPropagation(),e.props.mute()},className:"mute__video"},t?o.a.createElement(q.a,null):o.a.createElement(U.a,null))}}]),t}(r.Component),X=a(32),$=a.n(X),K=function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(h.a)(this,Object(b.a)(t).call(this))).handleMouseEnter=Object(j.a)(w.a.mark((function t(){var a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=setTimeout(Object(j.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({active:!0,z_index:999999}),e.getVideo();case 2:case"end":return t.stop()}}),t)}))),350),e.setState({timeout:a});case 2:case"end":return t.stop()}}),t)}))),e.handleMouseOut=function(){window.clearTimeout(e.state.timeout),setTimeout((function(){e.setState({active:!1,video:!1,show_video:!1,z_index:0})}),200)},e.getVideo=Object(j.a)(w.a.mark((function t(){var a,n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.state.active,n=e.props.movie,r="movie/".concat(n.id,"/videos"),!a){t.next=6;break}return t.next=6,I(r).then((function(t){e.setState({video:t&&t.results[0]?t.results[0].key:""})}));case 6:case"end":return t.stop()}}),t)}))),e.onReady=function(){e.setState({show_video:!0})},e.handleVideoEnded=function(){e.setState({video:!1,show_video:!1})},e.handleSelect=function(){e.props.handleMovieSelect(),e.setState({show_video:!1,video:!1,active:!1})},e.state={},e}return Object(E.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.movie,n=t.selected,r=t.selected_movie,i=t.mobile,c=this.state,s=c.z_index,l=c.video,u=c.show_video,m=c.movie_details,d=c.active,v=c.img_loaded,p=this.props.global.movie_muted;return o.a.createElement($.a,{clear:!0},o.a.createElement("div",{ref:function(t){return e.yourElement=t},id:d?"movie__element--active":"",style:{zIndex:s,border:r?"2px solid white":""},onMouseEnter:function(){return i||n?"":e.handleMouseEnter()},onMouseLeave:function(){return e.handleMouseOut()},onClick:function(t){t.stopPropagation(),e.handleSelect()},className:"movie__element"},l&&!n?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:u?"video__wrapper--active":"",className:"video__wrapper"},o.a.createElement(B.a,{onBufferEnd:this.onReady,className:"video",url:"".concat(Y).concat(l),playing:!0,onEnded:this.handleVideoEnded,muted:p,onError:function(){return e.handleVideoEnded}})),u?o.a.createElement(H,{muted:p,mute:function(){return e.props.updateGlobalReducer("movie_muted",!p)}}):""):"",o.a.createElement("img",{style:{opacity:u||!v?0:1},src:"".concat(D,"/").concat(a.poster_path),onLoad:function(){return e.setState({img_loaded:!0})},alt:""}),d&&!n?o.a.createElement(F,{show_video:u,movie_details:m,movie:a}):"",o.a.createElement("div",{style:{opacity:r?1:""},className:"movie__arrow__box"},o.a.createElement("aside",{className:"movie__arrow"}))))}}]),t}(r.Component);var Q=Object(s.c)((function(e){return{global:e.global}}),n)(K),Z=function(e){var t=[];return e&&e.length>0&&e.forEach((function(e){return t=[].concat(Object(g.a)(t),Object(g.a)(e))})),t},ee=function(e,t,a){var n=[].concat(Object(g.a)(e),Object(g.a)(t)),r=[],o=[];if(n&&n.length>0)for(var i=0;i<n.length;i+=a){var c=n.slice(i,i+a);c.length===a?o.push(c):r.push.apply(r,Object(g.a)(c))}return{movies:o,pending:r}},te=function(e){return new Promise((function(t){return setTimeout((function(){return t()}),e)}))},ae=function(e,t,a,n){var r=[],o={};return a<=1500&&5!==n&&(n=5,r=Z(e),(o=ee(r,t,n)).size=n),a<=1200&&4!==n&&(n=4,r=Z(e),(o=ee(r,t,n)).size=n),a<=650&&2!==n&&(n=2,r=Z(e),(o=ee(r,t,n)).size=n),a>1500&&6!==n&&(n=6,r=Z(e),(o=ee(r,t,n)).size=n),o},ne=a(35),re=a(34),oe=a.n(re),ie=a(23),ce=a.n(ie),se=function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){this.props.onLoad()}},{key:"render",value:function(){var e=this.props.video;return e?o.a.createElement("div",{className:"mobile__trailer"},o.a.createElement("iframe",{className:"mobile__video",allow:"autoplay; encrypted-media",allowFullScreen:!0,frameBorder:"0",src:"".concat("https://www.youtube.com/embed/").concat(e)})):""}}]),t}(r.Component),le=function(e){return o.a.createElement("div",{className:"content__loader"},o.a.createElement("section",{className:"first"}," "),o.a.createElement("section",{className:"second"}),o.a.createElement("span",null,o.a.createElement("section",null),o.a.createElement("section",null),o.a.createElement("section",null),o.a.createElement("section",null)),o.a.createElement("section",{className:"last"}))},ue=function(e){return o.a.createElement("div",{className:"lds-ellipsis small__loader"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))},me=function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(h.a)(this,Object(b.a)(t).call(this))).hideVideo=function(){e.setState({show_video:!1})},e.showVideo=function(){e.setState({show_video:!0})},e.onLoad=function(){e.setState({img_loaded:!0}),e.props.getVideo()},e.state={},e}return Object(E.a)(t,e),Object(_.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.selected_movie!==this.props.selected_movie&&this.setState({img_loaded:!1,show_video:""})}},{key:"render",value:function(){var e=this,t=this.props,a=t.movie,n=t.active,r=t.video,i=t.mobile,c=this.state,s=c.img_loaded,l=c.muted,u=c.show_video;return o.a.createElement("div",{className:"movie__popup__overview"},o.a.createElement("section",{style:{opacity:n?0:1,pointerEvents:"none"},className:"overlay"}),o.a.createElement("div",{className:"movie__popup__overview__content"},a.id?o.a.createElement($.a,{duration:2e3,clear:!0},i?o.a.createElement("figure",{className:"popup__mobile__img"},o.a.createElement("img",{src:"".concat(D,"/").concat(a.backdrop_path),alt:""})):"",o.a.createElement("h2",null,a.title),o.a.createElement("span",{className:"flex__start"},o.a.createElement("h4",null,ce()(a.release_date,"YYYY-MM-DD").format("YYYY")),o.a.createElement("figure",{className:"movie__popup__overview__figure flex__start"},a.adult?"Adult":"All ages")),o.a.createElement("p",null,a.overview),o.a.createElement("span",{className:"flex__start"},o.a.createElement("h4",null,"Rating"),o.a.createElement("figure",{className:"flex__center movie__popup__overview__figure"},"".concat(a.vote_average?a.vote_average.toFixed(1):"0")))):o.a.createElement(le,null)),i?o.a.createElement(se,{onLoad:this.onLoad,video:r}):o.a.createElement("section",{className:"movie__popup__overview__bg"},o.a.createElement("div",{style:{opacity:u?1:0,transition:"0.5s all"},className:"movie__popup__overview__video"},n||u?o.a.createElement(B.a,{muted:l,onBufferEnd:this.showVideo,className:"video",url:"".concat(Y).concat(r),playing:!!n,onEnded:this.hideVideo}):null,o.a.createElement(H,{muted:l,mute:function(){return e.setState({muted:!l})}})),a.backdrop_path?o.a.createElement("img",{style:{opacity:s?1:0,transition:"0.3s all"},onLoad:function(){return e.onLoad()},src:"".concat("https://image.tmdb.org/t/p/original","/").concat(a.backdrop_path),alt:""}):o.a.createElement(ue,null)))}}]),t}(r.Component);var de=Object(s.c)((function(e){return{global:e.global}}),n)(me),ve=function(e){var t=e.credits,a=e.movie;return o.a.createElement("div",{className:"movie__preview__details flex__start"},o.a.createElement("ul",null,o.a.createElement("h4",null,"Cast"),t&&t.length>0?t.map((function(e,t){if(t<15)return o.a.createElement("li",{key:e.id},e.name)})):""),t&&t.length>15?o.a.createElement("ul",null,o.a.createElement("h4",null,"Cast"),t&&t.length>0?t.map((function(e,t){if(t>=15&&t<30)return o.a.createElement("li",{key:e.id},e.name)})):""):"",o.a.createElement("ul",null,o.a.createElement("h4",null,"Genres"),a.genres&&a.genres.length>0?a.genres.map((function(e){return o.a.createElement("li",{key:e.id},e.name)})):""))},pe=a(33),fe=a.n(pe),_e=(a(57),a(58),a(68)),he=a.n(_e),be=function(e){var t=e.similar,a=e.size,n=e.similar_loaded,r={dots:!1,infinite:!1,speed:200,slidesToShow:4===a?3:5,slidesToScroll:1,touchMove:!1};return o.a.createElement("div",{className:"movie__popup__related"},o.a.createElement(fe.a,r,n&&t&&t.length>0?t.map((function(t){return o.a.createElement("div",{className:"movie__popup__related__item",key:t.id},o.a.createElement("figure",{className:"movie__popup__related__item__img"},o.a.createElement("div",{onClick:function(){return e.updateParent("selected_movie",t.id)},className:"flex__center"},o.a.createElement(he.a,null)),o.a.createElement("img",{src:"".concat(D).concat(t.poster_path),alt:""})),o.a.createElement("span",{className:"flex__start"},o.a.createElement("h4",null,ce()(t.release_date,"YYYY-MM-DD").format("YYYY")),o.a.createElement("aside",{className:"flex__center"},t.vote_average)),o.a.createElement("h3",null,t.title))})):(n&&t&&t.length,"")))},Ee=["OVERVIEW","RELATED","DETAILS"],ge=function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(h.a)(this,Object(b.a)(t).call(this))).getData=function(){var t=Object(j.a)(w.a.mark((function t(a){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.mobile,e.setState({movie:{},video:""}),t.next=4,e.getMovie(a);case 4:n||(e.getCredits(a),e.getRelated(a),e.setState({section:"OVERVIEW"}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getVideo=function(){var t=Object(j.a)(w.a.mark((function t(a){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="movie/".concat(a,"/videos"),t.next=3,I(n).then((function(t){setTimeout((function(){e.setState({video:t&&t.results[0]?t.results[0].key:""})}),400)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getMovie=function(){var t=Object(j.a)(w.a.mark((function t(a){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="movie/".concat(a),t.next=3,I(n);case 3:(r=t.sent)&&e.setState({movie:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getRelated=function(){var t=Object(j.a)(w.a.mark((function t(a){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="movie/".concat(a,"/similar"),t.next=3,I(n);case 3:(r=t.sent)&&e.setState({similar:r.results,similar_loaded:!0});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getCredits=function(){var t=Object(j.a)(w.a.mark((function t(a){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="movie/".concat(a,"/credits"),t.next=3,I(n);case 3:(r=t.sent)&&e.setState({credits:r.cast,loaded:!0});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.close=function(){e.setState({loaded:!1,video:""}),setTimeout((function(){e.props.closePreview()}),200)},e.changeSection=function(t){e.setState({section:t})},e.state={section:"OVERVIEW",movie:{}},e}return Object(E.a)(t,e),Object(_.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props,a=t.selected_movie,n=t.mobile;setTimeout((function(){e.setState({loaded:!0})}),20),setTimeout((function(){e.getData(a),e.setState({show_content:!0})}),n?100:700)}},{key:"componentWillReceiveProps",value:function(){var e=Object(j.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.selected_movie!==this.props.selected_movie&&this.getData(t.selected_movie);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.loaded,n=t.section,r=t.movie,i=t.credits,c=t.similar,s=t.video,l=t.show_content,u=t.similar_loaded,m=this.props,d=m.selected_movie,v=m.size,p=m.mobile;return o.a.createElement("div",{id:a?"movie__popup--active":"",className:"movie__popup"},l?o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"movie__popup__close",onClick:function(){return e.close()}},o.a.createElement(oe.a,null)),o.a.createElement(de,{movie:r,video:s,selected_movie:d,active:"OVERVIEW"===n,getVideo:function(){return e.getVideo(d)},mobile:p}),o.a.createElement("div",{style:{opacity:"OVERVIEW"===n?0:1,pointerEvents:"OVERVIEW"!==n?"all":"none"},className:"movie__popup__sections"},o.a.createElement("aside",{className:"movie__popup__sections__shadow"}),o.a.createElement("header",null,r.title),"DETAILS"===n?o.a.createElement(ve,{credits:i,movie:r}):"RELATED"===n?o.a.createElement(be,{size:v,getData:this.getData,similar:c,movie_id:d,updateParent:this.props.updateParent,similar_loaded:u}):""),o.a.createElement("section",{className:"movie__popup__actions flex__start"},Ee&&Ee.length>0?Ee.map((function(t,a){return o.a.createElement("button",{style:{borderBottom:n===t?"5px solid red":""},onClick:function(){return e.changeSection(t)},key:a},t)})):"")):"")}}]),t}(r.Component);var Oe=Object(ne.e)(Object(s.c)((function(e){return{global:e.global}}),n)(ge)),we=a(69),je=(a(139),[{api:"movie/popular",name:"Popular"},{api:"movie/top_rated",name:"Top Rated"},{api:"movie/upcoming",name:"Upcoming"}]),ye=a(70),ke=a.n(ye),Se=function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(h.a)(this,Object(b.a)(t).call(this))).select=function(t){e.setState({selected:t.name}),e.toggleMobileMenu(!1),setTimeout((function(){e.props.selectCategory(t)}),200)},e.toggleMobileMenu=function(t){e.setState({mobile_menu:t}),document.querySelector("body").style.overflow=t?"hidden":""},e.sctollToTop=function(){var e=document.querySelector("body");e&&e.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})},e.state={selected:"Popular"},e}return Object(E.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.selected,n=t.mobile_menu;return o.a.createElement("div",{className:"navbar flex__start"},o.a.createElement("figure",{onClick:function(){return e.sctollToTop()}},"MovieTime"),o.a.createElement("div",{className:"mobile__hamgurger",onClick:function(){return e.toggleMobileMenu(!n)}},n?o.a.createElement(oe.a,null):o.a.createElement(ke.a,null)),o.a.createElement("ul",{id:n?"navbar__categories--active":"",className:"navbar__categories flex__start"},je.map((function(t,n){return o.a.createElement("li",{style:{opacity:a===t.name?1:""},onClick:function(){return e.select(t)}},t.name)}))))}}]),t}(r.Component);function xe(e){return null===e.offsetParent}var Ne=function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(h.a)(this,Object(b.a)(t).call(this))).overflowBody=function(e){document.querySelector("body").style.overflow=e?"hidden":""},e.updateSize=Object(j.a)(w.a.mark((function t(){var a,n,r,o,i,c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,n=a.movies,r=a.pending_movies,o=a.size,i=window.innerWidth,t.next=4,ae(n,r,i,o);case 4:(c=t.sent).movies&&e.setState({movies:c.movies,pending_movies:c.pending,size:c.size});case 6:case"end":return t.stop()}}),t)}))),e.handleMovieSelect=function(t,a){e.setState({selected:t,selected_movie:a.id,show_popup:!0}),e.scrollToElement()},e.updateState=function(t,a){e.setState(Object(V.a)({},t,a))},e.scrollToElement=Object(j.a)(w.a.mark((function t(){var a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:2===(a=e.state.size)&&e.overflowBody(!0),te(2===a?800:400).then((function(){var e=document.querySelector("#selected__row__offset");e&&e.scrollIntoView({behavior:"auto",block:"start",inline:"nearest"})}));case 3:case"end":return t.stop()}}),t)}))),e.selectCategory=function(t){e.setState({api:t.api,page:1,movies:[],pending_movies:[],selected_movie:"",show_popup:!1,selected:""},(function(){e.loadElements()}))},e.closePreview=function(){var t=e.state.size;e.setState({selected:"",selected_movie:"",show_popup:""}),2===t&&e.overflowBody(!1)},e.loadElements=Object(j.a)(w.a.mark((function t(){var a,n,r,o;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,n=a.size,r=a.page,o=a.api,t.prev=1,t.next=4,I(o,r).then(function(){var t=Object(j.a)(w.a.mark((function t(a){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.handleMovies(a.results,n),e.setState({page:r+1});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:t.next=8;break;case 6:t.prev=6,t.t0=t.catch(1);case 8:case"end":return t.stop()}}),t,null,[[1,6]])}))),e.handleMovies=function(t,a){var n=e.state,r=n.movies,o=n.pending_movies,i=(n.page,ee(t,o,a));e.setState({movies:[].concat(Object(g.a)(r),Object(g.a)(i.movies)),pending_movies:i.pending})},e.state={movies:[],page:1,size:6,page_limit:5,pending_movies:[],hasMore:!0,page_loaded:!0,api:"movie/popular"},e}return Object(E.a)(t,e),Object(_.a)(t,[{key:"componentWillMount",value:function(){var e=Object(j.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.scrollTo(0,0),window.addEventListener("resize",this.updateSize),e.next=4,this.updateSize();case 4:this.loadElements();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateSize)}},{key:"render",value:function(){var e=this,t=this.state,a=t.selected,n=t.selected_movie,r=t.show_popup,i=t.movies,c=t.page,s=t.page_limit,l=t.size;return o.a.createElement("section",{className:"movies__list flex__start"},o.a.createElement(Se,{selectCategory:this.selectCategory}),o.a.createElement(we.a,{dataLength:Z(i).length,next:this.loadElements,hasMore:c<s,loader:o.a.createElement(ue,null)},i&&i.length>0?i.map((function(t,i){return o.a.createElement("div",{key:i,id:a===i?"selected__row":"",className:"movies__list__flex flex__column"},a===i?o.a.createElement("aside",{id:"selected__row__offset"}):"",o.a.createElement("ul",{className:"flex__start"},t.map((function(t){return o.a.createElement(Q,{mobile:2===l,key:t.id,isHidden:xe,selected:a===i,handleMovieSelect:function(){return e.handleMovieSelect(i,t)},selected_movie:n===t.id,movie:t})}))),a===i&&n&&r?o.a.createElement(Oe,{size:l,mobile:2===l,selected_movie:n,closePreview:e.closePreview,updateParent:e.updateState}):"")})):o.a.createElement("div",{className:"movies__first__loading"},o.a.createElement(ue,null))))}}]),t}(r.Component),Me=function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(h.a)(this,Object(b.a)(t).call(this))).state={},e}return Object(E.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){this.state.page_loaded;return o.a.createElement("div",{className:"movies"},o.a.createElement(Ne,null))}}]),t}(r.Component),Ce=Object(ne.e)(Me),Ve="/",Te=(a(140),function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(h.a)(this,Object(b.a)(t).call(this))).getCredits=Object(j.a)(w.a.mark((function t(){var a,n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.movie_id,n="movie/".concat(a,"/credits"),t.next=4,I(n);case 4:(r=t.sent)&&e.setState({credits:r.cast,loaded:!0});case 6:case"end":return t.stop()}}),t)}))),e.state={},e}return Object(E.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){this.getCredits()}},{key:"render",value:function(){var e=this.state.credits;return o.a.createElement("ul",{className:"movie__page__credits flex__start"},e&&e.length>0?e.map((function(e){return o.a.createElement("li",{className:"flex__column"},o.a.createElement("figure",null,o.a.createElement("img",{src:"".concat(D).concat(e.profile_path),alt:""})),o.a.createElement("h4",null,e.name),o.a.createElement("h5",null,e.character))})):"No credits")}}]),t}(r.Component)),Pe=function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(h.a)(this,Object(b.a)(t).call(this))).getRelated=Object(j.a)(w.a.mark((function t(){var a,n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.movie_id,n="movie/".concat(a,"/similar"),t.next=4,I(n);case 4:(r=t.sent)&&e.setState({similar:r.results,loaded:!0});case 6:case"end":return t.stop()}}),t)}))),e.state={},e}return Object(E.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){this.getRelated()}},{key:"render",value:function(){var e=this,t=this.state.similar,a={dots:!1,infinite:!0,speed:300,slidesToShow:4===this.props.size?3:5,slidesToScroll:1};return o.a.createElement("div",{className:"movie__page__related"},o.a.createElement(fe.a,a,t&&t.length>0?t.map((function(t){return o.a.createElement("div",{onClick:function(){return e.props.changeMovie(t.id)},className:"movie__page__related__element",key:t.id},o.a.createElement("img",{src:"".concat(D).concat(t.poster_path),alt:""}))})):"  "))}}]),t}(r.Component),Re=a(71),ze=a.n(Re),De=function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(h.a)(this,Object(b.a)(t).call(this))).onReady=function(){e.setState({show_video:!0})},e.handleVideoEnded=function(){e.setState({video:!1,show_video:!1})},e.handleImgeOnLoad=function(){e.setState({img_loaded:!0})},e.state={movie:{}},e}return Object(E.a)(t,e),Object(_.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.movie_id!==this.props.movie_id&&this.setState({show_video:!1})}},{key:"render",value:function(){var e=this,t=this.state,a=t.show_video,n=t.muted,r=t.img_loaded,i=this.props,c=i.fade_out,s=i.movie,l=i.video;return o.a.createElement("header",{style:{opacity:c?0:1},className:"movie__page__header  flex__between"},o.a.createElement("div",{className:"movie__page__about"},o.a.createElement("h2",null,s.title),o.a.createElement("span",{className:"flex__start"},o.a.createElement("h3",null,ce()(s.release_date,"YYYY-MM-DD").format("YYYY")),o.a.createElement("figure",{className:"flex__center"},s.adult?"Adult":"All"),o.a.createElement("h3",null,function(e){var t=String(e/60).split("")[0],a=e-60*t;return"".concat(t,"h ").concat(a,"m")}(s.runtime))),o.a.createElement("div",{className:"movie__ratings"},o.a.createElement(ze.a,{rating:s.vote_average,starRatedColor:"#FDD430",numberOfStars:10})),o.a.createElement("p",null,s.overview),o.a.createElement("p",{id:"movie__page__about__genres"},function(e){var t=e?e.map((function(e){return e.name})):[];return"Genres: ".concat(t.join(", "))}(s.genres))),o.a.createElement("div",{className:"movie__page__bg"},o.a.createElement("div",{style:{opacity:a?1:0,transition:"0.5s all"},className:"movie__page__trailer"},l?o.a.createElement(B.a,{onError:this.handleVideoEnded,muted:n,onBufferEnd:this.onReady,className:"video",url:"".concat(Y).concat(l),playing:!0,onEnded:this.handleVideoEnded}):"",o.a.createElement(H,{muted:n,mute:function(){return e.setState({muted:!n})}})),s.backdrop_path?o.a.createElement("img",{style:{opacity:r?1:0,transition:"0.7s all"},onLoad:function(){return e.handleImgeOnLoad()},src:"".concat("https://image.tmdb.org/t/p/original","/").concat(s.backdrop_path),alt:""}):""))}}]),t}(r.Component),Ye=function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(h.a)(this,Object(b.a)(t).call(this))).getMovieId=function(){var t=window.location.pathname.split("/");return t[t.length-1]?t[t.length-1]:e.props.match.params.id},e.getMovie=function(){var t=Object(j.a)(w.a.mark((function t(a){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="movie/".concat(a),t.next=3,I(n);case 3:(r=t.sent)&&e.setState({movie:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getVideo=function(){var t=Object(j.a)(w.a.mark((function t(a){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="movie/".concat(a,"/videos"),t.next=3,I(n).then((function(t){e.setState({video:t&&t.results[0]?t.results[0].key:""})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleActiveSection=function(t){e.setState({active_section:t})},e.closePage=function(){e.setState({active:!1}),setTimeout((function(){e.props.close(),window.history.pushState("/","/","/")}),300)},e.back=function(){e.props.from_movies?(e.closePage(),e.props.updateGlobalReducer("pause_movie",!1)):e.props.history.push(Ve)},e.changeMovie=function(){var t=Object(j.a)(w.a.mark((function t(a){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getMovie(a);case 2:setTimeout((function(){e.getVideo(a)}),400),e.setState({movie_id:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={movie:{}},e}return Object(E.a)(t,e),Object(_.a)(t,[{key:"componentWillMount",value:function(){var e=Object(j.a)(w.a.mark((function e(){var t,a,n,r=this;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.from_movies,t.selected_movie,n=this.getMovieId(),a?setTimeout((function(){r.setState({active:!0})}),50):this.setState({active:!0}),this.setState({movie_id:n}),e.next=6,this.getMovie(n);case 6:setTimeout((function(){r.getVideo(n)}),400);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.active,n=t.movie,r=t.active_section,i=t.movie_id,c=t.fade_out,s=t.video;return o.a.createElement("div",{id:a?"movie__page--active":"",className:"movie__page"},o.a.createElement("section",{className:"movie__page__overlay"}," "),o.a.createElement("button",{onClick:function(){return e.back()}},"X"),o.a.createElement(De,{fade_out:c,movie_id:i,movie:n,video:s}),o.a.createElement("ul",{className:"movie__page__actions flex__center"},[{name:"Reviews",value:"reviews"},{name:"Credits",value:"credits"},{name:"Related",value:"similar"}].map((function(t,a){return o.a.createElement("li",{onClick:function(){return e.handleActiveSection(t.value)}},t.name)}))),o.a.createElement("div",{className:"movie__page__content"},"credits"===r?o.a.createElement(Te,{movie_id:i}):"similar"===r?o.a.createElement(Pe,{changeMovie:this.changeMovie,movie_id:i}):""))}}]),t}(r.Component);var Le=Object(ne.e)(Object(s.c)((function(e){return{global:e.global}}),n)(Ye)),We=function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(ne.c,null,o.a.createElement(ne.a,{exact:!0,path:Ve,component:Ce}),o.a.createElement(ne.a,{exact:!0,path:"/movies/:id",component:Le})))}}]),t}(r.Component);var Ie,Ae=Object(s.c)((function(e){return{global:e.global}}),n)(We),Be=p()(),Fe=Object(l.e)((Ie=Be,Object(l.c)({router:Object(m.b)(Ie),global:z})),{},Object(l.d)(Object(l.a)(Object(u.a)(Be),d.a)));c.a.render(o.a.createElement(s.a,{store:Fe},o.a.createElement(m.a,{history:Be},o.a.createElement(Ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},74:function(e,t,a){e.exports=a(148)},85:function(e,t,a){},86:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.4fe44051.chunk.js.map