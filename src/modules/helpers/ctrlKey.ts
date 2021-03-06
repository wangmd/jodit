/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

/**
 * CTRL pressed
 *
 * @param  {KeyboardEvent} e Event
 * @return {boolean} true ctrl key was pressed
 */
export const ctrlKey = (e: MouseEvent | KeyboardEvent): boolean => {
	if (
		typeof navigator !== 'undefined' &&
		navigator.userAgent.indexOf('Mac OS X') !== -1
	) {
		if (e.metaKey && !e.altKey) {
			return true;
		}
	} else if (e.ctrlKey && !e.altKey) {
		return true;
	}
	return false;
};
