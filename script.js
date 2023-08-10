const types = {
    water: 'img/pkmn-type/water.png', 
    bug: 'img/pkmn-type/bug.png',
    dark: 'img/pkmn-type/dark.png',
    dragon: 'img/pkmn-type/dragon.png',
    electric: 'img/pkmn-type/electric.png',
    fairy: 'img/pkmn-type/fairy.png',
    fighting: 'img/pkmn-type/fighting.png',
    fire: 'img/pkmn-type/fire.png',
    flying: 'img/pkmn-type/flying.png',
    ghost: 'img/pkmn-type/ghost.png',
    grass: 'img/pkmn-type/grass.png',
    ground: 'img/pkmn-type/ground.png',
    ice: 'img/pkmn-type/ice.png',
    normal: 'img/pkmn-type/normal.png',
    poison: 'img/pkmn-type/poison.png',
    psychic: 'img/pkmn-type/psychic.png',
    rock: 'img/pkmn-type/rock.png',
    steel: 'img/pkmn-type/steel.png',
};

const pokemons = [
    {
        num: '001',
        name: 'COATTINY',
        img: 'img/pkmn-img/001.png',
        shinyImg: 'img/pkmn-img-shiny/001_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Quati',
        ability: 'Overgrow',
        pokemonTypes: [types.grass],
    },
    {
        num: '002',
        name: 'COATTHIEF',
        img: 'img/pkmn-img/002.png',
        shinyImg: 'img/pkmn-img-shiny/002_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Quati',
        ability: 'Overgrow',
        pokemonTypes: [types.grass, types.dark],
    },
    {
        num: '003',
        name: 'SAQUACYN',
        img: 'img/pkmn-img/003.png',
        shinyImg: 'img/pkmn-img/003.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Hunter',
        ability: 'Overgrow',
        pokemonTypes: [types.grass, types.dark],
    },
    {
        num: '004',
        name: 'EMBRITO',
        img: 'img/pkmn-img/004.png',
        shinyImg: 'img/pkmn-img-shiny/004_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Fawn',
        ability: 'Blaze',
        pokemonTypes: [types.fire],
    },
    {
        num: '005',
        name: 'FLAMPIPE',
        img: 'img/pkmn-img/005.png',
        shinyImg: 'img/pkmn-img-shiny/005_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Fire Goat',
        ability: 'Blaze',
        pokemonTypes: [types.fire],
    },
    {
        num: '006',
        name: 'MOTORAAM',
        img: 'img/pkmn-img/006.png',
        shinyImg: 'img/pkmn-img/006.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Fire Goat',
        ability: 'Blaze',
        pokemonTypes: [types.fire, types.steel],
    },
    {
        num: '007',
        name: 'GUAMIRIN',
        img: 'img/pkmn-img/007.png',
        shinyImg: 'img/pkmn-img-shiny/007_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Tiny Crab',
        ability: 'Torrent',
        pokemonTypes: [types.water],
    },
    {
        num: '008',
        name: 'GUAIAMURI',
        img: 'img/pkmn-img/008.png',
        shinyImg: 'img/pkmn-img-shiny/008_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Guaiamum',
        ability: 'Torrent',
        pokemonTypes: [types.water],
    },
    {
        num: '009',
        name: 'PATAIAMUM',
        img: 'img/pkmn-img/009.png',
        shinyImg: 'img/pkmn-img/009.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Guaiamum',
        ability: 'Torrent',
        pokemonTypes: [types.water, types.ground],
    },
    {
        num: '010',
        name: 'APEGUI',
        img: 'img/pkmn-img/010.png',
        shinyImg: 'img/pkmn-img/010.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Small Monkey',
        ability: 'Pickup',
        pokemonTypes: [types.normal],
    },
    {
        num: '011',
        name: 'APEVOLT',
        img: 'img/pkmn-img/011.png',
        shinyImg: 'img/pkmn-img-shiny/011_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Golden',
        ability: 'Volt Absorb',
        pokemonTypes: [types.electric],
    },
    {
        num: '012',
        name: 'VEEKRESS',
        img: 'img/pkmn-img/012.png',
        shinyImg: 'img/pkmn-img-shiny/012_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Bird',
        ability: 'Big Pecks/Moxie',
        pokemonTypes: [types.flying, types.normal],
    },
    {
        num: '013',
        name: 'GAVKRESS',
        img: 'img/pkmn-img/013.png',
        shinyImg: 'img/pkmn-img-shiny/013_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Hawk',
        ability: 'Big Pecks/Moxie',
        pokemonTypes: [types.flying, types.fighting],
    },
    {
        num: '014',
        name: 'HAWKRESS',
        img: 'img/pkmn-img/014.png',
        shinyImg: 'img/pkmn-img-shiny/014_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Hawk',
        ability: 'Big Pecks/Moxie',
        pokemonTypes: [types.flying, types.fighting],
    },
    {
        num: '015',
        name: 'SARUREK',
        img: 'img/pkmn-img/015.png',
        shinyImg: 'img/pkmn-img/015.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Opossum',
        ability: 'Reckless',
        pokemonTypes: [types.normal, types.dark],
    },
    {
        num: '016',
        name: 'SAREGURO',
        img: 'img/pkmn-img/016.png',
        shinyImg: 'img/pkmn-img/016.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Opossum',
        ability: 'Reckless',
        pokemonTypes: [types.normal, types.dark],
    },
    {
        num: '017',
        name: 'PICHU',
        form: 'Regional Form',
        img: 'img/pkmn-img/017.png',
        shinyImg: 'img/pkmn-img-shiny/017_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Mouse',
        ability: 'Lighting Rod',
        pokemonTypes: [types.electric, types.normal],
    },
    {
        num: '018',
        name: 'PIKACHU',
        form: 'Regional Form',
        img: 'img/pkmn-img/018.png',
        shinyImg: 'img/pkmn-img-shiny/018_s.png',
        femaleImg: 'img/pkmn-img-female/018_f.png',
        category: 'Mouse',
        ability: 'Lighting Rod',
        pokemonTypes: [types.electric, types.normal],
    },
    {
        num: '019',
        name: 'KAICHU',
        img: 'img/pkmn-img/019.png',
        shinyImg: 'img/pkmn-img-shiny/019_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Thunder',
        ability: 'Lighting Rod',
        pokemonTypes: [types.electric, types.fighting],
    },
    {
        num: '020',
        name: 'CAJUBI',
        img: 'img/pkmn-img/020.png',
        shinyImg: 'img/pkmn-img-shiny/020_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Caju',
        ability: 'Harvest',
        pokemonTypes: [types.grass],
    },
    {
        num: '021',
        name: 'MACARAJU',
        img: 'img/pkmn-img/021.png',
        shinyImg: 'img/pkmn-img-shiny/021_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Aracaju',
        ability: 'Harvest',
        pokemonTypes: [types.grass, types.flying],
    },
    {
        num: '022',
        name: 'BELLSPROUT',
        img: 'img/pkmn-img/022.png',
        shinyImg: 'img/pkmn-img-shiny/022_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Flower',
        ability: 'Chlorophyll',
        pokemonTypes: [types.grass, types.poison],
    },
    {
        num: '023',
        name: 'WEEPINBELL',
        form: 'Regional Form',
        img: 'img/pkmn-img/023.png',
        shinyImg: 'img/pkmn-img-shiny/023_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Toxic Flower',
        ability: 'Chlorophyll',
        pokemonTypes: [types.poison, types.grass],
    },
    {
        num: '024',
        name: 'TOXXIBELL',
        img: 'img/pkmn-img/024.png',
        shinyImg: 'img/pkmn-img-shiny/024_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Toxic Flower',
        ability: 'Chlorophyll',
        pokemonTypes: [types.poison, types.grass],
    },
    {
        num: '025',
        name: 'JACIENNA',
        img: 'img/pkmn-img/025.png',
        shinyImg: 'img/pkmn-img/025.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Water Bird',
        ability: 'Run Away',
        pokemonTypes: [types.water, types.flying],
    },
    {
        num: '026',
        name: 'GARCIENNA',
        img: 'img/pkmn-img/026.png',
        shinyImg: 'img/pkmn-img/026.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Mean Bird',
        ability: 'Intimidate',
        pokemonTypes: [types.dark, types.flying],
    },
    {
        num: '027',
        name: 'DUNDUCLE',
        img: 'img/pkmn-img/027.png',
        shinyImg: 'img/pkmn-img/027.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Duck',
        ability: 'Tangled Feet',
        pokemonTypes: [types.flying],
    },
    {
        num: '028',
        name: 'PADDUCLE',
        img: 'img/pkmn-img/028.png',
        shinyImg: 'img/pkmn-img-shiny/028_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Carrier',
        ability: 'Big Pecks',
        pokemonTypes: [types.flying],
    },
    {
        num: '029',
        name: 'STARTICK',
        img: 'img/pkmn-img/029.png',
        shinyImg: 'img/pkmn-img-shiny/029_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Red Star',
        ability: 'Poison Point',
        pokemonTypes: [types.poison],
    },
    {
        num: '030',
        name: 'ARAMARON',
        img: 'img/pkmn-img/030.png',
        shinyImg: 'img/pkmn-img-shiny/030_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Thread',
        ability: 'Merciless',
        pokemonTypes: [types.poison, types.psychic],
    },
    {
        num: '031',
        name: 'JUNSPION',
        img: 'img/pkmn-img/031.png',
        shinyImg: 'img/pkmn-img-shiny/031_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Stinger',
        ability: 'Merciless',
        pokemonTypes: [types.poison, types.fighting],
    },
    {
        num: '032',
        name: 'COROCHI',
        img: 'img/pkmn-img/032.png',
        shinyImg: 'img/pkmn-img-shiny/032_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Roach',
        ability: 'Run Away',
        pokemonTypes: [types.bug, types.normal],
    },
    {
        num: '033',
        name: 'CACOROCHI',
        img: 'img/pkmn-img/033.png',
        shinyImg: 'img/pkmn-img/033.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Super Roach',
        ability: 'Toxic Boost',
        pokemonTypes: [types.bug, types.ground],
    },
    {
        num: '034',
        name: 'BUDSLY',
        img: 'img/pkmn-img/034.png',
        shinyImg: 'img/pkmn-img-shiny/034_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Bud',
        ability: 'Leaf Guard',
        pokemonTypes: [types.grass],
    },
    {
        num: '035',
        name: 'TRULYWOODO',
        img: 'img/pkmn-img/035.png',
        shinyImg: 'img/pkmn-img-shiny/035_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Tree',
        ability: 'Leaf Guard',
        pokemonTypes: [types.grass],
    },
    {
        num: '036',
        name: 'SIRENBY',
        img: 'img/pkmn-img/036.png',
        shinyImg: 'img/pkmn-img-shiny/036_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Manatee',
        ability: 'Sap Sipper/Thick Fat',
        pokemonTypes: [types.water],
    },
    {
        num: '037',
        name: 'SIRENIA',
        img: 'img/pkmn-img/037.png',
        shinyImg: 'img/pkmn-img-shiny/037_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Manatee',
        ability: 'Sap Sipper/Thick Fat',
        pokemonTypes: [types.water, types.ice],
    },
    {
        num: '038',
        name: 'SMIRGATOR',
        img: 'img/pkmn-img/038.png',
        shinyImg: 'img/pkmn-img-shiny/038_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Alligator',
        ability: 'Intimidate/Anger Point',
        pokemonTypes: [types.water, types.dark],
    },
    {
        num: '039',
        name: 'MANTYKE',
        img: 'img/pkmn-img/039.png',
        shinyImg: 'img/pkmn-img-shiny/039_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Kite',
        ability: 'Swift Swim/Water Absorb',
        pokemonTypes: [types.water, types.flying],
    },
    {
        num: '040',
        name: 'MANTINE',
        img: 'img/pkmn-img/040.png',
        shinyImg:'img/pkmn-img-shiny/040_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Kite',
        ability: 'Swift Swim/Water Absorb',
        pokemonTypes: [types.water, types.flying],
    },
    {
        num: '041',
        name: 'MANKYTE',
        img: 'img/pkmn-img/041.png',
        shinyImg: 'img/pkmn-img-shiny/041_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Kite',
        ability: 'Swift Swim/Water Absorb',
        pokemonTypes: [types.water, types.flying],
    },
    {
        num: '042',
        name: 'SHRIMBODY',
        img: 'img/pkmn-img/042.png',
        shinyImg: 'img/pkmn-img-shiny/042_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Shrimp',
        ability: 'Weak Armor',
        pokemonTypes: [types.ground, types.water],
    },
    {
        num: '043',
        name: 'SHRIMRYU',
        img: 'img/pkmn-img/043.png',
        shinyImg: 'img/pkmn-img-shiny/043_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Pitu Shrimp',
        ability: 'Shell Armor',
        pokemonTypes: [types.dragon, types.water],
    },
    {
        num: '044',
        name: 'HORSEA',
        img: 'img/pkmn-img/044.png',
        shinyImg: 'img/pkmn-img-shiny/044_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Dragon',
        ability: 'Swift Swim/Sniper',
        pokemonTypes: [types.water],
    },
    {
        num: '045',
        name: 'SEADRA',
        img: 'img/pkmn-img/045.png',
        shinyImg: 'img/pkmn-img-shiny/045_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Dragon',
        ability: 'Swift Swim/Sniper',
        pokemonTypes: [types.water],
    },
    {
        num: '046',
        name: 'DRACEAN',
        img: 'img/pkmn-img/046.png',
        shinyImg: 'img/pkmn-img-shiny/046_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Dragon',
        ability: 'Swift Swim/Sniper',
        pokemonTypes: [types.dragon, types.water],
    },
    {
        num: '047',
        name: 'DEFAULT',
        img: 'img/pkmn-img/placeholder.png',
        shinyImg: 'img/pkmn-img/placeholder.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: '',
        ability: '',
        pokemonTypes: [types.normal],
    },
    {
        num: '048',
        name: 'DEFAULT',
        img: 'img/pkmn-img/placeholder.png',
        shinyImg: 'img/pkmn-img/placeholder.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: '',
        ability: '',
        pokemonTypes: [types.normal],
    },
    {
        num: '049',
        name: 'TENTACOOL',
        form: 'Regional Form',
        img: 'img/pkmn-img/049.png',
        shinyImg: 'img/pkmn-img-shiny/049_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Jellyfish',
        ability: 'Poison Point/Static',
        pokemonTypes: [types.poison, types.electric],
    },
    {
        num: '050',
        name: 'TENTAOWAR',
        // form: 'Regional Form',
        img: 'img/pkmn-img/050.png',
        shinyImg: 'img/pkmn-img-shiny/050_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Jellyfish',
        ability: 'Poison Point/Static',
        pokemonTypes: [types.poison, types.electric],
    },
    {
        num: '051',
        name: 'ANKUSHAK',
        img: 'img/pkmn-img/051.png',
        shinyImg: 'img/pkmn-img-shiny/051_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Ancor',
        ability: 'Strong Jaw',
        pokemonTypes: [types.water, types.steel],
    },
    {
        num: '052',
        name: 'CUMBULLUS',
        img: 'img/pkmn-img/052.png',
        shinyImg: 'img/pkmn-img/052.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Cloud',
        ability: 'Cloud Nine',
        pokemonTypes: [types.fairy],
    },
    {
        num: '053',
        name: 'NUVECIAN',
        img: 'img/pkmn-img/053.png',
        shinyImg: 'img/pkmn-img/053.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Stormy Cloud',
        ability: 'Wind Power',
        pokemonTypes: [types.fairy, types.electric],
    },
    {
        num: '054',
        name: 'STRATERIM',
        img: 'img/pkmn-img/054.png',
        shinyImg: 'img/pkmn-img/054.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Sunny Cloud',
        ability: 'Wind Power',
        pokemonTypes: [types.fairy, types.fire],
    },
    {
        num: '055',
        name: 'EEVEE',
        form: 'Partner Eevee',
        img: 'img/pkmn-img/055.png',
        shinyImg: 'img/pkmn-img-shiny/055_s.png',
        femaleImg: 'img/pkmn-img-female/055_f.png',
        category: 'Evolution',
        ability: 'Run Away/Adaptability',
        pokemonTypes: [types.normal],
    },
    {
        num: '056',
        name: 'ACEREON',
        img: 'img/pkmn-img/056.png',
        shinyImg: 'img/pkmn-img/056.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Armor',
        ability: 'Battle Armor',
        pokemonTypes: [types.steel],
    },
    {
        num: '057',
        name: 'SPECTREON',
        img: 'img/pkmn-img/057.png',
        shinyImg: 'img/pkmn-img/057.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Melancolic',
        ability: 'Insomnia',
        pokemonTypes: [types.ghost],
    },
    {
        num: '058',
        name: 'DRACAREON',
        img: 'img/pkmn-img/058.png',
        shinyImg: 'img/pkmn-img-shiny/058_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Scally',
        ability: 'Shed Skin',
        pokemonTypes: [types.dragon],
    },
    {
        num: '059',
        name: 'OMYNEON',
        img: 'img/pkmn-img/059.png',
        shinyImg: 'img/pkmn-img-shiny/059_s.png',
        femaleImg: 'img/pkmn-img-female/059_f.png',
        category: 'Miracle',
        ability: 'Adaptability',
        pokemonTypes: [types.normal],
    },
    {
        num: '060',
        name: 'MURIMIZU',
        img: 'img/pkmn-img/060.png',
        shinyImg: 'img/pkmn-img/060.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Vessel',
        ability: 'Water Veil',
        pokemonTypes: [types.water],
    },
    {
        num: '061',
        name: 'MIZUCLAY',
        img: 'img/pkmn-img/061.png',
        shinyImg: 'img/pkmn-img/061.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Vessel',
        ability: 'Water Absorb',
        pokemonTypes: [types.water] ,
    },
    {
        num: '062',
        name: 'AZURILL',
        img: 'img/pkmn-img/062.png',
        shinyImg: 'img/pkmn-img/062.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Polka Dot',
        ability: 'Thick Fat/Huge Power',
        pokemonTypes: [types.normal, types.fairy],
    },
    {
        num: '063',
        name: 'MARILL',
        form: 'Regional Form',
        img: 'img/pkmn-img/063.png',
        shinyImg: 'img/pkmn-img-shiny/063_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Punching',
        ability: 'Iron Fist/Huge Power',
        pokemonTypes: [types.fighting, types.fairy],
    },
    {
        num: '064',
        name: 'PINKURILL',
        img: 'img/pkmn-img/064.png',
        shinyImg: 'img/pkmn-img-shiny/064_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Punching',
        ability: 'Iron Fist/Huge Power',
        pokemonTypes: [types.fighting, types.fairy],
    },
    {
        num: '065',
        name: 'BRIEBBLE',
        img: 'img/pkmn-img/065.png',
        shinyImg: 'img/pkmn-img-shiny/065_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Pebble',
        ability: 'Sturdy',
        pokemonTypes: [types.rock],
    },
    {
        num: '066',
        name: 'STRELLEPIPE',
        img: 'img/pkmn-img/066.png',
        shinyImg: 'img/pkmn-img-shiny/066_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Street Rock',
        ability: 'Sturdy',
        pokemonTypes: [types.rock],
    },
    {
        num: '067',
        name: 'PAVEGMENT',
        img: 'img/pkmn-img/067.png',
        shinyImg: 'img/pkmn-img/067.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Street Rock',
        ability: 'Sturdy',
        pokemonTypes: [types.rock, types.poison],
    },
    {
        num: '068',
        name: 'DRIFLOON',
        form: 'Regional Form',
        img: 'img/pkmn-img/068.png',
        shinyImg: 'img/pkmn-img/068.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Ballon',
        ability: 'Flare Boost',
        pokemonTypes: [types.ghost, types.fire],
    },
    {
        num: '069',
        name: 'DRIFBLIM',
        form: 'Regional Form',
        img: 'img/pkmn-img/069.png',
        shinyImg: 'img/pkmn-img/069.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Ballon',
        ability: 'Flare Boost',
        pokemonTypes: [types.ghost, types.fire],
    },
    {
        num: '070',
        name: 'ERIRÉ',
        img: 'img/pkmn-img/070.png',
        shinyImg: 'img/pkmn-img/070.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Entity',
        ability: 'Anticipation',
        pokemonTypes: [types.psychic],
    },
    {
        num: '071',
        name: 'ERIXÁ',
        img: 'img/pkmn-img/071.png',
        shinyImg: 'img/pkmn-img/071.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Entity',
        ability: 'Anticipation',
        pokemonTypes: [types.psychic],
    },
    {
        num: '072',
        name: 'DEFAULT',
        img: 'img/pkmn-img/072.png',
        shinyImg: 'img/pkmn-img/072.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Entity',
        ability: 'Justified',
        pokemonTypes: [types.psychic, types.fighting],
    },
    {
        num: '073',
        name: 'ROSAGARTA',
        img: 'img/pkmn-img/073.png',
        shinyImg: 'img/pkmn-img-shiny/073_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Larva',
        ability: 'Shed Skin',
        pokemonTypes: [types.bug],
    },
    {
        num: '074',
        name: 'HESALYDA',
        img: 'img/pkmn-img/074.png',
        shinyImg: 'img/pkmn-img-shiny/074_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Chrysalis',
        ability: 'Shed Skin',
        pokemonTypes: [types.bug],
    },
    {
        num: '075',
        name: 'FLUTTYROSA',
        img: 'img/pkmn-img/075.png',
        shinyImg: 'img/pkmn-img-shiny/075_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Mariposa',
        ability: 'Dazzling',
        pokemonTypes: [types.bug, types.psychic],
    },
    {
        num: '076',
        name: 'GYMNER',
        img: 'img/pkmn-img/076.png',
        shinyImg: 'img/pkmn-img/076.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Flower Seed',
        ability: 'Cute Charm',
        pokemonTypes: [types.grass],
    },
    {
        num: '077',
        name: 'GYMMERINA',
        img: 'img/pkmn-img/077.png',
        shinyImg: 'img/pkmn-img-shiny/077_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Flower',
        ability: 'Flower Veil',
        pokemonTypes: [types.grass, types.fairy],
    },
    {
        num: '078',
        name: 'CACTTARU',
        img: 'img/pkmn-img/078.png',
        shinyImg: 'img/pkmn-img/078.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Fruit',
        ability: 'Iron Barbs',
        pokemonTypes: [types.grass],
    },
    {
        num: '079',
        name: 'MANCACTTARU',
        img: 'img/pkmn-img/079.png',
        shinyImg: 'img/pkmn-img/079.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Cactus',
        ability: 'Iron Barbs',
        pokemonTypes: [types.grass, types.psychic],
    },
    {
        num: '080',
        name: 'CALFLING',
        img: 'img/pkmn-img/080.png',
        shinyImg: 'img/pkmn-img-shiny/080_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Calf',
        ability: 'Thick Fat/Scrappy',
        pokemonTypes: [types.normal],
    },
    {
        num: '081',
        name: 'MILTANK',
        form: 'Regional Form',
        img: 'img/pkmn-img/081.png',
        shinyImg: 'img/pkmn-img-shiny/081_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Milk Cow',
        ability: 'Thick Fat/Cud Chew',
        pokemonTypes: [types.normal, types.ground],
    },
    {
        num: '082',
        name: 'TAURUS',
        form: 'Regional Form',
        img: 'img/pkmn-img/082.png',
        shinyImg: 'img/pkmn-img-shiny/082_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Farm Bull',
        ability: 'Cud Chew/Moxie',
        pokemonTypes: [types.normal, types.ground],
    },
    {
        num: '083',
        name: 'NELLAUROS',
        img: 'img/pkmn-img/083.png',
        shinyImg: 'img/pkmn-img-shiny/083_s.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Rodeo Bull',
        ability: 'Cud Chew/Moxie',
        pokemonTypes: [types.fighting, types.ground],
    },
    {
        num: '084',
        name: 'DEFAULT',
        img: 'img/pkmn-img/placeholder.png',
        shinyImg: 'img/pkmn-img/placeholder.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: '',
        ability: '',
        pokemonTypes: [types.normal],
    },
    {
        num: '085',
        name: 'DEFAULT',
        img: 'img/pkmn-img/placeholder.png',
        shinyImg: 'img/pkmn-img/placeholder.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: '',
        ability: '',
        pokemonTypes: [types.normal],
    },
    {
        num: '086',
        name: 'DEFAULT',
        img: 'img/pkmn-img/placeholder.png',
        shinyImg: 'img/pkmn-img/placeholder.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: '',
        ability: '',
        pokemonTypes: [types.normal],
    },
    {
        num: '087',
        name: 'DEFAULT',
        img: 'img/pkmn-img/placeholder.png',
        shinyImg: 'img/pkmn-img/placeholder.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: '',
        ability: '',
        pokemonTypes: [types.normal],
    },
    {
        num: '088',
        name: 'LARVITAR',
        form: 'Regional Form',
        img: 'img/pkmn-img/088.png',
        shinyImg: 'img/pkmn-img/088.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Rough Skin',
        ability: 'Rough Skin',
        pokemonTypes: [types.dark, types.ground],
    },
    {
        num: '089',
        name: 'CHRISALYTAR',
        img: 'img/pkmn-img/089.png',
        shinyImg: 'img/pkmn-img/089.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Chrysalis',
        ability: 'Rough Skin',
        pokemonTypes: [types.dark, types.ground],
    },
    {
        num: '090',
        name: 'INDOMITAR',
        img: 'img/pkmn-img/090.png',
        shinyImg: 'img/pkmn-img/090.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Indominable',
        ability: 'Rough Skin',
        pokemonTypes: [types.dark, types.poison],
    },
    {
        num: '091',
        name: 'TEIURIN',
        img: 'img/pkmn-img/091.png',
        shinyImg: 'img/pkmn-img/091.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Lizard',
        ability: 'Intimidate',
        pokemonTypes: [types.dragon],
    },
    {
        num: '092',
        name: 'TEIRUDON',
        img: 'img/pkmn-img/092.png',
        shinyImg: 'img/pkmn-img/092.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Lizard',
        ability: 'Intimidate',
        pokemonTypes: [types.dragon],
    },
    {
        num: '093',
        name: 'KALARUDON',
        img: 'img/pkmn-img/093.png',
        shinyImg: 'img/pkmn-img/093.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: 'Lizard',
        ability: 'Intimidate',
        pokemonTypes: [types.dragon],
    },
    {
        num: '094',
        name: 'DEFAULT',
        img: 'img/pkmn-img/placeholder.png',
        shinyImg: 'img/pkmn-img/placeholder.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: '',
        ability: '',
        pokemonTypes: [types.normal],
    },
    {
        num: '095',
        name: 'DEFAULT',
        img: 'img/pkmn-img/placeholder.png',
        shinyImg: 'img/pkmn-img/placeholder.png',
        femaleImg: 'img/pkmn-img/placeholder.png',
        category: '',
        ability: '',
        pokemonTypes: [types.normal],
    },
    {
        num: '096',
        name: 'MAGIKING',
        img: 'img/pkmn-img/096.png',
        shinyImg: 'img/pkmn-img-shiny/096_s.png',
        femaleImg: 'img/pkmn-img-female/096_f.png',
        category: 'Ancestor',
        ability: 'Multiscale/Swift Swim',
        pokemonTypes: [types.water, types.fighting],
    },
];

