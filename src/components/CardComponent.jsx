import React, { Component } from 'react';
import { Button, Card, Row, Col, Spinner, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filteredData: [],
      loading: true,
      error: null,
      searchQuery: '',
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=1e5350f1eca641e7a5e9e107631fdc33'
      );
      const dataJson = await response.json();
      this.setState({
        data: dataJson.articles,
        filteredData: dataJson.articles,
        loading: false,
      });
    } catch (err) {
      this.setState({
        error: 'An error occurred while fetching data.',
        loading: false,
      });
      console.error(err);
    }
  }

  handleSearch = (event) => {
    const { data } = this.state;
    const searchQuery = event.target.value.toLowerCase();

    const filteredData = data.filter((article) =>
      article.title.toLowerCase().includes(searchQuery)
    );

    this.setState({
      filteredData,
      searchQuery,
    });
  };

  handleSearchButton = () => {
    console.log('Search button clicked');
  };

  render() {
    const { filteredData, loading, error, searchQuery } = this.state;

    if (loading) {
      return <Spinner animation="border" />;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div>
        <Form.Group className='px-5 mt-3 ' controlId="formSearch">
          <Row>
              <Form.Control
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={this.handleSearch}
              />
              <Button variant="dark" className='mt-3' onClick={this.handleSearchButton}>
                Search
              </Button>
          </Row>
        </Form.Group>
        <Row className='px-5 p-5'>
          {filteredData.map((article, index) => (
            <Col key={index} md={4} className="mb-4">
              <NewsCard article={article} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

const NewsCard = ({ article }) => {
  return (
    <Card>
      <Card.Img variant="top" src={article.urlToImage} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.description}</Card.Text>
        <Button variant="primary" href={article.url} target="_blank">
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

NewsCard.propTypes = {
  article: PropTypes.shape({
    urlToImage: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default CardComponent;
