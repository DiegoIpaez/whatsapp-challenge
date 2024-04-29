/**
 * Formats a date to display only the hour and minutes in 24-hour format.
 * @param {string | number | Date} rawDate - The date in its original raw form.
 * @returns {string} The formatted time (HH:MM).
 */
const formatTime = (rawDate) => {
  const date = new Date(rawDate);

  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };

  const formattedTime = date.toLocaleTimeString([], timeOptions);
  return formattedTime;
};

export { formatTime };
