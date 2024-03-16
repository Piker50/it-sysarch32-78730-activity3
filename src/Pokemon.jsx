function Pokemon({id,pokemonName,type,image,pokeStats}) {

    return <div className="container-pokemon">
        <li>
        <img src={image} alt={pokemonName} />

        <h3>
            [{id}] {pokemonName}
        </h3>
        
        <ul className="container-pokemon-type">
            {type.map((el,i)=><li key={i}>{el}</li>)}
        </ul>
        <div className="container-pokemon-stats">
            <ul className="container-column1">
                <li>HP: {pokeStats['HP']}</li>
                <li>Attk: {pokeStats['Attack']}</li>
                <li>Def: {pokeStats['Defense']}</li>
            </ul>
            <ul className="container-column2">
                <li>Speed: {pokeStats['Speed']}</li>
                <li>Sp. Attk: {pokeStats['Sp. Attack']}</li>
                <li>Sp. Def: {pokeStats['Sp. Def']}</li>
            </ul>
        </div>
    </li>
    </div>
}

export default Pokemon