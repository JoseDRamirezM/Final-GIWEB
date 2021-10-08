import React, { useState, useEffect } from 'react';
import tweetsService from './Services/tweetsService';
import Tweets from './Components/Tweets';
import TweetForm from './Components/TweetForm';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
    const [tweets, setTweets] = useState([]);

    const hook = () => {
        tweetsService.get_tweets().then((tweets) => {
            setTweets(tweets);
        });
    };

    useEffect(hook, [tweets]);

    return (
        <div className="App">
            <Tab.Container defaultActiveKey="first">
                <Row>
                    <Nav justify variant="pills">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tweets</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Añadir</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <Row>
                    <Col>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Tweets tweets={tweets} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <TweetForm
                                    tweets={tweets}
                                    setTweets={setTweets}
                                />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
};

export default App;
