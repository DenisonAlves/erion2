const btnMobile = document.getElementById ('btn-mobile');

function toggleMenu (event){
    if (event.type === 'touchstart') event.preventDefault();

    const nav = document.getElementById('nav');
    nav.classList.toggle('active');    
    const active = nav.classList.contains('active');   

    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'fechar menu');
    } else{
        event.currentTarget.setAttribute('aria-label', 'abrir menu');        
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function showIt2() {document.getElementById("msg1").style.visibility = "visible";}    setTimeout("showIt2()", 5000); function hiddenIt() {document.getElementById("msg1").style.visibility = "hidden";}setTimeout("hiddenIt()", 15000); function showIt3() {document.getElementById("msg1").style.visibility = "visible";} setTimeout("showIt3()", 25000);  msg1.onclick = function() {document.getElementById('msg1').style.visibility = "hidden"; };function alertW() { document.getElementById("alertWapp").style.visibility = "visible";	} setTimeout("alertW()", 15000);

const cartoes = document.querySelector("#card");
const botao = document.querySelector("#botaoSistema");

function verMais(){
    if(cartoes.className == "open"+" card"){
        cartoes.className = "card";
        botao.innerHTML = "Ver Mais";
    } else {
        cartoes.className = "open"+" card";
        botao.innerHTML = "Mostrar menos";        
    }
}

const emissor = document.querySelector("#card");
const pdv = document.querySelector("#card-pdv");

function sistema(){
    if(pdv.className == "card-pdv-visible"+" pdv"){
        pdv.className = "pdv";
    }else {
        pdv.className = "card-pdv-visible"+" pdv";
    }
}