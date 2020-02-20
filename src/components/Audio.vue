<template>
<div class="bg-gray-100 px-6 py-2 rounded-lg">
  <div class="flex flex-row py-2">
    <div class="flex items-center">
      <div @click="pause()" v-if="paused" class="w-16 h-10 flex justify-center items-center bg-gray-400 rounded-full">
        <svg class="w-4 h-4 text-teal-800" aria-hidden="true" data-prefix="fas" data-icon="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/>
        </svg>
      </div>
      <div @click="pause()" v-else class="w-16 h-10 flex justify-center items-center bg-gray-400 rounded-full">
        <svg class="w-4 h-4 text-teal-800" aria-hidden="true" data-prefix="fas" data-icon="pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"/>
        </svg>
      </div>
    </div>
    <div class="flex flex1 items-center px-4">
      <p class="">{{currentTime}} </p> 
      <span class="mx-2">-</span>
      <p class="">{{duration}}</p>
    </div>
    <div class="w-full flex items-center cursor-pointer relative">
        <div v-on:click="setPosition" id="setPlayPosition" class="relative w-full h-full cursor-pointer z-20"></div>
        <div v-bind:style="progressStyle" class="__playback-time-indicator bg-teal-800 z-30"></div>
        <div class="absolute w-full h-2 bg-gray-400 z-10 rounded-l rounded-r"></div>
        <audio v-bind:id="playerId" :loop="innerLoop" ref="audiofile" :src="file" preload="auto" style="display:none;"></audio>
    </div>
    <div class="flex items-center">
      <div @click="speed()" v-if="accelerate" class="text-sm ml-5 cursor-pointer leading-tight ">
        <svg class="w-6 h-6 text-teal-800" aria-hidden="true" data-prefix="fas" data-icon="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path fill="currentColor" d="M445.54 487.52L352 337.85V272h7.35c31.29 0 56.65-25.36 56.65-56.65a56.66 56.66 0 00-23.72-46.1l-48.65-34.75c-1.1-.54-2.27-.74-3.38-1.21 7.8-12.49 15.21-29.76 20.54-49.66 11.32-42.24 9.08-79.55-5-83.32-14.08-3.77-34.67 27.41-45.99 69.66-2.72 10.15-4.61 19.97-5.79 29.15-1.18-9.18-3.07-19-5.79-29.15-11.33-42.25-31.92-73.43-46-69.66s-16.32 41.08-5 83.32c6.94 25.9 17.37 47.54 27.64 59.62-9.11 7.93-15.9 18.5-18.03 31.55-.54 3.32-.82 6.72-.82 10.19V256h-12.8c-83.19 0-152.93 56.77-173.12 133.61C63.44 386.15 56.01 384 48 384c-26.51 0-48 21.49-48 48s21.49 48 48 48c7.93 0 15.3-2.11 21.89-5.51C79.98 496.58 102.13 512 128 512h144c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-22.59l74.35-60.18 72.91 116.66a15.99 15.99 0 0013.57 7.52h37.74c12.56 0 20.22-13.82 13.56-24.48zM336 208c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"/>
        </svg>
      </div>
      <div @click="speed()" v-else class="text-sm ml-5 cursor-pointer leading-tight ">
        <svg class="w-6 h-6 text-teal-800" aria-hidden="true" data-prefix="fas" data-icon="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path fill="currentColor" d="M135.52 412.67a15.99 15.99 0 00-7.52 13.57v37.74c0 12.57 13.82 20.23 24.48 13.57l66.69-39.87-47.85-47.85-35.8 22.84zm416.76-195.42l-56.42-34.62c-.06-13.95-2.28-30.77-7.07-48.67-11.32-42.24-31.91-73.43-45.99-69.66-14.08 3.77-16.32 41.08-5 83.32.65 2.44 1.44 4.7 2.15 7.06-4.89-6.08-10.23-12.23-16.31-18.32-30.93-30.92-64.35-47.64-74.66-37.33s6.4 43.73 37.33 74.66c12.67 12.67 25.67 22.77 37.42 29.78-3.14 5.76-5.71 12.06-6.89 19.32-.49 3.03-.71 6.15-.75 9.31C364.55 195.11 261.59 128 192 128c-52.08 0-85.21 28.24-104.72 54.09-1.77-2.7-2.96-5.66-5.33-8.03-18.75-18.75-49.14-18.75-67.88 0-18.74 18.74-18.74 49.14 0 67.88 16.4 16.39 41.29 17.57 59.92 5.29l191.4 191.4c6 6 14.14 9.37 22.63 9.37h144c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-96v-55.59c0-35.53-23.86-67.16-58.02-76.91l-42.38-12.11c-8.5-2.44-13.42-11.3-11-19.78 2.44-8.52 11.41-13.33 19.78-11l42.38 12.11C318.59 234.38 352 278.66 352 328.41V352l64-32h103.35c31.29 0 56.65-25.36 56.65-56.65a56.66 56.66 0 00-23.72-46.1zM496 256c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"/>
        </svg>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export const baseVolumeValue = 100

