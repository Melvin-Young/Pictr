import {delay,formatCommaDelimitedString, formatSpaceDelimitedString } from '../utils';

describe('Util functions', () => {
	it('should delay execution of functions passed into delay', () => {
		var hasExecuted;

		setTimeout(() => {
			hasExecuted = false
		}, 500, hasExecuted);

		let result = new Promise((resolve, reject) => {
			delay(() => {
				resolve(!hasExecuted);
			}, 2000)
		});
		expect(result).resolves.toEqual(true);
		});

		it('should handle search queries with no commas', () => {
			const dummyText = ' Lorem ipsum dolor sit amet consectetur adipisicing elit ';
			const result = 'Lorem,ipsum,dolor,sit,amet,consectetur,adipisicing,elit';

			expect(formatSpaceDelimitedString(dummyText)).toEqual(result);
		});

		it('should handle search queries with commas', () => {
			const dummyText = ' Lorem,ipsum,dolor,sit,amet,consectetur,adipisicing,elit ';
			const result = 'Lorem,ipsum,dolor,sit,amet,consectetur,adipisicing,elit';

			expect(formatCommaDelimitedString(dummyText)).toEqual(result);
		});

		it('should handle search queries with commas and spaces', () => {
			const dummyText = ' Lorem, ipsum, dolor, sit, amet, consectetur, adipisicing, elit ';
			const result = 'Lorem,ipsum,dolor,sit,amet,consectetur,adipisicing,elit';

			expect(formatCommaDelimitedString(dummyText)).toEqual(result);
		});
});
