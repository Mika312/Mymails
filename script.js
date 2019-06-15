
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

// Ecoute du siganle du bouton ADD
document.getElementById('btn-blue').addEventListener('click',function(){
    console.log("<== CLICK ADD ==>");

    // Recuperation de la valeur du champ de saisie.
    var addMessage = document.getElementById('input').value;

    console.log("<== ADD MESSAGE ==>",addMessage);

    //Création div class='row' + Mise en place dans son element parent.
    var divRow = document.createElement("div");
    divRow.className = 'row';
    document.body.appendChild(divRow);

    //Création img class='avatar' + Mise en place dans son element parent.
    var avatar = document.createElement('img');
    avatar.className = 'avatar';
    avatar.src = "avatar-1.jpg";
    divRow.appendChild(avatar);

    //Création div + Mise en place dans son element parent.
    var divName = document.createElement("div");
    divRow.appendChild(divName)

    //Création h6 firstName + Mise en place dans son element parent.
    var firstName = document.createElement("h6")
    firstName.textContent="Elise";
    divName.appendChild(firstName);

    //Création h6 lastName + Mise en place dans son element parent.
    var lastName = document.createElement("h6")
    lastName.textContent="Watson";
    divName.appendChild(lastName);

    //Création paragraphe qui récupere le champ de saisie + Mise en place dans son element parent.
    var message = document.createElement('p');
    message.textContent = addMessage;
    divRow.appendChild(message);

    //Création img class='trash' + Mise en place dans son element parent.
    var trash = document.createElement('img');
    trash.className = 'trash';
    trash.src = "trash.png";
    divRow.appendChild(trash);

    //Remise à zéro du champ de saisie.
    document.getElementById("input").value = "";

    //MàJ du compteur après création.
    document.getElementById('count').textContent=document.getElementsByClassName('row').length

    //Mise en place de la fonction de suppression pour l'element crée + MàJ compteur après suppression.
    trash.addEventListener("click",function() {
      
        this.parentNode.remove()
   
        document.getElementById('count').textContent = document.getElementsByClassName('row').length
   
         });

})