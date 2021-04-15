<template>
  <div>
    <h2>数据管理</h2>
    <p class="mt-3">管理你的数据</p>
    <v-divider class="mt-6"></v-divider>
    <v-row class="mt-3">
      <v-col md="9" sm="12">
        <div id="text" ref="box">
          {{ text }}
        </div>
      </v-col>
      <v-col md="3" sm="0">
        <v-card>
          <v-card-title>
            信息
          </v-card-title>
          <v-card-text>
            一些信息...
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
let space = "Lorem ipsum dolor sit amet, et eam possit similique, nam no elit feugiat argumentum. Id sea" +
" rebum facilisi signiferumque, aliquip nostrud ad nec. In alii delicata pri, doming principes sed no. " +
"Ceteros mediocritatem ei eam. Soluta nonumes an mea, errem dissentias te qui. Ut justo deserunt has.\n\n\n"

export default {
  name: "data",
  data: () => ({
    text: space +space+space+space+space+space
  }),

  mounted() {
    this.$refs.box.addEventListener("scroll", this.scroll, true)
  },

  methods: {
    scroll() {
      console.log(this.$refs.box.scrollTop);
      this.text += space;
    }
  }
}
</script>

<style scoped>

#text {
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;

  overflow: scroll;

  height: initial;
}

</style>
