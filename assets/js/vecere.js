﻿
function vypisJidloARecept() {
    // document.getElementById("recept").style.display = "none";    //  skryje obsah tabulky s receptem
    document.getElementById("reset").style.display = "none";       // skryje tlačítko - reset jídla
    // document.getElementById("ukaz-rcp").style.display = "inherit";    // aktivuje skryté tlačítko - ukaž recept
    document.getElementById("recept").style.display = "inherit";    // aktivuje skrytý obsah tabulky s receptem
    pocet_v_seznamu = vecere.length;
    if (vecere.length == 0) {
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
        document.getElementById("nazev").innerHTML = vecere[vypis].nazev;
        document.getElementById("postup").innerHTML = vecere[vypis].postup;
        document.getElementById("ingredience").innerHTML = vecere[vypis].ingredience;
        document.getElementById("obrazek").innerHTML = vecere[vypis].obrazek;

        vecere = vecere.splice(vypis, 1);
    }
}

  /* NAČTENÍ JÍDEL DO SIDEBARU */
  function nactiJidla() {
    // document.getElementById("sidenav").style.width = "250px";
    for (let i = 0; i < vecere.length; i++) {
        const x = document.createElement("li");
        x.setAttribute("id", i);
        var somePlace = document.getElementById("myMenu");
        somePlace.appendChild(x);
        const y = document.createElement("a");
        y.setAttribute("id", i);
        y.innerText = vecere[i].nazev;
        var somePlace2 = document.getElementById(i);
        somePlace2.appendChild(y);
    } 
}

  /* SIDENAV - NAČÍTÁNÍ JÍDEL Z LISTU */
document.onclick = function(e){
    var x = e.target.id
    var myValue = vecere[x]["nazev"]
    document.getElementById("nazev").innerHTML = myValue;
    var myValue = vecere[x]["ingredience"]
    document.getElementById("ingredience").innerHTML = myValue;
    var myValue = vecere[x]["postup"]
    document.getElementById("postup").innerHTML = myValue;
    var myValue = vecere[x]["obrazek"]
    document.getElementById("obrazek").innerHTML = myValue;
    document.getElementById("recept").style.display = "inherit";    // aktivuje skrytý obsah tabulky s receptem
}

