'use babel';

import findButtonComponent from './findButton-component';

module.exports = {

	activate() {
		inkdrop.components.registerClass(findButtonComponent);
		inkdrop.layouts.addComponentToLayout(
			'editor-floating-actions',
			'findButtonComponent'
		)
	},

	deactivate() {
		inkdrop.layouts.removeComponentFromLayout(
			'editor-floating-actions',
			'findButtonComponent'
		)
		inkdrop.components.deleteClass(findButtonComponent);
	},

};
