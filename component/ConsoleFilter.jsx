'use client';

import { useEffect } from 'react';

const blockedPatterns = [
  'Document already loaded',
  'Attempting to initialize AdUnit',
  'AdUnit initialized successfully',
  '[HMR] connected',
  'content-script.js',
  'forward-logs-shared.ts',
];

function shouldBlock(...args) {
  const message = args.join(' ');
  return blockedPatterns.some((pattern) => message.includes(pattern));
}

export default function ConsoleFilter() {
  useEffect(() => {
    const originalLog = console.log;
    const originalInfo = console.info;
    const originalWarn = console.warn;
    const originalError = console.error;

    console.log = (...args) => {
      if (!shouldBlock(...args)) originalLog.apply(console, args);
    };

    console.info = (...args) => {
      if (!shouldBlock(...args)) originalInfo.apply(console, args);
    };

    console.warn = (...args) => {
      if (!shouldBlock(...args)) originalWarn.apply(console, args);
    };

    console.error = (...args) => {
      if (!shouldBlock(...args)) originalError.apply(console, args);
    };

    return () => {
      console.log = originalLog;
      console.info = originalInfo;
      console.warn = originalWarn;
      console.error = originalError;
    };
  }, []);

  return null;
}

