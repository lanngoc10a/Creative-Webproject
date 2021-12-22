//Multidimensjon array for data

let profil = {
    navn: ["Øyvind Haakonsson", "Hans Wang", "Hjalmar Simonsen", "Maren Prebensen", "Ina Oliversen", "Maiken Nilsen"],
    alder: ["22", "24", "41", "29", "23", "27"],
    kjonn: ["Mann", "Mann", "Mann", "Kvinne", "Kvinne", "Kvinne"],
    beskrivelse: ["Liker lange turer i skog og mark", "Bonde, elsker å stå på ski.", "Vill og villig, men ikke for gal for deg;)", "har rekorden i shots på kroa i bø.", "Ser etter noen å slå meg til ro med!", "Venter på at drømmeprinsen skal komme og ta meg med på nye eventyr"],
    bilde: ["man1.jpg", "man2.jpg", "man3.jpg", "woman1.jpg", "woman2.jpg", "woman3.jpg"]

};
//telle gjennom alle kolonnene fra arrayet og printe i html
function alleProfiler() {

    for (i = 0; i < profil.navn.length; i++) {
        document.getElementById("kontaktInfo").innerHTML += `<p class="profilK"> Navn:${profil.navn[i]}<br> Alder:  ${profil.alder[i]}<br> Om meg: ${profil.beskrivelse[i]} <br> <img class="profilBilde" src=images/${profil.bilde[i]}><br>`; //sende dataen til HTML
    }
};