import { useEffect } from "react";
import BundleBuilder from "./components/BundleBuilder/BundleBuilder";
import useBundleStore from "./store/bundleStore";
import { Toaster } from "react-hot-toast";
function App() {
  const loadBundle = useBundleStore((state) => state.loadBundle);

  useEffect(() => {
    loadBundle();
  }, [loadBundle]);
  return (
    <>
      <BundleBuilder />;
      <Toaster />
    </>
  );
}

export default App;
