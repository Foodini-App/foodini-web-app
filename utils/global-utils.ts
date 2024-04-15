export function formatList(strings: string[]): string {
  const formattedStrings = strings.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1)
  );
  const commaSeparatedList = formattedStrings.join(", ");

  return commaSeparatedList; // Return the comma-separated list as a string
}

export function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1); // Return the capitalized string
}

export function lowercase(string: string): string {
  return string.toLowerCase(); // Return the lowercase string
}

export function spaceToUnderscore(string: string): string {
  return string.replace(/\s/g, "_"); // Return the string with spaces replaced by underscores
}

export function underscoreToSpace(string: string): string {
  return string.replace(/_/g, " "); // Return the string with underscores replaced by spaces
}
