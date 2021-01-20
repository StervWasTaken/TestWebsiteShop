import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    { id: 1, name: 'Shoes', description: 'Shoes', price: '$10', image: 'https://static01.nyt.com/images/2020/02/25/well/PHYSED-SHOES1/merlin_168154896_a69879b8-d43a-40d0-8297-dd7086d7d784-mobileMasterAt3x.jpg' },
    { id: 2, name: 'iPad 8th Gen', description: 'An iPad from apple', price: '$100', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-2020-hero-landing?wid=744&hei=1212&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1598913494000' },
];

const Products = () => {
    return (
        <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                    </Grid>
            ))}
        </Grid>
    </main>
    );
}

export default Products;