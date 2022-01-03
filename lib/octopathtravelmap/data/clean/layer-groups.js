// Character Start Positions
let characterGroup = L.layerGroup([alfyn, cyrus, haanit, olberic, ophelia, primrose, therion, tressa]);

// Caves
let caveGroup = L.layerGroup([undertowCove, subterraneanStudy, caveOfOrigin, ebonyGrotto, mawOfTheIceDragon, hoarfrostGrotto, forgottenGrotto, carrionCaves, cavesOfRhiyo, derelictMine, refugeRuins, twinFalls, farshore, whistlingCaverns, blackMarket, lizardmansDen, quicksandCaves, cavesOfMaiya, brigandsDen, untouchedSanctum, captainsBain, lochOfTheLostKing, seasideGrotto, cavesOfAzure]);

// Forests
let forestGroup = L.layerGroup([theWhistlewood, forestOfPurgation, TheWhitewood, forestOfNoReturn, pathOfBeasts, theWhisperwood, forestOfRubeh, theMurkwood, riviraWoods, theSpectrewood]);

// Ruins
let ruinsGroup = L.layerGroup([theHollowThrone, lornCathedral, ruinsOfEld, dragonsongFane, grimsandRuin, marsalimCatacombs, tombOfKings, everholdTunnels]);

// Catacombs
let catacombsGroup = L.layerGroup([tombOfTheImperator, molderingRuins, theSewers, hiddenPath, sunshadeCatacombs, grandportSewers]);

// Mansions
let mansionsGroup = L.layerGroup([orlicksManse, obsidianManse, obsidianParlor, ravusManor, morlocksManse, lordsManse, amphitheatre, yvonsBirthplace]);
// Coastlands
let zoneGroup = L.layerGroup([westernWispermillFlats, northRiverfordTraverse, northRippletideCoast, eastRippletideCoast, pathToCavesOfMaiya, westernNoblecourtFlats, northAtlasdamFlats, eastAtlasdamFlats, northernFlamesgraceWilds, westernFlamesgraceWilds, northSwarkiiTrail, westSwarkiiTrail, pathToTheCaveOfOrigin, eastVictorsHollowTrail, pathToTheWhisperwood, eastDuskbarrowTrail, westernStillsnowWilds, southernNorthreachWilds, roadToTheObsidianParlor, northBolderfallPass, southBolderfallPass, southQuarrycrestPass, westClearbrookTraverse, roadToMorlocksManse, southOrwellPass, pathOfRhiyo, southClearbrookTraverse, eastSaintbridgeTraverse, southernSunshadeSands, easternSunshadeSands, northernWellspringSands, easternWellspringSands, easternMarsalimSands, roadToBlackMarket, roadToLizardmansDen, southCobblestonGap, northCobblestonGap, northStonegardPass, westStonegardPass, westEverholdPass, moonstruckCoast, roadToTheSpectrewood, westGoldshireCoast, westGrandportCoast, roadToCavesOfAzure, roadToSeasideGrotto, trailToTheWhitewood, secretPathObsidianParlor, pathToTheForgottenGrotto, murkwoodTrail, trailToTheForestOfRubeh, grimsandRoad]);

// Cities
let cityGroup = L.layerGroup([duskbarrow, victorshollow, northreach, stillsnow, wispermill, noblecourt, swarkii, flamesgrace, atlasdam, rippletide, bolderfall, clearbrook, sunshade, cobblestone, quarrycrest, orewell, riverford, saintsbridge, wellspring, marsalim, stoneguard, everhold, grandport, goldshore]);

// Shrines
let shrineGroup = L.layerGroup([clericShrine, scholarShrine, merchantShrine, hunterShrine, warriorShrine, thiefShrine, apothecaryShrine, dancerShrine, sorcerorShrine, starseerShrine, runebladeShrine, warbringerShrine]);

// Chapters

// Alfyn
let alfynChapters = L.layerGroup([cavesOfRhiyoChapter1, cavesOfAzureChapter2, riviraWoodsChapter3, forestOfRubehChapter4]);

// Cyrus
let cyrusChapters = L.layerGroup([subterraneanStudyChapter1, theSewersChapter2, yvonsBirthplaceChapter3, ruinsOfEldChapter4]);

// H'aanit
let haanitChapters = L.layerGroup([theWhisperwoodChapter1, theSpectrewoodChapter2, TheWhitewoodChapter3, grimsandRuinChapter4]);

// Olberic
let olbericChapters = L.layerGroup([brigandsDenChapter1, victorshollowChapter2, lizardmansDenChapter3, lordsManseChapter4, hiddenPathChapter4]);

// Ophilia
let ophiliaChapters = L.layerGroup([caveOfOriginChapter1, theMurkwoodChapter2, seasideGrottoChapter3, ebonyGrottoChapter4]);

// Primrose
let primroseChapters = L.layerGroup([sunshadeCatacombsChapter1, obsidianParlorChapter2, obsidianManseChapter3, amphitheatreChapter4]);

// Therion
let therionChapters = L.layerGroup([ravusManorChapter1, orlicksManseChapter2, blackMarketChapter3, lornCathedralChapter4]);

// Tressa
let tressaChapters = L.layerGroup([cavesOfMaiyaChapter1, morlocksManseChapter2, forgottenGrottoChapter3, grandportSewersChapter4]);



// Level 1-19
let level_1_19 = L.layerGroup([caveOfOrigin_1_19, subterraneanStudy_1_19, cavesOfRhiyo_1_19, cavesOfMaiya_1_19, brigandsDen_1_19, untouchedSanctum_1_19, theWhistlewood_1_19, pathOfBeasts_1_19, theWhisperwood_1_19, theWhisperwood_1_19, sunshadeCatacombs_1_19, ravusManor_1_19, morlocksManse_1_19]);

// Level 20-29
let level_20_29 = L.layerGroup([hoarfrostGrotto_20_29, carrionCaves_20_29, twinFalls_20_29, whistlingCaverns_20_29, cavesOfAzure_20_29, theMurkwood_20_29, theSpectrewood_20_29, theHollowThrone_20_29, tombOfKings_20_29, theSewers_20_29, orlicksManse_20_29, obsidianParlor_20_29]);

// Level 30-39
let level_30_39 = L.layerGroup([forgottenGrotto_30_39, derelictMine_30_39, farshore_30_39, blackMarket_30_39, lizardmansDen_30_39, captainsBain_30_39, seasideGrotto_30_39, TheWhitewood_30_39, riviraWoods_30_39, tombOfTheImperator_30_39]);

// Level 40+
let level_40_49 = L.layerGroup([undertowCove_40_49, ebonyGrotto_40_49, mawOfTheIceDragon_40_49, quicksandCaves_40_49, forestOfNoReturn_40_49, forestOfRubeh_40_49, lornCathedral_40_49, ruinsOfEld_40_49, grimsandRuin_40_49, molderingRuins_40_49, hiddenPath_40_49, grandportSewers_40_49, obsidianManse_40_49, lordsManse_40_49, amphitheatre_40_49, yvonsBirthplace_40_49]);

// Level 50+
let level_50_59 = L.layerGroup([refugeRuins_50_59, lochOfTheLostKing_50_59, forestOfPurgation_50_59, dragonsongFane_50_59, everholdTunnels_50_59, marsalimCatacombs_50_59]);
