

export function formatList(strings: string[]): string {
    const formattedStrings = strings.map((str) => str.charAt(0).toUpperCase() + str.slice(1));
    const commaSeparatedList = formattedStrings.join(', ');

    return commaSeparatedList; // Return the comma-separated list as a string
}

export function capitalize(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1); // Return the capitalized string
}