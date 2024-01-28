
function vypisJidloARecept() {
    // document.getElementById("recept").style.display = "none";    //  skryje obsah tabulky s receptem
    document.getElementById("reset").style.display = "none";       // skryje tlačítko - reset jídla
    // document.getElementById("ukaz-rcp").style.display = "inherit";    // aktivuje skryté tlačítko - ukaž recept
    document.getElementById("recept").style.display = "inherit";    // aktivuje skrytý obsah tabulky s receptem
    pocet_v_seznamu = zavarovani.length;
    if (zavarovani.length == 0) {
        document.getElementById("nazev").innerHTML = "už tady nic dalšího není 😮";
        document.getElementById("obrazek").innerHTML = "<img src='../../0pics/prazdny-talir.webp'>";
        // document.getElementById("ukaz-rcp").style.display = "none";       // skryje tlačítko - ukaž recept
        document.getElementById("reset").style.display = "inherit";    // aktivuje skryté tlačítko - reset jídla
        document.getElementById("recept").style.display = "none";       // skryje obsah tabulky s receptem
        document.getElementById("generuj").style.display = "none";       // skryje obsah tabulky s receptem
      
    } else {
    /* vybere random číslo podle počtu jídel v seznamu a vypíše je */
        vypis = Math.floor(Math.random() * pocet_v_seznamu);
        document.getElementById("nazev").innerHTML = zavarovani[vypis].nazev;
        document.getElementById("postup").innerHTML = zavarovani[vypis].postup;
        document.getElementById("ingredience").innerHTML = zavarovani[vypis].ingredience;
        document.getElementById("obrazek").innerHTML = zavarovani[vypis].obrazek;

        zavarovani = zavarovani.splice(vypis, 1);
    }
}

  /* NAČTENÍ JÍDEL DO SIDEBARU */
function nactiJidla() {
    // document.getElementById("sidenav").style.width = "250px";
    for (let i = 0; i < zavarovani.length; i++) {
        const x = document.createElement("li");
        x.setAttribute("id", i);
        var somePlace = document.getElementById("myMenu");
        somePlace.appendChild(x);
        const y = document.createElement("a");
        y.setAttribute("id", i);
        y.innerText = zavarovani[i].nazev;
        var somePlace2 = document.getElementById(i);
        somePlace2.appendChild(y);
    } 
}

  /* SIDENAV - NAČÍTÁNÍ JÍDEL Z LISTU */
document.onclick = function(e){
    var x = e.target.id
    var myValue = zavarovani[x]["nazev"]
    document.getElementById("nazev").innerHTML = myValue;
    var myValue = zavarovani[x]["ingredience"]
    document.getElementById("ingredience").innerHTML = myValue;
    var myValue = zavarovani[x]["postup"]
    document.getElementById("postup").innerHTML = myValue;
    var myValue = zavarovani[x]["obrazek"]
    document.getElementById("obrazek").innerHTML = myValue;
    document.getElementById("recept").style.display = "inherit";    // aktivuje skrytý obsah tabulky s receptem
}


