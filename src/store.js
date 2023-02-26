import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            isOpenStudentModal: false,
            isOpenModal: false,
            isOpenSponsorModal: false,
            sponsors: [
                {
                    id: 1,
                    fullName: 'Alimov Abror Xabibullayevich',
                    phoneNumber: '+99899 973-72-60',
                    sponsorshipAmount: '30 000 000',
                    spentAmount: '0',
                    date: '15.01.2021',
                    status: 'Yangi'
                },
                {
                    id: 2,
                    fullName: 'Saimov Rustam Saimjonovich',
                    phoneNumber: '+99899 973-72-60',
                    sponsorshipAmount: '1 000 000',
                    spentAmount: '0',
                    date: '02.02.2021',
                    status: 'Moderatsiyada'
                },
                {
                    id: 3,
                    fullName: 'Sanginov Otabek Muratovich',
                    phoneNumber: '+99899 973-72-60',
                    sponsorshipAmount: '5 000 000',
                    spentAmount: '5 000 000',
                    date: '20.04.2021',
                    status: 'Tasdiqlangan'
                },
                {
                    id: 4,
                    fullName: 'Nazarov Sanjar Olimovich',
                    phoneNumber: '+99899 973-72-60',
                    sponsorshipAmount: '7 000 000',
                    spentAmount: '7 000 000',
                    date: '03.05.2021',
                    status: 'Bekor qilingan'
                },
            ]
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
        }
    }
})
export default store