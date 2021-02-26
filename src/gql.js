const gqlQuery = (username) => {
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

const dummyProject = {
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
			Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
		},
		body: JSON.stringify({
			query: gqlQuery("nindroz"),
		}),
	});

	const ret = await projects.json();
	console.log(process.env);
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
