import firebase from "firebase/app";



export default {
    //namespaced: true,
    actions: {
        async login({dispatch},{email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
                dispatch
            } catch (e) {
              console.log(e)
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