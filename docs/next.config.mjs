/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "img.shields.io",
				port: "",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "badge.fury.io",
				port: "",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "cdn.buymeacoffee.com",
				port: "",
				pathname: "**",
			},
		],
	},
	output: process.env.NODE_ENV === "production" ? "export" : undefined,
	distDir: process.env.NODE_ENV === "production" ? "page" : undefined,
	basePath:
		process.env.NODE_ENV === "production" ? "/multiform-validator" : undefined,
};

export default nextConfig;
