/**
 * 对key和value均为字符串的对象进行比较是否相等
 *
 * @param {object} o1
 * @param {object} o2
 */
export function compareObjects(
	o1: Record<string, string | undefined>,
	o2: Record<string, string | undefined>,
): boolean {
	if (typeof o1 !== 'object' || typeof o2 !== 'object') {
		return false;
	}
	if (o1 === null && o1 === o2) {
		return true;
	}
	const o1Keys: string[] = Reflect.ownKeys(o1) as string[];
	for (const k of o1Keys) {
		if (o1[k] !== o2[k]) {
			return false;
		}
	}
	return true;
}