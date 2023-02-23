import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            isOpenModal: false
        }
    },
    mutations: {
        UPDATE_MODAL(state) {
            console.log('5555')
            state.isOpenModal = !state.isOpenModal
        }
    }
})
export default store