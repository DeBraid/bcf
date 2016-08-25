export default schema = [`
  type SearchResults {
    name: String,
    price_usd: Int
  }
  type Query {
    data: [SearchResults]
  }
  schema {
    query: Query
  }
`];
