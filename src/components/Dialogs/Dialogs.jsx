import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem' ;
import Message from './Message/Message' ;

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
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;

