import "./Eau.css";

function Eau() {
  return (
    <div className="mypage">
      <section>
        <header>
          <h1 className="eau_title">La filtration d'eau</h1>
        </header>
        <div className="water_container">
          <div className="water">
            <span>
              Filtres à tamis : Capturent les particules de grande taille, comme
              le sable et les débris.
            </span>
            <button type="button" className="my_button">
              Filtre mécanique
            </button>
          </div>
          <div className="water">
            <span>
              Ils utilisent du charbon actif pour absorber les contaminants et
              les mauvaises odeurs.
            </span>
            <button type="button" className="my_button">
              Filtre à charbon actif
            </button>
          </div>
          <div className="water">
            <span>
              Il est utilisé pour dessaler l’eau de mer ou purifier l’eau dans
              les industries et les foyers.
            </span>
            <button type="button" className="my_button">
              Osmose inverse
            </button>
          </div>
          <div className="water">
            <span>
              La lampe est utilisées en complément d'autres systèmes pour rendre
              l’eau potable.
            </span>
            <button type="button" className="my_button">
              Lampe Ultraviolet
            </button>
          </div>

          <div className="water">
            <span>
              Contiennent des couches de sable, de gravier, et de charbon actif
              qui éliminent les bactéries.
            </span>
            <button type="button" className="my_button">
              Filtres biologiques
            </button>
          </div>
          <div className="water">
            <span>
              Chauffent l’eau jusqu’à évaporation, puis la condensent pour
              éliminer les métaux lourds.
            </span>
            <button type="button" className="my_button">
              Système de distillation
            </button>
          </div>
          <div className="water">
            <span>
              Utilisés pour éliminer le calcaire et les ions responsables de la
              dureté de l’eau (calcium).
            </span>
            <button type="button" className="my_button">
              Adoucisseurs d'eau
            </button>
          </div>
          <div className="water">
            <span>
              Fonctionnent sans électricité et sont idéaux pour les randonnées,
              les zones rurales.
            </span>
            <button type="button" className="my_button">
              Filtre gravitationnel
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Eau;
