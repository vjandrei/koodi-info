<template>
 <div class="w-full">
     <div class="bg-white shadow-lg rounded-lg">
         <div class="flex justify-between flex-wrap">
              
              <div>1</div>

              <div class="">
                <a @click="pause()" title="Play" :class="[ paused ? 'icon-play3' : 'icon-pause2' ]">Play</a>
                <a @click="stop()" title="Stop" class="icon-stop2" >Stop</a>
              </div>

              <div>
                <span :class="`__playback-time-current`">{{currentTime}}</span>:
                      <span :class="`__playback-time-total`">{{duration}}</span>
              </div>

              
              <div class="w-full">
                <div v-on:click="setPosition" :class="`__playback-time-wrapper`" title="Time played : Total time"></div>
                <div v-bind:style="progressStyle" :class="`__playback-time-indicator`"></div>
                <div :class="`__extern-wrapper w-full`">
                    <a @click="download()" class="icon-download"></a>
                    <a @click="changeLoop()" :class="[ innerLoop ? 'icon-spinner10' : 'icon-spinner11']"></a>
                    <a @click="mute()" :class="[isMuted ? 'icon-volume-mute2': 'icon-volume-high' ]" title="Mute"></a>
                    <a v-on:mouseover="toggleVolume()" class="volume-toggle icon-paragraph-justify" title="Volume">
                    <input orient="vertical" v-model.lazy="volumeValue" v-on:change="updateVolume()" v-show="hideVolumeSlider" type="range" min="0" max="100" class="volume-slider"/>
                    </a>
                </div>
                <audio v-bind:id="playerId" :loop="innerLoop" ref="audiofile" :src="file" preload="auto" style="display:none;"></audio>
              </div>
            </div>
         </div>
     </div>
  </div>
</template>

<script>
export const baseVolumeValue = 7.5
let audio, uuid

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
      progressStyle: '',
      currentTime: '00:00',
      uuid: '0',
      innerLoop: undefined,
      audio: undefined,
      totalDuration: 0,
      hideVolumeSlider: false,
      volumeValue: baseVolumeValue
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
      this.progressStyle = `width:${percentage}%;`
      this.currentTime = convertTimeHHMMSS(currTime)
    },
    _handlePlayPause: function (e) {
      if (e.type === 'pause' && this.playing === false) {
        this.progressStyle = `width:0%;`
        this.currentTime = '00:00'
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


<style lang="scss">
 $prefixCls: "vue-sound";

      a {
        cursor: pointer;
        display: inline-block;
        vertical-align: middle;
      }
      .__extern-wrapper {
        display: inline-block;
        margin-left: 10px;
        > a {
          margin-right: 5px;
          vertical-align: 0;
        }
        .volume-toggle {
          position: relative;
          .volume-slider {
            cursor: pointer;
            position: absolute;
            top: 0;
            width: 80px;
            left: 24px;
          }
        } 
      }
      .__playback-time-wrapper {
        background: transparent;
        position: relative;
        width: 100%;
        padding: 16px 0;
        display: inline-block;
        background: #e0dcd7;
        height: 3px;
        cursor: pointer;
        font-size: 14px;
        vertical-align: middle;
        .__playback-time-separator::after {
            content:' : ';
        }
        .__playback-time-total {
        }
        .__playback-time-indicator {
            background: #5099ff;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
        }
      }
</style>