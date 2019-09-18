const packages = require.context('.', true, /property\.json$/)
const allPropertys = {}
packages.keys().forEach(component => {
  const jsonName = /\w+/.exec(component)[0]
  allPropertys[jsonName] = packages(component)
})
export default allPropertys
