import axios from "axios";

export default {
    actions: {
        fetchStudents(context) {
            axios.get('https://metsenatclub.xn--h28h.uz/api/v1/student-list/')
                .then((res) => {
                    console.log(res)

                    context.commit('UPDATE_STUDENTS', res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        fetchStudentSponsors(context, studentId) {
            return new Promise((resolve, reject) => {
                axios.get(`https://metsenatclub.xn--h28h.uz/api/v1/student-sponsor/${studentId}/`)
                    .then((res) => {
                        console.log(res)

                        context.commit('UPDATE_STUDENT_SPONSORS', res.data)
                        resolve()
                    })
                    .catch((err) => {
                        console.log(err)
                        reject()
                    })
            })
        },
        fetchStudent(context, studentId) {
            return new Promise((resolve, reject) => {
                axios.get(`https://metsenatclub.xn--h28h.uz/api/v1/student-detail/${studentId}`)
                    .then((res) => {
                        console.log(res)

                        let student = {
                            id: res.data.id,
                            full_name: res.data.full_name,
                            type: res.data.type,
                            phone: res.data.phone,
                            institute: res.data.institute.name,
                            contract: res.data.contract,
                            given: res.data.given,
                            get_status_display: res.data.get_status_display
                        }

                        context.commit('UPDATE_STUDENT', student)
                        resolve()
                    })
                    .catch((err) => {
                        console.log(err)
                        reject()
                    })
            })
        },
        pushStudent(context, data) {
            axios.post('https://metsenatclub.xn--h28h.uz/api/v1/student-create/', data)
                .then((res) => {
                    console.log(res)

                    context.commit('UPDATE_STUDENT', res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
    mutations: {
        UPDATE_STUDENTS(state, payload) {
            state.students = payload
        },
        UPDATE_STUDENT_SPONSORS(state, payload) {
            state.studentSponsors = payload
        },
        UPDATE_STUDENT(state, payload) {
            state.student = payload
        }
    },
    state: {
        students: [],
        studentSponsors: {
            sponsors: []
        },
        student: {
            id: 0,
            full_name: '',
            type: 0,
            phone: '',
            institute: '',
            contract: 0,
            given: 0,
            get_status_display: ''
        }
    },
    getters: {
        getStudentsList(state) {
            return state.students.results
        },
        getStudentSponsorsList(state) {
            return state.studentSponsors.sponsors
        },
        getStudentsCount(state) {
            return state.students.count
        },
        getStudent(state) {
            return state.student
        }
    }
}