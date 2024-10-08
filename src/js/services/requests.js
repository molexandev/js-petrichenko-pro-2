const postData = async (url, data) => {
   let res = await fetch(url, {
      method: 'POST',
      body: data,
   });

   return await res.text();
};

const getResources = async (url) => {
   let res = await fetch(url);

   if (!res.ok) {
      throw new Error(`Culd not fetch ${url}, status: ${res.status}`);
   }

   return await res.json();
};

export { postData, getResources };
