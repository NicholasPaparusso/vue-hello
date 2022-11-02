/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Utilizzare almeno una classe CSS in modo dinamico
Bonus:
1. Aggiungere alla pagina un’immagine, presa anch’essa da un data.
2. Cambiare dinamicamente l’immagine
3. Al click di un bottone nascondere l’immagine e mostrare un testo
*/

const { createApp } = Vue;

createApp({
  data(){
    return{
      title: "",
      classArray: []
    }
  },

  methods:{
    toggleClass(className) {
      if(this.classArray.includes(className)) {

      this.classArray = this.classArray.filter(classItem => classItem !== className)
      } else {
        this.classArray.push(className)
      }
    },
    
    deleteText(){
     this.title =" ";
    }
  },
}).mount('#header')



createApp({
  data(){
    return{
      path:"./assets/img/",
      picture:"evanyou1.jpeg",
      isShowed: false,
    }
  },

  methods:{
    changePic(){
      this.picture === "evanyou1.jpeg" ? this.picture="evanyou2.jpeg": this.picture="evanyou1.jpeg"
    },

    showHide(){
      this.isShowed = !this.isShowed
    }

  },
}).mount('#app')

