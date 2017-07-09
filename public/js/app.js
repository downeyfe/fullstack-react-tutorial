const Product = React.createClass({
    handleUpVote: function () {
        this.props.onVote(this.props.id);
    },

    render: function () {
        return (
            <div className='item'>
                <div className='image'>
                    <img src={this.props.productImageUrl}/>
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a onClick={this.handleUpVote}>
                            <i className='large caret up icon'>&nbsp;</i>
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
                        />
                    </div>
                </div>
            </div>
        );
    }
});

const ProductList = React.createClass({
    getInitialState: function () {
        return {
            products: [],
        };
    },

    updateState: function () {
        const products = Seed.products.sort((a, b) => b.votes - a.votes);
        this.setState({ products: products });
    },

    componentDidMount: function () {
        this.updateState();
    },

    handleProductUpVote: function (productId) {
        Seed.products.find(element => element.id === productId).votes++;

        this.updateState();
    },

    render: function () {
        const products = this.state.products.map(product => {
            return (
                <div className='ui items' key={`product-${product.id}`}>
                    <Product
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        url={product.url}
                        votes={product.votes}
                        submitterAvatarUrl={product.submitterAvatarUrl}
                        productImageUrl={product.productImageUrl}
                        onVote={this.handleProductUpVote}
                    />
                </div>
            );
        });

        return (
            <div className='ui items'>
                {products}
            </div>
        );
    }
});

ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
);