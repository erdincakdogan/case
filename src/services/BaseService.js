class BaseService {
    constructor(model) {
        this.BaseModel = model;
    }
    list(where) {
        return this.BaseModel.find(where || {})
    }
    insert(data) {
        return new this.BaseModel(data).save();
    }
    findOne(where) {
        return this.BaseModel.findOne(where || {});
    }
    updateDoc(data, updateData) {
        return this.BaseModel.findByIdAndUpdate(data, updateData, { new: true });
    }
    update(where, data) {
        return this.BaseModel.findOneAndUpdate(where, data, { new: true });
    }
    remove(email) {
        return this.BaseModel.findOneAndDelete({ email });
    }

}

module.exports = BaseService