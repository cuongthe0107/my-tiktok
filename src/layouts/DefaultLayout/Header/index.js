import classNames from 'classnames/bind';
import style from './Header.module.scss'
function Header() {
    const cx = classNames.bind(style);

    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>Header</div>
        </header>
     );
}

export default Header;