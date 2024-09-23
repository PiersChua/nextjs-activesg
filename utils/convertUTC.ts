const utcToLocal = (time: Date) => {
  const localTime = time.setTime(time.getTime() + 8 * 60 * 60 * 1000);
  console.log(new Date());
  //   console.log(localTime.toLocaleString());
  //   return new Date();
};

const localToUTC = (time: Date) => {};

export { utcToLocal, localToUTC };
