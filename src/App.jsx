import Accordion from "./components/Accordion/Accordion";
import ReviewPanel from "./components/Review/ReviewPanel";

function App() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <Accordion />
        <ReviewPanel />
      </div>
    </main>
  );
}

export default App;
