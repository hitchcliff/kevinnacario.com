import { useEffect, useMemo } from 'react';
import { PortfolioService } from '../../api';

export default function usePortfolioService() {
  useEffect(() => {
    let cleanupFns: (() => void)[] = [];
    const { getPortfolioItems } = new PortfolioService();
    cleanupFns = [getPortfolioItems];

    return function cleanup() {
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return useMemo(() => new PortfolioService(), []);
}
