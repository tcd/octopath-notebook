let yx = L.latLng;

let xy = (x, y) => {
    // When doing xy([x, y]);
    if (L.Util.isArray(x)) {
        return yx(x[1], x[0]);
    }
    // When doing xy(x, y);
    return yx(y, x);
};

// Character Start Positions

let alfynPos    = xy(912, 705);
let cyrusPos    = xy(1430, 1020);
let haanitPos   = xy(1060, 1160);
let olbericPos  = xy(1610, 590);
let opheliaPos  = xy(1290, 1110);
let primrosePos = xy(1315, 615);
let therionPos  = xy(850, 850);
let tressaPos   = xy(1640, 800);

let characterGroup = L.layerGroup([alfyn, cyrus, haanit, olberic, ophelia, primrose, therion, tressa]);

// Caves

let caveOfOriginPos      = xy(1380, 1120);
let subterraneanStudyPos = xy(1470, 1040);
let undertowCovePos      = xy(1560, 930);
let ebonyGrottoPos       = xy(1950, 1410);
let mawOfTheIceDragonPos = xy(1270, 1510);
let hoarfrostGrottoPos   = xy(1152, 1310);
let forgottenGrottoPos   = xy(820, 1250);
let carrionCavesPos      = xy(780, 820);
let cavesOfRhiyoPos      = xy(985, 710);
let derelictMinePos      = xy(520, 743);
let refugeRuinsPos       = xy(420, 370);
let twinFallsPos         = xy(1038, 517);
let farshorePos          = xy(955, 368);
let whistlingCavernsPos  = xy(1418, 560);
let blackMarketPos       = xy(1200, 310);
let lizardmansDenPos     = xy(1205, 430);
let quicksandCavesPos    = xy(1433, 420);
let cavesOfMaiyaPos      = xy(1560, 790);
let brigandsDenPos       = xy(1610, 650);
let untouchedSanctumPos  = xy(1740, 695);
let captainsBainPos      = xy(2190, 830);
let lochOfTheLostKingPos = xy(2333, 990);
let seasideGrottoPos     = xy(2394, 670);
let cavesOfAzurePos      = xy(2593, 733);

let caveGroup = L.layerGroup([undertowCove, subterraneanStudy, caveOfOrigin, ebonyGrotto, mawOfTheIceDragon, hoarfrostGrotto, forgottenGrotto, carrionCaves, cavesOfRhiyo, derelictMine, refugeRuins, twinFalls, farshore, whistlingCaverns, blackMarket, lizardmansDen, quicksandCaves, cavesOfMaiya, brigandsDen, untouchedSanctum, captainsBain, lochOfTheLostKing, seasideGrotto, cavesOfAzure]);

// Forests

let theWhistlewoodPos    = xy(1430, 1100);
let forestOfPurgationPos = xy(1660, 1475);
let TheWhitewoodPos      = xy(1355, 1480);
let forestOfNoReturnPos  = xy(895, 1408);
let pathOfBeastsPos      = xy(870, 1160);
let theWhisperwoodPos    = xy(974, 1114);
let forestOfRubehPos     = xy(215, 805);
let theMurkwoodPos       = xy(650, 585);
let riviraWoodsPos       = xy(677, 454);
let theSpectrewoodPos    = xy(2140, 550);

let forestGroup = L.layerGroup([theWhistlewood, forestOfPurgation, TheWhitewood, forestOfNoReturn, pathOfBeasts, theWhisperwood, forestOfRubeh, theMurkwood, riviraWoods, theSpectrewood]);

// Ruins

let theHollowThronePos   = xy(1480, 1235);
let lornCathedralPos     = xy(1230, 1680);
let ruinsOfEldPos        = xy(780, 1585);
let dragonsongFanePos    = xy(340, 630);
let grimsandRuinPos      = xy(1130, 250);
let marsalimCatacombsPos = xy(1380, 185);
let tombOfKingsPos       = xy(1620, 370);
let everholdTunnelsPos   = xy(1660, 200);

let ruinsGroup = L.layerGroup([theHollowThrone, lornCathedral, ruinsOfEld, dragonsongFane, grimsandRuin, marsalimCatacombs, tombOfKings, everholdTunnels]);

// Catacombs

