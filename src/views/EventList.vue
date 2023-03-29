<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard />
    <router-link :to="{ name: 'event-show', params: { id: 1 } }">
      First Event
    </router-link>
  </div>
</template>
<script>
/* eslint-disable */
import EventCard from '@/components/EventCard.vue';
export default {
  components: {
    EventCard
  }
}
</script>
