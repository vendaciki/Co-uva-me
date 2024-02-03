
function vypisJidloARecept() {
    document.getElementById("reset").style.display = "none";       // skryje tlačítko - reset jídla
    document.getElementById("recept").style.display = "inherit";    // aktivuje skrytý obsah tabulky s receptem
    pocet_v_seznamu = nemaso.length;
    if (nemaso.length == 0) {
        document.getElementById("nazev").innerHTML = "už tady nic dalšího není 😮";
        document.getElementById("obrazek").innerHTML = "<img src='../../0pics/prazdny-talir.webp'>";
        document.getElementById("reset").style.display = "inherit";    // aktivuje skryté tlačítko - reset jídla
        document.getElementById("recept").style.display = "none";       // skryje obsah tabulky s receptem
        document.getElementById("generuj").style.display = "none";       // skryje obsah tabulky s receptem

    } else {
    /* vybere random číslo podle počtu jídel v seznamu a vypíše je */
        vypis = Math.floor(Math.random() * pocet_v_seznamu);
        document.getElementById("nazev").innerHTML = nemaso[vypis].nazev;
        document.getElementById("postup").innerHTML = nemaso[vypis].postup;
        document.getElementById("ingredience").innerHTML = nemaso[vypis].ingredience;
        document.getElementById("obrazek").innerHTML = nemaso[vypis].obrazek;
        
        nemaso = nemaso.splice(vypis, 1);}
} 

  /* NAČTENÍ JÍDEL DO SIDEBARU */
  function nactiJidla() {
    // document.getElementById("sidenav").style.width = "250px";
    for (let i = 0; i < nemaso.length; i++) {
        const x = document.createElement("li");
        x.setAttribute("id", i);
        var somePlace = document.getElementById("myMenu");
        somePlace.appendChild(x);
        const y = document.createElement("a");
        y.setAttribute("id", i);
        y.innerText = nemaso[i].nazev;
        var somePlace2 = document.getElementById(i);
        somePlace2.appendChild(y);
    } 
}

  /* SIDENAV - NAČÍTÁNÍ JÍDEL Z LISTU */
document.onclick = function(e){
    var x = e.target.id
    var myValue = nemaso[x]["nazev"]
    document.getElementById("nazev").innerHTML = myValue;
    var myValue = nemaso[x]["ingredience"]
    document.getElementById("ingredience").innerHTML = myValue;
    var myValue = nemaso[x]["postup"]
    document.getElementById("postup").innerHTML = myValue;
    var myValue = nemaso[x]["obrazek"]
    document.getElementById("obrazek").innerHTML = myValue;
    document.getElementById("recept").style.display = "inherit";    // aktivuje skrytý obsah tabulky s receptem
}

