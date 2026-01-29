export function pollQueries() {
  return {
    polls: pollsQuery,
    poll: pollQuery,
  };
}

const pollsQuery = `#graphql
  query PollsQuery($page: Int!, $limit: Int){
    polls(page: $page, limit: $limit){
      nextpage

      data {
        title
        options {
          total
          answer
        }
        createdAt
      }
    }
  }
`;

const pollQuery = `#graphql
  query PollQuery($pollId: String!){
    poll(pollId: $pollId) {
      title
      options {
        total
        answer
      }
      createdAt
    }
  }
`;
