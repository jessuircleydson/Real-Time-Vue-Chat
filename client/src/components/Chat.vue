<template>
  <div class="hello">
    <div id="messages">
      <div v-for="msg in msgs" :key="msg" :class="['message-item', {'me': msg.myMsg }]">
        <span class="nickname">{{ msg.nickn }}</span><br />
        <span class="msgText">
            {{ msg.text }}
        </span>
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
      this.msgs.push({
          text: this.textMsg,
          myMsg: true,
          nickn: this.$store.state.nick
        });
      this.socket.emit('chat message', {
          text: this.textMsg,
          myMsg: false,
          nickn: this.$store.state.nick
        })
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
      padding-bottom: 50px;
      display: flex;
      flex-direction: column;
      .message-item {
        text-align: left;
        display:flex;
        flex-direction:column;
        border-radius: 5px;
        padding: 0.5rem 0.5rem;
        font-size:12px;
        margin: 0 20px 15px 20px;
        box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
        align-self: flex-start;
        background-color: #efefef;
        max-width: 80%;
        min-width: 5%;
        word-break: break-all;
        
        &.me {
            background-color: rgba(38, 186, 191, 0.2);
            align-self: flex-end;
            .nickname {
                display:none;
            }
        }

        .nickname {
            font-weight: bold;
            font-size:12px;
            margin-bottom:5px;
        }
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
