import api from './api.js'
import Commons from './commons.js'
import Constants from './constants.js'

const OCRApi = {
    OCRBaseUrl: Constants.OCRBaseUrl,
    OCRApikey: Constants.OCRApikey,

    constructor () {
    },

    getOCRConversation (url, lang, isOverlayRequired) {
        const baseUrl = this.OCRBaseUrl + '/parse/imageurl'
        const params = Commons.getRequestParamsPager(this.OCRApikey, url, lang, isOverlayRequired)
        const querystring = Commons.paramsToUrl(params)

        // Vue.$log.debug('url:', baseUrl + querystring)

        const request = api.get(baseUrl + querystring)
        return request
        .then((result) => { return result })
        .catch((error) => { throw error })
    }
}

export default OCRApi
