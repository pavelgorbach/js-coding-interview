import process from 'node:process'
import fs from 'node:fs'

const args = process.argv.slice(2)

const nameArg = args.find((el) => el.startsWith('--name'))

if(nameArg) {
  const name = nameArg.slice(7)
  createFilesAsync(name)
}

const TEST_PREFIX = 'test'

async function createFilesAsync(name) {

  try {
    for (let i = 0; i < 2; i++) {
      const prefix = i === 1 ? TEST_PREFIX : ''
      const fileName = `${name}${prefix}.js`

      const camelCaseName = name.replace(/([-_]\w)/g, (match) => match.toUpperCase().replace('-', ''));
      const fileContent = i === 1
        ? `import ${camelCaseName} from './${camelCaseName}'`
        : `
/**
 * 
 */

export default function ${camelCaseName}() {

}
`

      const fd = await fs.promises.open(`src/coding/${fileName}`, 'wx')
      await fs.promises.writeFile(fd, fileContent)
      await fd.close()

      console.log(`${fileName} created successfully.`)
    }
  } catch (err) {
    console.error(`Error creating files: ${err}`)
  }
}