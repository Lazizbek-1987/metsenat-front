import axios from "axios";

export default {
    actions: {
        fetchDashboard(context) {
            axios.get('https://metsenatclub.xn--h28h.uz/api/v1/dashboard/')
                .then((res) => {
                    console.log(res)

                    context.commit('UPDATE_DASHBOARD', res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    mutations: {
        UPDATE_DASHBOARD(state, payload) {
            state.dashboard = payload
        }
    },
    state: {
        dashboard: {}
    },
    getters: {
        getDashboard(state) {
            return state.dashboard
        }
    }
}