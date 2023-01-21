const space = "xs5fex194mql"
const accessToken = "QcFRUb8OhganrATxrmjjhxqjJP8VO9zjGNprEr20htg"

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchEntries() {
  const entries = await client.getEntries()
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchEntries }