export function formatList(strings: string[]): string {
  const formattedStrings = strings.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1)
  );
  const commaSeparatedList = formattedStrings.join(", ");

  return commaSeparatedList; // Return the comma-separated list as a string
}

export function capitalize(string: string): string {
  const words = string.split(" ");
  const capitalizedWords = words.map((word) => {
    if (word.charAt(0) === "(") {
      return "(" + word.charAt(1).toUpperCase() + word.slice(2);
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  });
  return capitalizedWords.join(" ");
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

export function capitalizeList(list: string[]): string[] {
  for (let i = 0; i < list.length; i++) {
    list[i] = capitalize(list[i]);
  }
  return list
}
