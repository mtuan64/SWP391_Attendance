import moment from 'moment'
import avatar from '../assets/images/avatar.jpg'

export const events = [
    {
        start:moment("2024-01-26T08:00:00").toDate(),
        end:moment("2024-01-26T09:00:00").toDate(),
        title:"PRN231 - AL101",
        data:{
            id:"slot1"
        }
    },

    {
        start:moment("2024-01-26T10:00:00").toDate(),
        end:moment("2024-01-26T11:50:00").toDate(),
        title:"PRN231 - AL101",
        data:{
            id:"slot2"
        }
    },

    {
        start:moment("2024-01-27T10:00:00").toDate(),
        end:moment("2024-01-27T11:00:00").toDate(),
        title:"PRN231 - AL101",
        data:{
            id:"slot3"
        }
    },

    {
        start:moment("2024-01-29T07:00:00").toDate(),
        end:moment("2024-01-29T08:00:00").toDate(),
        title:"SWP391 - DE205",
        data:{
            id:"slot4"
        }
    },

    {
        start:moment("2024-01-29T08:20:00").toDate(),
        end:moment("2024-01-29T09:20:00").toDate(),
        title:"SWP391 - DE205",
        data:{
            id:"slot5"
        }
    },

    {
        start:moment("2024-01-31T15:30:00").toDate(),
        end:moment("2024-01-31T16:30:00").toDate(),
        title:"SWP391 - DE205",
        data:{
            id:"slot6"
        }
    },
]

export const students = [
    {
        name: "Nguyen Van A",
        code: "HE123456",
        k: "K17",
        image: avatar
    },
    {
        name: "Nguyen Van B",
        code: "HE123456",
        k: "K16",
        image: avatar
    },
    {
        name: "Nguyen Van C",
        code: "HE123456",
        k: "K16",
        image: avatar
    },
    {
        name: "Nguyen Van D",
        code: "HE123456",
        k: "K18",
        image: avatar
    }
]