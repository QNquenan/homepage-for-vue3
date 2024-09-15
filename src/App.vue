<template>
  <div class="bgBox" v-motion :initial="{ opacity: 0, y: 25 }" :enter="{ opacity: 1, y: 0 }" :duration="1000">
    <img src="https://i.p-i.vip/43/20240915-66e6e5abe3e97.webp" alt="">
  </div>

  <div class="bgGrid">
    <div class="Grid" v-motion :initial="{ opacity: 0, y: -25 }" :enter="{ opacity: 1, y: 0 }" :duration="1000">
      <div class="mask"></div>
      <div class="itemGrid-row" v-for="i in gridRows" :key="i">
        <div class="itemGrid-cols" v-for="j in gridCols" :key="j"></div>
      </div>
    </div>
  </div>

  <div class="main" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1 }" :duration="1000">
    <div class="info">
      <div class="header">
        <img src="https://i.p-i.vip/43/20240913-66e403f2331ec.webp" alt="">
      </div>

      <div class="infoText">
        <h1>Hi,</h1>
        <h1>I'm <span class="qn">鹊楠</span></h1>
      </div>
    </div>

    <div class="typewriter">
      <i class="iconfont icon-baojiaquotation2"></i>
      <VueTyped :strings="typingTexts" :startDelay="300" :typeSpeed="100" :backSpeed="30" :loop="true"
        :showCursor="true">
      </VueTyped>
      <i class="iconfont icon-baojiaquotation"></i>
    </div>

    <div class="btns">
      <vs-button type="gradient" v-for="i in btnList" :key="i.animate" :color="i.color" animation-type="scale"
        :href="i.href" blank>
        <i :class="`iconfont ${i.icon}`"></i>

        <template #animate>
          {{ i.animate }}
        </template>
      </vs-button>

      <vs-button color="#457B9D" animation-type="scale" @click="active = true">
        <i class="iconfont icon-guanyu"></i>

        <template #animate>
          关于
        </template>
      </vs-button>
    </div>
  </div>

  <div class="footer">
    By Quenan | ©2024
  </div>

  <vs-dialog overlay-blur width="550px" not-center v-model="active">
    <template #header>
      <h2 class="not-margin">
        关于本站
      </h2>
    </template>

    <div class="con-content">

      <vs-alert color="#FE8599" type="gradient" v-model:hidden-content="techHidden">
        <template #title>技术栈</template>
        <p>本站基于以下技术搭建和以下服务商部署</p>

        <vs-avatar-group class="aboutAva" float max="8">

          <vs-tooltip placement="top" v-for="i in avaters" :key="i.content">
            <vs-avatar :color="i.color">
              <i :class="`iconfont ${i.icon}`"></i>
            </vs-avatar>

            <template #content>{{ i.content }}</template>
          </vs-tooltip>

          <vs-tooltip placement="top">
            <vs-avatar color="#FF6D1A">
              初
            </vs-avatar>

            <template #content>初七云cdn</template>
          </vs-tooltip>

        </vs-avatar-group>
      </vs-alert>

      <vs-alert color="#00BCD4" type="gradient" v-model:hidden-content="aboutHidden">
        <template #title>关于项目</template>

        <p>你可以从这里访问 <b>我的博客、GitHub、哔哩哔哩、网易云歌单</b> 以及给我发 <b>邮件</b> ！</p>
        <p>本项目借鉴了
          <b><a href="https://pzj.us.kg/">pzjawa</a></b> 、
          <b><a href="https://www.liushen.fun/sites/">清羽飞扬</a></b>
          等主页，感谢他们awa
        </p>
        <p>项目已经开源：</p>
        <p><a href="https://github.com/QNquenan/homepage-for-vue3">https://github.com/QNquenan/homepage-for-vue3</a></p>
      </vs-alert>
    </div>

    <template #footer>
      <div class="con-footer">
        <vs-button color="#fe8599" @click="versions" type="border">
          当前版本
        </vs-button>
        <vs-button color="#fe8599" @click="active = false">
          知道啦
        </vs-button>
      </div>
    </template>
  </vs-dialog>
</template>

<script>
import { VsNotification } from 'vuesax-alpha'

export default {
  data() {
    return {
      techHidden: true,
      aboutHidden: true,
      typingTexts: [
        "你好鸭，欢迎来到我的主页！",
        "彼方尚有荣光在，世界不止眼前的苟且，还有诗和远方",
        "累了可以在我这里歇歇脚嗷",
        "May you happy every day",
      ],
      btnList: [
        {
          icon: 'icon-wodeboke',
          animate: '博客',
          color: '#fe8599',
          href: 'https://blog.quenan.love'
        },
        {
          icon: 'icon-github',
          animate: 'Github',
          color: '#000',
          href: 'https://github.com/QNquenan'
        },
        {
          icon: 'icon-bilibili',
          animate: 'BiliBili',
          color: '#0BA6D8',
          href: 'https://space.bilibili.com/495882959'
        },
        {
          icon: 'icon-youjian1',
          animate: 'E-mail',
          color: '#FACB1E',
          href: 'mailto:qn2987271942@outlook.com'
        },
        {
          icon: 'icon-wangyiyunyinle1',
          animate: '网易云',
          color: '#D81E06',
          href: 'https://music.163.com/#/playlist?id=2696501847&creatorId=1785635020'
        },
      ],
      avaters: [
        {
          color: '#43B884',
          icon: 'icon-vue',
          content: 'Vue3'
        },
        {
          color: '#46C93A',
          icon: 'icon-vuesax-linear-vuesax',
          content: 'Vuesax for Vue3'
        },
        {
          color: '#1FD0ED',
          icon: 'icon-less',
          content: 'Less'
        },
        {
          color: '#FFBA00',
          icon: 'icon-vite',
          content: 'Vite'
        },
        {
          color: '#000',
          icon: 'icon-vercel',
          content: 'Vercel'
        },
        {
          color: '#000',
          icon: 'icon-github',
          content: 'Github'
        }
      ],
      upTime: '2024-09-16',
      version: 'beta2',
      gridRows: 9,
      gridCols: 5,
      active: false
    }
  },
  methods: {
    versions() {
      VsNotification({
        icon: '<i class="iconfont icon-guanyu"></i>',
        progressAuto: true,
        position: 'top-center',
        title: '当前的版本',
        content: `现在是 ${this.upTime} 更新的 ${this.version}`
      })
    }
  }
}
</script>

