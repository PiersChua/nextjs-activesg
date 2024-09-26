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

export { get12HourTime, formatDurationUnit };
