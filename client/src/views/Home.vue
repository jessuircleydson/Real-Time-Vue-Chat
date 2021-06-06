<template>
  <div class="home">
    <h3>Real Time Vue Chat</h3>
    <img alt="Vue logo" src="../assets/logo.png" width="40px">
    <Chat />
  </div>
</template>

<script>
// @ is an alias to /src
import Chat from '@/components/Chat.vue'

export default {
  name: 'Home',
  components: {
    Chat
  }
}
</script>
