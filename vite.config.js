import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    return {
        // Base configuration (both development and production)
        plugins: [
            laravel({
                input: 'resources/js/app.jsx',
                refresh: true,
            }),
            react(),
        ],
        // Additional configurations for production
        ...(mode === 'production' ? {
            // Production-specific configurations
            // Example: Adjust the base path, enable compression, etc.
        } : {})
    };
});
