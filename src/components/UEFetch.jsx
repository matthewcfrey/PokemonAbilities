import PokemonList from './UEFetchComponents/PokemonList.jsx'
import PokemonAbilities from './UEFetchComponents/PokemonAbilities.jsx'

const UEFetch = props => {

    return (
        <div className='pages'>
            <PokemonList pokemon={props.pokemon} setCurrentFavorite={props.setCurrentFavorite}/>
            <PokemonAbilities current={props.currentFavorite}/>
        </div>
    )
}

export default UEFetch