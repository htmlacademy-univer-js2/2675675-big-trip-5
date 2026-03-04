export default class PointView {
    constructor({ point, destination, offers }) {
      this.point = point;
      this.destination = destination;
      this.offers = offers;
      this.element = null;
    }
  
    getTemplate() {
      return `
        <div class="event">
          <h3 class="event__title">
            ${this.point.type} ${this.destination.name}
          </h3>
  
          <p class="event__price">
            € ${this.point.basePrice}
          </p>
        </div>
      `;
    }
  
    getElement() {
      if (!this.element) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = this.getTemplate();
        this.element = wrapper.firstElementChild;
      }
  
      return this.element;
    }
  }
  