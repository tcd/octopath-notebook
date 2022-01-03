// let cityIcon
// let caveIcon

// let forestIcon
// let mansionIcon
// let ruinsIcon
// let catacombIcon
// let shrineIcon

// let advancedShrineIcon
// let zoneIcon
// let cityGreenIcon
// let caveGreenIcon
// let forestGreenIcon
// let mansionGreenIcon
// let ruinsGreenIcon
// let catacombGreenIcon

// let alfynIcon
// let cyrusIcon
// let haanitIcon
// let olbericIcon
// let opheliaIcon
// let primroseIcon
// let therioncon
// let tressaIcon

const assetRoot = "http://www.octopathtravelmap.com/"

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
