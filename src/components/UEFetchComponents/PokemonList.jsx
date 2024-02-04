const PokemonList = props => {

    if(props.pokemon.length > 0) {
        return (
            <div className='card'>
                <h1>Pokemon List</h1>
                <ul>
                    {props.pokemon.map(p => {
                       return <li key={p.name} onClick={() => {props.setCurrentFavorite(p)}}>{p.name}</li>
                    })}
                </ul>
            </div>
        )
    }else {
        return <h1 className='card'>No Pokemon</h1>
    }
    
}

export default PokemonList