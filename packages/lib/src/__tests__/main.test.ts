import { day1_pt1, day1_pt2, findCalibration, replace } from "../001-trebuchet";
import { readFile } from "../util";

test("hello", () => {
  console.log("world");
});

test("findCalibration", () => {
  console.log(findCalibration("treb7uchet"));
});

test("day1_pt1", () => {
  console.log(day1_pt1(readFile("./inputs/1-input.txt")));
});

test("day1_pt2", () => {
  console.log(day1_pt2(readFile("./inputs/1-input.txt")));
});

test("replace", () => {
  console.log(replace("two1nine"));
  console.log(replace("to1nineteen3"));
  console.log(replace("eightwothree"));
  console.log(replace("xtwone3fourx"));
  console.log(replace("7pqrstsixteen"));
});
