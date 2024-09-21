let store = {
  _state: {
    profilePage: {
      posts: [

        {
          id: 1,
          img: "https://distribution.faceit-cdn.net/images/31b6141b-b741-454a-b518-9b5b12f65fb9.jpeg",
          message: "Hi, how are you?",
          likesCount: 12
        },
        {
          id: 2,
          img: "https://distribution.faceit-cdn.net/images/31b6141b-b741-454a-b518-9b5b12f65fb9.jpeg",
          message: "It\"s my first post",
          likesCount: 11
        },
        {
          id: 3,
          img: "https://distribution.faceit-cdn.net/images/31b6141b-b741-454a-b518-9b5b12f65fb9.jpeg",
          message: "Blabla",
          likesCount: 11
        },
        {
          id: 4,
          img: "https://distribution.faceit-cdn.net/images/31b6141b-b741-454a-b518-9b5b12f65fb9.jpeg",
          message: "Dada",
          likesCount: 10
        },
      ],
      newPostText: ""
    }

  },
  getState() {
    return this._state
  },
  _rerenderEntireTree() {
    console.log("")
  },
  addPost() {

    let newPost = {
      id: 5,
      img: "https://distribution.faceit-cdn.net/images/31b6141b-b741-454a-b518-9b5b12f65fb9.jpeg",
      message:
      this._state.profilePage.newPostText,
      likesCount: 0
    }

    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ""
    this._rerenderEntireTree(this._state)
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText
    this._rerenderEntireTree(this._state)
    // console.log(newText)
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer
  },
  // dispatch(action) {
  // }
}


export default store