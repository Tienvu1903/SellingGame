import ButtonCuaTao from '@components/Banner/Button/Button';
import styles from './styles.module.scss';

function MyBanner() {
    const { container, content, title, descrip } = styles;
    return (
        <div className={container}>
            <div className={content}>
                <h1 className={title}>Wellcome to Stant Mercy Store</h1>
                <div className={descrip}>
                    We will make sure you can't go home with out anything not
                    out of our store
                </div>
                <ButtonCuaTao content={'Enter To Store'} />
            </div>
        </div>
    );
}

export default MyBanner;
