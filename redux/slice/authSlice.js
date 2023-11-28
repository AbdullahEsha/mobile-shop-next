import { createSlice } from '@reduxjs/toolkit'
import jsCoockie from 'js-cookie'

// Create a slice of state for authentication and authorization using email and password with Redux Toolkit
const authSlice = createSlice({
  name: 'AUTH_LOGIN',
  initialState: {
    user: jsCoockie.get('user') || null,
    token: jsCoockie.get('token') || null,
  },
  reducers: {
    login: (state, action) => {
      const { user, token } = action.payload
      jsCoockie.set('user', user)
      jsCoockie.set('token', token)
      state.user = user
      state.token = token
    },
    logout: (state) => {
      jsCoockie.remove('user')
      jsCoockie.remove('token')
      state.user = null
      state.token = null
    },
    checkAuth: (state) => {
      state.user = jsCoockie.get('user') || null
      state.token = jsCoockie.get('token') || null
    },
  },
})

// Export actions
export const { login, logout, checkAuth } = authSlice.actions

// Export selectors
export const selectUser = (state) => state.auth.user
export const selectToken = (state) => state.auth.token

// Export reducer
export default authSlice.reducer
