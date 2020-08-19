import { rerenderAll } from './../../render';

let state = { 
   
   dialogPage: {
    dialogsData: [
        {id: 0, name: 'Sveta'},
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Andrew'},
        {id: 4, name: 'Kate'}
    ],
    
    messageData: {
        left: [
        {id: 0, name: 'Hi'},
        {id: 1, name: 'Hello'},
        ],
        right: [
        {id: 2, name: 'How are you?'},
        {id: 3, name: 'I\'m fine, thanks'},
        {id: 4, name: 'You are welcome'}
        ]
    }
},
   postPage: {
    postArr: [
        {message: 'hello there!', count: '15'},
        {message: 'hello there!', count: '3'},
        {message: 'hello there!', count: '1'},
        {message: 'hello there!', count: '22'},
        {message: 'hello there!', count: '50'},
      ]
}
}

export let addPost = (newText) => {
    
let newPost = {
        message: newText,
        count: 1
    }

    state.postPage.postArr.push(newPost);
    rerenderAll(state);
}

export default state;