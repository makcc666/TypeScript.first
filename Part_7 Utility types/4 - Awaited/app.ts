type A = Awaited<Promise<string>>;
type A2 = Awaited<Awaited<Promise<string>>>;

interface IMenu {
	name: string;
	url: string;
}

async function getMenu(): Promise<IMenu[]> {
	return [
		{
			name: "Главная",
			url: "/"
		},
		{
			name: "Поддержка",
			url: "/support"
		},
	]
}

type R = Awaited<ReturnType<typeof getMenu>>; // Теперь известно, что функция после исполнения Promise, возвращает IMenu[]

async function getArray<T>(x: T): Promise<Awaited<T>[]> {
	return [await x];
}