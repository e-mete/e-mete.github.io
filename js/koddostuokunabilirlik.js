function koddostuokunabilirlik(element){

var makale = element.textContent || element.innerText;
makale = makale.replace(/(\r\n|\n|\r)/gm," ").replace(/\s+/g, ' ');
var kelimeler = (makale.match(/ /g) || []).length;
var heceler = (makale.match(/a|e|ı|i|o|ö|u|ü|A|E|O|Ö|I|İ|U|Ü/g) || []).length;

var cumleler = (makale.match(/\.|\?|\:|\!/g) || []).length;
if(cumleler == 0){cumleler = 1;}

var atesman = parseInt(((198825/1000) - ((40175/1000)*(heceler/kelimeler))) - ((2610/1000)*(kelimeler/cumleler)));
if(atesman <= 10 || atesman >= 101){
    atesman = 101;
    }
var ilk = atesman-20;
var iki = atesman-35;
var uc = atesman-50;
var dort = atesman-80;
var ainterpolasyon = parseInt(((iki*uc*dort)/(-2250)) + ((ilk*uc*dort)/1012) + ((ilk*iki*dort)/(-1929)) + ((ilk*iki*uc)/16200) + 0.3);
document.getElementById('kacinci').innerHTML=ainterpolasyon;
}
