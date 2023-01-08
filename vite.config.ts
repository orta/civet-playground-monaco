import { defineConfig } from 'vite'
import reactPlugin from '@vitejs/plugin-react-swc'
import civetPlugin from 'vite-plugin-civet'
import monacoEditorPlugin from 'vite-plugin-monaco-editor';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactPlugin(),
    monacoEditorPlugin({
      languageWorkers: ["typescript"]
    }),
    civetPlugin({
      stripTypes: true,
      outputExtension: 'tsx',
      outputTransformerPlugin: 'vite:react-swc',
    }),
  ],
})
