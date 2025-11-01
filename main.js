function RFL(givenList) 
{ // Returns a random value from a list
return givenList[Math.floor(Math.random() * givenList.length)];
}
function Gen()
{
    for(let i = 0; i < 6; i++)
{
    
    const instruments = 
    [
        "Woodwind - Winds",
        "Woodwind - Piccolo",
        "Woodwind - Flute",
        "Woodwind - Danso",
        "Woodwind - Irish Flute",
        "Woodwind - Traverso",
        "Woodwind - Dizi",
        "Woodwind - Shakuhachi",
        "Woodwind - Fife",
        "Woodwind - Tin Whistle",
        "Woodwind - Slide Whistle",
        "Woodwind - French Flageolet",
        "Woodwind - English Flageolet",
        "Woodwind - Garklein Recorder",
        "Woodwind - Recorder",
        "Woodwind - Ocarina",
        "Woodwind - Gemshorn",
        "Woodwind - Pan Flute",
        "Woodwind - Quena",
        "Woodwind - Oboe",
        "Woodwind - English Horn",
        "Woodwind - Heckelphone",
        "Woodwind - Lupophone",
        "Woodwind - Shawm",
        "Woodwind - Cromorne",
        "Woodwind - Crumhorn",
        "Woodwind - Comamuse",
        "Woodwind - Kelhorn",
        "Woodwind - Rauschpfeife",
        "Woodwind - Duduk",
        "Woodwind - Shenai",
        "Woodwind - Clarinet",
        "Woodwind - Chalumeau",
        "Woodwind - Pocket Sax",
        "Woodwind - Tarogato",
        "Woodwind - Octavin",
        "Woodwind - Saxophone",
        "Woodwind - Aulochrome",
        "Woodwind - Bassoon",
        "Woodwind - Contrabassoon",
        "Woodwind - Dulcian",
        "Woodwind - Rackett",
        "Woodwind - Sarrusophone",
        "Woodwind - Bagpipe",
        "Free Reed - Accordion",
        "Free Reed - Bandoneon",
        "Free Reed - Concertina",
        "Free Reed - Harmonica",
        "Free Reed - Melodica",
        "Free Reed - Sheng",
        "Brass - Brass Section",
        "Brass - ",
        "Pitched Percussion - ",
        "Vocals - ",
        "Keyboard - ",
        "Electronic - ",
        "Plucked String - ",
        "Bowed String - "
    ];
    const percInstruments = 
    [
        "Pitched Percussion - ",
        "Marching Percussion - ",
        "Unpitched Percussion - ",
        "Body Percussion - "
    ]
    document.getElementById(i.toString()).innerHTML = RFL(instruments);
    document.getElementById("p").innerHTML = RFL(percInstruments);
}
}
