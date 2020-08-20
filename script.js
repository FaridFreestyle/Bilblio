function Livre (code,titre,auteur){
  this.code = code;
  this.titre = titre;
  this.auteur = auteur;
  this.getCode=function(){
    return this.code;
	}
	this.getTitre=function(){
	   return  this.titre ;
	}
	this.getAuteur=function(){
	  return this.auteur ;
	}
  this.changeCodeLivre = function (code){
    this.code = code;
  }
  this.toString = function(){
    return " code : "+ this.code + "\n"+
           " auteur : "+this.auteur+ "\n"+
           " titre : "+ this.titre;
  }

}/*fin de la class*/

/*creation du tableau de livres*/
  var livres = new Array ();
/* fonction pour enregister un livre*/  
function enregistrer(){
  /*declaration de variable et affectation de varriable*/
  var code=document.getElementsByName("code")[0].value;
  var titre= document.getElementsByName("titre")[0].value;
  var auteur= document.getElementsByName("auteur")[0].value;
  var existe = false; 
  /*condition pour verrifier s'il y'a des valeurs dans les variables*/
  if(code!="" && titre!="" && auteur!="" ){  
    /* parcours du tableau de livres*/ 
    for (i =0; i < livres.length; i++) {  
      /*condition de verrification entre le code entré par l'utilisateur et les autres code de livre qui 
      se trouvent dans le tableau de livres pour savoir si le livre est déja enregistré*/ 
      if (livres[i].getCode()==code) {
        existe = true;
      }
    }
    /* condition pour si le livre qu'on veut enregistrer n'existe pas deja*/
    if (existe==false) {
          var livre= new Livre (code,titre,auteur);
          livres.push(livre);
          alert("Livre ajouté");
      }
      /*condition s'il existe deja*/
      else{
        alert("Impossible d'enregistrer le livre "+ titre + " car Le code "+ code +" existe deja.");
      }
      /*effacer le champs de saisie*/
      document.form3.code.value="";
      document.form3.titre.value="";
      document.form3.auteur.value="";
    }
  /*condition s'il n'y a pas de valeurs dans les variables*/
  else{
    alert("Vous devez saisir tous les champs pour enregistrer un livre.");
  }                

}/*fin de la fonction enregistrer*/

 /*declaration de variable qui memorise le code recherché par l'utilisateur, car cette variable est utlisé dans la fonction changerCode()*/
var tmpCodeRechercher ;
/* fonction pour rechercher un livre*/  
function chercher(){ 
  /*declaration de variable et affectation de varriable*/
  var x = false;
  var codeSaisi =document.getElementsByName("codeLivre")[0].value;
  tmpCodeRechercher = document.getElementsByName("codeLivre")[0].value;
  /*condition pour verrifier s'il y'a une valeur dans la variable*/
  if(codeSaisi!=""){
    /* parcours du tableau de livres*/ 
    for (i =0; i < livres.length; i++) {
      /*condition de verrification entre le code entré par l'utilisateur et les autres code de livre qui se trouvent dans le tableau de livres 
      pour afficher la fenetre caché et les valeurs néccessaires la ou il faut (s'il trouve le code)*/ 
      if (livres[i].getCode() == codeSaisi ){
        document.getElementById("cache").style.visibility="visible";
        document.form1.titreResultat.value=livres[i].getTitre();
        document.form1.resultatAuteur.value=livres[i].getAuteur();
        x = true;
      }
    }
    /*condition pour s'il ne pas trouve de livre */
    if(x == false){
      alert("le livre au numero "+codeSaisi+" est introuvable");
    }
  }
  /*condition s'il n'y a pas de valeurs dans la variable*/
  else   
    alert("Vous devez saisir un code valide");
}/*fin de la fonction chercher*/

/* fonction pour changer le code d'un livre*/  
function changerCode(){  
  /*declaration de variable et affectation de varriable*/
  var NouveauCode =   document.getElementsByName("NouveauCode")[0].value;
  /*condition pour verrifier s'il y'a une valeur dans la variable*/ 
  if(NouveauCode !="" ){  
    /*declaration de variable et affectation de varriable*/
    var tmp;
    var existe = false; 
    var titre = document.getElementsByName("titreResultat")[0].value;
    var auteur = document.getElementsByName("resultatAuteur")[0].value;
    /* parcours du tableau de livres*/ 
    for (i =0; i < livres.length; i++) {
      /*condition de verrification entre le code saisie par l'utilisateur (NouveauCode) et les autres code de livre 
      qui se trouvent dans le tableau de livres pour savoir si le code du livre existe deja */   
      if (livres[i].getCode()==NouveauCode) {
      existe = true;
      }
    }
    /* parcours du tableau de livres*/ 
    for (i =0; i < livres.length; i++) {
      /*condition de verrification pour changer le code du livre*/
      if (livres[i].getTitre() == titre &&  livres[i].getAuteur()==auteur&& livres[i].getCode()===tmpCodeRechercher&& existe ==false) {
        livres[i].changeCodeLivre(NouveauCode);
        tmp = livres[i]; }
    }
    /*condition pour si le code entré n'existe pas deja (aucun livre n'a ete enregistre avec ce code) */
    if (existe==false) {
      alert("voici les nouvelles informations du livre : "+ tmp.getTitre()+"\n"+ tmp.toString());
    }
    /*condition pour si le code entré existe deja (un livre a deja ete enregistré avec ce code) */
    else{
      alert("Vous ne pouvez pas remplacer le code du livre " + titre +" par le code "+NouveauCode+ " car il existe deja.");
    }
    /*effacer le champs de saisie*/
    document.form1.NouveauCode.value="";
  }
  /*condition  pour s'il n'y a pas de valeurs dans la variable*/
  else   
    alert("Vous devez absolulement entrer un nouveau code pour valider.");
   
}/*fin de la fonction changerCode*/

/* fonction pour renitialiser*/  
function renitialiser(){
  /*cacher la fenetre qui s'affiche lorsqu'on recherche un livre avec le bon code*/  
  document.getElementById("cache").style.visibility="hidden";
  /*effacer le champs de saisie*/
  document.form1.NouveauCode.value="";
  document.form2.codeLivre.value="";
}/*fin de la fonction renitialiser*/