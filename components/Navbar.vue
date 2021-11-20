<template>
  <nav class="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
    <div class="container">
      <b-navbar-brand href="#" class="navbar-brand d-flex w-50 me-auto">
        <span class="h2">OCR Application</span>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" class="navbar-collapse collapse w-100" is-nav>
        <b-navbar-nav class="navbar-nav w-100 justify-content-center">
          <b-nav-item href="/">Get Started</b-nav-item>
          <b-nav-item href="/about">How To</b-nav-item>
        </b-navbar-nav>
        <ul class="nav navbar-nav ms-auto w-100 justify-content-end">
          <ColorModePicker />
        </ul>
      </b-collapse>
    </div>
  </nav>
</template>

<script>
import ColorModePicker from '@/components/ColorModePicker'

export default {
  name: 'Navbar',

  components: {
    ColorModePicker
  }
}
</script>
