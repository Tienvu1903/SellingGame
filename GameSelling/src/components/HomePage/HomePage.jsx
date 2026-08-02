import MyBanner from '@components/Banner/Banner';
import HeaderCuaTao from '@components/Header/Header';
import styles from './styles.module.scss';

function MyHomePage() {
    const {container} = styles;
    return (
    <>
        <div>
            <div className={container}>
                <HeaderCuaTao />
                <MyBanner />
            </div>
        </div>
    </>
    );
}

export default MyHomePage;