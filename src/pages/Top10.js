import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";

const Top10 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://api.coingecko.com/api/v3/search/trending/?precision=3";

    fetch(url).then((response) =>
      response.json().then((data) => setData(data))
    );
  }, []);

  return data.length === 0 ? (
    // <h1>Loading...</h1>
  
  <div class="mt-48 flex justify-center">
    <div role="status" class="max-w-sm animate-pulse">
      <div class="mb-4 h-3 w-64 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div class="mb-2.5 h-2 w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div class="mb-2.5 h-2 w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div class="mb-2.5 h-2 w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div class="mb-2.5 h-2 w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div class="mb-2.5 h-2 w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div class="mb-2.5 h-2 w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div class="mb-2.5 h-2 w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div class="mb-2.5 h-2 w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>

      <div class="mb-2.5 h-4 w-[120px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <span class="sr-only">Loading...</span>
    </div>
  </div>



  ) : (
    <div>
      <Cards data={data.coins} checker={"top10"} />
    </div>
  );
};

export default Top10;
