interface Role {
    name: string;
}

interface User {
    name: string;
    roles: Role[];
    permission: {
        endDate: Date,
    }
}

const user: User = {
    name: "Ursa",
    roles: [],
    permission: {
        endDate: new Date(),
    },
}
const nameUser = user['name'];

// let roleNames: 'roles' = 'roles'; // eq
const roleNames = 'roles'; // eq

type rolesType = User['roles'];
type rolesType2 = User[typeof roleNames];

type roleType = User['roles'][number];

const roles = ['admin', 'user', 'super-user'] as const;
type roleTypes = typeof roles[number];
