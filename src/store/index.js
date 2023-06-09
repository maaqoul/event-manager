import Vue from 'vue'
import Vuex from 'vuex'

import EventService from '@/services/EventService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc', name: 'hicham maaqoul' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community',
    ],
    events: [],
  },
  getters: {
    catLength: (state) => state.categories.length,
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
  },
  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    },
    fetchEvents({ commit }) {
      EventService.getEvents()
        .then((response) => {
          commit('SET_EVENTS', response.data)
        })
        .catch((error) => {
          console.error(error.message)
        })
    },
  },
  modules: {},
})
