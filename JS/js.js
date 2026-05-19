
const Validator = {

    pattern: {
        tajszam : /^\d{4} \d{3} \d{3}$/,
        szemelyiId : /^\d{6}[A-Z]{2}$/,
        nev: /^[A-ZÁÉŰŐÖÜÓÍ][a-záéóüöőúí]/
    },
    validate(text, type){
        return text.match(this.pattern[type]) ? "Érvényes " + type : "Érvénytelen " + type;
    }
}

console.log(Validator.validate('2008 Baja', 'szulhely'));
console.log(Validator.validate('123456AB', 'szemelyiId'));
console.log(Validator.validate('Szőcs', 'nev'));

function ellenorzes(){
    const taj=document.getElementById('szulhely').value.trim();
    const szig=document.getElementById('szemelyiIg').value.trim();
    const nev=document.getElementById('nev').value.trim();

    const eredmenyek=[
        Validator.validate(taj, 'szulhely'),
        Validator.validate(szig, 'szemelyiIg'),
        Validator.validate(nev, 'nev'),
    ];

    alert(eredmenyek);
}