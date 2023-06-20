interface IForm {
	name: string;
	password: string;
}

const form: IForm = {
	name: "Ursa",
	password: "ursa1",
}

type TypeFormValidation<Type> = {
	[Property in keyof Type]:{isValid:true} | {isValid:false, errorMessage:string};
}

const formValidation:TypeFormValidation<IForm> = {
	name: {isValid: true},
	password: {
		isValid: false,
		errorMessage: `Должен быть длиннее 5 символов`
	},
}

