import styles from '../styles.module.scss';


 function Menu({content, href}) {
    const {MenuSlide} =  styles;
    return  <div className={MenuSlide}>{content}</div>;
}

export default Menu;