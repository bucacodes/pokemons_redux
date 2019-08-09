/* eslint react/prop-types: 0 */
import React from "react";

const RandomPokemonComponent = props => {
  let { name, height, weight, base_experience, images } = props.pokemon;
  console.log(props.error);
  return (
    <div id="main">
      <div className="random_pokemon">
        <p className="pName">{name ? `Name: ${name}` : ''}</p>
        <p className="pHeight">{height ? `Height: ${height}` : ''}</p>
        <p className="pWeight">{weight ? `Weight: ${weight}`: ''}</p>
        <p className="pExp">{base_experience ? `Experience: ${base_experience}` : ''}</p>
        <img src={images ? images.front_default : ''} />
        <p className="error-msg">{props.error ? 'Sorry, please try again!' : ''}</p>
      </div>
      <button className="randomize_btn" onClick={props.handleClick}>
        Get Random Pokemon!
      </button>
    </div>
  );
};

export default RandomPokemonComponent;
