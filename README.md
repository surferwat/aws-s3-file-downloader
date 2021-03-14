## Description

A program to download a file from AWS S3 directly from a web or mobile application.

## Installation

Step 1: Clone the repo

```
git clone https://github.com/surferwat/aws-s3-file-downloader.git
```

Step 2: Install dependencies

```
npm install
```

Step 3: Go to app and install the module
```
npm install /file/path/to/module
```

## Usage

```javascript
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


