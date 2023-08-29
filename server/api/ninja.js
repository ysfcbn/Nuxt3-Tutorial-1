export default defineEventHandler(async (event) => {
  // const { name } = getQuery(event);
  // return `Hello, ${name}!`;

  // api call with private key
  const { data: currency } = await $fetch(
    'https://api.currencyapi.com/v3/latest?apikey=cur_live_80nYHQcFEiii07WPI8Abw7L5Gv0tCmFE4ti5nMCk&currencies=EUR%2CUSD%2CCAD'
  );

  const { name } = getQuery(event);
  const body = await readBody(event);
  return { body, name, currency};
});
