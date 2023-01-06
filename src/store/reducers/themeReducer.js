import { SWITCH_THEME } from '../actions/constants'

const defaultState = {
    theme: localStorage.getItem('theme') || 'dark'
}

const themeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SWITCH_THEME:
            let th = (state.theme === 'light')? 'dark' : 'light'
            localStorage.setItem('theme', th)
            return (state.theme === 'light')? {...state, theme: th} : {...state, theme: th};
        default:
            return state;
    }
}

export default themeReducer;