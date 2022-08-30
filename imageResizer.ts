import * as fs from 'fs-extra';
import sharp from "sharp";

const promises = [] as any;
const filePaths = [] as any

async function getFiles(path = "./public/images/") {
    const entries = await fs.readdir(path, { withFileTypes: true });

    // Get files within the current directory and add a path key to the file objects
    const files = entries
        .filter(async file => !file.isDirectory())
        .map(async file => {
            if (file.isFile() &&
                (file.name.split('.').pop() === 'jpg'
                    || file.name.split('.').pop() === 'png')) {
                const filePath = path + file.name;
                let fileType;

                if (file.name.split('.').pop() === 'jpg') {
                    fileType = 'jpg'
                }
                else if (file.name.split('.').pop() === 'png') {
                    fileType = 'png'
                }

                let compressed = {};

                if (fileType === 'jpg') {
                    try {
                        compressed = sharp(filePath)
                            .jpeg({ quality: 85 })
                            .resize({
                                fit: sharp.fit.contain,
                                width: 15
                            })
                            .toBuffer();
                    } catch (err) {
                        console.log('Error in JPG', err)
                    }
                }

                else if (fileType === 'png') {
                    try {
                        compressed = sharp(filePath)
                            .png({ compressionLevel: 9 })
                            .resize({
                                fit: sharp.fit.contain,
                                width: 20
                            })
                            .toBuffer()
                    }
                    catch (err) {
                        console.log('Error in PNG', err)
                    }
                }

                promises.push(compressed)
                filePaths.push(filePath);
            }

            return { ...file, path: path + file.name }
        });

    // Get folders within the current directory
    const folders = entries.filter(folder => folder.isDirectory());

    for (const folder of folders)
        /*
          Add the found files within the subdirectory to the files array by calling the
          current function itself
        */
        files.push(...(await getFiles(`${path}${folder.name}/`)));

    return files;
}


getFiles().then(async _ => {
    const res = await Promise.all(Object.values(promises)) as any
    const conv = {}

    res.forEach((entry, index) => {
        conv[filePaths[index]] = `data:image/png;base64,${entry.toString('base64')}`
    })

    const varName = 'compressedImages'

    fs.writeFile(`${varName}.ts`, `const ${varName} = ${JSON.stringify(conv)}; export default ${varName};`, function (err) {
        if (err) {
            console.log(err);
        }
    });
})



export default getFiles;