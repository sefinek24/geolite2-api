const https = require('https');
const { name, version, devDependencies } = require('./package.json');

// Define the base URL and API path for the GeoIP service.
const API_BASE_URL = 'api.sefinek.net';
const API_PATH = '/api/v2/geoip/';

// Define the headers for the HTTP request.
const headers = {
	'User-Agent': `${name}/${version} (+https://github.com/sefinek24/geoip2-api) ${process.env.JEST_WORKER_ID === undefined ? '' : `jest/${devDependencies.jest.replace('^', '')}`}`,
	'Accept': 'application/json',
	'Cache-Control': 'no-cache',
	'CF-IPCountry': 'false',
	'CF-Visitor': '{"scheme":"https"}',
	'Connection': 'keep-alive',
	'DNT': '1',
	'Pragma': 'no-cache',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'X-Content-Type-Options': 'nosniff',
	'X-Frame-Options': 'DENY',
	'X-XSS-Protection': '1; mode=block',
};

const makeRequest = ip => {
	return new Promise((resolve, reject) => {
		const options = {
			hostname: API_BASE_URL,
			path: API_PATH + ip,
			method: 'GET',
			headers,
		};

		const req = https.request(options, res => {
			let data = '';

			res.on('data', chunk => {
				data += chunk;
			});

			res.on('end', () => {
				try {
					resolve(JSON.parse(data));
				} catch (err) {
					reject(err);
				}
			});
		});

		req.on('error', err => {
			reject(err);
		});

		req.end();
	});
};

// Export the makeRequest function for external use.
module.exports = { get: makeRequest };