let GrouperHelper = {
  getGrouperVersions: function (Groupers, currentGrouper) {
    for (var i = 0; i < Groupers.length; i++) {
      if (currentGrouper === Groupers[i].id) {
        return Groupers[i].version
      }
    }
    return []
  },
  getGrouperPricers: function (Pricers, grouperVersion, grouper) {
    let validPricers = []

    if (grouperVersion) {
      for (let i = 0; i < Pricers.length; i++) {
        let availableFor = Pricers[i].availableFor
        for (let j = 0; j < availableFor.length; j++) {
          if (grouper === availableFor[j].id && grouperVersion === availableFor[j].version) {
            validPricers.push(Pricers[i].id)
          }
        }
      }
    } else {
      for (let i = 0; i < Pricers.length; i++) {
        let availableFor = Pricers[i].availableFor
        for (let j = 0; j < availableFor.length; j++) {
          if (grouper === availableFor[j].id) {
            validPricers.push(Pricers[i].id)
            break // once we have the first one, we can break out of this inner loop
          }
        }
      }
    }
    return validPricers
  }
}

export default GrouperHelper
