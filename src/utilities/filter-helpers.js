let FilterHelpers = {
  getModFiltering: function (modifiers, query) {
    let newModifiers = []
    newModifiers = modifiers.filter(option => {
      return query.length > 2 ? (option.value.toLowerCase().indexOf(query.toLowerCase()) > -1) : (option.key.toLowerCase().indexOf(query.toLowerCase()) > -1)
    })
    return newModifiers
  }
}

export default FilterHelpers
