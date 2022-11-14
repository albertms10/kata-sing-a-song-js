"use strict";

const { sing } = require("../src/song.js");
const expectedSong = require("./mock/expectedSong.js");

describe("The song", () => {
  it("is sung", () => {
    // Arrange
    const animals = ["fly", "spider", "bird", "cat", "dog", "cow", "horse"];
    // Act
    const song = sing(animals);
    // Assert
    expect(song).toEqual(expectedSong);
  });
});
