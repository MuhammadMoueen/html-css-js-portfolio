# Currency & Crypto Converter

A modern currency and cryptocurrency converter built with plain HTML, CSS, and JavaScript.

## Why this project belongs on GitHub

This project is a strong portfolio piece because it demonstrates:
- Real-world API integration with fiat and crypto rate providers
- Clean UI state handling and responsive user interaction
- Error handling and fallback logic when external services fail
- A polished front-end experience without using frameworks

It shows that you can build a useful tool with only vanilla web technologies and connect it to live data.

## What this app does

- Converts between fiat currencies like USD, PKR, EUR, GBP, INR, JPY, and more
- Converts between cryptocurrencies and fiat currencies
- Converts between two cryptocurrencies by comparing USD values
- Displays icons for selected fiat currencies and cryptocurrencies
- Shows conversion results in a readable format with the last updated time

## Features

- Currency and crypto mode toggle
- Live API-driven conversion rates
- Fallback fiat rates if the primary API fails
- Meaningful error messages when conversion is unavailable
- Dynamic icon loading for flags and crypto logos

## How it works

- `api.js`:
  - Uses the Frankfurter API for fiat-to-fiat conversion rates
  - Uses CoinGecko for cryptocurrency prices
  - Includes a fallback fiat rate table for offline or failed requests

- `crypto.js`:
  - Maps crypto symbols to CoinGecko IDs
  - Provides a reliable public CDN source for crypto icons

- `script.js`:
  - Controls UI state and mode switching
  - Loads options for both currency and crypto converters
  - Calls API functions and formats conversion output

- `ui.js`:
  - Handles DOM updates, button state, toast notifications, and formatting

## How to use

1. Open `index.html` in your browser.
2. Enter the amount to convert.
3. Choose the source and target currency/crypto.
4. Click **Convert**.

## Files

- `index.html` — main app structure
- `style.css` — styling and layout
- `script.js` — converter logic and app flow
- `api.js` — external API calls and fallback logic
- `crypto.js` — crypto mappings and icon provider
- `codes.js` — fiat currency codes and country mappings
- `ui.js` — DOM helpers, notifications, and formatting

## Why this is a strong GitHub project

This repository clearly communicates a real app idea, includes useful documentation, and shows your ability to:
- Build a front-end application from scratch
- Integrate multiple APIs
- Handle live data and network errors gracefully
- Present a strong UI with icons and responsive selection behavior

Feel free to add this to your GitHub profile to highlight your JavaScript and front-end skills.