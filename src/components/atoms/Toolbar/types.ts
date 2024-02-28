import React from 'react';

export interface IToolbar {
  children: React.ReactNode;
  onClick?: () => void;
}
