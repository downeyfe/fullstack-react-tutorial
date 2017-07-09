const Product = React.createClass({
    render: function () {
        return (
            <div className='item'>
                <div className='image'>
                    <img src={this.props.productImageUrl}/>
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a>
                            <i className='large caret up icon'></i>
                        </a>
                        {this.props.votes}
                    </div>
                    <div className='description'>
                        <a href={this.props.url}>
                            {this.props.title}
                        </a>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img
                            className='ui avatar image'
                            src={this.props.submitterAvatarUrl}
                        /></div>
                </div>
            </div>
        );
    }
});

const ProductList = React.createClass({
    render: function () {
        const product = Seed.products[0];

        return (
            <div className='ui items'>
                <Product
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    votes={product.votes}
                    submitterAvatarUrl={product.submitterAvatarUrl}
                    productImageUrl={product.productImageUrl}
                />
            </div>
        );
    }
});

ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
);