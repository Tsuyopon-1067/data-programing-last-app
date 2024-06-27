export const userNameToColor = (userName: string) => {
  let encoded = 0;
  const characters = 62;
  for (let i = 0; i < userName.length; i++) {
    const code = userName.charCodeAt(i);
    encoded *= characters;
    encoded += code;
  }
  const color = encoded % 0xffffff;
  return "#" + color.toString(16).padStart(6, "0");
}