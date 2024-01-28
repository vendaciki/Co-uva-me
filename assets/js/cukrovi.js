
function vypisJidloARecept() { 
    // document.getElementById("recept").style.display = "none";    //  skryje obsah tabulky s receptem
    document.getElementById("reset").style.display = "none";       // skryje tlačítko - reset jídla
    // document.getElementById("ukaz-rcp").style.display = "inherit";    // aktivuje skryté tlačítko - ukaž recept
    document.getElementById("recept").style.display = "inherit";    // aktivuje skrytý obsah tabulky s receptem
    pocet_v_seznamu = cukrovi.length;
    if (cukrovi.length == 0) { 
        document.getElementById("nazev").innerHTML = "už tady nic dalšího není 😮";
        document.getElementById("obrazek").innerHTML = "<img src='../../0pics/prazdny-talir.webp'>";
        // document.getElementById("ukaz-rcp").style.display = "none";       // skryje tlačítko - ukaž recept
        document.getElementById("reset").style.display = "inherit";    // aktivuje skryté tlačítko - reset jídla
        document.getElementById("recept").style.display = "none";       // skryje obsah tabulky s receptem
        document.getElementById("generuj").style.display = "none";       // skryje obsah tabulky s receptem
    } 
    
    else {
    /* vybere random číslo podle počtu jídel v seznamu a vypíše je */
        vypis = Math.floor(Math.random() * pocet_v_seznamu);
        document.getElementById("nazev").innerHTML = cukrovi[vypis].nazev;
        document.getElementById("ingredience").innerHTML = cukrovi[vypis].ingredience;
        document.getElementById("postup").innerHTML = cukrovi[vypis].postup;
        document.getElementById("obrazek").innerHTML = cukrovi[vypis].obrazek;
    
        cukrovi = cukrovi.splice(vypis, 1);
    }
}

  /* NAČTENÍ JÍDEL DO SIDEBARU */
function nactiJidla() {
    // document.getElementById("sidenav").style.width = "250px";
    for (let i = 0; i < cukrovi.length; i++) {
        const x = document.createElement("li");
        x.setAttribute("id", i);
        var somePlace = document.getElementById("myMenu");
        somePlace.appendChild(x);
        const y = document.createElement("a");
        y.setAttribute("id", i);
        y.innerText = cukrovi[i].nazev;
        var somePlace2 = document.getElementById(i);
        somePlace2.appendChild(y);
    } 
}

  /* SIDENAV - NAČÍTÁNÍ JÍDEL Z LISTU */
document.onclick = function(e){
    var x = e.target.id
    var myValue = cukrovi[x]["nazev"]
    document.getElementById("nazev").innerHTML = myValue;
    var myValue = cukrovi[x]["ingredience"]
    document.getElementById("ingredience").innerHTML = myValue;
    var myValue = cukrovi[x]["postup"]
    document.getElementById("postup").innerHTML = myValue;
    var myValue = cukrovi[x]["obrazek"]
    document.getElementById("obrazek").innerHTML = myValue;
    document.getElementById("recept").style.display = "inherit";    // aktivuje skrytý obsah tabulky s receptem
}


const cukrovi = [

  
  
  
  
  
  
  
];