const zavarovani = [
    {nazev: "Nakládané okurky", ingredience: "<b><u>Ingredience na 9kg:</u></b><br>- okurky (5-10 cm velké)<br>- 6 ks mrkve<br>- 6 ks cibule<br>- kopr<br>- 2-3 balení Lako (směs k nakládání okurek)<br>- ocet (podle počtu balení Lako a chuti)<br>- cukr (podle počtu balení Lako a chuti)", postup: "<b><u>Postup přípravy:</b></u><br>Budeme potřebovat zhruba 25 sklenic. Okurky a mrkev očistíme, zavařovací sklenice vyvaříme (v myčce). Cibuli nakrájíme na půl kolečka a mrkev na kolečka. Připravíme si nálev dle návodu na sáčku. Mazitím do sklenic rozdělíme kopr, mrkem (3 kolečka), cibuli (2 kolečka) a začneme do nich skládat okurky.  Když nějaké suroviny zbydou, můžeme je doskládat do prostoru ve sklenici. Nachystaný nálev naléváme do naplněných sklenic s okurkama, zavíčkujeme a dáme do předehřátého zavařovacího hrnce na 80 °C na 20 minut. Po zavaření ještě dotáhneme víčko a necháme chladnout. Sklenice během chladnutí budou pracovat a jak říkávám, že pšoukají a to je v pořádku.", obrazek: "<img src='../../zavarovani/Nakladane-okurky.webp'>" },
    {nazev: "Omáčka na špagety", ingredience: "<b><u>Ingredience:</u></b><br>- 3 kg zralých rajčat <br>- 1 kg zelené papriky<br>- 1 kg cibule<br>- paličku česneku<br>- kečup", postup: "<b><u>Postup přípravy:</b></u><br>Cibuly a papriku osmahneme na oleji a potom přidáme rajčata (rajčata pustí vodu) a musíme míchat, aby se to nepřipálilo. Nasekáme česnek a přidáme do hrnce. Až změkne paprika přidáme sůl a 1 celý kečup. Horkou omáčku plníme do sklenic a ještě 20 min vaříme v hrnci, po vyndání z hrnce dotáhneme víčko a sklenici obrátíme vzhůru dnem.", obrazek: "<img src='../../zavarovani/Omacka-na-spagety.webp'>" },
    {nazev: "Švestková povidla", ingredience: "<b><u>Ingredience:</u></b><br>- 1 kg zralých švestek<br>- 200 g cukru<br>- 1 lžíce rumu<br>- 1/2 lžičky mleté skořice<br>- 1 lžičku vanilkového extraktu<br>- 1 lžička perníkového koření<br>- šťáva z 1 citronu", postup: "<b><u>Postup přípravy:</b></u><br>troubu předehřejeme na 200 °C. vypeckované švestky dáme do hlubšího plechu s pečícím papírem. Pečeme samotné zhruba 20 minut. Poté je posypeme polovinou cukru a bez míchání pečeme dalších 30 minut. Zasypeme druhou polovinou cukru a opět pečeme 15 minut. Opatrně směs přelijeme do hrnce, přidáme všechno koření, rum, citron a promixujeme mixerem. Povidla nalijeme ještě horká do sklenic, zavíčkujeme a zavaříme asi 30 minut ve vodě při 80 °C.", obrazek: "<img src='../../zavarovani/Svestkova-povidla.webp'>" },
    {nazev: "Džem z pečené dýně", ingredience: "<b><u>Ingredience:</u></b><br>- 1 kg upečené dýně<br>- 2 g muškátového oříšku<br>- Želírovací cukr 2:1 Labeta<br>- šťáva z 1 citronu<br>- kůra z 1 citronu<br>- vhodné zavařovací skleničky s víčky", postup: "<b><u>Postup přípravy:</b></u><br>Dýni oloupeme, zbavíme jadérek a pokrájíme na menší kousky, pečeme v troubě na pečicím papíru do zlatova (v horkovzdušné troubě na 170 °C, v elektrické na 180 °C). Upečenou dýni rozmixujeme, přidáme najemno nastrouhanou citronovou kůru, citronovou šťávu, muškátový oříšek, Želírovací cukr 2:1 Labeta a vše důkladně promícháme. Směs za stálého míchaní přivedeme k varu, vaříme 3-5 minut. Hotovým džemem plníme čisté sklenice, zavíčkujeme, obrátíme dnem vzhůru a necháme při pokojové teplotě zchladnout.", obrazek: "<img src='../../zavarovani/Dzem-z-pecene-dyne.webp'>" },
    {nazev: "Kompot z dýně", ingredience: "<b><u>Ingredience:</u></b><br>- 2 ks citron<br>- 3 ks hřebíček<br>- 3 kg dýně<br>- 800 g cukr krystal<br>- 2 l studená voda<br>- 2 lžičky kyselina citronová<br>- 1 ks ananasový kompot", postup: "<b><u>Postup přípravy:</b></u><br>Dýni oloupeme, vydlabeme semennou část a dužinu nakrájíme na menší kostky. Vložíme je do 2 litrů studené vody s 3 hřebíčky a necháme několik hodin stát. Potom přidáme nakrájené citrony na hrubší plátky i s kůrou, ale bez semen. Přidáme cukr a kyselinu citronovou. Vaříme necelých 10 minut, než zesklovatí. Kompot odstavíme, vyndáme hřebíčky a citrony. Hřebíček není dobré dávat do sklenic, je moc aromatický. Ponecháme-li v kompotě citron, tak nám obsah sklenice časem zbledne. Ochutíme 1 lahvičkou ananasového aroma nebo 1 velkým ananasovým kompotem. Kompot z dýně naplníme do sklenic a sterilujeme 20 minut při 80 °C.", obrazek: "<img src='../../zavarovani/Kompot-z-dyne.webp'>" },












];