const assetRoot = "http://www.octopathtravelmap.com/"

let yx = L.latLng;

let xy = (x, y) => {
    // When doing xy([x, y]);
    if (L.Util.isArray(x)) {
        return yx(x[1], x[0]);
    }
    // When doing xy(x, y);
    return yx(y, x);
};

let CharacterIcon = L.Icon.extend({
    options: {
        iconSize:    [49, 75],
        iconAnchor:  [24, 38],
        popupAnchor: [-3, -3],
    }
});

let cityIcon = L.icon({
    iconUrl:      `${assetRoot}/images/icons/town.png`,
    shadowUrl:    `${assetRoot}/images/icons/town_b.png`,
    iconSize:     [41, 37],
    shadowSize:   [41, 37],
    iconAnchor:   [20, 18],
    shadowAnchor: [18, 18],
    popupAnchor:  [-3, -3]
});

let caveIcon = L.icon({
    iconUrl:      `${assetRoot}/images/icons/cave.png`,
    shadowUrl:    `${assetRoot}/images/icons/cave_b.png`,
    iconSize:     [41, 37],
    shadowSize:   [41, 37],
    iconAnchor:   [20, 18],
    shadowAnchor: [19, 19],
    popupAnchor:  [-3, -3]
});

let forestIcon = L.icon({
    iconUrl:      `${assetRoot}/images/icons/forest.png`,
    shadowUrl:    `${assetRoot}/images/icons/forest_b.png`,
    iconSize:     [41, 37],
    shadowSize:   [41, 37],
    iconAnchor:   [20, 18],
    shadowAnchor: [18, 18],
    popupAnchor:  [-3, -3]
});

let mansionIcon = L.icon({
    iconUrl:      `${assetRoot}/images/icons/mansion.png`,
    shadowUrl:    `${assetRoot}/images/icons/mansion_b.png`,
    iconSize:     [41, 37],
    shadowSize:   [41, 37],
    iconAnchor:   [20, 18],
    shadowAnchor: [18, 18],
    popupAnchor:  [-3, -3]
});

let ruinsIcon = L.icon({
    iconUrl:      `${assetRoot}/images/icons/ruins.png`,
    shadowUrl:    `${assetRoot}/images/icons/ruins_b.png`,
    iconSize:     [32, 37],
    shadowSize:   [32, 37],
    iconAnchor:   [20, 18],
    shadowAnchor: [18, 18],
    popupAnchor:  [-3, -3]
});

let catacombIcon = L.icon({
    iconUrl:      `${assetRoot}/images/icons/catacomb.png`,
    shadowUrl:    `${assetRoot}/images/icons/catacomb_b.png`,
    iconSize:     [41, 37],
    shadowSize:   [41, 37],
    iconAnchor:   [20, 18],
    shadowAnchor: [18, 18],
    popupAnchor:  [-3, -3]
});

let shrineIcon = L.icon({
    iconUrl:      `${assetRoot}/images/icons/shrine.png`,
    shadowUrl:    `${assetRoot}/images/icons/shrine_b.png`,
    iconSize:     [22, 24],
    shadowSize:   [22, 24],
    iconAnchor:   [14, 13],
    shadowAnchor: [13, 11],
    popupAnchor:  [-3, -3]
});

let advancedShrineIcon = L.icon({
    iconUrl:      `${assetRoot}/images/icons/advanced_shrine.png`,
    shadowUrl:    `${assetRoot}/images/icons/shrine_b.png`,
    iconSize:     [24, 26],
    shadowSize:   [22, 24],
    iconAnchor:   [14, 13],
    shadowAnchor: [13, 9],
    popupAnchor:  [-3, -3]
});

let zoneIcon = L.icon({
    iconUrl: `${assetRoot}/images/icons/zone.png`,
    iconSize:     [26, 29],
    iconAnchor:   [13, 14],
    popupAnchor:  [-3, -3]
});

let cityGreenIcon = L.icon({
    iconUrl:      `${assetRoot}/images/icons/town_g.png`,
    shadowUrl:    `${assetRoot}/images/icons/town_b.png`,
    iconSize:     [41, 37],
    shadowSize:   [41, 37],
    iconAnchor:   [20, 18],
    shadowAnchor: [18, 18],
    popupAnchor:  [-3, -3]
});

let caveGreenIcon = L.icon({
    iconUrl:      `${assetRoot}/images/icons/cave_g.png`,
    shadowUrl:    `${assetRoot}/images/icons/cave_b.png`,
    iconSize:     [41, 37],
    shadowSize:   [41, 37],
    iconAnchor:   [20, 18],
    shadowAnchor: [19, 19],
    popupAnchor:  [-3, -3]
});

let forestGreenIcon = L.icon({
    iconUrl:      `${assetRoot}/images/icons/forest_g.png`,
    shadowUrl:    `${assetRoot}/images/icons/forest_b.png`,
    iconSize:     [41, 37],
    shadowSize:   [41, 37],
    iconAnchor:   [20, 18],
    shadowAnchor: [18, 18],
    popupAnchor:  [-3, -3]
});

let mansionGreenIcon = L.icon({
    iconUrl:      `${assetRoot}/images/icons/mansion_g.png`,
    shadowUrl:    `${assetRoot}/images/icons/mansion_b.png`,
    iconSize:     [41, 37],
    shadowSize:   [41, 37],
    iconAnchor:   [20, 18],
    shadowAnchor: [18, 18],
    popupAnchor:  [-3, -3]
});

let ruinsGreenIcon = L.icon({
    iconUrl:      `${assetRoot}/images/icons/ruins_g.png`,
    shadowUrl:    `${assetRoot}/images/icons/ruins_b.png`,
    iconSize:     [32, 37],
    shadowSize:   [32, 37],
    iconAnchor:   [20, 18],
    shadowAnchor: [18, 18],
    popupAnchor:  [-3, -3]
});

let catacombGreenIcon = L.icon({
    iconUrl:      `${assetRoot}/images/icons/catacomb_g.png`,
    shadowUrl:    `${assetRoot}/images/icons/catacomb_b.png`,
    iconSize:     [41, 37],
    shadowSize:   [41, 37],
    iconAnchor:   [20, 18],
    shadowAnchor: [18, 18],
    popupAnchor:  [-3, -3]
});

let alfynIcon    = new CharacterIcon({iconUrl: `${assetRoot}/images/alfyn.png`})
let cyrusIcon    = new CharacterIcon({iconUrl: `${assetRoot}/images/cyrus.png`})
let haanitIcon   = new CharacterIcon({iconUrl: `${assetRoot}/images/haanit.png`})
let olbericIcon  = new CharacterIcon({iconUrl: `${assetRoot}/images/olberic.png`})
let opheliaIcon  = new CharacterIcon({iconUrl: `${assetRoot}/images/ophelia.png`})
let primroseIcon = new CharacterIcon({iconUrl: `${assetRoot}/images/primrose.png`})
let therioncon   = new CharacterIcon({iconUrl: `${assetRoot}/images/therion.png`})
let tressaIcon   = new CharacterIcon({iconUrl: `${assetRoot}/images/tressa.png`})

// Quests Chapter 1 Towns

let flamesgraceSideQuests             = "<br><br><b>Side Quests</b><br><br><b>The Innocent Inmate</b><br>Character: Accused Man<br>Steal/Purchase Dungeon Key from Guard<br>Alternate: Inquire/Scrutinize Eyewitness Account near weapon shop<br><b>Reward</b>: 1,500 Leaves, Tough Nut<br><br><b>The Slumbering Giant</b><br>Character: Diligent Student<br>Inquire/Scrutinize Muttering Coder then defeat Jotunn in Hoarfrost Grotto<br><b>Reward</b>: 4,500 Leaves, Calamity Spear<br><br><b>Sir Miles, Servant of the Flame</b><br>Character: Miles<br>Inquire/Scrutinize Former Knight Ardante in Cathedral<br><b>Reward</b>: 1,500 Leaves, Nourishing Nut";
let atlasdamSideQuests                = "<br><br><b>Side Quests</b><br><br><b>Theracio's Tutelage</b><br>Character: Theracio<br>Challenge/Provoke Moneylender<br><b>Reward</b>: 1,500 Leaves, Invigorating Nut<br><br><b>Fit for a King</b><br>Character: Capable Culinarian<br>Steal/Purchase Ambrosia Milk, Roc Egg, Emperor Cran in Atlasdam<br><b>Reward</b>: 1,500 Leaves, Healing Grape (M) x2<br><br><b>City of Gold</b><br>Character: Passionate Reader<br>Guide/Allure Best-selling Author from West Grandport Coast<br>Alternate: Inquire/Scrutinize City of Gold from Scholarly Youth in Marsalim<br><b>Reward</b>: 9,000 Leaves, Alluring Ribbon<br><br><b>The Prodigious Painting</b><br>Character: Art Lover<br>Steal/Purchase Final Masterpiece from Landscape Artist at East Saintsbridge Traverse<br>Alternate: Guide/Allure Landscape Artist from East Saintsbridge Traverse to quest giver<br><b>Reward</b>: 13,000 Leaves";
let rippletideSideQuests              = "<br><br><b>Side Quests</b><br><br><b>Love Unrequited</b><br>Character: Mathilda<br>Challenge/Provoke Tony nearby and lose<br>Alternate: Guide/Allure Tony's Mom and talk to him<br><b>Reward</b>: 1,500 Leaves, Critical Nut (M)<br><br><b>Le Mann, Explorer Extraordinaire</b><br>Character: Le Mann<br>Steal/Purchase Adventurer's Attire from Rippletide Antique Dealer<br><b>Reward</b>: 1,500 Leaves, Fortifying Nut";
let cobblestonSideQuests              = "<br><br><b>Side Quests</b><br><br><b>Fertile Fields</b><br>Character: Kindly Farmer<br>Steal/Purchase Cow Dung from nearby Courageous Cowherd in Cobbleston<br><b>Reward</b>: 1,500 Leaves, Inspiriting Plum (M) x3<br><br><b>Never Forget</b><br>Character: Melancholy Youth<br>Steal/Purchase Lorie's Diary from Affable Antiquarian in Noblecourt<br>Alternate: Guide/Allure quest giver to grave in Noblecourt<br><b>Reward</b>: 9,000 Leaves, Sharp Nut (M)<br><br><b>Noelle, Seeker of Knowledge</b><br>Character: Noelle<br>Guide/Allure Noelle to the monument in Untouched Sanctum<br><b>Reward</b>: 4,800 Leaves, Tough Nut";
let sunshadeSideQuests                = "<br><br><b>Side Quests</b><br><br><b>Her Time to Shine</b><br>Character: Blue Dancer<br>Steal/Purchase Diva's Dress from Star Dancer in Sunshade<br>Alternate: Guide/Allure Blue Dancer to Sickly Girl/Pensive Mother<br><b>Reward</b>: 1,500 Leaves, Wind Amulet<br><br><b>Ria, Born to Roam</b><br>Character: Wayfaring Girl<br>Challenge/Provoke the guy harassing her<br><b>Reward</b>: 1,500 Leaves, Magic Nut<br><br><b>The Bouncer</b><br>Character: Hired Barkeep<br>Challenge/Provoke Bouncer outside of Tavern with Olberic<br><b>Reward</b>: 1,500 Leaves, Fortifying Nut";
let southClearbrookTraverseSideQuests = "<br><br><b>Side Quests</b><br><br><b>A Sweet Reunion</b><br>Character: Lost Grandfather<br>Guide/Allure to Lonely Grandchild in Clearbrook<br><b>Reward</b>: 2,000 Leaves, 2,000 Leaves";
let clearbrookSideQuests              = "<br><br><b>Side Quests</b><br><br><b>Meryl, Lost then Found</b><br>Character: Meryl<br>Inquire/Scrutinize Meryl's father in Clearbrook<br><b>Reward</b>: 1,500 Leaves, Resistant Nut<br><br><b>For Want of Fish</b><br>Character: Angler<br>Steal/Purchase Saucy Prawns from Magg the Cook in Clearbrook Tavern<br><b>Reward</b>: 1,500 Leaves, Mighty Belt";
let bolderfallSideQuests              = "<br><br><b>Side Quests</b><br><br><b>Kaia, Mother of Dragons</b><br>Character: Egg-seeking Girl<br>Inquire/Scrutinize Friendly Farmer in West Clearbrook Traverse, Giant Egg from treasure spot<br><b>Reward</b>: 1,500 Leaves, Light Nut<br><br><b>Daughter of the Dark God</b><br>Character: Alphas<br>Challenge/Provoke Alphas<br><b>Reward</b>: 5,000 Leaves<br><br><b>The Bandits' Code</b><br>Character: Veteran Brigand<br>Allure/Guide Faltering Youth from Sunshade Tavern<br>Alternate: Inquire/Scrutinize Marta's Gang at Victor's Hollow<br><b>Reward</b>: 2,400 Leaves, Blazon of Protection<br><br><b>Sparks of Revolution</b><br>Character: Stern Guardsman<br>Steal/Purchase Revolutionary Sword, Spear of Justice, Rebel Axe from Lower Bolderfall<br>Alternate: Inquire/Scrutinize Project Plans from Enlightened Aristocrat, talk to Pauper Revolutionary<br><b>Reward</b>: 2,000 Leaves";
let swarkiiSideQuests                 = "<br><br><b>Side Quests</b><br><br><b>Ashlan the Beastmaster</b><br>Character: Ashlan<br>Inquire/Scrutinize about beast masters at S'warkii tavern<br><b>Reward</b>: 1,500 Leaves, Slippery Nut<br><br><b>Rite of Passage</b><br>Character: Aspiring Hunter<br>Steal/Purchase Giant Tusk from Nomadic Hunter in forest north of S'warkii<br>Alternate: Inquire/Scrutiize Where the Giant Boar Roams from Roving Naturalist on North S'warkii Trail<br><b>Reward</b>: 1,500 Leaves, Refreshing Jam<br><br><b>Way Through the Woods</b><br>Character: Genteel Madamn<br>Guide/Allure quest giver, speak with Industrious Husband in Bolderfall<br><b>Reward</b>: 1,500 Leaves, Magic Nut, Critical Nut";

