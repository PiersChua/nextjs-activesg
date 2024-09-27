const get12HourTime = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return `${hours % 12 || 12}:${minutes.toString().padStart(2, "0")} ${
    hours < 12 ? "AM" : "PM"
  }`;
};

const formatDurationUnit = (durationInDays: number) => {
  if (durationInDays > 1) {
    const months = durationInDays / 30;
    return `${months}${months > 1 ? ` Months` : ` Month`}`;
  } else {
    return `${durationInDays} Day`;
  }
};

const getStartAndEndDate = (durationInDays: number) => {
  const currentDateUTC = new Date();
  const currentDateSG = new Date(currentDateUTC.getTime() + 8 * 60 * 60 * 1000); // use current SG date to store in db
  const endDateUTC = new Date();
  endDateUTC.setDate(currentDateUTC.getDate() + durationInDays - 1); // include today
  return { currentDateSG, endDateUTC };
};

export { get12HourTime, formatDurationUnit, getStartAndEndDate };
