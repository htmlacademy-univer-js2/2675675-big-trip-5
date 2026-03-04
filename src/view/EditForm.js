export default class EditFormView {
    constructor() {
      this.element = null;
    }
  
    getTemplate() {
      return `
        <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-edit">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-edit" type="checkbox">
          </div>

          <div class="event__field-group event__field-group--destination">
            <label class="event__label event__type-output" for="event-destination-edit">Flight</label>
            <input class="event__input event__input--destination" id="event-destination-edit" type="text" name="event-destination" value="Chamonix" list="destination-list-edit">
            <datalist id="destination-list-edit">
              <option value="Amsterdam"></option>
              <option value="Geneva"></option>
              <option value="Chamonix"></option>
            </datalist>
          </div>

          <div class="event__field-group event__field-group--time">
            <label class="visually-hidden" for="event-start-time-edit">From</label>
            <input class="event__input event__input--time" id="event-start-time-edit" type="text" name="event-start-time" value="18/03/19 12:25">
            &mdash;
            <label class="visually-hidden" for="event-end-time-edit">To</label>
            <input class="event__input event__input--time" id="event-end-time-edit" type="text" name="event-end-time" value="18/03/19 13:35">
          </div>

          <div class="event__field-group event__field-group--price">
            <label class="event__label" for="event-price-edit">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input event__input--price" id="event-price-edit" type="text" name="event-price" value="160">
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
  