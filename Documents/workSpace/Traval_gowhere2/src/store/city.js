import Cookies from 'js-cookie'

const city = {
    state: {
        city: Cookies.get('city') ? JSON.parse(Cookies.get('city')) : '',
    },
    mutations: {
        SET_CITY: (state, info) => {
            state.city = info;
            Cookies.set('city', info)
        }
    },
    action: {

    }
}

export default city