import classNames from 'classnames/bind';
import style from './Sidebar.module.scss'
function Sidebar() {
    const cx = classNames.bind(style)
    return ( 
        <div className={cx('wrapper')}>
            <h1>sideber</h1>
        </div>
     );
}

export default Sidebar;