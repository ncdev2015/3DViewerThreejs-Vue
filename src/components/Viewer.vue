<template>  
  <div id="viewer"></div>
</template>

<script>
import Viewer from './classes/viewer.js'

export default {
  name: 'Viewer',
  componentes: {
  },
  data() {
    return {      
      viewer: null
    }
  },
  mounted() {
    this.initViewer();
    this.appendViewer();
  },
  methods: {
    initViewer() {
      this.viewer = new Viewer(window.innerWidth, window.innerHeight);
    },
    appendViewer() {
      document.getElementById("viewer").appendChild(this.viewer.renderer.domElement);
    }
  },  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #viewer {
    float: left;
  }
</style>
