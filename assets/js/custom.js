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
let stringas = '';

for(let i = 1; i < 3000; i++) {

    integer = i / 77;

    if(Number.isInteger(integer)) {

      if(i != 77) {
        stringas += ', ';
      }
        stringas += i;
    }

}

document.querySelector('#ciklai').innerHTML += stringas + '<br>';

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
el_septinta.innerHTML += '<h6 style="margin-top: 100px;">Už kraštinių išsikišūsių elementų suma: ' + islinde + '</h6>';

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
let eighteeshero = '';

if(VanDamas.length < Stalone.length) {
  eighteeshero = VanDamas;
} else {
  eighteeshero = Stalone;
}

document.querySelector('.stringai').innerHTML += eighteeshero + '<br>';

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

document.querySelector('.stringai').innerHTML += trecias_2 + '<br>';

//5. Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.

document.querySelector('.stringai').innerHTML += '<strong>' + '5.' + '<strong/>' + ' ';

let hollywood = 'Once upon a time in hollywood';

document.querySelector('.stringai').innerHTML += hollywood.replace(/[Oo]/g, '*') + '<br>';

//6. Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Suskaičiuoti visas “o” (didžiąsias ir mažąsias) raides. Rezultatą atspausdinti.

document.querySelector('.stringai').innerHTML += '<strong>' + '6.' + '<strong/>' + ' ';

document.querySelector('.stringai').innerHTML += hollywood.split(/[Oo]+/).length + '<br>';

//7. Sukurti kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti.
//Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.

document.querySelector('.stringai').innerHTML += '<strong>' + '7.' + '<strong/>' + ' ';

let american = 'An American in Paris';
let tiffany = 'Breakfast at Tiffany\'s';
let odysey = '2001: A Space Odyssey';
let life = 'Its a Wonderful Life';

document.querySelector('.stringai').innerHTML += american.replace(/[aeyiou]/ig,'') + ', ' + tiffany.replace(/[aeyiou]/ig,'') + odysey.replace(/[aeyiou]/ig,'') + ', ' + life.replace(/[aeyiou]/ig,'') + '<br>';

//8. Suskaičiuoti kiek stringe “Don't Be a Menace to South Central While Drinking Your Juice in the Hood” yra žodžių trumpesnių arba lygių nei 5 raidės. 
//Pakartokite kodą su stringu “Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale”.
//padaryta funkcija

document.querySelector('.stringai').innerHTML += '<strong>' + '8.' + '<strong/>' + ' ';

function wordsCounter(phrase, length) {

  let frazes_masyvas = phrase.split(' ');
  let zodziu_counteris = 0;

  for (let i = 0; i < frazes_masyvas.length; i++) {

    if (frazes_masyvas[i].length <= length)
        zodziu_counteris++;
  }

    return zodziu_counteris;
  
}

let fraze = 'Don\'t Be a Menace to South Central While Drinking Your Juice in the Hood';
let fraze2 = 'Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale';

document.querySelector('.stringai').innerHTML += wordsCounter(fraze, 5) + ', ' + wordsCounter(fraze2, 5) + '<br>';

//Papildoma užduotis

document.querySelector('.stringai').innerHTML += '<strong>' + 'Papildoma:' + '<strong/>' + ' ';

abecele = 'abcdefghijklmnopqrstuvwxyz';
let randomraides = '';

for ( var i = 0; i < 3; i++ ) {

    randomraides += abecele.charAt( Math.floor( Math.random() * abecele.length) );

}

document.querySelector('.stringai').innerHTML += randomraides;

//Funkcijos kūrimas

//Heading function 
/*
function headingas(uzduotis, tema = false, tevinis = '.appended-text') {

  let child = document.querySelector(tevinis);

  if(tema) {

      let klase = tema.replace(' ', '').toLowerCase();

      document.querySelector(tevinis).innerHTML += '<div class="' + klase + '"></div>'; 
      //Kaip ir ankstesneje uzduotyje sukurtas parent elementas uzduociai ir headingai kiekvienai is ju

      child = document.querySelector('.' + klase);
      
      child.innerHTML += '<h5>' + tema + '</h5>';

  } 

  child.innerHTML += '<h5>' + uzduotis + '</h5>';

  return '.' + child.className;

}

let elementas = headingas('Pirma užduotis', 'Funkcijos 2021-07-28');
let el_selector = document.querySelector(elementas);
pvz el_selector.innerHTML +=  '<h1>Objektai</h1>';

*/

