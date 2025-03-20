export function useClss(name) {
  if (name === "activ") {
    return "primary";
  } else if (name === "noactiv") {
    return "danger";
  } else if (name === "warning") {
    return "warning";
  } else if (name === "default") {
    return "default";
  }
}
