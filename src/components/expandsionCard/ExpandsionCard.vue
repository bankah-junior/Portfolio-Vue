<template>
  <div class="card-box flex flex-col relative hover:border-2 hover:border-white transition-all ease-in duration-500">
    <div>
        <slot name="srcImg"></slot>
    </div>
    <div class="card-info hidden bg-[rgba(0,0,0,0.9)] absolute w-full h-full flex-col items-center justify-center space-y-1">
        <h1 class="text-2xl font-bold"><slot name="title"></slot></h1>
        <h2><slot name="stacks"></slot></h2>
        <div class="space-x-3 space-y-2">
            <button class="bg-white text-black py-1 px-4 rounded-lg font-semibold"><slot name="visit"></slot></button>
            <button class="bg-white text-black py-1 px-4 rounded-lg font-semibold"><slot name="code"></slot></button>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card-box:hover .card-info {
    display: flex;
}
</style>