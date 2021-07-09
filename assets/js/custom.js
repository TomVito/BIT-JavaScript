// sidebar

document.getElementById("atidarymoNuoroda").onclick = function () {
  var popup = document.getElementById("offcanvasAtidarymas");

  if (popup.classList.contains("open") == false) {
    popup.classList.add("open");
  } else {
    popup.classList.remove("open");
  }
};

// close cookies

document.getElementById("sutinku").onclick = function () {
  var cookies = document.getElementById("slapukai");

  cookies.classList.add("closed");
};

// basket

document.getElementById("kvietejas").addEventListener("click", ikrepseli);

function ikrepseli() {
  var kiekis = document.getElementById("kiekis").value;
  var zodis = "prekes";

  if (kiekis % 10 == 1) {
    zodis = "prekę";
  }
  if ((kiekis > 10 && kiekis < 20) || kiekis % 10 == 0) {
    zodis = "prekių";
  }
  if ((kiekis % 100 > 10 && kiekis % 100 < 20) || kiekis % 10 == 0) {
    zodis = "prekių";
  }

  var zinute =
    "Jūs sėkmingai pridėjote " + kiekis + " " + zodis + " į savo krepšelį!";

  if (kiekis < 1) zinute = "Pasirinktas per mažas kiekis";
  if (kiekis > 100)
    zinute = "Jūsų pasirinktas prekių kiekis yra didesnis nei leistinas";

  document.getElementById("messages").innerHTML = zinute;
}

// click on enter

var input = document.getElementById("kiekis");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("kvietejas").click();
  }
});

// reset button

document.getElementById("result").addEventListener("click", clear);

function clear() {
  document.getElementById("kiekis").value = "";
  document.getElementById("messages").innerHTML = "";
}

//masyvas

const data = [
  {
    Vardas: "Vladas",
    Pavardė: "Vladanas",
    Gimimo_metai: "1969-06-09",
    Tautybė: "TSRS",
  },
  {
    Vardas: "Antanas",
    Pavardė: "Vlantanas",
    Gimimo_metai: "1954-01-03",
    Tautybė: "Kazachstanian",
  },
  {
    Vardas: "Stasas",
    Pavardė: "Basas",
    Gimimo_metai: "1980-09-14",
    Tautybė: "Yugoslavyan"
  },
];

data[1]["Tautybė"] = "Pabėgėlis";

let html = "";
let ending = "";

for (let index in data) {
  html += "<tr>";

  for (let index2 in data[index]) {
    html += "<td>" + data[index][index2] + "</td>";
  }
  html += "</tr>";
}

document.getElementById("lentelesVidus").innerHTML = html;


const duomenys = [
  {
    Klientas: 'Adomavičiaus įmonė',
    Kodas: '1000',
    Data: '2020.06.20',
    Produktas: 'Nešiojamas kompiuteris',
    Kaina: '1499',
    Papildoma_informacija: 'Prekė bus 2020.06.29',
  },
  {
    Klientas: 'UAB "KESKO SENUKAI"',
    Kodas: '1001',
    Data: '2020.06.21',
    Produktas: 'Televizorius',
    Kaina: '800',
    Papildoma_informacija: '',
  }, 
  {
    Klientas: 'UAB "SIMPLEA"',
    Kodas: '1002',
    Data: '2020.06.22',
    Produktas: 'Telefonas',
    Kaina: '299',
    Papildoma_informacija: '',
  },
  {
    Klientas: 'UAB "5 Konteineriai"',
    Kodas: '1003',
    Data: '2020.06.23',
    Produktas: 'Planšetė',
    Kaina: '450',
    Papildoma_informacija: ' Liko tik 1 vnt.'
  },
]

//switch

let reiksme = 0;

switch (reiksme) {
  case 0:
    document.getElementById("messages").innerHTML = "Su penktadieniu!";
    break;

  case 1:
    document.getElementById("messages").innerHTML = "Pirmadienis :(";
    break;

  case 2:
    document.getElementById("messages").innerHTML = "Antradienis :|";
    break;

  case 3:
    document.getElementById("messages").innerHTML = "Trečiadienis :)";
    break;

  default:
    document.getElementById("kiekis").value = "0000";
    document.getElementById("messages").innerHTML = "error";
    alert("error");
}

//switch uzduotis

