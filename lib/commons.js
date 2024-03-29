const Commons = {
    log (msgOrObj, ...msgOrObjs) {
        const devMode = process.env.VUE_APP_LOG_DEBUG
        if (devMode === 'true') {
            if (msgOrObjs.length === 0) {
                console.log(msgOrObj)
            } else {
                console.log(msgOrObj, msgOrObjs)
            }
        }
    },

    getRequestParamsPager (apikey) {
        const params = {}

        if (apikey) {
            params.apikey = apikey
        }
        return params
    },

    paramsToUrl (params) {
        let out = '?'
        out = out + new URLSearchParams(params).toString()
        return out
    }

}

export default Commons
