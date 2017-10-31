//! v.1.3.1, http://ilyabirman.net/projects/emerge/
jQuery&&(!function(t){t(function(){var e,a,r,i,n=500,o=["backgroundImage","borderImage","borderCornerImage","listStyleImage","cursor"],s=/url\(\s*(['"]?)(.*?)\1\s*\)/g,c=0,d=function(t){var e=new Image;return e.src=t,e.complete},l=function(t,e,a,r,i){var n="emergeRotate"+ ++c;return"<style>@keyframes "+n+" { from { transform: rotate("+360*a+"deg) } to { transform: rotate("+360*!a+'deg) }  } </style><div style="position: absolute; transition: opacity '+i+'ms ease-out"><div style="position: absolute; left: 50%; top: 50%; margin: -'+t+'px"><svg width="'+2*t+'" height="'+2*t+'"viewBox="0 0 100 100"><defs><mask id="cut"><rect width="100" height="100" fill="white" /><circle r="40" cx="50" cy="50" fill="black" /><polygon points="50,50 100,25 150,50 100,75" fill="black" style="transform-origin: left center; animation: '+n+" "+r+'ms linear infinite" /></mask></defs><circle r="50" cx="50" cy="50" mask="url(#cut)" fill="'+e+'" /></svg></div></div>'},u=function(t){var e=Math.min(document.body.clientHeight,document.documentElement.clientHeight),a=t.offset().top,r=window.pageYOffset||document.documentElement.scrollTop;return e>a-r},f=function(e,i){var o=e.data("hold"),s=e.data("expose");if(s&&!u(e))return e.data("_waitingForView",!0),!1;if(o&&-1===t.inArray(e,r))return r.push(e),setTimeout(function(){f(e,!0)},o),!1;if(-1!==t.inArray(e,r)&&!i)return!1;var c=e.data("_spinner");c&&(c.css("opacity",0),setTimeout(function(){c.remove()},n)),e.css("transition","opacity "+n+"ms ease-out"),e.css("opacity","1");var d=e.data("style-2");d&&e.attr("style",e.attr("style")+"; "+d),a.push(e),m()},m=function(r){r&&e.push(r);for(var i in e){var n=e[i];if(-1!==t.inArray(n,a));else{var o,s=!1;if(o=n.data("_waitFor")){for(;;){if(-1===t.inArray(o,a)){if(o[0]==n[0]){s=!0;break}if(o=o.data("_waitFor"))continue}break}(-1!==t.inArray(n.data("_waitFor"),a)||s)&&f(n)}else f(n)}}},p=function(){for(var t in e){var a=e[t];a.data("_waitingForView")&&u(a)&&(a.data("_waitingForView",!1),f(a))}},v=function(){i||(t(window).on("scroll resize",p),i=!0)},g=function(){e=[],a=[],r=[],i=!1;var c=!1;t(".emerge").each(function(){var e=t(this),a={},r=[],i=!1,u=12,f=1333,p="#404040",g=0,y=n,w=0,h=0,b="",k="",x=n,_={};e.$prev=c;var z=function(){e.data("continue")&&e.data("_waitFor",e.$prev),e.data("await")&&e.data("_waitFor",t("#"+e.data("await"))),m(e)},F=function(){h++,h==w&&setTimeout(z,e.data("slow"))};if(e.data("opaque")&&e.css("opacity",1),_=e.data("effect")||!1,x=e.data("duration")||n,expose=e.data("expose"),v(),_){var I={},A=["","-webkit-"],T="transform",H="transform-origin",V=e.data("up")||0,Y=e.data("down")||0,j=e.data("left")||0,B=e.data("right")||0,C=e.data("angle")||"90",E=e.data("scale")||-1,M=e.data("origin")||"50% 50%";if(Y&&(V="-"+Y,"--"==V.substr(0,2)&&(V=V.substr(2))),B&&(j="-"+B,"--"==j.substr(0,2)&&(j=j.substr(2))),"relax"==_&&(-1==E&&(E=.92),"50% 50%"==M&&(M="top"),I={one:"scaleY("+E+")",two:"scaleY(1)",orn:M,crv:"cubic-bezier(0, 0, 0.001, 1)"}),"slide"==_&&(V||(V="20px"),I={one:"translate("+j+","+V+")",two:"translate(0,0)",crv:"cubic-bezier(0, 0.9, 0.1, 1)"}),"zoom"==_&&(-1==E&&(E=.5),I={one:"scale("+E+")",two:"scale(1)",orn:M,crv:"cubic-bezier(0, 0.75, 0.25, 1)"}),"screw"==_&&(-1==E&&(E=.5),C||(C=90),I={one:"scale("+E+") rotate("+C+"deg)",two:"scale(1) rotate(0)",orn:M,crv:"cubic-bezier(0, 0.75, 0.25, 1)"}),I)for(var O=0;O<A.length;++O)b+=A[O]+T+": "+I.one+"; "+A[O]+H+": "+I.orn+"; ",k+=A[O]+T+": "+I.two+"; "+A[O]+"transition: opacity "+x+"ms ease-out, "+A[O]+T+" "+x+"ms "+I.crv+"; ";e.data("style-1",b),e.data("style-2",k)}if(b||(b=e.data("style-1")),b&&e.attr("style",e.attr("style")+"; "+b),e.find("*").addBack().each(function(){var e=t(this);e.is("img")&&e.attr("src")&&(d(e.attr("src"))||(a[e.attr("src")]=!0));for(var i=0;i<o.length;++i){var n,c=o[i],l=e.css(c),u=-1;if(l&&(u=l.indexOf("url("))>=0)for(;null!==(n=s.exec(l));)d(n[2])||(a[n[2]]=!0)}if(e.is("video")){var f=e.data("emerge-event")||"canplaythrough";r.push({item:e,event:f})}}),i=e.data("spin")){var Q=e.data("spin-element");if(Q)var S=t("#"+Q).clone().css({position:"absolute",display:"block"});else{e.data("spin-size")&&(u=e.data("spin-size")/2),e.data("spin-color")&&(p=e.data("spin-color")),e.data("spin-period")&&(f=e.data("spin-period")),e.data("spin-direction")&&(g="clockwise"==e.data("spin-direction")?0:1),y=x;var S=t(l(u,p,g,f,y))}S.css({width:"100%",height:Math.min(e.height(),document.body.clientHeight-e.offset().top)}),S.addClass("emerge-spin-element"),e.before(S),e.data("_spinner",S)}for(var O in a){var $=new Image;$.src=O,w++,$.width>0?F():t($).on("load error",F)}for(var O in r){w++;var q=r[O].item,P=r[O].event;q[0].readyState>=4?F():q.on(P,F)}w++,F(),c=e})};return window.navigator&&"preview"===window.navigator.loadPurpose?(t(".emerge").css("transition","none"),t(".emerge").css("opacity","1"),!1):(t(".emerge-replay").each(function(){var e=t(this);e.click(function(){return t(".emerge").css("transition","none"),t(".emerge").css("opacity","0"),t(".emerge-spin-element").remove(),g(),!1})}),void g())})}(jQuery),document.write("<style>.emerge { opacity: 0; }</style>"));

