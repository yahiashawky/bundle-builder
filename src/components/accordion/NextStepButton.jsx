function NextStepButton() {
  return (
    <div className="flex justify-center pt-4">
      <button
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
        Next: Choose your sensors
      </button>
    </div>
  );
}

export default NextStepButton;
