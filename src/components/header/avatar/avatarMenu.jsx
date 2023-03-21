import '../../../styles/components/header/avatarMenu.css'
import ShortAvatar from '../../shortAvatar'
import warningIcon from '../../../assets/warning-info.svg'
const AvatarMenu = ({user}) => {

	const formatDate = (date) => {
		return new Date(date).toLocaleDateString('ru', {month:"long", day:"numeric"});
	}

	return (
		<div className="avatarMenu">
			<div className="tariffInfo">
				<div>{user.tariff.type}</div>
				<div className="secondary">Активен до {formatDate(user?.tariff.date)}</div>
			</div>

			<div className="menuItem">
				<div>Мои заказы</div>
				<div>{user.myOrders}</div>
			</div>

			<div className="menuItem">
				<div>Исходящие отклики</div>
				<div>{user.responses}</div>
			</div>

			<div className="menuItem">
				<div>Входящие заказы</div>
				<div className="enteredOrders">
					<div>{user.allOrders}</div>
					<div className="new">+{user.newOrders}</div>
				</div>
			</div>

			<div className="menuItem">
				Кабинет
			</div>

			<div className="menuItem">
				<div>Электронные подписи</div>
				{!user.subscription && <img src={warningIcon} alt="warning"/> }
			</div>

			<div className="menuItem">Выход</div>

			<div className="separator" />

			<ShortAvatar user={user} />

			<ShortAvatar user={user} />
		</div>
	)
}

export default AvatarMenu