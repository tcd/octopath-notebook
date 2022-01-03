// Character Start Positions

let alfyn    = L.marker(alfynPos,    {icon: alfynIcon})   .bindTooltip("<b>Alfyn</b>").openTooltip();
let cyrus    = L.marker(cyrusPos,    {icon: cyrusIcon})   .bindTooltip("<b>Cyrus</b>").openTooltip();
let haanit   = L.marker(haanitPos,   {icon: haanitIcon})  .bindTooltip("<b>H'aanit</b>").openTooltip();
let olberic  = L.marker(olbericPos,  {icon: olbericIcon}) .bindTooltip("<b>Olberic</b>").openTooltip();
let ophelia  = L.marker(opheliaPos,  {icon: opheliaIcon}) .bindTooltip("<b>Ophelia</b>").openTooltip();
let primrose = L.marker(primrosePos, {icon: primroseIcon}).bindTooltip("<b>Primrose</b>").openTooltip();
let therion  = L.marker(therionPos,  {icon: therioncon})  .bindTooltip("<b>Therion</b>").openTooltip();
let tressa   = L.marker(tressaPos,   {icon: tressaIcon})  .bindTooltip("<b>Tressa</b>").openTooltip();

let characterGroup = L.layerGroup([alfyn, cyrus, haanit, olberic, ophelia, primrose, therion, tressa]);

// Caves

let caveOfOrigin      = L.marker(caveOfOriginPos, {icon: caveIcon}).bindTooltip("<b>Cave of Origin</b><br>Danger Level: 11<br><b>Story</b>: Ophilia - Chapter 1").openTooltip();
let subterraneanStudy = L.marker(subterraneanStudyPos, {icon: caveIcon}).bindTooltip("<b>Subterranean Study</b><br>Danger Level: 11<br><b>Story</b>: Cyrus - Chapter 1").openTooltip();
let undertowCove      = L.marker(undertowCovePos, {icon: caveIcon}).bindTooltip("<b>Undertow Cove</b><br>Danger Level: 45<br>Purple Chest Justice Breaker").openTooltip();
let ebonyGrotto       = L.marker(ebonyGrottoPos, {icon: caveIcon}).bindTooltip("<b>Ebony Grotto</b><br>Danger Level: 45<br><b>Story</b>: Ophilia - Chapter 4<br><b>Purple Chest</b>: Adamantine Hat").openTooltip();
let mawOfTheIceDragon = L.marker(mawOfTheIceDragonPos, {icon: caveIcon}).bindTooltip("<b>Maw of the Ice Dragon</b><br>Danger Level: 45<br><b>Purple Chest</b>: Adamantine Hat").openTooltip();
let hoarfrostGrotto   = L.marker(hoarfrostGrottoPos, {icon: caveIcon}).bindTooltip("<b>Hoarfrost Grotto</b><br>Danger Level: 25<br><b>Purple Chest</b>: Soul Hatchet").openTooltip();
let forgottenGrotto   = L.marker(forgottenGrottoPos, {icon: caveIcon}).bindTooltip("<b>Forgotten Grotto</b><br>Danger Level: 34<br><b>Story</b>: Tressa - Chapter 3<br><b>Purple Chest</b>: Sledge Hammer").openTooltip();
let carrionCaves      = L.marker(carrionCavesPos, {icon: caveIcon}).bindTooltip("<b>Carrion Caves</b><br>Danger Level: 20<br><b>Purple Chest</b>: Physical Defense Nut").openTooltip();
let cavesOfRhiyo      = L.marker(cavesOfRhiyoPos, {icon: caveIcon}).bindTooltip("<b>Caves of Rhiyo</b><br>Danger Level: 11<br><b>Story</b>: Alfyn - Chapter 1").openTooltip();
let derelictMine      = L.marker(derelictMinePos, {icon: caveIcon}).bindTooltip("<b>Derelict Mine</b><br>Danger Level: 30<br><b>Purple Chest</b>: Conscious Stone").openTooltip();
let refugeRuins       = L.marker(refugeRuinsPos, {icon: caveIcon}).bindTooltip("<b>Refuge Ruins</b><br>Danger Level: 50<br><b>Purple Chest</b>: Forbidden Blade").openTooltip();
let twinFalls         = L.marker(twinFallsPos, {icon: caveIcon}).bindTooltip("<b>Twin Falls</b><br>Danger Level: 20<br><b>Purple Chest</b>: Psychic Staff").openTooltip();
let farshore          = L.marker(farshorePos, {icon: caveIcon}).bindTooltip("<b>Farshore</b><br>Danger Level: 30<br><b>Purple Chest</b>: Clarity Stone, 30,000 Leaves").openTooltip();
let whistlingCaverns  = L.marker(whistlingCavernsPos, {icon: caveIcon}).bindTooltip("<b>Whistling Caverns</b><br>Danger Level: 20<br><b>Purple Chest</b>: 6,000 Leaves").openTooltip();
let blackMarket       = L.marker(blackMarketPos, {icon: caveIcon}).bindTooltip("<b>Black Market</b><br>Danger Level: 36<br><b>Story</b>: Therion - Chapter 3<br><b>Purple Chest</b>: Calming Stone").openTooltip();
let lizardmansDen     = L.marker(lizardmansDenPos, {icon: caveIcon}).bindTooltip("<b>Lizardman's Den</b><br>Danger Level: 32<br><b>Story</b>: Olberic - Chapter 3<br><b>Purple Chest</b>: Silver-filled Pouch").openTooltip();
let quicksandCaves    = L.marker(quicksandCavesPos, {icon: caveIcon}).bindTooltip("<b>Quicksand Caves</b><br>Danger Level: 40<br><b>Purple Chest</b>: Inferno Axe").openTooltip();
let cavesOfMaiya      = L.marker(cavesOfMaiyaPos, {icon: caveIcon}).bindTooltip("<b>Caves of Maiya</b><br>Danger Level: 11<br><b>Story</b>: Tressa - Chapter 1").openTooltip();
let brigandsDen       = L.marker(brigandsDenPos, {icon: caveIcon}).bindTooltip("<b>Brigand's Den</b><br>Danger Level: 11<br><b>Story</b>: Olberic - Chapter 1").openTooltip();
let untouchedSanctum  = L.marker(untouchedSanctumPos, {icon: caveIcon}).bindTooltip("<b>Untouched Sanctum</b><br>Danger Level: 15<br><b>Purple Chest</b>: Accuracy Nut").openTooltip();
let captainsBain      = L.marker(captainsBainPos, {icon: caveIcon}).bindTooltip("<b>Captains' Bain</b><br>Danger Level: 35<br><b>Purple Chest</b>: Hedgehog Spear").openTooltip();
let lochOfTheLostKing = L.marker(lochOfTheLostKingPos, {icon: caveIcon}).bindTooltip("<b>Loch of the Lost King</b><br>Danger Level: 50<br><b>Purple Chest</b>: Sturdy Sapphire Rod").openTooltip();
let seasideGrotto     = L.marker(seasideGrottoPos, {icon: caveIcon}).bindTooltip("<b>Seaside Grotto</b><br>Danger Level: 38<br><b>Story</b>: Ophilia - Chapter 3<br><b>Purple Chest</b>: Grand Helm").openTooltip();
let cavesOfAzure      = L.marker(cavesOfAzurePos, {icon: caveIcon}).bindTooltip("<b>Caves of Azure</b><br>Danger Level: 24<br><b>Story</b>: Alfyn - Chapter 2<br><b>Purple Chest</b>: Spiked Vest, Falcon Garb").openTooltip();

let caveGroup = L.layerGroup([undertowCove, subterraneanStudy, caveOfOrigin, ebonyGrotto, mawOfTheIceDragon, hoarfrostGrotto, forgottenGrotto, carrionCaves, cavesOfRhiyo, derelictMine, refugeRuins, twinFalls, farshore, whistlingCaverns, blackMarket, lizardmansDen, quicksandCaves, cavesOfMaiya, brigandsDen, untouchedSanctum, captainsBain, lochOfTheLostKing, seasideGrotto, cavesOfAzure]);

// Forests

let theWhistlewood    = L.marker(theWhistlewoodPos, {icon: forestIcon}).bindTooltip("<b>The Whistlewood</b><br>Danger Level: 15<br><b>Purple Chest</b>: War Lance").openTooltip();
let forestOfPurgation = L.marker(forestOfPurgationPos, {icon: forestIcon}).bindTooltip("<b>Forest of Purgation</b><br>Danger Level: 58<br><b>Purple Chest</b>: Forbidden Dagger").openTooltip();
let TheWhitewood      = L.marker(TheWhitewoodPos, {icon: forestIcon}).bindTooltip("<b>The Whitewood</b><br>Danger Level: 38<br><b>Story</b>: H'aanit - Chapter 3<br /><b>Purple Chest</b>: 15,000 Leaves").openTooltip();
let forestOfNoReturn  = L.marker(forestOfNoReturnPos, {icon: forestIcon}).bindTooltip("<b>Forest of No Return</b><br>Danger Level: 48<br /><b>Purple Chest</b>: Elemental Glaive").openTooltip();
let pathOfBeasts      = L.marker(pathOfBeastsPos, {icon: forestIcon}).bindTooltip("<b>Path of Beasts</b><br>Danger Level: 15<br /><b>Purple Chest</b>: War Lance").openTooltip();
let theWhisperwood    = L.marker(theWhisperwoodPos, {icon: forestIcon}).bindTooltip("<b>The Whisperwood</b><br>Danger Level: 11<br><b>Story</b>: H'aanit - Chapter 1").openTooltip();
let forestOfRubeh     = L.marker(forestOfRubehPos, {icon: forestIcon}).bindTooltip("<b>Forest of Rubeh</b><br>Danger Level: 45<br><b>Story</b>: Alfyn - Chapter 4<br><b>Purple Chest</b>: Inferno Amulet").openTooltip();
let theMurkwood       = L.marker(theMurkwoodPos, {icon: forestIcon}).bindTooltip("<b>The Murkwood</b><br>Danger Level: 23<br><b>Story</b>: Ophilia - Chapter 2<br><b>Purple Chest</b>: Clarity Stone").openTooltip();
let riviraWoods       = L.marker(riviraWoodsPos, {icon: forestIcon}).bindTooltip("<b>Rivira Woods</b><br>Danger Level: 32<br><b>Story</b>: Alfyn - Chapter 3<br><b>Purple Chest</b>: Gaolbreaker, Ice Amulet").openTooltip();
let theSpectrewood    = L.marker(theSpectrewoodPos, {icon: forestIcon}).bindTooltip("<b>The Spectrewood</b><br>Danger Level: 27<br><b>Story</b>: H'aanit - Chapter 2<br><b>Purple Chest</b>: Fire Amulet").openTooltip();

