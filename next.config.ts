import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Allow loading dev resources (HMR, client chunks) when the app is opened
  // from the LAN IP (e.g. testing on a phone), not just localhost.
  allowedDevOrigins: ['192.168.1.61'],
};

export default nextConfig;
