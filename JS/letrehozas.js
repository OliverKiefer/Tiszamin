const Validator = {
  pattern: {
    szulHely: /^[A-Za-zÁÉÍÓÖŐÚÜŰáéíóöőúüű\s]{2,}$/,
    szulIdo: /^\d{4}\.\d{2}\.\d{2}$/,
    jelszo: /^.{6,}$/,
    nev: /^[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+(?: [A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+)*$/,
  },

  validate(text, type) {
    if (type === "szulIdo") {
      if (!this.pattern.szulIdo.test(text)) {
        return false;
      }

      const [year, month, day] = text.split(".").map(Number);
      const date = new Date(year, month - 1, day);

      if (
        date.getFullYear() !== year ||
        date.getMonth() !== month - 1 ||
        date.getDate() !== day
      ) {
        return false;
      }
      if (year < 1940 || year > 2026) {
        return false;
      }

      return true;
    }

    return this.pattern[type].test(text);
  },
};

function ellenorzes() {
  const szulHely = document.getElementById("szulHely").value.trim();
  const szulIdo = document.getElementById("szulIdo").value.trim();
  const jelszo = document.getElementById("jelszoLetrehozas").value.trim();
  const nev = document.getElementById("nev").value.trim();

  const hibak = [];

  if (!Validator.validate(szulHely, "szulHely")) {
    hibak.push("Hibás születési hely.");
  }
  if (!Validator.validate(szulIdo, "szulIdo")) {
    hibak.push("Hibás születési idő. Használj formátumot: ÉÉÉÉ.HH.NN");
  }
  if (!Validator.validate(jelszo, "jelszo")) {
    hibak.push("A jelszónak legalább 6 karakterből kell állnia.");
  }
  if (!Validator.validate(nev, "nev")) {
    hibak.push(
      "Hibás név. Kezdődjön nagybetűvel és csak ékezetes betűket, szóközt tartalmazzon.",
    );
  }

  if (hibak.length === 0) {
    alert("Sikeres fiók létrehozása");
  } else {
    alert("Nem sikerült létrehozni a fiókot:\n" + hibak.join("\n"));
  }
}