//1. Sukurkite funkciją kuri patikrintų du gautus parametrus stringo pavidale. Tikrinamas dvieju stringų ilgis. 
//Sukurti tris galimus scenarijus: Jei pirmasis yra didesnis už antrą. Jei antrasis didesnis už pirmąjį. 
//Jei abiejų ilgis vienodas. Funkciją turi grąžinti tekstinį atsakymą. Pvz. ‘Pirmasis stringas yra ilgesnis už antrajį’. Atsakymą atvaizduokite lange.

document.querySelector('.functions').innerHTML += '<strong>' + '1.' + '<strong/>' + ' ';

function stringLength(first, second) {

  let sakinys = first.length;
  let antrassakinys = second.length;
  let gautassakinys = ' ';

  if (sakinys > antrassakinys) {
    gautassakinys = 'Pirmasis stringas yra ilgesnis už antrajį';
  } else if (antrassakinys > sakinys) {
    gautassakinys = 'Antras stringas yra ilgesnis už pirmąjį';
  } else {
    gautassakinys = 'Stringų ilgiai vienodi';
  }

  return gautassakinys;

}

  let alus = 'Bet aš vistiek gersiu alų savo vokiečių gatvėj';
  let vokietis = 'Muzika kuri auga, muzika kuri skauda, muzika kuri saugo';


document.querySelector('.functions').innerHTML += stringLength(alus, vokietis) + '<br>';

//2. Sukurkite funkciją kuri priimtų penkis parametrus ir grąžintų stringą, kuriame x būtų pakeistas kitamaisiais. 
//“Jūs būsite x ir gyvensite x. Susituoksite su x bei turėsite šunį vardu x, o mirsite sulaukę x metų.” Pakartokite funkciją tris kartus su vis kitokiais parametrais.

document.querySelector('.functions').innerHTML += '<strong>' + '2.' + '<strong/>' + ' ';

function xstring(x1, x2, x3, x4, x5) {

document.querySelector('.functions').innerHTML += 'Jūs būsite' + ' ' + x1 + ' ' + 'ir gyvensite' + ' ' + x2 + '.' + ' ' + 'Susituoksite su' + ' ' + x3 + ' ' + 'bei turėsite šunį vardu' + ' ' + x4 + ', o mirsite sulaukę' + ' ' + x5 + ' ' + 'metų.' + '<br>';
  
}

xstring('sveikas', 'ilgai', 'protinga moterimi', 'Tobis', '86');
xstring('ligotas', 'trumpai', 'vyru', 'Bučkis', '40');
xstring('įdomus', 'linksmai', 'bet kuo', 'katinas', 'gražių');

//3. Sukurkite funkciją kuri priimtų vieną parametrą. Funkcija turi apskaičiuoti šuns amžių. Vieneri žmogaus metai = septyneri šuns metai. 
//Įvedamas parametras žmogaus metais. Funkcija turi grąžinti atsakymą stringo pavidalu: "Jūsų šuniukui yra x metų".

document.querySelector('.functions').innerHTML += '<strong>' + '3.' + '<strong/>' + ' ';



function dogLife(years) {

let metai = 'metai';

if ((years * 7 > 10 && years * 7 < 20) || years * 7 % 10 == 0) {
  metai = 'metų';
}

let dogyears = 'Jūsų šuniukui yra'+ ' ' + years * 7 + ' ' + metai + '.';

return dogyears;

}

document.querySelector('.functions').innerHTML += dogLife('10') + '<br>';

//4. Sukurkite funkciją kuri konvertuotų kilometrus į mylias ir atvirkščiai. Rezultatą išveskite ekrane.

document.querySelector('.functions').innerHTML += '<strong>' + '4.' + '<strong/>' + ' ';

function matai(ilgis, mylia = false) {

  let skirtumas = 0.621371;

  if(mylia) {
      return ilgis / skirtumas;
  }

  return ilgis * skirtumas;

}

document.querySelector('.functions').innerHTML += matai(50, true);

//Masyvai

document.querySelector('.masyvai').innerHTML += '<br>' + '<h5>Masyvai</h5>' + '<br>';

//1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

document.querySelector('.masyvai').innerHTML += '<strong>' + '1.' + '<strong/>' + ' ';

let naujas_masyvas = [];

for (let i = 0; i < 30; i++) {

  let skaicius = randomSkaicius(5, 25);
  naujas_masyvas.push(skaicius);

}

document.querySelector('.masyvai').innerHTML += naujas_masyvas + '<br>';

//2. Naudodamiesi 1 uždavinio masyvu:

//Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

document.querySelector('.masyvai').innerHTML += '<strong>' + '2.' + '<strong/>' + ' ';

let count = 0;

