import React, { useEffect, useState } from 'react';
import './styles.css';

import api from '../../services/api'
import agingpotion from '../../assets/products/aging-potion.png'
import bulgeyepotion from '../../assets/products/bulgeye-potion.png'
import dragontonic from '../../assets/products/dragon-tonic.png'
import lovepotion from '../../assets/products/love-potion.png'
import polyjuicepotion from '../../assets/products/polyjuice-potion.png'
import sleepingdraught from '../../assets/products/sleeping-draught.png'

function Products() {

  const [potions, setPotions] = useState([])

  useEffect(() => {

    async function loadProducts() {
      const response = await api.get('/potions.json')

      setPotions(response.data.potions)
    }

    loadProducts();
  }, [])

  function formatStringImage(text) {
    const newString = text.replace(/-/g, '').slice(0, -4)

    switch (newString) {
      case 'agingpotion':
        return agingpotion
      case 'bulgeyepotion':
        return bulgeyepotion
      case 'dragontonic':
        return dragontonic
      case 'lovepotion':
        return lovepotion
      case 'polyjuicepotion':
        return polyjuicepotion
      case 'sleepingdraught':
        return sleepingdraught
      default:
        return
    }
  }

  function toggleModalPotions(id) {
    const potion = document.getElementById(`potion-` + `${id}`)

    if (potion.style.display === "flex") {
      potion.style.display = "none"
    } else {
      potion.style.display = "flex"
    }
  }

  return (
    <div className="product-area">
      <h2 className="potions-title">Potions</h2>
      <div className="grid">
        {potions ? Object.keys(potions).map(product => (
          <div key={potions[product].id} className="potions">
            <img className="potions-img" onClick={() => toggleModalPotions(potions[product].id)}
              src={formatStringImage(potions[product].image)} alt="#" />
            <div className="potions-description">
              <h4 className="potions-name">{potions[product].name + ' - '}</h4>
              <span className="potions-price">{'$' + potions[product].price}</span>
            </div>
            <div className="modal-potions" id={`potion-` + `${potions[product].id}`}>
              <div className="modal-potions-box">
                <i className="material-icons close-icon"
                  onClick={() => toggleModalPotions(potions[product].id)}>close</i>
                <div className="modal-potions-mobile row">
                  <img className="modal-potions-img" src={formatStringImage(potions[product].image)} alt="#" />
                  <div className="modal-potions-info">
                    <h4 className="modal-potions-name">{potions[product].name}</h4>

                    <label className="label-potions">Use/Effect:</label>
                    <p className="">{potions[product].effect}</p>

                    <div className="modal-potions-ingredients">
                      <label className="label-potions">Ingredients:</label>
                      {potions[product].ingredients.map(element => (
                        <span>{element}</span>
                      ))}
                    </div>

                    <label className="label-potions">Price:</label>
                    <p className="modal-potions-price">{'$' + potions[product].price}</p>

                    <button className="btn-add-cart">ADD TO CART</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )) : <div>false</div>}
      </div>
    </div >
  );
}

export default Products;
