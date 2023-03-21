import { Link } from 'react-router-dom'
import '../../styles/components/header/menu.css'

const Menu = () => {
	const menuData = [
		{
			name: 'Доска заказов',
			path: '/orders'
		},
		{
			name: 'Тарифы',
			path: '/tariffs'
		},
		{
			name: 'Контакты',
			path: '/contacts'
		},
	]
	return(
		<div className="menu">
			{menuData.map((item, index) => (
				<Link to={item.path} className="menuItem" key={index}>
					{item.name}
				</Link>
			))}
		</div>
	)
}

export default Menu