const pkmnNum = document.querySelector(".pkmn-number");
const pkmnName = document.querySelector(".pkmn-name");
const pkmnImg = document.querySelector(".pkmn-img");
const pkmnForm = document.querySelector(".pkmn-form");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const pkmnType = document.querySelector(".pkmn-type-container");
const pkmnCategory = document.querySelector(".pkmn-category");
const pkmnAbility = document.querySelector(".pkmn-ability");
const shinyBtn = document.querySelector(".shiny");
const changeSexBtn = document.querySelector(".change-sex");
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");
const submitInput = document.querySelector(".submit-input");
const aside = document.getElementsByTagName("aside")[0];

let currentPkmn = 0;

window.addEventListener("DOMContentLoaded", function(){
    const pkmnObj = pokemons[currentPkmn];
    pkmnNum.textContent = pkmnObj.num;
    pkmnName.textContent = pkmnObj.name;
    pkmnForm.textContent = pkmnObj.form;
    pkmnImg.src = pkmnObj.img;
    pkmnCategory.textContent = pkmnObj.category;
    pkmnAbility.textContent = pkmnObj.ability;
    let imgChild = '';
    pkmnObj.pokemonTypes.forEach(function (typeUrl) {
        imgChild += `<img src=${typeUrl} class="pkmn-type">`
    });
    pkmnType.innerHTML += imgChild;
});

