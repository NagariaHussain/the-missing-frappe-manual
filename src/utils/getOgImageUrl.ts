export function getOgImageUrl(path: string): string | undefined {
	let imagePath = path.replace(/^\//, '').replace(/\/$/, '') + '.png';
	return '/open-graph/' + imagePath;
}
