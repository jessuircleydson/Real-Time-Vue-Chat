<template>
  <div class="hello">
    <div id="messages">
      <div v-for="msg in msgs" :key="msg" :class="['message-item', {'me': msg.myMsg }]">
        {{ msg.text }}
      </div>
    </div>

    <ChatControls :send-m="sendMsg" @changeInputValue="textMsg = $event" />
  </div>
</template>

<script>
  import  ChatControls  from "@/components/ChatControls";
  import  io  from "socket.io-client";

export default {
  name: 'Chat',
  components: {
    ChatControls
  },
  data() {
    return {
      socket: {},
      textMsg: '',
      msgs: [],
      didiISendIt: false,
    }
  },
  methods: {
    sendMsg() {
      this.msgs.push({text: this.textMsg, myMsg: true});
      this.socket.emit('chat message', {text: this.textMsg, myMsg: false})
    },
  },
  created() {
    const url = window.location.origin;
    this.socket = io(url);
  },
  mounted() {
    this.socket.on('chat message', (ms) => {
      this.msgs.push(ms);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  body {
      margin: 0;
      padding-bottom: 3rem;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }

  #messages {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      .message-item {
        display: flex;
        text-align: left;
        
        border-radius: 10px;
        padding: 1rem 1rem;
        margin: 0 20px 15px 20px;
        box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
        align-self: flex-start;
        background-color: #efefef;
      }
 
      .message-item.me {
        background-color: rgba(38, 186, 191, 0.2);
        align-self: flex-end;
      }
  }

  .disconnected, .connected {
      display: block;
      padding: 10px;
      text-transform: uppercase;
      color:white;
  }
  .connected {
      background-color: green;
  }
  .disconnected {
      background-color: red;
  }
</style>
