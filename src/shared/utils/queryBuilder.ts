import { sortObjectKeys } from "./sortObjectKeys";

export function queryBuilder(variables = {}) {
  let variableParams = "";
  let variableKeys = "";

  for (const [key, value] of Object.entries(sortObjectKeys(variables))) {
    if (typeof value === "boolean") {
      variableParams += `, $${key}: Boolean`;
      variableKeys += `, ${key}: $${key}`;
    }
    if (typeof value === "string") {
      variableParams += `, $${key}: String`;
      variableKeys += `, ${key}: $${key}`;
    }

    if (typeof value === "number") {
      variableParams += `, $${key}: Int`;
      variableKeys += `, ${key}: $${key}`;
    }

    if (Array.isArray(value)) {
      if (typeof value[0] === "string") {
        variableParams += `, $${key}: [String]`;
        variableKeys += `, ${key}: $${key}`;
      } else if (typeof value[0] === "number") {
        variableParams += `, $${key}: [Int]`;
        variableKeys += `, ${key}: $${key}`;
      }
    }
  }

  return {
    types: variableParams ? `( ${variableParams.slice(2)} )` : "",
    variables: variableKeys ? `( ${variableKeys.slice(2)} )` : "",
  };
}
