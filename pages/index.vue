<template>
  <b-container fluid>
    <div v-if="!image" class="mt-3 dropbox">
      <input type="file" @change="onFileChange" class="input-file">
      <p>Drag your file here to begin or click to browse</p>
    </div>
    <div v-else class="mt-3">
      <b-container class="file-container">
        <img :src="image" />
        <b-button variant="outline-primary shadow-none" @click="removeImage">Remove image</b-button>
      </b-container>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      image: ''
    }
  },

  methods: {
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length)
        return;
      this.createImage(files[0])
    },

    createImage (file) {
      var reader = new FileReader()
      reader.onload = (e) => {
        this.image = e.target.result
      };
      reader.readAsDataURL(file)
    },

    removeImage () {
      this.image = ''
    }
  }
}
</script>

<style scoped>
.dropbox {
  outline: 4px dashed;
  outline-offset: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.2em;
}
.input-file {
  opacity: 0;
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}
.file-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
</style>
