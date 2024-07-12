import React from 'react';
import Banner from '../component/Banner.js';
import bannerImage from '../images&logo/banner à propos.png';
import CollapseComponent from '../component/Collapse.js';
import '../styles/APropos.scss'

function A_propos() {
  return (
    <div>
      <div>
        <Banner backgroundImage={bannerImage}/>
      </div>
      <div className='collapse'>
        <CollapseComponent
          title="Fiabilité"
          children="Les annonces postées sur Kasa garantissent une fiabilité totale. 
          Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
              
        <CollapseComponent
          title="Respect"
          children="La bienveillance fait partie des valeurs fondatrices de Kasa.
          Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
        />

        <CollapseComponent
          title="Service"
          children="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
          N'hésitez pas à nous contacter si vous avez la moindre question."
        />

        <CollapseComponent
          title="Sécurité"
          children="La sécurité est la priorité de Kasa. 
          Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
          En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
          Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  );
}

export default A_propos;