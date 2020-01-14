<!--  -->
<template>
  <div>
    <div class="vueBox">
      <div class="marquee">
        <div class="marquee_box">
          <ul class="marquee_list" :class="{marquee_top:animate}">
            <li v-for="(item, index) in marqueeList" :key="index">
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animate: false,
      marqueeList: [
        {
          name: "1111111111111111111111111111",

        },
        {
          name: "2222222222222222222222222222222222222222222222222",

        },
        {
          name: "333333333333333333333333",

        }
      ]
    };
  },
  created() {
    setInterval(this.showMarquee, 2000);
  },
  mounted() {},
  methods: {
    showMarquee: function() {
      this.animate = true;

      setTimeout(() => {
        this.marqueeList.push(this.marqueeList[0]);
        this.marqueeList.shift();
        this.animate = false;
      }, 500);
    }
  }
};
</script>
<style scoped>
.marquee {
            width: 100%;
            height: 50px;
            align-items: center;
            color: #3A3A3A;

            display: flex;
            box-sizing: border-box;
        }

        .marquee_title {
            padding: 0 20px;
            height: 30px;
            font-size: 14px;
            border-right: 1px solid #d8d8d8;
            align-items: center;
        }

        .marquee_box {
            display: block;
            position: relative;
            width: 98%;
            height: 30px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }

        .marquee_list {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
             width: 100%;
        }

        .marquee_top {
            transition: all 0.5s;
            margin-top: -30px
        }

        .marquee_list li {
            width: 95%;
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            padding-left: 5%;
        }

        .marquee_list li span {
          display: inline-block;
          padding: 0;
          max-width: 100%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }

        .red {
            color: #FF0101;
        }
</style>
