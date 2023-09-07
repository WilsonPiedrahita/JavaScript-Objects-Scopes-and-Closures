class Rectangle {
  constructor(w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    } else {
      // If w or h is not a positive integer or is equal to 0, create an empty object
      Object.assign(this, {});
    }
  }
}

module.exports = Rectangle;
