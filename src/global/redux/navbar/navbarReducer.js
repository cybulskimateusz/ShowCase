const navbarReducer = (state, action) => {
    switch(action.type) {
        case 'white':
            return {...state, color:'#fff'}
        case 'green':
            return {...state, color:'#28ff00'}
        case 'gray':
            return {...state, color:'#4d4d4d'}
        case 'black':
            return {...state, color:'#000'}
        default:
            return state
    }
}

export default navbarReducer