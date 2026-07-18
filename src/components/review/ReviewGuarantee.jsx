function ReviewGuarantee() {
  return (
    <div className="mb-8">
      <div className="flex items-start gap-6">
        <img
          src="/images/products/guarantee_badge.png"
          alt="Guarantee"
          className="h-[131px] w-[131px]"
        />

        <div className="pt-2">
          <h3 className="text-[18px] font-semibold text-[#101828]">
            30-day hassle-free returns
          </h3>

          <p className="mt-3 max-w-62.5 text-[16px] leading-7 text-[#344054]">
            If you're not totally in love with the product, we will refund you
            100%.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReviewGuarantee;
