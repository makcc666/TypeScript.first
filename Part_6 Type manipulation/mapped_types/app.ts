type Modifier = 'read' | 'update' | 'create';

type UserRoles = {
    customers?:Modifier,
    projects?:Modifier,
    adminPanel?:Modifier,
}

// Слабая реализация. Если измениться список ролей, то нужно в ручную менять тип UserAccess1
{
    type UserAccess1 = {
        customers?: boolean,
        projects?: boolean,
        adminPanel?: boolean,
    }
}

// Подходящая реализация. Тип автоматически собирается и модифицируется из типа "UserRoles"
{
    type ModifierToAccess<Type> = {
        [Property in keyof Type]:boolean;
    }

    // Добавляем модификатор ReadOnly
    type ReadOnlyModifierToAccess<Type> = {
        + readonly [Property in keyof Type]:boolean;
    }

    // Указываем, что все свойства являются обязательными
    type AllRequireModifierToAccess<Type> = {
        [Property in keyof Type]+?:boolean;
    }

    // Указываем, что все свойства являются необязательными
    type AllNotRequireModifierToAccess<Type> = {
        [Property in keyof Type]-?:boolean;
    }

    // Модифицируем название ключей. customers => "canAccesscustomers"
    type RenamedModifierToAccess<Type> = {
        [Property in keyof Type as `canAccess${string & Property}`]-?:boolean;
    }

    // Удаляем два ключа. Останется только "projects"
    type ExcludeModifierToAccess<Type> = {
        [Property in keyof Type as Exclude<Property, 'adminPanel' | 'customers'>]-?:boolean;
    }

    type UserAccess2 = ModifierToAccess<UserRoles>;
    type UserAccess3 = ExcludeModifierToAccess<UserRoles>;

}