import React from 'react';
import Card from 'react-bootstrap/Card';

const Tweets = ({ tweets }) => {
    if (!tweets) {
        return null;
    }

    return (
        <div>
            {tweets.map((tweet) => (
                <div key={tweet._id}>
                    <Card style={{ width: '50' }}>
                        <Card.Body>
                            <Card.Title>{tweet.author}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                {String(tweet.date).substring(0, 10)}
                            </Card.Subtitle>
                            <Card.Text>{tweet.content}</Card.Text>
                            <Card.Footer className="text-muted">
                                {tweet.type}
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default Tweets;
