import clsx from "clsx";
import Image from "next/image";
import React from "react";

const StatCard = ({
  count = 0,
  label,
  icon,
  type,
}: {
  type: "appointments" | "pending" | "cancelled";
  icon: string;
  count: number;
  label: string;
}) => {
  return (
    <div
      className={clsx("stat-card", {
        "bg-appointments": type === "appointments",
        "bg-pending": type === "pending",
        "bg-cancelled": type === "cancelled",
      })}
    >
      <div className="flex flex-items-center gap-4">
        <Image
          src={icon}
          width={32}
          height={32}
          alt={label}
          className="size-8 w-fit"
        />
        <h2 className="text-32-bold text-white">{count}</h2>
      </div>
      <p className="text-14-regular">{label}</p>
    </div>
  );
};

export default StatCard;
