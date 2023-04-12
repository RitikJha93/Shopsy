import { Helmet } from "react-helmet";

const Meta = ({ title, description, keyword }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keyword} />

            </Helmet>
        </div>
    )
}

Meta.defaultProps = {
    title: 'Welcome to Shopsy',
    description: 'Buy the best electronic products at cheapest price',
    keyword : 'electronics,cheapest electronic,buy electronics'
}
export default Meta