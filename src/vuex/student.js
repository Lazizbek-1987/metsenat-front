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
        fetchStudent(context, studentId) {
            return new Promise((resolve, reject) => {
                axios.get(`https://metsenatclub.xn--h28h.uz/api/v1/student-detail/${studentId}`)
                    .then((res) => {
                        console.log(res)

                        context.commit('UPDATE_STUDENT', res.data)
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
        UPDATE_STUDENT(state, payload) {
            state.student = payload
        }
    },
    state: {
        students: [],
        student: {
            full_name: "string",
            type: 1,
            phone: "string",
            institute: "string",
            contract: 0,
            given: 0
        }
    },
    getters: {
        getStudentsList(state) {
            return state.students.results
        },
        getStudentsCount(state) {
            return state.students.count
        },
        getStudent(state) {
            return state.student
        }
    }
}