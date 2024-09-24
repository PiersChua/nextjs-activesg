export const get12HourTime = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return `${hours % 12 || 12}:${minutes.toString().padStart(2, "0")} ${
    hours < 12 ? "AM" : "PM"
  }`;
};
