import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import data from '../utils/data';

export default function Home() {
	// console.log('data: ', data);
	return (
		<Layout title="Home Page">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{data.products.map((product) => (
					<ProductItem
						product={product}
						key={product.slug}
					></ProductItem>
				))}
			</div>
		</Layout>
	);
}
