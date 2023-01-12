export const state = () => ({
  dataProfile: [
    {name:'Keyboard',email:'key@gmail.com',password:'123456',statusLogin:false}
  ],
  dataProfileIndex: '',
  statusLogin:''
})

export const mutations = {
  addData(state, object) {
    state.dataProfile.push({
      name: object.name,
      email: object.email,
      password: object.password,
      loginStatus: false,
    })
  },
  updateData(state, object) {
    state.dataProfile[state.dataProfileIndex].name = object.name
    state.dataProfile[state.dataProfileIndex].email = object.email
    state.dataProfile[state.dataProfileIndex].password = object.password
  },
  updateLogin(state, i) {
    state.dataProfile[i].loginStatus = true
    state.dataProfileIndex = i
  },
  updateLogout(state, i) {
    state.dataProfile[i].loginStatus = false
    state.dataProfileIndex = ''
  },
  updateStatusLogin(state, status) {
    state.statusLogin = status
  },
}

export const actions = {
  addData(context) {
    context.commit('setData', this.getters.getData.dataProfile)
  },
  updateLogin(context) {},
}

export const getters = {
  dataProfile: (state) => state.dataProfile,
}
