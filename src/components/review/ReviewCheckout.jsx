import toast from "react-hot-toast";
import useBundleStore from "../../store/bundleStore";

function ReviewCheckout() {
  const saveBundle = useBundleStore((state) => state.saveBundle);

  function handleSave() {
    saveBundle();
    toast.success("System saved successfully!");
  }

  return (
    <>
      <button className="h-12 w-full rounded-md bg-[#5B4CF0] font-semibold text-white">
        Checkout
      </button>

      <button
        type="button"
        onClick={handleSave}
        className="mt-4 w-full text-center text-[14px] text-[#667085] underline"
      >
        Save my system for later
      </button>
    </>
  );
}

export default ReviewCheckout;
