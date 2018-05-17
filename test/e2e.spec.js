/* global define, it, describe, beforeEach, document */
const express = require("express");
const path = require("path");
const Nightmare = require("nightmare");
const expect = require("chai").expect;
const axios = require("axios");

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, "/../public")));
app.use(express.static(path.join(__dirname, "/../dist")));

app.listen(8888);

const url = "http://localhost:8888";

describe("Test Cases", () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it("should have the correct page title", () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector("h1").innerText)
      .end()
      .then(text => {
        expect(text).to.equal("Movie Finder");
      }));

  it("returns the correct status code", () =>
    axios.get(url).then(response => expect(response.status === 200)));

  it("should respond with an array of movies", () =>
    axios.get(url).then(response => expect(response.data == Array)));

  it("should have an input for user to search a movie", () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector("input"))
      .end()
      .then(input => {
        expect(input).to.exist;
      })).timeout(20000);

  it("should have a button to perform axios calls", () =>
    nightmare
      .goto(url)
      .evaluate(() => document.getElementsByClassName("button"))
      .end()
      .then(button => {
        expect(button).to.exist;
      })).timeout(20000);
});
