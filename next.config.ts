import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        protocol:'https',
         hostname: 'links.papareact.com',   
         port:'',
         pathname:'/**'
      },
    ],
    
  }
};

export default nextConfig;
