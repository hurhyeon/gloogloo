SpecialNode.vue
<template>
    <div class="special-node">
      {{ node && node.label }}
      <p>Test Content</p>
    </div>
  
  </template>
  
  <script>
  export default {
    props: {
      node: Object,
    },
  };
  </script>
  
  <style scoped>
  .special-node {
    background-color: #7e57c2;
    color: #ffffff;
    padding: 8px;
    border-radius: 4px;
  }
 
  </style>
  