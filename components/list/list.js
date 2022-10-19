import styles from './list.module.css';

import ListItem from '../listItem/listItem';

export default function List( props ) {

    const { people, character, handleCharacter } = props;

    return (
        <div className={styles.infoContainer}>
            <div className={styles.list}>
                {
                    people.map((item, index) => {
                        return <ListItem key={index} character={item} handleCharacter={handleCharacter} />
                    })
                }
            </div>
            <div className={styles.display}>
                <h3>{character.name}</h3>
                <div className={styles.block}>
                    <span>Height:</span>
                    <span>{character.height} cm</span>
                </div>
                <div className={styles.block}>
                    <span>Mass:</span>
                    <span>{character.mass} kg</span>
                </div>
                <div className={styles.block}>
                    <span>Hair color:</span>
                    <span>{character.hair_color}</span>
                </div>
                <div className={styles.block}>
                    <span>Skin color:</span>
                    <span>{character.skin_color}</span>
                </div>
                <div className={styles.block}>
                    <span>Birth year:</span>
                    <span>{character.birth_year}</span>
                </div>
                <div className={styles.block}>
                    <span>Gender:</span>
                    <span>{character.gender}</span>
                </div>
            </div>
        </div>
    )
}