let forestGroup = L.layerGroup([theWhistlewood, forestOfPurgation, TheWhitewood, forestOfNoReturn, pathOfBeasts, theWhisperwood, forestOfRubeh, theMurkwood, riviraWoods, theSpectrewood]);

// Ruins

let theHollowThrone   = L.marker(theHollowThronePos, {icon: ruinsIcon}).bindTooltip("<b>The Hollow Throne</b><br>Danger Level: 25<br><b>Purple Chest</b>: Argent Axe").openTooltip();
let lornCathedral     = L.marker(lornCathedralPos, {icon: ruinsIcon}).bindTooltip("<b>Lorn Cathedral</b><br>Danger Level: 45<br><b>Story</b>: Therion - Chapter 4<br><b>Purple Chest</b>: Enchanted Sword").openTooltip();
let ruinsOfEld        = L.marker(ruinsOfEldPos, {icon: ruinsIcon}).bindTooltip("<b>Ruins of Eld</b><br>Danger Level: 45<br><b>Story</b>: Cyrus - Chapter 4<br><b>Purple Chest</b>: Rune Bow, 50,000 Leaves").openTooltip();
let dragonsongFane    = L.marker(dragonsongFanePos, {icon: ruinsIcon}).bindTooltip("<b>Dragonsong Fane</b><br>Danger Level: 50<br><b>Purple Chest</b>: Holy Longbow").openTooltip();
let grimsandRuin      = L.marker(grimsandRuinPos, {icon: ruinsIcon}).bindTooltip("<b>Grimsand Ruin</b><br>Danger Level: 45<br><b>Story</b>: H'aanit - Chapter 4<br><b>Purple Chest</b>: Unseen Saber, 50,000 Leaves").openTooltip();
let marsalimCatacombs = L.marker(marsalimCatacombsPos, {icon: ruinsIcon}).bindTooltip("<b>Marsalim Catacombs</b><br>Danger Level: 50<br><b>Purple Chest</b>: Viper Dagger").openTooltip();
let tombOfKings       = L.marker(tombOfKingsPos, {icon: ruinsIcon}).bindTooltip("<b>Tomb of Kings</b><br>Danger Level: 25<br><b>Purple Chest</b>: Hasty Helm").openTooltip();
let everholdTunnels   = L.marker(everholdTunnelsPos, {icon: ruinsIcon}).bindTooltip("<b>Everhold Tunnels</b><br>Danger Level: 55<br><b>Purple Chest</b>: Knowledge Staff").openTooltip();


let ruinsGroup = L.layerGroup([theHollowThrone, lornCathedral, ruinsOfEld, dragonsongFane, grimsandRuin, marsalimCatacombs, tombOfKings, everholdTunnels]);

// Catacombs

let tombOfTheImperator = L.marker(tombOfTheImperatorPos, {icon: catacombIcon}).bindTooltip("<b>Tomb of the Imperator</b><br>Danger Level: 35<br><b>Purple Chest</b>: Wakeful Stone").openTooltip();
let molderingRuins     = L.marker(molderingRuinsPos, {icon: catacombIcon}).bindTooltip("<b>Moldering Ruins</b><br>Danger Level: 45<br><b>Purple Chest</b>: Hypnos Crown").openTooltip();
let theSewers          = L.marker(theSewersPos, {icon: catacombIcon}).bindTooltip("<b>The Sewers</b><br>Danger Level: 24<br><b>Story</b>: Cyrus - Chapter 2<br><b>Purple Chest</b>: Snipe Saber").openTooltip();
let hiddenPath         = L.marker(hiddenPathPos, {icon: catacombIcon}).bindTooltip("<b>Hidden Path</b><br>Danger Level: 45<br><b>Story</b>: Olberic - Chapter 4<br><b>Purple Chest</b>: Imperial Helm").openTooltip();
let sunshadeCatacombs  = L.marker(sunshadeCatacombsPos, {icon: catacombIcon}).bindTooltip("<b>Sunshade Catacombs</b><br>Danger Level: 11<br><b>Story</b>: Primrose - Chapter 1").openTooltip();
let grandportSewers    = L.marker(grandportSewersPos, {icon: catacombIcon}).bindTooltip("<b>Grandport Sewers</b><br>Danger Level: 45<br><b>Story</b>: Tressa - Chapter 4<br><b>Purple Chest</b>: Legion Dagger").openTooltip();


let catacombsGroup = L.layerGroup([tombOfTheImperator, molderingRuins, theSewers, hiddenPath, sunshadeCatacombs, grandportSewers]);

// Mansions

let mansionsGroup = L.layerGroup([orlicksManse, obsidianManse, obsidianParlor, ravusManor, morlocksManse, lordsManse, amphitheatre, yvonsBirthplace]);

// Zones (Group by area)


// Atlasdam

let northAtlasdamFlats = L.marker(northAtlasdamFlatsPos, {icon: zoneIcon}).bindTooltip("<b>North Atlasdam Flats</b><br>Danger Level: 11<br><b>Northwest:</b> Northern Flamesgrace Wilds | <b>North:</b> Western Noblecourt Flats | <b>East:</b> Shrine of the Sage | <b>East:</b> The Whistlewood | <b>South:</b> East Atlasdam Flats").openTooltip().bindPopup("<b>Items:</b><br>#1 Thunder Soulstone<br>#2 Olive of Life (M)").openPopup();
let eastAtlasdamFlats  = L.marker(eastAtlasdamFlatsPos, {icon: zoneIcon}).bindTooltip("<b>East Atlasdam Flats</b><br>Danger Level: 11<br><b>North:</b> North Atlasdam Flats | <b>East:</b> Atlasdam | <b>South:</b> North Rippletide Coast").openTooltip().bindPopup("<b>Items:</b><br>#1 Inspiriting Plum<br>#2 500 Leaves").openPopup();

// Flamesgrace

let northernFlamesgraceWilds = L.marker(northernFlamesgraceWildsPos, {icon: zoneIcon}).bindTooltip("<b>Northern Flamesgrace Wilds</b><br>Danger Level: 11<br><b>West:</b> Western Flamesgrace Wilds | <b>Southeast:</b> Flamesgrace | <b>East:</b> Shrine of the Sage | <b>East:</b> North Atlasdam Flats").openTooltip().bindPopup("<b>Items:</b><br>#1 Herb of Clamor<br>#2 Olive of Life<br>#3 Inspiriting Plum").openPopup();
let westernFlamesgraceWilds  = L.marker(westernFlamesgraceWildsPos, {icon: zoneIcon}).bindTooltip("<b>Western Flamesgrace Wilds</b><br>Danger Level: 11<br><b>West:</b> North S'warkii Trail | <b>Cave:</b>  Hoarfrost Grotto | <b>East:</b> Northern Flamesgrace Wilds").openTooltip().bindPopup("<b>Items:</b><br>#1 Healing Grape<br>#2 Shadow Soul Stone<br>#3 800 Leaves<br>#4 Critical Nut").openPopup();
let pathToTheCaveOfOrigin    = L.marker(pathToTheCaveOfOriginPos, {icon: zoneIcon}).bindTooltip("<b>Path to the Cave of Origin</b><br>Danger Level: 11<br><b>North:</b> Cave of Origin | <b>West:</b>  Flamesgrace").openTooltip().bindPopup("<b>Items:</b><br>#1 Healing Grape<br>#2 600 Leaves<br>#3 Herb of Clarity").openPopup();

// Noblecourt

let westernNoblecourtFlats = L.marker(westernNoblecourtFlatsPos, {icon: zoneIcon}).bindTooltip("<b>Western Noblecourt Flats</b><br>Danger Level: 17<br><b>North:</b> Western Whispermill Flats | <b>Cave West:</b> The Hollow Throne | <b>Cave Southeast:</b> Shrine of the Sage | <b>East:</b> Noblecourt | <b>South:</b> North Atlasdam Flats").openTooltip().bindPopup("<b>Items:</b><br>#1 5,000 Leaves<br>#2 Healing Grape (M)<br>#3 Light Soulstone<br>#4 Energizing Pomegranate<br>#5 Wind Amulet").openPopup();

// Riverford

let northRiverfordTraverse = L.marker(northRiverfordTraversePos, {icon: zoneIcon}).bindTooltip("<b>North Riverford Traverse</b><br>Danger Level: 45<br><b>West:</b> Shrine of the Warbringer | <b>North:</b> South Orwell Pass | <b>East:</b> Riverford").openTooltip().bindPopup("<b>Items:</b><br>#1 Herb of Revival<br>#2 Silver-filled Pouch<br>#3 Wind Soulstone (L)").openPopup();

// Wispermill
let westernWispermillFlats = L.marker(westernWispermillFlatsPos, {icon: zoneIcon}).bindTooltip("<b>Western Wispermill Flats</b><br>Danger Level: 45" + westernWispermillFlats_c4_SideQuests, {maxWidth : 700}).openTooltip();

// S'warkii

