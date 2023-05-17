const { AuthenticationError } = require("apollo-server-express");
const { User, Book } = require("../models");
const { signToken } = require("../utils/auth");
const jwt = require("jsonwebtoken");

const resolvers = {
  Query: {
    getUserById: async (parent, { userId, username }, context) => {
      try {
        let user;
        if (userId) {
          user = await User.findById(userId).select("username email");
        } else if (username) {
          user = await User.findOne({ username }).select("username email");
        }
        return user;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to retrieve user");
      }
    },
  },
  
  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      try {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user, userId: user._id };
      } catch (error) {
        console.error(error);
        throw new Error("Failed to create user");
      }
    },
    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          throw new AuthenticationError("No user found with this email address");
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError("Incorrect credentials");
        }

        const token = signToken(user);
        return { token, user };
      } catch (error) {
        console.error(error);
        throw new Error("Failed to log in");
      }
    },
    saveBook: async (parent, { bookInput }, context) => {
      try {
        if (!context.user) {
          throw new AuthenticationError("You must be logged in to save a book");
        }
        const newBook = new Book(bookInput);
        const user = await User.findById(context.user._id);
        user.savedBooks.push(newBook);
        await user.save();
        return user;
      } catch (error) {
        console.log(error);
        throw new Error("Failed to save book");
      }
    },
    removeBook: async (parent, { bookId }, context) => {
      try {
        if (!context.user) {
          throw new AuthenticationError("You must be logged in to remove a book");
        }
        const user = await User.findById(context.user._id);
        const bookIndex = user.savedBooks.findIndex((book) => book.bookId === bookId);
        if (bookIndex === -1) {
          throw new Error("Book not found in saved books");
        }
        user.savedBooks.splice(bookIndex, 1);
        await user.save();
        return user;
      } catch (error) {
        console.log(error);
        throw new Error("Failed to remove book");
      }
    },
  },
};

module.exports = resolvers;
