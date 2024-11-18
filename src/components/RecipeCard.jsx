import { useState, useEffect } from "react";

function RecipeCard({ id, image, title, strArea }) {

    const [imgError, setImgError] = useState(false);
  
    const handleImageError = () => {
        setImgError(true); // Set image error state if image fails to load 
        // setting the image before loading .
    };

    return (
        <div
        className="card group w-64 bg-[#2f2922] shadow-xl text-white mt-8 cursor-pointer pt-0 rounded border"
        key={id}
        >
        <figure className="p-2 group-hover:scale-110 transition-all duration-300">
            {/* Handling image error directly */}
            {image && !imgError ? (
            <img
                src={image}
                alt="Meal Image"
                className="rounded-xl"
                onError={handleImageError} // Handle image load error
            />
            ) : (
            <div>Loading Image...</div>
            )}
        </figure>
        <div className="card-body items-center text-center text-amber-50 group-hover:text-amber-200 transition-all duration-300">
            <h2 className="card-title">{title}</h2>
            <span className="text-amber-200 group-hover:text-amber-400 transition-all duration-300">
            {strArea}
            </span>
        </div>
        </div>
    );
}
  
export default RecipeCard;