let northSwarkiiTrail    = L.marker(northSwarkiiTrailPos, {icon: zoneIcon}).bindTooltip("<b>North S'warkii Trail</b><br>Danger Level: 11<br><b>West:</b> West S'warkii Trail | <b>South:</b> S'warkii | <b>East:</b> Western Flamesgrace Wilds").openTooltip().bindPopup("<b>Items:</b><br>#1 Healing Grape<br>#2 Olive of Life<br>#3 Herb of Awakening<br>#4 Slippery Nut").openPopup();
let westSwarkiiTrail     = L.marker(westSwarkiiTrailPos, {icon: zoneIcon}).bindTooltip("<b>West S'warkii Trail</b><br>Danger Level: 11<br><b>South:</b> North Bolderfall Pass | <b>North:</b> East Victors Hollow Trail | <b>East:</b> North S'warkii Trail").openTooltip().bindPopup("<b>Items:</b><br>#1 Inspiriting Plum<br>#2 Olive of Life<br>#3 Herb of Light" + westSwarkiiTrail_c4_SideQuests, {maxWidth : 700}).openPopup();
let pathToTheWhisperwood = L.marker(pathToTheWhisperwoodPos, {icon: zoneIcon}).bindTooltip("<b>Path to the Whisperwood</b><br>Danger Level: 11<br><b>West:</b> The Whisperwood | <b>East:</b> S'warkii").openTooltip().bindPopup("<b>Items:</b><br>#1 Shadow Soulstone<br>#2 Healing Grape<br>#3 500 Leaves<br>#4 Inspiriting Plum").openPopup();

// Victor's Hollow

let eastVictorsHollowTrail   = L.marker(eastVictorsHollowTrailPos, {icon: zoneIcon}).bindTooltip("<b>East Victors Hollow Trail</b><br>Danger Level: 34<br><b>West:</b> Victors Hollow | <b>South:</b> West S'warkii Trail | <b>North:</b> East Duskbarrow Trail | <b>Cave:</b> Shrine of the Huntress | <b>East:</b> Western Stillsnow ").openTooltip().bindPopup("<b>Items:</b><br>#1 Inspiriting Plum<br>#2 Healing Grape (M)<br>#3 5,000 Leaves").openPopup();
let eastDuskbarrowTrail      = L.marker(eastDuskbarrowTrailPos, {icon: zoneIcon}).bindTooltip("<b>East Duskbarrow Trail</b><br>Danger Level: 45<br><b>West:</b> Duskbarrow | <b>Southeast:</b> East Victors Hollow Trail | <b>Cave:</b> Moldering Ruins").openTooltip().bindPopup("<b>Items:</b><br>#1 Copper-filled Pouch<br>#2 Herb of Revival<br>#3 Herb of Clamor<br>#4 Olive of Life (M)").openPopup();
let pathToTheForgottenGrotto = L.marker(pathToTheForgottenGrottoPos, {icon: zoneIcon}).bindTooltip("<b>Path to the Forgotten Grotto</b><br>Danger Level: 33<br><b>West:</b> Forgotten Grotto | <b>East:</b> Victors Hollow").openTooltip().bindPopup("<b>Items:</b><br>#1 Healing Grape (M)<br>#2 Olive of Life<br>#3 Shadow Soulstone (M)").openPopup();


// Stillsnow

let westernStillsnowWilds    = L.marker(westernStillsnowWildsPos, {icon: zoneIcon}).bindTooltip("<b>Western Stillsnow Wilds</b><br>Danger Level: 29<br><b>West:</b> East Victors Hollow Trail | <b>Cave 1:</b> Shrine of the Flamebearer | <b>Cave 2:</b> Tomb of the Imperator | <b>North:</b> Southern Northreach | <b>East:</b> Stillsnow").openTooltip().bindPopup("<b>Items:</b><br>#1 Ice Soulstone (M)<br>#2 Energizing Pomegranate (M)<br>#3 Healing Grape (M)").openPopup();
let southernNorthreachWilds  = L.marker(southernNorthreachWildsPos, {icon: zoneIcon}).bindTooltip("<b>Southern Northreach Wilds</b><br>Danger Level: 45<br><b>South:</b> Western Stillsnow Wilds | <b>Cave:</b> Maw of the Ice Dragon | <b>North:</b> Northreach").openTooltip().bindPopup("<b>Items:</b><br>#1 Energizing Pomegranate (M)<br>#2 Shadow Soulstone (M)<br>#3 Herb of Revival<br>#4 Inspiriting Plum Basket").openPopup();
let roadToTheObsidianParlor  = L.marker(roadToTheObsidianParlorPos, {icon: zoneIcon}).bindTooltip("<b>Road to the Obsidian Parlor</b><br>Danger Level: 21<br><b>West:</b> Stillsnow | <b>Northeast:</b> Secret Path<br><b>Purple Chest</b>: Dark Amulet").openTooltip();
let secretPathObsidianParlor = L.marker(secretPathObsidianParlorPos, {icon: zoneIcon}).bindTooltip("<b>Secret Path</b><br>Danger Level: 21<br><b>South:</b> Road to the Obsidian Parlor | <b>North:</b> Obsidian Parlor<br><b>Purple Chest</b>: Spiked Vest").openTooltip().bindPopup("<b>Items:</b><br>#1 5500 Leaves<br>#2 Energizing Pomegranate (M)<br>#3 Healing Grape Bunch<br>#4 Herb of Revival<br>#5 Inspiriting Plum (M)<br>#6 Shadow Soulstone (M)<br>#7 Wakeful Stone").openPopup();
let trailToTheWhitewood      = L.marker(trailToTheWhitewoodPos, {icon: zoneIcon}).bindTooltip("<b>Trail to the Whitewood</b><br>Danger Level: 37<br><b>South:</b> Stillsnow | <b>North:</b> The Whitewood").openTooltip().bindPopup("<b>Items:</b><br>#1 Inspiriting Plum Basket)<br>#2 Olive of Life (M)").openPopup();


// Bolderfall

let northBolderfallPass     = L.marker(northBolderfallPassPos, {icon: zoneIcon}).bindTooltip("<b>North Bolderfall Pass</b><br>Danger Level: 11<br><b>South:</b> South Bolderfall Pass | <b>North:</b> West S'warkii Trail | <b>Southeast:</b> Bolderfall").openTooltip().bindPopup("<b>Items:</b><br>#1 Healing Grape<br>#2 1000 Leaves<br>#3 Olive of Life").openPopup();
let southBolderfallPass     = L.marker(southBolderfallPassPos, {icon: zoneIcon}).bindTooltip("<b>South Bolderfall Pass</b><br>Danger Level: 11<br><b>West:</b> South Quarrycrest Pass | <b>South:</b> West Clearbrook Traverse | <b>Cave:</b> Carrion Caves | <b>North:</b> North Bolderfall Pass").openTooltip().bindPopup("<b>Items:</b><br>#1 Herb of Awakening<br>#2 Wind Soulstone<br>#3 Inspiriting Plum (M)<br>#4 Healing Grape").openPopup();
let southQuarrycrestPass    = L.marker(southQuarrycrestPassPos, {icon: zoneIcon}).bindTooltip("<b>South Quarrycrest Pass</b><br>Danger Level: 28<br><b>West:</b> South Orewell Pass | <b>North:</b> Quarrycrest | <b>West Cave:</b> Shrine of the Prince of Thieves | <b>East Cave:</b> Derelict Mine | <b>Southeast:</b> South Bolderfall Pass<br><b>Purple Chest</b>: Fire Amulet").openTooltip().bindPopup("<b>Items:</b><br>#1 Herb of Valor<br>#2 Fire Amulet<br>#3 Energizing Pomegranate").openPopup();
let roadToMorlocksManse     = L.marker(roadToMorlocksMansePos, {icon: zoneIcon}).bindTooltip("<b>Road to Morlock's Manse</b><br>Danger Level: 18<br><b>North:</b> Morlock's Manse | <b>Southeast:</b> Quarrycrest").openTooltip().bindPopup("<b>Items:</b><br>#1 Inspiriting Plum<br>#2 5000 Leaves<br>#3 Healing Grape (M)").openPopup();
let southOrwellPass         = L.marker(southOrwellPassPos, {icon: zoneIcon}).bindTooltip("<b>South Orwell Pass</b><br>Danger Level: 45<br><b>Northwest:</b> Orewell | <b>North Ruins:</b> Dragonsong Fane | <b>East:</b> South Quarrycrest Pass | <b>South:</b> North Riverford Traverse").openTooltip().bindPopup("<b>Items:</b><br>#1 Energizing Pomegranate (L)<br>#2 Fire Soulstone (M)<br>#3 Healing Grape (M)<br>#4 Olive of Life (M)").openPopup();
let trailToTheForestOfRubeh = L.marker(trailToTheForestOfRubehPos, {icon: zoneIcon}).bindTooltip("<b>Trail to the Forest of Rubeh</b><br>Danger Level: 45<br><b>North:</b> Forest of Rubeh | <b>South:</b> Orewell").openTooltip().bindPopup("<b>Items:</b><br>#1 Purifying Dust<br>#2 20000 Leaves<br>#3 Energizing Pomegranate (M)").openPopup();

// Clearbrook

let westClearbrookTraverse  = L.marker(westClearbrookTraversePos, {icon: zoneIcon}).bindTooltip("<b>West Clearbrook Traverse</b><br>Danger Level: 11<br><b>North:</b> South Bolderfall Pass | <b>East:</b> Clearbrook | <b>Cave:</b> South Clearbrook Traverse").openTooltip().bindPopup("<b>Items:</b><br>#1 Odds and ends<br>#2 Olive of Life<br>#3 Healing Grape").openPopup();
let pathOfRhiyo             = L.marker(pathOfRhiyoPos, {icon: zoneIcon}).bindTooltip("<b>Path of Rhiyo</b><br>Danger Level: 11<br><b>West:</b> Clearbrook | <b>East:</b> Caves of Rhiyo").openTooltip().bindPopup("<b>Items:</b><br>#1 Healing Grape<br>#2 Soothing Dust<br>#3 Essence of Plum").openPopup();
let southClearbrookTraverse = L.marker(southClearbrookTraversePos, {icon: zoneIcon}).bindTooltip("<b>South Clearbrook Traverse</b><br>Danger Level: 11<br><b>Northwest:</b> West Clearbrook Traverse | <b>Southwest:</b> East Sainstbridge Traverse | <b>Cave:</b> Twin Falls | <b>Southeast:</b> Southern Sunshade Sands").openTooltip().bindPopup("<b>Items:</b><br>#1 500 Leaves<br>#2 Soothing Seed<br>#3 Healing Grape<br>#4 Olive of Life" + southClearbrookTraverseSideQuests, {maxWidth : 700}).openPopup();
let eastSaintbridgeTraverse = L.marker(eastSaintbridgeTraversePos, {icon: zoneIcon}).bindTooltip("<b>East Saintbridge Traverse</b><br>Danger Level: 29<br><b>West:</b> Saintsbridge | <b>Cave 1:</b> Farshore | <b>Cave 2:</b> Shrine of the Healer | <b>Northeast:</b> South Clearbrook Traverse").openTooltip().bindPopup("<b>Items:</b><br>#1 Herb of Healing<br>#2 Healing Grape (M)<br>#3 Rare Stone" + eastSaintsbridgeTraverseSideQuests, {maxWidth : 700}).openPopup();
let murkwoodTrail           = L.marker(murkwoodTrailPos, {icon: zoneIcon}).bindTooltip("<b>Murkwood Trail</b><br>Danger Level: 20<br><b>East:</b> Saintsbridge | <b>North:</b> The Murkwood ").openTooltip().bindPopup("<b>Items:</b><br>#1 3500 Leaves<br>#2 Herb of Awakening<br>#3 Inspiriting Plum Basket").openPopup();


