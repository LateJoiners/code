const mongoose = require("mongoose");
const { hashPassword, comparePasswords } = require("../core/hasher");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema(
  {
    author: ObjectId,
    displayName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    permissions: {
      type: [String],
      required: true
    },
    updatedOn: {
      type: Date,
      required: true
    },
    createdOn: {
      type: Date,
      required: true
    }
  },
  {
    strict: "throw"
  }
);

userSchema.pre("save", next => {
  const user = this;

  // Update audit information
  let now = new Date();
  if (!user.createdOnDate) {
    user.createdOnDate = now;
  }
  user.lastModifiedOnDate = now;

  // Make sure not to save passwords in plain-text
  if (user.isModified("password")) {
    hashPassword(user.password, (err, hash) => {
      if (err) {
        return next(err);
      }

      user.password = hash;

      return next(null);
    });
  }
});

const User = mongoose.model("ModelName", userSchema);

module.exports = { User };
