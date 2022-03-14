const NEW_MESSAGE = 'NEW-MESSAGE';
const SET_CURRENT_DIALOG = 'SET_CURRENT_DIALOG';

type DialogType = {
    id: number
    message: string
    iOrNot: boolean
}

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Petr',
            avatar: 'https://topmsg.ru/wp-content/uploads/anonymous.jpg',
            dialog:
                [
                    {id: 1, message: 'Hi', iOrNot: true},
                    {id: 2, message: 'Hi=))', iOrNot: false},
                    {id: 3, message: 'How are you?', iOrNot: true},
                    {id: 4, message: '???', iOrNot: true},
                    {id: 5, message: 'good, and you?', iOrNot: false},
                    {id: 6, message: 'too', iOrNot: true}
                ] as Array<DialogType>
        },
        {
            id: 2,
            name: 'Sasha',
            avatar: 'https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg',
            dialog:
                [
                    {id: 1, message: 'Hello', iOrNot: false},
                    {id: 2, message: 'hi, man', iOrNot: true}
                ] as Array<DialogType>
        },
        {
            id: 3,
            name: 'Sergey',
            avatar: 'https://cspromogame.ru//storage/upload_images/avatars/1299.jpg',
            dialog:
                [
                    {id: 1, message: 'How are you??', iOrNot: false},
                    {id: 2, message: 'good, you?', iOrNot: true},
                    {id: 3, message: 'too=))', iOrNot: false}
                ] as Array<DialogType>
        },
        {
            id: 4,
            name: 'Anna',
            avatar: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png',
            dialog:
                [
                    {id: 1, message: 'Hi, sister', iOrNot: true},
                    {id: 2, message: 'Hi, bro', iOrNot: false}
                ] as Array<DialogType>
        },
        {
            id: 5,
            name: 'Evelina',
            avatar: 'https://krasivosti.pro/uploads/posts/2021-07/1626219796_19-krasivosti-pro-p-krolik-snezhok-zaitsevie-krasivo-foto-20.jpg',
            dialog:
                [
                    {id: 1, message: 'Hi', iOrNot: true},
                    {id: 2, message: 'Hi', iOrNot: false},
                    {id: 3, message: 'what you do?', iOrNot: true},
                    {id: 4, message: 'watch TV=))', iOrNot: false}
                ] as Array<DialogType>
        },
        {
            id: 6,
            name: 'Artem',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkHfyUXpFU_i8g1PIp_T-hSSyb8PYePWprg&usqp=CAU',
            dialog:
                [
                    {id: 1, message: 'Hello', iOrNot: false},
                    {id: 2, message: 'Hi', iOrNot: true},
                    {id: 3, message: 'go????', iOrNot: false},
                    {id: 4, message: '???', iOrNot: false},
                    {id: 5, message: 'go', iOrNot: true}
                ] as Array<DialogType>
        }
    ],
    currentDialog: null
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

    let stateCopy;

    switch (action.type) {
        case NEW_MESSAGE: {
            let newMessage = {
                id: action.idMessage,
                // message: state.newMessageText,
                message: action.message_area,
                iOrNot: true
            };
            // stateCopy = {...state, newMessageText: ''};
            // stateCopy.dialogs[action.idDialog].dialog.push(newMessage);
            let stateCopy = JSON.parse(JSON.stringify(state));
            stateCopy.dialogs[action.idDialog].dialog.push(newMessage);
            return stateCopy;
        }
        case SET_CURRENT_DIALOG: {
            stateCopy = {...state, currentDialog: action.currentDialog};
            return stateCopy;
        }
        default:
            return state;
    }

}

type NewMessageActionCreatorType = {
    type: typeof NEW_MESSAGE,
    idMessage: number,
    idDialog: number,
    message_area: any
}

export const newMessageActionCreator = (idMessage: number, idDialog: number, message_area: any): NewMessageActionCreatorType => ({
        type: NEW_MESSAGE,
        idMessage: idMessage,
        idDialog: idDialog,
        message_area
    }
);

type SetCurrentDialogActionCreatorType = {
    type: typeof SET_CURRENT_DIALOG
    currentDialog: number
}

export const setCurrentDialogActionCreator = (currentDialog:number):SetCurrentDialogActionCreatorType => ({type: SET_CURRENT_DIALOG, currentDialog})

export default dialogsReducer;