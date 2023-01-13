module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      username:String,
      password:String,
      selfIntroduction: String,
      volunteerTime: Number,
      ETHaccountid:String,
      
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Volunteers = mongoose.model("volunteers", schema);
  return Volunteers;
};
