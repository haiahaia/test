<template>
  <div class="hot">
    <div class="hot-card hot-card-alarm">
      <div class="hot-card-logo-container">
        <div class="hot-card-logo hot-card-logo-alarm"></div>
      </div>
      <p class="hot-card-title">双非警情 (110接处警)</p>
      <div class="hot-card-new-container">
        <span class="hot-card-new-txt">今日新增：</span>
        <span class="hot-card-new-number">20</span>
      </div>
    </div>
    <div class="hot-card hot-card-phone">
      <div class="hot-card-logo-container">
        <div class="hot-card-logo hot-card-logo-phone"></div>
      </div>
      <p class="hot-card-title">12345政务服务热线</p>
      <div class="hot-card-new-container">
        <span class="hot-card-new-txt">今日新增：</span>
        <span class="hot-card-new-number">20</span>
      </div>
    </div>
    <div class="hot-card hot-card-repeated-alarm">
      <div class="hot-card-logo-container">
        <div class="hot-card-logo hot-card-logo-repeated-alarm"></div>
      </div>
      <p class="hot-card-title">重复报警分析</p>
      <div class="hot-card-new-container">
        <span class="hot-card-new-txt">今日新增：</span>
        <span class="hot-card-new-number">20</span>
      </div>
    </div>
    <div class="hot-card hot-card-data-analytic">
      <div class="hot-card-logo-container">
        <div class="hot-card-logo hot-card-logo-data-analytic"></div>
      </div>
      <p class="hot-card-title">数据统计</p>
      <div class="hot-card-new-container" style="visibility: hidden;">
        <span class="hot-card-new-txt">今日新增：</span>
        <span class="hot-card-new-number">20</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hot'
}
</script>

<style lang="less" scoped>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .hot{
    display: flex;
    width: 70%;
    &-card{
      width: 25%;
      background-color: #f8f9fe;
      border-radius: 10px;
      margin-right: 17px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      &-logo-container{
        width: 100%;
        height: 104px;
        display: flex;
        justify-content: center;
        margin-top: 1px;
        .hot-card-logo{
          position: relative;
          width: 104px;
          height: 104px;
          background-repeat: no-repeat;
          background-size: 100%;
        }
        .hot-card-logo-alarm{
          background-image: url('@/assets/切图/5.png');
        }
        .hot-card-logo-phone{
          background-image: url('@/assets/切图/2.png');
        }
        .hot-card-logo-repeated-alarm{
          background-image: url('@/assets/切图/4.png');
        }
        .hot-card-logo-data-analytic{
          background-image: url('@/assets/切图/10.png');
        }
      }
      &-title{
        width: 100%;
        text-align: center;
        font-family: MicrosoftYaHei;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #2d3033;
        margin-top: -10px;
      }
      &-new-container{
        margin-top: -20px;
        width: 99px;
        height: 17px;
        .hot-card-new-txt{
          font-family: MicrosoftYaHei;
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 28px;
          letter-spacing: 0px;
          color: #666666;
        }
        .hot-card-new-number{
          font-family: MicrosoftYaHei-Bold;
          font-size: 16px;
          font-weight: normal;
          letter-spacing: 0px;
          color: #288cd6;
        }
      }
    }
    .hot-card-alarm{
      background-color: #f8f9fe;
      &:hover{
        background-color: #e1e6fe;
        cursor: pointer;
      }
    }
    .hot-card-phone{
      background-color: #f6fffc;
      &:hover{
        background-color: #ddfcf2;
        cursor: pointer;
      }
    }
    .hot-card-repeated-alarm{
      background-color: #f8f9fe;
      &:hover{
        background-color: #e1e6fe;
        cursor: pointer;
      }
    }
    .hot-card-data-analytic{
      background-color:  #fff6e9;
      &:hover{
        background-color: #fde9cc;
        cursor: pointer;
      }
    }
  }
</style>
