import axios from "axios";

export default {
    actions: {
        fetchInstitutions(context) {
            axios.get('https://metsenatclub.xn--h28h.uz/api/v1/institute-list/')
                .then((res) => {
                    console.log(res)

                    context.commit('UPDATE_INSTITUTIONS', res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    mutations: {
        UPDATE_INSTITUTIONS(state, payload) {
            state.institutions = payload
        }
    },
    state: {
        institutions: []
    },
    getters: {
        getInstitutions(state) {
            return state.institutions
        }
    }
}