for (let i = 0; i < naujas_masyvas.length; ++i) {

    if(naujas_masyvas[i] > 10)
        count++;

}

document.querySelector('.masyvai').innerHTML += '<strong>' + 'A)' + '</strong>' + ' ' + 'Rasta didesnių už 10:' + ' ' + count + '<br>';

//Raskite didžiausią masyvo reikšmę ir jos indeksą;


let maxreiksme = Math.max(...naujas_masyvas);

document.querySelector('.masyvai').innerHTML += '<strong>' + 'B)' + '</strong>' + ' ' +  'Didžiausia reikšmė:' + ' ' + maxreiksme + '. ' + 'Jos indeksas:' + ' ' + naujas_masyvas.indexOf(maxreiksme) + '<br>';

//Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;

let even = 0;

for(let i = 0; i < naujas_masyvas.length; i++) {


   if(i % 2 == 0) {

      even += naujas_masyvas[i];

   }

 }

document.querySelector('.masyvai').innerHTML += '<strong>' + 'C)' + '</strong>' + ' ' + 'Porinių indeksų reikšmių suma:' + ' ' + even + '<br>';

//Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

let masyvas_minus = [];

for(let i = 0; i < naujas_masyvas.length; i++) {

  masyvas_minus[i] = naujas_masyvas[i] - i;

}

document.querySelector('.masyvai').innerHTML += '<strong>' + 'D)' + '</strong>' + ' ' + masyvas_minus + '<br>';

//Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;

for(let i = 0; i < 10; i++) {

naujas_masyvas.push(randomSkaicius(5 , 25))

}

document.querySelector('.masyvai').innerHTML += '<strong>' + 'E)' + '</strong>' + ' ' + naujas_masyvas + '<br>';

//Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indekso reikšmių, o kitas iš porinių;

let evenarray = [];
let oddarray = [];

for(let i = 0; i < naujas_masyvas.length; i++) {

 if (i % 2 == 0) {
    evenarray.push(naujas_masyvas[i])
 } else {
   oddarray.push(naujas_masyvas[i])
 }

}

document.querySelector('.masyvai').innerHTML += '<strong>' + 'F)' + '</strong>' + ' ' + evenarray + '<br>' + oddarray + '<br>';

//Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;

let firstindex = 0;

for(let i = 0; i < naujas_masyvas[i]; i++) {

  if( naujas_masyvas[i] > 10) {

    firstindex = i;

    break;

  }

}

document.querySelector('.masyvai').innerHTML += '<strong>' + 'G)' + '</strong>' + ' ' + firstindex + '<br>';

//Lengvai savaitgaliui 

let tekstinismasyvas = ['Jogile', 'Aiste', 'Jovita', 'Egle', 'Marius', 'Gintautas'];

document.querySelector('.masyvai').innerHTML += '<strong>' + 'Lengvai savaitgaliui)' + '</strong>' + + ' ' + tekstinismasyvas.sort() + '<br>' + tekstinismasyvas.reverse() + '<br>';

//1. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

document.querySelector('.masyvai').innerHTML += '2021-08-22' + '<br>' + '<strong>' + '1. ' + '</strong>';

raides = 'ABCD';
let atsitiktinis = [];
let raideA = 0;
let raideB = 0;
let raideC = 0;
let raideD = 0;

for ( let i = 0; i < 200; i++ ) {

  atsitiktinis += raides.charAt( Math.floor( Math.random() * raides.length) );

  if(atsitiktinis[i] == 'A')
  raideA++;

  if(atsitiktinis[i] == 'B')
  raideB++;

  if(atsitiktinis[i] == 'C')
  raideC++;

  if(atsitiktinis[i] == 'D')
  raideD++;

}

document.querySelector('.masyvai').innerHTML += atsitiktinis + '<br>' + 'A raidžių:' + ' ' + raideA + '<br>' + 'B raidžių:' + ' ' + raideB + '<br>' + 'C raidžių:' + ' ' + raideC + '<br>' + 'D raidžių:' + ' ' + raideD;

//2. Išrūšiuokite pirmo uždavinio masyvą pagal abecėlę.

document.querySelector('.masyvai').innerHTML += '<br>' + '<strong>' + '2.' + '</strong>' + ' ';

let alphastring = atsitiktinis.split('').sort().join('');

document.querySelector('.masyvai').innerHTML += alphastring;

//3. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).

document.querySelector('.masyvai').innerHTML += '<br>' + '<strong>' + '3. ' + '</strong>';

let randommasyvas1 = [];
let randomskaicius1 = 0;
let randommasyvas2 = [];
let randomskaicius2 = 0;

