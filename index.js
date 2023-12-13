// Your code here
class Polygon {
    constructor(intArray) {
        this._sides = intArray
    }

    get countSides() {
        return this._sides.length
    }

    get perimeter() {
        return this._sides.reduce((accumulator, currentValue) => accumulator + currentValue)
    }
}

class Triangle extends Polygon {
    get isValid() {
        return this._sides[0] + this._sides[1] > this._sides[2] &&
        this._sides[0] + this._sides[2] > this._sides[1] &&
        this._sides[1] + this._sides[2] > this._sides[0] &&
        this.countSides === 3
    }
}

class Square extends Polygon {
    get isValid() {
      return this._sides[0] === this._sides[1] &&
      this._sides[1] === this._sides[2] &&
      this._sides[2] === this._sides[3] &&
      this._sides[3] === this._sides[0] &&
      this.countSides === 4
    }

    get area() {
        return this._sides[0] * this._sides[1]
    }
}
