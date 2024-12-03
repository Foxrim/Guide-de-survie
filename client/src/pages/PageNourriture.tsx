import "./PageNourriture.css";

function PageNourriture() {
  return (
    <div className="mypage">
      <section>
        <header>
          <h1 className="food_title">Nourriture</h1>
        </header>
        <div className="food_container">
          <div className="food">
            <button type="button" className="my_button">
              Riz
            </button>
          </div>
          <div className="food">
            <button type="button" className="my_button">
              Pomme de terre
            </button>
          </div>
          <div className="food">
            <button type="button" className="my_button">
              Carotte
            </button>
          </div>
          <div className="food">
            <button type="button" className="my_button">
              Pomme
            </button>
          </div>

          <div className="food">
            <button type="button" className="my_button">
              Haricot
            </button>
          </div>
          <div className="food">
            <button type="button" className="my_button">
              Courgette
            </button>
          </div>
          <div className="food">
            <button type="button" className="my_button">
              Patate douce
            </button>
          </div>
          <div className="food">
            <button type="button" className="my_button">
              Choux
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PageNourriture;
