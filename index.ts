import axios from 'axios'


//  AwsS3FileDownloader()
//  A JavaScript library for file download to AWS S3 bucket from the client side.

export const AwsS3FileDownloader = class {
    private url: string // unsigned or signed upload url
    private headers: object // headers to be included in request

    constructor(initUrl: string, initHeaders: object) {
        this.url = initUrl
        this.headers = initHeaders
    }

    async downloadFile(): Promise<object> {
        const res = await axios({
            url: this.url,
            method: 'GET',
            headers: this.headers,
            responseType: 'blob'
        })
        if (res.status !== 200) return Promise.reject(res)
        return Promise.resolve({
            data: res.data,
            status: res.status,
            statusText: res.statusText
        })
    }
}
