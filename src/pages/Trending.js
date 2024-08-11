import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";

const Trending = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // API FETCH LOGIC
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (data.length === 0) {
    return (
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
    )
  } else {
    return (
      <div>
        <Cards data={data} />
      </div>
    );
  }
};

export default Trending;