while (randommasyvas1.length < 100) {

  randomskaicius1 = randomSkaicius(100, 999);

  if(!randommasyvas1.includes(randomskaicius1)) {
  randommasyvas1.push(randomskaicius1);

  }

  randomskaicius2 = randomSkaicius(100, 999);

  if(!randommasyvas2.includes(randomskaicius2)) {
  randommasyvas2.push(randomskaicius2);

  }

}

document.querySelector('.masyvai').innerHTML += 'Masyvas 1: ' + randommasyvas1 + '<br>' + 'Masyvas 2: ' + randommasyvas2;

//4. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 3 uždavinio masyve, bet nėra antrame 3 uždavinio masyve.

document.querySelector('.masyvai').innerHTML += '<br>' + '<strong>' + '4. ' + '</strong>';

let masyvastikis1 = [];

for(let i = 0; i < randommasyvas1.length; i++) {

if (!randommasyvas2.includes(randommasyvas1[i])) {

  masyvastikis1.push(randommasyvas1[i]);

  }

}

document.querySelector('.masyvai').innerHTML += masyvastikis1;

//5. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 3 uždavinio masyvuose.

document.querySelector('.masyvai').innerHTML += '<br>' + '<strong>' + '5. ' + '</strong>';

let masyvasisabieju = [];

masyvasisabieju.push(randommasyvas1.filter(val => randommasyvas2.includes(val)));

document.querySelector('.masyvai').innerHTML += masyvasisabieju;

//6. Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. 
//Penktas trečio ir ketvirto suma ir t.t.

document.querySelector('.masyvai').innerHTML += '<br>' + '<strong>' + '6. ' + '</strong>';

//Objektai

document.querySelector('.objektai').innerHTML += '<Br>' + '<h5>Objektai</h5>';

//2021-08-03. Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 3 uždavinio masyvo reikšmės, o jo reikšmės būtų iš antrojo masyvo.

document.querySelector('.objektai').innerHTML += '<br>' + '<strong>' + '2021-08-03' + '</strong>' + ' ';

let objektoMasyvas = {};

for (let i = 0; i < randommasyvas1.length; i++) {

    objektoMasyvas[randommasyvas1[i]] = randommasyvas2[i];

}

document.querySelector('.objektai').innerHTML += 'Atvaizduota konsoleje' + '<br>';

console.log(objektoMasyvas);

//2021-08-04. 1. Sugeneruokite 100 eilučių objektą kurio indeksas turėtų būti sukurtas iš atsitiktinių raidžių, o reikšmė atsitiktinis skaičius nuo 55 iki 5555.


document.querySelector('.objektai').innerHTML += '<strong>' + '2021-08-04:' + '</strong>' + ' ';

document.querySelector('.objektai').innerHTML += '<br>' + '<strong>' + '1. ' + '</strong>' + ' ';

function randomString(length) {

  let randomabecele = '';
  let abecele = 'abcdefghijklmnopqrstuvwxyz';

  for ( let i = 0; i < length; i++ ) {

    randomabecele += abecele.charAt( Math.floor( Math.random() * abecele.length) );

  }

  return randomabecele;

}

let objektasSimtas = {};

for ( let i = 0; i < 100; i++ ) {

  let randomabecele = randomString(20);
  let randomskaicius = randomSkaicius(55, 5555);

  objektasSimtas[randomabecele] = randomskaicius;

}

document.querySelector('.objektai').innerHTML += objektasSimtas + ' ' + 'Atvaizduota konsolėje.';

console.log(objektasSimtas);

//2. Sukurkite 115 eilučių masyvą ir iš jo ištrinkite visus elementus turinčius porinį indeksą

document.querySelector('.objektai').innerHTML += '<br>' + '<strong>' + '2. ' + '</strong>' + ' ';

let masyvasisvalytas = [];
let masyvaslikutis = [];

for (let i = 0; i < 115; i++) {

  masyvasisvalytas.push(randomSkaicius(5, 25));

}

for( var i = 0; i < masyvasisvalytas.length; i++) { 

  if ( i % 2 == 1) { 

    masyvaslikutis.push(masyvasisvalytas[i]);

  } 

  masyvasisvalytas.splice(i - 1 , 1);

}

//arba

// for (let i = 0; i < 115; i++) {

//   eiluciumasyvas.push(randomSkaicius(5, 50));

//   if( i % 2 == 0)

//   delete eiluciumasyvas[i];

// }

document.querySelector('.objektai').innerHTML += 'Išvalytas: ' + masyvasisvalytas + '<br>' + 'Ištrinta: ' + masyvaslikutis;

console.log(masyvasisvalytas);

