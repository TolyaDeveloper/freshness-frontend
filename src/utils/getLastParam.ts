export const getLastParam = (url: string) =>
  url.split('/').at(-1)?.split('?')[0]
