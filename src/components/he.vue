<template lang='jade'>
  div.he
    div.header-content
      div.header-logo
      div.header-search
        a.rank-link
          span 排行榜
        div.header-se-input
          div.header-search-content
            form
              input(type='text')
              button.search-submit
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
.he{
  background: url(../assets/head.png) center center;
  width: 100%;
  height: 180px;
}
  .header-content{
    width: 990px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
  }

  .header-logo{
    background-image: url(../assets/logo.png);
    width:220px;
    height:105px;
    float: left;
    margin:55px 0 0 24px;

  }

  .header-search{
    float: right;
    margin-top: 180-56px;
  }

 .rank-link{
   float: left;
   width: 68px;
   border-radius: 4px;
   transition: .2s background-color;
   background-color: rgba(255,255,255,0.88);
   height: 32px;
   line-height: 32px;
   span{
     background: url(../assets/icons.png) -659px -655px no-repeat;
     padding:0 5px 0 26px;
     color: #f25d8e;
     border-radius: 4px;
     transition: .2s background-color;
     display: inline-block;
     line-height: 32px;
     font-size:12px;
   }
 }

 .header-search-content{
   background-color: rgba(255,255,255,0.88);
   width: 268px;
   height: 32px;
   border-radius: 6px;
 }

.header-se-input{
  float: left;
  width: 268px;
  height: 32px;
  padding: 2px 2px 2px 2px;
  background-color: rgba(0,0,0,0.12);
  border-radius: 6px;
  margin: 0 0 0 2px;
  line-height: 32px;
  input{
    border: none;
    background-color: transparent;
    line-height: 32px;
    width: 224px;
    padding:0 12px;
    box-sizing: border-box;
  }
  .search-submit{
    width: 42px;
    height: 32px;
    background: url(../assets/icons.png) -653px -720px ;
    float: right;
    cursor: pointer;
    border: none;
    &:hover{
    background-position: -718px -720px;
    }
  }
}

</style>
