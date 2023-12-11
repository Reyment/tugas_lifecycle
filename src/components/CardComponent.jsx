import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'

export default class CardComponent extends Component {
    state = {
        data: []

    }

    async componentDidMount() {
        try {
            const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=1e5350f1eca641e7a5e9e107631fdc33')
            const data = await response.json()
            console.log(data)

        } catch (err) {
            console.log(err)
        }

    }


    render() {
        const { data } = this.state

        return (
            <>
                {data.map((item) => {
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title></Card.Title>

                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                })}

            </>

        )
    }
}
