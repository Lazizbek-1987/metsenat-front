import axios from "axios";

export default {
    actions: {
        fetchSponsors(context) {
            axios.get('https://metsenatclub.xn--h28h.uz/api/v1/sponsor-list/')
                .then((res) => {
                    console.log(res)

                    context.commit('UPDATE_SPONSORS', res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        fetchSponsor(context, sponsorId) {
            return new Promise((resolve, reject) => {
                axios.get(`https://metsenatclub.xn--h28h.uz/api/v1/sponsor-detail/${sponsorId}/`)
                    .then((res) => {
                        console.log(res)

                        let sponsor = {
                            id: res.data.id,
                            full_name: res.data.full_name,
                            phone: res.data.phone,
                            sum: res.data.sum,
                            is_legal: res.data.is_legal,
                            firm: res.data.firm,
                            comment: res.data.comment,
                            created_at: res.data.created_at,
                            get_status_display: res.data.get_status_display
                        }

                        context.commit('UPDATE_SPONSOR', sponsor)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })

        },
        deleteSponsor(context, sponsorId) {
            axios.delete(`https://metsenatclub.xn--h28h.uz/api/v1/sponsor-delete/${sponsorId}/`)
                .then((res) => {
                    console.log(res)

                    context.commit('UPDATE_SPONSORS', res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        putSponsor(context, data) {
            return new Promise((resolve, reject) => {
                axios.put(`https://metsenatclub.xn--h28h.uz/api/v1/sponsor-update/${data.id}/`, data)
                    .then((res) => {
                        console.log(res)

                        context.commit('UPDATE_SPONSOR', res.data)
                        resolve()
                    })
                    .catch((err) => {
                        console.log(err)
                        reject()
                    })
            })
        },
    },
    mutations: {
        UPDATE_SPONSORS(state, payload) {
            state.sponsors = payload
        },
        UPDATE_SPONSOR(state, payload) {
            state.sponsor = payload
        }
    },
    state: {
        sponsors: [],
        sponsor: {
            id: null,
            full_name: '',
            phone: '',
            sum: 0,
            is_legal: null,
            firm: '',
            comment: '',
            created_at: '',
            get_status_display: ''
        }
    },
    getters: {
        getSponsorsList(state) {
            return state.sponsors.results
        },
        getSponsorsCount(state) {
            return state.sponsors.count
        },
        getSponsor(state) {
            return state.sponsor
        },
    }
}