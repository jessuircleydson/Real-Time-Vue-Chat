<template>
  <div class="home">
  <h3 style="text-align:center;">Real Time Vue Chat</h3>
    <img alt="Vue logo" src="../assets/logo.png" width="40px">
    
    <NickInput v-if="!nickFilled" />
    <div v-if="nickFilled">
        <Chat />
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Chat from '@/components/Chat.vue'
import NickInput from '@/components/nickname/NickInput'

export default {
  name: 'Home', 
  components: {
    Chat,
    NickInput
  },
  computed: {
    nickFilled() {
        return this.$store.state.nickNameFilled
    }
  }
}
</script>
