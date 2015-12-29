var stildosyasi=document.createElement("link");
stildosyasi.setAttribute("rel", "stylesheet");
stildosyasi.setAttribute("type", "text/css");
stildosyasi.setAttribute("href", "http://e-mete.com/css/bildirim.css");
document.getElementsByTagName("head")[0].appendChild(stildosyasi);
function bildirim(mesaj,tur){
	var iDiv = document.createElement('div');
	var turler = ["kdtoast hata","kdtoast basari","kdtoast","kdtoast"];
	iDiv.className = turler[tur];
	document.getElementsByTagName('body')[0].appendChild(iDiv);
	iDiv.innerHTML=mesaj;
	if(tur >= 2){
	setTimeout(function(){ iDiv.parentNode.removeChild(iDiv); }, 4000);
	}
	else{
		if(tur == 4){
		setTimeout(function(){ iDiv.parentNode.removeChild(iDiv); }, 16000);
		}
	var te = iDiv.getElementsByTagName("A");
	te[te.length - 1].onclick=function(){
	iDiv.parentNode.removeChild(iDiv);
	}
	}
	}
function bildirimkapat(elem){
	if(elem.href.length >= 5){
		window.open(elem.href,'');
	}
	event.preventDefault();
	var maq = document.querySelectorAll(".kdtoast");
	[].forEach.call(maq, function(bild) {
		bild.parentNode.removeChild(bild);
});
}
