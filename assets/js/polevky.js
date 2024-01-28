﻿
function vypisJidloARecept() {
    // document.getElementById("recept").style.display = "none";    //  skryje obsah tabulky s receptem
    document.getElementById("reset").style.display = "none";       // skryje tlačítko - reset jídla
    // document.getElementById("ukaz-rcp").style.display = "inherit";    // aktivuje skryté tlačítko - ukaž recept
    document.getElementById("recept").style.display = "inherit";    // aktivuje skrytý obsah tabulky s receptem
    pocet_v_seznamu = polevky.length;
    if (polevky.length == 0) {
        document.getElementById("nazev").innerHTML = "už tady nic dalšího není 😮";
        document.getElementById("obrazek").innerHTML = "<img src='../../0pics/prazdny-talir.jpg'>";
        // document.getElementById("ukaz-rcp").style.display = "none";       // skryje tlačítko - ukaž recept
        document.getElementById("reset").style.display = "inherit";    // aktivuje skryté tlačítko - reset jídla
        document.getElementById("recept").style.display = "none";       // skryje obsah tabulky s receptem
        document.getElementById("generuj").style.display = "none";       // skryje obsah tabulky s receptem

    } else {
    // vybere random číslo podle počtu jídel v seznamu a vypíše je
        vypis = Math.floor(Math.random() * pocet_v_seznamu);
        document.getElementById("nazev").innerHTML = polevky[vypis].nazev;
        document.getElementById("postup").innerHTML = polevky[vypis].postup;
        document.getElementById("ingredience").innerHTML = polevky[vypis].ingredience;
        document.getElementById("obrazek").innerHTML = polevky[vypis].obrazek;

        polevky = polevky.splice(vypis, 1);}
}

  /* NAČTENÍ JÍDEL DO SIDEBARU */
  function nactiJidla() {
    // document.getElementById("sidenav").style.width = "250px";
    for (let i = 0; i < polevky.length; i++) {
        const x = document.createElement("li");
        x.setAttribute("id", i);
        var somePlace = document.getElementById("myMenu");
        somePlace.appendChild(x);
        const y = document.createElement("a");
        y.setAttribute("id", i);
        y.innerText = polevky[i].nazev;
        var somePlace2 = document.getElementById(i);
        somePlace2.appendChild(y);
    } 
}

  /* SIDENAV - NAČÍTÁNÍ JÍDEL Z LISTU */
document.onclick = function(e){
    var x = e.target.id
    var myValue = polevky[x]["nazev"]
    document.getElementById("nazev").innerHTML = myValue;
    var myValue = polevky[x]["ingredience"]
    document.getElementById("ingredience").innerHTML = myValue;
    var myValue = polevky[x]["postup"]
    document.getElementById("postup").innerHTML = myValue;
    var myValue = polevky[x]["obrazek"]
    document.getElementById("obrazek").innerHTML = myValue;
    document.getElementById("recept").style.display = "inherit";    // aktivuje skrytý obsah tabulky s receptem
}


