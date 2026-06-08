const Validator={
    pattern:{
        vezeteknev: /^[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+(?: [A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+)*$/,
        keresztnev: /^[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+(?: [A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+)*$/,
    },
}
function ellenorzes(){
 const vezeteknev=document.getElementById("vezeteknev").value.trim()
 const vezeteknev=document.getElementById("keresztnevnev").value.trim()

 const hibak=[];
 if(!Validator.validate(vezeteknev, "vezeteknev")){
    hibak.push("Nem megfelelő a vezetéknév. Kérem normális vezetéknevet adjon meg!");
 }
 if(!Validator.validate(keresztnev, "keresztnev")){
    hibak.push("Nem megfelelő a keresztnév. Kérem normális keresztnevet adjon meg!")
 }
 if(hibak.length==0){
    alert("Sikeres feliratkozás!")
 }
 else{
    alert("Nem sikerült feliratkozni:\n" + hibak.join("\n"));
 }
}
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const email = "s@t.h";
console.log(email.match(emailPattern));

const emailPattern = /^[^\s@]{3,}@[^^\s@]{3,}\.[^\s@]{2,}$/;
function ellenorzesEmail() {
  const email = document.getElementById("email").value.trim();

  if (emailPattern.test(email)) {
    alert("Sikeres bejelntkezés");
  } else {
    alert("Nem jó a megadott emailcím!");
  }
}
