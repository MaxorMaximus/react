import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.contentItems}>
                <img src='https://www.ultragadget.ru/images/pictures/5.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;