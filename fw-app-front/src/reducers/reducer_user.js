export default function (state, action) {
  switch (action.type) {
    case "SET":
      return {
        username: action.payload
      }
    default:
      return {
        username: ''
      };
  }
}
