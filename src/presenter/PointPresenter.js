// point-presenter.js
import PointView from '../view/Point.js';

export default class PointPresenter {
  #pointContainer = null;     // <li class="trip-events__item">
  #point = null;              // данные точки (будут передаваться позже)

  #pointComponent = null;

  constructor({ container }) {
    this.#pointContainer = container;
  }

  init(point) {
    this.#point = point;
    this.#pointComponent = new PointView({
      point: this.#point   // ← сюда передаём данные точки
    });

    const li = document.createElement('li');
    li.classList.add('trip-events__item');
    li.appendChild(this.#pointComponent.getElement());

    this.#pointContainer.appendChild(li);

    // Здесь в будущем можно будет вешать обработчики:
    // this.#pointComponent.setClickHandler(this.#handleEditClick);
    // this.#pointComponent.setFavoriteClickHandler(this.#handleFavoriteClick);
    // и т.д.
  }

  // Пример будущих методов (пока закомментированы)
  // #handleEditClick = () => { ... }
  // #handleFavoriteClick = () => { ... }
}
