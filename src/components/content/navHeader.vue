<template>
<div class="header">
	<img src="../../assets/img/sigelogo.png" class="logoImg">
	<div class="shuxian">

	</div>
	<div class="header_text">
		招考信息{{cate_title}}
	</div>
	<div class="">
		<img src="../../assets/img/home.png" @click="$router.push('/')" class="home_img">
	</div>
</div>
</template>

<script>
  export default{
    data(){
      return {
        cate_title:''
      }
    },
    mounted() {
    let id = this.$route.query.cate_id
    console.log(id);
    this.cate_title=id
    },
    methods:{

    }
  }
</script>

<style>
</style>
