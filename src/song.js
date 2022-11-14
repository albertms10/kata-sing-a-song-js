"use strict";

const { joinVerses, joinStanzas } = require("./utils.js");

/**
 * @param {string|undefined} animal
 * @param {string} punctuation
 * @returns {string}
 */
function firstVerse(animal, punctuation = ";") {
  return `There was an old lady who swallowed a ${animal}${punctuation}`;
}

/**
 * @returns {string}
 */
function customVerse1() {
  return `That wriggled and wiggled and tickled inside her.`;
}

/**
 * @param {string|undefined} animal
 * @returns {string}
 */
function customVerse2(animal) {
  return `How absurd to swallow a ${animal}.`;
}

/**
 * @param {string|undefined} animal
 * @returns {string}
 */
function customVerse3(animal) {
  return `Fancy that to swallow a ${animal}!`;
}

/**
 * @param {string|undefined} animal
 * @returns {string}
 */
function customVerse4(animal) {
  return `What a hog, to swallow a ${animal}!`;
}

/**
 * @param {string|undefined} animal
 * @returns {string}
 */
function customVerse5(animal) {
  return `I don't know how she swallowed a ${animal}!`;
}

/**
 * @returns {string}
 */
function lastCustomVerse() {
  return `...She's dead, of course!`;
}

/**
 * @param {string|undefined} swallowed
 * @param {string|undefined} catched
 * @param {string} punctuation
 * @returns {string}
 */
function swallowVerse(swallowed, catched, punctuation = ",") {
  return `She swallowed the ${swallowed} to catch the ${catched}${punctuation}`;
}

/**
 * @param {string|undefined} animal
 * @returns {string}
 */
function lastVerse(animal) {
  return `I don't know why she swallowed a ${animal} - perhaps she'll die!`;
}

/**
 * @param {string[]} animals
 * @param {(animal?: string) => string} [customVerse]
 * @returns {string}
 */
function stanza(animals, customVerse) {
  const swallowedVerses = [];

  for (var i = animals.length - 1; i > 0; i--) {
    const swallowed = animals.at(i);
    const catched = animals.at(i - 1);

    swallowedVerses.push(swallowVerse(swallowed, catched, i === 1 ? ";" : ","));
  }

  return joinVerses(
    firstVerse(animals.at(-1), animals.length === 1 ? "." : ";"),
    customVerse?.(animals.at(-1)),
    ...swallowedVerses,
    lastVerse(animals.at(0))
  );
}

/**
 * @param {string|undefined} animal
 * @returns {string}
 */
function lastStanza(animal) {
  return joinVerses(firstVerse(animal, "..."), lastCustomVerse());
}

/**
 * Sings a song given a series of animals.
 *
 * @param {string[]} animals
 * @returns {string} The song to be sung.
 */
function sing(animals) {
  const customVerses = [
    customVerse1,
    customVerse2,
    customVerse3,
    customVerse4,
    customVerse5,
  ];

  const stanzas = [];

  for (var i = 0; i < animals.length - 1; i++) {
    stanzas.push(
      stanza(
        animals.slice(0, i + 1),
        i === 0 ? undefined : customVerses.at((i - 1) % customVerses.length)
      )
    );
  }

  return joinStanzas(...stanzas, lastStanza(animals.at(-1)));
}

module.exports = { sing };
