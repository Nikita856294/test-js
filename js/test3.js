function list(arr) {
  return arr.reduce(
    (acc, { name }, ind, arr) =>
      ind > 0 && ind !== arr.length - 1
        ? acc + ", " + name
        : ind > 0 && ind === arr.length - 1
        ? acc + " & " + name
        : acc + name,
    ""
  );
}
function list(arr) {
  return arr
    .map((el) => el.name)
    .join(", ")
    .replace(/,(?=[^,]*$)/, " &");
}
