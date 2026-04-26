// fetch data from github api

export async function GetGithubData() {
  const res = await fetch(`https://api.github.com/users/rzfan03`);
  return res.json();
}