<template>
  <div class="events comonetxt">
    <p class="events-title">待办事件</p>
    <div class="events-content">
      <ul
      class="infinite-list events-list"
      v-infinite-scroll="load"
      style="overflow:auto"
      infinite-scroll-distance=100
      infinite-scroll-delay=100>
        <li v-for="item in eventContainerList" :key="item.id" class="infinite-list-item item">
          <div :class="`${item.logo} logo`"></div>
          <div class="events-container">
            <span class="events-contant">
              <span class="events-type">{{ item.type }}: </span>
              {{ item.eventContainer }}
            </span>
            <div class="events-time">{{ item.eventTime }}</div>
          </div>
          <div class="events-status">
              <i class="dot dot-undispose" v-if="item.eventStatus === '未受理'"></i>
              <i class="dot dot-dispose" v-else></i>
              <span class="status undispose" v-if="item.eventStatus === '未受理'">{{ item.eventStatus }}</span>
              <span class="status dispose" v-else>{{ item.eventStatus }}</span>
          </div>
        </li>
      </ul>
      <div class="events-info">
        <el-radio-group v-model="tabPosition" class="events-info-date">
          <el-radio-button label="today">今日</el-radio-button>
          <el-radio-button label="yesterday">昨日</el-radio-button>
          <el-radio-button label="thisWeek">本周</el-radio-button>
          <el-radio-button label="lastWeek">上周</el-radio-button>
        </el-radio-group>
        <div class="events-info-title">
          <span class="events-info-title-txt">南湖区</span>
          <span class="events-info-title-txt">派发数量</span>
          <span class="events-info-title-txt">受理超时量</span>
        </div>
        <div class="events-info-content">
          <div class="events-info-content-item" v-for="item in eventList" :key="item.num">
              <div class="events-info-content-item-date">
                <div class="events-info-content-item-date-num">{{item.num}}</div>
                <div class="events-info-content-item-date-name">{{item.name}}</div>
              </div>
              <div class="events-info-content-item-divide-num txt">{{item.divideNum}}</div>
              <div class="events-info-content-item-timeout-num txt">{{item.timeoutNum}}</div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'eventss',
  data () {
    return {
      log: 'log',
      // 右下角事件日期导航栏的默认选择日期
      tabPosition: 'today',
      // 没有真是数据时列表的假数据初始条数
      eventContainerList: [
        { id: 1, type: '12345', logo: 'logo-undispose', eventContainer: '来电人反映人民广场的十字路口交通堵塞，实在是太堵了，已经堵了两个星期了，路障维修严重影响人民出行，市民反映此次维修时间较长。修路时间尽量不要占用大家上下班早高峰时间，不然路上太堵了，并且容易引发交通事故。', eventTime: '2023-07-07  12:35:11', eventStatus: '未受理' },
        { id: 2, type: '12345', logo: 'logo-dispose', eventContainer: '来电人反映人民广场的十字路口交通堵塞，实在是太堵了，已经堵了两个星期了，路障维修严重影响人民出行，市民反映此次维修时间较长。修路时间尽量不要占用大家上下班早高峰时间，不然路上太堵了，并且容易引发交通事故。', eventTime: '2023-07-07  12:35:11', eventStatus: '受理' },
        { id: 3, type: '110接警处', logo: 'logo-undispose', eventContainer: '来电人反映人民广场的十字路口交通堵塞，实在是太堵了，已经堵了两个星期了，路障维修严重影响人民出行，市民反映此次维修时间较长。修路时间尽量不要占用大家上下班早高峰时间，不然路上太堵了，并且容易引发交通事故。', eventTime: '2023-07-07  12:35:11', eventStatus: '未受理' },
        { id: 4, type: '12345', logo: 'logo-dispose', eventContainer: '来电人反映人民广场的十字路口交通堵塞，实在是太堵了，已经堵了两个星期了，路障维修严重影响人民出行，市民反映此次维修时间较长。修路时间尽量不要占用大家上下班早高峰时间，不然路上太堵了，并且容易引发交通事故。', eventTime: '2023-07-07  12:35:11', eventStatus: '受理' },
        { id: 5, type: '110接警处', logo: 'logo-undispose', eventContainer: '来电人反映人民广场的十字路口交通堵塞，实在是太堵了，已经堵了两个星期了，路障维修严重影响人民出行，市民反映此次维修时间较长。修路时间尽量不要占用大家上下班早高峰时间，不然路上太堵了，并且容易引发交通事故。', eventTime: '2023-07-07  12:35:11', eventStatus: '未受理' },
        { id: 6, type: '110接警处', logo: 'logo-undispose', eventContainer: '来电人反映人民广场的十字路口交通堵塞，实在是太堵了，已经堵了两个星期了，路障维修严重影响人民出行，市民反映此次维修时间较长。修路时间尽量不要占用大家上下班早高峰时间，不然路上太堵了，并且容易引发交通事故。', eventTime: '2023-07-07  12:35:11', eventStatus: '未受理' },
        { id: 7, type: '12345', logo: 'logo-dispose', eventContainer: '来电人反映人民广场的十字路口交通堵塞，实在是太堵了，已经堵了两个星期了，路障维修严重影响人民出行，市民反映此次维修时间较长。修路时间尽量不要占用大家上下班早高峰时间，不然路上太堵了，并且容易引发交通事故。', eventTime: '2023-07-07  12:35:11', eventStatus: '未受理' },
        { id: 8, type: '12345', logo: 'logo-undispose', eventContainer: '来电人反映人民广场的十字路口交通堵塞，实在是太堵了，已经堵了两个星期了，路障维修严重影响人民出行，市民反映此次维修时间较长。修路时间尽量不要占用大家上下班早高峰时间，不然路上太堵了，并且容易引发交通事故。', eventTime: '2023-07-07  12:35:11', eventStatus: '未受理' },
        { id: 9, type: '12345', logo: 'logo-undispose', eventContainer: '来电人反映人民广场的十字路口交通堵塞，实在是太堵了，已经堵了两个星期了，路障维修严重影响人民出行，市民反映此次维修时间较长。修路时间尽量不要占用大家上下班早高峰时间，不然路上太堵了，并且容易引发交通事故。', eventTime: '2023-07-07  12:35:11', eventStatus: '未受理' }
      ],
      // 设置右下角数据条数后期使用后端接口数据
      eventList: [
        { num: 1, name: '南湖街道', divideNum: 2, timeoutNum: 2 },
        { num: 2, name: '南湖街道', divideNum: 2, timeoutNum: 2 },
        { num: 3, name: '南湖街道', divideNum: 2, timeoutNum: 2 },
        { num: 4, name: '南湖街道', divideNum: 2, timeoutNum: 2 },
        { num: 5, name: '南湖街道', divideNum: 2, timeoutNum: 2 },
        { num: 6, name: '南湖街道', divideNum: 2, timeoutNum: 2 },
        { num: 7, name: '南湖街道', divideNum: 2, timeoutNum: 2 },
        { num: 8, name: '南湖街道', divideNum: 2, timeoutNum: 2 },
        { num: 9, name: '南湖街道', divideNum: 2, timeoutNum: 2 },
        { num: 10, name: '南湖街道', divideNum: 2, timeoutNum: 2 },
        { num: 11, name: '南湖街道', divideNum: 2, timeoutNum: 2 }
      ],
      id: 11
    }
  },
  methods: {
    load () {
      console.log(1)
      this.eventContainerList.push({ id: this.id, type: '12345', logo: 'logo logo-undispose', eventContainer: '来电人反映人民广场的十字路口交通堵塞，实在是太堵了，已经堵了两个星期了，路障维修严重影响人民出行，市民反映此次维修时间较长。修路时间尽量不要占用大家上下班早高峰时间，不然路上太堵了，并且容易引发交通事故。', eventTime: '2023-07-07  12:35:11', eventStatus: '未受理' })
      this.id++
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
  .events{
    &-title{
      width: 80px;
      height: 20px;
      font-size: 20px;
      color: #2d3033;
      margin-bottom: 29px;
    }
    &-content{
      display: flex;
      .events-list{
        width: 70%;
        height: 535px;
        overflow-x:hidden !important;
        &::-webkit-scrollbar {
          width: 11px;
        }
        &::-webkit-scrollbar-thumb {
          background-color: #eaecf1;
          border-radius: 15px;
        }
        &::-webkit-scrollbar-track{
          background-color: #f5f5f5;
          border-radius: 15px;
        }
        .item{
          // width: 1086px;
          height: 148px;
          background-color: #f1f9ff;
          margin-bottom: 14px;
          margin-right: 22px;
          display: flex;
          padding: 33px 37px 34px 22px;
          &:hover{
            cursor: pointer;
          }
          .logo{
            width: 20px;
            height: 21px;
            background-repeat: no-repeat;
            margin-right: 9px;
            margin-top: 5px;
          }
          .logo-undispose{
            background-image: url('@/assets/切图/wenjian.png');
          }
          .logo-dispose{
            background-image: url('@/assets/切图/wenjian2.png');
          }
          .events-container{
            width: 879px;
            // height: 79px;
            flex-grow: 1;
            position: relative;
            .events-type{

              line-height: 28px;
              color: #000000;
            }
            .events-contant{
              display: -webkit-box;
              height: 65%;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              color: #666666;
            }
            .events-time{
              color: #666666;
              position: absolute;
              bottom: 0px;
              left: 0px;
            }
          }
          .events-status{
            line-height: 74px;
            margin-left: 54px;
            position: relative;
            display: flex;
            align-items: center;
            .dot{
              display: inline-block;
              position: absolute;
              left: 0;
              top: 50%;
              width: 8px;
              height: 8px;
              background-color: #e50000;
              border-radius: 50%;
            }
            .dot-dispose{
              background-color: #4a7efe;
            }
            .dot-undispose{
              background-color: #e50000;
            }
            .status{
              display: inline-block;
              width: 58px;
              height: 16px;
              margin-left: 10px;
              font-family: MicrosoftYaHei-Bold;
              font-weight: 800;
              line-height: 28px;
            }
            .dispose{
              color: #4a7efe;
            }
            .undispose{
              color: #e50000;
            }
          }
        }
      }
      .events-info{
        overflow: hidden;
        width: 30%;
        height: 535px;
        background-color: #f8f9fe;
        margin-left: 39px;
        &-date{
          margin-top: 30px;
          width: 100%;
          padding: 0 20px;
          /deep/.el-radio-button{
            width: 25%;
            .el-radio-button__inner{
              width: 100%;
              border: 1px solid #2183d8;
              border-left: 0;
              color: #2183d8;
            }
            &:nth-child(1){
              border-left: 1px solid #2183d8;
              border-radius: 4px 0 0 4px;

            }
          }
          /deep/.is-active{
            .el-radio-button__inner{
              color: #fff;
            }
          }
        }
        &-title{
          height: 91px;
          line-height: 91px;
          &-txt{
            display: inline-block;
            width: 33%;
            text-align: center;
            font-size: 20px;
            color: #2d3033;
          }
        }
        &-content{
          &-item:nth-child(1){
            .events-info-content-item-date-num{
              color: #ab1e21;
            }
          }
          &-item:nth-child(2){
            .events-info-content-item-date-num{
              color: #e13349;
            }
          }
          &-item:nth-child(3){
            .events-info-content-item-date-num{
              color: #f59a59;
            }
          }
          &-item:nth-child(odd){
            background-color: #fff ;
            // min-height: 42px;
          }
          &-item{
            display: flex;
            align-items: center;
            padding: 10px 0;
            color: #000000;
            &:hover{
              cursor: pointer;
            }
            &-date{
              display: flex;
              flex: 1;
              position: relative;
              align-items: center;
              color: #000000;
              &-num{
                position: absolute;
                width: 30%;
                text-align: center;
              }
              &-name{
                width: 100%;
                text-align: center;
              }
            }
            &-divide-num{
              flex: 1;
              text-align: center;
              font-family: MicrosoftYaHei-Bold;
              color: #288cd6;
              // margin-left: 75px;
            }
            &-timeout-num{
              flex: 1;
              text-align: center;
              font-family: MicrosoftYaHei-Bold;
              color: #288cd6;
              // margin-left: 135px;
            }
          }
        }
      }
    }
  }
  .comonetxt{
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    font-family: MicrosoftYaHei;
  }
</style>
