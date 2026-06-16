<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import type { Project } from '../../types';
import ProjectItem from './ProjectItem.vue';
import ProjectDetails from './ProjectDetails.vue';

const props = defineProps<{
  projects: Project[]
}>();

const currentFilter = ref('all');
const activeProjectId = ref<number | null>(null);
const activeProject = computed(() => props.projects.find(p => p.id === activeProjectId.value));
const galleryRef = ref<HTMLElement | null>(null);

// Extract all unique tags present in the projects to build the filter bar dynamically
const uniqueTags = computed(() => {
  const tagsSet = new Set<string>();
  props.projects.forEach(p => {
    p.tags.forEach(t => tagsSet.add(t));
  });
  return Array.from(tagsSet).sort();
});

// Filter projects based on the active selection
const filteredProjects = computed(() => {
  if (currentFilter.value === 'all') {
    return props.projects;
  }
  return props.projects.filter(p =>
    p.tags.some(t => t.toLowerCase() === currentFilter.value.toLowerCase())
  );
});

const selectFilter = (filter: string) => {
  currentFilter.value = filter;
  activeProjectId.value = null; // Close any open project details when changing filters
};

const toggleProject = (id: number) => {
  if (activeProjectId.value === id) {
    activeProjectId.value = null;
  } else {
    activeProjectId.value = id;
  }
};

const closeProject = () => {
  activeProjectId.value = null;
};

// Handle clicks outside the gallery to close active project details
const handleOutsideClick = (e: MouseEvent) => {
  if (galleryRef.value && !galleryRef.value.contains(e.target as Node)) {
    activeProjectId.value = null;
  }
};

onMounted(() => {
  document.addEventListener('click', handleOutsideClick);
});

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick);
});
</script>

<template>
  <div class="gallery-card" ref="galleryRef">
    <div class="gallery-header">
      <span class="title">Projects &amp; Tech-Stack</span>
      <span class="badge">{{ projects.length }} projects</span>
      <span class="count">{{ filteredProjects.length }} / {{ projects.length }}</span>
    </div>
    <div class="gallery-container">
      <div class="filter-bar">
        <button
          class="filter-btn"
          :class="{ active: currentFilter === 'all' }"
          @click="selectFilter('all')"
        >
          All
        </button>
        <button
          v-for="tag in uniqueTags"
          :key="tag"
          class="filter-btn"
          :class="{ active: currentFilter === tag }"
          @click="selectFilter(tag)"
        >
          {{ tag }}
        </button>
      </div>
      
      <div class="compact-grid">
        <ProjectItem
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
          :isOpen="activeProjectId === project.id"
          @click="toggleProject(project.id)"
          @close="closeProject"
        />
        
        <div v-if="filteredProjects.length === 0" class="empty-state">
          <div>No projects to display.</div>
        </div>
      </div>
      
      <Transition name="fade">
        <ProjectDetails
          v-if="activeProject"
          :fullName="activeProject.fullName"
          :year="activeProject.year"
          :desc="activeProject.desc"
          :tags="activeProject.tags"
          :url="activeProject.url"
          :img="activeProject.img"
          @close="closeProject"
        />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.gallery-card {
  width: 100%;
  height: 100%;
  border: var(--border-xl) solid var(--color-muted);
  border-radius: calc(var(--radius-lg));
  background-color: var(--color-surface);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: var(--shadow-card);
}


.gallery-header {
  padding: 0.7rem 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(0, 0, 0, 0.2);
  flex-wrap: wrap;
  font-family: var(--font-body);
}

.gallery-header .title {
   font-family: 'Playfair Display', serif;
    font-weight: 900;
    font-size: 1rem;
  color: var(--color-heading);
}

.gallery-header .badge {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.1rem 0.6rem;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.3);
  color: var(--color-muted);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.gallery-header .count {
  font-size: 0.75rem;
  color: var(--color-accent);
  font-weight: 600;
}

.gallery-container {
  position: relative;
  flex: 1;
  background: var(--color-bg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.4);
}

.filter-bar {
  display: flex;
  gap: 0.2rem;
  padding: 0.3rem 0.6rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  flex-shrink: 0;
  background: rgba(0, 0, 0, 0.2);
  flex-wrap: wrap;
}

.filter-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--color-muted);
  font-family: var(--font-body);
  font-weight: 600;
  padding: 0.1rem 0.5rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all var(--transition) ease;
  white-space: nowrap;
  flex-shrink: 0;
}

.filter-btn:hover {
  border-color: var(--color-accent);
  color: var(--color-text);
}

.filter-btn.active {
  background: var(--color-accent);
  color: var(--color-heading);
  border-color: var(--color-accent);
  box-shadow: 0 0 20px rgba(194, 6, 15, 0.25);
}

.compact-grid {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  grid-auto-rows: 100px;
  gap: 0.25rem;
  padding: 4px;
  background: var(--color-bg);
  overflow-y: auto;
}

.compact-grid::-webkit-scrollbar {
  width: 3px;
  background: var(--color-surface);
}
.compact-grid::-webkit-scrollbar-thumb {
  background: var(--color-accent);
  border-radius: 2px;
}

.empty-state {
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-muted);
  padding: 2rem;
  font-family: var(--font-body);
}

@media (max-width: 600px) {
  .compact-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 400px) {
  .compact-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Slide-in details transition (fade) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
