import firebase from "firebase/app";
import {error} from "../../utils/error";


export default {

    actions: {
        async login({commit, dispatch},{email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
                commit('clearMessage', null, {root: true} )
            } catch (e) {
                dispatch('setMessage',{
                    value: error(e.response.data.error.message),
                    type: 'danger'
                }, {root : true})
                //throw new Error()
            }
        },
        async register({dispatch}, {email, password, name}) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/info`).set({name})
            } catch (e) {

             console.log(e)
            }
        },
        getUid() {
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        },
        async logout() {
            await firebase.auth().signOut()

        }
    },

}