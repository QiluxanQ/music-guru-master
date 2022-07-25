import React,{ FC } from "react";
import {IInfoProps} from "./InfoTypes";
import styles from './Info.module.scss';

const Info: FC<IInfoProps> = ({info}) => {
    return (
        <div className={styles['body']}>
            <div className={styles['info-skill']}>
                {info?.map( info => (
                    <h3 className={styles['info-skills']}>
                        {info}
                    </h3>
                ))}
            </div>
        </div>
    )
}

export default Info;