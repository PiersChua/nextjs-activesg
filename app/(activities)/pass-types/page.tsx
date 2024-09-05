import React from "react";
import prisma from "@/lib/db";
import { getSessionUser } from "@/utils/getSessionUser";
import { redirect } from "next/navigation";

const PassTypesPage = async () => {
  const getPassTypes = async () => {
    const user = await getSessionUser();
    const age = user?.age;
    if (!age) {
      redirect("/user-profile");
    }
    const data = await prisma.passType.findMany({
      where: {
        minAge: { lte: age },
        maxAge: { gte: age },
      },
    });
    return data;
  };
  const passTypeData = await getPassTypes();
  return (
    <div>
      <ul>
        {passTypeData.map((passType) => (
          <li key={passType.id}>
            {`$ ${Math.round(passType.price).toFixed(2)}`} -{" "}
            {passType.durationInDays > 1 ? (
              <>{passType.durationInDays / 30} Month</>
            ) : (
              <>{passType.durationInDays} Day</>
            )}
            {passType.isPeak !== null && (
              <p>{passType.isPeak ? "Peak" : " Non peak"}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PassTypesPage;
