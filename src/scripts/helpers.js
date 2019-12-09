// exported here and imported in the file that will be used

export function formatDate(dt) {
  return new Date(dt).toJSON().substring(0, 10);
}
