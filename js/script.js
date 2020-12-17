// Esercizio: (traccia presente anche nelle slide 35 su Drive)
// Attraverso una chiamata ajax all’API di boolean
// https://flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali.
// Utilizzando vue, stampiamo a schermo una card per ogni album.
// BONUS 2: Ordinare i dischi per anno di uscita.

var app = new Vue (
  {
    el: "#app",
    data: {
      discs: [],
      genres:[],
      genreSelection: false,

    },

    methods: {
      // BONUS: Creare una select con tutti i generi dei dischi. In base a
      // cosa scegliamo nella select, vedremo i corrispondenti cd.
      genreSelected: function() {
         this.discs.forEach(
          (item) => {
            item.toggle = true;
            if (this.genreSelection == false) {
              item.toggle = true;
            } else if (item.genre != this.genreSelection ) {
              item.toggle = false;
            }
          }
        );

      }
    },

    mounted: function() {
        axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then( (result) => {
          this.discs = result.data.response;

          // aggiungo un dato booleano alla scheda dei dischi per gestire loa select

          this.discs.forEach(
            (item) => {
              item.toggle = true;
              console.log(this.discs);
            }
          );
          // con un ciclo forEach entro nell'array discs,
          // con includes verifico se disc.genre non è presente nell'array genre, se non è incluso eseguo il push
          this.discs.forEach(
            (item) => {
              if (this.genres.includes(item.genre) == false) {
                this.genres.push(item.genre);
                console.log(this.genres);
              }
            }
          );
          }
        );
      }

  },

);
