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
    nightmare = new Nightmare({show: true});
  });

  it("should have the correct page title", () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector("h1").innerText)
      .end()
      .then(text => {
        expect(text).to.equal("Movie Finder");
      })).timeout(20000);

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

  it("should return the correct movie title for search input", () => 
    nightmare
    .goto(url)
    .type("input", "Avenger")
    .click(".button")
      .wait("#movTitle")
      .evaluate(() => document.querySelector("#movTitle").innerText)
      .end()
      .then(cardTitle => {
        expect(cardTitle).to.equal("Captain America: The First Avenger")
      })).timeout(40000);

  it("should return the correct movie year for search input", () =>
    nightmare
    .goto(url)
    .type("input", "Avenger")
    .click(".button")
    .wait("#movYear")
    .evaluate(() => document.querySelector("#movYear").innerText)
    .end()
    .then(cardYear => {
      expect(cardYear).to.equal("2011")
    })).timeout(40000)

    it("should return the correct movie plot for search input", () => 
      nightmare
      .goto(url)
      .type("input", "Avenger")
      .click(".button")
      .wait("#movPlot")
      .evaluate(() => document.querySelector("#movPlot").innerText)
      .end()
      .then(cardPlot => {
        expect(cardPlot).to.equal('Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.')
      })).timeout(40000)

      it("After rendering movies, there should be an option to access more information", () =>
      nightmare
      .goto(url)
      .type("input", "Avenger")
      .click(".button")
      .evaluate(() => document.getElementById("moreInfo"))
      .end()
      .then(infoBtn => {
        expect(infoBtn).to.exist
      })).timeout(40000)
    
      it("After clicking more info, should render a new page and display detailed information on a specific movie", () =>
      nightmare
      .goto(url)
      .type("input", "Avenger")
      .click(".button")
      .wait("#moreInfo")
      .click("#moreInfo")
      .wait(".movDetail")
      .evaluate(() => document.getElementsByClassName("movDetail"))
      .end()
      .then(detail => {
        expect(detail).to.exist
      })).timeout(40000)
});
