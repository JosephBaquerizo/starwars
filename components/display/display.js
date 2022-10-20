import styles from './display.module.css';

export default function Display( props ) {

    const { page, setPage } = props;

    const decreasePage = () => {
        if (page === 1) return;
        setPage(currentPage => currentPage - 1);
    }

    const increasePage = () => {
        if (page === 82) return;
        setPage(currentPage => currentPage + 1);
    }

    return (
        <div className={styles.container}>
            <div className={styles.paginationContainer}>
                <button onClick={decreasePage}>Prev</button>
                <div className={styles.numberContainer}>
                    <span>{page}</span>
                </div>
                <button onClick={increasePage}>Next</button>
            </div>
        </div>
    )
}