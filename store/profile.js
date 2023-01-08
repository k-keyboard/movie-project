export const state = () => ({
  dataProfile: [],
  dataProfileIndex: '',
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
    alert('Update Profile Success')
  },
  updateLogin(state, i) {
    state.dataProfile[i].loginStatus = true
    state.dataProfileIndex = i
  },
  updateLogout(state, i) {
    state.dataProfile[i].loginStatus = false
    state.dataProfileIndex = ''
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
