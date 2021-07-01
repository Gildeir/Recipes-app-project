// import React, { useContext, useState } from 'react';
// import PropTypes from 'prop-types';
// import { useHistory, useLocation } from 'react-router-dom';
// import ContextRecipe from '../provider/ContextRecipe';

// function DetalhesComidas(props) {
//   const { apiDataFood } = useContext(ContextRecipe);
//   console.log(apiDataFood);
//   const { match: { params: { id } } } = props;

//   return (
//     <>
//       {/* Foto do atributo */}
//       <img
//         // src={}
//         data-testid="recipe-photo"
//         alt="Thumbnail"
//       />

//       {/* título */}
//       <h1 data-testid="recipe-title">
//         {}
//       </h1>

//       {/* botão de compartilhar */}
//       <input
//         type="image"
//         alt="share"
//         data-testid="share-btn"
//         // src={}
//         onClick={ {} }
//       />

//       {/* botão de favoritar */}
//       <input
//         type="image"
//         alt="share"
//         data-testid="favorite-btn"
//         // src={}
//         onClick={ {} }
//       />

//       {/* Texto da categoria */}
//       <h5 data-testid="recipe-category">
//         falta renderizar categoria dinamicamente
//       </h5>

//       {/* Ingredientes */}
//       <h3>Ingredients</h3>
//       <ul>
//         {/* Fazer um map dos ingredientes renderizando li
//       dentro da li o data-testid="${index}-ingredient-name-and-measure";
//       */}
//       </ul>

//       {/* Instruções */}
//       <h3>Instruções</h3>
//       <p data-testid="instructions">
//         falta renderizar categoria instruções
//       </p>

//       {/* Vídeo YT | na API a chave é strYoutube */}
//       <iframe
//         data-testid="video"
//         title="video"
//       />

//       {/* Receitas recomendadas */}
//       <button
//         type="button"
//         data-testid="${index}-recomendation-card"
//         label={ {} }
//       />
//       {/* <img

//         />

//       </button> */}

//     </>
//   );
// }

// DetalhesComidas.propTypes = {
//   food: PropTypes.objectOf(PropTypes.any).isRequired,
// };

// export default DetalhesComidas;
