<template lang='jade'>
  div.nav-mask
  div.navbar
    div.nav-content
      ul.nav-menu
        li.home
          a.i-link(v-link='index')
            span 主站
        li.hbili
          a.i-link
            span 画友
        li.gbili
          a.i-link
            span 游戏中心
        li.live
          a.i-link
            span 直播
        li.b-zb
          a.i-link
            span 周边
        li.bml
          a.i-link
            span BML
      ul.nav-user
        li.user
          div.user-content
            img(src='../assets/user.jpg').user-ava-lit
        li.i-msg
          div.i-msg-content
            span.i-msg-name 消息
        li.i-fav
          div.i-fav-content
            span.i-fav-name 收藏
        li.i-history
          div.i-history-content
            span.i-history-name 历史
        li.i-upload
          div.i-upload-content
            span.i-upload-name 投稿
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  .navbar{
    width: 100%;
    position: absolute;
    top:0;
    height:42px;
    z-index: 2;
  }

  .nav-content{
    width: 990px;
    margin: 0 auto 0 auto;
  }

  .nav-menu,.nav-user{
    height: 100%;
    line-height: 42px;
    margin: 0;
    padding: 0;
    li{
      font-size: 12px;
      float: left;
      padding: 0 0 0 20px;
      height: 42px;
      line-height: 42px;
      a:hover{
        background: rgba(255,255,255,0.22)
      }
    }
    .home{
      background: url(../assets/icons.png) no-repeat -910px -74px;
      width: 52px;
      box-sizing: border-box;
      padding-left: -5px;
      span{
        margin: 0 0 0 7px;
      }
    }
  }

  .nav-user{
    float: right;
    .i-upload{
      background:url(../assets/b-post.png) center center no-repeat;
      width: 58px;
      height: 48px;
      line-height: 48px;
      color: white;
      text-align: center;
      padding: 0;
      margin: 0 0 0 10px;
    }
    .user-ava-lit{
      border-radius: 100px;
      width: 36px;
      height: 36px;
      margin-top: 5px;
      &:hover{
        width: 68px;
        height: 68px;
        margin-top: 10px;
      }
    }
  }

  .nav-mask{
    width: 100%;
    position: absolute;
    top:0;
    height:42px;
    filter:alpha(opacity=40);
    background: rgba(255,255,255,0.4);
    z-index: 1;
  }
</style>
