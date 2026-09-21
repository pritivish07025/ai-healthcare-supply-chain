@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  font-family: Inter, "Segoe UI", sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: #0f172a;
  background-color: #f8fafc;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background: #f8fafc;
  color: #0f172a;
}

#root {
  min-height: 100vh;
}

* {
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #e2e8f0;
}

::-webkit-scrollbar-thumb {
  background: #94a3b8;
  border-radius: 9999px;
}

::-webkit-scrollbar-thumb:hover {
  background: #64748b;
}
