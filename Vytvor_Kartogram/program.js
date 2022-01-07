let Liberecký = document.getElementById("Liberecký")
let Ústecký = document.getElementById("Ústecký")
let Praha = document.getElementById("Praha")
let Karlovarský = document.getElementById("Karlovarský")
let Plzeňský = document.getElementById("Plzeňský")
let Středočeský = document.getElementById("Středočeský")
let Jihočeský = document.getElementById("Jihočeský")
let Královéhradecký = document.getElementById("Královéhradecký")
let Pardubický = document.getElementById("Pardubický")
let Vysočina = document.getElementById("Vysočina")
let Olomoucký = document.getElementById("Olomoucký")
let Jihomoravský = document.getElementById("Jihomoravský")
let Moravskoslezský = document.getElementById("Moravskoslezský")
let Zlínský = document.getElementById("Zlínský")

let libe_input = document.getElementById("libe_input")
let uste_input = document.getElementById("uste_input")
let karlo_input = document.getElementById("karlo_input")
let plzen_input = document.getElementById("plzen_input")
let stredo_input = document.getElementById("stredo_input")
let praha_input = document.getElementById("praha_input")
let jiho_input = document.getElementById("jiho_input")
let kralo_input = document.getElementById("kralo_input")
let pardub_input = document.getElementById("pardub_input")
let vysoc_input = document.getElementById("vysoc_input")
let olom_input = document.getElementById("olom_input")
let jihomor_input = document.getElementById("jihomor_input")
let moravsko_input = document.getElementById("moravsko_input")
let zlin_input = document.getElementById("zlin_input")

let prvni_legenda = document.getElementById("hodnota_prvni_kategorie")
let druha_legenda = document.getElementById("hodnota_druha_kategorie")
let treti_legenda = document.getElementById("hodnota_treti_kategorie")
let ctvrta_legenda = document.getElementById("hodnota_ctvrta_kategorie")
let pata_legenda = document.getElementById("hodnota_pata_kategorie")



let vysledek = document.getElementById("vysledek")


