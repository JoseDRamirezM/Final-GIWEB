import React from 'react';
import Card from 'react-bootstrap/Card';

const Tweets = ({ tweets }) => {
    if (!tweets) {
        return null;
    }

    return (
        <div className="col">
          {tweets.map((tweet) => (
            <div className="row" key={tweet._id}>
              <Card style={{ margin: 1 + "em", marginLeft: 0}}>
                <Card.Body>
                  <Card.Title>{tweet.author}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {String(tweet.date).substring(0, 10)}
                  </Card.Subtitle>
                  <Card.Text>{tweet.content}</Card.Text>
                  <Card.Footer className="text-muted">{tweet.type}</Card.Footer>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
    );
};

export default Tweets;
