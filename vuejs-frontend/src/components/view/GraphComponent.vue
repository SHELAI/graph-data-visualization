<template>
  <div class="container overflow-auto">
    <div id="graph-container" class="flex-grow flex justify-center items-center">
    <div id="graph" class="relative"></div>
  </div>
  <Sidebar v-if="selectedNode" :node="selectedNode" @close="closeSidebar" />
  <NotFound v-if="hasError" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as d3 from 'd3';
import { getGraphData } from '../../services/apiService';
import Sidebar from './Sidebar.vue';
import NotFound from '../../views/NotFound.vue';

const graphData = ref([]);
const selectedNode = ref(null);
const hasError = ref(false);
const isLoading = ref(true);

const fetchGraphData = async () => {
  try {
    graphData.value = await getGraphData();
    createGraph();
  } catch (error) {
    hasError.value = true;
  } finally {
    isLoading.value = false;
  }
};

const createGraph = () => {
  const width = 1200;
  const height = 600;

  const svg = d3.select('#graph')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(40,0)');

  const root = d3.stratify()
    .id(d => d.name)
    .parentId(d => d.parent)(graphData.value);

  const treeLayout = d3.tree().size([height, width - 160]);

  const links = treeLayout(root).links();
  const nodes = root.descendants();

  svg.selectAll('.link')
    .data(links)
    .enter().append('path')
    .attr('class', 'link')
    .attr('d', d3.linkHorizontal()
      .x(d => d.y)
      .y(d => d.x))
    .attr('fill', 'none')
    .attr('stroke', '#999')
    .attr('stroke-width', 2);

  const node = svg.selectAll('.node')
    .data(nodes)
    .enter().append('g')
    .attr('class', 'node')
    .attr('transform', d => `translate(${d.y},${d.x})`)
    .on('click', (event, d) => nodeClicked(d));

  node.append('rect')
    .attr('width', 100)
    .attr('height', 50)
    .attr('x', -35)
    .attr('y', -25)
    .attr('fill', 'skyblue')
    .attr('stroke', 'steelblue')
    .attr('stroke-width', 1.5);

  node.append('text')
    .attr('dx', 15)
    .attr('dy', 5)
    .attr('text-anchor', 'middle')
    .attr('alignment-baseline', 'middle')
    .text(d => d.id)
    .attr('fill', 'black');
};

const nodeClicked = (d) => {
  if (selectedNode.value && selectedNode.value.name === d.data.name) {
    selectedNode.value = null;
  } else {
    selectedNode.value = d.data;
  }
};

const closeSidebar = () => {
  selectedNode.value = null;
};

onMounted(fetchGraphData);
</script>

<style scoped>
.container {
  display: flex;
  min-height: 100vh;
}

#graph-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: margin-right 0.3s ease;
}

#graph {
  position: relative;
}

.link {
  fill: none;
  stroke: #999;
  stroke-width: 2px;
}
</style>
