<template>
  <div class="hello">
    Nova mensagem: {{msg}}
  </div>
</template>

<script>
  import  io  from "socket.io-client";

export default {
  name: 'Chat',
  data() {
    return {
      socket: {},
      msg: '',
    }
  },
  created() {
    this.socket = io('http://127.0.0.1:5000')
  },
  mounted() {
    this.socket.on('chat message', (ms) => {
      console.log('opaaaaaa');
      console.log(ms);
      this.msg = ms;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