// Sunshade

let southernSunshadeSands   = L.marker(southernSunshadeSandsPos, {icon: zoneIcon}).bindTooltip("<b>Southern Sunshade Sands</b><br>Danger Level: 11<br><b>West:</b> South Clearbrook Traverse | <b>North:</b> Sunshade | <b>Cave:</b> Sunshade Catacombs | <b>Southeast:</b> Eastern Sunshade Sands").openTooltip().bindPopup("<b>Items:</b><br>#1 Old Coin<br>#2 Inspiriting Plum<br>#3 Herb of Clarity").openPopup();
let easternSunshadeSands    = L.marker(easternSunshadeSandsPos, {icon: zoneIcon}).bindTooltip("<b>Eastern Sunshade Sands</b><br>Danger Level: 11<br><b>West:</b> Southern Sunshade Sands | <b>South:</b> Northern Wellspring Sands | <b>Cave:</b> Whistling Cavern | <b>East:</b> South Cobbleston Gap").openTooltip().bindPopup("<b>Items:</b><br>#1 Healing Grape<br>#2 Olive of Life<br>#3 Thunder Soulstone").openPopup();
let northernWellspringSands = L.marker(northernWellspringSandsPos, {icon: zoneIcon}).bindTooltip("<b>Northern Wellspring Sands</b><br>Danger Level: 31<br><b>West:</b> Wellspring | <b>South:</b> Eastern Wellspring Sands | <b>Cave:</b> Quicksand Caves | <b>Northwest:</b> Shrine of the Lady of Grace | <b>North:</b> Eastern Wellspring Sands<br><b>Purple Chest</b>: Unerring Bracelet").openTooltip().bindPopup("<b>Items:</b><br>#1 Inspiriting Plum<br>#2 Olive of Life<br>#3 Energizing Pomegranate (M)<br>#4 Imperial Lance").openPopup();
let easternWellspringSands  = L.marker(easternWellspringSandsPos, {icon: zoneIcon}).bindTooltip("<b>Eastern Wellspring Sands</b><br>Danger Level: 31<br><b>North:</b> Northern Wellspring Sands | <b>South:</b> Eastern Marsalim Sands | <b>East:</b> West Stonegard Pass<br><b>Purple Chest</b>: Enlightening Bracelet").openTooltip().bindPopup("<b>Items:</b><br>#1 Fool's Gold Ore<br>#2 Copper-filled Pouch<br>#3 Thunder Soulstone (L)<br>#4 Healing Grape (M)").openPopup();
let easternMarsalimSands    = L.marker(easternMarsalimSandsPos, {icon: zoneIcon}).bindTooltip("<b>Eastern Marsalim Sands</b><br>Danger Level: 45<br><b>West:</b> Marsalim | <b>North:</b> Eastern Wellspring Sands | <b>East:</b> Marsalim Catacombs<br><b>Purple Chest</b>: 20,000 Leaves").openTooltip().bindPopup("<b>Items:</b><br>#1 Inspiriting Plum Basket<br>#2 Thunder Soulstone (L)").openPopup();
let roadToBlackMarket       = L.marker(roadToBlackMarketPos, {icon: zoneIcon}).bindTooltip("<b>Road to Black Market</b><br>Danger Level: 32<br><b>Northwest:</b> Black Market | <b>Southeast:</b> Wellspring").openTooltip();
let roadToLizardmansDen     = L.marker(roadToLizardmansDenPos, {icon: zoneIcon}).bindTooltip("<b>Road to Lizardman's Den</b><br>Danger Level: 36<br><b>Southwest:</b> Lizardman's Den | <b>Northeast:</b> Wellspring").openTooltip();
let grimsandRoad            = L.marker(grimsandRoadPos, {icon: zoneIcon}).bindTooltip("<b>Grimsand Road</b><br>Danger Level: 45<br><b>East:</b> Marsalim | <b>West:</b> Grimsand Ruins").openTooltip().bindPopup("<b>Items:</b><br>#1 Fire Soulstone (L)<br>#2 Silver-filled Pouch<br>#3 Energizing Pomegranate (L)").openPopup();

// Cobbleston

let southCobblestonGap = L.marker(southCobblestonGapPos, {icon: zoneIcon}).bindTooltip("<b>South Cobbleston Gap</b><br>Danger Level: 11<br><b>West:</b> Eastern Sunshade Sands | <b>North:</b> Cobbleston | <b>East:</b> North Cobbleston Gap").openTooltip().bindPopup("<b>Items:</b><br>#1 Olive of Life<br>#2 Healing Grape<br>#3 1,000 Leaves<br>#4 Herb of Awakening").openPopup();
let northCobblestonGap = L.marker(northCobblestonGapPos, {icon: zoneIcon}).bindTooltip("<b>North Cobbleston Gap</b><br>Danger Level: 11<br><b>West:</b> South Cobbleston Gap | <b>South:</b> North Stonegard Pass | <b>Cave:</b> Untouched Sanctum | <b>Northeast:</b> East Rippletide Coast<br><b>Purple Chest</b>: Elemental Attack Nut").openTooltip().bindPopup("<b>Items:</b><br>#1 Light Soulstone<br>#2 1,200 Leaves<br>#3 Inspiriting Plum<br>#4 Healing Grape<br>#5 Healing Nut").openPopup();
let northStonegardPass = L.marker(northStonegardPassPos, {icon: zoneIcon}).bindTooltip("<b>North Stonegard Pass</b><br>Danger Level: 30<br><b>Northwest:</b> North Cobbleston Gap | <b>South:</b> West Stonegard Pass | <b>Cave:</b> Shrine of the Thunderblade | <b>North:</b> Moonstruck Coast | <b>East:</b> Stonegard").openTooltip().bindPopup("<b>Items:</b><br>#1 Energizing Pomegranate<br>#2 Light Soulstone (M)<br>#3 Healing Grape (M)").openPopup();
let westStonegardPass  = L.marker(westStonegardPassPos, {icon: zoneIcon}).bindTooltip("<b>West Stonegard Pass</b><br>Danger Level: 30<br><b>Southwest:</b> Eastern Wellspring Sands | <b>South:</b> West Everhold Pass | <b>Cave:</b> Tomb of Kings").openTooltip();
let westEverholdPass   = L.marker(westEverholdPassPos, {icon: zoneIcon}).bindTooltip("<b>West Everhold Pass</b><br>Danger Level: 45<br><b>West:</b> West Stonegard Pass | <b>South:</b> Everhold Tunnels | <b>North:</b> Everhold | <b>East:</b> Shrine of the Runeblade").openTooltip();

// Coastlands

let moonstruckCoast      = L.marker(moonstruckCoastPos, {icon: zoneIcon}).bindTooltip("<b>Moonstruck Coast</b><br>Danger Level: 30<br><b>North:</b> West Goldshore Coast | <b>Cave:</b> Shrine of the Trader | <b>South:</b> North Stonegard Pass<br><b>Purple Chest</b>: Articulate Stone").openTooltip().bindPopup("<b>Items:</b><br>#1 Healing Grape (M)<br>#2 Copper-filled Pouch<br>#3 Inspiriting Plum" + moonstruckCoastSideQuests, {maxWidth : 700}).openPopup();
let roadToTheSpectrewood = L.marker(roadToTheSpectrewoodPos, {icon: zoneIcon}).bindTooltip("<b>Road to the Spectrewood</b><br>Danger Level: 27<br><b>West:</b> Stonegard | <b>East:</b> The Spectrewood").openTooltip();
let westGoldshireCoast   = L.marker(westGoldshireCoastPos, {icon: zoneIcon}).bindTooltip("<b>West Goldshire Coast</b><br>Danger Level: 34<br><b>South:</b> Moonstruck Coast | <b>Cave:</b> Captains' Bane | <b>East:</b> Goldshire | <b>Northeast:</b> West Grandport Coast").openTooltip().bindPopup("<b>Items:</b><br>#1 Energizing Pomegranate<br>#2 Bottle of Blinding Dust<br>#3 Herb of Valor<br>#4 Thunder Soulstone (M)").openPopup();
let westGrandportCoast   = L.marker(westGrandportCoastPos, {icon: zoneIcon}).bindTooltip("<b>West Grandport Coast</b><br>Danger Level: 45<br><b>West:</b> West Goldshore Coast | <b>Cave:</b> Loch of the Lost King | <b>East:</b> Grandport").openTooltip();
let roadToCavesOfAzure   = L.marker(roadToCavesOfAzurePos, {icon: zoneIcon}).bindTooltip("<b>Road to Caves of Azure</b><br>Danger Level: 24<br><b>West:</b> Goldshore | <b>Cave:</b> Caves of Azure").openTooltip();
let roadToSeasideGrotto  = L.marker(roadToSeasideGrottoPos, {icon: zoneIcon}).bindTooltip("<b>Road to Seaside Grotto</b><br>Danger Level: 38<br><b>East:</b> Goldshore | <b>Cave:</b> Seaside Grotto").openTooltip();