//3. Sugeneruokite 15 eilučių masyvą, kuriame turėtume objektus, kurie nurodytų informaciją sudarytą iš trijų reikšmių. 
//Reikšmės ir indeksai turi būti sugeneruoti atsitiktinai. Panaudokite masyvą, kad sugeneruoti lentelę ir ją patalpinkite Mitech pavyzdžio dešinėje pusėje atsidarančiame lange.

document.querySelector('.objektai').innerHTML += '<br>' + '<strong>' + '3. ' + '</strong>';

document.querySelector('.objektai').innerHTML += 'Padaryta Mitech projekte';

//5. Naudokite funkcija randomSkaicius(). Sugeneruokite 6 kintamuosius su atsitiktinem reikšmėm nuo 1000 iki 9999. 
//Atspausdinkite reikšmes viename stringe, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.

document.querySelector('.objektai').innerHTML += '<br>' + '<strong>' + '5. ' + '</strong>';

let kintamasis1 = randomSkaicius(1000, 9999);
let kintamasis2 = randomSkaicius(1000, 9999);
let kintamasis3 = randomSkaicius(1000, 9999);
let kintamasis4 = randomSkaicius(1000, 9999);
let kintamasis5 = randomSkaicius(1000, 9999);
let kintamasis6 = randomSkaicius(1000, 9999);

let kintamasistevas = '';

document.querySelector('.objektai').innerHTML += kintamasistevas;



//*. Sugeneruokite 101 elemento masyvą su atsitiktiniais skaičiais nuo 0 iki 300. 
//Reikšmes kurios tame masyve yra ne unikalios pergeneruokite iš naujo taip, kad visos reikšmės masyve būtų unikalios. 
//Išrūšiuokite masyvą taip, kad jo didžiausia reikšmė būtų masyvo viduryje, o einant nuo jos link masyvo pradžios ir pabaigos reikšmės mažėtų. 
//Paskaičiuokite pirmos ir antros masyvo dalies sumas (neskaičiuojant vidurinės). 
//Jeigu sumų skirtumas (modulis, absoliutus dydis) yra didesnis nei | 30 | rūšiavimą kartokite. (Kad sumos nesiskirtų viena nuo kitos daugiau nei per 30)

// multidimensional array

document.querySelector('.naujalentele').innerHTML = '<br>' + '<h5>Lentelė</h5>';

document.querySelector('.naujalentele').innerHTML += '<table id="nauja_lentele" class="paskutinelentele">' 
                                                      + '<thead>' 
                                                      + '<th>Miestas</th>' 
                                                      + '<th>Adresas</th>' 
                                                      + '<th>Prekių likutis</th>' 
                                                      + '</thead>' 
                                                      + '<tbody>' 
                                                      + '</tbody>' 
                                                      + '</table>';

let paskutine_lentele = document.querySelector('.paskutinelentele > tbody');

let masyvas0805 = [

  {
    miestas: 'Kaunas',
    adresas: 'Savanorių pr. 276',
    likutis: 13
  },
  {
    miestas: 'Vilnius',
    adresas: 'Kauno g. 4',
    likutis: 7
  },
  {
    miestas: 'Rokiškis',
    adresas: 'Panevėžio g. 12',
    likutis: 24
  },

];

for(let i = 0; i < 10; i++) {

let objektas = {

  miestas: randomString(15),
  adresas: randomString(25),
  likutis: randomSkaicius(1, 99)

    }

  masyvas0805.push(objektas);

}

for(let i = 0; i < masyvas0805.length; i++) {

paskutine_lentele.innerHTML += '<tr><td>' + masyvas0805[i]['miestas'] + '</td>' + '<td>' + masyvas0805[i]['adresas'] + '</td>' + '<td>' + masyvas0805[i]['likutis'] + '</td>';

}

//+++ klases 

class pirmojiKlase {

    constructor() {

      let x = this.test();

      return x;

    }

    test() {

    return 'x';

    }

    test2() {

      return 0;

    }

    test3() {

      return 'y';

    }

}

let classtest = new pirmojiKlase();

console.log(classtest);

//switch kartojimas

function switchFunkcija(get) {

      let grazinimas = '';

      switch(get) {

          case 'pirmas':
            grazinimas = 'Rezultatas yra pirmas';
          break;

          case 'antras':
            grazinimas = 'Rezultatas yra antras';
          break;

          case 'trecias':
            grazinimas = 'Rezultatas yra trecias';
          break;

          default:
            grazinimas = 'Parametras nepaduotas';

      }

      return grazinimas;

}

console.log(switchFunkcija(''));