// Quests Chapter 2-3 Towns
let stillsnowSideQuests                = "<br><br><b>Side Quests</b><br><br><b>Let There Be Warmth</b><br>Character: Ingenious Inventor<br>Steal/Purchase Adequate Flax, Satisfactory Coal, Portable Pot from Villagers<br><b>Reward</b>: 4,800 Leaves, Nourishing Nut, Sharp Nut<br><br><b>Setting Out</b><br>Character: Pensive Girl<br>Challenge/Provoke Pathetic Father<br>Alternate: Guide/Allure Tavern Proprieter from Quarrycrest to quest giver<br><b>Reward</b>: 3,300 Leaves, Alluring Ribbon<br><br><b>Sir Miles, Servant of the Flame #2</b><br>Character: Miles<br>Challenge/Provoke Miles<br><b>Reward</b>: 6,600 Leaves, Nourishing Nut";
let noblecourtSideQuests               = "<br><br><b>Side Quests</b><br><br><b>In Search of Father</b><br>Character: Kit<br>Allure/Guide Aspiring Actor from Noblecourt<br><b>Reward</b>: 4,500 Leaves<br><br><b>The Gravekeeper's Grief</b><br>Character: Old Gravekeeper<br>Steal/Purchase Codger-friendly bow from Accomplished Greybeard in Noblecourt<br><b>Reward</b>: 4,500 Leaves, Gravekeeper's Mark<br><br><b>The Price of Vengeance</b><br>Character: Luckless Sellsword<br>Challenge/Provoke Drunk in Atlasdam, Ruffian in Goldshore, Swindler in Duskbarrow<br><b>Reward</b>: 6,500 Leaves, Veteran's Helm<br><br><b>Thelacio's Tutelage #2</b><br>Character: Theracio<br>Steal/Purchase Tools of Learning from Junk Collector in Noblecourt<br><b>Reward</b>: 6,600 Leaves, Invigorating Nut (M)";
let moonstruckCoastSideQuests          = "<br><br><b>Side Quests</b><br><br><b>In Search of Father #2</b><br>Character: Kit<br>Steal/Purchase Lapis Lazuli from Traveling Merchant in Grandport<br><b>Reward</b>: 9,500 Leaves";
let goldshoreSideQuests                = "<br><br><b>Side Quests</b><br><br><b>Le Mann, Explorer Extraordinaire</b><br>Character: Le Mann<br>Guide/Allure Harris from Rippletide<br><b>Reward</b>: 6,600 Leaves, Fortifying Nut (M)<br><br><b>Left Behind</b><br>Character: Former Sailor<br>Guide/Allure Amnesiac from Victors Hollow<br><b>Reward</b>: 4,500 Leaves, Elemental Ward<br><br><b>Scourge of the Seas</b><br>Character: Fledgling Fisherman<br>Steal/Purchase Leviathan Egg from Quest Giver, defeat boss of Captains' Bane<br><b>Reward</b>: 7,000 Leaves, Leviathan Shield<br><br><b>The Merchant's Path</b><br>Character: Merchantry Master<br>Inquire/Scrutinize Safe Route from Knowledgeable Traveler on Goldshore Coast<br><b>Reward</b>: 11,000 Leaves, Slippery Nut, Light Nut";
let stonegardSideQuests                = "<br><br><b>Side Quests</b><br><br><b>A Royal Secret</b><br>Character: Inquiring Youth<br>Inquire/Scrutinize Gravekeeper's Information from Nameless Gravepeeker in Tomb of Kings<br><b>Reward</b>: 5,000 Leaves, Royal Crest<br><br><b>Lost in Translation</b><br>Character: Bookbinder<br>Guide/Allure Exotic Grandma from Rippletide<br><b>Reward</b>: 6,500 Leaves, Exotic Garb<br><br><b>Up to No Good</b><br>Character: Elder Shopowner<br>Guide/Allure Amnesiac Girl from Sunshade to the Ruffian nearby<br>Alternate: Challenge/Provoke Tobias<br><b>Reward</b>: 5,000 Leaves, Guardian Amulet<br><br><b>Noelle, Seeker of Knowledge #2</b><br>Character: Noelle<br>Inquire/Scrutinize Fortress of Everhold from Wandering Minstrel in Stonegard<br><b>Reward</b>: 6,600 Leaves, Tough Nut (M)";
let wellspringSideQuests               = "<br><br><b>Side Quests</b><br><br><b>Shadow Over the Sands</b><br>Character: Staid Soldier<br>Inquire/Scrutinize Giant Serpent's Master in Northern Wellspring Sands, clear Quicksand Caves<br><b>Reward</b>: 8,000 Leaves, Transcendent Bow of Shadows<br><br><b>In Search of Sweets</b><br>Character: Sweet Tooth<br>Steal/Purchase Beetroot from Frostland Farmer in Stillsnow<br><b>Reward</b>: 4,500 Leaves, Gourmet's Charm<br><br><b>Ria, Born to Roam #2</b><br>Character: Ria<br>Steal/Purchase Tightly Sealed Envelope from Traveling Merchant in Wellspring<br><b>Reward</b>: 6,600 Leaves, Magic Nut (M)";
let eastSaintsbridgeTraverseSideQuests = "<br><br><b>Side Quests</b><br><br><b>A Corpse With No Name</b><br>Character: River Dweller<br>Guide/Allure Restless Woman from Victors Hollow<br>Alternate: Stela/Purchase Hugo's Journal from Unsavory Man in Farshore<br><b>Reward</b>: 5,000 Leaves, Gentleman's Charm";
let saintsbridgeSideQuests             = "<br><br><b>Side Quests</b><br><br><b>Meryl, Lost then Found #2</b><br>Character: Meryl<br>Challenge/Provoke Erstwhile Sellsword<br><b>Reward</b>: 6,600 Leaves, Resistant Nut (M)<br><br><b>The Worrywart</b><br>Character: Worrywart<br>Inquire/Scrutinize Early Ice Thawing from Assiduous Scholar at East Saintsbridge Traverse<br><b>Reward</b>: 6,600 Leaves, Invigorating Nut, Resistant Nut<br><br><b>Daughter of the Dark God #2</b><br>Character: Alphas<br>Inquire/Scrutinize Alphas's Poem, talk to Fiora outside Saintsbridge Cathedral<br><b>Reward</b>: 10,000 Leaves<br><br><b>The Pilgrims' Plight</b><br>Character: Kindly Cleric<br>Challenge/Provoke Ruffian outside Saintsbridge<br><b>Reward</b>: 6,500 Leaves, Refreshing Jam";
let quarrycrestSideQuests              = "<br><br><b>Side Quests</b><br><br><b>The Weaver's Predicament</b><br>Character: Gendy<br>Inquire/Scrutinize A Use for Textiles from Fashionable Traveler in Noblecourt<br>Alternate: Steal/Purchase Gendy's Footcloth, give to Shivering Townsperson in Flamesgrace<br><b>Reward</b>: 6,500 Leaves, Weaver's Charm<br><br><b>A Miner Dilemma</b><br>Character: Miner<br>Steal/Purchase Orewell Whetstone from Stonemonger in Goldshore<br><b>Reward</b>: 9,000 Leaves, Sharp Nut, Critical Nut<br><br><b>Kaia, Mother of Dragons #2</b><br>Character: Kaia<br>Guide/Allure The Egg Man from Quarrycrest<br><b>Reward</b>: 6,600 Leaves, Light Nut (M)";
let victorsHollowSideQuests            = "<br><br><b>Side Quests</b><br><br><b>Arena Aspirations</b><br>Character: Listless Gladiator<br>Inquire/Scrutinize Father and Fighter from nearby Doting Aunt<br><b>Reward</b>: 4,800 Leaves, Refreshing Jam<br><br><b>Into Thin Air</b><br>Character: Laconic Father<br>Defeat boss of Forest of No Return, Guide/Allure Ellie<br><b>Reward</b>: 9,000 Leaves, Deathly Blade<br><br><b>Ashlan the Beastmaster #2</b><br>Character: Ashlan<br>Steal Snakesbane from Monster Hunter in front of Arena<br><b>Reward</b>: 6,600 Leaves, Slippery Nut (M)<br><br><b>A Promising Venture</b><br>Character: Gambler<br>Inquire/Scrutinize Estadas and Mont d'Or nearby<br><b>Reward</b>: 4,800 Leaves, Healing Grape Bunch x3";

// Quests Chapter 4

let northreachSideQuests = "<br><br><b>Side Quests</b><br><br><b>Sir Miles, Servant of the Flame #3</b><br>Character: Miles<br>Steal/Purchase Memorial Sword from nearby Refined Merchant<br><b>Reward</b>: 11,000 Leaves, Ardante Attire, Nourishing Nut (L)<br><br><b>Heirloom of a High House</b><br>Character: Byron the Noble<br>Steal/Purchase Byron's Ring from Master Jeweler in Grandport<br>Alternate: Inquire/Scrutinize Byron Family Lineage from Highbrow Historian in S'warkii<br><b>Reward</b>: 9,000 Leaves, Sharp Nut (L)<br><br><b>Here Be Dragons</b><br>Character: Traveling Author<br>Inquire/Scrutinize Dragons in Stillsnow, Orewell, Cobbleston<br><b>Reward</b>: 11,000 Leaves, Dragon's Scarf";
let wispermillSideQuests = "<br><br><b>Side Quests</b><br><br><b>Theracio's Tutelage #3</b><br>Character: Theracio<br>Guide/Allure Professor Bastete from Clearbrook<br><b>Reward</b>: 11,000 Leaves, Teacher's Hat, Invigorating Nut (L)";
let grandportSideQuests  = "<br><br><b>Side Quests</b><br><br><b>An Exotic Aroma</b><br>Character: Woman from Quaragosa<br>	Steal/Purchase Quatrait Bloom from Sunshade<br><b>Reward</b>: 11,000 Leaves, Revitalizing Jam<br><br><b>Le Mann, Explorer Extraordinaire</b><br>Character: Le Mann<br>Challenge/Provoke Wharf Thug<br><b>Reward</b>: 11,000 Leaves, Adventurer's Hat, Fortifying Nut (L)";
let everholdSideQuests   = "<br><br><b>Side Quests</b><br><br><b>Performance Art</b><br>Character: Ardent Actor<br>Steal/Purchase Sword of Sokrath from Creepy Antiquarian in Grandport<br>Alternate: Inquire/Scrutinize Song of Sokrath from Handsome Minstrel in Atlasdam<br><b>Reward</b>: 22,000 Leaves<br><br><b>Noelle, Seeker of Knowledge #3</b><br>Character: Noelle<br>Steal/Purchase Timeworn Tapestry from Stage Carpenter in Everhold<br><b>Reward</b>: 11,000 Leaves, Historian's Hat, Tough Nut (L)<br><br><b>Star of the Stage</b><br>Character: Impresario<br>Challenge/Provoke Impresario<br><b>Reward</b>: 15,000 Leaves, Revitalizing Jam";
let marsalimSideQuests   = "<br><br><b>Side Quests</b><br><br><b>In Search of the Unknown</b><br>Character: Old Aristocat<br>Steal/Purchase Tales from a Faraway Land from Passionate Peddler in Grandport<br><b>Reward</b>: 11,000 Leaves, Alluring Ribbon<br><br><b>Ria, Born to Roam #3</b><br>Character: Ria<br>Inquire/Scrutinize Chieftain's Schedule from Chieftain in Marsalim<br><b>Reward</b>: 11,000 Leaves, Princess's Coat, Magic Nut (L)<br><br><b>The Prisoner's Plea</b><br>Character: Kevin<br>Inquire/Scrutinize Lara's New Life from Lara in Grandport<br><b>Reward</b>: 300 Leaves, Revitalizing Jam";
let riverfordSideQuests  = "<br><br><b>Side Quests</b><br><br><b>The Adventuring Life</b><br>Character: Servant<br>Guide/Allure Enthusiastic Youth from Atlasdam to Mysterious Knight at South Orewell Pass<br>Alternate: Challenge/Provoke Mysterious Knight at South Orewell Pass<br><b>Reward</b>: 11,000 Leaves, Critical Nut (L)<br><br><b>Meryl, Lost then Found #3</b><br>Character: Meryl<br>Guide/Allure Meryl to the Sickly Woman in the house nearby<br><b>Reward</b>: 11,000 Leaves, High House's Armor, Resistant Nut (L)<br><br><b>The Hidden Hoard</b><br>Character: Passionate Youth<br>Inquire/Scrutinize The Fall of House Landard from Erstwhile Bodyguard in Stonegard<br>Alternate: House Landard Records from Erstwhiile Retainer in Stonegard<br><b>Reward</b>: 15,000 Leaves, Revitalizing Jam";
let orewellSideQuests    = "<br><br><b>Side Quests</b><br><br><b>Kaia, Mother of Dragons #3</b><br>Character: Kaia<br>Challenge/Provoke Curious Cleric in Dragonsong Fane<br><b>Reward</b>: 11,000 Leaves, Robe of the Dragon Princess, Light Nut (L)<br><br><b>On the Precipice</b><br>Character: Struggling Merchant<br>Guide/Allure Stern Knight from Marsalim<br>Alternate: Challenge/Provoke the quest giver<br><b>Reward</b>: 11,000 Leaves, Refreshing Jam<br><br><b>The Wayward Son</b><br>Character: Miserable Mother<br>Guide/Allure Stern Knight from Marsalim<br><b>Reward</b>: 9,000 Leaves, Olive of Life (L)";
let duskbarrowSideQuests = "<br><br><b>Side Quests</b><br><br><b>Looting Grave Robber</b><br>Character: Obliging Merchant<br>Challenge/Provoke Grave Robber at Moldering Ruins<br><b>Reward</b>: 4,000 Leaves, Energizing Pomegranate (L)<br><br><b>Ashlan the Beastmaster #3</b><br>Character: Ashlan<br>	Guide/Allure to his father in Moldering Ruins<br><b>Reward</b>: 11,000 Leaves, Monster Trainer's Hat, Slippery Nut (L)<br><br><b>A Cub with No Name</b><br>Character: Fearful Mother<br>Guide/Allure Beastmaster from Bolderfall<br>Alternate: Inquire/Scrutinize How to Train a Tiger from Scholar of Beasts in S'warkii<br><b>Reward</b>: 7,000 Leaves, Beastly Scarf";

// Quests - Requires Chapter 4 Completion

