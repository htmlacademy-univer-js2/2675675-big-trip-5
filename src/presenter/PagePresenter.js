import FilterView from '../view/Filters.js';
import SortView from '../view/Sortings.js';
import CreateFormView from '../view/CreateForm.js';
import EditFormView from '../view/EditForm.js';
import PointView from '../view/Point.js';

export default class PagePresenter {
  constructor(container) {
    this.container = container;
  }

  init() {
    const filterComponent = new FilterView();
    this.container.appendChild(filterComponent.getElement());

    const sortComponent = new SortView();
    this.container.appendChild(sortComponent.getElement());

    const createFormComponent = new CreateFormView();
    this.container.appendChild(createFormComponent.getElement());

    const listContainer = document.createElement('ul');
    listContainer.classList.add('trip-events__list');
    this.container.appendChild(listContainer);

    const editFormComponent = new EditFormView();
    const editLi = document.createElement('li');
    editLi.classList.add('trip-events__item');
    editLi.appendChild(editFormComponent.getElement());
    listContainer.appendChild(editLi);

    for (let i = 0; i < 3; i++) {
      const pointComponent = new PointView();
      const li = document.createElement('li');
      li.classList.add('trip-events__item');
      li.appendChild(pointComponent.getElement());
      listContainer.appendChild(li);
    }
  }
}
