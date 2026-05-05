import { useEffect } from 'react';

export const usePageTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Urban Creators & Developers`;
  }, [title]);
};
