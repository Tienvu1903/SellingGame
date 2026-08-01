import styles from '../styles.module.scss'; 
import fb_icon from '@icons/fb_icon.svg';
import Youtube_icon from '@icons/Youtube_icon.svg';
import X_icon from '@icons/X_icon.svg';
import Tiktok_icon from '@icons/Tiktok_icon.svg';


function IconBox({type,href}) {
    const {BoxIcons} = styles;   

    const headleRenderIcon = (type) => 
    {
        switch (type){
            case 'FB':
                return fb_icon;
            case'YT':
                return Youtube_icon;
                case'X':
                return X_icon;
                case'TK':
                return Tiktok_icon;
        }
    }

    return <div className={BoxIcons}>
        <img src={headleRenderIcon(type)} alt={href} />
    </div>;
}

export default IconBox;