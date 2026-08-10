const { processEntry } = require("@staticman/netlify-functions");
const queryString = require("querystring");

exports.handler = async (event, context) => {
  const repo = process.env.REPO;
  const [username, repository] = repo.split("/");
  const bodyData = queryString.parse(event.body);

  event.queryStringParameters = {
    ...event.queryStringParameters,
    ...bodyData,
    username,
    repository,
  };

  const config = {
    origin: event.headers.origin,
    sites: {
      [repo]: {
        allowedFields: ["name", "message", "post"],
        branch: "main",
        commitMessage: "Add comment by {fields.name}",
        filename: "entry{@timestamp}",
        format: "json",
        generatedFields: {
          date: {
            type: "date",
          },
        },
        moderation: false,
        path: "src/_data/comments",
        requiredFields: ["name", "message", "post"],
      },
    },
  };

  return new Promise((resolve, reject) => {
    processEntry(event, context, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    }, config);
  });
};