const polevky = [
    {nazev: "Cizrnová polévka", ingredience: "<b><u>Ingredience:</u></b><br>- 500 g vařené cizrny<br>- 120 g másla<br>- 250 g cibule<br>- 30 g česneku<br>- sůl<br>- mletý pepř<br>- 1 l zeleninového vývaru (bujón)<br>- 120 ml smetany", postup: "<b><u>Postup přípravy:</b></u><br>Cizrnu, předem namočenou alespoň 8 hodin, uvaříme do měkka v čisté vodě (asi 1,5 hodiny).<br>V kastrolu rozpustíme máslo, na něm osmažíme cibuli, přidáme rozmáčknutý česnek, cizrnu a koření, osmahneme, zalijeme zeleninovým vývarem, osolíme a vaříme ještě půl hodiny.<br>Přidáme smetanu a polévku rozmixujeme.", obrazek: "<img src='../../polevky/Cizrnova-Polevka.jpg'>" },
    {nazev: "Česneková polévka", ingredience: "<b><u>Ingredience:</u></b><br>- česnek<br>- sýr<br>- vejce<br>- brambory<br>- majoránka<br>- pepř<br>- sůl", postup: "<b><u>Postup přípravy:</b></u><br>Můžeme si uvařit nějaké kosti nebo použijeme jenom bujón.<br>Brambory si uvaříme zvlášť.<br>Do vývaru nastrouháme česnek, přidáme koření, zahustíme vajíčkem a přidáme brambory.<br>Dochutíme dle libosti.<br>Nastrouhaný sýr podáváme až do talíře.<br>Může se osmažit i rohlík.", obrazek: "<img src='../../polevky/Cesnekova-Polevka.jpg'>" },
    {nazev: "Čočková polévka", ingredience: "<b><u>Ingredience:</u></b><br>- 250 g čočky<br>- 2 párky nebo více<br>- 1 cibule<br>- 1 ks vejce<br>- hrubá mouka<br>- olej<br>- sůl", postup: "<b><u>Postup přípravy:</b></u><br>Na oleji opražíme nadrobno nakrájenou cibuli, přidáme předem namočenou čočku, zalijeme vodou a vaříme do poloměkka. <br>Do uvařené polévky vložíme na kolečka nakrájené párky a jen prohřejeme.<br>Mouku a vajíčko smícháme do husté hmoty a kapáme do polévky, vzniknou noky.", obrazek: "<img src='../../polevky/Cockova-Polevka.jpg'>" },
    {nazev: "Dýňová polévka", ingredience: "<b><u>Ingredience:</u></b><br>- 1 ks cibule<br>- 50 g máslo<br>- sůl<br>- 1 ks dýně<br>- 1 kelímek smetana na vaření<br>- pepř drcený", postup: "<b><u>Postup přípravy:</b></u><br>V hrnci rozehřejeme máslo, osmahneme na něm do sklovata nadrobno nakrájenou cibuli. <br>Přidáme oloupanou a na větší kostky nakrájenou muškátovou dýni a ještě chviličku vše smažíme, aby se nám suroviny rozvoněly. Zalijeme studenou vodou tak, aby byla zelenina zcela ponořená,  promícháme a vaříme na mírném plamenu, dokud dýně nezměkne (cca 20 min).<br>Když je dýně měkká, stáhneme hrnec z plamene, přilejeme do něj smetanu na vaření,  podle chuti osolíme, opepříme a rozmixujeme obsah hrnce tyčovým mixérem do hladka.<br>V případě, že se vám zdá polévka moc hustá, můžete zředit vodou a ještě chvíli povařit.", obrazek: "<img src='../../polevky/Dynova-Polevka.jpg'>" },
    {nazev: "Frankfurtská polévka", ingredience: "<b><u>Ingredience:</u></b><br>- cibule<br>- máslo<br>- párek<br>- smetana<br>- sladká paprika<br>- sůl<br>- pepř", postup: "<b><u>Postup přípravy:</b></u><br>Cibuli osmažíme na másle do sklovatění, zasypeme paprikou, přidáme nakrájené párky a chvilku smažíme.<br>Zalijeme trochou vody a přidáme smetanu.<br>Dochutíme solí, pepřem a můžeme přidat ještě papriku.", obrazek: "<img src='../../polevky/Frankfurtska-polevka.jpg'>" },
    {nazev: "Gazpacho", ingredience: "<b><u>Ingredience:</u></b><br>- 500 g rajčat<br>- 1 šalotka<br>- 2 červené papriky<br>- 1 salátová okurka<br>- 3 stroužky česneku<br>- 2 lžíce vinného octa<br>- 2 lžičky worcesterské omáčky<br>- sůl <br>- pepř", postup: "<b><u>Postup přípravy:</b></u><br>Papriky překrojíme, zbavíme jádřinců a nakrájíme. Rajčata a oloupanou okurku taky nakrájíme.<br>Stroužky česneku oloupeme a šalotku nasekáme. Pak vše dáme do mixéru a rozmixujeme. <br>Polévku ochutíme octem, worcesterskou omáčkou, osolíme a opepříme. <br>Podáváme vychlazenou.", obrazek: "<img src='../../polevky/Gazpacho.jpg'>" },
    {nazev: "Hrachová polévka", ingredience: "<b><u>Ingredience:</u></b><br>- 1,5 l kuřecího vývaru (nebo bujón)<br>- 400 g mraženého hrášku<br>- 1 hrst majoránky<br>- 100 ml smetany<br>- 1 lžička soli<br>- špetka pepře<br>- olej", postup: "<b><u>Postup přípravy:</b></u><br>Nadrobno nasekanou cibulku a česnek opečeme na másle dozlatova, zaprášíme moukou a upražíme světlou jíšku.<br>Zalijeme ji vývarem, přivedeme k varu a 15 minut povaříme.<br>Přisypeme hrášek a majoránku, vařte 5 minut a rozmixujeme dohladka, pak vmícháme smetanu. <br>Osolíme, opepříme a prohřejeme. Můžeme si k tomu udělat krutony.", obrazek: "<img src='../../polevky/Hrachova-Polevka.jpg'>" },
    {nazev: "Chřestová polévka", ingredience: "<b><u>Ingredience:</u></b><br>- 3 hrnky oloupaného chřestu (špičky chřestu dáme stranou)<br>- kuřecí maso<br>- 2 cibule<br>- 1 hrnek brambor<br>- 1 mrkev<br>- 3 lžíce másla<br>- 250 ml smetany<br>- sůl<br>- pepř<br>- 1 lžička cukru<br>- citron<br>- žloutek", postup: "<b><u>Postup přípravy:</b></u><br>Kuřecí maso dáme vařit, přidáme sůl, pepř a vaříme doměkka. Maso vyjmeme.<br>Na části másla zpěníme nakrájenou cibuli, chřest, brambory, zalijeme kuřecím vývarem, osolíme, opepříme, povaříme a rozmixujeme.<br>Smetanu rozkvrdláme se žloutkem, nalejeme do polévky a povaříme.<br>Špičky chřestu orestujeme na zbylém másle, spolu s nakrájenou mrkví, posypeme cukrem, solí a opékáme, až se cukr roztaví a obalí zeleninou.<br>Do misek rozdělíme polévku, přidáme nakrájené maso a orestovanou zeleninu.<br>Doplníme plátkem citronu.", obrazek: "<img src='../../polevky/Chrestova-polevka.jpg'>" },
    {nazev: "Jihočeská kulajda", ingredience: "<b><u>Ingredience:</u></b><br>- 2 hrsti sušených hub<br>- 400 g brambor<br>- 750 g zeleninového vývaru<br>- 4 vejce<br>- 1 lžíce másla<br>- 3 lžíce hladké mouky<br>- 3 bobkové listy<br>- 5 kuliček nového koření<br>- 5 kuliček pepře<br>- 250 ml 30% smetany<br>- 1 hrst nasekaného kopru<br>- 2 lžíce cukru<br>- 2-3 lžíce octa<br>- sůl<br>- pepř", postup: "<b><u>Postup přípravy:</b></u><br>Oprané houby dáme do misky a zalijeme je horkou vodou. Oloupeme brambory a nakrájíme na kostičky. Připravíme si vývar a uvaříme vejce. V hrnci rozpustíme máslo, zaprášíme ho moukou a umícháme jíšku. Zalijeme ji horkým vývarem, přidáme vodu z hub a metličkou vše dobře promícháme, aby se jíška rovnoměrně rozpustila. Přidáme brambory, houby a koření, přivedeme k varu a vaříme na mírném plameni, dokud nejsou brambory takřka hotové. Přidáme smetanu, polévku ochutíme solí a pepřem, přidáme většinu nasekaného kopru. <br>Už nevaříme a doladíme cukrem a octem dle chuti. Vejce přidáme až na talíř a posypeme koprem.", obrazek: "<img src='../../polevky/Jihoceska-kulajda.jpg'>" },
    {nazev: "Kukuřičná polévka", ingredience: "<b><u>Ingredience:</u></b><br>- 100 ml smetany (můžeme i víc)<br>- 200 g mražené kukuřice<br>- 2 ks mrkve<br>- 500 ml zeleninového vývaru<br>- cibule<br>- kari koření<br>- kurkuma<br>- mungo klíčky", postup: "<b><u>Postup přípravy:</b></u><br>Připravíme si vývar ve kterém uvaříme i mrkev a nakrájenou cibuli. Až je mrkev měkká, tak ji rozmixujeme, vsypeme kukuřici, mungo klíčky, smetanu, dochutíme kořením a vaříme asi 3 minuty.", obrazek: "<img src='../../polevky/Kukuricna-Polevka.jpg'>" },
    {nazev: "Kuřecí vývar", ingredience: "<b><u>Ingredience:</u></b><br>- 400 g kuře<br>- 2 ks nové koření kuličky<br>- 1 ks mrkev<br>- 1 ks petržel<br>- 1 ks celer<br>- 1 ks cibule<br>- 1 hrst petrželka<br>- 1 sůl<br>- 1 pepř mletý", postup: "<b><u>Postup přípravy:</b></u><br>Omyté kuře vložíme do 3/4 l vlažné osolené vody, chvíli povaříme a potom přidáme očištěnou kořenovou zeleninu  a koření a společně vaříme do měkka. Když je maso měkké, vyjmeme ho spolu se zeleninou a kořením.<br>Kuře obereme, maso nakrájíme na kostičky, zeleninu na nudličky, vývar dochutíme solí a pepřem.<br>Polévku s masem, vařenou zeleninou a nudlemi ozdobíme zelenou petrželkou.", obrazek: "<img src='../../polevky/Kureci-Vyvar.jpg'>" },
    {nazev: "Pórková polévka", ingredience: "<b><u>Ingredience:</u></b><br>- 3 lžíce másla<br>- sůl<br>- 300 g pórek<br>- 1,5 l voda<br>- muškátový květ<br>- 1 ks žloutek<br>- 2 lžíce polohrubé mouky<br>- 200 ml smetana", postup: "<b><u>Postup přípravy:</b></u><br>Očištěný, omytý pórek nakrájíme na kolečka, osmahneme na polovině dávky másla, zalijeme vodou,  přidáme zeleninový bujón a vaříme doměkka. <br>Ze zbývající dávky másla a mouky připravíme světlou jíšku, přidáme jí do polévky, rozšleháme, okořeníme muškátovým květem, osolíme a dále vaříme.<br>Do hotové pórkové polévky vlijeme smetanu s rozšlehaným žloutkem a už nevaříme.", obrazek: "<img src='../../polevky/Porkova-Polevka.jpg'>" },
    {nazev: "Zelňačka", ingredience: "<b><u>Ingredience:</u></b><br>- 6 hrnek horká voda<br>- 1 ks klobása<br>- 1 ks feferonka<br>- 2 ks brambory<br>- 1 kelímek zakysaná smetana<br>- 2 lžíce polohrubá mouka<br>- 2 lžička červená paprika<br>- sůl dle chuti<br>- 1 sklenice sterilované zelí menší", postup: "<b><u>Postup přípravy:</b></u><br>Do vroucí vody vmícháme překrájené zelí, brambory nakrájené na kostky, kolečka klobásy a feferonku.<br>Když jsou brambory měkké, vlijeme do polévky smetanu, ve které jsme rozmíchali mouku, papriku a dochutíme.", obrazek: "<img src='../../polevky/Zelnacka.jpg'>" },
    {nazev: "Žampionová polévka", ingredience: "<b><u>Ingredience:</u></b><br>- vývar<br>- 1 velká cibule<br>- 500 g žampionů<br>- 1 lžíce másla<br>- 1 smetana na vaření <br>- sůl<br>- pepř", postup: "<b><u>Postup přípravy:</b></u><br>Očištěné žampiony a oloupanou cibuli rozmixujeme nebo nakrájíme sekáčkem, vložíme na rozpuštěné máslo a dusíme za častého míchání, aby nezhnědla.<br>Po změknutí žampionů (po 10 minutách smažení) je zalijeme vývarem a na mírném ohni vaříme asi 3 minuty.<br>Poté přidáme mouku rozkvedlanou v mléku, smícháme a ještě jednou povaříme.<br>Vaříme asi 3 minuty, po odstavení spojíme vše s lehce rozšlehanou smetanou. Horkou polévku naléváme do polévkových šálku a podáváme s čerstvou bagetou.", obrazek: "<img src='../../polevky/Zampionova-polevka.jpg'>" },












];