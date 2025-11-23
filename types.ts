import React from 'react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  readTime: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export type Theme = 'light' | 'dark';

export interface NavItem {
  label: string;
  path: string;
  icon: React.ElementType;
}

// Simple Router Types
export type RoutePath = '/' | '/docs' | '/projects' | string;