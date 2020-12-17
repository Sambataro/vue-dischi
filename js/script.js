// Esercizio: (traccia presente anche nelle slide 35 su Drive)
// Attraverso una chiamata ajax all’API di boolean
// https://flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali.
// Utilizzando vue, stampiamo a schermo una card per ogni album.
// BONUS: Creare una select con tutti i generi dei dischi. In base a
// cosa scegliamo nella select, vedremo i corrispondenti cd.
// BONUS 2: Ordinare i dischi per anno di uscita.

var app = new Vue (
  {
    el: "#app",
    data: {
      discs: [],
      genre:[],
      genreSelection: "",

    },

    methods: {

      // creare funzioni per cambiare genere
      // al click sulla select devo filtrare le schede disc per il genere selezionato, partendo di defult con tutto visibile

    },

    mounted: function() {
        axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then( (result) => {
          this.discs = result.data.response;

          // con un ciclo forEach entro nell'array discs,
          // con includes verifico se disc.genre non è presente nell'array genre, se non è incluso eseguo il push
          this.discs.forEach(
            (item) => {
              if (!this.genre.includes(item.genre)) {
                this.genre.push(item.genre);
                console.log(this.genre);
              }
            }
          );

          }
        );
      }

  },

);
