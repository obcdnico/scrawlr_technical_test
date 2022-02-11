<template>
  <div>
    <div v-for='(rootComponent,index) in rootComponentsList' :index="index">
      <span class="upvote-wrapper">
        <Upvote v-for='(component,index2) in rootComponent.componentsList' :index="index"/>
      </span>
      <span class="add-wrapper" @click="addComponent(index)">
          <span class="add-wrapper-img">
            <img alt="Vue logo" src="./assets/cross.jpg" />  
          </span>
      </span>
    </div>
  </div>
</template>

<script>
import Upvote from './components/Upvote.vue'

export default {
  name: 'App',
  components: {
    Upvote
  },
  data() {
    return {
      componentsList: [],
      rootComponentsList: [{name:'1', componentsList: []}, {name: '2', componentsList: []}, {name: '3', componentsList: []}]
    }
  },
  methods: {
    addComponent(index) {
      this.rootComponentsList[index].componentsList.push({name: ''});
    }
  }
}
</script>

<style scoped>
  .upvote-wrapper {
    border: 1px solid gray;
    border-radius: 1rem;
    padding: 1rem;
  }
  .add-wrapper {
    padding: 1rem;
    background: #F4F6F8;
    border-radius: 1rem;
  }
  .add-wrapper-img {
    vertical-align: middle;
  }
</style>