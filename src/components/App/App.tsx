import Trial from '../Trial/Trial';
//============================================
import styles from './app.module.scss';
import './null.scss';

const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <main>
                <Trial />
            </main>
        </div>
    );
}

export default App;