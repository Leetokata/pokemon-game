import { shallowMount } from '@vue/test-utils'
import pokemonOptions from '@/components/pokemonOptions'
import {pokemons} from '../mocks/pokemons.mock'

describe('PokemonOptions Component', ()=> {

    let wrapper

    beforeEach(()=> {

       wrapper = shallowMount( pokemonOptions , {
        props: {
            pokemons
        }
       })

    })

    test('debe de hacer match con el snapshot', ()=>{


        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de mostrar las 4 opciones correctamente', () => {
        const  [li1, li2, li3, li4 ] = wrapper.findAll('li')
        expect(li1.html()).toBe('<li>bulbasaur</li>')
        expect(li2.html()).toBe('<li>ivysaur</li>')
        expect(li3.html()).toBe('<li>venusaur</li>')
        expect(li4.html()).toBe('<li>charmander</li>')
    })

    test('debe emitir "Seleccion" con sus respectivos parametros al hacer click', ()=>{

        const  [li1, li2, li3, li4 ] = wrapper.findAll('li')

        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')


        expect( wrapper.emitted('selection').length ).toBe( 4 )
        expect( wrapper.emitted('selection')[0] ).toEqual([501] )
        expect( wrapper.emitted('selection')[1] ).toEqual([130] )
        expect( wrapper.emitted('selection')[2] ).toEqual([411] )
        expect( wrapper.emitted('selection')[3] ).toEqual([58] )





    })
})

