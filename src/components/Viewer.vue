<template>
  <!-- Necessary for use as root node in Three.js appendChild function  -->
  <div id="viewer"></div>
</template>

<script>
import ViewerJS from './classes/viewer.js'

export default {
  name: 'Viewer',
  componentes: {
    ViewerJS
  },
  data() {
    return {
      width: 100,
      height: 100,
      viewer: null
    }
  },
  mounted() {
    this.initializeViewer();
    this.addViewer();
  },
  methods: {
    initializeViewer() {
      this.viewer = new ViewerJS(window.innerWidth-30, window.innerHeight);
    },
    addViewer() {
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
