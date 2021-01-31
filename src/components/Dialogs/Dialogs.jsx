import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';


const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}


const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Sergiy' },
        { id: 2, name: 'Yaryk' },
        { id: 3, name: 'Max' },
        { id: 4, name: 'Petro' },
        { id: 5, name: 'Igor' },
        { id: 6, name: 'Denys' }
    ]

let dialogsElements = dialogsData.map(dialog =>  <DialogItem name={dialog.name} id={dialog.id} /> );

    let messagesData = [
        { id: 1, message: 'Hi'},
        { id: 2, message: 'How are you'},
        { id: 3, message: 'What do you do'}
    ]

let messagesElements =messagesData.map(message => <Message message={message.message} id={message.id} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} /> */}
            </div>
            <div className={s.messages}>
                {messagesElements}
                {/* <Message message={messagesData[0].message} id={messagesData[0].id} />
                <Message message={messagesData[1].message} id={messagesData[0].id} />
                <Message message={messagesData[2].message} id={messagesData[0].id} /> */}
            </div>
        </div>
    )
}

export default Dialogs;