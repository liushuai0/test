<!--  -->
<template>
  <div>
    <div class="container">
      <!-- 头部 -->
      <div class="header">
        <img src="../../assets/img/sigelogo.png" class="logoImg" />
        <div class="h_right">
          <div class="headerCenter">
            <div class style="margin-right: -30px;">免费咨询热线</div>
            <div class>
              <img src="../../assets/img/dianhua.png" style="width: 10px;height: 15px;" />
              <span style="font-size: 1rem;font-weight: blod;">400-999-9999</span>
            </div>
          </div>
          <img src="../../assets/img/headerright.png" class="headerRightImg" />
        </div>
      </div>
      <!-- 轮播 -->
      <div class="swiperImg">
        <div class="swiper-container">
          <div class="swiper-wrapper" id="luoboList">

            <div class="swiper-slide" v-for="(item,index) in homeList.lunbolist" :key='index'>
              <img :src="homeList.lunbolist[index].thumbnail" style="width: 100%;" />
            </div>

          <!--  <div class="swiper-slide">
              <img src="../../assets/img/swiper.png" style="width: 100%;" />
            </div>
            <div class="swiper-slide">
              <img src="../../assets/img/swiper.png" style="width: 100%;" />
            </div> -->
          </div>

          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <!-- nav栏目 -->
      <div class="navGroup">
        <div class="navGroup_item" @click="$router.push({path:'/NewsList',query:{cate_id:12}})">
          <img src="../../assets/img/nav1.png" class="navImg" />
          <div class="nav_title">招考信息</div>
        </div>
        <div class="navGroup_item">
          <img src="../../assets/img/nav2.png" class="navImg" />
          <div class="nav_title">报考指导</div>
        </div>
        <div class="navGroup_item" @click="$router.push({path:'/ZiLiao',query:{cate_id:9}})">
          <img src="../../assets/img/nav3.png" class="navImg" />
          <div class="nav_title">备考资料</div>
        </div>
        <div class="navGroup_item">
          <img src="../../assets/img/nav4.png" class="navImg" />
          <div class="nav_title">在线课程</div>
        </div>
        <div class="navGroup_item">
          <img src="../../assets/img/nav5.png" class="navImg" />
          <div class="nav_title">面授课程</div>
        </div>
        <div class="navGroup_item">
          <img src="../../assets/img/nav6.png" class="navImg" />
          <div class="nav_title">刷题神器</div>
        </div>
        <div class="navGroup_item">
          <img src="../../assets/img/nav7.png" class="navImg" />
          <div class="nav_title">考试热点</div>
        </div>
        <div class="navGroup_item">
          <img src="../../assets/img/nav8.png" class="navImg" />
          <div class="nav_title">微信公众号</div>
        </div>
      </div>
      <!-- 文字滚动 -->
      <div class="gongaolan">
        <img src="../../assets/img/new.png" class="newImg" />
        <img
          src="../../assets/img/toutiaoImg.png"
          style="width: 50px;height: 50px; padding-right: 10px; border-right: 1px solid #EFEFEF;"
        />
        <div class style="width: 16.0625rem;margin-left: 10px;">
          <gundong> </gundong>
        </div>
      </div>
      <!-- 公告栏列表 -->
      <div class>
        <div class="toutiaoList_item">
          <img src="../../assets/img/listitem.png" style="width: 10px;" />
          <a href="#" class="toutiaoList_item_a1">应届生报考国家电网的优势在哪里？</a>
          <img src="../../assets/img/new1.png" style="width: 12px;margin-left: 10px;" />
        </div>
        <div class="toutiaoList_item">
          <img src="../../assets/img/listitem.png" style="width: 10px;" />
          <a href="#" class="toutiaoList_item_a">应届生报考国家电网的优势在哪里？</a>
        </div>
        <div class="toutiaoList_item">
          <img src="../../assets/img/listitem.png" style="width: 10px;" />
          <a href="#" class="toutiaoList_item_a">应届生报考国家电网的优势在哪里？</a>
        </div>
        <div class="toutiaoList_item">
          <img src="../../assets/img/listitem.png" style="width: 10px;" />
          <a href="#" class="toutiaoList_item_a">应届生报考国家电网的优势在哪里？</a>
        </div>
        <div class="toutiaoList_item" style="border: none;">
          <img src="../../assets/img/listitem.png" style="width: 10px;" />
          <a href="#" class="toutiaoList_item_a">应届生报考国家电网的优势在哪里？</a>
        </div>
      </div>
      <!-- 面授课程 -->
      <div class="mianshou">
        <div class="mianshouTitle">
          <span style="color: #0A69CD;font-weight: bold;">面授</span>课程
        </div>
        <div class="mianshouList_group">
          <imgCard></imgCard>

          <div class="mianshouList_item">
            <div class="mianshouList_item_top">
              <img src="../../assets/img/mianshouImg3.png" class="mianshouImg" />
              <div class="mianshouList_item_right">
                <div class="ms_r_title">2020二批寒假突击营asdgasdgasdfgasdfaf</div>
                <div class="ms_r_content">50人精品小班教学50人精品小班教学</div>
                <div class style="display: flex;align-items: flex-end;">
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
                <div class="ms_item_b1_text2">即报即学</div>
              </div>
              <div class="ms_item_b1" style="margin-top: 10px;">
                <div class="ms_item_b1_text">上课时间</div>
                <div class="ms_item_b1_text2">12月25日 10:00-11:30</div>
              </div>
            </div>
          </div>
        </div>
        <div class="showmore">
          查看更多课程
          <img
            src="../../assets/img/right.png"
            style="width: 20px;height: 20px;margin-left: 10px;"
          />
        </div>
      </div>
      <!-- 思格优势 -->
      <div class="mianshou">
        <div class="mianshouTitle">
          思格
          <span style="color: #0A69CD;font-weight: bold;">优势</span>
        </div>
        <div class="youshiGroup">
          <div class style="position: relative;">
            <img src="../../assets/img/youshi4.png" class="youshiImg" />
            <img src="../../assets/img/youshi4m.png" class="youshiImgm1" />
            <div class="youshiTitle">权威品牌</div>
            <div class="youshiCont">
              <div class>2016年，首家成为专注国家电网考试辅导的国家级孵化企业！</div>
              <div class>2017年，首家被吉林化工等公立院校认可的国家电网考试辅导机构！</div>
              <!-- <div class="">
								成立至今，帮助长工大等十余所高校提升电网就业率50%以上！
              </div>-->
            </div>
          </div>
        </div>

        <div class="youshiGroup">
          <div class style="position: relative;">
            <img src="../../assets/img/youshi2.png" class="youshiImg" />
            <img src="../../assets/img/youshi2m.png" class="youshiImgm" />
            <div class="youshiTitle">师资团队</div>
            <div class="youshiCont">
              <div class>2016年，首家成为专注国家电网考试辅导的国家级孵化企业！</div>
              <div class>2017年，首家被吉林化工等公立院校认可的国家电网考试辅导机构！</div>
              <!-- <div class="">
								成立至今，帮助长工大等十余所高校提升电网就业率50%以上！
              </div>-->
            </div>
          </div>
        </div>
        <div class="youshiGroup">
          <div class style="position: relative;">
            <img src="../../assets/img/youshi1.png" class="youshiImg" />
            <img src="../../assets/img/youshi1m.png" class="youshiImgm" />
            <div class="youshiTitle">高通过率</div>
            <div class="youshiCont">
              <div class>2016年，首家成为专注国家电网考试辅导的国家级孵化企业！</div>
              <div class>2017年，首家被吉林化工等公立院校认可的国家电网考试辅导机构！</div>
              <!-- <div class="">
								成立至今，帮助长工大等十余所高校提升电网就业率50%以上！
              </div>-->
            </div>
          </div>
        </div>
        <div class="youshiGroup">
          <div class style="position: relative;">
            <img src="../../assets/img/youshi3.png" class="youshiImg" />
            <img src="../../assets/img/youshi3m.png" class="youshiImgm" />
            <div class="youshiTitle">蝉联状元</div>
            <div class="youshiCont">
              <div class>2016年，首家成为专注国家电网考试辅导的国家级孵化企业！</div>
              <div class>2017年，首家被吉林化工等公立院校认可的国家电网考试辅导机构！</div>
              <!-- <div class="">
								成立至今，帮助长工大等十余所高校提升电网就业率50%以上！
              </div>-->
            </div>
          </div>
        </div>
      </div>
      <!-- 明星学员 -->
      <div class="mianshou">
        <div class="mianshouTitle">
          <span style="color: #0A69CD;font-weight: bold;">明星</span>学员
        </div>
        <div class="xueyuanGroup">
          <div class="xueyuan_card">
            <img src="../../assets/img/nav1.png" class="xueyuan_img" />
            <div class="xueyuan_name">郭林枫</div>
            <div class="xueyuan_danwei">就职单位：国网吉林电力</div>
            <div class="xueyuan_danwei">面试成绩： 95 分</div>
            <div class="xueyuan_pici">考试批次：2019一批</div>
          </div>
          <div class="xueyuan_card">
            <img src="../../assets/img/nav1.png" class="xueyuan_img" />
            <div class="xueyuan_name">郭林枫</div>
            <div class="xueyuan_danwei">就职单位：国网吉林电力</div>
            <div class="xueyuan_danwei">面试成绩： 95 分</div>
            <div class="xueyuan_pici">考试批次：2019一批</div>
          </div>
        </div>
      </div>
      <!-- 走进思格 -->
      <div class="mianshou">
        <div class="mianshouTitle">
           走进
          <span style="color: #0A69CD;font-weight: bold;">思格</span>
        </div>
        <!-- 轮播 -->
        <div class="swiperBottm">
          <div
            class="swiper-containerbottom"
            style="box-shadow:2px 0px 20px 0px rgba(183,183,183,0.46);"
          >
            <div class="swiper-wrapper" id="luoboListbottom">
              <div class='swiper-slide' v-for="(item,index2) in homeList.lunbolist" :key='index2'>
              	<img :src='item.thumbnail' style='width: 100%;height:auto'>
              	<div class='luobotitle'>
              		<a class='lunbobottom_title' href='#'>{{item.title}}</a>
              	</div>
              </div>

            </div>

            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <!-- 底部 -->


      <!-- <div class="footer">
				<img src="../../assets/img/sigelogo.png" class="footer_logo" >
				<div class="" style="color: #DBE7F3;font-size: 12px;">
					Copyright  ©  2015-2019  思格教育版权所有
				</div>
      </div>-->
    </div>
  </div>
</template>

<script>

import gundong from "../../components/common/gundong.vue"
import {mapState} from 'vuex'
import "../../common/swiper.min.js";
import imgCard from '../../components/content/imgCard.vue'
export default {
  data() {
    return {
      asd: "asdfgas",

      index:0,
      lunbolist:[]
    };
  },
  computed:{
    ...mapState(['homeList']),
  },
  methods:{

  },
  mounted() {
    this.$store.dispatch('getHomelist')

    //顶部轮播
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: 2000, //可选选项，自动滑动
      loop: true,
      autoplayDisableOnInteraction: false,
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
    //底部轮播
    var mySwiper = new Swiper('.swiper-containerbottom', {
				autoplay: 2000,//可选选项，自动滑动
				loop: true,
				autoplayDisableOnInteraction : false,
				observer:true,//修改swiper自己或子元素时，自动初始化swiper
				observeParents:true,//修改swiper的父元素时，自动初始化swiper
      })
      console.log(this)

  },
  components: {
  imgCard,
    gundong
  }
};
</script>

<style scoped>
@import url("../../assets/css/index.css");

</style>
