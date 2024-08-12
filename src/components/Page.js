import React from "react";
import { BiColor } from "react-icons/bi";

const Page = ({data}) => {
    
    // console.log(data.links.homepage[0])

    return (


        <div className="font-display">

            <div class="flex items-center justify-between w-full px-4 py-2">
            <div>
                <img 
                        src={ data.image.large}
                        alt={ data.name} 
                class="h-24 w-24"
                />
            </div>
            <div class="flex flex-col items-end">
                    <h1 class="font-semibold text-2xl">{ data.name}</h1>
                    <h2>{data.symbol} #{data.market_cap_rank }</h2>
                </div>
                
            </div>
            <hr class="w-1 h-1 mx-auto my-8 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
            
            <div className="flex justify-center">
                <h1 className="font-bold text-2xl p-4 border rounded-md">$ { data.market_data.current_price.usd }</h1>
            </div>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
               
            <div className="flex justify-between px-4 font-semibold">
                <div>
                    <h1>24h High</h1>
                </div>
                <div>
                    ${data.market_data.high_24h.usd}
                </div>
                
            </div>


            <div className="flex justify-between px-4 font-semibold">
            <div>
                    <h1>24h Low</h1>
                </div>
                <div>
                    ${data.market_data.low_24h.usd}
                </div>
            </div>

            <div className="flex justify-between px-4 font-semibold">
            <div>
                    <h1>Total Supply</h1>
                </div>
                <div>
                    {data.market_data.total_supply}
                </div>
            </div>

            <div className="flex justify-between px-4 font-semibold">
            <div>
                    <h1>Market Cap</h1>
                </div>
                <div>
                    ${data.market_data.market_cap.usd}
                </div>
            </div>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            
            <div className="p-4">
                <div>
                    <h1 className="font-display font-semibold text-2xl">Description</h1>
                </div>
                <p className="font-display text-sm pt-2">
                    { data.description.en}
                </p>
            </div>

            <hr class="w-1 h-1 mx-auto my-8 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
            
        
            
        </div>
    )
}

export default Page;
