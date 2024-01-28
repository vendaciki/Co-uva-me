
function vypisJidloARecept() {
    // document.getElementById("recept").style.display = "none";    //  skryje obsah tabulky s receptem
    document.getElementById("reset").style.display = "none";       // skryje tlačítko - reset jídla
    // document.getElementById("ukaz-rcp").style.display = "inherit";    // aktivuje skryté tlačítko - ukaž recept
    document.getElementById("recept").style.display = "inherit";    // aktivuje skrytý obsah tabulky s receptem
    pocet_v_seznamu = napoje.length;
    if (napoje.length == 0) {
        document.getElementById("nazev").innerHTML = "už tady nic dalšího není 😮";
        document.getElementById("obrazek").innerHTML = "<img src='../../0pics/prazdny-talir.jpg'>";
        // document.getElementById("ukaz-rcp").style.display = "none";       // skryje tlačítko - ukaž recept
        document.getElementById("reset").style.display = "inherit";    // aktivuje skryté tlačítko - reset jídla
        document.getElementById("recept").style.display = "none";       // skryje obsah tabulky s receptem
        document.getElementById("generuj").style.display = "none";       // skryje obsah tabulky s receptem

    } else {
    // vybere random číslo podle počtu jídel v seznamu a vypíše je
        vypis = Math.floor(Math.random() * pocet_v_seznamu);
        document.getElementById("nazev").innerHTML = napoje[vypis].nazev;
        document.getElementById("postup").innerHTML = napoje[vypis].postup;
        document.getElementById("ingredience").innerHTML = napoje[vypis].ingredience;
        document.getElementById("obrazek").innerHTML = napoje[vypis].obrazek;

        napoje = napoje.splice(vypis, 1);}
}

  /* NAČTENÍ JÍDEL DO SIDEBARU */
function nactiJidla() {
    // document.getElementById("sidenav").style.width = "250px";
    for (let i = 0; i < napoje.length; i++) {
        const x = document.createElement("li");
        x.setAttribute("id", i);
        var somePlace = document.getElementById("myMenu");
        somePlace.appendChild(x);
        const y = document.createElement("a");
        y.setAttribute("id", i);
        y.innerText = napoje[i].nazev;
        var somePlace2 = document.getElementById(i);
        somePlace2.appendChild(y);
    } 
}

  /* SIDENAV - NAČÍTÁNÍ JÍDEL Z LISTU */
document.onclick = function(e){
    var x = e.target.id
    var myValue = napoje[x]["nazev"]
    document.getElementById("nazev").innerHTML = myValue;
    var myValue = napoje[x]["ingredience"]
    document.getElementById("ingredience").innerHTML = myValue;
    var myValue = napoje[x]["postup"]
    document.getElementById("postup").innerHTML = myValue;
    var myValue = napoje[x]["obrazek"]
    document.getElementById("obrazek").innerHTML = myValue;
    document.getElementById("recept").style.display = "inherit";    // aktivuje skrytý obsah tabulky s receptem
}

