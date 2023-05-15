const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const jwt = require('jsonwebtoken');

const resolvers = {
  Query: {
    getUserById: async (parent, { userId }, context) => {
      try {
        context.authMiddleware(); // Check if user is authenticated
        const user = await User.findById(userId).populate('savedBooks');
        return user;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch user by ID');
      }
    },
  },
  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        return user;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to create user');
      }
    },
    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error('User not found');
        }

        const correctPassword = await user.isCorrectPassword(password);
        if (!correctPassword) {
          throw new Error('Invalid password');
        }

        const token = signToken(user);
        return { token, user };
      } catch (error) {
        console.error(error);
        throw new Error('Failed to log in');
      }
    },
    addBook: async (parent, { userId, bookInput }, context) => {
      try {
        context.authMiddleware(); // Check if user is authenticated
        const user = await User.findById(userId);
        const book = new Book(bookInput);
        user.savedBooks.push(book);
        await user.save();
        return user;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to add book');
      }
    },
  },
  User: {
    bookCount: (parent) => parent.savedBooks.length,
  },
};

module.exports = resolvers;