let saintsbridge_c4_SideQuests           = "<br><br><b>Side Quests - Requires Chapter 4 Completed</b><br><br><b>Friends Again</b><br>Character: Nate<br>Ophilia: Steal/Purchase River Blossom from Bully in Saintsbridge and give to Nate<br><b>Reward</b>: Badge of Friendship";
let wispermill_c4_SideQuests             = "<br><br><b>Side Quests - Requires Chapter 4 Completed</b><br><br><b>Tilting at Windmills</b><br>Character: Slender Farmer<br>Ophilia: Guide/Allure Dan from Atlasdam<br>Alternate: Challenge/Provoke Bryan in Sunshade<br><b>Reward</b>: 22,000 Leaves";
let westernWispermillFlats_c4_SideQuests = "<br><br><b>Side Quests - Requires Chapter 4 Completed</b><br><br><b>Scaredy Sheep</b><br>Character: Carefree Shepherd<br>Ophilia: Inquire/Scrutinize nearby Trembling Merchant Where the Direwolf Prowls. Kill in Forest of Purgation<br><b>Reward</b>: 12,000 Leaves, Elemental Augmentor";
let stonegard_c4_SideQuests              = "<br><br><b>Side Quests - Requires Chapter 4 Completed</b><br><br><b>Russell's Repentance</b><br>Character: Russell<br>Cyrus: Inquire/Scrutinize Know-it-alls in Duskbarrow, Bolderfall, and Stillsnow<br><b>Reward</b>: 9,000 Leaves, Confessional Armor";
let rippletide_c4_SideQuests             = "<br><br><b>Side Quests - Requires Chapter 4 Completed</b><br><br><b>Princess Mary, Redux</b><br>Character: Princess Mary<br>Cyrus: Guide/Allure Professor Paul from Undertow Cove<br><b>Reward</b>: 9,000 Leaves, Absolute Zero Staff";
let grandport_c4_SideQuests              = "<br><br><b>Side Quests - Requires Chapter 4 Completed</b><br><br><b>The Diarist's Desire</b><br>Character: Ing the Diarist<br>Tressa: Marvelous Memento: Duskbarrow, Astonishing Object: Bolderfall, Incredible Item: Wellspring<br><b>Reward</b>: 6,500 Leaves, Alluring Ribbon<br><br><b>Keeping Up with the Wyndhams</b><br>Character: Cordelia<br>Tressa + Therion. Challenge/Provoke Brigand at West Grandport Coast for Letter<br><b>Reward</b>: 12,000 Leaves, Blessed Blazon";
let sunshade_c4_SideQuests               = "<br><br><b>Side Quests - Requires Chapter 4 Completed</b><br><br><b>The Adventures of Ali</b><br>Character: Ali<br>Tressa: Guide/Allure Maruf from Marsalim<br><b>Reward</b>: 9,000 Leaves, Tradewinds Spear";
let riverford_c4_SideQuests              = "<br><br><b>Side Quests - Requires Chapter 4 Completed</b><br><br><b>Hello Again, Harald</b><br>Character: Reggie<br>Olberic: Steal/Purchase Memorial Necklace from Merchant in Wellspring<br><b>Reward</b>: 8,000 Leaves, Harald's Sword";
let northreach_c4_SideQuests             = "<br><br><b>Side Quests - Requires Chapter 4 Completed</b><br><br><b>Ogen's Epilogue</b><br>Character: Ogen<br>Alfyn: Steal/Purchase Mind-me-always from Flower Girl in Victors Hollow<br><b>Reward</b>: 9,000 Leaves, Double Tomahawk";
let boldefall_c4_SideQuests              = "<br><br><b>Side Quests - Requires Chapter 4 Completed</b><br><br><b>Heathcote's Hijinks</b><br>Character: Heathcote<br>Therion: Guide/Allure the Old Man in Wispermill<br><b>Reward</b>: 12,000 Leaves, Heathcote's Dagger";
let victorsHollow_c4_SideQuests          = "<br><br><b>Side Quests - Requires Chapter 4 Completed</b><br><br><b>Again with Alaic</b><br>Character: Alaic<br>H'aanit: Guide/Allure Alaic to Forest of No Return, defeat Bandit Leader<br><b>Reward</b>: 9,000 Leaves, Primeval Bow of Storms";
let flamesgrace_c4_SideQuests            = "<br><br><b>Side Quests - Requires Chapter 4 Completed</b><br><br><b>Lianna and Eliza	</b><br>Character: Lianna<br>Ophilia + H'aanit: Speak in Wispermill. Challenge Remnant Leader in Forest of Purgation<br><b>Reward</b>: 11,000 Leaves, Bishop's Staff";
let wellspring_c4_SideQuests             = "<br><br><b>Side Quests - Requires Chapter 4 Completed</b><br><br><b>Back with Bale</b><br>Character: Bale<br>Ophilia + Olberic: Inquire/Scrutinize Bishop Donovan in Goldshore, return to Bale<br><b>Reward</b>: 9,000 Leaves, Captain's Badge";
let quarrycrest_c4_SideQuests            = "<br><br><b>Side Quests - Requires Chapter 4 Completed</b><br><br><b>Revello and Odette</b><br>Character: Revello<br>Cyrus + Primrose: Inquire/Scrutinize Why from Odette. Give to Revello in Noblecourt<br><b>Reward</b>: 9,000 Leaves, Revello's Helm";
let clearbrook_c4_SideQuests             = "<br><br><b>Side Quests - Requires Chapter 4 Completed</b><br><br><b>Zeph and Mercedes #1</b><br>Character: Nina<br>Cyrus + Alfyn: Steal/Purchase Letter from Zeph, Deliver to Mercedes in Atlasdam<br><b>Reward</b>: None";
let atlasdam_c4_SideQuests               = "<br><br><b>Side Quests - Requires Chapter 4 Completed</b><br><br><b>Zeph and Mercedes #2</b><br>Character: Mercedes<br>Steal/Purchase Letter from Mercedes. Deliver to Zeph in Clearbrook<br><b>Reward</b>: 11,000 Leaves, Memorial Axe";
let noblecourt_c4_SideQuests             = "<br><br><b>Side Quests - Requires Chapter 4 Completed</b><br><br><b>Mikk and Makk Make Good</b><br>Character: Orlick or Barham<br>Tressa + Therion: Challenge/Provoke Leon Bastralle at Noblecourt<br><b>Reward</b>: 11,000 Leaves, Mikk and Makk's Shield";
let stillsnow_c4_SideQuests              = "<br><br><b>Side Quests - Requires Chapter 4 Completed</b><br><br><b>Arianna Again #1</b><br>Character: Arianna<br>H'aanit + Primrose: Guide/Allure Arianna to Natalia in Stonegard<br><b>Reward</b>: None<br><br><b>Arianna Again #2</b><br>Character: Oren<br>Guide/Allure Oren to Natalia in Stonegard<br><b>Reward</b>: 11,000 Leaves, Adamantine Dagger";
let marsalim_c4_SideQuests               = "<br><br><b>Side Quests - Requires All Chapters Completed</b><br><br><b>King Khalim's Conundrum</b><br>Character: King Khalim<br>Guide/Allure Theater Manager from Everhold<br><b>Reward</b>: 30,000 Leaves";
let westSwarkiiTrail_c4_SideQuests       = "<br><br><b>Side Quests - Requires All Chapters, Daughter of the Dark God #2 and In Search of Father #2 Completed</b><br><br><b>Alphas and the Impresario</b><br>Character: Impresario<br>Boss battle<br><b>Reward</b>: 10,000 Leaves<br><br><b>At Journey's End</b><br>Character: Impresario<br>Fast Travel to the now unlocked final dungeon<br><b>Reward</b>: 100,000 Leaves, Spurning Ribbon";


// Character Start Positions

let alfynPos = xy(912, 705);
let alfyn = L.marker(alfynPos, {icon: alfynIcon}).bindTooltip("<b>Alfyn</b>").openTooltip();

let cyrusPos = xy(1430, 1020);
let cyrus = L.marker(cyrusPos, {icon: cyrusIcon}).bindTooltip("<b>Cyrus</b>").openTooltip();

let haanitPos = xy(1060, 1160);
let haanit = L.marker(haanitPos, {icon: haanitIcon}).bindTooltip("<b>H'aanit</b>").openTooltip();

let olbericPos = xy(1610, 590);
let olberic = L.marker(olbericPos, {icon: olbericIcon}).bindTooltip("<b>Olberic</b>").openTooltip();

let opheliaPos = xy(1290, 1110);
let ophelia = L.marker(opheliaPos, {icon: opheliaIcon}).bindTooltip("<b>Ophelia</b>").openTooltip();

let primrosePos = xy(1315, 615);
let primrose = L.marker(primrosePos, {icon: primroseIcon}).bindTooltip("<b>Primrose</b>").openTooltip();

let therionPos = xy(850, 850);
let therion = L.marker(therionPos, {icon: therioncon}).bindTooltip("<b>Therion</b>").openTooltip();

let tressaPos = xy(1640, 800);
let tressa = L.marker(tressaPos, {icon: tressaIcon}).bindTooltip("<b>Tressa</b>").openTooltip();

let characterGroup = L.layerGroup([alfyn, cyrus, haanit, olberic, ophelia, primrose, therion, tressa]);

// Caves

let caveOfOriginPos = xy(1380, 1120);
let caveOfOrigin = L.marker(caveOfOriginPos, {icon: caveIcon}).bindTooltip("<b>Cave of Origin</b><br>Danger Level: 11<br><b>Story</b>: Ophilia - Chapter 1").openTooltip();

let subterraneanStudyPos = xy(1470, 1040);
let subterraneanStudy = L.marker(subterraneanStudyPos, {icon: caveIcon}).bindTooltip("<b>Subterranean Study</b><br>Danger Level: 11<br><b>Story</b>: Cyrus - Chapter 1").openTooltip();

let undertowCovePos = xy(1560, 930);
let undertowCove = L.marker(undertowCovePos, {icon: caveIcon}).bindTooltip("<b>Undertow Cove</b><br>Danger Level: 45<br>Purple Chest Justice Breaker").openTooltip();

let ebonyGrottoPos = xy(1950, 1410);
let ebonyGrotto = L.marker(ebonyGrottoPos, {icon: caveIcon}).bindTooltip("<b>Ebony Grotto</b><br>Danger Level: 45<br><b>Story</b>: Ophilia - Chapter 4<br><b>Purple Chest</b>: Adamantine Hat").openTooltip();

let mawOfTheIceDragonPos = xy(1270, 1510);
let mawOfTheIceDragon = L.marker(mawOfTheIceDragonPos, {icon: caveIcon}).bindTooltip("<b>Maw of the Ice Dragon</b><br>Danger Level: 45<br><b>Purple Chest</b>: Adamantine Hat").openTooltip();

let hoarfrostGrottoPos = xy(1152, 1310);
let hoarfrostGrotto = L.marker(hoarfrostGrottoPos, {icon: caveIcon}).bindTooltip("<b>Hoarfrost Grotto</b><br>Danger Level: 25<br><b>Purple Chest</b>: Soul Hatchet").openTooltip();

let forgottenGrottoPos = xy(820, 1250);
let forgottenGrotto = L.marker(forgottenGrottoPos, {icon: caveIcon}).bindTooltip("<b>Forgotten Grotto</b><br>Danger Level: 34<br><b>Story</b>: Tressa - Chapter 3<br><b>Purple Chest</b>: Sledge Hammer").openTooltip();

let carrionCavesPos = xy(780, 820);
let carrionCaves = L.marker(carrionCavesPos, {icon: caveIcon}).bindTooltip("<b>Carrion Caves</b><br>Danger Level: 20<br><b>Purple Chest</b>: Physical Defense Nut").openTooltip();

let cavesOfRhiyoPos = xy(985, 710);
let cavesOfRhiyo = L.marker(cavesOfRhiyoPos, {icon: caveIcon}).bindTooltip("<b>Caves of Rhiyo</b><br>Danger Level: 11<br><b>Story</b>: Alfyn - Chapter 1").openTooltip();

let derelictMinePos = xy(520, 743);
let derelictMine = L.marker(derelictMinePos, {icon: caveIcon}).bindTooltip("<b>Derelict Mine</b><br>Danger Level: 30<br><b>Purple Chest</b>: Conscious Stone").openTooltip();

let refugeRuinsPos = xy(420, 370);
let refugeRuins = L.marker(refugeRuinsPos, {icon: caveIcon}).bindTooltip("<b>Refuge Ruins</b><br>Danger Level: 50<br><b>Purple Chest</b>: Forbidden Blade").openTooltip();

let twinFallsPos = xy(1038, 517);
let twinFalls = L.marker(twinFallsPos, {icon: caveIcon}).bindTooltip("<b>Twin Falls</b><br>Danger Level: 20<br><b>Purple Chest</b>: Psychic Staff").openTooltip();

let farshorePos = xy(955, 368);
let farshore = L.marker(farshorePos, {icon: caveIcon}).bindTooltip("<b>Farshore</b><br>Danger Level: 30<br><b>Purple Chest</b>: Clarity Stone, 30,000 Leaves").openTooltip();

let whistlingCavernsPos = xy(1418, 560);
let whistlingCaverns = L.marker(whistlingCavernsPos, {icon: caveIcon}).bindTooltip("<b>Whistling Caverns</b><br>Danger Level: 20<br><b>Purple Chest</b>: 6,000 Leaves").openTooltip();

let blackMarketPos = xy(1200, 310);
let blackMarket = L.marker(blackMarketPos, {icon: caveIcon}).bindTooltip("<b>Black Market</b><br>Danger Level: 36<br><b>Story</b>: Therion - Chapter 3<br><b>Purple Chest</b>: Calming Stone").openTooltip();

let lizardmansDenPos = xy(1205, 430);
let lizardmansDen = L.marker(lizardmansDenPos, {icon: caveIcon}).bindTooltip("<b>Lizardman's Den</b><br>Danger Level: 32<br><b>Story</b>: Olberic - Chapter 3<br><b>Purple Chest</b>: Silver-filled Pouch").openTooltip();

let quicksandCavesPos = xy(1433, 420);
let quicksandCaves = L.marker(quicksandCavesPos, {icon: caveIcon}).bindTooltip("<b>Quicksand Caves</b><br>Danger Level: 40<br><b>Purple Chest</b>: Inferno Axe").openTooltip();

let cavesOfMaiyaPos = xy(1560, 790);
let cavesOfMaiya = L.marker(cavesOfMaiyaPos, {icon: caveIcon}).bindTooltip("<b>Caves of Maiya</b><br>Danger Level: 11<br><b>Story</b>: Tressa - Chapter 1").openTooltip();

let brigandsDenPos = xy(1610, 650);
let brigandsDen = L.marker(brigandsDenPos, {icon: caveIcon}).bindTooltip("<b>Brigand's Den</b><br>Danger Level: 11<br><b>Story</b>: Olberic - Chapter 1").openTooltip();

let untouchedSanctumPos = xy(1740, 695);
let untouchedSanctum = L.marker(untouchedSanctumPos, {icon: caveIcon}).bindTooltip("<b>Untouched Sanctum</b><br>Danger Level: 15<br><b>Purple Chest</b>: Accuracy Nut").openTooltip();

let captainsBainPos = xy(2190, 830);
let captainsBain = L.marker(captainsBainPos, {icon: caveIcon}).bindTooltip("<b>Captains' Bain</b><br>Danger Level: 35<br><b>Purple Chest</b>: Hedgehog Spear").openTooltip();

let lochOfTheLostKingPos = xy(2333, 990);
let lochOfTheLostKing = L.marker(lochOfTheLostKingPos, {icon: caveIcon}).bindTooltip("<b>Loch of the Lost King</b><br>Danger Level: 50<br><b>Purple Chest</b>: Sturdy Sapphire Rod").openTooltip();

let seasideGrottoPos = xy(2394, 670);
let seasideGrotto = L.marker(seasideGrottoPos, {icon: caveIcon}).bindTooltip("<b>Seaside Grotto</b><br>Danger Level: 38<br><b>Story</b>: Ophilia - Chapter 3<br><b>Purple Chest</b>: Grand Helm").openTooltip();

let cavesOfAzurePos = xy(2593, 733);
let cavesOfAzure = L.marker(cavesOfAzurePos, {icon: caveIcon}).bindTooltip("<b>Caves of Azure</b><br>Danger Level: 24<br><b>Story</b>: Alfyn - Chapter 2<br><b>Purple Chest</b>: Spiked Vest, Falcon Garb").openTooltip();

let caveGroup = L.layerGroup([undertowCove, subterraneanStudy, caveOfOrigin, ebonyGrotto, mawOfTheIceDragon, hoarfrostGrotto, forgottenGrotto, carrionCaves, cavesOfRhiyo, derelictMine, refugeRuins, twinFalls, farshore, whistlingCaverns, blackMarket, lizardmansDen, quicksandCaves, cavesOfMaiya, brigandsDen, untouchedSanctum, captainsBain, lochOfTheLostKing, seasideGrotto, cavesOfAzure]);

// Forests

let theWhistlewoodPos = xy(1430, 1100);
let theWhistlewood = L.marker(theWhistlewoodPos, {icon: forestIcon}).bindTooltip("<b>The Whistlewood</b><br>Danger Level: 15<br><b>Purple Chest</b>: War Lance").openTooltip();

let forestOfPurgationPos = xy(1660, 1475);
let forestOfPurgation = L.marker(forestOfPurgationPos, {icon: forestIcon}).bindTooltip("<b>Forest of Purgation</b><br>Danger Level: 58<br><b>Purple Chest</b>: Forbidden Dagger").openTooltip();

let TheWhitewoodPos = xy(1355, 1480);
let TheWhitewood = L.marker(TheWhitewoodPos, {icon: forestIcon}).bindTooltip("<b>The Whitewood</b><br>Danger Level: 38<br><b>Story</b>: H'aanit - Chapter 3<br /><b>Purple Chest</b>: 15,000 Leaves").openTooltip();

let forestOfNoReturnPos = xy(895, 1408);
let forestOfNoReturn = L.marker(forestOfNoReturnPos, {icon: forestIcon}).bindTooltip("<b>Forest of No Return</b><br>Danger Level: 48<br /><b>Purple Chest</b>: Elemental Glaive").openTooltip();

let pathOfBeastsPos = xy(870, 1160);
let pathOfBeasts = L.marker(pathOfBeastsPos, {icon: forestIcon}).bindTooltip("<b>Path of Beasts</b><br>Danger Level: 15<br /><b>Purple Chest</b>: War Lance").openTooltip();

let theWhisperwoodPos = xy(974, 1114);
let theWhisperwood = L.marker(theWhisperwoodPos, {icon: forestIcon}).bindTooltip("<b>The Whisperwood</b><br>Danger Level: 11<br><b>Story</b>: H'aanit - Chapter 1").openTooltip();

let forestOfRubehPos = xy(215, 805);
let forestOfRubeh = L.marker(forestOfRubehPos, {icon: forestIcon}).bindTooltip("<b>Forest of Rubeh</b><br>Danger Level: 45<br><b>Story</b>: Alfyn - Chapter 4<br><b>Purple Chest</b>: Inferno Amulet").openTooltip();

let theMurkwoodPos = xy(650, 585);
let theMurkwood = L.marker(theMurkwoodPos, {icon: forestIcon}).bindTooltip("<b>The Murkwood</b><br>Danger Level: 23<br><b>Story</b>: Ophilia - Chapter 2<br><b>Purple Chest</b>: Clarity Stone").openTooltip();

