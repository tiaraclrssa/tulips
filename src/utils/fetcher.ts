export const fetchRandomUsers = async (count: number) => {
  const res = await fetch(`https://randomuser.me/api/?results=${count}`);
  const data = await res.json();
  return data.results;
};

