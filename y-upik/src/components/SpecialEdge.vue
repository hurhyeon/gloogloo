<!-- SpecialEdge.vue -->
<template>
    <svg :style="{ position: 'absolute', pointerEvents: 'none' }">
      <path
        :d="edge.path"
        fill="none"
        stroke="#7e57c2"
        stroke-width="2"
        marker-end="url(#arrow)"
      />
    </svg>
  </template>
  
  <script>
  export default {
    props: {
      edge: Object,
    },
  };
  </script>
    