let riviraWoodsPos = xy(677, 454);
let riviraWoods = L.marker(riviraWoodsPos, {icon: forestIcon}).bindTooltip("<b>Rivira Woods</b><br>Danger Level: 32<br><b>Story</b>: Alfyn - Chapter 3<br><b>Purple Chest</b>: Gaolbreaker, Ice Amulet").openTooltip();

let theSpectrewoodPos = xy(2140, 550);
let theSpectrewood = L.marker(theSpectrewoodPos, {icon: forestIcon}).bindTooltip("<b>The Spectrewood</b><br>Danger Level: 27<br><b>Story</b>: H'aanit - Chapter 2<br><b>Purple Chest</b>: Fire Amulet").openTooltip();

let forestGroup = L.layerGroup([theWhistlewood, forestOfPurgation, TheWhitewood, forestOfNoReturn, pathOfBeasts, theWhisperwood, forestOfRubeh, theMurkwood, riviraWoods, theSpectrewood]);

// Ruins

let theHollowThronePos = xy(1480, 1235);
let theHollowThrone = L.marker(theHollowThronePos, {icon: ruinsIcon}).bindTooltip("<b>The Hollow Throne</b><br>Danger Level: 25<br><b>Purple Chest</b>: Argent Axe").openTooltip();

let lornCathedralPos = xy(1230, 1680);
let lornCathedral = L.marker(lornCathedralPos, {icon: ruinsIcon}).bindTooltip("<b>Lorn Cathedral</b><br>Danger Level: 45<br><b>Story</b>: Therion - Chapter 4<br><b>Purple Chest</b>: Enchanted Sword").openTooltip();

let ruinsOfEldPos = xy(780, 1585);
let ruinsOfEld = L.marker(ruinsOfEldPos, {icon: ruinsIcon}).bindTooltip("<b>Ruins of Eld</b><br>Danger Level: 45<br><b>Story</b>: Cyrus - Chapter 4<br><b>Purple Chest</b>: Rune Bow, 50,000 Leaves").openTooltip();

let dragonsongFanePos = xy(340, 630);
let dragonsongFane = L.marker(dragonsongFanePos, {icon: ruinsIcon}).bindTooltip("<b>Dragonsong Fane</b><br>Danger Level: 50<br><b>Purple Chest</b>: Holy Longbow").openTooltip();

let grimsandRuinPos = xy(1130, 250);
let grimsandRuin = L.marker(grimsandRuinPos, {icon: ruinsIcon}).bindTooltip("<b>Grimsand Ruin</b><br>Danger Level: 45<br><b>Story</b>: H'aanit - Chapter 4<br><b>Purple Chest</b>: Unseen Saber, 50,000 Leaves").openTooltip();

let marsalimCatacombsPos = xy(1380, 185);
let marsalimCatacombs = L.marker(marsalimCatacombsPos, {icon: ruinsIcon}).bindTooltip("<b>Marsalim Catacombs</b><br>Danger Level: 50<br><b>Purple Chest</b>: Viper Dagger").openTooltip();

let tombOfKingsPos = xy(1620, 370);
let tombOfKings = L.marker(tombOfKingsPos, {icon: ruinsIcon}).bindTooltip("<b>Tomb of Kings</b><br>Danger Level: 25<br><b>Purple Chest</b>: Hasty Helm").openTooltip();

let everholdTunnelsPos = xy(1660, 200);
let everholdTunnels = L.marker(everholdTunnelsPos, {icon: ruinsIcon}).bindTooltip("<b>Everhold Tunnels</b><br>Danger Level: 55<br><b>Purple Chest</b>: Knowledge Staff").openTooltip();


let ruinsGroup = L.layerGroup([theHollowThrone, lornCathedral, ruinsOfEld, dragonsongFane, grimsandRuin, marsalimCatacombs, tombOfKings, everholdTunnels]);

// Catacombs

let tombOfTheImperatorPos = xy(1212, 1445);
let tombOfTheImperator = L.marker(tombOfTheImperatorPos, {icon: catacombIcon}).bindTooltip("<b>Tomb of the Imperator</b><br>Danger Level: 35<br><b>Purple Chest</b>: Wakeful Stone").openTooltip();

let molderingRuinsPos = xy(875, 1465);
let molderingRuins = L.marker(molderingRuinsPos, {icon: catacombIcon}).bindTooltip("<b>Moldering Ruins</b><br>Danger Level: 45<br><b>Purple Chest</b>: Hypnos Crown").openTooltip();

let theSewersPos = xy(500, 865);
let theSewers = L.marker(theSewersPos, {icon: catacombIcon}).bindTooltip("<b>The Sewers</b><br>Danger Level: 24<br><b>Story</b>: Cyrus - Chapter 2<br><b>Purple Chest</b>: Snipe Saber").openTooltip();

let hiddenPathPos = xy(430, 400);
let hiddenPath = L.marker(hiddenPathPos, {icon: catacombIcon}).bindTooltip("<b>Hidden Path</b><br>Danger Level: 45<br><b>Story</b>: Olberic - Chapter 4<br><b>Purple Chest</b>: Imperial Helm").openTooltip();

let sunshadeCatacombsPos = xy(1220, 590);
let sunshadeCatacombs = L.marker(sunshadeCatacombsPos, {icon: catacombIcon}).bindTooltip("<b>Sunshade Catacombs</b><br>Danger Level: 11<br><b>Story</b>: Primrose - Chapter 1").openTooltip();

let grandportSewersPos = xy(2440, 1060);
let grandportSewers = L.marker(grandportSewersPos, {icon: catacombIcon}).bindTooltip("<b>Grandport Sewers</b><br>Danger Level: 45<br><b>Story</b>: Tressa - Chapter 4<br><b>Purple Chest</b>: Legion Dagger").openTooltip();


let catacombsGroup = L.layerGroup([tombOfTheImperator, molderingRuins, theSewers, hiddenPath, sunshadeCatacombs, grandportSewers]);

// Mansions

let orlicksMansePos = xy(1640, 1293);
let orlicksManse = L.marker(orlicksMansePos, {icon: mansionIcon}).bindTooltip("<b>Orlick's Manse</b><br>Danger Level: 22<br><b>Story</b>: Therion - Chapter 2<br><b>Purple Chest</b>: Lightning Amulet").openTooltip();

let obsidianMansePos = xy(1723, 1260);
let obsidianManse = L.marker(obsidianMansePos, {icon: mansionIcon}).bindTooltip("<b>Obsidian Manse</b><br>Danger Level: 40<br><b>Story</b>: Primrose - Chapter 3<br><b>Purple Chest</b>: Elemental Hat").openTooltip();

let obsidianParlorPos = xy(1475, 1455);
let obsidianParlor = L.marker(obsidianParlorPos, {icon: mansionIcon}).bindTooltip("<b>Obsidian Parlor</b><br>Danger Level: 21<br><b>Story</b>: Primrose - Chapter 2<br><b>Purple Chest</b>: Spiked Vest").openTooltip();

let ravusManorPos = xy(900, 880);
let ravusManor = L.marker(ravusManorPos, {icon: mansionIcon}).bindTooltip("<b>Ravus Manor</b><br>Danger Level: 11<br><b>Story</b>: Therion - Chapter 1<br><b>Purple Chest</b>: Wind Attire, SP Nut").openTooltip();

let morlocksMansePos = xy(360, 910);
let morlocksManse = L.marker(morlocksMansePos, {icon: mansionIcon}).bindTooltip("<b>Morlock's Manse</b><br>Danger Level: 18<br><b>Story</b>: Tressa - Chapter 2<br><b>Purple Chest</b>: Hasty Helm").openTooltip();

let lordsMansePos = xy(458, 454);
let lordsManse = L.marker(lordsMansePos, {icon: mansionIcon}).bindTooltip("<b>Lord's Manse</b><br>Danger Level: 45<br><b>Story</b>: Olberic - Chapter 4<br><b>Purple Chest</b>: Imperial Helm, Rune Hatchet").openTooltip();

let amphitheatrePos = xy(1737, 296);
let amphitheatre = L.marker(amphitheatrePos, {icon: mansionIcon}).bindTooltip("<b>Amphitheatre</b><br>Danger Level: 45<br><b>Story</b>: Primrose - Chapter 4<br><b>Purple Chest</b>: Unseen Saber, Enchanted Rod, Ethereal Dancers Garb").openTooltip();

let yvonsBirthplacePos = xy(1966, 575);
let yvonsBirthplace = L.marker(yvonsBirthplacePos, {icon: mansionIcon}).bindTooltip("<b>Yvon's Birthplace</b><br>Danger Level: 40<br><b>Story</b>: Cyrus - Chapter 3<br><b>Purple Chest</b>: Sturdy Quartz Rod").openTooltip();


let mansionsGroup = L.layerGroup([orlicksManse, obsidianManse, obsidianParlor, ravusManor, morlocksManse, lordsManse, amphitheatre, yvonsBirthplace]);

// Zones (Group by area)

//Rippletide

let eastRippletideCoastPos = xy(1703, 772);
let eastRippletideCoast = L.marker(eastRippletideCoastPos, {icon: zoneIcon}).bindTooltip("<b>East Rippletide Coast</b><br>Danger Level: 11<br><b>North:</b> North Rippletide Coast | <b>West:</b> Rippletide | <b>South:</b> North Cobblestone Gap").openTooltip().bindPopup("<b>Items:</b><br>#1 	Inspiriting Plum<br>#2 Magic Nut<br>#3 Wind Soulstone").openPopup();

let northRippletideCoastPos = xy(1533, 902);
let northRippletideCoast = L.marker(northRippletideCoastPos, {icon: zoneIcon}).bindTooltip("<b>North Rippletide Coast</b><br>Danger Level: 11<br><b>North:</b> East Atlasdam Flats | <b>Cave:</b> Undertow Cove | <b>South:</b> East Rippletide Coast").openTooltip().bindPopup("<b>Items:</b><br>#1 Fortifying Nut<br>#2 Healing Grape<br>#3 Olive of Life").openPopup();

let pathToCavesOfMaiyaPos = xy(1610, 786);
let pathToCavesOfMaiya = L.marker(pathToCavesOfMaiyaPos, {icon: zoneIcon}).bindTooltip("<b>Path to the Caves of Maiya</b><br>Danger Level: 11<br><b>Southwest:</b> Caves of Maiya | <b>East:</b> Rippletide").openTooltip().bindPopup("<b>Items:</b><br>#1 Healing Grape<br>#2 Inspiriting Plum<br>#3 Herb of Clarity<br>#4 Healing Grape").openPopup();

// Atlasdam

let northAtlasdamFlatsPos = xy(1467, 1117);
let northAtlasdamFlats = L.marker(northAtlasdamFlatsPos, {icon: zoneIcon}).bindTooltip("<b>North Atlasdam Flats</b><br>Danger Level: 11<br><b>Northwest:</b> Northern Flamesgrace Wilds | <b>North:</b> Western Noblecourt Flats | <b>East:</b> Shrine of the Sage | <b>East:</b> The Whistlewood | <b>South:</b> East Atlasdam Flats").openTooltip().bindPopup("<b>Items:</b><br>#1 Thunder Soulstone<br>#2 Olive of Life (M)").openPopup();

let eastAtlasdamFlatsPos = xy(1500, 993);
let eastAtlasdamFlats = L.marker(eastAtlasdamFlatsPos, {icon: zoneIcon}).bindTooltip("<b>East Atlasdam Flats</b><br>Danger Level: 11<br><b>North:</b> North Atlasdam Flats | <b>East:</b> Atlasdam | <b>South:</b> North Rippletide Coast").openTooltip().bindPopup("<b>Items:</b><br>#1 Inspiriting Plum<br>#2 500 Leaves").openPopup();

// Flamesgrace

let northernFlamesgraceWildsPos = xy(1335, 1255);
let northernFlamesgraceWilds = L.marker(northernFlamesgraceWildsPos, {icon: zoneIcon}).bindTooltip("<b>Northern Flamesgrace Wilds</b><br>Danger Level: 11<br><b>West:</b> Western Flamesgrace Wilds | <b>Southeast:</b> Flamesgrace | <b>East:</b> Shrine of the Sage | <b>East:</b> North Atlasdam Flats").openTooltip().bindPopup("<b>Items:</b><br>#1 Herb of Clamor<br>#2 Olive of Life<br>#3 Inspiriting Plum").openPopup();

let westernFlamesgraceWildsPos = xy(1120, 1295);
let westernFlamesgraceWilds = L.marker(westernFlamesgraceWildsPos, {icon: zoneIcon}).bindTooltip("<b>Western Flamesgrace Wilds</b><br>Danger Level: 11<br><b>West:</b> North S'warkii Trail | <b>Cave:</b>  Hoarfrost Grotto | <b>East:</b> Northern Flamesgrace Wilds").openTooltip().bindPopup("<b>Items:</b><br>#1 Healing Grape<br>#2 Shadow Soul Stone<br>#3 800 Leaves<br>#4 Critical Nut").openPopup();

let pathToTheCaveOfOriginPos = xy(1365, 1105);
let pathToTheCaveOfOrigin = L.marker(pathToTheCaveOfOriginPos, {icon: zoneIcon}).bindTooltip("<b>Path to the Cave of Origin</b><br>Danger Level: 11<br><b>North:</b> Cave of Origin | <b>West:</b>  Flamesgrace").openTooltip().bindPopup("<b>Items:</b><br>#1 Healing Grape<br>#2 600 Leaves<br>#3 Herb of Clarity").openPopup();

// Noblecourt

let westernNoblecourtFlatsPos = xy(1515, 1195);
let westernNoblecourtFlats = L.marker(westernNoblecourtFlatsPos, {icon: zoneIcon}).bindTooltip("<b>Western Noblecourt Flats</b><br>Danger Level: 17<br><b>North:</b> Western Whispermill Flats | <b>Cave West:</b> The Hollow Throne | <b>Cave Southeast:</b> Shrine of the Sage | <b>East:</b> Noblecourt | <b>South:</b> North Atlasdam Flats").openTooltip().bindPopup("<b>Items:</b><br>#1 5,000 Leaves<br>#2 Healing Grape (M)<br>#3 Light Soulstone<br>#4 Energizing Pomegranate<br>#5 Wind Amulet").openPopup();

// Riverford

let northRiverfordTraversePos = xy(339, 415);
let northRiverfordTraverse = L.marker(northRiverfordTraversePos, {icon: zoneIcon}).bindTooltip("<b>North Riverford Traverse</b><br>Danger Level: 45<br><b>West:</b> Shrine of the Warbringer | <b>North:</b> South Orwell Pass | <b>East:</b> Riverford").openTooltip().bindPopup("<b>Items:</b><br>#1 Herb of Revival<br>#2 Silver-filled Pouch<br>#3 Wind Soulstone (L)").openPopup();

// Wispermill
let westernWispermillFlatsPos = xy(1692, 1433);
let westernWispermillFlats = L.marker(westernWispermillFlatsPos, {icon: zoneIcon}).bindTooltip("<b>Western Wispermill Flats</b><br>Danger Level: 45" + westernWispermillFlats_c4_SideQuests, {maxWidth : 700}).openTooltip();

// S'warkii

let northSwarkiiTrailPos = xy(960, 1220);
let northSwarkiiTrail = L.marker(northSwarkiiTrailPos, {icon: zoneIcon}).bindTooltip("<b>North S'warkii Trail</b><br>Danger Level: 11<br><b>West:</b> West S'warkii Trail | <b>South:</b> S'warkii | <b>East:</b> Western Flamesgrace Wilds").openTooltip().bindPopup("<b>Items:</b><br>#1 Healing Grape<br>#2 Olive of Life<br>#3 Herb of Awakening<br>#4 Slippery Nut").openPopup();