let zoneGroup = L.layerGroup([westernWispermillFlats, northRiverfordTraverse, northRippletideCoast, eastRippletideCoast, pathToCavesOfMaiya, westernNoblecourtFlats, northAtlasdamFlats, eastAtlasdamFlats, northernFlamesgraceWilds, westernFlamesgraceWilds, northSwarkiiTrail, westSwarkiiTrail, pathToTheCaveOfOrigin, eastVictorsHollowTrail, pathToTheWhisperwood, eastDuskbarrowTrail, westernStillsnowWilds, southernNorthreachWilds, roadToTheObsidianParlor, northBolderfallPass, southBolderfallPass, southQuarrycrestPass, westClearbrookTraverse, roadToMorlocksManse, southOrwellPass, pathOfRhiyo, southClearbrookTraverse, eastSaintbridgeTraverse, southernSunshadeSands, easternSunshadeSands, northernWellspringSands, easternWellspringSands, easternMarsalimSands, roadToBlackMarket, roadToLizardmansDen, southCobblestonGap, northCobblestonGap, northStonegardPass, westStonegardPass, westEverholdPass, moonstruckCoast, roadToTheSpectrewood, westGoldshireCoast, westGrandportCoast, roadToCavesOfAzure, roadToSeasideGrotto, trailToTheWhitewood, secretPathObsidianParlor, pathToTheForgottenGrotto, murkwoodTrail, trailToTheForestOfRubeh, grimsandRoad]);


// Cities
let atlasdam      = L.marker(atlasdamPos, {icon: cityIcon}).bindTooltip("<b>Atlasdam</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Elemental Attack + Defense<br>Attack + Defense<br>Fire AoE Attack" + atlasdamSideQuests + atlasdam_c4_SideQuests, {maxWidth : 700}).openPopup();
let bolderfall    = L.marker(bolderfallPos, {icon: cityIcon}).bindTooltip("<b>Bolderfall</b><br><b>Purple Chest</b>: Stinging Dagger, Iron Helm").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Defense Buff<br>Elemental Attack + Defense<br>Attack Break<br>Fire AoE Attack" + bolderfallSideQuests + boldefall_c4_SideQuests, {maxWidth : 700}).openPopup();
let clearbrook    = L.marker(clearbrookPos, {icon: cityIcon}).bindTooltip("<b>Clearbrook</b><br><b>Purple Chest</b>: Elemental Attack Nut").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Fire AoE Attack" + clearbrookSideQuests + clearbrook_c4_SideQuests, {maxWidth : 700}).openPopup();
let cobblestone   = L.marker(cobblestonePos, {icon: cityIcon}).bindTooltip("<b>Cobblestone</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Defense Buff" + cobblestonSideQuests, {maxWidth : 700}).openPopup();
let duskbarrow    = L.marker(duskbarrowPos, {icon: cityIcon}).bindTooltip("<b>Duskbarrow</b><br><b>Purple Chest</b>: 30,000 Leaves").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Defense Break<br>Fire AoE Attack" + duskbarrowSideQuests, {maxWidth : 700}).openPopup();
let everhold      = L.marker(everholdPos, {icon: cityIcon}).bindTooltip("<b>Everhold</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack + Defense Break<br>Slow Enemy Down" + everholdSideQuests, {maxWidth : 700}).openPopup();
let flamesgrace   = L.marker(flamesgracePos, {icon: cityIcon}).bindTooltip("<b>Flamesgrace</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Defense Buff" + flamesgraceSideQuests + flamesgrace_c4_SideQuests, {maxWidth : 700}).openPopup();
let goldshore     = L.marker(goldshorePos, {icon: cityIcon}).bindTooltip("<b>Goldshore</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Attack Break<br>Lightning AoE" + goldshoreSideQuests, {maxWidth : 700}).openPopup();
let grandport     = L.marker(grandportPos, {icon: cityIcon}).bindTooltip("<b>Grandport</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>All Villager Types" + grandportSideQuests + grandport_c4_SideQuests, {maxWidth : 700}).openPopup();
let marsalim      = L.marker(marsalimPos, {icon: cityIcon}).bindTooltip("<b>Marsalim</b><br><b>Purple Chest</b>: Spirit Bow, Tempest Amulet").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Defense Break<br>Fire AoE" + marsalimSideQuests + marsalim_c4_SideQuests, {maxWidth : 700}).openPopup();
let noblecourt    = L.marker(noblecourtPos, {icon: cityIcon}).bindTooltip("<b>Noblecourt</b><br><b>Purple Chest</b>: 10,000 Leaves").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Full Break" + noblecourtSideQuests + noblecourt_c4_SideQuests, {maxWidth : 700}).openPopup();
let northreach    = L.marker(northreachPos, {icon: cityIcon}).bindTooltip("<b>Northreach</b><br><b>Purple Chest</b>: Master's Longbow").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Elemental Attack + Defense" + northreachSideQuests + northreach_c4_SideQuests, {maxWidth : 700}).openPopup();
let orewell       = L.marker(orewellPos, {icon: cityIcon}).bindTooltip("<b>Orewell</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Slow Enemy Down" + orewellSideQuests, {maxWidth : 700}).openPopup();
let quarrycrest   = L.marker(quarrycrestPos, {icon: cityIcon}).bindTooltip("<b>Quarrycrest</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Defense Break" + quarrycrestSideQuests + quarrycrest_c4_SideQuests, {maxWidth : 700}).openPopup();
let rippletide    = L.marker(rippletidePos, {icon: cityIcon}).bindTooltip("<b>Rippletide</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Fire AoE Attack<br>Ice AoE Attack" + rippletideSideQuests + rippletide_c4_SideQuests, {maxWidth : 700}).openPopup();
let riverford     = L.marker(riverfordPos, {icon: cityIcon}).bindTooltip("<b>Riverford</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Elemental Attack + Elemental Defense Break<br>Light AoE<br>Dark AoE<br>Full Break" + riverfordSideQuests + riverford_c4_SideQuests, {maxWidth : 700}).openPopup();
let saintsbridge  = L.marker(saintsbridgePos, {icon: cityIcon}).bindTooltip("<b>Saintsbridge</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Ice AoE Attack<br>Lightning AoE Attack<br>Team HP Heal" + saintsbridgeSideQuests + saintsbridge_c4_SideQuests, {maxWidth : 700}).openPopup();
let stillsnow     = L.marker(stillsnowPos, {icon: cityIcon}).bindTooltip("<b>Stillsnow</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Fire AoE Attack" + stillsnowSideQuests + stillsnow_c4_SideQuests, {maxWidth : 700}).openPopup();
let stoneguard    = L.marker(stoneguardPos, {icon: cityIcon}).bindTooltip("<b>Stoneguard</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Attack Break<br>Fire AoE" + stonegardSideQuests + stonegard_c4_SideQuests, {maxWidth : 700}).openPopup();
let sunshade      = L.marker(sunshadePos, {icon: cityIcon}).bindTooltip("<b>Sunshade</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Elemental Attack + Defense<br>Fire AoE Attack" + sunshadeSideQuests + sunshade_c4_SideQuests, {maxWidth : 700}).openPopup();
let swarkii       = L.marker(swarkiiPos, {icon: cityIcon}).bindTooltip("<b>S'warkii</b><br><b>Purple Chest</b>: Stone Bow").openTooltip().bindPopup("<b>Useful Villagers:</b><br>" + swarkiiSideQuests, {maxWidth : 700}).openPopup();
let victorshollow = L.marker(victorshollowPos, {icon: cityIcon}).bindTooltip("<b>Victor's Hollow</b><br><b>Story</b>: Olberic - Chapter 2<br><b>Purple Chest</b>: Dark Amulet").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Defense Buff<br>Defense Break<br>Strong Multi-Attack" + victorsHollowSideQuests + victorsHollow_c4_SideQuests, {maxWidth : 700}).openPopup();
let wellspring    = L.marker(wellspringPos, {icon: cityIcon}).bindTooltip("<b>Wellspring</b><br><b>Purple Chest</b>: 9,000 Leaves, 14,000 Leaves").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Defense Buff<br>Defense Break<br>Ice AoE" + wellspringSideQuests + wellspring_c4_SideQuests, {maxWidth : 700}).openPopup();
let wispermill    = L.marker(wispermillPos, {icon: cityIcon}).bindTooltip("<b>Wispermill</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Elemental Attack + Defense" + wispermillSideQuests + wispermill_c4_SideQuests, {maxWidth : 700}).openPopup();

let cityGroup = L.layerGroup([duskbarrow, victorshollow, northreach, stillsnow, wispermill, noblecourt, swarkii, flamesgrace, atlasdam, rippletide, bolderfall, clearbrook, sunshade, cobblestone, quarrycrest, orewell, riverford, saintsbridge, wellspring, marsalim, stoneguard, everhold, grandport, goldshore]);

// Shrines

let apothecaryShrine = L.marker(apothecaryShrinePos, {icon: shrineIcon}).bindTooltip("<b>Shrine of the Healer</b><br>(Apothecary Job)").openTooltip();
let clericShrine     = L.marker(clericShrinePos, {icon: shrineIcon}).bindTooltip("<b>Shrine of the Flamebringer</b><br>(Cleric Job)").openTooltip();
let dancerShrine     = L.marker(dancerShrinePos, {icon: shrineIcon}).bindTooltip("<b>Shrine of the Lady of Grace</b><br>(Dancer Job)").openTooltip();
let hunterShrine     = L.marker(hunterShrinePos, {icon: shrineIcon}).bindTooltip("<b>Shrine of the Huntress</b><br>(Hunter Job)").openTooltip();
let scholarShrine    = L.marker(scholarShrinePos, {icon: shrineIcon}).bindTooltip("<b>Shrine of the Sage</b><br>(Scholar Job)").openTooltip();
let merchantShrine   = L.marker(merchantShrinePos, {icon: shrineIcon}).bindTooltip("<b>Shrine of the Trader</b><br>(Merchant Job)").openTooltip();
let thiefShrine      = L.marker(thiefShrinePos, {icon: shrineIcon}).bindTooltip("<b>Shrine of the Prince of Thieves</b><br>(Thief Job)").openTooltip();
let warriorShrine    = L.marker(warriorShrinePos, {icon: shrineIcon}).bindTooltip("<b>Shrine of the Thunderblade</b><br>(Warrior Job)").openTooltip();
let runebladeShrine  = L.marker(runebladeShrinePos, {icon: advancedShrineIcon}).bindTooltip("<b>Shrine of the Runeblade</b><br>(Runelord Job)").openTooltip();
let sorcerorShrine   = L.marker(sorcerorShrinePos, {icon: advancedShrineIcon}).bindTooltip("<b>Shrine of the Archmagus</b><br>(Sorceror Job)").openTooltip();
let starseerShrine   = L.marker(starseerShrinePos, {icon: advancedShrineIcon}).bindTooltip("<b>Shrine of the Starseer</b><br>(Starseer Job)").openTooltip();
let warbringerShrine = L.marker(warbringerShrinePos, {icon: advancedShrineIcon}).bindTooltip("<b>Shrine of the Warbringer</b><br>(Warmaster Job)").openTooltip();

