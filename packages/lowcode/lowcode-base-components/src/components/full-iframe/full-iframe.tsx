import * as React from 'react';
import { createElement } from 'react';

export interface FullIframeProps {
  /** 链接地址 */
  url: string;
}

const FullIframe: React.FC<FullIframeProps> = function FullIframe({ url }) {
  return <iframe src={url} frameborder="0" style={{ height: '100%', width: '100%' }}></iframe>;
};

export default FullIframe;
