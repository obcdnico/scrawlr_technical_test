<template>
  <span class="upvote" @click="changestatus()">
    <img class="arrow-up" :class="upvoteClass === 'normal' ? 'normal' : 'selected'"  alt="arrow_up" src="../assets/up-arrow.svg" />
  </span>
</template>

<script>
export default {
  name: 'Upvote',
  props: {
    msg: String,
    index: Number
  },
  data() {
    return {
      // count: 0
    }
  },
  methods: {
    changestatus() {
      this.$store.dispatch('upvote/changeStatus', this.index);
    }
  },
  computed: {
    upvoteClass () {
      return this.$store.state.upvote.componentsList[this.index] && this.$store.state.upvote.componentsList[this.index].status;
    }
  }
}
</script>

<style scoped>
  .upvote {
    padding: 0.5rem;
    width: 2rem;
    border-radius: 0.5rem;
    vertical-align: middle;
  }
  .arrow-up {
    height: 1rem;
    padding: 1rem;
  }
  .normal {
    background: #F4F6F8;
    color: #343A40;
  }
  .selected {
    background: #E5E8FD;
  }
</style>