let westSwarkiiTrailPos = xy(868, 1177);
let westSwarkiiTrail = L.marker(westSwarkiiTrailPos, {icon: zoneIcon}).bindTooltip("<b>West S'warkii Trail</b><br>Danger Level: 11<br><b>South:</b> North Bolderfall Pass | <b>North:</b> East Victors Hollow Trail | <b>East:</b> North S'warkii Trail").openTooltip().bindPopup("<b>Items:</b><br>#1 Inspiriting Plum<br>#2 Olive of Life<br>#3 Herb of Light" + westSwarkiiTrail_c4_SideQuests, {maxWidth : 700}).openPopup();

let pathToTheWhisperwoodPos = xy(1020, 1110);
let pathToTheWhisperwood = L.marker(pathToTheWhisperwoodPos, {icon: zoneIcon}).bindTooltip("<b>Path to the Whisperwood</b><br>Danger Level: 11<br><b>West:</b> The Whisperwood | <b>East:</b> S'warkii").openTooltip().bindPopup("<b>Items:</b><br>#1 Shadow Soulstone<br>#2 Healing Grape<br>#3 500 Leaves<br>#4 Inspiriting Plum").openPopup();

// Victor's Hollow

let eastVictorsHollowTrailPos = xy(1036, 1381);
let eastVictorsHollowTrail = L.marker(eastVictorsHollowTrailPos, {icon: zoneIcon}).bindTooltip("<b>East Victors Hollow Trail</b><br>Danger Level: 34<br><b>West:</b> Victors Hollow | <b>South:</b> West S'warkii Trail | <b>North:</b> East Duskbarrow Trail | <b>Cave:</b> Shrine of the Huntress | <b>East:</b> Western Stillsnow ").openTooltip().bindPopup("<b>Items:</b><br>#1 Inspiriting Plum<br>#2 Healing Grape (M)<br>#3 5,000 Leaves").openPopup();

let eastDuskbarrowTrailPos = xy(916, 1490);
let eastDuskbarrowTrail = L.marker(eastDuskbarrowTrailPos, {icon: zoneIcon}).bindTooltip("<b>East Duskbarrow Trail</b><br>Danger Level: 45<br><b>West:</b> Duskbarrow | <b>Southeast:</b> East Victors Hollow Trail | <b>Cave:</b> Moldering Ruins").openTooltip().bindPopup("<b>Items:</b><br>#1 Copper-filled Pouch<br>#2 Herb of Revival<br>#3 Herb of Clamor<br>#4 Olive of Life (M)").openPopup();

let pathToTheForgottenGrottoPos = xy(878, 1260);
let pathToTheForgottenGrotto = L.marker(pathToTheForgottenGrottoPos, {icon: zoneIcon}).bindTooltip("<b>Path to the Forgotten Grotto</b><br>Danger Level: 33<br><b>West:</b> Forgotten Grotto | <b>East:</b> Victors Hollow").openTooltip().bindPopup("<b>Items:</b><br>#1 Healing Grape (M)<br>#2 Olive of Life<br>#3 Shadow Soulstone (M)").openPopup();


// Stillsnow

let westernStillsnowWildsPos = xy(1190, 1420);
let westernStillsnowWilds = L.marker(westernStillsnowWildsPos, {icon: zoneIcon}).bindTooltip("<b>Western Stillsnow Wilds</b><br>Danger Level: 29<br><b>West:</b> East Victors Hollow Trail | <b>Cave 1:</b> Shrine of the Flamebearer | <b>Cave 2:</b> Tomb of the Imperator | <b>North:</b> Southern Northreach | <b>East:</b> Stillsnow").openTooltip().bindPopup("<b>Items:</b><br>#1 Ice Soulstone (M)<br>#2 Energizing Pomegranate (M)<br>#3 Healing Grape (M)").openPopup();

let southernNorthreachWildsPos = xy(1310, 1550);
let southernNorthreachWilds = L.marker(southernNorthreachWildsPos, {icon: zoneIcon}).bindTooltip("<b>Southern Northreach Wilds</b><br>Danger Level: 45<br><b>South:</b> Western Stillsnow Wilds | <b>Cave:</b> Maw of the Ice Dragon | <b>North:</b> Northreach").openTooltip().bindPopup("<b>Items:</b><br>#1 Energizing Pomegranate (M)<br>#2 Shadow Soulstone (M)<br>#3 Herb of Revival<br>#4 Inspiriting Plum Basket").openPopup();

let roadToTheObsidianParlorPos = xy(1390, 1385);
let roadToTheObsidianParlor = L.marker(roadToTheObsidianParlorPos, {icon: zoneIcon}).bindTooltip("<b>Road to the Obsidian Parlor</b><br>Danger Level: 21<br><b>West:</b> Stillsnow | <b>Northeast:</b> Secret Path<br><b>Purple Chest</b>: Dark Amulet").openTooltip();

let secretPathObsidianParlorPos = xy(1433, 1410);
let secretPathObsidianParlor = L.marker(secretPathObsidianParlorPos, {icon: zoneIcon}).bindTooltip("<b>Secret Path</b><br>Danger Level: 21<br><b>South:</b> Road to the Obsidian Parlor | <b>North:</b> Obsidian Parlor<br><b>Purple Chest</b>: Spiked Vest").openTooltip().bindPopup("<b>Items:</b><br>#1 5500 Leaves<br>#2 Energizing Pomegranate (M)<br>#3 Healing Grape Bunch<br>#4 Herb of Revival<br>#5 Inspiriting Plum (M)<br>#6 Shadow Soulstone (M)<br>#7 Wakeful Stone").openPopup();

let trailToTheWhitewoodPos = xy(1310, 1430);
let trailToTheWhitewood = L.marker(trailToTheWhitewoodPos, {icon: zoneIcon}).bindTooltip("<b>Trail to the Whitewood</b><br>Danger Level: 37<br><b>South:</b> Stillsnow | <b>North:</b> The Whitewood").openTooltip().bindPopup("<b>Items:</b><br>#1 Inspiriting Plum Basket)<br>#2 Olive of Life (M)").openPopup();


// Bolderfall

let northBolderfallPassPos = xy(748, 985);
let northBolderfallPass = L.marker(northBolderfallPassPos, {icon: zoneIcon}).bindTooltip("<b>North Bolderfall Pass</b><br>Danger Level: 11<br><b>South:</b> South Bolderfall Pass | <b>North:</b> West S'warkii Trail | <b>Southeast:</b> Bolderfall").openTooltip().bindPopup("<b>Items:</b><br>#1 Healing Grape<br>#2 1000 Leaves<br>#3 Olive of Life").openPopup();

let southBolderfallPassPos = xy(740, 813);
let southBolderfallPass = L.marker(southBolderfallPassPos, {icon: zoneIcon}).bindTooltip("<b>South Bolderfall Pass</b><br>Danger Level: 11<br><b>West:</b> South Quarrycrest Pass | <b>South:</b> West Clearbrook Traverse | <b>Cave:</b> Carrion Caves | <b>North:</b> North Bolderfall Pass").openTooltip().bindPopup("<b>Items:</b><br>#1 Herb of Awakening<br>#2 Wind Soulstone<br>#3 Inspiriting Plum (M)<br>#4 Healing Grape").openPopup();

let southQuarrycrestPassPos = xy(525, 715);
let southQuarrycrestPass = L.marker(southQuarrycrestPassPos, {icon: zoneIcon}).bindTooltip("<b>South Quarrycrest Pass</b><br>Danger Level: 28<br><b>West:</b> South Orewell Pass | <b>North:</b> Quarrycrest | <b>West Cave:</b> Shrine of the Prince of Thieves | <b>East Cave:</b> Derelict Mine | <b>Southeast:</b> South Bolderfall Pass<br><b>Purple Chest</b>: Fire Amulet").openTooltip().bindPopup("<b>Items:</b><br>#1 Herb of Valor<br>#2 Fire Amulet<br>#3 Energizing Pomegranate").openPopup();

let roadToMorlocksMansePos = xy(362, 880);
let roadToMorlocksManse = L.marker(roadToMorlocksMansePos, {icon: zoneIcon}).bindTooltip("<b>Road to Morlock's Manse</b><br>Danger Level: 18<br><b>North:</b> Morlock's Manse | <b>Southeast:</b> Quarrycrest").openTooltip().bindPopup("<b>Items:</b><br>#1 Inspiriting Plum<br>#2 5000 Leaves<br>#3 Healing Grape (M)").openPopup();

let southOrwellPassPos = xy(362, 602);
let southOrwellPass = L.marker(southOrwellPassPos, {icon: zoneIcon}).bindTooltip("<b>South Orwell Pass</b><br>Danger Level: 45<br><b>Northwest:</b> Orewell | <b>North Ruins:</b> Dragonsong Fane | <b>East:</b> South Quarrycrest Pass | <b>South:</b> North Riverford Traverse").openTooltip().bindPopup("<b>Items:</b><br>#1 Energizing Pomegranate (L)<br>#2 Fire Soulstone (M)<br>#3 Healing Grape (M)<br>#4 Olive of Life (M)").openPopup();

let trailToTheForestOfRubehPos = xy(240, 765);
let trailToTheForestOfRubeh = L.marker(trailToTheForestOfRubehPos, {icon: zoneIcon}).bindTooltip("<b>Trail to the Forest of Rubeh</b><br>Danger Level: 45<br><b>North:</b> Forest of Rubeh | <b>South:</b> Orewell").openTooltip().bindPopup("<b>Items:</b><br>#1 Purifying Dust<br>#2 20000 Leaves<br>#3 Energizing Pomegranate (M)").openPopup();

// Clearbrook

let westClearbrookTraversePos = xy(768, 671);
let westClearbrookTraverse = L.marker(westClearbrookTraversePos, {icon: zoneIcon}).bindTooltip("<b>West Clearbrook Traverse</b><br>Danger Level: 11<br><b>North:</b> South Bolderfall Pass | <b>East:</b> Clearbrook | <b>Cave:</b> South Clearbrook Traverse").openTooltip().bindPopup("<b>Items:</b><br>#1 Odds and ends<br>#2 Olive of Life<br>#3 Healing Grape").openPopup();

let pathOfRhiyoPos = xy(970, 704);
let pathOfRhiyo = L.marker(pathOfRhiyoPos, {icon: zoneIcon}).bindTooltip("<b>Path of Rhiyo</b><br>Danger Level: 11<br><b>West:</b> Clearbrook | <b>East:</b> Caves of Rhiyo").openTooltip().bindPopup("<b>Items:</b><br>#1 Healing Grape<br>#2 Soothing Dust<br>#3 Essence of Plum").openPopup();

let southClearbrookTraversePos = xy(1030, 493);
let southClearbrookTraverse = L.marker(southClearbrookTraversePos, {icon: zoneIcon}).bindTooltip("<b>South Clearbrook Traverse</b><br>Danger Level: 11<br><b>Northwest:</b> West Clearbrook Traverse | <b>Southwest:</b> East Sainstbridge Traverse | <b>Cave:</b> Twin Falls | <b>Southeast:</b> Southern Sunshade Sands").openTooltip().bindPopup("<b>Items:</b><br>#1 500 Leaves<br>#2 Soothing Seed<br>#3 Healing Grape<br>#4 Olive of Life" + southClearbrookTraverseSideQuests, {maxWidth : 700}).openPopup();

let eastSaintbridgeTraversePos = xy(919, 421);
let eastSaintbridgeTraverse = L.marker(eastSaintbridgeTraversePos, {icon: zoneIcon}).bindTooltip("<b>East Saintbridge Traverse</b><br>Danger Level: 29<br><b>West:</b> Saintsbridge | <b>Cave 1:</b> Farshore | <b>Cave 2:</b> Shrine of the Healer | <b>Northeast:</b> South Clearbrook Traverse").openTooltip().bindPopup("<b>Items:</b><br>#1 Herb of Healing<br>#2 Healing Grape (M)<br>#3 Rare Stone" + eastSaintsbridgeTraverseSideQuests, {maxWidth : 700}).openPopup();

let murkwoodTrailPos = xy(614, 530);
let murkwoodTrail = L.marker(murkwoodTrailPos, {icon: zoneIcon}).bindTooltip("<b>Murkwood Trail</b><br>Danger Level: 20<br><b>East:</b> Saintsbridge | <b>North:</b> The Murkwood ").openTooltip().bindPopup("<b>Items:</b><br>#1 3500 Leaves<br>#2 Herb of Awakening<br>#3 Inspiriting Plum Basket").openPopup();


// Sunshade

let southernSunshadeSandsPos = xy(1218, 540);
let southernSunshadeSands = L.marker(southernSunshadeSandsPos, {icon: zoneIcon}).bindTooltip("<b>Southern Sunshade Sands</b><br>Danger Level: 11<br><b>West:</b> South Clearbrook Traverse | <b>North:</b> Sunshade | <b>Cave:</b> Sunshade Catacombs | <b>Southeast:</b> Eastern Sunshade Sands").openTooltip().bindPopup("<b>Items:</b><br>#1 Old Coin<br>#2 Inspiriting Plum<br>#3 Herb of Clarity").openPopup();

let easternSunshadeSandsPos = xy(1392, 520);
let easternSunshadeSands = L.marker(easternSunshadeSandsPos, {icon: zoneIcon}).bindTooltip("<b>Eastern Sunshade Sands</b><br>Danger Level: 11<br><b>West:</b> Southern Sunshade Sands | <b>South:</b> Northern Wellspring Sands | <b>Cave:</b> Whistling Cavern | <b>East:</b> South Cobbleston Gap").openTooltip().bindPopup("<b>Items:</b><br>#1 Healing Grape<br>#2 Olive of Life<br>#3 Thunder Soulstone").openPopup();

let northernWellspringSandsPos = xy(1384, 426);
let northernWellspringSands = L.marker(northernWellspringSandsPos, {icon: zoneIcon}).bindTooltip("<b>Northern Wellspring Sands</b><br>Danger Level: 31<br><b>West:</b> Wellspring | <b>South:</b> Eastern Wellspring Sands | <b>Cave:</b> Quicksand Caves | <b>Northwest:</b> Shrine of the Lady of Grace | <b>North:</b> Eastern Wellspring Sands<br><b>Purple Chest</b>: Unerring Bracelet").openTooltip().bindPopup("<b>Items:</b><br>#1 Inspiriting Plum<br>#2 Olive of Life<br>#3 Energizing Pomegranate (M)<br>#4 Imperial Lance").openPopup();

let easternWellspringSandsPos = xy(1385, 322);
let easternWellspringSands = L.marker(easternWellspringSandsPos, {icon: zoneIcon}).bindTooltip("<b>Eastern Wellspring Sands</b><br>Danger Level: 31<br><b>North:</b> Northern Wellspring Sands | <b>South:</b> Eastern Marsalim Sands | <b>East:</b> West Stonegard Pass<br><b>Purple Chest</b>: Enlightening Bracelet").openTooltip().bindPopup("<b>Items:</b><br>#1 Fool's Gold Ore<br>#2 Copper-filled Pouch<br>#3 Thunder Soulstone (L)<br>#4 Healing Grape (M)").openPopup();

let easternMarsalimSandsPos = xy(1343, 187);
let easternMarsalimSands = L.marker(easternMarsalimSandsPos, {icon: zoneIcon}).bindTooltip("<b>Eastern Marsalim Sands</b><br>Danger Level: 45<br><b>West:</b> Marsalim | <b>North:</b> Eastern Wellspring Sands | <b>East:</b> Marsalim Catacombs<br><b>Purple Chest</b>: 20,000 Leaves").openTooltip().bindPopup("<b>Items:</b><br>#1 Inspiriting Plum Basket<br>#2 Thunder Soulstone (L)").openPopup();

let roadToBlackMarketPos = xy(1230, 329);
let roadToBlackMarket = L.marker(roadToBlackMarketPos, {icon: zoneIcon}).bindTooltip("<b>Road to Black Market</b><br>Danger Level: 32<br><b>Northwest:</b> Black Market | <b>Southeast:</b> Wellspring").openTooltip();

