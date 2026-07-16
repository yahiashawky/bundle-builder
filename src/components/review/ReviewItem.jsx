import { Minus, Plus } from "lucide-react";

function ReviewItem({ item }) {
  return (
    <div className="flex items-center justify-between py-3">
      {/* Left */}
      <div className="flex items-center gap-3">
        <img
          src={item.image}
          alt={item.title}
          className="h-10 w-10 rounded bg-white object-contain"
        />

        <p className="text-[16px] text-[#111827]">{item.title}</p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <button>
            <Minus size={14} />
          </button>

          <span>{item.quantity}</span>

          <button>
            <Plus size={14} />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="line-through text-[#98A2B3]">
            ${item.compareAtPrice}
          </span>

          <span className="font-semibold text-[#5B4CF0]">${item.price}</span>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
