import React from "react";
import prisma from "@/lib/db";

const getPassTypes = async () => {
  const age = 15; // check for user's age
  const data = await prisma.passType.findMany({
    where: {
      minAge: { lte: age },
      maxAge: { gte: age },
    },
  });
  return data;
};

const PassTypesPage = async () => {
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
