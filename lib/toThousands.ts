/**
 * @description 数字格式处理，888,923,344
 * @param {number} num
 * @returns {string}
 */
export default function toThousands(num: number): string {
	return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}