<template>
  <div class="hello">
    <ul id="messages">
      <li v-for="msg in msgs" :key="msg">
        {{ msg.text }}
      </li>
    </ul>
    <div id="form">
        <input id="input" v-model="textMsg" autocomplete="off" />
        <button @click="sendMsg">Send</button>
    </div>
  </div>
</template>

<script>
  import  io  from "socket.io-client";

export default {
  name: 'Chat',
  data() {
    return {
      socket: {},
      msgs: [

      ],
      textMsg: '',
      port: process.env.PORT,
    }
  },
  methods: {
    sendMsg() {

      this.socket.emit('chat message', {text:this.textMsg});
    }
  },
  created() {
    const url = window.location.origin;
    console.log(url+':'+this.port)
    this.socket = io(url+':'+this.port)
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

        #form {
            background: rgba(0, 0, 0, 0.15);
            padding: 0.25rem;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            height: 3rem;
            box-sizing: border-box;
            backdrop-filter: blur(10px);
        }

        #input {
            border: none;
            padding: 0 1rem;
            flex-grow: 1;
            border-radius: 2rem;
            margin: 0.25rem;
        }

        #input:focus {
            outline: none;
        }

        #form>button {
            background: #333;
            border: none;
            padding: 0 1rem;
            margin: 0.25rem;
            border-radius: 3px;
            outline: none;
            color: #fff;
        }

        #messages {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }

        #messages>li {
            padding: 0.5rem 1rem;
        }

        #messages>li:nth-child(odd) {
            background: #efefef;
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
