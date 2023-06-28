<template>
  <div class="home">
    <button id="connectButton" name="connectButton" class="buttonleft" @click="handleConnect">
      Connect
    </button>
    <button id="disconnectButton" name="disconnectButton" class="buttonright">Disconnect</button>
    <div class="messagebox">
      <label for="message"
        >Enter a message:
        <input
          id="message"
          v-model="messageInputValue"
          type="text"
          name="message"
          placeholder="Message text"
          inputmode="latin"
          size="60"
          maxlength="120"
          :disabled="messageInputDisabled"
        />
      </label>
      <button id="sendButton" name="sendButton" class="buttonright" @click="sendMessage">
        Send
      </button>
      <button id="sendButton" name="sendButton" class="buttonright" @click="createRoom">
        创建房间
      </button>
    </div>
    <div id="receivebox" class="messagebox">
      <ul>
        <li v-for="(item, index) in messageList" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { io } from 'socket.io-client'

export default defineComponent({
  name: 'HomePage',
  setup() {
    const messageInputValue = ref('')
    const messageInputDisabled = ref(false)

    const localConnection = new RTCPeerConnection(),
      remoteConnection = new RTCPeerConnection()
    const sendChannel = ref(localConnection.createDataChannel('sendChannel'))
    const receiveChannel = ref<RTCDataChannel>()
    const messageList = ref<string[]>([])

    const roomList = ref<
      {
        id: string
        member: { name: string }[]
      }[]
    >()
    //信令服务器
    const socket = io('http://localhost:3000')
    socket.connect()
    socket.on('connect', async () => {
      if (sendChannel.value.readyState == 'connecting') {
        socket.emit('rtcMessage', '你好', (data) => {
          console.log(data)
        })
      }
    })
    const handleConnect = async () => {
      //建立本地连接
      sendChannel.value.onopen = (e) => {
        console.log('open =>', e)
      }
      sendChannel.value.onclose = (e) => {
        console.log('close => ', e)
      }

      //建立远程连接
      remoteConnection.ondatachannel = (e) => {
        console.log('datachannelcb => ', e)
        receiveChannel.value = e.channel
        receiveChannel.value.onmessage = (e) => {
          if (typeof e.data === 'string') {
            messageList.value.push(e.data)
          }
        }
        receiveChannel.value.onopen = () => {
          if (receiveChannel.value) {
            console.log(
              "Receive channel's status has changed to " + receiveChannel.value.readyState
            )
          }
        }
        receiveChannel.value.onclose = () => {
          if (receiveChannel.value) {
            console.log(
              "Receive channel's status has changed to " + receiveChannel.value.readyState
            )
          }
        }
      }

      //设立ICE候选人, 来回协商
      localConnection.onicecandidate = (e) =>
        !e.candidate ||
        remoteConnection.addIceCandidate(e.candidate).catch((err) => {
          console.log('candidateError', err)
        })

      remoteConnection.onicecandidate = (e) =>
        !e.candidate ||
        localConnection.addIceCandidate(e.candidate).catch((err) => {
          console.log(err)
        })

      //启动连接尝试
      try {
        const offer = await localConnection.createOffer()
        localConnection.setLocalDescription(offer)
        remoteConnection.setRemoteDescription(offer)
        const answer = await remoteConnection.createAnswer()
        remoteConnection.setLocalDescription(answer)
        localConnection.setRemoteDescription(answer)
      } catch (err) {
        console.log(err)
      }
    }

    // function handleSendChannelStatusChange(e) {
    //   console.log('sendChannelStatusChange', e)
    // }

    function sendMessage() {
      sendChannel.value.send(messageInputValue.value)
      messageInputValue.value = ''
    }
    function createRoom() {
      socket.emit('createRoomMessage', 1111, (data) => {
        console.log(data, 'data1111')
        roomList.value = data
      })
    }
    return {
      messageInputValue,
      messageInputDisabled,
      messageList,
      sendMessage,
      handleConnect,
      createRoom,
    }
  },
})
</script>
