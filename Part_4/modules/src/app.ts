class Construct {
    protected value: number;

    setValue(value: number): void {
        this.value = value;
    }
}

const x = new Construct();
x.setValue(404);

const user = new User("Ursa");
console.log("user::",user);
