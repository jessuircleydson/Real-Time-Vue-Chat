<template>
    <div class="nickname-container">
        <p>Digite seu nome</p>
        <button class="btn-nick" v-if="setNickName" @click="setNick">Clique para iniciar</button>
        <p v-if="setNickName" class="label-nick">ou pressione Enter</p>
        <input type="text" placeholder="Ex: Pedro Jorge" @keyup.enter="setNick" v-model="setNickName">
    </div>
</template>

<script>
export default {
  data() {
    return {
        nickname: '',
    }
  },
  methods: {
    setNick() {
        this.$store.state.nick = this.setNickName
        this.$store.state.nickNameFilled = true
    }
  },
  computed: {
    setNickName: {
        get() {
            return this.nickname
        },
        set(val){
            this.nickname = val
        }
    }
  }
}
</script>

<style scoped lang="scss">
.nickname-container {
    width:20%;
    position:absolute;
    background-color:#272726;
    border-radius:5px;
    left:50%;
    top:30%;
    margin-left: -10%;
    box-shadow: 0px 2px 20px 0px rgba(0,0,0,0.5);

    .btn-nick {
        background-color:#41B883;
        color:white;
        border:0;
        border-radius:3px;
        padding:5px 10px;
        margin-bottom:10px;
    }
    p {
        color:white;
    }
    .label-nick {
        color:#f2f2f2;
        font-size:10px;
        margin-top:0;
        margin-bottom:15px;
    }
    input {
        padding:15px;
        border:0px;
        width:89%;
    }
}
</style>
