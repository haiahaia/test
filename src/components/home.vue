<template>
  <div>
    <el-container>
    <el-header height="143px" class="header">Header</el-header>
    <el-container>
      <el-aside width="167px" class="aside">Aside</el-aside>
      <el-main class="main">
        <div class="main-top">
          <hot></hot>
          <notice></notice>
        </div>
        <div>
          <events></events>
        </div>
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script>
import hot from './home-main/hot'
import notice from './home-main/notice'
import events from './home-main/events'
export default {
  name: 'home',
  components: {
    hot,
    notice,
    events
  }
}

</script>

<style lang="less" scoped>
  .header{
    background-color: pink;
  }
  .main{
    background-color: skyblue;
  }
  .aside{
    background: yellowgreen;
  }
  //设置mian部分的大体框架样式
    .main-top{
      display: flex;
      margin-bottom: 39px;
      // width: 1634px;
    }
</style>