const nemaso = [
    {nazev: "Cuketové placky", ingredience: "<b><u>Ingredience:</u></b><br><br>- 2 stroužky česneku<br>- 400 g cukety<br>- 2 vejce<br>- 120 g hladké mouky<br>- pepř<br>- sůl", postup: "<b><u>Postup přípravy:</b></u><br><br>Cuketu nastrouháme nahrubo, osolíme a necháme opotit. Cuketa pustí vodu, kterou slijeme.<br>Přidáme vejce a mouku. Směs ochutíme česnekem, kmínem, solí a pepřem.<br>Vše řádně promícháme, až vznikne hladké těsto asi jako na bramboráky.<br>Smažíme na oleji na rozpálené pánvi dozlatova.<br>Cuketové placičky by se měly rozplývat na jazyku a měly by být daleko jemnější než bramboráky.", obrazek: "<img src='../../nemaso/Cuketove-Placky.webp'>" },
    {nazev: "Čočka na kyselo s vajíčkem", ingredience: "<b><u>Ingredience:</u></b><br><br>- 500 g čočky<br>- 3 lžíce hladké mouky<br>- 1 cibule<br>- vejce<br>- olej<br>- sůl<br>- pepř<br>- ocet", postup: "<b><u>Postup přípravy:</b></u><br><br>Čočku naložíme přes noc v hrnci s vodou a ráno několikrát prolijeme čistou vodou.<br>Dáme čočku vařit. Po dovaření v případě potřeby slijeme přebytečnou vodu.<br>Nakrájíme cibuli a osmažíme ji na tuku do zlatova.<br>Vše zaprášíme moukou a zalijeme trochou vody scezené z čočky.<br>Do směsi přidáme též podle chuti ocet (1-2 lžíce), sůl a pepř.<br>Vše povaříme a poté vmícháme do uvařené čočky.<br>Můžeme podávat i s párkem.", obrazek: "<img src='../../nemaso/Cocka-Na-Kyselo-SVajickem.webp'>" },
    {nazev: "Dýňové rizoto", ingredience: "<b><u>Ingredience:</u></b><br><br>- 700 g dýně hokaido nakrájené na kostky<br>- 300 g kulatozrné rýže<br>- 1 l zeleninového vývaru<br>- 4 lžíce oleje<br>- 5 lžic másla<br>- 1 cibule<br>- 2 stroužky česneku<br>- 50 g nastrouhaného parmezánu + na posypání<br>- sůl", postup: "<b><u>Postup přípravy:</b></u><br><br>Na oleji necháme zesklovatět cibuli, přidáme dýni a asi 5 minut za stálého míchání ji osmažíme.<br>Přisypeme rýži, česnek a ještě další 4 minuty smažíme.<br>Zalijeme vývarem nebo osolenou horkou vodou  tak, aby to vše bylo ponořeno a za občasného promíchání dusíme do změknutí rýže.<br>Potom vmícháme máslo, trochu parmazánu, osolíme, odstavíme a necháme zakryté ležet, aby se všechny ingredience propojily.<br>Hotové rizoto posypeme sýrem.", obrazek: "<img src='../../nemaso/Dynove-Rizoto.webp'>" },
    {nazev: "Fazolky se smetanou na kyselo", ingredience: "<b><u>Ingredience:</u></b><br><br>- fazolové lusky z konzervy<br>- smetana na vaření<br>- ocet<br>- máslo/olej<br>- hladká mouka", postup: "<b><u>Postup přípravy:</b></u><br><br>Připravíme si jíšku z hladké mouky a másla či oleje. Do hotové jíšky vlijeme fazolové lusky včetně vody z konzervy.<br>Chvilku povaříme, vlijeme celou smetanu a opět povaříme<br>Na závěr dochutíme octem (1-2 lžíce) a solí.<br>Podáváme s vařeným bramborem a vejci.", obrazek: "<img src='../../nemaso/Fazolky-Se-Smetanou-Na-Kyselo.webp'>" },
    {nazev: "Kapustové placky", ingredience: "<b><u>Ingredience:</u></b><br><br>- kapusta<br>- 2 vejce<br>- 2-3 lžíce hladké mouky<br>- 5-10 lžíc mléka<br>- 3 stroužky prolisovaného česneku<br>- sůl<br>- pepř<br>- olej na smažení", postup: "<b><u>Postup přípravy:</b></u><br><br>Očištěnou kapustu krátce spařte ve vařící vodě.<br>Po vychladnutí nakrájíme na nudličky a dáme do mísy.<br>Přidáme vejce, mouku a mléko, aby vzniklo ne příliš řídké těsto.<br>Podle chuti sůl, pepř, prolisovaný česnek.", obrazek: "<img src='../../nemaso/Kapustove-Placky.webp'>" },
    {nazev: "Koprová omáčka", ingredience: "<b><u>Ingredience:</u></b><br><br>- čerstvý kopr<br>- smetana na vaření<br>- máslo na smažení<br>- ocet<br>- hladká mouka<br>- sůl", postup: "<b><u>Postup přípravy:</b></u><br><br>V hrnci rozpustíme máslo a zaprášíme moukou.<br>Vzniklou jíšku pořádně promícháme.<br>Podlijeme vodou a vaříme asi 20 min.<br>Do provařeného základu vlijeme smetanu a chvíli povaříme.<br>Na závěr přidáme nakrájený kopr zbavený stonků, dochutíme octem a solí.<br>Podáváme s uvařenými vejci a bramborem.", obrazek: "<img src='../../nemaso/Koprova-Omacka.webp'>" },
    {nazev: "Květákové placky", ingredience: "<b><u>Ingredience:</u></b><br><br>- 1 květák<br>- 2 vejce (je možné přidat žloutky a z bílků ušlehat sníh)<br>- hrst strouhanky<br>- sůl<br>- pepř<br>- majoránka<br>- česnek podle libosti<br>- olej nebo sádlo na smažení<br>- tatarská omáčka s pažitkou k podávání", postup: "<b><u>Postup přípravy:</b></u><br><br>Květák uvaříme v mírně osolené vodě do změknutí, cca 10 min.<br>Necháme důkladně okapat a rozmačkáme šťouchadlem na brambory.<br>Přidáme vejce, sůl, pepř, majoránku, česnek a strouhanku tak, aby směs byla kompaktní a daly se z ní tvarovat maličké placičky.<br>Placičky osmažíme na oleji.", obrazek: "<img src='../../nemaso/Kvetakove-Placky.webp'>" },
    {nazev: "Nádivka s houbami", ingredience: "<b><u>Ingredience:</u></b><br><br>- 3 starší housky <br>- 300 g lesních hub <br>- 2 vejce <br>- 2 plátky másla <br>- sůl <br>- pepř <br>- mléko podle potřeby <br>- jarní cibulka <br>- bílá i zelená část petrželová nať pažitka<br>- 100 g anglické slaniny <br>- tuk na vymazání formy <br>- strouhanka na vysypání formy", postup: "<b><u>Postup přípravy:</b></u><br><br>Housky nakrájíme na kostičky, dáme do mísy, zalijeme mlékem a necháme mléko vsáknout do housek.<br>Bílou část cibulky nakrájíme na kostičky a na másle necháme zpěnit.<br>Přidáme nakrájené houby a restujeme až se nám odpaří voda.<br>K houskám přidáme žloutky, nakrájenou slaninu, houbovou směs, osolíme, opepříme a opatrně promícháme.<br>Z bílků ušleháme sníh.<br>Zelenou část cibulky, petrželovou nať, pažitku nasekáme, přidáme do mísy a promícháme.<br>Nakonec dáme sníh z bílků a ještě opatrně promícháme.<br>Formu vymažeme a vysypeme, nádivku rozprostřeme do formy a pečeme ve vyhřáté troubě na 180°C asi 40 min.", obrazek: "<img src='../../nemaso/Nadivka-SHoubami.webp'>" },
    {nazev: "Ovocné knedlíky", ingredience: "<b><u>Ingredience:</u></b><br><br>- 3 hrnky polohrubé mouky<br>- 1 lžička cukru<br>- špetka soli<br>- 1 hrnek mléka<br>- 1 vejce<br>- půlka droždí", postup: "<b><u>Postup přípravy:</b></u><br><br>Ve vlažném mléce připravíme kvásek, a to tak, že v něm rozpustíme cukr a rozdrobíme droždí.<br>Kvásek vlijeme do mísy s moukou, špetkou solí, vejcem a vypracujeme v těsto.<br>Necháme asi 30 min kynout.<br>Z vykynutého těsta tvoříme knedlíky, které plníme ovocem.<br>Připravené knedlíky vaříme ve vroucí vodě pod pokličkou 5 min.<br>Po vytažení je propíchneme špejlí.", obrazek: "<img src='../../nemaso/Ovocne-Knedliky.webp'>" },
    {nazev: "Rajčata na víně s mozzarellou", ingredience: "<b><u>Ingredience:</u></b><br><br>- 1 bageta<br>- olivový olej<br>- 2 stroužky česneku<br>- 3 velká rajčata<br>- 60 ml suchého bílého vína<br>- 250 g mozzarelly<br>- čerstvá bazalka", postup: "<b><u>Postup přípravy:</b></u><br><br>Bagetu nakrájíme na plátky, pokapeme olivovým olejem a dozlatova opečeme na grilu.<br>Na pánvi rozehřejeme olej a krátce orestujeme nasekaný česnek a rajčata nakrájená na kostky.<br>Podlijeme bílým vínem a necháme 10 min povařit, až se tekutina zredukuje na polovinu.<br>Do dvou hlubokých talířů dáme nakrájenou mozzarellu, zalijeme rajčaty a posypeme čerstvou bazalkou.<br>Teplem se mozzarella rozpustí, a tak ji můžete rovnou nabírat plátky opečené bagety.", obrazek: "<img src='../../nemaso/Rajcata-Na-Vine-SMozzarellou.webp'>" },
    {nazev: "Rýžový nákyp", ingredience: "<b><u>Ingredience:</u></b><br><br>- 200 g oprané rýže <br>- 3/4 l mléka <br>- 50 g cukru <br>- 100 g másla <br>- 3 vejce <br>- 400 g odkapaného kompotovaného ovoce <br>- sůl <br>- hrst hrozinek", postup: "<b><u>Postup přípravy:</b></u><br><br>Rýži uvaříme v mléce, kterou jsme osolili a osladili.<br>Do uvařené rýže, kterou vyklopíme na mísu, vmícháme za tepla 100 g másla a po vychladnutí přidáme 3 žloutky a sníh ze 3 bílků.<br>Polovinu hmoty vložíme do vymaštěného pekáče, na to položíme vrstvu odkapaného kompotovaného ovoce, pro vylepšení přidáme hrst hrozinek a přikryjeme zbytkem rýže.<br>Pečeme slabou hodinu.", obrazek: "<img src='../../nemaso/Ryzovy-Nakyp.webp'>" },
    {nazev: "Salát s grilovaným pološtiepkom a brusinkovou zálivkou", ingredience: "<b><u>Ingredience:</u></b><br><br>- 4 kusy pološtiepku na gril<br>- 100 ml olivového oleje<br>- 2 lžíce nakládaných brusinek<br>- 3 lžíce balzamika<br>- 1 lžička dijonské hořčice<br>- sůl<br>- pepř<br>- 100 g Mix – baby špenát, listy červené řepy<br>- hrst rukoly<br>- 4 rajčata", postup: "<b><u>Postup přípravy:</b></u><br><br>Pološtiepok potřeme malým množstvím oleje a opečeme na pánvi nebo na rozpáleném grilu.<br>Brusinky, balzamiko, olivový olej, hořčici, sůl a pepř vyšleháme na dresink.<br>Na talíř ke každému oštiepku dáme porci listového salátu a rajčat a pokapeme brusinkovým dresinkem.", obrazek: "<img src='../../nemaso/Salat-SGrilovanym-Polostiepkom-ABrusinkovou-Zalivkou.webp'>" },
    {nazev: "Smažená brokolice s bramborem", ingredience: "<b><u>Ingredience:</u></b><br><br>- brokolice <br>- 2 vejce <br>- trochu mléka <br>- hladká mouka <br>- strouhanka <br>- olej na smažení", postup: "<b><u>Postup přípravy:</b></u><br><br>Brokolici rozdělíme na růžičky, když budou menší, budou se lépe obalovat.<br>Brokolici na chvíli dáme povařit v osolené vodě a poté necháme okapat a vychladnout.<br>Obalíme v trojobalu a dáme smažit.", obrazek: "<img src='../../nemaso/Smazena-Brokolice-SBramborem.webp'>" },
    {nazev: "Smažený květák s bramborem", ingredience: "<b><u>Ingredience:</u></b><br><br>- květák <br>- 2 vejce <br>- trochu mléka <br>- hladká mouka <br>- strouhanka <br>- olej na smažení", postup: "<b><u>Postup přípravy:</b></u><br><br>Květák rozdělíme na růžičky, když budou menší, budou se lépe obalovat.<br>Květák na chvíli dáme povařit v osolené vodě a poté necháme okapat a vychladnout.<br>Obalíme v trojobalu a dáme smažit.", obrazek: "<img src='../../nemaso/Smazeny-Kvetak-SBramborem.webp'>" },
    {nazev: "Smažený sýr", ingredience: "<b><u>Ingredience:</u></b><br><br>- sýr (eidam, niva, hermelín - dle chuti)<br>- 2 vejce <br>- trochu mléka <br>- hladká mouka <br>- strouhanka <br>- olej na smažení", postup: "<b><u>Postup přípravy:</b></u><br><br>Sýr nakrájíme na plátky či jiné tvary, obalíme v trojobalu a dáme smažit.", obrazek: "<img src='../../nemaso/Smazeny-Syr.webp'>" },
    {nazev: "Špagety s rajčatovou omáčkou", ingredience: "<b><u>Ingredience:</u></b><br><br>- 1 cibule<br>- 4 stroužky česneku<br>- olivový olej<br>- 500 g českých oválných rajčat<br>- sůl<br>- čerstvě mletý pepř<br>- 400 g špaget<br>- hrst čerstvé bazalky", postup: "<b><u>Postup přípravy:</b></u><br><br>Nakrájenou cibuli a česnek opečeme na olivovém oleji.<br>Přidáme nakrájená rajčata se semínky i šťávou, kterou pustí, a necháme zhruba pět minut rozvařit.<br>Pak dochutíme solí a čerstvě mletým pepřem.<br>Těstoviny připravíme podle návodu a vmícháme je do omáčky.<br>Rozdělíme na talíře a posypeme lístky čerstvé bazalky.", obrazek: "<img src='../../nemaso/Spagety-SRajcatovou-Omackou.webp'>" },
    {nazev: "Zapečená brokolice se sýrem a bramborem", ingredience: "<b><u>Ingredience:</u></b><br><br>- brambory <br>- brokolice <br>- 6 vajec <br>- 100 g šunky či jiné uzeniny <br>- 100 g eidamu <br>- 3 cibule <br>- 1 kelímek zakysané smetany <br>- pažitka <br>- 2 stroužky česneku <br>- olej <br>- sůl <br>- majoránka", postup: "<b><u>Postup přípravy:</b></u><br><br>Vychladlé oloupané brambory pokrájíme na kolečka, brokolici omyjeme a rozebereme na růžičky, šunku a eidam pokrájíme na proužky.<br>Cibuli pokrájíme na kolečka a osmahneme ji na oleji do zlatova.<br>Olejem lehce vytřeme zapékací mísu a poklademe vrstvu brambor, vrstvu brokolice a posypeme ji proužky šunky, sýru a cibule.<br>Vše lehce osolíme, posypeme majoránkou a poslední vrstvou budou opět plátky brambor.<br>Vejce rozmícháme se zakysanou smetanou, prolisovaným česnekem a solí.<br>Zalijeme touto směsí brambory a dáme do vyhřáté trouby zapéct asi na 30 min při 180-200°C.<br>Před podáním posypeme čerstvě nasekanou pažitkou.", obrazek: "<img src='../../nemaso/Zapecena-Brokolice-Se-Syrem-ABramborem.webp'>" },
    {nazev: "Zeleninový salát", ingredience: "<b><u>Ingredience:</u></b><br><br>- rajče<br>- paprika<br>- okurka<br>- cibule<br>- balkánský sýr<br>- kukuřice<br>- salát<br>- sójová omáčka", postup: "<b><u>Postup přípravy:</b></u><br><br>Vše pokrájíme na kostičky, smícháme, zakápneme sójovkou. Dle chuti můžeme trošku opepřit.", obrazek: "<img src='../../nemaso/Zeleninovy-Salat.webp'>" },
    {nazev: "Žemlovka", ingredience: "<b><u>Ingredience:</u></b><br><br>- 3 vejce<br>- 150 ml mléka<br>- 80-100 g moučkového cukru<br>- 250 g měkkého tvarohu<br>- 4-5 ks starších housek, tzn. 2-3 dny staré (nebo žemle)<br>- 6 jablek<br>- 1 hrst rozinek<br>- skořice", postup: "<b><u>Postup přípravy:</b></u><br><br>Trochu zatvrdlé housky nakrájíme na tenké plátky (1 cm), zalijeme mlékem, hned vyndáme a 1/3 klademe dospod na vymazaný a vysypaný pekáč.<br>Jablka nastrouháme a přimícháme skořici a rozinky.<br>Tvaroh rozmícháme s cukrem, žloutky, plátkem másla a asi 2 lžícemi mléka.<br>Na již pokladenou třetinu houskových plátků v pekáči rozetřeme polovinu připravené tvarohové směsi a přikryjeme 1/2 polovinou jablek.<br>Na ně dáme druhou třetinu namočených houskových plátků, potřeme druhou polovinou tvarohového krému a poklademe zbytkem jablek.<br>Vše zakryjeme poslední třetinou namočených houskových plátků.<br>Z bílků ušleháme tuhý sníh, do kterého zašleháme asi 60 g moučkového cukru.<br>Pečeme nejdříve bez sněhu ve středně vyhřáté troubě (150-180°C) zhruba půl hodiny, až jablka povolí a vrchní plátky housky zatvrdnou.<br>Poté potřeme ušlehaným tuhým sněhem a krátce - stačí 5-8 min - zapečeme v troubě.", obrazek: "<img src='../../nemaso/Zemlovka.webp'>" },












];