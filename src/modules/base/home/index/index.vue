<template>
  <t-page :load="load">
    <t-header slot="top" :options="options"></t-header>
    <t-group title="button">
      <t-button class="mt" size="big">大按钮</t-button>
      <t-button class="mt" plain size="big">大按钮(反色)</t-button>
      <t-button class="mt">普通按钮</t-button>
      <t-button class="mt" disabled>普通按钮(禁用)</t-button>
      <t-button class="mt" size="small">小按钮</t-button>
      <t-button class="mt" scheme="demo" size="small">自定义皮肤</t-button>
      <t-button class="mt" scheme="demo" plain size="small">自定义皮肤(反色)</t-button>
      <t-button class="mt" scheme="demo" disabled size="small">自定义皮肤(禁用)</t-button>
      <t-button class="mt" scheme="demo" disabled plain size="small">自定义皮肤(反色)(禁用)</t-button>
    </t-group>
    <t-group title="switch">
      <t-cell title="普通开关">
        <t-switch v-model="tswitch"></t-switch>
      </t-cell>
      <t-cell title="radio开关">
        <t-switch v-model="tswitch" type="radio"></t-switch>
      </t-cell>
    </t-group>
    <t-group title="toast">
      <t-cell title="vue用法(持续1秒)" is-link @click="toast1 = true"></t-cell>
      <t-cell title="vue用法(永久显示&点击背景关闭)" is-link @click="toast5 = true"></t-cell>
      <t-cell title="vue用法(显示遮罩)" is-link @click="toast2 = true"></t-cell>
      <t-cell title="vue用法(有图标)" is-link @click="toast3 = true"></t-cell>
      <t-cell title="vue用法(有图片)" is-link @click="toast4 = true"></t-cell>
      <t-cell title="plugin用法" is-link @click="toast"></t-cell>
    </t-group>
    <t-group title="dialog">
      <t-cell title="vue用法" is-link @click="dialog1 = true"></t-cell>
      <t-cell title="vue用法(无遮罩)" is-link @click="dialog2 = true"></t-cell>
      <t-cell title="vue用法(点击背景关闭dialog)" is-link @click="dialog3 = true"></t-cell>
      <t-cell title="vue用法(自定义按钮)" is-link @click="dialog4 = true"></t-cell>
      <t-cell title="plugin用法" is-link @click="dialog"></t-cell>
    </t-group>
    <t-toast v-model="toast1" duration="1000" text="turboUI"></t-toast>
    <t-toast v-model="toast2" mask text="有遮罩"></t-toast>
    <t-toast v-model="toast3" mask icon="icon-QRcode" text="有图标"></t-toast>
    <t-toast v-model="toast4" mask :src="toastSrc" text="有图片"></t-toast>
    <t-toast v-model="toast5" mask :duration="false" tap-hide :src="toastSrc"></t-toast>
    <t-toast v-model="loading" mask :duration="false" tap-hide :src="loadSrc"></t-toast>
    <t-dialog v-model="dialog1" title="dialog演示" text="演示一下"></t-dialog>
    <t-dialog v-model="dialog2" title="dialog演示" text="演示一下" :mask="false"></t-dialog>
    <t-dialog v-model="dialog3" title="dialog演示" text="演示一下" tap-hide></t-dialog>
    <t-dialog v-model="dialog4" title="dialog演示" text="演示一下" :buttons="dialogbtn" :extButtons="extButtons"></t-dialog>
  </t-page>
</template>
<script>
import {tSwitch, tToast, tDialog} from 'vuti'
export default {
  components: {
    tSwitch,
    tToast,
    tDialog
  },
  data() {
    return {
      dialogbtn: [
        {
          text: '取消'
        },
        {
          text: '确认',
          style: 'primary'
        }
      ],
      extButtons: [
        {
          text: 'ojbk',
          style: 'primary'
        },
        {
          text: '清楚地理位置'
        }
      ],
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      loading: true,
      load: true,
      toast1: false,
      toast2: false,
      toast3: false,
      toast5: false,
      toast4: false,
      toastSrc: require('@a/turbo.png'),
      loadSrc: require('../../../../../node_modules/vuti/common/svg/fire.svg'),
      tswitch: false,
      options: {
        title: '测试',
        right: [
          {
            type: 'icon',
            value: 'icon-user'
          },
          {
            type: 'icon',
            value: 'icon-QRcode'
          }
        ]
      }
    }
  },
  methods: {
    toast() {
      this.$toast({
        text: 'plugin用法',
        src: this.toastSrc
      })
    },
    dialog() {
      this.$dialog({
        title: 'plugin用法',
        text: '文本文本文本文本文本文本文本文本文本文本文本文本',
        src: this.toastSrc
      })
    }
  },
  mounted() {
    setTimeout(() => {
      this.load = false
      this.loading = false
    }, 2000)
  }
}
</script>
<style lang="scss" scoped>
.mt{
  margin-top: 10px;
}
.vuti-button[scheme=demo]{
  --main-color: #ff4d1d;
  --main-color-anti: white;
}
</style>
