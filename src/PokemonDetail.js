import styles from './PokemonDetail.module.css';

export function PokemonDetail({ pokemon, onCapture }) {
  return (
    <div className={styles.detailContainer}>
      <h2>{pokemon.name.toUpperCase()}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className={styles.detailImage} />
      <p className={styles.detailText}>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
      <p className={styles.detailText}>Abilities: {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
      {/* Add more details as needed */}
      <button onClick={() => onCapture(pokemon)} className={styles.captureBtn}>Capture</button>
    </div>
  );
}
