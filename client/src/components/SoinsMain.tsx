import "./SoinsMain.css";

function SoinsMain() {
  return (
    <section className="SoinsMain">
      <div className="PageSoins">
        <h2>Soins</h2>
      </div>

      <div className="SeparateurSoinsPage" />

      <div className="ContainerCardSoinsMain">
        <section className="cardBackSoins">
          <div className="cardContainerSoins">
            <h4>
              Traitement des blessures superficielles (coupures, éraflures)
            </h4>
            <p>
              Matériel : Eau propre, antiseptique, pansements improvisés
              (vêtements propres, feuilles non toxiques).
            </p>
            <p>
              Méthode : Nettoyez la plaie pour éviter les infections, appliquez
              une pression pour arrêter le saignement, et couvrez avec une
              protection stérile ou improvisée.
            </p>
            <h4>Immobilisation d'une entorse ou fracture</h4>
            <p>
              Matériel : Bâtons droits, morceaux de bois, vêtements pour
              attelles.
            </p>
            <p>
              Méthode : Immobilisez la zone blessée à l'aide d'attelles, puis
              serrez légèrement avec du tissu ou une corde pour réduire la
              douleur et éviter des dégâts supplémentaires.
            </p>
            <h4>Traitement de l'hypothermie</h4>
            <p>
              Matériel : Couvertures, vêtements secs, source de chaleur (feu,
              pierres chauffées).
            </p>
            <p>
              Méthode : Enveloppez la victime, donnez-lui des boissons chaudes
              si elle est consciente, et évitez tout contact direct avec une
              source de chaleur intense pour ne pas aggraver la situation.
            </p>
            <h4>Soins contre les brûlures légères</h4>
            <p>
              Matériel : Eau propre, feuilles non toxiques ou bandes propres.
            </p>
            <p>
              Méthode : Refroidissez immédiatement la zone brûlée avec de l'eau
              propre ou un matériau humide pendant au moins 10 minutes, puis
              couvrez-la avec un pansement improvisé.
            </p>
            <h4>Extraction de corps étrangers (échardes, épines)</h4>
            <p>Matériel : Aiguille stérile ou couteau propre.</p>
            <p>
              Méthode : Retirez délicatement l'objet avec l'aiguille, puis
              désinfectez la zone pour prévenir l'infection.
            </p>
            <h4>Gestion des piqûres d'insectes ou morsures</h4>
            <p>
              Matériel : Froid (eau ou glace), feuilles de plantes médicinales
              (si connues), ou antidouleur improvisé.
            </p>
            <p>
              Méthode : Retirez le dard (si présent), appliquez du froid pour
              réduire le gonflement, et surveillez les signes de réactions
              allergiques graves (gonflement généralisé, difficulté à respirer).
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}

export default SoinsMain;
