export function savePreferences(data) {
  localStorage.setItem(
    "weatherPreferences",
    JSON.stringify(data)
  );
}

export function loadPreferences() {
  return JSON.parse(
    localStorage.getItem("weatherPreferences")
  );
}
