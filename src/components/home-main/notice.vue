<template>
  <div class="notice commontxt">
    <div class="notice-title">
      <div class="notice-title-txt">通知公告</div>
      <div class="notice-title-more">
        <span>更多</span>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="notice-list">
      <div class="notice-list-item" v-for="item in noticeList" :key="item.id">
        <span class="notice-list-item-logo"></span>
        <div class="notice-list-item-content">
          <div class="notice-list-item-content-txt">{{ item.content }}</div>
          <div class="notice-list-item-content-time">{{ item.time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notice',
  data () {
    return {
      noticeList: [
        { id: 1, content: '民声一键办操作说明2023.07.13', time: '2023-08-11 10:12' },
        { id: 2, content: '民声一键办操作说明2023.07.13', time: '2023-08-11 10:12' },
        { id: 3, content: '民声一键办操作说明2023.07.13', time: '2023-08-11 10:12' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .notice{
    width: 30%;
    background-color: #f8f9fe;
    margin-left: 17px;
    padding: 21px 30px 22px 21px ;
    &-title{
      display: flex;
      justify-content: space-between;
      align-content: center;
      margin-bottom: 24px;
      &-txt{
        width: 80px;
        height: 20px;
        font-size: 20px;
        color: #2d3033;
      }
      &-more{
        height: 19px;
        font-size: 20px;
        color: #288cd6;
        &:hover{
        cursor: pointer;
        }
      }
    }
    .notice-list{
      &-item{
        height: 44px;
        display: flex;
        justify-content: space-between;
        &:hover{
          background-color: #f1f9ff;
          cursor: pointer;
        }
        &-logo{
          display: inline-block;
          width: 20px;
          height: 22px;
          background-image: url('@/assets/切图/gonggao.png');
          background-repeat: no-repeat;
          background-size: 100%;
          margin-right: 15px;
        }
        &-content{
          flex-grow: 1;
          height: 17px;
          display: flex;
          justify-content: space-between;
          &-txt{
            font-size: 16px;
            color: #000000;
          }
          &-time{
            font-size: 16px;
            color: #666666;
          }
        }
      }
    }
  }
  .commontxt{
    font-family: MicrosoftYaHei;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    font-size: 16px;
  }
</style>
