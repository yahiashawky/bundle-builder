import useBundleStore from "./store/bundleStore";

function App() {
  const cart = useBundleStore((state) => state.cart);
  const increment = useBundleStore((state) => state.increment);

  return (
    <div className="p-10">
      <button
        onClick={() => increment("camera", "black")}
        className="rounded bg-black px-4 py-2 text-white"
      >
        Add
      </button>

      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </div>
  );
}

export default App;
