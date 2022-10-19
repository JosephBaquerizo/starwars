import styles from './listItem.module.css';

export default function ListItem({ character, handleCharacter }) {
    return (
        <div className={styles.listItem} onClick={() => handleCharacter(character.name)}>
            <span>{character.name}</span>
        </div>
    )
}