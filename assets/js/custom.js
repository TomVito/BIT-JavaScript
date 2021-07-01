document.getElementById("atidarymoNuoroda").onclick = function () {
  var popup = document.getElementById("offcanvasAtidarymas");

  if (popup.classList.contains("open") == false) {
    popup.classList.add("open");
  } else {
    popup.classList.remove("open");
  }
};

document.getElementById("sutinku").onclick = function () {
  var cookies = document.getElementById("slapukai");

  cookies.classList.add("closed");
};

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

  var zinute =
    "Jūs sėkmingai pridėjote " + kiekis + " " + zodis + " į savo krepšelį!";

  if ((kiekis % 100 > 10 && kiekis % 100 < 20) || kiekis % 10 == 0) {
    zodis = "prekių";
  }
  if (kiekis < 1) zinute = "Pasirinktas per mažas kiekis";

  if (kiekis > 100)
    zinute = "Jūsų pasirinktas prekių kiekis yra didesnis nei leistinas.";

  document.getElementById("messages").innerHTML = zinute;
}

document.getElementById("result").addEventListener("click", clearResult);

function clearResult() {
  document.getElementById("kiekis").value = "";
}
