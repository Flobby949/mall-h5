import uuid from 'uuid/v1';

export function renameFile(fileName) {
    let suffix = fileName.substr(fileName.lastIndexOf('.'))
    let newFileName = uuid()
    return newFileName + suffix
}