<style lang="less">
@import url(//at.alicdn.com/t/c/font_4685493_qjuqd6re1.css); // 阿里巴巴图标库
@import url(https://fonts.googleapis.cn/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap); // 谷歌字体库

* {
  margin: 0;
  padding: 0;
  font-family: JetBrains Mono !important;
  border: none;

  .vs-button {
    outline: none !important;
  }
}

@media screen and (max-width: 762px) {
  .bgBox {
    width: 50% !important;
    right: 62vw !important;
    z-index: 0 !important;
  }

  #app {
    margin: 0;
    padding: 0;
    max-width: none;

    .bgGrid {
      .Grid {
        .itemGrid-row {
          .itemGrid-cols {
            width: 60px !important;
            height: 60px !important;
          }
        }

        .mask {
          height: 110% !important;
        }
      }
    }

    .main {
      background-size: cover !important;
      background-position: -20em !important;

      .typewriter {
        top: 60dvh !important;
      }

      .info {
        flex-direction: column;
        align-items: center;

        .infoText {
          font-size: 1em !important
        }

        .header {
          margin: 0 0 1em 0;
        }
      }
    }
  }
}

.vs-dialog {

  .vs-alert--gradient {
    margin: 1em 0;

    .aboutAva {
      display: flex;
      justify-content: space-evenly !important;
      margin-top: 1em
    }
  }


  .vs-dialog-original {
    .vs-dialog__header {
      padding: 20px 16px !important;
    }
  }

  .vs-dialog__header {
    padding: 20px 16px;
  }

  .vs-dialog__content {
    .vs-alert__content--text {
      padding-top: 0;
    }

    p {
      margin: 5px 0;
    }

    a {
      /* 清除超链接样式 */
      text-decoration: none;
      /* 更改初始颜色 */
      color: #000;
      /* 设置过渡动画 */
      transition: all 0.3s;
      /* 设置相对定位 */
      position: relative;
    }

    a::before {
      /* 设置一个填充让伪元素正常渲染 */
      content: " ";
      /* 设置绝对定位 */
      position: absolute;
      /* 设置底部距离 */
      bottom: -3px;
      /* 设置宽度 */
      width: 100%;
      /* 设置高度 */
      height: 2px;
      /* 设置过渡动画 */
      transition: all 0.3s;
      /* 设置水平方向缩放比例 */
      transform: scaleX(0);
      /* 设置背景 */
      background: rgb(255, 133, 153);
    }

    a:hover {
      /* 设置鼠标接触时颜色 */
      color: rgb(255, 133, 153);
    }

    a:hover::before {
      /* 设置比例为1，使其显示 */
      transform: scaleX(1);
    }
  }

  .vs-dialog__footer {
    margin: 10px 0 0;

    .con-footer {
      display: flex;
      justify-content: flex-end;
    }
  }
}

.bgBox {
  width: 600px;
  z-index: 1;
  position: fixed;
  bottom: 0;
  right: 65vw;
}

#app {
  margin: 0;
  padding: 0;
  max-width: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .footer {
    position: absolute;
    bottom: 1em;
    width: 100%;
    text-align: center;
    text-shadow: 0 0 10px #fff;
  }

  .bgGrid {

    .Grid {
      display: flex;
      justify-content: flex-end;
      position: absolute;
      right: 0;
      top: 0;

      .mask {
        width: 100%;
        height: 100%;
        position: absolute;
        background-image: linear-gradient(to top right, #fff 50%,
            rgb(255 255 255 / 0) 100%);
      }

      .itemGrid-row {
        .itemGrid-cols {
          width: 88px;
          height: 88px;
          border-left: 1px dashed;
          border-bottom: 1px dashed;
        }
      }
    }
  }

  .main {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .btns {
      display: flex;
      margin-top: 50px;

      .vs-button {
        width: 3.5em;
        height: 3.5em;
      }

      i {
        font-size: 1.8em;
      }
    }

    .typewriter {
      display: flex;
      margin-bottom: 2em;
      top: 53vh;
      position: absolute;
      text-align: center;

      i {
        margin: 0 1em;
      }
    }

    .info {
      display: flex;
      margin-bottom: 2em;

      .infoText {
        margin-left: 2em;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        font-size: 1.3em;

        .qn {
          position: relative;

          &::before {
            position: absolute;
            border-radius: 5px;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            z-index: -1;
            content: '';
            background: #fe859994;
            height: 30%;
            width: 110%;
            display: inline-block;
          }
        }
      }

      .header {
        width: 9em;
        height: 9em;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          background: green;
          width: 1.5em;
          height: 1.5em;
          border-radius: 50%;
          border: 3px solid #ffffff;
          bottom: 0;
          right: 20px;
        }

        img {
          border-radius: 50%;
          width: 100%;
          height: 100%;
          border: 3px #fff solid;
          box-shadow: 0 0 15px 6px #ffb3b3;
        }
      }
    }
  }
}
</style>
