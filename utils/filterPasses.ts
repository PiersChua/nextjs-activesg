import { Pass, PassCategory, PassType } from "@prisma/client";
import { isExpired } from "./formatDateTime";

type ExtendedPass = Pass & {
  passType: PassType;
};
const filterPasses = (
  passes: ExtendedPass[],
  passCategory: PassCategory | undefined,
  passStatus: string
) => {
  if (passCategory == "SWIM") {
    passes = passes.filter((pass) => pass.passType.category === "SWIM");
  } else if (passCategory == "GYM") {
    passes = passes.filter((pass) => pass.passType.category === "GYM");
  }
  if (passStatus === "Active") {
    passes = passes.filter(
      (pass) => pass.isActive && !isExpired(pass.endDate!)
    );
  } else if (passStatus === "Inactive") {
    passes = passes.filter((pass) => !pass.isActive);
  } else if (passStatus === "Expired") {
    passes = passes.filter((pass) => pass.isActive && isExpired(pass.endDate!));
  }
  return passes;
};

export { filterPasses };
