<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <router-link :to="{ name: 'event-show', params: { id: 1 } }">
      First Event
    </router-link>
  </div>
</template>
<script>
/* eslint-disable */
import EventCard from '@/components/EventCard.vue';
import { mapState } from 'vuex';
export default {
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('fetchEvents')
  },
  computed: mapState(['events'])
}
</script>
