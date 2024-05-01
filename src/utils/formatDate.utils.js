const DAYS_OF_WEEK_ES = [
  'domingo',
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
];

const TIME_FORMAT_OPTIONS = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
};

const DIFFERENCE_DAY_LIMIT = {
  TODAY: 1,
  YESTERDAY: 2,
  WEEK: 7,
};

/**
 * Formats a date to display only the hour and minutes in 24-hour format,
 * or returns a relative date string like 'ayer' or the day of the week.
 * If the date is older than a week, returns the full date.
 * @param {string | number | Date} rawDate - The date in its original raw form.
 * @returns {string} The formatted time (HH:MM), relative date string, or full date.
 */
const formatTime = (rawDate) => {
  const currentDate = new Date();
  const targetDate = new Date(rawDate);
  const dayDifference = (currentDate - targetDate) / (1000 * 60 * 60 * 24);

  if (dayDifference < DIFFERENCE_DAY_LIMIT.TODAY) {
    return targetDate.toLocaleTimeString([], TIME_FORMAT_OPTIONS);
  }

  if (
    dayDifference >= DIFFERENCE_DAY_LIMIT.TODAY &&
    dayDifference < DIFFERENCE_DAY_LIMIT.YESTERDAY
  ) {
    return 'ayer';
  }

  if (
    dayDifference >= DIFFERENCE_DAY_LIMIT.YESTERDAY &&
    dayDifference < DIFFERENCE_DAY_LIMIT.WEEK
  ) {
    return DAYS_OF_WEEK_ES[targetDate.getDay()];
  }

  return targetDate.toLocaleDateString();
};

export { formatTime };
