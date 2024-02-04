const PokemonAbilities = props => {
    
    if(Object.hasOwn(props.current, 'abilities')) {
        return (
            <div className='card'>
                <h1>Current Pokemon's Abilities</h1>
                <h2></h2>
                <ul>
                   {props.current.abilities.map(a =>{
                    return <li className='ability' key={a.ability.name}>{a.ability.name}</li>
                   })}
                </ul>
            </div>
        )
    }else {
        return <h1 className='card'>No Abilities</h1>
    }
    
}

export default PokemonAbilities