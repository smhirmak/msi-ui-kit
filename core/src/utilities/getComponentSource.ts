/**
 * Dynamically imports and returns the raw source code of a component file
 * @param componentName - The name of the component (e.g., 'accordion', 'button')
 * @param folder - The registry subfolder the file lives in (defaults to 'components')
 * @returns Promise with the component source code as string
 */
export const getComponentSource = async (
  componentName: string,
  folder: string = 'components',
): Promise<string> => {
  try {
    // Import the raw source using Vite's ?raw suffix
    const source = await import(`../../registry/tra-kit/${folder}/${componentName}.tsx?raw`);
    return source.default;
  } catch (error) {
    console.error(`Failed to load source for component: ${componentName}`, error);
    return `// Error loading source code for ${componentName}`;
  }
};
