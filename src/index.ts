'use client';

import * as Panelbear from '@panelbear/panelbear-js';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * React hook for automatically tracking navigation changes on Next.js apps.
 *
 * @param site the Panelbear site ID.
 * @param config the Panelbear tracker configuration object.
 */
export default function usePanelbear(site: string, config: Panelbear.PanelbearConfig = {}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    Panelbear.load(site, config);
  }, []);

  useEffect(() => {
    Panelbear.trackPageview();
  }, [pathname, searchParams]);

  return Panelbear;
}
