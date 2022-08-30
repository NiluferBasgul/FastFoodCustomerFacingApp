import fs from 'fs-extra'
import path from "path";
import normativesTemplate from './normativesTemplate';

const outputFilePath = `${path.join(__dirname, ".output/normatives.md")}`

const normativeWriteToFile = (async () => {
    await fs.outputFile(outputFilePath, await normativesTemplate)
})()

export default normativeWriteToFile