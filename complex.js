function getRandom(box){
    let max = box.length-1;
    let min = 0;
    
    // AJUSTANDO EL PESO DE LOS EXTREMOS
    max = max + 0.49;
    min = min - 0.49;
    
    let random = Math.random()*(max-min) + min;
    let index = Math.round(random);
    let val = box[index];
    return val;
}

window.onload = function() {
    console.log("Excuse");

    let who = ['el perro','mi abuela','su tortuga','mi loro',"tete", "pelusa", "la gata", "mi amigo invicible", "la mamba negra", "su padre espacial","el dinosaurio"];
    let what = ['se la comi&oacute;','se molest&oacute;','la aplast&oacute;','la rompi&oacute;', 'lo escondi&oacute;','gritaba','se babeaba', 'explot&oacute;', 'apareci&oacute;', 'desapareci&oacute;'];
    let when = ['antes de clase','justo a tiempo','cuando termin&eacute;','durante mi almuerzo','mientras rezabamos', 'durante el descanso', 'y corrimos descontroladamente'];

    let val1 = getRandom(who);
    let val2 = getRandom(what);
    let val3 = getRandom(when);
    let excuse = val1+" "+val2+" "+val3;

    let generator = document.querySelector("#generator");
    generator.innerHTML = excuse;
}