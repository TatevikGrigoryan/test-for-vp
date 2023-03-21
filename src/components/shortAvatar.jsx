import '../styles/components/shortAvatar.css'
import warningIcon from '../assets/warning-info.svg';

const ShortAvatar = ({ user, handleClick }) => {
	const selectAvatar = () => {
		if (handleClick) {
			handleClick();
		}
	}

	return (
		<div className="shortAvatar" onClick={selectAvatar}>
			<div className="avatarImgWrap">
				<img
					alt="Avatar"
					className="avatar"
					src={'https://www.imgacademy.com/sites/default/files/2022-07/img-homepage-meta.jpg'}
				/>

				{!user.subscription && (
					<img src={warningIcon} alt="warning" className="warningIcon" />
				)}
			</div>


			<div className="avatarInfo">
				<div>{user.company}</div>
				<div className="secondary">{user.name}</div>
			</div>
		</div>
	)
}

export default ShortAvatar