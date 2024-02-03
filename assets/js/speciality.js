
function vypisJidloARecept() {
    document.getElementById("reset").style.display = "none";       // skryje tlačítko - reset jídla
    document.getElementById("recept").style.display = "inherit";    // aktivuje skrytý obsah tabulky s receptem
    pocet_v_seznamu = speciality.length;
    if (speciality.length == 0) {
        document.getElementById("nazev").innerHTML = "už tady nic dalšího není 😮";
        document.getElementById("obrazek").innerHTML = "<img src='../../0pics/prazdny-talir.webp'>";
        document.getElementById("reset").style.display = "inherit";    // aktivuje skryté tlačítko - reset jídla
        document.getElementById("recept").style.display = "none";       // skryje obsah tabulky s receptem
        document.getElementById("generuj").style.display = "none";       // skryje obsah tabulky s receptem
    }

    else {
    /* vybere random číslo podle počtu jídel v seznamu a vypíše je */
        vypis = Math.floor(Math.random() * pocet_v_seznamu);
        document.getElementById("nazev").innerHTML = speciality[vypis].nazev;
        document.getElementById("postup").innerHTML = speciality[vypis].postup;
        document.getElementById("ingredience").innerHTML = speciality[vypis].ingredience;
        document.getElementById("obrazek").innerHTML = speciality[vypis].obrazek;

        speciality = speciality.splice(vypis, 1);
    }
}

  /* NAČTENÍ JÍDEL DO SIDEBARU */
function nactiJidla() {
    // document.getElementById("sidenav").style.width = "250px";
    for (let i = 0; i < speciality.length; i++) {
        const x = document.createElement("li");
        x.setAttribute("id", i);
        var somePlace = document.getElementById("myMenu");
        somePlace.appendChild(x);
        const y = document.createElement("a");
        y.setAttribute("id", i);
        y.innerText = speciality[i].nazev;
        var somePlace2 = document.getElementById(i);
        somePlace2.appendChild(y);
    } 
}

  /* SIDENAV - NAČÍTÁNÍ JÍDEL Z LISTU */
document.onclick = function(e){
    var x = e.target.id
    var myValue = speciality[x]["nazev"]
    document.getElementById("nazev").innerHTML = myValue;
    var myValue = speciality[x]["ingredience"]
    document.getElementById("ingredience").innerHTML = myValue;
    var myValue = speciality[x]["postup"]
    document.getElementById("postup").innerHTML = myValue;
    var myValue = speciality[x]["obrazek"]
    document.getElementById("obrazek").innerHTML = myValue;
    document.getElementById("recept").style.display = "inherit";    // aktivuje skrytý obsah tabulky s receptem
}


