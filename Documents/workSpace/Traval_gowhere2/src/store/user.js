import Cookies from 'js-cookie'

const user = {
    state: {
        user: Cookies.get('userInfo') ? JSON.parse(Cookies.get('userInfo')) : '',
    },
    mutations: {
        SET_TASK: (state, info) => {
            state.user = info;
            Cookies.set('userInfo', info)
        }
    },
    action: {

    }
}

export default user