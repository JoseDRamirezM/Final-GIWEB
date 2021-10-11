import React, { useState, useEffect } from 'react';
import tweetsService from './Services/tweetsService';
import Tweets from './Components/Tweets';
import TweetForm from './Components/TweetForm';
import BarraNav from './Components/BarraNav';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FiltroTweets from './Components/FiltroTweets';

const App = () => {
    const [tweets, setTweets] = useState([]);
    const [filtroTipo, setFiltroTipo] = useState('todos');
    const [filtroFecha, setFiltroFecha] = useState('todas');

    const hook = () => {
        tweetsService.get_tweets().then((tweets) => {
            setTweets(tweets);
        });
    };

    useEffect(hook, []);

    if (!tweets) {
        return null;
    }

    let listaTipos = [].concat
        .apply(
            [],
            tweets.map((tweet) => {
                if (!tweet.type) {
                    return '';
                }

                return tweet.type;
            })
        )
        .concat('todos');
    listaTipos = [...new Set(listaTipos)];

    let listaFechas = [].concat
        .apply(
            [],
            tweets.map((tweet) => {
                return tweet.date.substring(0, 10);
            })
        )
        .concat('todas');
    listaFechas = [...new Set(listaFechas)];

    const filtrar = () => {
        if (filtroFecha === 'todas' && filtroTipo === 'todos') {
            return tweets;
        } else if (filtroTipo && filtroFecha === 'todas') {
            return tweets.filter((tweet) => tweet.type === filtroTipo);
        } else if (filtroFecha && filtroTipo === 'todos') {
            return tweets.filter(
                (tweet) => tweet.date.substring(0, 10) === filtroFecha
            );
        } else if (filtroFecha && filtroTipo) {
            return tweets.filter(
                (tweet) =>
                    tweet.type === filtroTipo &&
                    tweet.date.substring(0, 10) === filtroFecha
            );
        } else return tweets;
    };

    const tweets_mostrar = filtrar();

    return (
        <div className="App">
            <div className="container">
                {/*BarraNav*/}
                <BarraNav />
                <div className="row">
                    <div className="col-sm-4">
                        {/* Filtro tipos */}
                        <p className="text-primary">Tag</p>
                        <FiltroTweets
                            filtro={filtroTipo}
                            setFiltro={setFiltroTipo}
                            listaFiltros={listaTipos}
                        />
                        {/* Filtro fechas */}
                        <br />
                        <p className="text-primary">Fecha</p>
                        <FiltroTweets
                            filtro={filtroFecha}
                            setFiltro={setFiltroFecha}
                            listaFiltros={listaFechas}
                        />
                    </div>
                    <div className="col-sm-8">
                        <Tab.Container defaultActiveKey="first">
                            <Row>
                                <Nav justify variant="pills">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">
                                            Tweets
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">
                                            Añadir
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Row>
                            <Row>
                                <Col>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <Tweets tweets={tweets_mostrar} />
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
                </div>
            </div>
        </div>
    );
};

export default App;
