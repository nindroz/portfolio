export const gqlQuery = (username) => {
	return `query {
	repositoryOwner(login: "${username}") {
	  ... on ProfileOwner {
		 pinnedItemsRemaining
		 itemShowcase {
			items(first: 6) {
			  edges {
				 node {
					... on Repository {
					  name
					  description
					  url
					  primaryLanguage {
						 name
					  }
					}
				 }
			  }
			}
		 }
	  }
	}
 }`;
};

export const dummyProject = {
	node: {
		url: "https://google.com",
		name: "Google",
		primaryLanguage: {
			name: "Go",
		},
		description: "Google.com",
	},
};

export async function endpoint() {
	const projects = await fetch("https://api.github.com/graphql", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Bearer  24464a5871453ad710749bcbe59ace775776b080`,
		},
		body: JSON.stringify({
			query: gqlQuery("nindroz"),
		}),
	});

	const ret = await projects.json();
	// console.log({
	// 	props: {
	// 		projects:
	// 			ret.data === undefined
	// 				? process.env.NODE_ENV === "production"
	// 					? []
	// 					: Array.from({ length: 6 }).map(() => dummyProject)
	// 				: ret.data.repositoryOwner.itemShowcase.items.edges,
	// 	},
	// });
	return {
		props: {
			projects:
				ret.data === undefined
					? process.env.NODE_ENV === "production"
						? []
						: Array.from({ length: 6 }).map(() => dummyProject)
					: ret.data.repositoryOwner.itemShowcase.items.edges,
		},
	};
}
