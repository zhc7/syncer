<template>
  <div>
    <h2>设备管理</h2>
    <p class="mt-3">管理你的设备</p>
    <v-divider class="mt-6"></v-divider>
    <v-row>
      <v-col md="6" sm="12" v-for="device in devices" :key="device.id">
        <v-card class="ma-3">
          <v-card-title>

            <v-icon class="ma-1">{{ icons[device.os] }}</v-icon>

            {{ device.name }}

            <v-btn icon color="green lighten-1" class="ml-2">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>

            <v-spacer></v-spacer>

            <small>
              <v-chip :color="device.trust?'green':'orange'">
                <v-icon></v-icon>
                <v-icon class="mr-2">
                  {{ device.trust ? "mdi-check" : "mdi-alert-circle-outline" }}
                </v-icon>
                {{ device.trust ? "trusted" : "untrusted"}}
              </v-chip>
            </small>

          </v-card-title>
          <v-card-text>
            {{ device.description }}
          </v-card-text>
          <v-subheader>
            <v-btn icon class="ma-1" color="blue">
              <v-icon>mdi-sync</v-icon>
            </v-btn>
            <v-btn icon class="ma-1" color="blue">
              <v-icon>mdi-upload</v-icon>
            </v-btn>
            <v-btn icon class="ma-1" color="blue">
              <v-icon>mdi-download</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            created on: someday
          </v-subheader>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "device",
  data: () => ({
    devices: [
      {id: 0, name: "device 0", trust: true, os: "PC", description: "示例0"},
      {id: 1, name: "device 1", trust: true, os: "Android", description: "示例1"},
      {id: 2, name: "device 2", trust: false, os: "Mac", description: "示例2"},

    ],

    icons: {
      PC: "mdi-microsoft-windows",
      Mac: "mdi-apple",
      Android: "mdi-android",
      iOS: "mdi-apple-ios",
    }
  })
}
</script>

<style scoped>

</style>
