Tracker.autorun(function () {
  console.log("The selectedHouse ID is: " +
    Session.get("selectedHouseId")
  );
});

Template.selectHouse.helpers({
  housesNameId: function () {
    return HousesCollection.find({}, {
      fields: {
        name: 1,
        _id: 1
      }
    });
  },
  isSelected: function () {
    return Session.equals('selectedHouseId', this._id) ? 'selected' : '';
  }
});
Template.selectHouse.events = {
  'change #selectHouse': function (evt) {
    Session.set('selectedHouseId', evt.currentTarget.value);
  }
};