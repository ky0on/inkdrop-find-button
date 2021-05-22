'use babel';

import findButtonComponent from './findButton-component';

module.exports = {

	activate() {
		inkdrop.components.registerClass(findButtonComponent);
		inkdrop.layouts.addComponentToLayout(
			'mde',
			'findButtonComponent'
		)
	},

	deactivate() {
		inkdrop.layouts.removeComponentFromLayout(
			'mde',
			'findButtonComponent'
		)
		inkdrop.components.deleteClass(findButtonComponent);
	},

};
