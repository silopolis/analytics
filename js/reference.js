/**
 * Analytics
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the LICENSE.md file.
 *
 * @author Marcel Scherello <analytics@scherello.de>
 * @copyright 2019-2022 Marcel Scherello
 */
/** global: OC */

'use strict';

document.addEventListener('DOMContentLoaded', function () {
    OCA.Analytics.Reference.init();
})

if (!OCA.Analytics) {
    /**
     * @namespace
     */
    OCA.Analytics = {};
}
/**
 * @namespace OCA.Analytics.Reference
 */
OCA.Analytics.Reference = {
    init: function () {
        _registerWidget('analytics', async (el, { richObjectType, richObject, accessible }) => {
            el.innerHTML = '<div>hello world</div>';
        });
    },
}