let roadToLizardmansDenPos = xy(1230, 400);
let roadToLizardmansDen = L.marker(roadToLizardmansDenPos, {icon: zoneIcon}).bindTooltip("<b>Road to Lizardman's Den</b><br>Danger Level: 36<br><b>Southwest:</b> Lizardman's Den | <b>Northeast:</b> Wellspring").openTooltip();

let grimsandRoadPos = xy(1140, 210);
let grimsandRoad = L.marker(grimsandRoadPos, {icon: zoneIcon}).bindTooltip("<b>Grimsand Road</b><br>Danger Level: 45<br><b>East:</b> Marsalim | <b>West:</b> Grimsand Ruins").openTooltip().bindPopup("<b>Items:</b><br>#1 Fire Soulstone (L)<br>#2 Silver-filled Pouch<br>#3 Energizing Pomegranate (L)").openPopup();


// Cobbleston

let southCobblestonGapPos = xy(1675, 515);
let southCobblestonGap = L.marker(southCobblestonGapPos, {icon: zoneIcon}).bindTooltip("<b>South Cobbleston Gap</b><br>Danger Level: 11<br><b>West:</b> Eastern Sunshade Sands | <b>North:</b> Cobbleston | <b>East:</b> North Cobbleston Gap").openTooltip().bindPopup("<b>Items:</b><br>#1 Olive of Life<br>#2 Healing Grape<br>#3 1,000 Leaves<br>#4 Herb of Awakening").openPopup();

let northCobblestonGapPos = xy(1747, 655);
let northCobblestonGap = L.marker(northCobblestonGapPos, {icon: zoneIcon}).bindTooltip("<b>North Cobbleston Gap</b><br>Danger Level: 11<br><b>West:</b> South Cobbleston Gap | <b>South:</b> North Stonegard Pass | <b>Cave:</b> Untouched Sanctum | <b>Northeast:</b> East Rippletide Coast<br><b>Purple Chest</b>: Elemental Attack Nut").openTooltip().bindPopup("<b>Items:</b><br>#1 Light Soulstone<br>#2 1,200 Leaves<br>#3 Inspiriting Plum<br>#4 Healing Grape<br>#5 Healing Nut").openPopup();

let northStonegardPassPos = xy(1810, 470);
let northStonegardPass = L.marker(northStonegardPassPos, {icon: zoneIcon}).bindTooltip("<b>North Stonegard Pass</b><br>Danger Level: 30<br><b>Northwest:</b> North Cobbleston Gap | <b>South:</b> West Stonegard Pass | <b>Cave:</b> Shrine of the Thunderblade | <b>North:</b> Moonstruck Coast | <b>East:</b> Stonegard").openTooltip().bindPopup("<b>Items:</b><br>#1 Energizing Pomegranate<br>#2 Light Soulstone (M)<br>#3 Healing Grape (M)").openPopup();

let westStonegardPassPos = xy(1623, 415);
let westStonegardPass = L.marker(westStonegardPassPos, {icon: zoneIcon}).bindTooltip("<b>West Stonegard Pass</b><br>Danger Level: 30<br><b>Southwest:</b> Eastern Wellspring Sands | <b>South:</b> West Everhold Pass | <b>Cave:</b> Tomb of Kings").openTooltip();

let westEverholdPassPos = xy(1700, 233);
let westEverholdPass = L.marker(westEverholdPassPos, {icon: zoneIcon}).bindTooltip("<b>West Everhold Pass</b><br>Danger Level: 45<br><b>West:</b> West Stonegard Pass | <b>South:</b> Everhold Tunnels | <b>North:</b> Everhold | <b>East:</b> Shrine of the Runeblade").openTooltip();

// Coastlands

let moonstruckCoastPos = xy(2065, 725);
let moonstruckCoast = L.marker(moonstruckCoastPos, {icon: zoneIcon}).bindTooltip("<b>Moonstruck Coast</b><br>Danger Level: 30<br><b>North:</b> West Goldshore Coast | <b>Cave:</b> Shrine of the Trader | <b>South:</b> North Stonegard Pass<br><b>Purple Chest</b>: Articulate Stone").openTooltip().bindPopup("<b>Items:</b><br>#1 Healing Grape (M)<br>#2 Copper-filled Pouch<br>#3 Inspiriting Plum" + moonstruckCoastSideQuests, {maxWidth : 700}).openPopup();

let roadToTheSpectrewoodPos = xy(2088, 527);
let roadToTheSpectrewood = L.marker(roadToTheSpectrewoodPos, {icon: zoneIcon}).bindTooltip("<b>Road to the Spectrewood</b><br>Danger Level: 27<br><b>West:</b> Stonegard | <b>East:</b> The Spectrewood").openTooltip();

let westGoldshireCoastPos = xy(2200, 810);
let westGoldshireCoast = L.marker(westGoldshireCoastPos, {icon: zoneIcon}).bindTooltip("<b>West Goldshire Coast</b><br>Danger Level: 34<br><b>South:</b> Moonstruck Coast | <b>Cave:</b> Captains' Bane | <b>East:</b> Goldshire | <b>Northeast:</b> West Grandport Coast").openTooltip().bindPopup("<b>Items:</b><br>#1 Energizing Pomegranate<br>#2 Bottle of Blinding Dust<br>#3 Herb of Valor<br>#4 Thunder Soulstone (M)").openPopup();

let westGrandportCoastPos = xy(2335, 960);
let westGrandportCoast = L.marker(westGrandportCoastPos, {icon: zoneIcon}).bindTooltip("<b>West Grandport Coast</b><br>Danger Level: 45<br><b>West:</b> West Goldshore Coast | <b>Cave:</b> Loch of the Lost King | <b>East:</b> Grandport").openTooltip();

let roadToCavesOfAzurePos = xy(2520, 729);
let roadToCavesOfAzure = L.marker(roadToCavesOfAzurePos, {icon: zoneIcon}).bindTooltip("<b>Road to Caves of Azure</b><br>Danger Level: 24<br><b>West:</b> Goldshore | <b>Cave:</b> Caves of Azure").openTooltip();

let roadToSeasideGrottoPos = xy(2429, 690);
let roadToSeasideGrotto = L.marker(roadToSeasideGrottoPos, {icon: zoneIcon}).bindTooltip("<b>Road to Seaside Grotto</b><br>Danger Level: 38<br><b>East:</b> Goldshore | <b>Cave:</b> Seaside Grotto").openTooltip();


let zoneGroup = L.layerGroup([westernWispermillFlats, northRiverfordTraverse, northRippletideCoast, eastRippletideCoast, pathToCavesOfMaiya, westernNoblecourtFlats, northAtlasdamFlats, eastAtlasdamFlats, northernFlamesgraceWilds, westernFlamesgraceWilds, northSwarkiiTrail, westSwarkiiTrail, pathToTheCaveOfOrigin, eastVictorsHollowTrail, pathToTheWhisperwood, eastDuskbarrowTrail, westernStillsnowWilds, southernNorthreachWilds, roadToTheObsidianParlor, northBolderfallPass, southBolderfallPass, southQuarrycrestPass, westClearbrookTraverse, roadToMorlocksManse, southOrwellPass, pathOfRhiyo, southClearbrookTraverse, eastSaintbridgeTraverse, southernSunshadeSands, easternSunshadeSands, northernWellspringSands, easternWellspringSands, easternMarsalimSands, roadToBlackMarket, roadToLizardmansDen, southCobblestonGap, northCobblestonGap, northStonegardPass, westStonegardPass, westEverholdPass, moonstruckCoast, roadToTheSpectrewood, westGoldshireCoast, westGrandportCoast, roadToCavesOfAzure, roadToSeasideGrotto, trailToTheWhitewood, secretPathObsidianParlor, pathToTheForgottenGrotto, murkwoodTrail, trailToTheForestOfRubeh, grimsandRoad]);


// Cities
let atlasdamPos = xy(1430, 1020);
let atlasdam = L.marker(atlasdamPos, {icon: cityIcon}).bindTooltip("<b>Atlasdam</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Elemental Attack + Defense<br>Attack + Defense<br>Fire AoE Attack" + atlasdamSideQuests + atlasdam_c4_SideQuests, {maxWidth : 700}).openPopup();

let bolderfallPos = xy(850, 850);
let bolderfall = L.marker(bolderfallPos, {icon: cityIcon}).bindTooltip("<b>Bolderfall</b><br><b>Purple Chest</b>: Stinging Dagger, Iron Helm").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Defense Buff<br>Elemental Attack + Defense<br>Attack Break<br>Fire AoE Attack" + bolderfallSideQuests + boldefall_c4_SideQuests, {maxWidth : 700}).openPopup();

let clearbrookPos = xy(915, 705);
let clearbrook = L.marker(clearbrookPos, {icon: cityIcon}).bindTooltip("<b>Clearbrook</b><br><b>Purple Chest</b>: Elemental Attack Nut").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Fire AoE Attack" + clearbrookSideQuests + clearbrook_c4_SideQuests, {maxWidth : 700}).openPopup();

let cobblestonePos = xy(1610, 570);
let cobblestone = L.marker(cobblestonePos, {icon: cityIcon}).bindTooltip("<b>Cobblestone</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Defense Buff" + cobblestonSideQuests, {maxWidth : 700}).openPopup();

let duskbarrowPos = xy(760, 1535);
let duskbarrow = L.marker(duskbarrowPos, {icon: cityIcon}).bindTooltip("<b>Duskbarrow</b><br><b>Purple Chest</b>: 30,000 Leaves").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Defense Break<br>Fire AoE Attack" + duskbarrowSideQuests, {maxWidth : 700}).openPopup();

let everholdPos = xy(1730, 260);
let everhold = L.marker(everholdPos, {icon: cityIcon}).bindTooltip("<b>Everhold</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack + Defense Break<br>Slow Enemy Down" + everholdSideQuests, {maxWidth : 700}).openPopup();

let flamesgracePos = xy(1290, 1110);
let flamesgrace = L.marker(flamesgracePos, {icon: cityIcon}).bindTooltip("<b>Flamesgrace</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Defense Buff" + flamesgraceSideQuests + flamesgrace_c4_SideQuests, {maxWidth : 700}).openPopup();

let goldshorePos = xy(2430, 760);
let goldshore = L.marker(goldshorePos, {icon: cityIcon}).bindTooltip("<b>Goldshore</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Attack Break<br>Lightning AoE" + goldshoreSideQuests, {maxWidth : 700}).openPopup();

let grandportPos = xy(2500, 1000);
let grandport = L.marker(grandportPos, {icon: cityIcon}).bindTooltip("<b>Grandport</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>All Villager Types" + grandportSideQuests + grandport_c4_SideQuests, {maxWidth : 700}).openPopup();

let marsalimPos = xy(1280, 235);
let marsalim = L.marker(marsalimPos, {icon: cityIcon}).bindTooltip("<b>Marsalim</b><br><b>Purple Chest</b>: Spirit Bow, Tempest Amulet").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Defense Break<br>Fire AoE" + marsalimSideQuests + marsalim_c4_SideQuests, {maxWidth : 700}).openPopup();

let noblecourtPos = xy(1655, 1264);
let noblecourt = L.marker(noblecourtPos, {icon: cityIcon}).bindTooltip("<b>Noblecourt</b><br><b>Purple Chest</b>: 10,000 Leaves").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Full Break" + noblecourtSideQuests + noblecourt_c4_SideQuests, {maxWidth : 700}).openPopup();

let northreachPos = xy(1200, 1625);
let northreach = L.marker(northreachPos, {icon: cityIcon}).bindTooltip("<b>Northreach</b><br><b>Purple Chest</b>: Master's Longbow").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Elemental Attack + Defense" + northreachSideQuests + northreach_c4_SideQuests, {maxWidth : 700}).openPopup();

let orewellPos = xy(270, 735);
let orewell = L.marker(orewellPos, {icon: cityIcon}).bindTooltip("<b>Orewell</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Slow Enemy Down" + orewellSideQuests, {maxWidth : 700}).openPopup();

let quarrycrestPos = xy(430, 840);
let quarrycrest = L.marker(quarrycrestPos, {icon: cityIcon}).bindTooltip("<b>Quarrycrest</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Defense Break" + quarrycrestSideQuests + quarrycrest_c4_SideQuests, {maxWidth : 700}).openPopup();

let rippletidePos = xy(1640, 800);
let rippletide = L.marker(rippletidePos, {icon: cityIcon}).bindTooltip("<b>Rippletide</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Fire AoE Attack<br>Ice AoE Attack" + rippletideSideQuests + rippletide_c4_SideQuests, {maxWidth : 700}).openPopup();

let riverfordPos = xy(400, 430);
let riverford = L.marker(riverfordPos, {icon: cityIcon}).bindTooltip("<b>Riverford</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Elemental Attack + Elemental Defense Break<br>Light AoE<br>Dark AoE<br>Full Break" + riverfordSideQuests + riverford_c4_SideQuests, {maxWidth : 700}).openPopup();

let saintsbridgePos = xy(740, 540);
let saintsbridge = L.marker(saintsbridgePos, {icon: cityIcon}).bindTooltip("<b>Saintsbridge</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Ice AoE Attack<br>Lightning AoE Attack<br>Team HP Heal" + saintsbridgeSideQuests + saintsbridge_c4_SideQuests, {maxWidth : 700}).openPopup();

let stillsnowPos = xy(1325, 1360);
let stillsnow = L.marker(stillsnowPos, {icon: cityIcon}).bindTooltip("<b>Stillsnow</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Fire AoE Attack" + stillsnowSideQuests + stillsnow_c4_SideQuests, {maxWidth : 700}).openPopup();

let stoneguardPos = xy(1965, 550);
let stoneguard = L.marker(stoneguardPos, {icon: cityIcon}).bindTooltip("<b>Stoneguard</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Attack Break<br>Fire AoE" + stonegardSideQuests + stonegard_c4_SideQuests, {maxWidth : 700}).openPopup();

let sunshadePos = xy(1315, 615);
let sunshade = L.marker(sunshadePos, {icon: cityIcon}).bindTooltip("<b>Sunshade</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Elemental Attack + Defense<br>Fire AoE Attack" + sunshadeSideQuests + sunshade_c4_SideQuests, {maxWidth : 700}).openPopup();

let swarkiiPos = xy(1060, 1160);
let swarkii = L.marker(swarkiiPos, {icon: cityIcon}).bindTooltip("<b>S'warkii</b><br><b>Purple Chest</b>: Stone Bow").openTooltip().bindPopup("<b>Useful Villagers:</b><br>" + swarkiiSideQuests, {maxWidth : 700}).openPopup();

let victorshollowPos = xy(955, 1380);
let victorshollow = L.marker(victorshollowPos, {icon: cityIcon}).bindTooltip("<b>Victor's Hollow</b><br><b>Story</b>: Olberic - Chapter 2<br><b>Purple Chest</b>: Dark Amulet").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Defense Buff<br>Defense Break<br>Strong Multi-Attack" + victorsHollowSideQuests + victorsHollow_c4_SideQuests, {maxWidth : 700}).openPopup();

let wellspringPos = xy(1285, 360);
let wellspring = L.marker(wellspringPos, {icon: cityIcon}).bindTooltip("<b>Wellspring</b><br><b>Purple Chest</b>: 9,000 Leaves, 14,000 Leaves").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Defense Buff<br>Defense Break<br>Ice AoE" + wellspringSideQuests + wellspring_c4_SideQuests, {maxWidth : 700}).openPopup();

let wispermillPos = xy(1880, 1460);
let wispermill = L.marker(wispermillPos, {icon: cityIcon}).bindTooltip("<b>Wispermill</b>").openTooltip().bindPopup("<b>Useful Villagers:</b><br>Attack Buff<br>Elemental Attack + Defense" + wispermillSideQuests + wispermill_c4_SideQuests, {maxWidth : 700}).openPopup();

