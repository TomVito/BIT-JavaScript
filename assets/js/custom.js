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

//uzduotys 

//1. Sukurkite tris kintamuosius, kurie saugotų tris reikšmes: Vardas, Pavardė, Gimimo metai ir naudojantis jais puslapyje atvaizduokite eilutę:
//“Aš esu Vardenis Pavardenis gimęs xxx”.

document.querySelector('#javascript-testai').innerHTML = '<h5>Užduotis nr. 1</h5>';

const Vardas = 'Tomas';

const Pavardė = 'Vitonis';

const Gimimo_metai = '1991-09-19';

let details = Vardas + ' ' + Pavardė + ' ' + Gimimo_metai;

document.querySelector('#javascript-testai').innerHTML += details;

//2. Sukurkite kintamąjį kurio reikšmė būtų skaičius su liekana ir suapvalinkite jį iki sveiko skaičiaus. (Trys galimos funkcijos Math)

document.querySelector('#javascript-testai').innerHTML += '<h5>Užduotis nr. 2</h5>';

let nelyginis = 83.723;

document.querySelector('#javascript-testai').innerHTML +='Suapvalintas skaičius:' + ' ' + (Math.round(nelyginis));

//3. Integruokite skripte žemiau pateiktą funkciją:

document.querySelector('#javascript-testai').innerHTML += '<h5>Užduotis nr. 3</h5>';

const min = 666;

const max = 999;

