import {InferActionsTypes} from "./reduxStore";

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
            avatar: 'https://cache3.youla.io/files/images/780_780/5a/31/5a314b10a09cd56f315f2b75.jpg',
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
    currentDialog: 0
};

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {

    let stateCopy;

    switch (action.type) {
        case 'SN/DIALOGS/NEW-MESSAGE': {
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
        case 'SN/DIALOGS/SET_CURRENT_DIALOG': {
            stateCopy = {...state, currentDialog: action.currentDialog};
            return stateCopy;
        }
        default:
            return state;
    }

}

export const actions = {
    newMessage: (idMessage: number, idDialog: number, message_area: string) => ({
            type: 'SN/DIALOGS/NEW-MESSAGE',
            idMessage: idMessage,
            idDialog: idDialog,
            message_area
        } as const
    ),
    setCurrentDialog: (currentDialog: number) =>
        ({type: 'SN/DIALOGS/SET_CURRENT_DIALOG', currentDialog} as const)
}

export default dialogsReducer;