let cityGroup = L.layerGroup([duskbarrow, victorshollow, northreach, stillsnow, wispermill, noblecourt, swarkii, flamesgrace, atlasdam, rippletide, bolderfall, clearbrook, sunshade, cobblestone, quarrycrest, orewell, riverford, saintsbridge, wellspring, marsalim, stoneguard, everhold, grandport, goldshore]);

// Shrines

let apothecaryShrinePos = xy(957, 417);
let apothecaryShrine = L.marker(apothecaryShrinePos, {icon: shrineIcon}).bindTooltip("<b>Shrine of the Healer</b><br>(Apothecary Job)").openTooltip();

let clericShrinePos = xy(1213, 1392);
let clericShrine = L.marker(clericShrinePos, {icon: shrineIcon}).bindTooltip("<b>Shrine of the Flamebringer</b><br>(Cleric Job)").openTooltip();

let dancerShrinePos = xy(1350, 445);
let dancerShrine = L.marker(dancerShrinePos, {icon: shrineIcon}).bindTooltip("<b>Shrine of the Lady of Grace</b><br>(Dancer Job)").openTooltip();

let hunterShrinePos = xy(1059, 1398);
let hunterShrine = L.marker(hunterShrinePos, {icon: shrineIcon}).bindTooltip("<b>Shrine of the Huntress</b><br>(Hunter Job)").openTooltip();

let scholarShrinePos = xy(1542, 1190);
let scholarShrine = L.marker(scholarShrinePos, {icon: shrineIcon}).bindTooltip("<b>Shrine of the Sage</b><br>(Scholar Job)").openTooltip();

let merchantShrinePos = xy(2027, 730);
let merchantShrine = L.marker(merchantShrinePos, {icon: shrineIcon}).bindTooltip("<b>Shrine of the Trader</b><br>(Merchant Job)").openTooltip();

let thiefShrinePos = xy(450, 770);
let thiefShrine = L.marker(thiefShrinePos, {icon: shrineIcon}).bindTooltip("<b>Shrine of the Prince of Thieves</b><br>(Thief Job)").openTooltip();

let warriorShrinePos = xy(1756, 505);
let warriorShrine = L.marker(warriorShrinePos, {icon: shrineIcon}).bindTooltip("<b>Shrine of the Thunderblade</b><br>(Warrior Job)").openTooltip();

let runebladeShrinePos = xy(1743, 223);
let runebladeShrine = L.marker(runebladeShrinePos, {icon: advancedShrineIcon}).bindTooltip("<b>Shrine of the Runeblade</b><br>(Runelord Job)").openTooltip();

let sorcerorShrinePos = xy(936, 1515);
let sorcerorShrine = L.marker(sorcerorShrinePos, {icon: advancedShrineIcon}).bindTooltip("<b>Shrine of the Archmagus</b><br>(Sorceror Job)").openTooltip();

let starseerShrinePos = xy(1790, 1470);
let starseerShrine = L.marker(starseerShrinePos, {icon: advancedShrineIcon}).bindTooltip("<b>Shrine of the Starseer</b><br>(Starseer Job)").openTooltip();

let warbringerShrinePos = xy(270, 400);
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
let brigandsDenChapter1 = L.marker(brigandsDenPos, {icon: caveGreenIcon}).bindTooltip("<b>Brigand's Den</b><br>Danger Level: 11<br><b>Story</b>: Olberic - Chapter 1").openTooltip();
let victorshollowChapter2 = L.marker(victorshollowPos, {icon: cityGreenIcon}).bindTooltip("<b>Victor's Hollow Arena</b><br>Danger Level: 27<br><b>Story</b>: Olberic - Chapter 2<br><b>Purple Chest</b>: Dark Amulet").openTooltip();
let lizardmansDenChapter3 = L.marker(lizardmansDenPos, {icon: caveGreenIcon}).bindTooltip("<b>Lizardman's Den</b><br>Danger Level: 32<br><b>Story</b>: Olberic - Chapter 3<br><b>Purple Chest</b>: Silver-filled Pouch").openTooltip();
let lordsManseChapter4 = L.marker(lordsMansePos, {icon: mansionGreenIcon}).bindTooltip("<b>Lord's Manse</b><br>Danger Level: 45<br><b>Story</b>: Olberic - Chapter 4<br><b>Purple Chest</b>: Imperial Helm, Rune Hatchet").openTooltip();
let hiddenPathChapter4 = L.marker(hiddenPathPos, {icon: catacombGreenIcon}).bindTooltip("<b>Hidden Path</b><br>Danger Level: 45<br><b>Story</b>: Olberic - Chapter 4<br><b>Purple Chest</b>: Imperial Helm").openTooltip();
let olbericChapters = L.layerGroup([brigandsDenChapter1, victorshollowChapter2, lizardmansDenChapter3, lordsManseChapter4, hiddenPathChapter4]);

// Ophilia
let caveOfOriginChapter1 = L.marker(caveOfOriginPos, {icon: caveGreenIcon}).bindTooltip("<b>Cave of Origin</b><br>Danger Level: 11<br><b>Story</b>: Ophilia - Chapter 1").openTooltip();
let theMurkwoodChapter2 = L.marker(theMurkwoodPos, {icon: forestGreenIcon}).bindTooltip("<b>The Murkwood</b><br>Danger Level: 23<br><b>Story</b>: Ophilia - Chapter 2<br><b>Purple Chest</b>: Clarity Stone").openTooltip();
let seasideGrottoChapter3 = L.marker(seasideGrottoPos, {icon: caveGreenIcon}).bindTooltip("<b>Seaside Grotto</b><br>Danger Level: 38<br><b>Story</b>: Ophilia - Chapter 3<br><b>Purple Chest</b>: Grand Helm").openTooltip();
let ebonyGrottoChapter4 = L.marker(ebonyGrottoPos, {icon: caveGreenIcon}).bindTooltip("<b>Ebony Grotto</b><br>Danger Level: 45<br><b>Story</b>: Ophilia - Chapter 4<br><b>Purple Chest</b>: Adamantine Hat").openTooltip();

let ophiliaChapters = L.layerGroup([caveOfOriginChapter1, theMurkwoodChapter2, seasideGrottoChapter3, ebonyGrottoChapter4]);

// Primrose
let sunshadeCatacombsChapter1 = L.marker(sunshadeCatacombsPos, {icon: catacombGreenIcon}).bindTooltip("<b>Sunshade Catacombs</b><br>Danger Level: 11<br><b>Story</b>: Primrose - Chapter 1").openTooltip();
let obsidianParlorChapter2 = L.marker(obsidianParlorPos, {icon: mansionGreenIcon}).bindTooltip("<b>Obsidian Parlor</b><br>Danger Level: 21<br><b>Story</b>: Primrose - Chapter 2<br><b>Purple Chest</b>: Spiked Vest").openTooltip();
let obsidianManseChapter3 = L.marker(obsidianMansePos, {icon: mansionGreenIcon}).bindTooltip("<b>Obsidian Manse</b><br>Danger Level: 40<br><b>Story</b>: Primrose - Chapter 3<br><b>Purple Chest</b>: Elemental Hat").openTooltip();
let amphitheatreChapter4 = L.marker(amphitheatrePos, {icon: mansionGreenIcon}).bindTooltip("<b>Amphitheatre</b><br>Danger Level: 45<br><b>Story</b>: Primrose - Chapter 4<br><b>Purple Chest</b>: Unseen Saber, Enchanted Rod, Ethereal Dancers Garb").openTooltip();

let primroseChapters = L.layerGroup([sunshadeCatacombsChapter1, obsidianParlorChapter2, obsidianManseChapter3, amphitheatreChapter4]);

// Therion
let ravusManorChapter1 = L.marker(ravusManorPos, {icon: mansionGreenIcon}).bindTooltip("<b>Ravus Manor</b><br>Danger Level: 11<br><b>Story</b>: Therion - Chapter 1<br><b>Purple Chest</b>: Wind Attire, SP Nut").openTooltip();
let orlicksManseChapter2 = L.marker(orlicksMansePos, {icon: mansionGreenIcon}).bindTooltip("<b>Orlick's Manse</b><br>Danger Level: 22<br><b>Story</b>: Therion - Chapter 2<br><b>Purple Chest</b>: Lightning Amulet").openTooltip();
let blackMarketChapter3 = L.marker(blackMarketPos, {icon: caveGreenIcon}).bindTooltip("<b>Black Market</b><br>Danger Level: 36<br><b>Story</b>: Therion - Chapter 3<br><b>Purple Chest</b>: Calming Stone").openTooltip();
let lornCathedralChapter4 = L.marker(lornCathedralPos, {icon: ruinsGreenIcon}).bindTooltip("<b>Lorn Cathedral</b><br>Danger Level: 45<br><b>Story</b>: Therion - Chapter 4<br><b>Purple Chest</b>: Enchanted Sword").openTooltip();

let therionChapters = L.layerGroup([ravusManorChapter1, orlicksManseChapter2, blackMarketChapter3, lornCathedralChapter4]);

// Tressa
let cavesOfMaiyaChapter1 = L.marker(cavesOfMaiyaPos, {icon: caveGreenIcon}).bindTooltip("<b>Caves of Maiya</b><br>Danger Level: 11<br><b>Story</b>: Tressa - Chapter 1").openTooltip();
let morlocksManseChapter2 = L.marker(morlocksMansePos, {icon: mansionGreenIcon}).bindTooltip("<b>Morlock's Manse</b><br>Danger Level: 18<br><b>Story</b>: Tressa - Chapter 2<br><b>Purple Chest</b>: Hasty Helm").openTooltip();
let forgottenGrottoChapter3 = L.marker(forgottenGrottoPos, {icon: caveGreenIcon}).bindTooltip("<b>Forgotten Grotto</b><br>Danger Level: 34<br><b>Story</b>: Tressa - Chapter 3<br><b>Purple Chest</b>: Sledge Hammer").openTooltip();
let grandportSewersChapter4 = L.marker(grandportSewersPos, {icon: catacombGreenIcon}).bindTooltip("<b>Grandport Sewers</b><br>Danger Level: 45<br><b>Story</b>: Tressa - Chapter 4<br><b>Purple Chest</b>: Legion Dagger").openTooltip();

let tressaChapters = L.layerGroup([cavesOfMaiyaChapter1, morlocksManseChapter2, forgottenGrottoChapter3, grandportSewersChapter4]);



// Level 1-19

let caveOfOrigin_1_19 = L.marker(caveOfOriginPos, {icon: caveGreenIcon}).bindTooltip("<b>Cave of Origin</b><br>Danger Level: 11<br><b>Story</b>: Ophilia - Chapter 1").openTooltip();
let subterraneanStudy_1_19 = L.marker(subterraneanStudyPos, {icon: caveGreenIcon}).bindTooltip("<b>Subterranean Study</b><br>Danger Level: 11<br><b>Story</b>: Cyrus - Chapter 1").openTooltip();
let cavesOfRhiyo_1_19 = L.marker(cavesOfRhiyoPos, {icon: caveGreenIcon}).bindTooltip("<b>Caves of Rhiyo</b><br>Danger Level: 11<br><b>Story</b>: Alfyn - Chapter 1").openTooltip();
let cavesOfMaiya_1_19 = L.marker(cavesOfMaiyaPos, {icon: caveGreenIcon}).bindTooltip("<b>Caves of Maiya</b><br>Danger Level: 11<br><b>Story</b>: Tressa - Chapter 1").openTooltip();
let brigandsDen_1_19 = L.marker(brigandsDenPos, {icon: caveGreenIcon}).bindTooltip("<b>Brigand's Den</b><br>Danger Level: 11<br><b>Story</b>: Olberic - Chapter 1").openTooltip();
let untouchedSanctum_1_19 = L.marker(untouchedSanctumPos, {icon: caveGreenIcon}).bindTooltip("<b>Untouched Sanctum</b><br>Danger Level: 15<br><b>Purple Chest</b>: Accuracy Nut").openTooltip();
let theWhistlewood_1_19 = L.marker(theWhistlewoodPos, {icon: forestGreenIcon}).bindTooltip("<b>The Whistlewood</b><br>Danger Level: 15").openTooltip();
let pathOfBeasts_1_19 = L.marker(pathOfBeastsPos, {icon: forestGreenIcon}).bindTooltip("<b>Path of Beasts</b><br>Danger Level: 15<br /><b>Purple Chest</b>: War Lance").openTooltip();
let theWhisperwood_1_19 = L.marker(theWhisperwoodPos, {icon: forestGreenIcon}).bindTooltip("<b>The Whisperwood</b><br>Danger Level: 11<br><b>Story</b>: H'aanit - Chapter 1").openTooltip();
let sunshadeCatacombs_1_19 = L.marker(sunshadeCatacombsPos, {icon: catacombGreenIcon}).bindTooltip("<b>Sunshade Catacombs</b><br>Danger Level: 11<br><b>Story</b>: Primrose - Chapter 1").openTooltip();
let ravusManor_1_19 = L.marker(ravusManorPos, {icon: mansionGreenIcon}).bindTooltip("<b>Ravus Manor</b><br>Danger Level: 11<br><b>Story</b>: Therion - Chapter 1<br><b>Purple Chest</b>: Wind Attire, SP Nut").openTooltip();
let morlocksManse_1_19 = L.marker(morlocksMansePos, {icon: mansionGreenIcon}).bindTooltip("<b>Morlock's Manse</b><br>Danger Level: 18<br><b>Story</b>: Tressa - Chapter 2<br><b>Purple Chest</b>: Hasty Helm").openTooltip();

let level_1_19 = L.layerGroup([caveOfOrigin_1_19, subterraneanStudy_1_19, cavesOfRhiyo_1_19, cavesOfMaiya_1_19, brigandsDen_1_19, untouchedSanctum_1_19, theWhistlewood_1_19, pathOfBeasts_1_19, theWhisperwood_1_19, theWhisperwood_1_19, sunshadeCatacombs_1_19, ravusManor_1_19, morlocksManse_1_19]);

// Level 20-29

let hoarfrostGrotto_20_29 = L.marker(hoarfrostGrottoPos, {icon: caveGreenIcon}).bindTooltip("<b>Hoarfrost Grotto</b><br>Danger Level: 25<br><b>Purple Chest</b>: Soul Hatchet").openTooltip();
let carrionCaves_20_29 = L.marker(carrionCavesPos, {icon: caveGreenIcon}).bindTooltip("<b>Carrion Caves</b><br>Danger Level: 20<br><b>Purple Chest</b>: Physical Defense Nut").openTooltip();
let twinFalls_20_29 = L.marker(twinFallsPos, {icon: caveGreenIcon}).bindTooltip("<b>Twin Falls</b><br>Danger Level: 20<br><b>Purple Chest</b>: Psychic Staff").openTooltip();
let whistlingCaverns_20_29 = L.marker(whistlingCavernsPos, {icon: caveGreenIcon}).bindTooltip("<b>Whistling Caverns</b><br>Danger Level: 20<br><b>Purple Chest</b>: 6,000 Leaves").openTooltip();
let cavesOfAzure_20_29 = L.marker(cavesOfAzurePos, {icon: caveGreenIcon}).bindTooltip("<b>Caves of Azure</b><br>Danger Level: 24<br><b>Story</b>: Alfyn - Chapter 2<br><b>Purple Chest</b>: Spiked Vest, Falcon Garb").openTooltip();
let theMurkwood_20_29 = L.marker(theMurkwoodPos, {icon: forestGreenIcon}).bindTooltip("<b>The Murkwood</b><br>Danger Level: 23<br><b>Story</b>: Ophilia - Chapter 2<br><b>Purple Chest</b>: Clarity Stone").openTooltip();
let theSpectrewood_20_29 = L.marker(theSpectrewoodPos, {icon: forestGreenIcon}).bindTooltip("<b>The Spectrewood</b><br>Danger Level: 27<br><b>Story</b>: H'aanit - Chapter 2<br><b>Purple Chest</b>: Fire Amulet").openTooltip();
let theHollowThrone_20_29 = L.marker(theHollowThronePos, {icon: ruinsGreenIcon}).bindTooltip("<b>The Hollow Throne</b><br>Danger Level: 25<br><b>Purple Chest</b>: Argent Axe").openTooltip();
let tombOfKings_20_29 = L.marker(tombOfKingsPos, {icon: ruinsGreenIcon}).bindTooltip("<b>Tomb of Kings</b><br>Danger Level: 25<br><b>Purple Chest</b>: Hasty Helm").openTooltip();
let theSewers_20_29 = L.marker(theSewersPos, {icon: catacombGreenIcon}).bindTooltip("<b>The Sewers</b><br>Danger Level: 24<br><b>Story</b>: Cyrus - Chapter 2<br><b>Purple Chest</b>: Snipe Saber").openTooltip();
let orlicksManse_20_29 = L.marker(orlicksMansePos, {icon: mansionGreenIcon}).bindTooltip("<b>Orlick's Manse</b><br>Danger Level: 22<br><b>Story</b>: Therion - Chapter 2<br><b>Purple Chest</b>: Lightning Amulet").openTooltip();
let obsidianParlor_20_29 = L.marker(obsidianParlorPos, {icon: mansionGreenIcon}).bindTooltip("<b>Obsidian Parlor</b><br>Danger Level: 21<br><b>Story</b>: Primrose - Chapter 2<br><b>Purple Chest</b>: Spiked Vest").openTooltip();


