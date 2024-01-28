
function vypisJidloARecept() {
    document.getElementById("hodnoty").style.display = "none";       // skryje obsah tabulky s receptem
    document.getElementById("reset").style.display = "none";       // skryje tlačítko - reset jídla
    // document.getElementById("ukaz-rcp").style.display = "inherit";    // aktivuje skryté tlačítko - ukaž recept
    document.getElementById("hodnoty").style.display = "inherit";    // aktivuje skrytý obsah tabulky s receptem
    pocet_v_seznamu = lowcarb_obed.length;
    if (lowcarb_obed.length == 0) {
        document.getElementById("nazev").innerHTML = "už tady nic dalšího není 😮";
        document.getElementById("obrazek").innerHTML = "<img src='../../0pics/prazdny-talir.webp'>";
        // document.getElementById("ukaz-rcp").style.display = "none";       // skryje tlačítko - ukaž recept
        document.getElementById("reset").style.display = "inherit";    // aktivuje skryté tlačítko - reset jídla
        document.getElementById("hodnoty").style.display = "none";       // skryje obsah tabulky s receptem
        document.getElementById("generuj").style.display = "none";       // skryje obsah tabulky s receptem

    } else {
        // vybere random číslo podle počtu jídel v seznamu a vypíše je
        vypis = Math.floor(Math.random() * pocet_v_seznamu);
        document.getElementById("nazev").innerHTML = lowcarb_obed[vypis].nazev;
        document.getElementById("postup").innerHTML = lowcarb_obed[vypis].postup;
        document.getElementById("ingredience").innerHTML = lowcarb_obed[vypis].ingredience;
        document.getElementById("obrazek").innerHTML = lowcarb_obed[vypis].obrazek;
        document.getElementById("energie").innerHTML = lowcarb_obed[vypis].energie;
        document.getElementById("sacharidy").innerHTML = lowcarb_obed[vypis].sacharidy;
        document.getElementById("tuky").innerHTML = lowcarb_obed[vypis].tuky;
        document.getElementById("bilkoviny").innerHTML = lowcarb_obed[vypis].bilkoviny;

        lowcarb_obed = lowcarb_obed.splice(vypis, 1);
    }
}


  /* NAČTENÍ JÍDEL DO SIDEBARU */
function nactiJidla() {
    // document.getElementById("sidenav").style.width = "250px";
    for (let i = 0; i < lowcarb_obed.length; i++) {
        const x = document.createElement("li");
        x.setAttribute("id", i);
        var somePlace = document.getElementById("myMenu");
        somePlace.appendChild(x);
        const y = document.createElement("a");
        y.setAttribute("id", i);
        y.innerText = lowcarb_obed[i].nazev;
        var somePlace2 = document.getElementById(i);
        somePlace2.appendChild(y);
    } 
}
    
  /* SIDENAV - NAČÍTÁNÍ JÍDEL Z LISTU */
