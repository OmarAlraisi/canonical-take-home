export const formatDate = (raw: string): string => {
  const date = new Date(raw);

  const format: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return date.toLocaleDateString('en-US', format);
};