let level_20_29 = L.layerGroup([hoarfrostGrotto_20_29, carrionCaves_20_29, twinFalls_20_29, whistlingCaverns_20_29, cavesOfAzure_20_29, theMurkwood_20_29, theSpectrewood_20_29, theHollowThrone_20_29, tombOfKings_20_29, theSewers_20_29, orlicksManse_20_29, obsidianParlor_20_29]);

// Level 30-39

let forgottenGrotto_30_39 = L.marker(forgottenGrottoPos, {icon: caveGreenIcon}).bindTooltip("<b>Forgotten Grotto</b><br>Danger Level: 34<br><b>Story</b>: Tressa - Chapter 3<br><b>Purple Chest</b>: Sledge Hammer").openTooltip();
let derelictMine_30_39 = L.marker(derelictMinePos, {icon: caveGreenIcon}).bindTooltip("<b>Derelict Mine</b><br>Danger Level: 30<br><b>Purple Chest</b>: Conscious Stone").openTooltip();
let farshore_30_39 = L.marker(farshorePos, {icon: caveGreenIcon}).bindTooltip("<b>Farshore</b><br>Danger Level: 30<br><b>Purple Chest</b>: Clarity Stone, 30,000 Leaves").openTooltip();
let blackMarket_30_39 = L.marker(blackMarketPos, {icon: caveGreenIcon}).bindTooltip("<b>Black Market</b><br>Danger Level: 36<br><b>Story</b>: Therion - Chapter 3<br><b>Purple Chest</b>: Calming Stone").openTooltip();
let lizardmansDen_30_39 = L.marker(lizardmansDenPos, {icon: caveGreenIcon}).bindTooltip("<b>Lizardman's Den</b><br>Danger Level: 32<br><b>Story</b>: Olberic - Chapter 3<br><b>Purple Chest</b>: Silver-filled Pouch").openTooltip();
let captainsBain_30_39 = L.marker(captainsBainPos, {icon: caveGreenIcon}).bindTooltip("<b>Captains' Bain</b><br>Danger Level: 35<br><b>Purple Chest</b>: Hedgehog Spear").openTooltip();
let seasideGrotto_30_39 = L.marker(seasideGrottoPos, {icon: caveGreenIcon}).bindTooltip("<b>Seaside Grotto</b><br>Danger Level: 38<br><b>Story</b>: Ophilia - Chapter 3<br><b>Purple Chest</b>: Grand Helm").openTooltip();
let TheWhitewood_30_39 = L.marker(TheWhitewoodPos, {icon: forestGreenIcon}).bindTooltip("<b>The Whitewood</b><br>Danger Level: 38<br><b>Story</b>: H'aanit - Chapter 3<br /><b>Purple Chest</b>: 15,000 Leaves").openTooltip();
let riviraWoods_30_39 = L.marker(riviraWoodsPos, {icon: forestGreenIcon}).bindTooltip("<b>Rivira Woods</b><br>Danger Level: 32<br><b>Story</b>: Alfyn - Chapter 3<br><b>Purple Chest</b>: Gaolbreaker, Ice Amulet").openTooltip();
let tombOfTheImperator_30_39 = L.marker(tombOfTheImperatorPos, {icon: catacombGreenIcon}).bindTooltip("<b>Tomb of the Imperator</b><br>Danger Level: 35<br><b>Purple Chest</b>: Wakeful Stone").openTooltip();


let level_30_39 = L.layerGroup([forgottenGrotto_30_39, derelictMine_30_39, farshore_30_39, blackMarket_30_39, lizardmansDen_30_39, captainsBain_30_39, seasideGrotto_30_39, TheWhitewood_30_39, riviraWoods_30_39, tombOfTheImperator_30_39]);

// Level 40+

let undertowCove_40_49 = L.marker(undertowCovePos, {icon: caveGreenIcon}).bindTooltip("<b>Undertow Cove</b><br>Danger Level: 45<br>Purple Chest Justice Breaker").openTooltip();
let ebonyGrotto_40_49 = L.marker(ebonyGrottoPos, {icon: caveGreenIcon}).bindTooltip("<b>Ebony Grotto</b><br>Danger Level: 45<br><b>Story</b>: Ophilia - Chapter 4<br><b>Purple Chest</b>: Adamantine Hat").openTooltip();
let mawOfTheIceDragon_40_49 = L.marker(mawOfTheIceDragonPos, {icon: caveGreenIcon}).bindTooltip("<b>Maw of the Ice Dragon</b><br>Danger Level: 45<br><b>Purple Chest</b>: Adamantine Hat").openTooltip();
let quicksandCaves_40_49 = L.marker(quicksandCavesPos, {icon: caveGreenIcon}).bindTooltip("<b>Quicksand Caves</b><br>Danger Level: 40<br><b>Purple Chest</b>: Inferno Axe").openTooltip();
let forestOfNoReturn_40_49 = L.marker(forestOfNoReturnPos, {icon: forestGreenIcon}).bindTooltip("<b>Forest of No Return</b><br>Danger Level: 48<br /><b>Purple Chest</b>: Elemental Glaive").openTooltip();
let forestOfRubeh_40_49 = L.marker(forestOfRubehPos, {icon: forestGreenIcon}).bindTooltip("<b>Forest of Rubeh</b><br>Danger Level: 45<br><b>Story</b>: Alfyn - Chapter 4<br><b>Purple Chest</b>: Inferno Amulet").openTooltip();
let lornCathedral_40_49 = L.marker(lornCathedralPos, {icon: ruinsGreenIcon}).bindTooltip("<b>Lorn Cathedral</b><br>Danger Level: 45<br><b>Story</b>: Therion - Chapter 4<br><b>Purple Chest</b>: Enchanted Sword").openTooltip();
let ruinsOfEld_40_49 = L.marker(ruinsOfEldPos, {icon: ruinsGreenIcon}).bindTooltip("<b>Ruins of Eld</b><br>Danger Level: 45<br><b>Story</b>: Cyrus - Chapter 4<br><b>Purple Chest</b>: Rune Bow, 50,000 Leaves").openTooltip();
let grimsandRuin_40_49 = L.marker(grimsandRuinPos, {icon: ruinsGreenIcon}).bindTooltip("<b>Grimsand Ruin</b><br>Danger Level: 45<br><b>Story</b>: H'aanit - Chapter 4<br><b>Purple Chest</b>: Unseen Saber, 50,000 Leaves").openTooltip();
let molderingRuins_40_49 = L.marker(molderingRuinsPos, {icon: catacombGreenIcon}).bindTooltip("<b>Moldering Ruins</b><br>Danger Level: 45<br><b>Purple Chest</b>: Hypnos Crown").openTooltip();
let hiddenPath_40_49 = L.marker(hiddenPathPos, {icon: catacombGreenIcon}).bindTooltip("<b>Hidden Path</b><br>Danger Level: 45<br><b>Story</b>: Olberic - Chapter 4<br><b>Purple Chest</b>: Imperial Helm").openTooltip();
let grandportSewers_40_49 = L.marker(grandportSewersPos, {icon: catacombGreenIcon}).bindTooltip("<b>Grandport Sewers</b><br>Danger Level: 45<br><b>Story</b>: Tressa - Chapter 4<br><b>Purple Chest</b>: Legion Dagger").openTooltip();
let obsidianManse_40_49 = L.marker(obsidianMansePos, {icon: mansionGreenIcon}).bindTooltip("<b>Obsidian Manse</b><br>Danger Level: 40<br><b>Story</b>: Primrose - Chapter 3<br><b>Purple Chest</b>: Elemental Hat").openTooltip();
let lordsManse_40_49 = L.marker(lordsMansePos, {icon: mansionGreenIcon}).bindTooltip("<b>Lord's Manse</b><br>Danger Level: 45<br><b>Story</b>: Olberic - Chapter 4<br><b>Purple Chest</b>: Imperial Helm, Rune Hatchet").openTooltip();
let amphitheatre_40_49 = L.marker(amphitheatrePos, {icon: mansionGreenIcon}).bindTooltip("<b>Amphitheatre</b><br>Danger Level: 45<br><b>Story</b>: Primrose - Chapter 4<br><b>Purple Chest</b>: Unseen Saber, Enchanted Rod, Ethereal Dancers Garb").openTooltip();
let yvonsBirthplace_40_49 = L.marker(yvonsBirthplacePos, {icon: mansionGreenIcon}).bindTooltip("<b>Yvon's Birthplace</b><br>Danger Level: 40<br><b>Story</b>: Cyrus - Chapter 3<br><b>Purple Chest</b>: Sturdy Quartz Rod").openTooltip();


let level_40_49 = L.layerGroup([undertowCove_40_49, ebonyGrotto_40_49, mawOfTheIceDragon_40_49, quicksandCaves_40_49, forestOfNoReturn_40_49, forestOfRubeh_40_49, lornCathedral_40_49, ruinsOfEld_40_49, grimsandRuin_40_49, molderingRuins_40_49, hiddenPath_40_49, grandportSewers_40_49, obsidianManse_40_49, lordsManse_40_49, amphitheatre_40_49, yvonsBirthplace_40_49]);


// Level 50+

let refugeRuins_50_59 = L.marker(refugeRuinsPos, {icon: caveGreenIcon}).bindTooltip("<b>Refuge Ruins</b><br>Danger Level: 50<br><b>Purple Chest</b>: Forbidden Sword").openTooltip();
let lochOfTheLostKing_50_59 = L.marker(lochOfTheLostKingPos, {icon: caveGreenIcon}).bindTooltip("<b>Loch of the Lost King</b><br>Danger Level: 50<br><b>Purple Chest</b>: Sturdy Sapphire Rod").openTooltip();
let forestOfPurgation_50_59 = L.marker(forestOfPurgationPos, {icon: forestGreenIcon}).bindTooltip("<b>Forest of Purgation</b><br>Danger Level: 58<br><b>Purple Chest</b>: Forbidden Dagger").openTooltip();
let dragonsongFane_50_59 = L.marker(dragonsongFanePos, {icon: ruinsGreenIcon}).bindTooltip("<b>Dragonsong Fane</b><br>Danger Level: 50<br><b>Purple Chest</b>: Holy Longbow").openTooltip();
let everholdTunnels_50_59 = L.marker(everholdTunnelsPos, {icon: ruinsGreenIcon}).bindTooltip("<b>Everhold Tunnels</b><br>Danger Level: 50<br><b>Purple Chest</b>: Knowledge Staff").openTooltip();
let marsalimCatacombs_50_59 = L.marker(marsalimCatacombsPos, {icon: ruinsGreenIcon}).bindTooltip("<b>Marsalim Catacombs</b><br>Danger Level: 50<br><b>Purple Chest</b>: Viper Dagger").openTooltip();
let level_50_59 = L.layerGroup([refugeRuins_50_59, lochOfTheLostKing_50_59, forestOfPurgation_50_59, dragonsongFane_50_59, everholdTunnels_50_59, marsalimCatacombs_50_59]);


// Sidequests


let baseMaps = {

};

let overlayMapData = [
    { keyValue: `<img src="${assetRoot}/images/therion.png"        width='10' height='10'> Characters`,         valueValue: characterGroup },
    { keyValue: `<img src="${assetRoot}/images/icons/shrine.png"   width='10' height='10'> Shrines`,            valueValue: shrineGroup },
    { keyValue: `<img src="${assetRoot}/images/icons/town.png"     width='10' height='10'> Cities`,             valueValue: cityGroup },
    { keyValue: `<img src="${assetRoot}/images/icons/zone.png"     width='10' height='10'> Regions`,            valueValue: zoneGroup },
    { keyValue: `<img src="${assetRoot}/images/icons/cave.png"     width='10' height='10'> Caves`,              valueValue: caveGroup },
    { keyValue: `<img src="${assetRoot}/images/icons/forest.png"   width='10' height='10'> Forests`,            valueValue: forestGroup },
    { keyValue: `<img src="${assetRoot}/images/icons/ruins.png"    width='10' height='10'> Ruins`,              valueValue: ruinsGroup },
    { keyValue: `<img src="${assetRoot}/images/icons/catacomb.png" width='10' height='10'> Catacombs`,          valueValue: catacombsGroup },
    { keyValue: `<img src="${assetRoot}/images/icons/mansion.png"  width='10' height='10'> Mansions`,           valueValue: mansionsGroup },
    { keyValue: `<img src="${assetRoot}/images/alfyn.png"          width='20' height='30'> Alfyn Chapters`,     valueValue: alfynChapters },
    { keyValue: `<img src="${assetRoot}/images/cyrus.png"          width='20' height='30'> Cyrus Chapters`,     valueValue: cyrusChapters },
    { keyValue: `<img src="${assetRoot}/images/haanit.png"         width='20' height='30'> H'aanit Chapters`,   valueValue: haanitChapters },
    { keyValue: `<img src="${assetRoot}/images/olberic.png"        width='20' height='30'> Olberic Chapters`,   valueValue: olbericChapters },
    { keyValue: `<img src="${assetRoot}/images/ophelia.png"        width='20' height='30'> Ophilia Chapters`,   valueValue: ophiliaChapters },
    { keyValue: `<img src="${assetRoot}/images/primrose.png"       width='20' height='30'> Primrose Chapters`,  valueValue: primroseChapters },
    { keyValue: `<img src="${assetRoot}/images/therion.png"        width='20' height='30'> Therion Chapters`,   valueValue: therionChapters },
    { keyValue: `<img src="${assetRoot}/images/tressa.png"         width='20' height='30'> Tressa Chapters`,    valueValue: tressaChapters },
    { keyValye: "Danger Level 1-19",   valueValue: level_1_19 },
    { keyValye: "Danger Level 20-29",  valueValue: level_20_29 },
    { keyValye: "Danger Level 30-39",  valueValue: level_30_39 },
    { keyValye: "Danger Level 40-49",  valueValue: level_40_49 },
    { keyValye: "Danger Level 50-59",  valueValue: level_50_59 }
]

let overlayMaps = {}
for (const [key, value] of Object.entries(overlayMapData)) {
    overlayMaps[key] = value
}

let bounds = [[0,0], [1890, 2690]];

let map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2,
    zoom: 0,
    layers: [shrineGroup, cityGroup, zoneGroup, caveGroup, forestGroup, ruinsGroup, catacombsGroup, mansionsGroup]
});


map.setMaxBounds(bounds);
map.on('drag', function() {
    map.panInsideBounds(bounds, { animate: false });
});

let image = L.imageOverlay('https://s3.amazonaws.com/corum-files/clean_map.jpg', bounds).addTo(map);

L.control.layers(baseMaps, overlayMaps, {collapsed:true, position: 'topleft'}).addTo(map);

map.setView( [945, 1345], 0);