let shrineGroup = L.layerGroup([clericShrine, scholarShrine, merchantShrine, hunterShrine, warriorShrine, thiefShrine, apothecaryShrine, dancerShrine, sorcerorShrine, starseerShrine, runebladeShrine, warbringerShrine]);

// Chapters

// Alfyn
let cavesOfRhiyoChapter1  = L.marker(cavesOfRhiyoPos, {icon: caveGreenIcon}).bindTooltip("<b>Caves of Rhiyo</b><br>Danger Level: 11<br><b>Story</b>: Alfyn - Chapter 1").openTooltip();
let cavesOfAzureChapter2  = L.marker(cavesOfAzurePos, {icon: caveGreenIcon}).bindTooltip("<b>Caves of Azure</b><br>Danger Level: 24<br><b>Story</b>: Alfyn - Chapter 2<br><b>Purple Chest</b>: Spiked Vest, Falcon Garb").openTooltip();
let riviraWoodsChapter3   = L.marker(riviraWoodsPos, {icon: forestGreenIcon}).bindTooltip("<b>Rivira Woods</b><br>Danger Level: 32<br><b>Story</b>: Alfyn - Chapter 3<br><b>Purple Chest</b>: Gaolbreaker, Ice Amulet").openTooltip();
let forestOfRubehChapter4 = L.marker(forestOfRubehPos, {icon: forestGreenIcon}).bindTooltip("<b>Forest of Rubeh</b><br>Danger Level: 45<br><b>Story</b>: Alfyn - Chapter 4<br><b>Purple Chest</b>: Inferno Amulet").openTooltip();
let alfynChapters = L.layerGroup([cavesOfRhiyoChapter1, cavesOfAzureChapter2, riviraWoodsChapter3, forestOfRubehChapter4]);

// Cyrus
let subterraneanStudyChapter1 = L.marker(subterraneanStudyPos, {icon: caveGreenIcon}).bindTooltip("<b>Subterranean Study</b><br>Danger Level: 11<br><b>Story</b>: Cyrus - Chapter 1").openTooltip();
let theSewersChapter2         = L.marker(theSewersPos, {icon: catacombGreenIcon}).bindTooltip("<b>The Sewers</b><br>Danger Level: 24<br><b>Story</b>: Cyrus - Chapter 2<br><b>Purple Chest</b>: Snipe Saber").openTooltip();
let yvonsBirthplaceChapter3   = L.marker(yvonsBirthplacePos, {icon: mansionGreenIcon}).bindTooltip("<b>Yvon's Birthplace</b><br>Danger Level: 40<br><b>Story</b>: Cyrus - Chapter 3<br><b>Purple Chest</b>: Sturdy Quartz Rod").openTooltip();
let ruinsOfEldChapter4        = L.marker(ruinsOfEldPos, {icon: ruinsGreenIcon}).bindTooltip("<b>Ruins of Eld</b><br>Danger Level: 45<br><b>Story</b>: Cyrus - Chapter 4<br><b>Purple Chest</b>: Rune Bow, 50,000 Leaves").openTooltip();
let cyrusChapters = L.layerGroup([subterraneanStudyChapter1, theSewersChapter2, yvonsBirthplaceChapter3, ruinsOfEldChapter4]);

// H'aanit
let theWhisperwoodChapter1 = L.marker(theWhisperwoodPos, {icon: forestGreenIcon}).bindTooltip("<b>The Whisperwood</b><br>Danger Level: 11<br><b>Story</b>: H'aanit - Chapter 1").openTooltip();
let theSpectrewoodChapter2 = L.marker(theSpectrewoodPos, {icon: forestGreenIcon}).bindTooltip("<b>The Spectrewood</b><br>Danger Level: 27<br><b>Story</b>: H'aanit - Chapter 2<br><b>Purple Chest</b>: Fire Amulet").openTooltip();
let TheWhitewoodChapter3   = L.marker(TheWhitewoodPos, {icon: forestGreenIcon}).bindTooltip("<b>The Whitewood</b><br>Danger Level: 38<br><b>Story</b>: H'aanit - Chapter 3<br /><b>Purple Chest</b>: 15000 Leaves").openTooltip();
let grimsandRuinChapter4   = L.marker(grimsandRuinPos, {icon: ruinsGreenIcon}).bindTooltip("<b>Grimsand Ruin</b><br>Danger Level: 45<br><b>Story</b>: H'aanit - Chapter 4<br><b>Purple Chest</b>: Unseen Saber, 50,000 Leaves").openTooltip();

let haanitChapters = L.layerGroup([theWhisperwoodChapter1, theSpectrewoodChapter2, TheWhitewoodChapter3, grimsandRuinChapter4]);

// Olberic
let brigandsDenChapter1   = L.marker(brigandsDenPos, {icon: caveGreenIcon}).bindTooltip("<b>Brigand's Den</b><br>Danger Level: 11<br><b>Story</b>: Olberic - Chapter 1").openTooltip();
let victorshollowChapter2 = L.marker(victorshollowPos, {icon: cityGreenIcon}).bindTooltip("<b>Victor's Hollow Arena</b><br>Danger Level: 27<br><b>Story</b>: Olberic - Chapter 2<br><b>Purple Chest</b>: Dark Amulet").openTooltip();
let lizardmansDenChapter3 = L.marker(lizardmansDenPos, {icon: caveGreenIcon}).bindTooltip("<b>Lizardman's Den</b><br>Danger Level: 32<br><b>Story</b>: Olberic - Chapter 3<br><b>Purple Chest</b>: Silver-filled Pouch").openTooltip();
let lordsManseChapter4    = L.marker(lordsMansePos, {icon: mansionGreenIcon}).bindTooltip("<b>Lord's Manse</b><br>Danger Level: 45<br><b>Story</b>: Olberic - Chapter 4<br><b>Purple Chest</b>: Imperial Helm, Rune Hatchet").openTooltip();
let hiddenPathChapter4    = L.marker(hiddenPathPos, {icon: catacombGreenIcon}).bindTooltip("<b>Hidden Path</b><br>Danger Level: 45<br><b>Story</b>: Olberic - Chapter 4<br><b>Purple Chest</b>: Imperial Helm").openTooltip();

let olbericChapters = L.layerGroup([brigandsDenChapter1, victorshollowChapter2, lizardmansDenChapter3, lordsManseChapter4, hiddenPathChapter4]);

// Ophilia
let caveOfOriginChapter1  = L.marker(caveOfOriginPos, {icon: caveGreenIcon}).bindTooltip("<b>Cave of Origin</b><br>Danger Level: 11<br><b>Story</b>: Ophilia - Chapter 1").openTooltip();
let theMurkwoodChapter2   = L.marker(theMurkwoodPos, {icon: forestGreenIcon}).bindTooltip("<b>The Murkwood</b><br>Danger Level: 23<br><b>Story</b>: Ophilia - Chapter 2<br><b>Purple Chest</b>: Clarity Stone").openTooltip();
let seasideGrottoChapter3 = L.marker(seasideGrottoPos, {icon: caveGreenIcon}).bindTooltip("<b>Seaside Grotto</b><br>Danger Level: 38<br><b>Story</b>: Ophilia - Chapter 3<br><b>Purple Chest</b>: Grand Helm").openTooltip();
let ebonyGrottoChapter4   = L.marker(ebonyGrottoPos, {icon: caveGreenIcon}).bindTooltip("<b>Ebony Grotto</b><br>Danger Level: 45<br><b>Story</b>: Ophilia - Chapter 4<br><b>Purple Chest</b>: Adamantine Hat").openTooltip();

let ophiliaChapters = L.layerGroup([caveOfOriginChapter1, theMurkwoodChapter2, seasideGrottoChapter3, ebonyGrottoChapter4]);

// Primrose
let sunshadeCatacombsChapter1 = L.marker(sunshadeCatacombsPos, {icon: catacombGreenIcon}).bindTooltip("<b>Sunshade Catacombs</b><br>Danger Level: 11<br><b>Story</b>: Primrose - Chapter 1").openTooltip();
let obsidianParlorChapter2    = L.marker(obsidianParlorPos, {icon: mansionGreenIcon}).bindTooltip("<b>Obsidian Parlor</b><br>Danger Level: 21<br><b>Story</b>: Primrose - Chapter 2<br><b>Purple Chest</b>: Spiked Vest").openTooltip();
let obsidianManseChapter3     = L.marker(obsidianMansePos, {icon: mansionGreenIcon}).bindTooltip("<b>Obsidian Manse</b><br>Danger Level: 40<br><b>Story</b>: Primrose - Chapter 3<br><b>Purple Chest</b>: Elemental Hat").openTooltip();
let amphitheatreChapter4      = L.marker(amphitheatrePos, {icon: mansionGreenIcon}).bindTooltip("<b>Amphitheatre</b><br>Danger Level: 45<br><b>Story</b>: Primrose - Chapter 4<br><b>Purple Chest</b>: Unseen Saber, Enchanted Rod, Ethereal Dancers Garb").openTooltip();

let primroseChapters = L.layerGroup([sunshadeCatacombsChapter1, obsidianParlorChapter2, obsidianManseChapter3, amphitheatreChapter4]);

