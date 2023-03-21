import { makeAutoObservable } from 'mobx'

class UserStore {
	user = {
		name: 'Стародубцев И.В.',
		company: 'Метрострой Инвест',
		myOrders: 3,
		responses: 3,
		newOrders: 2,
		allOrders: 8,
		tariff: {
			type: 'Тариф Unlimited PRO',
			date: "2022-03-25",
		},
		subscription: false,
	}

	constructor() {
		makeAutoObservable(this)
	}
}

export const userStore = new UserStore();