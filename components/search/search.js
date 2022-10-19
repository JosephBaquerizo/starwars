import styles from './search.module.css';

export default function Search( props ) {

    const { search, setSearch, submitName } = props;

    return (
        <div className={styles.searchContainer}>
            <input
                type='text'
                placeholder='Search for StarWars characters...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={submitName}
            />
        </div>
    )
}