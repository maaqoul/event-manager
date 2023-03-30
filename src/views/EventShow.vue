<template>
  <div>
    <div class="event-header">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h1 class="title">{{ event.title }}</h1>
      <h5>Organized by {{ event.organizer ? event.organizer.name : ''}}</h5>
      <h5>Category {{ event.category }}</h5>
    </div>
    <BaseIcon name="map"><h2>location</h2></BaseIcon>
    <address>{{ event.location }}</address>
    <h2>Event details</h2>
    <p>{{ event.description }}</p>
    <h2>
      attendees
      <span class="badge -fill-gradient">{{ event.attendees?.length || 0}}</span>
    </h2>
    <ul class="list-group">
      <li
        v-for="(attendee, index) in event.attendees"
        :key="index"
        class="list-item"
      >
        <b>{{ attendee.name }}</b>
      </li>
    </ul>
  </div>
</template>
<script>
/* eslint-disable */
import EventService from '@/services/EventService'

export default {
  props: ['id'],
  data() {
    return {
      event: {}
    }
  },
  created() {
    EventService.getEvent(this.id)
    .then(response => this.event = response.data)
    .catch(error => {console.log(error.response)})
  }
}
</script>
