'use babel';

import * as React from 'react';
import { CompositeDisposable } from 'event-kit';

export default class findButtonComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showFloatingBtns: true,
		};
	}

	componentWillMount () {
		this.subscriptions = new CompositeDisposable();

		this.subscriptions.add(inkdrop.commands.add(document.body, {
			'findButton:find': () => this.find(),
		}));
	}

	componentWillUnmount () {
		this.subscriptions.dispose();
	}

	find = () => {
    inkdrop.commands.dispatch(document.body, "editor:find");
	}

	render() {
		return (
      <button title="Find (⌘-F)" class="toolbar-item-preview enabled mde-toolbar-item" onClick={this.find}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          fill="none"
          stroke="currentcolor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    );
  }
}
