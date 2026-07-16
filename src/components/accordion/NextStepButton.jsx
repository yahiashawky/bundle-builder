import steps from "../../data/steps";
import useBundleStore from "../../store/bundleStore";
import { hasSelectedProducts } from "../../store/selectors";

function NextStepButton({ step, setOpenStep }) {
  const nextStep = steps.find((s) => s.id === step.id + 1);
  const canContinue = useBundleStore((state) =>
    hasSelectedProducts(state, step.products),
  );

  if (!nextStep) return null;
  if (!canContinue) return null;

  return (
    <div className="flex justify-center pt-6">
      <button
        type="button"
        onClick={() => setOpenStep(nextStep.id)}
        className="
          rounded-md
          border
          border-violet-600
          px-4
          py-2
          text-sm
          font-medium
          text-violet-600
          transition
          hover:bg-violet-600
          hover:text-white
        "
      >
        Next: {nextStep.title}
      </button>
    </div>
  );
}

export default NextStepButton;