export const prefixCls = 'vue-sound'

export const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx'.replace(/[xy]/g, function (c) {
    let v, r
    r = Math.random() * 16 | 0; v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

export const convertTimeHHMMSS = (val) => {
  let hhmmss = new Date(val * 1000).toISOString().substr(11, 8)
  return (hhmmss.indexOf('00:') === 0) ? hhmmss.substr(3) : hhmmss
}

let audio, uuid

export default {
  name: 'vue-audio',
  props: {
    file: {
      type: String,
      default: null
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    duration: function () {
      return this.audio ? convertTimeHHMMSS(this.totalDuration) : ''
    },
    playerId: function () {
      return 'player-' + this.uuid
    },
    classes: function () {
      return prefixCls
    }
  },
  data () {
    return {
      isMuted: false,
      loaded: false,
      playing: false,
      paused: true,
      accelerate: false,
      progressStyle: '',
      currentTime: '00:00',
      uuid: '0',
      innerLoop: undefined,
      audio: undefined,
      totalDuration: 0,
      hideVolumeSlider: false,
      volumeValue: baseVolumeValue,
      isOpen: false
    }
  },
  methods: {
    setPosition: function name (e) {
      let tag = e.target
      if (this.paused) return

      if (e.target.tagName === 'SPAN') {
        return
      }
      const pos = tag.getBoundingClientRect()
      const seekPos = (e.clientX - pos.left) / pos.width
      this.audio.currentTime = parseInt(this.audio.duration * seekPos)
    },
    updateVolume: function () {
      this.hideVolumeSlider = false
      this.audio.volume = this.volumeValue / 100
      if (this.volumeValue / 100 > 0) {
        this.isMuted = this.audio.muted = false
      }

      if (this.volumeValue / 100 === 0) {
        this.isMuted = this.audio.muted = true
      }
    },
    toggleVolume: function () {
      this.hideVolumeSlider = true
    },
    stop: function () {
      this.playing = false
      this.paused = true
      this.audio.pause()
      this.audio.currentTime = 0
    },
    play: function () {
      if (this.playing && !this.paused) return
      this.paused = false
      this.audio.play()
      this.playing = true
    },
    pause: function () {
      this.paused = !this.paused;
      (this.paused) ? this.audio.pause() : this.audio.play()
    },
    changeLoop: function () {
      this.innerLoop = !this.innerLoop
    },
    download: function () {
      this.stop()
      window.open(this.file, 'download')
    },
    mute: function () {
      this.isMuted = !this.isMuted
      this.audio.muted = this.isMuted
      this.volumeValue = this.isMuted ? 0 : 75
    },
    speed: function () {
      this.accelerate = !this.accelerate
      this.audio.playbackRate = 1.5;
      (this.accelerate) ? this.accelerate : this.audio.playbackRate = 1;
    },
    _handleLoaded: function () {
      if (this.audio.readyState >= 2) {
        if (this.autoPlay) this.play()

        this.loaded = true
        this.totalDuration = parseInt(this.audio.duration)
      } else {
        throw new Error('Failed to load sound file')
      }
    },
    _handlePlayingUI: function (e) {
      let currTime = parseInt(this.audio.currentTime)
      let percentage = parseInt((currTime / this.totalDuration) * 100)
      this.progressStyle = `left:${percentage}%;`
      this.currentTime = convertTimeHHMMSS(currTime)
    },
    _handlePlayPause: function (e) {
      if (e.type === 'pause' && this.playing === false) {
        let currTime = parseInt(this.audio.currentTime)
        let percentage = parseInt((currTime / this.totalDuration) * 100)
        this.progressStyle = `left:${percentage}%;`
        this.currentTime = convertTimeHHMMSS(currTime)
        this.paused = true
      }
    },
    init: function () {
      this.audio.addEventListener('timeupdate', this._handlePlayingUI)
      this.audio.addEventListener('loadeddata', this._handleLoaded)
      this.audio.addEventListener('pause', this._handlePlayPause)
      this.audio.addEventListener('play', this._handlePlayPause)
    },
    getAudio: function () {
      return this.$el.querySelectorAll('audio')[0]
    }
  },
  mounted: function () {
    this.uuid = generateUUID()
    this.audio = this.getAudio()
    this.innerLoop = this.loop
    this.init()
  },
  beforeDestroy: function () {
    this.audio.removeEventListener('timeupdate', this._handlePlayingUI)
    this.audio.removeEventListener('loadeddata', this._handleLoaded)
    this.audio.removeEventListener('pause', this._handlePlayPause)
    this.audio.removeEventListener('play', this._handlePlayPause)
  }
  
};
</script>


<style lang="postcss">
.__playback-time-indicator {
  position: absolute;
  top: 12px;
  left: 0;
  bottom: 0;
  width: 16px;
  height: 16px;
  border-radius: 100%;
}   
#setPlayPosition{

}  
</style>