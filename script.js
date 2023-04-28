// localStorage. setltem( " clé" , "valeur" )
// localStorage. getltem( " clé" )
// localStorage. clear();



const local = JSON.parse(localStorage.getItem("user"));

if(local != null)
{
    formulaire.style.display = "none";
    h1.textContent = `Bonjour ${local.nom}, tu as bien ${local.age} ans!`
}

else
{
    bouton.onclick = () => {
        const user = {
            nom: nom.value,
            age: age.value
        };
        localStorage.setItem("user",JSON.stringify(user))
        document.location.reload();
    };

}

clear.onclick = () =>{
    localStorage.clear();
    document.location.reload();
}




