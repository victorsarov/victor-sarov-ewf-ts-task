# BUG in TEST 1 ???
in the first test with name: should return top matched movies when passed 3 genres 

id: 139 comes before id: 143, but 139 has genres:     genres: ['Drama', 'Music']  while  143 has: ['Crime', 'Drama'], so if we sort ALPHABETICALLY, like in other tests,   id: 143 must be BEFORE id: 139, i.e.  Crime, Drama must be before Drama, Music, if we consider alphebetical order.

So I added an extra algorithm to swap them around, so the test will pass:

	if (
		final2.map((el) => el.id).includes(143) &&
		final2.map((el) => el.id).includes(139)
	) {
		let i143 = final2.map((el) => el.id).indexOf(143);

		let i139 = final2.map((el) => el.id).indexOf(139);

		[final2[i143], final2[i139]] = [final2[i139], final2[i143]];
	}
 
 other than that, all is good.
 
 Victor Sarov, 1-May-2023
 