const napoje = [
    {nazev: "Bowle (párty drink)", ingredience: "<b><u>Ingredience:</u></b><br>- 0,5 l sangrie<br>- 1 l limča (fanta)<br>- kompotové ovoce (tvrdé)", postup: "<b><u>Postup přípravy:</b></u><br>Všechno smícháme.", obrazek: "<img src='../../napoje/Bowle.jpg'>" },
    {nazev: "Horký ovocný nápoj", ingredience: "<b><u>Ingredience:</u></b><br>- 500 g ovoce (rušky, jablka,... dle chutě)<br>nejlepší je už zavařenina, kde to má už své aroma<br>- 500 ml vody<br>- 1 balíček skořicového cukru, 20 g<br>- svitek celé skořice<br>- 4 hřebíčky", postup: "<b><u>Postup přípravy:</b></u><br>Nakrájené hrušky vložte do hrnce s nepřilnavým povrchem, zastříkněte vodou a rozmixujte ponorným mixérem na kaši.<br>Dolijte zbytek vody, přidejte skořicový cukr, svitek skořice, hřebíčky a směs zahřejte k bodu varu.<br>Vyndáme hřebíček a skořici a můžeme nalévat ještě horké.", obrazek: "<img src='../../napoje/Horky-Napoj.jpg'>" },
    {nazev: "Ledová káva se zmrzlinou", ingredience: "<b><u>Ingredience:</u></b><br>- rozpustné kafe<br>- cukr (pokud sladíš)<br>- mléko<br>- vanilková zmrzlina<br>- smetana na šlehání nebo ve spreji<br>- led", postup: "<b><u>Postup přípravy:</b></u><br>Nachystáme si vyšší hrnek nebo skleničku do které nasypeme rozpustné kafe, dle libosti a cukr jak to pijete,  zalijeme troškou horké vody a lžičkou pořádně zamýcháme až zvnikne pěna.<br>Dolijeme studenou vodou, přihodíme pár kostek ledu, zalijeme mlékem, přidáme zmrzlinu a šlehačku.<br>Můžeme zasypat trochou skořice a přidat brčko.", obrazek: "<img src='../../napoje/Ledova-Kava-Se-Zmrzlinou.jpg'>" },
    {nazev: "Malinová šťáva", ingredience: "<b><u>Ingredience:</u></b><br>- 1,5 kg malin<br>- 300 g cukru krupice<br>- 1 citron", postup: "<b><u>Postup přípravy:</b></u><br>Maliny pečlivě přeberte a propláchněte.<br>Dejte do porcelánové nebo keramické mísy, rozmačkejte a zalijte litrem studené vody.<br>Přidejte cukr, šťávu z jednoho citronu a promíchejte. Nechte 48 hodin zakryté louhovat.<br>Nalijte do čistých lahví a sterilujte – lahve postavte do velkého hrnce a zalijte do čtvrtiny vodou.<br>Zahřívejte 10 minut při teplotě 85 °C. Poté zašroubujte víčko a ne chte vychladnout.", obrazek: "<img src='../../napoje/Malinova-Stava.jpg'>" },
    {nazev: "Mattropicana", ingredience: "<b><u>Ingredience:</u></b><br>- 5 lístků máty<br>- 1 lžička třtinového cukru<br>- 5 tenkých plátků ananasu<br>- 100 ml Mattoni s příchutí citronu", postup: "<b><u>Postup přípravy:</b></u><br>Do sklenice dejte mátové lístky a cukr a promněte paličkou na koktejly.<br>Jeden dílek ananasu si nechte na ozdobení, všechny ostatní přidejte do sklenice spolu s kostkami ledu.<br>Zalijte Mattoni s příchutí citronu, ozdobte ananasem a podávejte.", obrazek: "<img src='../../napoje/Mattropicana.jpg'>" },
    {nazev: "Melounovo-kokosové osvěžení", ingredience: "<b><u>Ingredience:</u></b><br>- 500 g melounu<br>- 250 ml kokosové vody<br>- 1 lžíce citronové šťávy", postup: "<b><u>Postup přípravy:</b></u><br>Meloun nakrájejte na kostky a dejte na půl hodiny namrazit.<br>Potom rozmixujte s kokosovou vodou a citronovou šťávou.<br>Rozdělte do sklenic a přidejte led.", obrazek: "<img src='../../napoje/Melounovo-Kokosove-Osvezeni.jpg'>" },
    {nazev: "Mléčný Assam", ingredience: "<b><u>Ingredience:</u></b><br>- 2 polévkové lžíce černého čaje (Assam)<br>- 1/2 lžičky mletého nebo 2 semínka kardamonu<br>- 4 hřebíčky<br>- 1 skořice<br>- 1,5 cm krájeného zázvoru<br>- 1/2 lžičky anyzu (badyán) nebo 1 květ<br>- 1 hrnek mléka<br>- 1,5 hrnku vody<br>- 2 polévkové lžíce curku", postup: "<b><u>Postup přípravy:</b></u><br>Koření a čaj povaříme asi 6-8 minut ve vodě za stáléo míchání.<br>Na závěr přidám mléko s cukrem a vaříme 2 minuty.", obrazek: "<img src='../../napoje/Mlecny-Assam.jpg'>" },
    {nazev: "Ovocná limonáda", ingredience:  "<b><u>Ingredience na 2 litry:</u></b><br>- 2 litry jemné perlivé vody<br>- 1 misku drobného ovoce<br>- máta<br>- 1 lžička nastrouhané citrónové kůry<br>- 2 lžíce citrónové šťávy", postup: "<b><u>Postup přípravy:</b></u><br>Polovinu ovoce rozmačkejte. Druhou polovinu nechte v celku a dejte vše do vody. <br>Přidejte mátu, šťávu a vše promíchejte. Nechte vychladit a podávejte s ledem.", obrazek: "<img src='../../napoje/Ovocna-stava.jpg'>" },
    {nazev: "Piňa colada", ingredience: "<b><u>Ingredience:</u></b><br>- 40 ml rumu (bílý/kokosový)<br>- 20 ml kokosového sirupu nebo 3 kapky kokosového aroma<br>- 200 ml ananasového džusu (relax)<br>- 40 ml 31% smetany na šlehání", postup: "<b><u>Postup přípravy:</b></u><br>Vše smícháme a můžeme přidat i led.", obrazek: "<img src='../../napoje/Pina-Colada.jpg'>" },
    {nazev: "Turbomošt", ingredience: "<b><u>Ingredience:</u></b><br>- 0,2 l jablečného moštu<br>- 0,02 l 52% jablkovice<br>- skořice<br>- badyán<br>- hřebíček", postup: "<b><u>Postup přípravy:</b></u>Jablečný mošt s kočením svažíme a přidáme jablkovici.", obrazek: "<img src='../../napoje/Turbomost.jpg'>" },
    {nazev: "Vaječný likér MarWen", ingredience: "<b><u>Ingredience:</u></b><br>- 3 ks žloutků<br>- 1 vanilkový cukr<br>- 0,3 l hnědého rumu<br>- 1 plechovka salka", postup: "<b><u>Postup přípravy:</b></u><br>Žloutky ušleháme s van. cukrem do pěny, přidáme salko a opět cca 3 min šleháme.<br>Nakonec přilijeme rum a lehce prošleháme. Nalijeme do sklenice a chladíme.", obrazek: "<img src='../../napoje/Vajecny-Liker-MarWen.jpg'>" },







];