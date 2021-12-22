/* 
----------
objekt med arrays for de forskjellige personene, Kan være gjort omvendt, men dette så mer ryddig ut. 
----------
*/

let profil = {
    navn: ["Øyvind Haakonsson", "Hans Wang", "Hjalmar Simonsen", "Maren Prebensen", "Ina Oliversen", "Maiken Nilsen"],
    alder: ["22", "24", "41", "29", "23", "27"],
    kjonn: ["Mann", "Mann", "Mann", "Kvinne", "Kvinne", "Kvinne"],
    beskrivelse: ["Liker lange turer i skog og mark", "Bonde, elsker å stå på ski.", "Vill og villig, men ikke for gal for deg;)", "har rekorden i shots på kroa i bø.", "Ser etter noen å slå meg til ro med!", "Venter på at drømmeprinsen skal komme og ta meg med på nye eventyr"],
    bilde: ["man1.jpg", "man2.jpg", "man3.jpg", "woman1.jpg", "woman2.jpg", "woman3.jpg"]
};
/*
-----------
funksjon som bestemmer om det skal vises alle profiler eller en lagret.
sjekker om noe er lagret i Localstorage
hvis noe er lagret ber den om å få kjøre funksjonen for å tegne Favoritten i html
hvis ingenting er lagret ber den om funksjonen for alle profilene 
-----------
*/
function visBilder2() {
    if (localStorage.getItem("saved") != null) {
        tegneFavoritt();
        return;
    } else {
        visBilder();
    }

}
/*
-----------
Lagre en favoritt i localstorage
dytter inn valgt profil "0-5" inn i en variabel 
lagrer innfavoritt i localstorage med nøkkelen "saved" 
be om at funksjonen for å vise favoritten på siden skal bli kjørt  
-----------
*/
function nyFavoritt() {
    let innFavoritt = document.querySelector('input[name="innFavoritt"]:checked').value;
    localStorage.setItem("saved", innFavoritt);
    tegneFavoritt();
}
/*
----------
funksjon for å vise favoritt profil på siden
henter ut lagret profil"kode" (0-5) i nøkkelen "saved" i localstorage og setter den til variabelen x
sette inn favorittprofilen i en ny div
----------
*/
function tegneFavoritt() {
    let x = localStorage.getItem("saved");
    document.getElementById("kontaktInfo").innerHTML = `<p></p>` //Fjerne oversikten av profiler fra siden

    document.getElementById("match").innerHTML = `<div class="match">minFavoritt er:<br><img class="profilBilde" src=images/${profil.bilde[x]}><br>${profil.navn[x]}<br> Alder:${profil.alder[x]}<br> beskrivelse:${profil.beskrivelse[x]}</div>`;
};
/*
---------
funksjon for å vise alle profilene på siden
telle gjennom alle profilene
sende dataen til HTML
---------
*/
function visBilder() {
    for (i = 0; i < profil.navn.length; i++) {
        document.getElementById("kontaktInfo").innerHTML += `<p class="profilK"> Navn:${profil.navn[x]}<br> alder: ${profil.alder[x]} <br> <img class="profilBilde" src=images/${profil.bilde[x]}>`;
    }
};