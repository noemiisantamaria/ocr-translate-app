<template>
  <b-container fluid>
    <div v-if="!image" class="mt-3 dropbox">
      <input type="file" accept=".gif,.jpeg,.jpg,.pdf,.png" @change="onFileChange" class="input-file">
      <p>Drag your file here to begin or click to browse</p>
    </div>
    <div v-else class="mt-3">
      <b-container class="file-container">
        <img class="file-img-container" :src="image" />
        <b-button variant="outline-primary shadow-none" @click="removeImage">Remove</b-button>
      </b-container>
    </div>
    <b-container v-if="image" fluid class="mt-5">
      <b-row>
        <b-col sm="5">
          <b-row>
            <b-col>
              <b-form-textarea
                v-model="parsedText"
              />
            </b-col>
          </b-row>
        </b-col>
        <b-col sm="2" align-self="center">
          <b-row align-h="center">
            <b-button variant="outline-primary shadow-none" @click="translate">Translate >></b-button>
          </b-row>
        </b-col>
        <b-col sm="5">
          <b-row>
            <b-col>
              <b-form-textarea />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import OCRApi from '@/lib/ocrApi.js'

export default {
  data() {
    return {
      image: '',
      file: null,
      isOverlayRequired: true,
      lang: 'eng',
      parsedText: '',
      url: ''
    }
  },

  methods: {
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length)
        return;
      this.createImage(files[0])
      this.file = files[0]
    },

    createImage (file) {
      var reader = new FileReader()
      reader.onload = (e) => {
        this.image = e.target.result
        this.getOCRConversation()
      };
      reader.readAsDataURL(file)
    },

    getOCRConversation() {
      const formData = new FormData();
      formData.append("file", this.file)
      formData.append("language", this.lang);
      formData.append("isOverlayRequired", this.isOverlayRequired);
      OCRApi.getOCRConversation(formData)
        .then((response) => {
          const payload = response.data
          console.log(payload);
          if (!payload.IsErroredOnProcessing) {
            payload.ParsedResults.forEach(element => {
              this.parsedText += element.ParsedText
            });
          } else {
            console.log("Generic error!");
          }
        })
    },

    removeImage () {
      this.image = ''
      this.parsedText = ''
    },

    translate () {
      console.log('translate')
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
.file-img-container {
  max-width: 100%;
  height: auto;
}
.text-container {
  outline: 1px solid;
  outline-offset: -10px;
  height: 200px;
  font-size: 1.2em;
}
.ocr-text {
  outline: 4px dashed;
  outline-offset: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.2em;
}
</style>
