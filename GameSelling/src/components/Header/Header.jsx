import IconBox from './BoxIcons/Boxicons';
import { dataIconsBox } from './BoxIcons/constants';

function HeaderCuaTao() {
    return (
        <div>
            <div>
                <div>
                    {dataIconsBox.map(item => {
                        return <IconBox type={item.type} href={item.href} />;
                    })}
                </div>
                <div></div>
            </div>
            <div></div>
            <div></div>
        </div>
    );
}

export default HeaderCuaTao;
