/*! scripts/pre_tumblelog.js */
(function(){var b=translated_warning_string;var a=window.confirm;function c(f){var d=f.target||f.srcElement;if(d.type!=="password"){return}if(a(b)){window.removeEventListener("keypress",c,true)}else{d.value="";return false}}if(typeof window.addEventListener!=="undefined"){window.addEventListener("keypress",c,true)}})();(function(){if(typeof __pbpa==="undefined"||__pbpa===false){return}var j={};var k=document.createElement("a");var p=window.addEventListener?"addEventListener":"attachEvent";var e=p==="attachEvent"?"onmessage":"message";var m=false;var n=[];window[p](e,function(s){var q=(s.data&&s.data.split)?s.data.split(";"):"";if(q[0]==="analytics_iframe_ga_non_ajax_received"){m=true}},false);function h(t,s){n.push(s);if(m){while(n.length){var q=n.shift();t.contentWindow.postMessage(q,t.src.split("/analytics.html")[0])}}}var b=function(){var u=document.getElementById("ga_target");if(!u){return true}var t="/";if(typeof this.called_url!=="undefined"){t=this.called_url}k.href=t;t=k.href;var s="unknown_ajax_blog_route";if(k.pathname.match(/^\/page/)){s="/page/:page"}if(k.pathname.match(/^\/api\/read\/json/)){s="/api/read/json"}try{var q=true;var v=["tick_google_analytics",q,t,s].join(";");h(u,v);if(typeof COMSCORE!=="undefined"){var x="tick_comscore;"+t;h(u,x)}}catch(w){}return true};var i=function(){if(typeof __pbpm!=="undefined"&&__pbpm===false){return}try{var v=parseInt(this.getResponseHeader("X-Tumblr-Pixel"));if(!v){return}var q,u="";for(var t=0;t<v;t++){q=this.getResponseHeader("X-Tumblr-Pixel-"+t);if(!q){return}u+=q}var s,x=u.split("--");x.forEach(function(y){y+="&A=1";s=new Image(1,1);s.src=(r=y.replace(/&R=[^&$]*/,""))+("&R="+escape(document.referrer)).substr(0,2000-r.length).replace(/%.?.?$/,"")})}catch(w){}return true};var g=function(){try{if(window._qevents&&window.__qc){__qc.qpixelsent=[];_qevents.push({qacct:"p-19UtqE8ngoZbM"})}}catch(q){}return true};var a=function(){var s="/";if(typeof this.called_url!=="undefined"){s=this.called_url}k.href=s;var q="unknown_ajax_blog_route";if(k.pathname.match(/^\/page/)){q="/page/:page"}if(k.pathname.match(/^\/api\/read\/json/)){q="/api/read/json"}try{var v=window.YAHOO;if(v&&v.rapid){var t={pd:q,_li:0,i_rad:0,i_strm:0};v.rapid.beaconEvent("tpv",t)}}catch(u){}return true};var f=function(){var v=document.createElement("div");v.innerHTML=this.responseText;var s=v.getElementsByTagName("script");for(var t=0;t<s.length;t++){var u=s[t];var q;if(u.classList){q=u.classList.contains("pppt")}else{q=new RegExp("(^| )pppt( |$)","gi").test(u.className)}if(q){(new Function(u.text))()}}};var d=function(q){k.href=q;var s=k.pathname;if(s[0]!=="/"){s="/"+s}if(!s.match(/^\/page\/[0-9]+\/?$/)&&!s.match(/^\/api\/read\/json$/)){return false}if(j[s]){return false}j[s]=1;return true};var l=XMLHttpRequest.prototype.send;var c=XMLHttpRequest.prototype.onCreate;XMLHttpRequest.prototype.send=function(s){var q=this;if(d(this.called_url)){this[p]("load",function(){return i.call(q)},true);this[p]("load",function(){return b.call(q)},false);this[p]("load",function(){return g.call(q)},false);this[p]("load",function(){return a.call(q)},false);this[p]("load",function(){return f.call(q)},true)}l.call(this,s)};var o=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(q,t,s){this.called_url=t;o.call(this,q,t,s)}})();(function(){if(window.location.hash==="#_=_"){if(window.history&&window.history.replaceState){history.replaceState("",document.title,window.location.pathname+window.location.search)}else{window.location.hash=""}}})();