import { HeaderSearch } from '@/features/misc/components/Header/components/HeaderSearch/HeaderSearch';
import * as React from 'react';


type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
    <HeaderSearch />
    {children}
    </>
  );
};