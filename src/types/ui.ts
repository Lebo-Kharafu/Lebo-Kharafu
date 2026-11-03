import type { Experience, SocialLink, StackCard } from './portfolio';
import type { Project } from './project';

export type NavDirection = 'row' | 'col';

export interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  navDirection: NavDirection;
  bigScreen: boolean;
}

export interface CardItem {
  id?: number | string;
  image?: string;
  badge?: string;
  title?: string;
  description?: string;
  [key: string]: unknown;
}

export type PillStatus = 'active' | 'inactive';

export interface LayoutContainerProps {
  mainTextColor?: string;
  subTextColor?: string;
  mainColor?: string;
  subColor?: string;
  height?: string;
  width?: string;
  image?: string;
}

export interface NavbarProps {
  links?: SocialLink[];
  avatar?: SocialLink;
  direction?: NavDirection;
}

export interface StackCardsProps {
  items: number | CardItem[] | StackCard[];
  height?: string;
  width?: string;
  offset?: string;
  textColor?: string;
  color?: string;
}

export interface ProjectGalleryProps {
  projects: Project[];
}

export interface ProjectDetailsProps {
  fullName: string;
  year: string;
  desc: string;
  tags: string[];
  url?: string;
  img?: string;
}

export interface ProjectItemProps {
  project: Project;
  isOpen: boolean;
}

export interface TechStackListProps {
  experiences: Experience[];
  perPage?: number;
}

export interface PillItemProps {
  label: string;
  status?: PillStatus;
}

export interface SubBoxProps {
  borderColor?: string;
  backgroundColor?: string;
}

export interface SvgIconDefinition {
  viewBox: string;
  path: string;
  strokeWidth?: string | number;
  strokeLinecap?: 'inherit' | 'round' | 'butt' | 'square';
  strokeLinejoin?: 'inherit' | 'round' | 'miter' | 'bevel';
}

