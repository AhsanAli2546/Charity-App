<template>
  <div>
    <div class="w-100 clearfix my-1">
              <span class="font-montserrat progress-title mt-1 float-start"
                >Donation</span
              >
              <span class="font-montserrat progress-percentage mt-1 float-end">75%</span>
            </div>
            <div
              class="progress rounded-0"
              style="background-color: #c7e7df; height: 8px"
            >
              <div
                class="progress-bar ch-bg-primary"
                role="progressbar"
                style="width: 75%"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
              
            </div>
            <div class="w-100 clearfix my-1">
              <span class="font-montserrat progress-title mt-1 float-start"
                >Raised: $600</span
              >
              <span class="font-montserrat progress-percentage mt-1 float-end"
                >Goal: $1,000</span
              >
            </div>
          </div> 
        
</template>


<script>
export default{
  props:{
    title:{
      required:true
    },
    percentage:{
      required:true,
    }

  },
  computed:{
    style(){
      return 'width: ' + (this.percentage != null? (this.percentage + '%;') : ('23%;'));
      
    }
  }
}
</script>

<style scoped>
@import url("../../../assets/css/master.css");



.ch-primary-outline-btn{
    
    color:var(--ch-primary);

}

.ch-primary-outline-btn:hover{

  color: #fff;
  background-color: var(--ch-primary);
  border-color: var(--ch-primary);
}

.clearfix>.progress-title,
.clearfix>.progress-percentage{

height: 16px;
left: 332px;
top: 3189px;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
/* identical to box height, or 114% */

text-transform: capitalize;

color: var(--ch-text-dark);
}
</style>
