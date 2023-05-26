const DateObject = ({ dt = Date.now(), localString = "en-GB" }) => {
  const dateObject = new Date(dt).toLocaleString(localString, {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return dateObject;
};

export default DateObject;
