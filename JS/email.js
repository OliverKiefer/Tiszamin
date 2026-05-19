

// Mit ellenőrzünk ?

// Van-e benne @ jel
// Van-e benne . karakter
// . után van min 1 karakter
// @ előtt van  min 1 karakter
// @ után van min 1 karakter


// \s 
// ^
// [^]
// @
// $

// 01. Legegyszerűbb, struktúrát ellenőrző minta:
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const email = "s@t.h";
console.log(email.match(emailPattern));


// 02. 01.v mennyiségi feltételekkel:
const emailPattern2 = /^[^\s@]{3,}@[^\s@]{3,}\.[^\s@]{2,}$/;
const email2 = "szocsgabor@turr.hu";
console.log(email2.match(emailPattern2));


function ellenorzesEmail(){
    const email=document.getElementById('email').value.trim();
    if(email.match(emailPattern2)){
        alert('Email megfelelő, Üdvözlöm!')
    }
    else{
        alert('Nem jó a megadott emailcím!')
    }
}