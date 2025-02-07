import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})


// defineConfg is a helper function provided by Vite. It helps with typing and is mainly used for better IDE support and readability. It's not strictly necessary, but it improves the developer experience

//IDE - integrated development environment key features could be a code editor, debugger etc