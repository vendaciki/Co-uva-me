const napoje = [
    {nazev: "Bowle (párty drink)", ingredience: "<b><u>Ingredience:</u></b><br><br>- 0,5 l sangrie<br>- 1 l limča (fanta)<br>- kompotové ovoce (tvrdé)", postup: "<b><u>Postup přípravy:</b></u><br><br>Všechno smícháme.", obrazek: "<img src='../../img/napoje/Bowle.webp'>" },
    {nazev: "Horký ovocný nápoj", ingredience: "<b><u>Ingredience:</u></b><br><br>- 500 g ovoce (rušky, jablka,... dle chutě)<br>nejlepší je už zavařenina, kde to má už své aroma<br>- 500 ml vody<br>- 1 balíček skořicového cukru, 20 g<br>- svitek celé skořice<br>- 4 hřebíčky", postup: "<b><u>Postup přípravy:</b></u><br><br>Nakrájené hrušky vložte do hrnce s nepřilnavým povrchem, zastříkněte vodou a rozmixujte ponorným mixérem na kaši.<br>Dolijte zbytek vody, přidejte skořicový cukr, svitek skořice, hřebíčky a směs zahřejte k bodu varu.<br>Vyndáme hřebíček a skořici a můžeme nalévat ještě horké.", obrazek: "<img src='../../img/napoje/Horky-Napoj.webp'>" },
    {nazev: "Ledová káva se zmrzlinou", ingredience: "<b><u>Ingredience:</u></b><br><br>- rozpustné kafe<br>- cukr (pokud sladíš)<br>- mléko<br>- vanilková zmrzlina<br>- smetana na šlehání nebo ve spreji<br>- led", postup: "<b><u>Postup přípravy:</b></u><br><br>Nachystáme si vyšší hrnek nebo skleničku do které nasypeme rozpustné kafe, dle libosti a cukr jak to pijete,  zalijeme troškou horké vody a lžičkou pořádně zamýcháme až zvnikne pěna.<br>Dolijeme studenou vodou, přihodíme pár kostek ledu, zalijeme mlékem, přidáme zmrzlinu a šlehačku.<br>Můžeme zasypat trochou skořice a přidat brčko.", obrazek: "<img src='../../img/napoje/Ledova-Kava-Se-Zmrzlinou.webp'>" },
    {nazev: "Malinová šťáva", ingredience: "<b><u>Ingredience:</u></b><br><br>- 1,5 kg malin<br>- 300 g cukru krupice<br>- 1 citron", postup: "<b><u>Postup přípravy:</b></u><br><br>Maliny pečlivě přeberte a propláchněte.<br>Dejte do porcelánové nebo keramické mísy, rozmačkejte a zalijte litrem studené vody.<br>Přidejte cukr, šťávu z jednoho citronu a promíchejte. Nechte 48 hodin zakryté louhovat.<br>Nalijte do čistých lahví a sterilujte – lahve postavte do velkého hrnce a zalijte do čtvrtiny vodou.<br>Zahřívejte 10 minut při teplotě 85 °C. Poté zašroubujte víčko a ne chte vychladnout.", obrazek: "<img src='../../img/napoje/Malinova-Stava.webp'>" },
    {nazev: "Mattropicana", ingredience: "<b><u>Ingredience:</u></b><br><br>- 5 lístků máty<br>- 1 lžička třtinového cukru<br>- 5 tenkých plátků ananasu<br>- 100 ml Mattoni s příchutí citronu", postup: "<b><u>Postup přípravy:</b></u><br><br>Do sklenice dejte mátové lístky a cukr a promněte paličkou na koktejly.<br>Jeden dílek ananasu si nechte na ozdobení, všechny ostatní přidejte do sklenice spolu s kostkami ledu.<br>Zalijte Mattoni s příchutí citronu, ozdobte ananasem a podávejte.", obrazek: "<img src='../../img/napoje/Mattropicana.webp'>" },
    {nazev: "Melounovo-kokosové osvěžení", ingredience: "<b><u>Ingredience:</u></b><br><br>- 500 g melounu<br>- 250 ml kokosové vody<br>- 1 lžíce citronové šťávy", postup: "<b><u>Postup přípravy:</b></u><br><br>Meloun nakrájejte na kostky a dejte na půl hodiny namrazit.<br>Potom rozmixujte s kokosovou vodou a citronovou šťávou.<br>Rozdělte do sklenic a přidejte led.", obrazek: "<img src='../../img/napoje/Melounovo-Kokosove-Osvezeni.webp'>" },
    {nazev: "Mléčný Assam", ingredience: "<b><u>Ingredience:</u></b><br><br>- 2 polévkové lžíce černého čaje (Assam)<br>- 1/2 lžičky mletého nebo 2 semínka kardamonu<br>- 4 hřebíčky<br>- 1 skořice<br>- 1,5 cm krájeného zázvoru<br>- 1/2 lžičky anyzu (badyán) nebo 1 květ<br>- 1 hrnek mléka<br>- 1,5 hrnku vody<br>- 2 polévkové lžíce curku", postup: "<b><u>Postup přípravy:</b></u><br><br>Koření a čaj povaříme asi 6-8 minut ve vodě za stáléo míchání.<br>Na závěr přidám mléko s cukrem a vaříme 2 minuty.", obrazek: "<img src='../../img/napoje/Mlecny-Assam.webp'>" },
    {nazev: "Ovocná limonáda", ingredience:  "<b><u>Ingredience na 2 litry:</u></b><br>- 2 litry jemné perlivé vody<br>- 1 misku drobného ovoce<br>- máta<br>- 1 lžička nastrouhané citrónové kůry<br>- 2 lžíce citrónové šťávy", postup: "<b><u>Postup přípravy:</b></u><br><br>Polovinu ovoce rozmačkejte. Druhou polovinu nechte v celku a dejte vše do vody. <br>Přidejte mátu, šťávu a vše promíchejte. Nechte vychladit a podávejte s ledem.", obrazek: "<img src='../../img/napoje/Ovocna-stava.webp'>" },
    {nazev: "Piňa colada", ingredience: "<b><u>Ingredience:</u></b><br><br>- 40 ml rumu (bílý/kokosový)<br>- 20 ml kokosového sirupu nebo 3 kapky kokosového aroma<br>- 200 ml ananasového džusu (relax)<br>- 40 ml 31% smetany na šlehání", postup: "<b><u>Postup přípravy:</b></u><br><br>Vše smícháme a můžeme přidat i led.", obrazek: "<img src='../../img/napoje/Pina-Colada.webp'>" },
    {nazev: "Turbomošt", ingredience: "<b><u>Ingredience:</u></b><br><br>- 0,2 l jablečného moštu<br>- 0,02 l 52% jablkovice<br>- skořice<br>- badyán<br>- hřebíček", postup: "<b><u>Postup přípravy:</b></u>Jablečný mošt s kočením svažíme a přidáme jablkovici.", obrazek: "<img src='../../img/napoje/Turbomost.webp'>" },
    {nazev: "Vaječný likér MarWen", ingredience: "<b><u>Ingredience:</u></b><br><br>- 3 ks žloutků<br>- 1 vanilkový cukr<br>- 0,3 l hnědého rumu<br>- 1 plechovka salka", postup: "<b><u>Postup přípravy:</b></u><br><br>Žloutky ušleháme s van. cukrem do pěny, přidáme salko a opět cca 3 min šleháme.<br>Nakonec přilijeme rum a lehce prošleháme. Nalijeme do sklenice a chladíme.", obrazek: "<img src='../../img/napoje/Vajecny-Liker-MarWen.webp'>" },

];



