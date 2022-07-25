import React, { FC } from 'react';
import {IHeaderProps} from "./HeaderTypes";
import styles from './Header.module.scss';

const Header: FC<IHeaderProps> = ({  socials }) => {

  return (
    <div className={styles['header']}>
    <div className={styles['header-socials']}>
        {socials?.map(social => (
            <div  className={styles['header-social']}>
                {social}
            </div>
        ))}
    </div>
</div>

  )
}
export default Header;
