<template>
  <div class="">
    <navheader></navheader>
    <div class="content">
      <div class="mianbaoxue">
        您当前的位置：
        <a href="javascript:;" @click="$router.replace('/home')">首页</a>
        > 招考信息
      </div>
      <div class="newsGroup" >
       <!-- <div class="newslist" onclick="window.location.href='newsDetail.html'">
          <div class="newslist_title">国家电投集团黄河水电公司2020年校园</div>
          <div class="newslist_date">
            <span>2019-12-25 18:30</span>
            <span class="newslist_source">招聘信息</span>
          </div>
        </div>
        <div class="newslist">
          <div class="newslist_title">国家电投集团黄河水电公司2020年校园招聘开启</div>
          <div class="newslist_date">
            <span>2019-12-25 18:30</span>
            <span class="newslist_source">招聘信息</span>
          </div>
        </div> -->

        <textCard v-for="(item,index) in 4" :key='index'></textCard>

      </div>
      <div class="classGroup">
        <imgCard v-for="(item,index) in 2" :key='index'></imgCard>

        <!-- <div class="mianshouList_item">
          <div class="mianshouList_item_top">
            <img src="../../assets/img/mianshouImg.png" class="mianshouImg" />
            <div class="mianshouList_item_right">
              <div class="ms_r_title">2020二批寒假突击营asdgasdgasdfgasdfaf</div>
              <div class="ms_r_content">50人精品小班教学50人精品小班教学</div>
              <div class="" style="display: flex;align-items: flex-end;">
                <span style="color: #DF3736;font-size: 12px;">￥</span>
                <span style="color: #DF3736;font-size: 1.125rem;">5880.00</span>
                <div class="ms_right_detail">查看详情</div>
              </div>
            </div>
          </div>
          <div class="mianshouList_item_bottom">
            <div class="ms_item_b1">
              <div class="ms_item_b1_text">
                课
                <span style="margin-left: 1.75rem;">时</span>
              </div>
              <div class="ms_item_b1_text2">18天18晚</div>
            </div>
            <div class="ms_item_b1" style="margin-top: 5px;">
              <div class="ms_item_b1_text">上课时间</div>
              <div class="ms_item_b1_text2">时间 ： 12月25日 10:00-11:30</div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import navheader from '../../components/content/navHeader.vue';
import textCard from "../../components/content/textCard.vue"
import imgCard from "../../components/content/imgCard.vue"
export default {
  data() {
    return {
      cate_title:''
    };
  },
  mounted() {
    
  },
  components: {
    navheader,
    textCard,
    imgCard
  }
};
</script>

<style>
@import url('../../assets/css/index.css');
</style>
