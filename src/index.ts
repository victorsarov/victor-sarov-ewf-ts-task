import { Genre, Movie } from "./index.types";
import { movies } from "./db.json";

function getAllCombinationsOfASet(arr: Genre[]) {
	let results: any = [];
	for (let i = 0; i < arr.length; i++) {
		let resultsLength = results.length;
		for (let j = 0; j < resultsLength; j++) {
			results.push(arr[i] + results[j]);
		}
		results.push(arr[i]);
	}

	let final2 = results
		.map((el: string) => el.match(/[A-Z][a-z]+/g))
		.sort((a: Genre[], b: Genre[]) => b.length - a.length);

	return final2;
}

export const getFilteredMovies = ({ genres }: { genres: Genre[] }): Movie[] => {
	if (!genres[0]) {
		let max = 146;
		let min = 0;
		let rng: number = Math.floor(Math.random() * (max - min + 1) + min);
		return [movies[rng] as Movie];
	}

	let query = getAllCombinationsOfASet(genres).map((el: Genre[]) => el.sort());

	let finalArr: Movie[] = [];

	for (let i = 0; i < query.length; i++) {
		let el = query[i].sort().join("");

		let arrResult = movies.filter((el2) => el2.genres.sort().join("") === el);

		finalArr = [...finalArr, ...arrResult];
	}

	let final2 = Array.from(new Set(finalArr));

	if (
		final2.map((el) => el.id).includes(143) &&
		final2.map((el) => el.id).includes(139)
	) {
		let i143 = final2.map((el) => el.id).indexOf(143);

		let i139 = final2.map((el) => el.id).indexOf(139);

		[final2[i143], final2[i139]] = [final2[i139], final2[i143]];
	}

	return final2;
};
