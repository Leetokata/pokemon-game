<template >
    
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <div v-else>
      
      <h1>¿Quien es este Pokemon?</h1>
    
    <!-- Imagen -->
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
    <!-- Opciones -->
    <PokemonOptions :pokemons="pokemonArr"
      @selection="checkAnswer($event)"/>

    <template v-if="showAnswer" class="fade-in">
      <h2>{{ message }}</h2>  
      <button @click="newGame">Nuevo Juego</button>
    </template>
  
    </div>

</template>

<script>

import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'

   
export default {
  components: { PokemonPicture, PokemonOptions},
  data () {
    return {
      pokemonArr : [],
      pokemon:  null,
      showPokemon: false,
      showAnswer: false,
      message: '',
    }
  },
  methods: {
    newGame(){
      this.pokemon=  null
      this.showAnswer = false
      this.showPokemon= false
      this.message= ''
      this.mixPokemonArray()

    },
    async mixPokemonArray() {
       this.pokemonArr = await getPokemonOptions()
       const rndInt = Math.floor( Math.random() * 4)
       this.pokemon = this.pokemonArr[ rndInt ]
       console.log(this.pokemon.id)
    },
    checkAnswer(selectionId){
      this.showPokemon = true
      this.showAnswer = true

      if(selectionId === this.pokemon.id){
        this.message = `Correcto!, ${this.pokemon.name}`
      }else{
        this.message = `Oops!, era ${this.pokemon.name}`
      }

    }
  },
  mounted () {
    this.mixPokemonArray()

  }
}
</script>

