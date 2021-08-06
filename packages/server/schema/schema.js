const { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

const Book = new GraphQLObjectType({
	name: "book",
	fields: () => ({
		id: {
			type: GraphQLID
		},
		name: {
			type: GraphQLString
		},
		author: {
			type: GraphQLString
		}
	})
})

const RootQuery = new GraphQLObjectType({
	name: "RootQuery",
	fields: () => ({
		book: {
			type: Book,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				const data = [
					{
						id: "1",
						name: "The world of the memory",
						author: "John GoodLove"
					},
					{
						id: "2", 
						name: "Beta Code", 
						author: "Nick Wu"
					},
					{
						id: "3", 
						name: "Face to face", 
						author: "Mike Lak"
					}
				]

				return data.find((book) => book.id == args.id);
			}
		}
	})
})


module.exports = new GraphQLSchema({
	query: RootQuery
})