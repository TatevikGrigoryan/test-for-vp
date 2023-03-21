import Menu from './menu'
import '../../styles/components/header/header.css'
import Logo from './logo'
import { Link } from 'react-router-dom'
import Avatar from './avatar'
import { observer } from 'mobx-react-lite'
import { userStore } from '../../stores/userStore'

const HeaderComponent = () => {
	return (
		<div className="vpHeader">
			<Link to='/'>
				<Logo />
			</Link>

			<Menu />

			<div className="rightSide">
				<button>
					Разместить заказ
				</button>

				{userStore.user && <Avatar user={userStore.user} />}
			</div>
		</div>
	)
}

export const Header = observer(HeaderComponent)