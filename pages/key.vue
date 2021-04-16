<template>
  <div>
    <h2>密钥管理</h2>
    <p class="mt-3">管理你的秘钥</p>
    <v-divider class="mt-6"/>
    <v-card class="mt-3">
      <v-list>
        <v-list-item-group v-model="selectedKey" active-class="activated">
          <template v-for="key in keys">
            <v-list-item
              :key="key"
            >
              <v-list-item-icon><v-icon>mdi-key</v-icon></v-list-item-icon>
              <v-list-item-content>{{ key }}</v-list-item-content>
              <v-spacer></v-spacer>
              <v-btn icon @click="edit(key)"><v-icon color="green lighten-1">mdi-pencil</v-icon></v-btn>
              <v-btn icon @click="destroy(key)"><v-icon color="red">mdi-trash-can</v-icon></v-btn>


            </v-list-item>
            <v-divider></v-divider>
          </template>
        </v-list-item-group>
        <v-list-item>
          <v-btn @click="newKey()">
            <v-icon class="mr-1">mdi-plus</v-icon>
            <v-list-item-content>添加新的秘钥</v-list-item-content>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-card>
    <v-dialog v-model="destroyDia" width="500">
      <v-card>
        <v-card-title><v-icon class="mr-1" color="warning">mdi-alert</v-icon>警告</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mt-4">这是不可逆转的行为，确定要继续吗？</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error">
            确定
          </v-btn>
          <v-btn color="info" @click="destroyDia = false">
            取消
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="editDia" width="500">
      <v-card>
        <v-card-title><v-icon class="mr-1" color="green lighten-1">mdi-pencil</v-icon>编辑</v-card-title>
        <v-divider></v-divider>
        <v-form v-model="editForm" class="ml-3 mr-3">
          <template>
              <v-text-field
                label="名称"
                v-model="editName"
                :counter="15"
                :rules="editNameRule"
                required
              ></v-text-field>
              <v-textarea label="值" v-model="editValue"></v-textarea>
          </template>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error">
            确定
          </v-btn>
          <v-btn color="info" @click="editDia = false">
            取消
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="newDia" width="500">
      <v-card>
        <v-card-title>
          <v-icon class="mr-1" color="primary">mdi-plus</v-icon>
          新建
        </v-card-title>
        <v-form v-model="newForm" class="ml-3 mr-3">
          <template>
            <v-text-field
              label="名称"
              v-model="editName"
              :counter="15"
              :rules="editNameRule"
              required
            ></v-text-field>
            <v-textarea label="值" v-model="editValue"></v-textarea>
          </template>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error">
            确定
          </v-btn>
          <v-btn color="info" @click="newDia = false">
            取消
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "key",
  data: () => ({
    keys: ["key1", "key2", "key3"],
    destroyDia: false,
    editDia: false,
    editForm: false,
    editName: "",
    editNameRule: [
      v => !!v || "名字不能为空",
      v => v.length <= 15 || "名字不能超过15个字符"
    ],
    editValue: "",
    editValueRule: [
      v => !v || "值不能为空",
    ],
    newDia: false,
    newForm: false,
  }),

  computed: {
    selectedKey: {
      get: function () {
        return this.$store.state.selectedKey;
      },
      set: function (value) {
        this.$store.commit("change", value);
      }
    }
  },

  methods: {
    newKey() {
      this.newDia = true;
    },

    edit(key) {
      this.editDia = true;
    },

    destroy(key) {
      this.destroyDia = true;
    },

  },

  watch: {
  },

  mounted() {
    /*
    this.selectedKey = window.data.selectedKey;
    /* todo: 1. 从local storage初始化key列表
             2. 从local storage读取当前选中的key
     */
  }
}
</script>

<style scoped>
.activated {
  background: linear-gradient(to right, #62ecff, #dea9f8, #f6a4ca) !important;
}
</style>