function showData(pkmn){
    const pkmnObj = pokemons[pkmn];
    pkmnNum.textContent = pkmnObj.num;
    pkmnName.textContent = pkmnObj.name;
    pkmnForm.textContent = pkmnObj.form;
    pkmnImg.src = pkmnObj.img;
    pkmnCategory.textContent = pkmnObj.category;
    pkmnAbility.textContent = pkmnObj.ability;
    // display Pokemon type
    let imgChild = '';
    pkmnObj.pokemonTypes.forEach(function (typeUrl) {
        imgChild += `<img src=${typeUrl} class="pkmn-type">`
    });
    pkmnType.innerHTML = imgChild;

};

prevBtn.addEventListener("click", function(){
    currentPkmn--;
    if (currentPkmn < 0){
        currentPkmn = pokemons.length - 1;
    }
    showData(currentPkmn);
});

nextBtn.addEventListener("click", function(){
    currentPkmn++;
    if (currentPkmn > pokemons.length - 1){
        currentPkmn = 0;
    }
    showData(currentPkmn);
});

let thisValue = true;
shinyBtn.addEventListener("click", function(){
    const pkmnObj = pokemons[currentPkmn];
    if (thisValue){
        pkmnImg.src = pkmnObj.shinyImg;
        thisValue = false;
        return
    }
    pkmnImg.src = pkmnObj.img;
    thisValue = true;
});

changeSexBtn.addEventListener("click", () => {
    const pkmnObj = pokemons[currentPkmn];
    if (thisValue){
        pkmnImg.src = pkmnObj.femaleImg;
        thisValue = false;
        return
    }
    pkmnImg.src = pkmnObj.img;
    thisValue = true;
});

searchBtn.addEventListener("click", () => {
    aside.classList.add("active")
});

submitInput.addEventListener("click", () => {
    aside.classList.remove("active");
    if (isNaN(searchInput.value)){
        alert("Not a number");
    }
    let pkmnId = searchInput.value - 1;
    currentPkmn = pkmnId;
    showData(pkmnId);
    searchInput.value = "";
})

