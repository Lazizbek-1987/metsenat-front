import {createStore} from "vuex"
import dashboard from "@/vuex/dashboard"
import sponsor from "@/vuex/sponsor"
import student from "@/vuex/student"
import institute from "@/vuex/institute"

export default createStore({
    modules: {
        dashboard,
        sponsor,
        student,
        institute
    },
    state() {
        return {
            isOpenStudentModal: false,
            isOpenModal: false,
            isOpenSponsorModal: false,
            isOpenFilterModal: false,
            isCheck: false,
        }
    },
    mutations: {
        UPDATE_STUDENT_MODAL(state) {
            state.isOpenStudentModal = !state.isOpenStudentModal
        },
        UPDATE_MODAL(state) {
            state.isOpenModal = !state.isOpenModal
        },
        OPEN_SPONSOR_MODAL(state) {
            state.isOpenSponsorModal = !state.isOpenSponsorModal
        },
        OPEN_FILTER_MODAL(state) {
            state.isOpenFilterModal = !state.isOpenFilterModal
        },
        CHECK_FILTER(state) {
            state.isCheck = !state.isCheck
        }
    },
})