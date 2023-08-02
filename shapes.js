class Shape {
  constructor(color) {
    this.color = color;
  }
}
//circle
class Circle extends Shape {
  render(text, textColor) {
    return `<svg width="300" height="200">
          <circle cx="150" cy="100" r="80" fill="${this.color}" />
          <text x="50%" y="50%" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`;
  }
}
//triangle 
class Triangle extends Shape {
  render(text, textColor) {
    return `<svg width="300" height="200">
          <polygon points="150,20 260,180 40,180" fill="${this.color}" />
          <text x="50%" y="50%" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`;
  }
}
//square
class Square extends Shape {
  render(text, textColor) {
    return `<svg width="300" height="200">
          <rect x="30" y="30" width="240" height="140" fill="${this.color}" />
          <text x="50%" y="50%" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };
