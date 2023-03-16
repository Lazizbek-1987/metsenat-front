import axios from "axios";

export default {
    actions: {
        fetchToken(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('https://metsenatclub.xn--h28h.uz/api/v1/auth/login/', data)
                    .then((res) => {
                        console.log(res)

                        context.commit('UPDATE_TOKEN', res.data.access)

                        resolve()
                    })
                    .catch((err) => {
                        console.log(err, 'xato')

                        reject()
                    })
            })
        }
    },
    mutations: {
        UPDATE_TOKEN(state, token) {
            localStorage.setItem('token', token)
        },
    },
    state: {
        userToken: localStorage.getItem('token'),
    },
    getters: {
        getToken(state) {
            return state.userToken
        }
    }
}