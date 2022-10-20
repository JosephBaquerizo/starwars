import styles from './loading.module.css';

export default function Loading({ loading }) {
    
    if ( !loading ) return;
    
    return (
            <div className={styles.container}>
                <span>Loading...</span>
            </div>
    )
}