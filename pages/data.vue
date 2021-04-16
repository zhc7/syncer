<template>
  <div>
    <h2>数据管理</h2>
    <p class="mt-3">管理你的数据</p>
    <v-divider class="mt-6"/>
    <v-row class="mt-3">
      <v-col md="9" sm="12">
        <v-card>
          <v-card-text>
            <pre id="text" ref="text" v-text="text" @scroll="throttledScroll" />
          </v-card-text>
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
import { throttle } from 'lodash'

const space = "Lorem ipsum dolor sit amet, et eam possit similique, nam no elit feugiat argumentum. Id sea" +
" rebum facilisi signiferumque, aliquip nostrud ad nec. In alii delicata pri, doming principes sed no. " +
"Ceteros mediocritatem ei eam. Soluta nonumes an mea, errem dissentias te qui. Ut justo deserunt has.\n\n\n"

export default {
  name: "data1",
  data: () => ({
    text: '',
    count: 0
  }),

  methods: {
    scroll() {
      if (this.$refs.text.scrollTop <= 100) {
        this.loadNextTrunk()
      }
    },
    loadNextTrunk(lastHeight) {
      return new Promise((resolve) => {
        const ele = this.$refs.text
        lastHeight = lastHeight || ele.scrollHeight
        const lastScroll = ele.scrollHeight - ele.scrollTop

        const load = () => {
          this.text = this.count + space + this.text
          this.count += 1
          this.$nextTick(() => {
            ele.scrollTop = ele.scrollHeight - lastScroll
            this.$nextTick(() => {
              if (ele.scrollHeight - lastHeight <= ele.clientHeight) {
                load()
              } else resolve()
            })
          })
        }
        load()
      })
    }
  },

  mounted() {
    this.loadNextTrunk().then(() => {
      const ele = this.$refs.text
      ele.scrollTop = ele.scrollHeight - ele.clientHeight
    })
  },

  created() {
    this.throttledScroll = throttle(this.scroll, 100)
  }
}
</script>

<style scoped>

#text {
  overflow-y: scroll;
  height: 50vh;
}

</style>
