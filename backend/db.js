import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node' // leer y escribir datos
import { join } from 'path' // para la creacion de rutas
import { fileURLToPath } from 'url'// establecer cuales son las rutas actuales

// Rutas
const __filename = fileURLToPath(import.meta.url)
const __dirname = join(__filename, '..')
const file = join(__dirname, 'db.json')
const adapter = new JSONFile(file)
const defaultData = { messages: [] }

const db = new Low(adapter, defaultData)

await db.read()

await db.write()

// console.log('Rutas:', __filename)
// console.log('Rutas:', import.meta.url)

export default db
