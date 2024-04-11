export async function getData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    const data = (await response.json()) as T;
    return data;
  } catch (err) {
    throw err;
  }
}
