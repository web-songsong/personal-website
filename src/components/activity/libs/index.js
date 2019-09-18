const packages = require.context('.', true, /index\.vue$/)
let components = {}
packages.keys().forEach(component => {
  let tem = packages(component).default
  components[tem.name] = tem
})

export default components
