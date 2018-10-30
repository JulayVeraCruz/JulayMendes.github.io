//discorPars.js****************************************************************************
var docXML;
//Através de um ficheiro XML no servidor, e de um objeto XMLhttpRequest é produzida a variávl docXML, capaz de ser
//processada em javascript no cliente. Em simultâneo, será iniciada a função principal inic().

function inicXML(fichXML) {
    //Criação de um objecto XMLHTTPREQUEST
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            docXML = xmlhttp.responseXML; inic();
        }
    }
    xmlhttp.open("GET", fichXML, true);
    xmlhttp.send();

}

//EXTRAÇÂO DE DADOS
//titulo da aplicação
function temaR() {
    var rec = docXML.getElementsByTagName("introducao")[0];
    return rec.getAttribute("tema");
}
//mostra imagem de esquerda
function imgIntro() {
    var rec = docXML.getElementsByTagName("introducao")[0];
    return "imagem/" + rec.getAttribute("logotipo");

}

//IMAGEM central
function imgParag() {
    var rec = docXML.getElementsByTagName("introducao")[0];
    return "imagem/" + rec.getAttribute("imgIntroducao");
}

function  mostraIntro(){
    var rec = docXML.getElementsByTagName("introducao")[0];
    return rec.childNodes[0].nodeValue;
}
function numReceitas() {
    return docXML.getElementsByTagName("receitas").length;
}
function mostraReceitas(iPais) {
    var rec = docXML.getElementsByTagName("receitas")[iPais];
    return rec.getAttribute("pais");
}