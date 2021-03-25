import fs from 'fs'
import { config } from 'dotenv'
import dotenvExpand from 'dotenv-expand'

config()

const { NODE_ENV, DOCKER } = process.env

if (!NODE_ENV) {
  throw new Error(
    'The NODE_ENV environment variable is required but was not specified.',
  )
}

const dotenvFiles = [
  `.env.${NODE_ENV}.local`,
  `.env.${NODE_ENV}`,
  NODE_ENV === 'test' && DOCKER === 'true' && `.env.test.docker`,
  DOCKER === 'true' && `.env.docker`,
  NODE_ENV !== 'test' && `.env.local`,
  '.env',
].filter(Boolean)

dotenvFiles.forEach((dotenvFile) => {
  if (fs.existsSync(dotenvFile)) {
    dotenvExpand(config({ path: dotenvFile }))
  }
})
