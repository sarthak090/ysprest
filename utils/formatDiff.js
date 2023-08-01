export function formatDate(inputDate) {
  if (!inputDate) {
    return '';
  }
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const parts = inputDate.split(/[- :]/);
  const year = parseInt(parts[0]);
  const month = parseInt(parts[1]);
  const day = parseInt(parts[2]);

  const formattedDate = `${months[month - 1]} ${day}, ${year}`;
  return formattedDate;
}
