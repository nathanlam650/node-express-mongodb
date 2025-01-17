module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      description: String,
      published: Boolean,
      NFTurl: String,
      photourl: String,
      owner: String,
      organization: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const nftminted = mongoose.model("nftminted", schema);
  return nftminted;
};
