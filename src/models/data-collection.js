'use strict';

// THIS IS THE STRETCH GOAL ...
// It takes in a schema in the constructor and uses that instead of every collection
// being the same and requiring their own schema. That's not very DRY!


class DataCollection {

  constructor(model) {
    this.model = model;
  }

  async get(id) {
    try {
      let records = null;
    if (id) {
      records =  this.model.findOne({ where: {id} });
    } else {
      records = this.model.findAll({});
    }
    return records;
  } catch(e) {
      return e;
  }
  }
  async create(json) {
    try{
    return await this.model.create(json);
  } catch(e) {
    return e;
  }
}
  async update(id, json) {
    try {
    let record =  await this.model.findOne({ where: { id } })
    let updatedRecord = await record.update(json);
    return updatedRecord;
    } catch(e) {
      return e;
    }
  }

  async delete(id) {
    try{
    await this.model.destroy({where: {id}});
    return 'succefully deleted'
    } catch(e) {
      return e;
    }
  }

}

module.exports = DataCollection;
