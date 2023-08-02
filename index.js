const { Shape, Circle, Triangle, Square } = require("./shapes");
const fs = require("fs");
const inquirer = require("inquirer");
const { promisify } = require("util");

const shapeClasses = {
  circle: Circle,
  triangle: Triangle,
  square: Square,
};

const writeFileAsync = promisify(fs.writeFile);

async function generateLogo() {
  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "text",
        message: "Enter up to three characters for the logo:",
        validate: function (value) {
          if (value.length > 3) {
            return "Please enter 1-3 characters";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter a color keyword for the text:",
      },
      {
        type: "list",
        name: "shape",
        message: "Select a shape for the logo:",
        choices: ["circle", "triangle", "square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Enter a color keyword for the shape:",
      },
    ]);

    const { text, textColor, shape, shapeColor } = answers;
    const ShapeClass = shapeClasses[shape];
    const shapeInstance = new ShapeClass(shapeColor);
    const svgString = shapeInstance.render(text, textColor);

    await writeFileAsync("logo.svg", svgString);
    console.log("Generated logo.svg");
  } catch (err) {
    console.error("Error generating logo:", err.message);
  }
}

generateLogo();
