<template>
  <SettingsButton />
  <TimerButton />
  <div class="container">
    <Clock />
  </div>
</template>

<script>
import Clock from './components/Clock'
import SettingsButton from './components/SettingsButton'
import TimerButton from'./components/TimerButton'
import TimerButton from './components/TimerButton.vue'

export default {
  name: 'Time',
  components: {
    Clock,
    TimerButton,
    SettingsButton
  }
}
</script>

<style>
.container {
  /* 全屏显示 */
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  /* flexbox 居中对齐 */
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #212121;
  color: #fafafa;

  overflow: hidden;
  z-index: -1;
}
.display {
  font-size: 15rem;
  font-family: Consolas, Helvetica, sans-serif;
}
</style>
