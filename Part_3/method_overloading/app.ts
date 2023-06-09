{
    type Skill = string;
// Принимает только не пустой массив из Skill
    type Skills = [Skill, ...Skill[]];


    class User {
        skills: Skill[] = [];

        addSkills(skill: string): void;
        addSkills(skills: Skills): void;
        addSkills(skills: Skills | Skill) {
            if (typeof skills === "string") {
                this.skills.push(skills);
            } else {
                this.skills.push(...skills);
            }

        }
    }

    const user = new User();
    user.addSkills(["PC"]);
    console.log("user::skills::0", user.skills);

    user.addSkills(["Head", "JS"]);
    console.log("user::skills::1", user.skills);

    user.addSkills("NodeJS");
    console.log("user::skills::2", user.skills);
}

{
    function run(distance: string): string;
    function run(distance: number): number;
    function run(distance: string | number): string | number {
        if (typeof distance === "string") return `is string::${distance}`;
        return distance + 1;
    }

    run(1);
    run("asfsaf");
}