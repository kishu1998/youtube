(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(32)},19:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(3),r=a(5),c=a(4),o=a(6),s=a(0),l=a.n(s),d=a(11),m=a.n(d),u=(a(19),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={term:""},a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"handle",value:function(e){this.props.onSearchTermChange(e.target.value),this.setState({term:e.target.value})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"search-bar"},l.a.createElement("input",{onChange:function(t){return e.handle(t)}}))}}]),t}(l.a.Component)),v=a(12),h=a.n(v),p=function(e){var t=e.video,a=e.onVideoSelect,n=t.snippet.thumbnails.default.url;return l.a.createElement("li",{onClick:function(){return a(t)},className:"list-group-item"},l.a.createElement("div",{className:"video-list media"},l.a.createElement("div",{className:"media-left"},l.a.createElement("img",{className:"media-object",src:n})),l.a.createElement("div",{className:"media-body"},l.a.createElement("div",{className:"media-heading"},t.snippet.title))))},b=function(e){var t=e.videos.map(function(t){return l.a.createElement(p,{key:t.etag,onVideoSelect:e.onVideoSelect,video:t})});return l.a.createElement("ul",{className:"col-md-4 list-group"},t)},f=function(e){var t=e.video;if(!t)return l.a.createElement("div",null,"Loading......");var a=t.id.videoId,n="https://www.youtube.com/embed/".concat(a);return l.a.createElement("div",{className:"video-detail col-md-8"},l.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},l.a.createElement("iframe",{className:"embed-responsive-item",src:n})),l.a.createElement("div",{className:"details"},l.a.createElement("div",null,t.snippet.title),l.a.createElement("div",null,t.snippet.description)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=a(13),g=a.n(E),w=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={videos:[],selectedVideo:null},a.videoSearch("surfboards"),console.log(a.props.name),a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"videoSearch",value:function(e){var t=this;h()({key:"AIzaSyANbj86Ny-CxZIMSIpr4kzsp7qMvv9CTNM",term:e},function(e){t.setState({videos:e,selectedVideo:e[0]})})}},{key:"render",value:function(){var e=this,t=g.a.debounce(function(t){return e.videoSearch(t)},300);return l.a.createElement("div",null,l.a.createElement(u,{onSearchTermChange:t}),l.a.createElement(f,{video:this.state.selectedVideo}),l.a.createElement(b,{onVideoSelect:function(t){return e.setState({selectedVideo:t})},videos:this.state.videos}))}}]),t}(l.a.Component);m.a.render(l.a.createElement(w,{name:"abc"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.b96c5574.chunk.js.map