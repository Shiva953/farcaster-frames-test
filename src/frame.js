//creating a warpcast frane using neynar sdk

const base = "https://api.neynar.com/";
const apiKey = process.env.NEYNAR_API_KEY;

const hash = "0x8ffed4e8fa53c6e22b85f678c9a53067826e846a";
const cast_url = `${base}v2/farcaster/cast?identifier=${hash}&type=hash`;
const cast_response = await fetch(cast_url, {
  headers: {
    'Content-Type': 'application/json',
    'Content-Encoding': 'gzip, deflate, br',
    'api_key': apiKey,
  },
});
const cast = await cast_response.json();
console.log(cast); // logs information about the cast

const fid = 3;
const user_url = `${base}v1/farcaster/user?fid=${fid}`;
const user_response = await fetch(user_url, {
  headers: {
    'Content-Type': 'application/json',
    'Content-Encoding': 'gzip, deflate, br',
    'api_key': apiKey,
  },
});
const user = await user_response.json();
console.log(user); // logs information about the user