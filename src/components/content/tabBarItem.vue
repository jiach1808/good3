<template>
    <div class="tab-bar-item" @click="itemClick">
         <div>
           <div v-if="!isActive"><slot name="img"></slot></div>
           <div v-else><slot name="img-active"></slot></div>
         </div>
<!--         <div :class="{active:isActive}">-->
        <div  :style="activeStyle">
           <slot name="text"></slot>
         </div>
    </div>
</template>

<script>
    export default {
        name: "tabBarItem",
      data(){
          return{
            //isActive:false
          }
      },
      props:{
        path:String,
        activeColor:{
          type:String,
          default:'red'
        }
      },
      methods:{
          itemClick(){
            //console.log('itemClick');
            this.$router.replace(this.path)
          }
      },
      computed:{
          isActive(){
         return      this.$route.path.indexOf(this.path) !==-1
          },
        activeStyle(){
            return this.isActive?{color:this.activeColor}:{}
        }
      }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 40px;

    background-color: #ddd;
    font-size: 12px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    padding-top:3px;

  }
  /*.active{*/
  /*  color:red;*/
  /*}*/
</style>
