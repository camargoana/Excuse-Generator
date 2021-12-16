
window.onload = function() {
    console.log("Excuse");
    let box = [
        "¡Vaya! Me coincide con mi cita con el dentista.",
        "Quedé con Pepe la semana pasada. ¡Oh… Si es el mismo día!",
        "Estoy esperando un envío. Necesito quedarme en casa.",
        "Ese día es la boda del amigo de un amigo, que también es muy amigo mío. Tengo que ir",
        "La clase del viernes coincide con el estreno de Spiderman no way home",
        "El sabado, hay mucha gente en la lavanderia",
        "Estoy muy cansada el fin de semana como para ir al gimnasio",
        "Me han llamado del trabajo a última hora.",
        "Me enterado de que tengo que entregar este trabajo mañana. ¡Voy justo de tiempo!",
        "Hay un evento al que me conviene acudir para hacer contactos.",


    ];
    let max = box.length-1;
    let random = Math.random()*max;
    let index = Math.round(random);
    let excuse = box[index];
    
    document.querySelector("#generador").innerHTML = excuse;
}