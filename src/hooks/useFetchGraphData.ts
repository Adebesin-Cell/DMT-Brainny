import { useQuery } from "@tanstack/react-query";

type ResponseData = {
	prices: [number, number][];
	market_caps: [number, number][];
	total_volumes: [number, number][];
};

/**
/**
 * Fetches graph data from the API.
 */
const fetchGraphData = async () => {
	const url =
		"https://api.coingecko.com/api/v3/coins/everipedia/market_chart?vs_currency=usd&days=30";

	const response = await fetch(url);
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}

	return response.json();
};

/**
 * Custom hook to fetch graph data.
 */
const useFetchGraphData = () => {
	const { data, isLoading, isError, error } = useQuery<ResponseData>({
		queryKey: ["graphData"],
		queryFn: fetchGraphData,
	});

	return { data, isLoading, isError, error };
};

export default useFetchGraphData;
