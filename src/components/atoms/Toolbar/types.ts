import { CSSProperties } from '@mui/styled-engine-sc';
import React from 'react';

export interface IToolbar {
  children: React.ReactNode;
  variant?: 'dense' | 'regular';
  style?: CSSProperties;
  onClick?: () => void;
}
