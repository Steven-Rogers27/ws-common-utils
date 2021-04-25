/**
 * 让容器中的内容滚动到容器顶部，兼容IE
 * 
 * @param {string} selector CSS选择器 
 * @param {string} behavior 滚动效果，默认为'auto'
 */
export default function scrollToTop(selector: string, behavior: 'auto' | 'smooth' | undefined = 'auto'): void {
	const container = document.querySelector(selector) as Element;
	if (!container) return;
	if (container.scrollTo) {
		container.scrollTo({top: 0, behavior,});
	} else {
    // scrollTo api在IE中不支持，改用scrollTop
		container.scrollTop = 0;
	}
}
