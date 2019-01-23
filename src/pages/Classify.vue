<template>
  <div class="list_home">
    <div class="box" v-for="(item,idx) in List" :key="idx" @click="toList">
      <div class="title" v-text="item.TypeName">
        葡萄酒
        <a href="#" class="more">查看全部 &gt;</a>
      </div>
      <div class="van-row" style="margin-left: -2.5px; margin-right: -2.5px;">
        <div class="item van-col van-col--12" style="padding-left: 2.5px; padding-right: 2.5px;" v-for="(i,idx) in item.TypeData" :key="idx">
          <a href="#" v-text="i.Name">奔富</a>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      List:[]
    }
  },
  methods: {
    //跳转列表页
    toList(){
      this.$router.push({path: '/list'})
    },
    //   获取分类信息
    async getClassify() {
      let data = await this.$axios.get("http://39.105.167.17:3000/Classify");
      this.List = this.List.concat(data.data.data.item_data);
        // console.log(this.List);
      return data;
    },
  },
  created(){
    this.getClassify();
  }
};
</script>