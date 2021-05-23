<template>
  <section class="posts-list">
    <PostPreview 
      id="1"
      :is-admin="isAdmin"
      title="Title1"
      previewText="loremipsum1"
    />
    <PostPreview 
      id="2"
      :is-admin="isAdmin"
      title="Title2"
      previewText="loremipsum2"
    />
    <PostPreview 
      id="3"
      :is-admin="isAdmin"
      title="Title3"
      previewText="loremipsum3"
    />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>