let tombOfTheImperatorPos = xy(1212, 1445);
let molderingRuinsPos     = xy(875, 1465);
let theSewersPos          = xy(500, 865);
let hiddenPathPos         = xy(430, 400);
let sunshadeCatacombsPos  = xy(1220, 590);
let grandportSewersPos    = xy(2440, 1060);

let catacombsGroup = L.layerGroup([tombOfTheImperator, molderingRuins, theSewers, hiddenPath, sunshadeCatacombs, grandportSewers]);

// Mansions

let orlicksMansePos    = xy(1640, 1293);
let obsidianMansePos   = xy(1723, 1260);
let obsidianParlorPos  = xy(1475, 1455);
let ravusManorPos      = xy(900, 880);
let morlocksMansePos   = xy(360, 910);
let lordsMansePos      = xy(458, 454);
let amphitheatrePos    = xy(1737, 296);
let yvonsBirthplacePos = xy(1966, 575);

let mansionsGroup = L.layerGroup([orlicksManse, obsidianManse, obsidianParlor, ravusManor, morlocksManse, lordsManse, amphitheatre, yvonsBirthplace]);

// Zones (Group by area)

//Rippletide

let eastRippletideCoastPos = xy(1703, 772);
let northRippletideCoastPos = xy(1533, 902);
let pathToCavesOfMaiyaPos = xy(1610, 786);

// Atlasdam

let northAtlasdamFlatsPos = xy(1467, 1117);
let eastAtlasdamFlatsPos = xy(1500, 993);

// Flamesgrace

let northernFlamesgraceWildsPos = xy(1335, 1255);
let westernFlamesgraceWildsPos = xy(1120, 1295);
let pathToTheCaveOfOriginPos = xy(1365, 1105);

// Noblecourt

let westernNoblecourtFlatsPos = xy(1515, 1195);

// Riverford

let northRiverfordTraversePos = xy(339, 415);

// Wispermill

let westernWispermillFlatsPos = xy(1692, 1433);

// S'warkii

let northSwarkiiTrailPos = xy(960, 1220);
let westSwarkiiTrailPos = xy(868, 1177);
let pathToTheWhisperwoodPos = xy(1020, 1110);

// Victor's Hollow

let eastVictorsHollowTrailPos = xy(1036, 1381);
let eastDuskbarrowTrailPos = xy(916, 1490);
let pathToTheForgottenGrottoPos = xy(878, 1260);

// Stillsnow

let westernStillsnowWildsPos = xy(1190, 1420);
let southernNorthreachWildsPos = xy(1310, 1550);
let roadToTheObsidianParlorPos = xy(1390, 1385);
let secretPathObsidianParlorPos = xy(1433, 1410);
let trailToTheWhitewoodPos = xy(1310, 1430);

// Bolderfall

let northBolderfallPassPos = xy(748, 985);
let southBolderfallPassPos = xy(740, 813);
let southQuarrycrestPassPos = xy(525, 715);
let roadToMorlocksMansePos = xy(362, 880);
let southOrwellPassPos = xy(362, 602);
let trailToTheForestOfRubehPos = xy(240, 765);

// Clearbrook

let westClearbrookTraversePos = xy(768, 671);
let pathOfRhiyoPos = xy(970, 704);
let southClearbrookTraversePos = xy(1030, 493);
let eastSaintbridgeTraversePos = xy(919, 421);
let murkwoodTrailPos = xy(614, 530);

// Sunshade

let southernSunshadeSandsPos = xy(1218, 540);
let easternSunshadeSandsPos = xy(1392, 520);
let northernWellspringSandsPos = xy(1384, 426);
let easternWellspringSandsPos = xy(1385, 322);
let easternMarsalimSandsPos = xy(1343, 187);
let roadToBlackMarketPos = xy(1230, 329);
let roadToLizardmansDenPos = xy(1230, 400);
let grimsandRoadPos = xy(1140, 210);

// Cobbleston

let southCobblestonGapPos = xy(1675, 515);
let northCobblestonGapPos = xy(1747, 655);
let northStonegardPassPos = xy(1810, 470);
let westStonegardPassPos  = xy(1623, 415);
let westEverholdPassPos   = xy(1700, 233);

// Coastlands

