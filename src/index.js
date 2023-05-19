import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Checkbox from './Checkbox';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Checkbox />
  </StrictMode>
);
