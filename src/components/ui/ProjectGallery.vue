<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { ChevronDown } from 'lucide-vue-next';
import type { ProjectGalleryProps } from '../../types';
import ProjectItem from './ProjectItem.vue';
import ProjectDetails from './ProjectDetails.vue';

const props = defineProps<ProjectGalleryProps>();

const currentFilter = ref('all');
const activeProjectId = ref<number | null>(null);
const galleryRef = ref<HTMLElement | null>(null);
const isFilterExpanded = ref(false);

const toggleFilterExpanded = () => {
  isFilterExpanded.value = !isFilterExpanded.value;
};

const activeProject = computed(() =>
  props.projects.find((p) => p.id === activeProjectId.value)
);

// Dynamic unique tags extracted from projects
const uniqueTags = computed(() => {
  const tagsSet = new Set<string>();
  props.projects.forEach((p) => {
    p.tags.forEach((t) => tagsSet.add(t));
  });
  return Array.from(tagsSet).sort();
});

// Filtered project list
const filteredProjects = computed(() => {
  if (currentFilter.value === 'all') {
    return props.projects;
  }
  return props.projects.filter((p) =>
    p.tags.some((t) => t.toLowerCase() === currentFilter.value.toLowerCase())
  );
});

const selectFilter = (filter: string) => {
  currentFilter.value = filter;
  activeProjectId.value = null;
};

const toggleProject = (id: number) => {
  activeProjectId.value = activeProjectId.value === id ? null : id;
};

const closeProject = () => {
  activeProjectId.value = null;
};

// Click outside and Escape key handling for accessible UX
const handleOutsideClick = (e: MouseEvent) => {
  if (galleryRef.value && !galleryRef.value.contains(e.target as Node)) {
    closeProject();
  }
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    closeProject();
  }
};

onMounted(() => {
  document.addEventListener('click', handleOutsideClick);
  document.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick);
  document.removeEventListener('keydown', handleKeyDown);
});
</script>

<template>
  <div class="gallery-card" ref="galleryRef" role="region" aria-label="Projects and Tech-Stack Gallery">
    <header class="gallery-header">
      <span class="title">Projects &amp; Tech-Stack</span>
      <span class="badge">{{ projects.length }} projects</span>
      <span class="count" aria-live="polite">{{ filteredProjects.length }} / {{ projects.length }}</span>
    </header>

    <div class="gallery-container">
      <div class="filter-section">
        <nav
          class="filter-bar"
          :class="{ expanded: isFilterExpanded }"
          aria-label="Project category filters"
        >
          <button
            type="button"
            class="filter-btn"
            :class="{ active: currentFilter === 'all' }"
            :aria-pressed="currentFilter === 'all'"
            @click="selectFilter('all')"
          >
            All
          </button>
          <button
            v-for="tag in uniqueTags"
            :key="tag"
            type="button"
            class="filter-btn"
            :class="{ active: currentFilter === tag }"
            :aria-pressed="currentFilter === tag"
            @click="selectFilter(tag)"
          >
            {{ tag }}
          </button>
        </nav>
        <button
          type="button"
          class="filter-toggle-btn"
          :aria-expanded="isFilterExpanded"
          :aria-label="isFilterExpanded ? 'Collapse tech-stack tags' : 'Expand tech-stack tags'"
          @click="toggleFilterExpanded"
        >
          <ChevronDown
            class="chevron-icon"
            :class="{ rotated: isFilterExpanded }"
            :size="15"
            aria-hidden="true"
          />
        </button>
      </div>

      <section class="compact-grid" aria-label="Project grid">
        <ProjectItem
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
          :isOpen="activeProjectId === project.id"
          @click="toggleProject(project.id)"
          @close="closeProject"
        />

        <div v-if="filteredProjects.length === 0" class="empty-state">
          <p>No projects match the selected filter.</p>
        </div>
      </section>

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
  border: 1px solid var(--color-charade);
  border-radius: var(--radius-card);
  background-color: var(--surface-card-dark);
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
  border-bottom: 1px solid var(--color-charade);
  background: rgba(0, 0, 0, 0.25);
  flex-wrap: wrap;
  font-family: var(--font-family);
}

.gallery-header .title {
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  font-size: 1rem;
  color: var(--color-white);
}

.gallery-header .badge {
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  padding: 0.2rem 0.65rem;
  border-radius: var(--radius-small);
  background: rgba(255, 255, 255, 0.04);
  color: var(--color-oslo-gray);
  border: 1px solid var(--color-charade);
}

.gallery-header .count {
  font-size: var(--font-size-small);
  font-family: var(--font-mono);
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}

.gallery-container {
  position: relative;
  flex: 1;
  background: var(--surface-page-dark);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.4);
}

.filter-section {
  display: flex;
  align-items: flex-start;
  gap: 0.35rem;
  padding: 0.4rem 0.6rem;
  border-bottom: 1px solid var(--color-charade);
  flex-shrink: 0;
  background: rgba(0, 0, 0, 0.2);
}

.filter-bar {
  display: flex;
  gap: 0.3rem;
  flex: 1;
  min-width: 0;
  flex-wrap: wrap;
  max-height: 1.85rem;
  overflow: hidden;
  transition: max-height var(--transition-default) ease;
}

.filter-bar.expanded {
  max-height: 12rem;
  overflow-y: auto;
}

.filter-bar::-webkit-scrollbar {
  width: 3px;
}
.filter-bar::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: 2px;
}

.filter-toggle-btn {
  background: transparent;
  border: 1px solid var(--color-charade);
  color: var(--color-oslo-gray);
  border-radius: var(--radius-small);
  width: 1.65rem;
  height: 1.65rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  padding: 0;
  transition: all var(--transition-default);
}

.filter-toggle-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: var(--color-primary-subtle);
}

.filter-toggle-btn:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 1px;
}

.chevron-icon {
  transition: transform var(--transition-default) ease;
}

.chevron-icon.rotated {
  transform: rotate(180deg);
}

.filter-btn {
  background: transparent;
  border: 1px solid var(--color-charade);
  color: var(--color-oslo-gray);
  font-family: var(--font-family);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-small);
  padding: 0.15rem 0.6rem;
  border-radius: var(--radius-small);
  cursor: pointer;
  transition: all var(--transition-default);
  white-space: nowrap;
  flex-shrink: 0;
}

.filter-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: var(--color-primary-subtle);
}

.filter-btn:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.filter-btn.active {
  background: var(--color-primary);
  color: var(--color-primary-contrast);
  border-color: var(--color-primary);
}

.compact-grid {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  grid-auto-rows: 100px;
  gap: 0.75rem;
  padding: 0.75rem;
  background: var(--surface-page-dark);
  overflow-y: auto;
}

/* Fallback: Webkit Custom Scrollbar */
.compact-grid::-webkit-scrollbar {
  width: 4px;
  background: var(--surface-card-dark);
}
.compact-grid::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: 2px;
}

/* Native CSS Standard Scrollbar */
@supports (scrollbar-color: auto) {
  .compact-grid {
    scrollbar-width: thin;
    scrollbar-color: var(--color-primary) var(--surface-card-dark);
  }
}

.empty-state {
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-oslo-gray);
  padding: 2rem;
  text-align: center;
}

/* Modal details fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.96);
}
</style>
