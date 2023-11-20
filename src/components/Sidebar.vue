<script setup>
function onDragStart(event, nodeType) {
  if (event.dataTransfer) {
    event.dataTransfer.setData('application/vueflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  }
}
</script>

<template>
  <aside class="bottom-sidebar">
    <div class="description">You can drag these nodes to the pane.</div>

    <div class="nodes">
      <div class="node-input" :draggable="true" @dragstart="onDragStart($event, 'input')">Inputs Node</div>

      <div class="node-default" :draggable="true" @dragstart="onDragStart($event, 'default')">Default Node</div>

      <div class="node-output" :draggable="true" @dragstart="onDragStart($event, 'output')">Output Node</div>

      <div class="node-combobox" :draggable="true" @dragstart="onDragStart($event, 'combobox')">Combobox Node</div>


    </div>
  </aside>
</template>

<style scoped>
.bottom-sidebar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #000; /* Set the background color to black */
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.description {
  color: #fff; /* Set text color to white */
  margin-bottom: 10px;
}

.nodes {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.node-input,
.node-default,
.node-output,
.node-combobox {
  background-color: #333; 
  color: #fff; 
  padding: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  width: 100px; 
  text-align: center;
  border-radius: 4px;
}

.node-input:hover,
.node-default:hover,
.node-output:hover,
.node-combobox:hover {
  background-color: #555;
}
</style>
