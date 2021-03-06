/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { Children } from '@wordpress/element';

function Warning( { className, actions, children } ) {
	return (
		<div className={ classnames( className, 'editor-warning' ) }>
			<div className="editor-warning__contents">
				<p className="editor-warning__message">{ children }</p>

				{ Children.count( actions ) > 0 && (
					<div className="editor-warning__actions">
						{ Children.map( actions, ( action, i ) => (
							<span key={ i } className="editor-warning__action">
								{ action }
							</span>
						) ) }
					</div>
				) }
			</div>
		</div>
	);
}

export default Warning;
