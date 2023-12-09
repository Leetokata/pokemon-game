import { shallowMount, mount } from '@vue/test-utils' 
import  pokemonPages  from "@/pages/PokemonPages";
import { pokemons } from '../mocks/pokemons.mock'

describe('Pokemon Page Component', ()=>{

    let wrapper

    beforeEach(()=>{
        
        wrapper = shallowMount( pokemonPages )
    })
    
    test('debe de llamar mixPokemonArray al montar', ()=>{

        const mixPokemonArraySpy = jest.spyOn( pokemonPages.methods, 'mixPokemonArray')
        wrapper = shallowMount( pokemonPages )
        
        expect( mixPokemonArraySpy ).toHaveBeenCalled()
        
    })
    
    test('debe hacer match con el snapshot cuando cargan los pokemons', ()=>{
        const wrapper = shallowMount( pokemonPages, {
            data() {
                return {
                    pokemonArr : pokemons,
                    pokemon:  pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: '',
                }
            }
        } )

        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('debe de mostrar los componentes PokemonsPicture y PokemonOptions', ()=>{
        const wrapper = shallowMount( pokemonPages, {
            data() {
                return {
                    pokemonArr : pokemons,
                    pokemon:  pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: '',
                }
            }
        } )

        const pokemonsPicture = wrapper.find('pokemon-picture-stub')
        const pokemonsOptions = wrapper.find('pokemon-options-stub')

        expect( pokemonsPicture.exists() ).toBe(true)
        expect( pokemonsOptions.exists() ).toBe(true)
        expect( pokemonsPicture.attributes('pokemonid')).toBe('501')
        expect( pokemonsOptions.attributes('pokemons')).toBeTruthy()
    })

    test('pruebas con checkAnswer', async()=>{
        const wrapper = shallowMount( pokemonPages, {
            data() {
                return {
                    pokemonArr : pokemons,
                    pokemon:  pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: '',
                }
            }
        } )

        await wrapper.vm.checkAnswer(501)

        expect( wrapper.find('h2').exists()).toBeTruthy()
        expect( wrapper.vm.showPokemon ).toBe(true)
        expect( wrapper.find('h2').text()).toBe(`Correcto!, ${pokemons[0].name}`)

        await wrapper.vm.checkAnswer(58)

       // console.log(wrapper.find('h2').text())

        expect( wrapper.vm.message ).toBe(`Oops!, era ${pokemons[0].name}`)
    })


})