function randomSkaicius(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

document.querySelector('#javascript-testai').innerHTML += 'Bet koks skaičius nuo 666 iki 999:' + ' ' + randomSkaicius(min, max);

//4. Sukurkite du kintamuosius ir naudodamiesi trečiame punkte pateikta funkcija priskirkite jiems atsitiktines reikšmes nuo 0 iki 4. 
//Padalinkite pirmąją reikšmę iš antrosios ir gautąjį rezultatą suapvalinkite iki sveiko skaičiaus. (Optional: esant reikalui grąžinkite žinutę: dalyba negalima) 

document.querySelector('#javascript-testai').innerHTML += '<h5>Užduotis nr. 4</h5>';

const first = randomSkaicius(0, 4);
const second = randomSkaicius(0, 4);

let dalyba = Math.floor(first / second);

if(second == 0)     
    dalyba = 'dalyba negalima';

document.querySelector('#javascript-testai').innerHTML += 'Pirmas skaičius:' + ' ' + first + ' ' + 'Antras:' + ' ' + second + ' ' + 'Padalinta:' + ' ' + dalyba;


//5. Pasinaudodami trečiame punkte pateikta funkcija, sukurkite tris kintamuosius ir priskirkite jiems tris reiksmes nuo 0 iki 25.
//Pasitelke Math.min() ir Math.max() metodus suraskite vidurinį skaičių.

document.querySelector('#javascript-testai').innerHTML += '<h5>Užduotis nr. 5</h5>';

const medf = 12
const meds = 5
const medt = 2

let median = Math.max( 
  Math.min( medf, meds ), 
  Math.min( Math.max( medf, meds), medt)
);

document.querySelector('#javascript-testai').innerHTML += 'Pirmas skaičius: '+ medf +' Antras skaičius: ' + meds + ' Trecias skaičius: ' + medt + ' Mediana:' + ' ' + median;

//6. Sugeneruokite atsitiktinį skaičių (nebūtinai sveiką) ir jį atvaizduokite savo puslapyje.

document.querySelector('#javascript-testai').innerHTML += '<h5>Užduotis nr. 6</h5>';

let netyciukas = Math.floor(Math.random() * 99999);

document.querySelector('#javascript-testai').innerHTML += netyciukas;

//7. Atspausdinkite tris skaičius nuo -10 iki 10 pasinaudodami ta pačia funkcija. Skaičiai mažesni už 0 turi būti pažymėti raudonai, 0 mėlynai, o didesni už nulį žalia spalva.

//9. Pasinaudokite jQuery scroll funkcija. CSS failą nustatykite body tagui parametrą “height” ir priskirkite reikšmę “10000px”. 
//Taip pat sukurkite du kintamuosius ir suveikus funkcijai paimkite lango viršutinę koordinatę ir viso puslapio aukštį kaip jų reikšmes. 
//Slenkant puslapiu žemyn, console.log() atvaizduokite kokią procentinę dalį puslapio jau peržiūrėjote.
//Galite naudoti ir vanilla js variantą:
//window.addEventListener('scroll', function() { console.log('scrolling'); });


window.onscroll = function() {

  let puslapioAukstis     = document.body.scrollHeight;
  let paslinkimoPozicija  = window.pageYOffset;
  let langoAukstis        = window.innerHeight;
  let procentinePozicija  = Math.round((paslinkimoPozicija + langoAukstis) / puslapioAukstis * 100); 

  console.log(procentinePozicija + '%');
}

//užduotis 'ciklai'

document.querySelector('#ciklai').innerHTML = '<h2>Ciklai</h2>';

document.querySelector('#ciklai').innerHTML += '<br>' + '<h5>400“*”</h5>' + '<br>';

let text = "";
let counter = 0;

for (let i = 0; i < 400; i++) {

  text += '*';

  counter++;
 
  if(counter == 50) {
    text += '<br />';
    counter = 0;
  }

}

document.querySelector('#ciklai').innerHTML += text;

//300 atsitiktinių skaičių nuo 0 iki 300

document.querySelector('#ciklai').innerHTML += '<br>' +  '<h5>300 atsitiktinių skaičių nuo 0 iki 300</h5>' + '<br>';

let skaicius = 0;
let skaiciai = '';
let didesni = 0;

for (let i = 0; i < 300; i++) {
  skaicius = randomSkaicius(0, 300);

  if(skaicius > 150)
      didesni++;

  if(skaicius > 275) {
      skaiciai += '<span style="color: red;">' + skaicius + '</span>';
    } else {
        skaiciai += skaicius;
    }

  if(i != 299)
      skaiciai += ', ';

}

document.querySelector('#ciklai').innerHTML += skaiciai + '<br>' + '<strong>Didesni skaičiai už 150:' + ' ' + '<span style="color: blue;">' + didesni + '</span>' + '<br>';

//Skaičiai nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos

document.querySelector('#ciklai').innerHTML += '<br>' + '<h5>Skaičiai nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos</h5>' + '<br>';

let integer = 0;
let string = '';

for(let i = 1; i < 3000; i++) {

    integer = i / 77;

    if(Number.isInteger(integer)) {

      if(i != 77) {
        string += ', ';
      }
        string += i;
    }

}

document.querySelector('#ciklai').innerHTML += string + '<br>';

//kvadratas + zvaigzdes

document.querySelector('#ciklai').innerHTML += '<br>' + '<h5>Kvadratas</h5>' + '<br>';

let kvadratas = '';
let kvadrato_dydis = 100;

for (let i = 1; i <= (kvadrato_dydis * kvadrato_dydis); i++) {
    kvadratas += '*';

    if(i != 1 && i%kvadrato_dydis == 0)
        kvadratas += '<br>';
  
}

document.querySelector('#ciklai').innerHTML += kvadratas;

//kortu zaidimas

document.querySelector('#ciklai').innerHTML += '<br>' + '<h5>Optional</h5>' + '<br>';

let Benas = 0;
let Jovita = 0;
let winner = '';
let ended = false;
let final = 222;

  for (let i = 0; i <= 100; i++) {
    
    if(ended)
      break;

    Benas += randomSkaicius(10, 20);
    Jovita += randomSkaicius(5, 25);

    if(Benas >= final || Jovita >= final) {

      ended = true;

      if(Benas >= final) {
        winner = '<strong>Benas</strong> surinkęs' + ' ' + Benas;
      } else {
        winner = '<strong>Jovita</strong> surinkusi' + ' ' + Jovita;
      }

    }

  }

document.querySelector('#ciklai').innerHTML += 'Benas:' + ' ' + Benas + ' ' + 'Jovita:' + ' ' + Jovita + '<br>' + 'Žaidimą laimėjo:' + ' ' + winner + ' ' + 'taškus' + '<br>';

//vinies kalimas

document.querySelector('#ciklai').innerHTML += '<br>' + '<h5>Vinis</h5>';

let nail = 85;
let smallhammer = 0;
let smallhits = '';
let liko = '';
var i = 0;

while (smallhammer <= nail) {

  smallhammer += randomSkaicius(5, 20);

  liko = nail - smallhammer;

  i++;

  smallhits += '<br>' + i + ' smūgiu įkalta:' + ' ' + smallhammer + ' ' + 'mm.' + ' ' + 'Liko įkalti' + ' ' + liko + ' ' + 'mm.';

}

document.querySelector('#ciklai').innerHTML += '<br>' + 'Prireikė mažų smūgių:' + ' ' + '<strong>' + i + '</strong>' + '<br> ' + smallhits + '<br>';

//kvadratas + elementai (div kurimas)

document.querySelector('#ciklai').innerHTML += '<div class="kvadratas"></div>';

document.querySelector('.kvadratas').innerHTML += '<br>' + '<h5>Square</h5>' + '<br>';

let el_septinta = document.querySelector('.kvadratas');

el_septinta.innerHTML += '<div class="parent"></div>';

let el_tevinis = document.querySelector('.parent');


let tevinio_aukstis = el_tevinis.offsetHeight;
let tevinio_plotis  = el_tevinis.offsetWidth;
let islinde         = 0;

i = 0;

while (i < 300) {

    el_tevinis.innerHTML += '<div class="square"></div>';

    let elementas = document.querySelectorAll('.square')[i];
    let atsitiktinis_virsus = randomSkaicius(0, 550);
    let atsitiktine_kaire   = randomSkaicius(0, 550);

    elementas.style.top = atsitiktinis_virsus+'px';
    elementas.style.left = atsitiktine_kaire+'px';

    if((atsitiktinis_virsus > tevinio_aukstis) 
        || (atsitiktine_kaire > tevinio_plotis))
        islinde++;

    i++;
}
el_tevinis.innerHTML += '<div style="color: #FFF; font-size: 100px; position: absolute; top: 200px; left: 200px; font-weight: bold;">' + islinde + '</div>';
el_septinta.innerHTML += '<h5 style="margin-top: 100px;">Už kraštinių išsikišūsių elementų suma: ' + islinde + '</h5>';

//string functions

//let stringas = 'Pavasarį žydi labai daug medžių';

//Apie length
//console.log(stringas.length); //Konsoleje atvaizduojamas kintamojo reiksmes simboliu kiekis

//Apie split
//let stringo_masyvas = stringas.split(' ');

//console.log( stringo_masyvas[4] );

//Apie replace()
//console.log( stringas.replace('žydi', 'atgminsta') );  //Konsoleje atvaizduojamas naujas sakinys su pakeistu zodziu zydi i zodi atgimsta

//Apie repeat()
//console.log( stringas.repeat(1) );

//Apie charAt() Graziname viena simboli is specifiskos pozicijos
//console.log( stringas.charAt(0) );

//Apie substr() Graziname simbolius nuo pirmame parametre nurodytos pozicijos iki antrame parametre nurodyto kiekio
//console.log( stringas.substr(10, 9) );

//Apie toLowerCase()
//console.log( stringas.toLowerCase() );

//Apie toUpperCase()
//console.log( stringas.toUpperCase() );

//Apie trim()
//stringas = '    Pavasarį žydi labai daug medžių         ';

//console.log( stringas.trim() );

//Apie startsWith() true arba false rezultatas
//boolean
//console.log( stringas.startsWith('P') );

//Apie endsWith() auksciau minetos funkcijos priespriesa
//console.log( stringas.endsWith('ų') );

//Apie includes() 
//console.log( stringas.includes('v') );

//Apie indexOf() 
//console.log(stringas.indexOf('žydi'));

//Apie lastIndexOf()
//console.log(stringas.lastIndexOf('ž')); 

document.querySelector('.stringai').innerHTML = '<h5>Stringai<h5/>';

//1. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.

document.querySelector('.stringai').innerHTML += '<strong>' + '1.' + '<strong/>' + ' ';

let VanDamas = 'Jean-Claude Van Damme';
let Stalone = 'Sylvester Stallone';

if(VanDamas.length < Stalone.length) {
  document.querySelector('.stringai').innerHTML += 'Jean-Claude Van Damme';
} else {
  document.querySelector('.stringai').innerHTML += 'Sylvester Stallone' + '<br>';
}

//2. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Vardą atspausdinti tik didžiosiom raidėm, o pavardę tik mažosioms.

document.querySelector('.stringai').innerHTML += '<strong>' + '2.' + '<strong/>' + ' ';

let Svarcas = 'Arnold Schwarzenegger';
let Landgrenas = 'Dolph Lundgren';

let svarco_masyvas = Svarcas.split(' ');
let landgreno_masyvas = Landgrenas.split(' ');

document.querySelector('.stringai').innerHTML += svarco_masyvas[0].toUpperCase() + ' ' + svarco_masyvas[1].toLowerCase() + ',' + ' ' + landgreno_masyvas[0].toUpperCase() + ' ' + landgreno_masyvas[1].toLowerCase() + '<br>'; 

//3. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
//Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

document.querySelector('.stringai').innerHTML += '<strong>' + '3.' + '<strong/>' + ' ';

let Chuckas = 'Chuck Norris';
let Briusas = 'Bruce Willis';

let chuko_masyvas = Chuckas.split(' ');
let briuso_masyvas = Briusas.split(' ');

let trecias = Chuckas.charAt(0) + chuko_masyvas[1].charAt(0) + Briusas.charAt(0) + briuso_masyvas[1].charAt(0) + '<br>';

document.querySelector('.stringai').innerHTML += trecias;

//4. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
//Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

document.querySelector('.stringai').innerHTML += '<strong>' + '4.' + '<strong/>' + ' ';

let Lee = 'Bruce Lee';
let Sygalas = 'Steven Seagal';

let trecias_2 = Lee.substr(0, 3) + Lee.substr(-3) + Sygalas.substr(0, 3) + Sygalas.substr(-3);

document.querySelector('.stringai').innerHTML += trecias_2;
