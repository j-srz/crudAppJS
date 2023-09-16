import { User } from "../../models/user";
import { getUserByid } from "../../usecases/get-user-by-id";
import "./render-modal.css";
import modalHtml from './render-modal.html?raw';

let modal, form;
let loadedUser;


/**
 * 
 * @param {String|Number} id 
 */
export const showModal = async( id ) => {
	modal?.classList.remove('hide-modal');
	loadedUser = {};

	if ( !id ) return;
	const user = await getUserByid( id );
	setFormValues(user);

}

export const hideModal = () => {
	modal?.classList.add('hide-modal');

	form?.reset();
}




/**
 * 
 * @param {User} user 
 */
const setFormValues = ( user ) => {
	form.querySelector('[Name="firstName"]').value = user.firstName;
	form.querySelector('[Name="lastName"]').value = user.lastName;
	form.querySelector('[Name="balance"]').value = user.balance;
	form.querySelector('[Name="isActive"]').checked = user.isActive;

	loadedUser = user;
}


/**
 *
 * @param {HTMLDivElement} element
 * @param {{userLike}=>Promise<void>} callback
 */
export const renderModal = (element, callback) => {
	if ( modal ) return;

	modal = document.createElement('div');
	modal.innerHTML = modalHtml;
	modal.classList.add('modal-container');
	modal.classList.add('hide-modal');
	form = modal.querySelector('form');

	


	modal.addEventListener('click', e => {
		if (e.target.className !== 'modal-container') return; 
		hideModal();
	})

	form.addEventListener('submit', async(e) => {
		e.preventDefault();
		
		const formData = new FormData( form );
		const userLike = {...loadedUser};

		for (const [key, value] of formData) {
			if ( key === 'balance' ) {
				userLike[key] = +value;
				continue;
			}

			if ( key === 'isActive' ) {
				userLike[key] = ( value === 'on' ) ? true : false;
				continue;
			}

			userLike[key] = value;

		}


		//TODO guardar usuario

		await callback( userLike );

		hideModal();

	})


	element.append( modal );

};
