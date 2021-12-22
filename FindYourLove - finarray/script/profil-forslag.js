//Multidimensjon array for data
let profil = {
    navn: ["Øyvind Haakonsson", "Hans Wang", "Hjalmar Simonsen", "Maren Prebensen", "Ina Oliversen", "Maiken Nilsen"],
    alder: ["22", "24", "41", "29", "23", "27"],
    kjonn: ["Mann", "Mann", "Mann", "Kvinne", "Kvinne", "Kvinne"],
    beskrivelse: ["Liker lange turer i skog og mark", "Bonde, elsker å stå på ski.", "Vill og villig, men ikke for gal for deg;)", "har rekorden i shots på kroa i bø.", "Ser etter noen å slå meg til ro med!", "Venter på at drømmeprinsen skal komme og ta meg med på nye eventyr"],
    bilde: ["man1.jpg", "man2.jpg", "man3.jpg", "woman1.jpg", "woman2.jpg", "woman3.jpg"]
};
//Funksjon for å finne forskjellen på input og alderen som er lagret. 
function diff(a, b) {
    return Math.abs(a - b);
}


/*
---------
funksjon for å sjekke om det er noen som passer argumentene som er gitt.
hente ut aler og kjønn fra html input
for loop for å sjekke alder og kjønn oppmot alle profilene
Sjekke alder og kjønn oppmot lagret
sjekke alder og kjønn hvor alderforskjellen er maks +-5 år
hvis ingen passer i noen av de nevnte parameterene.
---------
*/
function randomPerson() {
    let age = document.getElementById("alder").value;
    let sex = document.querySelector('input[name="kjonn"]:checked').value;

    for (i = 0; i < profil.navn.length; i++) {
        let bildeVar =
            `${profil.bilde[i]}><br>${profil.beskrivelse[i]}<br> Alder:${profil.alder[i]} <br> beskrivelse:${profil.beskrivelse[i]}</div>`;

        let newAge = diff(profil.alder[i], age);
        console.log(newAge);
        if (age === profil.alder[i] && profil.kjonn[i] === sex) {
            document.getElementById("match").innerHTML = `<div class="match"><p class=FantIngen>Vi fant en perfekt match!!</p><img class="profilBilde" src=images/` + bildeVar;
            return;
        } else if (newAge < 5 && newAge > 0 && profil.kjonn[i] === sex) {
            document.getElementById("match").innerHTML = `<div class="match"><p class=FantIngen> Fant desverre ingen Perfekt match, men her er en som er alderen din +-5år!</p><img class="profilBilde" src=images/` + bildeVar;
            return;
        } else {
            document.getElementById("match").innerHTML = `<p class=FantIngen>Fant desverre ingen innenfor 5 år fra ønsket alder din.</p>`;

        }
    }
}