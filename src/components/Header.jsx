import React from 'react';

const Header = () => {
  return (
    // - Tem os data-testids `profile-top-btn`, `page-title` e `search-top-btn`

    <header>
      <section>
        <Input
          type="text"
          data-testid="search-input"
          value="searchIngredient"
          onChange={ {} }
        />
        <br />

        <Input 
          type="radio"
          data-testid="ingredient-search-radio"
          name="food"   
          value="searchByName"   
          onChange={ {} }    
        />

        <Input 
          type="radio"
          data-testid="first-letter-search-radio"
          name="food"        
          value="searchByFirstLetter"   
          onChange={ {} }        
        />

        <Button 
          
        />

      </section>



      
    </header>
  )
}