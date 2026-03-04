export default class CreateFormView {
    constructor() {
      this.element = null;
    }
  
    getTemplate() {
      return `
        <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-create">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/taxi.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-create" type="checkbox">
            <div class="event__type-list">
              <!-- Тут можно добавить список типов, как в edit-form -->
            </div>
          </div>

          <div class="event__field-group event__field-group--destination">
            <label class="event__label event__type-output" for="event-destination-create">Taxi</label>
            <input class="event__input event__input--destination" id="event-destination-create" type="text" name="event-destination" value="" list="destination-list-create">
            <datalist id="destination-list-create">
              <option value="Amsterdam"></option>
              <option value="Geneva"></option>
              <option value="Chamonix"></option>
            </datalist>
          </div>

          <div class="event__field-group event__field-group--time">
            <label class="visually-hidden" for="event-start-time-create">From</label>
            <input class="event__input event__input--time" id="event-start-time-create" type="text" name="event-start-time" value="">
            &mdash;
            <label class="visually-hidden" for="event-end-time-create">To</label>
            <input class="event__input event__input--time" id="event-end-time-create" type="text" name="event-end-time" value="">
          </div>

          <div class="event__field-group event__field-group--price">
            <label class="event__label" for="event-price-create">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input event__input--price" id="event-price-create" type="text" name="event-price" value="">
          </div>

          <button class="event__save-btn btn btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Delete</button>
        </header>
      </form>
      `;
    }
  
    getElement() {
      if (!this.element) {
        const temp = document.createElement('div');
        temp.innerHTML = this.getTemplate();
        this.element = temp.firstElementChild;
      }
      return this.element;
    }
  }
  