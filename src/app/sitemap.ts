import { MetadataRoute } from "next";

const hostUrl: string =
	process.env.NEXT_PUBLIC_WEBSITE_URL ??
	"https://multiformvalidator.netlify.app";

function generateJsMaps(): MetadataRoute.Sitemap {
	const prefix: string = "documentation/js/functions";

	const functions: string[] = [
		"cnpjIsValid",
		"cpfIsValid",
		"getOnlyEmail",
		"identifyFlagCard",
		"isAscii",
		"isBase64",
		"isCEP",
		"isCreditCardValid",
		"isDate",
		"isDecimal",
		"isEmail",
		"isEmpty",
		"isMACAddress",
		"isMD5",
		"isNumber",
		"isPort",
		"isPostalCode",
		"isTime",
		"isValidAudio",
		"isValidImage",
		"isValidPdf",
		"isValidTxt",
		"isValidVideo",
		"passwordStrengthTester",
		"validateBRPhoneNumber",
		"validateEmail",
		"validateName",
		"validatePassportNumber",
		"validatePassword",
		"validatePhoneNumber",
		"validateSurname",
		"validateTextarea",
		"validateUsername",
		"validateUSPhoneNumber",
	];

	return functions.map((func) => ({
		url: `${hostUrl}/${prefix}/${func}`,
		lastModified: new Date(),
		changeFrequency: "monthly",
		priority: 0.9,
		alternates: {
			languages: {
				en: `${hostUrl}/en/${prefix}/${func}`,
				pt: `${hostUrl}/pt/${prefix}/${func}`,
				ar: `${hostUrl}/ar/${prefix}/${func}`,
				de: `${hostUrl}/de/${prefix}/${func}`,
				es: `${hostUrl}/es/${prefix}/${func}`,
				fr: `${hostUrl}/fr/${prefix}/${func}`,
				it: `${hostUrl}/it/${prefix}/${func}`,
				ja: `${hostUrl}/ja/${prefix}/${func}`,
				nl: `${hostUrl}/nl/${prefix}/${func}`,
				ru: `${hostUrl}/ru/${prefix}/${func}`,
				tr: `${hostUrl}/tr/${prefix}/${func}`,
				zh: `${hostUrl}/zh/${prefix}/${func}`,
			},
		},
	}));
}

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: hostUrl,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
			alternates: {
				languages: {
					en: `${hostUrl}/en`,
					pt: `${hostUrl}/pt`,
					ar: `${hostUrl}/ar`,
					de: `${hostUrl}/de`,
					es: `${hostUrl}/es`,
					fr: `${hostUrl}/fr`,
					it: `${hostUrl}/it`,
					ja: `${hostUrl}/ja`,
					nl: `${hostUrl}/nl`,
					ru: `${hostUrl}/ru`,
					tr: `${hostUrl}/tr`,
					zh: `${hostUrl}/zh`,
				},
			},
		},
		{
			url: `${hostUrl}/documentation`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.6,
			alternates: {
				languages: {
					en: `${hostUrl}/en/documentation`,
					pt: `${hostUrl}/pt/documentation`,
					ar: `${hostUrl}/ar/documentation`,
					de: `${hostUrl}/de/documentation`,
					es: `${hostUrl}/es/documentation`,
					fr: `${hostUrl}/fr/documentation`,
					it: `${hostUrl}/it/documentation`,
					ja: `${hostUrl}/ja/documentation`,
					nl: `${hostUrl}/nl/documentation`,
					ru: `${hostUrl}/ru/documentation`,
					tr: `${hostUrl}/tr/documentation`,
					zh: `${hostUrl}/zh/documentation`,
				},
			},
		},
		{
			url: `${hostUrl}/documentation/py`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
			alternates: {
				languages: {
					en: `${hostUrl}/en/documentation/py`,
					pt: `${hostUrl}/pt/documentation/py`,
					ar: `${hostUrl}/ar/documentation/py`,
					de: `${hostUrl}/de/documentation/py`,
					es: `${hostUrl}/es/documentation/py`,
					fr: `${hostUrl}/fr/documentation/py`,
					it: `${hostUrl}/it/documentation/py`,
					ja: `${hostUrl}/ja/documentation/py`,
					nl: `${hostUrl}/nl/documentation/py`,
					ru: `${hostUrl}/ru/documentation/py`,
					tr: `${hostUrl}/tr/documentation/py`,
					zh: `${hostUrl}/zh/documentation/py`,
				},
			},
		},
		{
			url: `${hostUrl}/documentation/js`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
			alternates: {
				languages: {
					en: `${hostUrl}/en/documentation/js`,
					pt: `${hostUrl}/pt/documentation/js`,
					ar: `${hostUrl}/ar/documentation/js`,
					de: `${hostUrl}/de/documentation/js`,
					es: `${hostUrl}/es/documentation/js`,
					fr: `${hostUrl}/fr/documentation/js`,
					it: `${hostUrl}/it/documentation/js`,
					ja: `${hostUrl}/ja/documentation/js`,
					nl: `${hostUrl}/nl/documentation/js`,
					ru: `${hostUrl}/ru/documentation/js`,
					tr: `${hostUrl}/tr/documentation/js`,
					zh: `${hostUrl}/zh/documentation/js`,
				},
			},
		},
		{
			url: `${hostUrl}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.6,
			alternates: {
				languages: {
					en: `${hostUrl}/en/about`,
					pt: `${hostUrl}/pt/about`,
					ar: `${hostUrl}/ar/about`,
					de: `${hostUrl}/de/about`,
					es: `${hostUrl}/es/about`,
					fr: `${hostUrl}/fr/about`,
					it: `${hostUrl}/it/about`,
					ja: `${hostUrl}/ja/about`,
					nl: `${hostUrl}/nl/about`,
					ru: `${hostUrl}/ru/about`,
					tr: `${hostUrl}/tr/about`,
					zh: `${hostUrl}/zh/about`,
				},
			},
		},
		{
			url: `${hostUrl}/terms`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.3,
			alternates: {
				languages: {
					en: `${hostUrl}/en/terms`,
					pt: `${hostUrl}/pt/terms`,
					ar: `${hostUrl}/ar/terms`,
					de: `${hostUrl}/de/terms`,
					es: `${hostUrl}/es/terms`,
					fr: `${hostUrl}/fr/terms`,
					it: `${hostUrl}/it/terms`,
					ja: `${hostUrl}/ja/terms`,
					nl: `${hostUrl}/nl/terms`,
					ru: `${hostUrl}/ru/terms`,
					tr: `${hostUrl}/tr/terms`,
					zh: `${hostUrl}/zh/terms`,
				},
			},
		},
		{
			url: `${hostUrl}/privacity-polices`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.3,
			alternates: {
				languages: {
					en: `${hostUrl}/en/privacity-polices`,
					pt: `${hostUrl}/pt/privacity-polices`,
					ar: `${hostUrl}/ar/privacity-polices`,
					de: `${hostUrl}/de/privacity-polices`,
					es: `${hostUrl}/es/privacity-polices`,
					fr: `${hostUrl}/fr/privacity-polices`,
					it: `${hostUrl}/it/privacity-polices`,
					ja: `${hostUrl}/ja/privacity-polices`,
					nl: `${hostUrl}/nl/privacity-polices`,
					ru: `${hostUrl}/ru/privacity-polices`,
					tr: `${hostUrl}/tr/privacity-polices`,
					zh: `${hostUrl}/zh/privacity-polices`,
				},
			},
		},
		{
			url: `${hostUrl}/info`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
			alternates: {
				languages: {
					en: `${hostUrl}/en/info`,
					pt: `${hostUrl}/pt/info`,
					ar: `${hostUrl}/ar/info`,
					de: `${hostUrl}/de/info`,
					es: `${hostUrl}/es/info`,
					fr: `${hostUrl}/fr/info`,
					it: `${hostUrl}/it/info`,
					ja: `${hostUrl}/ja/info`,
					nl: `${hostUrl}/nl/info`,
					ru: `${hostUrl}/ru/info`,
					tr: `${hostUrl}/tr/info`,
					zh: `${hostUrl}/zh/info`,
				},
			},
		},
		{
			url: `${hostUrl}/news`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.2,
		},
		...generateJsMaps(),
	];
}