// Therion
let ravusManorChapter1    = L.marker(ravusManorPos, {icon: mansionGreenIcon}).bindTooltip("<b>Ravus Manor</b><br>Danger Level: 11<br><b>Story</b>: Therion - Chapter 1<br><b>Purple Chest</b>: Wind Attire, SP Nut").openTooltip();
let orlicksManseChapter2  = L.marker(orlicksMansePos, {icon: mansionGreenIcon}).bindTooltip("<b>Orlick's Manse</b><br>Danger Level: 22<br><b>Story</b>: Therion - Chapter 2<br><b>Purple Chest</b>: Lightning Amulet").openTooltip();
let blackMarketChapter3   = L.marker(blackMarketPos, {icon: caveGreenIcon}).bindTooltip("<b>Black Market</b><br>Danger Level: 36<br><b>Story</b>: Therion - Chapter 3<br><b>Purple Chest</b>: Calming Stone").openTooltip();
let lornCathedralChapter4 = L.marker(lornCathedralPos, {icon: ruinsGreenIcon}).bindTooltip("<b>Lorn Cathedral</b><br>Danger Level: 45<br><b>Story</b>: Therion - Chapter 4<br><b>Purple Chest</b>: Enchanted Sword").openTooltip();

let therionChapters = L.layerGroup([ravusManorChapter1, orlicksManseChapter2, blackMarketChapter3, lornCathedralChapter4]);

// Tressa
let cavesOfMaiyaChapter1    = L.marker(cavesOfMaiyaPos, {icon: caveGreenIcon}).bindTooltip("<b>Caves of Maiya</b><br>Danger Level: 11<br><b>Story</b>: Tressa - Chapter 1").openTooltip();
let morlocksManseChapter2   = L.marker(morlocksMansePos, {icon: mansionGreenIcon}).bindTooltip("<b>Morlock's Manse</b><br>Danger Level: 18<br><b>Story</b>: Tressa - Chapter 2<br><b>Purple Chest</b>: Hasty Helm").openTooltip();
let forgottenGrottoChapter3 = L.marker(forgottenGrottoPos, {icon: caveGreenIcon}).bindTooltip("<b>Forgotten Grotto</b><br>Danger Level: 34<br><b>Story</b>: Tressa - Chapter 3<br><b>Purple Chest</b>: Sledge Hammer").openTooltip();
let grandportSewersChapter4 = L.marker(grandportSewersPos, {icon: catacombGreenIcon}).bindTooltip("<b>Grandport Sewers</b><br>Danger Level: 45<br><b>Story</b>: Tressa - Chapter 4<br><b>Purple Chest</b>: Legion Dagger").openTooltip();

let tressaChapters = L.layerGroup([cavesOfMaiyaChapter1, morlocksManseChapter2, forgottenGrottoChapter3, grandportSewersChapter4]);



// Level 1-19

let caveOfOrigin_1_19      = L.marker(caveOfOriginPos, {icon: caveGreenIcon}).bindTooltip("<b>Cave of Origin</b><br>Danger Level: 11<br><b>Story</b>: Ophilia - Chapter 1").openTooltip();
let subterraneanStudy_1_19 = L.marker(subterraneanStudyPos, {icon: caveGreenIcon}).bindTooltip("<b>Subterranean Study</b><br>Danger Level: 11<br><b>Story</b>: Cyrus - Chapter 1").openTooltip();
let cavesOfRhiyo_1_19      = L.marker(cavesOfRhiyoPos, {icon: caveGreenIcon}).bindTooltip("<b>Caves of Rhiyo</b><br>Danger Level: 11<br><b>Story</b>: Alfyn - Chapter 1").openTooltip();
let cavesOfMaiya_1_19      = L.marker(cavesOfMaiyaPos, {icon: caveGreenIcon}).bindTooltip("<b>Caves of Maiya</b><br>Danger Level: 11<br><b>Story</b>: Tressa - Chapter 1").openTooltip();
let brigandsDen_1_19       = L.marker(brigandsDenPos, {icon: caveGreenIcon}).bindTooltip("<b>Brigand's Den</b><br>Danger Level: 11<br><b>Story</b>: Olberic - Chapter 1").openTooltip();
let untouchedSanctum_1_19  = L.marker(untouchedSanctumPos, {icon: caveGreenIcon}).bindTooltip("<b>Untouched Sanctum</b><br>Danger Level: 15<br><b>Purple Chest</b>: Accuracy Nut").openTooltip();
let theWhistlewood_1_19    = L.marker(theWhistlewoodPos, {icon: forestGreenIcon}).bindTooltip("<b>The Whistlewood</b><br>Danger Level: 15").openTooltip();
let pathOfBeasts_1_19      = L.marker(pathOfBeastsPos, {icon: forestGreenIcon}).bindTooltip("<b>Path of Beasts</b><br>Danger Level: 15<br /><b>Purple Chest</b>: War Lance").openTooltip();
let theWhisperwood_1_19    = L.marker(theWhisperwoodPos, {icon: forestGreenIcon}).bindTooltip("<b>The Whisperwood</b><br>Danger Level: 11<br><b>Story</b>: H'aanit - Chapter 1").openTooltip();
let sunshadeCatacombs_1_19 = L.marker(sunshadeCatacombsPos, {icon: catacombGreenIcon}).bindTooltip("<b>Sunshade Catacombs</b><br>Danger Level: 11<br><b>Story</b>: Primrose - Chapter 1").openTooltip();
let ravusManor_1_19        = L.marker(ravusManorPos, {icon: mansionGreenIcon}).bindTooltip("<b>Ravus Manor</b><br>Danger Level: 11<br><b>Story</b>: Therion - Chapter 1<br><b>Purple Chest</b>: Wind Attire, SP Nut").openTooltip();
let morlocksManse_1_19     = L.marker(morlocksMansePos, {icon: mansionGreenIcon}).bindTooltip("<b>Morlock's Manse</b><br>Danger Level: 18<br><b>Story</b>: Tressa - Chapter 2<br><b>Purple Chest</b>: Hasty Helm").openTooltip();
let level_1_19             = L.layerGroup([caveOfOrigin_1_19, subterraneanStudy_1_19, cavesOfRhiyo_1_19, cavesOfMaiya_1_19, brigandsDen_1_19, untouchedSanctum_1_19, theWhistlewood_1_19, pathOfBeasts_1_19, theWhisperwood_1_19, theWhisperwood_1_19, sunshadeCatacombs_1_19, ravusManor_1_19, morlocksManse_1_19]);

// Level 20-29

let hoarfrostGrotto_20_29  = L.marker(hoarfrostGrottoPos, {icon: caveGreenIcon}).bindTooltip("<b>Hoarfrost Grotto</b><br>Danger Level: 25<br><b>Purple Chest</b>: Soul Hatchet").openTooltip();
let carrionCaves_20_29     = L.marker(carrionCavesPos, {icon: caveGreenIcon}).bindTooltip("<b>Carrion Caves</b><br>Danger Level: 20<br><b>Purple Chest</b>: Physical Defense Nut").openTooltip();
let twinFalls_20_29        = L.marker(twinFallsPos, {icon: caveGreenIcon}).bindTooltip("<b>Twin Falls</b><br>Danger Level: 20<br><b>Purple Chest</b>: Psychic Staff").openTooltip();
let whistlingCaverns_20_29 = L.marker(whistlingCavernsPos, {icon: caveGreenIcon}).bindTooltip("<b>Whistling Caverns</b><br>Danger Level: 20<br><b>Purple Chest</b>: 6,000 Leaves").openTooltip();
let cavesOfAzure_20_29     = L.marker(cavesOfAzurePos, {icon: caveGreenIcon}).bindTooltip("<b>Caves of Azure</b><br>Danger Level: 24<br><b>Story</b>: Alfyn - Chapter 2<br><b>Purple Chest</b>: Spiked Vest, Falcon Garb").openTooltip();
let theMurkwood_20_29      = L.marker(theMurkwoodPos, {icon: forestGreenIcon}).bindTooltip("<b>The Murkwood</b><br>Danger Level: 23<br><b>Story</b>: Ophilia - Chapter 2<br><b>Purple Chest</b>: Clarity Stone").openTooltip();
let theSpectrewood_20_29   = L.marker(theSpectrewoodPos, {icon: forestGreenIcon}).bindTooltip("<b>The Spectrewood</b><br>Danger Level: 27<br><b>Story</b>: H'aanit - Chapter 2<br><b>Purple Chest</b>: Fire Amulet").openTooltip();
let theHollowThrone_20_29  = L.marker(theHollowThronePos, {icon: ruinsGreenIcon}).bindTooltip("<b>The Hollow Throne</b><br>Danger Level: 25<br><b>Purple Chest</b>: Argent Axe").openTooltip();
let tombOfKings_20_29      = L.marker(tombOfKingsPos, {icon: ruinsGreenIcon}).bindTooltip("<b>Tomb of Kings</b><br>Danger Level: 25<br><b>Purple Chest</b>: Hasty Helm").openTooltip();
let theSewers_20_29        = L.marker(theSewersPos, {icon: catacombGreenIcon}).bindTooltip("<b>The Sewers</b><br>Danger Level: 24<br><b>Story</b>: Cyrus - Chapter 2<br><b>Purple Chest</b>: Snipe Saber").openTooltip();
let orlicksManse_20_29     = L.marker(orlicksMansePos, {icon: mansionGreenIcon}).bindTooltip("<b>Orlick's Manse</b><br>Danger Level: 22<br><b>Story</b>: Therion - Chapter 2<br><b>Purple Chest</b>: Lightning Amulet").openTooltip();
let obsidianParlor_20_29   = L.marker(obsidianParlorPos, {icon: mansionGreenIcon}).bindTooltip("<b>Obsidian Parlor</b><br>Danger Level: 21<br><b>Story</b>: Primrose - Chapter 2<br><b>Purple Chest</b>: Spiked Vest").openTooltip();


let level_20_29 = L.layerGroup([hoarfrostGrotto_20_29, carrionCaves_20_29, twinFalls_20_29, whistlingCaverns_20_29, cavesOfAzure_20_29, theMurkwood_20_29, theSpectrewood_20_29, theHollowThrone_20_29, tombOfKings_20_29, theSewers_20_29, orlicksManse_20_29, obsidianParlor_20_29]);

// Level 30-39

