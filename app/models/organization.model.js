module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      username: String,
      description: String,
      password: String, 
      published: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Organization = mongoose.model("Organization", schema);
  return Organization;
};
