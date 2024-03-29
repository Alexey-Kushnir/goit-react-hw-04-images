import React from 'react';
import ContentLoader from 'react-content-loader';

export const ImageGrid = props => (
  <ContentLoader
    speed={1}
    width={1488}
    height={812}
    viewBox="-420 40 1488 812"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="12" y="58" rx="2" ry="2" width="211" height="211" />
    <rect x="240" y="57" rx="2" ry="2" width="211" height="211" />
    <rect x="467" y="56" rx="2" ry="2" width="211" height="211" />
    <rect x="12" y="283" rx="2" ry="2" width="211" height="211" />
    <rect x="240" y="281" rx="2" ry="2" width="211" height="211" />
    <rect x="468" y="279" rx="2" ry="2" width="211" height="211" />
  </ContentLoader>
);

// 360*260
// 1488*812
