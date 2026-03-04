import AbstractView from 'src/framework/view/abstract-view.js';  // скорректируйте путь при необходимости

export default class PointView extends AbstractView {
  #point = null;
  #destination = null;
  #offers = null;

  constructor({ point, destination, offers }) {
    super();
    this.#point = point;
    this.#destination = destination;
    this.#offers = offers;
  }

  /**
   * @override
   * @returns {string} HTML-шаблон точки маршрута (события)
   */
  get template() {
    return `
      <li class="trip-events__item">
        <div class="event">
          <time class="event__date" datetime="${this.#point.dateFrom?.toISOString().split('T')[0] || ''}">
            ${this.#formatDate(this.#point.dateFrom)}
          </time>

          <div class="event__type">
            <img
              class="event__type-icon"
              width="17"
              height="17"
              src="img/icons/${this.#point.type}.png"
              alt="Event type icon"
            >
          </div>

          <h3 class="event__title">
            ${this.#point.type} ${this.#destination?.name || ''}
          </h3>

          <div class="event__schedule">
            <p class="event__time">
              <time class="event__start-time" datetime="${this.#point.dateFrom?.toISOString() || ''}">
                ${this.#formatTime(this.#point.dateFrom)}
              </time>
              &mdash;
              <time class="event__end-time" datetime="${this.#point.dateTo?.toISOString() || ''}">
                ${this.#formatTime(this.#point.dateTo)}
              </time>
            </p>
          </div>

          <p class="event__price">
            &euro;&nbsp;<span class="event__price-value">${this.#point.basePrice || 0}</span>
          </p>

          <!-- Здесь обычно добавляют offers и favorite кнопку -->
        </div>
      </li>
    `.trim();
  }

  // вспомогательные приватные методы для форматирования
  #formatDate(date) {
    if (!date) return '';
    // можно подключить date-fns или написать свою функцию
    return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
  }

  #formatTime(date) {
    if (!date) return '';
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  }

  // Удалено:
  // • this.element = null
  // • getElement()
  // • getTemplate()
}
