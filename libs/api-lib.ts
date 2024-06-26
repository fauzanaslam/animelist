export const getAnime = async (resource: string, query?: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${resource}?${query}`
  );
  const data = await response.json();
  return data;
};

export const getRecommendedAnime = async (
  resource: string,
  objectProperty: string
) => {
  const response = await getAnime(resource);
  return response.data?.flatMap((item: any) => item[objectProperty]);
};

export const reproduce = (data: any, gap: any) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;

  const response = {
    data: data.slice(first, last),
  };

  return response;
};
