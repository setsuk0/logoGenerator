const { Circle, Triangle, Square } = require("./shapes");

describe("Shape", () => {
  test("color property is set correctly", () => {
    const shape = new Circle("red");
    expect(shape.color).toBe("red");
  });
});

describe("Circle", () => {
  test("render method returns valid SVG for circle", () => {
    const circle = new Circle("red");
    const svg = circle.render("Test", "white");
    expect(svg).toContain("<circle");
    expect(svg).toContain('fill="red"');
    expect(svg).toContain("Test");
    expect(svg).toContain('fill="white"');
  });
});

describe("Triangle", () => {
  test("render method returns valid SVG for triangle", () => {
    const triangle = new Triangle("green");
    const svg = triangle.render("Test", "white");
    expect(svg).toContain("<polygon");
    expect(svg).toContain('fill="green"');
    expect(svg).toContain("Test");
    expect(svg).toContain('fill="white"');
  });
});

describe("Square", () => {
  test("render method returns valid SVG for square", () => {
    const square = new Square("blue");
    const svg = square.render("Test", "white");
    expect(svg).toContain("<rect");
    expect(svg).toContain('fill="blue"');
    expect(svg).toContain("Test");
    expect(svg).toContain('fill="white"');
  });
});
