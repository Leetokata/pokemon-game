
import getPokemonsOptions,  { getPokemons, getPokemonsName } from '@/helpers/getPokemonOptions'


describe('getPokemonsOptions Helpers ', () => {

    test('getPokemons debe de regresar un arreglo de numeros', ()=> {

        const pokemons = getPokemons()
        
        expect( pokemons.length ).toBe(650)
        expect( pokemons[0]).toBe(1)
        expect( pokemons[500]).toBe(501)
        expect( pokemons[649]).toBe(650)
    })

    test('getPokemonName debe de regresar un array de 4 elementos con nombre de pokemon', async() => {

        const pokemons = await getPokemonsName([1,2,3,4])

        // expect( pokemons[0].name ).toBe('bulbasaur')
        // expect( pokemons[1].name ).toBe('ivysaur')
        // expect( pokemons[2].name ).toBe('venusaur')
        // expect( pokemons[3].name ).toBe('charmander')
        

        expect( pokemons ).toStrictEqual(
            [
                { name: 'bulbasaur', id: 1 },
                { name: 'ivysaur', id: 2 },
                { name: 'venusaur', id: 3 },
                { name: 'charmander', id: 4 }
            ]
        )

        

    })

    test('getPokemonsOptions debe de retornar un arreglo mezclado', async ()=>{

        const pokemons =  await getPokemonsOptions()

        expect( pokemons.length ).toBe(4)
        expect( pokemons ).toStrictEqual(
            [
                { 
                    name: expect.any(String), 
                    id: expect.any(Number) 
                },
                { 
                    name: expect.any(String), 
                    id: expect.any(Number) 
                },
                { 
                    name: expect.any(String), 
                    id: expect.any(Number) 
                },
                { 
                    name: expect.any(String), 
                    id: expect.any(Number) 
                }
            ]
        )
       


    })
})