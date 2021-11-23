import api from './api.js'
import Commons from './commons.js'
import Constants from './constants.js'

const OCRApi = {
    OCRBaseUrl: Constants.OCRBaseUrl,
    OCRApikey: Constants.OCRApikey,

    constructor () {
    },

    getOCRConversation (formData) {
        const config = {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		};
        formData.append("apikey", this.OCRApikey)
        const baseUrl = this.OCRBaseUrl + '/parse/image'

        const request = api.post(baseUrl, formData, config)
        return request
        .then((result) => { return result })
        .catch((error) => { throw error })
    }
}

export default OCRApi