document.onclick = function(e){
    var x = e.target.id
    var myValue = lowcarb_obed[x]["nazev"]
    document.getElementById("nazev").innerHTML = myValue;
    var myValue = lowcarb_obed[x]["ingredience"]
    document.getElementById("ingredience").innerHTML = myValue;
    var myValue = lowcarb_obed[x]["postup"]
    document.getElementById("postup").innerHTML = myValue;
    var myValue = lowcarb_obed[x]["obrazek"]
    document.getElementById("obrazek").innerHTML = myValue;
    document.getElementById("hodnoty").style.display = "inherit";    // aktivuje skrytý obsah tabulky s receptem
}

  
const lowcarb_obed = [
    {nazev: "Cuketový salát se sušenými rajčaty a šunkou", ingredience: "<b><u>Ingredience:</u></b><br>- 800 g cukety<br>- 1 lžička + 4 lžíce olivového oleje<br>- 60 g sušené šunky<br>- 30 g směsi oblíbených semínek a ořechů (dýňová, slunečnicová, piniová aj.)<br>- 2 lžíce vinného octa<br>- 40 g okapaných sušených rajčat<br>- 2 stroužky česneku<br>- 1 velká hrst oblíbených bylinek (petrželka, bazalka, máta aj.)<br>- sůl<br>- pepř", postup: "<b><u>Postup přípravy:</b></u><br>Omyté neoloupané cukety nakrájejte po délce na čtvrtky. Vyřízněte z nich vodnatý střed se semínky, překrojte po délce na půl a pak na 4 díly (špalíčky).<br>Smíchejte je se lžičkou olivového oleje a na plechu vyloženém pečicím papírem je dejte péct do trouby vyhřáté na maximum.<br>Do trouby v další pečicí nádobě přidejte také sušenou šunku a semínka.<br>Cukety pečte, dokud nezačnou od krajů zlátnout, ale zároveň zůstanou trošku křupavé. To podle výkonu trouby zabere cca  10 minut. Semínkům bude stačit tak  6-8 minut. Sušená šunka se musí vypéct vyloženě dokřupava (záleží na druhu,  10-12 minut).<br>Smíchejte 4 lžíce olivového oleje, vinný ocet, nadrobno nakrájená sušená rajčata a rozdrcený česnek. Zálivku osolte (opatrně, šunka je dost slaná) a opepřete.<br>Upečenou a ještě teplou cuketu promíchejte se zálivkou, upraženými semínky a rozdrobenou upečenou šunkou. Přidejte i nahrubo nasekané bylinky. Hned podávejte.<br>Cuketový salát se skvěle hodí ke grilovanému masu, bude ale chutnat i samotný jako hlavní chod.", obrazek: "<img src='../../lowcarb/Cuketovy-salat.webp'>", energie:"320 kcal / 1 339 kJ", sacharidy:"10 g", tuky:"26 g", bilkoviny:"11 g"},
    {nazev: "Dýňové rizoto se žampióny", ingredience: "<b><u>Ingredience:</u></b><br>- 500 g máslové dýně nebo hokaido<br>- 40 g olivového oleje<br>- 20 g másla<br>- 2 stroužky česneku<br>- 50 ml suchého bílého vína<br>- 100 g smetany na šlehání<br>- 60 g strouhaného parmazánu<br>- vývar podle potřeby<br>- 40 g šalotky<br>- 200 g čerstvých žampiónů (ideálně krémových)<br>- oblíbené bylinky (petrželka, bazalka, tymián atd.)<br>- sůl<br>- pepř", postup: "<b><u>Postup přípravy:</b></u><br>Máslovou dýni si oloupejte, hokaido pouze omyjte. Dýni nakrájejte na kostky a ty pak rozdrťte na zrníčka velikosti rýže v elektrickém sekáčku (ve stolním mixéru, ani tím ponorným to nejde, vznikla by vám kaše). Na větší pánvi si rozehřejte polovinu olivového oleje a na něm na střední teplotu orestujte rozdrcený česnek. Stačí pár desítek vteřin. Často ho promíchejte, ať se nespálí a nezhořkne. Jakmile začne česnek vonět, přidejte rozdrcenou dýni, sůl a trošku pepře. Ze začátku dýni ničím nepodlévejte, pustí dost vláhy sama. Jakmile dýně začne měknout, přilijte k ní bílé víno, mírně zvyšte teplotu plotýnky a za stálého míchání nechte víno vyvařit. Do pánve přilijte smetanu a nasypte 50 g parmazánu. Vše nechte krásně spojit. Pokud vám risotto vyjde příliš hutné a málo krémové, přilijte do něj podle potřeby trošku vývaru. Ve stejné době, kdy připravujete dýni, si orestujte i žampióny. Na menší pánvi si nechte rozpustit zbytek olivového oleje a máslo. Na nich pak na střední teplotu nechte zesklovatět nadrobno nakrájenou šalotku. Jakmile šalotka zprůhlední a změkne, přidejte k ní na silnější plátky nakrájené žampióny a trošku soli. Nepodlévejte! Pokud místo petrželky nebo bazalky použijete tymián, přidejte ho do pánve společně s houbami. Za občasného promíchání nechte žampióny pustit šťávu a tu všechnu vyvařte. Hotové dýňové rizoto podávejte horké, doplněné houbovou směsí a posypané zbytkem parmazánu. Navrch nasypte čerstvou petrželku či bazalku nebo i trošku sušených bylinek.", obrazek: "<img src='../../lowcarb/Dynove-rizoto-se-zampiony.webp'>", energie:"689 kcal / 2 883 kJ", sacharidy:"30 g", tuky:"52 g", bilkoviny:"16 g"},
    {nazev: "Gratinovaný květák", ingredience: "<b><u>Ingredience:</u></b><br>- 700 g květáku<br>- 200 ml smetany ke šlehání<br>- špetka muškátového květu<br>- 150 g čedaru<br>- 60 g slaniny nebo sušené šunky (neplatí pro vegetariánskou verzi)<br>- sůl<br>- pepř<br>- čerstvé bylinky", postup: "<b><u>Postup přípravy:</b></u><br>Květák rozeberte na malé růžičky. Vložte je do zapékací nádoby a zalijte smetanou rozmíchanou se solí, pepřem, muškátovým květem a 75 g nastrouhaného čedaru. Zakryjeme a dáme péct do trouby vyhřáté na 180 °C. Po 45 minutách pekáč odkryjeme, slijeme vypečenou smetanu a tu rozmixujeme s pár upečenými růžičkami květáku do husté hladké omáčky. Omáčku nalijeme zpátky do pekáče, navrch nasypeme zbytek nastrouhaného čedaru a na malé kostičky nakrájenou slaninu. Zapékací misku vrátíme do trouby a pečeme již odkryté dalších 15minut. Podáváme ozdobené čerstvými bylinkami.", obrazek: "<img src='../../lowcarb/Gratinovany-kvetak.webp'>", energie:"810 kcal / 3 389 kJ", sacharidy:"13 g", tuky:"68 g", bilkoviny:"36 g"},
    {nazev: "Lososovo-cuketové pečené nugety", ingredience: "<b><u>Ingredience:</u></b><br>- 500 g lososa (bez kostí a kůže) <br>- 250 g cukety<br>- 25 g šalotky<br>- 50 g mandlové mouky<br>- 1 lžička drceného římského kmínu<br>- 1,5 lžičky uzené papriky<br>- sůl<br>- pepř", postup: "<b><u>Postup přípravy:</b></u><br>Polovinu lososa nakrájejte na větší kostky a ty pak rozmixujte v sekáčku. Stačí opravdu jen pár vteřin, ať z toho není úplně řídká kaše.<br>Druhou půlku lososa nakrájejte na drobounké kostičky (max 5 mm).<br>Omytou neoloupanou cuketu nastrouhejte najemno. Osolte ji, promíchejte a nechte chvíli odpočinout. <br>Pak z ní přes sítko nebo v bavlněné utěrce vymačkejte co nejvíce tekutiny. Dejte si opravdu záležet, ať nugety nejsou moc vodovaté.<br>Šalotku nakrájejte na drobounké kostičky.<br>Lososa (rozmixovaného i nakrájeného), cuketu a šalotku smíchejte dohromady, směs osolte a opepřete. Můžete přidat i nějaké bylinky. <br>Skvěle se bude hodit petrželka, pažitka, koriandr, ale třeba i kopr.<br>Z těsta udělejte koulením v dlaních 20 kuliček a ty obalte ve směsi z mandlové mouky, koření a špetky soli.<br>Nugetky vyskládejte na plech vyložený pečícím papírem a dejte je péct na  20 minut do trouby vyhřáté na 200 °C.<br>Hotové lososové nugety podávajte například se zeleninovým salátem nebo pyré či pečenou zeleninou a k tomu si připravte nějaký dobrý dip - ochucenou majonézu, rozmačkané avokádo, ochucenou zakysanou smetanu atd.", obrazek: "<img src='../../lowcarb/Lososovo-cuketove-pecene-nugety.webp'>", energie:"470 kcal / 1 966 kJ", sacharidy:"5 g", tuky:"31 g", bilkoviny:"39 g"},
    {nazev: "Cheeseburger salát", ingredience: "<b><u>Ingredience:</u></b><br>- 200 g mletého hovězího masa<br>- 80 g kvalitní slaniny<br>- 100 g směsi listových salátů<br>- 200 g rajčat<br>- 100 g avokáda<br>- 40 g červené cibule, případně šalotky<br>- 40 g majonézy, nejlépe domácí<br>- 1 stroužek česneku<br>- 40 g čedaru nebo jiného tvrdého sýru <br>- sůl<br>- pepř", postup: "<b><u>Postup přípravy:</b></u><br>Mleté maso smíchejte se solí a pepřem. Můžete přidat i trošku oblíbeného koření. <br>Skvěle se bude hodit třeba chilli, nebo uzená paprika a římský kmín.<br>Ze směsi vytvořte malé kuličky (cca 7 na porci).<br>Na suchou pánev dejte opéct plátky slaniny dokřupava.<br>Vyndejte je a na vypečeném tuku ze všech stran zprudka opečte připravené masové kuličky.<br>Listový salát smíchejte s nakrájenými rajčaty, avokádem a cibulí nebo šalotkou.<br>Navrch přidejte opečené masové kuličky, nalámejte křupavou slaninu a nasypte nastrouhaný nebo nadrobno nakrájený sýr (v paleo či Whole30 verzi vynechte).<br>Salát doplňte majonézou smíchanou s rozdrceným česnekem. Hned podávejte.", obrazek: "<img src='../../lowcarb/Cheeseburger-salat.webp'>", energie:"720 kcal / 3030 kJ", sacharidy:"8 g", tuky:"57 g", bilkoviny:"40 g"},
    {nazev: "Španělské kuřecí paličky", ingredience: "<b><u>Ingredience:</u></b><br>- 400 g papriky<br>- 100 g červené cibule<br>- 300 g máslové dýně<br>- 100 g kvalitní chorizo klobásy<br>- 100 g černých oliv bez pecky<br>- 5 stroužků česneku<br>- 400 g konzervovaných loupaných rajčat<br>- 1 plná lžička uzené papriky<br>- 1 plná lžička oregána<br>- 2 lžíce olivového oleje<br>- 800 g kuřecí paliček nebo stehen<br>- sůl<br>- pepř", postup: "<b><u>Postup přípravy:</b></u><br>Očištěné papriky nakrájejte na silnější proužky, oloupanou cibuli na tenké klínky, dýni zbavenou semínek a slupky na kostky.<br>Zeleninu nasypte do vhodného pekáčku a smíchejte s kolečky chorizo klobásy, olivami, rozdrceným česnekem a loupanými rajčaty.<br>Směs okořeňte paprikou, oreganem, solí a pepřem.<br>Přidejte olivový olej a vše dobře promíchejte.<br>Navrch rozložte osolené a opepřené kuřecí paličky.<br>Nezakryté vložte do trouby vyhřáté na 190 °C a bez podlévání pečte celkem 80-90 minut.<br>Přibližně po 50 minutách zeleninovou směs promíchejte a kuřecí paličky navrchu otočte.<br>Upečené kuře podávejte se zeleninovou směsí. Budou spolu chutnat i takto samotné, ale lze je doplnit například oblíbeným pečivem nebo květákovou rýží.", obrazek: "<img src='../../lowcarb/Spanelske-kureci-palicky.webp'>", energie:"640 kcal / 2660 kJ", sacharidy:"22 g", tuky:"38 g", bilkoviny:"39 g"},
  
  
  
  
];
  