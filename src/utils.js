const VERSE_SEPARATOR = "\n";
const STANZA_SEPARATOR = VERSE_SEPARATOR + VERSE_SEPARATOR;

/**
 * @param {(string|undefined)[]} verses
 * @returns {string}
 */
function joinVerses(...verses) {
  return verses.filter(Boolean).join(VERSE_SEPARATOR);
}

/**
 * @param {(string|undefined)[]} stanzas
 * @returns {string}
 */
function joinStanzas(...stanzas) {
  return stanzas.filter(Boolean).join(STANZA_SEPARATOR);
}

module.exports = { joinVerses, joinStanzas };
