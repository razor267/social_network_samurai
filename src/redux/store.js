import profileReducer from "./profileReducer";
import dialogsReducer from "./gialogsReducer";
import navBarReducer from "./navBarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 23},
                {id: 2, message: 'It\'s my first post', likesCount: 31},
                {id: 3, message: 'ITK', likesCount: 11}
            ],
            newPostText: '',
            myAvatar: 'http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg'
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1, name: 'Petr', avatar: 'https://topmsg.ru/wp-content/uploads/anonymous.jpg', dialog:
                        [
                            {id: 1, message: 'Hi', iOrNot: true},
                            {id: 2, message: 'Hi=))', iOrNot: false},
                            {id: 3, message: 'How are you?', iOrNot: true},
                            {id: 4, message: '???', iOrNot: true},
                            {id: 5, message: 'good, and you?', iOrNot: false},
                            {id: 6, message: 'too', iOrNot: true}
                        ]
                },
                {
                    id: 2,
                    name: 'Sasha',
                    avatar: 'https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg',
                    dialog:
                        [
                            {id: 1, message: 'Hello', iOrNot: false},
                            {id: 2, message: 'hi, man', iOrNot: true}
                        ]
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
                        ]
                },
                {
                    id: 4,
                    name: 'Anna',
                    avatar: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png',
                    dialog:
                        [
                            {id: 1, message: 'Hi, sister', iOrNot: true},
                            {id: 2, message: 'Hi, bro', iOrNot: false}
                        ]
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
                        ]
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
                        ]
                }
            ],
            newMessageText: ''
        },
        navBarFriends: [
            {name: 'Evgen', avatar: 'https://www.blast.hk/attachments/64805/'},
            {name: 'Maksim', avatar: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'},
            {name: 'Aleksandr', avatar: 'https://avatarko.ru/img/avatar/11/multfilm_volk_10382.jpg'}
        ]
    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {  // { type: 'text' .......... }

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navBarFriends = navBarReducer(this._state.navBarFriends, action);

        this._callSubscriber(this._state);
    }
}

export default store;

// window.store = store;