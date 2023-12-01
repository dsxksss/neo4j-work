<script setup>
import KnowledgeGraph from './components/KnowledgeGraph.vue';
import TrendChart from './components/TrendChart.vue';
</script>

<template>
  <n-tabs style="margin: 20px;" type="segment" animated>
    <n-tab-pane class="contentCenter" name="chap1" tab="知识图谱">
      <KnowledgeGraph></KnowledgeGraph>
    </n-tab-pane>

    <n-tab-pane class="contentCenter" name="chap2" tab="趋势图">
      <TrendChart></TrendChart>
    </n-tab-pane>

  </n-tabs>
</template>


<style scoped>
.contentCenter {
  display: flex;
  margin-left: 50px;
  margin-right: 50px;
  height: 90vh;
  width: 100vw;
  justify-content: center;
  align-items: start;
}
</style>