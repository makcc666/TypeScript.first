class UserBuilder {
    name: string;

    setName(name: string) {
        this.name = name;
        return this;
    }

    isAdmin(): this is AdminBuilder {
        return this instanceof AdminBuilder
    }
}

class AdminBuilder extends UserBuilder {
    /**
     * Если убрать эту строку, то классы будут идентичны. Из-за этого в RUN-TIME не удастся проверить на различия (структура одинаковая)
     */
    roles: string[];
}

const res = new UserBuilder().setName('Ursa');
const res2 = new AdminBuilder().setName('Jono');

if (res2.isAdmin()) {
    console.log("User admin::", res2);
} else {
    console.log("User not admin::", res2);
}