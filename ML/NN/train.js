"use strict";
const zooData = require("./zooData.js"); // Data
const preprocess = require("./preprocess.js"); // Preprocess
const { NeuralNetwork, CrossValidate } = require("brain.js"); // Training/Validation
const fs = require("fs"); // Saving to file

// Configure NN architecture
const architecture = {
  binaryThresh: 0.5,
  hiddenLayers: [12],
  activation: "leaky-relu",
  leakyReluAlpha: 0.01,
};

// Train model
const crossValidate = new CrossValidate(NeuralNetwork, architecture);
const preprocessedData = preprocess(zooData);
console.log("preprocessed data: ", preprocessedData);
crossValidate.train(preprocessedData);

// Crossvalidate model
const crossValidationResults = crossValidate.toJSON();
console.log(crossValidationResults);

// Console log model
const net = crossValidate.toNeuralNetwork();
const zooNNmodel = net.toJSON();
const zooNNmodelString = JSON.stringify(zooNNmodel, null, " ");
console.log(zooNNmodelString);

// Write model to a json file
fs.writeFile(`${__dirname}/nnModel.json`, zooNNmodelString, (err) => {
  if (err) throw err;
  console.log("Model to json file");
});
