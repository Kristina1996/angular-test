import { Column } from './column';

export const COLUMNS: Column[] = [
	{ name: 'name', title: 'Имя', type: 'string'},
	{ name: 'surname', title: 'Фамилия', type: 'string' },
	{ name: 'age', title: 'Возраст', type: 'string' },
	{ name: 'address', title: 'Адрес', type: 'string' },
	{ name: 'position', title: 'Должность', type: 'string' },
	{ name: 'salary', title: 'Зарплата', type: 'string' },
	{ name: 'inn', title: 'ИНН', type: 'string' },
	{ name: 'action', title: 'Действия', type: 'button' }
];
