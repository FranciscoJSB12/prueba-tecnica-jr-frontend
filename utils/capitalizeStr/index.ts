export const capitalizeStr = (str: string): string => {
  return str.replace(/\b\w/g, (l) => l.toUpperCase());
};
