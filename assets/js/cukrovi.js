
function vypisJidloARecept() { 
    document.getElementById("reset").style.display = "none";       // skryje tlačítko - reset jídla
    document.getElementById("recept").style.display = "inherit";    // aktivuje skrytý obsah tabulky s receptem
    pocet_v_seznamu = cukrovi.length;
    if (cukrovi.length == 0) { 
        document.getElementById("nazev").innerHTML = "už tady nic dalšího není 😮";
        document.getElementById("obrazek").innerHTML = "<img src='../../0pics/prazdny-talir.webp' alt='prázdný talíř'>";
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
    {nazev: "Voňavé vánoční perníčky", ingredience: "<b><u>Ingredience:</u></b><br>- 1 kg medu <br>- 1 kg hladké mouky <br>- 4 ks žloutků <br>- 250 g moučkového cukr (může být třtinový) <br>- 1 lžička jedlé sody <br>- 10 ks hřebíčku <br>- 20 kuliček nového koření <br>- 1 lžička skořice <br>- 5–7 kytiček badyánu <br>- 1 špetka zázvoru <br>- 1 lžička fenyklu <br>- 1 lžička anýzu <br>- 1 špetka soli", postup: "<b><u>Postup přípravy:</b></u><br>Rozehřejeme med, a když je horký, zapracujeme ho s moukou. Tato směs bude za teplého stavu velmi řídká, tak můžeme nechat kuchyňský robot, aby udělal práci za vás. Těsto zabalíme do fólie a necháme odležet do vychladnutí nebo třeba i týden v lednici.<br> Po zchladnutí nebo až budeme chtít těsto dokončit, zapracujeme zbývající ingredience, zabalíme opět do fólie a odložíme do lednice. <br> Předehřejeme troubu na 160 °C a připravíme si plechy (vymažeme je nebo vyložíme pečicím papírem). Po kusech odebíráme těsto z lednice a na hodně pomoučeném vále vyválíme na 3–4 mm, (je v pořádku, že těsto je velmi lepivé, chce to jen trochu cviku a mouky). Vykrajujeme perníčky a potřené bílkem nebo celým vejcem s mlékem je pomalu pečeme dozlatova. Upečené sundáme z plechu a necháme vystydnout na mřížce.<br> Měkké jsou relativně rychle, odhaduji to na 14 dní, ale záleží na skladování. Pokud do krabice k perníčkům přidáme jedno jablko, mají z čeho natahovat vlhkost. Pokud je necháme v suchém prostředí vyložené třeba na talíři, je možné, že nezměknou nikdy.", obrazek: "<img src='../../cukrovi/Vanocni-pernicky.webp'>" },
    {nazev: "Linecké cukroví", ingredience: "<b><u>Ingredience:</u></b><br>- 210 g hladké mouky <br>- 70 g moučkového cukru <br>- 140 g másla <br>- 2 žloutky <br>- špetka mleté vanilky nebo vanilkové pasty <br>- špetka nastrouhané citronové kůry <br>- marmeláda na potření", postup: "<b><u>Postup přípravy:</b></u><br>Z uvedených surovin kromě zavařeniny vypracujeme hladké těsto, zabalíme ho do potravinové folie a uložíme odpočinout do chladničky, ideálně do druhého dne. Připravíme si plech nebo plechy a vyložíme je papírem na pečení. Troubu předehřejeme na 170 °C. Z těsta vyválíme plát a vykrajujeme hvězdičky. Polovině hvězdiček vypíchneme kulatým vykrajovátkem střed (pokud nemáme vykrajovátko i se středem) a přeneseme na plech vyložený pečicím papírem. Pečeme asi 7 až 8 minut, záleží, jak peče trouba, do světle zlaté barvy.<br> Tvary necháme vychladnout, poté slepujeme marmeládou a poprašíme moučkovým cukrem.", obrazek: "<img src='../../cukrovi/Linecke.webp'>" },
    {nazev: "Vanilkové rohlíčky", ingredience: "<b><u>Ingredience:</u></b><br>- 240 g hladké mouky <br>- 200 g másla <br>- 70 g moučkového cukru <br>- 100 g mletých ořechů (záleží na vaší chuti, ale já používám vlašské) <br>- špetka vanilky nebo vanilkové pasty do těsta <br>- moučkový cukr s vanilkou na obalení upečených rohlíčků", postup: "<b><u>Postup přípravy:</b></u><br>Z uvedených surovin kromě cukru na obalení vypracujeme hladké těsto, zabalíme ho do potravinové fólie a dáme odpočinout do chladničky, ideálně do druhého dne.<br> Troubu předehřejeme na 170 °C a připravíme si plechy vyložené papírem na pečení. Před samotným tvarováním rohlíčků necháme těsto chvilku povolit při pokojové teplotě, aby se s ním lépe pracovalo. Rozdělíme si ho na čtvrtiny a z každé vyválíme váleček asi 2 cm silný. Z něj odkrajujeme stejnoměrné kousky a tvarujeme rohlíčky. Pokládáme na plech, necháme mezi nimi místo, rohlíčky trochu vyskočí. Pečeme asi 7 minut do světlé, jen malounko nazlátlé barvy.<br> Po vyndání z trouby necháme rohlíčky trochu zchladnout a ještě vlahé je obalíme v moučkovém cukru s vanilkou (ideálně si ho připravíme z prosátého moučkového cukru, do kterého vložíme čerstvou vanilku, stačí i rozkrojená kůra bez semínek, které jsme použili jinak, a necháme asi 3 týdny aromatizovat). Po obalení necháme rohlíčky vychladnout a uložíme je do krabice.", obrazek: "<img src='../../cukrovi/Rohlicky.webp'>" },
    {nazev: "Myslivecké knoflíky", ingredience: "<b><u>Ingredience:</u></b><br><b>&nbsp; &nbsp;TĚSTO</b><br>- 250 g hladké mouky<br>- 80 g cukru moučka<br>- 140 g másla<br>- 3 ks žloutků<br><b>&nbsp; &nbsp;NÁPLŇ</b><br>- 3 ks bílku<br>- 200 g lískových oříšků<br>- 200 g cukru moučka<br><b>&nbsp; &nbsp;NA OZDOBU</b><br>- 2 hrsti lískových oříšků", postup: "<b><u>Postup přípravy:</b></u><br>Ze surovin na těsto vypracujeme hladkou hmotu a necháme ji asi 2 hodiny odpočinout v lednici. Vál posypeme hladkou moukou a vyválíme na něm asi 2 mm silné těsto. Z něj vykrajujeme kolečka (nebo osmiúhelníky, podle nálady a také toho, jaké vykrajovátko máte doma) a ta potom pokládáme na plech na pečicí papír.<br> Pak vyšleháme v míse sníh z bílků, přidáme mleté ořechy a cukr, důkladně hmotu promícháme a navlhčenými prsty ji vršíme na připravená kolečka – právě proto je dobré si vedle plechu dát hrneček s vodou, do kterého můžeme průběžně prsty namáčet. Navrch lehce zamáčkneme celý lískový oříšek, vložíme do trouby vyhřáté na 175 °C a pečeme asi 7–10 minut dozlatova.", obrazek: "<img src='../../cukrovi/Knoflicky.webp'>" },
    {nazev: "Pařížské rohlíčky", ingredience: "<b><u>Ingredience:</u></b><br><b>&nbsp; &nbsp;Na rohlíčky:</b><br>- 200 g mouka z vlašských ořechů <br>- 200 g moučkový cukr<br>- 35 g hladká mouka<br>- 2 ks vejce<br><b>&nbsp; &nbsp;Na krém:</b><br>- 150 g máslo<br>- 30 g kakao<br>- 100 g cukr krupice<br>- 1 ks vejce<br>- 1 ks žloutek<br>- 100 g čokoláda na vaření (aspoň 52 % kakaa)<br>- 35 g voda<br><b>&nbsp; &nbsp;Na polevu:</b><br>- 100 g čokoláda na vaření (aspoň 52 % kakaa)<br>- 50 g máslo", postup: "<b><u>Postup přípravy:</b></u><br>Troubu rozpálíme na 160 °C a 2 plechy vyložíme pečicím papírem, nachystáme si zdobicí sáček s hladkou zdobicí špičkou. Připravíme si těsto na rohlíčky. Ve větší míse smícháme prosátý cukr moučku s moukou z vlašských ořechů a hladkou moukou. Přidáme 2 vajíčka a vše vymícháme pomocí cukrářské špachtle/stěrky do těsta, kterým naplníme zdobicí sáček nebo formičku a na plech vkládáme malé rohlíčky – myslete na to, že při pečení se lehce „roztečou“, tak ať nemáte obr rohlíky. Pečeme v rozehřáté troubě 18–20 minut. Správně upečené rohlíčky půjdou lehce sloupnout z pečicího papíru. Necháme je zcela vychladnout.<br> Připravíme si pařížský krém. Vyšleháme vejce se žloutkem na zhruba 2 minuty. Do menšího rendlíku nasypeme cukr a zalijeme ho vodou. Dáme na plotnu a za občasného míchání necháme vařit, dokud nezačne směs bublat, poté ji stáhneme z plotny a přilijeme ji ke šlehajícím se vejcím.<br> Směs necháme dál šlehat alespoň 5 minut. Po vyšlehání přidáme máslo pokojové teploty, kakao a rozpuštěnou čokoládu. Vše vyšleháme v hladký krém, který dáme do cukrářského sáčku s ozdobnou špičkou.<br> Krémem zdobíme upečené rohlíčky a poté dáme alespoň na hodinu do lednice. Připravíme si polevu na rohlíčky.<br> Do rendlíku dáme máslo s čokoládou a na mírném plameni vše dohladka rozpustíme. Poté rohlíčky máčíme v čokoládové polevě a dáme je zpět ztuhnout do lednice. Rohlíčky připravujeme cca 5–7 dní před Vánoci a skladujeme je v chladu.", obrazek: "<img src='../../cukrovi/Parizske.webp'>" },
  
  
  
  
  
  
  
];