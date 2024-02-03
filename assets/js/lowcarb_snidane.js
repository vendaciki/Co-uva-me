
function vypisJidloARecept() {
    document.getElementById("hodnoty").style.display = "none";       // skryje obsah tabulky s receptem
    document.getElementById("reset").style.display = "none";       // skryje tlačítko - reset jídla
    document.getElementById("hodnoty").style.display = "inherit";    // aktivuje skrytý obsah tabulky s receptem
    pocet_v_seznamu = lowcarb_snidane.length;
    if (lowcarb_snidane.length == 0) {
        document.getElementById("nazev").innerHTML = "už tady nic dalšího není 😮";
        document.getElementById("obrazek").innerHTML = "<img src='../../0pics/prazdny-talir.webp'>";
        document.getElementById("reset").style.display = "inherit";    // aktivuje skryté tlačítko - reset jídla 
        document.getElementById("hodnoty").style.display = "none";       // skryje obsah tabulky s receptem
        document.getElementById("generuj").style.display = "none";       // skryje obsah tabulky s receptem
    } 

    else {
        // vybere random číslo podle počtu jídel v seznamu a vypíše je
        vypis = Math.floor(Math.random() * pocet_v_seznamu);
        document.getElementById("nazev").innerHTML = lowcarb_snidane[vypis].nazev;
        document.getElementById("postup").innerHTML = lowcarb_snidane[vypis].postup;
        document.getElementById("ingredience").innerHTML = lowcarb_snidane[vypis].ingredience;
        document.getElementById("obrazek").innerHTML = lowcarb_snidane[vypis].obrazek;
        document.getElementById("energie").innerHTML = lowcarb_snidane[vypis].energie;
        document.getElementById("sacharidy").innerHTML = lowcarb_snidane[vypis].sacharidy;
        document.getElementById("tuky").innerHTML = lowcarb_snidane[vypis].tuky;
        document.getElementById("bilkoviny").innerHTML = lowcarb_snidane[vypis].bilkoviny;

        lowcarb_snidane = lowcarb_snidane.splice(vypis, 1);
    }
}

  /* NAČTENÍ JÍDEL DO SIDEBARU */
function nactiJidla() {
    // document.getElementById("sidenav").style.width = "250px";
    for (let i = 0; i < lowcarb_snidane.length; i++) {
        const x = document.createElement("li");
        x.setAttribute("id", i);
        var somePlace = document.getElementById("myMenu");
        somePlace.appendChild(x);
        const y = document.createElement("a");
        y.setAttribute("id", i);
        y.innerText = lowcarb_snidane[i].nazev;
        var somePlace2 = document.getElementById(i);
        somePlace2.appendChild(y);
    } 
}

  /* SIDENAV - NAČÍTÁNÍ JÍDEL Z LISTU */
document.onclick = function(e){
    var x = e.target.id
    var myValue = lowcarb_snidane[x]["nazev"]
    document.getElementById("nazev").innerHTML = myValue;
    var myValue = lowcarb_snidane[x]["ingredience"]
    document.getElementById("ingredience").innerHTML = myValue;
    var myValue = lowcarb_snidane[x]["postup"]
    document.getElementById("postup").innerHTML = myValue;
    var myValue = lowcarb_snidane[x]["obrazek"]
    document.getElementById("obrazek").innerHTML = myValue;
    document.getElementById("hodnoty").style.display = "inherit";    // aktivuje skrytý obsah tabulky s receptem
}



const lowcarb_snidane = [
    {nazev: "Čokoládová granola", ingredience: "<b><u>Ingredience:</u></b><br>- 200 g směsi oblíbených ořechů<br>- 100 g slunečnicových semínek<br>- 10 g strouhaného kokosu<br>- 10 g hořkého kakaa<br>- 4 bílky<br>- 60 g vhodného sladidla<br>- 40 g hořké vysokoprocentní čokolády", postup: "<b><u>Postup přípravy:</b></u><br>Ořechy rozdrťte nahrubo několika pulsy v elektrickém sekáčku nebo v hmoždíři, případně použijte paličku na maso (ořechy zabalte do sáčku, ať vám nelítají po celé kuchyni). Rozdrcené ořechy smíchejte se slunečnicovými semínky, kokosem, kakaem, bílky a zvoleným sladidlem. Směs rozetřete na plech vyložený pečicím papírem a vložte do trouby vyhřáté na 160 °C. Za občasného prohrábnutí pečte cca 60 minut. Přesná doba se může výrazně lišit podle výkonu vaší trouby a také množství připravované granoly. Výsledkem by měla být křupavá směs, která při prohrábnutí šustí. Nastrouhejte najemno, případně rozdrťte na prášek v mlýnku na kávu, hořkou čokoládu. Posypte s ní ještě teplou granolu a promíchejte. Nechte vychladnout a zatuhnout čokoládu. Granolu přesypte do uzavíratelné nádoby a uložte do chladu, kde vám vydrží i několik týdnů. Podávejte jako doplněk k jogurtu, tvarohu nebo domácímu pribiňáčku. Granolou lze ozdobit i různé dezerty, poháry a kaše (například kešu „krupicovou“).", obrazek: "<img src='../../lowcarb/Cokoladova-granola.webp'>", energie:"275 kcal", sacharidy:"6", tuky:"24", bilkoviny:"9"},






];
