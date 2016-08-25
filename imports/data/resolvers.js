import { Bitcoin } from '/imports/data/bitcoin-connector';

const resolvers = {
  Query: {
    async data(root) {
      return Bitcoin.getAll();
    }
  }
};

export default resolvers;