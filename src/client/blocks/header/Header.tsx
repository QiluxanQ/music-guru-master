import React, { FC } from 'react';
import {IHeaderProps} from "./HeaderTypes";
import styles from './Header.module.scss';

const Header: FC<IHeaderProps> = ({  socials }) => {

  return (
    <div className={styles['header']}>
      <div className={styles['header-gender']}>
      </div>
      <div>

      </div>
      <div className={styles['header-socials']}>
        {socials?.map(social => (
            <a href="#" className={styles['header-social']}>
              {social}
            </a>
        ))}
      </div>
    </div>
  )
}

export default Header;
