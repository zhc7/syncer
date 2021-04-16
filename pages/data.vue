<template>
  <div>
    <h2>数据管理</h2>
    <p class="mt-3">管理你的数据</p>
    <v-divider class="mt-6"/>
    <v-row class="mt-3">
      <v-col md="9" sm="12">
        <v-card id="text" @scroll="scroll">
          <v-card-text v-text="text" />
        </v-card>
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
  name: "data1",
  data: () => ({
    text: space +space+space+space+space+space+space+space+space,
    count: 0
  }),

  methods: {
    scroll(event) {
      const ele = event.target
      if (ele.scrollTop <= 100) {
        this.text = this.count + space + this.text
        this.count += 1

      }
    }
  },

  mounted() {
    const ele = document.getElementById('text')
    ele.scrollTop = ele.scrollHeight - ele.clientHeight
  }
}
</script>

<style scoped>

#text {
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;

  overflow: scroll;

  height: 50vh;
}

</style>