const vecere = [
    {nazev: "Bramboráky", ingredience: "<b><u>Ingredience:</u></b><br>- brambory<br>- točený salám<br>- vajíčko<br>- česnek<br>- hl. mouka<br>- sůl<br>- pepř<br>- majoránka<br>- olej", postup: "<b><u>Postup přípravy:</b></u><br>Syrové brambory nastrouháme nahrubo, salám nakrájíme nebo též můžeme nastrouhat, přidáme potřebné suroviny, aby vzniklo husté těstíčko.<br>Na pánvičku s olejem pomocí naběračky vkládáme těstíčko a děláme placičky. Smažíme do zlatova.", obrazek: "<img src='../../vecere/Bramboraky.webp'>" },
    {nazev: "Budapešťská pomazánka", ingredience: "<b><u>Ingredience:</u></b><br>- 1 cibule <br>- 1/2 červené kapie <br>- 250 g polotučného tvarohu <br>- paprika sladká <br>- sůl <br>- pepř", postup: "<b><u>Postup přípravy:</b></u><br>Nakrájíme cibuli a papriku na drobné kostičky (nebo do mixéru).<br>Přidáme tvaroh, sladkou papriku a dochutíme solí a pepřem.", obrazek: "<img src='../../vecere/Budapestska-Pomazanka.webp'>" },
    {nazev: "Bulka s hermelínem a brusinky", ingredience: "<b><u>Ingredience:</u></b><br>- houska<br>- hermelín<br>- měkký salám<br>- brusinky<br>- máslo", postup: "<b><u>Postup přípravy:</b></u><br>Housku rozpůlíme, pomažeme z obou stran máslem.<br>Na spodní díl položíme plátek salámu, na něj půlku hermelínu, brusinky a další plátek salámu.<br>Přiložíme horní díl housky a dáme na chvíli do mikrovlnky rozehřát, aby hermelín tekl.", obrazek: "<img src='../../vecere/Bulka-s-hermelinem.webp'>" },
    {nazev: "Celerová pomazánka se sýrem", ingredience: "<b><u>Ingredience:</u></b><br>- 1/2 celeru<br>- menší mrkev<br>- 100 g tvrdého sýra<br>- 2 stroužky česneku<br>- špetka kari<br>- 100 g majonézy<br>- špetka soli", postup: "<b><u>Postup přípravy:</b></u><br>Celer jemně nastrouháme a hned vmícháme do majonézy, aby nezhnědl, přidáme nastrouhanou mrkev a sýr, osolíme, přidáme kari a prolisovaný česnek.<br>Promícháme, necháme proležet a mažeme na chléb nebo topinky, zdobíme plátky vajec nebo zeleniny.", obrazek: "<img src='../../vecere/Celerova-Pomazanka-Se-Syrem.webp'>" },
    {nazev: "Česnekovo-sýrová pomazánka", ingredience: "<b><u>Ingredience:</u></b><br>- sýr<br>- česnek<br>- pomazánkové máslo<br>- majonéza", postup: "<b><u>Postup přípravy:</b></u><br>Nastrouháme sýr (můžeme přidat i nivu) a smícháme suroviny.", obrazek: "<img src='../../vecere/Cesnekovo-Syrova-Pomazanka.webp'>" },
    {nazev: "Ham&Eggs", ingredience: "<b><u>Ingredience:</u></b><br>- vajíčka<br>- slanina (nebo jiný salám)<br>- cibule<br>- koření dle chuti", postup: "<b><u>Postup přípravy:</b></u><br>Na rozpálenou pánvičku pokládáme salám a necháme chvilku smažit.<br>Rozklepneme vajíčka, posypeme jemně nakrájenou cibulkou a dochutí kořením.<br>Necháme chvilku smažit a podáváme jako celek.", obrazek: "<img src='../../vecere/HamEggs.webp'>" },
    {nazev: "Chleba s máslem rybičky a cibule", ingredience: "<b><u>Ingredience:</u></b><br>- chleba<br>- máslo<br>- rybičky<br>- cibule", postup: "<b><u>Postup přípravy:</b></u><br>Chleba pomažeme máslem, položíme na něj rybičky, tresčí játra a zasypeme cibulkou.", obrazek: "<img src='../../vecere/Chleba-s-rybickami.webp'>" },
    {nazev: "Chleba ve vajíčku", ingredience: "<b><u>Ingredience:</u></b><br>- chleba<br>- vajíčko<br>- koření dle chuti (pepř, sůl)", postup: "<b><u>Postup přípravy:</b></u><br>Do hlubokého talíře si rozklepneme vajíčka a dochutíme kořením.<br>Pořádně rozkvrdláme.<br>Nakrájený chleba na plátky namočíme ve vajíčku a pokládáme na rozpálenou pánvičku.", obrazek: "<img src='../../vecere/Chleba-Ve-Vajicku.webp'>" },
    {nazev: "Karbanátek na topince", ingredience: "<b><u>Ingredience:</u></b><br>- mleté maso<br>- cibule<br>- česnek<br>- vajíčko<br>- strouhanka<br>- pepř<br>- sůl<br>- chleba", postup: "<b><u>Postup přípravy:</b></u><br>Základ na karbanátky. Mleté maso, najemno nakrájená cibule, vajíčko, česnek, strouhanka, pepř, sůl a klidně i lžička hořčice. Vše smícháme a připlácneme na ukrojený plátek chleba.<br>Smažíme prvně masovou část.", obrazek: "<img src='../../vecere/Karbanatek-na-topince.webp'>" },
    {nazev: "Klobása", ingredience: "<b><u>Ingredience:</u></b>Výběr je na tobě :)", obrazek: "<img src='../../vecere/klobasa.webp'>" },
    {nazev: "Klobásová pomazánka", ingredience: "<b><u>Ingredience:</u></b><br>- 2 ostré klobásy<br>- moravanka<br>- 3 vejce<br>- 2 lžíce majonézi", postup: "<b><u>Postup přípravy:</b></u><br>Nastrouháme klobásy, slitou moravanku, uvařené a nastrouhané vejce a majonézu.<br>Vše smícháme a máme hotovo.", obrazek: "<img src='../../vecere/Klobasova-Pomazanka.webp'>" },
    {nazev: "Koukni do lednice", ingredience: "<b><u>Ingredience:</u></b>KUK :)", obrazek: "<img src='../../vecere/Koukni-Do-Lednice.webp'>" },
    {nazev: "Krabí pomazánka", ingredience: "<b><u>Ingredience:</u></b><br>- 1 bal. krabích tyček<br>- 2 lžíce bílého jogurtu<br>- 100 ml majonézy<br>- sůl", postup: "<b><u>Postup přípravy:</b></u><br>Krabí tyčky nakrájíme najemno nebo na kostky, přimícháme jogurt, majonézu a půl.", obrazek: "<img src='../../vecere/Krabi-Pomazanka.webp'>" },
    {nazev: "Krupičná kaše", ingredience: "<b><u>Ingredience:</u></b><br>- 0,5 l mléka<br>- 2,5 lžíce krupice<br>- cukr krupice<br>- skořice, granko (dle chuti)<br>- máslo", postup: "<b><u>Postup přípravy:</b></u><br>Dáme vařit mléko a přidáme krupici, pokud nechce houstnout, klidně dáme ještě lžíci.<br>Musíme stále míchat, aby se to nepřipálilo a osladíme.<br>Po zhoustnutí vlijeme na talíř, poklademe plátky másla a zasypeme skořicí, grankem, co je libo.<br>Můžeme ještě zasypat moučkovým cukrem.", obrazek: "<img src='../../vecere/Krupicna-Kase.webp'>" },
    {nazev: "Langoše", ingredience: "<b><u>Ingredience:</u></b><br>- droždí<br>- 1/2 lžičky cukru<br>- 500g hl. mouky<br>- 4 dcl mléka<br>- 1/2 lžičky soli", postup: "<b><u>Postup přípravy:</b></u><br>Připravíme kvásek (vlažné mléko a rozdrolené droždí)<br>Necháme vzejít v teple.<br>Mouku osolíme, přidáme kvásek a cukr.<br>Ručně vypracujeme těsto a necháme 30 minut kynout v teple.<br>Z těsta vypracováváme placky a smažíme do zlatova.", obrazek: "<img src='../../vecere/Langose.webp'>" },
    {nazev: "Nivová pomazánka", ingredience: "<b><u>Ingredience:</u></b><br>- 100 g nivy<br>- kostka taveného sýra<br>- 2 lžíce majonézy", postup: "<b><u>Postup přípravy:</b></u><br>Nivu nastrouháme, přidáme sýr a majonézu. Pokud se to bude zdát moc řídké, můžeme přidat trochu másla a řádně ho vetřít.", obrazek: "<img src='../../vecere/Nivova-pomazanka.webp'>" },
    {nazev: "Obložený talíř", ingredience: "<b><u>Ingredience:</u></b><br>Můžete použít cokoliv (sýry, klobásy, zelenina a hlavně pečivo)", obrazek: "<img src='../../vecere/Oblozeny-Talir.webp'>" },
    {nazev: "Palačinky", ingredience: "<b><u>Ingredience:</u></b><br>- 400 ml mléka<br>- 2 ks vajec<br>- 200 g hl. mouky<br>- sůl", postup: "<b><u>Postup přípravy:</b></u><br>Všechno smícháme a můžeme smažit.<br>Nejlepší je za použití šufánku, vlévat směs na pánvičku.", obrazek: "<img src='../../vecere/Palacinky.webp'>" },
    {nazev: "Párky", ingredience: "<b><u>Ingredience:</u></b>Výběr je na tobě :)", obrazek: "<img src='../../vecere/Parky.webp'>" },
    {nazev: "Pařížský salát", ingredience: "<b><u>Ingredience:</u></b><br>- 1/2 lžičky hořčice<br>- 3 lžíce sterilovaný hrášek<br>- 1/2 cibule<br>- 200 g měkký salám<br>- 200 g majonéza<br>- 100 g sterilované okurky<br>- sůl<br>- pepř<br>- cukr<br>- ocet<br>- worcester omáčka", postup: "<b><u>Postup přípravy:</b></u><br>Cibuli nakrájíme najemno, hrášek scedíme, salám nastrouháme a okurky nakrájíme. <br>Připravené ingredience dáme do mísy, přidáme hořčici, majonézu a promícháme.<br>Podle potřeby dochutíme a dáme do lednice uležet.", obrazek: "<img src='../../vecere/Parizsky-Salat.webp'>" },
    {nazev: "Pečenky", ingredience: "<b><u>Ingredience:</u></b><br>- pytlík bramborové těsto na knedlíky<br>- mák<br>- povidla<br>- cukr moučka", postup: "<b><u>Postup přípravy:</b></u><br>Návod na těsto je na sáčku.<br>Vytvoříme válečky silné jako palec, položíme na pečící papír na plech a NAKROJÍME (nenakrájíme), aby vznikly čtverečky.<br>Dáme do trouby a rozpečené potřeme sádlem a pečeme dál.<br>Až zčervenají ze spodu tak je obrátíme a zase potřeme sádlem a dopečeme.<br>Mák, povidla a cukr smícháme.<br>Hotové pečenky dokrájíme, vysypeme do misky a přimícháme směs a promícháme.", obrazek: "<img src='../../vecere/Pecenky.webp'>" },
    {nazev: "Pizza", ingredience: "<b><u>Ingredience:</u></b><br>- 1/4 droždí<br>- cukr<br>- sůl<br>- 1/2 hr. mléka<br>- 200 g pol. mouky<br>- 2 lžíce oleje", postup: "<b><u>Postup přípravy:</b></u><br>Připravíme si kvásek (vlažné mléko, nadrobené droždí). V misce smícháme mouku, sůl, cukr, olej, kvásek a vypracujeme v těsto. Necháme kynout v teple cca 1-2 hodiny.<br>Těsto rozválíme a vložíme a plech s pečícím papírem.<br>Přidáme vlastní ingredience (kečup, salám, sýr,...).<br>Pečeme až 10 minut.", obrazek: "<img src='../../vecere/Pizza.webp'>" },
    {nazev: "Puding", ingredience: "<b><u>Ingredience:</u></b><br>- mléko<br>- puding<br>- piškoty<br>- ovoce", postup: "<b><u>Postup přípravy:</b></u><br>Na zadní straně obalu pudinku.", obrazek: "<img src='../../vecere/Puding.webp'>" },
    {nazev: "Rybičková pomazánka", ingredience: "<b><u>Ingredience:</u></b><br>- cibule<br>- sardinky, tresčí játra, tuňák<br>- lžíce hořčice<br>- sůl<br>- pepř<br>- máslo", postup: "<b><u>Postup přípravy:</b></u><br>Pomazánka se dá ukuchtit z jakýkoliv rybiček, klidně smíchejte všechny 3 vypsaný druhy.<br>Cibuli nakrájíme najemno, přidáme rybičky, sůl, pepř, hořčici a máslo.<br>Pořádně promícháme a máme hotovo.", obrazek: "<img src='../../vecere/Rybickova-Pomazanka.webp'>" },
    {nazev: "Sendvič s pomazánkou z opečené cibulky", ingredience: "<b><u>Ingredience:</u></b><br>- 3 šalotky<br>- 1 lžíce másla<br>- 1 lžička čerstvého tymiánu<br>- 150 g žervé<br>- 3 lžíce acidofilního mléka<br>- 1 lžíce citronové šťávy<br>- sůl<br>- pepř<br>- 6 housek<br>- zelenina podle chuti – listový salát, ředkvičky, okurka, paprika", postup: "<b><u>Postup přípravy:</b></u><br>Šalotku nakrájejte a orestujte na másle do mírného zahnědnutí. <br>Krátce před dopečením přidejte tymián a nechte deset minut stranou vychladnout. <br>Žervé prošlehejte s acidofilním mlékem a dochuťte citronovou šťávou. <br>Vmíchejte opečené cibulky a podle chuti osolte a opepřete. <br>Housky rozpulte, namažte pomazánkou a naplňte krájenou zeleninou.", obrazek: "<img src='../../vecere/Sendvic-SPomazankou-ZOpecene-Cibulky.webp'>" },
    {nazev: "Slaný koláč", ingredience: "<b><u>Ingredience:</u></b><br>- listové těsto (vyválené dva pláty, velikostně dle plechu)<br>- měkký salám<br>- sýr<br>- hermelín<br>- 3 ks vajec<br>- kečup<br>- koření dle chuti (používám grilovací)", postup: "<b><u>Postup přípravy:</b></u><br>Vyváleným plátem listového těsta vyplníme dno hlubšího plechu.<br>Potřeme kečupem a zasypeme kořením.<br>Poté pokládáme vrstvu salámu, vrstvu sýru a zase salám a sýr, další vrstva vyváleného těsta, opět potřeme, zasypeme kořením a pokládáme vrstvu salámu, uvařených vajec nakrájené na plátky, sýr a zbytky salámu a sýru.<br>Na závěr nahoru položíme na plátky nakrájený hermelín a dáme zapéct do trouby zhruba na 20 minut při 180°C.", obrazek: "<img src='../../vecere/Slany-Kolac.webp'>" },
    {nazev: "Tatarák", ingredience: "<b><u>Ingredience:</u></b><br>- 30 dkg namleté hovězí svíčkové<br>- worchester<br>- 1 lžička hořčice<br>- 1 lžička oleje<br>- cibule<br>- česnek (dle chuti)<br>- 1 žloutek<br>- sůl<br>- pepř<br>- chleba", postup: "<b><u>Postup přípravy:</b></u><br>Cibuli nakrájíme najemno a všechny ingredience smícháme.<br>Podáváme s topinkama.", obrazek: "<img src='../../vecere/Tatarak.webp'>" },
    {nazev: "Tlačenka", ingredience: "<b><u>Ingredience:</u></b><br>- tlačenka<br>- cibule<br>- ocet<br>- pečivo", postup: "<b><u>Postup přípravy:</b></u><br>Plátky tlačenky si nakrájíme na kostky, zalijeme octem a přidáme nakrájenou cibuli.", obrazek: "<img src='../../vecere/Tlacenka.webp'>" },
    {nazev: "Topinky", ingredience: "<b><u>Ingredience:</u></b><br>- chleba<br>- česnek<br>- cokoliv k tomu", obrazek: "<img src='../../vecere/Topinky.webp'>" },
    {nazev: "Tortilla", ingredience: "<b><u>Ingredience:</u></b><br>- tortilly<br>- kuřecí maso<br>- ledový salát<br>- kukuřice<br>- rajče<br>- paprika<br>- cibule<br>- 3 stroužky česneku<br>- jogurt<br>- kečup", postup: "<b><u>Postup přípravy:</b></u><br>Maso nakrájíme na kostky nebo menší plátky a osmažíme.<br>Zeleninu nakrájíme na proužky, plátky, jak chceme.<br>Česnek nastrouháme do jogurtu a zakápneme worchestrem.<br>Tortilu nahřejeme v mikrovlnce, potřeme půlku kečupem a druhou česnekovým dipem.<br>Na jednu půlku doprostřed přidáme zeleninu dle chuti a maso.<br>To celé překryjeme druhou potřenou půlkou a přeložíme i strany. Nebo si to zamotejte dle svého.", obrazek: "<img src='../../vecere/Tortilla.webp'>" },
    {nazev: "Tousty", ingredience: "<b><u>Ingredience:</u></b><br>- toustový chleba<br>- měkký salám<br>- plátkový sýr<br>- niva<br>- cibule<br>- kečup<br>- hořčice<br>- zelenina (okurek, rajče)", postup: "<b><u>Postup přípravy:</b></u><br>Toustový chleba si připravíme vedle sebe po plátkách na páry.<br>Do dvojice toustu, jeden plátek potřeme kečupem a druhý hořčicí.<br>Na každý plátek toustu položíme plátek salámu a do každého páru dáme sýr, kousek nivy, nakrájenou cibuli a zeleninu dle chuti.<br>Plátky pak spárujeme a zapečeme v toustovači.", obrazek: "<img src='../../vecere/Tousty.webp'>" },
    {nazev: "Tvarohová pomazánka", ingredience: "<b><u>Ingredience:</u></b><br>- 250 g tučného měkkého tvarohu<br>- 50 g másla<br>- 1 svazek pažitky<br>- 1 lžička cukru<br>- 1 lžička hořčice<br>- sůl<br>- pepř", postup: "<b><u>Postup přípravy:</b></u><br>Tvaroh smícháme v míse spolu se změklým máslem.<br>Pažitku nakrájíme nadrobno a část si uschováme na ozdobu.<br>K tvarohu s máslem přidáme cukr, hořčici a dochutíme solí a pepřem.<br>Vše pak spolu pořádně prošleháme, dokud se všechny složky nepropojí.<br>Na konci do pomazánky vmícháme pažitku a zakryté necháme v chladničce odležet.<br>Podáváme s pečivem a zasypáváme pažitkou na ozdobu.", obrazek: "<img src='../../vecere/Tvarohova-Pomazanka.webp'>" },
    {nazev: "Utopenci", ingredience: "<b><u>Ingredience:</u></b>Buď koupený nebo domací zavařený.", obrazek: "<img src='../../vecere/Utopenci.webp'>" },
    {nazev: "Vajíčka", ingredience: "<b><u>Ingredience:</u></b><br>- vajíčka<br>- cibule<br>- koření<br>- salám", postup: "<b><u>Postup přípravy:</b></u><br>Nebráním fantazii a chuti. Míchaná vajíčka.", obrazek: "<img src='../../vecere/Vajicka.webp'>" },
    {nazev: "Vajíčková pomazánka", ingredience: "<b><u>Ingredience:</u></b><br>- 8 vajíček<br>- 200 ml majonéza<br>- 1 cibule<br>- sůl<br>- pepř<br>- lžíce hořčice", postup: "<b><u>Postup přípravy:</b></u><br>Vajíčka uvaříme a nastrouháme.<br>Cibule nakrájíme najemno a přidáme do vajíček s ostatními surovinami.<br>Můžeme přidat i zavařený okurek, najemno nakrájený.", obrazek: "<img src='../../vecere/Vajickova-Pomazanka.webp'>" },
    {nazev: "Vdolky", ingredience: "<b><u>Ingredience:</u></b><br><b>&nbsp; &nbsp;NA OZDOBU</b><br>- 1 kelímek marmeláda<br>- cukr moučka<br>- smetana ke šlehání<br>- 1 hrst strouhaný tvaroh<br>- podle potřeby polohrubá mouka<br>- olej na smažení<br><br><b>&nbsp; &nbsp;TĚSTO</b><br>- 1 ks vejce<br>- 18 g droždí<br>- 200 g vlažné mléko<br>- 63 g cukr<br>- 58 g rozpuštěné máslo<br>- 1 lžička sůl<br>- 1 ks citron<br>- 500 g polohrubá mouka", postup: "<b><u>Postup přípravy:</b></u><br>Připravíme si kvásek, který pak vlijeme do polohrubé mouky. Zamícháme na řídké těsto a necháme na teplém místě vykynout. Do zbytku prosáté mouky přidáme vejce, cukr, nastrouhanou citronovou kůru, sůl, rozpuštěný vlažný tuk a vlažné mléko, které nám zůstalo. Nakonec přidáme i vykynutý kvásek a promíchané těsto necháme dobře vykynout.<br>Těsto na vdolky vyválíme na hrubší plát (asi 15 mm) a kulatou formičkou vypichujeme vdolky (asi 5ks na 1 porci). Vykrájeno vdolky poklademe na pomoučenou pracovní desku a necháme ji znovu nakynout. Do nakynutých vdolků uděláme ručkou hrubší vařečky jamku.<br>Připravené vdolky házíme do rozehřátého oleje vymáčknutou stranou, po osmažení jedné strany je obrátíme a opět smažíme, až jsou zlatavé. <br>Usmažené vdolky natřeme marmeládou, posypeme strouhaným tvarohem a na tvaroh stříkneme zdobícím sáčkem trochu šlehačky, kterou jsme si vyšlehali a osladili moučkovým cukrem.", obrazek: "<img src='../../vecere/Vdolky.webp'>" },
    {nazev: "Zapečená tortilla s kuřecím masem", ingredience: "<b><u>Ingredience:</u></b><br>- 4 velké tortilly (ideálně celozrnné) <br>- kuřecí prsní řízky <br>- 2 menší červené cibule <br>- rajčata <br>- okurka <br>- kukuřice <br>- ledový salát <br>- česnek <br>- balkánský sýr <br>- bílý jogurt <br>- sůl <br>- mletý pepř", postup: "<b><u>Postup přípravy:</b></u><br>Začneme s masem. Potřeme ho olivovým olejem, posypeme solí, pepřem, provensálskýma bylinkama nebo dle vlastní chuti a osmažíme z obou stran dozlatova.<br>Česnek prolisujeme (nastrouháme) do jogurtu a máme vlastní dip. Nakrájíme si rajčata, cibuli na plátky (kolečka), balkánský sýr na plátky, okurek (prostě zeleninu, kterou chceme přidat). Tortillu si nejdřív nahřejeme (stačí mikrovlnka) aby změkla a dobře se rolovala.<br>Od půlky ke kraji, nařízneme. Teď je jen na nás, jaký postup se nám bude líbit víc.  První čtvrtku potřeme dipem, dáme ledový salát a balkán.<br>Na druhou čtvrtku poskládáme zeleninu dle výběru. Třetí čtvrtku zaskládáme masem a na poslední čtvrtku dáme jen dip, aby to drželo pohromadě.<br>Teď to všechno poskládáme do celku. <br>Takže první čtvrtku přelomím na druhou, tu pak na třetí a čtvrtou, až nám vznikne jeden velký trojúhelník.<br>Tohle celé dáme zapéct do grilu, ale postačí i toustovač.", obrazek: "<img src='../../vecere/Zapecena-tortilla.webp'>" },
    {nazev: "Zapečené brambory se zakysanou smetanou", ingredience: "<b><u>Ingredience:</u></b><br>- větší brambory<br>- sůl<br>- pepř<br>- zakysaná smetana<br>- česnek<br>- cibule (jarní cibulka)<br>- olivový olej<br>- strouhaný sýr<br>- salám (šunka, slanina,...)", postup: "<b><u>Postup přípravy:</b></u><br>Brambory nakrájíme na tenká kolečka a poklademe je na papírem vyložený plech na pečení.<br>Každý kousek osolíme, opepříme a pokapeme olivovým olejem.<br>Dáme zapéct do předem vyhřáté trouby. Pečeme asi 15 minut.<br>Pak je potřeme zakysanou smetanou smíchanou s cibulkou a česnekem, posypeme strouhaným sýrem, nakrájenou šunkou nebo slaninou.<br>Můžete použít i jiné suroviny, které máte rádi, například kukuřici, salám, houby,...<br>Dáme ještě zapéct na 5 minut.", obrazek: "<img src='../../vecere/Zapecene-Brambory-Se-Zakysanou-Smetanou.webp'>" },
    {nazev: "Zapečený pita chléb s masem", ingredience: "<b><u>Ingredience:</u></b><br>- pita chléb <br>- kuřecí prsní řízky <br>- cibule <br>- rajčata <br>- ledový salát <br>- česnek <br>- balkánský sýr <br>- bílý jogurt <br>- sůl <br>- mletý pepř", postup: "<b><u>Postup přípravy:</b></u><br>Začneme s masem. Potřeme ho olivovým olejem, posypeme solí, pepřem, provensálskýma bylinkami nebo dle vlastní chuti a osmažíme z obou stran dozlatova.<br>Česnek prolisujeme (nastrouháme) do jogurtu a máme vlastní dip. Nakrájíme si rajčata, cibuli na plátky (kolečka), balkánský sýr na plátky, okurek (prostě zeleninu, kterou chceme přidat). <br>Chleba rozřízneme tak, aby nám vznikla kapsa, takže chleba nedořízneme až do konce.<br>Vyplníme ho našimi surovinami a dáme zapéct do grilu, ale postačí i toustovač.", obrazek: "<img src='../../vecere/Zapeceny-pita-chleb-s-masem.webp'>" },
    {nazev: "Zapečený rohlík se salámem a sýrem", ingredience: "<b><u>Ingredience:</u></b><br>- rohlíky, housky<br>- 30 dkg točený salám<br>- sýr na strouhání<br>- 1 žloutek<br>- půl<br>- pepř<br>- majoránka", postup: "<b><u>Postup přípravy:</b></u><br>Sýr a salám nastrouháme nahrubo. Přidáme žloutek, koření a pořádně promícháme.<br>Bílé pečivo rozřízneme napůl a pokladem na to připravenou směs.<br>Poskládáme to na plech podložený pečícím papírem a zapečeme na 10 minut 180°C.<br>Zapečený rohlík můžeme ještě potřít kečupem.", obrazek: "<img src='../../vecere/Zapeceny-Rohlik-Se-Salamem-ASyrem.webp'>" },
    {nazev: "Zavináče", ingredience: "<b><u>Ingredience:</u></b>stačí koupit :)", obrazek: "<img src='../../vecere/Zavinace.webp'>" },
    {nazev: "Zbytky z oběda", ingredience: "<b><u>Ingredience:</u></b>:)", obrazek: "<img src='../../vecere/Zbytky-ZObeda.webp'>" },













];