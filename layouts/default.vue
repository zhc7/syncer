<template>
  <v-app id="inspire">
    <v-app-bar app color="blue">
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-switch
        v-model="darkSwitch"
        :label="darkSwitch ? 'dark' : 'light'"
      ></v-switch>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        color="primary lighten-3"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
        ></v-avatar>

        <div>Key: {{ keyName }}</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text, to] in links"
          :key="icon"
          @click="redirect(to)"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    darkSwitch: false,
    cards: ['Today', 'Yesterday'],
    drawer: false,
    links: [
      ['mdi-key-chain', '秘钥管理', "/key"],
      ['mdi-devices', '设备管理', "/device"],
      ['mdi-file-document-multiple-outline', '数据管理', "/data"],
      ['mdi-alert-octagon', 'Spam', "spam"],
    ],
  }),

  computed: {
    keyName() {
      return this.$store.state.selectedKey;
    }
  },

  watch: {
    darkSwitch: function(n, o) {
      this.$vuetify.theme.dark = this.darkSwitch;
    }
  },

  methods: {
    redirect: function (location) {
      this.$router.push(location)
    }
  },

  mounted() {
    /*
    window.data = {}; // for global data storage
    window.data.selectedKey = 1; // WIP
    this.keyName = window.data.selectedKey;

     */
  }
}
</script>
