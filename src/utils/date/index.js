export const getChatTime = (date) => {
  const hour = date.getHours();
  const minutes = date.getMinutes();
  return `${hour}:${minutes} ${hour > 12 ? 'PM' : 'AM'}`;
};
export const setChatDate = (oldDate) => {
  const year = oldDate.getFullYear();
  const month = oldDate.getMonth();
  const date = oldDate.getDate();
  return `${year}-${month}-${date}`;
};
