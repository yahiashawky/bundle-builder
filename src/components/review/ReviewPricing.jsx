function ReviewPricing() {
  return (
    <div className="mb-6">
      <div className="flex justify-between">
        <div>
          <div className="h-[120px] w-[120px] rounded-full bg-[#5B4CF0]" />
        </div>

        <div className="text-right">
          <p className="text-[18px] line-through text-[#98A2B3]">$238.81</p>

          <h2 className="text-[42px] font-bold text-[#5B4CF0]">$187.89</h2>
        </div>
      </div>

      <p className="mt-5 text-center text-[#00B388]">
        Congrats! You're saving $50.92 on your security bundle!
      </p>
    </div>
  );
}

export default ReviewPricing;