function myFunction() {

    let součet = Number(libe_input.value) + 
                 Number(uste_input.value) +
                 Number(karlo_input.value) +
                 Number(plzen_input.value) +
                 Number(stredo_input.value) +
                 Number(praha_input.value) +
                 Number(jiho_input.value) +
                 Number(kralo_input.value) +
                 Number(pardub_input.value) +
                 Number(vysoc_input.value) +
                 Number(olom_input.value) +
                 Number(jihomor_input.value) +
                 Number(moravsko_input.value) +
                 Number(zlin_input.value);


    let prvni_kategorie = Math.ceil(Number((součet/100)*5))
    let druha_kategorie = Math.ceil(Number((součet/100)*10))       
    let treti_kategorie = Math.ceil(Number((součet/100)*20))
    let ctvrta_kategorie = Math.ceil(Number((součet/100)*30))

    prvni_legenda.innerHTML = "< " + prvni_kategorie
    druha_legenda.innerHTML = "< " + druha_kategorie
    treti_legenda.innerHTML = "< " + treti_kategorie
    ctvrta_legenda.innerHTML = "< " + ctvrta_kategorie
    pata_legenda.innerHTML = "> " + ctvrta_kategorie

    // Liberecký
    if(Number(libe_input.value) < prvni_kategorie){
        Liberecký.style.fill="#FFFDDE";
    }else if(Number(libe_input.value) < druha_kategorie){
        Liberecký.style.fill="#E7EAB5";
    }else if(Number(libe_input.value) < treti_kategorie){
        Liberecký.style.fill="#C9E4C5";
    }else if(Number(libe_input.value) < ctvrta_kategorie){
        Liberecký.style.fill="#87A8A4";
    }else {
        Liberecký.style.fill="#3A6351";
    }

    // Ústecký
    if(Number(uste_input.value) < prvni_kategorie){
        Ústecký.style.fill="#FFFDDE";
    }else if(Number(uste_input.value) < druha_kategorie){
        Ústecký.style.fill="#E7EAB5";
    }else if(Number(uste_input.value) < treti_kategorie){
        Ústecký.style.fill="#C9E4C5";
    }else if(Number(uste_input.value) < ctvrta_kategorie){
        Ústecký.style.fill="#87A8A4";
    }else {
        Ústecký.style.fill="#3A6351";
    }

     // Praha
     if(Number(praha_input.value) < prvni_kategorie){
        Praha.style.fill="#FFFDDE";
    }else if(Number(praha_input.value) < druha_kategorie){
        Praha.style.fill="#E7EAB5";
    }else if(Number(praha_input.value) < treti_kategorie){
        Praha.style.fill="#C9E4C5";
    }else if(Number(praha_input.value) < ctvrta_kategorie){
        Praha.style.fill="#87A8A4";
    }else {
        Praha.style.fill="#3A6351";
    }

     // Karlovarský
     if(Number(karlo_input.value) < prvni_kategorie){
        Karlovarský.style.fill="#FFFDDE";
    }else if(Number(karlo_input.value) < druha_kategorie){
        Karlovarský.style.fill="#E7EAB5";
    }else if(Number(karlo_input.value) < treti_kategorie){
        Karlovarský.style.fill="#C9E4C5";
    }else if(Number(karlo_input.value) < ctvrta_kategorie){
        Karlovarský.style.fill="#87A8A4";
    }else {
        Karlovarský.style.fill="#3A6351";
    }


     // Plzeňský
     if(Number(plzen_input.value) < prvni_kategorie){
        Plzeňský.style.fill="#FFFDDE";
    }else if(Number(plzen_input.value) < druha_kategorie){
        Plzeňský.style.fill="#E7EAB5";
    }else if(Number(plzen_input.value) < treti_kategorie){
        Plzeňský.style.fill="#C9E4C5";
    }else if(Number(plzen_input.value) < ctvrta_kategorie){
        Plzeňský.style.fill="#87A8A4";
    }else {
        Plzeňský.style.fill="#3A6351";
    }

    // Středočeský
    if(Number(stredo_input.value) < prvni_kategorie){
        Středočeský.style.fill="#FFFDDE";
    }else if(Number(stredo_input.value) < druha_kategorie){
        Středočeský.style.fill="#E7EAB5";
    }else if(Number(stredo_input.value) < treti_kategorie){
        Středočeský.style.fill="#C9E4C5";
    }else if(Number(stredo_input.value) < ctvrta_kategorie){
        Středočeský.style.fill="#87A8A4";
    }else {
        Středočeský.style.fill="#3A6351";
    }

    // Jihočeský
    if(Number(jiho_input.value) < prvni_kategorie){
        Jihočeský.style.fill="#FFFDDE";
    }else if(Number(jiho_input.value) < druha_kategorie){
        Jihočeský.style.fill="#E7EAB5";
    }else if(Number(jiho_input.value) < treti_kategorie){
        Jihočeský.style.fill="#C9E4C5";
    }else if(Number(jiho_input.value) < ctvrta_kategorie){
        Jihočeský.style.fill="#87A8A4";
    }else {
        Jihočeský.style.fill="#3A6351";
    }

    // Královéhradecký
    if(Number(kralo_input.value) < prvni_kategorie){
        Královéhradecký.style.fill="#FFFDDE";
    }else if(Number(kralo_input.value) < druha_kategorie){
        Královéhradecký.style.fill="#E7EAB5";
    }else if(Number(kralo_input.value) < treti_kategorie){
        Královéhradecký.style.fill="#C9E4C5";
    }else if(Number(kralo_input.value) < ctvrta_kategorie){
        Královéhradecký.style.fill="#87A8A4";
    }else {
        Královéhradecký.style.fill="#3A6351";
    }

    // Pardubický
    if(Number(pardub_input.value) < prvni_kategorie){
        Pardubický.style.fill="#FFFDDE";
    }else if(Number(pardub_input.value) < druha_kategorie){
        Pardubický.style.fill="#E7EAB5";
    }else if(Number(pardub_input.value) < treti_kategorie){
        Pardubický.style.fill="#C9E4C5";
    }else if(Number(pardub_input.value) < ctvrta_kategorie){
        Pardubický.style.fill="#87A8A4";
    }else {
        Pardubický.style.fill="#3A6351";
    }

    // Vysočina
    if(Number(vysoc_input.value) < prvni_kategorie){
        Vysočina.style.fill="#FFFDDE";
    }else if(Number(vysoc_input.value) < druha_kategorie){
        Vysočina.style.fill="#E7EAB5";
    }else if(Number(vysoc_input.value) < treti_kategorie){
        Vysočina.style.fill="#C9E4C5";
    }else if(Number(vysoc_input.value) < ctvrta_kategorie){
        Vysočina.style.fill="#87A8A4";
    }else {
        Vysočina.style.fill="#3A6351";
    }

    // Olomoucký
    if(Number(olom_input.value) < prvni_kategorie){
        Olomoucký.style.fill="#FFFDDE";
    }else if(Number(olom_input.value) < druha_kategorie){
        Olomoucký.style.fill="#E7EAB5";
    }else if(Number(olom_input.value) < treti_kategorie){
        Olomoucký.style.fill="#C9E4C5";
    }else if(Number(olom_input.value) < ctvrta_kategorie){
        Olomoucký.style.fill="#87A8A4";
    }else {
        Olomoucký.style.fill="#3A6351";
    }

    // Jihomoravský
    if(Number(jihomor_input.value) < prvni_kategorie){
        Jihomoravský.style.fill="#FFFDDE";
    }else if(Number(jihomor_input.value) < druha_kategorie){
        Jihomoravský.style.fill="#E7EAB5";
    }else if(Number(jihomor_input.value) < treti_kategorie){
        Jihomoravský.style.fill="#C9E4C5";
    }else if(Number(jihomor_input.value) < ctvrta_kategorie){
        Jihomoravský.style.fill="#87A8A4";
    }else {
        Jihomoravský.style.fill="#3A6351";
    }

    // Moravskoslezský
    if(Number(moravsko_input.value) < prvni_kategorie){
        Moravskoslezský.style.fill="#FFFDDE";
    }else if(Number(moravsko_input.value) < druha_kategorie){
        Moravskoslezský.style.fill="#E7EAB5";
    }else if(Number(moravsko_input.value) < treti_kategorie){
        Moravskoslezský.style.fill="#C9E4C5";
    }else if(Number(moravsko_input.value) < ctvrta_kategorie){
        Moravskoslezský.style.fill="#87A8A4";
    }else {
        Moravskoslezský.style.fill="#3A6351";
    }

    // Zlínský
    if(Number(zlin_input.value) < prvni_kategorie){
        Zlínský.style.fill="#FFFDDE";
    }else if(Number(zlin_input.value) < druha_kategorie){
        Zlínský.style.fill="#E7EAB5";
    }else if(Number(zlin_input.value) < treti_kategorie){
        Zlínský.style.fill="#C9E4C5";
    }else if(Number(zlin_input.value) < ctvrta_kategorie){
        Zlínský.style.fill="#87A8A4";
    }else {
        Zlínský.style.fill="#3A6351";
    }
};

function uloz(){
    let mapa = documet.getElementById("mapa");
    domtoimage.toPng(mapa).then(function(dataUrl){
        let img=new Image();
        img.src=dataUrl;
        document.body.appendChild(img);
    })
}


   