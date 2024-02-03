
function vypisJidloARecept() {
    document.getElementById("hodnoty").style.display = "none";       // skryje obsah tabulky s receptem
    document.getElementById("reset").style.display = "none";       // skryje tlačítko - reset jídla
    document.getElementById("hodnoty").style.display = "inherit";    // aktivuje skrytý obsah tabulky s receptem
    pocet_v_seznamu = lowcarb_vecere.length;
    if (lowcarb_vecere.length == 0) {
        document.getElementById("jidlo").innerHTML = "už tady nic dalšího není 😮";
        document.getElementById("obrazek").innerHTML = "<img src='../../0pics/prazdny-talir.webp'>";
        document.getElementById("reset").style.display = "inherit";    // aktivuje skryté tlačítko - reset jídla
        document.getElementById("hodnoty").style.display = "none";       // skryje obsah tabulky s receptem
        document.getElementById("generuj").style.display = "none";       // skryje obsah tabulky s receptem

    } else {
        // vybere random číslo podle počtu jídel v seznamu a vypíše je
        vypis = Math.floor(Math.random() * pocet_v_seznamu);
        document.getElementById("nazev").innerHTML = lowcarb_vecere[vypis].nazev;
        document.getElementById("postup").innerHTML = lowcarb_vecere[vypis].postup;
        document.getElementById("ingredience").innerHTML = lowcarb_obed[vypis].ingredience;
        document.getElementById("obrazek").innerHTML = lowcarb_vecere[vypis].obrazek;
        document.getElementById("energie").innerHTML = lowcarb_vecere[vypis].energie;
        document.getElementById("sacharidy").innerHTML = lowcarb_vecere[vypis].sacharidy;
        document.getElementById("tuky").innerHTML = lowcarb_vecere[vypis].tuky;
        document.getElementById("bilkoviny").innerHTML = lowcarb_vecere[vypis].bilkoviny;

        lowcarb_vecere = lowcarb_vecere.splice(vypis, 1);
    }
}
  
  /* NAČTENÍ JÍDEL DO SIDEBARU */
function nactiJidla() {
    // document.getElementById("sidenav").style.width = "250px";
    for (let i = 0; i < lowcarb_vecere.length; i++) {
        const x = document.createElement("li");
        x.setAttribute("id", i);
        var somePlace = document.getElementById("myMenu");
        somePlace.appendChild(x);
        const y = document.createElement("a");
        y.setAttribute("id", i);
        y.innerText = lowcarb_vecere[i].nazev;
        var somePlace2 = document.getElementById(i);
        somePlace2.appendChild(y);
    } 
}
      
  /* SIDENAV - NAČÍTÁNÍ JÍDEL Z LISTU */
document.onclick = function(e){
    var x = e.target.id
    var myValue = lowcarb_vecere[x]["nazev"]
    document.getElementById("nazev").innerHTML = myValue;
    var myValue = lowcarb_vecere[x]["ingredience"]
    document.getElementById("ingredience").innerHTML = myValue;
    var myValue = lowcarb_vecere[x]["postup"]
    document.getElementById("postup").innerHTML = myValue;
    var myValue = lowcarb_vecere[x]["obrazek"]
    document.getElementById("obrazek").innerHTML = myValue;
    document.getElementById("hodnoty").style.display = "inherit";    // aktivuje skrytý obsah tabulky s receptem
}
  
  
const lowcarb_vecere = [
  
  
  
  
  
  
  
  
];
  