// src/data/details.ts
import type { PortfolioDetails, Project } from '../types/index'
import rawDetails from "./details.json";
import rawProjects from './projects.json'
export const details: PortfolioDetails = rawDetails;
export const projects: Project[] = rawProjects;