let forgottenGrotto_30_39    = L.marker(forgottenGrottoPos, {icon: caveGreenIcon}).bindTooltip("<b>Forgotten Grotto</b><br>Danger Level: 34<br><b>Story</b>: Tressa - Chapter 3<br><b>Purple Chest</b>: Sledge Hammer").openTooltip();
let derelictMine_30_39       = L.marker(derelictMinePos, {icon: caveGreenIcon}).bindTooltip("<b>Derelict Mine</b><br>Danger Level: 30<br><b>Purple Chest</b>: Conscious Stone").openTooltip();
let farshore_30_39           = L.marker(farshorePos, {icon: caveGreenIcon}).bindTooltip("<b>Farshore</b><br>Danger Level: 30<br><b>Purple Chest</b>: Clarity Stone, 30,000 Leaves").openTooltip();
let blackMarket_30_39        = L.marker(blackMarketPos, {icon: caveGreenIcon}).bindTooltip("<b>Black Market</b><br>Danger Level: 36<br><b>Story</b>: Therion - Chapter 3<br><b>Purple Chest</b>: Calming Stone").openTooltip();
let lizardmansDen_30_39      = L.marker(lizardmansDenPos, {icon: caveGreenIcon}).bindTooltip("<b>Lizardman's Den</b><br>Danger Level: 32<br><b>Story</b>: Olberic - Chapter 3<br><b>Purple Chest</b>: Silver-filled Pouch").openTooltip();
let captainsBain_30_39       = L.marker(captainsBainPos, {icon: caveGreenIcon}).bindTooltip("<b>Captains' Bain</b><br>Danger Level: 35<br><b>Purple Chest</b>: Hedgehog Spear").openTooltip();
let seasideGrotto_30_39      = L.marker(seasideGrottoPos, {icon: caveGreenIcon}).bindTooltip("<b>Seaside Grotto</b><br>Danger Level: 38<br><b>Story</b>: Ophilia - Chapter 3<br><b>Purple Chest</b>: Grand Helm").openTooltip();
let TheWhitewood_30_39       = L.marker(TheWhitewoodPos, {icon: forestGreenIcon}).bindTooltip("<b>The Whitewood</b><br>Danger Level: 38<br><b>Story</b>: H'aanit - Chapter 3<br /><b>Purple Chest</b>: 15,000 Leaves").openTooltip();
let riviraWoods_30_39        = L.marker(riviraWoodsPos, {icon: forestGreenIcon}).bindTooltip("<b>Rivira Woods</b><br>Danger Level: 32<br><b>Story</b>: Alfyn - Chapter 3<br><b>Purple Chest</b>: Gaolbreaker, Ice Amulet").openTooltip();
let tombOfTheImperator_30_39 = L.marker(tombOfTheImperatorPos, {icon: catacombGreenIcon}).bindTooltip("<b>Tomb of the Imperator</b><br>Danger Level: 35<br><b>Purple Chest</b>: Wakeful Stone").openTooltip();


let level_30_39 = L.layerGroup([forgottenGrotto_30_39, derelictMine_30_39, farshore_30_39, blackMarket_30_39, lizardmansDen_30_39, captainsBain_30_39, seasideGrotto_30_39, TheWhitewood_30_39, riviraWoods_30_39, tombOfTheImperator_30_39]);

// Level 40+

let undertowCove_40_49      = L.marker(undertowCovePos, {icon: caveGreenIcon}).bindTooltip("<b>Undertow Cove</b><br>Danger Level: 45<br>Purple Chest Justice Breaker").openTooltip();
let ebonyGrotto_40_49       = L.marker(ebonyGrottoPos, {icon: caveGreenIcon}).bindTooltip("<b>Ebony Grotto</b><br>Danger Level: 45<br><b>Story</b>: Ophilia - Chapter 4<br><b>Purple Chest</b>: Adamantine Hat").openTooltip();
let mawOfTheIceDragon_40_49 = L.marker(mawOfTheIceDragonPos, {icon: caveGreenIcon}).bindTooltip("<b>Maw of the Ice Dragon</b><br>Danger Level: 45<br><b>Purple Chest</b>: Adamantine Hat").openTooltip();
let quicksandCaves_40_49    = L.marker(quicksandCavesPos, {icon: caveGreenIcon}).bindTooltip("<b>Quicksand Caves</b><br>Danger Level: 40<br><b>Purple Chest</b>: Inferno Axe").openTooltip();
let forestOfNoReturn_40_49  = L.marker(forestOfNoReturnPos, {icon: forestGreenIcon}).bindTooltip("<b>Forest of No Return</b><br>Danger Level: 48<br /><b>Purple Chest</b>: Elemental Glaive").openTooltip();
let forestOfRubeh_40_49     = L.marker(forestOfRubehPos, {icon: forestGreenIcon}).bindTooltip("<b>Forest of Rubeh</b><br>Danger Level: 45<br><b>Story</b>: Alfyn - Chapter 4<br><b>Purple Chest</b>: Inferno Amulet").openTooltip();
let lornCathedral_40_49     = L.marker(lornCathedralPos, {icon: ruinsGreenIcon}).bindTooltip("<b>Lorn Cathedral</b><br>Danger Level: 45<br><b>Story</b>: Therion - Chapter 4<br><b>Purple Chest</b>: Enchanted Sword").openTooltip();
let ruinsOfEld_40_49        = L.marker(ruinsOfEldPos, {icon: ruinsGreenIcon}).bindTooltip("<b>Ruins of Eld</b><br>Danger Level: 45<br><b>Story</b>: Cyrus - Chapter 4<br><b>Purple Chest</b>: Rune Bow, 50,000 Leaves").openTooltip();
let grimsandRuin_40_49      = L.marker(grimsandRuinPos, {icon: ruinsGreenIcon}).bindTooltip("<b>Grimsand Ruin</b><br>Danger Level: 45<br><b>Story</b>: H'aanit - Chapter 4<br><b>Purple Chest</b>: Unseen Saber, 50,000 Leaves").openTooltip();
let molderingRuins_40_49    = L.marker(molderingRuinsPos, {icon: catacombGreenIcon}).bindTooltip("<b>Moldering Ruins</b><br>Danger Level: 45<br><b>Purple Chest</b>: Hypnos Crown").openTooltip();
let hiddenPath_40_49        = L.marker(hiddenPathPos, {icon: catacombGreenIcon}).bindTooltip("<b>Hidden Path</b><br>Danger Level: 45<br><b>Story</b>: Olberic - Chapter 4<br><b>Purple Chest</b>: Imperial Helm").openTooltip();
let grandportSewers_40_49   = L.marker(grandportSewersPos, {icon: catacombGreenIcon}).bindTooltip("<b>Grandport Sewers</b><br>Danger Level: 45<br><b>Story</b>: Tressa - Chapter 4<br><b>Purple Chest</b>: Legion Dagger").openTooltip();
let obsidianManse_40_49     = L.marker(obsidianMansePos, {icon: mansionGreenIcon}).bindTooltip("<b>Obsidian Manse</b><br>Danger Level: 40<br><b>Story</b>: Primrose - Chapter 3<br><b>Purple Chest</b>: Elemental Hat").openTooltip();
let lordsManse_40_49        = L.marker(lordsMansePos, {icon: mansionGreenIcon}).bindTooltip("<b>Lord's Manse</b><br>Danger Level: 45<br><b>Story</b>: Olberic - Chapter 4<br><b>Purple Chest</b>: Imperial Helm, Rune Hatchet").openTooltip();
let amphitheatre_40_49      = L.marker(amphitheatrePos, {icon: mansionGreenIcon}).bindTooltip("<b>Amphitheatre</b><br>Danger Level: 45<br><b>Story</b>: Primrose - Chapter 4<br><b>Purple Chest</b>: Unseen Saber, Enchanted Rod, Ethereal Dancers Garb").openTooltip();
let yvonsBirthplace_40_49   = L.marker(yvonsBirthplacePos, {icon: mansionGreenIcon}).bindTooltip("<b>Yvon's Birthplace</b><br>Danger Level: 40<br><b>Story</b>: Cyrus - Chapter 3<br><b>Purple Chest</b>: Sturdy Quartz Rod").openTooltip();

let level_40_49 = L.layerGroup([undertowCove_40_49, ebonyGrotto_40_49, mawOfTheIceDragon_40_49, quicksandCaves_40_49, forestOfNoReturn_40_49, forestOfRubeh_40_49, lornCathedral_40_49, ruinsOfEld_40_49, grimsandRuin_40_49, molderingRuins_40_49, hiddenPath_40_49, grandportSewers_40_49, obsidianManse_40_49, lordsManse_40_49, amphitheatre_40_49, yvonsBirthplace_40_49]);

// Level 50+

let refugeRuins_50_59       = L.marker(refugeRuinsPos, {icon: caveGreenIcon}).bindTooltip("<b>Refuge Ruins</b><br>Danger Level: 50<br><b>Purple Chest</b>: Forbidden Sword").openTooltip();
let lochOfTheLostKing_50_59 = L.marker(lochOfTheLostKingPos, {icon: caveGreenIcon}).bindTooltip("<b>Loch of the Lost King</b><br>Danger Level: 50<br><b>Purple Chest</b>: Sturdy Sapphire Rod").openTooltip();
let forestOfPurgation_50_59 = L.marker(forestOfPurgationPos, {icon: forestGreenIcon}).bindTooltip("<b>Forest of Purgation</b><br>Danger Level: 58<br><b>Purple Chest</b>: Forbidden Dagger").openTooltip();
let dragonsongFane_50_59    = L.marker(dragonsongFanePos, {icon: ruinsGreenIcon}).bindTooltip("<b>Dragonsong Fane</b><br>Danger Level: 50<br><b>Purple Chest</b>: Holy Longbow").openTooltip();
let everholdTunnels_50_59   = L.marker(everholdTunnelsPos, {icon: ruinsGreenIcon}).bindTooltip("<b>Everhold Tunnels</b><br>Danger Level: 50<br><b>Purple Chest</b>: Knowledge Staff").openTooltip();
let marsalimCatacombs_50_59 = L.marker(marsalimCatacombsPos, {icon: ruinsGreenIcon}).bindTooltip("<b>Marsalim Catacombs</b><br>Danger Level: 50<br><b>Purple Chest</b>: Viper Dagger").openTooltip();

let level_50_59 = L.layerGroup([refugeRuins_50_59, lochOfTheLostKing_50_59, forestOfPurgation_50_59, dragonsongFane_50_59, everholdTunnels_50_59, marsalimCatacombs_50_59]);

