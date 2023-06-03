const skills: string[] = ["Dev", "JS", "NodeJS"];

for (const skill of skills) {
    console.log(skill);
}
skills.filter(
    (record: string) => record !== "JS",
 )