"use strict";

function hotEncode(label, numOfClasses) {
    const zeroPad = Array(numOfClasses).fill(0);
    zeroPad[label] = 1;
    return zeroPad;
  }
  
  function intoIOobjectArray(inputFeatures, outputLabel) {
    const IOformatMapper = (inputFeature, i) => {
      const input = inputFeature;
      const output = outputLabel[i];
      return { input, output };
    };
    return inputFeatures.map(IOformatMapper);
  }
  
  function encodefeatures(features) {
    const INDEX_OF_LEGS = 12;
    const NUM_OF_LEGS = 9;
    const hotEncodeLegsNumMapper = (feature, i) =>
      i === INDEX_OF_LEGS
        ? hotEncode(features[INDEX_OF_LEGS], NUM_OF_LEGS)
        : feature;
    return features.map(hotEncodeLegsNumMapper).flat();
  }
  
  function encodeLabels(label) {
    const NUM_OF_CLASSES = 7;
    return hotEncode(label - 1, NUM_OF_CLASSES);
  }
  
  function preprocess(zooData) {
    const zooDataSamples = Object.entries(zooData);
    const train_dataset = [];
    const train_labels = [];
    zooDataSamples.forEach((zooDataSample) => {
      const [, v] = zooDataSample;
      const [features, label] = [v.slice(0, -1), ...v.slice(-1)];
      train_dataset.push(encodefeatures(features));
      train_labels.push(encodeLabels(label));
    });
    return intoIOobjectArray(train_dataset, train_labels);
  }

  module.exports = preprocess;