let moonstruckCoastPos      = xy(2065, 725);
let roadToTheSpectrewoodPos = xy(2088, 527);
let westGoldshireCoastPos   = xy(2200, 810);
let westGrandportCoastPos   = xy(2335, 960);
let roadToCavesOfAzurePos   = xy(2520, 729);
let roadToSeasideGrottoPos  = xy(2429, 690);

let zoneGroup = L.layerGroup([westernWispermillFlats, northRiverfordTraverse, northRippletideCoast, eastRippletideCoast, pathToCavesOfMaiya, westernNoblecourtFlats, northAtlasdamFlats, eastAtlasdamFlats, northernFlamesgraceWilds, westernFlamesgraceWilds, northSwarkiiTrail, westSwarkiiTrail, pathToTheCaveOfOrigin, eastVictorsHollowTrail, pathToTheWhisperwood, eastDuskbarrowTrail, westernStillsnowWilds, southernNorthreachWilds, roadToTheObsidianParlor, northBolderfallPass, southBolderfallPass, southQuarrycrestPass, westClearbrookTraverse, roadToMorlocksManse, southOrwellPass, pathOfRhiyo, southClearbrookTraverse, eastSaintbridgeTraverse, southernSunshadeSands, easternSunshadeSands, northernWellspringSands, easternWellspringSands, easternMarsalimSands, roadToBlackMarket, roadToLizardmansDen, southCobblestonGap, northCobblestonGap, northStonegardPass, westStonegardPass, westEverholdPass, moonstruckCoast, roadToTheSpectrewood, westGoldshireCoast, westGrandportCoast, roadToCavesOfAzure, roadToSeasideGrotto, trailToTheWhitewood, secretPathObsidianParlor, pathToTheForgottenGrotto, murkwoodTrail, trailToTheForestOfRubeh, grimsandRoad]);

// Cities

let atlasdamPos      = xy(1430, 1020);
let bolderfallPos    = xy(850, 850);
let clearbrookPos    = xy(915, 705);
let cobblestonePos   = xy(1610, 570);
let duskbarrowPos    = xy(760, 1535);
let everholdPos      = xy(1730, 260);
let flamesgracePos   = xy(1290, 1110);
let goldshorePos     = xy(2430, 760);
let grandportPos     = xy(2500, 1000);
let marsalimPos      = xy(1280, 235);
let noblecourtPos    = xy(1655, 1264);
let northreachPos    = xy(1200, 1625);
let orewellPos       = xy(270, 735);
let quarrycrestPos   = xy(430, 840);
let rippletidePos    = xy(1640, 800);
let riverfordPos     = xy(400, 430);
let saintsbridgePos  = xy(740, 540);
let stillsnowPos     = xy(1325, 1360);
let stoneguardPos    = xy(1965, 550);
let sunshadePos      = xy(1315, 615);
let swarkiiPos       = xy(1060, 1160);
let victorshollowPos = xy(955, 1380);
let wellspringPos    = xy(1285, 360);
let wispermillPos    = xy(1880, 1460);

let cityGroup = L.layerGroup([duskbarrow, victorshollow, northreach, stillsnow, wispermill, noblecourt, swarkii, flamesgrace, atlasdam, rippletide, bolderfall, clearbrook, sunshade, cobblestone, quarrycrest, orewell, riverford, saintsbridge, wellspring, marsalim, stoneguard, everhold, grandport, goldshore]);

// Shrines

let apothecaryShrinePos = xy(957, 417);
let clericShrinePos     = xy(1213, 1392);
let dancerShrinePos     = xy(1350, 445);
let hunterShrinePos     = xy(1059, 1398);
let scholarShrinePos    = xy(1542, 1190);
let merchantShrinePos   = xy(2027, 730);
let thiefShrinePos      = xy(450, 770);
let warriorShrinePos    = xy(1756, 505);
let runebladeShrinePos  = xy(1743, 223);
let sorcerorShrinePos   = xy(936, 1515);
let starseerShrinePos   = xy(1790, 1470);
let warbringerShrinePos = xy(270, 400);

let shrineGroup = L.layerGroup([clericShrine, scholarShrine, merchantShrine, hunterShrine, warriorShrine, thiefShrine, apothecaryShrine, dancerShrine, sorcerorShrine, starseerShrine, runebladeShrine, warbringerShrine]);
