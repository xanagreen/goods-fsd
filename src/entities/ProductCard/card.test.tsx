import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductCard from '.';

describe('ProductCard', () => {
  const product = {
    name: 'Test Product',
    price: 10,
    img: 'test-image.jpg',
    id: 1,
  };

  test('renders product details correctly', () => {
    render(<ProductCard {...product} />);

    const nameElement = screen.getByText(product.name);
    const priceElement = screen.getByText(`${product.price} $`);
    const imgElement = screen.getByAltText(product.name);

    expect(nameElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
  });
});
