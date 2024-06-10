export const formatDate = (
  input: string | number,
  { month = 'short' }: { month?: 'long' | 'short' } = {},
) => {
  const date = new Date(input);
  const monthLocale = date.toLocaleString('ko-KR', { month });
  return `${date.getUTCFullYear()}년 ${monthLocale} ${date.getUTCDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`;
};
