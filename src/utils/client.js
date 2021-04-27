let OSS = require('ali-oss')

export function getOssClient() {
    let oss = new OSS({
        region: 'oss-cn-shenzhen',
        accessKeyId: 'LTAI5tB36ESbueMxB7XCVKxA',
        accessKeySecret: '07aKzbO7vdTGHabNVF9fPMKMAzXZLR',
        bucket: 'flobby',
        prefix: 'avatar',
    })
    return oss
}