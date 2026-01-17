const API_BASE_URL = 'http://localhost:8080';

export interface ConversionParams {
  from: string;
  to: string;
  amount: number;
}

export const convertCurrency = async (
  from: string,
  to: string,
  amount: number
): Promise<number> => {
  const params = new URLSearchParams({
    from: from.toUpperCase(),
    to: to.toUpperCase(),
    amount: amount.toString(),
  });

  const response = await fetch(`${API_BASE_URL}?${params.toString()}`);

  if (!response.ok) {
    throw new Error('Failed to convert currency');
  }

  return response.json();
};
