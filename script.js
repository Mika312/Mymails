
// Récupération avec DOM du nombre total des balises html qui font référence aux messages
// MàJ partie HTML compteur avec le nombre total de messages.

document.getElementById('count').textContent=document.getElementsByClassName('row').length


// Ecoute du signal pour chaque picto poubelle.
for (var i = 0; i < document.getElementsByClassName('trash').length; i++) {
    
    document.getElementsByClassName('trash')[i].addEventListener("click",function() {

     //Verification ecoute du signal.
     console.log("<== CLICK ==>");

     // Ciblez l’élément HTML parent qui représente l’ensemble des informations du message.
     // Supprimez cet élément. 
     this.parentNode.remove()

     // MàJ du compteur.
     document.getElementById('count').textContent=document.getElementsByClassName('row').length

      });

}