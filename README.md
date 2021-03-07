## Description

A program to download a file from AWS S3 directly from a web or mobile application.

## Usage

```
import { AwsS3FileDownloader } from 'aws-s3-file-downloader'


// Initialize variables
const url = 'https://my-s3-signed-or-unsigned-url.com/'
const headers = {
    'Content-Type':'text/plain',
    'Accept': 'text/plain',
    'Access-Control-Allow-Origin': '*'
}

// Initialize new AwsS3FileDownloader object
const awsS3FileDownloader = new AwsS3FileDownloader(url, headers)

// Download file from AWS S3
awsS3FileDownloader
    .downloadFile()
    .then(data => console.log(data))
    .catch(e => console.error(e))
```


