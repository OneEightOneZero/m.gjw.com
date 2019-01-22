<template>
	<div>
		<!-- 搜索 -->
		<div class="van-nav-bar search-top" style="position: fixed;z-index: 88; top: 0px; width: 100%;">
			<div class="back">
				<i class="van-icon van-icon-arrow-left"><!----></i>
			</div>
			<div class="van-search van-search--show-action" style="background: transparent;">
				<i class="van-icon van-icon-search"><!----></i>
				<div class="van-cell van-field">
					<!----><!---->
					<div class="van-cell__value van-cell__value--alone">
						<div class="van-field__body">
							<input
								type="search"
								placeholder="请输入商品名称"
								class="van-field__control"
							/><!----><!----><!---->
						</div>
						<!---->
					</div>
					<!---->
				</div>
				<div class="van-search__action"><div>搜索</div></div>
			</div>
		</div>

		<!-- 导航 -->
		<div
			class="pro_nav"
			style="position: fixed; top: 45px; z-index: 88; width: 100%;"
		>
			<div class="van-row" style="padding: 0px;">
				<div
					v-for="(goods, index) in goodslist"
					:key="index"
					class="van-col van-col--8 "
					
				>
					<span v-text="goods.title" @click="getactive(goods,index)"
					:class="{ active: active == index }" ></span>
					
				<div v-show="show1">
				  <div v-for="(mms,index) in goods.mm" :key="index" id="menu1">
					  <p v-text="mms.evaluate" @click="shopping"></p>
					  <p v-text="mms.product"></p>
				  </div>
				</div>
				
				<div v-show="show2">
				  <div v-for="(mms,index) in goods.mm" :key="index" id="menu2">
					  <p v-text="mms.lowprice" @click="numlow"></p>
					  <p v-text="mms.highprice" @click="numlow2"></p>
				  </div>
				</div>
			
					
				</div>

			</div>
			
		</div>

		<!-- 列表 -->

		<van-pull-refresh v-model="isLoading" @refresh="getlist" class="pro_list bg van-list">
			<div class="van-row">
				<div v-for="(m, index) in news" :key="index" class="van-col van-col--12">
					<div class="pro_item">
						<a href="#">
							<img :src="'http://img0.gjw.com/product/'+m.Pic" alt="" class="pic" />
							<p class="tit2" v-text="m.ProductName"></p>
							<div class="tag"></div>
							<div class="price" v-text="m.APPPrice"></div>
							<div class="tip" v-text="`${m.SumComment}好评`">
								&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 97%好评
							</div>
						</a>
					</div>
				</div>
			</div>
		</van-pull-refresh>
	</div>
</template>

<script>
export default {
	data() {
		return {
			show1:false,
			show2:false,
			news: [],
			goodslist: [
				{
					title: '综合',
					
					mm:[{
						evaluate: '评价最多',
						product: '最新产品'
					}]
				},
				{
					title: '销量',
					// show:'true'
				},
				{
					title: '价格',
					
					mm:[{
						lowprice: '价格由低到高',
						highprice: '价格由高到低'
					}]
				}
			],
			active: 0,
		
			isLoading: false
		};
	},
	methods: {
		getlist() {
			setTimeout(async () => {
				let datalist = await this.$axios.get('http://localhost:3000/news');
				// console.log(datalist.data.data)
				this.news = this.news.concat(datalist.data.data);
				console.log(this.news);
				this.$toast('刷新成功');
				this.isLoading = false;
			}, 500);
		},

		getactive(goods,index) {
            this.active=index;
			
			if(index==0){
				if(this.show2=true){

				this.show2=!this.show2
				
				}else{
					
				}
				this.show1=!this.show1
			}else if(index==2){
				if(this.show1=true){
				
				this.show1=!this.show1
				
				}else{
					
				}
				this.show2=!this.show2			
			}
	
		},
		//价1排序
		numlow(){
			console.log(this.news);
			return sortKey(this.news,'APPPrice')
		},
		numlow2(){
			return sortKey2(this.news,'APPPrice')
		},
		
		// 评价排序
		shopping(){
			return sortKey2(this.news,'SumComment');
		}
		
	},

	created() {
		this.getlist();
	}
	
};

 function sortKey(array,key){
               return array.sort(function(a,b){
                    var x = a[key];
                     var y = b[key];
                     return ((x<y)?-1:(x>y)?1:0)
                })
         }
		 
function sortKey2(array,key){
               return array.sort(function(a,b){
                    var x = a[key];
                     var y = b[key];
                     return ((x>y)?-1:(x<y)?1:0)
                })
         }

</script>

<style scoped>
.pro_list {
	margin-top: 86px;

}

/* 下拉菜单*/
#menu1{
	z-index: 44;
	background: #FFFFFF;	
}
#menu2{
	z-index: 44;
	background: #FFFFFF;	
}



</style>