const speciality = [
    {nazev: "Angreštový džem s rybízem a banánem", ingredience: "<b><u>Ingredience:</u></b><br>- 500 g angreštu<br>- 300 g červeného rybízu<br>- 2 vyzrálé banány<br>- 300 g hnědého cukru<br>- 1 lžička pektinu – můžete vynechat<br>- šťáva z 1 citronu", postup: "<b><u>Postup přípravy:</b></u><br>Angrešty zbavte stopky a kalíšku.<br>Překrojte a smíchejte s odstopkovaným rybízem a nakrájeným banánem.<br>Pokud chcete, aby byl džem bez kousků ovoce, namelte angrešty a rybíz v mlýnku nebo rozvařené ovoce před zahuštěním rozmixujte.<br>Ovoce smíchejte s většinou cukru, podlijte malým množstvím vody a dejte vařit.<br>Až ovocná směs zhoustne tak, že bude při míchání na vařečce zůstávat cestička, přidejte pektin smíchaný se zbylým cukrem a ihned rozmíchejte.<br>Vařte ještě 10 minut, až se džem zahustí.<br>Pak vmíchejte citronovou šťávu, naplňte do sklenic a hned sterilujte.", obrazek: "<img src='../../speciality/Angrestovy-Dzem-SRybizem-ABananem.webp'>" },
    {nazev: "Bezinkový sirup", ingredience: "<b><u>Ingredience:</u></b><br>- bezové květy<br>- 2 kg cukru<br>- 2 citróny<br>- kyselina citrónová<br>- 2 l vody", postup: "<b><u>Postup přípravy:</b></u><br>Bezové květy opláchneme a necháme okapat. Ohřejeme vodu a rozpustíme v ní cukr.<br>Necháme vychladnout, přidáme květy, nakrájený citrón a kys. citrónovou.<br>Necháme louhovat 24 hod, trošku prohřejeme a přecedíme do horkých lahví.<br>Necháme ve stínu otočené dnem nahoru.", obrazek: "<img src='../../speciality/Bezinkovy-Sirup.webp'>" },
    {nazev: "Celozrnný chléb bez hnětení", ingredience: "<b><u>Ingredience:</u></b><br>- 3 hrnky teplé  vody (ne horké)<br>- 1 lžíce sušeného droždí nebo 25 g čerstvého<br>- 1 lžíce cukru<br>- 1 lžíce rostlinného oleje<br>- 1 lžíce octa<br>- 3 hrnky hladké pšeničné nebo hladké špaldové mouky<br>- 2,5 až 3 hrnky celozrnné pšeničné mouky<br>- 1 až 1,5 lžíce soli<br>- podle vás oříšky, semínka a bylinky", postup: "<b><u>Postup přípravy:</b></u><br>Ve velké míse smícháme teplou vodu, droždí a cukr. Voda nesmí být horká, spíše tělesné teploty, aby neznehodnotila droždí...<br>Počkáme pár minut, dokud neuvidíme, že droždí je aktivní a vytváří bubliny na povrchu, potom přidáme ocet a olej.<br>Přidáváme hrnek po hrnku hladkou mouku, mezi každým hrnkem pořádně zamíchejte těsto. Teď přidáme celozrnnou mouku a sůl, opět postupně, důkladně mícháme mezi každým přidáním. Toto těsto bude velmi řídké, kašovité a lepivé.<br>Přidejte semínka, ořechy, sušená rajčata, restovanou cibulku,... <br>Přikryjeme čistou utěrkou a necháme na teplém místě kynout okolo 30 - 40 minut, dokud nezdvojnásobí svůj objem.<br> (Pomáhám si troubou, kterou krátce zapnu na minimum, opět vypnu a vložím těsto dovnitř. Dejte jen pozor, aby teplota nebyla příliš vysoká.)<br>Předehřejeme troubu na 185 °C. Pomocí stěrky přesuneme těsto do dvou vymazaných forem a necháme ještě jednou vykynout.<br>Povrch ještě posypeme semínky či bylinkami a dáme péct přibližně na 50 minut, dokud není na povrchu zlatohnědý.<br>Že je chleba hotový, poznáme také na první pohled jednoduše tak, že se odchyluje od stěn formy a vzniká po obvodu malá skulina.<br>Jakmile chléb vyndáme z trouby, můžeme jej hladce vysunout na mřížku, kde krásně dochladne, aniž by se zapařil.<br>Pro kontrolu, zda je chléb již upečený, zaklepeme na spodek chleba, měl by znít dutě.", obrazek: "<img src='../../speciality/Domaci-Chleb.webp'>" },
    {nazev: "Hořčičný dresing s medem na salát", ingredience: "<b><u>Ingredience:</u></b><br>- 1 lžíci (dijonské) hořčice<br>- 1 lžíci medu<br>- 1 lžíci citronové šťávy<br>- 4-5 lžic olivového oleje <br>- sůl<br>- pepř", postup: "<b><u>Postup přípravy:</b></u><br>Všechny ingredience smícháme a chvilku kvedláme, aby se řádně spojily.<br>Nevyplatí se salát se zálivkou promíchávat moc dopředu, protože pak rychleji zvadne.", obrazek: "<img src='../../speciality/Horcicny-dresing.webp'>" },
    {nazev: "Jahodový sorbet", ingredience: "<b><u>Ingredience:</u></b><br>- 600 g jahod<br>- 200 g cukru<br>- 100 ml vody<br>- 2 ks bílků<br>- 1 lžíce citronové šťávy", postup: "<b><u>Postup přípravy:</b></u><br>Jahody opláchneme a odsťopkujeme. Cukr rozmícháme ve vodě a svaříme na hustý sirup.<br>Po vychlazení přilejeme do rozmixovaných jahod. Dochutíme citronovou šťávou.<br>Z bílků ušleháme sníh a vmícháme do jahod. Zamrazíme a promícháváme.", obrazek: "<img src='../../speciality/Jahodovy-Sorbet.webp'>" },
    {nazev: "Limetková zmrzlina s omáčkou z pečených třešní", ingredience: "<b><u>Ingredience:</u></b><br>- 120 g moučkového cukru<br>- 350 ml smetany ke šlehání<br>- 80 ml limetkové šťávy<br>- strouhaná kůra ze dvou limetek<br>- 500 g třešní<br>- 3 lžíce hnědého cukru", postup: "<b><u>Postup přípravy:</b></u><br>Smíchejte cukr se smetanou a nechte rozpustit.<br>Pak přidejte šťávu a kůru z limetky, kterou nezapomeňte před strouháním pořádně vydrhnout.<br>Směs nalijte do zmrzlinovače nebo dejte zamrazit do běžného mrazáku – viz tip na straně 20.<br>Třešně posypte hnědým cukrem, zabalte do alobalového balíčku a pečte 15 minut na grilu.<br>Vyklopte do cedníku s velkými oky a propasírujte, abyste se zbavili pecek.<br>Poté podávejte s limetkovou zmrzlinou.", obrazek: "<img src='../../speciality/Limetkova-Zmrzlina-SOmackou-ZPecenych-Tresni.webp'>" },
    {nazev: "Nakládaný sýr", ingredience: "<b><u>Ingredience:</u></b><br>- 200 g mladé goudy<br>- 150 g balkánského sýra<br>- 100 g romadúru<br>- 100 g sýra s modrou plísní<br>- 1 lžička celého pepře<br>- 1 lžička grilovacího koření<br>- 1 lžíce mleté papriky<br>- 2 červené cibule<br>- 4 stroužky česneku<br>- 5 nakládaných feferonek<br>- 250 ml rostlinného oleje", postup: "<b><u>Postup přípravy:</b></u><br>Sýry nakrájejte na větší kostky a posypte kořením.<br>Naplňte do velké sklenice a prokládejte nakrájenou cibulí, česnekem a feferonkami.<br>Zalijte olejem, aby bylo vše ponořené, a nechte dva dny zrát při pokojové teplotě.<br>Poté uložte do lednice a zkonzumujte do dvou týdnů.", obrazek: "<img src='../../speciality/Nakladany-Syr.webp'>" },
    {nazev: "Rajčatový protlak", ingredience: "<b><u>Ingredience:</u></b><br>- rajčata", postup: "<b><u>Postup přípravy:</b></u><br>Na recept použijeme libovolné množství zralých rajčat.<br>Čím zralejší rajčátka jsou, tím bude omáčka sladší.<br>Rajčata zbavíme 'bubáků', dobře je omyjeme a překrájíme.<br>Rajčata vhodíme do hrnce, zahřejeme a za občasného promíchání necháme rozvařit, až nám vznikne jen hustá omáčka se slupkami, je to vyvaření asi na polovinu objemu.<br>Omáčku odstavíme, necháme z části vychladnout a přes hustý cedník propasírujeme.<br>Vznikne nám rajčatová omáčka (protlak) sladké chuti bez semínek a slupek.<br>Takto připravený rajčatový protlak můžeme libovolně dochutit solí, cukrem, kořením, bylinkami či česnekem.<br>Rajčatový protlak můžeme dál tepelně upravovat, případně sterilovat a uchovat na pozdější použití.<br>Stačí jen sterilovat 20 minut od bodu varu v uzavíratelných skleničkách.", obrazek: "<img src='../../speciality/Rajcatovy-Protlak.webp'>" },
    {nazev: "Rýmovníkový sirup MarWen", ingredience: "<b><u>Ingredience:</u></b><br>- 35-50 lístků rýmovníku<br>- 1 citron<br>- 1 pomeranč<br>- 1 l vody<br>- 1 kg cukru", postup: "<b><u>Postup přípravy:</b></u><br>Listy rýmovníku, nakrájený citron a pomeranč na plátky dáme do hrnce a zalijeme horkou vodou.<br>Přikryjeme pokličkou a necháme 48hodin louhovat.<br>Po výluhu přecedíme, přivedeme do varu a přidáme cukr.<br>Můžeme přidat i kyselinu citronovou.<br>Ještě teplé vléváme do předem připravených lahví nebo zavařovaček.<br>Pořádně zavíčkujeme a točíme dnem nahoru.", obrazek: "<img src='../../speciality/Rymovnikovy-sirup.webp'>" },
    {nazev: "Tvarohové nanuky", ingredience:  "<b><u>Ingredience na 6 nanuků:</u></b><br>- 1 měkký tvaroh<br>- 200 g zakysané smetany<br>- 2 vanilkové cukry<br>- 2 lžíce medu<br>- 200 g drobného ovoce", postup: "<b><u>Postup přípravy:</b></u><br>Do misky dáme tvaroh, zakysanou smetanu, cukr a med. Dobře prošleháme a vmícháme ovoce. <br>Směsí pak naplníme tvořítka na nanuky nebo kelímky pokud tvořítka nemáme a místo dřívek můžeme dát lžičky.<br>Dáme do mrazáku aspoň na 4 hodiny. ", obrazek: "<img src='../../speciality/Tvarohove-nanuky.webp'>" },
    {nazev: "Utopenci", ingredience: "<b><u>Ingredience:</u></b><br>- 2 kg špekáčků<br>- 800 g cibule<br>- 0,75 l vody<br>- 0,5 l octa<br>- špetka soli<br>- 2 lžíce cukru<br>- 16 kuliček nového koření<br>- 16 kuliček pepře<br>- 8 feferonek", postup: "<b><u>Postup přípravy:</b></u><br>Cibuli a špekáčky rozkrájíme a vložíme střídavě do sklenice (cibule, špekáčky,...)<br>Vodu s octem, cukrem, feferonkami a kořením povaříme cca 10 minut, necháme vychladnout a zalijeme špekáčky s cibulí.<br>Necháme odležet asi týden, ale již po 2 dnech se dají jíst.", obrazek: "<img src='../../speciality/Utopenci.webp'>" },
    {nazev: "Vaječný likér MarWen", ingredience:  "<b><u>Ingredience na 0,5 l.:</u></b><br>- 3 ks žloutků<br>- 1 vanilkový cukr<br>- 0,3 l hnědého rumu<br>- 1 plechovka salka", postup: "<b><u>Postup přípravy:</b></u><br>Žloutky ušleháme s van. cukrem do pěny, přidáme salko a opět cca 3 min šleháme.<br>Nakonec přilijeme rum a lehce prošleháme. Nalijeme do sklenice a chladíme.", obrazek: "<img src='../../speciality/Vajecny-Liker-MarWen.webp'>" },









];