document.getElementById("cars-select").onclick = function () {
  var car = document.getElementById("cars");

  var message = "";

  switch (car.value) {
    case "Volvo":
      message = "Saugumas";
      break;
    case "Saab":
      message = "Nebegaminamas";
      break;
    case "Opel":
      message = "Amerikietis";
      break;
    case "Audi":
      message = "Žiedai";
      break;

    default:
      message = "Viešasis transportas";
  }

  alert(message);
};

//lenteles rodymas ir paslepimas + mygtuko pakeitimas

document.getElementById("rodyti").onclick = function () {
  var lentele = document.getElementById("lentele");

  lentele.classList.toggle("show");

  if (lentele.classList.contains("show") == false) {
    document.getElementById("rodyti").innerText = "Rodyti";
  } else {
    document.getElementById("rodyti").innerText = "Slėpti";
  }
};

document.getElementById("j-rodyti").onclick = function () {
  var lentele = document.getElementById("j-lentele");

  lentele.classList.toggle("show");

  if (lentele.classList.contains("show") == false) {
    document.getElementById("j-rodyti").innerText = "J-rodyti";
  } else {
    document.getElementById("j-rodyti").innerText = "J-slėpti";
  }
};

//skaiciavimas

var suma = [1, 45, 7, 10, 8, 78, 12, 65, 97, 100, 24, 55, 32, 37, 99];
var sum = 0;
for (var i = 0; i < suma.length; i++) {
  sum += suma[i];
}

document.getElementById("calculate").onclick = function () {
  document.getElementById("rezultatas").value = sum;
};

console.log(sum);

//jQuery

  //mygtukas ir klases

jQuery(document).ready(function () {
  jQuery(".naujasmygtukas").addClass("klase");

  jQuery("#naujasmygtukas").removeClass("klase");

  jQuery(".naujasmygtukas").click(function () {
    alert("Cia yra naujasmygtukas");
    jQuery("#naujasmygtukas").addClass("btn-success");
  });

  //change funkcija

  jQuery("#cars").change(function () {
    var car = jQuery("#cars")[0];

    var message = "";

    switch (car.value) {
      case "Volvo":
        message = "Saugumas";
        break;
      case "Saab":
        message = "Nebegaminamas";
        break;
      case "Opel":
        message = "Amerikietis";
        break;
      case "Audi":
        message = "Žiedai";
        break;

      default:
        message = "Viešasis transportas";
    }
    jQuery("#cars-message").html(message);
  });

  //append

  jQuery("#nuoroda").append(
    '<div class="integruotas"><a href="#" class="integruotaNuoroda">Nuoroda</a></div>'
  );

  jQuery("#nuoroda a").click(function () {
    alert("Paspaudimas");
  });

  //masyvas su jQuery

  jQuery(data).each(function (index, reiksme) {
    jQuery(reiksme).each(function (index, reiksme) {
      console.log(reiksme);
    });
  });

  //lenteles su jQuery (copy from stackoverflow)

  var tbody = jQuery('#j-lentele tbody'),
  reiksmes = ["Vardas", "Pavardė", "Gimimo_metai", "Tautybė"];
  
  jQuery.each(data, function(i, data) {
  var tr = jQuery('<tr>');
  jQuery.each(reiksmes, function(i, reiksmes) {
  jQuery('<td>').html(data[reiksmes]).appendTo(tr);  
  });
  tbody.append(tr);
  });

  //simple variantas? 
  
  //('#j-lentelesVidus').append(html);

  // dar viena lentele jQuery

  /* senas variantas

  var tbody = jQuery('#html-lentele tbody'),
  reiksmes = ["Klientas", "Kodas", "Data", "Produktas", "Kaina", "Papildoma_informacija"];
  
  jQuery.each(duomenys, function(i, duomenys) {
  var tr = jQuery('<tr>');
  jQuery.each(reiksmes, function(i, reiksmes) {
  jQuery('<td>').html(duomenys[reiksmes]).appendTo(tr);  
  });
  tbody.append(tr);
  });
  */

  //naujas pataisytas lenteles variantas

  var tbody = jQuery('#html-lentele tbody');

  jQuery.each(duomenys, function(i, r) {
  var tr = jQuery('<tr>');
  jQuery.each(r, function(i, k) {
  jQuery('<td>').html(k).appendTo(tr);  
  });
  tbody.append(tr);
  });
  
});
