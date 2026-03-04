// page-presenter.js
import FilterView from '../view/Filters.js';
import SortView from '../view/Sortings.js';
import CreateFormView from '../view/CreateForm.js';
import EditFormView from '../view/EditForm.js';

import PointPresenter from './PointPresenter.js';   // ← новый импорт

export default class PagePresenter {

  #container = null;
  #pointListContainer = null;

  // Массив дочерних презентеров точек
  #pointPresenters = [];

  constructor(container) {
    this.#container = container;
  }

  init() {
    // Фильтр
    const filterComponent = new FilterView();
    this.#container.appendChild(filterComponent.getElement());

    // Сортировка
    const sortComponent = new SortView();
    this.#container.appendChild(sortComponent.getElement());

    // Форма создания (новая точка)
    const createFormComponent = new CreateFormView();
    this.#container.appendChild(createFormComponent.getElement());

    // Контейнер для всех точек и редактирования
    this.#pointListContainer = document.createElement('ul');
    this.#pointListContainer.classList.add('trip-events__list');
    this.#container.appendChild(this.#pointListContainer);

    // Временная форма редактирования (пока одна на всю страницу)
    const editFormComponent = new EditFormView();
    const editLi = document.createElement('li');
    editLi.classList.add('trip-events__item');
    editLi.appendChild(editFormComponent.getElement());
    this.#pointListContainer.appendChild(editLi);

    // Создаём и инициализируем презентеры для точек
    // В реальном проекте данные придут из модели, здесь — заглушка
    const mockPoints = [{ id: 1 }, { id: 2 }, { id: 3 }]; // ← потом заменить на this.#pointsModel.getPoints()

    mockPoints.forEach(pointData => {
      const pointPresenter = new PointPresenter({
        container: this.#pointListContainer
      });

      pointPresenter.init(pointData);
      this.#pointPresenters.push(pointPresenter);
    });
  }

  // В будущем здесь будут методы:
  // addPoint(point) { ... }
  // updatePoint(id, updatedPoint) { ... }
  // removePoint(id) { ... }
}
