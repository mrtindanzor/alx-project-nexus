export function pollQueries() {
  return {
    polls: pollsQuery,
    "poll-vote": pollVoteQuery,
    "poll-results": pollResultsQuery,
  };
}

const pollsQuery = `#graphql
  query PollsQuery($page: Int!, $limit: Int){
    polls(page: $page, limit: $limit){
      nextpage

      data {
        title
        type
        options {
          total
          answer
          _id
        }
        createdAt
      }
    }
  }
`;

const pollVoteQuery = `#graphql
  query PollVoteQuery($pollId: String!){
    poll(pollId: $pollId) {
      title
      type
      options { 
        _id
        answer
      }
      createdAt
    }
  }
`;

const pollResultsQuery = `#graphql
  query PollResultsQuery($pollId: String!){
    poll(pollId: $pollId) {
      title
      options {
        total
        answer
        _id
      }
      createdAt
    }
  }
`;