// Kopie pole jídla pro random výběr, kterou budeme upravovat
let kopieNapoje = [...napoje];

// Funkce pro náhodný výběr jídla
function vypisJidloARecept() {
    document.getElementById("reset").style.display = "none";       // skryje tlačítko - reset jídla
    document.getElementById("recept").style.display = "inherit";    // aktivuje skrytý obsah tabulky s receptem

    if (kopieNapoje.length === 0) { // Když už není co vybírat
        document.getElementById("nazev").innerHTML = "už tady nic dalšího není 😮";
        document.getElementById("obrazek").innerHTML = "<img src='../../img/0pics/prazdny-talir.webp'>";
        document.getElementById("reset").style.display = "inherit";    // aktivuje skryté tlačítko - reset jídla
        document.getElementById("generuj").style.display = "none";     // skryje obsah tabulky s receptem
    } else {
        // Vybere náhodné jídlo z kopie seznamu
        let vypis = Math.floor(Math.random() * kopieNapoje.length);
        document.getElementById("nazev").innerHTML = kopieNapoje[vypis].nazev;
        document.getElementById("postup").innerHTML = kopieNapoje[vypis].postup;
        document.getElementById("ingredience").innerHTML = kopieNapoje[vypis].ingredience;
        document.getElementById("obrazek").innerHTML = kopieNapoje[vypis].obrazek;

        kopieNapoje.splice(vypis, 1); // Odstraní vybrané jídlo z kopie pole
    }
}

// Funkce pro načtení jídel do bočního panelu
function nactiJidla() {
    const somePlace = document.getElementById("myMenu");
    somePlace.innerHTML = ""; // Vyčistí seznam před novým naplněním

    napoje.sort((a, b) => a.nazev.localeCompare(b.nazev)); // Seřadíme jídla podle názvu

    for (let i = 0; i < napoje.length; i++) {
        const x = document.createElement("li");
        x.setAttribute("data-index", i);  // Použijeme data atribut pro odkazování na index v poli
        x.innerHTML = `<a href="#">${napoje[i].nazev}</a>`;  // Naplní název jídla
        somePlace.appendChild(x);
    }
}

// Event listener pro kliknutí na položku v bočním panelu
document.getElementById("myMenu").addEventListener("click", function (e) {
    if (e.target && e.target.tagName === "A") { // Zkontroluje, zda byl kliknutý prvek odkaz
        e.preventDefault();
        const index = e.target.parentElement.getAttribute("data-index");  // Získáme index z data atributu
        const selectedJidlo = napoje[index];  // Použijeme původní pole `napoje`

        document.getElementById("nazev").innerHTML = selectedJidlo.nazev;
        document.getElementById("ingredience").innerHTML = selectedJidlo.ingredience;
        document.getElementById("postup").innerHTML = selectedJidlo.postup;
        document.getElementById("obrazek").innerHTML = selectedJidlo.obrazek;
        document.getElementById("recept").style.display = "inherit";  // Zobrazí obsah tabulky s receptem
    }
});

// Funkce pro resetování kopie pole pro random výběr (pokud je potřeba)
function resetJidla() {
    kopieNapoje = [...napoje]; // Resetuje kopii pole na původní obsah
    document.getElementById("generuj").style.display = "inherit"; // Znovu zobrazí tlačítko generování
    document.getElementById("reset").style.display = "none"; // Skryje tlačítko reset
}

// Inicializace bočního panelu po načtení stránky
window.onload = function() {
    nactiJidla();
};