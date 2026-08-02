import styles from './styles.module.scss';

function ButtonCuaTao({ content }) {
    const { btn } = styles;

    return <button className={btn}>{content}</button>;
}

export default ButtonCuaTao;
