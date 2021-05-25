<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: '1',
              title: 'Hello World!', 
              previewText: 'This is our first Lorem Ipsum Test'
            },
            {
              id: '2', 
              title: 'Hello World 2!', 
              previewText: 'This is our first Lorem Ipsum Test 2'
            }
          ]
        })
      }, 1500)

    }).then(data => {
      return data
    }).catch(e => {
      context.error(new Error())
    })

  },
}
</script>


<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>