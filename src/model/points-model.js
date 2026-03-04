export default class PointsModel {
    constructor(points, destinations, offers) {
      this.points = points;
      this.destinations = destinations;
      this.offers = offers;
    }
  
    getPoints() {
      return this.points;
    }
  
    getDestinationById(id) {
      return this.destinations.find((d) => d.id === id);
    }
  
    getOffersByIds(ids) {
      return this.offers.filter((o) => ids.includes(o.id));
    }
  }
  