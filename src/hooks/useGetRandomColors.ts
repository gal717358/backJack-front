export const useGetRandomColors = () => {
  const colors = ['red', 'black'];
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
};
