import React from "react";
import RecipeCard from "../components/RecipeCard";
import { useState, useEffect } from "react";

const Home = () => {

    const [recipies, setRecipies] = useState([]);
    const [loading, setLoading] = useState(false);
  
    async function fetchData() {
      setLoading(true);
      const res = await fetch(
        'https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=9251def575c24968b5bb0d98824e0be0'
      );
      const data = await res.json();
  
      setLoading(false);
      setRecipies(data.results || []);
    }
  
    return (
        <>
            {/* <button
            className="px-4 py-2 bg-blue-500 text-white rounded border"
            onClick={() => {
              console.log('trying to fetch data');
              fetchData();
              console.log('attempt made to fetch data');
            }}
            >
                Get Recipes
            </button> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {!loading ? (
                        recipies.map((recipe) => <RecipeCard key={recipe.id} {...recipe} />)
                    ) : (
                        <div className="text-white">Loading the data, please wait...</div>
                    )
                }   
            </div>
            <section className="flex flex-col justify-center items-center gap-16 pt-24 ">
                <div className="font-light text-white text-5xl"> 
                    <span className="text-amber-600 font-semibold text-5xl">
                        Deliciousness{" "}
                    </span>

                    <span className="text-white font-semibold text-4xl">is just </span>
                    <span className="after:content-['\a'] before:content-['\a'] whitespace-pre after:block before:block leading-3 font-semibold text-4xl">  a single click away with</span>
                    <span className="font-semibold text-amber-600 leading-3 whitespace-pre">    Recipe </span> 
                    <span className="font-semibold text-white-600">Realm</span>
                </div>
                <p className="max-w-[300px] sm:max-w-[500px] md:max-w-[700px] text-[#fafafac3] text-[16px] pt-10 text-center">
                    Welcome to RecipeRealm, the ultimate destination for food enthusiasts
                    and aspiring chefs. Our website offers a vast collection of
                    mouth-watering recipes, ranging from classic dishes to trendy and
                    innovative creations. Join us on a journey of culinary exploration and
                    satisfaction, and make every meal a masterpiece with RecipeRealm.
                </p>
            </section>
        </>
    );
}

export default Home;