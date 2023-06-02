"use strict";
const skills = ["Dev", "JS", "NodeJS"];
for (const skill of skills) {
    console.log(skill);
}
skills.filter((record) => record !== "JS");
