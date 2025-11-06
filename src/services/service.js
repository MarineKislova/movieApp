async function getResource(url, option) {
  let response = await fetch(url, option);
  if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
  const data = await response.json();
  return data;
}
export { getResource };