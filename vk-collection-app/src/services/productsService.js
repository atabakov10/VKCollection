const baseUrl = 'https://localhost:7172/api';

export const getAllProducts= async () => {
    const response = await fetch(`${baseUrl}/Product`);
    const result = await response.json();

    return result;
};

export const getOneProduct= async (productId) => {
    const response = await fetch(`${baseUrl}/Product/${productId}`);
    const result = await response.json();

    return result;
}