import { useQuery } from "@tanstack/react-query";

type ResponseData = {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	prices?: any;

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	market_caps?: any;
};

const fetchGraphData = async (): Promise<ResponseData> => {
	const url =
		"https://api.coingecko.com/api/v3/coins/everipedia/market_chart?vs_currency=usd&days=30";

	const response = await fetch(url);
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}

	console.log("response", response);

	return response.json();
};

const useFetchGraphData = (): {
	data: ResponseData;
	isLoading: boolean;
	isError: boolean;
	error?: Error;
} => {
	const { data, isLoading, isError, error } = useQuery<ResponseData>({
		queryKey: ["graphData"],
		queryFn: fetchGraphData,
	});

	console.log({ data, isLoading, isError, error });
	return { data, isLoading, isError, error };
};

export default useFetchGraphData;
