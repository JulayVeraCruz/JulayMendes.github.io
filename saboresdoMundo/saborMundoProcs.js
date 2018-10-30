//discotProcs.js
//************************************************

//OUTSPUTS
var interf = {}
function inic() {
    obterInterface();
    apresentar();
   
}
//Adquire e publica  referências para interface do sistema
function obterInterface() {
    interf.celEsquerda = document.getElementById("celEsquerda");
    interf.titulo = document.getElementById("titulo");
    interf.scroll = document.getElementById("scroll");
    interf.celDireita= document.getElementById("celDireita");
    interf.intro = document.getElementById("intro");

}
function apresentar() {
   
 //  interf.celEsquerda.innerHTML = temaR();
    interf.titulo.innerHTML = '<marquee>' + temaR() + '</marquee>';
    interf.celEsquerda.innerHTML = '<center>' + '<br><img src="' + imgIntro() + '" />' + '</center>';
    interf.celDireita.innerHTML ='<center class="texto">'+mostraIntro();
    interf.celDireita.innerHTML += '<br><img src="' + imgParag() + '" />' + '</center>';
    interf.celEsquerda.innerHTML = CodApresPaisReceita(iReceita);


    }
function CodApresPaisReceita(iReceita){
    var nrec = numReceitas(), cod ='';
    cod+= '<div>'
    for (var i = 0; i < nrec; i++) {
        '</div>';
        cod+= '<button>' + mostraReceitas(i) + '</button>';
       
    }
    
    return cod;
}

