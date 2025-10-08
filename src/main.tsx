import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import AntdThemeContext from '~/contexts/AntdThemeContext.tsx';
import { QueryContext } from '~/contexts/QueryContext.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <AntdThemeContext>
                <QueryContext>
                    <App />
                </QueryContext>
            </AntdThemeContext>
        </BrowserRouter>
    </StrictMode>
);
