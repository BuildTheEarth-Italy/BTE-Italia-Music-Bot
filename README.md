![Node build](https://github.com/eritislami/evobot/actions/workflows/node.yml/badge.svg)
![Docker build](https://github.com/eritislami/evobot/actions/workflows/docker.yml/badge.svg)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

![logo](https://user-images.githubusercontent.com/77931027/184246051-345c496a-b2ba-4208-884b-b94f006f240c.png)

# 🤖 BTE Italia (Discord Music Bot)

> BTE Italia is a Discord Music Bot built with TypeScript, discord.js & uses Command Handler from [discordjs.guide](https://discordjs.guide)
> (Forked from EvoBot)

## Requirements

1. Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
2. Node.js 16.11.0 or newer

## 🚀 Getting Started

```sh
git clone https://github.com/BuildTheEarth-Italy/BTE-Italia-Music-Bot
cd BTE-Italia-Music-Bot
npm install
```

After installation finishes follow configuration instructions then run `npm run start` to start the bot.

## ⚙️ Configuration

Copy or Rename `config.json.example` to `config.json` and fill out the values:

⚠️ **Note: Never commit or share your token or api keys publicly** ⚠️

```json
{
  "TOKEN": "",
  "MAX_PLAYLIST_SIZE": 10,
  "PREFIX": "$",
  "PRUNING": false,
  "LOCALE": "en",
  "DEFAULT_VOLUME": 100,
  "STAY_TIME": 30
}
```

## 📝 Features & Commands

> Note: The default prefix is '$'

- 🎶 Play music from YouTube via url

`$play https://www.youtube.com/watch?v=GLvohMXgcBo`

- 🔎 Play music from YouTube via search query

`$play under the bridge red hot chili peppers`

- 🎶 Play music from Soundcloud via url

`$play https://soundcloud.com/blackhorsebrigade/pearl-jam-alive`

- 🔎 Search and select music to play

`$search Pearl Jam`

Reply with song number or numbers seperated by comma that you wish to play

Examples: `1` or `1,2,3`

- 📃 Play youtube playlists via url

`$playlist https://www.youtube.com/watch?v=YlUKcNNmywk&list=PL5RNCwK3GIO13SR_o57bGJCEmqFAwq82c`

- 🔎 Play youtube playlists via search query

`$playlist linkin park meteora`

- Now Playing ($np)
- Queue system ($queue, $q)
- Loop / Repeat ($loop)
- Shuffle ($shuffle)
- Volume control ($volume, $v)
- Lyrics ($lyrics, !ly)
- Pause ($pause)
- Resume ($resume, $r)
- Skip ($skip, $s)
- Skip to song # in queue ($skipto, $st)
- Move a song in the queue ($move, $mv)
- Remove song # from queue ($remove, $rm)
- Show ping to Discord API ($ping)
- Show bot uptime ($uptime)
- Toggle pruning of bot messages ($pruning)
- Help ($help, $h)
- Command Handler from [discordjs.guide](https://discordjs.guide/)
- Media Controls via Reactions

![reactions](https://imgur.com/Ptfmi04.png)

## 🌎 Locales

Currently available locales are:

- English (en)
- Arabic (ar)
- Brazilian Portuguese (pt_br)
- Czech (cs)
- Dutch (nl)
- French (fr)
- German (de)
- Greek (el)
- Indonesian (id)
- Italian (it)
- Japanese (ja)
- Korean (ko)
- Minionese (mi)
- Persian (fa)
- Polish (pl)
- Russian (ru)
- Simplified Chinese (zh_cn)
- Singaporean Mandarin (zh_sg)
- Spanish (es)
- Swedish (sv)
- Traditional Chinese (zh_tw)
- Thai (th)
- Turkish (tr)
- Ukrainian (uk)
- Vietnamese (vi)
- Check [Contributing](#-contributing) if you wish to help add more languages!
- For languages please use [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) two letter format
