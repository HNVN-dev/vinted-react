import notfound from "../assets/img/vinted-404.png";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img src={notfound} alt="Vestiaire page non trouvée" />
      <h2>La page n'existe pas</h2>
      Désolé, mais on dirait que cette page n'existe plus. Pourquoi ne pas
      revenir en arrière et essayer autre chose ?
    </div>
  );
};

export default NotFound;
