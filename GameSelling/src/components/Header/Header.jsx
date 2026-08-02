import IconBox from './BoxIcons/Boxicons';
import { dataIconsBox, dataMenu } from './BoxIcons/constants';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import Logo from '@icons/IMG/SaintMercy.jpg';
import Reload_icon from '@icons/Reload_icon.svg';
import shoppingcart_icon from '@icons/shoppingcart_icon.svg';
import heart_icon from '@icons/heart_icon.svg';

function HeaderCuaTao() {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container
    } = styles;

    return (
        <div className= {container}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataIconsBox.map(item => {
                            return (
                                <IconBox type={item.type} href={item.href} />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map(item => {
                            return (
                                <Menu content={item.content} href={item.href} />
                            );
                        })}
                    </div>
                </div>
                <div>
                    <img
                        src={Logo}
                        alt='Logo'
                        style={{
                            /*width: '153px', height: '53px' */ width: '100px',
                            height: 'auto'
                        }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map(item => {
                            return (
                                <Menu content={item.content} href={item.href} />
                            );
                        })}
                    </div>
                    <div className={containerBoxIcon}>
                        <img
                            width={26}
                            height={26}
                            src={Reload_icon}
                            alt={Reload_icon}
                        />
                        <img
                            width={26}
                            height={26}
                            src={heart_icon}
                            alt={heart_icon}
                        />
                        <img
                            width={26}
                            height={26}
                            src={shoppingcart_icon}
                            alt={shoppingcart_icon}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderCuaTao;
