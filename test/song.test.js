"use strict";

const song = require("../src/song.js");
const expectedSong = require("./mock/expectedSong.js");

describe("The song", () => {
  it("is sung", () => {
    expect(song).toEqual(expectedSong);
  });
});
