import type { FC } from "react";
import type { TCard } from "../../core/types/TCard";

const Card: FC<TCard<boolean | number>> = ({
  title,
  description,
  isCompleted,
  onClik
}) => {
  return (
    <div className="task-card w-[90%] py-2 flex justify-around items-center shadow-[0_1px_10px_#C0C0C0] rounded-xl">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <p
        className={`text-center font-bold ${
          isCompleted
            ? "text-green-600 text-shadow-green-600"
            : "text-red-600 text-shadow-red-600"
        }`}
      >
        {isCompleted ? "Active" : "Disabled"}
      </p>
      <button className={`btn ${isCompleted ? "bg-red-600" : "bg-blue-600"}`} onClick={onClik}>
        {isCompleted ? "Disabled" : "Active"}
      </button>
    </div>
  );
};

export default Card;
