(function(){var c=this;function d(a,w){var f=a.split("."),b=c;f[0]in b||!b.execScript||b.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||void 0===w?b[g]?b=b[g]:b=b[g]={}:b[g]=w};var e={0:"Przet\u0142umacz",1:"Anuluj",2:"Zamknij",3:function(a){return"Ta strona zosta\u0142a automatycznie przet\u0142umaczona przez Google na j\u0119zyk "+(a+".")},4:function(a){return"Przet\u0142umaczono na j\u0119zyk: "+a},5:"B\u0142\u0105d: serwer nie mo\u017ce wykona\u0107 \u017c\u0105dania. Spr\u00f3buj ponownie p\u00f3\u017aniej.",6:"Wi\u0119cej informacji",7:function(a){return"Technologia "+a},8:"T\u0142umacz",9:"Trwa t\u0142umaczenie",10:function(a){return"Czy przet\u0142umaczy\u0107 t\u0119 stron\u0119 na j\u0119zyk "+
(a+" przy u\u017cyciu T\u0142umacza Google?")},11:function(a){return"Wy\u015bwietl t\u0119 stron\u0119 w j\u0119zyku: "+a},12:"Poka\u017c orygina\u0142",13:"Zawarto\u015b\u0107 tego pliku lokalnego zostanie przes\u0142ana do Google za pomoc\u0105 bezpiecznego po\u0142\u0105czenia w celu przet\u0142umaczenia.",14:"Zawarto\u015b\u0107 tej zabezpieczonej strony zostanie przes\u0142ana do Google za pomoc\u0105 bezpiecznego po\u0142\u0105czenia w celu przet\u0142umaczenia.",15:"Zawarto\u015b\u0107 tej strony intranetowej zostanie przes\u0142ana do Google za pomoc\u0105 bezpiecznego po\u0142\u0105czenia w celu przet\u0142umaczenia.",
16:"Wybierz j\u0119zyk",17:function(a){return"Wy\u0142\u0105cz t\u0142umaczenie z j\u0119zyka "+a},18:function(a){return"Wy\u0142\u0105cz dla j\u0119zyka: "+a},19:"Zawsze ukrywaj",20:"Tekst oryginalny:",21:"Zaproponuj lepsze t\u0142umaczenie",22:"Zaproponuj",23:"Przet\u0142umacz wszystko",24:"Przywr\u00f3\u0107 wszystkie",25:"Anuluj wszystkie",26:"Przet\u0142umacz sekcje na m\u00f3j j\u0119zyk",27:function(a){return"Przet\u0142umacz wszystko na j\u0119zyk "+a},28:"Poka\u017c j\u0119zyki orygina\u0142u",
29:"Opcje",30:"Wy\u0142\u0105cz t\u0142umaczenie dla tej witryny",31:null,32:"Poka\u017c alternatywne t\u0142umaczenia.",33:"Kliknij s\u0142owa powy\u017cej, aby uzyska\u0107 alternatywne t\u0142umaczenia.",34:"U\u017cyj",35:"Aby zmieni\u0107 kolejno\u015b\u0107, przytrzymaj klawisz Shift i przeci\u0105gnij.",36:"Kliknij, by wy\u015bwietli\u0107 t\u0142umaczenia alternatywne.",37:"Trzymaj\u0105c naci\u015bni\u0119ty klawisz Shift, kliknij i przeci\u0105gnij s\u0142owa, aby zmieni\u0107 ich kolejno\u015b\u0107.",
38:"Dzi\u0119kujemy za przes\u0142anie propozycji t\u0142umaczenia do serwisu T\u0142umacz Google",39:"Zarz\u0105dzaj t\u0142umaczeniem tej witryny.",40:"Kliknij s\u0142owo, by zobaczy\u0107 t\u0142umaczenia alternatywne. Kliknij dwukrotnie, je\u015bli chcesz edytowa\u0107 bezpo\u015brednio",41:"Tekst oryginalny",42:"T\u0142umacz",43:"Przet\u0142umacz",44:"Twoja poprawka zosta\u0142a przes\u0142ana.",45:"B\u0142\u0105d: j\u0119zyk strony internetowej nie jest obs\u0142ugiwany."};var h=window.google&&google.translate&&google.translate._const;
if(h){var k;a:{for(var l=[],m=[""],n=0;n<m.length;++n){var p=m[n].split(","),q=p[0];if(q){var r=Number(p[1]);if(!(!r||.1<r||0>r)){var t=Number(p[2]),u=new Date,v=1E4*u.getFullYear()+100*(u.getMonth()+1)+u.getDate();!t||t<v||l.push({version:q,ratio:r,a:t})}}}for(var x=0,y=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),z=Number(y&&y[1])||Math.random(),n=0;n<l.length;++n){var A=l[n],x=x+A.ratio;if(1<=x)break;if(z<x){k=A.version;break a}}k="39"}var B="/translate_static/js/element/%s/element_main.js".replace("%s",
k);if("0"==k){var C=" translate_static js element %s element_main.js".split(" ");C[C.length-1]="main_pl.js";B=C.join("/").replace("%s",k)}if(h._cjlc)h._cjlc(h._pas+h._pah+B);else{var D=h._pas+h._pah+B,E=document.createElement("script");E.type="text/javascript";E.charset="UTF-8";E.src=D;var F=document.getElementsByTagName("head")[0];F||(F=document.body.parentNode.appendChild(document.createElement("head")));F.appendChild(E)}d("google.translate.m",e);d("google.translate.v",k)};})()
