import { ProjetosProvider } from "./shared/contexts/ProjetosContext";

import { MyRoutes } from "./routes/MyRoutes";

function App() {
  return (
    <ProjetosProvider>
      <MyRoutes />
    </ProjetosProvider>
  );
}

export default App;
