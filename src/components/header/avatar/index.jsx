import '../../../styles/components/header/avatar.css'
import AvatarMenu from './avatarMenu'
import ShortAvatar from '../../shortAvatar'
import { useState } from 'react'

const Avatar = ({user}) => {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className="avatarWrapper">
			<div style={{zIndex: isOpen ? 1 : 'unset'}}>
				<ShortAvatar
					user={user}
					handleClick={() => setOpen(!isOpen)}
				/>
			</div>


			{isOpen && <AvatarMenu user={user} />}
		</div>
	)
}

export default Avatar