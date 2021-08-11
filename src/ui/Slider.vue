<template>
  <div class="wrapper">

    <div class="slider"
         :style="{'margin-left': '-' + (100 * currentSlideIndex) + '%'}"
    >
      <slider-items
          v-for="item in slider_data"
          :key="item.id"
          :item_data="item"
      />
      <i @click="prevSlide" class="bi bi-chevron-compact-left prev_left "></i>
      <i @click="nextSlide" class="bi bi-chevron-compact-right next_right"></i>
    </div>

  </div>

</template>

<script>
import SliderItems from "./SliderItems";

export default {
  name: "Slider",
  props: {
    slider_data:{
      type: Array,
      default: () =>[]
    },
    interval:{
      type: Number,
      default: 0
    }
  },
  data(){
    return{
      currentSlideIndex: 0
    }
  },
  mounted() {
    if(this.interval>0){
      let vm = this
      setInterval(function (){
        vm.nextSlide()
      },vm.interval)
    }
  },
  methods:{
    prevSlide(){
      if(this.currentSlideIndex > 0){
        this.currentSlideIndex--
      }
    },
    nextSlide(){
      if(this.currentSlideIndex >= this.slider_data.length -1){
        this.currentSlideIndex = 0
      }else {
        this.currentSlideIndex++
      }
    }
  },
  components:{SliderItems}
}
</script>

<style scoped>
   .wrapper{
     max-width: 1200px;
     min-height: 480px;
     overflow: hidden;
   }
   .slider{
     display: flex;
     transition: all ease.7s;

   }
   .prev_left{
     z-index: 10;
     position: absolute;
     top:50%;
     left:6%;
   }
   .next_right{
     z-index: 99999999;
     position: absolute;
     top:50%;
     left:93%;
   }
   i{
     width: 50px;
     height: 50px;
   }
   @media (max-width: 1300px) {
     .wrapper{
     display: none;
     }
   }
</style>